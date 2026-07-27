// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `db`/`dXt`/`fXt` — export `$tt`.

const APPLE_PLATFORM_RE = /Mac|iPhone|iPad|iPod/;

/** Primary modifier for the current platform (meta on Apple, ctrl elsewhere). */
export function isPrimaryModifierPressed(event: {
  ctrlKey: boolean;
  metaKey: boolean;
}): boolean {
  return APPLE_PLATFORM_RE.test(
    typeof navigator !== "undefined" ? navigator.platform : "",
  )
    ? event.metaKey
    : event.ctrlKey;
}
