// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: N() / value coerce (legacy Yut).
// Stage-3 wave-131.

import { eQe } from "../formula-scalar-funcs";

export function Yut(props: any) {
  if (Array.isArray(props)) {
    if (props.length === 0)
      return {
        kind: "Error",
        code: "#VALUE!",
      };
    let fvcBind20324 = props[0];
    return Yut(
      (fvcBind20324 && fvcBind20324.length > 0 ? fvcBind20324[0] : null) ??
        null,
    );
  }
  if (props === null) return 0;
  if (typeof props == "string") {
    if (props === "") return 0;
    if (props.trim() === "")
      return {
        kind: "Error",
        code: "#VALUE!",
      };
  }
  return eQe(props);
}

export const coerceFormulaNumber = Yut;
