// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `eEr` companion for accelerator labeling.

/** True when `navigator.platform` starts with Mac. */
export function isMacPlatform(): boolean {
  return typeof navigator === "undefined"
    ? false
    : (navigator.platform ?? "").startsWith("Mac");
}
