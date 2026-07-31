// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-44: Excel-like formula expression parser (legacy ume).

import {
  EMPTY_NUMBER_LITERAL,
  BINARY_OPERATOR_PRECEDENCE,
  RIGHT_ASSOCIATIVE_OPS,
  UNARY_OPERATOR_PRECEDENCE,
} from "./formula-constants";
import {
  parseStructuredReference,
  parseA1CellRef,
  parseWholeColumnRef,
  withDefaultSheet,
  sameSheetRef,
} from "./cell-ref";

export class FormulaParser {
  tokens: unknown[];
  index = 0;
  errors: string[] = [];
  constructor(formulaIn14519: unknown[]) {
    this.tokens = formulaIn14519;
  }
  parse() {
    let formulaBind21586 = this.parseExpression();
    return (this.consumeUntilEOF(), formulaBind21586);
  }
  consumeUntilEOF() {
    for (; !this.isAtEnd(); ) {
      let formulaBind17322 = this.peekToken();
      if (formulaBind17322?.type === "EOF") return;
      formulaBind17322 &&
        formulaBind17322.type !== "Whitespace" &&
        this.errors.push(`Unexpected token ${formulaBind17322.value}`);
      this.index += 1;
    }
  }
  parseExpression(formulaIn2916: unknown = 0, formulaIn2917: unknown = []) {
    let formulaBind10803 = this.parsePrefix(formulaIn2917);
    for (formulaBind10803 = this.parsePostfix(formulaBind10803); ; ) {
      let formulaBind12585 = this.peekNonWhitespace();
      if (
        !formulaBind12585 ||
        formulaIn2917.includes(formulaBind12585.type) ||
        formulaBind12585.type === "EOF"
      )
        break;
      let formulaBind12586 = this.getBinaryOperatorInfo(
        formulaBind12585,
        formulaIn2917,
      );
      if (!formulaBind12586 || formulaBind12586.precedence < formulaIn2916)
        break;
      this.advanceToken();
      let formulaBind12587 = this.parseExpression(
        formulaBind12586.precedence + +!formulaBind12586.rightAssociative,
        formulaIn2917,
      );
      formulaBind10803 = this.buildBinaryExpr(
        formulaBind10803,
        formulaBind12586.operator,
        formulaBind12587,
      );
      formulaBind10803 = this.parsePostfix(formulaBind10803);
    }
    return formulaBind10803;
  }
  parsePrefix(formulaIn2837: unknown) {
    let formulaBind10596 = this.peekNonWhitespace();
    if (!formulaBind10596)
      return (
        this.errors.push("Unexpected end of formula"),
        EMPTY_NUMBER_LITERAL
      );
    if (
      formulaBind10596.type === "Operator" &&
      (formulaBind10596.value === "+" || formulaBind10596.value === "-")
    ) {
      this.advanceToken();
      let formulaBind20042 = this.parseExpression(
        UNARY_OPERATOR_PRECEDENCE,
        formulaIn2837,
      );
      return {
        kind: "UnaryOp",
        op: formulaBind10596.value,
        expr: formulaBind20042,
      };
    }
    return formulaBind10596.type === "At"
      ? (this.advanceToken(),
        this.errors.push(
          "Implicit intersection operator '@' is not implemented yet.",
        ),
        this.parseExpression(UNARY_OPERATOR_PRECEDENCE, formulaIn2837))
      : this.parsePrimary();
  }
  parsePostfix(formulaIn1837: unknown) {
    for (;;) {
      let formulaBind8868 = this.peekNonWhitespace();
      if (!formulaBind8868) break;
      if (formulaBind8868.type === "ParenOpen") {
        formulaIn1837 = this.parseInvocation(formulaIn1837);
        continue;
      }
      if (
        formulaBind8868.type === "Operator" &&
        formulaBind8868.value === "%"
      ) {
        this.advanceToken();
        formulaIn1837 = {
          kind: "UnaryOp",
          op: "%",
          expr: formulaIn1837,
        };
        continue;
      }
      if (formulaBind8868.type === "Hash") {
        this.advanceToken();
        formulaIn1837.kind === "RangeRef"
          ? (formulaIn1837 = {
              kind: "RangeRef",
              ref: {
                kind: "Spill",
                base: formulaIn1837.ref,
              },
            })
          : this.errors.push("Spill operator (#) must follow a reference.");
        continue;
      }
      break;
    }
    return formulaIn1837;
  }
  parseInvocation(formulaIn815: unknown) {
    this.matchToken("ParenOpen");
    let formulaBind5453 = [];
    if (this.peekNonWhitespace()?.type === "ParenClose")
      return (
        this.matchToken("ParenClose"),
        {
          kind: "CallExpr",
          callee: formulaIn815,
          args: formulaBind5453,
        }
      );
    let formulaBind5454 = false,
      formulaBind5455 = true;
    for (; !this.isAtEnd(); ) {
      let formulaBind7386 = this.peekNonWhitespace();
      if (!formulaBind7386) break;
      if (formulaBind7386.type === "ParenClose") {
        formulaBind5455 &&
          formulaBind5453.length > 0 &&
          formulaBind5453.push({
            kind: "MissingArg",
          });
        this.matchToken("ParenClose");
        formulaBind5454 = true;
        break;
      }
      if (formulaBind7386.type === "Comma") {
        formulaBind5455 &&
          formulaBind5453.push({
            kind: "MissingArg",
          });
        this.matchToken("Comma");
        formulaBind5455 = true;
        continue;
      }
      let formulaBind7387 = this.parseExpression(0, ["Comma", "ParenClose"]);
      formulaBind5453.push(formulaBind7387);
      formulaBind5455 = false;
      let formulaBind7388 = this.peekNonWhitespace();
      if (formulaBind7388?.type === "Comma") {
        this.matchToken("Comma");
        formulaBind5455 = true;
        continue;
      }
      if (formulaBind7388?.type === "ParenClose") {
        this.matchToken("ParenClose");
        formulaBind5454 = true;
        break;
      }
      if (!formulaBind7388) break;
      this.errors.push(
        `Unexpected token ${formulaBind7388.value} in invocation arguments`,
      );
      this.advanceToken();
    }
    return (
      formulaBind5454 ||
        this.errors.push("Missing closing parenthesis after invocation"),
      {
        kind: "CallExpr",
        callee: formulaIn815,
        args: formulaBind5453,
      }
    );
  }
  parsePrimary() {
    let formulaBind4753 = this.peekNonWhitespace();
    if (!formulaBind4753) return EMPTY_NUMBER_LITERAL;
    switch (formulaBind4753.type) {
      case "Number":
        return (
          this.advanceToken(),
          {
            kind: "NumberLiteral",
            value: Number(formulaBind4753.value),
          }
        );
      case "String":
        return (
          this.advanceToken(),
          {
            kind: "StringLiteral",
            value: formulaBind4753.value,
          }
        );
      case "Boolean": {
        this.advanceToken();
        let formulaBind8952 = {
          kind: "BooleanLiteral",
          value: formulaBind4753.value === "TRUE",
        };
        return (
          this.peekNonWhitespace()?.type === "ParenOpen" &&
            (this.matchToken("ParenOpen"),
            this.peekNonWhitespace()?.type === "ParenClose"
              ? this.matchToken("ParenClose")
              : (this.errors.push(
                  `Boolean literal ${formulaBind4753.value} cannot accept arguments`,
                ),
                this.parseExpression(0, ["ParenClose"]),
                this.matchToken("ParenClose") ||
                  this.errors.push(
                    `Missing closing parenthesis after boolean literal ${formulaBind4753.value}`,
                  ))),
          formulaBind8952
        );
      }
      case "Error":
        return (
          this.advanceToken(),
          {
            kind: "ErrorLiteral",
            value: formulaBind4753.value,
          }
        );
      case "Identifier":
        return this.parseIdentifierExpression();
      case "StructuredRef":
        return this.parseStructuredReferenceExpression();
      case "ParenOpen":
        return this.parseParenthesizedExpression();
      case "LBrace":
        return this.parseArrayLiteral();
      default:
        return (
          this.errors.push(`Unexpected token ${formulaBind4753.value}`),
          this.advanceToken(),
          EMPTY_NUMBER_LITERAL
        );
    }
  }
  parseParenthesizedExpression() {
    this.matchToken("ParenOpen");
    let formulaBind16215 = this.parseExpression(0, ["ParenClose"]);
    return (
      this.matchToken("ParenClose") ||
        this.errors.push("Missing closing parenthesis"),
      formulaBind16215
    );
  }
  parseArrayLiteral() {
    this.matchToken("LBrace");
    let formulaBind6378 = [],
      formulaBind6379 = [];
    for (; !this.isAtEnd(); ) {
      let formulaBind7679 = this.peekNonWhitespace();
      if (!formulaBind7679) break;
      if (formulaBind7679.type === "RBrace")
        return (
          this.matchToken("RBrace"),
          formulaBind6378.push(formulaBind6379),
          {
            kind: "ArrayLiteral",
            elements: formulaBind6378,
          }
        );
      let formulaBind7680 = this.parseExpression(0, [
        "Comma",
        "Semicolon",
        "RBrace",
      ]);
      formulaBind6379.push(formulaBind7680);
      let formulaBind7681 = this.peekNonWhitespace();
      if (!formulaBind7681) break;
      if (formulaBind7681.type === "Comma") {
        this.matchToken("Comma");
        continue;
      }
      if (formulaBind7681.type === "Semicolon") {
        this.matchToken("Semicolon");
        formulaBind6378.push(formulaBind6379);
        formulaBind6379 = [];
        continue;
      }
      if (formulaBind7681.type === "RBrace")
        return (
          this.matchToken("RBrace"),
          formulaBind6378.push(formulaBind6379),
          {
            kind: "ArrayLiteral",
            elements: formulaBind6378,
          }
        );
      this.errors.push(
        `Unexpected token ${formulaBind7681.value} in array literal`,
      );
      this.advanceToken();
    }
    return (
      this.errors.push("Unterminated array literal"),
      {
        kind: "ArrayLiteral",
        elements: formulaBind6378,
      }
    );
  }
  parseIdentifierExpression() {
    let formulaBind12178 = this.consumeToken("Identifier");
    if (!formulaBind12178) return EMPTY_NUMBER_LITERAL;
    let formulaBind12179 = this.peekNonWhitespace();
    return formulaBind12179?.type === "Bang"
      ? this.parseSheetQualifiedReference(formulaBind12178.value)
      : formulaBind12179?.type === "ParenOpen"
        ? this.parseFunctionCall(formulaBind12178.value)
        : formulaBind12179?.type === "StructuredRef"
          ? this.parseStructuredReferenceExpression(formulaBind12178.value)
          : this.createRangeRefFromIdentifier(formulaBind12178.value);
  }
  parseStructuredReferenceExpression(formulaIn3836: unknown) {
    let formulaBind12647 = this.consumeToken("StructuredRef");
    if (!formulaBind12647) return EMPTY_NUMBER_LITERAL;
    let formulaBind12648 = parseStructuredReference(
      formulaBind12647.value,
      formulaIn3836,
    );
    if (!formulaBind12648) {
      let formulaBind19288 = formulaIn3836 ? `${formulaIn3836}` : "";
      return (
        this.errors.push(
          `Invalid structured reference ${formulaBind19288}${formulaBind12647.value}`,
        ),
        EMPTY_NUMBER_LITERAL
      );
    }
    return {
      kind: "RangeRef",
      ref: {
        kind: "Structured",
        reference: formulaBind12648,
      },
    };
  }
  parseSheetQualifiedReference(formulaIn1022: unknown) {
    let formulaBind6196 = formulaIn1022.replace(/!+$/, "");
    if (!this.matchToken("Bang"))
      return (
        this.errors.push(`Expected '!' after sheet name ${formulaIn1022}`),
        EMPTY_NUMBER_LITERAL
      );
    let formulaBind6197 = {
        sheetName: formulaBind6196,
      },
      formulaBind6198 = this.peekNonWhitespace();
    if (!formulaBind6198)
      return (
        this.errors.push(`Missing reference after '${formulaIn1022}!'`),
        EMPTY_NUMBER_LITERAL
      );
    if (formulaBind6198.type === "Identifier") {
      let formulaBind20533 = this.consumeToken("Identifier");
      return formulaBind20533
        ? this.createRangeRefFromIdentifier(
            formulaBind20533.value,
            formulaBind6197,
          )
        : EMPTY_NUMBER_LITERAL;
    }
    if (formulaBind6198.type === "Number") {
      let formulaBind15841 = this.consumeToken("Number");
      if (!formulaBind15841) return EMPTY_NUMBER_LITERAL;
      let formulaBind15842 = Number(formulaBind15841.value);
      if (Number.isInteger(formulaBind15842) && formulaBind15842 > 0)
        return {
          kind: "RangeRef",
          ref: {
            kind: "WholeRow",
            sheet: formulaBind6197,
            row: formulaBind15842,
          },
        };
    }
    if (formulaBind6198.type === "Error") {
      let formulaBind17558 = this.consumeToken("Error");
      return formulaBind17558
        ? {
            kind: "RangeRef",
            ref: {
              kind: "Named",
              name: formulaBind17558.value,
              sheet: formulaBind6197,
            },
          }
        : EMPTY_NUMBER_LITERAL;
    }
    return (
      this.errors.push(
        `Unsupported sheet-qualified reference near ${formulaIn1022}!${formulaBind6198.value}`,
      ),
      this.advanceToken(),
      EMPTY_NUMBER_LITERAL
    );
  }
  parseFunctionCall(formulaIn796: unknown) {
    let formulaBind5394 = formulaIn796.toUpperCase();
    this.matchToken("ParenOpen");
    let formulaBind5395 = [];
    if (this.peekNonWhitespace()?.type === "ParenClose")
      return (
        this.matchToken("ParenClose"),
        {
          kind: "FunctionCall",
          name: formulaBind5394,
          args: formulaBind5395,
        }
      );
    let formulaBind5396 = false,
      formulaBind5397 = true;
    for (; !this.isAtEnd(); ) {
      let formulaBind7409 = this.peekNonWhitespace();
      if (!formulaBind7409) break;
      if (formulaBind7409.type === "ParenClose") {
        formulaBind5397 &&
          formulaBind5395.length > 0 &&
          formulaBind5395.push({
            kind: "MissingArg",
          });
        this.matchToken("ParenClose");
        formulaBind5396 = true;
        break;
      }
      if (formulaBind7409.type === "Comma") {
        formulaBind5397 &&
          formulaBind5395.push({
            kind: "MissingArg",
          });
        this.matchToken("Comma");
        formulaBind5397 = true;
        continue;
      }
      let formulaBind7410 = this.parseExpression(0, ["Comma", "ParenClose"]);
      formulaBind5395.push(formulaBind7410);
      formulaBind5397 = false;
      let formulaBind7411 = this.peekNonWhitespace();
      if (formulaBind7411?.type === "Comma") {
        this.matchToken("Comma");
        formulaBind5397 = true;
        continue;
      }
      if (formulaBind7411?.type === "ParenClose") {
        this.matchToken("ParenClose");
        formulaBind5396 = true;
        break;
      }
      if (!formulaBind7411) break;
      this.errors.push(
        `Unexpected token ${formulaBind7411.value} in function arguments`,
      );
      this.advanceToken();
    }
    return (
      formulaBind5396 ||
        this.errors.push(
          `Missing closing parenthesis for function ${formulaBind5394}`,
        ),
      {
        kind: "FunctionCall",
        name: formulaBind5394,
        args: formulaBind5395,
      }
    );
  }
  createRangeRefFromIdentifier(formulaIn6628: unknown, formulaIn6629: unknown) {
    let formulaBind16925 = formulaIn6628.trim(),
      formulaBind16926 = parseA1CellRef(formulaBind16925, formulaIn6629);
    return formulaBind16926
      ? {
          kind: "RangeRef",
          ref: {
            kind: "Cell",
            addr: formulaBind16926,
          },
        }
      : {
          kind: "RangeRef",
          ref: {
            kind: "Named",
            name: formulaBind16925,
            sheet: formulaIn6629,
          },
        };
  }
  buildBinaryExpr(
    formulaIn7185: unknown,
    formulaIn7186: unknown,
    formulaIn7187: unknown,
  ) {
    if (formulaIn7186 === ":") {
      let formulaBind21381 = this.combineRange(formulaIn7185, formulaIn7187);
      if (formulaBind21381)
        return {
          kind: "RangeRef",
          ref: formulaBind21381,
        };
    }
    return {
      kind: "BinaryOp",
      op: formulaIn7186,
      left: formulaIn7185,
      right: formulaIn7187,
    };
  }
  combineRange(formulaIn736: unknown, formulaIn737: unknown) {
    let formulaBind5205 = this.exprToRangeRef(formulaIn736, true),
      formulaBind5206 = this.exprToRangeRef(formulaIn737, true);
    if (!formulaBind5205 || !formulaBind5206) return null;
    if (formulaBind5205.kind === "Cell" && formulaBind5206.kind === "Cell") {
      let formulaBind12396 = formulaBind5205.addr.sheet?.sheetName,
        formulaBind12397 = formulaBind5206.addr.sheet?.sheetName;
      if (
        formulaBind12396 &&
        formulaBind12397 &&
        formulaBind12396 !== formulaBind12397
      )
        return null;
      let formulaBind12398 =
          formulaBind5205.addr.sheet ?? formulaBind5206.addr.sheet,
        formulaBind12399 = withDefaultSheet(
          formulaBind5205.addr,
          formulaBind12398,
        ),
        formulaBind12400 = withDefaultSheet(
          formulaBind5206.addr,
          formulaBind12398 ?? formulaBind5206.addr.sheet,
        );
      return (
        !formulaBind12399.sheet &&
          formulaBind12400.sheet &&
          (formulaBind12399.sheet = {
            ...formulaBind12400.sheet,
          }),
        !formulaBind12400.sheet &&
          formulaBind12399.sheet &&
          (formulaBind12400.sheet = {
            ...formulaBind12399.sheet,
          }),
        {
          kind: "Range",
          start: formulaBind12399,
          end: formulaBind12400,
        }
      );
    }
    if (
      formulaBind5205.kind === "WholeColumn" &&
      formulaBind5206.kind === "WholeColumn" &&
      sameSheetRef(formulaBind5205.sheet, formulaBind5206.sheet)
    ) {
      let formulaBind12079 =
        formulaBind5205.sheet && formulaBind5205.sheet.sheetName
          ? {
              ...formulaBind5205.sheet,
            }
          : formulaBind5206.sheet && formulaBind5206.sheet.sheetName
            ? {
                ...formulaBind5206.sheet,
              }
            : undefined;
      return formulaBind5205.col === formulaBind5206.col
        ? {
            kind: "WholeColumn",
            sheet: formulaBind12079,
            col: formulaBind5205.col,
          }
        : {
            kind: "ColumnRange",
            sheet: formulaBind12079,
            startCol: Math.min(formulaBind5205.col, formulaBind5206.col),
            endCol: Math.max(formulaBind5205.col, formulaBind5206.col),
          };
    }
    return formulaBind5205.kind === "WholeRow" &&
      formulaBind5206.kind === "WholeRow" &&
      formulaBind5205.row === formulaBind5206.row &&
      sameSheetRef(formulaBind5205.sheet, formulaBind5206.sheet)
      ? {
          kind: "WholeRow",
          sheet: formulaBind5205.sheet
            ? {
                ...formulaBind5205.sheet,
              }
            : formulaBind5206.sheet
              ? {
                  ...formulaBind5206.sheet,
                }
              : undefined,
          row: formulaBind5205.row,
        }
      : null;
  }
  exprToRangeRef(formulaIn4071: unknown, formulaIn4072: unknown = false) {
    if (formulaIn4071.kind === "RangeRef") {
      if (formulaIn4072 && formulaIn4071.ref.kind === "Named") {
        let formulaBind21895 = parseWholeColumnRef(
          formulaIn4071.ref.name,
          formulaIn4071.ref.sheet,
        );
        if (formulaBind21895) return formulaBind21895;
      }
      return formulaIn4071.ref;
    }
    return formulaIn4071.kind === "NumberLiteral" &&
      Number.isInteger(formulaIn4071.value) &&
      formulaIn4071.value > 0
      ? {
          kind: "WholeRow",
          row: formulaIn4071.value,
          sheet: undefined,
        }
      : null;
  }
  getBinaryOperatorInfo(formulaIn2501: unknown, formulaIn2502: unknown) {
    if (formulaIn2501.type === "Comma" && !formulaIn2502.includes("Comma"))
      return {
        operator: ",",
        precedence: BINARY_OPERATOR_PRECEDENCE[","] ?? 0,
        rightAssociative: false,
      };
    if (formulaIn2501.type === "Colon")
      return {
        operator: ":",
        precedence: BINARY_OPERATOR_PRECEDENCE[":"] ?? 0,
        rightAssociative: false,
      };
    if (formulaIn2501.type === "Operator") {
      let formulaBind17074 = BINARY_OPERATOR_PRECEDENCE[formulaIn2501.value];
      return formulaBind17074 === undefined
        ? null
        : {
            operator: formulaIn2501.value,
            precedence: formulaBind17074,
            rightAssociative: RIGHT_ASSOCIATIVE_OPS.has(formulaIn2501.value),
          };
    }
    return null;
  }
  consumeToken(formulaIn6406: unknown) {
    let formulaBind16582 = this.peekToken();
    return !formulaBind16582 || formulaBind16582.type !== formulaIn6406
      ? (this.errors.push(
          `Expected token ${formulaIn6406} but found ${formulaBind16582 ? formulaBind16582.value : "EOF"}`,
        ),
        null)
      : ((this.index += 1), formulaBind16582);
  }
  matchToken(formulaIn11232: unknown) {
    return this.peekToken()?.type === formulaIn11232
      ? ((this.index += 1), true)
      : false;
  }
  peekToken() {
    return (this.skipWhitespace(), this.tokens[this.index] ?? null);
  }
  peekNonWhitespace() {
    return (this.skipWhitespace(), this.tokens[this.index] ?? null);
  }
  advanceToken() {
    this.skipWhitespace();
    this.isAtEnd() || (this.index += 1);
  }
  isAtEnd() {
    return this.index >= this.tokens.length;
  }
  skipWhitespace() {
    for (; !this.isAtEnd() && this.tokens[this.index]?.type === "Whitespace"; )
      this.index += 1;
  }
}
