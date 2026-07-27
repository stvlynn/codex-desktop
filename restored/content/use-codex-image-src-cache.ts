// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Yza`) / export `qM`.

export type UseCodexImageSrcCachePeers = {
  $za: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Jza: (...args: unknown[]) => unknown;
  Qza: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  Xza: (...args: unknown[]) => unknown;
  aBa: (...args: unknown[]) => unknown;
  blob: (...args: unknown[]) => unknown;
  cacheKey: (...args: unknown[]) => unknown;
  dataUrl: (...args: unknown[]) => unknown;
  eBa: (...args: unknown[]) => unknown;
  iBa: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  useDownloadUrlAsImageSrc: (...args: unknown[]) => unknown;
};

let peers: UseCodexImageSrcCachePeers | null = null;

/** Wire useCodexImageSrcCache peers once companions land. */
export function setUseCodexImageSrcCachePeers(next: UseCodexImageSrcCachePeers): void {
  peers = next;
}

/**
 * Bundle export `qM` / internal `Yza`.
 */
export function useCodexImageSrcCache(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useCodexImageSrcCache peers are not configured");
  }

  let n = (0, peers.iBa.c)(23),
    r = !!e,
    i;
  n[0] === t?.cacheKey
    ? (i = n[1])
    : ((i = t?.cacheKey ?? [`codex`]), (n[0] = t?.cacheKey), (n[1] = i));
  let a;
  n[2] !== e || n[3] !== i
    ? ((a = [`file`, `image-src`, e, ...i]), (n[2] = e), (n[3] = i), (n[4] = a))
    : (a = n[4]);
  let o;
  n[5] !== e || n[6] !== t
    ? ((o = async () => {
        let n = peers.Jza(e),
          r = t == null ? `codex` : `custom`,
          i = peers.eBa(e);
        try {
          peers.Wf.debug(`Image asset download diagnostic: started`, {
            safe: {
              pointerScheme: i,
              resolverKind: r,
            },
            sensitive: {
              assetPointer: e,
              fileId: n,
            },
          });
          let a = await peers.Xza(e, t);
          if (
            (peers.Wf.debug(`Image asset download diagnostic: URL resolved`, {
              safe: {
                pointerScheme: i,
                resolverKind: r,
              },
              sensitive: {
                downloadUrl: a.downloadUrl,
                fileId: n,
              },
            }),
            t?.useDownloadUrlAsImageSrc === !0 && a.requestHeaders == null)
          )
            return a.downloadUrl;
          let o = await peers.Qza(a);
          return (
            peers.Wf.debug(`Image asset download diagnostic: bytes fetched`, {
              safe: {
                pointerScheme: i,
                resolverKind: r,
              },
              sensitive: {
                fileId: n,
              },
            }),
            o
          );
        } catch (t) {
          let a = t;
          throw (
            peers.Wf.warning(`Image asset download failed`, {
              safe: {
                pointerScheme: i,
                resolverKind: r,
              },
              sensitive: {
                assetPointer: e,
                error: a,
                fileId: n,
              },
            }),
            a
          );
        }
      }),
      (n[5] = e),
      (n[6] = t),
      (n[7] = o))
    : (o = n[7]);
  let s;
  n[8] !== r || n[9] !== a || n[10] !== o
    ? ((s = {
        enabled: r,
        queryKey: a,
        queryFn: o,
        staleTime: peers.Hf.FIVE_MINUTES,
      }),
      (n[8] = r),
      (n[9] = a),
      (n[10] = o),
      (n[11] = s))
    : (s = n[11]);
  let { data: c, isLoading: l, isError: u, refetch: d } = peers.jt(s),
    f = typeof c == `string` ? null : c,
    p = f?.blob,
    [m, h] = (0, peers.aBa.useState)(null),
    g,
    _;
  (n[12] === p
    ? ((g = n[13]), (_ = n[14]))
    : ((g = () => {
        if (p == null) return;
        let e = null,
          t = window.setTimeout(() => {
            ((e = URL.createObjectURL(p)),
              h({
                blob: p,
                objectUrl: e,
              }));
          }, 0);
        return () => {
          (window.clearTimeout(t), e != null && peers.$za(e));
        };
      }),
      (_ = [p]),
      (n[12] = p),
      (n[13] = g),
      (n[14] = _)),
    (0, peers.aBa.useEffect)(g, _));
  let v = null;
  typeof c == `string`
    ? (v = c)
    : m != null && m.blob === p && (v = m.objectUrl);
  let y = f?.dataUrl ?? null,
    b = l || (p != null && v == null),
    x;
  n[15] === d
    ? (x = n[16])
    : ((x = () => {
        d();
      }),
      (n[15] = d),
      (n[16] = x));
  let S;
  return (
    n[17] !== u || n[18] !== v || n[19] !== y || n[20] !== b || n[21] !== x
      ? ((S = {
          dataUrl: y,
          src: v,
          isLoading: b,
          isError: u,
          refetch: x,
        }),
        (n[17] = u),
        (n[18] = v),
        (n[19] = y),
        (n[20] = b),
        (n[21] = x),
        (n[22] = S))
      : (S = n[22]),
    S
  );
}
