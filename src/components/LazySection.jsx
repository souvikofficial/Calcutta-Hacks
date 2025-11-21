import React, { useState, useEffect, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

const LazySection = ({ factory, fallback }) => {
  const [Component, setComponent] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px', // Load 200px before it comes into view
  });

  useEffect(() => {
    if (inView && !Component) {
      factory().then((module) => {
        setComponent(() => module.default);
      });
    }
  }, [inView, Component, factory]);

  return (
    <div ref={ref} className="min-h-[10vh]">
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
