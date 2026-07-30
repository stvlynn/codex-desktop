// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Virtualized turn timeline (`prismR2`): loading / empty states, conversation
// focus handlers, and VirtualizedTurnList (`copperR2`) mount.

import { useEffect, useRef, type ReactElement } from "react";

import { useEventCallback } from "../../hooks/use-event-callback";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import {
  softMarkAutomationItemRead,
  softReadAutomationBannerForThread,
  softReadHasRenderableTurns,
  softReadIsConversationPresent,
  softReadTurnListEntries,
  softReadTurnTimelineLoadingKind,
  softSetRightPanelConversationFocus,
  type TurnTimelineLoadingKind,
} from "./runtime-bridges";
import { VirtualizedTurnList } from "./virtualized-turn-list";
import type {
  LatestTurnSubmitPlacement,
  ResponseSpacerState,
} from "./virtualized-turn-list-types";

export type VirtualizedTurnTimelineProps = {
  conversationId: string;
  hostId: string | null;
  isReadOnly?: boolean;
  isRealtimeVoiceThread?: boolean;
  isResuming: boolean;
  isBackgroundSubagentsEnabled: boolean;
  onVisibleThreadContentReady?: () => void;
  initialScrollOffset?: number | null;
  initialVirtualizedTurnListRestoreState?: unknown;
  enableMcpApps?: boolean;
  consumePendingLatestTurnSubmitPlacement?: () => LatestTurnSubmitPlacement | null;
  onResponseSpacerStateChange?: (state: ResponseSpacerState | null) => void;
  onVirtualizedTurnListRestoreStateChange?: (state: unknown) => void;
  showInProgressFixedContent?: boolean;
  isScrollToTopEnabled?: boolean;
  supersededMcpAppWidgetCallIds?: ReadonlyArray<string>;
};

function TimelineLoadingState(props: {
  kind: TurnTimelineLoadingKind;
}): ReactElement {
  return (
    <div
      className="flex min-h-40 flex-1 items-center justify-center"
      data-local-thread-timeline-loading={props.kind}
      role="status"
    >
      <span className="text-sm text-token-text-secondary">
        {props.kind === "subagentTurns" ? (
          <MemoizedFormattedMessage
            id="localConversation.timeline.loadingSubagent"
            defaultMessage="Loading subagent turns…"
            description="Loading state while subagent turns hydrate"
          />
        ) : (
          <MemoizedFormattedMessage
            id="localConversation.timeline.loading"
            defaultMessage="Loading conversation…"
            description="Loading state for the local conversation turn timeline"
          />
        )}
      </span>
    </div>
  );
}

/**
 * Bundle `prismR2` — virtualized turn timeline for the local conversation.
 * Mounts VirtualizedTurnList (`copperR2`) once loading clears.
 */
export function VirtualizedTurnTimeline(
  props: VirtualizedTurnTimelineProps,
): ReactElement {
  const {
    conversationId,
    hostId,
    isReadOnly = false,
    isRealtimeVoiceThread = false,
    isResuming,
    isBackgroundSubagentsEnabled,
    onVisibleThreadContentReady,
    initialScrollOffset,
    initialVirtualizedTurnListRestoreState,
    enableMcpApps = false,
    consumePendingLatestTurnSubmitPlacement,
    onResponseSpacerStateChange,
    onVirtualizedTurnListRestoreStateChange,
    showInProgressFixedContent = true,
    isScrollToTopEnabled = false,
    supersededMcpAppWidgetCallIds,
  } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasConversation = softReadIsConversationPresent(conversationId);
  const hasRenderableTurns = softReadHasRenderableTurns({
    conversationId,
    isBackgroundSubagentsEnabled,
  });
  const loadingKind = softReadTurnTimelineLoadingKind({
    conversationId,
    hasRenderableTurns,
    isResuming,
    isBackgroundSubagentsEnabled,
  });
  const automationBanner = softReadAutomationBannerForThread(conversationId);
  const turnListEntries = softReadTurnListEntries({
    conversationId,
    isBackgroundSubagentsEnabled,
  });

  useEffect(() => {
    if (automationBanner?.id == null || automationBanner.readAt != null) return;
    softMarkAutomationItemRead(automationBanner.id);
  }, [automationBanner?.id, automationBanner?.readAt]);

  const onVisibleReady = useEventCallback(() => {
    setTimeout(() => {
      onVisibleThreadContentReady?.();
    });
  });

  const onFocusConversation = useEventCallback(() => {
    softSetRightPanelConversationFocus(`conversation:${conversationId}`);
  });

  useEffect(() => {
    if (loadingKind != null) return;
    if (!hasRenderableTurns && isResuming) return;
    onVisibleReady();
  }, [hasRenderableTurns, isResuming, loadingKind, onVisibleReady]);

  void hostId;
  void isReadOnly;
  void isRealtimeVoiceThread;
  void enableMcpApps;
  void showInProgressFixedContent;
  void supersededMcpAppWidgetCallIds;
  void isScrollToTopEnabled;

  if (!hasConversation && !isResuming) {
    return <TimelineLoadingState kind="state" />;
  }

  if (loadingKind != null) {
    return <TimelineLoadingState kind={loadingKind} />;
  }

  return (
    <div
      ref={containerRef}
      data-thread-find-target="conversation"
      className="relative flex flex-col gap-3 electron:[--color-token-description-foreground:color-mix(in_srgb,var(--color-token-foreground)_70%,transparent)]"
      data-local-thread-timeline=""
      data-conversation-id={conversationId}
      data-has-renderable-turns={hasRenderableTurns ? "true" : undefined}
      onMouseDownCapture={onFocusConversation}
      onFocusCapture={onFocusConversation}
    >
      {!hasRenderableTurns && automationBanner?.description != null ? (
        <div
          className="mx-5 rounded-xl border border-token-border px-3 py-2 text-sm"
          data-automation-banner=""
          role="note"
        >
          {automationBanner.description}
        </div>
      ) : null}
      <VirtualizedTurnList
        conversationId={conversationId}
        entries={turnListEntries}
        initialScrollOffset={initialScrollOffset}
        initialVirtualizedTurnListRestoreState={
          initialVirtualizedTurnListRestoreState
        }
        consumePendingLatestTurnSubmitPlacement={
          consumePendingLatestTurnSubmitPlacement
        }
        onResponseSpacerStateChange={onResponseSpacerStateChange}
        onVisibleContentReady={
          onVisibleThreadContentReady == null ||
          (!hasRenderableTurns && isResuming)
            ? undefined
            : onVisibleReady
        }
        onVirtualizedTurnListRestoreStateChange={
          onVirtualizedTurnListRestoreStateChange
        }
        synchronouslyMeasureLatestTurnUpdates={false}
        latestTurnFooter={undefined}
        latestTurnFooterKey={null}
      />
    </div>
  );
}
