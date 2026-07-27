// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `V8l`) / export `Ur`.

export type BindBindMissingConversationPeers = {
  B8l: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R8l: (...args: unknown[]) => unknown;
  Xnr: (...args: unknown[]) => unknown;
  Znr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  hD: (...args: unknown[]) => unknown;
  iD: (...args: unknown[]) => unknown;
  mD: (...args: unknown[]) => unknown;
  oRc: (...args: unknown[]) => unknown;
  rD: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
  z8l: (...args: unknown[]) => unknown;
};

let peers: BindBindMissingConversationPeers | null = null;

/** Wire bindBindMissingConversation peers once companions land. */
export function setBindBindMissingConversationPeers(next: BindBindMissingConversationPeers): void {
  peers = next;
}

/**
 * Bundle export `Ur` / internal `V8l`.
 */
export function bindBindMissingConversation() {
  if (peers == null) {
    throw new Error("bindBindMissingConversation peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.DD(), peers.ed(), peers.oRc(), z8l = peers.Oa(peers.Q, (e, {
      get: t
    }) => t(peers.mD, peers.e)?.type ?? null), B8l = peers.Oa(peers.Q, (e, {
      get: t
    }) => peers.R8l({
      hasConversation: t(peers.iD, peers.e),
      hostId: t(peers.rD, peers.e),
      latestTurnId: t(peers.Xnr, peers.e),
      latestTurnStatus: t(peers.Znr, peers.e),
      pendingRequestType: t(peers.z8l, peers.e),
      resumeState: t(peers.hD, peers.e)
    }));
  });
}
