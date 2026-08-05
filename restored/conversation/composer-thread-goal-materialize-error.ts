// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Zms`) / export `Dx`.

export type BindComposerThreadGoalMaterializeErrorPeers = {
  Au: (...args: unknown[]) => unknown;
  HAo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindComposerThreadGoalMaterializeErrorPeers | null = null;

/** Wire bindComposerThreadGoalMaterializeError peers once companions land. */
export function setBindComposerThreadGoalMaterializeErrorPeers(
  next: BindComposerThreadGoalMaterializeErrorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Dx` / internal `Zms`.
 */
export function bindComposerThreadGoalMaterializeError() {
  if (peers == null) {
    throw new Error(
      "bindComposerThreadGoalMaterializeError peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.Au(), peers.HAo());
  });
}
