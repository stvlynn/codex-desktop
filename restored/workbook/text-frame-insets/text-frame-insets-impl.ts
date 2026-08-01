// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: text-frame inset consts (legacy _workbookJ).
// Stage-3 wave-156b: direct imports (wire leave-behind removed).

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, wr } from "../presentation-protobuf";
import { ensureTextBoxClusterInit as workbookZ } from "../text-box";
import {
  ensureTypographyUnitsInit as workbookUt,
  twipToCssPx,
} from "../font-stack";
import { ensureStyleResolveInit as workbookT, workbookGt } from "../text-style";
import { ensureCssNamedColorsInit as workbookXt } from "../presentation-theme";
import { ensureFillResolveInit as workbookBinding543 } from "../canvas-fill";
import { workbookM, workbookBinding1267, CTe } from "../shell-mid-ensures";

export let workbookBinding1268: number;
export let workbookBinding1269: number;
export let workbookBinding1270: number;
export let _V: string;
export let workbookBinding1271: number;
export let workbookBinding1272: number;
export let workbookBinding1273: number;
export let workbookBinding1274: number;
export let workbookBinding1275: {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

export const _workbookJ = esmInit(() => {
  workbookZ();
  Qt();
  wr();
  workbookUt();
  workbookT();
  workbookXt();
  workbookBinding543();
  workbookM();
  workbookBinding1267();
  CTe();
  workbookBinding1268 = 1 / workbookGt;
  workbookBinding1269 = 24;
  workbookBinding1270 = 24;
  _V = "#000000";
  workbookBinding1271 = 1;
  workbookBinding1272 = 600;
  workbookBinding1273 = 1;
  workbookBinding1274 = 108;
  workbookBinding1275 = {
    left: twipToCssPx(workbookBinding1274),
    right: twipToCssPx(workbookBinding1274),
    top: 0,
    bottom: 0,
  };
});

export const ensureTextFrameInsetsInit = _workbookJ;
