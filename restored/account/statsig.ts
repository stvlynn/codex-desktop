// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `VE`) / export `_4`.

export type StatsigPeers = {
  H7n: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  Mo: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R7n: (...args: unknown[]) => unknown;
  R9n: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  _er: (...args: unknown[]) => unknown;
  der: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ger: (...args: unknown[]) => unknown;
  her: (...args: unknown[]) => unknown;
  mer: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  ver: (...args: unknown[]) => unknown;
  x9n: (...args: unknown[]) => unknown;
  yer: (...args: unknown[]) => unknown;
};

let peers: StatsigPeers | null = null;

/** Wire statsig peers once companions land. */
export function setStatsigPeers(next: StatsigPeers): void {
  peers = next;
}

/**
 * Bundle export `_4` / internal `VE`.
 */
export function statsig() {
  if (peers == null) {
    throw new Error("statsig peers are not configured");
  }
  return peers.e(() => {
    mer = peers.r(peers.Mo(), 1), peers.Ho(), peers.ed(), peers.Im(), peers.H7n(), peers.x9n(), peers.R9n(), peers.der(), her = {
      canUseLocalOverride: !1,
      error: null,
      override: peers.R7n,
      source: `statsig`,
      statsigValue: {}
    }, ger = peers.Ta(peers.Q, null, {
      isEqual: peers.mer.default
    }), _er = peers.Ta(peers.Q, peers.her, {
      isEqual: peers.mer.default
    }), ver = peers.Ta(peers.Q, !1), yer = peers.Pm(`realtime-voice-mode-debug-disabled`, !1);
  });
}
