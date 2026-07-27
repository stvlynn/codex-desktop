// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `UWs` / export `a_` (icon component bodies deferred; return stable keys).

export type ReasoningEffortIconKey = "fast" | "ultrafast";

/**
 * Resolve the reasoning-effort icon key for `fast` / `ultrafast`.
 * Bundle returns SVG components (`ics` / `scs`); callers map keys to icons.
 */
export function reasoningEffortIcon(effort: ReasoningEffortIconKey | null): ReasoningEffortIconKey | undefined {
  switch (effort) {
    case "fast":
    case "ultrafast":
      return effort;
    case null:
      return;
  }
}
