// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uts`) / export `ZC`.

export type CancelRealtimeVoiceLaunchPeers = {
  Wf: (...args: unknown[]) => unknown;
  cancelRealtimeSessionStart: (...args: unknown[]) => unknown;
  catch: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  yX: (...args: unknown[]) => unknown;
};

let peers: CancelRealtimeVoiceLaunchPeers | null = null;

/** Wire cancelRealtimeVoiceLaunch peers once companions land. */
export function setCancelRealtimeVoiceLaunchPeers(next: CancelRealtimeVoiceLaunchPeers): void {
  peers = next;
}

/**
 * Bundle export `ZC` / internal `uts`.
 */
export function cancelRealtimeVoiceLaunch(e: unknown) {
  if (peers == null) {
    throw new Error("cancelRealtimeVoiceLaunch peers are not configured");
  }

  (e.set(peers.yX, null),
    peers.gp.realtimeVoiceRuntime?.cancelRealtimeSessionStart().catch((e) => {
      peers.Wf.error(`Unable to cancel realtime voice launch`, {
        safe: {},
        sensitive: {
          error: e,
        },
      });
    }));
}
