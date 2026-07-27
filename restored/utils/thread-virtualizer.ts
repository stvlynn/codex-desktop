// Restored from ref/webview/assets/thread-virtualizer-43g3Bw27.js
// Virtualized thread layout: heights, visible range, and scroll anchoring helpers.

export type ThreadVirtualizerEntry = {
  turnKey: string;
  estimatedHeightPx?: number;
};
export type ThreadVirtualizerLayout = {
  bottomOffsetsPx: number[];
  heightsPx: number[];
  topOffsetsPx: number[];
  totalHeightPx: number;
  turnIndexByKey: Map<string, number>;
  turnKeys: string[];
};
export type ThreadVirtualizerRange = {
  startIndex: number;
  endIndex: number;
};

/** Default estimated turn height when neither measured nor entry estimate exists. */
const DEFAULT_ESTIMATED_TURN_HEIGHT_PX = 280;

/**
 * Preserve a window of the same length as `previousRange`, anchored on `anchorKey`.
 */
export function rangeAroundAnchorKey(options: {
  anchorKey: string;
  layout: ThreadVirtualizerLayout;
  previousRange: ThreadVirtualizerRange;
}): ThreadVirtualizerRange | null {
  const anchorIndex = options.layout.turnIndexByKey.get(options.anchorKey);
  if (anchorIndex == null) return null;
  const span =
    options.previousRange.endIndex - options.previousRange.startIndex;
  return {
    startIndex: anchorIndex,
    endIndex: Math.min(options.layout.turnKeys.length, anchorIndex + span),
  };
}

/**
 * Compute the visible turn index range from distance-from-bottom scroll position.
 */
export function visibleRangeFromDistance(options: {
  distanceFromBottomPx: number;
  layout: ThreadVirtualizerLayout;
  overscanCount: number;
  viewportHeightPx: number;
}): ThreadVirtualizerRange {
  const { layout, overscanCount, viewportHeightPx } = options;
  if (layout.turnKeys.length === 0) {
    return {
      startIndex: 0,
      endIndex: 0,
    };
  }
  const clampedBottom = Math.min(
    Math.max(0, options.distanceFromBottomPx),
    layout.totalHeightPx,
  );
  const clampedTop = Math.min(
    clampedBottom + Math.max(0, viewportHeightPx),
    layout.totalHeightPx,
  );
  const firstVisible = lowerBoundByBottomOffset(
    layout.bottomOffsetsPx,
    clampedTop,
  );
  const lastVisible = upperBoundByBottomEdge(
    layout.bottomOffsetsPx,
    layout.heightsPx,
    clampedBottom,
  );
  return {
    startIndex: Math.max(0, firstVisible - overscanCount),
    endIndex: Math.min(
      layout.turnKeys.length,
      Math.max(lastVisible, firstVisible + 1) + overscanCount,
    ),
  };
}

/**
 * Adjust distance-from-bottom after a layout change so the anchor turn stays put.
 */
export function adjustDistanceAfterLayoutChange(options: {
  anchorKey: string;
  distanceFromBottomPx: number;
  nextLayout: ThreadVirtualizerLayout;
  previousLayout: ThreadVirtualizerLayout;
}): number | null {
  const previousIndex = options.previousLayout.turnIndexByKey.get(
    options.anchorKey,
  );
  const nextIndex = options.nextLayout.turnIndexByKey.get(options.anchorKey);
  if (previousIndex == null || nextIndex == null) return null;
  const previousBottom =
    (options.previousLayout.bottomOffsetsPx[previousIndex] ?? 0) +
    (options.previousLayout.heightsPx[previousIndex] ?? 0);
  const nextBottom =
    (options.nextLayout.bottomOffsetsPx[nextIndex] ?? 0) +
    (options.nextLayout.heightsPx[nextIndex] ?? 0);
  return Math.max(
    0,
    options.distanceFromBottomPx + nextBottom - previousBottom,
  );
}

/** No-op Rolldown ESM init retained for graph compatibility. */
export function initThreadVirtualizer(): void {}

/**
 * Distance-from-bottom that centers `turnKey` in the viewport.
 */
export function distanceFromBottomForTurn(options: {
  layout: ThreadVirtualizerLayout;
  turnKey: string;
  viewportHeightPx: number;
}): number | null {
  const index = options.layout.turnIndexByKey.get(options.turnKey);
  if (index == null) return null;
  return Math.max(
    0,
    (options.layout.bottomOffsetsPx[index] ?? 0) -
      options.viewportHeightPx / 2 +
      (options.layout.heightsPx[index] ?? 0) / 2,
  );
}

/**
 * Build cumulative offsets / heights for a list of thread turns (bottom-anchored).
 */
export function buildThreadVirtualizerLayout(options: {
  entries: ThreadVirtualizerEntry[];
  gapPx: number;
  measuredHeightsByKey: Record<string, number | undefined>;
}): ThreadVirtualizerLayout {
  const heightsPx: number[] = [];
  const topOffsetsPx: number[] = [];
  const turnIndexByKey = new Map<string, number>();
  const turnKeys: string[] = [];
  let totalHeightPx = 0;
  for (const [index, entry] of options.entries.entries()) {
    const turnKey = entry.turnKey;
    const heightPx =
      options.measuredHeightsByKey[turnKey] ??
      entry.estimatedHeightPx ??
      DEFAULT_ESTIMATED_TURN_HEIGHT_PX;
    turnIndexByKey.set(turnKey, index);
    turnKeys.push(turnKey);
    topOffsetsPx.push(totalHeightPx);
    heightsPx.push(heightPx);
    totalHeightPx += heightPx;
    if (index < options.entries.length - 1) {
      totalHeightPx += options.gapPx;
    }
  }
  return {
    bottomOffsetsPx: topOffsetsPx.map(
      (top, index) => totalHeightPx - top - (heightsPx[index] ?? 0),
    ),
    heightsPx,
    topOffsetsPx,
    totalHeightPx,
    turnIndexByKey,
    turnKeys,
  };
}

/** First index whose bottom offset is >= `target` (binary search). */
function lowerBoundByBottomOffset(
  bottomOffsetsPx: number[],
  target: number,
): number {
  let low = 0;
  let high = bottomOffsetsPx.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if ((bottomOffsetsPx[mid] ?? 0) < target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

/** First index whose bottom edge (offset + height) is > `target`. */
function upperBoundByBottomEdge(
  bottomOffsetsPx: number[],
  heightsPx: number[],
  target: number,
): number {
  let low = 0;
  let high = bottomOffsetsPx.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if ((bottomOffsetsPx[mid] ?? 0) + (heightsPx[mid] ?? 0) <= target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}
