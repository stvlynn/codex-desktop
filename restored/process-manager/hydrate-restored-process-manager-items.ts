// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Evu` / export `ot`.

export type ConversationTurnLike = {
  turnId?: string | null;
  params?: { cwd?: string | null } | null;
};

export type ConversationLike = {
  id: string;
  title?: string | null;
  cwd?: string | null;
  hostId?: string | null;
  turns?: ConversationTurnLike[] | null;
};

export type RestoredProcessSeed = {
  id: string;
  conversationId: string;
  turnId?: string | null;
  command: string;
  startedAtMs: number;
  chatTitle?: string | null;
  cwd?: string | null;
  itemId?: string | null;
  osPid?: number | null;
  processId?: string | null;
};

/** Hydrate process-manager rows from restored process seeds + conversation snapshots. */
export function hydrateRestoredProcessManagerItems(
  seeds: RestoredProcessSeed[],
  conversations: ConversationLike[],
): Array<Record<string, unknown>> {
  const byId = new Map(conversations.map((c) => [c.id, c]));
  return seeds.map((seed) => {
    const conversation = byId.get(seed.conversationId);
    const turn =
      seed.turnId == null
        ? null
        : (conversation?.turns?.find((t) => t.turnId === seed.turnId) ?? null);
    return {
      chatTitle: conversation?.title ?? seed.chatTitle,
      command: seed.command,
      commandExecutionStartedAtMs: seed.startedAtMs,
      conversationId: seed.conversationId,
      cwd: seed.cwd ?? conversation?.cwd ?? null,
      hostId: conversation?.hostId ?? "local",
      id: seed.id,
      itemId: seed.itemId,
      osPid: seed.osPid,
      processId: seed.processId,
      source: "restored-process",
      startedAtMs: seed.startedAtMs,
      stopAction: "kill-child-process",
      turnId: seed.turnId,
      workspaceRoot:
        turn == null ? (conversation?.cwd ?? null) : (turn.params?.cwd ?? null),
    };
  });
}
