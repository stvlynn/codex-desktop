// Restored from ref/webview/assets/dist-BNkeg5V9.js
// @braintree/sanitize-url re-export with CommonJS-compatible `dist` module factory.

import { sanitizeUrl } from "@braintree/sanitize-url";
export { sanitizeUrl } from "@braintree/sanitize-url";
export type SanitizeUrlModule = {
  sanitizeUrl: typeof sanitizeUrl;
};
let cachedModule: SanitizeUrlModule | undefined;

/**
 * Lazy CommonJS module factory matching Rolldown `commonJsInit` (bundle export `t`).
 * Consumers call `dist()` then use `.sanitizeUrl`.
 */
export function dist(): SanitizeUrlModule {
  if (!cachedModule) {
    cachedModule = {
      sanitizeUrl,
    };
  }
  return cachedModule;
}
