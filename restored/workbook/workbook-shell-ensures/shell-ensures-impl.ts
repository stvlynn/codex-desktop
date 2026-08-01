// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: thin workbook shell ensures (legacy yEe/Cze/aJe/Binding1489).
// Stage-3 wave-156b: direct imports (wire leave-behind removed).

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr } from "../presentation-protobuf";
import { workbookBinding1229 } from "../chart-layout-ensures";
import { _workbookJ } from "../text-frame-insets";
import { ensureStyleResolveInit as workbookT } from "../text-style";
import { ensureTextStyleInit as workbookBt } from "../text-style";
import { ensureTextBoxClusterInit as workbookZ } from "../text-box";
import { zTe, GTe, eEe, rEe } from "../shell-mid-ensures";
import { fEe, workbookO } from "../guide-layout-consts";
import { ensurePresetShapeClusterInit as workbookBinding644 } from "../preset-shape";
import { ensureShapeGeometryInit as workbookOt } from "../shape-geometry";
import { ensureStableIdClusterInit as workbookBinding647 } from "../stable-id";
import { Z$ } from "../presentation-slide";
import { workbookBinding661 } from "../binding662-gate";
import { workbookBinding739 } from "../shape-element";
import { workbookBinding1389 } from "../speaker-notes";
import { ensureDetachedTextInit as workbookBinding627 } from "../detached-text";
import { ensureTextSelectionInit as workbookBinding623 } from "../text-selection";
import { workbookBinding1736 } from "../comments";
import {
  wirePresentationRecipesFromCompose,
  ensurePresentationRecipesInit,
} from "../presentation-recipes";

export const yEe = esmInit(() => {
  workbookBinding1229();
  _workbookJ();
  workbookT();
  workbookZ();
  zTe();
  GTe();
  eEe();
  rEe();
  fEe();
  workbookO();
  workbookBinding644();
  wr();
});

export let xze = ":";
export let Sze = 1001;
export let workbookBinding1750 = "bg1";

export const Cze = esmInit(() => {
  workbookBinding647();
  Z$();
  workbookBinding661();
  workbookBinding739();
  workbookBinding1389();
  workbookBinding627();
  workbookBt();
  workbookBinding623();
  workbookBinding1736();
  xze = ":";
  Sze = 1001;
  workbookBinding1750 = "bg1";
});

export const aJe = esmInit(() => {
  wirePresentationRecipesFromCompose();
  ensurePresentationRecipesInit();
});

export const workbookBinding1489 = esmInit(() => {
  workbookOt();
});

export const ensureYEeInit = yEe;
export const ensureCzeInit = Cze;
export const ensureAJeInit = aJe;
export const ensureBinding1489Init = workbookBinding1489;
