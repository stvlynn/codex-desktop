// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-155: wire presentation-recipe layout hooks from compose-dsl.
// Replaces boundary-local wirePresentationRecipesFromBoundary.

import {
  workbookBinding1494,
  workbookBinding1496,
  workbookBinding1501,
  workbookBinding1502,
  workbookBinding1503,
  workbookBinding1505,
  workbookBinding1506,
  workbookBinding1507,
  workbookBinding1508,
  workbookBinding1509,
  workbookBinding1510,
  workbookBinding1528,
} from "../compose-dsl";
import { workbookBinding1325, workbookBinding1326 } from "../compose-layout";
import { wirePresentationRecipeLayoutHooks } from "./layout-hooks";

export function wirePresentationRecipesFromCompose(): void {
  wirePresentationRecipeLayoutHooks({
    ensureComposeLayoutInit: () => {
      workbookBinding1528();
    },
    composeText: (...args: any[]) => workbookBinding1501(...args),
    composeRule: (...args: any[]) => workbookBinding1502(...args),
    composeShape: (...args: any[]) => workbookBinding1503(...args),
    composeImage: (...args: any[]) => workbookBinding1505(...args),
    composeTable: (...args: any[]) => workbookBinding1506(...args),
    composeChart: (...args: any[]) => workbookBinding1507(...args),
    composeRow: (...args: any[]) => workbookBinding1508(...args),
    composeColumn: (...args: any[]) => workbookBinding1509(...args),
    composeGrid: (...args: any[]) => workbookBinding1510(...args),
    composeWrap: (...args: any[]) => workbookBinding1496(...args),
    composeFixed: (...args: any[]) => workbookBinding1494(...args),
    composeFr: (...args: any[]) => workbookBinding1325(...args),
    composeRepeat: (...args: any[]) => workbookBinding1326(...args),
  });
}

/** @deprecated Alias kept for boundary call sites. */
export const wirePresentationRecipesFromBoundary =
  wirePresentationRecipesFromCompose;
