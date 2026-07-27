// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal draft-2020-12 JSON Schema emitter) / export `O_t`.
// npm identity: zod `toJSONSchema` (draft-2020-12 target).

import { toJSONSchema, type ZodTypeAny } from "zod";
import { ensureZodRuntime, zodToJsonSchema } from "../vendor/zod";

export type { ZodTypeAny };
export { toJSONSchema, ensureZodRuntime, zodToJsonSchema };

export type Draft202012Peers = Record<string, unknown>;

/** @deprecated No-op; stock zod toJSONSchema covers draft-2020-12. */
export function setDraft202012Peers(_next: Draft202012Peers): void {}

/**
 * Bundle export `O_t` — Zod → JSON Schema (draft-2020-12) emitter init.
 * Returns stock `toJSONSchema` under the npm package.
 */
export function draft202012(): typeof toJSONSchema {
  ensureZodRuntime();
  return toJSONSchema;
}
