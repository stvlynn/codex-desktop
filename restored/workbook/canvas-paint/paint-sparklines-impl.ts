// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: sparkline cell paint.
// Stage-3 wave-113.

export function paintSparklines(
  cvpIn3191: any,
  cvpIn3192: any,
  cvpIn3193: any,
  cvpIn3194: any,
  cvpIn3195: any,
  cvpIn3196: any,
  cvpIn3197: any,
  cvpIn3198: any,
  cvpIn3199: any,
) {
  if (!(!cvpIn3192 || cvpIn3192.length === 0))
    for (let cvpBind12409 of cvpIn3192) {
      let cvpBind12716 = cvpIn3193[cvpBind12409.col],
        cvpBind12717 = cvpIn3193[cvpBind12409.col + 1],
        cvpBind12718 = cvpIn3194[cvpBind12409.row],
        cvpBind12719 = cvpIn3194[cvpBind12409.row + 1];
      if (
        cvpBind12716 === undefined ||
        cvpBind12717 === undefined ||
        cvpBind12718 === undefined ||
        cvpBind12719 === undefined
      )
        continue;
      let cvpBind12720 = 40 + cvpBind12716 - cvpIn3195,
        cvpBind12721 = 20 + cvpBind12718 - cvpIn3196,
        cvpBind12722 = cvpBind12717 - cvpBind12716,
        cvpBind12723 = cvpBind12719 - cvpBind12718,
        cvpBind12724 = cvpBind12720 + cvpBind12722,
        cvpBind12725 = cvpBind12721 + cvpBind12723;
      cvpBind12724 < 0 ||
        cvpBind12725 < 0 ||
        cvpBind12720 > cvpIn3197 ||
        cvpBind12721 > cvpIn3198 ||
        cvpBind12722 <= 0 ||
        cvpBind12723 <= 0 ||
        YCe(
          cvpIn3191,
          cvpBind12409,
          {
            x: cvpBind12720,
            y: cvpBind12721,
            width: cvpBind12722,
            height: cvpBind12723,
          },
          cvpIn3199,
        );
    }
}

export const JCe = paintSparklines;
