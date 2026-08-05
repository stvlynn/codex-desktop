// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tCo`) / export `Qk`.

export type UseCanPinThreadActionPeers = {
  EK: (...args: unknown[]) => unknown;
  FA: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  lCo: (...args: unknown[]) => unknown;
  threadIds: (...args: unknown[]) => unknown;
};

let peers: UseCanPinThreadActionPeers | null = null;

/** Wire useCanPinThreadAction peers once companions land. */
export function setUseCanPinThreadActionPeers(
  next: UseCanPinThreadActionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Qk` / internal `tCo`.
 */
export function useCanPinThreadAction(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useCanPinThreadAction peers are not configured");
  }

  let n = (0, peers.lCo.c)(16),
    r;
  n[0] === t
    ? (r = n[1])
    : ((r = t === void 0 ? {} : t), (n[0] = t), (n[1] = r));
  let { canPin: i } = r,
    a = i === void 0 ? !0 : i,
    o = peers.Io(peers.Q),
    { data: s } = peers.Y(peers.FA),
    c;
  n[2] === s?.threadIds
    ? (c = n[3])
    : ((c = s?.threadIds ?? []), (n[2] = s?.threadIds), (n[3] = c));
  let l = c,
    u;
  n[4] !== a || n[5] !== e || n[6] !== l
    ? ((u = a && e != null && l.includes(e)),
      (n[4] = a),
      (n[5] = e),
      (n[6] = l),
      (n[7] = u))
    : (u = n[7]);
  let d = u,
    f;
  n[8] !== a || n[9] !== e || n[10] !== d || n[11] !== o
    ? ((f = () => {
        !a || e == null || peers.EK(o, e, !d);
      }),
      (n[8] = a),
      (n[9] = e),
      (n[10] = d),
      (n[11] = o),
      (n[12] = f))
    : (f = n[12]);
  let p = f,
    m;
  return (
    n[13] !== d || n[14] !== p
      ? ((m = {
          isPinned: d,
          togglePin: p,
        }),
        (n[13] = d),
        (n[14] = p),
        (n[15] = m))
      : (m = n[15]),
    m
  );
}
