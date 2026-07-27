// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TZ`) / export `Sx`.

export type UseEffectEventWhenReadyPeers = {
  vhs: (...args: unknown[]) => unknown;
  yhs: (...args: unknown[]) => unknown;
};

let peers: UseEffectEventWhenReadyPeers | null = null;

/** Wire useEffectEventWhenReady peers once companions land. */
export function setUseEffectEventWhenReadyPeers(next: UseEffectEventWhenReadyPeers): void {
  peers = next;
}

/**
 * Bundle export `Sx` / internal `TZ`.
 */
export function useEffectEventWhenReady(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useEffectEventWhenReady peers are not configured");
  }

  let n = (0, peers.vhs.c)(5),
    r = (0, peers.yhs.useEffectEvent)(e),
    i;
  n[0] !== t || n[1] !== r
    ? ((i = () => {
        if (t == null) return;
        let e = window.setInterval(() => {
          r();
        }, t);
        return () => {
          window.clearInterval(e);
        };
      }),
      (n[0] = t),
      (n[1] = r),
      (n[2] = i))
    : (i = n[2]);
  let a;
  (n[3] === t ? (a = n[4]) : ((a = [t]), (n[3] = t), (n[4] = a)),
    (0, peers.yhs.useEffect)(i, a));
}
