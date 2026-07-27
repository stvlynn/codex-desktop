// Restored from ref/webview/assets/quick-chat-window-page-DwEfzYsh.js
// Stage 3 shell: dedicated-window route entry for QuickChatWindow.
// Not an app-initial re-export barrel.

import type { ReactElement } from "react";
import { useSearchParams } from "../boundaries/react-router-navigation";
import { useRouteParams } from "../hooks/use-route-params";
import { CodexQuickChatSurface } from "../analytics/codex-quick-chat-surface";
import {
  QuickChatWindow,
  ensureQuickChatWindowInit,
  type QuickChatWindowSession,
} from "../composer/quick-chat-window";
import { ensureQuickChatAtomsInit } from "../windows/quick-chat-atoms";
import { ensureQuickChatFormattedMessageInit } from "../boundaries/quick-chat-window-facades";
export type QuickChatWindowPageProps = {
  conversationId?: string | null;
  session?: QuickChatWindowSession;
};

/**
 * Bundle page — window-mode QuickChatWindow for a route conversation id.
 */
export function QuickChatWindowPage(
  props: QuickChatWindowPageProps = {},
): ReactElement {
  ensureQuickChatAtomsInit();
  ensureQuickChatWindowInit();
  ensureQuickChatFormattedMessageInit();
  const params = useRouteParams() as {
    conversationId?: string;
  };
  const [searchParams] = useSearchParams();
  const conversationId =
    props.conversationId ??
    params.conversationId ??
    searchParams.get("conversationId");
  const session: QuickChatWindowSession =
    props.session ??
    (conversationId
      ? {
          conversationId,
          hasConversation: true,
          projectId: null,
          projectName: null,
        }
      : null);
  return (
    <QuickChatWindow
      variant="window"
      session={session}
      // Surface analytics enum retained for host binders.
      data-quick-chat-surface={
        CodexQuickChatSurface.CODEX_QUICK_CHAT_SURFACE_WINDOW
      }
    />
  );
}
export default QuickChatWindowPage;
