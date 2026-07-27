// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `PDa` / export `nF`. Store writers left injectable.

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
) => Record<string, unknown> | null;
type WriteStateFn = (scope: ScopeLike, state: Record<string, unknown>) => void;
type EnsureSidebarFn = (scope: ScopeLike, id: string) => void;
type EmptyStateFn = (id: string) => Record<string, unknown>;
type ToSidebarIdFn = (conversationId: string) => string;
type IsClientIdFn = (conversationId: string) => boolean;

let resolveId: ResolveIdFn | null = null;
let readState: ReadStateFn | null = null;
let writeState: WriteStateFn | null = null;
let ensureSidebar: EnsureSidebarFn | null = null;
let emptyState: EmptyStateFn | null = null;
let toSidebarId: ToSidebarIdFn | null = null;
let isClientId: IsClientIdFn | null = null;
let unreadAtom: unknown = null;

export function setMarkConversationStreamingDeps(args: {
  resolveId: ResolveIdFn;
  readState: ReadStateFn;
  writeState: WriteStateFn;
  ensureSidebar: EnsureSidebarFn;
  emptyState: EmptyStateFn;
  toSidebarId: ToSidebarIdFn;
  isClientId: IsClientIdFn;
  unreadAtom: unknown;
}): void {
  resolveId = args.resolveId;
  readState = args.readState;
  writeState = args.writeState;
  ensureSidebar = args.ensureSidebar;
  emptyState = args.emptyState;
  toSidebarId = args.toSidebarId;
  isClientId = args.isClientId;
  unreadAtom = args.unreadAtom;
}

export function markConversationStreaming(args: {
  conversationId: string;
  projectId?: string | null;
  recordInSidebar?: boolean;
  scope: ScopeLike;
  streamRequestId?: string | null;
  title?: string | null;
}): void {
  if (
    resolveId == null ||
    readState == null ||
    writeState == null ||
    emptyState == null ||
    ensureSidebar == null ||
    toSidebarId == null ||
    isClientId == null
  ) {
    throw new Error("markConversationStreaming deps have not been configured");
  }
  const id = resolveId(args.scope.get, args.conversationId);
  if (id == null) return;
  const prev = readState(args.scope.get, id) ?? emptyState(id);
  args.scope.set(unreadAtom, id, false);
  writeState(args.scope, {
    ...prev,
    error: null,
    projectId: args.projectId ?? prev.projectId,
    status: "streaming",
    streamRequestId: args.streamRequestId,
    title: args.title?.trim() || prev.title,
  });
  if (args.recordInSidebar !== false) {
    ensureSidebar(
      args.scope,
      isClientId(args.conversationId)
        ? args.conversationId
        : toSidebarId(args.conversationId),
    );
  }
}
