// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `HDa` / export `YP`. Status writer left injectable.

type ScopeLike = {
  set: (atom: unknown, id: unknown, value: unknown) => void;
  get: (atom: unknown, id?: unknown) => unknown;
};

type SetStatusFn = (args: {
  conversationId: string;
  error: unknown;
  scope: ScopeLike;
  status: "error";
}) => string | null;

let setStatus: SetStatusFn | null = null;

/** Wire status writer (`WDa` in the bundle). */
export function setMarkConversationErrorDeps(fn: SetStatusFn): void {
  setStatus = fn;
}

export function markConversationError(args: {
  conversationId: string;
  error: unknown;
  scope: ScopeLike;
}): void {
  if (setStatus == null) {
    throw new Error("markConversationError deps have not been configured");
  }
  setStatus({
    conversationId: args.conversationId,
    error: args.error,
    scope: args.scope,
    status: "error",
  });
}
