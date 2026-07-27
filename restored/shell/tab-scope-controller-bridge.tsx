// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fwr`) / export `k1`.

export type TabScopeControllerBridgePeers = {
  Zu: (...args: unknown[]) => unknown;
  uT: (...args: unknown[]) => unknown;
};
let peers: TabScopeControllerBridgePeers | null = null;

/** Wire TabScopeControllerBridge peers once companions land. */
export function setTabScopeControllerBridgePeers(
  next: TabScopeControllerBridgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `k1` / internal `fwr`.
 */
export function TabScopeControllerBridge({
  controller,
  scope,
  tab,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("TabScopeControllerBridge peers are not configured");
  }
  let r = (r) => {
      if (!tab.isClosable) return r;
      let i = scope.get(peers.uT),
        a = scope.get(controller.tabs$),
        o = a.findIndex((item) => {
          return item.tabId === tab.tabId;
        }),
        s = a.some((item) => {
          return item.tabId !== tab.tabId && item.isClosable;
        }),
        c =
          o !== -1 &&
          a.slice(o + 1).some((item) => {
            return item.isClosable;
          });
      return (
        r.length > 0 &&
          r.push({
            id: "close-tab-separator",
            type: "separator",
          }),
        r.push({
          id: "close-tab",
          message: peers.Zu({
            id: "codex.tabs.contextMenu.close",
            defaultMessage: "Close",
            description: "Context menu action for closing a tab",
          }),
          onSelect: () => {
            return controller.closeTab(scope, tab.tabId);
          },
        }),
        i
          ? (r.push({
              enabled: s,
              id: "close-other-tabs",
              message: peers.Zu({
                id: "codex.tabs.contextMenu.closeOtherTabs",
                defaultMessage: "Close other tabs",
                description:
                  "Context menu action for closing all other tabs besides the current tab",
              }),
              onSelect: () => {
                return controller.closeOtherTabs(scope, tab.tabId);
              },
            }),
            r.push({
              enabled: c,
              id: "close-tabs-to-the-right",
              message: peers.Zu({
                id: "codex.tabs.contextMenu.closeTabsToTheRight",
                defaultMessage: "Close tabs to the right",
                description:
                  "Context menu action for closing the tabs to the right of the current tab",
              }),
              onSelect: () => {
                return controller.closeTabsToRight(scope, tab.tabId);
              },
            }),
            r)
          : r
      );
    },
    i =
      typeof tab.contextMenuItems == "function"
        ? tab.contextMenuItems(scope)
        : (tab.contextMenuItems ?? []);
  return Array.isArray(i)
    ? r([...i])
    : i.then((value) => {
        return r([...value]);
      });
}
