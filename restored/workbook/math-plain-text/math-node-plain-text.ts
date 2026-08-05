// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-12: math AST / mixed runs → collapsed plain text (legacy helpers + woe/Toe).

import {
  ASCII_SUPERSCRIPT_SAFE,
  ASCII_SUBSCRIPT_SAFE,
  UNICODE_SUPERSCRIPT,
  UNICODE_SUBSCRIPT,
} from "./unicode-math-maps";
import { MathTokenKind } from "./math-proto-enums";

export type MathTokenNode = {
  token?: { text?: string; kind?: number };
  sequence?: { children: MathAstNode[] };
  fraction?: { numerator?: MathAstNode; denominator?: MathAstNode };
  radical?: { radicand?: MathAstNode };
  scripts?: {
    base?: MathAstNode;
    subscript?: MathAstNode;
    superscript?: MathAstNode;
  };
  nary?: {
    operator?: string;
    lowerLimit?: MathAstNode;
    upperLimit?: MathAstNode;
    body?: MathAstNode;
  };
  delimited?: {
    items: MathAstNode[];
    separatorDelimiter?: string;
    beginDelimiter?: string;
    endDelimiter?: string;
  };
  function?: { name?: MathAstNode; argument?: MathAstNode };
  matrix?: { rows: Array<{ cells: MathAstNode[] }> };
  accent?: { character?: string; base?: MathAstNode };
  bar?: { base?: MathAstNode };
  enclosure?: { body?: MathAstNode };
  limit?: { base?: MathAstNode; limit?: MathAstNode };
  phantom?: { show?: boolean; body?: MathAstNode };
  equationArray?: { rows: MathAstNode[] };
};

export type MathAstNode = MathTokenNode;

export type MathDocument = {
  root?: MathAstNode | null;
};

export type MixedTextMathRun = {
  math?: MathDocument | null;
  textRun?: { text?: string } | null;
};

/** Legacy workbookHelper 126 — collapse internal whitespace. */
export function collapseMathWhitespace(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

/** Legacy workbookHelper 125 — parenthesize multi-char fragments. */
export function parenIfMultiChar(text: string): string {
  const trimmed = text.trim();
  return trimmed ? (trimmed.length === 1 ? trimmed : `(${trimmed})`) : "";
}

/** Legacy workbookHelper 124 — map every char through a glyph table. */
export function mapCharsThroughTable(
  text: string,
  table: Record<string, string>,
): string | undefined {
  if (!text) return "";
  let out = "";
  for (const ch of text) {
    if (ch === " ") continue;
    const mapped = table[ch];
    if (!mapped) return;
    out += mapped;
  }
  return out;
}

/**
 * Legacy workbookHelper 123 — render a script (sub/sup) using unicode tables
 * when possible, else `_`/`^` wrappers.
 */
export function formatScriptPlainText(
  node: MathAstNode | null | undefined,
  unicodeTable: Record<string, string>,
  asciiSafeTable: Record<string, string>,
  wrapper: "_" | "^",
): string {
  if (!node) return "";
  const plain = mathNodeToPlainText(node);
  const unicode = mapCharsThroughTable(plain, unicodeTable);
  if (unicode !== undefined) return unicode;
  const ascii = mapCharsThroughTable(plain, asciiSafeTable);
  return ascii === undefined
    ? `${wrapper}(${plain})`
    : wrapper === "_"
      ? `_${ascii}`
      : `^${ascii}`;
}

/** Legacy Toe — join a math sequence with operator spacing. */
export function joinMathSequencePlainText(children: MathAstNode[]): string {
  let out = "";
  for (const child of children) {
    const piece = mathNodeToPlainText(child);
    if (!piece) continue;
    if (child.token?.kind === MathTokenKind.MATH_TOKEN_KIND_OPERATOR) {
      if (piece === "(" || piece === "[") {
        out += piece;
        continue;
      }
      if (piece === ")" || piece === "]") {
        out = out.trimEnd();
        out += piece;
        continue;
      }
      out = out.trimEnd();
      out += ` ${piece} `;
      continue;
    }
    out += piece;
  }
  return out;
}

/** Legacy workbookHelper 122 — recursive math AST → plain text. */
export function mathNodeToPlainText(
  node: MathAstNode | null | undefined,
): string {
  if (!node) return "";
  if (node.sequence) return joinMathSequencePlainText(node.sequence.children);
  if (node.token) return node.token.text ?? "";
  if (node.fraction) {
    const num = mathNodeToPlainText(node.fraction.numerator);
    const den = mathNodeToPlainText(node.fraction.denominator);
    return !num && !den
      ? ""
      : `${parenIfMultiChar(num)}\u2044${parenIfMultiChar(den)}`;
  }
  if (node.radical)
    return `\u221a${parenIfMultiChar(mathNodeToPlainText(node.radical.radicand))}`;
  if (node.scripts)
    return `${mathNodeToPlainText(node.scripts.base)}${formatScriptPlainText(node.scripts.subscript, UNICODE_SUBSCRIPT, ASCII_SUBSCRIPT_SAFE, "_")}${formatScriptPlainText(node.scripts.superscript, UNICODE_SUPERSCRIPT, ASCII_SUPERSCRIPT_SAFE, "^")}`;
  if (node.nary) {
    const lower = formatScriptPlainText(
      node.nary.lowerLimit,
      UNICODE_SUBSCRIPT,
      ASCII_SUBSCRIPT_SAFE,
      "_",
    );
    const upper = formatScriptPlainText(
      node.nary.upperLimit,
      UNICODE_SUPERSCRIPT,
      ASCII_SUPERSCRIPT_SAFE,
      "^",
    );
    const body = mathNodeToPlainText(node.nary.body);
    return `${node.nary.operator ?? ""}${lower}${upper}${body ? ` ${body}` : ""}`;
  }
  if (node.delimited) {
    const items = node.delimited.items.map((item) => mathNodeToPlainText(item));
    const sep = node.delimited.separatorDelimiter ?? "";
    return `${node.delimited.beginDelimiter ?? ""}${items.join(sep)}${node.delimited.endDelimiter ?? ""}`;
  }
  if (node.function)
    return `${mathNodeToPlainText(node.function.name)}(${mathNodeToPlainText(node.function.argument)})`;
  if (node.matrix)
    return node.matrix.rows
      .map((row) =>
        row.cells.map((cell) => mathNodeToPlainText(cell)).join(", "),
      )
      .join("; ");
  if (node.accent)
    return `${node.accent.character ?? ""}${mathNodeToPlainText(node.accent.base)}`;
  if (node.bar) return mathNodeToPlainText(node.bar.base);
  if (node.enclosure) return mathNodeToPlainText(node.enclosure.body);
  if (node.limit)
    return `${mathNodeToPlainText(node.limit.base)}${formatScriptPlainText(node.limit.limit, UNICODE_SUBSCRIPT, ASCII_SUBSCRIPT_SAFE, "_")}`;
  if (node.phantom)
    return node.phantom.show ? mathNodeToPlainText(node.phantom.body) : "";
  if (node.equationArray)
    return node.equationArray.rows
      .map((row) => mathNodeToPlainText(row))
      .join(" ");
  return "";
}

/** Legacy workbookHelper 121 — math document → plain text. */
export function mathAstToPlainText(
  math: MathDocument | null | undefined,
): string {
  return math?.root
    ? collapseMathWhitespace(mathNodeToPlainText(math.root))
    : "";
}

/** Legacy woe — mixed textRun/math runs → plain text. */
export function mixedRunsToPlainText(runs: MixedTextMathRun[]): string {
  return collapseMathWhitespace(
    runs
      .map((run) =>
        run.math ? mathAstToPlainText(run.math) : (run.textRun?.text ?? ""),
      )
      .join(""),
  );
}
