// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `vS` / export `p7` — LRU-ish cached markdown lexer.
// Core lexer left injectable; also wires strip-codex-vis-directives.

import { setCodexVisMarkdownLexer } from "./strip-codex-vis-directives";

export type MarkdownToken = {
  type?: string;
  name?: string;
  raw?: string;
  [key: string]: unknown;
};

type MarkdownLexerCore = (text: string, options?: unknown) => MarkdownToken[];

const DEFAULT_MAX_ENTRIES = 64;
const DEFAULT_MAX_KEY_CHARS = 256_000;
const CACHEABLE_MAX_LENGTH = 16_384;

let lexerCore: MarkdownLexerCore | null = null;
const caches = new Map<string, Map<string, MarkdownToken[]>>();

function cacheKey(options: unknown): string {
  if (options == null) return "default";
  try {
    return JSON.stringify(options);
  } catch {
    return "default";
  }
}

function getCache(options: unknown): Map<string, MarkdownToken[]> {
  const key = cacheKey(options);
  let cache = caches.get(key);
  if (cache == null) {
    cache = new Map();
    caches.set(key, cache);
  }
  return cache;
}

function trimCache(cache: Map<string, MarkdownToken[]>): void {
  let totalChars = 0;
  for (const key of cache.keys()) totalChars += key.length;
  while (
    cache.size > DEFAULT_MAX_ENTRIES ||
    totalChars > DEFAULT_MAX_KEY_CHARS
  ) {
    const oldest = cache.keys().next().value;
    if (typeof oldest !== "string") break;
    cache.delete(oldest);
    totalChars -= oldest.length;
  }
}

export function setLexMarkdownCachedCore(core: MarkdownLexerCore): void {
  lexerCore = core;
  setCodexVisMarkdownLexer(lexMarkdownCached);
}

/** Bundle `vS` / export `p7`. */
export function lexMarkdownCached(
  text: string,
  options?: unknown,
): MarkdownToken[] {
  if (lexerCore == null) {
    throw new Error("lexMarkdownCached core has not been configured");
  }
  const cache =
    text.length <= CACHEABLE_MAX_LENGTH ? getCache(options) : undefined;
  const hit = cache?.get(text);
  if (hit != null) {
    cache?.delete(text);
    cache?.set(text, hit);
    return hit;
  }
  const tokens = lexerCore(text, options);
  if (cache != null) {
    cache.set(text, tokens);
    trimCache(cache);
  }
  return tokens;
}
