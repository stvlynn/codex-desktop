// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Tk` / export `N1` — attach a ResizeObserver callback to an element.
// Stage 3: self-contained (no shared provider); j1/Ek ESM init dropped.

import { useRef } from "react";
import { useEventCallback } from "./use-event-callback";

export type ResizeObserverCallback = (
  entry: ResizeObserverEntry,
  element: Element,
) => void;

/**
 * Returns a ref callback that observes the assigned element.
 * Bundle export `N1`.
 */
export function useResizeObserver(onResize: ResizeObserverCallback): (element: Element | null) => void {
  const callback = useEventCallback(onResize);
  const elementRef = useRef<Element | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  return useEventCallback((element: Element | null) => {
    const previous = elementRef.current;
    if (previous != null && observerRef.current != null) {
      observerRef.current.unobserve(previous);
    }
    elementRef.current = element;
    if (element == null) return;
    if (typeof ResizeObserver === "undefined") return;
    if (observerRef.current == null) {
      observerRef.current = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const target = entry.target;
          callback(entry, target);
        }
      });
    }
    observerRef.current.observe(element);
  });
}
