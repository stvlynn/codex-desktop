// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ntn` / export `S9`; companion `Ptn`.

/** Mutable registry of agent-id → display name for mentions. */
export const agentMentionNames = new Map<string, string>();

/** Format an `@agent` mention label from the registry or id prefix. */
export function formatAgentMention(agentId: string): string {
  const name = agentMentionNames.get(agentId);
  return name == null ? `@agent-${agentId.slice(0, 8)}` : `@${name}`;
}
