// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Apt` — thin helper.

/** Call `schema.safe(value, ctx)` on a Zod-like type wrapper. */
export function safeZodValue(
  entry: { value: unknown },
  _unused: unknown,
  schema: { safe: (value: unknown, ctx: unknown) => unknown },
  ctx: unknown,
): unknown {
  return schema.safe(entry.value, ctx);
}
