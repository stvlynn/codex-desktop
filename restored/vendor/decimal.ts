// Restored from ref/webview/assets/workbook-C49Dgk1_.js (inlined decimal.js / Binding1906+Vit)
// npm shim: decimal.js@10.6.0.
// Bundle fingerprints: [DecimalError], Symbol.toStringTag="Decimal",
// nodejs.util.inspect.custom, LN10/PI high-precision strings, lit(config) factory.
// Call-sites: Binding1926 = Decimal constructor; Vit = ensureDecimalInit (no-op);
// rot() does Vit(); Binding1926.set({ precision: 50, rounding: ROUND_HALF_EVEN }).

export { default } from "decimal.js";
export { default as Decimal } from "decimal.js";

/** Bundle Vit — stock decimal.js needs no esmInit body when imported from npm. */
export function ensureDecimalInit(): void {}
