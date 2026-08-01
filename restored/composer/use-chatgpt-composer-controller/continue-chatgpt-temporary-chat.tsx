// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Continue / reject a temporary ChatGPT → Codex handoff suggestion.

import { CodexChatgptHandoffLifecycleAction } from "../../analytics/codex-chatgpt-handoff-lifecycle-action";
import { CODEX_CHATGPT_HANDOFF_LIFECYCLE_EVENT_TYPE } from "../../analytics/codex-chatgpt-handoff-lifecycle-event-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { appScopeAtom, useAppScope } from "../../runtime/app-scope-runtime";
import {
  chatgptConversationQueryAtomKP,
  useAppScopeAtomValue,
  useStepsProseAtom,
} from "../../composer/composer-appscope-atoms";
import { rewriteThreadUrlPlaceholder } from "../../composer/rewrite-thread-url-placeholder";
import { HANDOFF_KIND } from "../../config/handoff-kind";
import { setConversationBooleanFlag as conversationSelectedModelAtom } from "../../conversation/set-conversation-boolean-flag";
import { submitToolCallResult } from "../../conversation/submit-tool-call-result";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE } from "../../conversation/thread-detail-level-ids";
import { getCodexChatgptHandoffConfig } from "../../feature-gates/get-codex-chatgpt-handoff-config";
import { appLogger } from "../../logging/app-logger";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { UseApprovalKeyboardBindings } from "../../ui/use-approval-keyboard-bindings";
import { ChatgptCodexHandoffBanner } from "./chatgpt-codex-handoff-banner";
import {
  handoffInFlightAtom,
  handoffOutcomeAtom,
} from "./ensure-chatgpt-composer-controller-handoff-atoms";
import { renameChatgptThreadTitle } from "./rename-chatgpt-thread-title";
import type { ContinueChatgptTemporaryChatRequest } from "./types";

type ScopeLike = {
  get: (atom: unknown, key?: unknown) => unknown;
  set: (atom: unknown, key: unknown, value: unknown) => void;
};

type PendingHandoff = {
  callId: string;
  prompt: string;
  reason: string;
};

type HandoffOutcome =
  | { type: "accepted"; threadId: string }
  | { type: "rejected" }
  | null;

type ModelState = { slug?: string; thinkingEffort?: unknown };

function logHandoffLifecycle(
  scope: ScopeLike,
  action: (typeof CodexChatgptHandoffLifecycleAction)[keyof typeof CodexChatgptHandoffLifecycleAction],
): void {
  logProductEvent(scope, CODEX_CHATGPT_HANDOFF_LIFECYCLE_EVENT_TYPE, {
    action,
  });
}

/** Create a Codex thread from a ChatGPT conversation (rename / continue path). */
async function acceptChatgptCodexHandoff(
  scope: ScopeLike,
  args: {
    callId: string;
    conversationId: string;
    conversationTitle?: string | null;
    isTemporaryChat?: boolean;
    model?: unknown;
    prompt: string;
    thinkingEffort?: unknown;
  },
): Promise<string | null> {
  const {
    callId,
    conversationId,
    conversationTitle,
    isTemporaryChat,
    model,
    prompt,
    thinkingEffort,
  } = args;
  const outcome = scope.get(handoffOutcomeAtom, {
    callId,
    conversationId,
  }) as HandoffOutcome;
  if (outcome?.type === "accepted") return outcome.threadId;
  if (outcome?.type === "rejected" || scope.get(handoffInFlightAtom, callId)) {
    return null;
  }
  scope.set(handoffInFlightAtom, callId, true);
  try {
    const threadId = await renameChatgptThreadTitle(scope, {
      chatGptThreadId: conversationId,
      conversationTitle: conversationTitle ?? "",
      prompt,
    });
    if (threadId == null) return null;
    logHandoffLifecycle(
      scope,
      CodexChatgptHandoffLifecycleAction.CODEX_CHATGPT_HANDOFF_LIFECYCLE_ACTION_ACCEPTED,
    );
    await submitToolCallResult(scope, {
      callId,
      conversationId,
      ...(isTemporaryChat ? { isTemporaryChat: true } : {}),
      result: {
        accepted: true,
        message: rewriteThreadUrlPlaceholder(
          (getCodexChatgptHandoffConfig(scope) as { acceptedResponse: string })
            .acceptedResponse,
          threadId,
        ),
        thread_id: threadId,
      },
      model,
      thinkingEffort,
      toolName: HANDOFF_KIND,
    });
    return threadId;
  } catch (error) {
    appLogger.error("Failed to submit ChatGPT Codex handoff result", {
      safe: {},
      sensitive: { error },
    });
    return null;
  } finally {
    scope.set(handoffInFlightAtom, callId, false);
  }
}

async function rejectChatgptCodexHandoff(
  scope: ScopeLike,
  args: {
    callId: string;
    conversationId: string;
    isTemporaryChat?: boolean;
    model?: unknown;
    thinkingEffort?: unknown;
  },
): Promise<void> {
  const { callId, conversationId, isTemporaryChat, model, thinkingEffort } =
    args;
  if (
    scope.get(handoffOutcomeAtom, { callId, conversationId }) != null ||
    scope.get(handoffInFlightAtom, callId)
  ) {
    return;
  }
  scope.set(handoffInFlightAtom, callId, true);
  try {
    await submitToolCallResult(scope, {
      callId,
      conversationId,
      ...(isTemporaryChat ? { isTemporaryChat: true } : {}),
      result: {
        accepted: false,
        message: (
          getCodexChatgptHandoffConfig(scope) as { rejectedResponse: string }
        ).rejectedResponse,
      },
      model,
      thinkingEffort,
      toolName: HANDOFF_KIND,
    });
    logHandoffLifecycle(
      scope,
      CodexChatgptHandoffLifecycleAction.CODEX_CHATGPT_HANDOFF_LIFECYCLE_ACTION_REJECTED,
    );
  } catch (error) {
    appLogger.error("Failed to reject ChatGPT Codex suggestion", {
      safe: {},
      sensitive: { error },
    });
  } finally {
    scope.set(handoffInFlightAtom, callId, false);
  }
}

type HandoffBannerProps = {
  isEverydayWorkMode: boolean;
  onContinue: () => void;
  onReject: () => void;
  pending: boolean;
  reason: string;
};

export function continueChatgptTemporaryChat(
  request: ContinueChatgptTemporaryChatRequest,
): unknown {
  const {
    conversationId,
    isTemporaryChat,
    onContinueSuccess,
    request: handoff,
  } = request;
  const scope = useAppScope(appScopeAtom) as ScopeLike;
  const pendingHandoff = handoff as PendingHandoff;
  const outcomeKey = {
    callId: pendingHandoff.callId,
    conversationId,
  };
  const outcome = useAppScopeAtomValue(
    handoffOutcomeAtom as never,
    outcomeKey as never,
  ) as HandoffOutcome;
  const pending = useAppScopeAtomValue(
    handoffInFlightAtom as never,
    pendingHandoff.callId as never,
  ) as boolean;
  const navigate = useColdNavigate() as (threadId: string) => void;
  const isEverydayWorkMode =
    useAppScopeAtomValue(useStepsProseAtom as never) ===
    THREAD_DETAIL_LEVEL_STEPS_PROSE;

  const onContinue = () => {
    const model = scope.get(
      conversationSelectedModelAtom,
      conversationId,
    ) as ModelState;
    void acceptChatgptCodexHandoff(scope, {
      callId: pendingHandoff.callId,
      conversationId,
      conversationTitle: scope.get(
        chatgptConversationQueryAtomKP,
        conversationId,
      ) as string | null,
      isTemporaryChat,
      model: model?.slug,
      prompt: pendingHandoff.prompt,
      thinkingEffort: model?.thinkingEffort,
    }).then((threadId) => {
      if (threadId != null) {
        navigate(threadId);
        onContinueSuccess?.();
      }
    });
  };
  const onReject = () => {
    const model = scope.get(
      conversationSelectedModelAtom,
      conversationId,
    ) as ModelState;
    void rejectChatgptCodexHandoff(scope, {
      callId: pendingHandoff.callId,
      conversationId,
      isTemporaryChat,
      model: model?.slug,
      thinkingEffort: model?.thinkingEffort,
    });
  };

  UseApprovalKeyboardBindings({
    enabled: outcome == null && !pending,
    onApprove: onContinue as (event: KeyboardEvent) => void,
    onDecline: onReject as (event: KeyboardEvent) => void,
  });

  return outcome == null ? (
    <ChatgptCodexHandoffBanner
      isEverydayWorkMode={isEverydayWorkMode}
      onContinue={onContinue}
      onReject={onReject}
      pending={Boolean(pending)}
      reason={pendingHandoff.reason}
    />
  ) : null;
}

export const useChatgptComposerControllerP = continueChatgptTemporaryChat;
export const useChatgptComposerControllerHelper1 = acceptChatgptCodexHandoff;
export const useChatgptComposerControllerHelper2 = rejectChatgptCodexHandoff;
export const useChatgptComposerControllerHelper3 = logHandoffLifecycle;

export {
  renameChatgptThreadTitle,
  useChatgptComposerControllerL,
} from "./rename-chatgpt-thread-title";
export {
  chatgptComposerBrowserSurfaceActionType,
  ensureChatgptComposerControllerAuxInitR,
  useChatgptComposerControllerI,
  useChatgptComposerControllerR,
} from "./ensure-chatgpt-composer-controller-handoff-atoms";
export { ensureChatgptComposerControllerHandoffUiInit } from "./chatgpt-codex-handoff-banner";
