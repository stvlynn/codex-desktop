// Restored from ref/webview/assets/conversation-source-AkSNVCIa.js
// Conversation source: virtualized turn list, find highlight, summary panel layout, search adapter.
// Stage 3: drained from boundaries/ into semantic conversation/conversation-source modules.
// Public barrel + legacy conversationSource* export aliases for consumers.

export { useCoalescedTimeout } from "./use-coalesced-timeout";
export {
  useConversationFindHighlight,
  type ConversationFindHighlightProps,
} from "./conversation-find-highlight";
export {
  VirtualizedConversationList,
  type ConversationSourceListProps,
} from "./virtualized-conversation-list";
export {
  VirtualizedConversationRow,
  MemoizedVirtualizedConversationRow,
  ensureVirtualizedConversationRowMemoInit,
} from "./virtualized-conversation-row";
export {
  createInitialViewportState,
  reconcileViewportState,
  rangeContainsRange,
  findMeasuredAnchorKey,
  turnKeysEqual,
  readBottomPaddingPx,
  subtractBottomPadding,
  isPinnedNearBottom,
  snapshotRestoreState,
  computeBottomOverflowPx,
  distanceForTurnAlign,
  distanceForTargetElement,
} from "./virtualized-conversation-list-helpers";
export { emptyTurnHeightsByKey } from "./virtualized-conversation-list-state";
export {
  resolveSummaryDisplayMode,
  deriveSummaryVisibility,
  computeContentShiftPx,
  closePopoverOnUnmount,
  contentShiftForPinnedWidth,
  animateOrSetMotionValue,
  summaryPanelGutterPx,
  ensureSummaryPanelGutterInit,
} from "./summary-panel-display-helpers";
export {
  useSummaryPanelDisplaySync,
  syncSummaryDisplayFromWidth,
  summaryPanelDisplayAtom,
  ensureSummaryPanelDisplayAtomInit,
  defaultSummaryDisplayState,
} from "./summary-panel-display-atom";
export {
  useSummaryContentShift,
  ensureSummaryPanelDisplayRuntimeInit,
} from "./use-summary-content-shift";
export {
  createConversationSearchAdapter,
  type ConversationSearchAdapter,
  ensureConversationSearchMaxMatchesInit,
  conversationSearchMaxMatches,
  searchConversationTurns,
} from "./conversation-search-adapter";

/** Legacy bundle export aliases — keep consumer import paths stable. */
export { useConversationFindHighlight as conversationSourceD } from "./conversation-find-highlight";
export { VirtualizedConversationList as conversationSourceC } from "./virtualized-conversation-list";
export { useSummaryPanelDisplaySync as conversationSourceA } from "./summary-panel-display-atom";
export { useSummaryContentShift as conversationSourceI } from "./use-summary-content-shift";
export { createConversationSearchAdapter as conversationSourceT } from "./conversation-search-adapter";
export {
  summaryPanelDisplayAtom as conversationSourceS,
  ensureSummaryPanelDisplayAtomInit as conversationSourceO,
} from "./summary-panel-display-atom";
export { ensureSummaryPanelDisplayRuntimeInit as conversationSourceR } from "./use-summary-content-shift";
export { ensureVirtualizedConversationRowMemoInit as conversationSourceL } from "./virtualized-conversation-row";
export { ensureConversationSearchMaxMatchesInit as conversationSourceN } from "./conversation-search-adapter";

/** Bundle export `U` — unused placeholder retained for IMPORT_MAP parity. */
export const conversationSourceU: undefined = undefined;
export const conversationSourceUnusedExport: undefined = undefined;
