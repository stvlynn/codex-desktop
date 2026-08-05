// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cX`) / export `Qw`.

export type SettingsDependenciesGuardPeers = {
  E7o: (...args: unknown[]) => unknown;
  GM: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  f7o: (...args: unknown[]) => unknown;
  x7o: (...args: unknown[]) => unknown;
};

let peers: SettingsDependenciesGuardPeers | null = null;

/** Wire SettingsDependenciesGuard peers once companions land. */
export function setSettingsDependenciesGuardPeers(
  next: SettingsDependenciesGuardPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Qw` / internal `cX`.
 */
export function SettingsDependenciesGuard(e: unknown) {
  if (peers == null) {
    throw new Error("SettingsDependenciesGuard peers are not configured");
  }

  let t = (0, peers.x7o.c)(7),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ dependencies: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === r
    ? (i = t[4])
    : ((i = r === void 0 ? [] : r), (t[3] = r), (t[4] = i));
  let a = i,
    o = peers.Io(peers.GM),
    s;
  (t[5] === o
    ? (s = t[6])
    : ((s = (e) => {
        o.set(peers.E7o, e);
      }),
      (t[5] = o),
      (t[6] = s)),
    peers.f7o(s, n, a));
}
