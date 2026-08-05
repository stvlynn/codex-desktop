// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ebu`) / export `J`.

export type BindBindRealtimeVoiceHostIdPeers = {
  Au: (...args: unknown[]) => unknown;
  Tbu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindBindRealtimeVoiceHostIdPeers | null = null;

/** Wire bindBindRealtimeVoiceHostId peers once companions land. */
export function setBindBindRealtimeVoiceHostIdPeers(
  next: BindBindRealtimeVoiceHostIdPeers,
): void {
  peers = next;
}

/**
 * Bundle export `J` / internal `Ebu`.
 */
export function bindBindRealtimeVoiceHostId() {
  if (peers == null) {
    throw new Error("bindBindRealtimeVoiceHostId peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(), (Tbu = `realtimeVoiceHostId`));
  });
}
