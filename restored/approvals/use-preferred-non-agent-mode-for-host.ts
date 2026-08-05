// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `S4r`) / export `jq`.

export type UsePreferredNonAgentModeForHostPeers = {
  $2r: (...args: unknown[]) => unknown;
  rr: (...args: unknown[]) => unknown;
  t4r: (...args: unknown[]) => unknown;
  w4r: (...args: unknown[]) => unknown;
};

let peers: UsePreferredNonAgentModeForHostPeers | null = null;

/** Wire usePreferredNonAgentModeForHost peers once companions land. */
export function setUsePreferredNonAgentModeForHostPeers(
  next: UsePreferredNonAgentModeForHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `jq` / internal `S4r`.
 */
export function usePreferredNonAgentModeForHost(e: unknown) {
  if (peers == null) {
    throw new Error("usePreferredNonAgentModeForHost peers are not configured");
  }

  let t = (0, peers.w4r.c)(10),
    { hostId: n } = e,
    [r, i] = peers.rr(peers.t4r),
    a;
  t[0] !== n || t[1] !== r
    ? ((a = peers.$2r(n, r)), (t[0] = n), (t[1] = r), (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] !== n || t[4] !== r || t[5] !== i
    ? ((s = (e) => {
        i({
          ...r,
          [n]: e,
        });
      }),
      (t[3] = n),
      (t[4] = r),
      (t[5] = i),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== o || t[8] !== s
      ? ((c = {
          preferredNonFullAccessMode: o,
          setPreferredNonFullAccessMode: s,
        }),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
