// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wA`) / export `g$`.

export type SelectLocalOrRemoteProjectPeers = {
  TAr: (...args: unknown[]) => unknown;
  mA: (...args: unknown[]) => unknown;
  projectKind: (...args: unknown[]) => unknown;
};

let peers: SelectLocalOrRemoteProjectPeers | null = null;

/** Wire selectLocalOrRemoteProject peers once companions land. */
export function setSelectLocalOrRemoteProjectPeers(
  next: SelectLocalOrRemoteProjectPeers,
): void {
  peers = next;
}

/**
 * Bundle export `g$` / internal `wA`.
 */
export function selectLocalOrRemoteProject(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("selectLocalOrRemoteProject peers are not configured");
  }

  if (t?.projectKind === `local`) {
    peers.mA.select(e, t);
    return;
  }
  if (t?.projectKind === `remote`) {
    peers.TAr(e, t.projectId);
    return;
  }
  peers.TAr(e, null);
}
