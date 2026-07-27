// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Lva` / export `DI`.

export type ModelSlugOption = {
  slug: string;
  thinkingEffort?: string | null;
};

export type ModelVersionOptionRef = {
  slug: string;
  thinkingEffort: string | null;
  versionId: string;
};

export function toModelVersionOptionRef(
  option: ModelSlugOption,
  versionId: string,
): ModelVersionOptionRef {
  return {
    slug: option.slug,
    thinkingEffort: option.thinkingEffort ?? null,
    versionId,
  };
}
