// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-2: DrawingML color channel / gamma constants (legacy Gre).

export const colorChannelMax = 1e5;
export const colorGamma = 2.3;
export const colorInvGamma = 1 / colorGamma;

let greInitialized = false;

/** Idempotent ensure for legacy Gre() call sites. */
export function ensureColorTransformConstantsInit(): void {
  greInitialized = true;
}
