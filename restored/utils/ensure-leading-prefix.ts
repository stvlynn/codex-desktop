// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Pbe` / export `Xmt`. Companion `Rbe` = "features.".

export const FEATURES_PREFIX = "features.";

/** Ensure a feature-gate id starts with `features.`. */
export function ensureFeaturesPrefix(value: string): string {
  return value.startsWith(FEATURES_PREFIX)
    ? value
    : `${FEATURES_PREFIX}${value}`;
}
