// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `B$o` / export `CE` — sync browser-use tab chrome into a side panel.

import { useEffect, useSyncExternalStore, type ReactNode } from "react";

export type BrowserConversationPanelTarget = "left" | "right" | string;

export type BrowserConversationPanelProps = {
  browserConversationId: string;
  browserTabId?: string;
  browserTabFallbackTitle?: string;
  target?: BrowserConversationPanelTarget;
};

export type BrowserTabChromeModel = {
  faviconUrl?: string | null;
  isAudible?: boolean;
  isCapturingUserMedia?: boolean;
  isHighlighted?: boolean;
  isLoading?: boolean;
  preserveExistingChrome?: boolean;
  title?: string | null;
};

export type BrowserConversationPanelDeps = {
  /** Bundle `xT` — default browser tab id for a conversation. */
  defaultBrowserTabId: (browserConversationId: string) => string;
  /** Bundle `Io(hT)` — shell AppScope node. */
  useShellScope: () => unknown;
  /** Bundle `Rj` — browser-use external store. */
  browserStore: {
    subscribe: (listener: () => void) => () => void;
    getSnapshot: (conversationId: string, tabId: string) => unknown;
    isBrowserUseTab: (conversationId: string, tabId: string) => boolean;
    isBrowserUseActive: (conversationId: string, tabId: string) => boolean;
  };
  /** Bundle `fwo` — derive tab chrome model from snapshot flags. */
  buildTabChrome: (options: {
    browserSnapshot: unknown;
    browserTabFallbackTitle?: string;
    isBrowserUseActive: boolean;
    isBrowserUseTab: boolean;
  }) => BrowserTabChromeModel;
  /** Bundle `XI` — panel API for a dock target. */
  panelApiForTarget: (target: BrowserConversationPanelTarget) => {
    tabById$: unknown;
    updateTab: (
      scope: unknown,
      tabId: string,
      patch: Record<string, unknown>,
    ) => void;
  };
  /** Bundle `VCo` — favicon / loading tab icon. */
  FaviconIcon: (props: {
    faviconUrl?: string | null;
    isLoading?: boolean;
    isWaitingForResponse?: boolean;
  }) => ReactNode;
  /** Bundle `cwo` — highlighted tab glyph. */
  HighlightedIcon: (props: { className?: string }) => ReactNode;
  /** Bundle `$Co` — audible / media trailing chip. */
  MediaTrailing: (props: {
    isAudible?: boolean;
    isCapturingUserMedia?: boolean;
  }) => ReactNode;
};

let deps: BrowserConversationPanelDeps | null = null;

export function setBrowserConversationPanelDeps(next: BrowserConversationPanelDeps): void {
  deps = next;
}

function requireDeps(): BrowserConversationPanelDeps {
  if (deps == null) {
    throw new Error("BrowserConversationPanel deps have not been configured");
  }
  return deps;
}

/** Bundle `B$o` / export `CE`. Returns null — side effects only. */
export function BrowserConversationPanel({
  browserConversationId,
  browserTabId,
  browserTabFallbackTitle,
  target = "right",
}: BrowserConversationPanelProps): ReactNode {
  const {
    defaultBrowserTabId,
    useShellScope,
    browserStore,
    buildTabChrome,
    panelApiForTarget,
    FaviconIcon,
    HighlightedIcon,
    MediaTrailing,
  } = requireDeps();

  const tabId = browserTabId ?? defaultBrowserTabId(browserConversationId);
  const scope = useShellScope();
  const snapshot = useSyncExternalStore(
    browserStore.subscribe,
    () => browserStore.getSnapshot(browserConversationId, tabId),
    () => browserStore.getSnapshot(browserConversationId, tabId),
  );
  const isBrowserUseTab = useSyncExternalStore(
    browserStore.subscribe,
    () => browserStore.isBrowserUseTab(browserConversationId, tabId),
    () => browserStore.isBrowserUseTab(browserConversationId, tabId),
  );
  const isBrowserUseActive = useSyncExternalStore(
    browserStore.subscribe,
    () => browserStore.isBrowserUseActive(browserConversationId, tabId),
    () => browserStore.isBrowserUseActive(browserConversationId, tabId),
  );
  const chrome = buildTabChrome({
    browserSnapshot: snapshot,
    browserTabFallbackTitle,
    isBrowserUseActive,
    isBrowserUseTab,
  });
  const panel = panelApiForTarget(target);
  const suspended = (snapshot as { isSuspended?: boolean } | null | undefined)
    ?.isSuspended;
  const waiting =
    (snapshot as { isWaitingForResponse?: boolean } | null | undefined)
      ?.isWaitingForResponse === true;

  useEffect(() => {
    const existing = (
      scope as {
        get?: (
          atom: unknown,
          id: string,
        ) =>
          | { icon?: ReactNode; title?: string; isSuspended?: boolean }
          | undefined;
      }
    ).get?.(panel.tabById$, tabId);
    const icon = chrome.preserveExistingChrome
      ? existing?.icon
      : FaviconIcon({
          faviconUrl: chrome.faviconUrl,
          isLoading: chrome.isLoading,
          isWaitingForResponse: waiting,
        });
    const title =
      chrome.preserveExistingChrome && existing?.title != null
        ? existing.title
        : chrome.title;
    panel.updateTab(scope, tabId, {
      highlightedIcon: HighlightedIcon({ className: "size-4" }),
      icon,
      isHighlighted: chrome.isHighlighted,
      isSuspended: chrome.preserveExistingChrome
        ? (existing?.isSuspended ?? false)
        : (suspended ?? false),
      trailingContent:
        chrome.isCapturingUserMedia || chrome.isAudible
          ? MediaTrailing({
              isAudible: chrome.isAudible,
              isCapturingUserMedia: chrome.isCapturingUserMedia,
            })
          : undefined,
      title,
    });
  }, [
    FaviconIcon,
    HighlightedIcon,
    MediaTrailing,
    chrome.faviconUrl,
    chrome.isAudible,
    chrome.isCapturingUserMedia,
    chrome.isHighlighted,
    chrome.isLoading,
    chrome.preserveExistingChrome,
    chrome.title,
    panel,
    scope,
    suspended,
    tabId,
    waiting,
  ]);

  return null;
}
