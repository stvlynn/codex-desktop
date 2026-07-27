// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `Kzi`) / export `lU`.
// Session/target peers bind via setAddNamedPanelSessionPeers.

export type AddNamedPanelSessionPeers = {
  addSessionForConversation: (conversationId: string) => unknown;
  bindSessionToPanel: (store: unknown, target: unknown, side: string) => void;
  openSessionInPanel: (
    store: unknown,
    target: unknown,
    session: unknown,
    focus: boolean,
    side: string,
    sessionAgain: unknown,
  ) => void;
  resolveActiveTarget: (store: unknown) => {
    conversationId: string;
  } | null;
};

let peers: AddNamedPanelSessionPeers | null = null;

/** Wire panel session helpers once companions land. */
export function setAddNamedPanelSessionPeers(
  next: AddNamedPanelSessionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lU` / internal `Kzi`.
 * Create a conversation session and place it into the named panel side.
 */
export function addNamedPanelSession(store: unknown, side: string): void {
  if (peers == null) {
    throw new Error("Add named panel session peers are not configured");
  }
  const target = peers.resolveActiveTarget(store);
  if (target == null) return;
  const session = peers.addSessionForConversation(target.conversationId);
  peers.bindSessionToPanel(store, target, side);
  peers.openSessionInPanel(store, target, session, true, side, session);
}
