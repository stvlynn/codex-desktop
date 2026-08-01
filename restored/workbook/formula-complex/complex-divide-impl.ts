// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: complex format + divide (legacy bh886/892).
// Stage-3 wave-126.

import { fcxH } from "./boundary-hooks";
import { complexReal, complexImag } from "./formula-complex-impl";
import {
  hasFormulaError as isComplexErrorArgs,
  flattenMatrixArgs as coerceComplexNumber
} from "../formula-token-utils";

export function formatComplexPair(fcxIn5070: any, fcxIn5071: any, fcxIn5072: any, ) {
  if (
    ((fcxIn5070 = coerceComplexNumber(fcxIn5070)),
    (fcxIn5071 = coerceComplexNumber(fcxIn5071)),
    isComplexErrorArgs(fcxIn5070, fcxIn5071))
  )
    return fcxIn5070;
  if (
    ((fcxIn5072 =
      fcxIn5072 === undefined ? "i" : fcxIn5072),
    fcxIn5072 !== "i" && fcxIn5072 !== "j")
  )
    return fcxH.VALUE_ERROR;
  if (fcxIn5070 === 0 && fcxIn5071 === 0) return 0;
  if (fcxIn5070 === 0)
    return fcxIn5071 === 1
      ? fcxIn5072
      : fcxIn5071.toString() + fcxIn5072;
  if (fcxIn5071 === 0) return fcxIn5070.toString();
  {
    let fcxBind21875 = fcxIn5071 > 0 ? "+" : "";
    return (
      fcxIn5070.toString() +
      fcxBind21875 +
      (fcxIn5071 === 1
        ? fcxIn5072
        : fcxIn5071.toString() + fcxIn5072)
    );
  }
}
export function complexDivide(fcxIn5273: any, fcxIn5274: any) {
  let fcxBind14867 = complexReal(fcxIn5273),
    fcxBind14868 = complexImag(fcxIn5273),
    fcxBind14869 = complexReal(fcxIn5274),
    fcxBind14870 = complexImag(fcxIn5274);
  if (
    isComplexErrorArgs(
      fcxBind14867,
      fcxBind14868,
      fcxBind14869,
      fcxBind14870,
    )
  )
    return fcxH.VALUE_ERROR;
  let fcxBind14871 = fcxIn5273.substring(
      fcxIn5273.length - 1,
    ),
    fcxBind14872 = fcxIn5274.substring(
      fcxIn5274.length - 1,
    ),
    fcxBind14873 = "i";
  if (
    ((fcxBind14871 === "j" || fcxBind14872 === "j") &&
      (fcxBind14873 = "j"),
    fcxBind14869 === 0 && fcxBind14870 === 0)
  )
    return fcxH.NUM_ERROR;
  let fcxBind14874 =
    fcxBind14869 * fcxBind14869 +
    fcxBind14870 * fcxBind14870;
  return formatComplexPair(
    (fcxBind14867 * fcxBind14869 +
      fcxBind14868 * fcxBind14870) /
      fcxBind14874,
    (fcxBind14868 * fcxBind14869 -
      fcxBind14867 * fcxBind14870) /
      fcxBind14874,
    fcxBind14873,
  );
}

/** Legacy aliases (wave-126). */
