// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Soft turn-list accessors for VirtualizedTurnList (`copperR2`). Scroll persist
// is an in-memory Map (checkpoint frostR27 atom family). Entity-phase /
// turn-entries stay soft until DeferredUi store peers deepen. throws: 0.

import { createElement, type ReactNode, type RefObject } from "react";

import { TurnListEntryRow } from "./turn-list-entry";

/** Soft turn-list entry shape consumed by VirtualizedTurnList (`copperR2`). */
export type TurnListEntry = {
  turnKey: string;
  estimatedHeightPx?: number;
  historyEntityKey?: string | null;
  turn?: {
    status?: string;
    items?: ReadonlyArray<{
      type?: string;
      phase?: string;
      restoreMessage?: { id?: string };
    }>;
    firstTurnWorkItemStartedAtMs?: number | null;
    finalAssistantStartedAtMs?: number | null;
  } | null;
  type?: string;
  isInProgress?: boolean;
  conversationId?: string;
  cwd?: string | null;
  hostId?: string | null;
  turnSearchKey?: string;
  isMostRecentTurn?: boolean;
  block?: unknown;
  presentation?: unknown;
  [key: string]: unknown;
};

export type LatestTurnPhaseInfo = {
  isInProgress: boolean;
  latestSteeringUserMessageKey: string | null;
  phase: "idle" | "prework" | "final_answer";
};

export type VirtualizedTurnListPersistedScrollState = {
  distanceFromBottomPx: number;
  latestTurn: {
    turnKey: string;
    isLatestTurnInProgress: boolean;
    latestTurnPhase: "idle" | "prework" | "final_answer";
    followMode: "static" | "user_follow" | "prework_follow" | "prework_watch";
    latestTurnHeightPx: number | null;
    latestTurnFollowContentHeightPx: number | null;
  } | null;
  virtualizedTurnList: unknown;
};

/** Soft stand-in for checkpoint frostR27 conversation scroll atom family. */
const scrollStateByConversationId = new Map<
  string,
  VirtualizedTurnListPersistedScrollState
>();

/**
 * Soft: turn-list entries for a conversation (checkpoint builds from store /
 * history peers). Empty until those peers deepen.
 */
export function softReadTurnListEntries(_args: {
  conversationId: string;
  isBackgroundSubagentsEnabled: boolean;
}): TurnListEntry[] {
  return [];
}

/** Soft read of persisted VirtualizedTurnList scroll state (frostR27). */
export function softReadVirtualizedTurnListScrollState(
  conversationId: string,
): VirtualizedTurnListPersistedScrollState | null {
  return scrollStateByConversationId.get(conversationId) ?? null;
}

/** Soft write of persisted VirtualizedTurnList scroll state (frostR27). */
export function softWriteVirtualizedTurnListScrollState(
  conversationId: string,
  state: VirtualizedTurnListPersistedScrollState,
): void {
  scrollStateByConversationId.set(conversationId, state);
}

/**
 * Soft: latest turn phase for a history entity (checkpoint coralR30 /
 * DeferredUiU232). Null → VirtualizedTurnList falls back to turn-derived phase.
 */
export function softReadLatestTurnPhaseForEntity(_args: {
  conversationId: string;
  entityKey: string | null;
}): LatestTurnPhaseInfo | null {
  return null;
}

/**
 * Soft `groveR1` dispatcher — delegates to kebab `TurnListEntryRow`.
 */
export function softRenderTurnListEntry(args: {
  entry: TurnListEntry;
  latestTurnFooter?: ReactNode;
  latestTurnFollowContentRef?: RefObject<HTMLElement | null> | unknown;
}): ReactNode {
  return createElement(TurnListEntryRow, {
    entry: args.entry,
    latestTurnFooter: args.latestTurnFooter,
    latestTurnFollowContentRef: args.latestTurnFollowContentRef as
      | RefObject<HTMLElement | null>
      | undefined,
  });
}
