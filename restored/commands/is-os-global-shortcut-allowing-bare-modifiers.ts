// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `LTr` / export `p1`.

/** OS-global shortcut that also allows bare modifiers. */
export function isOsGlobalShortcutAllowingBareModifiers(binding: object): boolean {
  return (
    "shortcutScope" in binding &&
    (binding as { shortcutScope?: unknown }).shortcutScope === "os-global" &&
    "allowsBareModifiers" in binding &&
    (binding as { allowsBareModifiers?: unknown }).allowsBareModifiers === true
  );
}
