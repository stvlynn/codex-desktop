// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Soft peer accessors for resume / header / summary / realtime / composer /
// pending-worktree / timeline. throws: 0.

import type { ReactNode } from "react";

import {
  softReadHasConversation,
  type PendingWorktreeLaunch,
} from "./soft-surface-accessors";

export type TurnTimelineLoadingKind = "state" | "subagentTurns";

export type RealtimeVoicePresentationState = {
  connectionRequest: unknown;
  handoff: unknown;
  isConnecting: boolean;
  isPresentationActive: boolean;
  preferredOnMainThread: boolean;
  snapshot: {
    phase: "inactive" | "active" | "connecting" | string;
    locator: { conversationId: string | null; hostId: string | null };
    preferredPresentationSurface?: string | null;
  };
};

export function softReadConversationNeedsResume(
  _conversationId: string | null,
): boolean {
  return false;
}

export async function softMaybeResumeConversation(
  _conversationId: string,
): Promise<void> {}

export function softIsResumeAutoRetryable(_error: unknown): boolean {
  return false;
}

export function softShouldShowResumeErrorToast(_args: {
  hasShownResumeError: boolean;
  shouldAutoRetry: boolean;
}): boolean {
  return !_args.hasShownResumeError || !_args.shouldAutoRetry;
}

export function softFormatResumeErrorMessage(
  intl: { formatMessage: (...args: unknown[]) => ReactNode },
  error: unknown,
): ReactNode {
  return intl.formatMessage(
    {
      id: "localTaskRow.resumeError.v2",
      defaultMessage: "Failed to resume chat{br}{error}",
      description: "Error shown when resuming a local Codex task fails",
    },
    {
      br: "\n",
      error: error instanceof Error ? error.message : String(error),
    },
  );
}

export function softShowResumeErrorToast(
  _message: ReactNode,
  _conversationId: string,
): void {}

export function softReadIsHotkeyWindow(): boolean {
  return false;
}

export function softReadIsWindowActive(): boolean {
  return true;
}

export function softReadThreadHasConversation(conversationId: string): boolean {
  return softReadHasConversation(conversationId);
}

export function softReadParentConversationId(
  _conversationId: string,
): string | null {
  return null;
}

export function softReadThreadTitle(conversationId: string): string {
  return conversationId;
}

export function softReadAgentNickname(_conversationId: string): string | null {
  return null;
}

export async function softResolveConversationMarkdown(
  _conversationId: string,
): Promise<string | null> {
  return null;
}

export function softReadSummaryPanelShouldShow(): boolean {
  return false;
}

export function softReadSummaryPanelShouldHideInline(): boolean {
  return true;
}

const inactiveRealtimeSnapshot: RealtimeVoicePresentationState["snapshot"] = {
  phase: "inactive",
  locator: { conversationId: null, hostId: null },
  preferredPresentationSurface: null,
};

export function softReadRealtimeVoicePresentationState(_locator: {
  conversationId: string;
  hostId: string | null;
}): RealtimeVoicePresentationState {
  return {
    connectionRequest: null,
    handoff: null,
    isConnecting: false,
    isPresentationActive: false,
    preferredOnMainThread: false,
    snapshot: inactiveRealtimeSnapshot,
  };
}

export function softRequestDetachRealtimePresentation(_args: {
  locator: { conversationId: string; hostId: string | null };
  motion: unknown;
  surface: string;
}): void {}

export function softMarkRealtimeVoiceHandoffComplete(_request: unknown): void {}

export function softReadHostConnectionStatus(
  _hostId: string | null,
): "connected" | "connecting" | "restarting" | "disconnected" | null {
  return null;
}

export function softReadRouteMatchesConversation(
  _conversationId: string | null,
): boolean {
  return true;
}

export function softReadIsResponseInProgress(_args: {
  conversationId: string | null;
  isBackgroundSubagentsEnabled: boolean;
}): boolean {
  return false;
}

export function softReadComposerModeAvailability(
  _conversationId: string | null,
): { fallbackMode: "local" } | null {
  return null;
}

export function softReadLocalWorkspaceMaterialization(
  _conversationId: string | null,
): unknown {
  return null;
}

export function softSetRightPanelConversationFocus(
  _contextId: string | undefined,
): void {}

export function softReadPendingWorktreeConversationState(
  _pendingWorktreeId: string,
): "starting" | "failed" | "ready" | null {
  return null;
}

export function softIsPendingWorktreeCancelling(
  _pendingWorktreeId: string,
): boolean {
  return false;
}

export function softIsPendingWorktreePhaseCancellable(
  phase: string | null | undefined,
): boolean {
  return phase === "creating" || phase === "starting" || phase == null;
}

export function softClearPendingWorktreeAttention(
  _pendingWorktreeId: string,
): void {}

export function softSetPendingWorktreePinned(
  _pendingWorktreeId: string,
  _isPinned: boolean,
): void {}

export function softCancelPendingWorktree(_pendingWorktreeId: string): void {}

export async function softContinuePendingWorktreeLocally(
  _pendingWorktree: PendingWorktreeLaunch,
  _continueLocally: boolean,
): Promise<void> {}

export function softRetryPendingWorktree(_pendingWorktreeId: string): void {}

export function softRetryPendingWorktreeConversationStart(
  _pendingWorktreeId: string,
): void {}

export function softContinuePendingWorktree(_pendingWorktreeId: string): void {}

export async function softStartPendingWorktreeAutoFix(
  _pendingWorktree: PendingWorktreeLaunch,
): Promise<void> {}

export function softReadIsConversationPresent(conversationId: string): boolean {
  return softReadHasConversation(conversationId);
}

export function softReadHasRenderableTurns(_args: {
  conversationId: string;
  isBackgroundSubagentsEnabled: boolean;
}): boolean {
  return false;
}

export function softReadTurnTimelineLoadingKind(args: {
  conversationId: string;
  hasRenderableTurns: boolean;
  isResuming: boolean;
  isBackgroundSubagentsEnabled: boolean;
}): TurnTimelineLoadingKind | null {
  if (!args.hasRenderableTurns && args.isResuming) return "state";
  if (
    args.isBackgroundSubagentsEnabled &&
    !args.hasRenderableTurns &&
    softReadParentConversationId(args.conversationId) != null
  ) {
    return "subagentTurns";
  }
  return null;
}

export function softReadAutomationBannerForThread(
  _conversationId: string,
): { id: string; description: string | null; readAt: number | null } | null {
  return null;
}

export function softMarkAutomationItemRead(_itemId: string): void {}
