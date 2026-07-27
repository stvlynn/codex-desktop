// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Jhu`) / export `Dt`.

export type UseBrowserExtensionPluginSetupQueryPeers = {
  $hu: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  SM: (...args: unknown[]) => unknown;
  Zhu: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  ngu: (...args: unknown[]) => unknown;
  rp: (...args: unknown[]) => unknown;
  sgu: (...args: unknown[]) => unknown;
  tgu: (...args: unknown[]) => unknown;
};

let peers: UseBrowserExtensionPluginSetupQueryPeers | null = null;

/** Wire useBrowserExtensionPluginSetupQuery peers once companions land. */
export function setUseBrowserExtensionPluginSetupQueryPeers(next: UseBrowserExtensionPluginSetupQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `Dt` / internal `Jhu`.
 */
export function useBrowserExtensionPluginSetupQuery(e: unknown) {
  if (peers == null) {
    throw new Error(
      "useBrowserExtensionPluginSetupQuery peers are not configured",
    );
  }

  let t = (0, peers.ngu.c)(17),
    { enabled: n, hostId: r, plugin: i } = e,
    a = peers.SM(r),
    o,
    s,
    c,
    l;
  t[0] !== a || t[1] !== n || t[2] !== r || t[3] !== i
    ? ((o = peers.Zhu(a, i)),
      (l = peers.jt),
      (s = n && o != null),
      (c =
        o == null
          ? [`plugins`, `browser-extension-setup`, `missing`]
          : peers.tgu({
              hostId: r,
              path: o,
            })),
      (t[0] = a),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l))
    : ((o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]));
  let u;
  t[8] !== a || t[9] !== o || t[10] !== r || t[11] !== i
    ? ((u = async () => {
        if (o == null || i == null) return [];
        let e = await peers.rp(`read-file`, {
            params: {
              hostId: r,
              path: o,
            },
          }),
          t = peers.sgu.parse(JSON.parse(e.contents));
        return [
          peers.$hu({
            codexHome: a,
            extensionId: t.extensionId,
            plugin: i,
          }),
        ];
      }),
      (t[8] = a),
      (t[9] = o),
      (t[10] = r),
      (t[11] = i),
      (t[12] = u))
    : (u = t[12]);
  let d;
  t[13] !== s || t[14] !== c || t[15] !== u
    ? ((d = {
        enabled: s,
        queryKey: c,
        queryFn: u,
        retry: !1,
        staleTime: peers.Hf.INFINITE,
      }),
      (t[13] = s),
      (t[14] = c),
      (t[15] = u),
      (t[16] = d))
    : (d = t[16]);
  let { data: f } = l(d);
  return f;
}
