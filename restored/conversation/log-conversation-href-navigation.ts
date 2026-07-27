// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `qfa`) / export `uL`.

export type LogConversationHrefNavigationPeers = {
  normalizeHref: (href: unknown) => string;
  isUnsafeHref: (href: string) => boolean;
  formatMessage: (descriptor: {
    id: string;
    defaultMessage: string;
    description: string;
  }) => unknown;
  openLink: (input: {
    href: string;
    initiator: unknown;
    openTarget: "in-app-browser" | "external-browser";
  }) => void;
  openInConversationBrowser: (input: {
    conversationId: unknown;
    url: unknown;
    source: "manual";
    initiator: unknown;
  }) => void;
  copyLink: (href: string) => void;
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
 * Build context-menu actions for conversation external links.
 */
export function logConversationHrefNavigation(input: {
  conversationId: unknown;
  href: unknown;
  initiator: unknown;
}): Array<Record<string, unknown>> {
  if (peers == null) {
    throw new Error("LogConversationHrefNavigation peers are not configured");
  }
  const href = peers.normalizeHref(input.href);
  const unsafe = peers.isUnsafeHref(href);
  return [
    {
      id: "open-in-codex-browser",
      message: peers.formatMessage({
        id: "externalLink.contextMenu.openInBrowser",
        defaultMessage: "Open in browser",
        description:
          "Context menu action to open an external link in the Codex browser",
      }),
      onSelect: () => {
        if (input.conversationId == null || unsafe) {
          peers!.openLink({
            href,
            initiator: input.initiator,
            openTarget: "in-app-browser",
          });
          return;
        }
        peers!.openInConversationBrowser({
          conversationId: input.conversationId,
          url: input.href,
          source: "manual",
          initiator: input.initiator,
        });
      },
    },
    {
      id: "open-in-external-browser",
      message: peers.formatMessage({
        id: "externalLink.contextMenu.openInExternalBrowser",
        defaultMessage: "Open in external browser",
        description:
          "Context menu action to open an external link in the external browser",
      }),
      onSelect: () => {
        peers!.openLink({
          href,
          initiator: input.initiator,
          openTarget: "external-browser",
        });
      },
    },
    { id: "external-link-separator", type: "separator" },
    {
      id: "copy-link",
      message: peers.formatMessage({
        id: "externalLink.contextMenu.copyLink",
        defaultMessage: "Copy link",
        description: "Context menu action to copy an external link",
      }),
      onSelect: () => {
        peers!.copyLink(href);
      },
    },
  ];
}
