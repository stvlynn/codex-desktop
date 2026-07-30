// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Remote conversation thread body: header, timeline, error banner, composer.

import { useEffect, useState, type ReactElement, type ReactNode } from "react";

import { useAppScopeValue } from "../../boundaries/composer-appscope-atoms";
import { deferredConversationHJ } from "../../conversation/deferred-conversation-hj";
import { deferredConversationUJ } from "../../conversation/deferred-conversation-uj";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE } from "../../conversation/thread-detail-level-ids";
import { withComposerSuggestionPlacement } from "../../composer/with-composer-suggestion-placement";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useRouteParams } from "../../hooks/use-route-params";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { handleAnchorOpenHref } from "../../navigation/handle-anchor-open-href";
import { setRightPanelConversation } from "../../shell/set-right-panel-conversation";
import { ThreadScrollLayout } from "../../thread/thread-scroll-layout";
import { Callout } from "../../ui/callout";
import { ElectronOnly } from "../../ui/electron-only";
import { FilteredMapEntriesFragment } from "../../ui/filtered-map-entries-fragment";
import { Header } from "../../ui/header";
import { PageLoadingState } from "../../ui/page-loading-state";
import { StickyColumnShell } from "../../ui/sticky-column-shell";
import { CloudTaskBanner } from "./cloud-task-banner";
import { ApplyOrRevertControl } from "./apply-or-revert-control";
import { RemoteTurnTimeline } from "./remote-turn-timeline";
import {
  RemoteThreadComposer,
  ThreadFindFocusProvider,
  remoteLiveAssistantTurnAtom,
  useLocalNullRef,
} from "./runtime-bridges";
import { resolveRemoteUnifiedDiff } from "./turn-diff-helpers";

export type RemoteConversationThreadProps = {
  hostId?: unknown;
  showComposer?: boolean;
  conversationDetailLevel?: unknown;
};

type TaskDetailsQuery = {
  data?: {
    task?: {
      id?: string;
      title?: string;
      has_unread_turn?: boolean;
    };
    current_assistant_turn?: {
      id?: string;
      environment?: unknown;
      turn_status?: string | null;
    };
  };
  error?: { message?: string } | null;
  isLoading?: boolean;
};

function asTaskQuery(value: unknown): TaskDetailsQuery {
  return (value ?? {}) as TaskDetailsQuery;
}

/** Scrollable remote thread with apply banner + composer footer. */
export function RemoteConversationThread({
  hostId,
  showComposer = true,
  conversationDetailLevel,
}: RemoteConversationThreadProps): ReactElement {
  const taskQuery = asTaskQuery(
    useAppScopeValue(deferredConversationHJ as never),
  );
  const turnsQuery = useAppScopeValue(deferredConversationUJ as never) as {
    isFetching?: boolean;
    isLoading?: boolean;
  };
  const liveTurn = useAppScopeValue(remoteLiveAssistantTurnAtom as never) as {
    id?: string;
    environment?: unknown;
    turn_status?: string | null;
  } | null;
  const { taskId } = useRouteParams();
  const [focusRoot, setFocusRoot] = useState<HTMLElement | null>(null);
  const supportsNewChatShortcut = useLocalNullRef<boolean>(false);

  const data = taskQuery.data;
  const error = taskQuery.error;
  const isLoading = !!taskQuery.isLoading;
  const currentTurn = liveTurn ?? data?.current_assistant_turn ?? null;
  const turnStatus = currentTurn?.turn_status ?? null;
  const isResponseInProgress =
    turnStatus === "pending" || turnStatus === "in_progress";
  const turnFailed = turnStatus === "failed";
  const hideCodeBlocks =
    conversationDetailLevel === THREAD_DETAIL_LEVEL_STEPS_PROSE;

  const openInWeb = useEventCallback(() => {
    if (!taskId) return;
    handleAnchorOpenHref({
      event: "open_in_browser",
      href: `/tasks/${taskId}`,
      initiator: "open_in_browser_bridge",
    } as never);
  });

  const containerRef = useEventCallback((node: HTMLElement | null) => {
    supportsNewChatShortcut.current = !!node;
    setFocusRoot(node);
  });

  useEffect(() => {
    void hostId;
  }, [hostId]);

  const header = (
    <ElectronOnly electron>
      <Header title={data?.task?.title ?? undefined} />
    </ElectronOnly>
  );

  const banner =
    data != null ? (
      <ElectronOnly electron>
        <CloudTaskBanner taskId={data.task?.id ?? taskId} />
      </ElectronOnly>
    ) : null;

  const errorBanner = turnFailed ? (
    <div className="p-2">
      <Callout
        type="error"
        content={
          <MemoizedFormattedMessage
            id="codex.remoteConversation.turnFailed"
            defaultMessage="An error occurred during this chat"
            description="Error banner shown when the current cloud task turn failed"
          />
        }
        primaryCtaText={
          <MemoizedFormattedMessage
            id="codex.remoteConversation.openInWeb"
            defaultMessage="Open in web"
            description="Open task in Codex web button"
          />
        }
        onPrimaryCtaClick={() => openInWeb()}
      />
    </div>
  ) : null;

  const composer =
    showComposer && turnStatus != null ? (
      <div
        className="contents"
        data-thread-find-composer="true"
        onMouseDownCapture={() => {
          setRightPanelConversation(undefined as never, "conversation");
        }}
        onFocusCapture={() => {
          setRightPanelConversation(undefined as never, "conversation");
        }}
      >
        {withComposerSuggestionPlacement({
          children: (
            <RemoteThreadComposer
              browserConversationId={taskId}
              selectedProject={null}
              isResponseInProgress={isResponseInProgress}
              showUtilityBarBranchWhen="always"
            />
          ),
        })}
      </div>
    ) : null;

  const loadError = error ? (
    <div className="py-2">
      <MemoizedFormattedMessage
        id="codex.remoteConversation.errorWithMessage"
        defaultMessage="Error: {message}"
        description="Error display on the remote conversation page including the message"
        values={{ message: error.message ?? "" }}
      />
    </div>
  ) : null;

  const unifiedDiff = resolveRemoteUnifiedDiff(
    data as {
      current_diff_task_turn?: never;
      current_assistant_turn?: never;
    },
    currentTurn as never,
    null,
  );

  const applyControl =
    unifiedDiff && currentTurn?.id && !hideCodeBlocks ? (
      <ApplyOrRevertControl
        turnId={currentTurn.id}
        diff={unifiedDiff}
        taskEnvironment={
          (currentTurn.environment as {
            id?: string;
            label?: string | null;
          } | null) ?? null
        }
      />
    ) : null;

  const footer = (
    <div className="flex flex-col gap-2">
      {applyControl}
      {errorBanner}
      {composer}
    </div>
  );

  const timeline: ReactNode = data ? (
    <RemoteTurnTimeline
      hostId={hostId}
      taskId={taskId ?? data.task?.id ?? null}
      unifiedDiff={unifiedDiff}
      turnsLoading={!!(turnsQuery?.isLoading || turnsQuery?.isFetching)}
      focusedAssistantId={currentTurn?.id ?? null}
      conversationDetailLevel={conversationDetailLevel}
      hideCodeBlocks={hideCodeBlocks}
    />
  ) : isLoading ? (
    <div className="relative min-h-full w-full">
      <PageLoadingState
        fillParent
        debugName="RemoteConversationThread.taskDetails"
      />
    </div>
  ) : null;

  const body = (
    <ThreadScrollLayout footer={footer}>
      <div className="flex flex-col gap-1.5 pt-2">
        {loadError}
        {timeline}
      </div>
      <FilteredMapEntriesFragment key={taskId} />
    </ThreadScrollLayout>
  );

  return (
    <ThreadFindFocusProvider value={focusRoot}>
      <StickyColumnShell
        containerRef={containerRef as never}
        bodyClassName="[&_[data-thread-find-target=conversation]]:scroll-mt-24"
        data-vscode-context='{"chatgpt.supportsNewChatMenu": true}'
        header={header}
        banner={banner}
      >
        {body}
      </StickyColumnShell>
    </ThreadFindFocusProvider>
  );
}
