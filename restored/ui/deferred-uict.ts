// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Wvu`) / export `ct`.

export type DeferredUictPeers = {
  $E: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Hvu: (...args: unknown[]) => unknown;
  JAr: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  OA: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Uvu: (...args: unknown[]) => unknown;
  Yul: (...args: unknown[]) => unknown;
  aD: (...args: unknown[]) => unknown;
  bD: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  oD: (...args: unknown[]) => unknown;
};

let peers: DeferredUictPeers | null = null;

/** Wire deferredUict peers once companions land. */
export function setDeferredUictPeers(next: DeferredUictPeers): void {
  peers = next;
}

/**
 * Bundle export `ct` / internal `Wvu`.
 */
export function deferredUict() {
  if (peers == null) {
    throw new Error("deferredUict peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.DD(), peers.Yul(), peers.OA(), peers.ed(), peers.K_(), Hvu = 60, Uvu = peers.Ma(peers.Q, ({
      get: e
    }) => {
      let t = [];
      for (let n of peers.e(peers.$E)) for (let r of peers.e(peers.aD, n)) t.push({
        cwd: peers.e(peers.oD, r),
        hostId: n,
        id: r,
        title: peers.e(peers.JAr, r),
        turns: peers.e(peers.bD, r) ?? []
      });
      return t;
    });
  });
}
