// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `h$r` / export `KJ`.

import { findAssistantTurnIdPath } from "./find-assistant-turn-id-path";
import { pickPreferredById } from "../utils/pick-preferred-by-id";

export type AssistantBranchWalkNode = {
  assistantTurns: Array<{ id: string; discarded?: boolean }>;
  children: Record<string, AssistantBranchWalkNode | undefined>;
};

/** Walk the active assistant branch, optionally biased by `activeTurnId`. */
export function walkAssistantBranchPath(
  root: AssistantBranchWalkNode | null | undefined,
  activeTurnId?: string | null,
): Array<{ node: AssistantBranchWalkNode; activeId: string | null }> {
  if (!root) return [];
  const path: Array<{
    node: AssistantBranchWalkNode;
    activeId: string | null;
  }> = [];
  let preferred = activeTurnId
    ? findAssistantTurnIdPath(root, activeTurnId)
    : null;
  let node: AssistantBranchWalkNode | undefined = root;
  while (node) {
    const hint = preferred?.[0] ?? node.assistantTurns[0]?.id ?? "";
    const activeId = pickPreferredById(node.assistantTurns, hint)?.id ?? null;
    path.push({ node, activeId });
    if (!activeId) break;
    preferred = preferred?.[0] === activeId ? preferred.slice(1) : null;
    node = node.children[activeId];
  }
  return path;
}
