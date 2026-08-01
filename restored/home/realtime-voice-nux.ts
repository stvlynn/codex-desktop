// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `J2s`) / export `Nh`.

import { createAppScopeQueryAtom } from "../composer/composer-appscope-atoms";

/**
 * Bundle export `Nh` / internal `J2s` — `Ta(Q, false)` i.e.
 * `createScopedSignal(appScopeAtom, false)`.
 */
export const hasSeenRealtimeVoiceNuxAtom =
  createAppScopeQueryAtom<boolean>(false);

/** Rolldown ESM init shim — module side effects now run on import. */
export function ensureHasSeenRealtimeVoiceNuxAtomInit(): void {}

/** Rolldown ESM init shim — module side effects now run on import. */
export function ensureRealtimeVoiceNuxInit(): void {}

/** Rolldown ESM init shim — module side effects now run on import. */
export function ensureRealtimeVoiceStartHandlerInit(): void {}

export type RealtimeVoiceNuxPeers = {
  canStart: (entryPoint: string) => boolean;
  start: (entryPoint: string) => void;
};

let peers: RealtimeVoiceNuxPeers | null = null;

/** Wire realtimeVoiceNux peers once companions land. */
export function setRealtimeVoiceNuxPeers(next: RealtimeVoiceNuxPeers): void {
  peers = next;
}

/** Open boundary stub — returns null (no start handler) until wired. */
export function createRealtimeVoiceStartHandler(
  entryPoint: string,
): (() => void) | null {
  if (peers == null || !peers.canStart(entryPoint)) return null;
  return () => peers?.start(entryPoint);
}

/** Open boundary stub — hides the NUX until wired to real eligibility logic. */
export function useShouldShowRealtimeVoiceNux(): boolean {
  return false;
}

/** Marks the NUX as seen within the given AppScope store. */
export function markRealtimeVoiceNuxSeen(store: { scope: unknown }): void {
  void store;
  hasSeenRealtimeVoiceNuxAtom.set(true);
}
