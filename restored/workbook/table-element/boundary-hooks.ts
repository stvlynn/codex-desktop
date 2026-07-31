// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-84: boundary deps for table-element
// (YEe/Binding1321/QEe/$Ee/Binding1330 leave-behinds).

export type TableElementBoundaryHooks = {
  /** Legacy YEe ensure (seeds Binding1316 table row). */
  ensureYEe: () => void;
  /** Legacy Binding1321 ensure (seeds Binding1317 table range). */
  ensureBinding1321: () => void;
  /** Legacy QEe ensure (seeds Binding1323 columns). */
  ensureQEe: () => void;
  /** Legacy $Ee ensure (seeds Binding1324 borders). */
  ensureDollarEe: () => void;
  /** Compose tracks ensure (legacy Binding1330 — seeds Binding1327). */
  ensureBinding1330: () => void;
  /** Table row class (legacy Binding1316). */
  Binding1316: any;
  /** Table range class (legacy Binding1317). */
  Binding1317: any;
  /** Table columns class (legacy Binding1323). */
  Binding1323: any;
  /** Table borders class (legacy Binding1324). */
  Binding1324: any;
  /** Compose track normalizer (legacy Binding1327). */
  Binding1327: any;
};

/** Live bag for intentional leave-behind ensures/classes. */
export const teH: TableElementBoundaryHooks = {} as TableElementBoundaryHooks;

export function wireTableElementBoundaryHooks(
  next: TableElementBoundaryHooks,
): void {
  teH.ensureYEe = next.ensureYEe;
  teH.ensureBinding1321 = next.ensureBinding1321;
  teH.ensureQEe = next.ensureQEe;
  teH.ensureDollarEe = next.ensureDollarEe;
  teH.ensureBinding1330 = next.ensureBinding1330;
  Object.defineProperty(teH, "Binding1316", {
    get: () => next.Binding1316,
    configurable: true,
  });
  Object.defineProperty(teH, "Binding1317", {
    get: () => next.Binding1317,
    configurable: true,
  });
  Object.defineProperty(teH, "Binding1323", {
    get: () => next.Binding1323,
    configurable: true,
  });
  Object.defineProperty(teH, "Binding1324", {
    get: () => next.Binding1324,
    configurable: true,
  });
  Object.defineProperty(teH, "Binding1327", {
    get: () => next.Binding1327,
    configurable: true,
  });
}
