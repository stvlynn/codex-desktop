// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Tka` / export `bP` — set selected model (+ optional sync helper).

type ScopeLike = {
  get: (atom: unknown, id?: unknown) => unknown;
  set: (atom: unknown, id: unknown, value: unknown) => void;
};

let syncHelper: (
  scope: ScopeLike,
  model: unknown,
  conversationId: string,
) => void = () => {};
let selectedModelAtom: unknown = null;
let defaultModelReader: (get: ScopeLike["get"], id: string) => unknown = () =>
  null;

export function setConversationSelectedModelDeps(args: {
  syncHelper: typeof syncHelper;
  selectedModelAtom: unknown;
  defaultModelReader?: typeof defaultModelReader;
}): void {
  syncHelper = args.syncHelper;
  selectedModelAtom = args.selectedModelAtom;
  if (args.defaultModelReader) defaultModelReader = args.defaultModelReader;
}

export function setConversationSelectedModel(
  scope: ScopeLike,
  conversationId: string,
  model: unknown,
  fallbackModel?: unknown,
): void {
  syncHelper(
    scope,
    fallbackModel ?? defaultModelReader(scope.get, conversationId),
    conversationId,
  );
  scope.set(selectedModelAtom, conversationId, model);
}
