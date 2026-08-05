// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CBo`) / export `ZD`.

export type UseWhamToggleAllDiffsPeers = {
  CustomEvent: (...args: unknown[]) => unknown;
  EBo: (...args: unknown[]) => unknown;
  TBo: (...args: unknown[]) => unknown;
  wBo: (...args: unknown[]) => unknown;
};

let peers: UseWhamToggleAllDiffsPeers | null = null;

/** Wire useWhamToggleAllDiffs peers once companions land. */
export function setUseWhamToggleAllDiffsPeers(
  next: UseWhamToggleAllDiffsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ZD` / internal `CBo`.
 */
export function useWhamToggleAllDiffs(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useWhamToggleAllDiffs peers are not configured");
  }

  let n = (0, peers.wBo.c)(6),
    r,
    i;
  (n[0] !== e || n[1] !== t
    ? ((r = () => {
        let n = function (n) {
          let r = n.detail.scope;
          (t && r !== t) || (!t && r) || e(n.detail.open);
        };
        return (
          window.addEventListener(peers.EBo, n),
          () => {
            window.removeEventListener(peers.EBo, n);
          }
        );
      }),
      (i = [e, t]),
      (n[0] = e),
      (n[1] = t),
      (n[2] = r),
      (n[3] = i))
    : ((r = n[2]), (i = n[3])),
    (0, peers.TBo.useEffect)(r, i));
  let a;
  return (
    n[4] === t
      ? (a = n[5])
      : ((a = (e) => {
          let n = new peers.CustomEvent(peers.EBo, {
            detail: {
              open: e,
              scope: t,
            },
          });
          window.dispatchEvent(n);
        }),
        (n[4] = t),
        (n[5] = a)),
    a
  );
}
