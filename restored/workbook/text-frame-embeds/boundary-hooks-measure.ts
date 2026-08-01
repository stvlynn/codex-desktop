// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-125: measure-embed-element hooks (NTe).

export type MeasureEmbedElementHooks = {
  /** Legacy Binding1268 — EMU per CSS pixel. */
  emuPerPx: number;
  paintTextElement: (...args: any[]) => any;
};

export const meeH: MeasureEmbedElementHooks = {} as MeasureEmbedElementHooks;

export function wireMeasureEmbedElementBoundaryHooks(
  next: Partial<MeasureEmbedElementHooks>,
): void {
  Object.assign(meeH, next);
}
