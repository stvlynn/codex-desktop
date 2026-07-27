// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$xo`) / export `hA`.

export type HAPeers = {
  F3n: (...args: unknown[]) => unknown;
  Wxo: (...args: unknown[]) => unknown;
  jxe: (...args: unknown[]) => unknown;
};
let peers: HAPeers | null = null;

/** Wire hA peers once companions land. */
export function setHAPeers(next: HAPeers): void {
  peers = next;
}

/**
 * Bundle export `hA` / internal `$xo`.
 */
export function hA(e: unknown, t: unknown, n: unknown, r: unknown, i: unknown) {
  if (peers == null) {
    throw new Error("hA peers are not configured");
  }
  let a = e.query.snapshot(peers.Wxo, {
    commonDir: t.commonDir,
    root: t.root,
    hostConfig: n,
    key: peers.jxe,
    operationSource: i,
    scope: "worktree",
    ...peers.F3n(undefined, null),
  });
  a.setData({
    value: r,
  });
  a.invalidate();
}
