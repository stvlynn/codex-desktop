// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-51: AST eval + function/call/range readers (single public export).
import { IF_TRUE_SENTINEL, IF_FALSE_SENTINEL } from "./formula-array-constants";
import {
  createArrayValue,
  isArrayValue,
  cloneArrayValues,
  mapArrayValue,
  attachRangeMetadata,
  getRangeMetadata,
  makeErrorValue,
  isErrorValue,
  isLambdaValue,
  isRefErrorName,
} from "./array-value";
import { coerceToNumberOrError, cellAddressKey } from "./coerce";
import { applyUnaryOp, applyArithmeticOp } from "./ops-arith";
import { applyConcatOp, applyCompareOp } from "./ops-compare";

export function evaluateFormulaNode(
  formulaArrayIn2845: any,
  formulaArrayIn2846: any,
) {
  switch (formulaArrayIn2845.kind) {
    case "NumberLiteral":
      return formulaArrayIn2845.value;
    case "StringLiteral":
      return formulaArrayIn2845.value;
    case "BooleanLiteral":
      return formulaArrayIn2845.value;
    case "ErrorLiteral":
      return makeErrorValue(formulaArrayIn2845.value);
    case "ArrayLiteral":
      return createArrayValue(
        formulaArrayIn2845.elements.map((item) =>
          item.map((_item) => evaluateFormulaNode(_item, formulaArrayIn2846)),
        ),
      );
    case "RangeRef":
      return evaluateRangeRef(formulaArrayIn2845.ref, formulaArrayIn2846);
    case "FunctionCall":
      return evaluateFunctionCall(formulaArrayIn2845, formulaArrayIn2846);
    case "CallExpr":
      return evaluateCallExpr(formulaArrayIn2845, formulaArrayIn2846);
    case "UnaryOp":
      return evaluateUnaryOp(formulaArrayIn2845, formulaArrayIn2846);
    case "BinaryOp":
      return evaluateBinaryOp(formulaArrayIn2845, formulaArrayIn2846);
    case "MissingArg":
      return null;
    default:
      return makeErrorValue("#NOT_IMPLEMENTED!");
  }
}
function evaluateUnaryOp(formulaArrayIn10793, formulaArrayIn10794) {
  let formulaArrayBind21324 = evaluateFormulaNode(
    formulaArrayIn10793.expr,
    formulaArrayIn10794,
  );
  return isErrorValue(formulaArrayBind21324)
    ? formulaArrayBind21324
    : isArrayValue(formulaArrayBind21324)
      ? mapArrayValue(formulaArrayBind21324, (formulaArrayIn16380) =>
          applyUnaryOp(formulaArrayIn10793.op, formulaArrayIn16380),
        )
      : applyUnaryOp(formulaArrayIn10793.op, formulaArrayBind21324);
}
function evaluateBinaryOp(formulaArrayIn3821, formulaArrayIn3822) {
  if (formulaArrayIn3821.op === ":")
    return evaluateRangeColon(
      formulaArrayIn3821.left,
      formulaArrayIn3821.right,
      formulaArrayIn3822,
    );
  let formulaArrayBind12617 = evaluateFormulaNode(
    formulaArrayIn3821.left,
    formulaArrayIn3822,
  );
  if (isErrorValue(formulaArrayBind12617)) return formulaArrayBind12617;
  let formulaArrayBind12618 = evaluateFormulaNode(
    formulaArrayIn3821.right,
    formulaArrayIn3822,
  );
  if (isErrorValue(formulaArrayBind12618)) return formulaArrayBind12618;
  switch (formulaArrayIn3821.op) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "^":
      return applyArithmeticOp(
        formulaArrayIn3821.op,
        formulaArrayBind12617,
        formulaArrayBind12618,
      );
    case "&":
      return applyConcatOp(formulaArrayBind12617, formulaArrayBind12618);
    case "=":
    case "<>":
    case "<":
    case ">":
    case "<=":
    case ">=":
      return applyCompareOp(
        formulaArrayIn3821.op,
        formulaArrayBind12617,
        formulaArrayBind12618,
      );
    default:
      return makeErrorValue("#VALUE!");
  }
}
function evaluateRangeColon(
  formulaArrayIn3538,
  formulaArrayIn3539,
  formulaArrayIn3540,
) {
  let formulaArrayBind12007 = resolveCellAddrFromNode(
    formulaArrayIn3538,
    formulaArrayIn3540,
  );
  if (isErrorValue(formulaArrayBind12007)) return formulaArrayBind12007;
  let formulaArrayBind12008 = resolveCellAddrFromNode(
    formulaArrayIn3539,
    formulaArrayIn3540,
  );
  if (isErrorValue(formulaArrayBind12008)) return formulaArrayBind12008;
  let formulaArrayBind12009 =
    formulaArrayBind12007.sheet?.sheetName ??
    formulaArrayBind12008.sheet?.sheetName ??
    formulaArrayIn3540.currentSheet;
  if (!formulaArrayBind12009) return makeErrorValue("#REF!");
  let formulaArrayBind12010 =
      formulaArrayBind12007.sheet?.sheetName ?? formulaArrayBind12009,
    formulaArrayBind12011 =
      formulaArrayBind12008.sheet?.sheetName ?? formulaArrayBind12009;
  return formulaArrayBind12010 === formulaArrayBind12011
    ? createArrayValue(
        readRangeMatrix(
          {
            kind: "Range",
            start: {
              ...formulaArrayBind12007,
              sheet: {
                sheetName: formulaArrayBind12010,
              },
            },
            end: {
              ...formulaArrayBind12008,
              sheet: {
                sheetName: formulaArrayBind12011,
              },
            },
          },
          formulaArrayIn3540,
        ),
      )
    : makeErrorValue("#REF!");
}
function resolveCellAddrFromNode(formulaArrayIn5073, formulaArrayIn5074) {
  if (
    formulaArrayIn5073.kind === "RangeRef" &&
    formulaArrayIn5073.ref.kind === "Cell"
  ) {
    let formulaArrayBind20638 =
      formulaArrayIn5073.ref.addr.sheet?.sheetName ??
      formulaArrayIn5074.currentSheet;
    return formulaArrayBind20638
      ? {
          ...formulaArrayIn5073.ref.addr,
          sheet: {
            sheetName: formulaArrayBind20638,
          },
        }
      : makeErrorValue("#REF!");
  }
  if (formulaArrayIn5073.kind === "FunctionCall") {
    let formulaArrayBind21698 = formulaArrayIn5073.name.toUpperCase();
    if (
      formulaArrayBind21698 === "INDEX" ||
      formulaArrayBind21698 === "_XLFN.INDEX"
    )
      return evaluateIndexAddr(formulaArrayIn5073, formulaArrayIn5074);
  }
  return makeErrorValue("#VALUE!");
}
function evaluateIndexAddr(formulaArrayIn2770, formulaArrayIn2771) {
  let formulaArrayBind10416 = formulaArrayIn2770.args[0],
    formulaArrayBind10417 = formulaArrayIn2770.args[1],
    formulaArrayBind10418 = formulaArrayIn2770.args[2];
  if (
    !formulaArrayBind10416 ||
    !formulaArrayBind10417 ||
    !formulaArrayBind10418
  )
    return makeErrorValue("#VALUE!");
  let formulaArrayBind10419 = evaluateArg(
    formulaArrayBind10416,
    formulaArrayIn2771,
  );
  if (!Array.isArray(formulaArrayBind10419)) return makeErrorValue("#REF!");
  let formulaArrayBind10420 = getRangeMetadata(formulaArrayBind10419);
  if (!formulaArrayBind10420) return makeErrorValue("#REF!");
  let formulaArrayBind10421 = firstCellOrScalar(
    evaluateArg(formulaArrayBind10417, formulaArrayIn2771),
  );
  if (isErrorValue(formulaArrayBind10421)) return formulaArrayBind10421;
  let formulaArrayBind10422 = firstCellOrScalar(
    evaluateArg(formulaArrayBind10418, formulaArrayIn2771),
  );
  if (isErrorValue(formulaArrayBind10422)) return formulaArrayBind10422;
  let formulaArrayBind10423 = coerceToNumberOrError(formulaArrayBind10421);
  if (isErrorValue(formulaArrayBind10423)) return formulaArrayBind10423;
  let formulaArrayBind10424 = coerceToNumberOrError(formulaArrayBind10422);
  if (isErrorValue(formulaArrayBind10424)) return formulaArrayBind10424;
  if (
    !Number.isInteger(formulaArrayBind10423) ||
    !Number.isInteger(formulaArrayBind10424) ||
    formulaArrayBind10423 < 1 ||
    formulaArrayBind10424 < 1
  )
    return makeErrorValue("#VALUE!");
  let formulaArrayBind10425 =
    formulaArrayBind10420[formulaArrayBind10423 - 1]?.[
      formulaArrayBind10424 - 1
    ];
  if (!formulaArrayBind10425) return makeErrorValue("#REF!");
  let formulaArrayBind10426 =
    formulaArrayBind10425.sheet?.sheetName ?? formulaArrayIn2771.currentSheet;
  return formulaArrayBind10426
    ? {
        ...formulaArrayBind10425,
        sheet: {
          sheetName: formulaArrayBind10426,
        },
      }
    : makeErrorValue("#REF!");
}
function evaluateFunctionCall(formulaArrayIn6094, formulaArrayIn6095) {
  if (formulaArrayIn6095.handleFunctionCall) {
    let formulaArrayBind22505 =
      formulaArrayIn6095.handleFunctionCall(formulaArrayIn6094);
    if (formulaArrayBind22505 !== undefined) return formulaArrayBind22505;
  }
  if (formulaArrayIn6094.name.toUpperCase() === "IF")
    return evaluateIfFunction(formulaArrayIn6094, formulaArrayIn6095);
  let formulaArrayBind16144 = [];
  for (let formulaArrayBind22664 of formulaArrayIn6094.args) {
    let formulaArrayBind22993 = evaluateArg(
      formulaArrayBind22664,
      formulaArrayIn6095,
    );
    formulaArrayBind16144.push(formulaArrayBind22993);
  }
  return formulaArrayIn6095.callFunction(
    formulaArrayIn6094.name,
    formulaArrayBind16144,
  );
}
function evaluateIfFunction(formulaArrayIn4584, formulaArrayIn4585) {
  if (formulaArrayIn4584.args.length === 0) return makeErrorValue("#VALUE!");
  let formulaArrayBind13858 = formulaArrayIn4584.args[0];
  if (!formulaArrayBind13858) return makeErrorValue("#VALUE!");
  let formulaArrayBind13859 = evaluateArg(
      formulaArrayBind13858,
      formulaArrayIn4585,
    ),
    formulaArrayBind13860 = formulaArrayIn4585.callFunction(
      formulaArrayIn4584.name,
      [formulaArrayBind13859, IF_TRUE_SENTINEL, IF_FALSE_SENTINEL],
    );
  if (formulaArrayBind13860 === IF_TRUE_SENTINEL) {
    let formulaArrayBind22205 = formulaArrayIn4584.args[1];
    return formulaArrayBind22205 && formulaArrayBind22205.kind !== "MissingArg"
      ? firstCellOrScalar(
          evaluateArg(formulaArrayBind22205, formulaArrayIn4585),
        )
      : 0;
  }
  if (formulaArrayBind13860 === IF_FALSE_SENTINEL) {
    let formulaArrayBind22206 = formulaArrayIn4584.args[2];
    return formulaArrayBind22206 && formulaArrayBind22206.kind !== "MissingArg"
      ? firstCellOrScalar(
          evaluateArg(formulaArrayBind22206, formulaArrayIn4585),
        )
      : 0;
  }
  return formulaArrayBind13860;
}
function evaluateArg(formulaArrayIn988, formulaArrayIn989) {
  if (formulaArrayIn988.kind === "MissingArg") return;
  if (formulaArrayIn988.kind === "RangeRef") {
    if (formulaArrayIn988.ref.kind === "Cell") {
      let formulaArrayBind16691 =
        formulaArrayIn988.ref.addr.sheet?.sheetName ??
        formulaArrayIn989.currentSheet;
      if (!formulaArrayBind16691) return [[makeErrorValue("#REF!")]];
      let formulaArrayBind16692 = cellAddressKey(
          formulaArrayIn988.ref.addr,
          formulaArrayIn989,
        ),
        formulaArrayBind16693 = [
          [
            (formulaArrayBind16692
              ? formulaArrayIn989.getCellValue(formulaArrayBind16692)
              : makeErrorValue("#REF!")) ?? null,
          ],
        ];
      return (
        attachRangeMetadata(formulaArrayBind16693, [
          [
            {
              ...formulaArrayIn988.ref.addr,
              sheet: {
                sheetName: formulaArrayBind16691,
              },
            },
          ],
        ]),
        formulaArrayBind16693
      );
    }
    if (formulaArrayIn988.ref.kind === "Range")
      return readRangeMatrix(formulaArrayIn988.ref, formulaArrayIn989);
    if (formulaArrayIn988.ref.kind === "ColumnRange")
      return readColumnRangeMatrix(formulaArrayIn988.ref, formulaArrayIn989);
    if (formulaArrayIn988.ref.kind === "WholeColumn")
      return readWholeColumnMatrix(formulaArrayIn988.ref, formulaArrayIn989);
    if (formulaArrayIn988.ref.kind === "WholeRow")
      return readWholeRowMatrix(formulaArrayIn988.ref, formulaArrayIn989);
    if (formulaArrayIn988.ref.kind === "Named") {
      if (isRefErrorName(formulaArrayIn988.ref.name))
        return [[makeErrorValue("#REF!")]];
      let formulaArrayBind12377 = formulaArrayIn989.resolveNamedReference?.(
        formulaArrayIn988.ref.name,
        "range",
        formulaArrayIn988.ref.sheet?.sheetName,
      );
      if (formulaArrayBind12377 && Array.isArray(formulaArrayBind12377))
        return formulaArrayBind12377;
      let formulaArrayBind12378 = formulaArrayIn989.resolveNamedReference?.(
        formulaArrayIn988.ref.name,
        "scalar",
        formulaArrayIn988.ref.sheet?.sheetName,
      );
      return formulaArrayBind12378 == null
        ? makeErrorValue("#NAME?")
        : isLambdaValue(formulaArrayBind12378)
          ? makeErrorValue("#VALUE!")
          : Array.isArray(formulaArrayBind12378) ||
              isErrorValue(formulaArrayBind12378)
            ? formulaArrayBind12378
            : [[formulaArrayBind12378]];
    }
    if (formulaArrayIn988.ref.kind === "Structured") {
      let formulaArrayBind19949 =
        formulaArrayIn989.resolveStructuredReference?.(
          formulaArrayIn988.ref.reference,
          "range",
        );
      return Array.isArray(formulaArrayBind19949)
        ? formulaArrayBind19949
        : formulaArrayBind19949 == null
          ? makeErrorValue("#NAME?")
          : isErrorValue(formulaArrayBind19949)
            ? formulaArrayBind19949
            : [[formulaArrayBind19949]];
    }
  }
  let formulaArrayBind6071 = evaluateFormulaNode(
    formulaArrayIn988,
    formulaArrayIn989,
  );
  return isArrayValue(formulaArrayBind6071)
    ? cloneArrayValues(formulaArrayBind6071)
    : formulaArrayBind6071;
}
function firstCellOrScalar(formulaArrayIn10680) {
  return formulaArrayIn10680 === undefined
    ? ""
    : Array.isArray(formulaArrayIn10680)
      ? (formulaArrayIn10680[0]?.[0] ?? makeErrorValue("#VALUE!"))
      : formulaArrayIn10680;
}
function evaluateRangeRef(formulaArrayIn1817, formulaArrayIn1818) {
  switch (formulaArrayIn1817.kind) {
    case "Cell": {
      let formulaArrayBind22253 = cellAddressKey(
        formulaArrayIn1817.addr,
        formulaArrayIn1818,
      );
      return formulaArrayBind22253
        ? formulaArrayIn1818.getCellValue(formulaArrayBind22253)
        : makeErrorValue("#REF!");
    }
    case "Spill":
      return evaluateRangeRef(formulaArrayIn1817.base, formulaArrayIn1818);
    case "Range":
      return createArrayValue(
        readRangeMatrix(formulaArrayIn1817, formulaArrayIn1818),
      );
    case "ColumnRange":
      return createArrayValue(
        readColumnRangeMatrix(formulaArrayIn1817, formulaArrayIn1818),
      );
    case "Named": {
      if (isRefErrorName(formulaArrayIn1817.name))
        return makeErrorValue("#REF!");
      let formulaArrayBind15203 = formulaArrayIn1818.resolveNamedReference?.(
        formulaArrayIn1817.name,
        "scalar",
        formulaArrayIn1817.sheet?.sheetName,
      );
      return formulaArrayBind15203 == null
        ? makeErrorValue("#NAME?")
        : Array.isArray(formulaArrayBind15203)
          ? (formulaArrayBind15203[0]?.[0] ?? makeErrorValue("#VALUE!"))
          : isErrorValue(formulaArrayBind15203)
            ? formulaArrayBind15203
            : isLambdaValue(formulaArrayBind15203)
              ? makeErrorValue("#VALUE!")
              : formulaArrayBind15203;
    }
    case "Structured": {
      let formulaArrayBind18348 =
        formulaArrayIn1818.resolveStructuredReference?.(
          formulaArrayIn1817.reference,
          "scalar",
        );
      return formulaArrayBind18348 == null
        ? makeErrorValue("#NAME?")
        : Array.isArray(formulaArrayBind18348)
          ? (formulaArrayBind18348[0]?.[0] ?? makeErrorValue("#VALUE!"))
          : (isErrorValue(formulaArrayBind18348), formulaArrayBind18348);
    }
    default:
      return makeErrorValue("#VALUE!");
  }
}
function evaluateCallExpr(formulaArrayIn9215, formulaArrayIn9216) {
  let formulaArrayBind19776 = evaluateFormulaNode(
    formulaArrayIn9215.callee,
    formulaArrayIn9216,
  );
  if (!isLambdaValue(formulaArrayBind19776)) return makeErrorValue("#VALUE!");
  let formulaArrayBind19777 = [];
  for (let formulaArrayBind23022 of formulaArrayIn9215.args)
    formulaArrayBind19777.push(
      evaluateArg(formulaArrayBind23022, formulaArrayIn9216),
    );
  return formulaArrayBind19776.invoke(
    formulaArrayBind19777,
    formulaArrayIn9216,
  );
}
function readRangeMatrix(formulaArrayIn2134, formulaArrayIn2135) {
  let formulaArrayBind9071 =
    formulaArrayIn2134.start.sheet?.sheetName ??
    formulaArrayIn2134.end.sheet?.sheetName ??
    formulaArrayIn2135.currentSheet;
  if (!formulaArrayBind9071)
    return [
      [
        {
          kind: "Error",
          code: "#REF!",
        },
      ],
    ];
  let formulaArrayBind9072 = Math.min(
      formulaArrayIn2134.start.row,
      formulaArrayIn2134.end.row,
    ),
    formulaArrayBind9073 = Math.max(
      formulaArrayIn2134.start.row,
      formulaArrayIn2134.end.row,
    ),
    formulaArrayBind9074 = Math.min(
      formulaArrayIn2134.start.col,
      formulaArrayIn2134.end.col,
    ),
    formulaArrayBind9075 = Math.max(
      formulaArrayIn2134.start.col,
      formulaArrayIn2134.end.col,
    ),
    formulaArrayBind9076 = [],
    formulaArrayBind9077 = [];
  for (
    let formulaArrayBind13167 = formulaArrayBind9072;
    formulaArrayBind13167 <= formulaArrayBind9073;
    formulaArrayBind13167 += 1
  ) {
    let formulaArrayBind13755 = [],
      formulaArrayBind13756 = [];
    for (
      let formulaArrayBind15108 = formulaArrayBind9074;
      formulaArrayBind15108 <= formulaArrayBind9075;
      formulaArrayBind15108 += 1
    ) {
      let formulaArrayBind15714 = {
        sheet: {
          sheetName: formulaArrayBind9071,
        },
        row: formulaArrayBind13167,
        col: formulaArrayBind15108,
        absRow: false,
        absCol: false,
      };
      formulaArrayBind13756.push(formulaArrayBind15714);
      let formulaArrayBind15715 = formulaArrayIn2135.cellAddressToKey(
        formulaArrayBind15714,
      );
      if (!formulaArrayBind15715) {
        formulaArrayBind13755.push({
          kind: "Error",
          code: "#REF!",
        });
        continue;
      }
      formulaArrayBind13755.push(
        formulaArrayIn2135.getCellValue(formulaArrayBind15715),
      );
    }
    formulaArrayBind9076.push(formulaArrayBind13755);
    formulaArrayBind9077.push(formulaArrayBind13756);
  }
  return (
    attachRangeMetadata(formulaArrayBind9076, formulaArrayBind9077),
    formulaArrayBind9076
  );
}
function readColumnRangeMatrix(formulaArrayIn1734, formulaArrayIn1735) {
  let formulaArrayBind8127 =
    formulaArrayIn1734.sheet?.sheetName ?? formulaArrayIn1735.currentSheet;
  if (!formulaArrayBind8127) return [[makeErrorValue("#REF!")]];
  if (!formulaArrayIn1735.getColumnExtent) return [];
  let formulaArrayBind8128 = Math.min(
      formulaArrayIn1734.startCol,
      formulaArrayIn1734.endCol,
    ),
    formulaArrayBind8129 = Math.max(
      formulaArrayIn1734.startCol,
      formulaArrayIn1734.endCol,
    ),
    formulaArrayBind8130 = 1 / 0,
    formulaArrayBind8131 = -1 / 0;
  for (
    let formulaArrayBind20417 = formulaArrayBind8128;
    formulaArrayBind20417 <= formulaArrayBind8129;
    formulaArrayBind20417 += 1
  ) {
    let formulaArrayBind21396 = formulaArrayIn1735.getColumnExtent(
      formulaArrayBind8127,
      formulaArrayBind20417,
    );
    formulaArrayBind21396 &&
      ((formulaArrayBind8130 = Math.min(
        formulaArrayBind8130,
        formulaArrayBind21396.startRow,
      )),
      (formulaArrayBind8131 = Math.max(
        formulaArrayBind8131,
        formulaArrayBind21396.endRow,
      )));
  }
  if (
    !Number.isFinite(formulaArrayBind8130) ||
    !Number.isFinite(formulaArrayBind8131)
  )
    return [];
  let formulaArrayBind8132 = [],
    formulaArrayBind8133 = [];
  for (
    let formulaArrayBind13168 = formulaArrayBind8130;
    formulaArrayBind13168 <= formulaArrayBind8131;
    formulaArrayBind13168 += 1
  ) {
    let formulaArrayBind13757 = [],
      formulaArrayBind13758 = [];
    for (
      let formulaArrayBind15109 = formulaArrayBind8128;
      formulaArrayBind15109 <= formulaArrayBind8129;
      formulaArrayBind15109 += 1
    ) {
      let formulaArrayBind15716 = {
        sheet: {
          sheetName: formulaArrayBind8127,
        },
        row: formulaArrayBind13168,
        col: formulaArrayBind15109,
        absRow: false,
        absCol: false,
      };
      formulaArrayBind13758.push(formulaArrayBind15716);
      let formulaArrayBind15717 = formulaArrayIn1735.cellAddressToKey(
        formulaArrayBind15716,
      );
      if (!formulaArrayBind15717) {
        formulaArrayBind13757.push({
          kind: "Error",
          code: "#REF!",
        });
        continue;
      }
      formulaArrayBind13757.push(
        formulaArrayIn1735.getCellValue(formulaArrayBind15717),
      );
    }
    formulaArrayBind8132.push(formulaArrayBind13757);
    formulaArrayBind8133.push(formulaArrayBind13758);
  }
  return (
    attachRangeMetadata(formulaArrayBind8132, formulaArrayBind8133),
    formulaArrayBind8132
  );
}
function readWholeColumnMatrix(formulaArrayIn3894, formulaArrayIn3895) {
  let formulaArrayBind12762 =
    formulaArrayIn3894.sheet?.sheetName ?? formulaArrayIn3895.currentSheet;
  if (!formulaArrayBind12762) return [[makeErrorValue("#REF!")]];
  let formulaArrayBind12763 = formulaArrayIn3895.getColumnExtent?.(
    formulaArrayBind12762,
    formulaArrayIn3894.col,
  );
  if (!formulaArrayBind12763) return [];
  let formulaArrayBind12764 = [],
    formulaArrayBind12765 = [];
  for (
    let formulaArrayBind17119 = formulaArrayBind12763.startRow;
    formulaArrayBind17119 <= formulaArrayBind12763.endRow;
    formulaArrayBind17119 += 1
  ) {
    let formulaArrayBind18417 = {
      sheet: {
        sheetName: formulaArrayBind12762,
      },
      row: formulaArrayBind17119,
      col: formulaArrayIn3894.col,
      absRow: false,
      absCol: false,
    };
    formulaArrayBind12765.push([formulaArrayBind18417]);
    let formulaArrayBind18418 = formulaArrayIn3895.cellAddressToKey(
      formulaArrayBind18417,
    );
    formulaArrayBind12764.push([
      formulaArrayIn3895.getCellValue(formulaArrayBind18418),
    ]);
  }
  return (
    attachRangeMetadata(formulaArrayBind12764, formulaArrayBind12765),
    formulaArrayBind12764
  );
}
function readWholeRowMatrix(formulaArrayIn3823, formulaArrayIn3824) {
  let formulaArrayBind12619 =
    formulaArrayIn3823.sheet?.sheetName ?? formulaArrayIn3824.currentSheet;
  if (!formulaArrayBind12619) return [[makeErrorValue("#REF!")]];
  let formulaArrayBind12620 = formulaArrayIn3824.getRowExtent?.(
    formulaArrayBind12619,
    formulaArrayIn3823.row,
  );
  if (!formulaArrayBind12620) return [];
  let formulaArrayBind12621 = [],
    formulaArrayBind12622 = [];
  for (
    let formulaArrayBind17235 = formulaArrayBind12620.startCol;
    formulaArrayBind17235 <= formulaArrayBind12620.endCol;
    formulaArrayBind17235 += 1
  ) {
    let formulaArrayBind18560 = {
      sheet: {
        sheetName: formulaArrayBind12619,
      },
      row: formulaArrayIn3823.row,
      col: formulaArrayBind17235,
      absRow: false,
      absCol: false,
    };
    formulaArrayBind12622.push(formulaArrayBind18560);
    let formulaArrayBind18561 = formulaArrayIn3824.cellAddressToKey(
      formulaArrayBind18560,
    );
    formulaArrayBind12621.push(
      formulaArrayIn3824.getCellValue(formulaArrayBind18561),
    );
  }
  let formulaArrayBind12623 = [formulaArrayBind12621];
  return (
    attachRangeMetadata(formulaArrayBind12623, [formulaArrayBind12622]),
    formulaArrayBind12623
  );
}
