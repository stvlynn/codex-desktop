// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-58: text-case transform (legacy Binding1390–1393).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  isPlainRunList,
  normalizeParagraphInputs,
  ensureDetachedTextHelpersInit,
} from "../detached-text";
import {
  mapRunsTextCase,
  mapParagraphTextCase,
  applyTextCase,
  mapTextCaseValue,
  isPlainRunListArray,
} from "./text-case";
import { composeLayout } from "./compose-bindings";

export const ensureCaseTransformInit = esmInit(() => {
  ensureDetachedTextHelpersInit();
  {
    ensureDetachedTextHelpersInit();
    composeLayout.applyTextCaseToValue = (clIn5946, clIn5947) => {
      if (clIn5947 === "none") return clIn5946;
      if (typeof clIn5946 == "string") return applyTextCase(clIn5946, clIn5947);
      if (Array.isArray(clIn5946)) {
        if (clIn5946.length === 0) return [];
        if (isPlainRunList(clIn5946))
          return mapRunsTextCase(clIn5946, clIn5947);
        if (isPlainRunListArray(clIn5946))
          return clIn5946.map((item) => mapTextCaseValue(item, clIn5947));
      }
      return mapParagraphTextCase(clIn5946, clIn5947);
    };
    composeLayout.valueToParagraphsWithCase = (clIn5849, clIn5850) => {
      let clBind15810 = composeLayout.applyTextCaseToValue(clIn5849, clIn5850);
      return typeof clBind15810 == "string"
        ? (clBind15810.length > 0 ? clBind15810.split(/\r?\n/) : [""]).map(
            (item) => ({
              id: "",
              inlineNodes: [],
              runs: [
                {
                  id: "",
                  text: item,
                  citations: [],
                  reviewMarkIds: [],
                },
              ],
            }),
          )
        : normalizeParagraphInputs(clBind15810);
    };
    composeLayout.valueToPlainTextWithCase = (clIn11051, clIn11052) =>
      composeLayout
        .valueToParagraphsWithCase(clIn11051, clIn11052)
        .map((item) =>
          (item.runs ?? []).map((_item) => _item.text ?? "").join(""),
        )
        .join("\n");
  }
});

export function applyTextCaseToValue(...args: any[]): any {
  ensureCaseTransformInit();
  return composeLayout.applyTextCaseToValue(...args);
}
export function valueToParagraphsWithCase(...args: any[]): any {
  ensureCaseTransformInit();
  return composeLayout.valueToParagraphsWithCase(...args);
}
export function valueToPlainTextWithCase(...args: any[]): any {
  ensureCaseTransformInit();
  return composeLayout.valueToPlainTextWithCase(...args);
}
