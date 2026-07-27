// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BN`) / export `RK`.

export type BindSkillsPageHelpersPeers = {
  Fo: (...args: unknown[]) => unknown;
  OD: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  f6r: (...args: unknown[]) => unknown;
  p6r: (...args: unknown[]) => unknown;
};

let peers: BindSkillsPageHelpersPeers | null = null;

/** Wire bindSkillsPageHelpers peers once companions land. */
export function setBindSkillsPageHelpersPeers(next: BindSkillsPageHelpersPeers): void {
  peers = next;
}

/**
 * Bundle export `RK` / internal `BN`.
 */
export function bindSkillsPageHelpers(e: unknown) {
  if (peers == null) {
    throw new Error("bindSkillsPageHelpers peers are not configured");
  }

  let t = (0, peers.p6r.c)(4),
    { hostId: n } = e,
    { data: r } = peers.Fo(peers.OD, n),
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r === void 0 ? [] : r), (t[0] = r), (t[1] = i));
  let a = i,
    o;
  return (
    t[2] === a ? (o = t[3]) : ((o = a.find(peers.f6r)), (t[2] = a), (t[3] = o)),
    o?.enabled ?? !0
  );
}
