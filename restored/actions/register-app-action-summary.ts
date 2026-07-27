// Restored from ref/webview/assets/register-app-actions-CsKK5KzE.js
// get_summary serialization helpers.

import {
  appActionScrollSchema,
  appActionSidebarProjectRefSchema,
  appActionSidebarSectionRefSchema,
  appActionTimelineDirectionSchema,
  appActionWindowIdSchema,
  ensureAppActionPayloadSchemasInit,
} from "./app-action-payload-schemas";
import {
  ensureChromeThemeDefaultsInit,
  mergeChromeThemeWithDefaults,
  type ChromeThemePatch,
  type ChromeThemeVariant,
} from "../appearance/chrome-theme-defaults";
import {
  ensureCodeThemeRegistryInit,
  listAvailableCodeThemes,
} from "../appearance/code-theme-catalog";
import { isValidCodeThemeId } from "../appearance/code-theme-ids";
import { loadChromeThemeSeed } from "../appearance/load-chrome-theme-seed";
import { CURRENT_CHANNEL_ID } from "../config/current-channel-id";
import { asThreadId } from "../conversation/as-thread-id";
import {
  clientThreadIdFromRouteAtom,
  type AppRouteValue,
} from "../conversation/client-thread-id-from-route";
import {
  conversationHostIdAtom,
  ensureConversationHostIdAtomInit,
} from "../conversation/conversation-host-id-atom";
import {
  conversationTitleAtom,
  ensureConversationTitleAtomInit,
} from "../conversation/conversation-title-atom";
import {
  conversationWorkPath,
  ensureConversationWorkRouteInit,
} from "../conversation/conversation-work-path";
import { localThreadPath } from "../conversation/local-thread-path";
import {
  ensureSidebarThreadKeyPrefixesInit,
  parseSidebarThreadKey,
} from "../conversation/sidebar-thread-keys";
import { sidebarThreadKeyToPath } from "../conversation/sidebar-thread-path";
import {
  findReviewFileElement,
  findSidebarProjectRowElement,
  findSidebarSectionElement,
  requireAppActionTarget,
  scrollAppActionTarget,
  scrollAppActionTargetByTurn,
  scrollAppActionTargetTo,
  sidebarProjectListSelector,
} from "../navigation/app-action-dom";
import { ensureAppActionRuntimeInit } from "../navigation/app-action-runtime-init";
import { AppActionSelector } from "../navigation/app-action-selectors";
import {
  requireAppActionScope,
  type AppActionScope,
} from "../navigation/app-action-scope";
import {
  bindAppShellAtoms,
  bottomPanelController,
  bottomPanelOpenAtom,
  bottomTerminalOpenAtom,
  ensureAppShellAtomsInit,
  focusAreaAtom,
  reviewDiffFilterAtom,
  reviewFileTreeOpenAtom,
  reviewFilesAtom,
  rightPanelController,
  rightPanelFullscreenAtom,
  rightPanelShellOpenAtom,
  rightPanelTabsOpenAtom,
  rightTerminalOpenAtom,
  sidebarOpenAtom,
  type PanelTabLike,
} from "../navigation/app-shell-atoms";
import {
  browserTabSnapshotApi,
  ensureBrowserTabSnapshotApiInit,
} from "../navigation/browser-tab-snapshot-api";
import {
  createAppActionHandler,
  indexAppActionRunners,
  type AppActionHandler,
  type AppActionHandlerContext,
} from "../navigation/create-app-action-handler";
import { focusAreaFromTab } from "../navigation/focus-area-from-tab";
import {
  ensureHostMessageBusInit,
  hostMessageBus,
} from "../navigation/host-message-bus";
import { listConversationBrowserTabMatches } from "../navigation/list-conversation-browser-tab-matches";
import { resolveBrowserTabPanelSide } from "../navigation/resolve-browser-tab-panel-side";
import { resolvePanelSide } from "../navigation/resolve-panel-side";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../navigation/sidebar-hit-test-selector";
import {
  ThreadSidePanelTab,
  ensureThreadSidePanelTabInit,
} from "../navigation/thread-side-panel-tab";
import {
  ensureTerminalPanelToggleInit,
  toggleTerminalPanel,
} from "../navigation/toggle-terminal-panel";
import {
  bindWindowsTabsOpenOps,
  ensureWindowsTabsOpenInit,
  windowsTabsOpenHandler,
} from "../navigation/windows-tabs-open";
import {
  ensureReviewDiffFilterInit,
  setReviewDiffFilter,
  type ReviewDiffFilter,
} from "../review/set-review-diff-filter";
import {
  ensureReviewScrollTargetInit,
  setReviewScrollTarget,
} from "../review/set-review-scroll-target";
import { AppearanceSettings } from "../settings/appearance-settings";
import { broadcastQueryCacheInvalidation } from "../settings/broadcast-query-cache-invalidation";
import {
  ensureSettingsQueryAtomsInit,
  fetchSettingValue,
  persistSettingValue,
} from "../settings/settings-ipc";
import { buildVscodeQueryKey } from "../settings/vscode-query-key";
import {
  ensureZodRuntime,
  zodBoolean,
  zodDiscriminatedUnion,
  zodEnum,
  zodLiteral,
  zodNumber,
  zodObject,
  zodString,
  zodToJsonSchema,
  zodUnion,
} from "../vendor/zod";

import {
  APP_ACTION_TYPES,
  APP_DYNAMIC_TOOL_GUIDANCE,
  type AppActionRegistry,
  type AppActionType,
} from "./register-app-action-catalog";

function routeShowsTimeline(route: AppRouteValue): boolean {
  switch (route.routeKind) {
    case "local-thread":
    case "remote-thread":
    case "chatgpt-thread":
    case "client-local-thread":
      return true;
    default:
      return false;
  }
}

function summarizeThread(scope: AppActionScope) {
  switch (scope.value.routeKind) {
    case "local-thread":
      return {
        id: scope.value.conversationId,
        kind: "local" as const,
        hostId:
          (scope.get(conversationHostIdAtom, scope.value.conversationId) as
            | string
            | null
            | undefined) ?? "local",
        title: scope.get(conversationTitleAtom, scope.value.conversationId) as
          | string
          | null,
      };
    case "remote-thread":
      return {
        id: scope.value.taskId,
        kind: "remote" as const,
        title: null,
      };
    case "chatgpt-thread":
      return {
        id: scope.value.conversationId,
        kind: "chatgpt" as const,
        title: null,
      };
    default:
      return null;
  }
}

function summarizeRoute(route: AppActionScope["value"]) {
  const base = {
    kind: route.routeKind,
    pathname: route.pathname ?? null,
    routeTemplate: route.routeTemplate ?? null,
  };
  switch (route.routeKind) {
    case "local-thread":
    case "chatgpt-thread":
      return { ...base, threadId: route.conversationId ?? null };
    case "client-local-thread":
      return { ...base, threadId: route.clientThreadId ?? null };
    case "remote-thread":
      return { ...base, taskId: route.taskId ?? null };
    default:
      return base;
  }
}

function elementVisibility(
  el: Element | null,
): "visible" | "offscreen" | "not_mounted" {
  if (el == null) return "not_mounted";
  const rect = el.getBoundingClientRect();
  if (
    rect.bottom <= 0 ||
    rect.right <= 0 ||
    rect.top >= window.innerHeight ||
    rect.left >= window.innerWidth
  ) {
    return "offscreen";
  }
  return "visible";
}

function summarizeViewport(selector: string) {
  const el = document.querySelector(selector);
  if (!(el instanceof HTMLElement)) return { present: false as const };
  return {
    present: true as const,
    scrollTop: Math.round(el.scrollTop),
    scrollHeight: Math.round(el.scrollHeight),
    clientHeight: Math.round(el.clientHeight),
  };
}

function summarizeSidebarRows() {
  return Array.from(document.querySelectorAll(SIDEBAR_HIT_TEST_SELECTOR)).map(
    (el, index) => {
      const visibility = elementVisibility(el);
      if (
        el instanceof HTMLElement &&
        el.matches(AppActionSelector.sidebarSection)
      ) {
        return {
          type: "section" as const,
          index,
          heading: el.dataset.appActionSidebarSectionHeading ?? "",
          collapsed: el.dataset.appActionSidebarSectionCollapsed === "true",
          visibility,
        };
      }
      if (
        el instanceof HTMLElement &&
        el.matches(AppActionSelector.sidebarProjectRow)
      ) {
        return {
          type: "project" as const,
          index,
          projectId: el.dataset.appActionSidebarProjectId ?? null,
          label: el.dataset.appActionSidebarProjectLabel ?? "",
          collapsed: el.dataset.appActionSidebarProjectCollapsed === "true",
          visibility,
        };
      }
      if (
        el instanceof HTMLElement &&
        el.matches(AppActionSelector.sidebarThreadRow)
      ) {
        return {
          type: "thread" as const,
          index,
          id: el.dataset.appActionSidebarThreadId ?? null,
          pinned: el.dataset.appActionSidebarThreadPinned === "true",
          visibility,
        };
      }
      return { type: "unknown" as const, index, visibility };
    },
  );
}

function reviewFileDomByPath(): Map<string, Element> {
  const map = new Map<string, Element>();
  for (const el of document.querySelectorAll(AppActionSelector.reviewFile)) {
    if (!(el instanceof HTMLElement)) continue;
    const path = el.dataset.reviewPath;
    if (path != null) map.set(path, el);
  }
  return map;
}

function summarizeReviewFileDom(el: Element | null) {
  const toggle = el?.querySelector(AppActionSelector.reviewFileToggle) ?? null;
  return {
    expanded:
      toggle instanceof HTMLElement
        ? toggle.dataset.appActionReviewFileExpanded === "true"
        : null,
    visibility: elementVisibility(el),
  };
}

type ReviewFileEntry = {
  path: string;
  additions?: number;
  deletions?: number;
  summary?: { additions?: number; deletions?: number };
  diff?: { additions?: number; deletions?: number };
};

function summarizeReviewFiles(scope: AppActionScope) {
  const dom = reviewFileDomByPath();
  const entries =
    (scope.get(reviewFilesAtom) as ReviewFileEntry[] | null) ?? [];
  const seen = new Set(entries.map((e) => e.path));
  return [
    ...entries.map((entry) => ({
      path: entry.path,
      additions:
        entry.summary?.additions ??
        entry.diff?.additions ??
        entry.additions ??
        0,
      deletions:
        entry.summary?.deletions ??
        entry.diff?.deletions ??
        entry.deletions ??
        0,
      ...summarizeReviewFileDom(dom.get(entry.path) ?? null),
    })),
    ...Array.from(dom.entries()).flatMap(([path, el]) =>
      seen.has(path)
        ? []
        : [
            {
              path,
              additions: null,
              deletions: null,
              ...summarizeReviewFileDom(el),
            },
          ],
    ),
  ];
}

function summarizeBrowserPanel(
  scope: AppActionScope,
  conversationId: string | null,
  bottomActive: PanelTabLike | null,
  rightActive: PanelTabLike | null,
  rightFullscreen: boolean,
) {
  const matches =
    conversationId == null
      ? []
      : listConversationBrowserTabMatches(scope, conversationId);
  const activeBrowserTabId =
    conversationId == null
      ? null
      : resolveBrowserTabPanelSide(
          conversationId,
          scope.get(focusAreaAtom) as string | null,
          { bottom: bottomActive, right: rightActive },
        );
  const activeMatch =
    activeBrowserTabId == null
      ? null
      : (matches.find((m) => m.browserTabId === activeBrowserTabId) ?? null);
  const snapshot =
    conversationId == null || activeBrowserTabId == null
      ? null
      : browserTabSnapshotApi.getSnapshot(conversationId, activeBrowserTabId);
  const tabIds = [
    ...matches.map((m) => m.browserTabId),
    ...(conversationId == null
      ? []
      : browserTabSnapshotApi.getBrowserUseBrowserTabIds(conversationId)),
  ];
  const browserUseIds = new Set(
    conversationId == null
      ? []
      : browserTabSnapshotApi.getBrowserUseBrowserTabIds(conversationId),
  );
  const seen = new Set<string>();
  const tabs = tabIds.flatMap((browserTabId) => {
    if (seen.has(browserTabId)) return [];
    seen.add(browserTabId);
    const tabSnapshot =
      conversationId == null
        ? null
        : browserTabSnapshotApi.getSnapshot(conversationId, browserTabId);
    return [
      {
        active: browserTabId === activeBrowserTabId,
        browserTabId,
        isBrowserUseActive:
          conversationId == null
            ? false
            : browserTabSnapshotApi.isBrowserUseActive(
                conversationId,
                browserTabId,
              ),
        isBrowserUseManaged: browserUseIds.has(browserTabId),
        isLoading: tabSnapshot?.isLoading ?? false,
        title: tabSnapshot?.title ?? null,
        url: tabSnapshot?.url ?? null,
      },
    ];
  });
  return {
    canGoBack: snapshot?.canGoBack ?? false,
    canGoForward: snapshot?.canGoForward ?? false,
    fullscreen: activeMatch?.target === "right" && rightFullscreen,
    isLoading: snapshot?.isLoading ?? false,
    open: activeMatch != null,
    tabs,
    title: snapshot?.title ?? null,
    url: snapshot?.url ?? null,
  };
}

export function getAppActionSummaryHelpers() {
  return {
    routeShowsTimeline,
    summarizeThread,
    summarizeRoute,
    elementVisibility,
    summarizeViewport,
    summarizeSidebarRows,
    reviewFileDomByPath,
    summarizeReviewFileDom,
    summarizeReviewFiles,
    summarizeBrowserPanel,
  };
}
