// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation JSX semantic-tag Sets + qOe/rke/lke nest.
// Stage-3 wave-135 — unlocks Binding1536/1538 leave-behind for qOe.

import { lowerPanelSurfaceTag as JOe } from "./lower-panel-impl";
import {
  lowerListTag as YOe,
  lowerImgTag as XOe,
  lowerHrTag as ZOe,
  optionalString as workbookHelper718,
} from "./semantic-tags-impl";
import { parseShapeUtilityClasses as workbookHelper304 } from "../shape-utility";

export const PANEL_SURFACE_TAGS = [
  "div",
  "section",
  "article",
  "aside",
  "header",
  "footer",
  "figure",
  "nav",
  "stack",
  "vstack",
  "hstack",
  "surface",
] as const;

export const INLINE_TAGS = ["span", "em", "u", "a", "br"] as const;
export const LIST_TAGS = ["ul", "ol", "li"] as const;
export const MEDIA_TAGS = ["img", "hr"] as const;

export let workbookBinding1536: Set<string>;
export let workbookBinding1537: Set<string>;
export let workbookBinding1538: Set<string>;

let tagSetsInited = false;
export function ensureSemanticTagSetsInit(): void {
  if (tagSetsInited) return;
  tagSetsInited = true;
  workbookBinding1536 = new Set(PANEL_SURFACE_TAGS);
  workbookBinding1537 = new Set(INLINE_TAGS);
  workbookBinding1538 = new Set([
    ...PANEL_SURFACE_TAGS,
    ...INLINE_TAGS,
    ...LIST_TAGS,
    ...MEDIA_TAGS,
  ]);
}

export function kOe(cjlIn15578: any) {
  ensureSemanticTagSetsInit();
  return workbookBinding1536.has(cjlIn15578);
}
export function workbookHelper698(cjlIn15607: any) {
  ensureSemanticTagSetsInit();
  return workbookBinding1537.has(cjlIn15607);
}
export function workbookHelper699(cjlIn15608: any) {
  ensureSemanticTagSetsInit();
  return workbookBinding1538.has(cjlIn15608);
}
export function lke(cjlIn15749: any) {
  return workbookHelper699(cjlIn15749);
}

export function qOe(cjlIn3874: any, cjlIn3875: any) {
  ensureSemanticTagSetsInit();
  if (typeof cjlIn3874.type != "string" || !workbookHelper699(cjlIn3874.type))
    throw Error("Unsupported semantic presentation JSX tag.");
  if (kOe(cjlIn3874.type)) return JOe(cjlIn3874.type, cjlIn3874, cjlIn3875);
  if (cjlIn3874.type === "ul" || cjlIn3874.type === "ol")
    return YOe(cjlIn3874.type, cjlIn3874, cjlIn3875);
  if (cjlIn3874.type === "li")
    throw Error("<li> is only valid inside <ul> or <ol>.");
  if (cjlIn3874.type === "img") return XOe(cjlIn3874, cjlIn3875);
  if (cjlIn3874.type === "hr") return ZOe(cjlIn3874, cjlIn3875);
  throw Error(`Unsupported semantic presentation JSX tag <${cjlIn3874.type}>.`);
}

export function rke(cjlIn7282: any) {
  let cjlBind17660 = workbookHelper718(cjlIn7282.className, "`className`"),
    cjlBind17661 = cjlBind17660 ? workbookHelper304(cjlBind17660) : null;
  return {
    fill: cjlIn7282.fill ?? cjlBind17661?.fill,
    line: cjlIn7282.line,
    borderRadius: cjlIn7282.borderRadius ?? cjlBind17661?.borderRadius,
    shadow: cjlIn7282.shadow ?? cjlBind17661?.shadow,
  };
}
/** Compat alias for barrels. */
export const workbookFn698 = workbookHelper698;
/** Compat alias for barrels. */
export const workbookFn699 = workbookHelper699;
