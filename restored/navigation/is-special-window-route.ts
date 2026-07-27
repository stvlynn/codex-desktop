// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `HHn` / `Pw` / export `N5`.

import { isAvatarOverlayRoute } from "./avatar-overlay-path";
import { readWindowLocationRoute } from "./read-window-location-route";
import { isSpecialWindowPath } from "./special-window-path-patterns";

/** True when route is avatar overlay or another special window path. */
export function isSpecialWindowRoute(input: {
  pathname: string;
  initialRoute: string | null;
}): boolean {
  return (
    isAvatarOverlayRoute(input) ||
    isSpecialWindowPath(input.pathname) ||
    isSpecialWindowPath(input.initialRoute)
  );
}

/** Current window is a special overlay/dictation/hotkey route. */
export function isCurrentSpecialWindowRoute(): boolean {
  return isSpecialWindowRoute(readWindowLocationRoute());
}
