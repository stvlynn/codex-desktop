// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `Pkt`) / export `aot`.

export type RegisterMicromarkMarkdownExtensionsPeers = {
  defaultOptions: unknown;
  buildMicromarkExtension: (options: unknown) => unknown;
  buildFromMarkdownExtension: () => unknown;
  buildToMarkdownExtension: (options: unknown) => unknown;
};

let peers: RegisterMicromarkMarkdownExtensionsPeers | null = null;

/** Wire micromark markdown extension peers once companions land. */
export function setRegisterMicromarkMarkdownExtensionsPeers(
  next: RegisterMicromarkMarkdownExtensionsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `aot` / internal `Pkt`.
 * Register micromark/fromMarkdown/toMarkdown extensions on a processor.
 */
export function registerMicromarkMarkdownExtensions(
  this: {
    data: () => {
      micromarkExtensions?: unknown[];
      fromMarkdownExtensions?: unknown[];
      toMarkdownExtensions?: unknown[];
    };
  },
  options?: unknown,
): void {
  if (peers == null) {
    throw new Error(
      "RegisterMicromarkMarkdownExtensions peers are not configured",
    );
  }
  const opts = options ?? peers.defaultOptions;
  const data = this.data();
  const micromarkExtensions = (data.micromarkExtensions ||= []);
  const fromMarkdownExtensions = (data.fromMarkdownExtensions ||= []);
  const toMarkdownExtensions = (data.toMarkdownExtensions ||= []);
  micromarkExtensions.push(peers.buildMicromarkExtension(opts));
  fromMarkdownExtensions.push(peers.buildFromMarkdownExtension());
  toMarkdownExtensions.push(peers.buildToMarkdownExtension(opts));
}
