// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `u$r` / export `GJ`.

import { hasInputItemsField } from "../utils/has-input-items-field";

export type TurnLike = {
  id: string;
  previous_turn_id?: string | null;
  input_items?: unknown;
};

export type TurnTreeNode = {
  userTurn: TurnLike;
  assistantTurns: TurnLike[];
  children: Record<string, TurnTreeNode>;
};

/** Build a user→assistant branch tree from a flat turn list. */
export function buildUserAssistantTurnTree(
  turns: TurnLike[],
): TurnTreeNode | null {
  const userByPrev: Record<string, TurnLike[]> = {};
  const assistantByPrev: Record<string, TurnLike> = {};
  let root: TurnLike | undefined;
  for (const turn of turns) {
    if (hasInputItemsField(turn)) {
      if (turn.previous_turn_id) assistantByPrev[turn.previous_turn_id] = turn;
      else root = turn;
    } else if (turn.previous_turn_id) {
      (userByPrev[turn.previous_turn_id] ??= []).push(turn);
    }
  }
  if (!root) return null;
  const walk = (userTurn: TurnLike): TurnTreeNode => {
    const assistantTurns = userByPrev[userTurn.id] ?? [];
    const children: Record<string, TurnTreeNode> = {};
    for (const assistant of assistantTurns) {
      const nextUser = assistantByPrev[assistant.id];
      if (nextUser) children[assistant.id] = walk(nextUser);
    }
    return { userTurn, assistantTurns, children };
  };
  return walk(root);
}
