// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `Nh`) / export `olt`.

export type UseStatsigGateValuePeers = {
  useStatsigClient: () => { client: unknown };
  evaluateGate: (
    client: unknown,
    gateId: unknown,
    options?: unknown,
  ) => boolean;
};

let peers: UseStatsigGateValuePeers | null = null;

/** Wire useStatsigGateValue peers once companions land. */
export function setUseStatsigGateValuePeers(
  next: UseStatsigGateValuePeers,
): void {
  peers = next;
}

/**
 * Bundle export `olt` / internal `Nh`.
 * Read a Statsig gate value from the active client.
 */
export function useStatsigGateValue(
  gateId: unknown,
  options?: unknown,
): boolean {
  if (peers == null) {
    throw new Error("UseStatsigGateValue peers are not configured");
  }
  const { client } = peers.useStatsigClient();
  return peers.evaluateGate(client, gateId, options);
}
