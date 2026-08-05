// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `nza`) / export `tN`.

export type BindDeferredtNPeers = {
  $Ra: (...args: unknown[]) => unknown;
  JRa: (...args: unknown[]) => unknown;
  QRa: (...args: unknown[]) => unknown;
  XRa: (...args: unknown[]) => unknown;
  YRa: (...args: unknown[]) => unknown;
  ZRa: (...args: unknown[]) => unknown;
  c_t: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eza: (...args: unknown[]) => unknown;
  qRa: (...args: unknown[]) => unknown;
  tza: (...args: unknown[]) => unknown;
};

let peers: BindDeferredtNPeers | null = null;

/** Wire bindDeferredtN peers once companions land. */
export function setBindDeferredtNPeers(next: BindDeferredtNPeers): void {
  peers = next;
}

/**
 * Bundle export `tN` / internal `nza`.
 */
export function bindDeferredtN() {
  if (peers == null) {
    throw new Error("bindDeferredtN peers are not configured");
  }

  return peers.e(() => {
    ((qRa = peers.c_t()),
      (JRa = /<details(\s+open)?>([\s\S]*?)<\/details>/gi),
      (YRa = /(^|\n)(`{3,}|~{3,})[^\n]*\n[\s\S]*?\n\2(?=\n|$)/g),
      (XRa =
        /(^|\n)(>[ \t]*)\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]([ \t]*(?=\n|$))/gi),
      (ZRa = /<!--[\s\S]*?-->/g),
      (QRa = /^\s*<summary>([\s\S]*?)<\/summary>\s*([\s\S]*)$/i),
      ($Ra = /<[^>]+>/g),
      (eza = /<(?:ol|ul|li|p)(?:\s[^>]*)?>/i),
      (tza = `@@CODEX_FENCED_CODE_BLOCK_`));
  });
}
