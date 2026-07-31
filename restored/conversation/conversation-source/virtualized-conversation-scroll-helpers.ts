// Restored from ref/webview/assets/conversation-source-AkSNVCIa.js
// Conversation source: virtualized turn list, find highlight, summary panel layout, search adapter.
// Stage 3: drained from boundaries/ into semantic conversation/conversation-source modules.
// Scroll-distance helpers for the virtualized conversation turn list.

import { distanceFromBottomForTurn } from "../../utils/thread-virtualizer";
import { divideByWindowZoom } from "../../hooks/use-window-zoom";

export function readBottomPaddingPx(
  useConversationSourceOpts54: (() => number) | undefined | null,
) {
  return Math.max(0, useConversationSourceOpts54?.() ?? 0);
}
export function subtractBottomPadding(
  useConversationSourceOpts55: number,
  useConversationSourceOpts56: number,
) {
  return Math.max(0, useConversationSourceOpts55 - useConversationSourceOpts56);
}
export function isPinnedNearBottom(
  useConversationSourceOpts52: number,
  useConversationSourceOpts53: number,
) {
  return (
    useConversationSourceOpts52 <= (useConversationSourceOpts53 > 0 ? 0 : 24)
  );
}
export function snapshotRestoreState(
  useConversationSourceOpts21: Record<string, number>,
  useConversationSourceOpts22: readonly string[],
  useConversationSourceOpts23: { startIndex: number; endIndex: number },
) {
  let conversationSourceBinding216 = {};
  for (let conversationSourceBinding251 of useConversationSourceOpts22) {
    let conversationSourceBinding255 =
      useConversationSourceOpts21[conversationSourceBinding251];
    conversationSourceBinding255 != null &&
      (conversationSourceBinding216[conversationSourceBinding251] =
        conversationSourceBinding255);
  }
  let conversationSourceBinding217 =
    useConversationSourceOpts22[useConversationSourceOpts23.startIndex];
  return Object.keys(conversationSourceBinding216).length === 0 ||
    conversationSourceBinding217 == null
    ? null
    : {
        renderedWindow: {
          anchorKey: conversationSourceBinding217,
          count:
            useConversationSourceOpts23.endIndex -
            useConversationSourceOpts23.startIndex,
        },
        turnHeightsByKey: conversationSourceBinding216,
      };
}
export function computeBottomOverflowPx({
  scrollElement,
  turnElement,
  windowZoom,
}: {
  scrollElement: Element | null;
  turnElement: Element | null;
  windowZoom: number;
}) {
  return scrollElement == null || turnElement == null
    ? 0
    : divideByWindowZoom(
        turnElement.getBoundingClientRect().bottom -
          scrollElement.getBoundingClientRect().bottom,
        windowZoom,
      );
}
export function distanceForTurnAlign({
  align,
  layout,
  turnKey,
  viewportHeightPx,
}: {
  align: string;
  layout: {
    turnIndexByKey: Map<string, number>;
    bottomOffsetsPx: number[];
    heightsPx: number[];
  };
  turnKey: string;
  viewportHeightPx: number;
}) {
  if (align === "center")
    return distanceFromBottomForTurn({
      layout,
      turnKey,
      viewportHeightPx,
    });
  let conversationSourceBinding219 = layout.turnIndexByKey.get(turnKey);
  return conversationSourceBinding219 == null
    ? null
    : Math.max(
        0,
        (layout.bottomOffsetsPx[conversationSourceBinding219] ?? 0) +
          (layout.heightsPx[conversationSourceBinding219] ?? 0) -
          10,
      );
}
export function distanceForTargetElement({
  align,
  layout,
  targetElement,
  turnElement,
  turnKey,
  windowZoom,
  viewportHeightPx,
}: {
  align: string;
  layout: {
    turnIndexByKey: Map<string, number>;
    bottomOffsetsPx: number[];
    heightsPx: number[];
  };
  targetElement: Element;
  turnElement: Element;
  turnKey: string;
  windowZoom: number;
  viewportHeightPx: number;
}) {
  let conversationSourceBinding199 = layout.turnIndexByKey.get(turnKey);
  if (conversationSourceBinding199 == null) return null;
  let conversationSourceBinding200 = turnElement.getBoundingClientRect(),
    conversationSourceBinding201 = targetElement.getBoundingClientRect(),
    conversationSourceBinding202 = divideByWindowZoom(
      conversationSourceBinding201.top - conversationSourceBinding200.top,
      windowZoom,
    ),
    conversationSourceBinding203 = divideByWindowZoom(
      conversationSourceBinding201.height,
      windowZoom,
    ),
    conversationSourceBinding204 =
      (layout.bottomOffsetsPx[conversationSourceBinding199] ?? 0) +
      (layout.heightsPx[conversationSourceBinding199] ?? 0) -
      conversationSourceBinding202;
  return align === "top"
    ? Math.max(0, conversationSourceBinding204 - 10)
    : Math.max(
        0,
        conversationSourceBinding204 -
          conversationSourceBinding203 / 2 -
          viewportHeightPx / 2,
      );
}
