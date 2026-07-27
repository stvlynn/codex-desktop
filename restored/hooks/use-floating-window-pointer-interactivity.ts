// Restored from ref/webview/assets/use-floating-window-pointer-interactivity-KA_kDpzs.js
// Track whether the pointer is over interactive floating-window regions.
// Stage 3: Ivt/Lvt → react; ESM inits dropped.

import { useEffect, useEffectEvent, useState, type RefObject } from "react";

export type UseFloatingWindowPointerInteractivityArgs = {
  activationNonce?: unknown;
  floatingElementSelectors?: string[];
  includeInteractiveRegion?: boolean;
  interactiveRegionRef: RefObject<Element | null>;
  isPaused?: () => boolean;
  onInteractiveChange: (interactive: boolean) => void;
  publishInitialNonInteractive?: boolean;
  regionElementSelectors?: string[];
};

type Point = { x: number; y: number };

function isVisibleInteractiveElement(element: Element): boolean {
  const style = window.getComputedStyle(element);
  if (
    style.display === "none" ||
    style.visibility === "hidden" ||
    style.pointerEvents === "none"
  ) {
    return false;
  }
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

function pointInRect(point: Point, rect: DOMRect): boolean {
  return (
    point.x >= rect.left &&
    point.x <= rect.right &&
    point.y >= rect.top &&
    point.y <= rect.bottom
  );
}

function pointHitsElement(point: Point, element: Element): boolean {
  if (!pointInRect(point, element.getBoundingClientRect())) return false;
  return document
    .elementsFromPoint(point.x, point.y)
    .some((hit) => hit === element || element.contains(hit));
}

function probeInitialInteractive(args: {
  floatingElementSelectors: string[];
  includeInteractiveRegion: boolean;
  interactiveRegion: Element | null;
  regionElementSelectors: string[];
}): boolean | null {
  const {
    floatingElementSelectors,
    includeInteractiveRegion,
    interactiveRegion,
    regionElementSelectors,
  } = args;

  if (interactiveRegion != null) {
    if (includeInteractiveRegion && interactiveRegion.matches(":hover")) {
      return true;
    }
    for (const selector of regionElementSelectors) {
      const nodes = interactiveRegion.querySelectorAll(selector);
      for (const node of nodes) {
        if (isVisibleInteractiveElement(node) && node.matches(":hover")) {
          return true;
        }
      }
    }
  }

  for (const selector of floatingElementSelectors) {
    const nodes = document.querySelectorAll(selector);
    for (const node of nodes) {
      if (isVisibleInteractiveElement(node) && node.matches(":hover")) {
        return true;
      }
    }
  }

  return document.documentElement.matches(":hover") ? false : null;
}

/**
 * Bundle export `n` — whether the pointer is over an interactive region.
 * Returns the latest non-interactive flag for callers that mirror CSS hit-testing.
 */
export function useFloatingWindowPointerInteractivity({
  activationNonce,
  floatingElementSelectors = [],
  includeInteractiveRegion = false,
  interactiveRegionRef,
  isPaused,
  onInteractiveChange,
  publishInitialNonInteractive = true,
  regionElementSelectors = [],
}: UseFloatingWindowPointerInteractivityArgs): boolean {
  const [isNonInteractive, setIsNonInteractive] = useState(false);
  const readPaused = useEffectEvent(() => isPaused?.() ?? false);
  const publish = useEffectEvent((interactive: boolean) => {
    setIsNonInteractive(!interactive);
    onInteractiveChange(interactive);
  });
  const resetInteractive = useEffectEvent(() => {
    onInteractiveChange(true);
  });

  useEffect(() => {
    let lastInteractive: boolean | null = null;
    let lastPoint: Point | null = null;
    let latestPoint: Point | null = null;
    let rafId: number | null = null;

    const setInteractive = (interactive: boolean) => {
      if (lastInteractive !== interactive) {
        lastInteractive = interactive;
        publish(interactive);
      }
    };

    const hitTest = (point: Point): boolean => {
      const region = interactiveRegionRef.current;
      if (
        region == null ||
        (includeInteractiveRegion && pointHitsElement(point, region))
      ) {
        return true;
      }
      for (const selector of regionElementSelectors) {
        const nodes = region.querySelectorAll(selector);
        for (const node of nodes) {
          if (
            isVisibleInteractiveElement(node) &&
            pointHitsElement(point, node)
          ) {
            return true;
          }
        }
      }
      for (const selector of floatingElementSelectors) {
        const nodes = document.querySelectorAll(selector);
        for (const node of nodes) {
          if (
            isVisibleInteractiveElement(node) &&
            pointHitsElement(point, node)
          ) {
            return true;
          }
        }
      }
      return false;
    };

    const flush = () => {
      rafId = null;
      if (latestPoint == null || readPaused()) return;
      lastPoint = latestPoint;
      setInteractive(hitTest(latestPoint));
    };

    const schedule = () => {
      rafId ??= requestAnimationFrame(flush);
    };

    const onMove = (event: MouseEvent) => {
      latestPoint = { x: event.clientX, y: event.clientY };
      lastPoint = latestPoint;
      schedule();
    };

    const onRefresh = () => {
      if (lastPoint == null) return;
      latestPoint = lastPoint;
      schedule();
    };

    const onLeave = () => {
      if (!readPaused()) setInteractive(false);
    };

    const publishInitial = () => {
      if (readPaused()) return;
      const initial = probeInitialInteractive({
        floatingElementSelectors,
        includeInteractiveRegion,
        interactiveRegion: interactiveRegionRef.current,
        regionElementSelectors,
      });
      if (initial != null && (initial || publishInitialNonInteractive)) {
        setInteractive(initial);
      }
    };

    const observer = new MutationObserver(onRefresh);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onRefresh);
    window.addEventListener("scroll", onRefresh, true);
    window.addEventListener("mouseleave", onLeave);
    observer.observe(document.body, {
      attributeFilter: ["aria-hidden", "class", "hidden", "style"],
      attributes: true,
      childList: true,
      subtree: true,
    });
    publishInitial();
    const initialRaf = requestAnimationFrame(publishInitial);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onRefresh);
      window.removeEventListener("scroll", onRefresh, true);
      window.removeEventListener("mouseleave", onLeave);
      observer.disconnect();
      cancelAnimationFrame(initialRaf);
      if (rafId != null) cancelAnimationFrame(rafId);
      lastInteractive = null;
      resetInteractive();
    };
  }, [
    activationNonce,
    floatingElementSelectors,
    includeInteractiveRegion,
    interactiveRegionRef,
    publishInitialNonInteractive,
    regionElementSelectors,
  ]);

  return isNonInteractive;
}

/** Bundle export `t` — Rolldown ESM init retained as no-op. */
export function ensureUseFloatingWindowPointerInteractivityInit(): void {}
