// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Response-spacer geometry helpers for VirtualizedTurnList (`copperR2`).

import type { MotionValue } from "framer-motion";

import { divideByWindowZoom } from "../../hooks/use-window-zoom";
import { readScrollTop } from "../../navigation/app-action-dom";
import type { ThreadScrollController } from "../thread-scroll-controller-context";
import {
  NEAR_BOTTOM_EPSILON_PX,
  reduceLatestTurnScrollState,
  type LatestTurnPhase,
  type LatestTurnScrollState,
} from "./virtualized-turn-list-scroll-state";

const RESPONSE_SPACER_VIEWPORT_RATIO = 2 / 3;
const RESPONSE_SPACER_MIN_RESERVED_PX = 240;

export const PLACE_LATEST_TURN_SCROLL_DISTANCE_PX = 1;

export const INTERSECTION_THRESHOLDS = Array.from(
  { length: 101 },
  (_unused, index) => index / 100,
);

export const RESPONSE_SPACER_SPRING = {
  type: "spring" as const,
  bounce: 0,
  duration: 0.5,
};

export function readScrollPaddingBottomPx(scrollElement: HTMLElement): number {
  const parsed = Number.parseFloat(
    scrollElement.style.getPropertyValue("--thread-scroll-padding-bottom"),
  );
  return Number.isFinite(parsed) ? parsed : 0;
}

export function computeIdealResponseSpacerHeightPx(options: {
  scrollElementHeightPx: number;
  scrollPaddingBottomPx: number;
}): number {
  const usableHeight = Math.max(
    0,
    options.scrollElementHeightPx - options.scrollPaddingBottomPx,
  );
  return Math.max(
    0,
    Math.min(
      usableHeight * RESPONSE_SPACER_VIEWPORT_RATIO,
      usableHeight - RESPONSE_SPACER_MIN_RESERVED_PX,
    ),
  );
}

export function computeResponseSpacerOverflowPx(options: {
  distanceFromBottomPx: number;
  responseSpacerHeightPx: number;
  scrollPaddingBottomPx: number;
}): number {
  return Math.max(
    0,
    options.responseSpacerHeightPx -
      options.distanceFromBottomPx -
      options.scrollPaddingBottomPx,
  );
}

export function normalizePersistedScrollSnapshot(options: {
  distanceFromBottomPx: number;
  latestTurnPhase: LatestTurnPhase;
  responseSpacerHeightPx: number;
  scrollPaddingBottomPx: number;
  scrollState: LatestTurnScrollState;
}): {
  distanceFromBottomPx: number;
  scrollState: LatestTurnScrollState;
} {
  if (
    computeResponseSpacerOverflowPx({
      distanceFromBottomPx: options.distanceFromBottomPx,
      responseSpacerHeightPx: options.responseSpacerHeightPx,
      scrollPaddingBottomPx: options.scrollPaddingBottomPx,
    }) > NEAR_BOTTOM_EPSILON_PX
  ) {
    return {
      distanceFromBottomPx: 0,
      scrollState: reduceLatestTurnScrollState(options.scrollState, {
        type: "scroll_to_bottom",
        latestTurnPhase: options.latestTurnPhase,
      }),
    };
  }
  return {
    distanceFromBottomPx: Math.max(
      0,
      options.distanceFromBottomPx - options.responseSpacerHeightPx,
    ),
    scrollState: options.scrollState,
  };
}

export function applyDistanceDeltaWithOptionalSpacerGrowth(options: {
  allowResponseSpacerGrowth: boolean;
  behavior?: ScrollBehavior;
  distanceDeltaPx: number;
  responseSpacerHeightPx: MotionValue<number>;
  scrollController: ThreadScrollController;
  scrollElement: HTMLElement;
}): void {
  let nextDistance =
    readScrollTop(options.scrollElement) + options.distanceDeltaPx;
  if (
    options.allowResponseSpacerGrowth &&
    options.responseSpacerHeightPx.get() > NEAR_BOTTOM_EPSILON_PX &&
    nextDistance < 0
  ) {
    options.responseSpacerHeightPx.set(
      options.responseSpacerHeightPx.get() - nextDistance,
    );
  }
  options.scrollController.scrollToDistanceFromBottomPx(
    Math.max(0, nextDistance),
    options.behavior ?? "instant",
  );
}

export function measureLatestTurnBottomOverflowPx(options: {
  scrollElement: HTMLElement | null;
  turnElement: HTMLElement | null;
  fallbackBottomViewportOverflowPx: number;
  windowZoom: number;
}): number {
  if (options.scrollElement == null || options.turnElement == null) {
    return options.fallbackBottomViewportOverflowPx;
  }
  return divideByWindowZoom(
    options.turnElement.getBoundingClientRect().bottom -
      options.scrollElement.getBoundingClientRect().bottom,
    options.windowZoom,
  );
}

export function findLastMatchingEntry<T>(
  entries: ReadonlyArray<T>,
  predicate: (entry: T) => boolean,
): T | undefined {
  for (let index = entries.length - 1; index >= 0; index -= 1) {
    const entry = entries[index];
    if (entry != null && predicate(entry)) return entry;
  }
  return undefined;
}
