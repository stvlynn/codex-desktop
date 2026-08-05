// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `HKa`) / export `bM`.

export type UseInstallPluginForHostPeers = {
  GM: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  OXr: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  UKa: (...args: unknown[]) => unknown;
  V3r: (...args: unknown[]) => unknown;
  _Xr: (...args: unknown[]) => unknown;
  fw: (...args: unknown[]) => unknown;
  gUn: (...args: unknown[]) => unknown;
  pti: (...args: unknown[]) => unknown;
  qM: (...args: unknown[]) => unknown;
  sUn: (...args: unknown[]) => unknown;
};

let peers: UseInstallPluginForHostPeers | null = null;

/** Wire UseInstallPluginForHost peers once companions land. */
export function setUseInstallPluginForHostPeers(
  next: UseInstallPluginForHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `bM` / internal `HKa`.
 */
export function UseInstallPluginForHost(e: unknown) {
  if (peers == null) {
    throw new Error("UseInstallPluginForHost peers are not configured");
  }

  let t = (0, peers.UKa.c)(5),
    { hostId: n } = e,
    r = peers.Io(peers.Q),
    i = peers.Io(peers.GM),
    { installPlugin: a } = peers.V3r(),
    o;
  return (
    t[0] !== i || t[1] !== n || t[2] !== a || t[3] !== r
      ? ((o = (e) => {
          e.plugin.installed ||
            a(e, {
              hostId: n,
            });
          let t = peers._Xr(peers.fw(e.plugin.id));
          (t != null &&
            (peers.pti(i), i.set(peers.OXr, t), i.set(peers.qM, !0)),
            e.plugin.id === peers.gUn && peers.sUn(r));
        }),
        (t[0] = i),
        (t[1] = n),
        (t[2] = a),
        (t[3] = r),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
