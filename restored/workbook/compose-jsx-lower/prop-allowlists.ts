// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-93: compose JSX prop allowlists (legacy Cke).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureComposeDslAggregatorInit } from "../compose-dsl";
import { ensureShapeUtilityInit } from "../shape-utility";
import { ensureChartJsxPropAllowlistsInit } from "../chart-jsx-lower";
import { cjlH } from "./boundary-hooks";

export let workbookBinding1574: Set<string>;
export let workbookBinding1575: Set<string>;
export let workbookBinding1576: Set<string>;
export let workbookBinding1577: Set<string>;
export let workbookBinding1578: Set<string>;
export let workbookBinding1579: Set<string>;
export let workbookBinding1580: Set<string>;
export let workbookBinding1581: Set<string>;
export let workbookBinding1582: Set<string>;
export let workbookBinding1583: Set<string>;
export let workbookBinding1584: Set<string>;
export let workbookBinding1585: Set<string>;
export let workbookBinding1586: Set<string>;
export let workbookBinding1587: Set<string>;
export let workbookBinding1588: Set<string>;
export let $Y: Set<string>;
export let workbookBinding1589: Set<string>;

export const ensureComposeJsxPropAllowlistsInit = esmInit(() => {
  ensureComposeDslAggregatorInit();
  ensureShapeUtilityInit();
  cjlH.ensureUke();
  cjlH.ensureBinding1544();
  cjlH.ensureBinding1531();
  ensureChartJsxPropAllowlistsInit();
  workbookBinding1574 = new Set([
    "text",
    "rule",
    "shape",
    "connector",
    "image",
    "table",
    "chart",
    "panel",
    "layers",
    "row",
    "column",
    "grid",
  ]);
  workbookBinding1575 = new Set([
    "text",
    "rule",
    "shape",
    "connector",
    "image",
    "table",
    "chart",
    "panel",
  ]);
  workbookBinding1576 = new Set([
    "name",
    "id",
    "width",
    "height",
    "position",
    "gap",
    "align",
    "justify",
    "padding",
    "columnSpan",
    "rowSpan",
    "children",
  ]);
  workbookBinding1577 = new Set(workbookBinding1576);
  workbookBinding1578 = new Set([
    "name",
    "id",
    "width",
    "height",
    "position",
    "alignItems",
    "justifyItems",
    "padding",
    "columnSpan",
    "rowSpan",
    "children",
  ]);
  workbookBinding1579 = new Set([
    "name",
    "id",
    "width",
    "height",
    "position",
    "columns",
    "rows",
    "autoRows",
    "columnGap",
    "rowGap",
    "alignItems",
    "justifyItems",
    "padding",
    "columnSpan",
    "rowSpan",
    "children",
  ]);
  workbookBinding1580 = new Set([
    "name",
    "id",
    "width",
    "height",
    "position",
    "columnSpan",
    "rowSpan",
    "fill",
    "line",
    "borderRadius",
    "shadow",
    "align",
    "justify",
    "className",
    "padding",
    "children",
    "ref",
  ]);
  workbookBinding1581 = new Set([
    "name",
    "id",
    "width",
    "height",
    "position",
    "columnSpan",
    "rowSpan",
    "style",
    "shadow",
    "className",
    "transform",
    "children",
    "ref",
  ]);
  workbookBinding1582 = new Set([
    ...workbookBinding1581,
    "runs",
    "bulletCharacter",
    "marginLeft",
    "indent",
    "spaceBefore",
    "spaceAfter",
    "styleId",
    "paragraphStyle",
  ]);
  workbookBinding1583 = new Set([
    "name",
    "id",
    "width",
    "height",
    "position",
    "columnSpan",
    "rowSpan",
    "geometry",
    "customPaths",
    "fill",
    "line",
    "className",
    "borderRadius",
    "shadow",
    "ref",
  ]);
  workbookBinding1584 = new Set([
    "name",
    "id",
    "width",
    "height",
    "position",
    "columnSpan",
    "rowSpan",
    "kind",
    "orientation",
    "from",
    "to",
    "fromElement",
    "toElement",
    "fromSide",
    "toSide",
    "fromIdx",
    "toIdx",
    "line",
    "head",
    "tail",
    "cap",
    "join",
    "ref",
  ]);
  workbookBinding1585 = new Set([
    "name",
    "id",
    "width",
    "height",
    "position",
    "columnSpan",
    "rowSpan",
    "src",
    "path",
    "dataUrl",
    "blob",
    "uri",
    "prompt",
    "fit",
    "alt",
    "geometry",
    "borderRadius",
    "crop",
    "contentType",
    "rotation",
    "flipHorizontal",
    "flipVertical",
    "lockAspectRatio",
    "ref",
  ]);
  workbookBinding1586 = new Set([
    "name",
    "id",
    "width",
    "height",
    "position",
    "columnSpan",
    "rowSpan",
    "rows",
    "columns",
    "values",
    "columnWidths",
    "columnTracks",
    "style",
    "styleOptions",
    "ref",
  ]);
  workbookBinding1587 = new Set([
    "name",
    "id",
    "width",
    "height",
    "position",
    "columnSpan",
    "rowSpan",
    "stroke",
    "opacity",
    "weight",
    "ref",
  ]);
  workbookBinding1588 = new Set(["textStyle", "link", "children"]);
  $Y = new Set(["left", "top", "right", "bottom", "width", "height"]);
  workbookBinding1589 = new Set([
    "row",
    "column",
    "layers",
    "group",
    "grid",
    "box",
    "panel",
    "card",
    "text-box",
    "text",
    "paragraph",
    "shape",
    "image",
    "table",
    "chart",
    "rule",
  ]);
});

export const Cke = ensureComposeJsxPropAllowlistsInit;
