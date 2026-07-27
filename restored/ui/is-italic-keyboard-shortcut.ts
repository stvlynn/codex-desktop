// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `YYs` / export `xg`.

/** True for Cmd/Ctrl+I without Alt/Shift (italic shortcut). */
export function isItalicKeyboardShortcut(event: {
  key: string;
  metaKey: boolean;
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
}): boolean {
  return (
    event.key.toLowerCase() === "i" &&
    (event.metaKey || event.ctrlKey) &&
    !event.altKey &&
    !event.shiftKey
  );
}
