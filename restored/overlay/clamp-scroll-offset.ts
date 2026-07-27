// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Clamp a scroll offset into the scrollable range (`Fge` / export `lgt`).

export type ClampScrollOffsetProps = {
  contentHeight: number;
  deltaY: number;
  scrollOffset: number;
  viewportHeight: number;
};

/**
 * Bundle `Fge` / export `lgt`.
 * `scrollOffset + deltaY`, clamped to `[0, max(0, contentHeight - viewportHeight)]`.
 */
export function clampScrollOffset({
  contentHeight,
  deltaY,
  scrollOffset,
  viewportHeight,
}: ClampScrollOffsetProps): number {
  return Math.max(
    0,
    Math.min(
      scrollOffset + deltaY,
      Math.max(0, contentHeight - viewportHeight),
    ),
  );
}
