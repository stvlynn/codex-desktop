// Restored from ref/webview/assets/chunk-TZMSLE5B-CaTfcsvn.js
// Mermaid SVG drawing helpers: rects, legend text, images, note defaults.

import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt-dup";
import {
  A as lineBreakRegex,
  k as initMermaidConfigChunk,
} from "./mermaid-config";
import { dist as sanitizeUrlModule } from "../vendor/sanitize-url";
type SvgSelection = {
  append: (tag: string) => SvgSelection;
  attr: (name: string, value: string | number) => SvgSelection;
  style: (name: string, value: string) => SvgSelection;
  text: (value: string) => SvgSelection;
  lower: () => SvgSelection;
};
export type DrawRectOptions = {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  name?: string;
  rx?: number;
  ry?: number;
  class?: string;
  attrs?: Record<string, string | number>;
};
export type DrawBackgroundRectOptions = {
  startx: number;
  starty: number;
  stopx: number;
  stopy: number;
  fill: string;
  stroke: string;
};
export type DrawTextOptions = {
  text: string;
  x: number;
  y: number;
  anchor: string;
  textMargin: number;
  class?: string;
};
export function drawRect(
  parent: SvgSelection,
  options: DrawRectOptions,
): SvgSelection {
  const rect = parent.append("rect");
  rect.attr("x", options.x);
  rect.attr("y", options.y);
  rect.attr("fill", options.fill);
  rect.attr("stroke", options.stroke);
  rect.attr("width", options.width);
  rect.attr("height", options.height);
  if (options.name) rect.attr("name", options.name);
  if (options.rx) rect.attr("rx", options.rx);
  if (options.ry) rect.attr("ry", options.ry);
  if (options.attrs !== undefined) {
    for (const key in options.attrs) {
      rect.attr(key, options.attrs[key]!);
    }
  }
  if (options.class) rect.attr("class", options.class);
  return rect;
}
export function drawBackgroundRect(
  parent: SvgSelection,
  options: DrawBackgroundRectOptions,
): void {
  drawRect(parent, {
    x: options.startx,
    y: options.starty,
    width: options.stopx - options.startx,
    height: options.stopy - options.starty,
    fill: options.fill,
    stroke: options.stroke,
    class: "rect",
  }).lower();
}
export function drawText(
  parent: SvgSelection,
  options: DrawTextOptions,
): SvgSelection {
  const sanitized = options.text.replace(lineBreakRegex as RegExp, " ");
  const text = parent.append("text");
  text.attr("x", options.x);
  text.attr("y", options.y);
  text.attr("class", "legend");
  text.style("text-anchor", options.anchor);
  if (options.class) text.attr("class", options.class);
  const tspan = text.append("tspan");
  tspan.attr("x", options.x + options.textMargin * 2);
  tspan.text(sanitized);
  return text;
}
let sanitizeUrl: (url: string) => string = (url) => url;
export function drawImage(
  parent: SvgSelection,
  x: number,
  y: number,
  href: string,
): void {
  const image = parent.append("image");
  image.attr("x", x);
  image.attr("y", y);
  image.attr("xlink:href", sanitizeUrl(href));
}
export function drawEmbeddedImage(
  parent: SvgSelection,
  x: number,
  y: number,
  href: string,
): void {
  const use = parent.append("use");
  use.attr("x", x);
  use.attr("y", y);
  use.attr("xlink:href", `#${sanitizeUrl(href)}`);
}
export function getNoteRect(): DrawRectOptions & {
  anchor: string;
} {
  return {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: "#EDF2AE",
    stroke: "#666",
    anchor: "start",
    rx: 0,
    ry: 0,
  };
}
export function getTextObj(): Record<string, string | number | boolean> {
  return {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    "text-anchor": "start",
    style: "#666",
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: true,
  };
}
defineFunctionName(drawRect, "drawRect");
defineFunctionName(drawBackgroundRect, "drawBackgroundRect");
defineFunctionName(drawText, "drawText");
defineFunctionName(drawImage, "drawImage");
defineFunctionName(drawEmbeddedImage, "drawEmbeddedImage");
defineFunctionName(getNoteRect, "getNoteRect");
defineFunctionName(getTextObj, "getTextObj");

/** Rolldown ESM init thunk (bundle export `c`). */
export function initSvgDrawingHelpersChunk(): void {
  initMermaidConfigChunk();
  initDayjsLoggerRuntime();
  sanitizeUrl = sanitizeUrlModule().sanitizeUrl;
}

// Original short export aliases for mermaid consumers.
export {
  drawText as a,
  initSvgDrawingHelpersChunk as c,
  drawRect as i,
  drawEmbeddedImage as n,
  getNoteRect as o,
  drawImage as r,
  getTextObj as s,
  drawBackgroundRect as t,
};
