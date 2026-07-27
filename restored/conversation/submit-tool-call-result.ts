// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `GAa` / export `aP` — submit a tool-call result as next message.
// Message builders / stream starter left injectable.

type StoreLike = unknown;

type BuildToolMessageFn = (args: {
  callId: string;
  id: string;
  result: unknown;
  toolName: string;
}) => unknown;

type StartStreamFn = (
  store: StoreLike,
  args: Record<string, unknown>,
) => unknown;

type NowFn = () => number;
type IdFn = () => string;

let buildToolMessage: BuildToolMessageFn | null = null;
let startStream: StartStreamFn | null = null;
let nowMs: NowFn = () => Date.now();
let newId: IdFn = () => crypto.randomUUID();

export function setSubmitToolCallResultDeps(args: {
  buildToolMessage: BuildToolMessageFn;
  startStream: StartStreamFn;
  nowMs?: NowFn;
  newId?: IdFn;
}): void {
  buildToolMessage = args.buildToolMessage;
  startStream = args.startStream;
  if (args.nowMs) nowMs = args.nowMs;
  if (args.newId) newId = args.newId;
}

export function submitToolCallResult(
  store: StoreLike,
  args: {
    callId: string;
    conversationId: string;
    isTemporaryChat?: boolean;
    model?: string;
    onServerThreadIdChange?: (id: string) => void;
    result: unknown;
    thinkingEffort?: unknown;
    toolName: string;
  },
): unknown {
  if (buildToolMessage == null || startStream == null) {
    throw new Error("submitToolCallResult deps have not been configured");
  }
  return startStream(store, {
    attachmentCount: 0,
    attachmentMimeTypes: [],
    conversationId: args.conversationId,
    isTemporaryChat: args.isTemporaryChat,
    message: buildToolMessage({
      callId: args.callId,
      id: newId(),
      result: args.result,
      toolName: args.toolName,
    }),
    model: args.model,
    onServerThreadIdChange: args.onServerThreadIdChange,
    submittedAtMs: nowMs(),
    thinkingEffort: args.thinkingEffort,
  });
}
