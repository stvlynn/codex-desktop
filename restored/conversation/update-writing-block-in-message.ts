// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zDa` / export `rF`.

type ScopeLike = {
  get: (atom: unknown, id?: unknown) => unknown;
  set: (atom: unknown, id: unknown, value: unknown) => void;
};

let resolveId: (
  get: ScopeLike["get"],
  conversationId: string,
) => string | null = () => null;
let messagesAtom: unknown = null;
let readWritingBlocks: (
  metadata: unknown,
) => Record<string, Record<string, unknown>> = () => ({});

export function setUpdateWritingBlockInMessageDeps(args: {
  resolveId: typeof resolveId;
  messagesAtom: unknown;
  readWritingBlocks: typeof readWritingBlocks;
}): void {
  resolveId = args.resolveId;
  messagesAtom = args.messagesAtom;
  readWritingBlocks = args.readWritingBlocks;
}

export function updateWritingBlockInMessage(args: {
  blockId: string;
  conversationId: string;
  fallbackWritingBlock?: Record<string, unknown>;
  messageId: string;
  scope: ScopeLike;
  update: Record<string, unknown>;
}): Record<string, unknown> | null {
  const id = resolveId(args.scope.get, args.conversationId);
  if (id == null) return null;
  const messages = args.scope.get(messagesAtom, id) as Record<
    string,
    { message?: { metadata?: unknown; [key: string]: unknown } }
  >;
  const entry = messages[args.messageId];
  if (entry?.message == null) return null;
  const blocks = readWritingBlocks(entry.message.metadata);
  const prev = blocks[args.blockId] ?? args.fallbackWritingBlock ?? {};
  const next = {
    ...prev,
    ...args.update,
    id: prev.id ?? args.blockId,
    metadata: {
      ...((prev.metadata as object) ?? {}),
      ...((args.update.metadata as object) ?? {}),
    },
  };
  args.scope.set(messagesAtom, id, {
    ...messages,
    [args.messageId]: {
      ...entry,
      message: {
        ...entry.message,
        metadata: {
          ...((entry.message.metadata as object) ?? {}),
          writing_blocks: { ...blocks, [args.blockId]: next },
        },
      },
    },
  });
  return next;
}
