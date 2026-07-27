// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Hook entry predicates + per-event summary helpers (cd/ed/td/Qu/Zu).

import { HOOK_EVENT_NAMES } from "./hooks-constants";
import type {
  HookEntry,
  HookEventSummary,
  HookProjectBucket,
} from "./hooks-types";

/** Bundle `lqc` / export `cd` — hook needs review when untrusted or modified. */
export function hookNeedsReview(hook: HookEntry): boolean {
  return hook.trustStatus === "untrusted" || hook.trustStatus === "modified";
}

/** Bundle `bqc` — hook is actively enforced. */
export function hookIsActive(hook: HookEntry): boolean {
  return (
    hook.trustStatus === "managed" ||
    (!!hook.enabled && hook.trustStatus === "trusted")
  );
}

/** Bundle `eqc` / export `td` — count of hooks needing review. */
export function countHooksNeedingReview(hooks: HookEntry[]): number {
  return hooks.filter(hookNeedsReview).length;
}

/** Bundle `iqc` / export `Zu` — attention counts for a project bucket. */
export function computeHookAttention(entry: HookProjectBucket): {
  issueCount: number;
  needsReview: number;
} {
  return {
    issueCount: entry.warnings.length + entry.errors.length,
    needsReview: entry.hooks.filter(hookNeedsReview).length,
  };
}

/** Bundle `cqc` / export `ed` — hooks for one event, sorted by displayOrder. */
export function filterHooksByEventName(
  hooks: HookEntry[],
  eventName: string,
): HookEntry[] {
  return hooks
    .filter((hook) => hook.eventName === eventName)
    .sort((a, b) =>
      (a.displayOrder ?? 0) < (b.displayOrder ?? 0)
        ? -1
        : Number((a.displayOrder ?? 0) > (b.displayOrder ?? 0)),
    );
}

/** Bundle `$Kc` / export `Qu` — per-event active/installed/needsReview summary. */
export function summarizeHooksByEvent(hooks: HookEntry[]): HookEventSummary[] {
  return HOOK_EVENT_NAMES.map((eventName) => {
    const matched = hooks.filter((hook) => hook.eventName === eventName);
    return {
      eventName,
      active: matched.filter(hookIsActive).length,
      installed: matched.length,
      needsReview: matched.filter(hookNeedsReview).length,
    };
  });
}
