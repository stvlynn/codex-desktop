// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: sparkline/series marker color resolve (legacy QCe).
// Stage-3 wave-127.

export function resolveMarkerColor(cmcIn3082: any, cmcIn3083: any, cmcIn3084: any, cmcIn3085: any, cmcIn3086: any, ) {
  return Number.isFinite(cmcIn3083)
    ? cmcIn3084.markers.first &&
      cmcIn3086.firstIndex === cmcIn3082 &&
      cmcIn3085.firstMarkerColor
      ? cmcIn3085.firstMarkerColor
      : cmcIn3084.markers.last &&
          cmcIn3086.lastIndex === cmcIn3082 &&
          cmcIn3085.lastMarkerColor
        ? cmcIn3085.lastMarkerColor
        : cmcIn3084.markers.high &&
            cmcIn3086.highIndices.has(cmcIn3082) &&
            cmcIn3085.highMarkerColor
          ? cmcIn3085.highMarkerColor
          : cmcIn3084.markers.low &&
              cmcIn3086.lowIndices.has(cmcIn3082) &&
              cmcIn3085.lowMarkerColor
            ? cmcIn3085.lowMarkerColor
            : cmcIn3084.markers.negative &&
                cmcIn3086.negativeIndices.has(cmcIn3082)
              ? cmcIn3085.negativeColor
              : (cmcIn3085.markersColor ??
                cmcIn3085.seriesColor)
    : null;
}

export const QCe = resolveMarkerColor;
