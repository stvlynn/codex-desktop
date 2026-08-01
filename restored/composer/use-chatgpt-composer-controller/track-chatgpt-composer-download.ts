// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Start a ChatGPT sidebar conversation stream and track cancel/completion.

import { isLocalChatgptId } from "../../chatgpt/is-local-chatgpt-id";
import { writingBlocksControllerAtom } from "../../composer/composer-appscope-atoms";
import { chatgptConversationServerIdAtom } from "../../composer/composer-appscope-atoms";
import { cancelConversationStream } from "../../conversation/cancel-conversation-stream";
import { markConversationError } from "../../conversation/mark-conversation-error";
import { markConversationIdle } from "../../conversation/mark-conversation-idle";
import { markConversationStreaming } from "../../conversation/mark-conversation-streaming";
import { rebaseConversationId } from "../../conversation/rebase-conversation-id";
import { setConversationStreamRequestId } from "../../conversation/set-conversation-stream-request-id";
import { upsertConversationMessage } from "../../conversation/upsert-conversation-message";
import { createLocalChatgptId } from "../../utils/create-local-chatgpt-id";
import { identity } from "../../utils/identity";

type ScopeLike = {
  get: (atom: unknown, id?: unknown) => unknown;
};

type SidebarStreamClient = {
  startSidebarConversationStream: (args: {
    onComplete: () => void;
    onError: (event: { error: unknown }) => void;
    onUpdate: (event: {
      conversationId?: string | null;
      message: unknown;
    }) => void;
    request: unknown;
  }) => Promise<{ streamRequestId: string | null }>;
};

type TrackChatgptComposerDownloadRequest = {
  category?: unknown;
  extraParams?: unknown;
  locale?: unknown;
  messageId?: unknown;
  query: string;
  sourceConversationId: string;
};

type TrackChatgptComposerDownloadHandle = {
  cancel: () => void;
  completion: Promise<void>;
  conversationId: string;
};

/** Build the sidebar conversation stream request payload. */
function buildSidebarConversationStreamRequest(
  scope: ScopeLike,
  request: TrackChatgptComposerDownloadRequest,
): unknown {
  const {
    category,
    extraParams,
    locale,
    messageId,
    query,
    sourceConversationId,
  } = request;
  const serverConversationId = scope.get(
    chatgptConversationServerIdAtom,
    sourceConversationId,
  ) as string | null | undefined;
  return {
    category: "generic_entity",
    conversation_id: serverConversationId ?? sourceConversationId,
    generic_entity_params: {
      category,
      extra_params: extraParams,
      multi_message_mode: true,
      name: query,
    },
    ...(serverConversationId == null && isLocalChatgptId(sourceConversationId)
      ? {
          is_client_thread: true,
        }
      : {}),
    locale,
    message_id: messageId,
    supported_encodings: ["v1"],
  };
}

/** Run the sidebar stream until complete/error, honoring an external cancel flag. */
async function runSidebarConversationStream(
  scope: ScopeLike,
  conversationId: string,
  request: TrackChatgptComposerDownloadRequest,
  isCancelled: () => boolean,
): Promise<void> {
  let remappedConversationId: string | null = null;
  try {
    const client = scope.get(
      writingBlocksControllerAtom,
    ) as SidebarStreamClient;
    const { streamRequestId } = await client.startSidebarConversationStream({
      onComplete: () => {
        markConversationIdle({
          conversationId,
          scope,
        });
      },
      onError: (event) => {
        markConversationError({
          conversationId,
          error: event.error,
          scope,
        });
      },
      onUpdate: (event) => {
        if (
          event.conversationId != null &&
          event.conversationId !== remappedConversationId
        ) {
          rebaseConversationId(scope, conversationId, event.conversationId);
          remappedConversationId = identity(event.conversationId) as string;
        }
        upsertConversationMessage({
          conversationId,
          message: event.message,
          scope,
        });
      },
      request: buildSidebarConversationStreamRequest(scope, request),
    });
    setConversationStreamRequestId({
      conversationId,
      scope,
      streamRequestId,
    });
    if (isCancelled()) {
      cancelConversationStream(scope, conversationId);
    }
  } catch (error) {
    markConversationError({
      conversationId,
      error: error instanceof Error ? error.message : "Unknown error",
      scope,
    });
  }
}

/** Track an in-flight ChatGPT composer download / sidebar stream. */
export function trackChatgptComposerDownload(
  scope: ScopeLike,
  request: TrackChatgptComposerDownloadRequest,
): TrackChatgptComposerDownloadHandle {
  const conversationId = createLocalChatgptId() as string;
  let cancelled = false;
  markConversationStreaming({
    conversationId,
    recordInSidebar: false,
    scope,
    streamRequestId: null,
    title: request.query,
  });
  return {
    cancel: () => {
      cancelled = true;
      cancelConversationStream(scope, conversationId);
    },
    completion: runSidebarConversationStream(
      scope,
      conversationId,
      request,
      () => cancelled,
    ),
    conversationId,
  };
}

// Letter aliases for boundary / legacy consumers
export const useChatgptComposerControllerT = trackChatgptComposerDownload;
export const useChatgptComposerControllerHelper88 =
  runSidebarConversationStream;
export const useChatgptComposerControllerHelper89 =
  buildSidebarConversationStreamRequest;
