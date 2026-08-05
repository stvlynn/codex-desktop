// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SQr`) / export `iY`.

export type UseEnvironmentsSearchQueryPeers = {
  CQr: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Uh: (...args: unknown[]) => unknown;
  eN: (...args: unknown[]) => unknown;
  iN: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  map: (...args: unknown[]) => unknown;
  search: (...args: unknown[]) => unknown;
  tN: (...args: unknown[]) => unknown;
  trim: (...args: unknown[]) => unknown;
  wQr: (...args: unknown[]) => unknown;
};

let peers: UseEnvironmentsSearchQueryPeers | null = null;

/** Wire useEnvironmentsSearchQuery peers once companions land. */
export function setUseEnvironmentsSearchQueryPeers(
  next: UseEnvironmentsSearchQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `iY` / internal `SQr`.
 */
export function useEnvironmentsSearchQuery(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useEnvironmentsSearchQuery peers are not configured");
  }

  let n = (0, peers.iN.c)(14),
    { enabled: r } = t,
    i = r === void 0 ? !0 : r,
    a = peers.tN(e, 200),
    o;
  n[0] === a
    ? (o = n[1])
    : ((o = [`workspace`, `environments-search`, a]), (n[0] = a), (n[1] = o));
  let s;
  n[2] !== a || n[3] !== i
    ? ((s = i && a.trim().length > 0), (n[2] = a), (n[3] = i), (n[4] = s))
    : (s = n[4]);
  let c;
  n[5] === a
    ? (c = n[6])
    : ((c = async () => {
        let e = await peers.Uh.safeGet(`/wham/environments`),
          t = a.trim().toLowerCase(),
          n = new peers.eN(e, {
            threshold: 0.4,
            keys: [`label`, `repos`],
          }),
          r = n?.search(a).map(peers.wQr) ?? [],
          i = (e) => {
            let n = e.toLowerCase();
            return n === t ? 0 : n.startsWith(t) ? 1 : 2;
          };
        return [
          n,
          r.sort((e, t) => {
            if (e.is_pinned !== t.is_pinned) return e.is_pinned ? -1 : 1;
            let n = i(e.label) - i(t.label);
            return n === 0 ? e.label.localeCompare(t.label) : n;
          }),
        ];
      }),
      (n[5] = a),
      (n[6] = c));
  let l;
  n[7] === a
    ? (l = n[8])
    : ((l = (e) => {
        let [t, n] = e;
        if (!a?.trim()) return n;
        let r = a.trim().toLocaleLowerCase();
        return t.search(r).map(peers.CQr);
      }),
      (n[7] = a),
      (n[8] = l));
  let u;
  return (
    n[9] !== o || n[10] !== s || n[11] !== c || n[12] !== l
      ? ((u = {
          queryKey: o,
          enabled: s,
          queryFn: c,
          staleTime: peers.Hf.FIVE_MINUTES,
          select: l,
        }),
        (n[9] = o),
        (n[10] = s),
        (n[11] = c),
        (n[12] = l),
        (n[13] = u))
      : (u = n[13]),
    peers.jt(u)
  );
}
