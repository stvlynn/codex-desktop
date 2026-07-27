// Restored from ref/webview/assets/thread-scroll-controller-context-value-BUNTzBse.js
// React context + hook for ThreadScrollLayout's imperative scroll controller.
// Stage 3: Lvt → react; rolldown ESM init retained as no-op.

import { createContext, use, type Context, type ReactNode } from "react";
export type ThreadScrollDistanceListener = (
  distanceFromBottomPx: number,
) => void;
export type ThreadScrollUserDistanceListener = (
  distanceFromBottomPx: number,
  previousDistanceFromBottomPx: number,
) => void;
export type ThreadScrollController = {
  addScrollListener: (listener: ThreadScrollDistanceListener) => () => void;
  addUserScrollListener: (
    listener: ThreadScrollUserDistanceListener,
  ) => () => void;
  compensateScrollToDistanceFromBottomPx: (
    distanceFromBottomPx: number,
  ) => void;
  getLastScrollDistanceFromBottomPx: () => number;
  getScrollElement: () => HTMLElement | null;
  isScrolledFromBottom: boolean;
  preserveScrollPositionForNextLayout: () => void;
  scrollToBottom: () => void;
  scrollToDistanceFromBottomPx: (
    distanceFromBottomPx: number,
    behavior: ScrollBehavior,
    source?: "system" | "user",
  ) => void;
  setFooterResizeViewportPreserveDisabled: (disabled: boolean) => void;
};

/** Bundle export `t` — context holding the scroll controller. */
export const ThreadScrollControllerContext: Context<ThreadScrollController | null> =
  createContext<ThreadScrollController | null>(null);

/**
 * Bundle export `r` — read the controller; throws outside ThreadScrollLayout.
 */
export function useThreadScrollController(): ThreadScrollController {
  const value = use(ThreadScrollControllerContext);
  if (value == null) {
    throw new Error(
      "useThreadScrollController must be used within ThreadScrollLayout",
    );
  }
  return value;
}

/** Bundle export `n` — Rolldown ESM init retained as no-op for graph parity. */
export function initThreadScrollControllerContext(): void {}
export type ThreadScrollControllerProviderProps = {
  value: ThreadScrollController;
  children?: ReactNode;
};
