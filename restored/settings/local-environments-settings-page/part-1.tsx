// Restored from ref/webview/assets/local-environments-settings-page-DsmByKKn.js
// Wave FZ — full polished body from `local-environments-settings-page-DsmByKKn/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 88/108).
// Careful split 1/3
/* split-lane-import-depth:1 */

/** split companion stub */
const LocalEnvironmentEditorG: any = undefined;
/** split companion stub */
const LocalEnvironmentEditorR: any = undefined;
import { Chatgpt3 } from "../../account/chatgpt3";
import { openInBrowser } from "../../account/open-in-browser";
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
import { isIndeterminate as IsIndeterminate } from "../../utils/is-indeterminate";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit, ensurePersonalizationJutInit, ensureSettingsGlyphRBInit } from "../../utils/wave-as-gap-ensure-inits";
import { pathsReferToSameWorkspaceResource } from "../../utils/workspace-path-keys";
import { toPosixPath } from "../../utils/workspace-paths";
import { localEnvironmentEditorA as LocalEnvironmentEditorA, localEnvironmentEditorG, localEnvironmentEditorI, localEnvironmentEditorL, localEnvironmentEditorN, localEnvironmentEditorO, localEnvironmentEditorR, localEnvironmentEditorT, localEnvironmentEditorU, localEnvironmentEditorUnderscore } from "../local-environment-editor";
import { ensureLocalEnvironmentWorkflowMessagesInit, localEnvironmentWorkflowMessages } from "../local-environment-workflow-messages";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { initSettingsRowDisclosure, SettingsRowDisclosure } from "../settings-row-disclosure";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";

// Cross-part stubs (same-package helpers live in sibling parts).
const LocalEnvironmentsSettingsPageHelper8: any = undefined;
const AppInitialBA: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:filterProjectsByHost@environments/filter-projects-by-host.ts) */
const AppInitialCO: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_FZ_Init@boundaries/composer-esm-inits.ts) */
const AppInitialFZ: any = undefined;
/** Wave FZ unresolved companion (missing-export:voice/set-account-voice-and-invalidate-catalog.ts) */
const setAccountVoiceAndInvalidateCatalog: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useChronicleSettingsSection@settings/use-chronicle-settings-section.ts) */
const AppInitialL: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/remote-hosted-pip-hidden-thread-ids.ts) */
const remoteHostedPipHiddenThreadIds: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredAccountNi@account/deferred-account-ni.ts) */
const AppInitialNi: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:remainingRemoteControlConnections@remote-control/remote-control-connection-sets.ts) */
const AppInitialNQ: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureGpuTearingDebugSettingsInit@settings/gpu-tearing-debug-settings.ts) */
const AppInitialO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:buildVscodeQueryKey@settings/vscode-query-key.ts) */
const AppInitialQut: any = undefined;
/** Wave FZ unresolved companion (missing-export:environments/deferred-environments-tb2.tsx) */
const DeferredEnvironmentsTB2: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useSearchParams@boundaries/react-router-navigation.tsx) */
const AppInitialW5: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiYA@ui/deferred-ui-ya.tsx) */
const AppInitialYA: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
function alpha(onyx, pearl) {
  return pearl?.label ?? AppInitialL(onyx) ?? onyx;
}
var bravo = esmInit(() => {
  deferredUiU();
});
function LocalEnvironmentsSettingsPageHelper2(quartz) {
  let {
      actions,
      lifecycle,
      scriptType
    } = quartz,
    river = useIntl(),
    [slate, timber] = delta.useState("default"),
    umbra = lifecycle?.script ?? "",
    violet = slate === "default" ? null : lifecycle?.[slate]?.script ?? "",
    willow = violet === "" && umbra.length > 0,
    xenon = violet == null || willow ? umbra : violet,
    yellow = umbra.length > 0 || SUPPORTED_NODE_PLATFORMS.some(item => !!lifecycle?.[item]?.script);
  let zinc = yellow,
    amber = scriptType === "setup",
    basalt,
    cedar;
  basalt = amber ? <MemoizedFormattedMessage {...{
    ...localEnvironmentEditorU.setupScript
  }} /> : <MemoizedFormattedMessage {...{
    ...localEnvironmentEditorU.cleanupScript
  }} />;
  cedar = amber ? <MemoizedFormattedMessage {...{
    id: "settings.localEnvironments.environment.setup.description",
    defaultMessage: "This script runs on worktree creation",
    description: "Description for environment setup script summary"
  }} /> : <MemoizedFormattedMessage {...{
    ...localEnvironmentEditorU.cleanupDescription
  }} />;
  let daisy = <UseChromeAndCodeThemeSync.Header {...{
    title: basalt,
    subtitle: cedar,
    actions
  }} />;
  let ember = zinc ? <LocalEnvironmentEditorA {...{
    leadingOption: "default",
    selectedId: slate,
    onSelect: timber,
    ariaLabel: amber ? river.formatMessage(localEnvironmentEditorU.setupPlatformSelector) : river.formatMessage(localEnvironmentEditorU.cleanupPlatformSelector)
  }} /> : null;
  let flint = slate !== "default" && willow ? <p className="text-sm text-token-text-secondary">
        {<MemoizedFormattedMessage {...{
      id: "settings.localEnvironments.environment.platformUsesDefault",
      defaultMessage: "No platform override. Using the default script",
      description: "Message shown when a platform uses the default local environment script"
    }} />}
      </p> : null;
  let garnet = xenon.length > 0 ? <IsIndeterminate {...{
    language: slate === "win32" ? "text" : "bash",
    content: xenon,
    shouldWrapCode: true,
    codeContainerClassName: "max-h-56"
  }} /> : <ParseUrlOrFallback {...{
    variant: "secondary",
    children: <EnsurePersonalizationCInit {...{
      label: slate === "default" || !zinc ? <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.environment.script.empty",
        defaultMessage: "No script configured",
        description: "Empty state for a local environment script"
      }} /> : <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.environment.platformScript.empty",
        defaultMessage: "No script configured for this platform",
        description: "Empty state for a local environment platform script"
      }} />,
      control: null,
      size: "compact"
    }} />
  }} />;
  let hazel = <UseChromeAndCodeThemeSync.Content {...{
    className: "gap-2",
    children: [ember, flint, garnet]
  }} />;
  return <UseChromeAndCodeThemeSync {...{
    className: "gap-2",
    children: [daisy, hazel]
  }} />;
}
var copper,
  delta,
  echo,
  falcon = esmInit(() => {
    copper = reactCompilerRuntime();
    strongMarkerFromOptions();
    delta = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    clampZoomPercent();
    localEnvironmentEditorL();
    localEnvironmentEditorO();
    codexCommandTheme();
    AppInitialVC();
    AppInitialFC();
  });
function gamma(ivory) {
  let {
      configExists,
      initialEnvironment,
      hasParseError,
      hasReadError
    } = ivory,
    jasper = initialEnvironment != null,
    kelp = initialEnvironment?.actions,
    lotus = !jasper || hasParseError || hasReadError ? <UseChromeAndCodeThemeSync {...{
      className: "gap-2",
      children: <UseChromeAndCodeThemeSync.Content {...{
        children: [configExists ? null : <ParseUrlOrFallback {...{
          children: <EnsurePersonalizationCInit {...{
            label: <MemoizedFormattedMessage {...{
              id: "settings.localEnvironments.environment.empty",
              defaultMessage: "No local environment is configured for this project yet",
              description: "Empty state when no local environment is configured"
            }} />,
            control: null
          }} />
        }} />, hasParseError ? <div className="mt-2 text-sm text-token-error-foreground">
                        {<MemoizedFormattedMessage {...{
            ...localEnvironmentWorkflowMessages.parseError
          }} />}
                      </div> : null, hasReadError ? <div className="mt-2 text-sm text-token-error-foreground">
                        {<MemoizedFormattedMessage {...{
            ...localEnvironmentWorkflowMessages.readError
          }} />}
                      </div> : null]
      }} />
    }} /> : null;
  let mint = jasper ? <>
        {<LocalEnvironmentsSettingsPageHelper2 {...{
      actions: <LocalEnvironmentEditorR {...{}} />,
      lifecycle: initialEnvironment.setup,
      scriptType: "setup"
    }} />}
        {<LocalEnvironmentsSettingsPageHelper2 {...{
      lifecycle: initialEnvironment.cleanup,
      scriptType: "cleanup"
    }} />}
        {<UseChromeAndCodeThemeSync {...{
      className: "gap-2",
      children: [<UseChromeAndCodeThemeSync.Header {...{
        title: <MemoizedFormattedMessage {...{
          id: "settings.localEnvironments.environment.actionsLabel",
          defaultMessage: "Actions",
          description: "Label for actions count in local environment summary"
        }} />,
        subtitle: <MemoizedFormattedMessage {...{
          ...localEnvironmentEditorU.actionsDescription
        }} />
      }} />, <UseChromeAndCodeThemeSync.Content {...{
        children: <ParseUrlOrFallback {...{
          children: kelp != null && kelp.length > 0 ? kelp.map(harbor) : <EnsurePersonalizationCInit {...{
            label: <MemoizedFormattedMessage {...{
              ...localEnvironmentEditorU.actionsEmpty
            }} />,
            control: null
          }} />
        }} />
      }} />]
    }} />}
      </> : null;
  return <>
      {lotus}
      {mint}
    </>;
}
function harbor(nova, olive) {
  return <LocalEnvironmentsSettingsPageHelper5 key={`${nova.name}-${olive}`} {...{
    action: nova
  }} />;
}
function LocalEnvironmentsSettingsPageHelper5(prism) {
  let {
      action
    } = prism,
    [quill, reef] = jade.useState(false),
    sage = jade.useId(),
    topaz;
  {
    let eagle;
    eagle = /\r?\n/;
    topaz = action.command.trimEnd().split(eagle);
  }
  let ultra = topaz,
    vapor = ultra.length > 1,
    wheat = vapor ? <EnsurePersonalizationCInit {...{
      label: null,
      control: <code className="block w-full font-mono text-xs break-all whitespace-pre-wrap" dir="ltr">
                {action.command}
              </code>,
      variant: "nested"
    }} /> : null;
  let yarn = vapor && quill,
    zephyr = action.icon ?? "tool",
    acorn = <span className="text-token-text-secondary">
        {<LocalEnvironmentEditorG {...{
        icon: zephyr
      }} />}
      </span>;
  let bloom = <code className="font-mono text-wrap break-all" dir="ltr">
      {ultra[0]}
    </code>;
  let coral = vapor ? <ReadLoginRouteQuerySnapshot {...{
    "aria-controls": sage,
    "aria-expanded": quill,
    color: "ghost",
    size: "icon",
    uniform: true,
    onClick: () => {
      reef(!quill);
    },
    children: [<span className="sr-only">
              {quill ? <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.environment.action.hideCommand",
        defaultMessage: "Hide full command for {actionName}",
        description: "Accessible label for collapsing a local environment action command",
        values: {
          actionName: action.name
        }
      }} /> : <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.environment.action.showCommand",
        defaultMessage: "Show full command for {actionName}",
        description: "Accessible label for expanding a local environment action command",
        values: {
          actionName: action.name
        }
      }} />}
            </span>, <AppIconSft {...{
      "aria-hidden": true,
      className: IntlProvider("icon-2xs shrink-0 text-token-input-placeholder-foreground transition-transform", quill ? "rotate-0" : "-rotate-90")
    }} />]
  }} /> : null;
  let drift = <EnsurePersonalizationCInit {...{
    icon: acorn,
    label: action.name,
    description: bloom,
    control: coral
  }} />;
  return <SettingsRowDisclosure {...{
    content: wheat,
    contentId: sage,
    expanded: yarn,
    children: drift
  }} />;
}
var indigo,
  jade,
  kite,
  lemon = esmInit(() => {
    indigo = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    jade = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureAppIconSftInit();
    localEnvironmentEditorUnderscore();
    falcon();
    localEnvironmentEditorL();
    localEnvironmentEditorI();
    ensureLocalEnvironmentWorkflowMessagesInit();
    codexCommandTheme();
    AppInitialVC();
    initSettingsRowDisclosure();
    AppInitialFC();
  }),
  marble,
  _t = esmInit(() => {
    ensureIntlFormattersInit();
    marble = identity({
      selectProject: {
        id: "settings.localEnvironments.workspaceSelect.title",
        defaultMessage: "Select a project",
        description: "Title for the workspace selection step"
      },
      workspaceSelectDescription: {
        id: "settings.localEnvironments.workspaceSelect.description",
        defaultMessage: "Local environments tell ChatGPT how to set up worktrees for a project. {learnMore}",
        description: "Description for the workspace selection step"
      },
      workspaceSelectLearnMore: {
        id: "settings.localEnvironments.workspaceSelect.learnMore",
        defaultMessage: "Learn more.",
        description: "Link label for local environments docs"
      },
      editEnvironment: {
        id: "settings.localEnvironments.environment.editAction",
        defaultMessage: "Edit",
        description: "Button label to edit a local environment"
      },
      createEnvironment: {
        id: "settings.localEnvironments.environment.create",
        defaultMessage: "Create local environment",
        description: "Button label to create a local environment"
      }
    });
  });
function nickel(frost) {
  let {
      groups,
      hasError,
      hostId,
      isLoading,
      workspaceRoots,
      onAddWorkspace,
      onCreateEnvironment,
      onRetry,
      onSelectEnvironment
    } = frost,
    glide = <MemoizedFormattedMessage {...{
      ...marble.selectProject
    }} />;
  let honey = <MemoizedFormattedMessage {...{
    id: "settings.localEnvironments.workspace.add",
    defaultMessage: "Add project",
    description: "Button label to add a new workspace"
  }} />;
  let iris = <UseChromeAndCodeThemeSync.Header {...{
    title: glide,
    actions: <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      size: "toolbar",
      onClick: onAddWorkspace,
      children: honey
    }} />
  }} />;
  let jewel = <UseChromeAndCodeThemeSync.Content {...{
    children: <div className="flex flex-col gap-2">
            {<LocalEnvironmentsSettingsPageHelper7 {...{
        groups,
        hasError,
        hostId,
        isLoading,
        workspaceRoots,
        onAddWorkspace,
        onCreateEnvironment,
        onRetry,
        onSelectEnvironment
      }} />}
          </div>
  }} />;
  return <UseChromeAndCodeThemeSync {...{
    children: [iris, jewel]
  }} />;
}
function LocalEnvironmentsSettingsPageHelper7(knoll) {
  let {
      groups,
      hasError,
      hostId,
      isLoading,
      workspaceRoots,
      onAddWorkspace,
      onCreateEnvironment,
      onRetry,
      onSelectEnvironment
    } = knoll,
    lunar = useIntl();
  if (isLoading) {
    let orbit;
    return <AppInitialNi>
        {<MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.workspaceSelect.loading",
        defaultMessage: "Loading projects…",
        description: "Loading message while workspace options are fetched"
      }} />}
      </AppInitialNi>;
  }
  if (hasError) {
    let pine = <MemoizedFormattedMessage {...{
      ...localEnvironmentWorkflowMessages.retry
    }} />;
    let quest = <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      size: "toolbar",
      onClick: onRetry,
      children: pine
    }} />;
    let ridge = <span className="text-token-error-foreground" role="alert">
        {<MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.workspaceSelect.error",
        defaultMessage: "Could not load projects",
        description: "Error shown when local environment projects cannot be loaded"
      }} />}
      </span>;
    let storm;
    return <ParseUrlOrFallback {...{
      children: <EnsurePersonalizationCInit {...{
        control: quest,
        label: ridge
      }} />
    }} />;
  }
  if (workspaceRoots.length === 0) {
    let tide = <MemoizedFormattedMessage {...{
      id: "settings.localEnvironments.workspaceSelect.empty",
      defaultMessage: "No projects yet. Add one to configure local environments.",
      description: "Empty state when no workspace roots are available"
    }} />;
    let unity = <MemoizedFormattedMessage {...{
      id: "settings.localEnvironments.workspace.add",
      defaultMessage: "Add project",
      description: "Button label to add a new workspace"
    }} />;
    let vale;
    return <ParseUrlOrFallback {...{
      children: <div className="flex flex-col gap-3 p-3 text-sm text-token-text-secondary">
              {tide}
              <div>
                {<ReadLoginRouteQuerySnapshot {...{
            color: "primary",
            size: "toolbar",
            onClick: onAddWorkspace,
            children: unity
          }} />}
              </div>
            </div>
    }} />;
  }
  let moss = lunar.formatMessage({
    id: "settings.localEnvironments.workspaceSelect.listLabel",
    defaultMessage: "Available projects",
    description: "Aria label for the workspace selection list"
  });
  let north;
  {
    let wave;
    wave = apex => {
      let brook = groups.find(item => item.path != null && pathsReferToSameWorkspaceResource(item.path, apex)) ?? null;
      return <LocalEnvironmentsSettingsPageHelper8 key={apex} {...{
        hostId,
        workspaceGroup: brook,
        workspaceRoot: apex,
        onCreateEnvironment,
        onSelectEnvironment
      }} />;
    };
    north = workspaceRoots.map(wave);
  }
  return <div className="flex flex-col gap-3" role="list" aria-label={moss}>
      {north}
    </div>;
}
