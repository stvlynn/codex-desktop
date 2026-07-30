// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// VirtualizedTurnList (`copperR2`): follow-mode scroll state, response spacer
// motion, and conversationSourceC row virtualizer for the local thread.

import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from "react";
import type { MotionValue } from "framer-motion";

import { conversationSourceC } from "../../boundaries/conversation-source";
import { isGapItem } from "../../conversation/is-gap-item";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useWindowZoom } from "../../hooks/use-window-zoom";
import { readScrollTop } from "../../navigation/app-action-dom";
import { animate, motion, useMotionValue } from "../../vendor/framer-motion";
import { useThreadScrollController } from "../thread-scroll-controller-context";
import {
  softReadLatestTurnPhaseForEntity,
  softReadVirtualizedTurnListScrollState,
  softWriteVirtualizedTurnListScrollState,
  isHistoryTurnEntry,
  type LatestTurnPhaseInfo,
  type TurnListEntry,
  type VirtualizedTurnListPersistedScrollState,
} from "./runtime-bridges";
import { TurnListEntryRow } from "./turn-list-entry";
import {
  applyDistanceDeltaWithOptionalSpacerGrowth,
  computeIdealResponseSpacerHeightPx,
  computeResponseSpacerOverflowPx,
  findLastMatchingEntry,
  INTERSECTION_THRESHOLDS,
  measureLatestTurnBottomOverflowPx,
  normalizePersistedScrollSnapshot,
  PLACE_LATEST_TURN_SCROLL_DISTANCE_PX,
  readScrollPaddingBottomPx,
  RESPONSE_SPACER_SPRING,
} from "./virtualized-turn-list-geometry";
import {
  createLatestTurnScrollState,
  deriveLatestTurnPhaseInfoFromTurn,
  isViewportPreservingFollowMode,
  NEAR_BOTTOM_EPSILON_PX,
  reduceLatestTurnScrollState,
  type LatestTurnScrollEvent,
} from "./virtualized-turn-list-scroll-state";
import type { VirtualizedTurnListProps } from "./virtualized-turn-list-types";

type LatestTurnOffsetContextValue = {
  turnKey: string | null;
  yPx: MotionValue<number>;
};

type LatestTurnHeightChange = {
  heightDeltaPx?: number | null;
  heightPx?: number | null;
  bottomViewportOverflowPx: number;
  turnElement?: HTMLElement | null;
  followContentHeightPx?: number | null;
};

const LatestTurnOffsetContext =
  createContext<LatestTurnOffsetContextValue | null>(null);

function VirtualizedTurnListRow(props: {
  entry: TurnListEntry;
  latestTurnFooter?: ReactNode;
  latestTurnFollowContentRef?: RefObject<HTMLElement | null>;
}): ReactElement {
  const { entry, latestTurnFooter, latestTurnFollowContentRef } = props;
  const offsetContext = useContext(LatestTurnOffsetContext);
  const translateY =
    offsetContext?.turnKey === entry.turnKey ? offsetContext.yPx : 0;
  return (
    <motion.div style={{ y: translateY }}>
      <TurnListEntryRow
        entry={entry}
        latestTurnFooter={latestTurnFooter}
        latestTurnFollowContentRef={latestTurnFollowContentRef}
      />
    </motion.div>
  );
}

/**
 * Bundle `copperR2` — virtualized turn list with latest-turn follow modes and
 * animated response spacer for scroll-to-top local threads.
 */
export function VirtualizedTurnList(
  props: VirtualizedTurnListProps,
): ReactElement {
  const {
    conversationId,
    entries,
    initialScrollOffset,
    initialVirtualizedTurnListRestoreState,
    consumePendingLatestTurnSubmitPlacement,
    onResponseSpacerStateChange,
    onApiChange,
    onVisibleContentReady,
    onVirtualizedTurnListRestoreStateChange,
    onViewportChange,
    synchronouslyMeasureLatestTurnUpdates = false,
    latestTurnFooter,
    latestTurnFooterKey,
  } = props;

  const windowZoom = useWindowZoom();
  const latestNonGapEntry = findLastMatchingEntry(
    entries,
    (entry) => !isGapItem(entry),
  );
  const latestHistoryEntry = findLastMatchingEntry(entries, isHistoryTurnEntry);
  const latestNonGapTurnKey = latestNonGapEntry?.turnKey ?? null;
  const softEntityPhase = softReadLatestTurnPhaseForEntity({
    conversationId,
    entityKey: latestHistoryEntry?.historyEntityKey ?? null,
  });
  const derivedPhase =
    softEntityPhase ??
    (latestHistoryEntry?.turn == null
      ? null
      : deriveLatestTurnPhaseInfoFromTurn(latestHistoryEntry.turn));
  const latestTurnPhaseInfo: LatestTurnPhaseInfo | null =
    latestNonGapEntry != null &&
    "type" in latestNonGapEntry &&
    (latestNonGapEntry.type === "voice-presentation" ||
      latestNonGapEntry.type === "voice-transcript")
      ? {
          isInProgress: Boolean(latestNonGapEntry.isInProgress),
          latestSteeringUserMessageKey: null,
          phase: latestNonGapEntry.isInProgress ? "prework" : "idle",
        }
      : derivedPhase;

  const latestTurnPlacementKey =
    latestNonGapEntry == null
      ? null
      : latestTurnPhaseInfo?.latestSteeringUserMessageKey == null
        ? latestNonGapEntry.turnKey
        : `${latestNonGapEntry.turnKey}:${latestTurnPhaseInfo.latestSteeringUserMessageKey}`;
  const latestTurnPhase = latestTurnPhaseInfo?.phase ?? "idle";
  const isLatestTurnInProgress = latestTurnPhaseInfo?.isInProgress ?? false;

  const persistedScrollState =
    softReadVirtualizedTurnListScrollState(conversationId);
  const restoredLatestTurn =
    persistedScrollState?.latestTurn?.turnKey === latestNonGapTurnKey
      ? persistedScrollState.latestTurn
      : null;

  const responseSpacerHeightPx = useMotionValue(0);
  const latestTurnOffsetYPx = useMotionValue(0);
  const scrollController = useThreadScrollController();

  const scrollStateRef = useRef(
    createLatestTurnScrollState({
      followMode:
        isLatestTurnInProgress &&
        (initialScrollOffset ?? 0) <= NEAR_BOTTOM_EPSILON_PX
          ? latestTurnPhase === "prework"
            ? "prework_follow"
            : "user_follow"
          : (restoredLatestTurn?.followMode ?? "static"),
    }),
  );
  const restoredLatestTurnHeightRef = useRef(
    restoredLatestTurn != null &&
      isViewportPreservingFollowMode(restoredLatestTurn.followMode)
      ? restoredLatestTurn.latestTurnHeightPx
      : null,
  );
  const latestTurnHeightRef = useRef(
    restoredLatestTurn?.latestTurnHeightPx ?? null,
  );
  const latestTurnFollowContentHeightRef = useRef(
    restoredLatestTurn?.latestTurnFollowContentHeightPx ?? null,
  );
  const didApplyInitialScrollRef = useRef(false);
  const pendingInitialScrollOffsetRef = useRef(initialScrollOffset);
  const restoreStateRef = useRef(initialVirtualizedTurnListRestoreState);
  const responseSpacerElementRef = useRef<HTMLDivElement | null>(null);
  const responseSpacerPinnedNearBottomRef = useRef(false);
  const latestNonGapTurnKeyRef = useRef(latestNonGapTurnKey);
  const needsInitialPlacementWithoutRestore =
    isLatestTurnInProgress &&
    initialScrollOffset == null &&
    restoredLatestTurn == null;
  const needsInitialPlacementRef = useRef(needsInitialPlacementWithoutRestore);
  const placementKeyRef = useRef(
    consumePendingLatestTurnSubmitPlacement == null ||
      !needsInitialPlacementWithoutRestore
      ? latestTurnPlacementKey
      : null,
  );
  const previousLatestTurnPhaseRef = useRef(
    restoredLatestTurn?.latestTurnPhase ?? latestTurnPhase,
  );
  const latestTurnPhaseRef = useRef(latestTurnPhase);
  const previousInProgressRef = useRef(
    restoredLatestTurn?.isLatestTurnInProgress ?? isLatestTurnInProgress,
  );
  const isLatestTurnInProgressRef = useRef(isLatestTurnInProgress);

  const latestTurnOffsetContextValue = useMemo(
    () => ({
      turnKey: latestNonGapEntry?.turnKey ?? null,
      yPx: latestTurnOffsetYPx,
    }),
    [latestNonGapEntry?.turnKey, latestTurnOffsetYPx],
  );
  const getResponseSpacerHeightPx = useMemo(
    () => () => responseSpacerHeightPx.get(),
    [responseSpacerHeightPx],
  );

  latestTurnPhaseRef.current = latestTurnPhase;
  isLatestTurnInProgressRef.current = isLatestTurnInProgress;
  latestNonGapTurnKeyRef.current = latestNonGapTurnKey;

  const dispatchScrollState = useEventCallback(
    (event: LatestTurnScrollEvent, forceFooterUpdate = false) => {
      const previousFollowMode = scrollStateRef.current.followMode;
      scrollStateRef.current = reduceLatestTurnScrollState(
        scrollStateRef.current,
        event,
      );
      const { followMode } = scrollStateRef.current;
      if (forceFooterUpdate || followMode !== previousFollowMode) {
        scrollController.setFooterResizeViewportPreserveDisabled(
          isLatestTurnInProgressRef.current &&
            isViewportPreservingFollowMode(followMode),
        );
      }
      return scrollStateRef.current;
    },
  );

  const syncFooterResizePreserve = useEventCallback(() => {
    const { followMode } = scrollStateRef.current;
    scrollController.setFooterResizeViewportPreserveDisabled(
      isLatestTurnInProgressRef.current &&
        isViewportPreservingFollowMode(followMode),
    );
  });

  const getPendingRestoreScrollDistanceFromBottomPx = useEventCallback(() => {
    const pendingOffset = pendingInitialScrollOffsetRef.current;
    if (
      didApplyInitialScrollRef.current ||
      pendingOffset == null ||
      scrollStateRef.current.followMode === "prework_follow"
    ) {
      return null;
    }
    return Math.max(0, pendingOffset - responseSpacerHeightPx.get());
  });

  const restoreScrollDistanceFromBottomPx = useEventCallback(() => {
    if (didApplyInitialScrollRef.current) return;
    const pendingOffset = pendingInitialScrollOffsetRef.current;
    if (
      pendingOffset == null ||
      scrollStateRef.current.followMode === "prework_follow"
    ) {
      didApplyInitialScrollRef.current = true;
      return;
    }
    const scrollElement = scrollController.getScrollElement();
    if (scrollElement != null) {
      if (
        Math.abs(readScrollTop(scrollElement) - pendingOffset) <=
        NEAR_BOTTOM_EPSILON_PX
      ) {
        didApplyInitialScrollRef.current = true;
        return;
      }
      scrollController.scrollToDistanceFromBottomPx(pendingOffset, "instant");
      if (
        Math.abs(readScrollTop(scrollElement) - pendingOffset) <=
        NEAR_BOTTOM_EPSILON_PX
      ) {
        didApplyInitialScrollRef.current = true;
      }
    }
  });

  const onRestoreStateChange = useEventCallback((state: unknown) => {
    restoreStateRef.current = state;
    onVirtualizedTurnListRestoreStateChange?.(state);
  });

  useLayoutEffect(() => {
    syncFooterResizePreserve();
    return () => {
      const turnKey = latestNonGapTurnKeyRef.current;
      const scrollElement = scrollController.getScrollElement();
      const snapshot = normalizePersistedScrollSnapshot({
        distanceFromBottomPx:
          scrollElement == null
            ? scrollController.getLastScrollDistanceFromBottomPx()
            : readScrollTop(scrollElement),
        latestTurnPhase: latestTurnPhaseRef.current,
        responseSpacerHeightPx: responseSpacerHeightPx.get(),
        scrollPaddingBottomPx:
          scrollElement == null ? 0 : readScrollPaddingBottomPx(scrollElement),
        scrollState: scrollStateRef.current,
      });
      const nextState: VirtualizedTurnListPersistedScrollState = {
        distanceFromBottomPx: snapshot.distanceFromBottomPx,
        latestTurn:
          turnKey == null
            ? null
            : {
                turnKey,
                isLatestTurnInProgress: isLatestTurnInProgressRef.current,
                latestTurnPhase: latestTurnPhaseRef.current,
                ...snapshot.scrollState,
                latestTurnHeightPx: isViewportPreservingFollowMode(
                  snapshot.scrollState.followMode,
                )
                  ? latestTurnHeightRef.current
                  : null,
                latestTurnFollowContentHeightPx:
                  latestTurnFollowContentHeightRef.current,
              },
        virtualizedTurnList: restoreStateRef.current,
      };
      softWriteVirtualizedTurnListScrollState(conversationId, nextState);
      scrollController.setFooterResizeViewportPreserveDisabled(false);
    };
  }, [
    conversationId,
    responseSpacerHeightPx,
    scrollController,
    syncFooterResizePreserve,
  ]);

  const clearResponseSpacer = useEventCallback(() => {
    responseSpacerHeightPx.stop();
    responseSpacerHeightPx.set(0);
    responseSpacerPinnedNearBottomRef.current = false;
  });

  const clearSpacerAndScrollToBottom = useEventCallback(() => {
    didApplyInitialScrollRef.current = true;
    latestTurnOffsetYPx.stop();
    latestTurnOffsetYPx.set(0);
    clearResponseSpacer();
    onResponseSpacerStateChange?.(null);
    scrollController.scrollToDistanceFromBottomPx(0, "instant");
  });

  const scrollResponseSpacerToBottom = useEventCallback(() => {
    didApplyInitialScrollRef.current = true;
    if (isLatestTurnInProgressRef.current) {
      latestTurnOffsetYPx.stop();
      latestTurnOffsetYPx.set(0);
      clearResponseSpacer();
      dispatchScrollState(
        {
          type: "scroll_to_bottom",
          latestTurnPhase: latestTurnPhaseRef.current,
        },
        true,
      );
      scrollController.scrollToDistanceFromBottomPx(0, "instant");
      return;
    }
    if (
      latestTurnPhaseRef.current === "idle" &&
      responseSpacerHeightPx.get() > NEAR_BOTTOM_EPSILON_PX
    ) {
      clearSpacerAndScrollToBottom();
      return;
    }
    scrollController.scrollToBottom();
  });

  const shrinkResponseSpacerToward = useEventCallback(
    (targetHeightPx: number) => {
      const currentHeight = responseSpacerHeightPx.get();
      const nextHeight =
        targetHeightPx <= NEAR_BOTTOM_EPSILON_PX
          ? 0
          : Math.min(currentHeight, targetHeightPx);
      if (currentHeight - nextHeight <= NEAR_BOTTOM_EPSILON_PX) return;
      const scrollElement = scrollController.getScrollElement();
      const distanceBefore =
        scrollElement == null ? 0 : readScrollTop(scrollElement);
      const heightDelta = nextHeight - currentHeight;
      latestTurnOffsetYPx.stop();
      latestTurnOffsetYPx.set(0);
      responseSpacerHeightPx.stop();
      responseSpacerHeightPx.set(nextHeight);
      if (nextHeight <= NEAR_BOTTOM_EPSILON_PX) {
        onResponseSpacerStateChange?.(null);
      }
      if (scrollElement != null) {
        scrollController.scrollToDistanceFromBottomPx(
          Math.max(0, distanceBefore + heightDelta),
          "instant",
        );
      }
    },
  );

  const onUserScrollDistanceChange = useEventCallback(
    (
      distanceFromBottomPx: number,
      previousDistanceFromBottomPx: number | undefined,
    ) => {
      didApplyInitialScrollRef.current = true;
      const spacerHeight = responseSpacerHeightPx.get();
      if (distanceFromBottomPx <= NEAR_BOTTOM_EPSILON_PX) {
        if (
          (spacerHeight <= NEAR_BOTTOM_EPSILON_PX ||
            responseSpacerPinnedNearBottomRef.current) &&
          previousDistanceFromBottomPx != null &&
          previousDistanceFromBottomPx > NEAR_BOTTOM_EPSILON_PX &&
          isLatestTurnInProgressRef.current
        ) {
          dispatchScrollState(
            {
              type: "scroll_to_bottom",
              latestTurnPhase: latestTurnPhaseRef.current,
            },
            true,
          );
          scrollController.scrollToDistanceFromBottomPx(0, "instant");
        }
        return;
      }
      dispatchScrollState({
        type: "scroll_distance_changed",
        distanceFromBottomPx,
        latestTurnPhase: latestTurnPhaseRef.current,
      });
      if (
        spacerHeight > NEAR_BOTTOM_EPSILON_PX &&
        ((!isLatestTurnInProgressRef.current &&
          latestTurnPhaseRef.current === "idle") ||
          (isLatestTurnInProgressRef.current &&
            previousDistanceFromBottomPx != null &&
            distanceFromBottomPx > previousDistanceFromBottomPx))
      ) {
        shrinkResponseSpacerToward(spacerHeight - distanceFromBottomPx);
      }
    },
  );

  useLayoutEffect(
    () => scrollController.addUserScrollListener(onUserScrollDistanceChange),
    [onUserScrollDistanceChange, scrollController],
  );

  useLayoutEffect(() => {
    const scrollElement = scrollController.getScrollElement();
    const spacerElement = responseSpacerElementRef.current;
    if (
      scrollElement == null ||
      spacerElement == null ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }
    const observer = new IntersectionObserver(
      (entriesObserved) => {
        const last = entriesObserved[entriesObserved.length - 1];
        if (last == null) return;
        const intersectionHeight = last.intersectionRect.height;
        if (isLatestTurnInProgressRef.current) {
          responseSpacerPinnedNearBottomRef.current =
            Math.max(
              0,
              intersectionHeight - readScrollPaddingBottomPx(scrollElement),
            ) <= NEAR_BOTTOM_EPSILON_PX;
          return;
        }
        shrinkResponseSpacerToward(
          Math.min(
            intersectionHeight,
            responseSpacerHeightPx.get() - readScrollTop(scrollElement),
          ),
        );
      },
      {
        root: scrollElement,
        threshold: INTERSECTION_THRESHOLDS,
      },
    );
    observer.observe(spacerElement);
    return () => {
      observer.disconnect();
    };
  }, [responseSpacerHeightPx, scrollController, shrinkResponseSpacerToward]);

  useLayoutEffect(() => {
    if (latestTurnPlacementKey == null) {
      onResponseSpacerStateChange?.(null);
      return;
    }
    onResponseSpacerStateChange?.({
      getHeightPx: getResponseSpacerHeightPx,
      scrollToBottom: scrollResponseSpacerToBottom,
    });
    return () => {
      onResponseSpacerStateChange?.(null);
    };
  }, [
    latestTurnPlacementKey,
    getResponseSpacerHeightPx,
    scrollResponseSpacerToBottom,
    onResponseSpacerStateChange,
    responseSpacerHeightPx,
  ]);

  const clampResponseSpacerToViewport = useEventCallback(() => {
    const scrollElement = scrollController.getScrollElement();
    if (scrollElement == null) return;
    const idealHeight = computeIdealResponseSpacerHeightPx({
      scrollElementHeightPx: scrollElement.clientHeight,
      scrollPaddingBottomPx: readScrollPaddingBottomPx(scrollElement),
    });
    const currentHeight = responseSpacerHeightPx.get();
    if (currentHeight <= NEAR_BOTTOM_EPSILON_PX) return;
    const nextHeight = Math.min(currentHeight, idealHeight);
    if (Math.abs(nextHeight - currentHeight) <= NEAR_BOTTOM_EPSILON_PX) return;
    const heightDelta = nextHeight - currentHeight;
    responseSpacerHeightPx.stop();
    responseSpacerHeightPx.set(nextHeight);
    if (nextHeight <= NEAR_BOTTOM_EPSILON_PX) {
      onResponseSpacerStateChange?.(null);
    }
    const distanceBefore = readScrollTop(scrollElement);
    scrollController.scrollToDistanceFromBottomPx(
      Math.max(0, distanceBefore + heightDelta),
      "instant",
    );
  });

  const { getScrollElement } = scrollController;
  useLayoutEffect(() => {
    const scrollElement = getScrollElement();
    if (scrollElement == null) return;
    clampResponseSpacerToViewport();
    let frameId: number | null = null;
    const schedule = () => {
      frameId ??= window.requestAnimationFrame(() => {
        frameId = null;
        clampResponseSpacerToViewport();
      });
    };
    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(schedule);
    resizeObserver?.observe(scrollElement);
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", schedule);
      if (frameId != null) window.cancelAnimationFrame(frameId);
    };
  }, [getScrollElement, clampResponseSpacerToViewport]);

  const onLatestTurnHeightChange = useEventCallback(
    (change: LatestTurnHeightChange) => {
      const scrollElement = scrollController.getScrollElement();
      const restoredHeight = restoredLatestTurnHeightRef.current;
      if (change.heightPx != null) {
        latestTurnHeightRef.current = change.heightPx;
        restoredLatestTurnHeightRef.current = null;
      }
      if (change.followContentHeightPx != null) {
        latestTurnFollowContentHeightRef.current = change.followContentHeightPx;
      }
      if (
        restoredHeight != null &&
        scrollElement != null &&
        change.heightPx != null &&
        Math.abs(change.heightPx - restoredHeight) > NEAR_BOTTOM_EPSILON_PX
      ) {
        const heightDelta = change.heightPx - restoredHeight;
        if (pendingInitialScrollOffsetRef.current != null) {
          didApplyInitialScrollRef.current = false;
          pendingInitialScrollOffsetRef.current = Math.max(
            0,
            pendingInitialScrollOffsetRef.current + heightDelta,
          );
        }
        applyDistanceDeltaWithOptionalSpacerGrowth({
          allowResponseSpacerGrowth: isLatestTurnInProgressRef.current,
          distanceDeltaPx: heightDelta,
          responseSpacerHeightPx,
          scrollController,
          scrollElement,
        });
      }
      if (scrollStateRef.current.followMode === "user_follow") {
        scrollController.scrollToDistanceFromBottomPx(0, "instant");
        return;
      }
      if (
        scrollStateRef.current.followMode === "prework_follow" &&
        latestTurnPhaseRef.current === "prework"
      ) {
        scrollController.scrollToDistanceFromBottomPx(0, "instant");
        return;
      }
      if (
        scrollElement != null &&
        restoredHeight == null &&
        change.heightDeltaPx != null &&
        change.heightDeltaPx !== 0 &&
        isViewportPreservingFollowMode(scrollStateRef.current.followMode)
      ) {
        applyDistanceDeltaWithOptionalSpacerGrowth({
          allowResponseSpacerGrowth: isLatestTurnInProgressRef.current,
          distanceDeltaPx: change.heightDeltaPx,
          responseSpacerHeightPx,
          scrollController,
          scrollElement,
        });
      }
      if (
        scrollStateRef.current.followMode === "static" ||
        latestTurnPhaseRef.current !== "prework" ||
        scrollStateRef.current.followMode !== "prework_watch" ||
        responseSpacerHeightPx.get() <= NEAR_BOTTOM_EPSILON_PX ||
        scrollElement == null ||
        change.turnElement == null
      ) {
        return;
      }
      const followContentOverflowPx =
        measureLatestTurnBottomOverflowPx({
          scrollElement,
          turnElement: change.turnElement,
          fallbackBottomViewportOverflowPx: change.bottomViewportOverflowPx,
          windowZoom,
        }) + readScrollPaddingBottomPx(scrollElement);
      const previousState = scrollStateRef.current;
      const nextState = dispatchScrollState({
        type: "latest_turn_follow_content_changed",
        followContentOverflowPx,
        latestTurnPhase: latestTurnPhaseRef.current,
      });
      if (
        previousState.followMode !== "prework_follow" &&
        nextState.followMode === "prework_follow"
      ) {
        latestTurnOffsetYPx.stop();
        latestTurnOffsetYPx.set(0);
        clearResponseSpacer();
        scrollController.scrollToDistanceFromBottomPx(0, "instant");
      }
    },
  );

  const onScrollDistanceWhileInProgress = useEventCallback(
    (distanceFromBottomPx: number) => {
      if (distanceFromBottomPx <= NEAR_BOTTOM_EPSILON_PX) return;
      const spacerHeight = responseSpacerHeightPx.get();
      const scrollElement = scrollController.getScrollElement();
      const scrollPaddingBottomPx =
        scrollElement == null ? 0 : readScrollPaddingBottomPx(scrollElement);
      if (
        isLatestTurnInProgressRef.current &&
        spacerHeight > NEAR_BOTTOM_EPSILON_PX &&
        computeResponseSpacerOverflowPx({
          distanceFromBottomPx,
          responseSpacerHeightPx: spacerHeight,
          scrollPaddingBottomPx,
        }) <= NEAR_BOTTOM_EPSILON_PX
      ) {
        responseSpacerPinnedNearBottomRef.current = true;
      }
    },
  );

  useLayoutEffect(
    () => scrollController.addScrollListener(onScrollDistanceWhileInProgress),
    [onScrollDistanceWhileInProgress, scrollController],
  );

  useLayoutEffect(() => {
    const previousPlacementKey = placementKeyRef.current;
    const previousPhase = previousLatestTurnPhaseRef.current;
    const previousInProgress = previousInProgressRef.current;
    placementKeyRef.current = latestTurnPlacementKey;
    previousLatestTurnPhaseRef.current = latestTurnPhase;
    previousInProgressRef.current = isLatestTurnInProgress;

    if (latestTurnPlacementKey == null) {
      dispatchScrollState({ type: "latest_turn_removed" }, true);
      latestTurnOffsetYPx.stop();
      latestTurnOffsetYPx.set(0);
      clearResponseSpacer();
      return;
    }

    const scrollElement = scrollController.getScrollElement();
    if (scrollElement == null) return;

    if (previousPlacementKey !== latestTurnPlacementKey) {
      const shouldForceInitialPlacement = needsInitialPlacementRef.current;
      needsInitialPlacementRef.current = false;
      const pendingPlacement =
        consumePendingLatestTurnSubmitPlacement?.() ?? null;
      if (
        consumePendingLatestTurnSubmitPlacement != null &&
        pendingPlacement == null &&
        !shouldForceInitialPlacement
      ) {
        return;
      }
      const shouldPlaceLatestTurn =
        pendingPlacement?.shouldPlaceLatestTurn ?? true;
      dispatchScrollState({ type: "latest_turn_placed" }, true);
      if (!shouldPlaceLatestTurn) {
        latestTurnOffsetYPx.stop();
        latestTurnOffsetYPx.set(0);
        clearResponseSpacer();
        if (pendingPlacement != null) {
          const scrollHeightDelta =
            pendingPlacement.scrollHeightPx == null
              ? 0
              : scrollElement.scrollHeight - pendingPlacement.scrollHeightPx;
          scrollController.scrollToDistanceFromBottomPx(
            pendingPlacement.distanceFromBottomPx + scrollHeightDelta,
            "instant",
          );
        }
        return;
      }
      const idealSpacerHeight = computeIdealResponseSpacerHeightPx({
        scrollElementHeightPx: scrollElement.clientHeight,
        scrollPaddingBottomPx: readScrollPaddingBottomPx(scrollElement),
      });
      const previousSpacerHeight = responseSpacerHeightPx.get();
      responseSpacerHeightPx.stop();
      responseSpacerPinnedNearBottomRef.current = false;
      latestTurnOffsetYPx.stop();
      latestTurnOffsetYPx.set(previousSpacerHeight);
      scrollController.scrollToDistanceFromBottomPx(
        PLACE_LATEST_TURN_SCROLL_DISTANCE_PX,
        "instant",
      );
      void animate(latestTurnOffsetYPx, 0, RESPONSE_SPACER_SPRING);
      if (previousSpacerHeight !== idealSpacerHeight) {
        void animate(
          responseSpacerHeightPx,
          idealSpacerHeight,
          RESPONSE_SPACER_SPRING,
        );
      }
    }

    const followModeBeforePhaseChange = scrollStateRef.current;
    dispatchScrollState({
      type: "latest_turn_phase_changed",
      latestTurnPhase,
      previousLatestTurnPhase: previousPhase,
    });
    if (
      previousPhase === "prework" &&
      latestTurnPhase === "final_answer" &&
      followModeBeforePhaseChange.followMode === "prework_follow"
    ) {
      latestTurnOffsetYPx.stop();
      latestTurnOffsetYPx.set(0);
      clearResponseSpacer();
      scrollController.scrollToDistanceFromBottomPx(0, "instant");
    }
    if (previousInProgress && !isLatestTurnInProgress) {
      latestTurnOffsetYPx.stop();
      latestTurnOffsetYPx.set(0);
      responseSpacerHeightPx.stop();
    }
  }, [
    clearResponseSpacer,
    consumePendingLatestTurnSubmitPlacement,
    isLatestTurnInProgress,
    latestTurnOffsetYPx,
    latestTurnPlacementKey,
    latestTurnPhase,
    responseSpacerHeightPx,
    scrollController,
    dispatchScrollState,
  ]);

  const rowComponent = useEventCallback(
    (rowProps: Record<string, unknown>): ReactNode => (
      <VirtualizedTurnListRow
        entry={rowProps.entry as TurnListEntry}
        latestTurnFooter={rowProps.latestTurnFooter as ReactNode}
        latestTurnFollowContentRef={
          rowProps.latestTurnFollowContentRef as
            | RefObject<HTMLElement | null>
            | undefined
        }
      />
    ),
  );

  const conversationSourceEntries = entries as Array<{
    turnKey: string;
    estimatedHeightPx?: number;
  }>;

  return (
    <>
      <LatestTurnOffsetContext.Provider value={latestTurnOffsetContextValue}>
        {conversationSourceC({
          entries: conversationSourceEntries,
          getBottomScrollPaddingPx: getResponseSpacerHeightPx,
          initialRestoreState: initialVirtualizedTurnListRestoreState as
            | { turnHeightsByKey?: Record<string, number> }
            | null
            | undefined,
          latestTurnFooter,
          latestTurnFooterKey,
          latestTurnSynchronousMeasurementKey:
            synchronouslyMeasureLatestTurnUpdates &&
            latestNonGapEntry === latestHistoryEntry
              ? (latestHistoryEntry?.turnKey ?? undefined)
              : undefined,
          onApiChange,
          onVisibleContentReady,
          onLatestTurnHeightChange,
          onRestoreStateChange,
          onViewportChange,
          preserveMeasuredTurnViewport: !isLatestTurnInProgress,
          getPendingRestoreScrollDistanceFromBottomPx,
          restoreScrollDistanceFromBottomPx,
          RowComponent: rowComponent,
        })}
      </LatestTurnOffsetContext.Provider>
      <motion.div
        aria-hidden
        className="shrink-0"
        ref={responseSpacerElementRef}
        style={{ height: responseSpacerHeightPx }}
      />
    </>
  );
}
