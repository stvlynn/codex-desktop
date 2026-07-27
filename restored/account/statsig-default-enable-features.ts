// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zCu`) / export `u`.

export type StatsigDefaultEnableFeaturesPeers = {
  ICu: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  LCu: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  RCu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  iS: (...args: unknown[]) => unknown;
  od: (...args: unknown[]) => unknown;
};

let peers: StatsigDefaultEnableFeaturesPeers | null = null;

/** Wire statsigDefaultEnableFeatures peers once companions land. */
export function setStatsigDefaultEnableFeaturesPeers(next: StatsigDefaultEnableFeaturesPeers): void {
  peers = next;
}

/**
 * Bundle export `u` / internal `zCu`.
 */
export function statsigDefaultEnableFeatures() {
  if (peers == null) {
    throw new Error("statsigDefaultEnableFeatures peers are not configured");
  }
  return peers.e(() => {
    peers.od(), peers.Im(), peers.iS(), ICu = `default-mode-request-user-input-enabled`, LCu = !0, RCu = peers.Pm(peers.ICu, peers.LCu);
  });
}
