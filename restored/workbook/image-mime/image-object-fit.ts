// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-37: contain/cover srcRect + layout (legacy Binding651–654).

import type { ContainLayout, ObjectFitRects, PercentRect } from "./types";

/** Legacy `workbookBinding651` — clamp NaN → lo, else clamp to [lo, hi]. */
export function clampNumber(value: number, lo: number, hi: number): number {
  return Number.isNaN(value) ? lo : Math.min(Math.max(value, lo), hi);
}

/** Legacy `workbookBinding652` — fractional edges → 1e5 percent rect. */
export function makePercentRect(
  left: number,
  top: number,
  right: number,
  bottom: number,
): PercentRect {
  return {
    l: Math.round(clampNumber(left, 0, 1) * 1e5),
    t: Math.round(clampNumber(top, 0, 1) * 1e5),
    r: Math.round(clampNumber(right, 0, 1) * 1e5),
    b: Math.round(clampNumber(bottom, 0, 1) * 1e5),
  };
}

/**
 * Legacy `workbookBinding653` — object-fit contain/cover → srcRect +
 * stretchFillRect (fractional → 1e5).
 */
export function computeObjectFitRects(
  fit: string,
  frameWidth: number,
  frameHeight: number,
  imageAspect: number,
): ObjectFitRects {
  let frameAspect = frameWidth / frameHeight;
  if (fit === "contain") {
    let padX = 0,
      padY = 0;
    return (
      imageAspect > frameAspect
        ? (padY =
            (frameHeight - frameWidth / imageAspect) / 2 / frameHeight)
        : imageAspect < frameAspect &&
          (padX =
            (frameWidth - frameHeight * imageAspect) / 2 / frameWidth),
      {
        srcRect: makePercentRect(0, 0, 0, 0),
        stretchFillRect: makePercentRect(padX, padY, padX, padY),
      }
    );
  }
  let cropX = 0,
    cropY = 0;
  return (
    imageAspect > frameAspect
      ? (cropX = (1 - frameAspect / imageAspect) / 2)
      : imageAspect < frameAspect &&
        (cropY = (1 - imageAspect / frameAspect) / 2),
    {
      srcRect: makePercentRect(cropX, cropY, cropX, cropY),
      stretchFillRect: makePercentRect(0, 0, 0, 0),
    }
  );
}

/**
 * Legacy `workbookBinding654` — letterbox a frame to `imageAspect`
 * (contain layout with centered offsets).
 */
export function computeContainLayout(
  frameWidth: number,
  frameHeight: number,
  imageAspect: number,
): ContainLayout {
  if (frameWidth <= 0 || frameHeight <= 0 || imageAspect <= 0)
    return {
      width: 0,
      height: 0,
      offsetX: 0,
      offsetY: 0,
    };
  let frameAspect = frameWidth / frameHeight,
    width = frameWidth,
    height = frameHeight;
  imageAspect > frameAspect
    ? (height = frameWidth / imageAspect)
    : imageAspect < frameAspect && (width = frameHeight * imageAspect);
  let offsetX = (frameWidth - width) / 2,
    offsetY = (frameHeight - height) / 2;
  return {
    width,
    height,
    offsetX,
    offsetY,
  };
}
