// Restored from ref/webview/assets/routing-middleware-B8BjNZUQ.js
// Segment TSUB routing middleware (destination filters) over @segment/tsub.

import { Store, matches, transform } from "@segment/tsub";
export type TsubRuleList = ConstructorParameters<typeof Store>[0];
export type TsubMiddlewareContext = {
  payload: {
    obj: unknown;
  };
  integration: string;
  next: (
    payload: {
      obj: unknown;
    } | null,
  ) => void;
};

/**
 * Build analytics middleware that applies TSUB matchers/transformers
 * for the active destination (`integration`) before calling `next`.
 */
export function tsubMiddleware(rules: TsubRuleList = []) {
  const store = new Store(rules);
  return function tsubRoutingMiddleware(ctx: TsubMiddlewareContext): void {
    const payload = ctx.payload;
    const integration = ctx.integration;
    const next = ctx.next;
    for (const item of store.getRulesByDestinationName(integration)) {
      const { matchers, transformers } = item;
      for (let i = 0; i < matchers.length; i++) {
        if (matches(payload.obj, matchers[i]!)) {
          payload.obj = transform(payload.obj, transformers[i] ?? []);
          if (payload.obj === null) {
            next(null);
            return;
          }
        }
      }
    }
    next(payload);
  };
}
export { tsubMiddleware as routingMiddleware };
