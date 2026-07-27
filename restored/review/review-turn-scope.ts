// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_E`) / export `m3`.

export type BindReviewTurnScopePeers = {
  Au: (...args: unknown[]) => unknown;
  Dh: (...args: unknown[]) => unknown;
  Eh: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Th: (...args: unknown[]) => unknown;
  a8n: (...args: unknown[]) => unknown;
  checkGate: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  gE: (...args: unknown[]) => unknown;
  i8n: (...args: unknown[]) => unknown;
  o8n: (...args: unknown[]) => unknown;
  s8n: (...args: unknown[]) => unknown;
  wp: (...args: unknown[]) => unknown;
  wu: (...args: unknown[]) => unknown;
  xp: (...args: unknown[]) => unknown;
};

let peers: BindReviewTurnScopePeers | null = null;

/** Wire bindReviewTurnScope peers once companions land. */
export function setBindReviewTurnScopePeers(next: BindReviewTurnScopePeers): void {
  peers = next;
}

/**
 * Bundle export `m3` / internal `_E`.
 */
export function bindReviewTurnScope() {
  if (peers == null) {
    throw new Error("bindReviewTurnScope peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.Au(),
      peers.ed(),
      peers.wp(),
      peers.Dh(),
      (a8n = `2333235660`),
      (o8n = peers.Ma(peers.Q, ({ get: e }) =>
        peers.xp(peers.e, peers.wu.reviewMode),
      )),
      (gE = peers.Ma(peers.Q, ({ get: e }) => {
        let t = peers.e(peers.Eh, peers.a8n),
          n = peers.e(peers.Th);
        return peers.i8n(
          peers.e(peers.o8n),
          t || n?.checkGate(`2333235660`) === !0,
        );
      })),
      (s8n = peers.Ma(peers.Q, ({ get: e }) => peers.e(peers.gE) === `full`)));
  });
}
