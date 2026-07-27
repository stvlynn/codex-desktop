// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `knr`) / export `y2`.

export type BindY2CoShellPeers = {
  JE: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
};

let peers: BindY2CoShellPeers | null = null;

/** Wire bindY2CoShell peers once companions land. */
export function setBindY2CoShellPeers(next: BindY2CoShellPeers): void {
  peers = next;
}

/**
 * Bundle export `y2` / internal `knr`.
 */
export function bindY2CoShell() {
  if (peers == null) {
    throw new Error("bindY2CoShell peers are not configured");
  }

  return peers.JE(({
    resumeState: e,
    threadRuntimeStatus: t
  }) => e === `needs_resume` && t?.type === `active`);
}
