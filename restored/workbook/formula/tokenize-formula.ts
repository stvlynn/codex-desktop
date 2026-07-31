// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-44: formula tokenizer (legacy WorkbookR).

import {
  isFormulaWhitespace,
  isDigitChar,
  isIdentStartChar,
} from "./formula-char";
import {
  scanQuotedIdentifier,
  scanStringLiteral,
  scanNumberOrOperator,
  scanIdentifier,
  scanErrorLiteral,
  scanStructuredRef,
} from "./formula-token-scanners";
import { BOOLEAN_LITERALS } from "./formula-constants";

export function tokenizeFormula(formulaIn333: unknown) {
  let formulaBind3644 = [],
    formulaBind3645 = formulaIn333 ?? "",
    formulaBind3646 = +!!formulaBind3645.startsWith("=");
  for (; formulaBind3646 < formulaBind3645.length; ) {
    let formulaBind3739 = formulaBind3645[formulaBind3646] ?? "";
    if (isFormulaWhitespace(formulaBind3739)) {
      let formulaBind19739 = formulaBind3646;
      for (
        ;
        formulaBind3646 < formulaBind3645.length &&
        isFormulaWhitespace(formulaBind3645[formulaBind3646]);
      )
        formulaBind3646 += 1;
      formulaBind3644.push({
        type: "Whitespace",
        value: formulaBind3645.slice(formulaBind19739, formulaBind3646),
        start: formulaBind19739,
        end: formulaBind3646,
      });
      continue;
    }
    if (formulaBind3739 === "'") {
      let { token, next } = scanQuotedIdentifier(
        formulaBind3645,
        formulaBind3646,
      );
      formulaBind3644.push(token);
      formulaBind3646 = next;
      continue;
    }
    if (formulaBind3739 === '"') {
      let { token, next } = scanStringLiteral(formulaBind3645, formulaBind3646);
      formulaBind3644.push(token);
      formulaBind3646 = next;
      continue;
    }
    if (formulaBind3739 === "#") {
      let formulaBind17240 = formulaBind3645[formulaBind3646 + 1];
      if (formulaBind17240 && /[A-Za-z]/.test(formulaBind17240)) {
        let { token, next } = scanErrorLiteral(
          formulaBind3645,
          formulaBind3646,
        );
        formulaBind3644.push(token);
        formulaBind3646 = next;
      } else {
        formulaBind3644.push({
          type: "Hash",
          value: "#",
          start: formulaBind3646,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
      }
      continue;
    }
    if (
      isDigitChar(formulaBind3739) ||
      (formulaBind3739 === "." &&
        formulaBind3646 + 1 < formulaBind3645.length &&
        isDigitChar(formulaBind3645[formulaBind3646 + 1]))
    ) {
      let { token, next } = scanNumberOrOperator(
        formulaBind3645,
        formulaBind3646,
      );
      formulaBind3644.push(token);
      formulaBind3646 = next;
      continue;
    }
    if (formulaBind3739 === "[") {
      let { token, next } = scanStructuredRef(formulaBind3645, formulaBind3646);
      formulaBind3644.push(token);
      formulaBind3646 = next;
      continue;
    }
    if (isIdentStartChar(formulaBind3739)) {
      let { token, next } = scanIdentifier(formulaBind3645, formulaBind3646),
        formulaBind17706 = token.value.toUpperCase();
      BOOLEAN_LITERALS.has(formulaBind17706)
        ? formulaBind3644.push({
            type: "Boolean",
            value: formulaBind17706,
            start: token.start,
            end: token.end,
          })
        : formulaBind3644.push(token);
      formulaBind3646 = next;
      continue;
    }
    switch (formulaBind3739) {
      case "+":
      case "-":
      case "*":
      case "/":
      case "^":
      case "&":
      case "%":
        formulaBind3644.push({
          type: "Operator",
          value: formulaBind3739,
          start: formulaBind3646,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
        continue;
      case "=":
        formulaBind3644.push({
          type: "Operator",
          value: "=",
          start: formulaBind3646,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
        continue;
      case ">":
      case "<": {
        let formulaBind16291 = formulaBind3646,
          formulaBind16292 = formulaBind3739;
        formulaBind3646 + 1 < formulaBind3645.length &&
          (formulaBind3645[formulaBind3646 + 1] === "=" ||
            (formulaBind3739 === "<" &&
              formulaBind3645[formulaBind3646 + 1] === ">")) &&
          ((formulaBind16292 += formulaBind3645[formulaBind3646 + 1]),
          (formulaBind3646 += 1));
        formulaBind3644.push({
          type: "Operator",
          value: formulaBind16292,
          start: formulaBind16291,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
        continue;
      }
      case "(":
        formulaBind3644.push({
          type: "ParenOpen",
          value: formulaBind3739,
          start: formulaBind3646,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
        continue;
      case ")":
        formulaBind3644.push({
          type: "ParenClose",
          value: formulaBind3739,
          start: formulaBind3646,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
        continue;
      case ",":
        formulaBind3644.push({
          type: "Comma",
          value: formulaBind3739,
          start: formulaBind3646,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
        continue;
      case ":":
        formulaBind3644.push({
          type: "Colon",
          value: formulaBind3739,
          start: formulaBind3646,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
        continue;
      case "!":
        formulaBind3644.push({
          type: "Bang",
          value: formulaBind3739,
          start: formulaBind3646,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
        continue;
      case "@":
        formulaBind3644.push({
          type: "At",
          value: formulaBind3739,
          start: formulaBind3646,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
        continue;
      case "{":
        formulaBind3644.push({
          type: "LBrace",
          value: formulaBind3739,
          start: formulaBind3646,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
        continue;
      case "}":
        formulaBind3644.push({
          type: "RBrace",
          value: formulaBind3739,
          start: formulaBind3646,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
        continue;
      case ";":
        formulaBind3644.push({
          type: "Semicolon",
          value: formulaBind3739,
          start: formulaBind3646,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
        continue;
      default:
        formulaBind3644.push({
          type: "Operator",
          value: formulaBind3739,
          start: formulaBind3646,
          end: formulaBind3646 + 1,
        });
        formulaBind3646 += 1;
    }
  }
  return (
    formulaBind3644.push({
      type: "EOF",
      value: "",
      start: formulaBind3645.length,
      end: formulaBind3645.length,
    }),
    formulaBind3644
  );
}
