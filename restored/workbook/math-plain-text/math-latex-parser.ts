// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-12: LaTeX → math AST parser (legacy Binding464 / WorkbookClass10).

import {
  MathAccentPosition,
  MathBarPosition,
  MathDisplayMode,
  MathFractionKind,
  MathJustification,
  MathLimitKind,
  MathLimitPlacement,
  MathMatrixColumnJustification,
  MathTokenKind,
  MathVariant,
} from "./math-proto-enums";
import {
  LATEX_GREEK_COMMANDS,
  LATEX_OPERATOR_COMMANDS,
  MATRIX_ENVIRONMENT_NAMES,
} from "./unicode-math-maps";

export class MathLatexParser {
  #latex;
  #displayMode;
  #cursor = 0;
  constructor(mathSlot12969: string, mathSlot12970: number) {
    this.#latex = mathSlot12969;
    this.#displayMode = mathSlot12970;
  }
  parseMath() {
    let mathTmp14669 = this.parseSequence() ?? {
      sequence: {
        children: [],
      },
    };
    return {
      displayMode: this.#displayMode,
      paragraphProperties:
        this.#displayMode === MathDisplayMode.MATH_DISPLAY_MODE_BLOCK
          ? {
              justification: MathJustification.MATH_JUSTIFICATION_CENTER_GROUP,
            }
          : undefined,
      root: mathTmp14669,
    };
  }
  parseSequence(mathSlot2844) {
    let mathTmp10626 = [];
    for (; !this.isAtEnd(); ) {
      this.skipWhitespace();
      let mathTmp12904 = this.peek();
      if (
        this.isAtEnd() ||
        mathTmp12904 === "}" ||
        mathSlot2844?.stopAt?.includes(mathTmp12904) ||
        (mathSlot2844?.stopAtRightCommand && this.startsWithCommand("right")) ||
        (mathSlot2844?.stopBeforeRelation &&
          this.isRelationOperator(mathTmp12904))
      )
        break;
      let mathTmp12905 = this.parseNode();
      if (!mathTmp12905) break;
      mathTmp10626.push(mathTmp12905);
    }
    if (mathTmp10626.length !== 0)
      return mathTmp10626.length === 1
        ? mathTmp10626[0]
        : {
            sequence: {
              children: mathTmp10626,
            },
          };
  }
  parseNode() {
    let mathTmp13307 = this.parseBase();
    if (!mathTmp13307) return;
    let mathTmp13308 = this.parsePostfix(mathTmp13307),
      mathTmp13309 = mathTmp13308.nary;
    if (
      mathTmp13309 &&
      (mathTmp13309.operator === "∫" || mathTmp13309.operator === "∑") &&
      mathTmp13309.body === undefined
    ) {
      let mathTmp20639 = this.parseSequence({
        stopBeforeRelation: true,
      });
      return mathTmp20639
        ? {
            nary: {
              ...mathTmp13309,
              body: mathTmp20639,
            },
          }
        : mathTmp13308;
    }
    return mathTmp13308;
  }
  parseBase() {
    if ((this.skipWhitespace(), this.isAtEnd())) return;
    let mathTmp7408 = this.peek();
    if (mathTmp7408 === "{") {
      this.consume();
      let mathTmp17680 = this.parseSequence();
      return (
        this.peek() === "}" && this.consume(),
        mathTmp17680 ?? this.createToken("", MathTokenKind.MATH_TOKEN_KIND_TEXT)
      );
    }
    return mathTmp7408 === "\\"
      ? this.parseCommand()
      : this.isDigit(mathTmp7408)
        ? this.createToken(
            this.readWhile((mathSlot16254) => this.isDigit(mathSlot16254)),
            MathTokenKind.MATH_TOKEN_KIND_NUMBER,
          )
        : this.isIdentifierStart(mathTmp7408)
          ? this.createToken(
              this.readWhile((mathSlot15847) =>
                this.isIdentifierPart(mathSlot15847),
              ),
              MathTokenKind.MATH_TOKEN_KIND_IDENTIFIER,
            )
          : this.isOperator(mathTmp7408)
            ? (this.consume(),
              this.createToken(
                mathTmp7408,
                MathTokenKind.MATH_TOKEN_KIND_OPERATOR,
              ))
            : (this.consume(),
              this.createToken(
                mathTmp7408,
                MathTokenKind.MATH_TOKEN_KIND_SYMBOL,
              ));
  }
  parseCommand() {
    this.consume();
    let mathTmp3343 = this.readCommandName();
    if (mathTmp3343 === "frac") {
      let mathTmp16058 = this.parseRequiredArgument(),
        mathTmp16059 = this.parseRequiredArgument();
      return {
        fraction: {
          kind: MathFractionKind.MATH_FRACTION_KIND_BAR,
          numerator: mathTmp16058,
          denominator: mathTmp16059,
        },
      };
    }
    if (mathTmp3343 === "sqrt") {
      let mathTmp16387 = this.parseOptionalBracketArgument();
      return {
        radical: {
          radicand: this.parseRequiredArgument(),
          degree: mathTmp16387,
          hideDegree: mathTmp16387 === undefined ? true : undefined,
        },
      };
    }
    if (mathTmp3343 === "hat" || mathTmp3343 === "widehat")
      return {
        accent: {
          character: "ˆ",
          base: this.parseRequiredArgument(),
          position: MathAccentPosition.MATH_ACCENT_POSITION_TOP,
        },
      };
    if (mathTmp3343 === "bar" || mathTmp3343 === "overline")
      return {
        bar: {
          base: this.parseRequiredArgument(),
          position: MathBarPosition.MATH_BAR_POSITION_TOP,
        },
      };
    if (mathTmp3343 === "cancel")
      return {
        enclosure: {
          body: this.parseRequiredArgument(),
          strikeHorizontal: true,
        },
      };
    if (mathTmp3343 === "phantom")
      return {
        phantom: {
          body: this.parseRequiredArgument(),
          show: false,
          zeroWidth: true,
        },
      };
    if (mathTmp3343 === "Box" || mathTmp3343 === "square")
      return this.createToken("□", MathTokenKind.MATH_TOKEN_KIND_SYMBOL);
    if (mathTmp3343 === "text" || mathTmp3343 === "mathrm")
      return {
        ...this.createToken(
          this.readRequiredRawBraceText(),
          MathTokenKind.MATH_TOKEN_KIND_TEXT,
        ),
        style: {
          variant: MathVariant.MATH_VARIANT_NORMAL,
          normalText: true,
        },
      };
    if (mathTmp3343 === "operatorname") {
      let mathTmp16580 = this.createToken(
          this.readRequiredRawBraceText(),
          MathTokenKind.MATH_TOKEN_KIND_IDENTIFIER,
        ),
        mathTmp16581 = this.parseFunctionArgument();
      return mathTmp16581
        ? {
            function: {
              name: mathTmp16580,
              argument: mathTmp16581,
            },
          }
        : mathTmp16580;
    }
    if (mathTmp3343 === "left") return this.parseLeftDelimited();
    if (mathTmp3343 === "begin") {
      let mathTmp18613 = this.readRequiredRawBraceText();
      return MATRIX_ENVIRONMENT_NAMES.has(mathTmp18613)
        ? this.parseMatrixEnvironment(mathTmp18613)
        : this.createToken(mathTmp18613, MathTokenKind.MATH_TOKEN_KIND_TEXT);
    }
    if (mathTmp3343 === "int")
      return {
        nary: {
          operator: "∫",
          limitPlacement:
            this.#displayMode === MathDisplayMode.MATH_DISPLAY_MODE_BLOCK
              ? MathLimitPlacement.MATH_LIMIT_PLACEMENT_UNDER_OVER
              : MathLimitPlacement.MATH_LIMIT_PLACEMENT_SUB_SUP,
        },
      };
    if (mathTmp3343 === "sum")
      return {
        nary: {
          operator: "∑",
          limitPlacement:
            this.#displayMode === MathDisplayMode.MATH_DISPLAY_MODE_BLOCK
              ? MathLimitPlacement.MATH_LIMIT_PLACEMENT_UNDER_OVER
              : MathLimitPlacement.MATH_LIMIT_PLACEMENT_SUB_SUP,
        },
      };
    if (mathTmp3343 === "lim")
      return {
        limit: {
          base: this.createToken(
            "lim",
            MathTokenKind.MATH_TOKEN_KIND_IDENTIFIER,
          ),
          limit: this.createToken("", MathTokenKind.MATH_TOKEN_KIND_TEXT),
          kind: MathLimitKind.MATH_LIMIT_KIND_LOWER,
        },
      };
    if (mathTmp3343 === ",")
      return this.createToken(" ", MathTokenKind.MATH_TOKEN_KIND_TEXT);
    let mathTmp3344 = LATEX_GREEK_COMMANDS[mathTmp3343];
    if (mathTmp3344)
      return this.createToken(
        mathTmp3344,
        MathTokenKind.MATH_TOKEN_KIND_SYMBOL,
      );
    let mathTmp3345 = LATEX_OPERATOR_COMMANDS[mathTmp3343];
    return mathTmp3345
      ? this.createToken(mathTmp3345, MathTokenKind.MATH_TOKEN_KIND_OPERATOR)
      : this.createToken(mathTmp3343, MathTokenKind.MATH_TOKEN_KIND_IDENTIFIER);
  }
  parsePostfix(mathSlot2058) {
    let mathTmp8921 = mathSlot2058;
    for (;;) {
      this.skipWhitespace();
      let mathTmp9636 = this.peek();
      if (mathTmp9636 !== "_" && mathTmp9636 !== "^") break;
      this.consume();
      let mathTmp9637 = this.parseScriptArgument();
      if (!mathTmp9637) break;
      if (mathTmp8921.nary) {
        mathTmp8921 =
          mathTmp9636 === "_"
            ? {
                nary: {
                  ...mathTmp8921.nary,
                  lowerLimit: mathTmp9637,
                },
              }
            : {
                nary: {
                  ...mathTmp8921.nary,
                  upperLimit: mathTmp9637,
                },
              };
        continue;
      }
      if (mathTmp8921.limit && mathTmp9636 === "_") {
        mathTmp8921 = {
          limit: {
            ...mathTmp8921.limit,
            limit: mathTmp9637,
          },
        };
        continue;
      }
      let mathTmp9638 = mathTmp8921.scripts
        ? {
            ...mathTmp8921.scripts,
          }
        : {
            base: mathTmp8921,
          };
      mathTmp9636 === "_"
        ? (mathTmp9638.subscript = mathTmp9637)
        : (mathTmp9638.superscript = mathTmp9637);
      mathTmp8921 = {
        scripts: mathTmp9638,
      };
    }
    return mathTmp8921;
  }
  parseScriptArgument() {
    if ((this.skipWhitespace(), this.peek() === "{")) {
      this.consume();
      let mathTmp20385 = this.parseSequence();
      return (this.peek() === "}" && this.consume(), mathTmp20385);
    }
    return this.parseBase();
  }
  parseRequiredArgument() {
    return (
      this.parseScriptArgument() ||
      this.createToken("", MathTokenKind.MATH_TOKEN_KIND_TEXT)
    );
  }
  parseOptionalBracketArgument() {
    if ((this.skipWhitespace(), this.peek() !== "[")) return;
    this.consume();
    let mathTmp17236 = this.parseSequence({
      stopAt: ["]"],
    });
    return (this.peek() === "]" && this.consume(), mathTmp17236);
  }
  parseFunctionArgument() {
    if ((this.skipWhitespace(), this.startsWithCommand("left")))
      return this.parseBase();
    if (this.peek() === "(" || this.peek() === "[")
      return this.parsePlainDelimited();
  }
  parsePlainDelimited() {
    let mathTmp17820 = this.consume(),
      mathTmp17821 = mathTmp17820 === "[" ? "]" : ")";
    return this.parseDelimitedItems(mathTmp17820, mathTmp17821, {
      stopAt: [mathTmp17821],
      consumeEndDelimiter: true,
    });
  }
  parseLeftDelimited() {
    let mathTmp17646 = this.readDelimiterToken();
    return this.parseDelimitedItems(mathTmp17646, this.readRightDelimiter(), {
      stopAtRightCommand: true,
      consumeRightCommand: true,
    });
  }
  parseDelimitedItems(mathSlot1019, mathSlot1020, mathSlot1021) {
    let mathTmp6194 = [];
    for (
      ;
      !this.isAtEnd() &&
      (this.skipWhitespace(),
      !(
        mathSlot1021.stopAt?.includes(this.peek()) ||
        (mathSlot1021.stopAtRightCommand && this.startsWithCommand("right"))
      ));
    ) {
      let mathTmp12433 = this.parseSequence({
        stopAt: [",", ...(mathSlot1021.stopAt ?? [])],
        stopAtRightCommand: mathSlot1021.stopAtRightCommand,
      });
      if (
        (mathTmp12433 && mathTmp6194.push(mathTmp12433),
        this.skipWhitespace(),
        this.peek() === ",")
      ) {
        this.consume();
        continue;
      }
      if (
        mathSlot1021.stopAt?.includes(this.peek()) ||
        (mathSlot1021.stopAtRightCommand && this.startsWithCommand("right"))
      )
        break;
    }
    let mathTmp6195 = mathSlot1020;
    return (
      mathSlot1021.consumeEndDelimiter &&
        this.peek() === mathSlot1020 &&
        this.consume(),
      mathSlot1021.consumeRightCommand &&
        this.startsWithCommand("right") &&
        (this.consume(),
        this.readCommandName(),
        (mathTmp6195 = this.readDelimiterToken())),
      {
        delimited: {
          beginDelimiter: mathSlot1019,
          separatorDelimiter: ",",
          endDelimiter: mathTmp6195,
          grow: true,
          items: mathTmp6194,
        },
      }
    );
  }
  parseMatrixEnvironment(mathSlot1601) {
    let mathTmp7773 = this.readUntil(`\\end{${mathSlot1601}}`)
        .split(/\\\\/)
        .map((item) => item.trim())
        .filter((item) => item.length > 0)
        .map((item) =>
          item.split("&").map((_item) => this.parseMathCell(_item.trim())),
        ),
      mathTmp7774 = mathTmp7773.reduce(
        (accumulator, current) => Math.max(accumulator, current.length),
        0,
      ),
      mathTmp7775 = {
        matrix: {
          columns: Array.from(
            {
              length: mathTmp7774,
            },
            () => ({
              justification:
                MathMatrixColumnJustification.MATH_MATRIX_COLUMN_JUSTIFICATION_CENTER,
            }),
          ),
          rows: mathTmp7773.map((item) => ({
            cells: item,
          })),
        },
      };
    return mathSlot1601 === "bmatrix" || mathSlot1601 === "pmatrix"
      ? {
          delimited: {
            beginDelimiter: mathSlot1601 === "bmatrix" ? "[" : "(",
            separatorDelimiter: "",
            endDelimiter: mathSlot1601 === "bmatrix" ? "]" : ")",
            grow: true,
            items: [mathTmp7775],
          },
        }
      : mathTmp7775;
  }
  parseMathCell(mathSlot8229) {
    let mathTmp18737 = new MathLatexParser(
      mathSlot8229,
      this.#displayMode,
    ).parseMath();
    if (!mathTmp18737.root)
      throw Error("LaTeX matrix cell did not produce a math root.");
    return mathTmp18737.root;
  }
  readRequiredRawBraceText() {
    if ((this.skipWhitespace(), this.peek() !== "{")) return "";
    this.consume();
    let mathTmp13719 = this.#cursor,
      mathTmp13720 = 1;
    for (; !this.isAtEnd() && mathTmp13720 > 0; ) {
      let mathTmp21739 = this.consume();
      mathTmp21739 === "{"
        ? (mathTmp13720 += 1)
        : mathTmp21739 === "}" && --mathTmp13720;
    }
    let mathTmp13721 = mathTmp13720 === 0 ? this.#cursor - 1 : this.#cursor;
    return this.#latex.slice(mathTmp13719, mathTmp13721);
  }
  readDelimiterToken() {
    if ((this.skipWhitespace(), this.peek() !== "\\")) return this.consume();
    this.consume();
    let mathTmp16845 = this.readCommandName();
    return mathTmp16845 === "{"
      ? "{"
      : mathTmp16845 === "}"
        ? "}"
        : mathTmp16845 === "."
          ? ""
          : mathTmp16845;
  }
  readRightDelimiter() {
    return ")";
  }
  readCommandName() {
    let mathTmp18167 = this.peek();
    return mathTmp18167
      ? this.isLetter(mathTmp18167)
        ? this.readWhile((mathSlot16215) => this.isLetter(mathSlot16215))
        : (this.consume(), mathTmp18167)
      : "";
  }
  readWhile(mathSlot9302) {
    let mathTmp19868 = this.#cursor;
    for (; !this.isAtEnd() && mathSlot9302(this.peek()); ) this.#cursor += 1;
    return this.#latex.slice(mathTmp19868, this.#cursor);
  }
  readUntil(mathSlot6064) {
    let mathTmp16111 = this.#latex.indexOf(mathSlot6064, this.#cursor);
    if (mathTmp16111 === -1) {
      let mathTmp21542 = this.#latex.slice(this.#cursor);
      return ((this.#cursor = this.#latex.length), mathTmp21542);
    }
    let mathTmp16112 = this.#latex.slice(this.#cursor, mathTmp16111);
    return ((this.#cursor = mathTmp16111 + mathSlot6064.length), mathTmp16112);
  }
  startsWithCommand(mathSlot8021) {
    let mathTmp18514 = `\\${mathSlot8021}`;
    if (!this.#latex.startsWith(mathTmp18514, this.#cursor)) return false;
    let mathTmp18515 = this.#latex[this.#cursor + mathTmp18514.length] ?? "";
    return !this.isLetter(mathTmp18515);
  }
  createToken(mathSlot12477, mathSlot12478) {
    return {
      token: {
        text: mathSlot12477,
        kind: mathSlot12478,
      },
    };
  }
  isAtEnd() {
    return this.#cursor >= this.#latex.length;
  }
  peek() {
    return this.#latex[this.#cursor] ?? "";
  }
  consume() {
    let mathTmp22135 = this.peek();
    return ((this.#cursor += 1), mathTmp22135);
  }
  skipWhitespace() {
    for (; !this.isAtEnd(); ) {
      let mathTmp17408 = this.peek();
      if (
        mathTmp17408 !== " " &&
        mathTmp17408 !== "\n" &&
        mathTmp17408 !== "\t" &&
        mathTmp17408 !== "\r"
      )
        break;
      this.#cursor += 1;
    }
  }
  isDigit(mathSlot13707) {
    return mathSlot13707 >= "0" && mathSlot13707 <= "9";
  }
  isLetter(mathSlot13766) {
    return /[A-Za-z]/.test(mathSlot13766);
  }
  isIdentifierStart(mathSlot13209) {
    return this.isLetter(mathSlot13209);
  }
  isIdentifierPart(mathSlot12104) {
    return this.isLetter(mathSlot12104) || this.isDigit(mathSlot12104);
  }
  isOperator(mathSlot6405) {
    return (
      mathSlot6405 === "=" ||
      mathSlot6405 === "+" ||
      mathSlot6405 === "-" ||
      mathSlot6405 === "*" ||
      mathSlot6405 === "/" ||
      mathSlot6405 === "(" ||
      mathSlot6405 === ")" ||
      mathSlot6405 === "[" ||
      mathSlot6405 === "]"
    );
  }
  isRelationOperator(mathSlot13708) {
    return mathSlot13708 === "=";
  }
}
