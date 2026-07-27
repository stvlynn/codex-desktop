// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jDa` / export `QP`.

type ScopeLike = {
  get: (atom: unknown, id?: unknown) => unknown;
  set: (atom: unknown, id: unknown, value: unknown) => void;
};

let resolveId: (
  get: ScopeLike["get"],
  conversationId: string,
) => string | null = () => null;
let messagesAtom: unknown = null;

export function setPatchConversationMessageDeps(args: {
  resolveId: typeof resolveId;
  messagesAtom: unknown;
}): void {
  resolveId = args.resolveId;
  messagesAtom = args.messagesAtom;
}

export function patchConversationMessage(
  scope: ScopeLike,
  conversationId: string,
  message: { id?: string | null; [key: string]: unknown },
): boolean {
  const id = resolveId(scope.get, conversationId);
  if (id == null || message.id == null) return false;
  const messages = scope.get(messagesAtom, id) as Record<
    string,
    { message?: unknown; [key: string]: unknown }
  >;
  const entry = messages[message.id];
  if (entry == null) return false;
  scope.set(messagesAtom, id, {
    ...messages,
    [message.id]: { ...entry, message },
  });
  return true;
}
