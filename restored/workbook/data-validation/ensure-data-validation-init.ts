// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-43: DV cluster ensure (legacy Bpe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { Vn as spreadsheetVn } from "../spreadsheet-protobuf";
import { initAddressUtils } from "../../utils/spreadsheet-address-utils";
import { DataValidations } from "./data-validations";
import { RangeDataValidation } from "./range-data-validation";
import {
  dvTypeProtoMap,
  dvOperatorProtoMap,
  dvErrorStyleProtoMap,
} from "./dv-proto-maps";

/** Legacy `Bpe` — touch DV maps/classes; Binding675 circular call omitted. */
export const ensureDataValidationInit = esmInit(() => {
  spreadsheetVn();
  initAddressUtils();
  void dvTypeProtoMap();
  void dvOperatorProtoMap();
  void dvErrorStyleProtoMap();
  void DataValidations;
  void RangeDataValidation;
});
