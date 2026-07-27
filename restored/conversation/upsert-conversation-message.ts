// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `FDa` / export `NP`. Mapping / persist left injectable.

type ScopeLike = {
  set: (atom: unknown, id: unknown, value: unknown) => void;
  get: (atom: unknown, id?: unknown) => unknown;
};

type ResolveIdFn = (
  get: ScopeLike["get"],
  conversationId: string,
) => string | null;
type ReadStateFn = (
  get: ScopeLike["get"],
  id: string,
) => {
  mapping: unknown;
  currentNode: string | null;
  status?: string;
  streamRequestId?: string | null;
  [key: string]: unknown;
} | null;
type EmptyStateFn = (id: string) => {
  mapping: unknown;
  currentNode: string | null;
  [key: string]: unknown;
};
type InsertMessageFn = (
  mapping: unknown,
  message: unknown,
  opts: { fallbackParentId: string | null },
) => {
  didRotateDescendant: boolean;
  isNewNode: boolean;
  mapping: unknown;
  messageId: string;
};
type WriteStateFn = (scope: ScopeLike, state: Record<string, unknown>) => void;
type PersistFn = (args: Record<string, unknown>) => void;
type PersistEnabledFn = () => boolean;

let resolveId: ResolveIdFn | null = null;
let readState: ReadStateFn | null = null;
let emptyState: EmptyStateFn | null = null;
let insertMessage: InsertMessageFn | null = null;
let writeState: WriteStateFn | null = null;
let persist: PersistFn | null = null;
let persistEnabled: PersistEnabledFn | null = null;

export function setUpsertConversationMessageDeps(args: {
  resolveId: ResolveIdFn;
  readState: ReadStateFn;
  emptyState: EmptyStateFn;
  insertMessage: InsertMessageFn;
  writeState: WriteStateFn;
  persist?: PersistFn;
  persistEnabled?: PersistEnabledFn;
}): void {
  resolveId = args.resolveId;
  readState = args.readState;
  emptyState = args.emptyState;
  insertMessage = args.insertMessage;
  writeState = args.writeState;
  persist = args.persist ?? null;
  persistEnabled = args.persistEnabled ?? null;
}

export function upsertConversationMessage(args: {
  conversationId: string;
  message: unknown;
  scope: ScopeLike;
}): void {
  if (
    resolveId == null ||
    readState == null ||
    emptyState == null ||
    insertMessage == null ||
    writeState == null
  ) {
    throw new Error("upsertConversationMessage deps have not been configured");
  }
  const id = resolveId(args.scope.get, args.conversationId);
  if (id == null) return;
  const prev = readState(args.scope.get, id) ?? emptyState(id);
  const { didRotateDescendant, isNewNode, mapping, messageId } = insertMessage(
    prev.mapping,
    args.message,
    {
      fallbackParentId: prev.currentNode,
    },
  );
  const currentNode =
    didRotateDescendant ||
    isNewNode ||
    prev.currentNode == null ||
    prev.currentNode === messageId
      ? messageId
      : prev.currentNode;
  const next = {
    ...prev,
    conversationId: id,
    currentNode,
    error: null,
    mapping,
  };
  writeState(args.scope, next);
  if (persistEnabled?.() === true) {
    persist?.({
      conversationId: id,
      currentNode,
      mapping,
      message: args.message,
      status: next.status,
      streamRequestId: next.streamRequestId,
    });
  }
}
