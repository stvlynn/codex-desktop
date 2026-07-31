// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: recursive formula AST range remap (legacy helper1022).
// Stage-3 wave-101.

import { farH } from "./boundary-hooks";

void farH;

export function remapFormulaAst(farIn1053: any, farIn1054: any, farIn1055: any, ) {
  switch (farIn1053.kind) {
    case "RangeRef": {
      let farBind22402 = farH.remapRangeRef(
        farIn1053.ref,
        farIn1054,
        farIn1055,
      );
      return farBind22402
        ? {
            ...farIn1053,
            ref: farBind22402,
          }
        : null;
    }
    case "UnaryOp": {
      let farBind22392 = remapFormulaAst(
        farIn1053.expr,
        farIn1054,
        farIn1055,
      );
      return farBind22392
        ? {
            ...farIn1053,
            expr: farBind22392,
          }
        : null;
    }
    case "BinaryOp": {
      let farBind20217 = remapFormulaAst(
        farIn1053.left,
        farIn1054,
        farIn1055,
      );
      if (!farBind20217) return null;
      let farBind20218 = remapFormulaAst(
        farIn1053.right,
        farIn1054,
        farIn1055,
      );
      return farBind20218
        ? {
            ...farIn1053,
            left: farBind20217,
            right: farBind20218,
          }
        : null;
    }
    case "FunctionCall": {
      let farBind19626 = [];
      for (let farBind21579 of farIn1053.args) {
        let farBind22276 = remapFormulaAst(
          farBind21579,
          farIn1054,
          farIn1055,
        );
        if (!farBind22276) return null;
        farBind19626.push(farBind22276);
      }
      return {
        ...farIn1053,
        args: farBind19626,
      };
    }
    case "CallExpr": {
      let farBind17494 = remapFormulaAst(
        farIn1053.callee,
        farIn1054,
        farIn1055,
      );
      if (!farBind17494) return null;
      let farBind17495 = [];
      for (let farBind21580 of farIn1053.args) {
        let farBind22277 = remapFormulaAst(
          farBind21580,
          farIn1054,
          farIn1055,
        );
        if (!farBind22277) return null;
        farBind17495.push(farBind22277);
      }
      return {
        ...farIn1053,
        callee: farBind17494,
        args: farBind17495,
      };
    }
    case "ArrayLiteral": {
      let farBind17038 = [];
      for (let farBind18942 of farIn1053.elements) {
        let farBind19754 = [];
        for (let farBind21492 of farBind18942) {
          let farBind22038 = remapFormulaAst(
            farBind21492,
            farIn1054,
            farIn1055,
          );
          if (!farBind22038) return null;
          farBind19754.push(farBind22038);
        }
        farBind17038.push(farBind19754);
      }
      return {
        ...farIn1053,
        elements: farBind17038,
      };
    }
    case "MissingArg":
    case "NumberLiteral":
    case "StringLiteral":
    case "BooleanLiteral":
    case "ErrorLiteral":
      return farIn1053;
    default:
      return farIn1053;
  }
}

/** Legacy alias. */
export const workbookHelper1022 = remapFormulaAst;
