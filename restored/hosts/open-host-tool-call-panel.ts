// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_2i`) / export `rB`.

export type OpenHostToolCallPanelPeers = {
  QI: (...args: unknown[]) => unknown;
  XI: (...args: unknown[]) => unknown;
  ZI: (...args: unknown[]) => unknown;
  i2i: (...args: unknown[]) => unknown;
  mT: (...args: unknown[]) => unknown;
  p2i: (...args: unknown[]) => unknown;
  v2i: (...args: unknown[]) => unknown;
};
let peers: OpenHostToolCallPanelPeers | null = null;

/** Wire openHostToolCallPanel peers once companions land. */
export function setOpenHostToolCallPanelPeers(
  next: OpenHostToolCallPanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `rB` / internal `_2i`.
 */
export function openHostToolCallPanel(
  e: unknown,
  t: unknown,
  {
    activate = true,
    hostToolCallMetadata,
    hostToolResultMetadata,
    instanceId = crypto.randomUUID(),
    isPreview,
    onClose,
    readHostResource,
    resolveHostResourceSubscriptionPath,
    writeHostResource,
    tabId = peers.v2i(t, instanceId),
    target = "right",
    title = t.title,
    toolArguments,
  }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("openHostToolCallPanel peers are not configured");
  }
  if (peers.mT(e.value) == null) return null;
  let h = peers.ZI(e, tabId) ?? target;
  return (
    peers.XI(h).openTab(e, peers.i2i, {
      icon: peers.p2i(t.icon, "icon-xs shrink-0"),
      id: tabId,
      props: {
        hostToolCallMetadata,
        hostToolResultMetadata,
        instanceId,
        readHostResource,
        resolveHostResourceSubscriptionPath,
        toolArguments,
        view: t,
        writeHostResource,
      },
      title,
      activate,
      isPreview,
      onClose,
    }),
    activate && peers.QI(e, h),
    tabId
  );
}
