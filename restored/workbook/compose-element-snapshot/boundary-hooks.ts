// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-103/106: compose-element-snapshot boundary hooks.

export type ComposeElementSnapshotBoundaryHooks = {
  bh681: (...args: any[]) => any;
  /** Bbox tuple from frame (legacy bh682). */
  bh682: (...args: any[]) => any;
  bh683: (...args: any[]) => any;
  bh684: (...args: any[]) => any;
  bh686: (...args: any[]) => any;
  bh688: (...args: any[]) => any;
  bh689: (...args: any[]) => any;
  bh695: (...args: any[]) => any;
  bh696: (...args: any[]) => any;
  /** Flatten run style (legacy rOe). */
  runPlain: (...args: any[]) => any;
  paragraphsFromElement: (...args: any[]) => any; // $De
  tableCellsFromElement: (...args: any[]) => any; // iOe
  cellsPreview: (...args: any[]) => any; // aOe
  protoText: (...args: any[]) => any; // eOe
  cellsBbox: (...args: any[]) => any; // GDe
  mapKind: (...args: any[]) => any; // UDe
  geometrySnapshot: (...args: any[]) => any; // TOe
  resolvedFontSize: (...args: any[]) => any; // KDe
  resolvedTextStyle: (...args: any[]) => any; // qDe
  fillColor: (...args: any[]) => any; // SOe
  lineColor: (...args: any[]) => any; // COe
  lineWidth: (...args: any[]) => any; // wOe
  imageCrop: (...args: any[]) => any; // LDe
  imageFit: (...args: any[]) => any; // RDe
  imageMask: (...args: any[]) => any; // zDe
  assetRef: (...args: any[]) => any; // gOe
  fillImage: (...args: any[]) => any; // _Oe
  tableElementClass: any; // _workbookM
};

export const cesH: ComposeElementSnapshotBoundaryHooks =
  {} as ComposeElementSnapshotBoundaryHooks;

export function wireComposeElementSnapshotBoundaryHooks(
  next: ComposeElementSnapshotBoundaryHooks,
): void {
  Object.assign(cesH, next);
}
