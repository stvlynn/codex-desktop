// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Soft TurnListEntryRow (`groveR1`): dispatches gap / voice-nux / voice-transcript /
// voice-presentation / history-turn rows for VirtualizedTurnList. AppInitialAc /
// AppInitialSC / DeferredUi error-boundary peers stay soft shells (never app-initial).

import { type ReactElement, type ReactNode, type RefObject } from "react";

import { isGapItem } from "../../conversation/is-gap-item";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { Button } from "../../ui/button";
import type { TurnListEntry } from "./soft-turn-list-accessors";

export type TurnListEntryRowProps = {
  entry: TurnListEntry;
  latestTurnFooter?: ReactNode;
  latestTurnFollowContentRef?: RefObject<HTMLElement | null>;
};

type VoiceTranscriptBlock = {
  type?: string;
  id?: string;
  entries?: ReadonlyArray<{
    id: string;
    role?: string;
    text?: string;
    completed?: boolean;
  }>;
};

type VoicePresentation = {
  type?: string;
  presentationId?: string;
  turnId?: string;
  completed?: boolean;
  content?: string;
  results?: unknown;
  file?: unknown;
  image?: unknown;
  conversationImages?: unknown;
  activityItems?: unknown;
  resources?: unknown;
  sourceThreadId?: string | null;
  inputMessageId?: string;
  messageId?: string;
};

/**
 * Soft `bravoR2` — retry shell shown when a turn render boundary would reset.
 * Soft until DeferredUi error-boundary peers deepen.
 */
export function TurnRenderErrorFallback(props: {
  onRetry?: () => void;
}): ReactElement {
  return (
    <div className="rounded-lg border border-token-border bg-token-main-surface-primary px-4 py-3 text-sm text-token-text-secondary">
      <div className="mb-2 font-medium text-token-text-primary">
        <MemoizedFormattedMessage
          id="localConversation.turnRenderError.title"
          defaultMessage="This turn couldn't render"
          description="Error message shown when an individual conversation turn fails to render"
        />
      </div>
      <Button color="secondary" size="default" onClick={props.onRetry}>
        <MemoizedFormattedMessage
          id="localConversation.turnRenderError.retry"
          defaultMessage="Try again"
          description="Button label to retry rendering a failed conversation turn"
        />
      </Button>
    </div>
  );
}

function SoftVoiceNuxEntry(): ReactElement {
  return (
    <div
      data-virtualized-turn-content=""
      data-turn-list-entry="voice-nux"
      data-turn-list-entry-soft=""
    />
  );
}

function SoftVoiceTranscriptEntry(props: {
  entry: TurnListEntry;
}): ReactElement {
  const block = props.entry.block as VoiceTranscriptBlock | undefined;
  const turnSearchKey =
    typeof props.entry.turnKey === "string" ? props.entry.turnKey : undefined;
  const handoffId = block?.type === "handoff" ? block.id : undefined;
  const entryCount = block?.entries?.length ?? 0;

  return (
    <section
      data-virtualized-turn-content=""
      data-turn-list-entry="voice-transcript"
      data-turn-list-entry-soft=""
      data-content-search-turn-key={turnSearchKey}
      data-realtime-handoff-id={handoffId}
      data-entry-count={entryCount > 0 ? String(entryCount) : undefined}
    />
  );
}

function SoftVoicePresentationEntry(props: {
  entry: TurnListEntry;
}): ReactElement {
  const presentation = props.entry.presentation as
    | VoicePresentation
    | undefined;
  const turnSearchKey =
    typeof props.entry.turnKey === "string" ? props.entry.turnKey : undefined;

  return (
    <div
      data-virtualized-turn-content=""
      data-turn-list-entry="voice-presentation"
      data-turn-list-entry-soft=""
      data-content-search-turn-key={turnSearchKey}
      data-presentation-type={presentation?.type}
      data-presentation-id={presentation?.presentationId}
      data-presentation-turn-id={presentation?.turnId}
    />
  );
}

/**
 * Soft `isleR1` — history-turn shell. Real body mounts AppInitialAc inside a
 * DeferredUi LocalConversationTurn boundary; soft keeps footer + turn metadata.
 */
function SoftHistoryTurnEntry(props: {
  entry: TurnListEntry;
  latestTurnFooter?: ReactNode;
  latestTurnFollowContentRef?: RefObject<HTMLElement | null>;
}): ReactElement {
  const { entry, latestTurnFooter, latestTurnFollowContentRef } = props;
  const turnSearchKey =
    typeof entry.turnSearchKey === "string"
      ? entry.turnSearchKey
      : entry.turnKey;
  const conversationId =
    typeof entry.conversationId === "string" ? entry.conversationId : null;
  const isMostRecentTurn = entry.isMostRecentTurn === true;
  const turnStatus =
    entry.turn != null && typeof entry.turn.status === "string"
      ? entry.turn.status
      : undefined;

  void latestTurnFollowContentRef;

  return (
    <div
      data-virtualized-turn-content=""
      data-turn-list-entry="history"
      data-turn-list-entry-soft=""
      data-turn-key={entry.turnKey}
      data-turn-search-key={turnSearchKey}
      data-conversation-id={conversationId ?? undefined}
      data-most-recent-turn={isMostRecentTurn ? "true" : undefined}
      data-turn-status={turnStatus}
    >
      {latestTurnFooter ?? null}
    </div>
  );
}

/**
 * Bundle `groveR1` — soft row renderer for VirtualizedTurnList entries.
 */
export function TurnListEntryRow(props: TurnListEntryRowProps): ReactElement {
  const { entry, latestTurnFooter, latestTurnFollowContentRef } = props;

  if (isGapItem(entry)) {
    return (
      <div
        aria-hidden={true}
        data-virtualized-turn-content=""
        data-turn-list-entry="gap"
        style={{ height: entry.estimatedHeightPx ?? 0 }}
      />
    );
  }

  if ("type" in entry && entry.type === "voice-nux") {
    return <SoftVoiceNuxEntry />;
  }

  if ("type" in entry && entry.type === "voice-transcript") {
    return <SoftVoiceTranscriptEntry entry={entry} />;
  }

  if ("type" in entry && entry.type === "voice-presentation") {
    return <SoftVoicePresentationEntry entry={entry} />;
  }

  return (
    <SoftHistoryTurnEntry
      entry={entry}
      latestTurnFooter={latestTurnFooter}
      latestTurnFollowContentRef={latestTurnFollowContentRef}
    />
  );
}
