// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-158: Mermaid→slide adapter deps via direct imports
// (wireMermaidSlideAdapterHooks leave-behind retired).

import {
  workbookBinding1615,
  workbookBinding1616,
  workbookBinding1617,
  workbookBinding1618,
  workbookBinding1619,
  workbookBinding1620,
  workbookBinding1667,
  zAe,
  VAe,
  BAe,
  HAe,
  KAe,
  XAe,
  WAe,
  GAe,
} from "../mermaid-slide-helpers";
import {
  workbookBinding1675,
  workbookBinding1685,
  NPe,
  PPe,
  OPe,
  $Ne,
} from "../mermaid-flowchart";
import { IPe } from "../image-connector";

export type MermaidSlideAdapterHooks = {
  measureTextBlock: (text: string, opts?: Record<string, any>) => any;
  ensureMeasureTextInit: () => void;
  applyRunTextStyle: (...args: any[]) => any;
  ensureApplyRunTextStyleInit: () => void;
  createScratchSlide: () => { slide: any };
  ensureScratchSlideInit: () => void;
  resolveClassTextStyles: (...args: any[]) => any;
  layoutGraphNodes: (...args: any[]) => any;
  renderGraphToSlide: (...args: any[]) => any;
  flowchartPlugin: any;
  chartLikePlugin: any;
  fallbackPlugin: any;
  ensureChartLikePluginsInit: () => void;
  ensureFallbackPluginInit: () => void;
  ensureFlowchartPluginInit: () => void;
  ensureStateGeometryMapsInit: () => void;
  ensureArrowGeometryMapsInit: () => void;
  ensureConnectorHelpersInit: () => void;
  ensureGraphLayoutInit: () => void;
  stateNodeGeometry: (...args: any[]) => any;
  mindNodeGeometry: (...args: any[]) => any;
  roundedConnectorCorner: (...args: any[]) => any;
};

export function measureTextBlock(
  text: string,
  opts?: Record<string, any>,
): any {
  return workbookBinding1615(text, opts);
}
export function ensureMeasureTextInit(): void {
  workbookBinding1616();
}
export function applyRunTextStyle(...args: any[]): any {
  return workbookBinding1617(...args);
}
export function ensureApplyRunTextStyleInit(): void {
  workbookBinding1618();
}
export function createScratchSlide(): { slide: any } {
  return workbookBinding1619();
}
export function ensureScratchSlideInit(): void {
  workbookBinding1620();
}
export function resolveClassTextStyles(...args: any[]): any {
  return workbookBinding1667(...args);
}
export function layoutGraphNodes(...args: any[]): any {
  return workbookBinding1675(...args);
}
export function renderGraphToSlide(...args: any[]): any {
  return workbookBinding1685(...args);
}
export function getFlowchartPlugin(): any {
  return NPe;
}
export function getChartLikePlugin(): any {
  return zAe;
}
export function getFallbackPlugin(): any {
  return VAe;
}
export function ensureChartLikePluginsInit(): void {
  BAe();
}
export function ensureFallbackPluginInit(): void {
  HAe();
}
export function ensureFlowchartPluginInit(): void {
  PPe();
}
export function ensureStateGeometryMapsInit(): void {
  KAe();
}
export function ensureArrowGeometryMapsInit(): void {
  XAe();
}
export function ensureConnectorHelpersInit(): void {
  OPe();
}
export function ensureGraphLayoutInit(): void {
  $Ne();
}
export function stateNodeGeometry(...args: any[]): any {
  return WAe(...args);
}
export function mindNodeGeometry(...args: any[]): any {
  return GAe(...args);
}
export function roundedConnectorCorner(...args: any[]): any {
  return IPe(...args);
}

/** @deprecated Wave-158: wire leave-behind retired — adapters use direct imports. */
export function wireMermaidSlideAdapterHooks(
  _next?: Partial<MermaidSlideAdapterHooks>,
): void {}
