// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-26: SSF format cell values with numFmt (legacy wle / Binding229 + Binding582–583).

import { esmInit, toEsm } from "../../runtime/rolldown-runtime";
import workbookSsf from "../../vendor/ssf";
export function normalizeSsfThousandsSeparators(xfIn10831: unknown) {
  return xfIn10831.replace(
    /([0#?])((?:,+))\.([0#?]+)/g,
    (xfIn15848, xfIn15849, xfIn15850, xfIn15851) =>
      `${xfIn15849}.${xfIn15851}${xfIn15850}`,
  );
}
export function formatCellValueWithNumFmt(
  xfIn2938: unknown,
  xfIn2939: unknown,
  xfIn2940: unknown,
  xfIn2941: unknown,
) {
  if (xfIn2938.value === "" || xfIn2938.value == null) return "";
  let xfBind10859 = xfIn2939[xfIn2941 ?? xfIn2938.styleIndex ?? 0] ?? {},
    xfBind10860 =
      xfBind10859.numberFormatCode ??
      (xfBind10859.numberFormatId == null
        ? ""
        : `#${xfBind10859.numberFormatId}`),
    xfBind10861 = xfIn2940 ? `${xfIn2938.value}||${xfBind10860}` : undefined;
  if (xfBind10861 && xfIn2940?.has(xfBind10861))
    return xfIn2940.get(xfBind10861) ?? "";
  let xfBind10862 = xfIn2938.value,
    xfBind10863 = xfBind10859.numberFormatCode ?? xfBind10859.numberFormatId;
  if (xfBind10863 != null) {
    let xfBind18593 = Number(xfIn2938.value);
    if (!Number.isNaN(xfBind18593))
      try {
        let xfBind21919 =
          typeof xfBind10863 == "string"
            ? normalizeSsfThousandsSeparators(xfBind10863)
            : xfBind10863;
        xfBind10862 = ssfFormatEsmModule.default.format(
          xfBind21919,
          xfBind18593,
        );
      } catch {
        xfBind10862 = xfIn2938.value;
      }
  }
  return (xfBind10861 && xfIn2940?.set(xfBind10861, xfBind10862), xfBind10862);
}
export var ssfFormatEsmModule,
  ensureSsfFormatInit = esmInit(() => {
    ssfFormatEsmModule = toEsm(workbookSsf);
  });
