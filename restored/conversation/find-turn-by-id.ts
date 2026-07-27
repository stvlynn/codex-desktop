// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `lg` — pure helper.

import { activeTurnsOrNull } from "./active-turns-or-null";

/** Find a turn by `turnId` within active turns for a conversation. */
export function findTurnById(
  conversation: Parameters<typeof activeTurnsOrNull>[0],
  turnId: unknown,
): { turnId?: unknown } | null {
  return (
    (activeTurnsOrNull(conversation)?.find(
      (turn) => (turn as { turnId?: unknown }).turnId === turnId,
    ) as { turnId?: unknown } | undefined) ?? null
  );
}
