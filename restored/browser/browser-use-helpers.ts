// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Small pure helpers pulled by browser-use-settings.

/** Bundle `bon` / export `d9` — strict `false` check. */
export function isStrictFalse(value: unknown): value is false {
  return value === false;
}

/**
 * Bundle `oFa` / export `SN` — first non-empty trimmed string from a list.
 */
export function firstNonEmptyTrimmedString(values: Array<string | null | undefined> | null | undefined): string | null {
  return values?.map((v) => v?.trim() ?? "").find((v) => v.length > 0) ?? null;
}

export type PluginMentionPromptArgs = {
  defaultPrompt?: string | null;
  pluginDisplayName: string;
  pluginId: string;
};

let buildPluginUriImpl: ((pluginId: string) => string) | null = null;
let toMarkdownLinkImpl: ((label: string, href: string) => string) | null = null;

/** Optional host wiring for mention-link formatting. */
export function bindPluginMentionPromptDeps(next: {
  buildPluginUri?: (pluginId: string) => string;
  toMarkdownLink?: (label: string, href: string) => string;
}): void {
  if (next.buildPluginUri) buildPluginUriImpl = next.buildPluginUri;
  if (next.toMarkdownLink) toMarkdownLinkImpl = next.toMarkdownLink;
}

/**
 * Bundle `sFa` / export `xN` — `[@Name](plugin-uri) prompt` mention string.
 */
export function buildPluginMentionPrompt(args: PluginMentionPromptArgs): string {
  const uri =
    buildPluginUriImpl?.(args.pluginId) ?? `plugin://${args.pluginId}`;
  const mention =
    toMarkdownLinkImpl?.(args.pluginDisplayName, uri) ??
    `[@${args.pluginDisplayName}](${uri})`;
  const prompt = args.defaultPrompt?.trim() ?? "";
  return prompt.length > 0 ? `${mention} ${prompt}` : mention;
}

/** Bundle `cFa` / export `CN` — ESM init retained as no-op. */
export function ensurePluginMentionPromptInit(): void {}

/**
 * Bundle `U8r` / export `EK` — request plugin id (remote id when no marketplace path).
 */
export function resolvePluginRequestId(plugin: {
  marketplacePath?: string | null;
  plugin: { id: string; remotePluginId?: string | null };
}): string {
  if (plugin.marketplacePath == null) {
    const remoteId = plugin.plugin.remotePluginId;
    if (remoteId == null) {
      throw new Error(
        `remote plugin ${plugin.plugin.id} is missing remotePluginId`,
      );
    }
    return remoteId;
  }
  return plugin.plugin.id;
}

/**
 * Bundle `Q9o` / export `Aw` — whether two marketplace paths refer to the same file.
 * Bind a real path-normalizer when available; defaults to string equality.
 */
let marketplacePathsEqualImpl: ((a: string, b: string) => boolean) | null =
  null;

export function bindMarketplacePathsEqual(next: (a: string, b: string) => boolean,
): void {
  marketplacePathsEqualImpl = next;
}

export function marketplacePathsEqual(left: string | null | undefined, right: string | null | undefined): boolean {
  if (left == null || right == null) return false;
  if (marketplacePathsEqualImpl != null) {
    return marketplacePathsEqualImpl(left, right);
  }
  return left === right;
}

/** Bundle init companions retained as no-ops where the chunk only calls them. */
export function ensureBrowserUseHelpersInit(): void {}
