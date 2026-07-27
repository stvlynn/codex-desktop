// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Iva` / export `EI`.

export type ModelOption = {
  slug: string;
  thinkingEffort?: string | null;
  title?: string | null;
  [key: string]: unknown;
};

export type ModelOptionsCarrier = {
  options?: ModelOption[] | null;
  internalOptions?: ModelOption[] | null;
  versionOptions?: Array<{ options?: ModelOption[] | null }> | null;
};

export function collectModelOptions(carrier: ModelOptionsCarrier | null | undefined): ModelOption[] {
  return [
    ...(carrier?.options ?? []),
    ...(carrier?.internalOptions ?? []),
    ...(carrier?.versionOptions?.flatMap((entry) => entry.options ?? []) ?? []),
  ];
}
