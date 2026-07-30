// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Create a Codex thread from a ChatGPT conversation (handoff rename / continue path).

import {
  chatgptConversationServerIdAtom,
  chatgptConversationTitleAtom,
  chatgptConversationsGateAtom,
  writingBlocksControllerAtom,
} from "../../boundaries/composer-appscope-atoms";
import { loadPriorConversationsForHandoff } from "../../chatgpt/load-prior-conversations-for-handoff";
import { buildChatgptConversationMention } from "../../composer/build-chatgpt-conversation-mention";
import { buildComposerPromptWithContext } from "../../composer/build-composer-prompt-with-context";
import { isGroupPermissionId } from "../../config/is-group-permission-id";
import { createDelegatedThread } from "../../conversation/create-delegated-thread";
import { isConsumerLockdownActive } from "../../conversation/is-consumer-lockdown-active";
import { syncLocalProjectForChat } from "../../conversation/sync-local-project-for-chat";
import { appLogger } from "../../logging/app-logger";
import type { RenameChatgptThreadTitleOptions } from "./types";

type ScopeLike = {
  get: (atom: unknown, key?: unknown) => unknown;
  set: (atom: unknown, key: unknown, value: unknown) => void;
};

export async function renameChatgptThreadTitle(
  scope: ScopeLike,
  options: RenameChatgptThreadTitleOptions,
): Promise<string | null> {
  const { chatGptThreadId, conversationTitle, prompt } = options;
  if (
    !scope.get(chatgptConversationsGateAtom) ||
    isConsumerLockdownActive(scope, chatGptThreadId)
  ) {
    return null;
  }
  try {
    const serverId = scope.get(
      chatgptConversationServerIdAtom,
      chatGptThreadId,
    ) as string | null | undefined;
    if (serverId == null) {
      throw Error("ChatGPT conversation does not have a server id");
    }
    const handoffPrompt = `Continuing from ${buildChatgptConversationMention({
      conversationId: serverId,
      title: conversationTitle?.trim() || "ChatGPT thread",
    })}${prompt == null ? "" : `: ${prompt}`}`;
    const projectPermissionId = scope.get(
      chatgptConversationTitleAtom,
      chatGptThreadId,
    );
    const hasProject =
      projectPermissionId != null && isGroupPermissionId(projectPermissionId);
    const [conversationContexts, project] = await Promise.all([
      loadPriorConversationsForHandoff(
        scope.get(writingBlocksControllerAtom),
        handoffPrompt,
        { enabled: true },
      ),
      hasProject
        ? syncLocalProjectForChat(scope, projectPermissionId)
        : Promise.resolve(null),
    ]);
    if (hasProject && project == null) return null;
    const target =
      project == null
        ? { type: "projectless" }
        : {
            type: "project",
            projectId: (project as { projectId: string }).projectId,
            environment: { type: "local" },
          };
    const created = (await createDelegatedThread({
      memoryPreferences: (project as { memoryPreferences?: unknown } | null)
        ?.memoryPreferences,
      model: undefined,
      prompt: buildComposerPromptWithContext({
        addedFiles: [],
        chatGptConversationContexts: conversationContexts,
        fileAttachments: [],
        ideContext: null,
        imageAttachments: [],
        prompt: handoffPrompt,
      }),
      scope,
      target,
      thinking: undefined,
    })) as { threadId?: string };
    return "threadId" in created ? (created.threadId ?? null) : null;
  } catch (error) {
    appLogger.error("Failed to create Codex thread from ChatGPT conversation", {
      safe: {},
      sensitive: { error },
    });
    return null;
  }
}

export const useChatgptComposerControllerL = renameChatgptThreadTitle;
