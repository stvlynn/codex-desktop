// Restored from ref/webview/assets/conversation-source-AkSNVCIa.js
// Conversation source: virtualized turn list, find highlight, summary panel layout, search adapter.
// Stage 3: drained from boundaries/ into semantic conversation/conversation-source modules.
// Re-export barrel for virtualized conversation list helpers.

export {
  createInitialViewportState,
  reconcileViewportState,
  rangeContainsRange,
  findMeasuredAnchorKey,
  turnKeysEqual,
} from "./virtualized-conversation-viewport-helpers";
export {
  readBottomPaddingPx,
  subtractBottomPadding,
  isPinnedNearBottom,
  snapshotRestoreState,
  computeBottomOverflowPx,
  distanceForTurnAlign,
  distanceForTargetElement,
} from "./virtualized-conversation-scroll-helpers";
