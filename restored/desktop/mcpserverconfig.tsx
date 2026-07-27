// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LNl`) / export `Ns`.

export type BindBindMCPSERVERCONFIGPeers = {
  FNl: (...args: unknown[]) => unknown;
  INl: (...args: unknown[]) => unknown;
  JR: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindBindMCPSERVERCONFIGPeers | null = null;

/** Wire bindBindMCPSERVERCONFIG peers once companions land. */
export function setBindBindMCPSERVERCONFIGPeers(next: BindBindMCPSERVERCONFIGPeers): void {
  peers = next;
}

/**
 * Bundle export `Ns` / internal `LNl`.
 */
export function bindBindMCPSERVERCONFIG() {
  if (peers == null) {
    throw new Error("bindBindMCPSERVERCONFIG peers are not configured");
  }

  return peers.e(() => {
    FNl = peers.r(peers.JR(), 1), INl = {
      CONFIG: 0,
      AGENTS_MD: 1,
      SKILLS: 2,
      COMMANDS: 3,
      SUBAGENTS: 4,
      HOOKS: 5,
      PLUGINS: 6,
      MCP_SERVER_CONFIG: 7,
      MEMORY: 8,
      SESSIONS: 9
    };
  });
}
