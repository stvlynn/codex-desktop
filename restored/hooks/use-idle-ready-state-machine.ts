// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `x5s`) / export `fm`.

export type UseIdleReadyStateMachinePeers = {
  C5s: (...args: unknown[]) => unknown;
  D5s: (...args: unknown[]) => unknown;
  RZ: (...args: unknown[]) => unknown;
  S5s: (...args: unknown[]) => unknown;
  T5s: (...args: unknown[]) => unknown;
  b5s: (...args: unknown[]) => unknown;
  g1: (...args: unknown[]) => unknown;
  k5s: (...args: unknown[]) => unknown;
  rp: (...args: unknown[]) => unknown;
  rr: (...args: unknown[]) => unknown;
  w5s: (...args: unknown[]) => unknown;
  y5s: (...args: unknown[]) => unknown;
};

let peers: UseIdleReadyStateMachinePeers | null = null;

/** Wire useIdleReadyStateMachine peers once companions land. */
export function setUseIdleReadyStateMachinePeers(next: UseIdleReadyStateMachinePeers): void {
  peers = next;
}

/**
 * Bundle export `fm` / internal `x5s`.
 */
export function useIdleReadyStateMachine(e: unknown) {
  if (peers == null) {
    throw new Error("useIdleReadyStateMachine peers are not configured");
  }

  let t = peers.RZ(),
    [n, r] = peers.rr(peers.k5s),
    [i, a] = (0, peers.S5s.useState)(null),
    [o, s] = (0, peers.S5s.useState)(`idle`),
    c = (0, peers.S5s.useRef)(n);
  ((0, peers.S5s.useEffect)(() => {
    c.current = n;
  }, [n]),
    (0, peers.S5s.useEffect)(() => {
      if (!e || t) {
        (a(null), s(`idle`));
        return;
      }
      let n = c.current,
        i = n != null;
      (a(n), s(i ? `ready` : `idle`));
      let o = Date.now(),
        l = peers.b5s(o);
      if (
        peers.g1.inFlight != null ||
        peers.g1.lastStartedBucket === l ||
        (peers.g1.failedAtMs != null && o - peers.g1.failedAtMs < peers.D5s)
      )
        return;
      let u = !1;
      peers.g1.lastStartedBucket = l;
      let d = (async () => {
        try {
          let e = await peers.rp(`fast-mode-rollout-metrics`, {
            params: {
              startTimeMs: Date.now() - peers.w5s,
              maxRollouts: peers.T5s,
            },
          });
          if (e == null) return;
          (r({
            estimatedSavedMs: e.estimatedSavedMs,
            rolloutCountWithCompletedTurns: e.rolloutCountWithCompletedTurns,
            computedAtMs: Date.now(),
          }),
            (peers.g1.failedAtMs = null));
        } catch {
          ((peers.g1.failedAtMs = Date.now()), !u && !i && s(`failed`));
        } finally {
          peers.g1.inFlight = null;
        }
      })();
      return (
        (peers.g1.inFlight = d),
        () => {
          u = !0;
        }
      );
    }, [e, t, r]));
  let l = (0, peers.S5s.useMemo)(() => {
    if (
      !e ||
      t ||
      i == null ||
      i.rolloutCountWithCompletedTurns < 1 ||
      i.estimatedSavedMs < peers.C5s
    )
      return null;
    let n = Math.round(i.estimatedSavedMs / 6e4);
    return {
      savedHours: Math.floor(n / 60),
      savedMinutes: n % 60,
      threadCount: i.rolloutCountWithCompletedTurns,
    };
  }, [e, t, i]);
  return !e || t
    ? {
        estimate: null,
        estimateStatus: `idle`,
        isEstimateFreshForAnnouncement: !1,
      }
    : l == null || i == null
      ? {
          estimate: null,
          estimateStatus: o,
          isEstimateFreshForAnnouncement: !1,
        }
      : {
          estimate: l,
          estimateStatus: o,
          isEstimateFreshForAnnouncement: peers.y5s(i.computedAtMs),
        };
}
