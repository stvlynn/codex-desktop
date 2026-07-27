// Restored from ref/webview/assets/register-app-actions-CsKK5KzE.js
// Codex desktop action handler implementations (appearance, windows, UI navigation).
// Stage 3: 95/95 app-initial aliases mapped (tabs.open + shell `__esm` facades).
// App action handler implementations + runner index.

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

type QueryClientLike = {
  getQueryData?: (
    key: unknown,
  ) => { values?: Record<string, unknown> } | undefined;
  setQueryData?: (key: unknown, data: unknown) => void;
  invalidateQueries?: (opts: { queryKey: unknown }) => Promise<unknown>;
};

async function persistSettingWithOptionalCache(
  context: AppActionHandlerContext,
  setting: (typeof AppearanceSettings)[keyof typeof AppearanceSettings],
  value: unknown,
  options?: { optimistic?: boolean },
): Promise<void> {
  const queryClient = context.queryClient as QueryClientLike | undefined;
  const queryKey = buildVscodeQueryKey("get-settings");
  const previous = queryClient?.getQueryData?.(queryKey);
  const optimistic = options?.optimistic ?? true;
  if (optimistic) {
    queryClient?.setQueryData?.(queryKey, {
      ...previous,
      values: { ...previous?.values, [setting.key]: value },
    });
  }
  try {
    await persistSettingValue(setting as never, value as never);
    if (!optimistic) {
      queryClient?.setQueryData?.(queryKey, {
        ...previous,
        values: { ...previous?.values, [setting.key]: value },
      });
    }
  } catch (error) {
    if (previous != null) queryClient?.setQueryData?.(queryKey, previous);
    throw error;
  } finally {
    await queryClient?.invalidateQueries?.({ queryKey });
    const keyAsArray = Array.isArray(queryKey) ? queryKey : [queryKey];
    broadcastQueryCacheInvalidation(keyAsArray);
  }
}

function chromeThemeSettingsForVariant(variant: "light" | "dark") {
  return variant === "light"
    ? {
        chromeThemeSetting: AppearanceSettings.lightChromeTheme,
        codeThemeSetting: AppearanceSettings.lightCodeThemeId,
      }
    : {
        chromeThemeSetting: AppearanceSettings.darkChromeTheme,
        codeThemeSetting: AppearanceSettings.darkCodeThemeId,
      };
}

function mergeChromeThemePatch(
  current: ReturnType<typeof mergeChromeThemeWithDefaults>,
  patch: ChromeThemePatch,
) {
  return {
    ...current,
    ...patch,
    fonts:
      patch.fonts == null
        ? current.fonts
        : { ...current.fonts, ...patch.fonts },
    semanticColors:
      patch.semanticColors == null
        ? current.semanticColors
        : { ...current.semanticColors, ...patch.semanticColors },
  };
}

async function applyAppearanceTheme(
  context: AppActionHandlerContext,
  variant: "light" | "dark",
  theme:
    | { kind: "preset"; themeId: string }
    | { kind: "custom"; patch: ChromeThemePatch },
) {
  const { chromeThemeSetting, codeThemeSetting } =
    chromeThemeSettingsForVariant(variant);
  const current = mergeChromeThemeWithDefaults(
    await fetchSettingValue(chromeThemeSetting),
    variant,
  );
  if (theme.kind === "custom") {
    const next = mergeChromeThemePatch(current, theme.patch);
    await persistSettingWithOptionalCache(context, chromeThemeSetting, next);
    return next;
  }
  const seed = await loadChromeThemeSeed(
    theme.themeId,
    variant as ChromeThemeVariant,
  );
  const next = {
    ...current,
    ...seed,
    fonts: { ...current.fonts, ...seed.fonts },
    semanticColors: { ...current.semanticColors, ...seed.semanticColors },
  };
  await Promise.all([
    persistSettingWithOptionalCache(context, codeThemeSetting, theme.themeId),
    persistSettingWithOptionalCache(context, chromeThemeSetting, next),
  ]);
  return next;
}

const hexColorSchema = zodString().regex(/^#[0-9a-fA-F]{6}$/);
const chromeFontsPatchSchema = zodObject({
  code: zodString().nullable().optional(),
  ui: zodString().nullable().optional(),
});
const chromeSemanticPatchSchema = zodObject({
  diffAdded: hexColorSchema,
  diffRemoved: hexColorSchema,
  skill: hexColorSchema,
});
const chromeThemePatchSchema = zodObject({
  accent: hexColorSchema.optional(),
  contrast: zodNumber().int().min(0).max(100).optional(),
  fonts: chromeFontsPatchSchema.optional(),
  ink: hexColorSchema.optional(),
  opaqueWindows: zodBoolean().optional(),
  semanticColors: chromeSemanticPatchSchema.partial().optional(),
  surface: hexColorSchema.optional(),
});

ensureZodRuntime();
ensureAppActionRuntimeInit();
ensureAppActionPayloadSchemasInit();
ensureHostMessageBusInit();
ensureCodeThemeRegistryInit();
ensureChromeThemeDefaultsInit();
ensureAppShellAtomsInit();
ensureSettingsQueryAtomsInit();
ensureConversationHostIdAtomInit();
ensureConversationTitleAtomInit();
ensureReviewScrollTargetInit();
ensureReviewDiffFilterInit();
ensureTerminalPanelToggleInit();
ensureBrowserTabSnapshotApiInit();
ensureWindowsTabsOpenInit();

const appearanceGet = createAppActionHandler({
  schema: zodObject({ type: zodLiteral("app.appearance.get") }),
  run: async () => {
    const [mode, lightCode, darkCode, lightChrome, darkChrome] =
      await Promise.all([
        fetchSettingValue(AppearanceSettings.theme),
        fetchSettingValue(AppearanceSettings.lightCodeThemeId),
        fetchSettingValue(AppearanceSettings.darkCodeThemeId),
        fetchSettingValue(AppearanceSettings.lightChromeTheme),
        fetchSettingValue(AppearanceSettings.darkChromeTheme),
      ]);
    return {
      schemaVersion: 1,
      mode,
      themes: {
        light: { codeThemeId: lightCode, chromeTheme: lightChrome },
        dark: { codeThemeId: darkCode, chromeTheme: darkChrome },
      },
    };
  },
});

const appearanceGetAvailableThemes = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("app.appearance.get_available_themes"),
  }),
  run: () => ({
    schemaVersion: 1,
    themes: listAvailableCodeThemes().map((theme) => ({
      id: theme.id,
      label: theme.label,
      supportsDark: theme.supportsDark,
      supportsLight: theme.supportsLight,
    })),
  }),
});

const appearanceSetMode = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("app.appearance.set_mode"),
    mode: zodEnum(["light", "dark", "system"]),
  }),
  run: async ({ mode }, context) => {
    await persistSettingWithOptionalCache(
      context,
      AppearanceSettings.theme,
      mode,
      {
        optimistic: false,
      },
    );
    return { schemaVersion: 1, mode };
  },
});

const appearanceSetTheme = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("app.appearance.set_theme"),
    theme: zodDiscriminatedUnion("kind", [
      zodObject({
        kind: zodLiteral("preset"),
        themeId: zodString().refine(
          isValidCodeThemeId,
          "Invalid code theme id",
        ),
      }),
      zodObject({
        kind: zodLiteral("custom"),
        patch: chromeThemePatchSchema,
      }),
    ]),
    variant: zodEnum(["light", "dark", "both"]).default("both"),
  }),
  run: async ({ theme, variant }, context) => {
    const updated: Array<"light" | "dark"> = [];
    const result: Record<string, unknown> = {
      schemaVersion: 1,
      theme,
      updated,
    };
    if (variant === "light" || variant === "both") {
      result.appearanceLightChromeTheme = await applyAppearanceTheme(
        context,
        "light",
        theme,
      );
      updated.push("light");
    }
    if (variant === "dark" || variant === "both") {
      result.appearanceDarkChromeTheme = await applyAppearanceTheme(
        context,
        "dark",
        theme,
      );
      updated.push("dark");
    }
    result.updated = updated;
    return result;
  },
});

const helpSchema = zodObject({
  type: zodLiteral("app.help"),
  action: zodString().optional(),
});

function buildHelpPayload(
  handlers: ReadonlyArray<AppActionHandler>,
  actionType?: string,
): AppActionHelpPayload {
  return {
    schemaVersion: 1,
    prompt: APP_DYNAMIC_TOOL_GUIDANCE,
    actions: handlers
      .filter((handler) =>
        actionType == null ? true : handler.type === actionType,
      )
      .map((handler) => ({
        type: handler.type,
        jsonSchema: JSON.stringify(zodToJsonSchema(handler.schema), null, 2),
      })),
  };
}

const navBack = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.nav.back"),
    windowId: appActionWindowIdSchema,
  }),
  run: () => {
    hostMessageBus.dispatchHostMessage({ type: "navigate-back" });
  },
});

const navForward = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.nav.forward"),
    windowId: appActionWindowIdSchema,
  }),
  run: () => {
    hostMessageBus.dispatchHostMessage({ type: "navigate-forward" });
  },
});

const reviewCollapseAll = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.review.collapse_all"),
    windowId: appActionWindowIdSchema,
  }),
  run: () => {
    window.dispatchEvent(
      new CustomEvent("wham-toggle-all-diffs", {
        detail: { open: false, scope: "review" },
      }),
    );
  },
});

const reviewExpandAll = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.review.expand_all"),
    windowId: appActionWindowIdSchema,
  }),
  run: () => {
    window.dispatchEvent(
      new CustomEvent("wham-toggle-all-diffs", {
        detail: { open: true, scope: "review" },
      }),
    );
  },
});

const reviewFileSetExpanded = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.review.file_set_expanded"),
    windowId: appActionWindowIdSchema,
    path: zodString(),
    expanded: zodBoolean(),
  }),
  run: ({ path: reviewPath, expanded }) => {
    const toggle = findReviewFileElement(reviewPath).querySelector(
      AppActionSelector.reviewFileToggle,
    );
    if (!(toggle instanceof HTMLElement)) {
      throw new Error(`Missing review file toggle: ${reviewPath}`);
    }
    if (toggle.dataset.appActionReviewFileExpanded !== String(expanded)) {
      toggle.click();
    }
  },
});

const reviewScroll = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.review.scroll"),
    windowId: appActionWindowIdSchema,
    scroll: appActionScrollSchema,
  }),
  run: ({ scroll }) => {
    scrollAppActionTarget(
      requireAppActionTarget(AppActionSelector.reviewScroll) as HTMLElement,
      scroll,
    );
  },
});

function alignToScrollLogicalPosition(
  align: "top" | "center" | "bottom" | undefined,
): ScrollLogicalPosition {
  switch (align ?? "top") {
    case "center":
      return "center";
    case "bottom":
      return "end";
    case "top":
    default:
      return "start";
  }
}

const reviewScrollToFile = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.review.scroll_to_file"),
    windowId: appActionWindowIdSchema,
    path: zodString(),
    align: zodEnum(["top", "center", "bottom"]).optional(),
  }),
  run: ({ path: reviewPath, align }, context) => {
    const el = findReviewFileElement(reviewPath);
    setReviewScrollTarget(
      requireAppActionScope(context),
      el instanceof HTMLElement
        ? (el.dataset.reviewPath ?? reviewPath)
        : reviewPath,
    );
    el.scrollIntoView({
      block: alignToScrollLogicalPosition(align),
      behavior: "auto",
    });
  },
});

const reviewSetFullscreen = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.review.set_fullscreen"),
    windowId: appActionWindowIdSchema,
    fullscreen: zodBoolean(),
  }),
  run: ({ fullscreen }, context) => {
    requireAppActionScope(context).set(rightPanelFullscreenAtom, fullscreen);
  },
});

const reviewSetView = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.review.set_view"),
    windowId: appActionWindowIdSchema,
    view: zodEnum(["turn", "branch", "unstaged", "staged"]),
  }),
  run: ({ view }, context) => {
    const filter: ReviewDiffFilter = view === "turn" ? "last-turn" : view;
    setReviewDiffFilter(requireAppActionScope(context), filter);
  },
});

const reviewToggle = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.review.toggle"),
    windowId: appActionWindowIdSchema,
  }),
  run: () => {
    hostMessageBus.dispatchHostMessage({ type: "toggle-diff-panel" });
  },
});

const terminalToggle = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.terminal.toggle"),
    windowId: appActionWindowIdSchema,
  }),
  run: (_payload, context) => {
    toggleTerminalPanel(requireAppActionScope(context));
  },
});

const showHome = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.show_home"),
    windowId: appActionWindowIdSchema,
  }),
  run: () => {
    hostMessageBus.dispatchHostMessage({ type: "new-chat" });
  },
});

function pathForShowThread(threadId: string): string {
  const parsed = parseSidebarThreadKey(threadId);
  return parsed == null
    ? localThreadPath(asThreadId(threadId))
    : sidebarThreadKeyToPath(parsed.key);
}

const showThread = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.show_thread"),
    windowId: appActionWindowIdSchema,
    threadId: zodString(),
    kind: zodEnum(["chatgpt", "codex"]).optional(),
  }),
  run: ({ kind, threadId }) => {
    hostMessageBus.dispatchHostMessage({
      type: "navigate-to-route",
      path:
        kind === "chatgpt"
          ? conversationWorkPath(threadId)
          : pathForShowThread(threadId),
    });
  },
});

const sidebarProjectSetCollapsed = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.sidebar.project_set_collapsed"),
    windowId: appActionWindowIdSchema,
    project: appActionSidebarProjectRefSchema,
    collapsed: zodBoolean(),
  }),
  run: ({ project, collapsed }) => {
    const row = findSidebarProjectRowElement(project);
    if (
      row instanceof HTMLElement &&
      row.dataset.appActionSidebarProjectCollapsed !== String(collapsed)
    ) {
      row.click();
    }
  },
});

const sidebarProjectSetShowAll = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.sidebar.project_set_show_all"),
    windowId: appActionWindowIdSchema,
    project: appActionSidebarProjectRefSchema,
    showAll: zodBoolean(),
  }),
  run: ({ project, showAll }) => {
    const row = findSidebarProjectRowElement(project);
    if (!(row instanceof HTMLElement)) return;
    if (row.dataset.appActionSidebarProjectCollapsed === "true" && !showAll) {
      return;
    }
    const projectId = row.dataset.appActionSidebarProjectId;
    if (projectId == null) throw new Error("Missing sidebar project id");
    const list = requireAppActionTarget(
      sidebarProjectListSelector(projectId),
    ) as HTMLElement;
    if (list.dataset.appActionSidebarProjectShowAll === String(showAll)) {
      return;
    }
    const toggle = list.querySelector(
      AppActionSelector.sidebarProjectShowAllToggle,
    );
    if (!(toggle instanceof HTMLElement)) {
      throw new Error(`Missing sidebar project show more toggle: ${projectId}`);
    }
    toggle.click();
  },
});

const sidebarScroll = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.sidebar.scroll"),
    windowId: appActionWindowIdSchema,
    scroll: appActionScrollSchema,
  }),
  run: ({ scroll }) => {
    scrollAppActionTarget(
      requireAppActionTarget(AppActionSelector.sidebarScroll) as HTMLElement,
      scroll,
    );
  },
});

const sidebarSectionSetCollapsed = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.sidebar.section_set_collapsed"),
    windowId: appActionWindowIdSchema,
    section: appActionSidebarSectionRefSchema,
    collapsed: zodBoolean(),
  }),
  run: ({ section, collapsed }) => {
    const el = findSidebarSectionElement(section);
    if (!(el instanceof HTMLElement)) return;
    if (el.dataset.appActionSidebarSectionCollapsed === String(collapsed)) {
      return;
    }
    const toggle = el.querySelector(AppActionSelector.sidebarSectionToggle);
    if (!(toggle instanceof HTMLElement)) {
      throw new Error("Sidebar section does not have a collapse toggle");
    }
    toggle.click();
  },
});

const sidebarSelectProject = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.sidebar.select_project"),
    windowId: appActionWindowIdSchema,
    project: appActionSidebarProjectRefSchema,
  }),
  run: ({ project }) => {
    const select = findSidebarProjectRowElement(project).querySelector(
      AppActionSelector.sidebarProjectSelect,
    );
    if (!(select instanceof HTMLElement)) {
      throw new Error("Missing sidebar project select action");
    }
    select.click();
  },
});

const sidebarToggle = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.sidebar.toggle"),
    windowId: appActionWindowIdSchema,
  }),
  run: () => {
    hostMessageBus.dispatchHostMessage({ type: "toggle-sidebar" });
  },
});

const timelineScroll = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.timeline.scroll"),
    windowId: appActionWindowIdSchema,
    scroll: appActionScrollSchema,
  }),
  run: ({ scroll }) => {
    scrollAppActionTargetTo(
      requireAppActionTarget(AppActionSelector.timelineScroll) as HTMLElement,
      scroll,
    );
  },
});

const timelineScrollToTurn = createAppActionHandler({
  schema: zodObject({
    type: zodLiteral("windows.timeline.scroll_to_turn"),
    windowId: appActionWindowIdSchema,
    direction: appActionTimelineDirectionSchema,
  }),
  run: ({ direction }) => {
    scrollAppActionTargetByTurn(
      requireAppActionTarget(AppActionSelector.timelineScroll) as HTMLElement,
      direction,
    );
  },
});

import { getAppActionSummaryHelpers } from "./register-app-action-summary";
const {
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
} = getAppActionSummaryHelpers();

const getSummary = createAppActionHandler({
  schema: zodObject({ type: zodLiteral("app.get_summary") }),
  run: (_payload, context) => {
    const scope = requireAppActionScope(context);
    const sidebarOpen = Boolean(scope.get(sidebarOpenAtom));
    const rightShellOpen = Boolean(scope.get(rightPanelShellOpenAtom));
    const rightTabsOpen = Boolean(scope.get(rightPanelTabsOpenAtom));
    const rightOpen = rightShellOpen && rightTabsOpen;
    const rightActive = rightOpen
      ? ((scope.get(rightPanelController.activeTab$) as PanelTabLike | null) ??
        null)
      : null;
    const rightTabs =
      (scope.get(rightPanelController.tabs$) as PanelTabLike[]) ?? [];
    const bottomOpen = Boolean(scope.get(bottomPanelOpenAtom));
    const bottomActive = bottomOpen
      ? ((scope.get(bottomPanelController.activeTab$) as PanelTabLike | null) ??
        null)
      : null;
    const rightKind = rightActive?.tabId ?? null;
    let reviewPlacement: "right" | "bottom" | null = null;
    if (rightKind === ThreadSidePanelTab.DIFF) reviewPlacement = "right";
    else if (bottomActive?.tabId === ThreadSidePanelTab.DIFF) {
      reviewPlacement = "bottom";
    }
    const reviewOpen = reviewPlacement != null;
    const rightFullscreen = Boolean(scope.get(rightPanelFullscreenAtom));
    const terminalPlacement = resolvePanelSide(
      scope.get(focusAreaAtom) as string | null,
      {
        bottom: Boolean(scope.get(bottomTerminalOpenAtom)),
        right: Boolean(scope.get(rightTerminalOpenAtom)),
      },
    );
    const conversationId = clientThreadIdFromRouteAtom(scope);
    return {
      schemaVersion: 1,
      window: {
        windowId: CURRENT_CHANNEL_ID,
        route: summarizeRoute(scope.value),
        thread: summarizeThread(scope),
        panels: {
          browser: summarizeBrowserPanel(
            scope,
            routeShowsTimeline(scope.value) ? conversationId : null,
            bottomActive,
            rightActive,
            rightFullscreen,
          ),
          sidebar: { open: sidebarOpen },
          review: {
            open: reviewOpen,
            placement: reviewPlacement,
            fullscreen: reviewPlacement === "right" && rightFullscreen,
            fileTreeOpen:
              reviewOpen && Boolean(scope.get(reviewFileTreeOpenAtom)),
            view: scope.get(reviewDiffFilterAtom) ?? null,
          },
          terminal: {
            open: terminalPlacement != null,
            placement: terminalPlacement,
          },
          rightPanel: {
            fullscreen: rightFullscreen,
            kind: rightKind,
            open: rightShellOpen,
            tabs: rightTabs.map((tab) => ({
              focused: tab.tabId === rightActive?.tabId,
              type: focusAreaFromTab(tab),
            })),
          },
        },
        ...(sidebarOpen
          ? {
              sidebar: {
                viewport: summarizeViewport(AppActionSelector.sidebarScroll),
                rows: summarizeSidebarRows(),
              },
            }
          : {}),
        ...(reviewOpen
          ? {
              review: {
                viewport: summarizeViewport(AppActionSelector.reviewScroll),
                files: summarizeReviewFiles(scope),
              },
            }
          : {}),
        ...(routeShowsTimeline(scope.value)
          ? {
              timeline: summarizeViewport(AppActionSelector.timelineScroll),
            }
          : {}),
      },
    };
  },
});

const wiredHandlers: AppActionHandler[] = [
  getSummary,
  appearanceGet,
  appearanceGetAvailableThemes,
  appearanceSetMode,
  appearanceSetTheme,
  navBack,
  navForward,
  reviewCollapseAll,
  reviewExpandAll,
  reviewFileSetExpanded,
  reviewScroll,
  reviewScrollToFile,
  reviewSetFullscreen,
  reviewSetView,
  reviewToggle,
  showHome,
  showThread,
  sidebarProjectSetCollapsed,
  sidebarProjectSetShowAll,
  sidebarScroll,
  sidebarSectionSetCollapsed,
  sidebarSelectProject,
  sidebarToggle,
  terminalToggle,
  timelineScroll,
  timelineScrollToTurn,
  windowsTabsOpenHandler,
];

const helpHandler = createAppActionHandler({
  schema: helpSchema,
  run: ({ action }) => buildHelpPayload(allHandlers(), action),
});

function allHandlers(): AppActionHandler[] {
  return [helpHandler, ...wiredHandlers];
}

const runnerByType = indexAppActionRunners(allHandlers());

export { runnerByType };
