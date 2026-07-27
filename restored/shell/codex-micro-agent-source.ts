// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jEe`) / export `Ppt`.

export type CodexMicroAgentSourcePeers = {
  AEe: (...args: unknown[]) => unknown;
  ape: (...args: unknown[]) => unknown;
  bpe: (...args: unknown[]) => unknown;
  bu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gpe: (...args: unknown[]) => unknown;
  ipe: (...args: unknown[]) => unknown;
  ppe: (...args: unknown[]) => unknown;
  xpe: (...args: unknown[]) => unknown;
  xu: (...args: unknown[]) => unknown;
  ype: (...args: unknown[]) => unknown;
  yu: (...args: unknown[]) => unknown;
};

let peers: CodexMicroAgentSourcePeers | null = null;

/** Wire codexMicroAgentSource peers once companions land. */
export function setCodexMicroAgentSourcePeers(next: CodexMicroAgentSourcePeers): void {
  peers = next;
}

/**
 * Bundle export `Ppt` / internal `jEe`.
 */
export function codexMicroAgentSource() {
  if (peers == null) {
    throw new Error("codexMicroAgentSource peers are not configured");
  }

  return peers.e(() => {
    peers.xpe(), peers.xu(), AEe = {
      agentSource: peers.yu({
        agentAccess: `hidden`,
        default: peers.gpe,
        description: `Task source for Codex Micro agent keys`,
        key: `codex-micro-agent-source`,
        schema: peers.ppe
      }),
      layout: peers.yu({
        agentAccess: `hidden`,
        default: peers.bpe,
        description: `Configured action-key layout for Codex Micro`,
        key: `codex-micro-layout`,
        schema: peers.ype
      }),
      lightingBrightness: peers.bu({
        agentAccess: `hidden`,
        default: 100,
        description: `Brightness of Codex Micro lighting`,
        key: `codex-micro-lighting-brightness`,
        schema: peers.ape
      }),
      lightingAutoOff: peers.bu({
        agentAccess: `hidden`,
        default: `3-minutes`,
        description: `When Codex Micro lighting turns off after inactivity`,
        key: `codex-micro-lighting-auto-off`,
        schema: peers.ipe
      })
    };
  });
}
