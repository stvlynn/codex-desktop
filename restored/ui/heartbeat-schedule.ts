// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `r1c`) / export `iu`.

export type HeartbeatSchedulePeers = {
  J: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  n1c: (...args: unknown[]) => unknown;
  t1c: (...args: unknown[]) => unknown;
};

let peers: HeartbeatSchedulePeers | null = null;

/** Wire heartbeatSchedule peers once companions land. */
export function setHeartbeatSchedulePeers(next: HeartbeatSchedulePeers): void {
  peers = next;
}

/**
 * Bundle export `iu` / internal `r1c`.
 */
export function heartbeatSchedule() {
  if (peers == null) {
    throw new Error("heartbeatSchedule peers are not configured");
  }

  return peers.e(() => {
    t1c = peers.c(), n1c = peers.J();
  });
}
