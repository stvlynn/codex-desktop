// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `abo` / export `HA` — scroll a find match into view (with rAF wait).

import { queryMatchElement } from "./thread-find-dom";

export type ScrollMatchIntoViewOptions = {
  container: ParentNode;
  matchId: string;
  includeShadowRoots?: boolean;
  scrollBehavior?: ScrollBehavior;
  signal?: AbortSignal;
  timeoutMs?: number;
};

/** Bundle `abo` / export `HA`. */
export function scrollMatchIntoView({
  container,
  matchId,
  includeShadowRoots = false,
  scrollBehavior = "smooth",
  signal,
  timeoutMs = 1500,
}: ScrollMatchIntoViewOptions): Promise<void> {
  const lookup = () =>
    queryMatchElement({ container, matchId, includeShadowRoots });
  if (signal?.aborted) return Promise.resolve();
  const existing = lookup();
  if (existing != null) {
    existing.scrollIntoView({ block: "center", behavior: scrollBehavior });
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    let rafId: number | null = null;
    let timeoutId: number | null = null;
    const cleanup = () => {
      if (rafId != null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (timeoutId != null) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
      }
      signal?.removeEventListener("abort", finish);
    };
    const finish = (el?: Element | null) => {
      cleanup();
      el?.scrollIntoView({ block: "center", behavior: scrollBehavior });
      resolve();
    };
    const tick = () => {
      if (signal?.aborted) {
        finish();
        return;
      }
      const el = lookup();
      if (el != null) {
        finish(el);
        return;
      }
      rafId = window.requestAnimationFrame(tick);
    };
    signal?.addEventListener("abort", finish, { once: true });
    timeoutId = window.setTimeout(() => finish(), timeoutMs);
    rafId = window.requestAnimationFrame(tick);
  });
}
