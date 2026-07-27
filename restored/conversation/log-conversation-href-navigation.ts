// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qfa`) / export `uL`.

export type LogConversationHrefNavigationPeers = {
  BL: (...args: unknown[]) => unknown;
  Jfa: (...args: unknown[]) => unknown;
  Wfa: (...args: unknown[]) => unknown;
  Zu: (...args: unknown[]) => unknown;
  hXt: (...args: unknown[]) => unknown;
  ub: (...args: unknown[]) => unknown;
};
let peers: LogConversationHrefNavigationPeers | null = null;

/** Wire logConversationHrefNavigation peers once companions land. */
export function setLogConversationHrefNavigationPeers(
  next: LogConversationHrefNavigationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `uL` / internal `qfa`.
 */
export function logConversationHrefNavigation({
  conversationId,
  href,
  initiator,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("logConversationHrefNavigation peers are not configured");
  }
  let r = peers.hXt(href),
    i = peers.Jfa(r);
  return [
    {
      id: "open-in-codex-browser",
      message: peers.Zu({
        id: "externalLink.contextMenu.openInBrowser",
        defaultMessage: "Open in browser",
        description:
          "Context menu action to open an external link in the Codex browser",
      }),
      onSelect: () => {
        if (conversationId == null || i) {
          peers.ub({
            href: r,
            initiator,
            openTarget: "in-app-browser",
          });
          return;
        }
        peers.Wfa({
          conversationId,
          url: href,
          source: "manual",
          initiator,
        });
      },
    },
    {
      id: "open-in-external-browser",
      message: peers.Zu({
        id: "externalLink.contextMenu.openInExternalBrowser",
        defaultMessage: "Open in external browser",
        description:
          "Context menu action to open an external link in the external browser",
      }),
      onSelect: () => {
        peers.ub({
          href: r,
          initiator,
          openTarget: "external-browser",
        });
      },
    },
    {
      id: "external-link-separator",
      type: "separator",
    },
    {
      id: "copy-link",
      message: peers.Zu({
        id: "externalLink.contextMenu.copyLink",
        defaultMessage: "Copy link",
        description: "Context menu action to copy an external link",
      }),
      onSelect: () => {
        peers.BL(r);
      },
    },
  ];
}
