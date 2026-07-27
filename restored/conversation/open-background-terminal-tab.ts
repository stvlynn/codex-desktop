// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `Svu`) / export `dt`.

import type { ReactNode } from "react";

export type BackgroundTerminalLike = {
  id: string;
  command: string;
  [key: string]: unknown;
};

export type OpenBackgroundTerminalTabPeers = {
  panelController: {
    openTab: (
      scope: unknown,
      component: unknown,
      opts: {
        icon: ReactNode;
        props: { conversationId: unknown; terminalId: string };
        id: string;
        title: string;
      },
    ) => void;
  };
  panelComponent: unknown;
  renderIcon: (className: string) => ReactNode;
};

let peers: OpenBackgroundTerminalTabPeers | null = null;

/** Wire bottom-panel terminal tab opener once companions land. */
export function setOpenBackgroundTerminalTabPeers(
  next: OpenBackgroundTerminalTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `dt` / internal `Svu`.
 * Open a background-terminal tab for a conversation.
 */
export function openBackgroundTerminalTab(args: {
  scope: unknown;
  backgroundTerminal: BackgroundTerminalLike;
  conversationId: unknown;
  fallbackTitle: string;
}): void {
  if (peers == null) {
    throw new Error("OpenBackgroundTerminalTab peers are not configured");
  }
  const { scope, backgroundTerminal, conversationId, fallbackTitle } = args;
  peers.panelController.openTab(scope, peers.panelComponent, {
    icon: peers.renderIcon("icon-xs shrink-0"),
    props: { conversationId, terminalId: backgroundTerminal.id },
    id: `background-terminal:${String(conversationId)}:${backgroundTerminal.id}`,
    title:
      backgroundTerminal.command.length > 0
        ? backgroundTerminal.command
        : fallbackTitle,
  });
}
