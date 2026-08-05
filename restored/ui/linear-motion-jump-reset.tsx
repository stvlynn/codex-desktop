// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JEs`) / export `Bv`.

export type BindLinearMotionJumpResetPeers = {
  QEs: (...args: unknown[]) => unknown;
  XEs: (...args: unknown[]) => unknown;
  YEs: (...args: unknown[]) => unknown;
  ZEs: (...args: unknown[]) => unknown;
  gYe: (...args: unknown[]) => unknown;
  nDs: (...args: unknown[]) => unknown;
  oDs: (...args: unknown[]) => unknown;
  rDs: (...args: unknown[]) => unknown;
  rf: (...args: unknown[]) => unknown;
  tf: (...args: unknown[]) => unknown;
  yDs: (...args: unknown[]) => unknown;
};

let peers: BindLinearMotionJumpResetPeers | null = null;

/** Wire bindLinearMotionJumpReset peers once companions land. */
export function setBindLinearMotionJumpResetPeers(
  next: BindLinearMotionJumpResetPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Bv` / internal `JEs`.
 */
export function bindLinearMotionJumpReset(e: unknown) {
  if (peers == null) {
    throw new Error("bindLinearMotionJumpReset peers are not configured");
  }

  let t = (0, peers.oDs.c)(15),
    n = peers.tf(0),
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = () => {
        (n.stop(), n.jump(0));
      }),
      (t[0] = n),
      (t[1] = r));
  let i = r,
    a = peers.rf(n, peers.QEs),
    o = peers.rf(n, peers.ZEs),
    s = peers.rf(n, peers.XEs),
    c = peers.rf(n, peers.YEs),
    l = peers.rf(n, peers.nDs),
    u = peers.rf(n, peers.rDs),
    d;
  t[2] !== e || t[3] !== i || t[4] !== n
    ? ((d = (t) => {
        if ((i(), e)) {
          (n.jump(1), t());
          return;
        }
        peers
          .gYe(n, 1, {
            duration: peers.yDs / 1e3,
            ease: `linear`,
          })
          .then(t, t);
      }),
      (t[2] = e),
      (t[3] = i),
      (t[4] = n),
      (t[5] = d))
    : (d = t[5]);
  let f;
  return (
    t[6] !== i ||
    t[7] !== a ||
    t[8] !== o ||
    t[9] !== s ||
    t[10] !== c ||
    t[11] !== l ||
    t[12] !== u ||
    t[13] !== d
      ? ((f = {
          bloomOpacity: a,
          bloomScale: o,
          fillColor: s,
          progress: c,
          reset: i,
          shimmerOpacity: l,
          shimmerX: u,
          start: d,
        }),
        (t[6] = i),
        (t[7] = a),
        (t[8] = o),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l),
        (t[12] = u),
        (t[13] = d),
        (t[14] = f))
      : (f = t[14]),
    f
  );
}
