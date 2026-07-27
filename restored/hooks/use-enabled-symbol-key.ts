// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qAs`) / export `bv`.

export type UseEnabledSymbolKeyPeers = {
  $As: (...args: unknown[]) => unknown;
  JAs: (...args: unknown[]) => unknown;
  ZAs: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  lookupKey: (...args: unknown[]) => unknown;
};

let peers: UseEnabledSymbolKeyPeers | null = null;

/** Wire useEnabledSymbolKey peers once companions land. */
export function setUseEnabledSymbolKeyPeers(next: UseEnabledSymbolKeyPeers): void {
  peers = next;
}

/**
 * Bundle export `bv` / internal `qAs`.
 */
export function useEnabledSymbolKey(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useEnabledSymbolKey peers are not configured");
  }

  let n = (0, peers.ZAs.c)(7),
    r = t?.enabled ?? !0,
    i = r ? e : void 0,
    a;
  n[0] === i ? (a = n[1]) : ((a = Symbol(i)), (n[0] = i), (n[1] = a));
  let o = a,
    [s, c] = (0, peers.$As.useState)(null),
    l,
    u;
  return (
    n[2] !== e || n[3] !== r || n[4] !== o
      ? ((l = () => {
          if (!e || !r) return;
          let t = !1;
          return (
            peers.JAs(e).then((e) => {
              t ||
                c({
                  lookupKey: o,
                  gitRoot: e,
                });
            }),
            () => {
              t = !0;
            }
          );
        }),
        (u = [e, r, o]),
        (n[2] = e),
        (n[3] = r),
        (n[4] = o),
        (n[5] = l),
        (n[6] = u))
      : ((l = n[5]), (u = n[6])),
    (0, peers.$As.useEffect)(l, u),
    r && s?.lookupKey === o ? s.gitRoot : null
  );
}
