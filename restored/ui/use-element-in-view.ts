// Restored from ref/webview/assets/use-element-in-view-Dk6CPv3J.js
// Sync whether a target element intersects its scroll container.
// Stage 3: Ivt/Lvt → react runtime; n/s ESM inits dropped.

import { useSyncExternalStore } from "react";
export type UseElementInViewArgs = {
  container: Element | null;
  target: Element | null;
};
function noopSubscribe(): () => void {
  return () => {};
}

/**
 * Subscribe to scroll/resize on `container`/`target` and report intersection
 * (export `n` / `useElementInViewN`).
 */
export function useElementInView({
  container,
  target,
}: UseElementInViewArgs): boolean {
  const subscribe = (onStoreChange: () => void) => {
    if (!container || !target) return noopSubscribe();
    const handler = () => {
      onStoreChange();
    };
    container.addEventListener("scroll", handler, {
      passive: true,
    });
    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(handler);
    if (resizeObserver) {
      resizeObserver.observe(container);
      resizeObserver.observe(target);
    }
    return () => {
      container.removeEventListener("scroll", handler);
      resizeObserver?.disconnect();
    };
  };
  const getSnapshot = () => {
    if (!container || !target) return true;
    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    return (
      targetRect.bottom > containerRect.top &&
      targetRect.top < containerRect.bottom
    );
  };
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

/** No-op Rolldown ESM init retained for graph compatibility (export `t`). */
export function ensureUseElementInViewInit(): void {}
