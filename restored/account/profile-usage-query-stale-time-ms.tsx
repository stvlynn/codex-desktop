// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `u$l`) / export `Ui`.

export type ProfileUsageQueryStaleTimeMsPeers = {
  Au: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Lh: (...args: unknown[]) => unknown;
  PQl: (...args: unknown[]) => unknown;
  Qf: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  VQl: (...args: unknown[]) => unknown;
  Wh: (...args: unknown[]) => unknown;
  a$l: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  c$l: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  l$l: (...args: unknown[]) => unknown;
  o$l: (...args: unknown[]) => unknown;
  s$l: (...args: unknown[]) => unknown;
  uploadError: (...args: unknown[]) => unknown;
};

let peers: ProfileUsageQueryStaleTimeMsPeers | null = null;

/** Wire ProfileUsageQueryStaleTimeMs peers once companions land. */
export function setProfileUsageQueryStaleTimeMsPeers(next: ProfileUsageQueryStaleTimeMsPeers): void {
  peers = next;
}

/**
 * Bundle export `Ui` / internal `u$l`.
 */
export function ProfileUsageQueryStaleTimeMs() {
  if (peers == null) {
    throw new Error("ProfileUsageQueryStaleTimeMs peers are not configured");
  }
  return peers.e(() => {
    a$l = peers.c(), peers.Qt(), peers.Au(), peers.Fh(), peers.Lh(), peers.Gf(), peers.Uf(), peers.Wh(), peers.Qf(), peers.PQl(), peers.VQl(), o$l = `3503973010`, s$l = `profile_usage_query_stale_time_ms`, c$l = [`profile`, `usage`, `disabled`], l$l = class extends Error {
      uploadError;
      constructor(e) {
        super(`Profile photo upload failed`), this.uploadError = peers.e;
      }
    };
  });
}
