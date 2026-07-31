// Restored from ref/webview/assets/conversation-source-AkSNVCIa.js
// Conversation source: virtualized turn list, find highlight, summary panel layout, search adapter.
// Stage 3: drained from boundaries/ into semantic conversation/conversation-source modules.
// Summary-panel display-mode helpers.

import { animate } from "../../vendor/framer-motion";
import { DEFAULT_SPRING_TRANSITION } from "../../ui/default-spring-transition";
import { esmInit } from "../../runtime/rolldown-runtime";

export var summaryPanelGutterPx: number | undefined;
export const ensureSummaryPanelGutterInit = esmInit(() => {
  summaryPanelGutterPx = 16;
});

export function resolveSummaryDisplayMode(
  widthPx: number,
): "overlay" | "shift" | "gutter" {
  let conversationSourceBinding249 = (widthPx - 736) / 2;
  return conversationSourceBinding249 < 180
    ? "overlay"
    : conversationSourceBinding249 < 400
      ? "shift"
      : "gutter";
}

export function deriveSummaryVisibility({
  displayMode,
  isPinned,
  isPopoverOpen,
}: {
  displayMode: string;
  isPinned: boolean;
  isPopoverOpen: boolean;
}): {
  displayMode: string;
  shouldHideInlineImmediately: boolean;
  shouldShow: boolean;
} {
  return {
    displayMode,
    shouldHideInlineImmediately: displayMode === "overlay" && isPopoverOpen,
    shouldShow: isPinned && displayMode !== "overlay",
  };
}

export function computeContentShiftPx({
  displayMode,
  isPinned,
}: {
  displayMode: string;
  isPinned: boolean;
}): number {
  return isPinned && displayMode === "shift"
    ? -(300 + summaryPanelGutterPx) / 2
    : 0;
}

export function closePopoverOnUnmount(state: {
  displayMode: string;
  isPopoverOpen: boolean;
}): { displayMode: string; isPopoverOpen: boolean } {
  return state.isPopoverOpen
    ? {
        ...state,
        isPopoverOpen: false,
      }
    : state;
}

export function contentShiftForPinnedWidth({
  isPinned,
  mainContentTargetWidth,
}: {
  isPinned: boolean;
  mainContentTargetWidth: number;
}): number {
  return computeContentShiftPx({
    displayMode: resolveSummaryDisplayMode(mainContentTargetWidth),
    isPinned,
  });
}

export function animateOrSetMotionValue(
  motionValue: { set: (v: number) => void },
  nextValue: number,
  prefersReducedMotion: boolean,
): unknown {
  return prefersReducedMotion
    ? (motionValue.set(nextValue), null)
    : animate(motionValue as never, nextValue, DEFAULT_SPRING_TRANSITION);
}
