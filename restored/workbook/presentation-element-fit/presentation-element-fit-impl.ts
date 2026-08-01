// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: remap + fit presentation elements (legacy LIe/RIe/Y$).
// Stage-3 wave-116.

import { pelH } from "./boundary-hooks";

export function remapElementIds(pelIn2821: any, pelIn2822: any) {
  let pelBind10574 =
      pelIn2821.elements.items.reduce((accumulator, current) => {
        let pelBind21648 = Number(current.id);
        return Number.isFinite(pelBind21648)
          ? Math.max(accumulator, pelBind21648)
          : accumulator;
      }, 0) + 1,
    pelBind10575 = new Map(),
    pelBind10576 = pelIn2822.map((item) => {
      let pelBind19206 = {
        ...item,
        id: String(pelBind10574),
        connector: item.connector
          ? {
              ...item.connector,
            }
          : undefined,
      };
      return (
        pelBind10575.set(item.id, pelBind19206.id),
        (pelBind10574 += 1),
        pelBind19206
      );
    });
  for (let pelBind17373 of pelBind10576) {
    if (!pelBind17373.connector) continue;
    let pelBind17865 = pelBind10575.get(pelBind17373.connector.fromElementId);
    pelBind17865 !== undefined &&
      (pelBind17373.connector.fromElementId = pelBind17865);
    let pelBind17866 = pelBind10575.get(pelBind17373.connector.toElementId);
    pelBind17866 !== undefined &&
      (pelBind17373.connector.toElementId = pelBind17866);
  }
  return pelBind10576;
}
export function fitElementsInBbox(
  pelIn1922: any,
  pelIn1923: any,
  pelIn1924: any,
) {
  let pelBind8642 = pelH.emuToPx(pelIn1923.xEmu ?? 0),
    pelBind8643 = pelH.emuToPx(pelIn1923.yEmu ?? 0),
    pelBind8644 = pelH.emuToPx(pelIn1923.widthEmu ?? 0),
    pelBind8645 = pelH.emuToPx(pelIn1923.heightEmu ?? 0),
    pelBind8646 = pelIn1924?.unit ?? pelBind384.pixels,
    pelBind8647 = Y$(pelIn1924?.left, pelBind8646) ?? 0,
    pelBind8648 = Y$(pelIn1924?.top, pelBind8646) ?? 0,
    pelBind8649 = Y$(pelIn1924?.width, pelBind8646) ?? pelBind8644,
    pelBind8650 = Y$(pelIn1924?.height, pelBind8646) ?? pelBind8645,
    pelBind8651 = pelBind8644 > 0 ? pelBind8649 / pelBind8644 : 1,
    pelBind8652 = pelBind8645 > 0 ? pelBind8650 / pelBind8645 : 1,
    pelBind8653 = pelIn1924?.width !== undefined,
    pelBind8654 = pelIn1924?.height !== undefined,
    pelBind8655 = 1;
  pelBind8653 && pelBind8654
    ? (pelBind8655 = Math.min(pelBind8651, pelBind8652))
    : pelBind8653
      ? (pelBind8655 = pelBind8651)
      : pelBind8654 && (pelBind8655 = pelBind8652);
  let pelBind8656 = pelBind8644 * pelBind8655,
    pelBind8657 = pelBind8645 * pelBind8655,
    pelBind8658 = pelBind8647 + (pelBind8649 - pelBind8656) / 2,
    pelBind8659 = pelBind8648 + (pelBind8650 - pelBind8657) / 2;
  for (let pelBind15455 of pelIn1922) {
    let pelBind15817 = pelBind15455.frame;
    pelBind15817 === undefined ||
      pelBind15817.left === undefined ||
      pelBind15817.top === undefined ||
      pelBind15817.width === undefined ||
      pelBind15817.height === undefined ||
      (pelBind15455.frame = {
        left: (pelBind15817.left - pelBind8642) * pelBind8655 + pelBind8658,
        top: (pelBind15817.top - pelBind8643) * pelBind8655 + pelBind8659,
        width: pelBind15817.width * pelBind8655,
        height: pelBind15817.height * pelBind8655,
      });
  }
}
export function coercePositionValue(pelIn12840: any, pelIn12841: any) {
  if (pelIn12840 !== undefined)
    return pelIn12841 === pelBind384.emu
      ? pelH.emuToPx(pelIn12840)
      : pelIn12840;
}

export const LIe = remapElementIds;
export const RIe = fitElementsInBbox;
export const Y$ = coercePositionValue;
