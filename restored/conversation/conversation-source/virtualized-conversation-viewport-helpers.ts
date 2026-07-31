// Restored from ref/webview/assets/conversation-source-AkSNVCIa.js
// Conversation source: virtualized turn list, find highlight, summary panel layout, search adapter.
// Stage 3: drained from boundaries/ into semantic conversation/conversation-source modules.
// Viewport-range helpers for the virtualized conversation turn list.

import {
  buildThreadVirtualizerLayout,
  rangeAroundAnchorKey,
  visibleRangeFromDistance,
} from "../../utils/thread-virtualizer";
import { emptyTurnHeightsByKey } from "./virtualized-conversation-list-state";

export function createInitialViewportState(
  useConversationSourceOpts11: unknown,
  useConversationSourceOpts12: number,
  useConversationSourceOpts13: number,
  useConversationSourceOpts14: unknown,
) {
  let conversationSourceBinding155 = buildThreadVirtualizerLayout({
      entries: useConversationSourceOpts11,
      gapPx: useConversationSourceOpts13,
      measuredHeightsByKey:
        useConversationSourceOpts14?.turnHeightsByKey ?? emptyTurnHeightsByKey,
    }),
    conversationSourceBinding157 = Math.min(
      useConversationSourceOpts12,
      conversationSourceBinding155.totalHeightPx,
    ),
    conversationSourceBinding158 = visibleRangeFromDistance({
      distanceFromBottomPx: conversationSourceBinding157,
      layout: conversationSourceBinding155,
      overscanCount: 2,
      viewportHeightPx: 800,
    });
  return {
    distanceFromBottomPx: conversationSourceBinding157,
    renderedRange:
      (useConversationSourceOpts14?.renderedWindow == null
        ? null
        : rangeAroundAnchorKey({
            anchorKey: useConversationSourceOpts14.renderedWindow.anchorKey,
            layout: conversationSourceBinding155,
            previousRange: {
              startIndex: 0,
              endIndex: Math.min(
                useConversationSourceOpts14.renderedWindow.count,
                conversationSourceBinding158.endIndex -
                  conversationSourceBinding158.startIndex,
              ),
            },
          })) ?? conversationSourceBinding158,
    turnKeys: conversationSourceBinding155.turnKeys,
    viewportHeightPx: 800,
  };
}
export function reconcileViewportState({
  current,
  distanceFromBottomPx,
  layout,
  viewportHeightPx,
}: {
  current: {
    distanceFromBottomPx: number;
    viewportHeightPx: number;
    renderedRange: { startIndex: number; endIndex: number };
    turnKeys: string[];
  };
  distanceFromBottomPx: number;
  layout: {
    totalHeightPx: number;
    turnKeys: string[];
  };
  viewportHeightPx: number;
}) {
  let conversationSourceBinding160 = Math.min(
      distanceFromBottomPx,
      layout.totalHeightPx,
    ),
    conversationSourceBinding161 = visibleRangeFromDistance({
      distanceFromBottomPx: conversationSourceBinding160,
      layout,
      overscanCount: 2,
      viewportHeightPx,
    }),
    conversationSourceBinding162 = rangeContainsRange(
      current.renderedRange,
      conversationSourceBinding161,
    )
      ? current.renderedRange
      : conversationSourceBinding161;
  return current.distanceFromBottomPx === conversationSourceBinding160 &&
    current.viewportHeightPx === viewportHeightPx &&
    current.renderedRange.startIndex ===
      conversationSourceBinding162.startIndex &&
    current.renderedRange.endIndex === conversationSourceBinding162.endIndex &&
    turnKeysEqual(current.turnKeys, layout.turnKeys)
    ? current
    : {
        distanceFromBottomPx: conversationSourceBinding160,
        renderedRange: conversationSourceBinding162,
        turnKeys: layout.turnKeys,
        viewportHeightPx,
      };
}
export function rangeContainsRange(
  useConversationSourceOpts45: { startIndex: number; endIndex: number },
  useConversationSourceOpts46: { startIndex: number; endIndex: number },
) {
  return (
    useConversationSourceOpts45.startIndex <=
      useConversationSourceOpts46.startIndex &&
    useConversationSourceOpts45.endIndex >= useConversationSourceOpts46.endIndex
  );
}
export function findMeasuredAnchorKey({
  distanceFromBottomPx,
  layout,
  measuredHeightsByKey,
  nextLayout,
  viewportHeightPx,
}: {
  distanceFromBottomPx: number;
  layout: { turnKeys: string[] };
  measuredHeightsByKey: Record<string, number>;
  nextLayout: { turnIndexByKey: Map<string, number> };
  viewportHeightPx: number;
}) {
  let conversationSourceBinding207 = visibleRangeFromDistance({
    distanceFromBottomPx,
    layout,
    overscanCount: 0,
    viewportHeightPx,
  });
  for (
    let conversationSourceBinding240 = conversationSourceBinding207.startIndex;
    conversationSourceBinding240 < conversationSourceBinding207.endIndex;
    conversationSourceBinding240 += 1
  ) {
    let conversationSourceBinding248 =
      layout.turnKeys[conversationSourceBinding240];
    if (
      conversationSourceBinding248 != null &&
      measuredHeightsByKey[conversationSourceBinding248] != null &&
      nextLayout.turnIndexByKey.has(conversationSourceBinding248)
    )
      return conversationSourceBinding248;
  }
  return null;
}
export function turnKeysEqual(
  useConversationSourceOpts43: readonly string[],
  useConversationSourceOpts44: readonly string[],
) {
  return (
    useConversationSourceOpts43 === useConversationSourceOpts44 ||
    (useConversationSourceOpts43.length ===
      useConversationSourceOpts44.length &&
      useConversationSourceOpts43.every((item, index) => {
        return item === useConversationSourceOpts44[index];
      }))
  );
}
