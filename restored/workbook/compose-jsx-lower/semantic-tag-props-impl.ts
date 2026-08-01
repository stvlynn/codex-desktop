// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation-jsx symbols + semantic-tag prop allowlists
// (legacy Binding1531 / Binding1544 / uke).
// Stage-3 wave-153.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureComposeDslAggregatorInit } from "../compose-dsl";
import { ensureShapeUtilityInit } from "../shape-utility";
import { ensureDetachedTextHelpersInit } from "../detached-text";
import { ensureStyleTokensInit } from "../style-tokens";
import { ensureSemanticTagSetsInit } from "./semantic-tag-sets-impl";
import { cjlH } from "./boundary-hooks";

export let workbookBinding1529: symbol;
export let workbookBinding1530: symbol;

export const workbookBinding1531 = esmInit(() => {
      workbookBinding1529 = Symbol.for("@oai/granola/presentation-jsx.element");
      workbookBinding1530 = Symbol.for("@oai/granola/presentation-jsx.fragment");
});

export function ensureBinding1531Init(): void {
  workbookBinding1531();
}

export let workbookBinding1540: any;
export let workbookBinding1541: Set<string>;
export let workbookBinding1542: Set<string>;
export let workbookBinding1543: Set<string>;

export const workbookBinding1544 = esmInit(() => {
  ensureDetachedTextHelpersInit();
  cjlH.ensureBinding412();
  ensureStyleTokensInit();
  workbookBinding1531();
  ensureSemanticTagSetsInit();
      workbookBinding1540 = {
        fontSize: 14,
        lineSpacing: 1.3,
      };
      workbookBinding1541 = new Set([
        "runs",
        "bulletCharacter",
        "marginLeft",
        "indent",
        "spaceBefore",
        "spaceAfter",
        "styleId",
        "paragraphStyle",
      ]);
      workbookBinding1542 = new Set([
        ...workbookBinding1541,
        "children",
        "className",
        "textStyle",
      ]);
      workbookBinding1543 = new Set([
        "children",
        "className",
        "textStyle",
        "href",
        "link",
        "underline",
      ]);
});

export function ensureBinding1544Init(): void {
  workbookBinding1544();
}

export let workbookBinding1545: Set<string>;
export let workbookBinding1546: Set<string>;
export let workbookBinding1547: Set<string>;
export let workbookBinding1548: Set<string>;

export const uke = esmInit(() => {
  ensureComposeDslAggregatorInit();
  ensureShapeUtilityInit();
  workbookBinding1531();
  ensureSemanticTagSetsInit();
  workbookBinding1544();
      workbookBinding1545 = new Set(
        "name.id.className.children.ref.layout.display.contentLayout.surface.width.height.gap.align.justify.padding.columns.rows.autoRows.columnGap.rowGap.alignItems.justifyItems.columnSpan.rowSpan.fill.line.borderRadius.shadow".split(
          ".",
        ),
      );
      workbookBinding1546 = new Set([
        "name",
        "id",
        "className",
        "children",
        "ref",
        "width",
        "height",
        "columnSpan",
        "rowSpan",
        "style",
        "transform",
        "bulletCharacter",
        "marginLeft",
        "indent",
        "spaceBefore",
        "spaceAfter",
        "styleId",
        "paragraphStyle",
      ]);
      workbookBinding1547 = new Set([
        "name",
        "id",
        "className",
        "children",
        "ref",
        "width",
        "height",
        "columnSpan",
        "rowSpan",
        "src",
        "path",
        "dataUrl",
        "blob",
        "uri",
        "prompt",
        "contentType",
        "fit",
        "alt",
        "geometry",
        "borderRadius",
        "crop",
        "rotation",
        "flipHorizontal",
        "flipVertical",
        "lockAspectRatio",
      ]);
      workbookBinding1548 = new Set([
        "name",
        "id",
        "children",
        "ref",
        "width",
        "height",
        "columnSpan",
        "rowSpan",
        "stroke",
        "opacity",
        "weight",
      ]);
});

export function ensureUkeInit(): void {
  uke();
}
