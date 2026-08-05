// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `B8l`) / export `Hr`.

export type BindDeferredConversationHr3Peers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R8l: (...args: unknown[]) => unknown;
  Xnr: (...args: unknown[]) => unknown;
  Znr: (...args: unknown[]) => unknown;
  hD: (...args: unknown[]) => unknown;
  iD: (...args: unknown[]) => unknown;
  rD: (...args: unknown[]) => unknown;
  z8l: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationHr3Peers | null = null;

/** Wire bindDeferredConversationHr3 peers once companions land. */
export function setBindDeferredConversationHr3Peers(
  next: BindDeferredConversationHr3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `Hr` / internal `B8l`.
 */
export function bindDeferredConversationHr3() {
  if (peers == null) {
    throw new Error("bindDeferredConversationHr3 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) =>
    peers.R8l({
      hasConversation: t(peers.iD, e),
      hostId: t(peers.rD, e),
      latestTurnId: t(peers.Xnr, e),
      latestTurnStatus: t(peers.Znr, e),
      pendingRequestType: t(peers.z8l, e),
      resumeState: t(peers.hD, e),
    }),
  );
}
