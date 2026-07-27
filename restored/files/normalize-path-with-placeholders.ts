// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `VRa` / export `nN` — bindable path normalizer.

type PathNormalizer = (path: string) => string;

let normalizeImpl: PathNormalizer | null = null;

/** Bind home/placeholder path normalization used by `nN`. */
export function bindNormalizePathWithPlaceholders(next: PathNormalizer): void {
  normalizeImpl = next;
}

/** Normalize a filesystem path, preserving sensitive segments via placeholders. */
export function normalizePathWithPlaceholders(pathValue: string): string {
  return normalizeImpl?.(pathValue) ?? pathValue;
}
