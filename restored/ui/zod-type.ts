// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Bfe`) / export `__t`.
// npm identity: zod (ZodType / schema class cluster) — see vendor/zod.ts.

import { ZodType, type ZodTypeAny } from "zod";
import {
  coerceNumber,
  ensureZodNamespaceInit,
  ensureZodRuntime,
  zodArray,
  zodBigInt,
  zodBoolean,
  zodCustom,
  zodDiscriminatedUnion,
  zodEnum,
  zodJsonValue,
  zodLiteral,
  zodNumber,
  zodObject,
  zodRecord,
  zodString,
  zodToJsonSchema,
  zodTuple,
  zodUnion,
  zodUnknown,
} from "../vendor/zod";

export type { ZodTypeAny };
export {
  ZodType,
  coerceNumber,
  ensureZodNamespaceInit,
  ensureZodRuntime,
  zodArray,
  zodBigInt,
  zodBoolean,
  zodCustom,
  zodDiscriminatedUnion,
  zodEnum,
  zodJsonValue,
  zodLiteral,
  zodNumber,
  zodObject,
  zodRecord,
  zodString,
  zodToJsonSchema,
  zodTuple,
  zodUnion,
  zodUnknown,
};

export type ZodTypePeers = Record<string, unknown>;

/** @deprecated No-op; zod package owns ZodType. */
export function setZodTypePeers(_next: ZodTypePeers): void {}

/**
 * Bundle export `__t` / internal `Bfe` — ZodType class cluster init.
 * No-op under the npm package.
 */
export function zodType(): void {
  ensureZodRuntime();
}
