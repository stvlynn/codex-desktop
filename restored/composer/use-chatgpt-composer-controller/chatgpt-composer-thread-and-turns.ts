// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Thread view-state derivation and turn-list row mapping for the ChatGPT composer.

import { mapLibraryFilesToFsPathLabels } from "../../content/map-library-files-to-fs-path-labels";
import { buildConversationTurnModels } from "../../conversation/build-conversation-turn-models";
import type {
  ChatgptComposerThreadViewStateProps,
  ChatgptComposerTurnListProps,
} from "./types";

type TurnItem = {
  type: string;
  completed?: boolean;
  status?: string;
};

type RenderedTurn = {
  id: string;
  turn: { items: TurnItem[] };
};

function isTurnStillStreaming(item: TurnItem): boolean {
  if (
    item.type === "chatgpt-reasoning-group" ||
    item.type === "assistant-message"
  ) {
    return !item.completed;
  }
  if (item.type === "generated-image") {
    return item.status === "in_progress" || item.status === "inProgress";
  }
  if (item.type === "web-search") {
    return !item.completed;
  }
  return false;
}

function conversationHasInFlightAssistantTurn(
  renderedTurns: RenderedTurn[],
): boolean {
  return renderedTurns.some(({ turn }) =>
    turn.items.some(isTurnStillStreaming),
  );
}

function shouldShowPendingLoadingMessage(options: {
  isStreaming: boolean;
  pendingTurn: unknown;
  renderedTurns: RenderedTurn[];
}): boolean {
  return options.pendingTurn == null
    ? options.isStreaming &&
        !conversationHasInFlightAssistantTurn(options.renderedTurns)
    : true;
}

type PendingAttachment = { previewSrc?: string | null };

/** Build a synthetic pending user-submit turn for the composer list. */
export function buildPendingChatgptSubmitTurn(
  message: unknown,
  attachments: PendingAttachment[],
  selectedTextAttachments: unknown[],
): RenderedTurn {
  const images = attachments.flatMap(({ previewSrc }) =>
    previewSrc == null ? [] : [previewSrc],
  );
  return {
    id: "pending-chatgpt-submit",
    turn: {
      artifacts: {
        editedFilePaths: [],
        outputFilePaths: [],
        referencedFilePaths: [],
      },
      collaborationMode: null,
      cwd: null,
      items: [
        {
          attachments: mapLibraryFilesToFsPathLabels(
            attachments.filter(({ previewSrc }) => previewSrc == null) as never,
          ),
          commentCount: 0,
          images,
          message,
          referencesPriorConversation: false,
          ...(selectedTextAttachments.length > 0
            ? { selectedTextAttachments }
            : {}),
          sentAtMs: null,
          type: "user-message",
        } as TurnItem & Record<string, unknown>,
      ],
      status: "complete",
    },
  } as RenderedTurn;
}

/** Thread/composer view-state derived from conversation + streaming mode. */
export function useChatgptComposerThreadViewState(
  props: ChatgptComposerThreadViewStateProps,
): {
  renderedConversation: unknown;
  renderedTurns: RenderedTurn[];
  showPendingLoadingMessage: boolean;
} {
  const {
    conversation,
    moderationDisclaimersByMessageId = {},
    isStreaming,
    mode,
    pendingSubmission,
    threadCurrentNode,
    threadMapping,
  } = props;

  const renderedConversation =
    threadMapping == null
      ? (conversation ?? null)
      : {
          current_node: threadCurrentNode ?? null,
          mapping: threadMapping,
        };

  const baseTurns =
    renderedConversation == null
      ? []
      : (buildConversationTurnModels(renderedConversation as never, {
          isStreaming,
          mode,
          moderationDisclaimersByMessageId:
            mode === "conversation" ? moderationDisclaimersByMessageId : {},
        }) as RenderedTurn[]);

  const pendingSubmissionRecord = pendingSubmission as
    | {
        prompt?: unknown;
        attachments?: PendingAttachment[];
        selectedTextAttachments?: Array<{ text: unknown }>;
      }
    | null
    | undefined;

  const pendingTurn =
    pendingSubmissionRecord != null &&
    !isStreaming &&
    pendingSubmissionRecord.prompt != null
      ? buildPendingChatgptSubmitTurn(
          pendingSubmissionRecord.prompt,
          pendingSubmissionRecord.attachments ?? [],
          (pendingSubmissionRecord.selectedTextAttachments ?? []).map(
            ({ text }) => text,
          ),
        )
      : null;

  const renderedTurns =
    pendingTurn == null ? baseTurns : [...baseTurns, pendingTurn];

  return {
    renderedConversation,
    renderedTurns,
    showPendingLoadingMessage: shouldShowPendingLoadingMessage({
      isStreaming,
      pendingTurn,
      renderedTurns,
    }),
  };
}

/** Map rendered turns into composer UI rows (fork / edit / pending load). */
export function renderChatgptComposerTurnList(
  props: ChatgptComposerTurnListProps,
): Array<Record<string, unknown>> {
  const {
    browserConversationId,
    conversationId,
    errorMessage,
    branchingMessageId = null,
    onEditLatestUserMessage,
    onFork,
    renderedTurns,
    safetyReview = null,
    showPendingLoadingMessage,
  } = props;

  return (renderedTurns as RenderedTurn[]).map((item, index) => {
    const isMostRecentTurn = index === renderedTurns.length - 1;
    return {
      ...item,
      browserConversationId,
      conversationId,
      errorMessage: isMostRecentTurn ? errorMessage : null,
      branchingMessageId,
      isMostRecentTurn,
      onEditLatestUserMessage: isMostRecentTurn
        ? onEditLatestUserMessage
        : undefined,
      onFork,
      safetyReview: isMostRecentTurn ? safetyReview : null,
      showPendingLoadingMessage: isMostRecentTurn && showPendingLoadingMessage,
      turnKey: item.id,
    };
  });
}

// Letter aliases for boundary / legacy consumers
export const useChatgptComposerControllerJ = useChatgptComposerThreadViewState;
export const useChatgptComposerControllerM = renderChatgptComposerTurnList;
export const useChatgptComposerControllerHelper5 =
  shouldShowPendingLoadingMessage;
export const useChatgptComposerControllerHelper6 =
  conversationHasInFlightAssistantTurn;
export const useChatgptComposerControllerHelper7 = isTurnStillStreaming;
export const useChatgptComposerControllerHelper8 =
  buildPendingChatgptSubmitTurn;
