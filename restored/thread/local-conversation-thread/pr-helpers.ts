// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Pull-request comment / autofix helpers + soft summary PopoverContent shell
// (`localConversationThreadH`) extracted from the local thread chunk.

import { createElement, type ReactElement } from "react";

import { ThreadSummaryPanel } from "./thread-summary-panel";

export type PrCommentAttachArgs = {
  baseBranch?: string | null;
  commentAttachments?: unknown;
  conversationId?: string | null;
  headBranch?: string | null;
  number?: number | null;
};

/**
 * Bundle export `a` — try attaching PR comment context to a conversation store.
 * Soft: returns false until deepen wires the peer store mutators.
 */
export function localConversationThreadA(
  _store: unknown,
  _args: PrCommentAttachArgs,
): boolean {
  return false;
}

export type PrCommentGuidanceArgs = {
  commentAttachment: unknown;
  conversationId?: string | null;
  guidance: string;
};

/** Bundle export `j` — update local PR comment guidance text. Soft: no-op. */
export function localConversationThreadJ(
  _store: unknown,
  _args: PrCommentGuidanceArgs,
): boolean {
  return false;
}

export type PrCommentFocusArgs = PrCommentAttachArgs & {
  focusComposer?: boolean;
};

/** Bundle export `m` — attach PR comments and optionally focus composer. Soft. */
export function localConversationThreadM(
  _store: unknown,
  _args: PrCommentFocusArgs,
): boolean {
  return false;
}

export type DisabledReasonProps = {
  reason?: string | null;
};

/** Bundle export `d` — tooltip copy for disabled PR fix actions. Soft: null. */
export function localConversationThreadD(_props: DisabledReasonProps): null {
  return null;
}

/**
 * Bundle export `h` — PopoverMenu.PopoverContent summary shell
 * (`localConversationThreadH` / sageR1 with registerEnvironmentActionCommands
 * false). Soft: mounts ThreadSummaryPanel inline PopoverContent shell.
 */
export function localConversationThreadH(props: {
  onOpenBackgroundAgent?: (...args: unknown[]) => void;
  onOpenPullRequestSidePanel?: (...args: unknown[]) => void;
  onOpenSubagentsPanel?: (...args: unknown[]) => void;
}): ReactElement {
  return createElement(ThreadSummaryPanel, {
    inlinePopoverContent: true,
    registerEnvironmentActionCommands: false,
    onOpenBackgroundAgent: props.onOpenBackgroundAgent,
    onOpenPullRequestSidePanel: props.onOpenPullRequestSidePanel,
    onOpenSubagentsPanel: props.onOpenSubagentsPanel,
  });
}
