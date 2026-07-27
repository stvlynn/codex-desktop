// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `ots`) / export `QC`.

export type MarkRealtimeVoiceHandoffCompletePeers = {
  realtimeVoiceLaunchAtom: unknown;
};

let peers: MarkRealtimeVoiceHandoffCompletePeers | null = null;

/** Wire realtime voice handoff peers once companions land. */
export function setMarkRealtimeVoiceHandoffCompletePeers(
  next: MarkRealtimeVoiceHandoffCompletePeers,
): void {
  peers = next;
}

/**
 * Bundle export `QC` / internal `ots`.
 * Mark a matching realtime voice launch request as handoff-complete.
 */
export function markRealtimeVoiceHandoffComplete(
  store: {
    set: (atom: unknown, updater: (current: unknown) => unknown) => void;
  },
  request: { source?: string },
): void {
  if (peers == null) {
    throw new Error(
      "MarkRealtimeVoiceHandoffComplete peers are not configured",
    );
  }
  store.set(peers.realtimeVoiceLaunchAtom, (current: any) => {
    if (current?.request !== request) return current;
    if (
      request.source === "composer_button_existing_thread" &&
      current.phase === "connected"
    ) {
      return null;
    }
    return { ...current, handoffComplete: true };
  });
}
