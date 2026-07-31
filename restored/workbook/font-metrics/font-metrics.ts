// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-10: OffscreenCanvas font metrics cache (legacy workbookMt cluster).

import { matchOfficeFontFace, type FontMatchQuery } from "./font-family-match";

export type TextMetrics = {
  ascentEm: number;
  descentEm: number;
  lineGapEm: number;
  measuredAtPx: number;
};

export type SizedFontMetrics = {
  ascentPx: number;
  descentPx: number;
  lineGapPx: number;
  officeAscentPx?: number;
  officeDescentPx?: number;
  officeMetricsSource?: string;
};

type MeasureContext = {
  textBaseline: CanvasTextBaseline;
  font: string;
  measureText(text: string): TextMetrics;
};

const ASCENT_PROBE = "H";
const DESCENT_PROBE = "g";

let measureContext: MeasureContext | undefined;
const listeners = new Set<() => void>();
let fontLoadingWired = false;

/** Legacy `_oe` — fractional part of a finite number. */
export function fractionalPart(value: number): number {
  return Number.isFinite(value) ? value - Math.round(value) : 0;
}

function createMeasureContext(): MeasureContext {
  if (typeof OffscreenCanvas < "u") {
    const ctx = new OffscreenCanvas(1, 1).getContext("2d");
    if (ctx) return ctx as unknown as MeasureContext;
  }
  throw Error(
    "[font-metrics] OffscreenCanvas API is not available for measurements.",
  );
}

/** Legacy get-font-measure-context — shared alphabetic canvas measure context. */
export function getFontMeasureContext(): MeasureContext {
  if (!measureContext) {
    measureContext = createMeasureContext();
    measureContext.textBaseline = "alphabetic";
  }
  return measureContext;
}

/** Legacy invalidate-font-metrics / `workbookHt` — notify listeners (font load). */
export function invalidateFontMetricsListeners(): void {
  listeners.forEach((listener) => listener());
}

function wireFontLoadingListeners(): void {
  if (fontLoadingWired) return;
  const fonts = (globalThis as { fonts?: EventTarget }).fonts;
  if (!fonts || typeof fonts.addEventListener != "function") return;
  const onChange = () => invalidateFontMetricsListeners();
  fonts.addEventListener("loadingdone", onChange);
  fonts.addEventListener("loadingerror", onChange);
  fontLoadingWired = true;
}

/** Legacy on-font-metrics-invalidate — register a metrics invalidation listener. */
export function onFontMetricsInvalidate(listener: () => void): () => void {
  listeners.add(listener);
  wireFontLoadingListeners();
  return () => {
    listeners.delete(listener);
  };
}

/** Legacy `workbookHt` — public alias for invalidateFontMetricsListeners. */
export const workbookHt = invalidateFontMetricsListeners;

/** Legacy build-measure-font-shorthand — CSS font shorthand for measurement. */
export function buildMeasureFontShorthand(
  face: FontMatchQuery,
  sizePx: number,
): string {
  return `${face.style && face.style !== "normal" ? `${face.style} ` : ""}${face.weight && face.weight !== "normal" ? `${face.weight} ` : ""}${face.stretch && face.stretch !== "normal" ? `${face.stretch} ` : ""}${sizePx}px ${face.family}`.trim();
}

/** Legacy `xoe` — stable cache key for a font face. */
export function fontFaceCacheKey(face: FontMatchQuery): string {
  return `${face.style?.trim().toLowerCase() || "normal"}|${String(face.weight ?? "normal")
    .trim()
    .toLowerCase()}|${face.stretch?.trim().toLowerCase() || "normal"}|${face.family}`;
}

/** Legacy positive-or — positive finite or fallback. */
export function positiveOr(
  value: number | null | undefined,
  fallback: number,
): number {
  return typeof value == "number" && Number.isFinite(value) && value > 0
    ? value
    : fallback;
}

type BoundingBoxMetrics = {
  actualBoundingBoxAscent?: number;
  actualBoundingBoxDescent?: number;
  fontBoundingBoxAscent?: number;
  fontBoundingBoxDescent?: number;
};

/** Legacy metrics-from-bounding-boxes — derive em metrics from ascent/descent probes. */
export function metricsFromBoundingBoxes(
  ascentProbe: BoundingBoxMetrics,
  descentProbe: BoundingBoxMetrics,
  sizePx: number = 100,
): TextMetrics {
  const actualAscent = positiveOr(
    ascentProbe.actualBoundingBoxAscent,
    sizePx * 0.8,
  );
  const actualDescent = positiveOr(
    descentProbe.actualBoundingBoxDescent,
    sizePx * 0.2,
  );
  const fontAscent = positiveOr(
    ascentProbe.fontBoundingBoxAscent,
    actualAscent,
  );
  const fontDescent = positiveOr(
    descentProbe.fontBoundingBoxDescent,
    actualDescent,
  );
  const fontHeight = fontAscent + fontDescent;
  const actualHeight = actualAscent + actualDescent;
  const lineGap = Math.max(0, fontHeight - actualHeight);
  return {
    ascentEm: fontAscent / sizePx,
    descentEm: fontDescent / sizePx,
    lineGapEm: lineGap / sizePx,
    measuredAtPx: sizePx,
  };
}

/** Legacy Binding445 — cached OffscreenCanvas font metrics. */
export class FontMetricsCache {
  #cache = new Map<string, TextMetrics>();
  #unsubscribe: (() => void) | undefined;

  constructor() {
    this.#unsubscribe = onFontMetricsInvalidate(() => this.reset());
  }

  getFontKey(face: FontMatchQuery): string {
    return fontFaceCacheKey(face);
  }

  getMetrics(face: FontMatchQuery): TextMetrics {
    const key = this.getFontKey(face);
    const hit = this.#cache.get(key);
    if (hit) return hit;
    const measured = this.measure(face);
    this.#cache.set(key, measured);
    return measured;
  }

  getMetricsForSize(face: FontMatchQuery, sizePx: number): SizedFontMetrics {
    const em = this.getMetrics(face);
    const office = matchOfficeFontFace(face);
    return {
      ascentPx: em.ascentEm * sizePx,
      descentPx: em.descentEm * sizePx,
      lineGapPx: em.lineGapEm * sizePx,
      officeAscentPx:
        office && office.unitsPerEm
          ? (office.ascent! / office.unitsPerEm) * sizePx
          : undefined,
      officeDescentPx:
        office && office.unitsPerEm
          ? (office.descent! / office.unitsPerEm) * sizePx
          : undefined,
      officeMetricsSource: office?.source,
    };
  }

  reset(): void {
    this.#cache.clear();
  }

  dispose(): void {
    this.reset();
    this.#unsubscribe?.();
    this.#unsubscribe = undefined;
  }

  measure(face: FontMatchQuery): TextMetrics {
    const ctx = getFontMeasureContext();
    ctx.font = buildMeasureFontShorthand(face, 100);
    return metricsFromBoundingBoxes(
      ctx.measureText(ASCENT_PROBE) as unknown as BoundingBoxMetrics,
      ctx.measureText(DESCENT_PROBE) as unknown as BoundingBoxMetrics,
      100,
    );
  }
}

/** Legacy workbookBinding446 — process-wide metrics cache. */
export const fontMetricsCache = new FontMetricsCache();

let fontMetricsReady = false;

/** Legacy `workbookMt` — ensure font-metrics singleton is ready. */
export function ensureFontMetricsInit(): void {
  if (fontMetricsReady) return;
  fontMetricsReady = true;
}

/**
 * Legacy `Soe` — when all runs share one family, return fractional ascent
 * hint from fontBoundingBoxAscent.
 */
export function sharedFamilyAscentFraction(props: {
  lines?: Array<{ runs?: Array<{ family?: string }> }> | null;
  fontBoundingBoxAscent?: number;
}): number | undefined {
  const lines = props.lines;
  if (!Array.isArray(lines) || lines.length === 0) return;
  const runs = lines.flatMap((line) =>
    Array.isArray(line.runs) ? line.runs : [],
  );
  if (
    runs.length === 0 ||
    new Set(
      runs
        .map((run) =>
          typeof run.family == "string"
            ? run.family.trim().toLocaleLowerCase("en-US")
            : "",
        )
        .filter(Boolean),
    ).size !== 1
  )
    return;
  const ascent = props.fontBoundingBoxAscent;
  return Number.isFinite(ascent) && (ascent as number) > 0
    ? fractionalPart(ascent as number)
    : undefined;
}
