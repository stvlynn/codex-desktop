// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-86: boundary deps for formula-registry
// (formula impl ensures + live function bag for registry values).

export type FormulaRegistryBoundaryHooks = {
  ensureC8e: () => void;
  ensureG8eEmpty: () => void;
  ensureG8e: () => void;
  ensureB5e: () => void;
  ensureX7e: () => void;
  ensureRot: () => void;
  ensureWot: () => void;
  ensureNst: () => void;
  ensureUct: () => void;
  ensureUut: () => void;
  ensureBinding1880: () => void;
  ensureYdt: () => void;
  ensureLrt: () => void;
  ensureNrt: () => void;
  ensureBinding1901: () => void;
  ensureSrt: () => void;
  ensureOrt: () => void;
};

/** Live bag for intentional leave-behind ensures. */
export const frH: FormulaRegistryBoundaryHooks =
  {} as FormulaRegistryBoundaryHooks;

/** Live formula impl functions (hoisted `function` decls in boundary). */
export let frBag: Record<string, any> = {};

export function setFormulaImplBag(bag: Record<string, any>): void {
  frBag = bag;
}

export function wireFormulaRegistryBoundaryHooks(
  next: FormulaRegistryBoundaryHooks,
): void {
  frH.ensureC8e = next.ensureC8e;
  frH.ensureG8eEmpty = next.ensureG8eEmpty;
  frH.ensureG8e = next.ensureG8e;
  frH.ensureB5e = next.ensureB5e;
  frH.ensureX7e = next.ensureX7e;
  frH.ensureRot = next.ensureRot;
  frH.ensureWot = next.ensureWot;
  frH.ensureNst = next.ensureNst;
  frH.ensureUct = next.ensureUct;
  frH.ensureUut = next.ensureUut;
  frH.ensureBinding1880 = next.ensureBinding1880;
  frH.ensureYdt = next.ensureYdt;
  frH.ensureLrt = next.ensureLrt;
  frH.ensureNrt = next.ensureNrt;
  frH.ensureBinding1901 = next.ensureBinding1901;
  frH.ensureSrt = next.ensureSrt;
  frH.ensureOrt = next.ensureOrt;
}
