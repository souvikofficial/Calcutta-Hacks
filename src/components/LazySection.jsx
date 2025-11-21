import React, { useState, useEffect, Suspense, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

const LazySection = ({ factory, fallback, id }) => {
  const [Component, setComponent] = useState(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px', // Load 200px before it comes into view
  });
  const containerRef = useRef(null);
  const location = useLocation();

  // Merge refs to use both intersection observer and local ref
  const setRefs = (node) => {
    inViewRef(node);
    containerRef.current = node;
  };

  useEffect(() => {
    // Check if this section is the target of the current hash
    const isTarget = location.hash === `#${id}`;

    if ((inView || isTarget) && !Component) {
      factory().then((module) => {
        setComponent(() => module.default);
      });
    }
  }, [inView, Component, factory, location.hash, id]);

  // Auto-load component after a delay to ensure it's available for navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!Component) {
        factory().then((module) => {
          setComponent(() => module.default);
        });
      }
    }, 3000); // Load all sections 3 seconds after mount
    return () => clearTimeout(timer);
  }, [Component, factory]);

  // Scroll to section when it loads if it's the target
  useEffect(() => {
    if (Component && location.hash === `#${id}`) {
      // Timeout to ensure render and layout update
      const timer = setTimeout(() => {
        // Try to find the element by ID (which should be the inner component now)
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (containerRef.current) {
          // Fallback to container if inner ID not found
          containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [Component, location.hash, id]);

  // Only put the ID on the wrapper if the component hasn't loaded yet.
  // Once loaded, the inner component will have the ID (as per user request).
  // This prevents duplicate IDs in the DOM.
  return (
    <div ref={setRefs} id={!Component ? id : undefined} className="min-h-[10vh]">
      {Component ? (
        <Suspense fallback={fallback || null}>
          <Component />
        </Suspense>
      ) : (
        fallback || <div className="h-20" />
      )}
    </div>
  );
};

export default LazySection;
