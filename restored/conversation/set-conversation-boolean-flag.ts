// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `EDa` / export `$P`.

type ScopeLike = {
  get: (atom: unknown, id?: unknown) => unknown;
  set: (atom: unknown, id: unknown, value: unknown) => void;
};

let resolveId: (
  get: ScopeLike["get"],
  conversationId: string,
) => string | null = () => null;
let flagAtom: unknown = null;

export function setConversationBooleanFlagDeps(args: {
  resolveId: typeof resolveId;
  flagAtom: unknown;
}): void {
  resolveId = args.resolveId;
  flagAtom = args.flagAtom;
}

export function setConversationBooleanFlag(
  scope: ScopeLike,
  conversationId: string,
  value: boolean,
): void {
  const id = resolveId(scope.get, conversationId);
  if (id != null) scope.set(flagAtom, id, value);
}
