// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-44: formula token scanners (legacy Wpe/Gpe/Kpe/qpe/Jpe/Ype).

import { isDigitChar, isIdentContinueChar } from "./formula-char";

export function scanQuotedIdentifier(
  formulaIn5306: unknown,
  formulaIn5307: unknown,
) {
  let formulaBind14941 = formulaIn5307 + 1,
    formulaBind14942 = "";
  for (; formulaBind14941 < formulaIn5306.length; ) {
    let formulaBind18830 = formulaIn5306[formulaBind14941] ?? "";
    if (formulaBind18830 === "'") {
      if (formulaIn5306[formulaBind14941 + 1] === "'") {
        formulaBind14942 += "'";
        formulaBind14941 += 2;
        continue;
      }
      formulaBind14941 += 1;
      break;
    }
    formulaBind14942 += formulaBind18830;
    formulaBind14941 += 1;
  }
  return {
    token: {
      type: "Identifier",
      value: formulaBind14942,
      start: formulaIn5307,
      end: formulaBind14941,
    },
    next: formulaBind14941,
  };
}
export function scanStringLiteral(
  formulaIn5347: unknown,
  formulaIn5348: unknown,
) {
  let formulaBind15036 = formulaIn5348 + 1,
    formulaBind15037 = "";
  for (; formulaBind15036 < formulaIn5347.length; ) {
    let formulaBind18831 = formulaIn5347[formulaBind15036] ?? "";
    if (formulaBind18831 === '"') {
      if (formulaIn5347[formulaBind15036 + 1] === '"') {
        formulaBind15037 += '"';
        formulaBind15036 += 2;
        continue;
      }
      formulaBind15036 += 1;
      break;
    }
    formulaBind15037 += formulaBind18831;
    formulaBind15036 += 1;
  }
  return {
    token: {
      type: "String",
      value: formulaBind15037,
      start: formulaIn5348,
      end: formulaBind15036,
    },
    next: formulaBind15036,
  };
}
export function scanNumberOrOperator(
  formulaIn2588: unknown,
  formulaIn2589: unknown,
) {
  let formulaBind10014 = formulaIn2589,
    formulaBind10015 = false;
  for (
    ;
    formulaBind10014 < formulaIn2588.length &&
    isDigitChar(formulaIn2588[formulaBind10014]);
  ) {
    formulaBind10015 = true;
    formulaBind10014 += 1;
  }
  if (
    formulaBind10014 < formulaIn2588.length &&
    formulaIn2588[formulaBind10014] === "."
  )
    for (
      formulaBind10014 += 1;
      formulaBind10014 < formulaIn2588.length &&
      isDigitChar(formulaIn2588[formulaBind10014]);
    ) {
      formulaBind10015 = true;
      formulaBind10014 += 1;
    }
  if (
    formulaBind10014 < formulaIn2588.length &&
    (formulaIn2588[formulaBind10014] === "E" ||
      formulaIn2588[formulaBind10014] === "e") &&
    formulaBind10014 + 1 < formulaIn2588.length &&
    (isDigitChar(formulaIn2588[formulaBind10014 + 1]) ||
      formulaIn2588[formulaBind10014 + 1] === "+" ||
      formulaIn2588[formulaBind10014 + 1] === "-")
  )
    for (
      formulaBind10014 += 1,
        (formulaIn2588[formulaBind10014] === "+" ||
          formulaIn2588[formulaBind10014] === "-") &&
          (formulaBind10014 += 1);
      formulaBind10014 < formulaIn2588.length &&
      isDigitChar(formulaIn2588[formulaBind10014]);
    )
      formulaBind10014 += 1;
  return formulaBind10015
    ? {
        token: {
          type: "Number",
          value: formulaIn2588.slice(formulaIn2589, formulaBind10014),
          start: formulaIn2589,
          end: formulaBind10014,
        },
        next: formulaBind10014,
      }
    : {
        token: {
          type: "Operator",
          value: formulaIn2588[formulaIn2589] ?? "",
          start: formulaIn2589,
          end: formulaIn2589 + 1,
        },
        next: formulaIn2589 + 1,
      };
}
export function scanIdentifier(formulaIn8679: unknown, formulaIn8680: unknown) {
  let formulaBind19187 = formulaIn8680;
  for (
    ;
    formulaBind19187 < formulaIn8679.length &&
    isIdentContinueChar(formulaIn8679[formulaBind19187]);
  )
    formulaBind19187 += 1;
  return {
    token: {
      type: "Identifier",
      value: formulaIn8679.slice(formulaIn8680, formulaBind19187),
      start: formulaIn8680,
      end: formulaBind19187,
    },
    next: formulaBind19187,
  };
}
export function scanErrorLiteral(
  formulaIn4867: unknown,
  formulaIn4868: unknown,
) {
  let formulaBind14272 = formulaIn4868 + 1;
  for (; formulaBind14272 < formulaIn4867.length; ) {
    let formulaBind18887 = formulaIn4867[formulaBind14272] ?? "";
    if (/[A-Za-z0-9/?!]/.test(formulaBind18887)) {
      formulaBind14272 += 1;
      continue;
    }
    if (
      formulaBind18887 === "!" ||
      formulaBind18887 === "?" ||
      formulaBind18887 === "/"
    ) {
      formulaBind14272 += 1;
      continue;
    }
    break;
  }
  return (
    formulaIn4867[formulaBind14272 - 1],
    {
      token: {
        type: "Error",
        value: formulaIn4867.slice(formulaIn4868, formulaBind14272),
        start: formulaIn4868,
        end: formulaBind14272,
      },
      next: formulaBind14272,
    }
  );
}
export function scanStructuredRef(
  formulaIn5037: unknown,
  formulaIn5038: unknown,
) {
  let formulaBind14490 = formulaIn5038,
    formulaBind14491 = 0;
  for (; formulaBind14490 < formulaIn5037.length; ) {
    let formulaBind18832 = formulaIn5037[formulaBind14490] ?? "";
    if (formulaBind18832 === "[") {
      formulaBind14491 += 1;
      formulaBind14490 += 1;
      continue;
    }
    if (formulaBind18832 === "]") {
      if ((--formulaBind14491, (formulaBind14490 += 1), formulaBind14491 <= 0))
        break;
      continue;
    }
    formulaBind14490 += 1;
  }
  return {
    token: {
      type: "StructuredRef",
      value: formulaIn5037.slice(formulaIn5038, formulaBind14490),
      start: formulaIn5038,
      end: formulaBind14490,
    },
    next: formulaBind14490,
  };
}
