'use client';

import { useEffect, useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function LocomotiveScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  // @ts-ignore - disable type checking for LocomotiveScroll instance
  const locomotiveScrollRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    const setup = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      if (!isMounted || !scrollRef.current) return;

      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
        scrollbarContainer: false,
        getDirection: true,
        getSpeed: true,
        reloadOnContextChange: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });

      const handleResize = () => {
        locomotiveScrollRef.current?.update();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    };

    const cleanupPromise = setup();

    return () => {
      isMounted = false;
      void cleanupPromise;
      locomotiveScrollRef.current?.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}

