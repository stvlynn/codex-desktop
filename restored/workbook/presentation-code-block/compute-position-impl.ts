// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: code-block position/size.
// Stage-3 wave-111.

import { lengthUnitNameByKey } from "../chart-proto-name-maps";
import { emuToPoints } from "../line";
import {
  workbookBinding1596,
  workbookBinding1597,
  workbookBinding1600,
  workbookBinding1601,
  workbookBinding1602,
  workbookBinding1603,
  workbookBinding1604,
  workbookBinding1605,
  workbookBinding1606,
  workbookBinding1607,
  _X,
} from "../mermaid-slide-helpers";

void lengthUnitNameByKey;
void emuToPoints;
void workbookBinding1596;
void workbookBinding1597;
void workbookBinding1600;
void workbookBinding1601;
void workbookBinding1602;
void workbookBinding1603;
void workbookBinding1604;
void workbookBinding1605;
void workbookBinding1606;
void workbookBinding1607;
void _X;

export function computeCodeBlockPosition(
  pcbIn3545: any,
  pcbIn3546: any,
  pcbIn3547: any,
  pcbIn3548: any,
  pcbIn3549: any,
) {
  let pcbBind12020 = defaultCodeBlockFrame(pcbIn3545),
    pcbBind12021 = pcbIn3546?.unit ?? lengthUnitNameByKey.pixels,
    pcbBind12022 =
      resolveLengthPx(pcbIn3546?.left, pcbBind12021) ?? pcbBind12020.left,
    pcbBind12023 =
      resolveLengthPx(pcbIn3546?.top, pcbBind12021) ?? pcbBind12020.top;
  if (pcbIn3546 === undefined)
    return pcbIn3549 === "content"
      ? measureCodeBlockContent(
          pcbIn3545,
          pcbIn3547,
          pcbIn3548,
          pcbBind12022,
          pcbBind12023,
        )
      : pcbBind12020;
  if (pcbIn3549 === "content") {
    let pcbBind19745 = measureCodeBlockContent(
      pcbIn3545,
      pcbIn3547,
      pcbIn3548,
      pcbBind12022,
      pcbBind12023,
    );
    return {
      left: pcbBind12022,
      top: pcbBind12023,
      width:
        resolveLengthPx(pcbIn3546.width, pcbBind12021) ?? pcbBind19745.width,
      height:
        resolveLengthPx(pcbIn3546.height, pcbBind12021) ?? pcbBind19745.height,
    };
  }
  return {
    left: pcbBind12022,
    top: pcbBind12023,
    width: resolveLengthPx(pcbIn3546.width, pcbBind12021) ?? pcbBind12020.width,
    height:
      resolveLengthPx(pcbIn3546.height, pcbBind12021) ?? pcbBind12020.height,
  };
}
export function measureCodeBlockContent(
  pcbIn5129: any,
  pcbIn5130: any,
  pcbIn5131: any,
  pcbIn5132: any,
  pcbIn5133: any,
) {
  let pcbBind14626 = pcbIn5130.split("\n"),
    pcbBind14627 =
      Math.max(
        ...pcbBind14626.map((item) => item.replace(/\t/g, "    ").length),
      ) *
        workbookBinding1597 +
      workbookBinding1603 +
      workbookBinding1604,
    pcbBind14628 =
      (pcbIn5131 ? workbookBinding1602 : 0) +
      (pcbIn5131 ? workbookBinding1605 : workbookBinding1606) +
      pcbBind14626.length * workbookBinding1596 +
      workbookBinding1607,
    pcbBind14629 = Math.max(
      1,
      pcbIn5129.frame.width - pcbIn5132 - workbookBinding1600,
    ),
    pcbBind14630 = Math.max(
      1,
      pcbIn5129.frame.height - pcbIn5133 - workbookBinding1601,
    );
  return {
    left: pcbIn5132,
    top: pcbIn5133,
    width: Math.min(pcbBind14627, pcbBind14629),
    height: Math.min(pcbBind14628, pcbBind14630),
  };
}
export function defaultCodeBlockFrame(pcbIn10016: any) {
  let pcbBind20514 = pcbIn10016.frame;
  return {
    left: workbookBinding1600,
    top: _X,
    width: pcbBind20514.width - workbookBinding1600 * 2,
    height: pcbBind20514.height - _X - workbookBinding1601,
  };
}
export function resolveLengthPx(pcbIn12838: any, pcbIn12839: any) {
  if (pcbIn12838 !== undefined)
    return pcbIn12839 === lengthUnitNameByKey.emu
      ? emuToPoints(pcbIn12838)
      : pcbIn12838;
}

export const bAe = computeCodeBlockPosition;
export const workbookHelper766 = measureCodeBlockContent;
export const xAe = defaultCodeBlockFrame;
export const workbookHelper767 = resolveLengthPx;
