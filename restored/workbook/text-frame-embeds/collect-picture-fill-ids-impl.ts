// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: collect picture-fill image ids (legacy gEe).
// Stage-3 wave-134.

import { tr } from "../presentation-protobuf";

export function gEe(tfeIn4661: any) {
  let tfeBind13931 = new Set(),
    tfeBind13932 = (tfeIn10626) => {
      tfeIn10626?.type === tr.FILL_TYPE_PICTURE &&
        tfeIn10626.imageReference?.id &&
        tfeBind13931.add(tfeIn10626.imageReference.id);
    };
  tfeBind13932(tfeIn4661.textStyle?.fill);
  for (let tfeBind19067 of tfeIn4661.paragraphs ?? []) {
    tfeBind13932(tfeBind19067.textStyle?.fill);
    for (let tfeBind22917 of tfeBind19067.runs ?? [])
      tfeBind13932(tfeBind22917.textStyle?.fill);
    for (let tfeBind22652 of tfeBind19067.inlineNodes ?? [])
      tfeBind13932(tfeBind22652.textRun?.textStyle?.fill);
  }
  return [...tfeBind13931];
}
