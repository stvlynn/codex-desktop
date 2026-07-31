// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-104: icon-set-paint boundary hooks.

export type IconSetPaintBoundaryHooks = {
  /** Rating bars painter (helper595). */
  paintRatingBars: (...args: any[]) => any;
  /** Shared path stroke helper (helper596). */
  strokeIconPath: (...args: any[]) => any;
  /** Shared fill helper (helper597). */
  fillIconShape: (...args: any[]) => any;
  /** Clip helper (helper598). */
  withIconClip: (...args: any[]) => any;
  /** Restore helper (helper599). */
  endIconClip: (...args: any[]) => any;
};

export const ispH: IconSetPaintBoundaryHooks = {} as IconSetPaintBoundaryHooks;

export function wireIconSetPaintBoundaryHooks(
  next: IconSetPaintBoundaryHooks,
): void {
  Object.assign(ispH, next);
}
