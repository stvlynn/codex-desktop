// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: series point fill override lookup (legacy lCe).
// Stage-3 wave-135.

export function lCe(cwbIn8573: any, cwbIn8574: any) {
  if (!(!cwbIn8573.points || cwbIn8573.points.length === 0))
    for (
      let cwbBind21301 = 0;
      cwbBind21301 < cwbIn8573.points.length;
      cwbBind21301++
    ) {
      let cwbBind22497 = cwbIn8573.points[cwbBind21301];
      if ((cwbBind22497?.idx ?? cwbBind21301) === cwbIn8574)
        return cwbBind22497;
    }
}
