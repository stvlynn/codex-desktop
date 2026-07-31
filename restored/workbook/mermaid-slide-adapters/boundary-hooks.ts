// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-62: boundary deps for Mermaid→slide adapters
// (text measure / scratch slide / graph layout / earlier diagram plugins).

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

let hooks: MermaidSlideAdapterHooks | null = null;

export function wireMermaidSlideAdapterHooks(
  next: MermaidSlideAdapterHooks,
): void {
  hooks = next;
}

function requireHooks(): MermaidSlideAdapterHooks {
  if (!hooks) {
    throw new Error(
      "mermaid-slide-adapters hooks not wired (call from workbook-runtime)",
    );
  }
  return hooks;
}

export function measureTextBlock(
  text: string,
  opts?: Record<string, any>,
): any {
  return requireHooks().measureTextBlock(text, opts);
}
export function ensureMeasureTextInit(): void {
  requireHooks().ensureMeasureTextInit();
}
export function applyRunTextStyle(...args: any[]): any {
  return requireHooks().applyRunTextStyle(...args);
}
export function ensureApplyRunTextStyleInit(): void {
  requireHooks().ensureApplyRunTextStyleInit();
}
export function createScratchSlide(): { slide: any } {
  return requireHooks().createScratchSlide();
}
export function ensureScratchSlideInit(): void {
  requireHooks().ensureScratchSlideInit();
}
export function resolveClassTextStyles(...args: any[]): any {
  return requireHooks().resolveClassTextStyles(...args);
}
export function layoutGraphNodes(...args: any[]): any {
  return requireHooks().layoutGraphNodes(...args);
}
export function renderGraphToSlide(...args: any[]): any {
  return requireHooks().renderGraphToSlide(...args);
}
export function getFlowchartPlugin(): any {
  return requireHooks().flowchartPlugin;
}
export function getChartLikePlugin(): any {
  return requireHooks().chartLikePlugin;
}
export function getFallbackPlugin(): any {
  return requireHooks().fallbackPlugin;
}
export function ensureChartLikePluginsInit(): void {
  requireHooks().ensureChartLikePluginsInit();
}
export function ensureFallbackPluginInit(): void {
  requireHooks().ensureFallbackPluginInit();
}
export function ensureFlowchartPluginInit(): void {
  requireHooks().ensureFlowchartPluginInit();
}
export function ensureStateGeometryMapsInit(): void {
  requireHooks().ensureStateGeometryMapsInit();
}
export function ensureArrowGeometryMapsInit(): void {
  requireHooks().ensureArrowGeometryMapsInit();
}
export function ensureConnectorHelpersInit(): void {
  requireHooks().ensureConnectorHelpersInit();
}
export function ensureGraphLayoutInit(): void {
  requireHooks().ensureGraphLayoutInit();
}
export function stateNodeGeometry(...args: any[]): any {
  return requireHooks().stateNodeGeometry(...args);
}
export function mindNodeGeometry(...args: any[]): any {
  return requireHooks().mindNodeGeometry(...args);
}
export function roundedConnectorCorner(...args: any[]): any {
  return requireHooks().roundedConnectorCorner(...args);
}
