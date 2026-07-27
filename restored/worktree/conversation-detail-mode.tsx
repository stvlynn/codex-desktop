// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `QEe`) / export `_pt`.

export type BindBindConversationDetailModePeers = {
  Sl: (...args: unknown[]) => unknown;
  ZEe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  vu: (...args: unknown[]) => unknown;
  xu: (...args: unknown[]) => unknown;
};

let peers: BindBindConversationDetailModePeers | null = null;

/** Wire bindBindConversationDetailMode peers once companions land. */
export function setBindBindConversationDetailModePeers(next: BindBindConversationDetailModePeers): void {
  peers = next;
}

/**
 * Bundle export `_pt` / internal `QEe`.
 */
export function bindBindConversationDetailMode() {
  if (peers == null) {
    throw new Error("bindBindConversationDetailMode peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), peers.xu(), ZEe = {
      conversationDetailMode: peers.vu({
        agentAccess: `read-write`,
        default: `STEPS_COMMANDS`,
        description: `How much turn detail Codex shows`,
        key: `conversationDetailMode`,
        schema: peers.pl([`STEPS_PROSE`, `STEPS_COMMANDS`, `STEPS_EXECUTION`])
      })
    };
  });
}
