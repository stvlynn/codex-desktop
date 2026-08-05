// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `EXr` / export `jY`.

import { isClientNewThreadId } from "./client-new-thread-id";

const LOCAL_THREAD_ID_PREFIX = "local:";

/** Bundle `nT` companion — brand a conversation id as a local client thread id. */
export function toLocalClientThreadId(conversationId: string): string {
  return `${LOCAL_THREAD_ID_PREFIX}${conversationId}`;
}

export type LocalThreadSurfaceRoute = {
  browserTabMentionConversationId: string;
  clientThreadId: string;
  conversationId: string;
  kind: "local";
  placement: string;
  routeConversationId: string;
};

/** Build the local conversation surface route descriptor. */
export function localThreadSurfaceRoute(
  conversationId: string,
  placement: string = "main",
  routeConversationId: string = conversationId,
  clientThreadId: string = toLocalClientThreadId(conversationId),
): LocalThreadSurfaceRoute {
  return {
    browserTabMentionConversationId: isClientNewThreadId(clientThreadId)
      ? clientThreadId
      : conversationId,
    clientThreadId,
    conversationId,
    kind: "local",
    placement,
    routeConversationId,
  };
}
