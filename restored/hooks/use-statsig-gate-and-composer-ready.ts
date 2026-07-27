// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mts`) / export `XC`.

export type BindUseStatsigGateAndComposerReadyPeers = {
  Xln: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  kh: (...args: unknown[]) => unknown;
  yer: (...args: unknown[]) => unknown;
};

let peers: BindUseStatsigGateAndComposerReadyPeers | null = null;

/** Wire bindUseStatsigGateAndComposerReady peers once companions land. */
export function setBindUseStatsigGateAndComposerReadyPeers(next: BindUseStatsigGateAndComposerReadyPeers): void {
  peers = next;
}

/**
 * Bundle export `XC` / internal `mts`.
 */
export function bindUseStatsigGateAndComposerReady() {
  if (peers == null) {
    throw new Error("bindUseStatsigGateAndComposerReady peers are not configured");
  }

  let e = peers.kh(`2380644311`),
    t = peers.Y(peers.Xln),
    n = peers.Y(peers.yer);
  return e && t && !n;
}
