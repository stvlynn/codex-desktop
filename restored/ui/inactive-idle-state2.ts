// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `drs`) / export `kC`.

export type InactiveIdleState2Peers = {
  Ho: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Ox: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  crs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  kx: (...args: unknown[]) => unknown;
  lrs: (...args: unknown[]) => unknown;
  srs: (...args: unknown[]) => unknown;
  urs: (...args: unknown[]) => unknown;
};

let peers: InactiveIdleState2Peers | null = null;

/** Wire inactiveIdleState2 peers once companions land. */
export function setInactiveIdleState2Peers(
  next: InactiveIdleState2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `kC` / internal `drs`.
 */
export function inactiveIdleState2() {
  if (peers == null) {
    throw new Error("inactiveIdleState2 peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.ed(),
      peers.crs(),
      peers.kx(),
      (urs = peers.Ma(peers.Q, ({ get: e }) => {
        let t = peers.e(peers.Ox);
        return t.phase === `inactive` || !t.outputMuted
          ? null
          : peers.lrs(peers.e(peers.srs, t.locator));
      })));
  });
}
