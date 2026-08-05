// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: rounded-rect canvas path (legacy NSe).
// Stage-3 wave-109.

export function roundRectPath(
  spIn4483: any,
  spIn4484: any,
  spIn4485: any,
  spIn4486: any,
  spIn4487: any,
  spIn4488: any,
) {
  let spBind13730 = Math.min(spIn4488, spIn4486 / 2, spIn4487 / 2);
  spIn4483.moveTo(spIn4484 + spBind13730, spIn4485);
  spIn4483.lineTo(spIn4484 + spIn4486 - spBind13730, spIn4485);
  spIn4483.quadraticCurveTo(
    spIn4484 + spIn4486,
    spIn4485,
    spIn4484 + spIn4486,
    spIn4485 + spBind13730,
  );
  spIn4483.lineTo(spIn4484 + spIn4486, spIn4485 + spIn4487 - spBind13730);
  spIn4483.quadraticCurveTo(
    spIn4484 + spIn4486,
    spIn4485 + spIn4487,
    spIn4484 + spIn4486 - spBind13730,
    spIn4485 + spIn4487,
  );
  spIn4483.lineTo(spIn4484 + spBind13730, spIn4485 + spIn4487);
  spIn4483.quadraticCurveTo(
    spIn4484,
    spIn4485 + spIn4487,
    spIn4484,
    spIn4485 + spIn4487 - spBind13730,
  );
  spIn4483.lineTo(spIn4484, spIn4485 + spBind13730);
  spIn4483.quadraticCurveTo(
    spIn4484,
    spIn4485,
    spIn4484 + spBind13730,
    spIn4485,
  );
  spIn4483.closePath();
}

/** Legacy alias. */
export const NSe = roundRectPath;
