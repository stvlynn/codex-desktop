// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: absolute child px size from EMU bbox (legacy PTe).
// Stage-3 wave-133.

import { workbookGt } from "../text-style";

export function PTe(props: any) {
  let tfeBind17140 =
      props.bbox?.widthEmu === undefined
        ? undefined
        : props.bbox.widthEmu * workbookGt,
    tfeBind17141 =
      props.bbox?.heightEmu === undefined
        ? undefined
        : props.bbox.heightEmu * workbookGt;
  if (
    !(
      tfeBind17140 === undefined ||
      tfeBind17141 === undefined ||
      tfeBind17140 <= 0 ||
      tfeBind17141 <= 0
    )
  )
    return {
      widthPx: tfeBind17140,
      heightPx: tfeBind17141,
    };
}

export const isAbsoluteChild = PTe;
