// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: lazy workbook-from-markdown / plan-csv loaders (legacy svt / ovt).
// Stage-3 wave-152.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureViteModulepreloadRuntime,
  vitePreload,
} from "../../runtime/vite-preload";

export let workbookBinding1993: any;
export let ovt: any;
export let workbookBinding1994: any;
export let workbookBinding1995: any;

export const svt = esmInit(() => {
  ensureViteModulepreloadRuntime();
      workbookBinding1993 = null;
      ovt = () => (
        (workbookBinding1993 ??= vitePreload(
          () => import("../../workbook/lazy-workbook-from-markdown"),
          [] /* vite mapDeps stripped */,
          import.meta.url,
        )),
        workbookBinding1993
      );
      workbookBinding1994 = null;
      workbookBinding1995 = () => (
        (workbookBinding1994 ??= vitePreload(
          () => import("../../workbook/plan-csv-import"),
          [] /* vite mapDeps stripped */,
          import.meta.url,
        )),
        workbookBinding1994
      );
});

export function ensureLazyWorkbookLoadersInit(): void {
  svt();
}
