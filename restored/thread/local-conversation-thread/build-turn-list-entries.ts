// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Pure `lemonR2` turn-list entry builder (+ `hillR2` / `nickelR2` / `pearlR2`
// helpers). Soft: generated-image aggregation (`marbleR2`) stays empty until
// AppInitial / history peers deepen — never imports app-initial.

import { isGapItem } from "../../conversation/is-gap-item";
import type { TurnListEntry } from "./soft-turn-list-accessors";

/** True when entry is a history turn (not gap / voice-nux / voice-* rows). */
export function isHistoryTurnEntry(entry: TurnListEntry): boolean {
  if (isGapItem(entry)) return false;
  if (!("type" in entry)) return true;
  const entryType = entry.type;
  return (
    entryType !== "voice-nux" &&
    entryType !== "voice-presentation" &&
    entryType !== "voice-transcript"
  );
}

export type BuildTurnListEntriesArgs = {
  completedThreadGoal?: unknown;
  completedThreadGoalTurnKey?: string | null;
  conversationId: string;
  cwd?: string | null;
  generatedImageTurnEntries?: ReadonlyArray<{
    preserveServerUserMessages?: boolean;
    requests?: unknown;
    turn?: { items?: ReadonlyArray<{ type?: string; src?: string | null }> };
  }>;
  hasInheritedParentTurns?: boolean;
  hostId?: string | null;
  isBackgroundSubagentsEnabled?: boolean;
  isAeonThread?: boolean;
  isProjectlessConversation?: boolean;
  isReadOnly?: boolean;
  modelProvider?: unknown;
  projectlessOutputDirectory?: string | null;
  onEditLastTurnMessage?: ((...args: unknown[]) => unknown) | undefined;
  onForkTurnMessage?: ((...args: unknown[]) => unknown) | undefined;
  previousEntries: TurnListEntry[];
  renderMcpApps?: boolean;
  resolvedApps?: unknown;
  showFullTranscript?: boolean;
  showInProgressFixedContent?: boolean;
  supersededMcpAppWidgetCallIds?: ReadonlyArray<string>;
  threadHandoffOperation?: { id?: string } | null;
  visibleSubagentParentThreadId?: string | null;
  renderEntries: TurnListEntry[];
};

export type BuildTurnListEntriesResult = {
  entries: TurnListEntry[];
  latestRenderedTurnKey: string | null;
};

type HistoryTurnEntry = TurnListEntry & {
  turnKey: string;
  turnId?: string;
  historyEntityKey?: string | null;
  historyPositionKey?: string;
  turnSearchKey?: string;
  requests?: unknown;
  preserveServerUserMessages?: boolean;
  turn?: TurnListEntry["turn"];
  turnState?: unknown;
  transcriptBlock?: { type?: string; key?: string } | null;
  includeTranscriptTurnExtras?: boolean;
  activitySummaryWithoutAssistant?: unknown;
  hideUserMessageActions?: boolean;
  voiceWorkActivity?: unknown;
  generatedImages?: unknown;
  threadHandoffOperation?: { id?: string };
  aeonThreadTimestampMarkerKind?: null;
  aeonThreadTimestampMarkerSentAtMs?: null;
  isMostRecentTurn?: boolean;
  showInProgressFixedContent?: boolean;
  totalTurnCount?: number;
  turnNumber?: number;
  renderMcpApps?: "auto-expand" | "default" | boolean;
  completedThreadGoal?: unknown;
  parentThreadAttachmentSourceConversationId?: string;
  sourceTurnSearchKey?: string | null;
};

function shallowArrayEqual(
  left: ReadonlyArray<unknown> | null | undefined,
  right: ReadonlyArray<unknown> | null | undefined,
): boolean {
  if (left === right) return true;
  if (left == null || right == null) return left === right;
  if (left.length !== right.length) return false;
  for (let index = 0; index < left.length; index += 1) {
    if (left[index] !== right[index]) return false;
  }
  return true;
}

function transcriptBlocksEqual(
  left: HistoryTurnEntry["transcriptBlock"],
  right: HistoryTurnEntry["transcriptBlock"],
): boolean {
  if (left == null || right == null) return left === right;
  return left.type === right.type && left.key === right.key;
}

/**
 * Soft `nickelR2` — structural equality for history turn list entries so
 * lemonR2 can reuse previous object identity when nothing meaningful changed.
 */
function areHistoryTurnEntriesEqual(
  left: HistoryTurnEntry,
  right: HistoryTurnEntry,
): boolean {
  return (
    left.aeonThreadTimestampMarkerKind ===
      right.aeonThreadTimestampMarkerKind &&
    left.aeonThreadTimestampMarkerSentAtMs ===
      right.aeonThreadTimestampMarkerSentAtMs &&
    left.conversationId === right.conversationId &&
    left.activitySummaryWithoutAssistant ===
      right.activitySummaryWithoutAssistant &&
    left.hideUserMessageActions === right.hideUserMessageActions &&
    left.voiceWorkActivity === right.voiceWorkActivity &&
    left.cwd === right.cwd &&
    left.historyEntityKey === right.historyEntityKey &&
    left.hostId === right.hostId &&
    left.isAeonThread === right.isAeonThread &&
    left.isMostRecentTurn === right.isMostRecentTurn &&
    left.isReadOnly === right.isReadOnly &&
    left.totalTurnCount === right.totalTurnCount &&
    left.turnNumber === right.turnNumber &&
    left.isProjectlessConversation === right.isProjectlessConversation &&
    left.modelProvider === right.modelProvider &&
    left.onEditLastTurnMessage === right.onEditLastTurnMessage &&
    left.onForkTurnMessage === right.onForkTurnMessage &&
    left.completedThreadGoal === right.completedThreadGoal &&
    left.generatedImages === right.generatedImages &&
    left.parentThreadAttachmentSourceConversationId ===
      right.parentThreadAttachmentSourceConversationId &&
    left.preserveServerUserMessages === right.preserveServerUserMessages &&
    left.renderMcpApps === right.renderMcpApps &&
    left.requests === right.requests &&
    left.resolvedApps === right.resolvedApps &&
    left.showFullTranscript === right.showFullTranscript &&
    left.showInProgressFixedContent === right.showInProgressFixedContent &&
    left.threadHandoffOperation === right.threadHandoffOperation &&
    shallowArrayEqual(
      left.supersededMcpAppWidgetCallIds as ReadonlyArray<unknown> | undefined,
      right.supersededMcpAppWidgetCallIds as ReadonlyArray<unknown> | undefined,
    ) &&
    (left.turn === right.turn ||
      (right.historyEntityKey != null &&
        left.turnState == null &&
        right.turnState == null)) &&
    left.turnId === right.turnId &&
    left.turnKey === right.turnKey &&
    left.turnSearchKey === right.turnSearchKey &&
    transcriptBlocksEqual(left.transcriptBlock, right.transcriptBlock) &&
    left.includeTranscriptTurnExtras === right.includeTranscriptTurnExtras &&
    left.isBackgroundSubagentsEnabled === right.isBackgroundSubagentsEnabled
  );
}

/**
 * Soft `marbleR2` — generated-image aggregation. Real body needs AppInitial /
 * history peers; soft reuses previousImages identity or returns [].
 */
function softCollectGeneratedImages(args: {
  previousEntries: HistoryTurnEntry[];
}): unknown {
  return args.previousEntries[0]?.generatedImages ?? [];
}

/**
 * Bundle `lemonR2` — builds VirtualizedTurnList entries from raw render
 * entries, preserving previous entry identity when unchanged.
 */
export function buildTurnListEntries(
  args: BuildTurnListEntriesArgs,
): BuildTurnListEntriesResult {
  const {
    completedThreadGoal = null,
    completedThreadGoalTurnKey = null,
    conversationId,
    cwd = null,
    hasInheritedParentTurns = false,
    hostId = null,
    isBackgroundSubagentsEnabled = false,
    isAeonThread = false,
    isProjectlessConversation = false,
    isReadOnly = false,
    modelProvider,
    projectlessOutputDirectory = null,
    onEditLastTurnMessage,
    onForkTurnMessage,
    previousEntries,
    renderMcpApps = false,
    resolvedApps,
    showFullTranscript = false,
    showInProgressFixedContent = false,
    supersededMcpAppWidgetCallIds,
    threadHandoffOperation = null,
    visibleSubagentParentThreadId = null,
    renderEntries,
  } = args;

  const previousByTurnKey = new Map(
    previousEntries.map((entry) => [entry.turnKey, entry]),
  );
  const previousHistoryEntries = previousEntries.filter(
    isHistoryTurnEntry,
  ) as HistoryTurnEntry[];
  const handoffTurnKey =
    threadHandoffOperation == null
      ? null
      : (previousHistoryEntries.find(
          (entry) =>
            entry.threadHandoffOperation?.id === threadHandoffOperation.id,
        )?.turnKey ?? null);
  const nonGapRenderEntries = renderEntries.filter(
    (entry) => !isGapItem(entry),
  );
  const generatedImages = softCollectGeneratedImages({
    previousEntries: previousHistoryEntries,
  });

  const nextEntries: TurnListEntry[] = [];
  const turnNumberByIndex = new Map<number, number>();
  let latestRenderedTurnKey: string | null = null;
  let historyTurnCount = 0;
  let historyTurnIndex = 0;

  for (const renderEntry of renderEntries) {
    if (isGapItem(renderEntry)) {
      const previousGap = previousByTurnKey.get(renderEntry.turnKey);
      if (
        previousGap != null &&
        isGapItem(previousGap) &&
        previousGap.estimatedHeightPx === renderEntry.estimatedHeightPx
      ) {
        nextEntries.push(previousGap);
      } else {
        nextEntries.push(renderEntry);
      }
      continue;
    }

    const source = renderEntry as HistoryTurnEntry;
    const mcpAppsMode = renderMcpApps
      ? historyTurnIndex >= nonGapRenderEntries.length - 3
        ? "auto-expand"
        : "default"
      : undefined;

    const built: HistoryTurnEntry = {
      aeonThreadTimestampMarkerKind: null,
      aeonThreadTimestampMarkerSentAtMs: null,
      conversationId,
      cwd,
      historyEntityKey: source.historyEntityKey,
      hostId,
      isAeonThread,
      isMostRecentTurn: historyTurnIndex === nonGapRenderEntries.length - 1,
      isReadOnly,
      totalTurnCount: nonGapRenderEntries.length,
      turnNumber: historyTurnIndex + 1,
      isProjectlessConversation,
      modelProvider,
      projectlessOutputDirectory,
      onEditLastTurnMessage,
      onForkTurnMessage,
      completedThreadGoal:
        completedThreadGoalTurnKey === source.turnSearchKey
          ? completedThreadGoal
          : null,
      generatedImages,
      parentThreadAttachmentSourceConversationId:
        historyTurnIndex === 0 &&
        hasInheritedParentTurns &&
        visibleSubagentParentThreadId != null
          ? visibleSubagentParentThreadId
          : undefined,
      preserveServerUserMessages: source.preserveServerUserMessages,
      renderMcpApps: mcpAppsMode,
      requests: source.requests,
      resolvedApps,
      showFullTranscript,
      showInProgressFixedContent:
        showInProgressFixedContent &&
        historyTurnIndex === nonGapRenderEntries.length - 1,
      supersededMcpAppWidgetCallIds,
      turnId: source.turnId,
      turnKey:
        source.historyPositionKey ?? source.turnSearchKey ?? source.turnKey,
      turnSearchKey: source.turnSearchKey,
      turn: "turn" in source ? source.turn : undefined,
      isBackgroundSubagentsEnabled,
    };

    historyTurnCount += 1;
    latestRenderedTurnKey = built.turnKey;
    turnNumberByIndex.set(nextEntries.length, historyTurnCount);
    nextEntries.push(built);
    historyTurnIndex += 1;
  }

  const handoffAnchorKey =
    handoffTurnKey != null &&
    nextEntries.some(
      (entry) => isHistoryTurnEntry(entry) && entry.turnKey === handoffTurnKey,
    )
      ? handoffTurnKey
      : latestRenderedTurnKey;

  for (const [index, entry] of nextEntries.entries()) {
    if (isGapItem(entry) || !isHistoryTurnEntry(entry)) continue;
    const historyEntry = entry as HistoryTurnEntry;
    const previous = previousByTurnKey.get(historyEntry.turnKey);
    const turnNumber = turnNumberByIndex.get(index);
    if (turnNumber == null) continue;

    const isMostRecentTurn = turnNumber === historyTurnCount;
    const nextHistory: HistoryTurnEntry = {
      ...historyEntry,
      aeonThreadTimestampMarkerKind: null,
      aeonThreadTimestampMarkerSentAtMs: null,
      isMostRecentTurn,
      showInProgressFixedContent:
        showInProgressFixedContent && isMostRecentTurn,
      threadHandoffOperation:
        historyEntry.turnKey === handoffAnchorKey
          ? (threadHandoffOperation ?? undefined)
          : undefined,
      totalTurnCount: historyTurnCount,
      turnNumber,
    };

    nextEntries[index] =
      previous != null &&
      isHistoryTurnEntry(previous) &&
      areHistoryTurnEntriesEqual(previous as HistoryTurnEntry, nextHistory)
        ? previous
        : nextHistory;
  }

  const entriesUnchanged =
    previousEntries.length === nextEntries.length &&
    nextEntries.every((entry, index) => previousEntries[index] === entry);

  return {
    entries: entriesUnchanged ? previousEntries : nextEntries,
    latestRenderedTurnKey,
  };
}
