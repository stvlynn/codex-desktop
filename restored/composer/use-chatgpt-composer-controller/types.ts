// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Typed public surface for the ChatGPT composer-controller runtime.

import type { ReactNode } from "react";

/** Props for the ChatGPT thread/composer view-state hook. */
export type ChatgptComposerThreadViewStateProps = {
  conversation: unknown;
  moderationDisclaimersByMessageId?: Record<string, unknown>;
  isStreaming: boolean;
  mode: unknown;
  pendingSubmission: unknown;
  threadCurrentNode: unknown;
  threadMapping: unknown;
};

/** Props for mapping rendered ChatGPT turns into composer UI rows. */
export type ChatgptComposerTurnListProps = {
  browserConversationId?: string | null;
  conversationId: string;
  errorMessage?: string | null;
  branchingMessageId?: string | null;
  onEditLatestUserMessage?: (...args: unknown[]) => unknown;
  onFork?: (...args: unknown[]) => unknown;
  renderedTurns: unknown[];
  safetyReview?: unknown;
  showPendingLoadingMessage?: boolean;
};

/** Continue / handoff request for a temporary ChatGPT chat. */
export type ContinueChatgptTemporaryChatRequest = {
  conversationId: string;
  isTemporaryChat?: boolean;
  onContinueSuccess?: (...args: unknown[]) => unknown;
  request: unknown;
};

/** Open an artifact into the writing-blocks controller. */
export type OpenChatgptArtifactInWritingBlocksOptions = {
  conversationId: string;
  fileName: string;
  tabKey: string;
  target: unknown;
};

/** Rename / retitle a ChatGPT thread via the composer controller. */
export type RenameChatgptThreadTitleOptions = {
  chatGptThreadId: string;
  conversationTitle: string;
  prompt?: string;
};

/** Browser-conversation banner / empty-state surface. */
export type ChatgptBrowserConversationBannerProps = {
  browserConversationId?: string | null;
  conversationId: string;
  emptyState?: ReactNode;
  pendingSubmission?: unknown;
  renderInitialContentAsComplete?: boolean;
  renderMode?: "sidebar" | string;
};

/** Lightweight conversation chrome keyed by conversation id. */
export type ChatgptComposerConversationChromeProps = {
  conversationId: string;
};

/** Single browser-conversation turn row inside the composer. */
export type ChatgptComposerBrowserConversationRowProps = {
  browserConversationId?: string | null;
  conversationId: string;
  branchingMessageId?: string | null;
  hostId?: string;
  isMostRecentTurn?: boolean;
  onEditLatestUserMessage?: (...args: unknown[]) => unknown;
  onFork?: (...args: unknown[]) => unknown;
  pendingSubmissionAttachments?: unknown;
  safetyReview?: unknown;
  turn: unknown;
  turnId?: string;
};

/** Open a ChatGPT conversation tab (optionally selecting a thread). */
export type OpenChatgptConversationTabOptions = {
  conversationId: string;
  selectedThreadId?: string | null;
};

/** Seed a composer conversation with an optional initial prompt. */
export type SeedChatgptComposerConversationOptions = {
  conversationId?: string;
  initialPrompt?: string;
};

/** Runtime module that still owns the oversized mechanical body. */
export type ChatgptComposerControllerRuntimeModule =
  typeof import("../../boundaries/use-chatgpt-composer-controller");
