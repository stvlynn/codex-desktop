// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Public prop types for VirtualizedTurnList (`copperR2`).

import type { ReactNode } from "react";

import type { TurnListEntry } from "./soft-turn-list-accessors";

export type LatestTurnSubmitPlacement = {
  shouldPlaceLatestTurn?: boolean;
  distanceFromBottomPx: number;
  scrollHeightPx?: number | null;
};

export type ResponseSpacerState = {
  getHeightPx: () => number;
  scrollToBottom: () => void;
};

export type VirtualizedTurnListProps = {
  conversationId: string;
  entries: ReadonlyArray<TurnListEntry>;
  initialScrollOffset?: number | null;
  initialVirtualizedTurnListRestoreState?: unknown;
  consumePendingLatestTurnSubmitPlacement?: () => LatestTurnSubmitPlacement | null;
  onResponseSpacerStateChange?: (state: ResponseSpacerState | null) => void;
  onApiChange?: (api: unknown) => void;
  onVisibleContentReady?: () => void;
  onVirtualizedTurnListRestoreStateChange?: (state: unknown) => void;
  onViewportChange?: (viewport: {
    viewportStartPx: number;
    viewportEndPx: number;
  }) => void;
  synchronouslyMeasureLatestTurnUpdates?: boolean;
  latestTurnFooter?: ReactNode;
  latestTurnFooterKey?: string | null;
};
