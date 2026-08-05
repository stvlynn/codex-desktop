// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jPc`) / export `Cf`.

export type DeclineAppshotTaskAndContinuePeers = {
  A2: (...args: unknown[]) => unknown;
  k2: (...args: unknown[]) => unknown;
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
 */
export function declineAppshotTaskAndContinue(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("declineAppshotTaskAndContinue peers are not configured");
  }

  let n = peers.k2(e);
  e.set(peers.A2, {
    ...n,
    declinedTasks:
      t == null ? n.declinedTasks : [...(n.declinedTasks ?? []), t],
    phase: `task`,
    selectedTask: null,
    permissionStatus: `not-requested`,
  });
}
