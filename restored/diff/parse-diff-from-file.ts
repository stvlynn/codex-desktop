// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yI`) / export `TW`.

export type ParseDiffFromFilePeers = {
  Eji: (...args: unknown[]) => unknown;
  cacheKey: (...args: unknown[]) => unknown;
  dAi: (...args: unknown[]) => unknown;
  jji: (...args: unknown[]) => unknown;
  lang: (...args: unknown[]) => unknown;
  name: (...args: unknown[]) => unknown;
};

let peers: ParseDiffFromFilePeers | null = null;

/** Wire parseDiffFromFile peers once companions land. */
export function setParseDiffFromFilePeers(next: ParseDiffFromFilePeers): void {
  peers = next;
}

/**
 * Bundle export `TW` / internal `yI`.
 */
export function parseDiffFromFile(
  e: unknown,
  t: unknown,
  n: unknown,
  r: unknown = !1,
) {
  if (peers == null) {
    throw new Error("parseDiffFromFile peers are not configured");
  }

  if (e === null && t === null)
    throw Error(`parseDiffFromFile: You must pass oldFile, newFile, or both`);
  let i = e ?? peers.jji(),
    a = t ?? peers.jji(),
    o = peers.dAi(
      peers.Eji(i.name, a.name, i.contents, a.contents, i.header, a.header, n),
      {
        cacheKey: (() => {
          let n = e?.cacheKey ?? e?.name,
            r = t?.cacheKey ?? t?.name;
          return n != null && r != null ? n + `:` + r : (n ?? r);
        })(),
        oldFile: i,
        newFile: a,
        throwOnError: r,
      },
    );
  if (o == null)
    throw Error(
      `parseDiffFrom: FileInvalid diff -- probably need to fix something -- if the files are the same maybe?`,
    );
  e === null
    ? ((o.type = `new`), (o.prevName = void 0))
    : t === null && ((o.type = `deleted`), (o.prevName = void 0));
  let s = t?.lang ?? (t === null ? e?.lang : void 0);
  return (s != null && (o.lang = s), o);
}
