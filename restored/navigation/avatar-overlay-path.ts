// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `KHn` companion for export `N5`.

export const AVATAR_OVERLAY_PATH = "/avatar-overlay";

/** True when pathname or initialRoute (sans query) is the avatar overlay. */
export function isAvatarOverlayRoute(input: {
  pathname: string;
  initialRoute: string | null | undefined;
}): boolean {
  return (
    input.pathname === AVATAR_OVERLAY_PATH ||
    input.initialRoute?.split("?")[0] === AVATAR_OVERLAY_PATH
  );
}
