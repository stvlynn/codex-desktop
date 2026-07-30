// Restored from ref/webview/assets/local-conversation-page-Bf1KJPOR.js
// Route error / redirect surfaces for the local conversation page.

import { useEffect, type ReactElement } from "react";

import {
  Navigate,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { Button } from "../../ui/button";
import { PageLoadingState } from "../../ui/page-loading-state";
import {
  mergeHadConversationProjectState,
  type HadConversationProjectState,
} from "./had-conversation-project-state";
import {
  LocalEmptyState,
  LocalMainContentLayout,
  LocalShellHeader,
  ThreadHeaderStart,
} from "./local-shell-chrome";

export type { HadConversationProjectState };
export { mergeHadConversationProjectState };

/** Redirect home when the conversation disappeared after having loaded. */
export function RedirectMissingLocalConversation({
  project,
}: {
  project?: unknown;
}): null {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", {
      replace: true,
      state: {
        focusComposerNonce: Date.now(),
        ...(project === undefined ? {} : { project }),
      },
    } as never);
  }, [navigate, project]);
  return null;
}

export type PendingProjectlessThread = {
  title?: string;
  status?: string;
};

/** Pending projectless local conversation (creating / failed). */
export function PendingProjectlessLocalConversationPage({
  pendingProjectlessThread,
}: {
  pendingProjectlessThread: PendingProjectlessThread;
}): ReactElement {
  const navigate = useNavigate();
  return (
    <div className="relative h-full min-h-0" data-local-pending-projectless="">
      <LocalMainContentLayout layout="thread-edge-scroll" />
      <LocalShellHeader>
        <ThreadHeaderStart start={pendingProjectlessThread.title} />
      </LocalShellHeader>
      <div className="h-full min-h-0">
        {pendingProjectlessThread.status === "creating" ? (
          <PageLoadingState debugName="PendingProjectlessLocalConversationPage" />
        ) : (
          <div
            className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center"
            role="alert"
          >
            <MemoizedFormattedMessage
              id="localConversation.pendingProjectless.failed"
              defaultMessage="Could not start this chat"
              description="Error shown when a pending projectless local conversation cannot be created"
            />
            <Button
              color="secondary"
              onClick={() => void navigate(-1 as never)}
            >
              <MemoizedFormattedMessage
                id="localConversation.pendingProjectless.back"
                defaultMessage="Go back"
                description="Button returning from a failed pending projectless local conversation"
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

/** Remote host removed / unavailable empty state. */
export function RemoteConnectionUnavailablePage(): ReactElement {
  const navigate = useNavigate();
  return (
    <LocalEmptyState
      className="h-full"
      title={
        <MemoizedFormattedMessage
          id="localConversation.remoteConnectionUnavailable.title"
          defaultMessage="Remote connection unavailable"
          description="Title shown when a task belongs to a remote connection that is no longer configured"
        />
      }
      description={
        <MemoizedFormattedMessage
          id="localConversation.remoteConnectionUnavailable.description"
          defaultMessage="This chat's remote connection is no longer configured. Add it again in Settings to continue"
          description="Description shown when a task cannot load because its remote host was removed"
        />
      }
      actions={
        <Button onClick={() => void navigate("/settings/connections")}>
          <MemoizedFormattedMessage
            id="localConversation.remoteConnectionUnavailable.action"
            defaultMessage="Open connection settings"
            description="Button that opens connection settings for a task whose remote host was removed"
          />
        </Button>
      }
    />
  );
}

/** Hard navigate away when the route kind is not a local thread. */
export function LocalThreadRouteGuard({
  allowed,
}: {
  allowed: boolean;
}): ReactElement | null {
  if (allowed) return null;
  return <Navigate to="/" replace />;
}
