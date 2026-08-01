// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: border merge / width rank helpers (legacy workbookHelper632/636–638).
// Stage-3 wave-142.

import { workbookGt } from "../text-style";

export function workbookHelper632(whIn12511: any) {
  return whIn12511.horizontalMerge === true || whIn12511.verticalMerge === true;
}
export function workbookHelper636(whIn12013: any) {
  return whIn12013.widthEmu === undefined
    ? 1
    : Math.max(0.25, whIn12013.widthEmu * workbookGt);
}
export function workbookHelper637(whIn12614: any) {
  return (
    workbookHelper636(whIn12614) * 1e3 +
    (whIn12614.style ?? 0) +
    (whIn12614.compound ?? 0)
  );
}
export function workbookHelper638(whIn14539: any, whIn14540: any) {
  return workbookHelper637(whIn14540) > workbookHelper637(whIn14539)
    ? whIn14540
    : whIn14539;
}
