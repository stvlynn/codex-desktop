// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Main remote conversation layout: chrome, pinned composer, toolbar PR/apply.

import { useState, type ReactElement } from "react";

import { useAppScopeValue } from "../../boundaries/composer-appscope-atoms";
import { deferredConversationHJ } from "../../conversation/deferred-conversation-hj";
import { withComposerSuggestionPlacement } from "../../composer/with-composer-suggestion-placement";
import { useRouteParams } from "../../hooks/use-route-params";
import { CreatePullRequestControl } from "./create-pull-request-control";
import {
  RemoteThreadAppShellChrome,
  RemoteThreadComposer,
  ThreadFindFocusProvider,
  ensureRemoteConversationPageBridgesInit,
  remoteHostIdAtom,
  remoteLiveAssistantTurnAtom,
  softCreatePullRequestMutation,
} from "./runtime-bridges";
import { RemoteConversationThread } from "./remote-conversation-thread";
import { RemoteThreadToolbar } from "./remote-thread-toolbar";
import {
  resolveRemoteUnifiedDiff,
  type RemoteTurnLike,
} from "./turn-diff-helpers";

ensureRemoteConversationPageBridgesInit();

function RemotePinnedComposer(): ReactElement {
  const liveTurn = useAppScopeValue(remoteLiveAssistantTurnAtom as never) as {
    turn_status?: string | null;
  } | null;
  const isResponseInProgress =
    liveTurn?.turn_status === "pending" ||
    liveTurn?.turn_status === "in_progress";
  return (
    <div className="contents" data-remote-pinned-composer="">
      {withComposerSuggestionPlacement({
        children: (
          <RemoteThreadComposer
            selectedProject={null}
            composerLayoutMode="auto-single-line"
            isResponseInProgress={isResponseInProgress}
            showUtilityBarBranchWhen="always"
          />
        ),
      })}
    </div>
  );
}

/** Full-window remote conversation layout (non-hotkey). */
export function RemoteConversationMainLayout(): ReactElement {
  const hostId = useAppScopeValue(remoteHostIdAtom as never);
  const { taskId } = useRouteParams();
  const taskQuery = useAppScopeValue(deferredConversationHJ as never) as {
    data?: {
      task?: {
        title?: string | null;
        id?: string;
        pull_requests?: Array<{
          assistant_turn_id?: string | null;
          pull_request: {
            url?: string | null;
            number?: number | null;
            state?: string;
            draft?: boolean | null;
            merged?: boolean | null;
          };
        }>;
      };
      current_diff_task_turn?: RemoteTurnLike | null;
      current_assistant_turn?: RemoteTurnLike | null;
    };
  };
  const liveTurn = useAppScopeValue(remoteLiveAssistantTurnAtom as never) as {
    turn_status?: string | null;
    id?: string;
  } | null;
  const [focusRoot, setFocusRoot] = useState<HTMLElement | null>(null);
  const turnStatus = liveTurn?.turn_status ?? null;
  const showPinnedComposer = taskQuery?.data != null && turnStatus != null;
  const unifiedDiff = resolveRemoteUnifiedDiff(
    taskQuery.data as never,
    liveTurn as never,
    null,
  );
  const showReviewTab = unifiedDiff != null;
  const title = taskQuery.data?.task?.title ?? null;
  const createPrControl = (
    <CreatePullRequestControl
      taskId={taskId ?? taskQuery.data?.task?.id ?? null}
      turns={[]}
      selectedTurn={(liveTurn as RemoteTurnLike | null) ?? null}
      diffTaskTurn={taskQuery.data?.current_diff_task_turn ?? null}
      pullRequests={taskQuery.data?.task?.pull_requests ?? []}
      createPullRequest={softCreatePullRequestMutation}
    />
  );

  return (
    <ThreadFindFocusProvider value={focusRoot}>
      <div
        ref={setFocusRoot}
        className="relative h-full min-h-0"
        data-remote-conversation-main=""
      >
        <div className="border-b border-token-border px-3 py-2">
          <RemoteThreadToolbar
            title={title}
            createPrControl={createPrControl}
          />
        </div>
        <div className="h-full min-h-0">
          <RemoteConversationThread
            hostId={hostId}
            showComposer={!showPinnedComposer}
          />
        </div>
        <RemoteThreadAppShellChrome
          showReviewTab={showReviewTab}
          threadType="remote"
        />
        {showPinnedComposer ? <RemotePinnedComposer /> : null}
      </div>
    </ThreadFindFocusProvider>
  );
}
