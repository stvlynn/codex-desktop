// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-12: unicode superscript/subscript + greek/operator maps (Binding457–463).

/** Legacy Binding457 — ASCII chars safe to keep as superscripts (no unicode form). */
export const ASCII_SUPERSCRIPT_SAFE: Record<string, string> = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "+": "+",
  "-": "-",
  "=": "=",
  "(": "(",
  ")": ")",
  n: "n",
  i: "i",
  x: "x",
};

/** Legacy Binding458 — ASCII chars safe to keep as subscripts. */
export const ASCII_SUBSCRIPT_SAFE: Record<string, string> = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "+": "+",
  "-": "-",
  "=": "=",
  "(": "(",
  ")": ")",
  a: "a",
  e: "e",
  i: "i",
  o: "o",
  r: "r",
  u: "u",
  v: "v",
  x: "x",
};

/** Legacy Binding459 — unicode superscript forms. */
export const UNICODE_SUPERSCRIPT: Record<string, string> = {
  0: "⁰",
  1: "¹",
  2: "²",
  3: "³",
  4: "⁴",
  5: "⁵",
  6: "⁶",
  7: "⁷",
  8: "⁸",
  9: "⁹",
  "+": "⁺",
  "-": "⁻",
  "=": "⁼",
  "(": "⁽",
  ")": "⁾",
  n: "ⁿ",
  i: "ⁱ",
  x: "ˣ",
};

/** Legacy Binding460 — unicode subscript forms. */
export const UNICODE_SUBSCRIPT: Record<string, string> = {
  0: "₀",
  1: "₁",
  2: "₂",
  3: "₃",
  4: "₄",
  5: "₅",
  6: "₆",
  7: "₇",
  8: "₈",
  9: "₉",
  "+": "₊",
  "-": "₋",
  "=": "₌",
  "(": "₍",
  ")": "₎",
  a: "ₐ",
  e: "ₑ",
  i: "ᵢ",
  o: "ₒ",
  r: "ᵣ",
  u: "ᵤ",
  v: "ᵥ",
  x: "ₓ",
};

/** Legacy Binding461 — common greek command → glyph. */
export const LATEX_GREEK_COMMANDS: Record<string, string> = {
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  theta: "θ",
  lambda: "λ",
  mu: "μ",
  pi: "π",
  sigma: "σ",
  phi: "φ",
  omega: "ω",
};

/** Legacy Binding462 — common operator command → glyph. */
export const LATEX_OPERATOR_COMMANDS: Record<string, string> = {
  cdot: "·",
  times: "×",
  pm: "±",
  mp: "∓",
  leq: "≤",
  geq: "≥",
  neq: "≠",
  infty: "∞",
  to: "→",
  rightarrow: "→",
};

/** Legacy Binding463 — matrix environment names. */
export const MATRIX_ENVIRONMENT_NAMES = new Set([
  "matrix",
  "bmatrix",
  "pmatrix",
]);
