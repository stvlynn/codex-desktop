// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Rva` / export `OI`.

export type ModelVersionOptionsCarrier = {
  versionOptions?: Array<{ id: string; slugs: string[] }> | null;
};

export function findModelVersionOptionId(carrier: ModelVersionOptionsCarrier | null | undefined, slug: string): string | null {
  return (
    carrier?.versionOptions?.find((entry) => entry.slugs.includes(slug))?.id ??
    null
  );
}
