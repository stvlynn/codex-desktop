// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-97: paint-images boundary hooks.

export type PaintImagesBoundaryHooks = {
  bh603: (...args: any[]) => any;
  bh604: (...args: any[]) => any;
  /** Legacy Binding1254 — decoded ImageBitmap cache. */
  imageBitmapById: Map<any, any>;
  /** Legacy Binding1255 — in-flight decode promises. */
  imageDecodeById: Map<any, any>;
};

export const piH: PaintImagesBoundaryHooks = {} as PaintImagesBoundaryHooks;

export function wirePaintImagesBoundaryHooks(
  next: PaintImagesBoundaryHooks,
): void {
  Object.assign(piH, next);
}
