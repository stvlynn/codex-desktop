// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: mid paint/chart helpers (legacy bh470/481/523/596/617/_Ee/700).
// Stage-3 wave-128.

import { mphH } from "./boundary-hooks";

export function resolveSeriesFill(
  mphIn7707: any,
  mphIn7708: any,
  mphIn7709: any,
  mphIn7710: any,
  mphIn7711: any,
  mphIn7712: any,
  mphIn7713: any,
) {
  let mphBind18204 = mphH.bh468(mphIn7709, mphIn7710),
    mphBind18205 = mphBind18204?.fill ?? mphIn7709.fill;
  return mphBind18205
    ? mphBind18204?.fill &&
      !mphBind18204.fill.color &&
      !mphBind18204.fill.pattern
      ? undefined
      : mphH.bh464(mphIn7707, mphIn7708, mphBind18205, mphIn7712, "transparent")
    : mphH.bh465(mphIn7709, mphIn7711, mphIn7712, mphIn7713);
}
export function resolveLineSeriesStroke(
  mphIn5718: any,
  mphIn5719: any,
  mphIn5720: any,
) {
  let mphBind15631 = mphH.bh472(mphIn5718, mphIn5720),
    mphBind15632 = mphBind15631.color;
  if (
    (mphBind15632 === undefined &&
      (mphBind15632 = mphH.bh465(mphIn5718, mphIn5719, mphIn5720)),
    mphBind15632 === undefined)
  )
    throw Error("Expected a rendered line-series color");
  let mphBind15633 = mphBind15631.widthPx;
  mphBind15633 === undefined && (mphBind15633 = mphBind894);
  let mphBind15634 = mphBind15633 > 0;
  return (
    mphBind15631.visible === false && (mphBind15634 = false),
    {
      color: mphBind15632,
      widthPx: mphBind15633,
      visible: mphBind15634,
    }
  );
}
export function paintTrendlineStroke(
  mphIn6678: any,
  mphIn6679: any,
  mphIn6680: any,
  mphIn6681: any,
  mphIn6682: any,
  mphIn6683: any,
) {
  let mphBind16968 = mphH.bh465(mphIn6680, mphIn6681, mphIn6683) ?? "#666666",
    mphBind16969 = mphIn6682?.stroke,
    mphBind16970 = mphIn6682?.line,
    mphBind16971 = mphBind16969 ?? mphBind16970;
  if (mphBind16971) {
    mphH.bh433(mphIn6678, mphBind16971, mphIn6683, {
      color: mphBind16968,
      widthPx: 1.25,
    });
    return;
  }
  mphIn6678.strokeStyle = mphBind16968;
  mphIn6678.lineWidth = 1.25;
  mphIn6678.setLineDash([4, 3]);
}
export function paintDirectionTriangle(
  mphIn3562: any,
  mphIn3563: any,
  mphIn3564: any,
  mphIn3565: any,
  mphIn3566: any,
) {
  mphH.bh598(mphIn3562, mphIn3563, () => {
    mphIn3564 === "down"
      ? (mphIn3562.translate(0.5, 0.5),
        mphIn3562.rotate(Math.PI),
        mphIn3562.translate(-0.5, -0.5))
      : mphIn3564 === "right" &&
        (mphIn3562.translate(0.5, 0.5),
        mphIn3562.rotate(Math.PI / 2),
        mphIn3562.translate(-0.5, -0.5));
    mphIn3562.beginPath();
    mphIn3562.moveTo(0.5, 0.08);
    mphIn3562.lineTo(0.9, 0.84);
    mphIn3562.lineTo(0.1, 0.84);
    mphIn3562.closePath();
    mphIn3562.fillStyle = mphIn3565;
    mphIn3562.fill();
    mphIn3562.lineWidth = 0.08;
    mphIn3562.strokeStyle = mphIn3566;
    mphIn3562.lineJoin = "round";
    mphIn3562.stroke();
  });
}
export function drawPictureBitmap(
  mphIn4382: any,
  mphIn4383: any,
  mphIn4384: any,
  mphIn4385: any,
  mphIn4386: any,
) {
  let { bitmap, contentType } = mphIn4384,
    { sx, sy, sw, sh } = mphH.Xwe(mphIn4383, bitmap),
    { dx, dy, dw, dh } = mphH.Zwe(mphIn4383, mphIn4385),
    mphBind13547 = mphH.bh208(bitmap, {
      pictureEffects:
        mphIn4383 && "pictureEffects" in mphIn4383
          ? mphIn4383.pictureEffects
          : undefined,
      contentType,
      themeMap: mphIn4386,
    });
  mphIn4382.save();
  mphIn4382.globalAlpha *= mphBind13547.opacity;
  mphIn4382.drawImage(mphBind13547.source, sx, sy, sw, sh, dx, dy, dw, dh);
  mphIn4382.restore();
}
export async function loadSlideGroupBitmaps(
  mphIn4523: any,
  mphIn4524: any,
  mphIn4525: any,
) {
  let mphBind13779 = mphH.gEe(mphIn4523);
  if (mphBind13779.length === 0) return;
  let mphBind13780 = await Promise.all(
      mphBind13779.map(async (item) => {
        let mphBind19068 = mphIn4524.images.getById(item),
          mphBind19069 = await mphBind19068?.getBitmap(
            mphIn4525.width,
            mphIn4525.height,
          );
        return mphBind19069
          ? [
              item,
              {
                bitmap: mphBind19069,
                contentType: mphBind19068?.contentType,
              },
            ]
          : undefined;
      }),
    ),
    mphBind13781 = new Map();
  for (let mphBind23017 of mphBind13780)
    mphBind23017 && mphBind13781.set(mphBind23017[0], mphBind23017[1]);
  return mphBind13781.size > 0 ? mphBind13781 : undefined;
}
export function mergeComposeStyle(
  mphIn5258: any,
  mphIn5259: any,
  mphIn5260: any,
  mphIn5261: any,
) {
  let mphBind14837 = mphIn5261 ? mphH.bh262(mphIn5261) : null,
    mphBind14838 = mphH.aae(mphIn5260);
  if (typeof mphBind14838 == "string") {
    if (mphBind14837)
      throw Error(
        `${mphIn5258} cannot combine a string style reference with \`className\`. Use an object style instead.`,
      );
    return mphBind14838;
  }
  let mphBind14839 = mphH.LOe(
    mphIn5259,
    mphBind14837 ?? undefined,
    mphBind14838,
  );
  if (mphBind14839)
    return (
      mphIn5261 &&
        (mphBind14839.className = mphH.WOe(mphBind14839.className, mphIn5261)),
      mphBind14839
    );
}

export const workbookHelper481 = resolveLineSeriesStroke;
export const workbookHelper596 = paintDirectionTriangle;
