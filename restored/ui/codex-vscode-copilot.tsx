// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kSe`) / export `xmt`.

export type BindCodexVscodeCopilotPeers = {
  DSe: (...args: unknown[]) => unknown;
  OSe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  rme: (...args: unknown[]) => unknown;
};

let peers: BindCodexVscodeCopilotPeers | null = null;

/** Wire bindCodexVscodeCopilot peers once companions land. */
export function setBindCodexVscodeCopilotPeers(next: BindCodexVscodeCopilotPeers): void {
  peers = next;
}

/**
 * Bundle export `xmt` / internal `kSe`.
 */
export function bindCodexVscodeCopilot() {
  if (peers == null) {
    throw new Error("bindCodexVscodeCopilot peers are not configured");
  }

  return peers.e(() => {
    peers.rme(), DSe = `codex_vscode_copilot`, OSe = `Copilot`;
  });
}
