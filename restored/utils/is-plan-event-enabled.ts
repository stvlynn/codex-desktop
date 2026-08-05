// Restored from ref/webview/assets/is-plan-event-enabled-BUDpDO9_.js
// Resolve whether a plan/analytics event is enabled from override or schema defaults.

export type PlanEventEnablementDefaults = {
  __default?: {
    enabled?: boolean;
  };
};

export type PlanEventEnablementOverride = {
  enabled?: boolean;
};

/**
 * Prefer an explicit `override.enabled` boolean; otherwise fall back to
 * `defaults.__default.enabled`, defaulting to `true` when unset.
 */
export function isPlanEventEnabled(
  defaults: PlanEventEnablementDefaults | null | undefined,
  override: PlanEventEnablementOverride | null | undefined,
): boolean {
  return typeof override?.enabled === "boolean"
    ? override.enabled
    : (defaults?.__default?.enabled ?? true);
}

/** No-op Rolldown ESM init retained for graph compatibility. */
export function initIsPlanEventEnabled(): void {}
