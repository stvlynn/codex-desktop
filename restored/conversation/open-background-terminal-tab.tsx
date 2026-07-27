// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Svu`) / export `dt`.

export type OpenBackgroundTerminalTabPeers = {
  Cvu: (...args: unknown[]) => unknown;
  eO: (...args: unknown[]) => unknown;
  mvu: (...args: unknown[]) => unknown;
  sL: (...args: unknown[]) => unknown;
};
let peers: OpenBackgroundTerminalTabPeers | null = null;

/** Wire openBackgroundTerminalTab peers once companions land. */
export function setOpenBackgroundTerminalTabPeers(
  next: OpenBackgroundTerminalTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `dt` / internal `Svu`.
 */
export function openBackgroundTerminalTab({
  scope,
  backgroundTerminal,
  conversationId,
  fallbackTitle,
}: Record<string, unknown>) {
  const SL = peers.sL;
  if (peers == null) {
    throw new Error("openBackgroundTerminalTab peers are not configured");
  }
  peers.eO.openTab(scope, peers.mvu, {
    icon: <SL className="icon-xs shrink-0" />,
    props: {
      conversationId,
      terminalId: backgroundTerminal.id,
    },
    id: `background-terminal:${conversationId}:${backgroundTerminal.id}`,
    title:
      backgroundTerminal.command.length > 0
        ? backgroundTerminal.command
        : fallbackTitle,
  });
}
