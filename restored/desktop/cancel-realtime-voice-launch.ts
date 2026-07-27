// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `uts`) / export `ZC`.

export type CancelRealtimeVoiceLaunchPeers = {
  realtimeVoiceLaunchAtom: unknown;
  cancelRealtimeSessionStart: () => Promise<unknown>;
  logError: (
    message: string,
    detail: {
      safe: Record<string, unknown>;
      sensitive: Record<string, unknown>;
    },
  ) => void;
};

let peers: CancelRealtimeVoiceLaunchPeers | null = null;

/** Wire cancel realtime voice launch peers once companions land. */
export function setCancelRealtimeVoiceLaunchPeers(
  next: CancelRealtimeVoiceLaunchPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ZC` / internal `uts`.
 * Clear launch atom and cancel an in-flight realtime session start.
 */
export function cancelRealtimeVoiceLaunch(store: {
  set: (atom: unknown, value: unknown) => void;
}): void {
  if (peers == null) {
    throw new Error("CancelRealtimeVoiceLaunch peers are not configured");
  }
  store.set(peers.realtimeVoiceLaunchAtom, null);
  peers.cancelRealtimeSessionStart().catch((error) => {
    peers!.logError("Unable to cancel realtime voice launch", {
      safe: {},
      sensitive: { error },
    });
  });
}
