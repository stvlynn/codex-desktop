// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `fjr`) / export `YQ`.

export type PairRemoteControlClientPeers = {
  run: (fn: () => unknown) => unknown;
  safePost: (
    path: string,
    body: { requestBody: Record<string, unknown> },
  ) => unknown;
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
 * POST remote-control client pair with manual pairing code.
 */
export function pairRemoteControlClient(args: {
  clientId: string;
  manualPairingCode: string;
}): unknown {
  if (peers == null) {
    throw new Error("PairRemoteControlClient peers are not configured");
  }
  return peers.run(() =>
    peers!.safePost("/wham/remote/control/client/pair", {
      requestBody: {
        client_id: args.clientId,
        manual_pairing_code: args.manualPairingCode,
      },
    }),
  );
}
