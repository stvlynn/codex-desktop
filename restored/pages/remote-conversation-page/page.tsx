// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Remote / Codex Cloud conversation page: main window + hotkey variants.

import type { ReactElement } from "react";

import { useAppScopeValue } from "../../boundaries/composer-appscope-atoms";
import { Navigate } from "../../boundaries/react-router-navigation";
import { deferredConversationHJ } from "../../conversation/deferred-conversation-hj";
import { useHotkeyWindowDetailLayout } from "../../hooks/use-hotkey-window-detail-layout";
import { useRouteParams } from "../../hooks/use-route-params";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { remoteRootChildPath } from "../../navigation/remote-root-child-path";
import {
  ConversationSearchSurface,
  ensureRemoteConversationPageBridgesInit,
  remoteHostIdAtom,
} from "./runtime-bridges";
import { RemoteConversationMainLayout } from "./remote-main-layout";
import { RemoteConversationThread } from "./remote-conversation-thread";

ensureRemoteConversationPageBridgesInit();

export type RemoteConversationPageProps = {
  variant?: "main" | "hotkey";
  className?: string;
};

/**
 * Bundle export `io` (polished RemoteConversationPageIcon).
 * Public name: RemoteConversationPage.
 */
export function RemoteConversationPage(
  props: RemoteConversationPageProps = {},
): ReactElement {
  const { variant = "main" } = props;
  const { taskId } = useRouteParams();
  const hostId = useAppScopeValue(remoteHostIdAtom as never);
  const taskQuery = useAppScopeValue(deferredConversationHJ as never) as {
    data?: {
      task?: {
        title?: string;
        task_status_display?: { environment_label?: string | null };
      };
    };
  };
  const environmentLabel =
    taskQuery.data?.task?.task_status_display?.environment_label;

  const hotkeyLayout =
    variant === "hotkey" && taskId != null
      ? {
          title: (
            <div className="flex max-w-full min-w-0 items-baseline gap-2">
              <div className="min-w-0 shrink-[999] truncate text-token-foreground">
                {taskQuery.data?.task?.title ?? (
                  <MemoizedFormattedMessage
                    id="hotkeyWindow.defaultTitle"
                    defaultMessage="Codex"
                    description="Fallback title for hotkey window thread header"
                  />
                )}
              </div>
              {environmentLabel == null ? null : (
                <div className="flex shrink-0 items-center gap-1 whitespace-nowrap text-token-description-foreground">
                  <span className="truncate">{environmentLabel}</span>
                </div>
              )}
            </div>
          ),
          mainWindowPath: remoteRootChildPath(taskId),
        }
      : null;

  useHotkeyWindowDetailLayout(hotkeyLayout as never);

  if (!taskId) {
    return <Navigate to="/" />;
  }

  const body =
    variant === "hotkey" ? (
      <RemoteConversationThread key={taskId} hostId={hostId} />
    ) : (
      <RemoteConversationMainLayout key={taskId} />
    );

  return (
    <>
      <ConversationSearchSurface />
      {body}
    </>
  );
}
