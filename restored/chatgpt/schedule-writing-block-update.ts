// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Vls` / export `jS`.

type WritingBlockLike = {
  content?: unknown;
  id?: string;
  index: string | number;
  metadata?: unknown;
  title?: unknown;
  variant?: unknown;
};

type ConversationScheduler = {
  schedule: (
    conversationId: string,
    messageId: string,
    blockId: string,
    payload: Record<string, unknown>,
  ) => void;
};

type ResolveScheduler = (store: unknown) => ConversationScheduler;

let resolveScheduler: ResolveScheduler | null = null;

/** Wire conversation scheduler resolver (`Bls` in the bundle). */
export function setWritingBlockSchedulerResolver(resolver: ResolveScheduler): void {
  resolveScheduler = resolver;
}

export function scheduleWritingBlockUpdate(
  store: unknown,
  args: {
    blockId: string;
    conversationId: string;
    messageId: string;
    serverConversationId?: string | null;
    writingBlock: WritingBlockLike;
  },
): void {
  if (resolveScheduler == null) {
    throw new Error("writing-block scheduler has not been configured");
  }
  const {
    blockId,
    conversationId,
    messageId,
    serverConversationId,
    writingBlock,
  } = args;
  resolveScheduler(store).schedule(conversationId, messageId, blockId, {
    conversation_id: serverConversationId,
    id: blockId,
    index: String(writingBlock.index),
    message_id: messageId,
    updated_at: new Date().toISOString(),
    writing_block: {
      content: writingBlock.content,
      id: writingBlock.id ?? blockId,
      index: String(writingBlock.index),
      metadata: writingBlock.metadata,
      title: writingBlock.title,
      variant: writingBlock.variant,
    },
  });
}
