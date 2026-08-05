// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ots`) / export `QC`.

export type MarkRealtimeVoiceHandoffCompletePeers = {
  request: (...args: unknown[]) => unknown;
  yX: (...args: unknown[]) => unknown;
};

let peers: MarkRealtimeVoiceHandoffCompletePeers | null = null;

/** Wire markRealtimeVoiceHandoffComplete peers once companions land. */
export function setMarkRealtimeVoiceHandoffCompletePeers(
  next: MarkRealtimeVoiceHandoffCompletePeers,
): void {
  peers = next;
}

/**
 * Bundle export `QC` / internal `ots`.
 */
export function markRealtimeVoiceHandoffComplete(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error(
      "markRealtimeVoiceHandoffComplete peers are not configured",
    );
  }

  e.set(peers.yX, (e) =>
    e?.request === t
      ? t.source === `composer_button_existing_thread` &&
        e.phase === `connected`
        ? null
        : {
            ...e,
            handoffComplete: !0,
          }
      : e,
  );
}
