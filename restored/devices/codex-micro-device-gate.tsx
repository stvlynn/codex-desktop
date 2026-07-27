// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `I2l`) / export `Yr`.

import type { ReactElement, ReactNode } from "react";

export type CodexMicroDeviceGateProps = {
  codexMicroDeviceModel?: string | null;
  slug: string;
};

export type CodexMicroDeviceGatePeers = {
  FormattedMessage: (props: Record<string, unknown>) => ReactNode;
  creatorMicroMessage: Record<string, unknown>;
  messageForSlug: (slug: string) => Record<string, unknown>;
};

let peers: CodexMicroDeviceGatePeers | null = null;

/** Wire codex-micro device gate peers once companions land. */
export function setCodexMicroDeviceGatePeers(
  next: CodexMicroDeviceGatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Yr` / internal `I2l`.
 * Render the creator-micro message or a slug-specific device message.
 */
export function CodexMicroDeviceGate(
  props: CodexMicroDeviceGateProps,
): ReactElement {
  if (peers == null) {
    throw new Error("CodexMicroDeviceGate peers are not configured");
  }
  const { codexMicroDeviceModel, slug } = props;
  if (
    slug === "codex-micro" &&
    (codexMicroDeviceModel === undefined ? null : codexMicroDeviceModel) ===
      "creator-micro-v2"
  ) {
    return peers.FormattedMessage({
      ...peers.creatorMicroMessage,
    }) as ReactElement;
  }
  return peers.FormattedMessage({
    ...peers.messageForSlug(slug),
  }) as ReactElement;
}
