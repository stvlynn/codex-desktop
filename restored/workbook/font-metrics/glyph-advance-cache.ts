// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-11: glyph advance / ink-bounds measure cache (legacy $p / Binding456).

import {
  getFontMeasureContext,
  onFontMetricsInvalidate,
  sharedFamilyAscentFraction,
  ensureFontMetricsInit,
} from "./font-metrics";
import { ensureTextSegmenterInit, segmentGraphemes } from "./text-segmenter";

/** Legacy Binding451 — max token-width cache entries. */
export const GLYPH_TOKEN_CACHE_LIMIT = 2000;
/** Legacy Binding452 — kerning epsilon (px). */
export const KERNING_EPSILON_PX = 0.01;
/** Legacy Binding453 — size-bucket scale. */
export const SIZE_BUCKET_SCALE = 1000;
/** Legacy Binding454 — reserved (1/6); unused by Binding456 body. */
export const GLYPH_ADVANCE_RESERVED_SIXTH = 1 / 6;
/** Legacy Binding455 — scripts eligible for snap-to-grid advance. */
export const SNAP_ADVANCE_SCRIPT_RE =
  /^[\p{Script=Latn}\p{Script=Cyrl}\p{Script=Grek}\p{Script=Han}\p{Script=Hira}\p{Script=Kana}\p{Script=Hang}\p{Script=Bopo}\p{Script=Zyyy}\p{Script=Zinh}]*$/u;

export type InkBounds = {
  leftPx: number;
  rightPx: number;
  ascentPx: number;
  descentPx: number;
  paintBaselineCompensationPx: number;
};

type MeasureContext = {
  textBaseline: CanvasTextBaseline;
  font: string;
  measureText(text: string): TextMetrics;
};

/**
 * Legacy `workbookBinding456` — OffscreenCanvas glyph width / kerning / ink cache.
 */
export class GlyphAdvanceCache {
  #measureCtx: MeasureContext | undefined;
  #tokenWidthCache = new Map<string, number>();
  #inkBoundsCache = new Map<string, InkBounds>();
  #glyphWidthByBucket = new Map<string, Map<string, number>>();
  #kerningCache = new Map<string, number>();
  #unsubscribe: (() => void) | undefined;

  constructor() {
    this.#unsubscribe = onFontMetricsInvalidate(() => this.reset());
  }

  measureTokenWidth(font: string, text: string): number {
    const key = `${font}__${text}`;
    const cached = this.#tokenWidthCache.get(key);
    if (cached !== undefined) return cached;
    const ctx = this.#context();
    ctx.font = font;
    ctx.textBaseline = "alphabetic";
    const width = ctx.measureText(text).width;
    this.#tokenWidthCache.set(key, width);
    if (this.#tokenWidthCache.size > GLYPH_TOKEN_CACHE_LIMIT) {
      const oldest = this.#tokenWidthCache.keys().next().value;
      if (oldest) this.#tokenWidthCache.delete(oldest);
    }
    return width;
  }

  buildAdvance(
    familyKey: string,
    fontShorthand: string,
    fontSizePx: number,
    text: string,
    graphemes?: string[],
    snapGridPx?: number,
  ): Float32Array {
    const segments = graphemes ?? segmentGraphemes(text);
    const advances = new Float32Array(segments.length + 1);
    advances[0] = 0;
    if (segments.length === 0) return advances;
    const snap =
      snapGridPx !== undefined &&
      Number.isFinite(snapGridPx) &&
      snapGridPx > 0 &&
      SNAP_ADVANCE_SCRIPT_RE.test(text)
        ? snapGridPx
        : 0;
    let cursor = 0;
    if (snap !== 0) {
      for (let i = 0; i < segments.length; i += 1) {
        const glyph = segments[i];
        if (!glyph) continue;
        const width = this.getGlyphWidth(
          familyKey,
          fontSizePx,
          fontShorthand,
          glyph,
        );
        const next = segments[i + 1];
        const withKern =
          width +
          (next
            ? this.getKerningAdjustment(
                familyKey,
                fontShorthand,
                fontSizePx,
                glyph,
                next,
              )
            : 0);
        cursor += Math.round(withKern / snap) * snap;
        advances[i + 1] = cursor;
      }
      return advances;
    }
    let prev: string | undefined;
    for (let i = 0; i < segments.length; i += 1) {
      const glyph = segments[i];
      if (!glyph) continue;
      const width = this.getGlyphWidth(
        familyKey,
        fontSizePx,
        fontShorthand,
        glyph,
      );
      const kern =
        prev === undefined
          ? 0
          : this.getKerningAdjustment(
              familyKey,
              fontShorthand,
              fontSizePx,
              prev,
              glyph,
            );
      cursor += width + kern;
      advances[i + 1] = cursor;
      prev = glyph;
    }
    return advances;
  }

  measureInkBounds(font: string, text: string): InkBounds {
    const key = `${font}__ink__${text}`;
    const cached = this.#inkBoundsCache.get(key);
    if (cached) return cached;
    const ctx = this.#context();
    ctx.font = font;
    ctx.textBaseline = "alphabetic";
    const metrics = ctx.measureText(text);
    const bounds: InkBounds = {
      leftPx:
        typeof metrics.actualBoundingBoxLeft == "number" &&
        Number.isFinite(metrics.actualBoundingBoxLeft)
          ? Math.max(0, metrics.actualBoundingBoxLeft)
          : 0,
      rightPx:
        typeof metrics.actualBoundingBoxRight == "number" &&
        Number.isFinite(metrics.actualBoundingBoxRight)
          ? Math.max(0, metrics.actualBoundingBoxRight)
          : Math.max(0, metrics.width),
      ascentPx:
        typeof metrics.actualBoundingBoxAscent == "number" &&
        Number.isFinite(metrics.actualBoundingBoxAscent)
          ? Math.max(0, metrics.actualBoundingBoxAscent)
          : 0,
      descentPx:
        typeof metrics.actualBoundingBoxDescent == "number" &&
        Number.isFinite(metrics.actualBoundingBoxDescent)
          ? Math.max(0, metrics.actualBoundingBoxDescent)
          : 0,
      paintBaselineCompensationPx: sharedFamilyAscentFraction(metrics),
    };
    this.#inkBoundsCache.set(key, bounds);
    return bounds;
  }

  reset(): void {
    this.#tokenWidthCache.clear();
    this.#inkBoundsCache.clear();
    this.#glyphWidthByBucket.clear();
    this.#kerningCache.clear();
  }

  dispose(): void {
    this.reset();
    this.#unsubscribe?.();
    this.#unsubscribe = undefined;
    this.#measureCtx = undefined;
  }

  #context(): MeasureContext {
    return (
      (this.#measureCtx ||= getFontMeasureContext() as MeasureContext),
      this.#measureCtx
    );
  }

  getGlyphWidth(
    familyKey: string,
    fontSizePx: number,
    fontShorthand: string,
    glyph: string,
  ): number {
    const bucket = this.getSizeBucketKey(familyKey, fontSizePx);
    const byGlyph =
      this.#glyphWidthByBucket.get(bucket) ??
      this.#glyphWidthByBucket.set(bucket, new Map()).get(bucket)!;
    const cached = byGlyph.get(glyph);
    if (cached !== undefined) return cached;
    const width = this.measureDirect(fontShorthand, glyph);
    byGlyph.set(glyph, width);
    return width;
  }

  getKerningAdjustment(
    familyKey: string,
    fontShorthand: string,
    fontSizePx: number,
    left: string,
    right: string,
  ): number {
    if (!left || !right) return 0;
    const key = `${this.getSizeBucketKey(familyKey, fontSizePx)}__${left}${right}`;
    const cached = this.#kerningCache.get(key);
    if (cached !== undefined) return cached;
    const raw =
      this.measureDirect(fontShorthand, left + right) -
      (this.getGlyphWidth(familyKey, fontSizePx, fontShorthand, left) +
        this.getGlyphWidth(familyKey, fontSizePx, fontShorthand, right));
    const adjusted = Math.abs(raw) < KERNING_EPSILON_PX ? 0 : raw;
    this.#kerningCache.set(key, adjusted);
    return adjusted;
  }

  measureDirect(font: string, text: string): number {
    const ctx = this.#context();
    ctx.font = font;
    ctx.textBaseline = "alphabetic";
    return ctx.measureText(text).width;
  }

  getSizeBucketKey(familyKey: string, fontSizePx: number): string {
    return `${familyKey}@${Math.round(fontSizePx * SIZE_BUCKET_SCALE)}`;
  }
}

let glyphAdvanceReady = false;

/** Legacy `$p` — ensure font-metrics + segmenter, then Binding456 is constructible. */
export function ensureGlyphAdvanceCacheInit(): void {
  if (glyphAdvanceReady) return;
  ensureFontMetricsInit();
  ensureTextSegmenterInit();
  glyphAdvanceReady = true;
}
