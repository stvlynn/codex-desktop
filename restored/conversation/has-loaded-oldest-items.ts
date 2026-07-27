// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Oot` — pure helper.

import { turnsFromHistoryOrRaw } from "./turns-from-history-or-raw";

/** True when every turn reports oldest items loaded (or unset). */
export function hasLoadedOldestItems(
  conversation: Parameters<typeof turnsFromHistoryOrRaw>[0],
): boolean {
  const turns = turnsFromHistoryOrRaw(conversation);
  if (!Array.isArray(turns)) return false;
  return turns.every(
    (turn) =>
      (turn as { itemsPagination?: { hasLoadedOldest?: boolean } })
        .itemsPagination?.hasLoadedOldest !== false,
  );
}
