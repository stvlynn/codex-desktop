// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JSu`) / export `v`.

export type BindScreenRecordingPermissionNeededPeers = {
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  U9: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  qSu: (...args: unknown[]) => unknown;
};

let peers: BindScreenRecordingPermissionNeededPeers | null = null;

/** Wire bindScreenRecordingPermissionNeeded peers once companions land. */
export function setBindScreenRecordingPermissionNeededPeers(next: BindScreenRecordingPermissionNeededPeers): void {
  peers = next;
}

/**
 * Bundle export `v` / internal `JSu`.
 */
export function bindScreenRecordingPermissionNeeded() {
  if (peers == null) {
    throw new Error("bindScreenRecordingPermissionNeeded peers are not configured");
  }

  return peers.e(() => {
    qSu = peers.c(), peers.$u(), peers.Pp(), peers._p(), U9 = peers.J();
  });
}
