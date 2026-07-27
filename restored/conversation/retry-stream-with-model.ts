// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qAa` / export `rP`.

type ScopeLike = { get: (atom: unknown, id?: unknown) => unknown };

type Active = {
  active?: boolean;
  retryPending?: boolean;
  requestModel?: string;
  requestId?: string;
  isTemporaryChat?: boolean;
  promptMessageId?: string;
  systemHints?: unknown;
};

let nowMs: () => number = () => Date.now();
let activeAtom: unknown = null;
let markRetry: (
  scope: ScopeLike,
  conversationId: string,
  requestId: string,
) => void = () => {};
let cancelStream: (scope: ScopeLike, conversationId: string) => void = () => {};
let startSubmit: (
  scope: ScopeLike,
  args: Record<string, unknown>,
) => unknown = () => null;

export function setRetryStreamWithModelDeps(args: {
  nowMs?: () => number;
  activeAtom: unknown;
  markRetry: typeof markRetry;
  cancelStream: typeof cancelStream;
  startSubmit: typeof startSubmit;
}): void {
  if (args.nowMs) nowMs = args.nowMs;
  activeAtom = args.activeAtom;
  markRetry = args.markRetry;
  cancelStream = args.cancelStream;
  startSubmit = args.startSubmit;
}

export async function retryStreamWithModel(
  scope: ScopeLike,
  conversationId: string,
  model: { slug: string; thinkingEffort?: unknown },
): Promise<void> {
  const submittedAtMs = nowMs();
  const active = scope.get(activeAtom, conversationId) as Active | null;
  if (
    active == null ||
    !active.active ||
    active.retryPending ||
    active.requestModel === model.slug
  ) {
    return;
  }
  markRetry(scope, conversationId, active.requestId ?? "");
  cancelStream(scope, conversationId);
  await startSubmit(scope, {
    attachmentCount: 0,
    attachmentMimeTypes: [],
    conversationId,
    isTemporaryChat: active.isTemporaryChat,
    model: model.slug,
    regenerateFromMessageId: active.promptMessageId,
    systemHints: active.systemHints,
    submittedAtMs,
    thinkingEffort: model.thinkingEffort,
  });
}
