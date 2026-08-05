// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BRc`) / export `Ud`.

export type BindBindUnifiedSidebarChatOrderV12Peers = {
  Au: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  OK: (...args: unknown[]) => unknown;
  RE: (...args: unknown[]) => unknown;
  RRc: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  Vxo: (...args: unknown[]) => unknown;
  _Co: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gR: (...args: unknown[]) => unknown;
  mSo: (...args: unknown[]) => unknown;
  sSo: (...args: unknown[]) => unknown;
  tz: (...args: unknown[]) => unknown;
  yK: (...args: unknown[]) => unknown;
  zRc: (...args: unknown[]) => unknown;
};

let peers: BindBindUnifiedSidebarChatOrderV12Peers | null = null;

/** Wire bindBindUnifiedSidebarChatOrderV12 peers once companions land. */
export function setBindBindUnifiedSidebarChatOrderV12Peers(
  next: BindBindUnifiedSidebarChatOrderV12Peers,
): void {
  peers = next;
}

/**
 * Bundle export `Ud` / internal `BRc`.
 */
export function bindBindUnifiedSidebarChatOrderV12() {
  if (peers == null) {
    throw new Error(
      "bindBindUnifiedSidebarChatOrderV12 peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.Au(),
      peers.DD(),
      peers.Vf(),
      peers.Vxo(),
      peers.RE(),
      peers.yK(),
      peers.sSo(),
      peers.OK(),
      peers.OE(),
      peers._Co(),
      peers.mSo(),
      peers.tz(),
      peers.gR(),
      (RRc = `The fork contains completed history only. If the source thread was running, the active turn and unfinished response are not in the child. Send a follow-up message to threadId only if the task requires work to continue there.`),
      (zRc = `The worktree is being created asynchronously, so no child thread id exists yet. Wait for worktree setup to finish, then send a follow-up message to the child only if the task requires work to continue there.`));
  });
}
