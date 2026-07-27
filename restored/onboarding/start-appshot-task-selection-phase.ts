// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kPc`) / export `wf`.

export type StartAppshotTaskSelectionPhasePeers = {
  A2: (...args: unknown[]) => unknown;
};

let peers: StartAppshotTaskSelectionPhasePeers | null = null;

/** Wire startAppshotTaskSelectionPhase peers once companions land. */
export function setStartAppshotTaskSelectionPhasePeers(next: StartAppshotTaskSelectionPhasePeers): void {
  peers = next;
}

/**
 * Bundle export `wf` / internal `kPc`.
 */
export function startAppshotTaskSelectionPhase(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("startAppshotTaskSelectionPhase peers are not configured");
  }

  e.set(peers.A2, {
    declinedTasks: [],
    phase: `task`,
    selectedRole: t,
    selectedTask: null,
    permissionStatus: `not-requested`
  });
}
