// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sN`) / export `FJ`.

export type Cloud4Peers = {
  D$r: (...args: unknown[]) => unknown;
  E$r: (...args: unknown[]) => unknown;
  GM: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  KM: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  T$r: (...args: unknown[]) => unknown;
  b$r: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  oN: (...args: unknown[]) => unknown;
  w$r: (...args: unknown[]) => unknown;
};

let peers: Cloud4Peers | null = null;

/** Wire cloud4 peers once companions land. */
export function setCloud4Peers(next: Cloud4Peers): void {
  peers = next;
}

/**
 * Bundle export `FJ` / internal `sN`.
 */
export function cloud4() {
  if (peers == null) {
    throw new Error("cloud4 peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.E$r(),
      peers.KM(),
      peers.gT(),
      (D$r = peers.Ma(peers.hT, ({ get: e }) => {
        let { data: t } = peers.e(peers.b$r),
          n = peers.e(peers.w$r);
        if (!(t == null || n == null))
          return {
            type: `cloud`,
            hasAppliedCodeLocally: peers.e(peers.T$r),
            taskDetails: t,
            selectedTurnId: n.id,
            selectedTurn: n,
          };
      })),
      (oN = peers.Ma(peers.GM, ({ get: e, scope: t }) => {
        switch (t.value.kind) {
          case `local`:
            return t.value.conversationId == null
              ? void 0
              : {
                  type: `local`,
                  localConversationId: t.value.conversationId,
                };
          case `cloud`:
            return peers.e(peers.D$r);
          case `chatgpt`:
          case `new`:
          case `other`:
            return;
        }
      })));
  });
}
