// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `Dbu`) / export `W`.

export type RequestRealtimeVoicePresentationSurfacePeers = {
  getDesktopBridge: () => {
    realtimeVoicePresentation?: {
      requestSurface: (
        locator: unknown,
        surface: unknown,
        motion: unknown,
      ) => unknown;
    };
  };
};

let peers: RequestRealtimeVoicePresentationSurfacePeers | null = null;

/** Wire realtime voice presentation peers once companions land. */
export function setRequestRealtimeVoicePresentationSurfacePeers(
  next: RequestRealtimeVoicePresentationSurfacePeers,
): void {
  peers = next;
}

/**
 * Bundle export `W` / internal `Dbu`.
 * Request a realtime voice presentation surface (awaited via runtime helper).
 */
export async function requestRealtimeVoicePresentationSurface(args: {
  locator: unknown;
  motion?: unknown;
  surface: unknown;
}): Promise<unknown> {
  if (peers == null) {
    throw new Error(
      "RequestRealtimeVoicePresentationSurface peers are not configured",
    );
  }
  const { locator, motion, surface } = args;
  return peers
    .getDesktopBridge()
    .realtimeVoicePresentation?.requestSurface(locator, surface, motion);
}
