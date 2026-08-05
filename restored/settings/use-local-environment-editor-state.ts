// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `n6n`) / export `M3`.

export type UseLocalEnvironmentEditorStatePeers = {
  XT: (...args: unknown[]) => unknown;
  e6n: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  r6n: (...args: unknown[]) => unknown;
};

let peers: UseLocalEnvironmentEditorStatePeers | null = null;

/** Wire UseLocalEnvironmentEditorState peers once companions land. */
export function setUseLocalEnvironmentEditorStatePeers(
  next: UseLocalEnvironmentEditorStatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `M3` / internal `n6n`.
 */
export function UseLocalEnvironmentEditorState(
  e: unknown,
  t: unknown,
  n: unknown,
) {
  if (peers == null) {
    throw new Error("UseLocalEnvironmentEditorState peers are not configured");
  }

  let r = (0, peers.r6n.c)(6),
    i;
  r[0] !== t || r[1] !== e
    ? ((i = async (n) =>
        peers.XT(`git`).request({
          method: e,
          params: peers.e6n(n, t),
        })),
      (r[0] = t),
      (r[1] = e),
      (r[2] = i))
    : (i = r[2]);
  let a;
  return (
    r[3] !== n || r[4] !== i
      ? ((a = {
          mutationFn: i,
          ...n,
        }),
        (r[3] = n),
        (r[4] = i),
        (r[5] = a))
      : (a = r[5]),
    peers.qt(a)
  );
}
