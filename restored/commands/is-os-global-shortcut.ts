// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `RTr` / export `g1`.

/** True when a binding declares `shortcutScope: "os-global"`. */
export function isOsGlobalShortcut(binding: object): boolean {
  return (
    "shortcutScope" in binding &&
    (binding as { shortcutScope?: unknown }).shortcutScope === "os-global"
  );
}
