// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart title band reservation (legacy uSe).
// Stage-3 wave-104.

import { clpH } from "./boundary-hooks";

void clpH;

export function reserveTitleBand(clpIn1280: any, clpIn1281: any, clpIn1282: any, clpIn1283: any = clpH.titleHeightFrac, ) {
  if (!clpH.titleText(clpIn1280).trim())
    return {
      text: "",
      reserved: 0,
      layoutHeight: 0,
    };
  let clpBind6935 = clpIn1280.titlePlacement;
  if (clpBind6935 === "none")
    return {
      text: "",
      reserved: 0,
      layoutHeight: 0,
    };
  let clpBind6936 = {
      x: clpIn1281.x,
      y: clpIn1281.y,
      width: clpIn1281.width,
      height: Math.max(0, clpIn1281.height * clpIn1283),
    },
    clpBind6937 = clpBind6936;
  clpIn1280.titleManualLayout &&
    (clpBind6937 = clpH.applyManualLayout(
      clpIn1281,
      clpBind6936,
      clpIn1280.titleManualLayout,
    ));
  let clpBind6938 = clpIn1280.titleManualLayout?.w;
  if (
    clpIn1280.titleManualLayout &&
    clpIn1280.plotAreaManualLayout &&
    (clpBind6938 === undefined || !Number.isFinite(clpBind6938))
  ) {
    let clpBind20508 = clpH.applyManualLayout(
        clpIn1281,
        clpBind6936,
        clpIn1280.plotAreaManualLayout,
      ),
      clpBind20509 =
        clpBind20508.x + clpBind20508.width;
    clpBind6937 = {
      ...clpBind6937,
      width: Math.min(
        clpBind6937.width,
        Math.max(0, clpBind20509 - clpBind6937.x),
      ),
    };
  }
  let clpBind6939 = clpH.layoutTitleElement(
      clpIn1280,
      clpIn1282,
      clpBind6937,
    ),
    clpBind6940 = clpBind6939.layoutHeight;
  if (clpBind6940 <= 0 || !clpBind6939.element)
    return {
      text: "",
      reserved: 0,
      layoutHeight: 0,
    };
  let clpBind6941 = clpIn1280.titleManualLayout?.h,
    clpBind6942 =
      clpBind6941 !== undefined && Number.isFinite(clpBind6941),
    clpBind6943 = Math.min(
      clpBind6937.height,
      clpBind6940 + clpH.titlePadPx,
    );
  clpBind6942 && (clpBind6943 = clpBind6937.height);
  let clpBind6944 = {
      x: clpBind6937.x,
      y: clpBind6937.y,
      width: clpBind6937.width,
      height: clpBind6943,
    },
    clpBind6945 = 0;
  return (
    clpBind6935 !== "centeredOverlay" &&
      (clpBind6945 = Math.min(
        clpIn1281.height,
        Math.max(0, clpBind6944.y - clpIn1281.y) +
          clpBind6944.height,
      )),
    {
      text: clpBind6939.text,
      element: clpBind6939.element,
      rect: clpBind6944,
      reserved: clpBind6945,
      layoutHeight: clpBind6940,
    }
  );
}

/** Legacy alias. */
export const uSe = reserveTitleBand;
