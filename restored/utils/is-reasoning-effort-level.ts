// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jM` / export `oX`.

const REASONING_EFFORT_LEVELS = new Set([
  "none",
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
  "ultra",
]);

/** True when value is a known reasoning-effort slug. */
export function isReasoningEffortLevel(value: string): boolean {
  return REASONING_EFFORT_LEVELS.has(value);
}
