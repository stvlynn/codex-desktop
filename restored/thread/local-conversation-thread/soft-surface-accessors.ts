// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Soft S8 / L8 / V1 surface accessors for LocalThreadSurface. throws: 0.

export type PendingWorktreeLaunch = {
  id: string;
  clientThreadId?: string | null;
  hostId?: string | null;
  label?: string | null;
  launchMode?: string | null;
  phase?: string | null;
  prompt?: string | null;
  isPinned?: boolean;
  sourceWorkspaceRoot?: string | null;
  worktreeGitRoot?: string | null;
  worktreeWorkspaceRoot?: string | null;
  localEnvironmentConfigPath?: string | null;
  sourceCollaborationMode?: {
    settings?: { model?: string | null };
  } | null;
  startConversationParamsInput?: {
    commentAttachments?: unknown;
    collaborationMode?: { settings?: { model?: string | null } };
  } | null;
};

type SoftReader<TArgs extends unknown[], TResult> = (...args: TArgs) => TResult;

let readClientThreadIdImpl: SoftReader<[], string | null> | null = null;
let isClientThreadEligibleImpl: SoftReader<
  [string | null | undefined],
  boolean
> | null = null;
let readPendingWorktreeLaunchImpl: SoftReader<
  [string | null],
  PendingWorktreeLaunch | null
> | null = null;

/** Bind S8 `clientThreadId` reader once the composer scope peer is live. */
export function bindSoftReadClientThreadId(
  next: SoftReader<[], string | null>,
): void {
  readClientThreadIdImpl = next;
}

/** Bind stable-worktree client-thread eligibility check. */
export function bindSoftIsClientThreadEligibleForStableWorktree(
  next: SoftReader<[string | null | undefined], boolean>,
): void {
  isClientThreadEligibleImpl = next;
}

/** Bind V1 pending-worktree launch reader. */
export function bindSoftReadPendingWorktreeLaunch(
  next: SoftReader<[string | null], PendingWorktreeLaunch | null>,
): void {
  readPendingWorktreeLaunchImpl = next;
}

/** Soft: composer-scope `clientThreadId` (bundle S8.value.clientThreadId). */
export function softReadClientThreadId(): string | null {
  return readClientThreadIdImpl?.() ?? null;
}

/**
 * Soft: whether a client thread id is eligible as a stable-worktree launch
 * placeholder (UUID-shaped client thread id peer).
 */
export function softIsClientThreadEligibleForStableWorktree(
  clientThreadId: string | null | undefined,
): boolean {
  if (isClientThreadEligibleImpl != null) {
    return isClientThreadEligibleImpl(clientThreadId);
  }
  void clientThreadId;
  return false;
}

/** Soft: pending worktree launch descriptor for a client thread id (V1). */
export function softReadPendingWorktreeLaunch(
  clientThreadId: string | null,
): PendingWorktreeLaunch | null {
  return readPendingWorktreeLaunchImpl?.(clientThreadId) ?? null;
}

/** Soft: whether the conversation exists in the local store (H2). */
export function softReadHasConversation(
  conversationId: string | null,
): boolean {
  return conversationId != null;
}

/** Soft: host id for a conversation (U2). */
export function softReadHostIdForConversation(
  _conversationId: string | null,
): string | null {
  return null;
}

/** Soft: route conversation id from composer scope (S8 → deferredV8). */
export function softReadRouteConversationId(): string | null {
  return null;
}

/** Soft: background-subagents feature flag (EM). */
export function softReadIsBackgroundSubagentsEnabled(): boolean {
  return false;
}

/** Soft: cached-history presence (ComposerCategoryValueChip / IS). */
export function softReadCachedHistoryPresent(
  _conversationId: string | null,
): boolean {
  return false;
}

/** Soft: realtime-voice thread classification (DeferredUi2 + H4). */
export function softReadIsRealtimeVoiceThread(
  _conversationId: string | null,
): boolean {
  return false;
}

/** Soft: right-panel full-width hides thread content (timberR2 / K0). */
export function softReadRightPanelHidesThread(_args: {
  conversationId: string | null;
  routeConversationId: string | null;
}): boolean {
  return false;
}

/** Soft: framer content-shift motion value (conversationSourceI). */
export function softThreadContentShift(
  _conversationId: string | null,
): unknown {
  return undefined;
}

/** Soft: hotkey-home path preference (B7 + Rmt). Null → `/`. */
export function softReadHotkeyHomePath(): string | null {
  return null;
}

/** Soft: toast danger for missing conversation (toastAtom). */
export function softShowConversationNotFoundToast(_message: string): void {}

/** Soft: mark thread visible + complete telemetry (Vh / plan complete). */
export function softMarkThreadVisible(_conversationId: string): void {}
