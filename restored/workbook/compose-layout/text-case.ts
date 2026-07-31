// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-58: text-case map helpers (legacy MDe/NDe + Binding helpers 673–675).

import {
  isMathInline,
  isPlainRunList,
  isParagraphPartial,
} from "../detached-text";

export function mapTextCaseValue(clIn13000: any, clIn13001: any) {
  return Array.isArray(clIn13000)
    ? mapRunsTextCase(clIn13000, clIn13001)
    : mapParagraphTextCase(clIn13000, clIn13001);
}
export function mapRunsTextCase(clIn8393: any, clIn8394: any) {
  return (clIn8393 ?? []).map((item) =>
    typeof item == "string" || typeof item == "number"
      ? applyTextCase(String(item), clIn8394)
      : isMathInline(item)
        ? item
        : {
            ...item,
            run: applyTextCase(item.run, clIn8394),
          },
  );
}
export function mapParagraphTextCase(clIn9892: any, clIn9893: any) {
  return {
    ...clIn9892,
    runs: mapRunsTextCase(clIn9892.runs, clIn9893),
    paragraphStyle: clIn9892.paragraphStyle
      ? {
          ...clIn9892.paragraphStyle,
        }
      : undefined,
  };
}
export function applyTextCase(clIn10432: any, clIn10433: any) {
  return clIn10433 === "uppercase"
    ? clIn10432.toUpperCase()
    : clIn10433 === "lowercase"
      ? clIn10432.toLowerCase()
      : clIn10432;
}
export function isPlainRunListArray(props: any) {
  return props.every(
    (item) => isPlainRunList(item) || isParagraphPartial(item),
  );
}
