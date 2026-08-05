// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$Gi`) / export `MV`.

export type BindSetThreadGoalPeers = {
  KGi: (...args: unknown[]) => unknown;
  QGi: (...args: unknown[]) => unknown;
  YGi: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fR: (...args: unknown[]) => unknown;
  nO: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  vP: (...args: unknown[]) => unknown;
  vT: (...args: unknown[]) => unknown;
};

let peers: BindSetThreadGoalPeers | null = null;

/** Wire bindSetThreadGoal peers once companions land. */
export function setBindSetThreadGoalPeers(next: BindSetThreadGoalPeers): void {
  peers = next;
}

/**
 * Bundle export `MV` / internal `$Gi`.
 */
export function bindSetThreadGoal() {
  if (peers == null) {
    throw new Error("bindSetThreadGoal peers are not configured");
  }

  return peers.e(() => {
    ((QGi = peers.r(peers.o(), 1)),
      peers.nO(),
      peers.vP(),
      peers.fR(),
      peers.KGi(),
      peers.YGi(),
      peers.vT());
  });
}
