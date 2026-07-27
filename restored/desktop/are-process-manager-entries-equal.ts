// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ovu` / export `lt`.

export type ProcessManagerEntryLike = {
  id: unknown;
  command: unknown;
  conversationId: unknown;
  cwd: unknown;
  hostId: unknown;
  stopAction: unknown;
  turnId: unknown;
};

/** Equality for process-manager rows (id shortcut, else fieldwise). */
export function areProcessManagerEntriesEqual(
  left: ProcessManagerEntryLike,
  right: ProcessManagerEntryLike,
): boolean {
  return left.id === right.id
    ? true
    : left.command === right.command &&
        left.conversationId === right.conversationId &&
        left.cwd === right.cwd &&
        left.hostId === right.hostId &&
        left.stopAction === right.stopAction &&
        left.turnId === right.turnId;
}
