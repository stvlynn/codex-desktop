// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `UAa` / export `tP` — rebuild a user message when forking from a prompt.

type MessageLike = {
  content?: {
    content_type?: string;
    parts?: unknown[];
    [key: string]: unknown;
  };
  metadata?: unknown;
  [key: string]: unknown;
};

type BuiltUserMessage = {
  message: MessageLike;
  [key: string]: unknown;
};

type ForkDeps = {
  messagePlainText: (message: MessageLike) => string;
  mergePrompt: (base: string, prompt: string) => string;
  attachmentsFromMetadata: (metadata: unknown) => unknown[];
  buildUserMessage: (args: {
    attachments: unknown[];
    prompt: string;
    systemHints: unknown[];
  }) => BuiltUserMessage;
};

let deps: ForkDeps | null = null;

export function setBuildForkedUserMessageDeps(next: ForkDeps): void {
  deps = next;
}

/** Bundle `UAa` / export `tP`. */
export function buildForkedUserMessage({
  message,
  prompt,
  systemHints = [],
}: {
  message: MessageLike;
  prompt: string;
  systemHints?: unknown[];
}): BuiltUserMessage {
  if (deps == null) {
    throw new Error("buildForkedUserMessage deps have not been configured");
  }
  const mergedPrompt = deps.mergePrompt(
    deps.messagePlainText(message),
    prompt.trim(),
  );
  const built = deps.buildUserMessage({
    attachments: deps.attachmentsFromMetadata(message.metadata),
    prompt: mergedPrompt,
    systemHints,
  });
  if (message.content?.content_type !== "multimodal_text") return built;
  const nonStringParts = (message.content.parts ?? []).filter(
    (part) => typeof part !== "string",
  );
  return {
    ...built,
    message: {
      ...built.message,
      content: {
        content_type: "multimodal_text",
        parts: [
          ...nonStringParts,
          ...(mergedPrompt.length === 0 ? [] : [mergedPrompt]),
        ],
      },
    },
  };
}
