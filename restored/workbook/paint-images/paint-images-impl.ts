// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: spreadsheet canvas image paint (legacy Fwe).
// Stage-3 wave-97.

import { piH } from "./boundary-hooks";

void piH;

export function paintImages(piIn613: any, piIn614: any, piIn615: any, piIn616: any, piIn617: any, piIn618: any, piIn619: any, piIn620: any, piIn621: any, piIn622: any, piIn623: any = 1, ) {
  let piBind4632 = piIn614.images.items;
  if (piBind4632.length !== 0)
    for (let piBind4816 of piBind4632) {
      let piBind4866 = piBind4816.toDrawingProto({
          preferPreview: true,
        }),
        piBind4867 = piBind4866.imageReference?.id;
      if (!piBind4867) continue;
      let piBind4868 = piBind4816.resolveBoundsPx(
        {
          columnOffsets: piIn616,
          rowOffsets: piIn617,
        },
        {
          preferPreview: true,
        },
      );
      if (!piBind4868) continue;
      let piBind4869 = 40 + piBind4868.x - piIn618,
        piBind4870 = 20 + piBind4868.y - piIn619,
        piBind4871 = piBind4868.width,
        piBind4872 = piBind4868.height;
      if (
        (piIn622?.({
          id: piBind4816.id,
          logicalBounds: {
            x: piBind4869,
            y: piBind4870,
            width: piBind4871,
            height: piBind4872,
          },
          cssBounds: {
            x: piBind4869 * piIn623,
            y: piBind4870 * piIn623,
            width: piBind4871 * piIn623,
            height: piBind4872 * piIn623,
          },
          drawing: piBind4866,
          usesTwoCellAnchor: !!piBind4866.toAnchor,
        }),
        piBind4871 <= 0 || piBind4872 <= 0)
      ) {
        let piBind8239 = piBind4866.fromAnchor;
        if (!piBind8239) continue;
        let piBind8240 = Number(piBind8239.colId),
          piBind8241 = Number(piBind8239.rowId),
          piBind8242 = piIn616[piBind8240] ?? 0,
          piBind8243 =
            piIn616[piBind8240 + 1] ?? piBind8242,
          piBind8244 = piIn617[piBind8241 - 1] ?? 0,
          piBind8245 =
            piIn617[piBind8241] ?? piBind8244,
          piBind8246 = Math.max(
            0,
            piBind8243 - piBind8242,
          ),
          piBind8247 = Math.max(
            0,
            piBind8245 - piBind8244,
          ),
          piBind8248 = piH.bh604(
            piIn615,
            piBind4867,
          );
        if (!piBind8248) continue;
        let piBind8249 = piH.imageBitmapById.get(
          piBind8248.id,
        );
        if (!piBind8249) {
          if (!piH.imageDecodeById.has(piBind8248.id)) {
            let piBind21550 = piH.bh603(
              piBind8248,
              piIn620,
              piIn621,
            ).then(
              (value) => (
                piH.imageBitmapById.set(piBind8248.id, value),
                value
              ),
            );
            piH.imageDecodeById.set(
              piBind8248.id,
              piBind21550,
            );
          }
          continue;
        }
        let piBind8250 = piBind8249.width,
          piBind8251 = piBind8249.height;
        if (
          piBind8250 <= 0 ||
          piBind8251 <= 0 ||
          piBind8246 <= 0 ||
          piBind8247 <= 0
        )
          continue;
        let piBind8252 = Math.min(
          piBind8246 / piBind8250,
          piBind8247 / piBind8251,
        );
        piBind4871 = Math.max(
          0,
          Math.floor(piBind8250 * piBind8252),
        );
        piBind4872 = Math.max(
          0,
          Math.floor(piBind8251 * piBind8252),
        );
        let piBind8253 =
            (piBind8246 - piBind4871) / 2,
          piBind8254 = (piBind8247 - piBind4872) / 2;
        piIn613.drawImage(
          piBind8249,
          0,
          0,
          piBind8250,
          piBind8251,
          piBind4869 + piBind8253,
          piBind4870 + piBind8254,
          piBind4871,
          piBind4872,
        );
        continue;
      }
      if (
        piBind4869 + piBind4871 < 0 ||
        piBind4870 + piBind4872 < 0 ||
        piBind4869 > piIn620 ||
        piBind4870 > piIn621
      )
        continue;
      let piBind4873 = piH.bh604(
        piIn615,
        piBind4867,
      );
      if (!piBind4873) continue;
      let piBind4874 = piH.imageBitmapById.get(piBind4873.id);
      if (piBind4874) {
        piIn613.drawImage(
          piBind4874,
          0,
          0,
          piBind4874.width,
          piBind4874.height,
          piBind4869,
          piBind4870,
          piBind4871,
          piBind4872,
        );
        continue;
      }
      if (!piH.imageDecodeById.has(piBind4873.id)) {
        let piBind21937 = piH.bh603(
          piBind4873,
          piIn620,
          piIn621,
        ).then(
          (value) => (
            piH.imageBitmapById.set(piBind4873.id, value),
            value
          ),
        );
        piH.imageDecodeById.set(piBind4873.id, piBind21937);
      }
    }
}
