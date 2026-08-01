// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-158: formula-registry ensures via direct imports
// (wireFormulaRegistryBoundaryHooks leave-behind retired).
// setFormulaImplBag / frBag remain mega-wired until formula impls peel.

import { c8e, g8e, x7e, wot } from "../formula-thin-stubs";
import {
  G8e,
  b5e,
  rot,
  nst,
  Uct,
  Uut,
  workbookBinding1880,
  Ydt,
} from "../formula-date-epoch";
import { Lrt, Nrt, workbookBinding1901, Srt, Ort } from "../formula-bond-basis";

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

export const frH: FormulaRegistryBoundaryHooks = {
  ensureC8e: () => {
    c8e();
  },
  ensureG8eEmpty: () => {
    g8e();
  },
  ensureG8e: () => {
    G8e();
  },
  ensureB5e: () => {
    b5e();
  },
  ensureX7e: () => {
    x7e();
  },
  ensureRot: () => {
    rot();
  },
  ensureWot: () => {
    wot();
  },
  ensureNst: () => {
    nst();
  },
  ensureUct: () => {
    Uct();
  },
  ensureUut: () => {
    Uut();
  },
  ensureBinding1880: () => {
    workbookBinding1880();
  },
  ensureYdt: () => {
    Ydt();
  },
  ensureLrt: () => {
    Lrt();
  },
  ensureNrt: () => {
    Nrt();
  },
  ensureBinding1901: () => {
    workbookBinding1901();
  },
  ensureSrt: () => {
    Srt();
  },
  ensureOrt: () => {
    Ort();
  },
};

/** Live formula impl functions (hoisted `function` decls still in mega). */
export let frBag: Record<string, any> = {};

export function setFormulaImplBag(bag: Record<string, any>): void {
  frBag = bag;
}

/** @deprecated Wave-158: wire leave-behind retired — frH uses direct imports. */
export function wireFormulaRegistryBoundaryHooks(
  _next?: Partial<FormulaRegistryBoundaryHooks>,
): void {}
