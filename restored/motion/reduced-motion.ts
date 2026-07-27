// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Reduced-motion preference resolution + `prefers-reduced-motion: reduce` helpers.

/** User-facing reduced-motion setting (`system` | `on` | `off`). */
export type ReducedMotionPreference = "system" | "on" | "off";

/** CSS media query used for the OS / browser reduced-motion signal. */
export const PREFERS_REDUCED_MOTION_MEDIA_QUERY =
  "(prefers-reduced-motion: reduce)" as const;

export type ResolvePrefersReducedMotionArgs = {
  preference: ReducedMotionPreference;
  systemPrefersReducedMotion: boolean;
};

/**
 * Resolve whether the UI should reduce motion from the user preference and the
 * live system media-query bit (bundle `RQe`).
 */
export function resolvePrefersReducedMotion({
  preference,
  systemPrefersReducedMotion,
}: ResolvePrefersReducedMotionArgs): boolean {
  switch (preference) {
    case "off":
      return false;
    case "on":
      return true;
    case "system":
      return systemPrefersReducedMotion;
  }
}

/** Read `matchMedia('(prefers-reduced-motion: reduce)').matches` (bundle `zQe`). */
export function getSystemPrefersReducedMotion(): boolean {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return false;
  }
  return window.matchMedia(PREFERS_REDUCED_MOTION_MEDIA_QUERY).matches;
}

/** Return the live MediaQueryList, or null when unavailable (bundle `BQe`). */
export function getPrefersReducedMotionMediaQueryList(): MediaQueryList | null {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return null;
  }
  return window.matchMedia(PREFERS_REDUCED_MOTION_MEDIA_QUERY);
}
