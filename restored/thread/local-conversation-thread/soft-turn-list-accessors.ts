// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Soft turn-list accessors for VirtualizedTurnList (`copperR2`). Scroll persist
// is an in-memory Map (checkpoint frostR27 atom family). Entity-phase uses
// `deriveLatestTurnPhaseInfoFromTurn` (`kiteR2` / `unityR1`) over an in-memory
// entity-turn Map when DeferredUiU232 / coralR30 peers are unbound. throws: 0.

import { createElement, type ReactNode, type RefObject } from "react";

import { TurnListEntryRow } from "./turn-list-entry";
import { deriveLatestTurnPhaseInfoFromTurn } from "./virtualized-turn-list-scroll-state";

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

type SoftReader<TArgs extends unknown[], TResult> = (...args: TArgs) => TResult;

type EntityTurn = NonNullable<TurnListEntry["turn"]>;

/** Soft stand-in for checkpoint frostR27 conversation scroll atom family. */
const scrollStateByConversationId = new Map<
  string,
  VirtualizedTurnListPersistedScrollState
>();

/** Soft stand-in for DeferredUiU232 entity turn family (coralR30 input). */
const entityTurnByKey = new Map<string, EntityTurn>();

/** Soft stand-in for lemonR2 / store-backed turn-list entries. */
const turnListEntriesByConversationId = new Map<string, TurnListEntry[]>();

let readTurnListEntriesImpl: SoftReader<
  [{ conversationId: string; isBackgroundSubagentsEnabled: boolean }],
  TurnListEntry[]
> | null = null;
let readLatestTurnPhaseForEntityImpl: SoftReader<
  [{ conversationId: string; entityKey: string | null }],
  LatestTurnPhaseInfo | null
> | null = null;
let readEntityTurnImpl: SoftReader<
  [{ conversationId: string; entityKey: string }],
  EntityTurn | null
> | null = null;

function entityStorageKey(conversationId: string, entityKey: string): string {
  return `${conversationId}::${entityKey}`;
}

/** Bind store-backed turn-list entries reader (lemonR2 / DeferredUi peers). */
export function bindSoftReadTurnListEntries(
  next: SoftReader<
    [{ conversationId: string; isBackgroundSubagentsEnabled: boolean }],
    TurnListEntry[]
  >,
): void {
  readTurnListEntriesImpl = next;
}

/** Bind coralR30 / DeferredUiU232 entity-phase reader. */
export function bindSoftReadLatestTurnPhaseForEntity(
  next: SoftReader<
    [{ conversationId: string; entityKey: string | null }],
    LatestTurnPhaseInfo | null
  >,
): void {
  readLatestTurnPhaseForEntityImpl = next;
}

/** Bind DeferredUiU232 entity-turn reader used by coralR30 / isleR1. */
export function bindSoftReadEntityTurn(
  next: SoftReader<
    [{ conversationId: string; entityKey: string }],
    EntityTurn | null
  >,
): void {
  readEntityTurnImpl = next;
}

/**
 * Soft write of an entity turn (DeferredUiU232 stand-in). Enables local
 * coralR30 / kiteR2 phase derivation without the DeferredUi aggregator.
 */
export function softWriteEntityTurn(args: {
  conversationId: string;
  entityKey: string;
  turn: EntityTurn | null;
}): void {
  const key = entityStorageKey(args.conversationId, args.entityKey);
  if (args.turn == null) {
    entityTurnByKey.delete(key);
    return;
  }
  entityTurnByKey.set(key, args.turn);
}

/** Soft read of an entity turn (DeferredUiU232 stand-in). */
export function softReadEntityTurn(args: {
  conversationId: string;
  entityKey: string | null;
}): EntityTurn | null {
  if (args.entityKey == null) return null;
  if (readEntityTurnImpl != null) {
    return readEntityTurnImpl({
      conversationId: args.conversationId,
      entityKey: args.entityKey,
    });
  }
  return (
    entityTurnByKey.get(
      entityStorageKey(args.conversationId, args.entityKey),
    ) ?? null
  );
}

/**
 * Soft write of turn-list entries for a conversation (lemonR2 stand-in).
 */
export function softWriteTurnListEntries(args: {
  conversationId: string;
  entries: TurnListEntry[];
}): void {
  turnListEntriesByConversationId.set(args.conversationId, args.entries);
}

/**
 * Soft: turn-list entries for a conversation. Bound reader wins; else the
 * in-memory lemonR2 stand-in Map (empty until written).
 */
export function softReadTurnListEntries(args: {
  conversationId: string;
  isBackgroundSubagentsEnabled: boolean;
}): TurnListEntry[] {
  if (readTurnListEntriesImpl != null) {
    return readTurnListEntriesImpl(args);
  }
  return turnListEntriesByConversationId.get(args.conversationId) ?? [];
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
 * DeferredUiU232 + kiteR2). Bound reader wins; else derive from soft entity
 * turn Map via `deriveLatestTurnPhaseInfoFromTurn`. Null → VirtualizedTurnList
 * falls back to turn-derived phase on the entry itself.
 */
export function softReadLatestTurnPhaseForEntity(args: {
  conversationId: string;
  entityKey: string | null;
}): LatestTurnPhaseInfo | null {
  if (readLatestTurnPhaseForEntityImpl != null) {
    return readLatestTurnPhaseForEntityImpl(args);
  }
  const turn = softReadEntityTurn(args);
  if (turn == null) return null;
  return deriveLatestTurnPhaseInfoFromTurn(turn);
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
