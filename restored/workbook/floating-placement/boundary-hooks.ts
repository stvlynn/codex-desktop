// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-105/137: floating-placement boundary hooks.

export type FloatingPlacementBoundaryHooks = {
  bh640: (...args: any[]) => any;
  /** Lookup anchor paragraph alignment (legacy kTe). */
  paragraphAlignment: (...args: any[]) => any;
  /** Whether paragraph is vertically centered (legacy ATe). */
  isParagraphVCenter: (...args: any[]) => any;
};

export const fpH: FloatingPlacementBoundaryHooks =
  {} as FloatingPlacementBoundaryHooks;

export function wireFloatingPlacementBoundaryHooks(
  next: FloatingPlacementBoundaryHooks,
): void {
  Object.assign(fpH, next);
}
