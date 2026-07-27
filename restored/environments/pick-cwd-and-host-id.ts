// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `fJ` / export `jD`.

/** Pick `cwd` + `hostId` from a host-aware location. */
export function pickCwdAndHostId(value: { cwd: string; hostId: string }): {
  cwd: string;
  hostId: string;
} {
  return { cwd: value.cwd, hostId: value.hostId };
}
