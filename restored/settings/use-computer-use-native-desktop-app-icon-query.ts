// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hna`) / export `eR`.

export type UseComputerUseNativeDesktopAppIconQueryPeers = {
  Hf: (...args: unknown[]) => unknown;
  Una: (...args: unknown[]) => unknown;
  iconSmall: (...args: unknown[]) => unknown;
  np: (...args: unknown[]) => unknown;
  uk: (...args: unknown[]) => unknown;
};

let peers: UseComputerUseNativeDesktopAppIconQueryPeers | null = null;

/** Wire useComputerUseNativeDesktopAppIconQuery peers once companions land. */
export function setUseComputerUseNativeDesktopAppIconQueryPeers(
  next: UseComputerUseNativeDesktopAppIconQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `eR` / internal `Hna`.
 */
export function useComputerUseNativeDesktopAppIconQuery(e: unknown) {
  if (peers == null) {
    throw new Error(
      "useComputerUseNativeDesktopAppIconQuery peers are not configured",
    );
  }

  let t = (0, peers.Una.c)(10),
    { appPath: n } = e,
    { platform: r, isLoading: i } = peers.uk(),
    a = (r === `macOS` || r === `windows`) && n != null && n !== ``,
    o = n ?? ``,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = {
        appPath: o,
      }),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === a
    ? (c = t[3])
    : ((c = {
        enabled: a,
        staleTime: peers.Hf.INFINITE,
        refetchOnWindowFocus: !1,
      }),
      (t[2] = a),
      (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = {
        params: s,
        queryConfig: c,
      }),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u = peers.np(`computer-use-native-desktop-app-icon`, l),
    d = a ? (u.data?.iconSmall ?? null) : null,
    f = i || (a && u.isLoading),
    p;
  return (
    t[7] !== d || t[8] !== f
      ? ((p = {
          iconSmall: d,
          isLoading: f,
        }),
        (t[7] = d),
        (t[8] = f),
        (t[9] = p))
      : (p = t[9]),
    p
  );
}
