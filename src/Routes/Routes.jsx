import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, ScrollRestoration, Outlet } from 'react-router-dom';

// Lazy load components
const App = lazy(() => import('../App'));
const AboutKolkata = lazy(() => import('../page/AboutKolkata'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#ebdbb9]">
    <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Root Layout Component
const RootLayout = () => (
  <>
    <ScrollRestoration />
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  </>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/about-kolkata',
        element: <AboutKolkata />,
      },
    ],
  },
]);

export default router;
