// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fjr`) / export `YQ`.

export type PairRemoteControlClientPeers = {
  Uh: (...args: unknown[]) => unknown;
  yjr: (...args: unknown[]) => unknown;
};
let peers: PairRemoteControlClientPeers | null = null;

/** Wire pairRemoteControlClient peers once companions land. */
export function setPairRemoteControlClientPeers(
  next: PairRemoteControlClientPeers,
): void {
  peers = next;
}

/**
 * Bundle export `YQ` / internal `fjr`.
 */
export async function pairRemoteControlClient({
  clientId,
  manualPairingCode,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("pairRemoteControlClient peers are not configured");
  }
  return peers.yjr(() => {
    return peers.Uh.safePost("/wham/remote/control/client/pair", {
      requestBody: {
        client_id: clientId,
        manual_pairing_code: manualPairingCode,
      },
    });
  });
}
