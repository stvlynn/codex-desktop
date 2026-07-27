// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `gue` / export `D_t` — thin string+url format schema factory.

/** Build a zod-like string URL check descriptor (runtime zod deferred). */
export function zodUrlString(
  ZodString: new (def: Record<string, unknown>) => unknown,
  extras?: Record<string, unknown>,
): unknown {
  return new ZodString({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...extras,
  });
}
