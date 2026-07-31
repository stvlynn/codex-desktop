// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide image warm/paint (legacy $Te).
// Stage-3 wave-99.

import { ShapeGeometry as workbookDt } from "../shape-geometry";
import { shapeGeometryNameToProto } from "../chart-proto-name-maps";
import { sipH } from "./boundary-hooks";

void workbookDt;
void shapeGeometryNameToProto;
void sipH;

export async function paintSlideImage(sipIn653: any, sipIn654: any, sipIn655: any, sipIn656: any = {}, ) {
  if (!sipIn653.imageReferenceId) return;
  let sipBind4785 = sipIn653.resolveFrame(),
    { width, height } = sipBind4785,
    sipBind4786 = await sipIn653.getBitmap(),
    sipBind4787 = sipIn653.resolveImageFill(),
    sipBind4788 = 0,
    sipBind4789 = 0,
    sipBind4790 = sipBind4786?.width ?? 0,
    sipBind4791 = sipBind4786?.height ?? 0,
    sipBind4792 = (sipIn16313) =>
      (sipIn16313 ?? 0) / 1e5,
    sipBind4793 = sipBind4787.srcRect;
  if (sipBind4786 && sipBind4793) {
    let sipBind18835 = sipBind4792(sipBind4793.l),
      sipBind18836 = sipBind4792(sipBind4793.t),
      sipBind18837 = sipBind4792(sipBind4793.r),
      sipBind18838 = sipBind4792(sipBind4793.b);
    sipBind4788 += sipBind18835 * sipBind4786.width;
    sipBind4789 += sipBind18836 * sipBind4786.height;
    sipBind4790 -=
      (sipBind18835 + sipBind18837) * sipBind4786.width;
    sipBind4791 -=
      (sipBind18836 + sipBind18838) *
      sipBind4786.height;
  }
  let sipBind4794 = 0,
    sipBind4795 = 0,
    sipBind4796 = width,
    sipBind4797 = height,
    sipBind4798 = sipBind4787.stretchFillRect;
  if (sipBind4798) {
    let sipBind20048 = sipBind4792(sipBind4798.l),
      sipBind20049 = sipBind4792(sipBind4798.t),
      sipBind20050 = sipBind4792(sipBind4798.r),
      sipBind20051 = sipBind4792(sipBind4798.b);
    sipBind4794 = sipBind20048 * width;
    sipBind4795 = sipBind20049 * height;
    sipBind4796 =
      width * (1 - sipBind20048 - sipBind20050);
    sipBind4797 =
      height * (1 - sipBind20049 - sipBind20051);
  }
  let sipBind4799 = sipIn653.resolveImageMask(),
    sipBind4800 = sipH.hasImageMask(sipBind4799),
    sipBind4801,
    sipBind4802 = sipBind4799?.geometry;
  if (
    (sipBind4802 !== undefined &&
      (sipBind4801 = shapeGeometryNameToProto[sipBind4802]),
    sipBind4799 &&
      sipBind4801 !== undefined &&
      sipBind4801 !== workbookDt.SHAPE_GEOMETRY_UNSPECIFIED &&
      sipBind4801 !== workbookDt.UNRECOGNIZED &&
      sipBind4801 !== workbookDt.SHAPE_GEOMETRY_RECT &&
      sipBind4786 &&
      sipH.paintMaskedImage(sipIn654, sipIn655, {
        frame: sipBind4785,
        geometry: sipBind4801,
        adjustmentList: sipBind4799.adjustmentList,
        fill: sipBind4787,
        bitmap: sipBind4786,
      }))
  ) {
    sipH.bh290(sipIn654, sipBind4785);
    sipH.bh648(
      sipIn653,
      sipIn654,
      sipIn655,
      sipBind4800,
      width,
      height,
    );
    sipIn654.restore();
    return;
  }
  if (
    !sipBind4799 &&
    sipIn656.inheritedMaskSource &&
    sipBind4786 &&
    sipH.paintInheritedMask(sipIn654, sipIn655, {
      frame: sipBind4785,
      source: sipIn656.inheritedMaskSource,
      fill: sipBind4787,
      bitmap: sipBind4786,
      contentType: sipIn653.image?.contentType,
    })
  ) {
    sipH.strokeInheritedMask(sipIn654, sipIn655, {
      frame: sipBind4785,
      source: sipIn656.inheritedMaskSource,
      line: sipIn653.line,
    });
    return;
  }
  if (
    (sipH.bh290(sipIn654, sipBind4785),
    sipBind4800 &&
      (sipIn654.save(),
      sipH.bh647(sipIn654, sipBind4800, width, height),
      sipIn654.clip()),
    sipBind4786)
  ) {
    let sipBind17164 = sipH.bh208(sipBind4786, {
      pictureEffects: sipBind4787.pictureEffects,
      contentType: sipIn653.image?.contentType,
      themeMap: sipIn655,
    });
    sipIn654.save();
    sipIn654.globalAlpha *= sipBind17164.opacity;
    sipIn654.drawImage(
      sipBind17164.source,
      sipBind4788,
      sipBind4789,
      sipBind4790,
      sipBind4791,
      sipBind4794,
      sipBind4795,
      sipBind4796,
      sipBind4797,
    );
    sipIn654.restore();
  } else
    sipH.paintImagePlaceholder({
      width,
      height,
      ctx: sipIn654,
      themeMap: sipIn655,
    });
  sipBind4800 && sipIn654.restore();
  sipH.bh648(
    sipIn653,
    sipIn654,
    sipIn655,
    sipBind4800,
    width,
    height,
  );
  sipIn654.restore();
}

/** Legacy alias. */
export const $Te = paintSlideImage;
