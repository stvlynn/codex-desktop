// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Peer bridge for content-reference router callees still owned by the open boundary.

import type { ReactNode } from "react";

export type ChatgptContentReferenceRouterPeers = {
  renderClientDefinedWidget: (props: { reference: any }) => ReactNode;
};

let peers: ChatgptContentReferenceRouterPeers | null = null;

export function setChatgptContentReferenceRouterPeers(
  next: ChatgptContentReferenceRouterPeers,
): void {
  peers = next;
}

export function getChatgptContentReferenceRouterPeers(): ChatgptContentReferenceRouterPeers {
  if (peers == null) {
    return {
      renderClientDefinedWidget: () => null,
    };
  }
  return peers;
}
