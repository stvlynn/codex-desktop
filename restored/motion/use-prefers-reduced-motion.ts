// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Hook + system media-query subscription for the prefers-reduced-motion atom.

import { useSyncExternalStore } from "react";

import {
  getPrefersReducedMotionMediaQueryList,
  getSystemPrefersReducedMotion,
  resolvePrefersReducedMotion,
  type ReducedMotionPreference,
} from "./reduced-motion";

function subscribeSystemPrefersReducedMotion(
  onStoreChange: () => void,
): () => void {
  const mediaQueryList = getPrefersReducedMotionMediaQueryList();
  if (mediaQueryList == null) {
    return () => {};
  }

  const handleChange = () => {
    onStoreChange();
  };

  if (typeof mediaQueryList.addEventListener === "function") {
    mediaQueryList.addEventListener("change", handleChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }

  mediaQueryList.addListener(handleChange);
  return () => {
    mediaQueryList.removeListener(handleChange);
  };
}

/** Subscribe to the OS/browser reduced-motion media query. */
export function useSystemPrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeSystemPrefersReducedMotion,
    getSystemPrefersReducedMotion,
    () => false,
  );
}

/**
 * Effective reduced-motion flag (bundle `Dp` / atom `Tp`).
 *
 * Pass the settings preference when available; defaults to `system` so the hook
 * still tracks the media query without the settings store wired.
 */
export function usePrefersReducedMotion(preference: ReducedMotionPreference = "system"): boolean {
  const systemPrefersReducedMotion = useSystemPrefersReducedMotion();
  return resolvePrefersReducedMotion({
    preference,
    systemPrefersReducedMotion,
  });
}

/**
 * Pure reader used by the derived prefers-reduced-motion atom (bundle `Tp`).
 * Kept as a named export so IMPORT_MAP can point `Mut` at a stable symbol.
 */
export function readPrefersReducedMotionAtom(input: {
  preference: ReducedMotionPreference;
  systemPrefersReducedMotion: boolean;
}): boolean {
  return resolvePrefersReducedMotion(input);
}
