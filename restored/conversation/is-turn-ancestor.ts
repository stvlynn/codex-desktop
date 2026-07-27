// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `m$r` / export `YJ` + `p$r` / export `WJ`.

type TurnNode = { id: string; previous_turn_id?: string | null };

/** True when `ancestorId` appears in `turnId`'s previous_turn_id chain. */
export function isTurnAncestor(turns: Map<string, TurnNode>, ancestorId: string, turnId: string): boolean {
  if (ancestorId === turnId) return true;
  let current = turns.get(turnId);
  const seen = new Set<string>();
  while (current?.previous_turn_id && !seen.has(current.id)) {
    seen.add(current.id);
    if (current.previous_turn_id === ancestorId) return true;
    current = turns.get(current.previous_turn_id);
  }
  return false;
}

/** True when either turn is an ancestor of the other. */
export function areTurnsRelated(turns: Map<string, TurnNode>, leftId: string, rightId: string): boolean {
  return (
    isTurnAncestor(turns, leftId, rightId) ||
    isTurnAncestor(turns, rightId, leftId)
  );
}
