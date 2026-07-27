// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tps` / export `nS` — extractFn(tps); companions eps/Xfs; nps→lodash/isEqual.

import isEqual from "lodash/isEqual";

type TurnItem = Record<string, unknown> & { id?: unknown };
type TurnLike = { turnId?: string | null; items: TurnItem[] };
type ConversationLike = { turns: TurnLike[] };

function turnItemWithoutId(item: TurnItem): Record<string, unknown> {
  const { id: _id, ...rest } = item;
  return rest;
}

function turnItemsArePrefixOf(child: TurnLike, parent: TurnLike): boolean {
  return (
    child.items.length > 0 &&
    parent.items.length >= child.items.length &&
    child.items.every((item, index) => {
      const other = parent.items[index];
      return (
        other != null &&
        isEqual(turnItemWithoutId(item), turnItemWithoutId(other))
      );
    })
  );
}

/** Keep child turns not already present in the parent (bundle `tps` / `nS`). */
export function filterTurnsNotInParent(args: {
  conversation: ConversationLike;
  parentConversation: ConversationLike;
}): TurnLike[] {
  const { conversation, parentConversation } = args;
  const parentTurnIds = new Set<string>();
  for (const turn of parentConversation.turns) {
    if (turn.turnId != null) parentTurnIds.add(turn.turnId);
  }
  return conversation.turns.filter((turn) =>
    turn.turnId != null && parentTurnIds.has(turn.turnId)
      ? false
      : turn.items.length === 0
        ? true
        : !parentConversation.turns.some((parentTurn) =>
            turnItemsArePrefixOf(turn, parentTurn),
          ),
  );
}
