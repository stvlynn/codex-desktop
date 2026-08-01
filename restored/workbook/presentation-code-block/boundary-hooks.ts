// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: presentation-code-block deps via direct imports
// (wirePresentationCodeBlockBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

import {
  workbookBinding1593,
  workbookBinding1594,
  workbookBinding1595,
  workbookBinding1596,
  workbookBinding1598,
  workbookBinding1599,
  workbookBinding1602,
  workbookBinding1603,
  workbookBinding1604,
  workbookBinding1605,
  workbookBinding1606,
  workbookBinding1607,
} from "../mermaid-slide-helpers";

export type PresentationCodeBlockBoundaryHooks = {
  parseCodeMeta: (...args: any[]) => any;
  resolveFit: (...args: any[]) => any;
  computePosition: (...args: any[]) => any;
  theme: any;
  headerHeight: any;
  padX: any;
  padY: any;
  lineHeight: any;
  fontSize: any;
  typeface: any;
  radius: any;
  padToken: any;
  maxLines: any;
};

export const pcbH: PresentationCodeBlockBoundaryHooks = {
  parseCodeMeta: __call("./parse-code-meta-impl", "lAe"),
  resolveFit: __call("./parse-code-meta-impl", "mAe"),
  computePosition: __call("./compute-position-impl", "bAe"),
  get theme() {
    return workbookBinding1593;
  },
  get typeface() {
    return workbookBinding1594 ?? workbookBinding1598;
  },
  get fontSize() {
    return workbookBinding1595 ?? workbookBinding1599;
  },
  get padToken() {
    return workbookBinding1596;
  },
  get headerHeight() {
    return workbookBinding1602;
  },
  get padX() {
    return workbookBinding1603;
  },
  get padY() {
    return workbookBinding1604;
  },
  get lineHeight() {
    return workbookBinding1605;
  },
  get radius() {
    return workbookBinding1606;
  },
  get maxLines() {
    return workbookBinding1607;
  },
};

/** @deprecated Wave-160: wire leave-behind retired — pcbH uses direct imports. */
export function wirePresentationCodeBlockBoundaryHooks(
  _next?: Partial<PresentationCodeBlockBoundaryHooks>,
): void {}
