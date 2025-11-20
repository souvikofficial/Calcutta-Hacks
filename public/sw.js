/* Calcutta Hacks Service Worker v1
 * Caches static assets (cache-first) and pages (network-first fallback to cache)
 */

const STATIC_CACHE = 'static-v1';
const PAGE_CACHE = 'pages-v1';
const STATIC_EXTENSIONS = [
  '.js','.css','.svg','.png','.jpg','.jpeg','.gif','.webp','.woff','.woff2','.ttf'
];

self.addEventListener('install', (event) => {
  // Pre-cache the root HTML; assets are hashed and will be cached on demand
  event.waitUntil(
    caches.open(PAGE_CACHE).then(cache => cache.add('/'))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter(k => ![STATIC_CACHE, PAGE_CACHE].includes(k)).map(k => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

function isStaticAsset(request) {
  const url = new URL(request.url);
  return STATIC_EXTENSIONS.some(ext => url.pathname.endsWith(ext)) || url.pathname.startsWith('/assets/');
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  if (isStaticAsset(request)) {
    // Cache-first strategy for static assets
    event.respondWith((async () => {
      const cache = await caches.open(STATIC_CACHE);
      const cached = await cache.match(request);
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) cache.put(request, response.clone());
      return response;
    })());
    return;
  }

  if (request.mode === 'navigate') {
    // Network-first for HTML navigation
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request);
        const cache = await caches.open(PAGE_CACHE);
        cache.put(request, fresh.clone());
        return fresh;
      } catch (err) {
        const cache = await caches.open(PAGE_CACHE);
        const cached = await cache.match(request) || await cache.match('/');
        return cached || Response.error();
      }
    })());
  }
});
