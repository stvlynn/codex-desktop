// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tEr` companion for accelerator labeling.

/** True when `navigator.platform` starts with Linux. */
export function isLinuxPlatform(): boolean {
  return typeof navigator === "undefined"
    ? false
    : (navigator.platform ?? "").startsWith("Linux");
}
