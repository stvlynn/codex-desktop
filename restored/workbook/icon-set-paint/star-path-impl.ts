// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: 5-point star path (legacy helper599 / endIconClip hook).
// Stage-3 wave-133.

export function workbookHelper599(ispIn6307: any) {
  ispIn6307.beginPath();
  for (let ispBind17862 = 0; ispBind17862 < 10; ispBind17862 += 1) {
    let ispBind18771 = ispBind17862 % 2 == 0 ? 0.46 : 0.2,
      ispBind18772 = -Math.PI / 2 + (Math.PI * ispBind17862) / 5,
      ispBind18773 = 0.5 + Math.cos(ispBind18772) * ispBind18771,
      ispBind18774 = 0.5 + Math.sin(ispBind18772) * ispBind18771;
    ispBind17862 === 0
      ? ispIn6307.moveTo(ispBind18773, ispBind18774)
      : ispIn6307.lineTo(ispBind18773, ispBind18774);
  }
  ispIn6307.closePath();
}

export const endIconClip = workbookHelper599;
export const drawStarPath = workbookHelper599;
