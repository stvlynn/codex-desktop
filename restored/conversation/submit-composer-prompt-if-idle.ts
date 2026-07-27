// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oja` / export `$N` — no-op while streaming / busy.

type StoreLike = {
  get: (atom: unknown, id?: unknown) => unknown;
};

type ModelState = { slug?: string; thinkingEffort?: unknown };

type StartStreamFn = (
  store: StoreLike,
  args: Record<string, unknown>,
) => Promise<unknown> | unknown;

let busyAtom: unknown = null;
let statusAtom: unknown = null;
let modelAtom: unknown = null;
let startStream: StartStreamFn | null = null;

export function setSubmitComposerPromptIfIdleDeps(args: {
  busyAtom: unknown;
  statusAtom: unknown;
  modelAtom: unknown;
  startStream: StartStreamFn;
}): void {
  busyAtom = args.busyAtom;
  statusAtom = args.statusAtom;
  modelAtom = args.modelAtom;
  startStream = args.startStream;
}

export async function submitComposerPromptIfIdle(
  store: StoreLike,
  args: {
    conversationId: string;
    messageMetadata?: unknown;
    parentMessageId?: string | null;
    prompt: string;
  },
): Promise<boolean> {
  if (startStream == null) {
    throw new Error("submitComposerPromptIfIdle deps have not been configured");
  }
  if (
    store.get(busyAtom, args.conversationId) ||
    store.get(statusAtom, args.conversationId) === "streaming"
  ) {
    return false;
  }
  const model = store.get(modelAtom, args.conversationId) as ModelState;
  await startStream(store, {
    conversationId: args.conversationId,
    isTemporaryChat: false,
    messageMetadata: args.messageMetadata,
    model: model?.slug,
    parentMessageId: args.parentMessageId,
    prompt: args.prompt,
    thinkingEffort: model?.thinkingEffort,
  });
  return true;
}
