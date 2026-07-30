// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Hotkey / client-thread surface: resolve conversation id, handle missing
// conversation, and mount the local thread scroll shell. Deep Stage-3 fill of
// bundle `_localConversationThreadI` + `flintR2` + `jasperR2` orchestration
// from the per-chunk checkpoint (never app-initial). Peer siblings deepen
// timeline / composer / resume / header / summary / realtime wrappers.

import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
  type Ref,
} from "react";

import { useAppScopeAtomValue } from "../../boundaries/composer-appscope-atoms";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { localThreadPath } from "../../conversation/local-thread-path";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useIntl } from "../../i18n/use-intl";
import {
  localConversationIdAtom,
  usePendingWorktreeActivation,
} from "../../pages/local-conversation-page/runtime-bridges";
import {
  ThreadScrollLayout,
  type ThreadScrollLayoutHandle,
} from "../thread-scroll-layout";
import { PendingWorktreePanel } from "./pending-worktree-panel";
import { RealtimeVoiceWrapper } from "./realtime-voice-wrapper";
import {
  softIsClientThreadEligibleForStableWorktree,
  softMarkThreadVisible,
  softReadCachedHistoryPresent,
  softReadClientThreadId,
  softReadHasConversation,
  softReadHostIdForConversation,
  softReadIsBackgroundSubagentsEnabled,
  softReadHotkeyHomePath,
  softReadIsRealtimeVoiceThread,
  softReadPendingWorktreeLaunch,
  softReadRightPanelHidesThread,
  softReadRouteConversationId,
  softShowConversationNotFoundToast,
  softThreadContentShift,
  type PendingWorktreeLaunch,
} from "./runtime-bridges";
import { ThreadComposerFooter } from "./thread-composer-footer";
import { ThreadHeader } from "./thread-header";
import { ThreadSummaryPanel } from "./thread-summary-panel";
import { useConversationResume } from "./use-conversation-resume";
import { VirtualizedTurnTimeline } from "./virtualized-turn-timeline";

export type LocalThreadSurfaceProps = {
  shouldResume?: boolean;
  allowMissingConversation?: boolean;
  showUtilityBar?: boolean;
  composerSurfaceClassName?: string;
  footerContent?: ReactNode;
  isReadOnly?: boolean;
  showComposer?: boolean;
  lockedCollaborationMode?: unknown;
  onOpenBackgroundAgent?: (...args: unknown[]) => void;
  onOpenPullRequestSidePanel?: (...args: unknown[]) => void;
  onOpenSubagentsPanel?: (...args: unknown[]) => void;
  className?: string;
  children?: ReactNode;
};

type LocalThreadResolvedBodyProps = LocalThreadSurfaceProps & {
  conversationId: string | null;
  pendingWorktree: PendingWorktreeLaunch | null;
};

type LocalConversationPageShellProps = {
  conversationId: string | null;
  pendingWorktree: PendingWorktreeLaunch | null;
  contentX?: unknown;
  floatingContent?: ReactNode;
  hasConversation: boolean;
  header?: ReactNode;
  hideThreadContent?: boolean;
  hostId: string | null;
  isBackgroundSubagentsEnabled: boolean;
  isCachedHistory?: boolean;
  isThreadHistoryLoading?: boolean;
  isReadOnly?: boolean;
  isRealtimeVoiceThread?: boolean;
  isResuming: boolean;
  lockedCollaborationMode?: unknown;
  composerSurfaceClassName?: string;
  footerContent?: ReactNode;
  onVisibleThreadContentReady?: () => void;
  onOpenBackgroundAgent?: (...args: unknown[]) => void;
  showComposer?: boolean;
  showUtilityBar: boolean;
};

function shouldShowScrollToBottomButton(args: {
  isScrollToTopEnabled: boolean;
  isScrolledFromBottom: boolean;
  responseSpacerHeightPx: number | null;
  scrollDistanceFromBottomPx: number;
}): boolean {
  const {
    isScrollToTopEnabled,
    isScrolledFromBottom,
    responseSpacerHeightPx,
    scrollDistanceFromBottomPx,
  } = args;
  if (!isScrollToTopEnabled || responseSpacerHeightPx == null) {
    return isScrolledFromBottom;
  }
  return scrollDistanceFromBottomPx > responseSpacerHeightPx + 24;
}

function openBackgroundAgentOrFallback(
  onOpenBackgroundAgent: ((...args: unknown[]) => void) | undefined,
  agentArgs: unknown,
): void {
  if (onOpenBackgroundAgent != null) {
    onOpenBackgroundAgent(agentArgs);
  }
}

/**
 * Host id when a starting remote process has expired — soft: the restored
 * `isStartingProcessExpired` row API does not match this call site yet, so we
 * only honor an explicit hostId on the pending worktree / deferred host.
 */
function resolveThreadHostId(args: {
  conversationId: string | null;
  pendingWorktree: PendingWorktreeLaunch | null;
  routeConversationId: string | null;
  searchParams: URLSearchParams | null;
}): string | null {
  void args.routeConversationId;
  void args.searchParams;
  const deferredHost = softReadHostIdForConversation(args.conversationId);
  return args.pendingWorktree?.hostId ?? deferredHost;
}

/**
 * Local conversation page shell — bundle `jasperR2`.
 * Wires ThreadScrollLayout with deepened peer timeline + composer footer.
 */
function LocalConversationPageShell(
  props: LocalConversationPageShellProps,
): ReactElement {
  const {
    conversationId,
    pendingWorktree,
    contentX,
    floatingContent,
    hasConversation,
    header,
    hideThreadContent = false,
    hostId,
    isBackgroundSubagentsEnabled,
    isCachedHistory = false,
    isThreadHistoryLoading = false,
    isReadOnly = false,
    isRealtimeVoiceThread = false,
    isResuming,
    lockedCollaborationMode,
    composerSurfaceClassName,
    footerContent,
    onVisibleThreadContentReady,
    onOpenBackgroundAgent,
    showComposer = true,
    showUtilityBar,
  } = props;

  void onOpenBackgroundAgent;

  const scrollRef = useRef<ThreadScrollLayoutHandle | null>(null);
  const [isScrolledFromBottom, setIsScrolledFromBottom] = useState(false);
  const [scrollDistanceFromBottomPx, setScrollDistanceFromBottomPx] =
    useState(0);
  const [responseSpacerHeightPx] = useState<number | null>(null);

  const showScrollToBottom = shouldShowScrollToBottomButton({
    isScrollToTopEnabled: false,
    isScrolledFromBottom,
    responseSpacerHeightPx,
    scrollDistanceFromBottomPx,
  });

  const onScroll = useEventCallback(
    (distanceFromBottomPx: number, atBottom: boolean) => {
      setScrollDistanceFromBottomPx(distanceFromBottomPx);
      setIsScrolledFromBottom(!atBottom);
    },
  );

  const onScrollToBottom = useEventCallback(() => {
    scrollRef.current?.scrollToBottom();
  });

  const footer = (
    <ThreadComposerFooter
      conversationId={conversationId}
      hostId={hostId}
      isCachedHistory={isCachedHistory}
      isThreadHistoryLoading={isThreadHistoryLoading}
      isResuming={isResuming}
      showUtilityBar={showUtilityBar}
      composerSurfaceClassName={composerSurfaceClassName}
      showScrollToBottomButton={showScrollToBottom}
      onScrollToBottom={onScrollToBottom}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      lockedCollaborationMode={lockedCollaborationMode}
      isScrollToTopEnabled={false}
      footerContent={footerContent}
      showComposer={showComposer}
    />
  );

  const threadBody = hideThreadContent ? null : pendingWorktree != null ? (
    <PendingWorktreePanel pendingWorktree={pendingWorktree} />
  ) : conversationId == null ? null : (
    <VirtualizedTurnTimeline
      conversationId={conversationId}
      hostId={hostId}
      isReadOnly={isReadOnly}
      isRealtimeVoiceThread={isRealtimeVoiceThread}
      isResuming={isResuming}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      onVisibleThreadContentReady={onVisibleThreadContentReady}
      showInProgressFixedContent={showComposer}
    />
  );

  return (
    <div
      className="min-h-0"
      data-local-conversation-page=""
      data-has-conversation={hasConversation ? "true" : undefined}
    >
      <ThreadScrollLayout
        ref={scrollRef as Ref<ThreadScrollLayoutHandle | null>}
        contentX={contentX == null ? undefined : (contentX as never)}
        footer={footer}
        onScroll={onScroll}
        onUserScrollToTop={async () => "stop"}
      >
        {header}
        {threadBody}
        {floatingContent}
      </ThreadScrollLayout>
    </div>
  );
}

/**
 * Resolved local thread body — bundle `flintR2`.
 * Owns missing-conversation redirect/toast and mounts the page shell.
 */
function LocalThreadResolvedBody(
  props: LocalThreadResolvedBodyProps,
): ReactElement {
  const {
    conversationId,
    pendingWorktree,
    shouldResume = true,
    allowMissingConversation = false,
    showUtilityBar = true,
    composerSurfaceClassName,
    footerContent,
    isReadOnly = false,
    showComposer = true,
    lockedCollaborationMode,
    onOpenBackgroundAgent,
    onOpenPullRequestSidePanel,
    onOpenSubagentsPanel,
  } = props;

  const intl = useIntl();
  const navigate = useNavigate();
  const isBackgroundSubagentsEnabled = softReadIsBackgroundSubagentsEnabled();
  const routeConversationId = softReadRouteConversationId();
  const hasConversation = softReadHasConversation(conversationId);
  const isCachedHistory = softReadCachedHistoryPresent(conversationId);
  const hostId = resolveThreadHostId({
    conversationId,
    pendingWorktree,
    routeConversationId,
    searchParams: null,
  });
  const isRealtimeVoiceThread =
    softReadIsRealtimeVoiceThread(conversationId) || hostId != null;
  const hideThreadContent = softReadRightPanelHidesThread({
    conversationId,
    routeConversationId,
  });
  const contentShift = hideThreadContent
    ? undefined
    : softThreadContentShift(conversationId);
  const { isResuming } = useConversationResume(
    shouldResume ? conversationId : null,
  );

  const hadConversationRef = useRef(false);
  const lastParentConversationIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (conversationId != null) {
      lastParentConversationIdRef.current = conversationId;
    }
  }, [conversationId]);

  useEffect(() => {
    if (conversationId == null || allowMissingConversation) return;
    if (hasConversation) {
      hadConversationRef.current = true;
      return;
    }
    if (isResuming) return;
    if (hadConversationRef.current) {
      const parentId = lastParentConversationIdRef.current;
      if (parentId != null && parentId !== conversationId) {
        navigate(localThreadPath(parentId), { replace: true });
        return;
      }
      navigate(softReadHotkeyHomePath() ?? "/", { replace: true });
      return;
    }
    softShowConversationNotFoundToast(
      intl.formatMessage({
        id: "localConversationPage.error.toast",
        defaultMessage: "Conversation not found",
        description:
          "Error message for when the local conversation is not found",
      }),
    );
  }, [
    allowMissingConversation,
    conversationId,
    hasConversation,
    isResuming,
    intl,
    navigate,
  ]);

  const onVisibleThreadContentReady = useEventCallback(() => {
    if (conversationId != null) softMarkThreadVisible(conversationId);
  });

  const onOpenBackgroundAgentBridge = useEventCallback((agentArgs: unknown) => {
    openBackgroundAgentOrFallback(onOpenBackgroundAgent, agentArgs);
  });

  const header =
    conversationId == null ? null : (
      <ThreadHeader conversationId={conversationId} />
    );

  const floatingContent =
    conversationId == null ? null : (
      <ThreadSummaryPanel
        onOpenBackgroundAgent={onOpenBackgroundAgentBridge}
        onOpenPullRequestSidePanel={onOpenPullRequestSidePanel}
        onOpenSubagentsPanel={onOpenSubagentsPanel}
      />
    );

  const shell = (
    <LocalConversationPageShell
      conversationId={conversationId}
      pendingWorktree={pendingWorktree}
      contentX={contentShift}
      floatingContent={floatingContent}
      hasConversation={hasConversation}
      header={header}
      hideThreadContent={hideThreadContent}
      hostId={hostId}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      isCachedHistory={isCachedHistory}
      isThreadHistoryLoading={
        conversationId == null || isCachedHistory || isResuming
      }
      isReadOnly={isReadOnly || isCachedHistory}
      isRealtimeVoiceThread={isRealtimeVoiceThread}
      isResuming={isResuming}
      lockedCollaborationMode={lockedCollaborationMode}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
      composerSurfaceClassName={composerSurfaceClassName}
      footerContent={footerContent}
      onVisibleThreadContentReady={onVisibleThreadContentReady}
      showComposer={showComposer}
      showUtilityBar={showUtilityBar}
    />
  );

  if (conversationId == null || !isRealtimeVoiceThread) return shell;
  return (
    <RealtimeVoiceWrapper
      codexPerspective={shell}
      conversationId={conversationId}
      hostId={hostId}
      contentX={contentShift}
      isRealtimeVoiceThread={isRealtimeVoiceThread}
    />
  );
}

/**
 * Bundle export `I` surface (promoted as LocalConversationThreadUpperI).
 * Call sites pass allowMissingConversation / showUtilityBar from hotkey windows.
 * Deep Stage-3: resolves client/hotkey conversation id then renders the local
 * thread body (`_localConversationThreadI` → `flintR2`).
 */
export function LocalThreadSurface(
  props: LocalThreadSurfaceProps,
): ReactElement {
  const {
    shouldResume = true,
    allowMissingConversation = false,
    showUtilityBar = true,
    composerSurfaceClassName,
    footerContent,
    isReadOnly = false,
    showComposer = true,
    lockedCollaborationMode,
    onOpenBackgroundAgent,
    onOpenPullRequestSidePanel,
    onOpenSubagentsPanel,
    className,
    children,
  } = props;

  const clientThreadId = softReadClientThreadId();
  const conversationId = useAppScopeAtomValue(localConversationIdAtom);

  const pendingClientThreadId =
    conversationId == null &&
    softIsClientThreadEligibleForStableWorktree(clientThreadId)
      ? clientThreadId
      : null;

  const pendingWorktreeRaw = softReadPendingWorktreeLaunch(
    pendingClientThreadId,
  );
  const pendingWorktree =
    pendingWorktreeRaw?.launchMode === "create-stable-worktree"
      ? null
      : pendingWorktreeRaw;

  // Pending-worktree activation peer (page bridge) — keep subscribed.
  usePendingWorktreeActivation();

  const body = (
    <LocalThreadResolvedBody
      conversationId={conversationId}
      pendingWorktree={pendingWorktree}
      shouldResume={shouldResume}
      allowMissingConversation={allowMissingConversation}
      showUtilityBar={showUtilityBar}
      composerSurfaceClassName={composerSurfaceClassName}
      footerContent={footerContent}
      isReadOnly={isReadOnly}
      showComposer={showComposer}
      lockedCollaborationMode={lockedCollaborationMode}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
      onOpenPullRequestSidePanel={onOpenPullRequestSidePanel}
      onOpenSubagentsPanel={onOpenSubagentsPanel}
    />
  );

  return (
    <div className={className} data-local-conversation-thread="">
      {body}
      {children}
    </div>
  );
}
