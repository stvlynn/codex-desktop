// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `yI`) / export `TW`.

export type ParseDiffFromFilePeers = {
  emptyFile: () => {
    name: string;
    contents: string;
    header?: string;
    cacheKey?: string;
  };
  buildPatch: (
    oldName: string,
    newName: string,
    oldContents: string,
    newContents: string,
    oldHeader: unknown,
    newHeader: unknown,
    options: unknown,
  ) => unknown;
  parsePatch: (
    patch: unknown,
    opts: { cacheKey?: string; force?: boolean },
  ) => unknown;
};

let peers: ParseDiffFromFilePeers | null = null;

/** Wire parse-diff-from-file peers once companions land. */
export function setParseDiffFromFilePeers(next: ParseDiffFromFilePeers): void {
  peers = next;
}

/**
 * Bundle export `TW` / internal `yI`.
 * Parse a unified diff from old/new file snapshots.
 */
export function parseDiffFromFile(
  oldFile: {
    name: string;
    contents: string;
    header?: string;
    cacheKey?: string;
  } | null,
  newFile: {
    name: string;
    contents: string;
    header?: string;
    cacheKey?: string;
  } | null,
  options: unknown,
  force: boolean = false,
): unknown {
  if (peers == null) {
    throw new Error("ParseDiffFromFile peers are not configured");
  }
  if (oldFile === null && newFile === null) {
    throw new Error(
      "parseDiffFromFile: You must pass oldFile, newFile, or both",
    );
  }
  const left = oldFile ?? peers.emptyFile();
  const right = newFile ?? peers.emptyFile();
  const cacheKey = (() => {
    const a = oldFile?.cacheKey ?? oldFile?.name;
    const b = newFile?.cacheKey ?? newFile?.name;
    return a != null || b != null ? `${a ?? ""}|${b ?? ""}` : undefined;
  })();
  return peers.parsePatch(
    peers.buildPatch(
      left.name,
      right.name,
      left.contents,
      right.contents,
      left.header,
      right.header,
      options,
    ),
    { cacheKey, force },
  );
}
