// Restored from ref/webview/assets/thread-scroll-layout-Cig7hXqW.js
// Thread transcript scroll surface (flex-col-reverse) with footer padding,
// shell-width compensation, and imperative scroll controller context.
// Stage 3: app-initial aliases → semantic modules; ESM inits dropped.

import {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type Ref,
} from "react";
import type { MotionValue } from "framer-motion";
import { motion, useTransform } from "../vendor/framer-motion";
import { ShellWidthDeltaContext } from "../app-shell/shell-width-delta-context";
import { useEventCallback } from "../hooks/use-event-callback";
import { useResizeObserver } from "../hooks/use-resize-observer";
import { readScrollTop, writeScrollTop } from "../navigation/app-action-dom";
import { AppActionDataAttr } from "../navigation/app-action-data-attr-builders";
import { getResizeObserverEntrySize } from "../utils/create-resize-observer";
import { cx } from "../ui/cx";
import { THREAD_CONTENT_WIDTH_CLASS } from "./thread-content-width-class";
import {
  ThreadScrollControllerContext,
  type ThreadScrollController,
  type ThreadScrollDistanceListener,
  type ThreadScrollUserDistanceListener,
} from "./thread-scroll-controller-context";
const SCROLL_TO_BOTTOM_MS = 260;
const NEAR_TOP_SCROLLABLE_PX = 64;
const TOUCH_DIRECTION_SLOP_PX = 8;
const SCROLL_DIRECTION_STALE_MS = 1000;
const LINE_DELTA_PX = 16;
const DELTA_MODE_LINE = 1;
const DELTA_MODE_PAGE = 2;
const AT_BOTTOM_EPSILON_PX = 24;
export type ThreadScrollLayoutHandle = {
  scrollToBottom: () => void;
};
export type ThreadScrollLayoutProps = {
  contentX?: MotionValue<number> | null;
  children?: ReactNode;
  footer?: ReactNode;
  hasLiveMcpAppFrame?: boolean;
  onScroll?: (distanceFromBottomPx: number, atBottom: boolean) => void;
  onUserScrollToTop?: () => void | "stop" | Promise<void | "stop">;
  ref?: Ref<ThreadScrollLayoutHandle | null>;
  initialOffset?: number;
  remoteHostedPIPAnchorHostId?: string;
};
type ScrollDirection = "away" | "toward";
type PendingPreserve = {
  distanceFromBottomPx: number;
  scrollHeightPx: number;
  wheelDistanceFromBottomPx: number;
};
type PointerScrollSnapshot = {
  scrollHeightPx: number;
  scrollTopPx: number;
};
type ActiveScrollDirection = {
  direction: ScrollDirection;
  lastAtMs: number;
};

/**
 * Bundle export `t` — thread scroll layout with controller context.
 */
export function ThreadScrollLayout({
  contentX,
  children,
  footer,
  hasLiveMcpAppFrame = false,
  onScroll,
  onUserScrollToTop,
  ref,
  initialOffset = 0,
  remoteHostedPIPAnchorHostId,
}: ThreadScrollLayoutProps): ReactNode {
  const initialDistance =
    initialOffset != null && initialOffset > AT_BOTTOM_EPSILON_PX
      ? initialOffset
      : 0;
  const wideBlockShift = useTransform(
    () => `${Math.abs(contentX?.get() ?? 0)}px`,
  );
  const scrollElementRef = useRef<HTMLElement | null>(null);
  const [isScrolledFromBottom, setIsScrolledFromBottom] = useState(false);
  const footerHeightRef = useRef<number | null>(null);
  const lastDistanceRef = useRef(initialDistance);
  const scrollListenersRef = useRef(new Set<ThreadScrollDistanceListener>());
  const userScrollListenersRef = useRef(
    new Set<ThreadScrollUserDistanceListener>(),
  );
  const activeDirectionRef = useRef<ActiveScrollDirection | null>(null);
  const loadingHistoryRef = useRef(false);
  const autoScrollingRef = useRef(false);
  const footerPreserveDisabledRef = useRef(false);
  const pendingPreserveRef = useRef<PendingPreserve | null>(null);
  const autoScrollFrameRef = useRef<number | null>(null);
  const subscribeShellWidthDelta = useContext(ShellWidthDeltaContext);
  const bindScrollElement = useCallback(
    (element: HTMLElement | null) => {
      scrollElementRef.current = element;
      if (element == null || subscribeShellWidthDelta == null) return;
      return subscribeShellWidthDelta((deltaPx) => {
        if (
          autoScrollingRef.current ||
          isNearBottom(element) ||
          element == null
        ) {
          return;
        }
        writeScrollTop(element, readScrollTop(element) + deltaPx);
      });
    },
    [subscribeShellWidthDelta],
  );
  const getScrollElement = useEventCallback(() => scrollElementRef.current);
  const getLastScrollDistanceFromBottomPx = useCallback(
    () => lastDistanceRef.current,
    [],
  );
  const addScrollListener = useEventCallback(
    (listener: ThreadScrollDistanceListener) => {
      scrollListenersRef.current.add(listener);
      listener(lastDistanceRef.current);
      return () => {
        scrollListenersRef.current.delete(listener);
      };
    },
  );
  const addUserScrollListener = useEventCallback(
    (listener: ThreadScrollUserDistanceListener) => {
      userScrollListenersRef.current.add(listener);
      return () => {
        userScrollListenersRef.current.delete(listener);
      };
    },
  );
  const publishDistance = useEventCallback((distanceFromBottomPx: number) => {
    lastDistanceRef.current = distanceFromBottomPx;
    const atBottom = distanceFromBottomPx <= AT_BOTTOM_EPSILON_PX;
    onScroll?.(distanceFromBottomPx, atBottom);
    for (const listener of scrollListenersRef.current) {
      listener(distanceFromBottomPx);
    }
    setIsScrolledFromBottom(!atBottom);
  });
  const cancelAutoScroll = useEventCallback(() => {
    autoScrollingRef.current = false;
    if (autoScrollFrameRef.current != null) {
      window.cancelAnimationFrame(autoScrollFrameRef.current);
      autoScrollFrameRef.current = null;
    }
  });
  const beginAutoScroll = useEventCallback(() => {
    autoScrollingRef.current = true;
    if (autoScrollFrameRef.current != null) {
      window.cancelAnimationFrame(autoScrollFrameRef.current);
      autoScrollFrameRef.current = null;
    }
  });
  const clearPendingPreserve = useEventCallback(() => {
    pendingPreserveRef.current = null;
  });
  const scrollWithComputedTop = useEventCallback(
    (
      behavior: ScrollBehavior,
      computeTop: (element: HTMLElement) => number,
    ) => {
      const element = scrollElementRef.current;
      if (element == null) return;
      clearPendingPreserve();
      const top = Math.max(0, computeTop(element));
      element.scrollTo({
        behavior,
        top: top === 0 ? 0 : -top,
      });
      publishDistance(readScrollTop(element));
    },
  );
  const scrollToDistanceFromBottomPx = useEventCallback(
    (
      distanceFromBottomPx: number,
      behavior: ScrollBehavior,
      source: "system" | "user" = "system",
    ) => {
      const previous = lastDistanceRef.current;
      const next = Math.max(0, distanceFromBottomPx);
      if (next > AT_BOTTOM_EPSILON_PX) cancelAutoScroll();
      scrollWithComputedTop(behavior, () => next);
      const after = lastDistanceRef.current;
      if (source === "user" && after !== previous) {
        for (const listener of userScrollListenersRef.current) {
          listener(after, previous);
        }
      }
    },
  );
  const compensateScrollToDistanceFromBottomPx = useEventCallback(
    (distanceFromBottomPx: number) => {
      if (autoScrollingRef.current) return;
      scrollWithComputedTop("instant", () => distanceFromBottomPx);
    },
  );
  const setFooterResizeViewportPreserveDisabled = useEventCallback(
    (disabled: boolean) => {
      footerPreserveDisabledRef.current = disabled;
    },
  );
  const preserveScrollPositionForNextLayout = useEventCallback(() => {
    const element = scrollElementRef.current;
    if (
      autoScrollingRef.current ||
      element == null ||
      pendingPreserveRef.current != null
    ) {
      return;
    }
    const snapshot: PendingPreserve = {
      distanceFromBottomPx: lastDistanceRef.current,
      scrollHeightPx: element.scrollHeight,
      wheelDistanceFromBottomPx: 0,
    };
    pendingPreserveRef.current = snapshot;
    window.requestAnimationFrame(() => {
      if (pendingPreserveRef.current !== snapshot) return;
      if (scrollElementRef.current !== element) {
        clearPendingPreserve();
        return;
      }
      if (element.scrollHeight === snapshot.scrollHeightPx) {
        clearPendingPreserve();
        return;
      }
      scrollWithComputedTop(
        "instant",
        () =>
          snapshot.distanceFromBottomPx + snapshot.wheelDistanceFromBottomPx,
      );
    });
  });
  const loadOlderWhileNearTop = useEventCallback(async () => {
    if (loadingHistoryRef.current || onUserScrollToTop == null) return;
    loadingHistoryRef.current = true;
    try {
      while (
        scrollElementRef.current != null &&
        isNearTop(scrollElementRef.current) &&
        (await onUserScrollToTop()) !== "stop"
      ) {
        const element = scrollElementRef.current;
        if (
          element != null &&
          element.scrollHeight - element.clientHeight > NEAR_TOP_SCROLLABLE_PX
        ) {
          break;
        }
      }
    } catch {
      // Ignore history-load failures; caller may retry on next scroll.
    } finally {
      loadingHistoryRef.current = false;
    }
  });
  const scrollToBottom = useEventCallback(() => {
    const element = scrollElementRef.current;
    if (element == null) return;
    clearPendingPreserve();
    const startDistance = readScrollTop(element);
    if (startDistance <= AT_BOTTOM_EPSILON_PX) {
      scrollWithComputedTop("instant", () => 0);
      cancelAutoScroll();
      return;
    }
    beginAutoScroll();
    const startedAt = performance.now();
    const tick = (now: number) => {
      const current = scrollElementRef.current;
      if (current == null) {
        cancelAutoScroll();
        return;
      }
      const progress = Math.min(1, (now - startedAt) / SCROLL_TO_BOTTOM_MS);
      const eased = 1 - (1 - progress) ** 3;
      writeScrollTop(current, startDistance * (1 - eased));
      if (progress < 1 && !isNearBottom(current)) {
        autoScrollFrameRef.current = window.requestAnimationFrame(tick);
        return;
      }
      writeScrollTop(current, 0);
      cancelAutoScroll();
    };
    autoScrollFrameRef.current = window.requestAnimationFrame(tick);
  });
  useLayoutEffect(() => {
    const element = scrollElementRef.current;
    if (element != null) {
      writeScrollTop(element, initialDistance);
      publishDistance(readScrollTop(element));
    }
  }, [publishDistance, initialDistance]);
  useEffect(() => {
    const element = scrollElementRef.current;
    if (element == null) return;
    const abort = new AbortController();
    const options: AddEventListenerOptions = {
      passive: true,
      signal: abort.signal,
    };
    let touchStart: Touch | null = null;
    let pointerSnapshot: PointerScrollSnapshot | null = null;
    const markDirection = (direction: ScrollDirection) => {
      cancelAutoScroll();
      const hasRoom =
        direction === "away"
          ? distanceFromTop(element) > 0
          : readScrollTop(element) > 0;
      activeDirectionRef.current = hasRoom
        ? {
            direction,
            lastAtMs: performance.now(),
          }
        : null;
    };
    const publishFromElement = () => {
      const distance = readScrollTop(element);
      if (distance <= AT_BOTTOM_EPSILON_PX) cancelAutoScroll();
      publishDistance(distance);
    };
    const onScroll = () => {
      const pending = pendingPreserveRef.current;
      if (pending != null && element.scrollHeight !== pending.scrollHeightPx) {
        clearPendingPreserve();
        writeScrollTop(
          element,
          pending.distanceFromBottomPx + pending.wheelDistanceFromBottomPx,
        );
      }
      const previous = lastDistanceRef.current;
      const snapshot = pointerSnapshot;
      if (snapshot != null) {
        pointerSnapshot = null;
        const distance = readScrollTop(element);
        if (
          element.scrollHeight === snapshot.scrollHeightPx &&
          element.scrollTop !== snapshot.scrollTopPx &&
          distance !== previous
        ) {
          activeDirectionRef.current = {
            direction: distance > previous ? "away" : "toward",
            lastAtMs: performance.now(),
          };
        }
      }
      const active = activeDirectionRef.current;
      if (active == null) {
        publishFromElement();
        return;
      }
      const now = performance.now();
      if (now - active.lastAtMs > SCROLL_DIRECTION_STALE_MS) {
        activeDirectionRef.current = null;
        publishFromElement();
        return;
      }
      publishFromElement();
      const distance = readScrollTop(element);
      const inferred: ScrollDirection | null =
        distance > previous ? "away" : distance < previous ? "toward" : null;
      if (inferred === active.direction) {
        active.lastAtMs = now;
        if (distance > previous && isNearTop(element)) {
          void loadOlderWhileNearTop();
        }
        for (const listener of userScrollListenersRef.current) {
          listener(distance, previous);
        }
        if (distance <= AT_BOTTOM_EPSILON_PX) {
          activeDirectionRef.current = null;
        }
      }
    };
    const onWheel = (event: WheelEvent) => {
      const delta = normalizeWheelDelta(event, element.clientHeight);
      const pending = pendingPreserveRef.current;
      if (pending == null) clearPendingPreserve();
      else pending.wheelDistanceFromBottomPx -= delta;
      if (event.deltaY < 0 && distanceFromTop(element) <= 0) {
        void loadOlderWhileNearTop();
      }
      if (delta !== 0) {
        markDirection(delta < 0 ? "away" : "toward");
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      const direction = scrollDirectionFromKey(event, element);
      if (direction != null) {
        clearPendingPreserve();
        markDirection(direction);
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      pointerSnapshot = null;
      activeDirectionRef.current = null;
      if (event.pointerType !== "mouse" || event.target !== element) return;
      clearPendingPreserve();
      cancelAutoScroll();
      pointerSnapshot = {
        scrollHeightPx: element.scrollHeight,
        scrollTopPx: element.scrollTop,
      };
    };
    const onPointerUp = () => {
      pointerSnapshot = null;
    };
    const onTouchStart = (event: TouchEvent) => {
      touchStart = event.touches.length === 1 ? event.touches[0]! : null;
    };
    const onTouchMove = (event: TouchEvent) => {
      const next = event.touches.length === 1 ? event.touches[0]! : null;
      if (
        touchStart == null ||
        next == null ||
        next.identifier !== touchStart.identifier
      ) {
        touchStart = null;
        return;
      }
      const dx = next.clientX - touchStart.clientX;
      const dy = next.clientY - touchStart.clientY;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < TOUCH_DIRECTION_SLOP_PX) {
        return;
      }
      touchStart = null;
      if (Math.abs(dy) > Math.abs(dx)) {
        clearPendingPreserve();
        markDirection(dy > 0 ? "away" : "toward");
      }
      if (dy > Math.abs(dx) && distanceFromTop(element) <= 0) {
        void loadOlderWhileNearTop();
      }
    };
    const onTouchEnd = () => {
      touchStart = null;
    };
    element.addEventListener("pointerdown", onPointerDown, options);
    element.addEventListener("pointerup", onPointerUp, options);
    element.addEventListener("pointercancel", onPointerUp, options);
    element.addEventListener("keydown", onKeyDown, options);
    element.addEventListener("touchstart", onTouchStart, options);
    element.addEventListener("touchmove", onTouchMove, options);
    element.addEventListener("touchend", onTouchEnd, options);
    element.addEventListener("touchcancel", onTouchEnd, options);
    element.addEventListener("wheel", onWheel, options);
    element.addEventListener("scroll", onScroll, options);
    return () => {
      abort.abort();
    };
  }, [
    clearPendingPreserve,
    cancelAutoScroll,
    loadOlderWhileNearTop,
    publishDistance,
  ]);
  useEffect(
    () => () => {
      cancelAutoScroll();
    },
    [cancelAutoScroll],
  );
  useImperativeHandle(ref, () => ({
    scrollToBottom,
  }));
  const controller = useMemo<ThreadScrollController>(
    () => ({
      addScrollListener,
      addUserScrollListener,
      compensateScrollToDistanceFromBottomPx,
      getLastScrollDistanceFromBottomPx,
      getScrollElement,
      isScrolledFromBottom,
      preserveScrollPositionForNextLayout,
      scrollToBottom,
      scrollToDistanceFromBottomPx,
      setFooterResizeViewportPreserveDisabled,
    }),
    [
      addScrollListener,
      addUserScrollListener,
      compensateScrollToDistanceFromBottomPx,
      getLastScrollDistanceFromBottomPx,
      getScrollElement,
      isScrolledFromBottom,
      preserveScrollPositionForNextLayout,
      scrollToBottom,
      scrollToDistanceFromBottomPx,
      setFooterResizeViewportPreserveDisabled,
    ],
  );
  const footerResizeRef = useResizeObserver((entry) => {
    const { height } = getResizeObserverEntrySize(entry);
    const element = scrollElementRef.current;
    if (element == null) return;
    const previous = footerHeightRef.current;
    if (previous === height) return;
    element.style.setProperty(
      "--thread-scroll-padding-bottom",
      `${height + 16}px`,
    );
    footerHeightRef.current = height;
    if (autoScrollingRef.current || footerPreserveDisabledRef.current) {
      return;
    }
    if (previous == null || isNearBottom(element)) return;
    scrollWithComputedTop(
      "instant",
      (scrollElement) => readScrollTop(scrollElement) + height - previous,
    );
  });
  const contentStyle =
    contentX == null
      ? undefined
      : {
          x: contentX,
          "--thread-wide-block-inline-shift": wideBlockShift,
        };
  return (
    <ThreadScrollControllerContext.Provider value={controller}>
      <div
        className={cx(
          "relative h-full flex-1",
          hasLiveMcpAppFrame
            ? "[content-visibility:visible]"
            : "[content-visibility:auto]",
        )}
      >
        <div
          ref={bindScrollElement}
          data-pip-anchor-host={remoteHostedPIPAnchorHostId}
          {...AppActionDataAttr.timelineScroll}
          tabIndex={0}
          className={cx(
            "thread-scroll-container relative h-full overflow-x-hidden overflow-y-auto [overflow-anchor:none] [scroll-padding-bottom:var(--thread-scroll-padding-bottom,0px)] electron:[scrollbar-gutter:stable_both-edges] pt-(--thread-content-top-inset) [container-name:thread-content] [container-type:inline-size]",
            "focus:outline-none",
            "[&:has([data-thread-scroll-footer='true']:focus-within)]:[scroll-padding-bottom:0px]",
            "flex flex-col-reverse",
          )}
        >
          <motion.div
            style={contentStyle}
            className="flex min-h-full shrink-0 flex-col justify-start"
          >
            <div
              data-mcp-app-portal-target="true"
              className={cx(
                THREAD_CONTENT_WIDTH_CLASS,
                "relative flex flex-1 shrink-0 flex-col pb-8",
              )}
            >
              {children}
            </div>
            {footer ? (
              <div
                data-thread-scroll-footer="true"
                ref={footerResizeRef}
                className="sticky bottom-0 z-10 mt-auto w-full pb-4"
              >
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex h-full w-full justify-center pt-4">
                  <div
                    className={cx(
                      THREAD_CONTENT_WIDTH_CLASS,
                      "z-0 h-full bg-gradient-to-t from-token-main-surface-primary via-token-main-surface-primary extension:from-token-bg-primary extension:via-token-bg-primary",
                    )}
                  />
                </div>
                <div
                  data-pip-obstacle="thread-footer"
                  className={cx(
                    "relative z-10 flex flex-col",
                    THREAD_CONTENT_WIDTH_CLASS,
                  )}
                >
                  {footer}
                </div>
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </ThreadScrollControllerContext.Provider>
  );
}
function scrollDirectionFromKey(
  event: KeyboardEvent,
  scrollElement: HTMLElement,
): ScrollDirection | null {
  if (event.defaultPrevented || event.repeat) return null;
  const target = event.target;
  if (
    target instanceof HTMLElement &&
    target !== scrollElement &&
    (target.isContentEditable ||
      target.closest("input, select, textarea") != null ||
      ((event.key === " " || event.key === "Spacebar") &&
        target.closest('button, [role="button"]') != null))
  ) {
    return null;
  }
  switch (event.key) {
    case "ArrowUp":
    case "Home":
    case "PageUp":
      return "away";
    case " ":
    case "Spacebar":
      return event.shiftKey ? "away" : "toward";
    case "ArrowDown":
    case "End":
    case "PageDown":
      return "toward";
    default:
      return null;
  }
}
function isNearBottom(element: HTMLElement): boolean {
  return readScrollTop(element) <= AT_BOTTOM_EPSILON_PX;
}
function isNearTop(element: HTMLElement): boolean {
  return distanceFromTop(element) <= NEAR_TOP_SCROLLABLE_PX;
}
function distanceFromTop(element: HTMLElement): number {
  return element.scrollHeight - element.clientHeight - readScrollTop(element);
}
function normalizeWheelDelta(event: WheelEvent, clientHeight: number): number {
  if (event.deltaMode === DELTA_MODE_LINE) {
    return event.deltaY * LINE_DELTA_PX;
  }
  if (event.deltaMode === DELTA_MODE_PAGE) {
    return event.deltaY * clientHeight;
  }
  return event.deltaY;
}

/** Bundle exports `n` / `r` — Rolldown ESM inits retained as no-op for graph parity. */
export function initThreadScrollLayout(): void {}
