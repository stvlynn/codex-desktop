// Restored from ref/webview/assets/local-environments-settings-page-DsmByKKn.js
// Wave FZ — full polished body from `local-environments-settings-page-DsmByKKn/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 88/108).
// Careful split 3/3
/* split-lane-import-depth:1 */

/** split companion stub */
const LocalEnvironmentEditorT: any = undefined;
import { Chatgpt3 } from "../../account/chatgpt3";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { clampZoomPercent } from "../../artifact/clamp-zoom-percent";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wdt_Init, ensureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation, useMatch, useNavigate } from "../../boundaries/react-router-navigation";
import { SUPPORTED_NODE_PLATFORMS } from "../../config/supported-node-platforms";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { deferredConversationR } from "../../conversation/deferred-conversation-r";
import { sidebarThreadKeyToPath } from "../../conversation/sidebar-thread-path";
import { DebugNameProbe } from "../../debug/debug-name-probe";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { DEVELOPERS_OPENAI_COM_CODEX_APP_LOCAL_ENVIRONMENTS_URL } from "../../docs/codex-doc-urls";
import { resolveRootPaths } from "../../environments/resolve-root-paths";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { ProjectDropdownGlyphIcon } from "../../icons/project-dropdown-glyph-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { ensurePetNotificationMenuInit } from "../../pets/ensure-pet-notification-menu-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { ClassNameStyleSurface } from "../../ui/class-name-style-surface";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { CopyButton } from "../../ui/copy-button";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { ght } from "../../ui/ght";
import { InsetBorderPanel } from "../../ui/inset-border-panel";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensurePersonalizationCInit, ensurePersonalizationJutInit, ensureSettingsGlyphRBInit } from "../../utils/wave-as-gap-ensure-inits";
import { pathsReferToSameWorkspaceResource } from "../../utils/workspace-path-keys";
import { toPosixPath } from "../../utils/workspace-paths";
import { localEnvironmentEditorA, localEnvironmentEditorG, localEnvironmentEditorI, localEnvironmentEditorL, localEnvironmentEditorN, localEnvironmentEditorO, localEnvironmentEditorR, localEnvironmentEditorT, localEnvironmentEditorU, localEnvironmentEditorUnderscore } from "../local-environment-editor";
import { ensureLocalEnvironmentWorkflowMessagesInit, localEnvironmentWorkflowMessages } from "../local-environment-workflow-messages";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { initSettingsRowDisclosure, SettingsRowDisclosure } from "../settings-row-disclosure";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";

// Cross-part stubs (same-package helpers live in sibling parts).
const AppInitialBA: any = undefined;
const AppInitialCO: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialFZ: any = undefined;
const AppInitialNQ: any = undefined;
const AppInitialNi: any = undefined;
const AppInitialO: any = undefined;
const AppInitialQut: any = undefined;
const AppInitialW5: any = undefined;
const AppInitialYA: any = undefined;
const DeferredEnvironmentsTB2: any = undefined;
const _t: any = undefined;
const chatProcessRegister: any = undefined;
const deferredUiEnt: any = undefined;
const alpha: any = undefined;
const LocalEnvironmentsSettingsPageHelper3: any = undefined;
const LocalEnvironmentsSettingsPageHelper6: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const remoteHostedPipHiddenThreadIds: any = undefined;
function LocalEnvironmentsSettingsPageHelper13(onyx) {
  let {
      settingsHostId
    } = onyx,
    pearl = CodexPluginActionType(appScopeAtom),
    quartz = useIntl(),
    [river] = AppInitialW5(),
    slate = useLocation(),
    timber = useNavigate(),
    umbra = useMatch(Chatgpt3) != null,
    violet = umbra ? remoteHostedPipHiddenThreadIds(river, slate.state) : null,
    willow = violet?.hostId ?? settingsHostId,
    {
      error,
      isFetching,
      isLoading,
      refetch
    } = CodexBrowserSurfaceActionType(AppInitialQut, DesktopPersistenceKeys.LOCAL_PROJECTS),
    {
      error: _error,
      isFetching: _isFetching,
      isLoading: _isLoading,
      refetch: _refetch
    } = CodexBrowserSurfaceActionType(AppInitialQut, DesktopPersistenceKeys.REMOTE_PROJECTS),
    xenon = AppInitialCO(CodexPluginActionResult(DeferredEnvironmentsTB2), willow),
    yellow = xenon.flatMap(indigo),
    zinc = willow === "local" ? isLoading : _isLoading,
    amber = willow === "local" ? isFetching : _isFetching,
    basalt = willow === "local" ? error : _error,
    [cedar, daisy] = kite.useState(violet?.workspaceRoot ?? river.get("workspaceRoot")),
    [ember, flint] = kite.useState(violet?.configPath ?? river.get("configPath")),
    [garnet, hazel] = kite.useState(violet != null || river.get("mode") === "edit"),
    [ivory, jasper] = kite.useState(0),
    kelp = cedar ?? null,
    lotus = kelp != null && (violet != null || yellow.includes(kelp) || ember != null) ? kelp : null,
    mint = lotus == null ? null : xenon.find(item => item.path === lotus) ?? null,
    nova = lotus == null,
    olive = () => {
      if (willow !== "local") {
        sidebarThreadKeyToPath({
          hostId: willow
        });
        return;
      }
      AppInitialNQ();
    },
    be = () => {
      willow === "local" ? refetch() : _refetch();
    },
    prism = () => {
      daisy(null);
      flint(null);
      hazel(false);
    };
  let quill = prism,
    reef = () => {
      if (violet != null) {
        timber(violet.returnTo, {
          replace: true
        });
        violet.reopenStableWorktreeId != null && ensurePetNotificationMenuInit(pearl, {
          id: violet.reopenStableWorktreeId,
          launchMode: "create-stable-worktree"
        });
        return;
      }
      hazel(false);
    },
    sage = (brook, cliff) => {
      daisy(brook);
      flint(cliff);
      hazel(false);
    };
  let topaz = sage,
    ultra = (dusk, elm) => {
      daisy(dusk);
      flint(elm);
      hazel(true);
    };
  let vapor = ultra,
    {
      data,
      isLoading: __isLoading,
      isFetching: __isFetching,
      error: __error,
      refetch: __refetch
    } = SIDEBAR_HIT_TEST_SELECTOR("local-environments", {
      params: {
        hostId: willow,
        workspaceRoot: lotus ?? ""
      },
      queryConfig: {
        enabled: lotus != null
      },
      select: harbor
    }),
    wheat = data != null && !__isLoading && !__isFetching && __error == null,
    yarn = wheat ? toggleSortedIdList(data) : null;
  let zephyr = yarn,
    acorn = violet != null && violet.configPath == null && wheat && lotus != null ? AppInitialYA(data, lotus) : null,
    bloom = violet?.configPath ?? acorn ?? (violet == null ? zephyr : null);
  garnet && ember == null && bloom != null && flint(bloom);
  let coral = ember ?? bloom,
    drift = lotus != null && coral != null,
    {
      data: _data,
      isLoading: ___isLoading,
      error: ___error,
      refetch: ___refetch
    } = SIDEBAR_HIT_TEST_SELECTOR("local-environment-config", {
      params: {
        configPath: coral ?? "",
        hostId: willow
      },
      queryConfig: {
        enabled: drift
      }
    }),
    eagle = _data?.environment?.type === "success" ? _data.environment.environment : null,
    frost = _data?.environment?.type === "error",
    glide = ___error != null,
    honey = __error != null || ___error != null,
    iris = () => {
      if (coral == null) {
        __refetch();
        return;
      }
      Promise.all([__refetch(), ___refetch()]);
    },
    $e = async () => {
      __refetch();
      let fern = await ___refetch();
      fern.data != null && fern.error == null && jasper(gamma);
    };
  let jewel = $e,
    knoll = async () => {
      let grove = await ___refetch();
      grove.isSuccess && (flint(grove.data.configPath), hazel(true));
    };
  let lunar = knoll,
    moss = __isLoading || __isFetching && coral == null || drift && ___isLoading;
  if (umbra && violet == null) {
    let hill;
    return <Navigate {...{
      to: "/settings/local-environments",
      replace: true
    }} />;
  }
  if (nova) {
    let isle;
    return isle = <MemoizedFormattedMessage {...{
      ...copper.workspaceSelectDescription,
      values: {
        learnMore: <a key="learn-more" className="inline-flex items-center gap-1 text-base text-token-text-link-foreground" href={DEVELOPERS_OPENAI_COM_CODEX_APP_LOCAL_ENVIRONMENTS_URL} target="_blank" rel="noreferrer" onClick={falcon}>
                  {<MemoizedFormattedMessage {...{
            ...copper.workspaceSelectLearnMore
          }} />}
                </a>
      }
    }} />, <LocalEnvironmentsSettingsPageHelper18 {...{
      subtitle: isle,
      children: <LocalEnvironmentsSettingsPageHelper6 {...{
        groups: xenon,
        hasError: basalt != null,
        hostId: willow,
        isLoading: zinc || basalt != null && amber,
        workspaceRoots: yellow,
        onAddWorkspace: olive,
        onCreateEnvironment: vapor,
        onRetry: be,
        onSelectEnvironment: topaz
      }} />
    }} />;
  }
  let north = alpha(lotus, mint),
    orbit = violet == null ? <ToolbarBreadcrumb {...{
      ancestors: [{
        id: "environments",
        label: <MemoizedFormattedMessage {...{
          id: "settings.localEnvironments.breadcrumb.root",
          defaultMessage: "Environments",
          description: "Breadcrumb label for the local environments page"
        }} />,
        onClick: quill
      }, ...(garnet ? [{
        id: "workspace",
        label: north,
        onClick: reef
      }] : [])],
      current: garnet ? <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.breadcrumb.edit",
        defaultMessage: "edit",
        description: "Breadcrumb label for local environment edit mode"
      }} /> : north
    }} /> : <ReadLoginRouteQuerySnapshot {...{
      color: "ghost",
      size: "toolbar",
      onClick: reef,
      children: [<AppIconPZ {...{
        className: "icon-xs"
      }} />, <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.breadcrumb.back",
        defaultMessage: "Back",
        description: "Button label to return from local environment creation"
      }} />]
    }} />;
  let pine = orbit;
  if (moss) {
    let juniper = <AppInitialNi>
        {<MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.loading.body",
        defaultMessage: "Fetching your project configuration…",
        description: "Loading state body for local environments settings"
      }} />}
      </AppInitialNi>;
    let lagoon;
    return <LocalEnvironmentsSettingsPageHelper18 {...{
      backSlot: pine,
      children: juniper
    }} />;
  }
  if (!_data || lotus == null) {
    let meadow = <UseChromeAndCodeThemeSync.Header {...{
      title: <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.unavailable.title",
        defaultMessage: "Local environments unavailable",
        description: "Title for missing local environment config state"
      }} />
    }} />;
    let nest = <MemoizedFormattedMessage {...{
      id: "settings.localEnvironments.unavailable.body",
      defaultMessage: "We could not load local environment settings for this project",
      description: "Body text for missing local environment config state"
    }} />;
    let oak = honey ? <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      size: "toolbar",
      type: "button",
      onClick: iris,
      children: <MemoizedFormattedMessage {...{
        ...localEnvironmentWorkflowMessages.retry
      }} />
    }} /> : null;
    let petal = <UseChromeAndCodeThemeSync {...{
      children: [meadow, <UseChromeAndCodeThemeSync.Content {...{
        children: <ParseUrlOrFallback {...{
          children: <div className="flex items-center justify-between gap-3 p-3 text-sm text-token-text-secondary">
                          {nest}
                          {oak}
                        </div>
        }} />
      }} />]
    }} />;
    let quiet;
    return <LocalEnvironmentsSettingsPageHelper18 {...{
      backSlot: pine,
      children: petal
    }} />;
  }
  let quest = () => {
    if (_data.exists) {
      lunar();
      return;
    }
    flint(_data.configPath);
    hazel(true);
  };
  let ridge = quest;
  if (garnet) {
    let rain = <MemoizedFormattedMessage {...{
      id: "settings.localEnvironments.edit.title",
      defaultMessage: "Edit local environment",
      description: "Title for the local environment editor"
    }} />;
    let seed = `${willow}:${_data.configPath}:${ivory}`,
      trail = <LocalEnvironmentEditorT key={seed} {...{
        hostId: willow,
        workspaceRoot: lotus,
        workspaceGroup: mint,
        configPath: _data.configPath,
        expectedRevision: _data.revision,
        initialEnvironment: eagle,
        hasParseError: frost,
        hasReadError: glide,
        onDiscardConflict: jewel,
        onRetryRead: iris,
        onSaved: reef
      }} />;
    let urn;
    return <LocalEnvironmentsSettingsPageHelper18 {...{
      backSlot: pine,
      title: rain,
      children: trail
    }} />;
  }
  let storm = _data.exists ? quartz.formatMessage({
    id: "settings.localEnvironments.environment.editLabel",
    defaultMessage: "Edit local environment",
    description: "Accessible label for editing a local environment"
  }) : undefined;
  let tide = _data.exists ? "secondary" : "primary",
    unity = _data.exists ? <>
        {<CopyButton {...{
        className: "icon-xs"
      }} />}
        {<MemoizedFormattedMessage {...{
        ...copper.editEnvironment
      }} />}
      </> : <MemoizedFormattedMessage {...{
      ...copper.createEnvironment
    }} />;
  let vale = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": storm,
    color: tide,
    size: "toolbar",
    onClick: ridge,
    children: unity
  }} />;
  let wave = eagle?.name,
    apex = <LocalEnvironmentsSettingsPageHelper3 {...{
      configExists: _data.exists,
      initialEnvironment: eagle,
      hasParseError: frost,
      hasReadError: glide
    }} />;
  return <LocalEnvironmentsSettingsPageHelper18 {...{
    action: vale,
    backSlot: pine,
    title: wave,
    children: apex
  }} />;
}
function falcon(vine) {
  deferredUiEnt({
    event: vine,
    href: DEVELOPERS_OPENAI_COM_CODEX_APP_LOCAL_ENVIRONMENTS_URL,
    initiator: "open_in_browser_bridge"
  });
}
function gamma(wind) {
  return wind + 1;
}
function harbor(yarrow) {
  return yarrow.environments;
}
function indigo(azure) {
  return azure.projectKind === "local" ? resolveRootPaths(azure) : [azure.path];
}
function LocalEnvironmentsSettingsPageHelper18({
  action,
  backSlot,
  subtitle,
  title = <SettingsSectionTitle slug="local-environments" />,
  children
}) {
  return <OpenInBrowser {...{
    action,
    title,
    subtitle,
    backSlot,
    children
  }} />;
}
var jade,
  kite,
  $,
  lemon = esmInit(() => {
    jade = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    kite = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Qtt_Init();
    initToolbarBreadcrumb();
    findProcessManagerRow();
    ensurePersonalizationJutInit();
    AppInitialFZ();
    isIndeterminate();
    localEnvironmentEditorN();
    ensureLocalEnvironmentWorkflowMessagesInit();
    bravo();
    chatProcessRegister();
    ensureAppScopeInit();
    AppIconOi();
    codexCommandTheme();
    ClassNameStyleSurface();
    useGateEnabledWithAccountData();
    ensureSettingsSectionTitleInit();
    AppInitialFC();
    ensureAppShellAtomsInit();
    InsetBorderPanel();
    DropdownMenuPopover();
    AppInitialBA();
    scrollAppActionTargetTo();
    AppInitialO();
    DebugNameProbe();
    echo();
    delta();
    _t();
  });
export function LocalEnvironmentsSettingsPage() {
  let birch = useLocation(),
    {
      selectedHostId
    } = useSelectedHost(),
    canyon = `${selectedHostId}:${birch.key}`;
  return <LocalEnvironmentsSettingsPageHelper13 key={canyon} {...{
    settingsHostId: selectedHostId
  }} />;
}
var marble, nickel;
esmInit(() => {
  marble = reactCompilerRuntime();
  ensureComposerEsm_P5_Init();
  AppIconBO();
  lemon();
})();
