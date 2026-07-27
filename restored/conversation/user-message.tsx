// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uJc`) / export `qu`.
// Memo-cache stripped via strip-react-compiler.ts; jsx()/jsxs() residue
// converted to native JSX via jsx-runtime.ts.

import { useState, type ReactNode } from "react";

export type UserMessageProps = {
  message: unknown;
  sentAtMs?: number | null;
  collapsedLineCount?: number;
  alwaysShowActions?: boolean;
  compactActions?: boolean;
  hideActions?: boolean;
  messageStatus?: ReactNode;
  messageStatusIcon?: ReactNode;
  messageReaction?: ReactNode;
  hookStats?: unknown;
  threadDetailLevel?: unknown;
  referencesPriorConversation?: boolean;
  reviewMode?: boolean;
  pullRequestFixMode?: boolean;
  autoResolveSync?: boolean;
  hasExternalAttachments?: boolean;
  commentCount?: number;
  onEditMessage?: (nextMessage: string) => unknown;
  threadId?: string | null;
  turnId?: string | null;
  cwd?: string | null;
  hostId?: string | null;
};

export type UserMessageComponentPeers = {
  $: (...args: unknown[]) => unknown;
  Bm: (...args: unknown[]) => unknown;
  Bz: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  Gb: (...args: unknown[]) => unknown;
  HKc: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Kqc: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  Nqn: (...args: unknown[]) => unknown;
  SB: (...args: unknown[]) => unknown;
  Tqc: (...args: unknown[]) => unknown;
  UEt: (...args: unknown[]) => unknown;
  Xm: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  cJc: (...args: unknown[]) => unknown;
  dJc: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  h_: (...args: unknown[]) => unknown;
  iJc: (...args: unknown[]) => unknown;
  mJc: (...args: unknown[]) => unknown;
  pT: (...args: unknown[]) => unknown;
};
let peers: UserMessageComponentPeers | null = null;

/** Wire UserMessage peers once companions land. */
export function setUserMessageComponentPeers(
  next: UserMessageComponentPeers,
): void {
  peers = next;
}

/**
 * Bundle export `qu` / internal `uJc`.
 * Renders a user turn bubble: message text/plan-preview, edit/copy actions,
 * status chips (review mode, PR fix, prior-conversation, comment count) and
 * an inline edit composer.
 */
export function UserMessage(props: UserMessageProps): ReactNode {
  if (peers == null) {
    throw new Error("UserMessage peers are not configured");
  }
  const {
    message,
    sentAtMs,
    collapsedLineCount,
    messageStatus,
    messageStatusIcon,
    messageReaction,
    hookStats,
    threadDetailLevel,
    onEditMessage,
    threadId,
    turnId,
    cwd,
    hostId,
  } = props;
  const alwaysShowActions = props.alwaysShowActions ?? false;
  const compactActions = props.compactActions ?? false;
  const hideActions = props.hideActions ?? false;
  const referencesPriorConversation = props.referencesPriorConversation ?? false;
  const reviewMode = props.reviewMode ?? false;
  const pullRequestFixMode = props.pullRequestFixMode ?? false;
  const autoResolveSync = props.autoResolveSync ?? false;
  const hasExternalAttachments = props.hasExternalAttachments ?? false;
  const commentCount = props.commentCount ?? 0;

  const N = peers.Io(peers.hT);
  const resolvedTurnId = threadId ?? peers.pT(N.value);
  const isEditingThisTurn = peers.Fo(peers.HKc, resolvedTurnId);
  const rawText = peers.h_(message);
  const trimmedText = rawText.trim();
  const isPlanFollowUp = peers.UEt(rawText);
  const canEdit = onEditMessage != null && turnId != null && !isPlanFollowUp;
  const [justCopied, setJustCopied] = useState(false);
  const draftInEdit = peers.Fo(peers.mJc, turnId);
  const isEditing = canEdit && draftInEdit != null;
  const intl = peers.Ju();
  const analytics = peers.Y(peers.Gb);
  const displayText = isPlanFollowUp
    ? intl.formatMessage({
        id: `codex.userMessage.implementPlan`,
        defaultMessage: `Yes, implement this plan`,
        description: `Display text for the synthetic implement-plan follow-up prompt`,
      })
    : rawText;
  const hasVisibleText = displayText.trim().length > 0;
  const hasAnyChip =
    referencesPriorConversation ||
    reviewMode ||
    pullRequestFixMode ||
    autoResolveSync ||
    hasExternalAttachments ||
    commentCount > 0;
  const showBubble = hasVisibleText || !hasAnyChip;
  const showChipRow =
    hasAnyChip ||
    messageStatus != null ||
    (!compactActions && !hideActions && !isEditingThisTurn);

  const copyMessage = () => {
    if (threadId != null && turnId != null) {
      analytics.submitCodexAnalyticsEvent?.({
        action: `copy`,
        eventKind: `action`,
        metadata: { surface: `user_message` },
        threadId,
        turnId,
      });
    }
    navigator.clipboard.writeText(peers!.Nqn(trimmedText)).then(() => {
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 1500);
    });
  };

  const setDraftInEdit = (nextDraft: string | null) => {
    N.set(peers!.mJc, turnId, nextDraft);
  };

  const submitEdit = async (nextMessage: string) => {
    if (onEditMessage != null) {
      await onEditMessage(nextMessage);
      setDraftInEdit(null);
    }
  };

  const beginEdit = () => {
    if (threadId != null && turnId != null) {
      analytics.submitCodexAnalyticsEvent?.({
        action: `edit`,
        eventKind: `action`,
        metadata: { surface: `user_message` },
        threadId,
        turnId,
      });
    }
    draftInEdit ?? setDraftInEdit(trimmedText);
  };

  const messageBody = hasVisibleText ? (
    <peers.Kqc
      text={displayText}
      cwd={cwd ?? null}
      hostId={hostId}
      collapsedLineCount={collapsedLineCount}
    />
  ) : (
    <div className={`text-size-chat mb-px text-token-description-foreground`}>
      <peers.Z
        id={`codex.userMessage.noContent`}
        defaultMessage={`(No content)`}
        description={`Text for when a user message has no content`}
      />
    </div>
  );

  const copyButton = justCopied ? (
    <peers.Xm
      tooltipContent={
        <peers.Z
          id={`codex.userMessage.copiedTooltip`}
          defaultMessage={`Copied`}
          description={`Tooltip on copy message icon button when copied`}
        />
      }
      disabled={true}
    >
      <peers.Np
        className={`focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:ring-offset-0`}
        color={`ghost`}
        size={`icon`}
        aria-label={intl.formatMessage({
          id: `codex.userMessage.copiedAriaLabel`,
          defaultMessage: `Copied`,
          description: `Aria label for the copy button after the content has been copied`,
        })}
      >
        <peers.Bm className={`icon-xs`} />
      </peers.Np>
    </peers.Xm>
  ) : (
    <peers.Xm
      tooltipContent={
        <peers.Z
          id={`codex.userMessage.copyTooltip`}
          defaultMessage={`Copy`}
          description={`Tooltip on copy message icon button`}
        />
      }
    >
      <peers.Np
        className={`focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:ring-offset-0`}
        color={`ghost`}
        size={`icon`}
        aria-label={intl.formatMessage({
          id: `codex.userMessage.copyAriaLabel`,
          defaultMessage: `Copy message`,
          description: `Aria label for the button that copies the user's message`,
        })}
        onClick={copyMessage}
      >
        <peers.Bz className={`icon-xs`} />
      </peers.Np>
    </peers.Xm>
  );

  let bubble: ReactNode;
  if (isEditing) {
    bubble = (
      <div className={`w-full p-px`}>
        <peers.cJc
          cwd={cwd ?? null}
          hostId={hostId}
          initialMessage={String(draftInEdit).trim()}
          onCancel={() => setDraftInEdit(null)}
          onDraftChange={(next: string) => setDraftInEdit(next)}
          onSubmit={submitEdit}
        />
      </div>
    );
  } else if (showBubble) {
    const bubbleClassName = peers.$(
      `bg-token-foreground/5 max-w-[77%] min-w-0 overflow-hidden break-words rounded-2xl px-3 py-2 [&_.contain-inline-size]:[contain:initial]`,
      !hasVisibleText && `leading-none`,
    );
    bubble = (
      <div
        data-user-message-bubble={true}
        tabIndex={0}
        className={peers.$(
          bubbleClassName,
          `text-left focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none`,
          canEdit && `cursor-interaction`,
        )}
        onDoubleClick={canEdit ? beginEdit : undefined}
      >
        {messageBody}
      </div>
    );
  } else {
    bubble = null;
  }

  const bubbleWithReaction =
    messageReaction == null ? (
      bubble
    ) : (
      <div className={`relative mb-2 flex w-full justify-end`}>
        {bubble}
        <div
          className={`absolute -end-0.5 -bottom-0.5 translate-x-1/4 translate-y-1/4 rtl:-translate-x-1/4`}
          aria-live={`polite`}
          aria-atomic={true}
        >
          {isEditing ? null : messageReaction}
        </div>
      </div>
    );

  const bubbleRow =
    compactActions && !hideActions && hasVisibleText && !isEditing && !isEditingThisTurn ? (
      <div className={`flex w-full items-center justify-end gap-1`}>
        <div className={`opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`}>
          {copyButton}
        </div>
        {bubbleWithReaction}
      </div>
    ) : (
      bubbleWithReaction
    );

  const chipRowClassName = peers.$(
    `flex flex-row-reverse items-center gap-1`,
    !showChipRow && `hidden`,
  );

  const statusChip =
    messageStatus == null ? null : (
      <div className={`ms-1 mr-1 flex items-center gap-2`}>
        {messageStatusIcon}
        <peers.dJc>{messageStatus}</peers.dJc>
      </div>
    );

  const priorConversationChip = referencesPriorConversation && (
    <peers.dJc>
      <peers.Z
        id={`codex.userMessage.priorConversation`}
        defaultMessage={`References prior conversation`}
        description={`Text for the prior conversation button`}
      />
    </peers.dJc>
  );

  const reviewModeChip = reviewMode && (
    <peers.dJc>
      <peers.Z
        id={`codex.userMessage.reviewMode`}
        defaultMessage={`Review mode`}
        description={`Chip shown when a user asked for a code review`}
      />
    </peers.dJc>
  );

  const pullRequestFixChip = pullRequestFixMode && (
    <peers.dJc>
      <peers.Z
        id={`codex.userMessage.pullRequestFixMode`}
        defaultMessage={`PR fix`}
        description={`Chip shown when the user started a pull request CI fix task`}
      />
    </peers.dJc>
  );

  const autoResolveSyncChip = autoResolveSync && (
    <peers.dJc>
      <peers.Z
        id={`codex.userMessage.autoResolveSync`}
        defaultMessage={`Auto resolve conflicts`}
        description={`Chip shown when the user requested auto resolve for handoff conflicts`}
      />
    </peers.dJc>
  );

  const commentCountChip = commentCount > 0 && (
    <peers.dJc>
      <peers.Z
        id={`codex.userMessage.commentCount`}
        defaultMessage={`{count, plural, one {# comment} other {# comments}}`}
        description={`Chip shown when the user included inline diff comments in the prompt`}
        values={{ count: commentCount }}
      />
    </peers.dJc>
  );

  const actionsChip =
    hasVisibleText && !isEditing && !compactActions && !hideActions && !isEditingThisTurn ? (
      <div
        className={peers.$(
          `mr-1 ms-1 flex items-center gap-2`,
          alwaysShowActions
            ? undefined
            : `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`,
        )}
      >
        {sentAtMs == null ? null : (
          <span className={`flex opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`}>
            <peers.iJc sentAtMs={sentAtMs} />
          </span>
        )}
        <div className={`flex items-center gap-0.5`}>
          {hookStats == null ? null : (
            <peers.Tqc stats={hookStats} threadDetailLevel={threadDetailLevel} />
          )}
          {copyButton}
          {canEdit ? (
            <peers.Xm
              tooltipContent={
                <peers.Z
                  id={`codex.userMessage.editTooltip`}
                  defaultMessage={`Edit`}
                  description={`Tooltip on edit message icon button`}
                />
              }
            >
              <peers.Np
                className={`focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:ring-offset-0`}
                color={`ghost`}
                size={`icon`}
                aria-label={intl.formatMessage({
                  id: `codex.userMessage.editAriaLabel`,
                  defaultMessage: `Edit message`,
                  description: `Aria label for the button that edits the previous user message`,
                })}
                onClick={beginEdit}
              >
                <peers.SB className={`icon-xs`} />
              </peers.Np>
            </peers.Xm>
          ) : null}
        </div>
      </div>
    ) : null;

  const chipRow = (
    <div className={chipRowClassName}>
      {statusChip}
      {priorConversationChip}
      {reviewModeChip}
      {pullRequestFixChip}
      {autoResolveSyncChip}
      {commentCountChip}
      {actionsChip}
    </div>
  );

  return (
    <div className={`group flex w-full flex-col items-end justify-end gap-1`}>
      {bubbleRow}
      {chipRow}
    </div>
  );
}
