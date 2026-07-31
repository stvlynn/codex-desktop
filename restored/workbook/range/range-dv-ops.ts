// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range helpers (setRangeDataValidation).

import type { RangeOpsHost } from "./types";
import { RangeDataValidation } from "../data-validation";
import { isDataValidationLike } from "./data-validation-guard";

export function setRangeDataValidation(host: RangeOpsHost, rngIn672: unknown) {
  if (rngIn672 instanceof RangeDataValidation) return;
  if (rngIn672 == null) {
    host.range.dataValidation.clear();
    return;
  }
  let rngBind4905 = host.range.dataValidation;
  if (isDataValidationLike(rngIn672)) {
    "rule" in rngIn672 &&
      rngIn672.rule !== undefined &&
      (rngBind4905.rule = rngIn672.rule);
    "prompt" in rngIn672 &&
      rngIn672.prompt !== undefined &&
      (rngBind4905.prompt = rngIn672.prompt);
    "errorAlert" in rngIn672 &&
      rngIn672.errorAlert !== undefined &&
      (rngBind4905.errorAlert = rngIn672.errorAlert);
    "ignoreBlanks" in rngIn672 &&
      rngIn672.ignoreBlanks !== undefined &&
      (rngBind4905.ignoreBlanks = rngIn672.ignoreBlanks);
    "inCellDropDown" in rngIn672 &&
      rngIn672.inCellDropDown !== undefined &&
      (rngBind4905.inCellDropDown = rngIn672.inCellDropDown);
    return;
  }
  rngIn672.allowBlank !== undefined &&
    (rngBind4905.ignoreBlanks = rngIn672.allowBlank);
  rngIn672.list &&
    (rngIn672.list.inCellDropDown !== undefined &&
      (rngBind4905.inCellDropDown = rngIn672.list.inCellDropDown),
    rngIn672.list.source === undefined
      ? (rngBind4905.rule = {
          type: "list",
        })
      : (rngBind4905.rule = Array.isArray(rngIn672.list.source)
          ? {
              type: "list",
              values: rngIn672.list.source,
            }
          : {
              type: "list",
              formula1: rngIn672.list.source,
            }));
  (rngIn672.promptTitle !== undefined ||
    rngIn672.prompt !== undefined ||
    rngIn672.showInputMessage !== undefined) &&
    (rngBind4905.prompt = {
      title: rngIn672.promptTitle,
      message: rngIn672.prompt,
      show: rngIn672.showInputMessage,
    });
  (rngIn672.errorTitle !== undefined ||
    rngIn672.errorMessage !== undefined ||
    rngIn672.showErrorMessage !== undefined ||
    rngIn672.errorStyle !== undefined) &&
    (rngBind4905.errorAlert = {
      title: rngIn672.errorTitle,
      message: rngIn672.errorMessage,
      show: rngIn672.showErrorMessage,
      style: rngIn672.errorStyle,
    });
}
