// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-35: scoped / aliased local ids (legacy workbookHelper302 / tde / nde).

import { hashToBase36Id } from "./hash-id";
import {
  defaultHashIdLength,
  ensureStableIdClusterInit,
} from "./ensure-stable-id-init";

/** Legacy `workbookHelper302`. */
export function composeScopedId(prefix: string, slideId: string | null | undefined, localId: string, ): string {
  ensureStableIdClusterInit();
  return `${prefix}/${hashToBase36Id(
    `${prefix}:${slideId ? `${slideId}.${localId}` : localId}`,
    defaultHashIdLength,
  )}`;
}

/** Legacy `nde` — strip `prefix/` when prefix (or alias) matches. */
export function stripPrefixedLocalId(value: string, prefix: string, aliases: string[], ): string | undefined {
  let slash = value.indexOf("/");
  if (slash === -1) return value;
  if (slash <= 0 || slash === value.length - 1) return;
  let head = value.slice(0, slash).trim().toLowerCase();
  if (
    new Set([prefix, ...aliases.map((item) => item.toLowerCase())]).has(head)
  )
    return value.slice(slash + 1).trim();
}

export type ResolveLocalIdOptions = {
  prefix: string;
  aliases?: string[];
  localIds: Iterable<string>;
  slideId?: string | null;
};

/** Legacy `tde` — resolve a local id against scoped compose. */
export function resolveLocalIdAlias(raw: string, options: ResolveLocalIdOptions, ): string | undefined {
  let trimmed = raw.trim();
  if (!trimmed) return;
  let local = stripPrefixedLocalId(
    trimmed,
    options.prefix,
    options.aliases ?? [],
  );
  if (!local) return;
  let localIds = Array.from(options.localIds).filter(
    (item) => typeof item == "string" && item.length > 0,
  );
  if (localIds.length === 0) return;
  if (localIds.includes(local)) return local;
  if (!options.slideId) return;
  let scoped = `${options.prefix}/${local}`;
  return localIds.find(
    (item) =>
      composeScopedId(options.prefix, options.slideId, item) === scoped,
  );
}
