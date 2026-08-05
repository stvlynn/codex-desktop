// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gb`) / export `Wtt`.

export type WttPeers = {
  DXt: (...args: unknown[]) => unknown;
  EXt: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  OXt: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  TXt: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  dXt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  kXt: (...args: unknown[]) => unknown;
  pXt: (...args: unknown[]) => unknown;
};

let peers: WttPeers | null = null;

/** Wire wtt peers once companions land. */
export function setWttPeers(next: WttPeers): void {
  peers = next;
}

/**
 * Bundle export `Wtt` / internal `gb`.
 */
export function wtt() {
  if (peers == null) {
    throw new Error("wtt peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.ed(),
      peers.pXt(),
      (TXt = peers.Ta(peers.Q, !1)),
      (EXt = peers.Ta(peers.Q, !1)),
      (DXt = peers.Ta(peers.Q, !1)),
      (OXt = peers.Ta(peers.Q, !1)),
      (kXt = peers.Ma(peers.Q, ({ get: e }) =>
        peers.dXt({
          ctrlKey: peers.e(peers.EXt),
          metaKey: peers.e(peers.DXt),
        }),
      )));
  });
}
