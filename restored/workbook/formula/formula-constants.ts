// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-44: formula tokenizer/parser constants (legacy ame/Binding666–668/ome/sme/cme/lme).

export const BOOLEAN_LITERALS = new Set(["TRUE", "FALSE"]);

export const EMPTY_NUMBER_LITERAL = {
  kind: "NumberLiteral",
  value: 0,
} as const;

export const MAX_COLUMN_INDEX = 16384;

export const A1_CELL_RE = /^(\$?)([A-Za-z]{1,3})(\$?)(\d{1,7})$/;
export const A1_COLUMN_RE = /^(\$?)([A-Za-z]{1,3})$/;

export const BINARY_OPERATOR_PRECEDENCE: Record<string, number> = {
  ":": 150,
  ",": 140,
  "^": 110,
  "*": 100,
  "/": 100,
  "+": 90,
  "-": 90,
  "&": 80,
  "=": 70,
  "<>": 70,
  "<": 70,
  ">": 70,
  "<=": 70,
  ">=": 70,
};

export const RIGHT_ASSOCIATIVE_OPS = new Set(["^"]);

export const UNARY_OPERATOR_PRECEDENCE = 130;
