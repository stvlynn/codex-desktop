// Restored from ref/webview/assets/browser-sidebar-hidden-background-webview-host-DsEJ4k-b.js
// Hidden background BrowserUse webviews kept mounted off-panel for fast reopen.

import {
  useRef,
  useSyncExternalStore,
  type ReactElement,
  type RefObject,
} from "react";
import { ensureAppScopeHostInit } from "../runtime/app-scope-runtime";
import {
  useAppScopeValue,
  type BindableAtom,
} from "../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_M0_Init } from "../boundaries/composer-esm-inits";
import {
  ensureConversationPageEsm_A0_Init,
  ensureConversationPageEsm_B0_Init,
} from "../conversation/conversation-page-esm-inits";
import {
  ensureWindowZoomContextInit,
  useWindowZoom,
} from "../hooks/use-window-zoom";
import { ensureAppIconL0Init } from "../icons/app-icon-l0";
import {
  bottomPanelController,
  bottomPanelOpenAtom,
  ensureAppShellAtomsInit,
  rightPanelController,
  rightPanelShellOpenAtom,
  type PanelTabLike,
} from "../navigation/app-shell-atoms";
import {
  browserTabIdFromPanelTab,
  ensureBrowserTabIdHelpersInit,
} from "../navigation/browser-tab-id-from-panel-tab";
import { browserTabIdsFromPanelPlacements } from "../navigation/browser-tab-ids-from-panel-placements";
import {
  browserTabSnapshotApi,
  ensureBrowserTabSnapshotApiInit,
} from "../navigation/browser-tab-snapshot-api";
import { getNullKeyedMapValue } from "../utils/get-null-keyed-map-value";
import { ensureSettingsGlyphI0Init } from "../utils/wave-as-gap-ensure-inits";
import { BrowserUseWebviewHost } from "./browser-use-webview-host";

export type HiddenBackgroundBrowserWebviewHostProps = {
  conversationId: string;
};

type CountStore = {
  on: (event: "change", listener: () => void) => () => void;
  get: () => number;
};

type HiddenWebviewMountState = {
  adoptionLease: unknown;
  adoptedWebContentsId: unknown;
  initialUrl: string;
};

type BrowserTabSnapshotStore = typeof browserTabSnapshotApi & {
  subscribe?: (listener: () => void) => () => void;
  getBrowserUseBrowserTabIdsKey?: (conversationId: string) => string;
};

const emptyCountStore: CountStore = {
  on: () => () => {},
  get: () => 0,
};

/** Bundle `u0` / `p0` — atoms whose value is a `.on("change")` / `.get()` count store. */
let bottomPanelLauncherVisibleStore: CountStore = emptyCountStore;
let rightPanelLauncherVisibleStore: CountStore = emptyCountStore;

const bottomPanelLauncherVisibleAtom: BindableAtom<CountStore> = {
  get: () => bottomPanelLauncherVisibleStore,
  set: (value) => {
    bottomPanelLauncherVisibleStore = value;
  },
  subscribe: () => () => {},
};

const rightPanelLauncherVisibleAtom: BindableAtom<CountStore> = {
  get: () => rightPanelLauncherVisibleStore,
  set: (value) => {
    rightPanelLauncherVisibleStore = value;
  },
  subscribe: () => () => {},
};

/** Bundle `SZ` / `wZ` / `xZ` — NUL-keyed maps for hidden webview mount state. */
const initialUrlByTab = new Map<string, string>();
const adoptionLeaseByTab = new Map<string, unknown>();
const adoptedWebContentsIdByTab = new Map<string, unknown>();

function isBrowserUseTab(
  conversationId: string,
  browserTabId: string,
): boolean {
  return (
    browserTabSnapshotApi.isBrowserUseTab?.(conversationId, browserTabId) ??
    browserTabSnapshotApi.isBrowserUseActive(conversationId, browserTabId)
  );
}

function getBrowserUseBrowserTabIdsKey(conversationId: string): string {
  const api = browserTabSnapshotApi as BrowserTabSnapshotStore;
  return (
    api.getBrowserUseBrowserTabIdsKey?.(conversationId) ??
    browserTabSnapshotApi.getBrowserUseBrowserTabIds(conversationId).join("\0")
  );
}

function subscribeBrowserTabSnapshot(listener: () => void): () => void {
  const api = browserTabSnapshotApi as BrowserTabSnapshotStore;
  return api.subscribe?.(listener) ?? (() => {});
}

function getHiddenWebviewMountState(
  conversationId: string,
  browserTabId: string,
): HiddenWebviewMountState | null {
  const initialUrl = getNullKeyedMapValue(
    initialUrlByTab,
    conversationId,
    browserTabId,
  );
  const adoptionLease = getNullKeyedMapValue(
    adoptionLeaseByTab,
    conversationId,
    browserTabId,
  );
  const adoptedWebContentsId = getNullKeyedMapValue(
    adoptedWebContentsIdByTab,
    conversationId,
    browserTabId,
  );
  if (
    initialUrl == null &&
    (adoptionLease == null || adoptedWebContentsId == null)
  ) {
    return null;
  }
  return {
    adoptedWebContentsId,
    adoptionLease,
    initialUrl: initialUrl ?? "about:blank",
  };
}

function canMountHiddenBackgroundWebview(
  conversationId: string,
  browserTabId: string,
): boolean {
  if (isBrowserUseTab(conversationId, browserTabId)) return false;
  return getHiddenWebviewMountState(conversationId, browserTabId) != null;
}

function collectBackgroundBrowserTabIds({
  conversationId,
  mountedBrowserTabIds,
  panelTabs,
}: {
  conversationId: string;
  mountedBrowserTabIds: readonly string[];
  panelTabs: readonly PanelTabLike[];
}): string[] {
  const backgroundIds = new Set<string>();
  for (const panelTab of panelTabs) {
    const browserTabId =
      browserTabIdFromPanelTab(panelTab, conversationId) ?? null;
    if (
      browserTabId == null ||
      isBrowserUseTab(conversationId, browserTabId) ||
      mountedBrowserTabIds.includes(browserTabId)
    ) {
      continue;
    }
    if (canMountHiddenBackgroundWebview(conversationId, browserTabId)) {
      backgroundIds.add(browserTabId);
    }
  }
  return Array.from(backgroundIds);
}

type HiddenBackgroundBrowserWebviewProps = {
  browserTabId: string;
  conversationId: string;
};

function HiddenBackgroundBrowserWebview({
  browserTabId,
  conversationId,
}: HiddenBackgroundBrowserWebviewProps): ReactElement | null {
  const windowZoom = useWindowZoom();
  const webviewRef = useRef<unknown>(null);
  const mountState = getHiddenWebviewMountState(conversationId, browserTabId);

  if (
    mountState == null ||
    !canMountHiddenBackgroundWebview(conversationId, browserTabId)
  ) {
    return null;
  }

  return (
    <BrowserUseWebviewHost
      adoptionLease={mountState.adoptionLease}
      adoptedWebContentsId={mountState.adoptedWebContentsId}
      bounds={null}
      browserTabId={browserTabId}
      conversationId={conversationId}
      initialUrl={mountState.initialUrl}
      isVisible={false}
      scale={1}
      shouldBootstrapWhenHidden={true}
      shouldPaint={false}
      webviewRef={webviewRef as RefObject<unknown>}
      windowZoom={windowZoom}
    />
  );
}

/**
 * Keep BrowserUse webviews mounted in the background when they are not the
 * visible right/bottom panel tab, so reopen skips cold bootstrap.
 */
export function HiddenBackgroundBrowserWebviewHost({
  conversationId,
}: HiddenBackgroundBrowserWebviewHostProps): ReactElement | null {
  const bottomActiveTab = useAppScopeValue(
    bottomPanelController.activeTab$ as { get: () => PanelTabLike | null },
  );
  const rightActiveTab = useAppScopeValue(
    rightPanelController.activeTab$ as { get: () => PanelTabLike | null },
  );
  const bottomTabs =
    useAppScopeValue(
      bottomPanelController.tabs$ as { get: () => PanelTabLike[] },
    ) ?? [];
  const isBottomPanelOpen = Boolean(
    useAppScopeValue(bottomPanelOpenAtom as { get: () => unknown }),
  );
  const bottomLauncher = useAppScopeValue(bottomPanelLauncherVisibleAtom);
  const bottomLauncherVisibleCount = useSyncExternalStore(
    (listener) => bottomLauncher.on("change", listener),
    () => bottomLauncher.get(),
    () => 0,
  );

  const rightTabs =
    useAppScopeValue(
      rightPanelController.tabs$ as { get: () => PanelTabLike[] },
    ) ?? [];
  const isRightPanelShellOpen = Boolean(
    useAppScopeValue(rightPanelShellOpenAtom as { get: () => unknown }),
  );
  const rightLauncher = useAppScopeValue(rightPanelLauncherVisibleAtom);
  const rightLauncherVisibleCount = useSyncExternalStore(
    (listener) => rightLauncher.on("change", listener),
    () => rightLauncher.get(),
    () => 0,
  );

  const mountedBrowserTabIds = browserTabIdsFromPanelPlacements(
    conversationId,
    { bottom: bottomActiveTab, right: rightActiveTab },
    {
      bottom: isBottomPanelOpen || bottomLauncherVisibleCount > 0,
      right: isRightPanelShellOpen || rightLauncherVisibleCount > 0,
    },
  );

  useSyncExternalStore(
    subscribeBrowserTabSnapshot,
    () => getBrowserUseBrowserTabIdsKey(conversationId),
    () => "",
  );

  const backgroundBrowserTabIds = collectBackgroundBrowserTabIds({
    conversationId,
    mountedBrowserTabIds,
    panelTabs: [...rightTabs, ...bottomTabs],
  });

  if (backgroundBrowserTabIds.length === 0) return null;

  return (
    <>
      {backgroundBrowserTabIds.map((browserTabId) => (
        <HiddenBackgroundBrowserWebview
          key={browserTabId}
          browserTabId={browserTabId}
          conversationId={conversationId}
        />
      ))}
    </>
  );
}

/** ESM prelude retained from the chunk’s rolldown init block. */
function ensureHiddenBackgroundBrowserWebviewHostInit(): void {
  ensureAppScopeHostInit();
  ensureWindowZoomContextInit();
  ensureSettingsGlyphI0Init();
  ensureConversationPageEsm_A0_Init();
  ensureConversationPageEsm_B0_Init();
  ensureAppShellAtomsInit();
  ensureBrowserTabIdHelpersInit();
  ensureBrowserTabSnapshotApiInit();
  ensureComposerEsm_M0_Init();
  ensureAppIconL0Init();
}

ensureHiddenBackgroundBrowserWebviewHostInit();
