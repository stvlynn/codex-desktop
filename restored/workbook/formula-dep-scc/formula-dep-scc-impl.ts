// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula dependency SCCs / circular groups (legacy VXe).
// Stage-3 wave-106.

export function findFormulaSccs(sccIn1188: any, sccIn1189: any, sccIn1190: any) {
  let sccBind6719 = new Map();
  for (let sccBind18469 of sccIn1189) {
    let sccBind19003 =
      sccIn1188.dependents.get(sccBind18469);
    if (sccBind19003)
      for (let sccBind20684 of sccBind19003) {
        if (!sccIn1189.has(sccBind20684)) continue;
        let sccBind21242 =
          sccBind6719.get(sccBind18469);
        sccBind21242 ||
          ((sccBind21242 = []),
          sccBind6719.set(sccBind18469, sccBind21242));
        sccBind21242.push(sccBind20684);
      }
  }
  let sccBind6720 = [],
    sccBind6721 = new Map(),
    sccBind6722 = new Map(),
    sccBind6723 = [],
    sccBind6724 = new Set(),
    sccBind6725 = 0,
    sccBind6726 = (sccIn2141) => {
      sccBind6721.set(sccIn2141, sccBind6725);
      sccBind6722.set(sccIn2141, sccBind6725);
      sccBind6725 += 1;
      sccBind6723.push(sccIn2141);
      sccBind6724.add(sccIn2141);
      for (let sccBind13901 of sccBind6719.get(
        sccIn2141,
      ) ?? [])
        if (sccIn1190.has(sccBind13901)) {
          if (!sccBind6721.has(sccBind13901)) {
            sccBind6726(sccBind13901);
            let sccBind19996 =
                sccBind6722.get(sccBind13901),
              sccBind19997 = sccBind6722.get(sccIn2141);
            sccBind19996 !== undefined &&
              sccBind19997 !== undefined &&
              sccBind6722.set(
                sccIn2141,
                Math.min(sccBind19997, sccBind19996),
              );
          } else if (sccBind6724.has(sccBind13901)) {
            let sccBind20543 =
                sccBind6721.get(sccBind13901),
              sccBind20544 = sccBind6722.get(sccIn2141);
            sccBind20543 !== undefined &&
              sccBind20544 !== undefined &&
              sccBind6722.set(
                sccIn2141,
                Math.min(sccBind20544, sccBind20543),
              );
          }
        }
      if (
        sccBind6722.get(sccIn2141) ===
        sccBind6721.get(sccIn2141)
      ) {
        let sccBind16241 = [];
        for (; sccBind6723.length > 0; ) {
          let sccBind22029 = sccBind6723.pop();
          if (
            (sccBind6724.delete(sccBind22029),
            sccBind16241.push(sccBind22029),
            sccBind22029 === sccIn2141)
          )
            break;
        }
        if (sccBind16241.length > 1)
          sccBind6720.push(sccBind16241);
        else {
          let sccBind22216 = sccBind16241[0];
          (sccBind6719.get(sccBind22216) ?? []).includes(
            sccBind22216,
          ) && sccBind6720.push(sccBind16241);
        }
      }
    };
  for (let sccBind23065 of sccIn1190)
    sccBind6721.has(sccBind23065) ||
      sccBind6726(sccBind23065);
  return sccBind6720;
}

/** Legacy alias. */
export const VXe = findFormulaSccs;
