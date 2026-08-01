// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-159: compose-jsx-lower deps via direct imports
// (wireComposeJsxLowerBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
const __L =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __G = (rel: string, name: string) => () => (__req(rel) as any)[name];

import {
  workbookBinding1508,
  workbookBinding1509,
  workbookBinding1510,
  workbookBinding1511,
} from "../compose-dsl";
import { mergeComposeStyle } from "../mid-paint-helpers";
import { attachComposeChildren } from "../compose-attach-children";
import { workbookBinding412 } from "../binding662-gate";
import { parseUtilityClassStyles } from "../style-tokens";
import {
  isCssDeclarationText,
  parseTextStyleCssDeclarations,
} from "../text-style";

export type ComposeJsxLowerBoundaryHooks = {
  boxGrid: (...args: any[]) => any;
  boxCol: (...args: any[]) => any;
  boxRow: (...args: any[]) => any;
  bh700: (...args: any[]) => any;
  bh701: (...args: any[]) => any;
  lowerSemanticTag: (...args: any[]) => any;
  isSemanticTag: (...args: any[]) => any;
  ensureUke: () => void;
  ensureBinding1544: () => void;
  ensureBinding1531: () => void;
  ensureBinding412: () => void;
  ensureBinding1539: () => void;
  assertAllowedProps: (...args: any[]) => any;
  panelPropAllowlist: any;
  flattenChildren: (...args: any[]) => any;
  isInlineOrTextChild: (...args: any[]) => any;
  isLoweredKindBag: (...args: any[]) => any;
  resolveTagKind: (...args: any[]) => any;
  styleFromProps: (...args: any[]) => any;
  hasVisualChrome: (...args: any[]) => any;
  createBoxElement: (...args: any[]) => any;
  elementName: (...args: any[]) => any;
  sizeToken: (...args: any[]) => any;
  attachChildren: (...args: any[]) => any;
  createShapeElement: (...args: any[]) => any;
  parseUtilityClassTextStyle: (...args: any[]) => any;
  isCssDeclarationText: (...args: any[]) => any;
  parseTextStyleCssDeclarations: (...args: any[]) => any;
};

export const cjlH: ComposeJsxLowerBoundaryHooks = {
  boxRow: (...args: any[]) => workbookBinding1508(...args),
  boxCol: (...args: any[]) => workbookBinding1509(...args),
  boxGrid: (...args: any[]) => workbookBinding1510(...args),
  bh700: (...args: any[]) => mergeComposeStyle(...args),
  bh701: __L("./jsx-children-normalize-impl", "workbookHelper701"),
  lowerSemanticTag: __L("./semantic-tag-sets-impl", "qOe"),
  isSemanticTag: __L("./semantic-tag-sets-impl", "lke"),
  ensureUke: () => {
    __L("./semantic-tag-props-impl", "uke")();
  },
  ensureBinding1544: () => {
    __L("./semantic-tag-props-impl", "workbookBinding1544")();
  },
  ensureBinding1531: () => {
    __L("./semantic-tag-props-impl", "workbookBinding1531")();
  },
  ensureBinding412: () => {
    workbookBinding412();
  },
  ensureBinding1539: () => {
    __L("./semantic-tag-sets-impl", "ensureSemanticTagSetsInit")();
  },
  assertAllowedProps: __L("./semantic-tags-impl", "assertAllowedProps"),
  get panelPropAllowlist() {
    return __G("./semantic-tag-props-impl", "workbookBinding1545")();
  },
  flattenChildren: __L("./flatten-children-impl", "QOe"),
  isInlineOrTextChild: __L("./jsx-children-normalize-impl", "jOe"),
  isLoweredKindBag: __L("./element-chrome-kind-impl", "cke"),
  resolveTagKind: __L("./tag-kind-merge-impl", "tke"),
  styleFromProps: __L("./semantic-tag-sets-impl", "rke"),
  hasVisualChrome: __L("./element-chrome-kind-impl", "ike"),
  createBoxElement: __L("./create-box-element-impl", "workbookHelper713"),
  elementName: __L("./semantic-tags-impl", "elementName"),
  sizeToken: __L("./semantic-tags-impl", "optionalSize"),
  attachChildren: (...args: any[]) => attachComposeChildren(...args),
  createShapeElement: (...args: any[]) => workbookBinding1511(...args),
  parseUtilityClassTextStyle: (...args: any[]) =>
    parseUtilityClassStyles(...args),
  isCssDeclarationText: (...args: any[]) => isCssDeclarationText(...args),
  parseTextStyleCssDeclarations: (...args: any[]) =>
    parseTextStyleCssDeclarations(...args),
};

/** @deprecated Wave-159: wire leave-behind retired — cjlH uses direct imports. */
export function wireComposeJsxLowerBoundaryHooks(
  _next?: Partial<ComposeJsxLowerBoundaryHooks>,
): void {}
