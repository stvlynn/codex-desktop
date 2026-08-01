// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: AVERAGEIF(S) criteria-column matcher (legacy helper #896).
// Stage-3 wave-106.

export function matchCriteriaColumns(fcmIn1913: any, fcmIn1914: any) {
  let fcmBind8614 = {};
  for (
    let fcmBind22935 = 1;
    fcmBind22935 < fcmIn1913[0].length;
    ++fcmBind22935
  )
    fcmBind8614[fcmBind22935] = true;
  let fcmBind8615 = fcmIn1914[0].length;
  for (
    let fcmBind22536 = 1;
    fcmBind22536 < fcmIn1914.length;
    ++fcmBind22536
  )
    fcmIn1914[fcmBind22536].length > fcmBind8615 &&
      (fcmBind8615 = fcmIn1914[fcmBind22536].length);
  for (
    let fcmBind11013 = 1;
    fcmBind11013 < fcmIn1913.length;
    ++fcmBind11013
  )
    for (
      let fcmBind11408 = 1;
      fcmBind11408 < fcmIn1913[fcmBind11013].length;
      ++fcmBind11408
    ) {
      let fcmBind11839 = false,
        fcmBind11840 = false;
      for (
        let fcmBind12984 = 0;
        fcmBind12984 < fcmIn1914.length;
        ++fcmBind12984
      ) {
        let fcmBind13622 = fcmIn1914[fcmBind12984];
        if (fcmBind13622.length < fcmBind8615) continue;
        let fcmBind13623 = fcmBind13622[0];
        if (
          fcmIn1913[fcmBind11013][0] === fcmBind13623
        ) {
          fcmBind11840 = true;
          for (
            let fcmBind16912 = 1;
            fcmBind16912 < fcmBind13622.length;
            ++fcmBind16912
          )
            if (!fcmBind11839)
              if (
                fcmBind13622[fcmBind16912] === undefined ||
                fcmBind13622[fcmBind16912] === "*"
              )
                fcmBind11839 = true;
              else {
                let fcmBind20744 = fcmHelper837(
                    fcmBind13622[fcmBind16912] + "",
                  ),
                  fcmBind20745 = [
                    fcmHelper836(
                      fcmIn1913[fcmBind11013][
                        fcmBind11408
                      ],
                      fcmBind1846,
                    ),
                  ].concat(fcmBind20744);
                fcmBind11839 =
                  fcmBind1847(fcmBind20745);
              }
        }
      }
      fcmBind11840 &&
        (fcmBind8614[fcmBind11408] =
          fcmBind8614[fcmBind11408] && fcmBind11839);
    }
  let fcmBind8616 = [];
  for (
    let fcmBind22750 = 0;
    fcmBind22750 < fcmIn1913[0].length;
    ++fcmBind22750
  )
    fcmBind8614[fcmBind22750] &&
      fcmBind8616.push(fcmBind22750 - 1);
  return fcmBind8616;
}

/** Legacy alias. */
/** Compat alias for barrels. */
export const workbookHelper896 = matchCriteriaColumns;
