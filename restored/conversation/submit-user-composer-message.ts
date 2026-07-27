// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `WAa` / export `iP` — build + submit a user composer message.
// Downstream stream starter left injectable.

type ScopeLike = { get: (atom: unknown, id?: unknown) => unknown };

type Args = {
  attachments?: Array<{ mimeType?: string | null }>;
  conversationId?: string | null;
  conversationOrigin?: unknown;
  extraDeveloperInstructions?: string[];
  model?: string;
  onClientThreadIdChange?: (id: string) => void;
  onServerThreadIdChange?: (id: string) => void;
  parentMessageId?: string | null;
  prompt?: string;
  messageMetadata?: unknown;
  systemHints?: unknown[];
  thinkingEffort?: unknown;
  tppExecutionTarget?: unknown;
  toolApproval?: { action?: string } | null;
  userCompletionMessages?: unknown;
  projectId?: string | null;
  isTemporaryChat?: boolean;
};

let nowMs: () => number = () => Date.now();
let isLockdown: (scope: ScopeLike, id: string) => boolean = () => false;
let toClientId: (id: string) => string = (id) => id;
let isClientId: (id: string) => boolean = () => false;
let buildUserMessage: (args: Record<string, unknown>) => unknown = () => null;
let buildApprovalMessage: (approval: unknown, id: string) => unknown = () =>
  null;
let newId: () => string = () => crypto.randomUUID();
let startSubmit: (
  scope: ScopeLike,
  args: Record<string, unknown>,
) => unknown = () => null;

export function setSubmitUserComposerMessageDeps(args: {
  nowMs?: () => number;
  isLockdown: typeof isLockdown;
  toClientId?: typeof toClientId;
  isClientId?: typeof isClientId;
  buildUserMessage: typeof buildUserMessage;
  buildApprovalMessage: typeof buildApprovalMessage;
  newId?: () => string;
  startSubmit: typeof startSubmit;
}): void {
  if (args.nowMs) nowMs = args.nowMs;
  isLockdown = args.isLockdown;
  if (args.toClientId) toClientId = args.toClientId;
  if (args.isClientId) isClientId = args.isClientId;
  buildUserMessage = args.buildUserMessage;
  buildApprovalMessage = args.buildApprovalMessage;
  if (args.newId) newId = args.newId;
  startSubmit = args.startSubmit;
}

export function submitUserComposerMessage(scope: ScopeLike, args: Args): unknown {
  const submittedAtMs = nowMs();
  const prompt = (args.prompt ?? "").trim();
  const attachments = args.attachments ?? [];
  if (
    args.toolApproval == null &&
    prompt.length === 0 &&
    attachments.length === 0 &&
    args.userCompletionMessages == null
  ) {
    return null;
  }
  if (
    args.toolApproval?.action === "allow" &&
    args.conversationId != null &&
    isLockdown(
      scope,
      isClientId(args.conversationId)
        ? args.conversationId
        : toClientId(args.conversationId),
    )
  ) {
    throw new Error("Lockdown mode blocks connector approvals");
  }
  const payload =
    args.toolApproval == null
      ? (args.userCompletionMessages ??
        buildUserMessage({
          attachments,
          extraDeveloperInstructions: args.extraDeveloperInstructions ?? [],
          messageMetadata: args.messageMetadata,
          prompt,
          systemHints: args.systemHints ?? [],
        }))
      : {
          extraDeveloperInstructionMessages: (
            args.extraDeveloperInstructions ?? []
          ).map((text) => ({ id: newId(), text })),
          message: buildApprovalMessage(args.toolApproval, newId()),
        };
  return startSubmit(scope, {
    attachmentCount: attachments.length,
    attachmentMimeTypes: attachments.flatMap(({ mimeType }) =>
      mimeType == null ? [] : [mimeType],
    ),
    conversationId: args.conversationId,
    conversationOrigin: args.conversationOrigin,
    isTemporaryChat: args.isTemporaryChat,
    model: args.model,
    onClientThreadIdChange: args.onClientThreadIdChange,
    onServerThreadIdChange: args.onServerThreadIdChange,
    parentMessageId: args.parentMessageId,
    projectId: args.projectId,
    submittedAtMs,
    thinkingEffort: args.thinkingEffort,
    tppExecutionTarget: args.tppExecutionTarget,
    ...((payload as object) ?? {}),
  });
}
