// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `VDa` / export `JP`. Status writer left injectable.

type ScopeLike = {
  set: (atom: unknown, id: unknown, value: unknown) => void;
  get: (atom: unknown, id?: unknown) => unknown;
};

type SetStatusFn = (args: {
  conversationId: string;
  scope: ScopeLike;
  status: "idle";
}) => string | null;

let setStatus: SetStatusFn | null = null;
let unreadAtom: unknown = null;
let suppressUnreadAtom: unknown = null;

/** Wire status writer (`WDa` in the bundle) + unread atoms. */
export function setMarkConversationIdleDeps(args: {
  setStatus: SetStatusFn;
  unreadAtom: unknown;
  suppressUnreadAtom: unknown;
}): void {
  setStatus = args.setStatus;
  unreadAtom = args.unreadAtom;
  suppressUnreadAtom = args.suppressUnreadAtom;
}

export function markConversationIdle(args: {
  conversationId: string;
  scope: ScopeLike;
}): void {
  if (setStatus == null) {
    throw new Error("markConversationIdle deps have not been configured");
  }
  const id = setStatus({
    conversationId: args.conversationId,
    scope: args.scope,
    status: "idle",
  });
  if (id != null) {
    args.scope.set(unreadAtom, id, !args.scope.get(suppressUnreadAtom, id));
  }
}
