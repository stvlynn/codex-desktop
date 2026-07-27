// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Dbu`) / export `W`.

export type RequestRealtimeVoicePresentationSurfacePeers = {
  fp: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  requestSurface: (...args: unknown[]) => unknown;
};

let peers: RequestRealtimeVoicePresentationSurfacePeers | null = null;

/** Wire requestRealtimeVoicePresentationSurface peers once companions land. */
export function setRequestRealtimeVoicePresentationSurfacePeers(next: RequestRealtimeVoicePresentationSurfacePeers): void {
  peers = next;
}

/**
 * Bundle export `W` / internal `Dbu`.
 */
export function requestRealtimeVoicePresentationSurface({
  locator: e,
  motion: t,
  surface: n,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error(
      "requestRealtimeVoicePresentationSurface peers are not configured",
    );
  }
  try {
    var r = peers.fp();
    r.u(peers.gp.realtimeVoicePresentation?.requestSurface(e, n, t));
  } catch (e) {
    r.e = e;
  } finally {
    r.d();
  }
}
