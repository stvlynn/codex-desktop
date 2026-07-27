// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Vdl`) / export `Cc`.

export type UseRealtimeCallIdsBridgePeers = {
  C$i: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Jdl: (...args: unknown[]) => unknown;
  Vxe: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  ZGi: (...args: unknown[]) => unknown;
  dz: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  isFullScreen: (...args: unknown[]) => unknown;
  qdl: (...args: unknown[]) => unknown;
  sidePanelSourceMcpAppId: (...args: unknown[]) => unknown;
  uz: (...args: unknown[]) => unknown;
};

let peers: UseRealtimeCallIdsBridgePeers | null = null;

/** Wire useRealtimeCallIdsBridge peers once companions land. */
export function setUseRealtimeCallIdsBridgePeers(next: UseRealtimeCallIdsBridgePeers): void {
  peers = next;
}

/**
 * Bundle export `Cc` / internal `Vdl`.
 */
export function useRealtimeCallIdsBridge(e: unknown) {
  if (peers == null) {
    throw new Error("useRealtimeCallIdsBridge peers are not configured");
  }

  let t = (0, peers.qdl.c)(6),
    { callIds: n } = e,
    r = peers.Io(peers.hT),
    i = peers.Y(peers.uz),
    a = peers.Y(peers.dz),
    o,
    s;
  return (
    t[0] !== n || t[1] !== i || t[2] !== a || t[3] !== r
      ? ((o = () => {
          for (let e of n) {
            let t = peers.Vxe(e);
            (i.get(t)?.sidePanelSourceMcpAppId != null &&
              a.get(t)?.isFullScreen === !0) ||
              (peers.ZGi(r, t), peers.C$i(r, t));
          }
        }),
        (s = [n, i, a, r]),
        (t[0] = n),
        (t[1] = i),
        (t[2] = a),
        (t[3] = r),
        (t[4] = o),
        (t[5] = s))
      : ((o = t[4]), (s = t[5])),
    (0, peers.Jdl.useLayoutEffect)(o, s),
    null
  );
}
