// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide canvas background fill/image (legacy RTe + helper #646).
// Stage-3 wave-102.

import { sbgH } from "./boundary-hooks";

void sbgH;

function pathRoundedRect(sbgIn5052: any, sbgIn5053: any, sbgIn5054: any, sbgIn5055: any, ) {
  let sbgBind14516 = Math.max(
    0,
    Math.min(sbgIn5055, sbgIn5053 / 2, sbgIn5054 / 2),
  );
  sbgIn5052.beginPath();
  sbgIn5052.moveTo(sbgBind14516, 0);
  sbgIn5052.lineTo(sbgIn5053 - sbgBind14516, 0);
  sbgIn5052.quadraticCurveTo(
    sbgIn5053,
    0,
    sbgIn5053,
    sbgBind14516,
  );
  sbgIn5052.lineTo(
    sbgIn5053,
    sbgIn5054 - sbgBind14516,
  );
  sbgIn5052.quadraticCurveTo(
    sbgIn5053,
    sbgIn5054,
    sbgIn5053 - sbgBind14516,
    sbgIn5054,
  );
  sbgIn5052.lineTo(sbgBind14516, sbgIn5054);
  sbgIn5052.quadraticCurveTo(
    0,
    sbgIn5054,
    0,
    sbgIn5054 - sbgBind14516,
  );
  sbgIn5052.lineTo(0, sbgBind14516);
  sbgIn5052.quadraticCurveTo(0, 0, sbgBind14516, 0);
  sbgIn5052.closePath();
}
export async function paintSlideBackground(sbgIn854: any, sbgIn855: any, sbgIn856: any, sbgIn857: any, sbgIn858: any, sbgIn859: any, ) {
  let sbgBind5528 = sbgIn856.background?.fill,
    sbgBind5529 = sbgBind5528?.isSet
      ? sbgH.bh212(
          sbgIn854,
          {
            x: 0,
            y: 0,
            width: sbgIn857,
            height: sbgIn858,
          },
          sbgBind5528,
          sbgIn855,
          sbgIn856.fallbackColor,
        )
      : sbgIn856.fallbackColor;
  sbgIn854.save();
  sbgIn854.globalAlpha = 1;
  sbgIn854.globalCompositeOperation = "source-over";
  (sbgIn859?.clipRadiusPx ?? 0) > 0 &&
    (pathRoundedRect(
      sbgIn854,
      sbgIn857,
      sbgIn858,
      sbgIn859?.clipRadiusPx ?? 0,
    ),
    sbgIn854.clip());
  sbgIn854.fillStyle = sbgIn856.baseColor;
  sbgIn854.fillRect(0, 0, sbgIn857, sbgIn858);
  sbgIn854.fillStyle = sbgBind5529;
  sbgIn854.fillRect(0, 0, sbgIn857, sbgIn858);
  sbgIn854.restore();
  let sbgBind5530 = sbgIn856.backgroundImage;
  if (sbgBind5530) {
    let { image } = sbgBind5530,
      sbgBind7497 = sbgBind5530.background,
      sbgBind7498 = await image.getBitmap(
        sbgIn857,
        sbgIn858,
      );
    if (!sbgBind7498) return;
    sbgIn854.save();
    (sbgIn859?.clipRadiusPx ?? 0) > 0 &&
      (pathRoundedRect(
        sbgIn854,
        sbgIn857,
        sbgIn858,
        sbgIn859?.clipRadiusPx ?? 0,
      ),
      sbgIn854.clip());
    let sbgBind7499 = (sbgIn16312) =>
        (sbgIn16312 ?? 0) / 1e5,
      sbgBind7500 = 0,
      sbgBind7501 = 0,
      sbgBind7502 = sbgBind7498.width,
      sbgBind7503 = sbgBind7498.height,
      sbgBind7504 = sbgBind7497?.fill?.srcRect;
    if (sbgBind7504) {
      let sbgBind18313 = sbgBind7499(sbgBind7504.l),
        sbgBind18314 = sbgBind7499(sbgBind7504.t),
        sbgBind18315 = sbgBind7499(sbgBind7504.r),
        sbgBind18316 = sbgBind7499(sbgBind7504.b);
      sbgBind7500 += sbgBind18313 * sbgBind7498.width;
      sbgBind7501 += sbgBind18314 * sbgBind7498.height;
      sbgBind7502 -=
        (sbgBind18313 + sbgBind18315) *
        sbgBind7498.width;
      sbgBind7503 -=
        (sbgBind18314 + sbgBind18316) *
        sbgBind7498.height;
    }
    let sbgBind7505 = 0,
      sbgBind7506 = 0,
      sbgBind7507 = sbgIn857,
      sbgBind7508 = sbgIn858,
      sbgBind7509 = sbgBind7497?.fill?.stretchFillRect;
    if (sbgBind7509) {
      let sbgBind19705 = sbgBind7499(sbgBind7509.l),
        sbgBind19706 = sbgBind7499(sbgBind7509.t),
        sbgBind19707 = sbgBind7499(sbgBind7509.r),
        sbgBind19708 = sbgBind7499(sbgBind7509.b);
      sbgBind7505 = sbgBind19705 * sbgIn857;
      sbgBind7506 = sbgBind19706 * sbgIn858;
      sbgBind7507 =
        sbgIn857 * (1 - sbgBind19705 - sbgBind19707);
      sbgBind7508 =
        sbgIn858 * (1 - sbgBind19706 - sbgBind19708);
    }
    let sbgBind7510 = sbgH.bh208(sbgBind7498, {
      pictureEffects: sbgBind7497?.fill?.pictureEffects,
      contentType: image.contentType,
      themeMap: sbgIn855,
    });
    sbgIn854.globalAlpha *= sbgBind7510.opacity;
    sbgIn854.drawImage(
      sbgBind7510.source,
      sbgBind7500,
      sbgBind7501,
      sbgBind7502,
      sbgBind7503,
      sbgBind7505,
      sbgBind7506,
      sbgBind7507,
      sbgBind7508,
    );
    sbgIn854.restore();
  }
}

/** Legacy alias. */
export const RTe = paintSlideBackground;
