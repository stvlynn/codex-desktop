// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Section expand / autoCollapse atoms (`$E` / `SJo` — `bJo` / `xJo` / `hT`).
//
// `bJo` = Fm(keyFactory, null) — localStorage-persisted expand boolean.
// `xJo` = Da(hT, () => "pending") — RouteScope-timed autoCollapse status.

import {
  appScopeAtom,
  createAppScopeFamilySignal,
  createPersistedAppScopeFamilySignal,
  routeScopeAtom,
  type AppScopeFamilySignal,
} from "../runtime/app-scope-runtime";

/** Bundle `mJo` — timed auto-collapse delay (30s). */
export const SECTION_AUTO_COLLAPSE_MS = 30_000;

/** Bundle `hJo` — localStorage / atom key prefix. */
export const SECTION_EXPANDED_KEY_PREFIX =
  "thread-summary-panel-section-expanded-";

export type SectionAutoCollapseStatus = "canceled" | "collapsed" | "pending";

/** Bundle `bJo` key factory — expanded boolean keyed by section id. */
export function sectionExpandedStorageKey(sectionKey: string): string {
  return `${SECTION_EXPANDED_KEY_PREFIX}${sectionKey}`;
}

/**
 * Bundle `bJo` — persisted expand family (`Fm` over AppScope `Q`).
 * `null` means “no stored preference” → fall back to `!defaultCollapsed`.
 */
export const sectionExpandedAtom: AppScopeFamilySignal<boolean | null> =
  createPersistedAppScopeFamilySignal<boolean | null>(
    (key) => sectionExpandedStorageKey(String(key)),
    null,
    "sectionExpandedAtom",
  );

/**
 * Bundle `xJo` — RouteScope autoCollapse status family (`Da(hT, …)`).
 * Soft: RouteScope instance partitioning stays open; status is still
 * per-sectionKey within this process.
 */
export const sectionAutoCollapseStatusAtom: AppScopeFamilySignal<SectionAutoCollapseStatus> =
  createAppScopeFamilySignal<SectionAutoCollapseStatus>(
    routeScopeAtom,
    () => "pending",
    "sectionAutoCollapseStatusAtom",
  );

/** Re-export RouteScope brand used by `Io(hT)` callers. */
export { routeScopeAtom, appScopeAtom };

/** Bundle `$E` / `SJo` ESM init — atoms construct on import. */
export function bindThreadSummaryPanelSectionExpanded(): void {}

export function ensureThreadSummaryPanelSectionExpandedInit(): void {}

/** Legacy extractFn binder — atoms are module-level; retained for callers. */
export function setBindThreadSummaryPanelSectionExpandedPeers(
  _next: unknown,
): void {}
