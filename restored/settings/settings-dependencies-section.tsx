// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Eds`) / export `mS`.

export type SettingsDependenciesSectionPeers = {
  Ads: (...args: unknown[]) => unknown;
  Dds: (...args: unknown[]) => unknown;
  Fds: (...args: unknown[]) => unknown;
  Mds: (...args: unknown[]) => unknown;
  Nds: (...args: unknown[]) => unknown;
  Ods: (...args: unknown[]) => unknown;
  Pds: (...args: unknown[]) => unknown;
  kds: (...args: unknown[]) => unknown;
  nr: (...args: unknown[]) => unknown;
};

let peers: SettingsDependenciesSectionPeers | null = null;

/** Wire SettingsDependenciesSection peers once companions land. */
export function setSettingsDependenciesSectionPeers(
  next: SettingsDependenciesSectionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `mS` / internal `Eds`.
 */
export function SettingsDependenciesSection(e: unknown) {
  if (peers == null) {
    throw new Error("SettingsDependenciesSection peers are not configured");
  }

  let t = (0, peers.Mds.c)(16),
    n = peers.nr(peers.Fds),
    r;
  t[0] === e.dependencies
    ? (r = t[1])
    : ((r = e.dependencies ? e.dependencies.map(peers.Ads).join(`|`) : ``),
      (t[0] = e.dependencies),
      (t[1] = r));
  let i = r,
    a;
  t[2] !== e || t[3] !== n
    ? ((a = () => {
        n((t) => {
          let n = !1,
            r = [...t].map((t) => (t.id === e.id ? ((n = !0), e) : t));
          return (
            n || r.push(e),
            (0, peers.Nds.default)(r.filter(peers.kds), [peers.Ods, peers.Dds])
          );
        });
      }),
      (t[2] = e),
      (t[3] = n),
      (t[4] = a))
    : (a = t[4]);
  let o = (0, peers.Pds.useEffectEvent)(a),
    s;
  t[5] === o
    ? (s = t[6])
    : ((s = () => {
        o();
      }),
      (t[5] = o),
      (t[6] = s));
  let c;
  (t[7] !== i || t[8] !== e.enabled || t[9] !== e.id || t[10] !== e.order
    ? ((c = [e.id, e.enabled, e.order, i]),
      (t[7] = i),
      (t[8] = e.enabled),
      (t[9] = e.id),
      (t[10] = e.order),
      (t[11] = c))
    : (c = t[11]),
    (0, peers.Pds.useEffect)(s, c));
  let l, u;
  (t[12] !== e.id || t[13] !== n
    ? ((l = () => () => {
        n((t) => t.filter((t) => t.id !== e.id));
      }),
      (u = [e.id, n]),
      (t[12] = e.id),
      (t[13] = n),
      (t[14] = l),
      (t[15] = u))
    : ((l = t[14]), (u = t[15])),
    (0, peers.Pds.useEffect)(l, u));
}
