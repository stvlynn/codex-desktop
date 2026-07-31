// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-22: layout then paint a text element (legacy workbookX).

import { layoutTextElement } from "./layout-text-element";
import { renderTextLayout } from "./render-text-layout";
export function paintTextElement(
  tbIn11031: unknown,
  tbIn11032: unknown,
  tbIn11033: unknown,
  tbIn11034: unknown,
  tbIn11035: unknown,
) {
  let tbBind21560 = layoutTextElement(tbIn11031, tbIn11033, tbIn11035);
  if (tbBind21560)
    return renderTextLayout(tbIn11031, tbBind21560, tbIn11032, tbIn11034, {
      ...tbIn11035,
      themeMap: tbIn11033,
    });
}
