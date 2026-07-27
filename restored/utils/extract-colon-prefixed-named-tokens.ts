// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `_6n`) / export `E3`.

export type ExtractColonPrefixedNamedTokensPeers = {
  tokenNames: string[];
  parseTokens: (text: string) => Array<{ name: string; attributes: unknown }>;
  mapTokenName: (name: string) => string | null | undefined;
  parseAttributes: (attributes: unknown) => {
    success: boolean;
    data: {
      cwd?: unknown;
      branch?: unknown;
      url?: unknown;
      isDraft?: unknown;
    };
  };
};

let peers: ExtractColonPrefixedNamedTokensPeers | null = null;

/** Wire colon-prefixed token peers once companions land. */
export function setExtractColonPrefixedNamedTokensPeers(
  next: ExtractColonPrefixedNamedTokensPeers,
): void {
  peers = next;
}

/**
 * Bundle export `E3` / internal `_6n`.
 * Extract named `:token` mentions with validated attributes.
 */
export function extractColonPrefixedNamedTokens(text: string): Array<{
  type: string;
  cwd: unknown;
  branch: unknown;
  url: unknown;
  isDraft: unknown;
}> {
  if (peers == null) {
    throw new Error("ExtractColonPrefixedNamedTokens peers are not configured");
  }
  if (!peers.tokenNames.some((name) => text.includes(`:${name}`))) return [];
  const out: Array<{
    type: string;
    cwd: unknown;
    branch: unknown;
    url: unknown;
    isDraft: unknown;
  }> = [];
  for (const token of peers.parseTokens(text)) {
    if (!peers.tokenNames.includes(token.name)) continue;
    const type = peers.mapTokenName(token.name);
    if (type == null) continue;
    const parsed = peers.parseAttributes(token.attributes);
    if (!parsed.success) continue;
    out.push({
      type,
      cwd: parsed.data.cwd,
      branch: parsed.data.branch,
      url: parsed.data.url,
      isDraft: parsed.data.isDraft,
    });
  }
  return out;
}
