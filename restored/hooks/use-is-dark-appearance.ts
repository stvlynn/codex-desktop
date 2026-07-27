// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `hP` / export `MG` — live dark-appearance subscription (`Vei` store).

import { useSyncExternalStore } from "react";

type Listener = () => void;

const listeners = new Set<Listener>();
let isDark: boolean | null = null;

function subscribe(onStoreChange: Listener): () => void {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

function getSnapshot(): boolean {
  return isDark === true;
}

/** Host pushes resolved dark-appearance boolean (null = unknown/light). */
export function setIsDarkAppearance(next: boolean | null): void {
  if (next === isDark) return;
  isDark = next;
  for (const listener of listeners) listener();
}

/**
 * Bundle export `MG` — `true` when the app chrome is in dark appearance.
 * Used by color icons to pick `*-dark.svg` vs `*-light.svg`.
 */
export function useIsDarkAppearance(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

/** Bundle export `jG` — dark-appearance store ESM init retained as no-op. */
export function ensureIsDarkAppearanceInit(): void {}
