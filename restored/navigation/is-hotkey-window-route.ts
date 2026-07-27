// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Hpn` / `uS` / export `b7`.

import { isHotkeyWindowPath } from "./hotkey-window-path";
import { readWindowLocationRoute } from "./read-window-location-route";

/** True when pathname or initialRoute is the hotkey window. */
export function isHotkeyWindowRoute(input: {
  pathname: string;
  initialRoute: string | null;
}): boolean {
  return (
    isHotkeyWindowPath(input.pathname) || isHotkeyWindowPath(input.initialRoute)
  );
}

/** Current window is the hotkey-window route. */
export function isCurrentHotkeyWindowRoute(): boolean {
  return isHotkeyWindowRoute(readWindowLocationRoute());
}
