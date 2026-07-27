// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `kPc`) / export `wf`.

export type StartAppshotTaskSelectionPhasePeers = {
  journeyAtom: unknown;
};

let peers: StartAppshotTaskSelectionPhasePeers | null = null;

/** Wire startAppshotTaskSelectionPhase peers once companions land. */
export function setStartAppshotTaskSelectionPhasePeers(
  next: StartAppshotTaskSelectionPhasePeers,
): void {
  peers = next;
}

/**
 * Bundle export `wf` / internal `kPc`.
 * Reset appshot journey atom into the task-selection phase.
 */
export type AtomStore = {
  set: (atom: unknown, value: unknown) => void;
};

export function startAppshotTaskSelectionPhase(
  store: AtomStore,
  selectedRole: unknown,
): void {
  if (peers == null) {
    throw new Error("StartAppshotTaskSelectionPhase peers are not configured");
  }
  store.set(peers.journeyAtom, {
    declinedTasks: [],
    phase: "task",
    selectedRole,
    selectedTask: null,
    permissionStatus: "not-requested",
  });
}
