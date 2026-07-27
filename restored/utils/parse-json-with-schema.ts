// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `gwe` / export `lmt` — JSON.parse then schema-validate.

type SchemaParse<T> = {
  safeParse: (
    value: unknown,
  ) => { success: true; data: T } | { success: false };
};

let schema: SchemaParse<unknown> | null = null;

/** Bind the zod (or compatible) schema used after JSON.parse. */
export function bindParseJsonWithSchema<T>(next: SchemaParse<T>): void {
  schema = next as SchemaParse<unknown>;
}

/** Parse JSON text and validate; return null on failure. */
export function parseJsonWithSchema<T = unknown>(text: string): T | null {
  try {
    const parsed = JSON.parse(text);
    if (schema == null) return parsed as T;
    const result = schema.safeParse(parsed);
    return result.success ? (result.data as T) : null;
  } catch {
    return null;
  }
}
