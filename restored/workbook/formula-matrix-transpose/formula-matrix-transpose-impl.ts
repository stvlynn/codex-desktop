// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: matrix transpose (legacy A8e).
// Stage-3 wave-128.

export function transposeMatrix(props: any) {
  if (!props || props.length === 0) return props ?? [];
  let fmtBind15147 = props.reduce(
    (accumulator, current) => Math.max(accumulator, current?.length ?? 0),
    0,
  );
  if (fmtBind15147 === 0) return [];
  let fmtBind15148 = [];
  for (let fmtBind19771 = 0; fmtBind19771 < fmtBind15147; fmtBind19771 += 1) {
    let fmtBind20687 = [];
    for (let fmtBind22007 = 0; fmtBind22007 < props.length; fmtBind22007 += 1) {
      let fmtBind22797 = props[fmtBind22007];
      fmtBind20687.push(fmtBind22797?.[fmtBind19771] ?? null);
    }
    fmtBind15148.push(fmtBind20687);
  }
  return fmtBind15148;
}

export const A8e = transposeMatrix;
