// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: text-frame embedded element layout (legacy helper643).
// Stage-3 wave-99.

import { Jn, Yn } from "../presentation-protobuf";
import { workbookGt } from "../text-style";
import { tfeH } from "./boundary-hooks";

void Jn;
void Yn;
void workbookGt;
void tfeH;

export function layoutTextFrameEmbeds(tfeIn703: any, tfeIn704: any, tfeIn705: any, tfeIn706: any, tfeIn707: any, tfeIn708: any, ) {
  let tfeBind4998 = tfeH.bh644(
      tfeIn703,
      tfeIn705,
    ),
    tfeBind4999 = tfeIn704.xPx + tfeBind4998.left,
    tfeBind5000 = tfeIn704.yPx + tfeBind4998.top,
    tfeBind5001 = Math.max(
      0,
      tfeIn704.widthPx -
        tfeBind4998.left -
        tfeBind4998.right,
    ),
    tfeBind5002 = tfeBind5000,
    tfeBind5003 = tfeBind5000,
    tfeBind5004 = [],
    tfeBind5005 = [],
    tfeBind5006 = (tfeIn703.paragraphs?.length ?? 0) === 0;
  for (let tfeBind7189 of tfeIn703.elements ?? []) {
    if (tfeH.isEmbedElement(tfeBind7189)) {
      if (!tfeBind5006) continue;
      let tfeBind14642 =
          tfeBind7189.bbox?.widthEmu !== undefined &&
          tfeBind7189.bbox.widthEmu > 0
            ? Math.min(
                tfeBind5001,
                tfeBind7189.bbox.widthEmu * workbookGt,
              )
            : tfeBind5001,
        tfeBind14643 = tfeH.measureEmbedElement(
          tfeBind7189,
          tfeIn706,
          tfeIn707,
          tfeBind14642,
          tfeIn708,
        );
      tfeBind5004.push({
        element: tfeBind7189,
        xPx: tfeBind4999,
        yPx: tfeBind5002,
        widthPx: tfeBind14642,
        heightPx: tfeBind14643,
      });
      tfeBind5005.push(tfeBind5004.length - 1);
      tfeBind5002 += tfeBind14643;
      tfeBind5003 = Math.max(tfeBind5003, tfeBind5002);
      continue;
    }
    if (tfeBind7189.placement?.type === tfeBind1273) {
      let tfeBind11594 = tfeH.isAbsoluteChild(tfeBind7189);
      if (!tfeBind11594) continue;
      let tfeBind11595 = tfeH.normalizeTextContent(tfeBind7189),
        tfeBind11596 = tfeH.bh642(tfeBind7189),
        tfeBind11597 = tfeBind4999;
      tfeBind11596 === Jn.ALIGNMENT_TYPE_CENTER
        ? (tfeBind11597 += Math.max(
            0,
            (tfeBind5001 - tfeBind11594.widthPx) / 2,
          ))
        : tfeBind11596 === Jn.ALIGNMENT_TYPE_RIGHT &&
          (tfeBind11597 += Math.max(
            0,
            tfeBind5001 - tfeBind11594.widthPx,
          ));
      tfeBind5004.push({
        element: tfeBind7189,
        xPx: tfeBind11597,
        yPx: tfeBind5002 + tfeBind11595.topPx,
        widthPx: tfeBind11594.widthPx,
        heightPx: tfeBind11594.heightPx,
      });
      tfeBind5005.push(tfeBind5004.length - 1);
      tfeBind5002 +=
        tfeBind11595.topPx +
        tfeBind11594.heightPx +
        tfeBind11595.bottomPx;
      tfeBind5003 = Math.max(tfeBind5003, tfeBind5002);
      continue;
    }
    let tfeBind7418 = tfeH.absoluteChildFrame(
      tfeBind7189,
      tfeIn703,
      tfeIn704,
      tfeBind4998,
    );
    tfeBind7418 &&
      (tfeBind5004.push({
        element: tfeBind7189,
        ...tfeBind7418,
      }),
      (tfeBind5003 = Math.max(
        tfeBind5003,
        tfeBind7418.yPx + tfeBind7418.heightPx,
      )));
  }
  let tfeBind5007 = Math.max(
      0,
      tfeBind5002 - tfeBind5000,
    ),
    tfeBind5008 = Math.max(
      0,
      tfeIn704.heightPx -
        tfeBind4998.top -
        tfeBind4998.bottom,
    ),
    tfeBind5009 = tfeH.bh640(tfeIn703.anchor),
    tfeBind5010 = 0;
  if (
    (tfeBind5005.length > 0 &&
    tfeBind5008 > tfeBind5007 &&
    tfeBind5009 === Yn.ANCHOR_TYPE_MIDDLE
      ? (tfeBind5010 = (tfeBind5008 - tfeBind5007) / 2)
      : tfeBind5005.length > 0 &&
        tfeBind5008 > tfeBind5007 &&
        tfeBind5009 === Yn.ANCHOR_TYPE_BOTTOM &&
        (tfeBind5010 = tfeBind5008 - tfeBind5007),
    tfeBind5010 > 0)
  ) {
    for (let tfeBind22151 of tfeBind5005) {
      let tfeBind22522 = tfeBind5004[tfeBind22151];
      tfeBind22522 &&
        (tfeBind5004[tfeBind22151] = {
          ...tfeBind22522,
          yPx: tfeBind22522.yPx + tfeBind5010,
        });
    }
    tfeBind5003 = tfeBind5004.reduce(
      (accumulator, current) =>
        Math.max(accumulator, current.yPx + current.heightPx),
      tfeBind5000,
    );
  }
  return {
    heightPx: Math.max(
      0,
      tfeBind5003 - tfeIn704.yPx + tfeBind4998.bottom,
    ),
    frames: tfeBind5004,
  };
}

/** Legacy alias. */
export const workbookHelper643 = layoutTextFrameEmbeds;
