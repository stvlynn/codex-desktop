// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Anr`) / export `S2`.

export type BindS2CoShellPeers = {
  JE: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
};

let peers: BindS2CoShellPeers | null = null;

/** Wire bindS2CoShell peers once companions land. */
export function setBindS2CoShellPeers(next: BindS2CoShellPeers): void {
  peers = next;
}

/**
 * Bundle export `S2` / internal `Anr`.
 */
export function bindS2CoShell() {
  if (peers == null) {
    throw new Error("bindS2CoShell peers are not configured");
  }

  return peers.JE(
    ({ ephemeral: e, sideConversation: t, threadRuntimeStatus: n }) =>
      e === !0 && t === !0 && n?.type === `notLoaded`,
  );
}
