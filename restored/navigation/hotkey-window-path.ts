// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qwe` / `Vwe` / `Hwe` companions for export `b7`.

export const HOTKEY_WINDOW_PATH = "/hotkey-window";

/** True when path equals or is nested under a prefix. */
export function pathEqualsOrUnder(value: string | null | undefined, prefix: string): boolean {
  return value ? value === prefix || value.startsWith(`${prefix}/`) : false;
}

/** True when pathname/initialRoute is under the hotkey window. */
export function isHotkeyWindowPath(value: string | null | undefined): boolean {
  return pathEqualsOrUnder(value, HOTKEY_WINDOW_PATH);
}
