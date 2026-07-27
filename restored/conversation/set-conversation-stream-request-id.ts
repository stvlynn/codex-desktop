// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `BDa` / export `eF`.

type ScopeLike = {
  set: (atom: unknown, id: unknown, value: unknown) => void;
  get: (atom: unknown, id?: unknown) => unknown;
};

type ResolveIdFn = (
  get: ScopeLike["get"],
  conversationId: string,
) => string | null;
type IsActiveFn = (get: ScopeLike["get"], id: string) => boolean;

let resolveId: ResolveIdFn | null = null;
let isActive: IsActiveFn | null = null;
let streamRequestIdAtom: unknown = null;

export function setConversationStreamRequestIdDeps(args: {
  resolveId: ResolveIdFn;
  isActive: IsActiveFn;
  streamRequestIdAtom: unknown;
}): void {
  resolveId = args.resolveId;
  isActive = args.isActive;
  streamRequestIdAtom = args.streamRequestIdAtom;
}

export function setConversationStreamRequestId(args: {
  conversationId: string;
  scope: ScopeLike;
  streamRequestId: string | null;
}): void {
  if (resolveId == null || isActive == null) {
    throw new Error(
      "setConversationStreamRequestId deps have not been configured",
    );
  }
  const id = resolveId(args.scope.get, args.conversationId);
  if (id == null || !isActive(args.scope.get, id)) return;
  args.scope.set(streamRequestIdAtom, id, args.streamRequestId);
}
