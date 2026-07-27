// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ub` / export `J9` — thin store lookup for product analytics.

type ProductEventLogger = {
  logProductEvent: (eventType: unknown, payload: unknown) => void;
};

type StoreLike = {
  get: (token: unknown) => ProductEventLogger;
};

let productEventLoggerToken: unknown = null;

/** Wire the product-event logger jotai token (`Gb` in the bundle). */
export function setProductEventLoggerToken(token: unknown): void {
  productEventLoggerToken = token;
}

export function logProductEvent(store: StoreLike, eventType: unknown, payload: unknown): void {
  if (productEventLoggerToken == null) {
    throw new Error("product-event logger token has not been configured");
  }
  store.get(productEventLoggerToken).logProductEvent(eventType, payload);
}
