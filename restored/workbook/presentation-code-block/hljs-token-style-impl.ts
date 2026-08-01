// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: highlight.js token → theme color (legacy vAe).
// Stage-3 wave-105.

import { pcbH } from "./boundary-hooks";

void pcbH;

export function hljsTokenStyle(pcbIn930: any) {
  let pcbBind5931 = new Set(
    pcbIn930.map((item) => (item.startsWith("hljs-") ? item.slice(5) : item)),
  );
  return setHasAny(pcbBind5931, ["comment", "quote"])
    ? {
        color: pcbH.theme.comment,
        italic: true,
      }
    : setHasAny(pcbBind5931, ["deletion", "invalid"])
      ? {
          color: pcbH.theme.red,
        }
      : setHasAny(pcbBind5931, ["keyword", "doctag", "formula", "operator"])
        ? {
            color: pcbH.theme.pink,
          }
        : setHasAny(pcbBind5931, [
              "string",
              "regexp",
              "addition",
              "meta-string",
            ])
          ? {
              color: pcbH.theme.green,
            }
          : setHasAny(pcbBind5931, [
                "number",
                "literal",
                "built_in",
                "built-in",
              ])
            ? {
                color: pcbH.theme.orange,
              }
            : setHasAny(pcbBind5931, [
                  "attr",
                  "attribute",
                  "property",
                  "selector-attr",
                ])
              ? {
                  color: pcbH.theme.yellow,
                }
              : setHasAny(pcbBind5931, [
                    "tag",
                    "name",
                    "link",
                    "meta",
                    "section",
                    "selector-tag",
                  ])
                ? {
                    color: pcbH.theme.blue,
                  }
                : setHasAny(pcbBind5931, [
                      "title",
                      "function",
                      "function_",
                      "params",
                      "variable",
                      "type",
                      "class",
                      "class_",
                    ])
                  ? {
                      color: pcbH.theme.purple,
                    }
                  : setHasAny(pcbBind5931, ["strong"])
                    ? {
                        color: pcbH.theme.codeText,
                        bold: true,
                      }
                    : setHasAny(pcbBind5931, ["emphasis"])
                      ? {
                          color: pcbH.theme.codeText,
                          italic: true,
                        }
                      : {
                          color: pcbH.theme.codeText,
                        };
}
export function setHasAny(pcbIn14320: any, pcbIn14321: any) {
  return pcbIn14321.some((item) => pcbIn14320.has(item));
}

/** Legacy aliases. */
export const vAe = hljsTokenStyle;
export const workbookHelper765 = setHasAny;
