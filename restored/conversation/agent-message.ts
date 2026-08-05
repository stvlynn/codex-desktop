// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `C6n`) / export `T3`.

export type AgentMessagePeers = {
  Au: (...args: unknown[]) => unknown;
  Cqn: (...args: unknown[]) => unknown;
  Eqn: (...args: unknown[]) => unknown;
  S6n: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Sqn: (...args: unknown[]) => unknown;
  Tqn: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  Xw: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  dqn: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eE: (...args: unknown[]) => unknown;
  iE: (...args: unknown[]) => unknown;
  il: (...args: unknown[]) => unknown;
  k3n: (...args: unknown[]) => unknown;
  oE: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  vl: (...args: unknown[]) => unknown;
  wqn: (...args: unknown[]) => unknown;
  x6n: (...args: unknown[]) => unknown;
};

let peers: AgentMessagePeers | null = null;

/** Wire agentMessage peers once companions land. */
export function setAgentMessagePeers(next: AgentMessagePeers): void {
  peers = next;
}

/**
 * Bundle export `T3` / internal `C6n`.
 */
export function agentMessage() {
  if (peers == null) {
    throw new Error("agentMessage peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(),
      peers.Sl(),
      peers.oE(),
      peers.dqn(),
      peers.iE(),
      peers.k3n(),
      peers.eE(),
      peers.Xw(),
      peers.ap(),
      (x6n = peers.sl({
        cwd: peers.X().trim().min(1),
        branch: peers.X().trim().min(1).optional(),
        url: peers.X().trim().min(1).optional(),
        isDraft: peers.vl((e) => {
          if (typeof peers.e == `boolean`) return peers.e;
          if (typeof peers.e == `string`) {
            let t = peers.e.trim().toLowerCase();
            if (t === `true`) return !0;
            if (t === `false`) return !1;
          }
        }, peers.il().optional()),
      })),
      (S6n = [peers.Sqn, peers.Cqn, peers.wqn, peers.Tqn, peers.Eqn]));
  });
}
