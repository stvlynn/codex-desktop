// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `g$r` companion for export `KJ`.

export type AssistantBranchNode = {
  assistantTurns: Array<{ id: string }>;
  children: Record<string, AssistantBranchNode | undefined>;
};

/** Path of assistant turn ids from root to `targetId`. */
export function findAssistantTurnIdPath(node: AssistantBranchNode, targetId: string): string[] | null {
  for (const turn of node.assistantTurns) {
    if (turn.id === targetId) return [turn.id];
    const child = node.children[turn.id];
    const nested = child ? findAssistantTurnIdPath(child, targetId) : null;
    if (nested) return [turn.id, ...nested];
  }
  return null;
}
