// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Pending-worktree activation panel (`wheatR1`): prompt preview, pin toggle,
// and action buttons (work locally / cancel / retry / edit environment /
// auto-fix / continue). Soft mutation peers stay throws: 0.

import { useEffect, type ReactElement, type ReactNode } from "react";

import {
  useLocation,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { useEventCallback } from "../../hooks/use-event-callback";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import {
  softCancelPendingWorktree,
  softClearPendingWorktreeAttention,
  softContinuePendingWorktree,
  softContinuePendingWorktreeLocally,
  softIsPendingWorktreeCancelling,
  softIsPendingWorktreePhaseCancellable,
  softReadPendingWorktreeConversationState,
  softRetryPendingWorktree,
  softRetryPendingWorktreeConversationStart,
  softSetPendingWorktreePinned,
  softStartPendingWorktreeAutoFix,
  type PendingWorktreeLaunch,
} from "./runtime-bridges";

export type PendingWorktreePanelProps = {
  pendingWorktree: PendingWorktreeLaunch;
};

function ActionButton(props: {
  color?: "primary" | "secondary";
  loading?: boolean;
  onClick?: () => void;
  children: ReactNode;
}): ReactElement {
  const { color = "secondary", loading = false, onClick, children } = props;
  return (
    <button
      type="button"
      className={
        color === "primary"
          ? "rounded-md bg-token-text-primary px-3 py-1.5 text-sm text-token-main-surface-primary disabled:opacity-50"
          : "rounded-md border border-token-border px-3 py-1.5 text-sm text-token-text-primary disabled:opacity-50"
      }
      disabled={loading}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function PendingWorktreePromptPreview(props: {
  hostId: string | null | undefined;
  prompt: string | null | undefined;
}): ReactElement {
  return (
    <div
      className="flex flex-col items-end gap-2"
      data-pending-worktree-prompt=""
      data-host-id={props.hostId ?? undefined}
    >
      <div
        className="max-w-prose whitespace-pre-wrap rounded-2xl bg-token-main-surface-secondary px-3 py-2 text-sm"
        role="article"
      >
        {props.prompt ?? ""}
      </div>
    </div>
  );
}

/**
 * Bundle `wheatR1` — panel shown while a stable worktree / conversation start
 * is pending for a client thread id.
 */
export function PendingWorktreePanel(
  props: PendingWorktreePanelProps,
): ReactElement | null {
  const { pendingWorktree } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const conversationState = softReadPendingWorktreeConversationState(
    pendingWorktree.id,
  );
  const isCancelling = softIsPendingWorktreeCancelling(pendingWorktree.id);
  const isCancellable = softIsPendingWorktreePhaseCancellable(
    pendingWorktree.phase,
  );

  const clearAttention = useEventCallback(() => {
    softClearPendingWorktreeAttention(pendingWorktree.id);
  });

  useEffect(() => {
    clearAttention();
  }, [clearAttention, pendingWorktree.id]);

  if (isCancelling) return null;

  const conversationFailed = conversationState === "failed";
  const conversationStarting = conversationState === "starting";
  const phaseFailed = pendingWorktree.phase === "failed" || conversationFailed;
  const canContinueAnyway =
    pendingWorktree.phase === "failed" &&
    pendingWorktree.worktreeGitRoot != null &&
    pendingWorktree.worktreeWorkspaceRoot != null;
  const canAutoFix =
    canContinueAnyway && pendingWorktree.localEnvironmentConfigPath != null;

  const pinToggle = (
    <button
      type="button"
      className="self-start text-xs text-token-text-secondary"
      data-pending-worktree-pin=""
      data-pinned={pendingWorktree.isPinned ? "true" : undefined}
      onClick={() => {
        softSetPendingWorktreePinned(
          pendingWorktree.id,
          !pendingWorktree.isPinned,
        );
      }}
    >
      {pendingWorktree.isPinned ? (
        <MemoizedFormattedMessage
          id="worktreeInitV2.unpin"
          defaultMessage="Unpin"
          description="Unpin a pending worktree setup card"
        />
      ) : (
        <MemoizedFormattedMessage
          id="worktreeInitV2.pin"
          defaultMessage="Pin"
          description="Pin a pending worktree setup card"
        />
      )}
    </button>
  );

  const actions =
    isCancellable || phaseFailed ? (
      <div className="flex flex-wrap gap-2" data-pending-worktree-actions="">
        {isCancellable ? (
          <>
            <ActionButton
              onClick={() => {
                softCancelPendingWorktree(pendingWorktree.id);
                void softContinuePendingWorktreeLocally(pendingWorktree, true);
              }}
            >
              <MemoizedFormattedMessage
                id="worktreeInitV2.workLocallyInstead"
                defaultMessage="Work locally"
                description="Button that cancels worktree setup and starts a local conversation"
              />
            </ActionButton>
            <ActionButton
              onClick={() => {
                softCancelPendingWorktree(pendingWorktree.id);
                void softContinuePendingWorktreeLocally(pendingWorktree, false);
              }}
            >
              <MemoizedFormattedMessage
                id="worktreeInitV2.cancel"
                defaultMessage="Cancel"
                description="Cancel button for worktree creation"
              />
            </ActionButton>
          </>
        ) : null}
        {phaseFailed ? (
          <>
            {pendingWorktree.phase === "failed" ? (
              <ActionButton
                onClick={() => {
                  if (pendingWorktree.localEnvironmentConfigPath != null) {
                    navigate(
                      `/settings/local-environments?configPath=${encodeURIComponent(
                        pendingWorktree.localEnvironmentConfigPath,
                      )}&workspaceRoot=${encodeURIComponent(
                        pendingWorktree.sourceWorkspaceRoot ?? "",
                      )}`,
                      {
                        state: {
                          hostId: pendingWorktree.hostId,
                          returnTo: `${location.pathname}${location.search}${location.hash}`,
                        },
                      },
                    );
                    return;
                  }
                  const params = new URLSearchParams({
                    workspaceRoot: pendingWorktree.sourceWorkspaceRoot ?? "",
                  });
                  navigate(`/settings/local-environments?${params.toString()}`);
                }}
              >
                <MemoizedFormattedMessage
                  id="worktreeInitV2.editEnvironment"
                  defaultMessage="Edit environment"
                  description="Button label to open local environment settings after worktree setup fails"
                />
              </ActionButton>
            ) : null}
            {canAutoFix ? (
              <ActionButton
                onClick={() => {
                  void softStartPendingWorktreeAutoFix(pendingWorktree);
                }}
              >
                <MemoizedFormattedMessage
                  id="worktreeInitV2.autoFix"
                  defaultMessage="Auto-fix"
                  description="Button label to start a repair task after worktree setup fails"
                />
              </ActionButton>
            ) : null}
            <ActionButton
              onClick={() => {
                if (pendingWorktree.phase === "failed") {
                  softRetryPendingWorktree(pendingWorktree.id);
                  return;
                }
                softRetryPendingWorktreeConversationStart(pendingWorktree.id);
              }}
            >
              <MemoizedFormattedMessage
                id="codex.common.retry"
                defaultMessage="Retry"
                description="Retry button"
              />
            </ActionButton>
            {canContinueAnyway ? (
              <ActionButton
                color="primary"
                onClick={() => {
                  softContinuePendingWorktree(pendingWorktree.id);
                }}
              >
                <MemoizedFormattedMessage
                  id="worktreeInitV2.continueAnyway"
                  defaultMessage="Continue anyway"
                  description="Button label to continue starting a task after local environment setup fails"
                />
              </ActionButton>
            ) : null}
          </>
        ) : null}
      </div>
    ) : null;

  return (
    <div
      className="flex flex-col gap-4 px-5 py-4"
      data-pending-worktree-panel=""
      data-pending-worktree-id={pendingWorktree.id}
      data-phase={pendingWorktree.phase ?? undefined}
      data-conversation-starting={conversationStarting ? "true" : undefined}
      data-conversation-failed={conversationFailed ? "true" : undefined}
    >
      {pinToggle}
      <div className="flex flex-col gap-4">
        <PendingWorktreePromptPreview
          hostId={pendingWorktree.hostId}
          prompt={pendingWorktree.prompt}
        />
        {actions}
      </div>
    </div>
  );
}
