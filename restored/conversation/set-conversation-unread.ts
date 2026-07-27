// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `UDa` / export `tF`.

type ScopeLike = {
  get: (atom: unknown, id?: unknown) => unknown;
  set: (atom: unknown, id: unknown, value: unknown) => void;
};

let resolveId: (
  get: ScopeLike["get"],
  conversationId: string,
) => string | null = () => null;
let unreadAtom: unknown = null;
let suppressUnreadAtom: unknown = null;

export function setConversationUnreadDeps(args: {
  resolveId: typeof resolveId;
  unreadAtom: unknown;
  suppressUnreadAtom: unknown;
}): void {
  resolveId = args.resolveId;
  unreadAtom = args.unreadAtom;
  suppressUnreadAtom = args.suppressUnreadAtom;
}

export function setConversationUnread(scope: ScopeLike, conversationId: string, unread: boolean): void {
  const id = resolveId(scope.get, conversationId);
  if (id == null) return;
  scope.set(unreadAtom, id, unread);
  if (unread) scope.set(suppressUnreadAtom, id, false);
}
