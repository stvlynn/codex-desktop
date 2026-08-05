// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-13: Normalize Math AST (split tokens, flatten sequences).

import {
  applyMathAstStyle,
  flattenMathAstChildren,
  wrapMathAstSequence,
} from "./math-ml-node";
import { splitMultiCharTokenNode } from "./math-token-classify";
export function normalizeMathAstNode(mathIn205: unknown) {
  if (mathIn205)
    return mathIn205.token
      ? splitMultiCharTokenNode(mathIn205)
      : mathIn205.sequence
        ? applyMathAstStyle(
            wrapMathAstSequence(
              mathIn205.sequence.children.flatMap((item) =>
                flattenMathAstChildren(normalizeMathAstNode(item)),
              ),
            ),
            mathIn205.style,
          )
        : mathIn205.fraction
          ? {
              ...mathIn205,
              fraction: {
                ...mathIn205.fraction,
                numerator: normalizeMathAstNode(mathIn205.fraction.numerator),
                denominator: normalizeMathAstNode(
                  mathIn205.fraction.denominator,
                ),
              },
            }
          : mathIn205.radical
            ? {
                ...mathIn205,
                radical: {
                  ...mathIn205.radical,
                  degree: normalizeMathAstNode(mathIn205.radical.degree),
                  radicand: normalizeMathAstNode(mathIn205.radical.radicand),
                },
              }
            : mathIn205.scripts
              ? {
                  ...mathIn205,
                  scripts: {
                    ...mathIn205.scripts,
                    base: normalizeMathAstNode(mathIn205.scripts.base),
                    subscript: normalizeMathAstNode(
                      mathIn205.scripts.subscript,
                    ),
                    superscript: normalizeMathAstNode(
                      mathIn205.scripts.superscript,
                    ),
                    presubscript: normalizeMathAstNode(
                      mathIn205.scripts.presubscript,
                    ),
                    presuperscript: normalizeMathAstNode(
                      mathIn205.scripts.presuperscript,
                    ),
                  },
                }
              : mathIn205.nary
                ? {
                    ...mathIn205,
                    nary: {
                      ...mathIn205.nary,
                      lowerLimit: normalizeMathAstNode(
                        mathIn205.nary.lowerLimit,
                      ),
                      upperLimit: normalizeMathAstNode(
                        mathIn205.nary.upperLimit,
                      ),
                      body: normalizeMathAstNode(mathIn205.nary.body),
                    },
                  }
                : mathIn205.delimited
                  ? {
                      ...mathIn205,
                      delimited: {
                        ...mathIn205.delimited,
                        items: mathIn205.delimited.items.flatMap((item) =>
                          flattenMathAstChildren(normalizeMathAstNode(item)),
                        ),
                      },
                    }
                  : mathIn205.function
                    ? {
                        ...mathIn205,
                        function: {
                          ...mathIn205.function,
                          name: normalizeMathAstNode(mathIn205.function.name),
                          argument: normalizeMathAstNode(
                            mathIn205.function.argument,
                          ),
                        },
                      }
                    : mathIn205.matrix
                      ? {
                          ...mathIn205,
                          matrix: {
                            ...mathIn205.matrix,
                            rows: mathIn205.matrix.rows.map((item) => ({
                              ...item,
                              cells: item.cells.flatMap((_item) =>
                                flattenMathAstChildren(
                                  normalizeMathAstNode(_item),
                                ),
                              ),
                            })),
                          },
                        }
                      : mathIn205.accent
                        ? {
                            ...mathIn205,
                            accent: {
                              ...mathIn205.accent,
                              base: normalizeMathAstNode(mathIn205.accent.base),
                            },
                          }
                        : mathIn205.bar
                          ? {
                              ...mathIn205,
                              bar: {
                                ...mathIn205.bar,
                                base: normalizeMathAstNode(mathIn205.bar.base),
                              },
                            }
                          : mathIn205.enclosure
                            ? {
                                ...mathIn205,
                                enclosure: {
                                  ...mathIn205.enclosure,
                                  body: normalizeMathAstNode(
                                    mathIn205.enclosure.body,
                                  ),
                                },
                              }
                            : mathIn205.limit
                              ? {
                                  ...mathIn205,
                                  limit: {
                                    ...mathIn205.limit,
                                    base: normalizeMathAstNode(
                                      mathIn205.limit.base,
                                    ),
                                    limit: normalizeMathAstNode(
                                      mathIn205.limit.limit,
                                    ),
                                  },
                                }
                              : mathIn205.phantom
                                ? {
                                    ...mathIn205,
                                    phantom: {
                                      ...mathIn205.phantom,
                                      body: normalizeMathAstNode(
                                        mathIn205.phantom.body,
                                      ),
                                    },
                                  }
                                : mathIn205.equationArray
                                  ? {
                                      ...mathIn205,
                                      equationArray: {
                                        ...mathIn205.equationArray,
                                        rows: mathIn205.equationArray.rows.flatMap(
                                          (item) =>
                                            flattenMathAstChildren(
                                              normalizeMathAstNode(item),
                                            ),
                                        ),
                                      },
                                    }
                                  : mathIn205;
}
