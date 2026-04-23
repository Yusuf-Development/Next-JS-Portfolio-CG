"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const tabs = [
  { label: "Projects", target: "projects" },
  { label: "About", target: "about" },
  { label: "Contact", target: "contact" },
];

export function StickyTabNav() {
  const [activeId, setActiveId] = useState(tabs[0].target);
  const [isSticky, setIsSticky] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

  // Sticky detection using IntersectionObserver on a sentinel element
  useEffect(() => {
    const sentinel = barRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Scroll-spy: track which section is in view
  useEffect(() => {
    const sectionEls = tabs
      .map((t) => document.getElementById(t.target))
      .filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    const onScroll = () => {
      if (isClickScrolling.current) return;

      // If scrolled to bottom, activate the last section
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      if (atBottom) {
        setActiveId(tabs[tabs.length - 1].target);
        return;
      }

      const offset = 100; // account for sticky bar height + margin
      let current = tabs[0].target;

      for (const section of sectionEls) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset) {
          current = section.id;
        }
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = useCallback((target: string) => {
    setActiveId(target);
    isClickScrolling.current = true;

    const el = document.getElementById(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });

      // Re-enable scroll-spy after scroll settles
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  }, []);

  return (
    <>
      {/* Sentinel — when this scrolls out of view, bar becomes sticky */}
      <div ref={barRef} className="h-0 w-full" />

      {/* Spacer to prevent layout jump when bar becomes fixed */}
      {isSticky && <div className="h-[90px] w-full" />}

      {/* Tab bar */}
      <nav
        role="tablist"
        className={`z-20 mx-auto flex h-[90px] w-full max-w-[1280px] list-none transition-shadow duration-200 ${
          isSticky
            ? "fixed top-0 left-1/2 -translate-x-1/2 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            : "shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        }`}
        style={{ backgroundColor: "rgb(247, 247, 247)" }}
      >
        {tabs.map((tab) => {
          const isActive = tab.target === activeId;
          return (
            <button
              key={tab.target}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleClick(tab.target)}
              className={`flex flex-1 cursor-pointer items-center justify-center border-none text-[20px] transition-colors duration-200 ${
                isActive
                  ? "bg-cg-ocean font-bold text-white"
                  : "bg-transparent font-normal text-cg-black hover:bg-black/5"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
    </>
  );
}
