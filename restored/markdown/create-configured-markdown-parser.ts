// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jkt`) / export `cot`.

export type CreateConfiguredMarkdownParserPeers = {
  but: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
};

let peers: CreateConfiguredMarkdownParserPeers | null = null;

/** Wire createConfiguredMarkdownParser peers once companions land. */
export function setCreateConfiguredMarkdownParserPeers(next: CreateConfiguredMarkdownParserPeers): void {
  peers = next;
}

/**
 * Bundle export `cot` / internal `jkt`.
 */
export function createConfiguredMarkdownParser(e: unknown) {
  if (peers == null) {
    throw new Error("createConfiguredMarkdownParser peers are not configured");
  }

  let t = this;
  t.parser = peers.n;
  function n(n) {
    return peers.but(peers.n, {
      ...t.data(`settings`),
      ...e,
      extensions: t.data(`micromarkExtensions`) || [],
      mdastExtensions: t.data(`fromMarkdownExtensions`) || []
    });
  }
}
