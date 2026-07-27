// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `APc`) / export `Tf`.

export type SetAppshotSelectedTaskPhasePeers = {
  journeyAtom: unknown;
  readJourney: (store: AtomStore) => Record<string, unknown>;
};

let peers: SetAppshotSelectedTaskPhasePeers | null = null;

/** Wire setAppshotSelectedTaskPhase peers once companions land. */
export function setSetAppshotSelectedTaskPhasePeers(
  next: SetAppshotSelectedTaskPhasePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Tf` / internal `APc`.
 * Select an appshot task and advance permission/execution phase.
 */
export type AtomStore = {
  set: (atom: unknown, value: unknown) => void;
  get?: (atom: unknown) => unknown;
};

export function setAppshotSelectedTaskPhase(
  store: AtomStore,
  selectedTask: unknown,
): void {
  if (peers == null) {
    throw new Error("SetAppshotSelectedTaskPhase peers are not configured");
  }
  const current = peers.readJourney(store);
  store.set(peers.journeyAtom, {
    ...current,
    phase: selectedTask === "csv_chart" ? "execution" : "permission",
    selectedTask,
    permissionStatus:
      selectedTask === "csv_chart" ? "not-requested" : "pending",
  });
}
