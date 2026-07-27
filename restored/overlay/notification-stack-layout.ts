// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Collapsed notification-stack card layout math (`zge` / `Mge` / `Nge`).

export type NotificationStackScaleStep = {
  offsetY: number;
  scaleX: number;
  scaleY: number;
};

/**
 * Scale / offset steps for stacked notification cards (`zge` / export `sgt`).
 */
export const NOTIFICATION_STACK_SCALE_STEPS: readonly NotificationStackScaleStep[] =
  [
    { offsetY: 0, scaleX: 1, scaleY: 1 },
    { offsetY: 23, scaleX: 0.918, scaleY: 0.78 },
    { offsetY: 30, scaleX: 268 / 310, scaleY: 44 / 56 },
  ];

/** Default card height used by layout helpers (`54`). */
export const NOTIFICATION_STACK_BASE_CARD_HEIGHT = 54;

/** Bundle `Pge` (co-located). */
export function notificationStackOffsetY(height: number, step: NotificationStackScaleStep): number {
  return (
    step.offsetY +
    (height - NOTIFICATION_STACK_BASE_CARD_HEIGHT) * (1 - step.scaleY)
  );
}

/**
 * Bundle `Mge` / export `ugt`.
 * Total height occupied by `count` stacked cards (minimum `minHeight`).
 */
export function notificationStackContentHeight(count: number, minHeight: number = NOTIFICATION_STACK_BASE_CARD_HEIGHT): number {
  if (count <= 0) return 0;
  const step =
    NOTIFICATION_STACK_SCALE_STEPS[
      Math.min(count, NOTIFICATION_STACK_SCALE_STEPS.length) - 1
    ]!;
  return Math.max(
    minHeight,
    notificationStackOffsetY(minHeight, step) + minHeight * step.scaleY,
  );
}

export type RectLike = {
  height: number;
  left: number;
  top: number;
  width: number;
};

/**
 * Bundle `Nge` / export `dgt`.
 * Apply a stack scale step to a card rect (centered horizontally).
 */
export function scaleNotificationStackRect(rect: RectLike, step: NotificationStackScaleStep): RectLike {
  const width = rect.width * step.scaleX;
  return {
    height: rect.height * step.scaleY,
    left: rect.left + (rect.width - width) / 2,
    top: rect.top + notificationStackOffsetY(rect.height, step),
    width,
  };
}
