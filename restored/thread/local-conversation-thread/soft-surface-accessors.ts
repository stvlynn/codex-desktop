// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Soft S8 / L8 / V1 surface accessors for LocalThreadSurface. Bind hooks wire
// real companions when live; defaults use promoted L8 + client-new-thread
// eligibility accessors (throws: 0).

import { isClientNewThreadId } from "../../conversation/client-new-thread-id";
import { localConversationIdAtom } from "../../pages/local-conversation-page/runtime-bridges";

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
let readRouteConversationIdImpl: SoftReader<[], string | null> | null = null;
let readHasConversationImpl: SoftReader<[string | null], boolean> | null = null;
let readHostIdForConversationImpl: SoftReader<
  [string | null],
  string | null
> | null = null;
let readIsBackgroundSubagentsEnabledImpl: SoftReader<[], boolean> | null = null;
let readCachedHistoryPresentImpl: SoftReader<[string | null], boolean> | null =
  null;
let readIsRealtimeVoiceThreadImpl: SoftReader<[string | null], boolean> | null =
  null;
let readRightPanelHidesThreadImpl: SoftReader<
  [
    {
      conversationId: string | null;
      routeConversationId: string | null;
    },
  ],
  boolean
> | null = null;
let threadContentShiftImpl: SoftReader<[string | null], unknown> | null = null;
let readHotkeyHomePathImpl: SoftReader<[], string | null> | null = null;
let showConversationNotFoundToastImpl: SoftReader<[string], void> | null = null;
let markThreadVisibleImpl: SoftReader<[string], void> | null = null;

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

/** Bind L8 / route conversation-id reader. */
export function bindSoftReadRouteConversationId(
  next: SoftReader<[], string | null>,
): void {
  readRouteConversationIdImpl = next;
}

/** Bind DeferredUi / H2 conversation-presence reader. */
export function bindSoftReadHasConversation(
  next: SoftReader<[string | null], boolean>,
): void {
  readHasConversationImpl = next;
}

/** Bind U2 host-id reader. */
export function bindSoftReadHostIdForConversation(
  next: SoftReader<[string | null], string | null>,
): void {
  readHostIdForConversationImpl = next;
}

/** Bind EM background-subagents feature flag. */
export function bindSoftReadIsBackgroundSubagentsEnabled(
  next: SoftReader<[], boolean>,
): void {
  readIsBackgroundSubagentsEnabledImpl = next;
}

/** Bind cached-history presence reader. */
export function bindSoftReadCachedHistoryPresent(
  next: SoftReader<[string | null], boolean>,
): void {
  readCachedHistoryPresentImpl = next;
}

/** Bind DeferredUi2 + H4 realtime-voice thread classifier. */
export function bindSoftReadIsRealtimeVoiceThread(
  next: SoftReader<[string | null], boolean>,
): void {
  readIsRealtimeVoiceThreadImpl = next;
}

/** Bind timberR2 / K0 right-panel hide reader. */
export function bindSoftReadRightPanelHidesThread(
  next: SoftReader<
    [
      {
        conversationId: string | null;
        routeConversationId: string | null;
      },
    ],
    boolean
  >,
): void {
  readRightPanelHidesThreadImpl = next;
}

/** Bind conversationSourceI content-shift motion. */
export function bindSoftThreadContentShift(
  next: SoftReader<[string | null], unknown>,
): void {
  threadContentShiftImpl = next;
}

/** Bind B7 + Rmt hotkey-home path. */
export function bindSoftReadHotkeyHomePath(
  next: SoftReader<[], string | null>,
): void {
  readHotkeyHomePathImpl = next;
}

/** Bind toastAtom danger for missing conversation. */
export function bindSoftShowConversationNotFoundToast(
  next: SoftReader<[string], void>,
): void {
  showConversationNotFoundToastImpl = next;
}

/** Bind Vh / plan-complete thread-visible marker. */
export function bindSoftMarkThreadVisible(
  next: SoftReader<[string], void>,
): void {
  markThreadVisibleImpl = next;
}

/** Soft: composer-scope `clientThreadId` (bundle S8.value.clientThreadId). */
export function softReadClientThreadId(): string | null {
  return readClientThreadIdImpl?.() ?? null;
}

/**
 * Soft: whether a client thread id is eligible as a stable-worktree launch
 * placeholder. Default = `isClientNewThreadId` (UUID-shaped client-new-thread
 * peer) until a tighter binder lands.
 */
export function softIsClientThreadEligibleForStableWorktree(
  clientThreadId: string | null | undefined,
): boolean {
  if (isClientThreadEligibleImpl != null) {
    return isClientThreadEligibleImpl(clientThreadId);
  }
  return isClientNewThreadId(clientThreadId);
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
  if (readHasConversationImpl != null) {
    return readHasConversationImpl(conversationId);
  }
  return conversationId != null;
}

/** Soft: host id for a conversation (U2). */
export function softReadHostIdForConversation(
  conversationId: string | null,
): string | null {
  return readHostIdForConversationImpl?.(conversationId) ?? null;
}

/**
 * Soft: route conversation id. Default reads promoted L8
 * (`localConversationIdAtom`) until a tighter binder lands.
 */
export function softReadRouteConversationId(): string | null {
  if (readRouteConversationIdImpl != null) {
    return readRouteConversationIdImpl();
  }
  return localConversationIdAtom.get();
}

/** Soft: background-subagents feature flag (EM). */
export function softReadIsBackgroundSubagentsEnabled(): boolean {
  return readIsBackgroundSubagentsEnabledImpl?.() ?? false;
}

/** Soft: cached-history presence (ComposerCategoryValueChip / IS). */
export function softReadCachedHistoryPresent(
  conversationId: string | null,
): boolean {
  return readCachedHistoryPresentImpl?.(conversationId) ?? false;
}

/** Soft: realtime-voice thread classification (DeferredUi2 + H4). */
export function softReadIsRealtimeVoiceThread(
  conversationId: string | null,
): boolean {
  return readIsRealtimeVoiceThreadImpl?.(conversationId) ?? false;
}

/** Soft: right-panel full-width hides thread content (timberR2 / K0). */
export function softReadRightPanelHidesThread(args: {
  conversationId: string | null;
  routeConversationId: string | null;
}): boolean {
  return readRightPanelHidesThreadImpl?.(args) ?? false;
}

/** Soft: framer content-shift motion value (conversationSourceI). */
export function softThreadContentShift(conversationId: string | null): unknown {
  return threadContentShiftImpl?.(conversationId) ?? undefined;
}

/** Soft: hotkey-home path preference (B7 + Rmt). Null → `/`. */
export function softReadHotkeyHomePath(): string | null {
  return readHotkeyHomePathImpl?.() ?? null;
}

/** Soft: toast danger for missing conversation (toastAtom). */
export function softShowConversationNotFoundToast(message: string): void {
  showConversationNotFoundToastImpl?.(message);
}

/** Soft: mark thread visible + complete telemetry (Vh / plan complete). */
export function softMarkThreadVisible(conversationId: string): void {
  markThreadVisibleImpl?.(conversationId);
}
