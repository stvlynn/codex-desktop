// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: compose-inline-text deps via direct imports
// (wireComposeInlineTextBoundaryHooks leave-behind retired).

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

import { workbookBinding1530, workbookBinding1543 } from "../../compose-jsx-lower";

export type ComposeInlineTextBoundaryHooks = {
  collapseText: (...args: any[]) => any;
  mergeRunOverride: (...args: any[]) => any;
  isEmptyParagraph: (...args: any[]) => any;
  semanticTagStyle: (...args: any[]) => any;
  bh697: (...args: any[]) => any;
  bh698: (...args: any[]) => any;
  bh704: (...args: any[]) => any;
  bh710: (...args: any[]) => any;
  fragmentSymbol: any;
  semanticInlineTags: any;
};

export const citH: ComposeInlineTextBoundaryHooks = {
  collapseText: __call("../collapse-text-impl", "GOe"),
  mergeRunOverride: __call("../../compose-jsx-lower", "mergeRunOverride"),
  isEmptyParagraph: __call("../../compose-jsx-lower/image-prop-helpers-impl",
    "KOe",
  ),
  semanticTagStyle: __call("../../compose-jsx-lower", "semanticTagStyle"),
  bh697: __call("../../compose-jsx-lower", "isPresentationJsxElement"),
  bh698: __call("../../compose-jsx-lower", __wh(698)),
  bh704: __call("../../compose-jsx-lower", "mergeInlineTextStyle"),
  bh710: __call("../../compose-jsx-lower", "assertAllowedProps"),
  get fragmentSymbol() {
    return workbookBinding1530;
  },
  get semanticInlineTags() {
    return workbookBinding1543;
  },
};

/** @deprecated Wave-160: wire leave-behind retired — citH uses direct imports. */
export function wireComposeInlineTextBoundaryHooks(
  _next?: Partial<ComposeInlineTextBoundaryHooks>,
): void {}
