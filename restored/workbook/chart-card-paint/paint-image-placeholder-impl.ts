// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: fill chart image placeholder rect (legacy KTe).
// Stage-3 wave-140.

/** Legacy Binding1276 */
export const IMAGE_PLACEHOLDER_FILL = "#F7F7F7";

export function KTe(props: any) {
  let { width, height, ctx } = props;
  width <= 0 ||
    height <= 0 ||
    (ctx.save(),
    (ctx.fillStyle = IMAGE_PLACEHOLDER_FILL),
    ctx.fillRect(0, 0, width, height),
    ctx.restore());
}
