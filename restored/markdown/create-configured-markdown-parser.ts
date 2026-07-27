// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `cot`) / export `cot`.

export type CreateConfiguredMarkdownParserPeers = {
  parseMarkdown: (source: unknown, options: Record<string, unknown>) => unknown;
};

let peers: CreateConfiguredMarkdownParserPeers | null = null;

/** Wire configured markdown parser peers once companions land. */
export function setCreateConfiguredMarkdownParserPeers(
  next: CreateConfiguredMarkdownParserPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cot` / internal `jkt`.
 * Attach a configured markdown parser onto a micromark processor.
 */
export function createConfiguredMarkdownParser(
  this: {
    parser?: unknown;
    data: (key: string) => unknown;
  },
  options?: Record<string, unknown>,
): void {
  if (peers == null) {
    throw new Error("CreateConfiguredMarkdownParser peers are not configured");
  }
  const self = this;
  this.parser = function parseConfigured(source: unknown) {
    return peers!.parseMarkdown(source, {
      ...(self.data("settings") as Record<string, unknown>),
      ...options,
      extensions: (self.data("micromarkExtensions") as unknown[]) || [],
      mdastExtensions: (self.data("fromMarkdownExtensions") as unknown[]) || [],
    });
  };
}
