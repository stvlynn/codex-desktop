// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide.addFromMermaid (legacy IIe/wIe); NIe via ppaH.
// Stage-3 wave-135.

import { ppaH } from "./boundary-hooks";
import { LIe, RIe } from "../presentation-element-fit";

export function wIe(ppaIn12680: any) {
  return typeof ppaIn12680 == "string" ? ppaIn12680 : ppaIn12680.join("\n");
}
export async function IIe(ppaIn6469: any, event: any) {
  let ppaBind16675 = wIe(event.code);
  if (ppaBind16675.length === 0)
    throw Error("Mermaid plugin requires non-empty code.");
  let ppaBind16676 = await ppaH.mermaidToElements(ppaBind16675, event.options),
    ppaBind16677 = LIe(ppaIn6469, ppaBind16676.elements).map((item) =>
      ppaIn6469.shapes.add({
        proto: item,
      }),
    );
  return (
    RIe(ppaBind16677, ppaBind16676.bboxEmu, event.position),
    ppaBind16677
  );
}
