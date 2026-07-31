// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-41: duck-typed fill.toConfig extractor.

export function fillToConfig(opIn6840: unknown): unknown {
  if (
    !opIn6840 ||
    typeof opIn6840 != "object" ||
    !("toConfig" in opIn6840) ||
    typeof opIn6840.toConfig != "function"
  )
    return;
  let opBind17160 = opIn6840.toConfig();
  if (
    opBind17160 &&
    !(
      typeof opBind17160 == "object" &&
      opBind17160 &&
      "type" in opBind17160 &&
      opBind17160.type === "proto"
    )
  )
    return opBind17160;
}
