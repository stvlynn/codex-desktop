// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-81: boundary deps for slides-collection
// (Binding1312 ensure + local-id allocator leave-behinds).

export type SlidesCollectionBoundaryHooks = {
  /** Legacy workbookBinding1312 ensure (Binding1306/1309/WEe leave-behind). */
  ensureBinding1312: () => void;
  /** Legacy local-id allocator (Binding1311/UEe leave-behind). */
  allocateLocalId: (...args: any[]) => any;
};

/** Live bag for intentional leave-behind ensures/helpers. */
export const scH: SlidesCollectionBoundaryHooks =
  {} as SlidesCollectionBoundaryHooks;

export function wireSlidesCollectionBoundaryHooks(
  next: SlidesCollectionBoundaryHooks,
): void {
  scH.ensureBinding1312 = next.ensureBinding1312;
  scH.allocateLocalId = next.allocateLocalId;
}
