// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Section expand / autoCollapse atoms (`$E` / `SJo` — `bJo` / `xJo`).
//
// Soft: real `Fm`/`Da`/`hT` RouteScope jotai peers are not yet restored, so
// these helpers keep the key + timeout contracts without persistence.

/** Bundle `mJo` — timed auto-collapse delay (30s). */
export const SECTION_AUTO_COLLAPSE_MS = 30_000;

/** Bundle `hJo` — localStorage / atom key prefix. */
export const SECTION_EXPANDED_KEY_PREFIX =
  "thread-summary-panel-section-expanded-";

export type SectionAutoCollapseStatus =
  | "canceled"
  | "collapsed"
  | "pending";

/** Bundle `bJo` key factory — expanded boolean keyed by section id. */
export function sectionExpandedStorageKey(sectionKey: string): string {
  return `${SECTION_EXPANDED_KEY_PREFIX}${sectionKey}`;
}

/** Legacy extractFn binder — peers now soft; retained for stale callers. */
export function setBindThreadSummaryPanelSectionExpandedPeers(
  _next: unknown,
): void {}

/** Legacy init no-op (`$E` / `SJo`). */
export function bindThreadSummaryPanelSectionExpanded(): void {}

export function ensureThreadSummaryPanelSectionExpandedInit(): void {}
