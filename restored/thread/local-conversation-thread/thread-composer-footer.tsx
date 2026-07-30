// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Local thread composer footer (`oliveR2`): scroll-to-bottom control, reconnect
// / loading status, and the composer surface slot. Soft composer controller
// body is intentionally not split here (owned elsewhere); this mounts a typed
// surface shell around soft peers.

import type { ReactElement, ReactNode } from "react";

import { useEventCallback } from "../../hooks/use-event-callback";
import { useIntl } from "../../i18n/use-intl";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import {
  softReadComposerModeAvailability,
  softReadHostConnectionStatus,
  softReadIsResponseInProgress,
  softReadLocalWorkspaceMaterialization,
  softReadRouteMatchesConversation,
  softSetRightPanelConversationFocus,
} from "./runtime-bridges";

export type ThreadComposerFooterProps = {
  conversationId: string | null;
  hostId: string | null;
  isCachedHistory?: boolean;
  isThreadHistoryLoading?: boolean;
  isResuming?: boolean;
  showUtilityBar?: boolean;
  composerSurfaceClassName?: string;
  showScrollToBottomButton?: boolean;
  onScrollToBottom?: () => void;
  onPrepareLatestTurnSubmitPlacement?: (args: {
    distanceFromBottomPx: number;
    scrollHeightPx: number | null;
  }) => void;
  onClearPendingLatestTurnSubmitPlacement?: () => void;
  isBackgroundSubagentsEnabled?: boolean;
  lockedCollaborationMode?: unknown;
  isScrollToTopEnabled?: boolean;
  /** When composer is disabled, optional fallback footer content. */
  footerContent?: ReactNode;
  showComposer?: boolean;
};

type ComposerStatus = "reconnecting" | "loading" | null;

function resolveComposerStatus(args: {
  conversationId: string | null;
  hostId: string | null;
  isResuming: boolean;
}): ComposerStatus {
  const { conversationId, hostId, isResuming } = args;
  if (conversationId == null) return null;
  if (hostId == null || hostId === "local") return null;
  const connection = softReadHostConnectionStatus(hostId);
  if (connection === "connecting" || connection === "restarting") {
    return "reconnecting";
  }
  if (isResuming && !softReadRouteMatchesConversation(conversationId)) {
    return "loading";
  }
  return null;
}

function ComposerStatusBanner(props: {
  status: ComposerStatus;
}): ReactElement | null {
  if (props.status == null) return null;
  return (
    <div
      className="px-3 py-1 text-xs text-token-text-secondary"
      data-composer-status={props.status}
      role="status"
    >
      {props.status === "reconnecting" ? (
        <MemoizedFormattedMessage
          id="localConversation.composer.reconnecting"
          defaultMessage="Reconnecting…"
          description="Status shown above the composer while the remote host reconnects"
        />
      ) : (
        <MemoizedFormattedMessage
          id="localConversation.composer.loading"
          defaultMessage="Loading conversation…"
          description="Status shown above the composer while the conversation resumes"
        />
      )}
    </div>
  );
}

function ScrollToBottomControl(props: {
  show: boolean;
  onClick?: () => void;
  showWorkingDots: boolean;
  label: string;
}): ReactElement {
  const { show, onClick, showWorkingDots, label } = props;
  return (
    <div className="relative h-0">
      <button
        type="button"
        className={
          show
            ? "absolute bottom-[calc(100%+6*var(--spacing))] left-1/2 z-10 -translate-x-1/2 rounded-full border border-token-border bg-token-main-surface-primary px-3 py-1 text-xs shadow-sm"
            : "pointer-events-none invisible absolute"
        }
        aria-label={label}
        data-local-thread-scroll-to-bottom=""
        data-show-working-dots={showWorkingDots ? "true" : undefined}
        onClick={onClick}
        hidden={!show}
      >
        {label}
      </button>
    </div>
  );
}

/**
 * Bundle `oliveR2` — composer / utility-bar footer for the local thread shell.
 * Soft: does not deepen the composer controller body; mounts a typed surface
 * slot that mirrors checkpoint props.
 */
export function ThreadComposerFooter(
  props: ThreadComposerFooterProps,
): ReactElement | null {
  const {
    conversationId,
    hostId,
    isCachedHistory = false,
    isThreadHistoryLoading = false,
    isResuming = false,
    showUtilityBar = true,
    composerSurfaceClassName,
    showScrollToBottomButton = false,
    onScrollToBottom,
    onPrepareLatestTurnSubmitPlacement,
    onClearPendingLatestTurnSubmitPlacement,
    isBackgroundSubagentsEnabled = false,
    lockedCollaborationMode,
    isScrollToTopEnabled = false,
    footerContent,
    showComposer = true,
  } = props;

  const intl = useIntl();
  const status = resolveComposerStatus({
    conversationId,
    hostId,
    isResuming,
  });
  const isPendingWorktree = conversationId == null;
  const isResponseInProgress = softReadIsResponseInProgress({
    conversationId,
    isBackgroundSubagentsEnabled,
  });
  const modeAvailability = softReadComposerModeAvailability(conversationId);
  const workspaceMaterialization =
    softReadLocalWorkspaceMaterialization(conversationId);

  const onFocusConversation = useEventCallback(() => {
    softSetRightPanelConversationFocus(
      conversationId == null ? undefined : `conversation:${conversationId}`,
    );
  });

  void onPrepareLatestTurnSubmitPlacement;
  void onClearPendingLatestTurnSubmitPlacement;
  void workspaceMaterialization;
  void lockedCollaborationMode;

  if (!showComposer) {
    if (footerContent == null) return null;
    return <div className="px-5 pb-2">{footerContent}</div>;
  }

  const placeholderText = isPendingWorktree
    ? intl.formatMessage({
        id: "pendingWorktree.composerPlaceholder",
        defaultMessage: "Waiting for worktree setup…",
        description:
          "Placeholder in the task composer while its worktree is being created",
      })
    : undefined;

  const scrollLabel = intl.formatMessage({
    id: "localConversation.scrollToBottomButton",
    defaultMessage: "Scroll to bottom",
    description: "Label for button that scrolls to the latest message",
  });

  return (
    <div
      className="flex flex-col"
      data-thread-find-composer="true"
      onMouseDownCapture={onFocusConversation}
      onFocusCapture={onFocusConversation}
    >
      <ScrollToBottomControl
        show={showScrollToBottomButton}
        onClick={onScrollToBottom}
        showWorkingDots={
          isScrollToTopEnabled &&
          showScrollToBottomButton &&
          isResponseInProgress
        }
        label={scrollLabel}
      />
      <div className="flex flex-col gap-2">
        {conversationId == null ? null : (
          <div data-local-thread-automation-banner="" hidden aria-hidden />
        )}
        <ComposerStatusBanner status={status} />
        <div
          className={composerSurfaceClassName}
          data-local-thread-composer-surface=""
          data-show-utility-bar={showUtilityBar ? "true" : undefined}
          data-submit-disabled={isPendingWorktree ? "true" : undefined}
          data-is-thread-history-loading={
            conversationId == null || isThreadHistoryLoading
              ? "true"
              : undefined
          }
          data-is-response-in-progress={
            isResponseInProgress ? "true" : undefined
          }
          data-above-composer-overlay={
            isCachedHistory && status == null ? "cached-history" : undefined
          }
          data-composer-mode-availability={
            modeAvailability == null ? undefined : "projectless-local"
          }
          data-placeholder={placeholderText}
          // Soft: composer controller (`AppInitialTT` / setKeyedAtom…) not
          // deepened here — surface slot only.
        />
      </div>
    </div>
  );
}
