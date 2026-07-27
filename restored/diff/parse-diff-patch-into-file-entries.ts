// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `wI`) / export `bW`.

export type ParseDiffPatchIntoFileEntriesPeers = {
  smallPatchLimit: number;
  cache: Map<string, Map<string, unknown>>;
  collectBinaryPaths: (patch: string) => Set<string>;
  collectSubmodulePaths: (patch: string) => Set<string>;
  preparePatch: (patch: string) => { diff: unknown };
  parseOptions: (patch: string) => unknown;
  parseFiles: (diff: unknown, options: unknown) => unknown[];
  logError: (message: string, context: unknown) => void;
  toEntries: (args: {
    files: unknown[];
    binaryPaths: Set<string>;
    submodulePaths: Set<string>;
    maxFiles: unknown;
  }) => unknown;
};

let peers: ParseDiffPatchIntoFileEntriesPeers | null = null;

/** Wire parse-diff-patch peers once companions land. */
export function setParseDiffPatchIntoFileEntriesPeers(
  next: ParseDiffPatchIntoFileEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `bW` / internal `wI`.
 * Parse a git diff patch into file entries (cached for small patches).
 */
export function parseDiffPatchIntoFileEntries(
  patch: string,
  options: { maxFiles?: number } = {},
): unknown {
  if (peers == null) {
    throw new Error("ParseDiffPatchIntoFileEntries peers are not configured");
  }
  const { maxFiles } = options;
  const cacheable = patch.length <= peers.smallPatchLimit;
  const cacheKey = `${maxFiles ?? "all"}`;
  let bucket = cacheable ? peers.cache.get(patch) : undefined;
  const cached = bucket?.get(cacheKey);
  if (bucket) {
    peers.cache.delete(patch);
    peers.cache.set(patch, bucket);
  }
  if (cached) return cached;
  const binaryPaths = patch.includes("GIT binary patch")
    ? peers.collectBinaryPaths(patch)
    : new Set<string>();
  const submodulePaths = patch.includes("160000")
    ? peers.collectSubmodulePaths(patch)
    : new Set<string>();
  let files: unknown[] = [];
  const prepared = peers.preparePatch(patch);
  try {
    files = peers.parseFiles(prepared.diff, peers.parseOptions(patch));
  } catch (error) {
    peers.logError("Failed to parse diff", {
      safe: {},
      sensitive: { error },
    });
    files = [];
  }
  const result = peers.toEntries({
    files,
    binaryPaths,
    submodulePaths,
    maxFiles,
  });
  if (cacheable) {
    bucket = peers.cache.get(patch) ?? new Map();
    bucket.set(cacheKey, result);
    peers.cache.set(patch, bucket);
  }
  return result;
}
