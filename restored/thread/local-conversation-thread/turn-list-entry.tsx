// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Soft TurnListEntryRow (`groveR1`): dispatches gap / voice-nux / voice-transcript
// (`elmR1`) / voice-presentation (`waveR1`) / history-turn rows for
// VirtualizedTurnList. AppInitialAc → soft LiveAssistantTurn shell; AppInitialSC
// → soft RealtimeVoiceHomeAnnouncement (entryPoint="codex"). Never imports
// app-initial aggregator / deferredAc / throw-bound PopoverMenu / Ol peers.

import { type ReactElement, type ReactNode, type RefObject } from "react";

import { GeneratedImageTabs } from "../../conversation/generated-image-tabs";
import { isGapItem } from "../../conversation/is-gap-item";
import { RealtimeVoiceHomeAnnouncement } from "../../home/realtime-voice-home-announcement";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { LiveAssistantTurn } from "../../pages/remote-conversation-page/live-assistant-turn";
import { contentSearchUnitKey } from "../thread-find-match-ids";
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
  results?: ReadonlyArray<unknown>;
  file?: unknown;
  image?: {
    src?: string | null;
    status?: string;
    previewSrc?: string;
    [key: string]: unknown;
  };
  conversationImages?: unknown[];
  activityItems?: ReadonlyArray<{
    activityStatus?: string;
    [key: string]: unknown;
  }>;
  resources?: ReadonlyArray<{
    type?: string;
    path?: string;
    [key: string]: unknown;
  }>;
  sourceThreadId?: string | null;
  inputMessageId?: string;
  messageId?: string;
};

type SoftAssistantMessageItem = {
  type: "assistant-message";
  completed?: boolean;
  content?: string;
  phase: null;
  sentAtMs: null;
  structuredOutput: undefined;
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

/**
 * Soft stand-in for AppInitialOl assistant-message body. Real Ol peers throw /
 * stay unbound — soft mounts markdown text with the Ol prop contract as data.
 */
function SoftAssistantMessageBody(props: {
  assistantCopyText?: string;
  conversationId?: string | null;
  cwd?: string | null;
  hostId?: string | null;
  item: SoftAssistantMessageItem;
  markdownMediaCacheKey?: string;
  showActionRow?: boolean;
  showProcessBadges?: boolean;
  turnId?: string;
}): ReactElement {
  const text = props.assistantCopyText ?? props.item.content ?? "";
  return (
    <div
      className="prose prose-sm max-w-none text-token-text-primary"
      data-soft-assistant-message=""
      data-conversation-id={props.conversationId ?? undefined}
      data-cwd={props.cwd ?? undefined}
      data-host-id={props.hostId != null ? String(props.hostId) : undefined}
      data-turn-id={props.turnId}
      data-markdown-media-cache-key={props.markdownMediaCacheKey}
      data-completed={props.item.completed === true ? "true" : undefined}
      data-show-action-row={props.showActionRow === true ? "true" : undefined}
      data-show-process-badges={
        props.showProcessBadges === true ? "true" : undefined
      }
    >
      {text}
    </div>
  );
}

/**
 * Soft stand-in for user-message + role chrome inside voice transcript rows.
 * Real UserMessage / setDesktopPermissionStatus peers throw when unbound.
 */
function SoftUserTranscriptMessage(props: {
  cwd?: string | null;
  hostId?: string | null;
  message: string;
}): ReactElement {
  return (
    <div
      className="rounded-2xl bg-token-main-surface-secondary px-3 py-2 text-sm text-token-text-primary"
      data-soft-user-message=""
      data-cwd={props.cwd ?? undefined}
      data-host-id={props.hostId != null ? String(props.hostId) : undefined}
      data-hide-actions="true"
    >
      {props.message}
    </div>
  );
}

/**
 * Soft `AppInitialSC` — voice NUX row. Real body mounts SC with
 * entryPoint="codex"; soft uses promoted RealtimeVoiceHomeAnnouncement
 * (returns null until NUX peers / eligibility wire).
 */
function SoftVoiceNuxEntry(): ReactElement {
  return (
    <div
      data-virtualized-turn-content=""
      data-turn-list-entry="voice-nux"
      data-turn-list-entry-soft=""
      data-voice-nux-entrypoint="codex"
    >
      <RealtimeVoiceHomeAnnouncement entryPoint="codex" />
    </div>
  );
}

/**
 * Bundle `elmR1` — soft voice-transcript row body.
 */
function SoftVoiceTranscriptEntry(props: {
  entry: TurnListEntry;
}): ReactElement {
  const block = props.entry.block as VoiceTranscriptBlock | undefined;
  const turnSearchKey =
    typeof props.entry.turnKey === "string" ? props.entry.turnKey : undefined;
  const handoffId = block?.type === "handoff" ? block.id : undefined;
  const conversationId =
    typeof props.entry.conversationId === "string"
      ? props.entry.conversationId
      : null;
  const cwd = typeof props.entry.cwd === "string" ? props.entry.cwd : null;
  const hostId = props.entry.hostId ?? null;
  const entries = block?.entries ?? [];

  return (
    <section
      data-virtualized-turn-content=""
      data-turn-list-entry="voice-transcript"
      data-turn-list-entry-soft=""
      data-content-search-turn-key={turnSearchKey}
      data-realtime-handoff-id={handoffId}
      data-entry-count={entries.length > 0 ? String(entries.length) : undefined}
    >
      <div className="flex flex-col gap-6">
        {entries.map((transcriptEntry) => {
          const unitKey =
            turnSearchKey == null
              ? undefined
              : contentSearchUnitKey(turnSearchKey, transcriptEntry.id);
          return (
            <div
              key={transcriptEntry.id}
              data-content-search-unit-key={unitKey}
            >
              {transcriptEntry.role === "user" ? (
                <SoftUserTranscriptMessage
                  cwd={cwd}
                  hostId={hostId}
                  message={transcriptEntry.text ?? ""}
                />
              ) : (
                <SoftAssistantMessageBody
                  assistantCopyText={transcriptEntry.text}
                  conversationId={conversationId}
                  cwd={cwd}
                  hostId={hostId}
                  item={{
                    type: "assistant-message",
                    completed: transcriptEntry.completed,
                    content: transcriptEntry.text,
                    phase: null,
                    sentAtMs: null,
                    structuredOutput: undefined,
                  }}
                  showActionRow={false}
                  showProcessBadges={false}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/**
 * Soft `created-thread` branch of `waveR1` — ShowFewerCreatedTasksButton throws
 * without peers; soft lists result count / ids only.
 */
function SoftCreatedThreadPresentation(props: {
  results?: ReadonlyArray<unknown>;
}): ReactElement | null {
  const results = props.results ?? [];
  if (results.length === 0) return null;
  return (
    <div
      className="divide-y divide-token-border"
      data-soft-created-thread-results=""
      data-result-count={String(results.length)}
    >
      {results.map((result, index) => {
        const id =
          result != null &&
          typeof result === "object" &&
          "id" in result &&
          typeof (result as { id?: unknown }).id === "string"
            ? (result as { id: string }).id
            : String(index);
        return (
          <div
            key={id}
            className="px-2 py-1.5 text-sm text-token-text-secondary"
            data-created-thread-result={id}
          />
        );
      })}
    </div>
  );
}

/**
 * Soft `apexR1` — subagent presentation summary without DeferredUi activity peers.
 */
function SoftSubagentPresentation(props: {
  presentation: VoicePresentation;
  conversationId: string | null;
}): ReactElement {
  const activityItems = props.presentation.activityItems ?? [];
  return (
    <div
      className="flex flex-col gap-1"
      data-soft-subagent-presentation=""
      data-conversation-id={props.conversationId ?? undefined}
      data-turn-id={props.presentation.turnId}
      data-activity-count={String(activityItems.length)}
    >
      {activityItems.map((item, index) => (
        <div
          key={index}
          className="text-sm text-token-text-secondary"
          data-activity-status={item.activityStatus}
        />
      ))}
    </div>
  );
}

/**
 * Soft `duskR1` / PlanProgressDonut stand-in — PlanProgressDonut throws until
 * impl is wired; soft lists end-resource paths only.
 */
function SoftEndResourcesPresentation(props: {
  presentation: VoicePresentation;
  conversationId: string | null;
  cwd: string | null;
  hostId: string | null;
}): ReactElement {
  const resources = props.presentation.resources ?? [];
  const filePaths = resources.flatMap((resource) =>
    resource.type === "file" && typeof resource.path === "string"
      ? [resource.path]
      : [],
  );
  return (
    <div
      className="flex flex-col gap-1"
      data-soft-end-resources=""
      data-conversation-id={props.conversationId ?? undefined}
      data-cwd={props.cwd ?? undefined}
      data-host-id={props.hostId ?? undefined}
      data-turn-id={props.presentation.turnId}
      data-input-message-id={props.presentation.inputMessageId}
      data-message-id={props.presentation.messageId}
      data-resource-count={String(resources.length)}
      data-existing-file-count={String(filePaths.length)}
    >
      {filePaths.map((path) => (
        <div
          key={path}
          className="truncate text-sm text-token-text-secondary"
          data-end-resource-path={path}
          title={path}
        >
          {path}
        </div>
      ))}
    </div>
  );
}

/**
 * Bundle `waveR1` — soft voice-presentation row body by presentation.type.
 */
function SoftVoicePresentationBody(props: {
  presentation: VoicePresentation;
  conversationId: string | null;
  cwd: string | null;
  hostId: string | null;
  turnSearchKey?: string;
}): ReactElement | null {
  const { presentation, conversationId, cwd, hostId, turnSearchKey } = props;

  switch (presentation.type) {
    case "created-thread":
      return <SoftCreatedThreadPresentation results={presentation.results} />;
    case "inline-markdown": {
      const unitKey =
        turnSearchKey == null || presentation.presentationId == null
          ? undefined
          : contentSearchUnitKey(turnSearchKey, presentation.presentationId);
      const item: SoftAssistantMessageItem = {
        type: "assistant-message",
        completed: presentation.completed,
        content: presentation.content,
        phase: null,
        sentAtMs: null,
        structuredOutput: undefined,
      };
      return (
        <div
          data-content-search-turn-key={turnSearchKey}
          data-content-search-unit-key={unitKey}
        >
          <SoftAssistantMessageBody
            assistantCopyText={presentation.content}
            conversationId={conversationId}
            cwd={cwd}
            hostId={hostId}
            item={item}
            markdownMediaCacheKey={presentation.presentationId}
            showActionRow={false}
            showProcessBadges={false}
            turnId={presentation.turnId}
          />
        </div>
      );
    }
    case "inline-visualization":
      return (
        <div
          data-soft-inline-visualization=""
          data-presentation-id={presentation.presentationId}
          data-host-id={hostId ?? undefined}
          data-source-thread-id={presentation.sourceThreadId ?? undefined}
          data-thread-id={conversationId ?? undefined}
          data-turn-id={presentation.turnId}
          data-has-file={presentation.file != null ? "true" : undefined}
        />
      );
    case "generated-image": {
      const image = presentation.image;
      const isPending =
        image != null &&
        image.src == null &&
        (image.status === "in_progress" || image.status === "inProgress");
      const images = image?.src == null ? [] : [image];
      return (
        <div className="flex flex-col gap-3">
          <GeneratedImageTabs
            images={images}
            conversationImages={presentation.conversationImages}
            conversationId={conversationId ?? undefined}
            pendingImageCount={isPending ? 1 : 0}
          />
        </div>
      );
    }
    case "subagent":
      return (
        <SoftSubagentPresentation
          presentation={presentation}
          conversationId={conversationId}
        />
      );
    case "end-resources":
      return (
        <SoftEndResourcesPresentation
          presentation={presentation}
          conversationId={conversationId}
          cwd={cwd}
          hostId={hostId}
        />
      );
    default:
      return null;
  }
}

function SoftVoicePresentationEntry(props: {
  entry: TurnListEntry;
}): ReactElement {
  const presentation = props.entry.presentation as
    | VoicePresentation
    | undefined;
  const turnSearchKey =
    typeof props.entry.turnKey === "string" ? props.entry.turnKey : undefined;
  const conversationId =
    typeof props.entry.conversationId === "string"
      ? props.entry.conversationId
      : null;
  const cwd = typeof props.entry.cwd === "string" ? props.entry.cwd : null;
  const hostId = props.entry.hostId != null ? String(props.entry.hostId) : null;

  return (
    <div
      data-virtualized-turn-content=""
      data-turn-list-entry="voice-presentation"
      data-turn-list-entry-soft=""
      data-content-search-turn-key={turnSearchKey}
      data-presentation-type={presentation?.type}
      data-presentation-id={presentation?.presentationId}
      data-presentation-turn-id={presentation?.turnId}
    >
      {presentation == null ? null : (
        <SoftVoicePresentationBody
          presentation={presentation}
          conversationId={conversationId}
          cwd={cwd}
          hostId={hostId}
          turnSearchKey={turnSearchKey}
        />
      )}
    </div>
  );
}

/**
 * Soft `isleR1` / AppInitialAc — history-turn shell. Real body mounts
 * deferredAc inside a DeferredUi LocalConversationTurn boundary; soft keeps
 * LiveAssistantTurn props contract + footer without calling deferredAc.
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
  const cwd = typeof entry.cwd === "string" ? entry.cwd : null;
  const hostId = entry.hostId ?? null;
  const modelProvider =
    "modelProvider" in entry ? entry.modelProvider : undefined;
  const resolvedApps = "resolvedApps" in entry ? entry.resolvedApps : undefined;

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
      <LiveAssistantTurn
        conversationId={conversationId}
        hostId={hostId}
        turnSearchKey={turnSearchKey}
        turn={entry.turn}
        turnState={"turnState" in entry ? entry.turnState : undefined}
        cwd={cwd}
        resolvedApps={resolvedApps}
        modelProvider={modelProvider}
        reportEntityType="thread"
      >
        {latestTurnFooter ?? null}
      </LiveAssistantTurn>
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
