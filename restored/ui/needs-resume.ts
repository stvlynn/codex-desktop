// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qAr`) / export `i$`.

export type NeedsResumePeers = {
  $Dt: (...args: unknown[]) => unknown;
  BAr: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  FAr: (...args: unknown[]) => unknown;
  GAr: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  KAr: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Knr: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qnr: (...args: unknown[]) => unknown;
  RAr: (...args: unknown[]) => unknown;
  UAr: (...args: unknown[]) => unknown;
  VAr: (...args: unknown[]) => unknown;
  WAr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  hD: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  lD: (...args: unknown[]) => unknown;
  mD: (...args: unknown[]) => unknown;
  pD: (...args: unknown[]) => unknown;
  rD: (...args: unknown[]) => unknown;
  threadRuntimeStatus: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
  vnr: (...args: unknown[]) => unknown;
};

let peers: NeedsResumePeers | null = null;

/** Wire needsResume peers once companions land. */
export function setNeedsResumePeers(next: NeedsResumePeers): void {
  peers = next;
}

/**
 * Bundle export `i$` / internal `qAr`.
 */
export function needsResume() {
  if (peers == null) {
    throw new Error("needsResume peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.DD(), peers.VAr(), peers.RAr(), peers.$Dt(), peers.ed(), peers.K_(), GAr = peers.Oa(peers.Q, (e, {
      get: t
    }) => {
      let n = t(peers.vnr, peers.e),
        r = t(peers.rD, peers.e) ?? n?.hostId ?? `local`;
      return peers.UAr({
        hasInProgressOwnedWork: t(peers.FAr, peers.e) || t(peers.BAr, r).has(peers.e),
        isResponseInProgress: t(peers.lD, peers.e),
        resumeState: t(peers.hD, peers.e) ?? (n == null ? null : `needs_resume`),
        threadRuntimeStatus: t(peers.Knr, peers.e) ?? n?.threadRuntimeStatus ?? null,
        latestTurnHasSystemError: t(peers.Qnr, peers.e) === !0
      });
    }), KAr = peers.Oa(peers.Q, (e, {
      get: t
    }) => peers.WAr({
      pendingRequestType: t(peers.mD, peers.e)?.type ?? null,
      requests: t(peers.pD, peers.e),
      resumeState: t(peers.hD, peers.e),
      threadRuntimeStatus: t(peers.Knr, peers.e)
    }));
  });
}
