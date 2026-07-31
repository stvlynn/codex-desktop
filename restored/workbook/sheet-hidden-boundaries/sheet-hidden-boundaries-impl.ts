// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: hidden row/col boundary markers (legacy ewe).
// Stage-3 wave-102.

export function computeHiddenBoundaries(shbIn802: any) {
  let { worksheet, rowHeights, colWidths, rowIndexRemap } = shbIn802,
    shbBind5411 = new Set();
  for (let shbBind22598 of worksheet.__getRows())
    shbBind22598.hidden === true &&
      shbBind5411.add(shbBind22598.index - 1);
  let shbBind5412 = [];
  if (shbBind5411.size > 0 && rowHeights.length > 1) {
    let shbBind10598 = rowHeights.length,
      shbBind10599 = Array(shbBind10598);
    for (
      let shbBind22546 = 0;
      shbBind22546 < shbBind10598;
      shbBind22546++
    )
      shbBind10599[shbBind22546] =
        rowIndexRemap && shbBind22546 < rowIndexRemap.length
          ? (rowIndexRemap[shbBind22546] ?? shbBind22546)
          : shbBind22546;
    let shbBind10600 = null,
      shbBind10601 = null;
    for (
      let shbBind12481 = 0;
      shbBind12481 < shbBind10598;
      shbBind12481++
    ) {
      let shbBind12875 = rowHeights[shbBind12481];
      if (shbBind12875 == null || shbBind12875 <= 0) continue;
      let shbBind12876 = shbBind10599[shbBind12481];
      if (shbBind12876 == null) {
        shbBind10600 = shbBind12481;
        shbBind10601 = null;
        continue;
      }
      if (shbBind10600 != null && shbBind10601 != null) {
        let shbBind17657 =
            Math.min(shbBind10601, shbBind12876) + 1,
          shbBind17658 =
            Math.max(shbBind10601, shbBind12876) - 1;
        if (shbBind17657 <= shbBind17658) {
          for (
            let shbBind21329 = shbBind17657;
            shbBind21329 <= shbBind17658;
            shbBind21329++
          )
            if (shbBind5411.has(shbBind21329)) {
              shbBind5412.push(shbBind10600);
              break;
            }
        }
      }
      shbBind10600 = shbBind12481;
      shbBind10601 = shbBind12876;
    }
  }
  let shbBind5413 = new Set();
  for (let shbBind18497 of worksheet.__getColumns()) {
    if (shbBind18497.hidden !== true) continue;
    let shbBind19480 = Math.max(0, (shbBind18497.min || 1) - 1),
      shbBind19481 = Math.max(
        shbBind19480,
        (shbBind18497.max ?? shbBind18497.min ?? 1) - 1,
      );
    for (
      let shbBind23035 = shbBind19480;
      shbBind23035 <= shbBind19481;
      shbBind23035++
    )
      shbBind5413.add(shbBind23035);
  }
  let shbBind5414 = [];
  if (shbBind5413.size > 0 && colWidths.length > 1) {
    let shbBind13000 = colWidths.length,
      shbBind13001 = null;
    for (
      let shbBind13899 = 0;
      shbBind13899 < shbBind13000;
      shbBind13899++
    ) {
      let shbBind14391 = colWidths[shbBind13899];
      if (
        !(shbBind14391 == null || shbBind14391 <= 0) &&
        !shbBind5413.has(shbBind13899)
      ) {
        if (shbBind13001 != null) {
          let shbBind17138 =
              Math.min(shbBind13001, shbBind13899) + 1,
            shbBind17139 =
              Math.max(shbBind13001, shbBind13899) - 1;
          if (shbBind17138 <= shbBind17139) {
            for (
              let shbBind21064 = shbBind17138;
              shbBind21064 <= shbBind17139;
              shbBind21064++
            )
              if (shbBind5413.has(shbBind21064)) {
                shbBind5414.push(shbBind13001);
                break;
              }
          }
        }
        shbBind13001 = shbBind13899;
      }
    }
  }
  return {
    rowBoundaries: shbBind5412,
    colBoundaries: shbBind5414,
  };
}

/** Legacy alias. */
export const ewe = computeHiddenBoundaries;
