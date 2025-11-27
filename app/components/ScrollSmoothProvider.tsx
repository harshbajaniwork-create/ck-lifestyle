"use client";

import { useRef, type ReactNode, useEffect, useState } from "react";
import { setGlobalSmoother } from "../lib/utils";

const ScrollSmoothProvider = ({ children }: { children: ReactNode }) => {
  const smoothWrapperRef = useRef<HTMLDivElement | null>(null);
  const smoothContentRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Dynamically import GSAP only on client side
    const initScrollSmoother = async () => {
      const { gsap } = await import("gsap");
      const { ScrollSmoother } = await import("gsap/ScrollSmoother");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      // Register plugins
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      if (!smoothWrapperRef.current || !smoothContentRef.current) return;

      // Create ScrollSmoother instance
      const smootherInstance = ScrollSmoother.create({
        wrapper: smoothWrapperRef.current,
        content: smoothContentRef.current,
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: true,
      });

      // Set global reference
      setGlobalSmoother(smootherInstance);

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();

      // Handle route changes
      const refreshSmoother = () => {
        setTimeout(() => {
          smootherInstance?.refresh();
          ScrollTrigger.refresh();
        }, 100);
      };

      window.addEventListener("popstate", refreshSmoother);
      window.addEventListener("hashchange", refreshSmoother);

      return () => {
        window.removeEventListener("popstate", refreshSmoother);
        window.removeEventListener("hashchange", refreshSmoother);
        smootherInstance?.kill();
        setGlobalSmoother(null);
      };
    };

    const cleanup = initScrollSmoother();

    return () => {
      cleanup.then((fn) => fn?.());
    };
  }, [isMounted]);

  // Render simple wrapper on server, full functionality on client
  return (
    <div ref={smoothWrapperRef} id="smooth-wrapper">
      <div ref={smoothContentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default ScrollSmoothProvider;
