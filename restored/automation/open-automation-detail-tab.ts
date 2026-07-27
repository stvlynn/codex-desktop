// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `G1c`) / export `Yl`.

export type OpenAutomationDetailTabArgs = {
  scope: unknown;
  automationId: string;
  title?: unknown;
};

export type OpenAutomationDetailTabPeers = {
  openTab: (args: {
    scope: unknown;
    request: { type: "automation"; automationId: string };
    tabId: string;
    title?: unknown;
  }) => void;
};

let peers: OpenAutomationDetailTabPeers | null = null;

/** Wire automation detail tab opener once companions land. */
export function setOpenAutomationDetailTabPeers(
  next: OpenAutomationDetailTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Yl` / internal `G1c`.
 * Open an automation detail tab for the given automation id.
 */
export function openAutomationDetailTab(
  args: OpenAutomationDetailTabArgs,
): void {
  if (peers == null) {
    throw new Error("OpenAutomationDetailTab peers are not configured");
  }
  const { scope, automationId, title } = args;
  peers.openTab({
    scope,
    request: { type: "automation", automationId },
    tabId: `automation:${automationId}`,
    title,
  });
}
