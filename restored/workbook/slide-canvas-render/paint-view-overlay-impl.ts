// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide gridlines + guides overlay (legacy dEe cluster).
// Stage-3 wave-107.

import { resolveColorToCssRgba } from "../color-resolve";
import { scrH } from "./boundary-hooks";

void scrH;
void resolveColorToCssRgba;

const GRID_DOT_COLOR = "#B1B1B1";
const GRID_DOT_SIZE = 1;
const MAJOR_GRID_EVERY = 12;
const GUIDE_FALLBACK_COLOR = "rgba(37, 99, 235, 0.9)";
const GUIDE_EMU_DIV = 6;
const GUIDE_DASH_ON = 4;
const GUIDE_DASH_OFF = 3;

const MIN_EMU_PX = 8;
const MIN_GRID_PX = 2;
const MIN_SPACING_PX = 4;
const GRID_SNAP_EPS = 1e-6;

export function resolveSlideViewport(scrIn9672: any, scrIn9673: any) {
  return (
    scrIn9673?.viewport ?? {
      left: 0,
      top: 0,
      width: scrIn9672.frame.width,
      height: scrIn9672.frame.height,
    }
  );
}
function scalePx(scrIn13314: any, scrIn13315: any) {
  return scrIn13315 === undefined || scrIn13315 <= 0
    ? scrIn13314
    : scrIn13314 / scrIn13315;
}
export function guideLineWidth(scrIn14393: any) {
  return Math.max(scalePx(1, scrIn14393), 0.25);
}
function emuToCssPx(scrIn10773: any) {
  let scrBind21303 =
    scrIn10773 === undefined ? 0 : Number(scrIn10773);
  return !Number.isFinite(scrBind21303) || scrBind21303 <= 0
    ? MIN_EMU_PX
    : Math.max(MIN_GRID_PX, scrBind21303);
}
function scaleEmuSpacing(scrIn10589: any, scrIn10590: any) {
  if (scrIn10590 === undefined || scrIn10590 <= 0)
    return scrIn10589;
  let scrBind21065 = scrIn10589 * scrIn10590;
  return scrBind21065 >= MIN_SPACING_PX
    ? scrIn10589
    : scrIn10589 *
        Math.ceil(MIN_SPACING_PX / scrBind21065);
}
function snapToGrid(scrIn13407: any, scrIn13408: any, scrIn13409: any, ) {
  return (
    scrIn13408 +
    Math.ceil((scrIn13407 - scrIn13408) / scrIn13409) *
      scrIn13409
  );
}
export function isMajorGridLine(scrIn11417: any, scrIn11418: any, scrIn11419: any) {
  let scrBind21866 = Math.round(
    (scrIn11417 - scrIn11418) / scrIn11419,
  );
  return (
    Math.abs(
      scrIn11418 +
        scrBind21866 * scrIn11419 -
        scrIn11417,
    ) < GRID_SNAP_EPS
  );
}
function paintGridDot(scrIn12557: any, scrIn12558: any, scrIn12559: any, scrIn12560: any, ) {
  let scrBind22439 = scrIn12560 / 2;
  scrIn12557.fillRect(
    scrIn12558 - scrBind22439,
    scrIn12559 - scrBind22439,
    scrIn12560,
    scrIn12560,
  );
}
export function paintGridDots(scrIn4426: any, scrIn4427: any, scrIn4428: any, scrIn4429: any, scrIn4430: any, scrIn4431: any, scrIn4432: any, scrIn4433: any, scrIn4434: any, ) {
  let scrBind13664 = scrIn4427.left + scrIn4427.width,
    scrBind13665 = scrIn4427.top + scrIn4427.height,
    scrBind13666 = Math.max(
      scalePx(GRID_DOT_SIZE, scrIn4434),
      0.5,
    ),
    scrBind13667 = snapToGrid(
      scrIn4427.left,
      scrIn4432,
      scrIn4430,
    ),
    scrBind13668 = snapToGrid(
      scrIn4427.top,
      scrIn4433,
      scrIn4431,
    ),
    scrBind13669 = snapToGrid(
      scrIn4427.left,
      scrIn4432,
      scrIn4428,
    ),
    scrBind13670 = snapToGrid(
      scrIn4427.top,
      scrIn4433,
      scrIn4429,
    );
  for (
    let scrBind22357 = scrBind13667;
    scrBind22357 <= scrBind13664;
    scrBind22357 += scrIn4430
  )
    for (
      let scrBind22940 = scrBind13670;
      scrBind22940 <= scrBind13665;
      scrBind22940 += scrIn4429
    )
      paintGridDot(
        scrIn4426,
        scrBind22357,
        scrBind22940,
        scrBind13666,
      );
  for (
    let scrBind21867 = scrBind13668;
    scrBind21867 <= scrBind13665;
    scrBind21867 += scrIn4431
  )
    for (
      let scrBind22694 = scrBind13669;
      scrBind22694 <= scrBind13664;
      scrBind22694 += scrIn4428
    )
      isMajorGridLine(scrBind22694, scrIn4432, scrIn4430) ||
        paintGridDot(
          scrIn4426,
          scrBind22694,
          scrBind21867,
          scrBind13666,
        );
}
export function guidePositionFrac(scrIn14616: any) {
  return (scrIn14616.position ?? 0) / GUIDE_EMU_DIV;
}
export function normalizeGuideOrientation(scrIn10214: any) {
  return scrIn10214.orientation === scrH.guideEnum.GUIDE_ORIENTATION_UNSPECIFIED
    ? scrH.guideEnum.GUIDE_ORIENTATION_VERTICAL
    : scrIn10214.orientation;
}
export function paintSlideGuides(scrIn3121: any, scrIn3122: any, scrIn3123: any, scrIn3124: any, scrIn3125: any, ) {
  let scrBind11236 = scrIn3123.left + scrIn3123.width,
    scrBind11237 = scrIn3123.top + scrIn3123.height;
  scrIn3121.lineWidth = guideLineWidth(scrIn3125);
  scrIn3121.setLineDash([
    scalePx(GUIDE_DASH_ON, scrIn3125),
    scalePx(GUIDE_DASH_OFF, scrIn3125),
  ]);
  for (let scrBind13763 of scrIn3122) {
    let scrBind14104 = guidePositionFrac(scrBind13763),
      scrBind14105 = normalizeGuideOrientation(scrBind13763);
    if (Number.isFinite(scrBind14104)) {
      if (
        (scrIn3121.beginPath(),
        (scrIn3121.strokeStyle = resolveColorToCssRgba(
          scrBind13763.color,
          scrIn3124,
          GUIDE_FALLBACK_COLOR,
        )),
        scrBind14105 === scrH.guideEnum.GUIDE_ORIENTATION_HORIZONTAL)
      ) {
        scrIn3121.moveTo(scrIn3123.left, scrBind14104);
        scrIn3121.lineTo(scrBind11236, scrBind14104);
      } else if (scrBind14105 === scrH.guideEnum.GUIDE_ORIENTATION_VERTICAL) {
        scrIn3121.moveTo(scrBind14104, scrIn3123.top);
        scrIn3121.lineTo(scrBind14104, scrBind11237);
      } else continue;
      scrIn3121.stroke();
    }
  }
  scrIn3121.setLineDash([]);
}
export function paintViewOverlay(scrIn1812: any, scrIn1813: any, scrIn1814: any, scrIn1815: any, scrIn1816: any, ) {
  if (
    !scrIn1813.view.gridlinesVisible &&
    !scrIn1813.view.guidesVisible
  )
    return;
  let scrBind8339 = resolveSlideViewport(scrIn1814, scrIn1816);
  if (!(scrBind8339.width <= 0 || scrBind8339.height <= 0)) {
    if (
      (scrIn1812.save(),
      scrIn1816?.clipToSlide !== false &&
        (scrIn1812.beginPath(),
        scrIn1812.rect(
          0,
          0,
          scrIn1814.frame.width,
          scrIn1814.frame.height,
        ),
        scrIn1812.clip()),
      scrIn1813.view.gridlinesVisible)
    ) {
      let scrBind15567 = emuToCssPx(
          scrIn1813.view.gridSpacingCxEmu,
        ),
        scrBind15568 = emuToCssPx(
          scrIn1813.view.gridSpacingCyEmu,
        ),
        scrBind15569 = scaleEmuSpacing(
          scrBind15567,
          scrIn1816?.scale,
        ),
        scrBind15570 = scaleEmuSpacing(
          scrBind15568,
          scrIn1816?.scale,
        ),
        scrBind15571 = scaleEmuSpacing(
          scrBind15567 * MAJOR_GRID_EVERY,
          scrIn1816?.scale,
        ),
        scrBind15572 = scaleEmuSpacing(
          scrBind15568 * MAJOR_GRID_EVERY,
          scrIn1816?.scale,
        );
      scrIn1812.fillStyle = GRID_DOT_COLOR;
      paintGridDots(
        scrIn1812,
        scrBind8339,
        scrBind15569,
        scrBind15570,
        scrBind15571,
        scrBind15572,
        scrIn1814.frame.width / 2,
        scrIn1814.frame.height / 2,
        scrIn1816?.scale,
      );
    }
    if (scrIn1813.view.guidesVisible) {
      let { layout, masterLayout } = scrIn1814.resolveRenderContext();
      paintSlideGuides(
        scrIn1812,
        [
          ...(masterLayout?.slideGuides ?? []),
          ...(layout && layout !== masterLayout ? layout.slideGuides : []),
        ],
        scrBind8339,
        scrIn1815,
        scrIn1816?.scale,
      );
    }
    scrIn1812.restore();
  }
}

/** Legacy aliases. */
export const dEe = paintViewOverlay;
export const sEe = paintGridDots;
export const uEe = paintSlideGuides;
export const iEe = resolveSlideViewport;
