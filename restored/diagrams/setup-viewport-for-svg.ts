// Restored from ref/webview/assets/chunk-QN33PNHL-fLNR_LAd.js
// Mermaid helper: configure SVG viewport, viewBox, and dimensions with padding.

import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt-dup";
import {
  c as configureSvgSize,
  k as initMermaidConfig,
} from "./mermaid-config";
type BBox = {
  width: number;
  height: number;
  x: number;
  y: number;
};
type D3Selection = {
  node(): {
    getBBox(): BBox;
  } | null;
  attr(name: string, value: string): D3Selection;
};
type PaddedDimensions = {
  width: number;
  height: number;
  x: number;
  y: number;
};
function calculateDimensionsWithPadding(
  svg: D3Selection,
  padding: number,
): PaddedDimensions {
  const bbox = svg.node()?.getBBox() ?? {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  };
  return {
    width: bbox.width + padding * 2,
    height: bbox.height + padding * 2,
    x: bbox.x,
    y: bbox.y,
  };
}
defineFunctionName(
  calculateDimensionsWithPadding,
  "calculateDimensionsWithPadding",
);
function createViewBox(
  x: number,
  y: number,
  width: number,
  height: number,
  padding: number,
): string {
  return `${x - padding} ${y - padding} ${width} ${height}`;
}
defineFunctionName(createViewBox, "createViewBox");
export function setupViewPortForSVG(
  svg: D3Selection,
  padding: number,
  className: string,
  useMaxWidth: boolean,
): void {
  svg.attr("class", className);
  const { width, height, x, y } = calculateDimensionsWithPadding(svg, padding);
  configureSvgSize(svg, height, width, useMaxWidth);
  const viewBox = createViewBox(x, y, width, height, padding);
  svg.attr("viewBox", viewBox);
  logger.debug(`viewBox configured: ${viewBox} with padding: ${padding}`);
}
defineFunctionName(setupViewPortForSVG, "setupViewPortForSVG");

/** Rolldown ESM init thunk (bundle export `t`). */
export function initSetupViewPortForSvgChunk(): void {
  initMermaidConfig();
  initDayjsLoggerRuntime();
}
