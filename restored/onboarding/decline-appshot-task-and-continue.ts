// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `jPc`) / export `Cf`.

export type DeclineAppshotTaskAndContinuePeers = {
  journeyAtom: unknown;
  readJourney: (store: AtomStore) => {
    declinedTasks?: unknown[];
    [key: string]: unknown;
  };
};

let peers: DeclineAppshotTaskAndContinuePeers | null = null;

/** Wire declineAppshotTaskAndContinue peers once companions land. */
export function setDeclineAppshotTaskAndContinuePeers(
  next: DeclineAppshotTaskAndContinuePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Cf` / internal `jPc`.
 * Decline an appshot task and return to task selection.
 */
export type AtomStore = {
  set: (atom: unknown, value: unknown) => void;
};

export function declineAppshotTaskAndContinue(
  store: AtomStore,
  task: unknown,
): void {
  if (peers == null) {
    throw new Error("DeclineAppshotTaskAndContinue peers are not configured");
  }
  const current = peers.readJourney(store);
  store.set(peers.journeyAtom, {
    ...current,
    declinedTasks:
      task == null
        ? current.declinedTasks
        : [...(current.declinedTasks ?? []), task],
    phase: "task",
    selectedTask: null,
    permissionStatus: "not-requested",
  });
}
