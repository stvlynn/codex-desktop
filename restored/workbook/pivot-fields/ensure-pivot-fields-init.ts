// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: field-VO cluster ensure.
import { esmInit } from "../../runtime/rolldown-runtime";
import { initAddressUtils } from "../../utils/spreadsheet-address-utils";
import { Vn as spreadsheetVn } from "../spreadsheet-protobuf";
import { ensurePivotFieldEnumsInit } from "./pivot-field-enums";
import { ensurePivotShowAsInit } from "./pivot-show-as";
import { ensurePivotItemInit } from "./pivot-item";
import { ensurePivotDataFieldInit } from "./pivot-data-field";
import {
  ensurePivotHierarchyClusterInit,
  ensurePivotHierarchiesInit,
} from "./pivot-hierarchies";
import { ensurePivotFieldInit } from "./pivot-field";
import { ensurePivotHierarchyInit } from "./pivot-hierarchy";
import { ensurePivotDataHierarchiesInit } from "./pivot-data-hierarchies";

export const ensurePivotFieldsInit = esmInit(() => {
  spreadsheetVn();
  ensurePivotFieldEnumsInit();
  initAddressUtils();
  ensurePivotShowAsInit();
  ensurePivotItemInit();
  ensurePivotDataFieldInit();
  ensurePivotHierarchyClusterInit();
  ensurePivotHierarchiesInit();
  ensurePivotFieldInit();
  ensurePivotHierarchyInit();
  ensurePivotDataHierarchiesInit();
});
