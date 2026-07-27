// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `lts`) / export `$C`.

export type RealtimeVoiceHandoffState = {
  request?: unknown;
  phase?: string;
  handoffComplete?: boolean;
  [key: string]: unknown;
} | null;

export type ClearRealtimeVoiceHandoffPeers = {
  handoffAtom: unknown;
};

let peers: ClearRealtimeVoiceHandoffPeers | null = null;

/** Wire realtime voice handoff atom once companions land. */
export function setClearRealtimeVoiceHandoffPeers(
  next: ClearRealtimeVoiceHandoffPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$C` / internal `lts`.
 * Clear handoff atom when request matches and handoff is complete.
 */
export function clearRealtimeVoiceHandoffIfComplete(
  store: {
    set: (
      atom: unknown,
      updater: (prev: RealtimeVoiceHandoffState) => RealtimeVoiceHandoffState,
    ) => void;
  },
  request: unknown,
): void {
  if (peers == null) {
    throw new Error("ClearRealtimeVoiceHandoff peers are not configured");
  }
  store.set(peers.handoffAtom, (prev) =>
    prev?.request !== request ||
    prev.phase !== "connected" ||
    !prev.handoffComplete
      ? prev
      : null,
  );
}
