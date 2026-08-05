// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `GAr`) / export `o$`.

export type BindDeferredUiO2Peers = {
  BAr: (...args: unknown[]) => unknown;
  FAr: (...args: unknown[]) => unknown;
  Knr: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qnr: (...args: unknown[]) => unknown;
  UAr: (...args: unknown[]) => unknown;
  hD: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  lD: (...args: unknown[]) => unknown;
  rD: (...args: unknown[]) => unknown;
  threadRuntimeStatus: (...args: unknown[]) => unknown;
  vnr: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiO2Peers | null = null;

/** Wire bindDeferredUiO2 peers once companions land. */
export function setBindDeferredUiO2Peers(next: BindDeferredUiO2Peers): void {
  peers = next;
}

/**
 * Bundle export `o$` / internal `GAr`.
 */
export function bindDeferredUiO2() {
  if (peers == null) {
    throw new Error("bindDeferredUiO2 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) => {
    let n = t(peers.vnr, e),
      r = t(peers.rD, e) ?? n?.hostId ?? `local`;
    return peers.UAr({
      hasInProgressOwnedWork: t(peers.FAr, e) || t(peers.BAr, r).has(e),
      isResponseInProgress: t(peers.lD, e),
      resumeState: t(peers.hD, e) ?? (n == null ? null : `needs_resume`),
      threadRuntimeStatus: t(peers.Knr, e) ?? n?.threadRuntimeStatus ?? null,
      latestTurnHasSystemError: t(peers.Qnr, e) === !0,
    });
  });
}
