// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ttt`) / export `mlt`.

export type BindClosedAgentSendFailed2Peers = {
  e: (...args: unknown[]) => unknown;
  ett: (...args: unknown[]) => unknown;
};

let peers: BindClosedAgentSendFailed2Peers | null = null;

/** Wire bindClosedAgentSendFailed2 peers once companions land. */
export function setBindClosedAgentSendFailed2Peers(next: BindClosedAgentSendFailed2Peers): void {
  peers = next;
}

/**
 * Bundle export `mlt` / internal `ttt`.
 */
export function bindClosedAgentSendFailed2() {
  if (peers == null) {
    throw new Error("bindClosedAgentSendFailed2 peers are not configured");
  }

  return peers.e(() => {
    ett = [`codex-app`, `dictation`, `streaming`].join(`-`);
  });
}
