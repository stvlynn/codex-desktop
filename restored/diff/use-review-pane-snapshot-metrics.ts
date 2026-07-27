// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `U6s`) / export `Um`.

export type UseReviewPaneSnapshotMetricsPeers = {
  Bf: (...args: unknown[]) => unknown;
  EIi: (...args: unknown[]) => unknown;
  G6s: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  JI: (...args: unknown[]) => unknown;
  Mar: (...args: unknown[]) => unknown;
  Nar: (...args: unknown[]) => unknown;
  OI: (...args: unknown[]) => unknown;
  RLi: (...args: unknown[]) => unknown;
  W6s: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  a6n: (...args: unknown[]) => unknown;
  gE: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  kIi: (...args: unknown[]) => unknown;
  kLi: (...args: unknown[]) => unknown;
  kl: (...args: unknown[]) => unknown;
  o1: (...args: unknown[]) => unknown;
  pLi: (...args: unknown[]) => unknown;
  pnr: (...args: unknown[]) => unknown;
};
let peers: UseReviewPaneSnapshotMetricsPeers | null = null;

/** Wire useReviewPaneSnapshotMetrics peers once companions land. */
export function setUseReviewPaneSnapshotMetricsPeers(
  next: UseReviewPaneSnapshotMetricsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Um` / internal `U6s`.
 */
export function useReviewPaneSnapshotMetrics(e: unknown) {
  if (peers == null) {
    throw new Error("useReviewPaneSnapshotMetrics peers are not configured");
  }
  let { lastTurnCwd, lastTurnDiff } = e,
    i = peers.Io(peers.hT),
    a = peers.Y(peers.OI),
    o = peers.Y(peers.kLi),
    s = peers.Y(peers.RLi),
    c,
    l;
  c = () => {
    return peers.kIi(i);
  };
  l = [i];
  peers.o1.useEffect(c, l);
  let u, d;
  u = () => {
    peers.EIi(i, lastTurnDiff, lastTurnCwd);
  };
  d = [lastTurnCwd, lastTurnDiff, i];
  peers.o1.useEffect(u, d);
  let f, p;
  f = () => {
    s && peers.pLi(i);
  };
  p = [i, s];
  peers.o1.useEffect(f, p);
  let m = () => {
    peers.Bf("set-review-pane-snapshot-metrics-for-host", {
      hostId: a,
      reviewDiffFilesTotal: o.fileCount,
      reviewDiffLinesTotal: o.lineCount,
      reviewDiffBytesEstimate: o.bytesEstimate,
    });
  };
  let h;
  h = [a, o];
  peers.o1.useEffect(m, h);
  let g, _;
  _ = () => {
    return () => {
      peers.Bf("set-review-pane-snapshot-metrics-for-host", {
        hostId: a,
        reviewDiffFilesTotal: 0,
        reviewDiffLinesTotal: 0,
        reviewDiffBytesEstimate: 0,
      });
    };
  };
  g = [a];
  peers.o1.useEffect(_, g);
  let v, y;
  v = () => {
    return i.watch((e) => {
      let { get } = e;
      if (!get(peers.JI)) {
        i.set(peers.G6s, false);
        return;
      }
      get(peers.G6s) ||
        (i.set(peers.G6s, true),
        peers.Nar() ||
          peers.Mar(i, true, {
            animate: false,
            persist: false,
          }));
    });
  };
  y = [i];
  peers.o1.useEffect(v, y);
  let b = (e) => {
    let { item, threadId } = e.notification.params;
    i.get(peers.gE) === "last-turn-only" ||
      e.hostId !== a ||
      i.value.routeKind !== "local-thread" ||
      peers.kl(threadId) !== i.value.conversationId ||
      item.type !== "fileChange" ||
      item.status !== "completed" ||
      peers.a6n(i.queryClient, {
        hostId: e.hostId,
      });
  };
  let x = peers.o1.useEffectEvent(b),
    S = () => {
      let e = i.get(peers.pnr);
      return i.watch((t) => {
        let { get } = t,
          r = get(peers.pnr);
        r != null && r !== e && x(r);
      });
    };
  let C;
  return ((C = [i]), peers.o1.useEffect(S, C), null);
}
