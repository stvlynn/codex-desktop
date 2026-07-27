// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lts`) / export `$C`.

export type ClearRealtimeVoiceHandoffIfCompletePeers = {
  request: (...args: unknown[]) => unknown;
  yX: (...args: unknown[]) => unknown;
};

let peers: ClearRealtimeVoiceHandoffIfCompletePeers | null = null;

/** Wire clearRealtimeVoiceHandoffIfComplete peers once companions land. */
export function setClearRealtimeVoiceHandoffIfCompletePeers(next: ClearRealtimeVoiceHandoffIfCompletePeers): void {
  peers = next;
}

/**
 * Bundle export `$C` / internal `lts`.
 */
export function clearRealtimeVoiceHandoffIfComplete(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("clearRealtimeVoiceHandoffIfComplete peers are not configured");
  }

  e.set(peers.yX, e => e?.request !== t || e.phase !== `connected` || !e.handoffComplete ? e : null);
}
