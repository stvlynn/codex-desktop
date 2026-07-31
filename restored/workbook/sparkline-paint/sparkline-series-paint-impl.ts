// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: line/column sparkline series paint (legacy XCe/ZCe).
// Stage-3 wave-105.

import { spkH } from "./boundary-hooks";

void spkH;

export function paintLineSparkline(
  spkIn1002: any,
  spkIn1003: any,
  spkIn1004: any,
  spkIn1005: any,
  spkIn1006: any,
) {
  let { plotX, plotW } = spkIn1004,
    spkBind6129 = spkIn1003.values.length,
    spkBind6130 = spkBind6129 > 1 ? plotW / (spkBind6129 - 1) : plotW,
    spkBind6131 = (spkIn12256) => {
      let spkBind22355 = spkIn1003.rightToLeft
        ? spkBind6129 - 1 - spkIn12256
        : spkIn12256;
      return plotX + spkBind22355 * spkBind6130;
    };
  spkIn1002.save();
  spkIn1002.lineWidth = spkIn1003.lineWeight ?? 1;
  spkIn1002.strokeStyle = spkIn1005.seriesColor;
  spkIn1002.lineJoin = "round";
  spkIn1002.beginPath();
  let spkBind6132 = false;
  spkIn1003.values.forEach((item, index) => {
    if (item === null || !Number.isFinite(item)) {
      !spkIn1003.connectGaps &&
        spkBind6132 &&
        (spkIn1002.stroke(), spkIn1002.beginPath(), (spkBind6132 = false));
      return;
    }
    let spkBind17738 = spkBind6131(index),
      spkBind17739 = spkIn1006(item);
    spkBind6132
      ? spkIn1002.lineTo(spkBind17738, spkBind17739)
      : (spkIn1002.moveTo(spkBind17738, spkBind17739), (spkBind6132 = true));
  });
  spkBind6132 && spkIn1002.stroke();
  spkIn1002.restore();
  spkIn1003.showAxis &&
    (spkIn1002.save(),
    (spkIn1002.strokeStyle = spkIn1005.axisColor),
    (spkIn1002.lineWidth = 0.5),
    spkIn1002.beginPath(),
    spkIn1002.moveTo(plotX, spkIn1004.baseline),
    spkIn1002.lineTo(plotX + spkIn1004.plotW, spkIn1004.baseline),
    spkIn1002.stroke(),
    spkIn1002.restore());
  (spkIn1003.markers.show ||
    spkIn1003.markers.high ||
    spkIn1003.markers.low ||
    spkIn1003.markers.first ||
    spkIn1003.markers.last ||
    spkIn1003.markers.negative) &&
    spkIn1003.values.forEach((item, index) => {
      if (item === null || !Number.isFinite(item)) return;
      let spkBind15373 = spkBind6131(index),
        spkBind15374 = spkIn1006(item),
        spkBind15375 = spkH.resolveMarkerColor(
          index,
          item,
          spkIn1003,
          spkIn1005,
          spkIn1003.pointMeta,
        );
      spkBind15375 &&
        (spkIn1002.save(),
        (spkIn1002.fillStyle = spkBind15375),
        spkIn1002.beginPath(),
        spkIn1002.arc(
          spkBind15373,
          spkBind15374,
          spkH.markerRadius,
          0,
          Math.PI * 2,
        ),
        spkIn1002.fill(),
        spkIn1002.restore());
    });
}
export function paintColumnSparkline(
  spkIn1756: any,
  spkIn1757: any,
  spkIn1758: any,
  spkIn1759: any,
  spkIn1760: any,
) {
  let spkBind8211 = spkIn1757.values.length;
  if (spkBind8211 === 0) return;
  let spkBind8212 = spkIn1758.plotW / Math.max(1, spkBind8211),
    spkBind8213 = Math.min(2, spkBind8212 * 0.25),
    spkBind8214 = (spkIn11530) => {
      let spkBind21936 = spkIn1757.rightToLeft
        ? spkBind8211 - 1 - spkIn11530
        : spkIn11530;
      return spkIn1758.plotX + spkBind21936 * spkBind8212 + spkBind8213 / 2;
    },
    spkBind8215 = Math.max(1, spkBind8212 - spkBind8213);
  spkIn1757.values.forEach((item, index) => {
    if (item === null || !Number.isFinite(item)) return;
    let spkBind13978 =
        spkIn1757.type === "stacked"
          ? Math.max(-1, Math.min(1, Math.sign(item)))
          : item,
      spkBind13979 = spkBind8214(index),
      spkBind13980 = spkIn1760(spkBind13978),
      spkBind13981 = Math.min(spkBind13980, spkIn1758.baseline),
      spkBind13982 = Math.abs(spkIn1758.baseline - spkBind13980),
      spkBind13983 =
        spkBind13978 < 0 ? spkIn1759.negativeColor : spkIn1759.seriesColor;
    spkIn1756.save();
    spkIn1756.fillStyle = spkBind13983;
    spkIn1756.fillRect(
      spkBind13979,
      spkBind13981,
      spkBind8215,
      Math.max(1, spkBind13982),
    );
    spkIn1756.restore();
  });
  spkIn1757.showAxis &&
    (spkIn1756.save(),
    (spkIn1756.strokeStyle = spkIn1759.axisColor),
    (spkIn1756.lineWidth = 0.5),
    spkIn1756.beginPath(),
    spkIn1756.moveTo(spkIn1758.plotX, spkIn1758.baseline),
    spkIn1756.lineTo(spkIn1758.plotX + spkIn1758.plotW, spkIn1758.baseline),
    spkIn1756.stroke(),
    spkIn1756.restore());
}

/** Legacy aliases. */
export const XCe = paintLineSparkline;
export const ZCe = paintColumnSparkline;
