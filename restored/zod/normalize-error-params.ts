// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `ds` — zod helper.

type ErrorParams = {
  message?: string;
  error?: string | (() => string);
  [key: string]: unknown;
};

/** Normalize Zod `message`/`error` option bags. */
export function normalizeErrorParams(params: string | ErrorParams | null | undefined): Record<string, unknown> {
  let value: string | ErrorParams | null | undefined = params;
  if (!value) return {};
  if (typeof value === "string") return { error: () => value as string };
  if (value.message !== undefined) {
    if (value.error !== undefined) {
      throw new Error("Cannot specify both `message` and `error` params");
    }
    value.error = value.message;
  }
  delete value.message;
  return typeof value.error === "string"
    ? { ...value, error: () => value.error as string }
    : value;
}
