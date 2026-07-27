// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Pkt`) / export `aot`.

export type RegisterMicromarkMarkdownExtensionsPeers = {
  Bht: (...args: unknown[]) => unknown;
  Fkt: (...args: unknown[]) => unknown;
  Fmt: (...args: unknown[]) => unknown;
  Pmt: (...args: unknown[]) => unknown;
};

let peers: RegisterMicromarkMarkdownExtensionsPeers | null = null;

/** Wire registerMicromarkMarkdownExtensions peers once companions land. */
export function setRegisterMicromarkMarkdownExtensionsPeers(next: RegisterMicromarkMarkdownExtensionsPeers): void {
  peers = next;
}

/**
 * Bundle export `aot` / internal `Pkt`.
 */
export function registerMicromarkMarkdownExtensions(e: unknown) {
  if (peers == null) {
    throw new Error("registerMicromarkMarkdownExtensions peers are not configured");
  }

  let t = this,
    n = e || peers.Fkt,
    r = t.data(),
    i = r.micromarkExtensions ||= [],
    a = r.fromMarkdownExtensions ||= [],
    o = r.toMarkdownExtensions ||= [];
  i.push(peers.Bht(n)), a.push(peers.Pmt()), o.push(peers.Fmt(n));
}
