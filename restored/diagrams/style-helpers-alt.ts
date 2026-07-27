// Restored from ref/webview/assets/chunk-X2U36JSP-CWOrW9Mm.js
// Mermaid style helpers: hand-drawn fills, style maps, and node overrides.

import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../utils/dayjs-core-alt";
import {
  A as initMermaidConfigChunk,
  b as getConfig,
} from "./mermaid-config-alt";
export type StylePair = [string, string];
export type NodeStyleSources = {
  cssCompiledStyles?: string[];
  cssStyles?: string[];
  labelStyle?: string[];
};
export type CompiledStyles = {
  stylesMap: Map<string, string>;
  stylesArray: StylePair[];
};
export type StylesToStringResult = {
  labelStyles: string;
  nodeStyles: string;
  stylesArray: StylePair[];
  borderStyles: string[];
  backgroundStyles: string[];
};
export function solidStateFill(color: string): Record<string, unknown> {
  const { handDrawnSeed } = getConfig() as {
    handDrawnSeed?: number;
  };
  return {
    fill: color,
    hachureAngle: 120,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: color,
    seed: handDrawnSeed,
  };
}
export function styles2Map(styles: string[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const item of styles) {
    const [key, value] = item.split(":");
    map.set(key!.trim(), value?.trim() ?? "");
  }
  return map;
}
export function compileStyles(sources: NodeStyleSources): CompiledStyles {
  const stylesMap = styles2Map([
    ...(sources.cssCompiledStyles || []),
    ...(sources.cssStyles || []),
    ...(sources.labelStyle || []),
  ]);
  return {
    stylesMap,
    stylesArray: [...stylesMap] as StylePair[],
  };
}
export function isLabelStyle(property: string): boolean {
  return (
    property === "color" ||
    property === "font-size" ||
    property === "font-family" ||
    property === "font-weight" ||
    property === "font-style" ||
    property === "text-decoration" ||
    property === "text-align" ||
    property === "text-transform" ||
    property === "line-height" ||
    property === "letter-spacing" ||
    property === "word-spacing" ||
    property === "text-shadow" ||
    property === "text-overflow" ||
    property === "white-space" ||
    property === "word-wrap" ||
    property === "word-break" ||
    property === "overflow-wrap" ||
    property === "hyphens"
  );
}
export function styles2String(sources: NodeStyleSources): StylesToStringResult {
  const { stylesArray } = compileStyles(sources);
  const labelStyles: string[] = [];
  const nodeStyles: string[] = [];
  const borderStyles: string[] = [];
  const backgroundStyles: string[] = [];
  for (const item of stylesArray) {
    const key = item[0];
    if (isLabelStyle(key)) {
      labelStyles.push(`${item.join(":")} !important`);
    } else {
      nodeStyles.push(`${item.join(":")} !important`);
      if (key.includes("stroke")) {
        borderStyles.push(`${item.join(":")} !important`);
      }
      if (key === "fill") {
        backgroundStyles.push(`${item.join(":")} !important`);
      }
    }
  }
  return {
    labelStyles: labelStyles.join(";"),
    nodeStyles: nodeStyles.join(";"),
    stylesArray,
    borderStyles,
    backgroundStyles,
  };
}
function getStrokeDashArray(value: string | undefined): [number, number] {
  if (!value) return [0, 0];
  const parts = value.trim().split(/\s+/).map(Number);
  if (parts.length === 1) {
    const n = Number.isNaN(parts[0]) ? 0 : parts[0]!;
    return [n, n];
  }
  return [
    Number.isNaN(parts[0]) ? 0 : parts[0]!,
    Number.isNaN(parts[1]) ? 0 : parts[1]!,
  ];
}
export function userNodeOverrides(
  sources: NodeStyleSources,
  extra?: Record<string, unknown>,
): Record<string, unknown> {
  const { themeVariables, handDrawnSeed } = getConfig() as {
    themeVariables?: {
      nodeBorder?: string;
      mainBkg?: string;
    };
    handDrawnSeed?: number;
  };
  const { nodeBorder, mainBkg } = themeVariables ?? {};
  const { stylesMap } = compileStyles(sources);
  return Object.assign(
    {
      roughness: 0.7,
      fill: stylesMap.get("fill") || mainBkg,
      fillStyle: "hachure",
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: stylesMap.get("stroke") || nodeBorder,
      seed: handDrawnSeed,
      strokeWidth: stylesMap.get("stroke-width")?.replace("px", "") || 1.3,
      fillLineDash: [0, 0],
      strokeLineDash: getStrokeDashArray(stylesMap.get("stroke-dasharray")),
    },
    extra,
  );
}
defineFunctionName(solidStateFill, "solidStateFill");
defineFunctionName(compileStyles, "compileStyles");
defineFunctionName(styles2Map, "styles2Map");
defineFunctionName(isLabelStyle, "isLabelStyle");
defineFunctionName(styles2String, "styles2String");
defineFunctionName(userNodeOverrides, "userNodeOverrides");
defineFunctionName(getStrokeDashArray, "getStrokeDashArray");

/** Rolldown ESM init thunk (bundle export `n`). */
export function initStyleHelpersChunk(): void {
  initMermaidConfigChunk();
  initDayjsLoggerRuntime();
}
