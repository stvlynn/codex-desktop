// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `cxa` / export `SI`.
// Per-block sanitizer (`pxa`) left injectable; empty object sentinel matches `Ixa`.

import { isPlainObject } from "../utils/is-plain-object";
import { isPlainObjectPrototype } from "../utils/is-plain-object-prototype";

export const EMPTY_WRITING_BLOCKS: Record<string, never> = {};

type WritingBlockSanitizer = (value: unknown) => Record<string, unknown> | null;

let sanitizeWritingBlock: WritingBlockSanitizer | null = null;

/** Wire writing-block sanitizer (`pxa` in the bundle). */
export function setWritingBlockSanitizer(sanitizer: WritingBlockSanitizer): void {
  sanitizeWritingBlock = sanitizer;
}

function ownStringEntries(
  value: Record<string, unknown>,
): Array<[string, unknown]> | null {
  if (!isPlainObjectPrototype(value)) return null;
  const entries: Array<[string, unknown]> = [];
  for (const key of Reflect.ownKeys(value)) {
    if (key === "__proto__") continue;
    if (typeof key !== "string") return null;
    entries.push([key, value[key]]);
  }
  return entries;
}

export function parseWritingBlocks(value: unknown): Record<string, Record<string, unknown>> | typeof EMPTY_WRITING_BLOCKS {
  if (!isPlainObject(value)) return EMPTY_WRITING_BLOCKS;
  if (value.writing_blocks === undefined) return EMPTY_WRITING_BLOCKS;
  const blocks = value.writing_blocks;
  if (!isPlainObject(blocks)) return EMPTY_WRITING_BLOCKS;
  const entries = ownStringEntries(blocks);
  if (entries == null) return EMPTY_WRITING_BLOCKS;
  const out: Array<[string, Record<string, unknown>]> = [];
  for (const [key, block] of entries) {
    const sanitized =
      sanitizeWritingBlock?.(block) ?? (isPlainObject(block) ? block : null);
    if (sanitized == null) return EMPTY_WRITING_BLOCKS;
    out.push([key, sanitized]);
  }
  return Object.fromEntries(out);
}
