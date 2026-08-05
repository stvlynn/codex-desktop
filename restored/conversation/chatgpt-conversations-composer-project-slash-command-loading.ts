// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `UX`) / export `US`.

export type ChatgptConversationsComposerProjectSlashCommandLoadingPeers = {
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Jkr: (...args: unknown[]) => unknown;
  SH: (...args: unknown[]) => unknown;
  Zas: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eos: (...args: unknown[]) => unknown;
  qas: (...args: unknown[]) => unknown;
  tos: (...args: unknown[]) => unknown;
  yH: (...args: unknown[]) => unknown;
};

let peers: ChatgptConversationsComposerProjectSlashCommandLoadingPeers | null =
  null;

/** Wire chatgptConversationsComposerProjectSlashCommandLoading peers once companions land. */
export function setChatgptConversationsComposerProjectSlashCommandLoadingPeers(
  next: ChatgptConversationsComposerProjectSlashCommandLoadingPeers,
): void {
  peers = next;
}

/**
 * Bundle export `US` / internal `UX`.
 */
export function chatgptConversationsComposerProjectSlashCommandLoading() {
  if (peers == null) {
    throw new Error(
      "chatgptConversationsComposerProjectSlashCommandLoading peers are not configured",
    );
  }

  return peers.e(() => {
    ((eos = peers.c()),
      peers.Ho(),
      peers.yH(),
      peers.SH(),
      peers.Jkr(),
      peers.qas(),
      peers.Zas(),
      (tos = peers.J()));
  });
}
