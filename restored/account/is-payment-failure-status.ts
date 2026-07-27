// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ogs` / export `dx`.

/** True when a payment/checkout status is a hard failure. */
export function isPaymentFailureStatus(status: string): boolean {
  return status === "failed" || status === "payment_declined";
}
