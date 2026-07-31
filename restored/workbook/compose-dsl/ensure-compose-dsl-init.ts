// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-72: compose-dsl cluster ensure (legacy Binding1528 / DOe / OOe).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureCaseTransformInit,
  ensureComposeMeasureInit,
  ensureComposeApplyInit,
  ensureComposeThemeTokensInit,
} from "../compose-layout";
import { cdslH } from "./boundary-hooks";
import { ensureComposeLayoutMetaInit } from "./layout-meta-impl";
import { ensureComposeSizeHelpersInit } from "./size-helpers-impl";
import { ensureComposeElementBuildersInit } from "./element-builders-impl";

void ensureCaseTransformInit;
void ensureComposeMeasureInit;
void ensureComposeApplyInit;
void ensureComposeThemeTokensInit;
void cdslH;

/** Aggregator ensure (legacy Binding1528). */
export const ensureComposeDslAggregatorInit = esmInit(() => {
  ensureComposeSizeHelpersInit();
  cdslH.ensureBinding1330();
  ensureComposeElementBuildersInit();
  ensureCaseTransformInit();
  ensureComposeMeasureInit();
  ensureComposeApplyInit();
  ensureComposeThemeTokensInit();
});

/** Legacy workbookBinding1528. */
export const workbookBinding1528 = ensureComposeDslAggregatorInit;

/** Initialize full compose-dsl cluster (DOe + Binding1499 + OOe + Binding1528). */
export const ensureComposeDslInit = esmInit(() => {
  ensureComposeLayoutMetaInit();
  ensureComposeSizeHelpersInit();
  ensureComposeElementBuildersInit();
  ensureComposeDslAggregatorInit();
});
