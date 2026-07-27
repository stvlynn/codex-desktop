// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Q7r`) / export `oK`.

export type UseOwnerProfileEmailByAppQueriesPeers = {
  $7r: (...args: unknown[]) => unknown;
  Tt: (...args: unknown[]) => unknown;
  eP: (...args: unknown[]) => unknown;
  email: (...args: unknown[]) => unknown;
  owner_profile: (...args: unknown[]) => unknown;
  trim: (...args: unknown[]) => unknown;
};

let peers: UseOwnerProfileEmailByAppQueriesPeers | null = null;

/** Wire UseOwnerProfileEmailByAppQueries peers once companions land. */
export function setUseOwnerProfileEmailByAppQueriesPeers(next: UseOwnerProfileEmailByAppQueriesPeers): void {
  peers = next;
}

/**
 * Bundle export `oK` / internal `Q7r`.
 */
export function UseOwnerProfileEmailByAppQueries(e: unknown) {
  if (peers == null) {
    throw new Error(
      "UseOwnerProfileEmailByAppQueries peers are not configured",
    );
  }

  let t = (0, peers.eP.c)(7),
    n;
  t[0] === e ? (n = t[1]) : ((n = e.map(peers.$7r)), (t[0] = e), (t[1] = n));
  let r;
  t[2] === n
    ? (r = t[3])
    : ((r = {
        queries: n,
      }),
      (t[2] = n),
      (t[3] = r));
  let i = peers.Tt(r),
    a;
  return (
    t[4] !== e || t[5] !== i
      ? ((a = new Map()),
        i.forEach((t, n) => {
          let r = t.data?.owner_profile?.email?.trim();
          r == null || r.length === 0 || a.set(e[n], r);
        }),
        (t[4] = e),
        (t[5] = i),
        (t[6] = a))
      : (a = t[6]),
    a
  );
}
