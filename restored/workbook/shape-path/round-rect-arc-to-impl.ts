// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: rounded-rect canvas paths via arcTo.
// Stage-3 wave-112.

export function roundRectPathArcTo(
  spIn6433: any,
  spIn6434: any,
  spIn6435: any,
  spIn6436: any,
  spIn6437: any,
  spIn6438: any,
) {
  let spBind16637 = Math.max(
    0,
    Math.min(spIn6438, Math.min(spIn6436, spIn6437) / 2),
  );
  spIn6433.moveTo(spIn6434 + spBind16637, spIn6435);
  spIn6433.arcTo(
    spIn6434 + spIn6436,
    spIn6435,
    spIn6434 + spIn6436,
    spIn6435 + spIn6437,
    spBind16637,
  );
  spIn6433.arcTo(
    spIn6434 + spIn6436,
    spIn6435 + spIn6437,
    spIn6434,
    spIn6435 + spIn6437,
    spBind16637,
  );
  spIn6433.arcTo(
    spIn6434,
    spIn6435 + spIn6437,
    spIn6434,
    spIn6435,
    spBind16637,
  );
  spIn6433.arcTo(
    spIn6434,
    spIn6435,
    spIn6434 + spIn6436,
    spIn6435,
    spBind16637,
  );
  spIn6433.closePath();
}
export function roundRectPathBeginArcTo(
  spIn6106: any,
  spIn6107: any,
  spIn6108: any,
  spIn6109: any,
  spIn6110: any,
  spIn6111: any,
) {
  let spBind16182 = Math.max(
    0,
    Math.min(spIn6111, Math.min(spIn6109, spIn6110) / 2),
  );
  spIn6106.beginPath();
  spIn6106.moveTo(spIn6107 + spBind16182, spIn6108);
  spIn6106.arcTo(
    spIn6107 + spIn6109,
    spIn6108,
    spIn6107 + spIn6109,
    spIn6108 + spIn6110,
    spBind16182,
  );
  spIn6106.arcTo(
    spIn6107 + spIn6109,
    spIn6108 + spIn6110,
    spIn6107,
    spIn6108 + spIn6110,
    spBind16182,
  );
  spIn6106.arcTo(
    spIn6107,
    spIn6108 + spIn6110,
    spIn6107,
    spIn6108,
    spBind16182,
  );
  spIn6106.arcTo(
    spIn6107,
    spIn6108,
    spIn6107 + spIn6109,
    spIn6108,
    spBind16182,
  );
  spIn6106.closePath();
}

export const swe = roundRectPathArcTo;
export const Swe = roundRectPathBeginArcTo;
