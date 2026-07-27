// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Default automation execution environment + fallback model (`Bme` / `Vme`).

/** Default execution environment when unset (`Bme`). */
export const DEFAULT_AUTOMATION_EXECUTION_ENVIRONMENT = "worktree";

/** Preferred fallback model id for automations (`Vme`). */
export const DEFAULT_AUTOMATION_MODEL_ID = "gpt-5.3-codex";

export type AutomationExecutionEnvironment = "worktree" | "local";

/**
 * Bundle `Dme` (co-located with `Hme` / packet-004).
 * Coerce an unknown environment string to worktree/local, else default.
 */
export function normalizeAutomationExecutionEnvironment(
  value: string | null | undefined,
): AutomationExecutionEnvironment {
  return value === "worktree" || value === "local"
    ? value
    : DEFAULT_AUTOMATION_EXECUTION_ENVIRONMENT;
}
