// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `gAa` / export `sP` — submit gate: build partial query + kick send.

type ScopeLike = {
  get: (atom: unknown, conversationId: string) => any;
};

type FileAttachmentLike = {
  status?: string;
  mimeType?: string | null;
};

type SubmitDeps = {
  promptAtom: unknown;
  selectedTextAtom: unknown;
  fileAttachmentsAtom: unknown;
  modelAtom: unknown;
  systemHintsAtom: unknown;
  buildPromptWithSelectedText: (args: {
    addedFiles: unknown[];
    fileAttachments: unknown[];
    ideContext: null;
    imageAttachments: unknown[];
    prompt: string;
    selectedTextAttachments: unknown[];
  }) => string;
  submitPartialQuery: (
    scope: ScopeLike,
    args: {
      attachmentMimeTypes: string[];
      conversationId: string;
      isTemporaryChat: boolean;
      model: string;
      partialQuery: string;
      skipThrottle: boolean;
      systemHints: unknown;
      thinkingEffort: unknown;
    },
  ) => void;
};

let deps: SubmitDeps | null = null;

export function setSubmitConversationComposerIfReadyDeps(
  next: SubmitDeps,
): void {
  deps = next;
}

/** Bundle `gAa` / export `sP`. */
export function submitConversationComposerIfReady(
  scope: ScopeLike,
  conversationId: string,
  {
    isTemporaryChat = false,
    skipThrottle = false,
  }: { isTemporaryChat?: boolean; skipThrottle?: boolean } = {},
): boolean {
  if (deps == null) {
    throw new Error(
      "submitConversationComposerIfReady deps have not been configured",
    );
  }
  const prompt = scope.get(deps.promptAtom, conversationId) as string;
  const selectedText = scope.get(
    deps.selectedTextAtom,
    conversationId,
  ) as unknown[];
  const partialQuery =
    selectedText.length === 0
      ? prompt
      : deps.buildPromptWithSelectedText({
          addedFiles: [],
          fileAttachments: [],
          ideContext: null,
          imageAttachments: [],
          prompt,
          selectedTextAttachments: selectedText,
        });
  const files = scope.get(
    deps.fileAttachmentsAtom,
    conversationId,
  ) as FileAttachmentLike[];
  if (
    partialQuery.trim().length === 0 &&
    !files.some((file) => file.status !== "error")
  ) {
    return false;
  }
  const model = scope.get(deps.modelAtom, conversationId) as {
    slug: string;
    thinkingEffort: unknown;
  };
  deps.submitPartialQuery(scope, {
    attachmentMimeTypes: files.flatMap((file) =>
      file.status !== "error" && file.mimeType != null ? [file.mimeType] : [],
    ),
    conversationId,
    isTemporaryChat,
    model: model.slug,
    partialQuery,
    skipThrottle,
    systemHints: scope.get(deps.systemHintsAtom, conversationId),
    thinkingEffort: model.thinkingEffort,
  });
  return true;
}
