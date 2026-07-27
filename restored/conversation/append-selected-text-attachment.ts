// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Cka` / export `dP` — append a trimmed selected-text chip to composer state.

type ScopeLike = {
  set: (
    atom: unknown,
    conversationId: string,
    updater: (prev: SelectedTextChip[]) => SelectedTextChip[],
  ) => void;
};

export type SelectedTextChip = {
  id: string;
  text: string;
};

type AppendDeps = {
  selectedTextAtom: unknown;
  createId: () => string;
};

let deps: AppendDeps | null = null;

export function setAppendSelectedTextAttachmentDeps(next: AppendDeps): void {
  deps = next;
}

/** Bundle `Cka` / export `dP`. */
export function appendSelectedTextAttachment(scope: ScopeLike, conversationId: string, text: string): void {
  if (deps == null) {
    throw new Error(
      "appendSelectedTextAttachment deps have not been configured",
    );
  }
  const trimmed = text.trim();
  if (trimmed.length === 0) return;
  scope.set(deps.selectedTextAtom, conversationId, (prev) => [
    ...prev,
    { id: deps!.createId(), text: trimmed },
  ]);
}
