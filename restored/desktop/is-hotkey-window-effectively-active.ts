// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Upn` / export `v7` — hotkey window counts as active when focused.

/** Bundle `Upn` / export `v7`. */
export function isHotkeyWindowEffectivelyActive(args: {
  isHotkeyWindow: boolean;
  isWindowActive: boolean | null | undefined;
}): boolean {
  return !args.isHotkeyWindow || args.isWindowActive === true;
}
