// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `dXt` / `db` — meta on Apple platforms, else ctrl.

const APPLE_PLATFORM_RE = /Mac|iPhone|iPad|iPod/;

export function isModifiedClick(event: {
  ctrlKey?: boolean;
  metaKey?: boolean;
}): boolean {
  return APPLE_PLATFORM_RE.test(navigator.platform)
    ? !!event.metaKey
    : !!event.ctrlKey;
}
