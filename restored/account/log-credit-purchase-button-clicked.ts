// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Thin analytics wrapper for credit-purchase CTA clicks (`wTs` / export `fy`).

/** Protobuf analytics type for `CodexCreditPurchaseButtonClicked` (`GQt`). */
export const CODEX_CREDIT_PURCHASE_BUTTON_CLICKED_TYPE = {
  $type: "protobuf_analytics_events.v1.CodexCreditPurchaseButtonClicked",
} as const;

export type CreditPurchaseButtonClickedPayload = {
  audience: string;
  checkoutKind: string;
  entryPoint: string;
};

export type ProductEventLogger = {
  logProductEvent(
    eventType: typeof CODEX_CREDIT_PURCHASE_BUTTON_CLICKED_TYPE,
    payload: CreditPurchaseButtonClickedPayload,
  ): void;
};

/**
 * Bundle `wTs` / export `fy`.
 * Bundle form is `Ub(scope, GQt, payload)` where `Ub` reads the product-analytics
 * atom; here the logger is passed explicitly.
 */
export function logCreditPurchaseButtonClicked(
  logger: ProductEventLogger,
  payload: CreditPurchaseButtonClickedPayload,
): void {
  logger.logProductEvent(CODEX_CREDIT_PURCHASE_BUTTON_CLICKED_TYPE, payload);
}
