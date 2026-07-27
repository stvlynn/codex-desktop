// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Kf`) / export `ldt`.

export type UseWindowEventPeers = {
  MZe: (...args: unknown[]) => unknown;
  jZe: (...args: unknown[]) => unknown;
  qf: (...args: unknown[]) => unknown;
};

let peers: UseWindowEventPeers | null = null;

/** Wire useWindowEvent peers once companions land. */
export function setUseWindowEventPeers(next: UseWindowEventPeers): void {
  peers = next;
}

/**
 * Bundle export `ldt` / internal `Kf`.
 */
export function useWindowEvent(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("useWindowEvent peers are not configured");
  }

  let r = (0, peers.jZe.c)(9),
    i;
  r[0] === n
    ? (i = r[1])
    : ((i = n === void 0 ? [] : n), (r[0] = n), (r[1] = i));
  let a = i,
    o;
  r[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = peers.qf.getInstance()), (r[2] = o))
    : (o = r[2]);
  let s = o,
    c = (0, peers.MZe.useEffectEvent)(t),
    l;
  r[3] !== c || r[4] !== e
    ? ((l = () => {
        let t = s.subscribe(e, c);
        return () => t();
      }),
      (r[3] = c),
      (r[4] = e),
      (r[5] = l))
    : (l = r[5]);
  let u;
  (r[6] !== a || r[7] !== e
    ? ((u = [s, e, ...a]), (r[6] = a), (r[7] = e), (r[8] = u))
    : (u = r[8]),
    (0, peers.MZe.useEffect)(l, u));
}
