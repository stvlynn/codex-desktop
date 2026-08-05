// Restored from ref/webview/assets/local-environments-settings-page-DsmByKKn.js
// Wave FZ — full polished body from `local-environments-settings-page-DsmByKKn/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 88/108).
// Careful split 2/3
/* split-lane-import-depth:1 */

/** split companion stub */
const Alpha: any = undefined;

/** split companion stub */
const EnsureComposerEsm_Wlt_Init: any = undefined;
import { Chatgpt3 } from "../../account/chatgpt3";
import { openInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { clampZoomPercent } from "../../artifact/clamp-zoom-percent";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Wdt_Init,
  ensureComposerEsm_Wlt_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  Navigate,
  useLocation,
  useMatch,
  useNavigate,
} from "../../boundaries/react-router-navigation";
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
import {
  initToolbarBreadcrumb,
  ToolbarBreadcrumb,
} from "../../ui/toolbar-breadcrumb";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { parseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import {
  ensurePersonalizationCInit as EnsurePersonalizationCInit,
  ensurePersonalizationJutInit,
  ensureSettingsGlyphRBInit,
} from "../../utils/wave-as-gap-ensure-inits";
import { pathsReferToSameWorkspaceResource } from "../../utils/workspace-path-keys";
import { toPosixPath } from "../../utils/workspace-paths";
import {
  localEnvironmentEditorA,
  localEnvironmentEditorG,
  localEnvironmentEditorI,
  localEnvironmentEditorL,
  localEnvironmentEditorN,
  localEnvironmentEditorO,
  localEnvironmentEditorR,
  localEnvironmentEditorT,
  localEnvironmentEditorU,
  localEnvironmentEditorUnderscore,
} from "../local-environment-editor";
import {
  ensureLocalEnvironmentWorkflowMessagesInit,
  localEnvironmentWorkflowMessages,
} from "../local-environment-workflow-messages";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  initSettingsRowDisclosure,
  SettingsRowDisclosure,
} from "../settings-row-disclosure";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";

// Cross-part stubs (same-package helpers live in sibling parts).
const AppInitialBA: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialYA: any = undefined;
const IntlProvider: any = undefined;
const _t: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const SetAccountVoiceAndInvalidateCatalog: any = undefined;
function delta(marble) {
  let {
      hostId,
      workspaceGroup,
      workspaceRoot,
      onCreateEnvironment,
      onSelectEnvironment,
    } = marble,
    nickel = useIntl(),
    onyx = {
      params: {
        hostId,
        workspaceRoot,
      },
      select: echo,
    };
  let {
      data = [],
      isLoading,
      isFetching,
      error,
      refetch,
    } = SIDEBAR_HIT_TEST_SELECTOR("local-environments", onyx),
    [pearl, quartz] = jade.useState(false),
    river = `local-environment-inherited-${jade.useId()}`,
    slate = !isLoading && !isFetching && error == null,
    timber = slate ? falcon(data, workspaceRoot) : null,
    umbra = timber?.projectEnvironments ?? [],
    violet = timber?.inheritedEnvironments ?? [],
    willow = toggleSortedIdList(umbra),
    xenon = workspaceGroup?.isCodexWorktree
      ? ProjectDropdownGlyphIcon
      : deferredConversationR,
    yellow,
    zinc,
    amber,
    basalt,
    cedar,
    daisy;
  daisy = bravo(workspaceRoot, workspaceGroup);
  amber = workspaceGroup?.repositoryData?.ownerRepo?.owner ?? null;
  basalt = isLoading || isFetching;
  zinc = error != null;
  yellow = nickel.formatMessage(
    {
      id: "settings.localEnvironments.workspaceSelect.addLabel",
      defaultMessage: "Add environment to {projectName}",
      description: "Aria label for add environment button",
    },
    {
      projectName: daisy,
    },
  );
  cedar = nickel.formatMessage(
    {
      id: "settings.localEnvironments.workspaceSelect.openProject",
      defaultMessage: "Open {projectName}",
      description: "Aria label for opening a project's default environment",
    },
    {
      projectName: daisy,
    },
  );
  let ember = cedar,
    flint = slate ? AppInitialYA(data, workspaceRoot) : null,
    garnet = nickel.formatMessage({
      id: "settings.localEnvironments.workspaceSelect.loadingLabel",
      defaultMessage: "Loading environment",
      description: "Label for environment row while loading",
    });
  let hazel = garnet,
    ivory = nickel.formatMessage({
      id: "settings.localEnvironments.workspaceSelect.errorLabel",
      defaultMessage: "Environment needs attention",
      description: "Label for environment row when environment data fails",
    });
  let jasper = ivory,
    kelp = pearl
      ? nickel.formatMessage({
          id: "settings.localEnvironments.workspaceSelect.inherited.hide",
          defaultMessage: "Hide inherited environments",
          description: "Aria label for hiding inherited local environments",
        })
      : nickel.formatMessage({
          id: "settings.localEnvironments.workspaceSelect.inherited.show",
          defaultMessage: "Show inherited environments",
          description: "Aria label for showing inherited local environments",
        });
  let lotus = kelp,
    mint = (
      <Alpha
        {...{
          className: "icon-sm text-token-text-secondary",
        }}
      />
    );
  let nova = mint,
    olive = <span className="block truncate">{daisy}</span>;
  let prism = olive,
    quill = (
      <EnsureComposerEsm_Wlt_Init
        {...{
          className: "icon-xs",
        }}
      />
    );
  let reef = (
      <ReadLoginRouteQuerySnapshot
        {...{
          className: "w-9 justify-center",
          "aria-label": yellow,
          color: "secondary",
          disabled: flint == null,
          size: "toolbar",
          onClick: () => {
            flint != null && onCreateEnvironment(workspaceRoot, flint);
          },
          children: quill,
        }}
      />
    ),
    _e = parseUrlOrFallback,
    sage =
      willow == null ? (
        <EnsurePersonalizationCInit
          {...{
            control: reef,
            description: amber,
            icon: nova,
            label: prism,
          }}
        />
      ) : (
        <SetAccountVoiceAndInvalidateCatalog
          {...{
            actions: reef,
            ariaLabel: ember,
            description: amber,
            icon: nova,
            label: prism,
            onClick: () => {
              onSelectEnvironment(workspaceRoot, willow);
            },
          }}
        />
      ),
    topaz = basalt ? (
      <EnsurePersonalizationCInit
        {...{
          control: null,
          icon: (
            <VSCODE_EDITOR_ID
              {...{
                className: "icon-xs",
              }}
            />
          ),
          label: hazel,
          size: "compact",
        }}
      />
    ) : zinc ? (
      <EnsurePersonalizationCInit
        {...{
          control: (
            <ReadLoginRouteQuerySnapshot
              {...{
                color: "secondary",
                size: "toolbar",
                onClick: () => {
                  refetch();
                },
                children: (
                  <MemoizedFormattedMessage
                    {...{
                      ...localEnvironmentWorkflowMessages.retry,
                    }}
                  />
                ),
              }}
            />
          ),
          label: (
            <span className="text-token-error-foreground" role="alert">
              {jasper}
            </span>
          ),
          size: "compact",
        }}
      />
    ) : (
      <>
        {umbra.map((item) => (
          <LocalEnvironmentsSettingsPageHelper10
            key={item.configPath}
            {...{
              environment: item,
              errorLabel: jasper,
              onSelectEnvironment: () => {
                onSelectEnvironment(workspaceRoot, item.configPath);
              },
            }}
          />
        ))}
        {violet.length > 0 ? (
          <SettingsRowDisclosure
            {...{
              content: violet.map((item) => (
                <LocalEnvironmentsSettingsPageHelper10
                  key={item.configPath}
                  {...{
                    environment: item,
                    errorLabel: jasper,
                    sourceFolderName: posixPathBasename(gamma(item.configPath)),
                    onSelectEnvironment: () => {
                      onSelectEnvironment(workspaceRoot, item.configPath);
                    },
                  }}
                />
              )),
              contentId: river,
              expanded: pearl,
              children: (
                <EnsurePersonalizationCInit
                  {...{
                    control: (
                      <ReadLoginRouteQuerySnapshot
                        {...{
                          "aria-controls": river,
                          "aria-expanded": pearl,
                          "aria-label": lotus,
                          color: "ghost",
                          size: "icon",
                          uniform: true,
                          onClick: () => {
                            quartz(!pearl);
                          },
                          children: (
                            <AppIconSft
                              {...{
                                className: IntlProvider(
                                  "icon-2xs text-token-input-placeholder-foreground transition-transform",
                                  pearl ? "rotate-0" : "-rotate-90",
                                ),
                              }}
                            />
                          ),
                        }}
                      />
                    ),
                    label: (
                      <MemoizedFormattedMessage
                        {...{
                          id: "settings.localEnvironments.workspaceSelect.inherited",
                          defaultMessage: "Inherited environments ({count})",
                          description:
                            "Accordion label for local environments inherited from parent folders",
                          values: {
                            count: violet.length,
                          },
                        }}
                      />
                    ),
                    size: "compact",
                  }}
                />
              ),
            }}
          />
        ) : null}
      </>
    ),
    ultra = (
      <_e
        {...{
          children: [sage, topaz],
        }}
      />
    );
  return (
    <div aria-label={daisy} role="listitem">
      {ultra}
    </div>
  );
}
function echo(vapor) {
  return vapor.environments;
}
function LocalEnvironmentsSettingsPageHelper10(wheat) {
  let { environment, errorLabel, sourceFolderName, onSelectEnvironment } =
      wheat,
    yarn = useIntl(),
    zephyr,
    acorn,
    bloom,
    coral,
    drift;
  {
    zephyr = posixPathBasename(environment.configPath);
    let knoll =
      environment.type === "success" &&
      environment.environment?.name != null &&
      environment.environment.name.length > 0;
    acorn = knoll ? environment.environment.name : zephyr;
    coral = environment.type === "error";
    bloom = coral || (knoll && zephyr !== acorn) ? zephyr : null;
    let lunar = coral ? zephyr : acorn;
    drift =
      sourceFolderName == null
        ? yarn.formatMessage(
            {
              id: "settings.localEnvironments.workspaceSelect.viewAction",
              defaultMessage: "View {environmentName}",
              description: "Action label to view a local environment",
            },
            {
              environmentName: lunar,
            },
          )
        : yarn.formatMessage(
            {
              id: "settings.localEnvironments.workspaceSelect.viewInheritedAction",
              defaultMessage: "View {environmentName} from {sourceFolderName}",
              description:
                "Action label to view a local environment inherited from a parent folder",
            },
            {
              environmentName: lunar,
              sourceFolderName,
            },
          );
  }
  let eagle = drift,
    frost =
      sourceFolderName == null ? (
        bloom
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "settings.localEnvironments.workspaceSelect.inheritedSource",
            defaultMessage: "From {sourceFolderName} · {fileName}",
            description:
              "Description identifying the source folder and file for an inherited local environment",
            values: {
              fileName: zephyr,
              sourceFolderName,
            },
          }}
        />
      );
  let glide = coral ? "text-token-error-foreground" : undefined,
    honey = coral ? errorLabel : acorn,
    iris = <span className={glide}>{honey}</span>;
  let jewel = (
    <AppIconSft
      {...{
        className:
          "icon-2xs -rotate-90 text-token-input-placeholder-foreground",
      }}
    />
  );
  return (
    <SetAccountVoiceAndInvalidateCatalog
      {...{
        ariaLabel: eagle,
        description: frost,
        label: iris,
        onClick: onSelectEnvironment,
        trailing: jewel,
      }}
    />
  );
}
function falcon(moss, north) {
  let orbit = [],
    pine = [];
  for (let quest of moss)
    pathsReferToSameWorkspaceResource(gamma(quest.configPath), north)
      ? orbit.push(quest)
      : pine.push(quest);
  return {
    projectEnvironments: orbit,
    inheritedEnvironments: pine,
  };
}
function gamma(ridge) {
  let storm = toPosixPath(ridge),
    tide = indigo.default.posix.dirname(storm),
    unity = indigo.default.posix.dirname(tide);
  return indigo.default.posix.basename(tide) !== "environments" ||
    indigo.default.posix.basename(unity) !== ".codex"
    ? storm
    : indigo.default.posix.dirname(unity);
}
var harbor,
  indigo,
  jade,
  kite,
  lemon = esmInit(() => {
    harbor = reactCompilerRuntime();
    indigo = commonJsInit(ght(), 1);
    ensureComposerEsm_Tft_Init();
    jade = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Sut_Init();
    ensureAppIconSftInit();
    isRemoteControlConnectionFailedError();
    ensureSkillsPageHelpersInit();
    ensureSettingsGlyphRBInit();
    ensureLocalEnvironmentWorkflowMessagesInit();
    copper();
    codexCommandTheme();
    useGateEnabledWithAccountData();
    AppInitialVC();
    initSettingsRowDisclosure();
    AppInitialFC();
    AppInitialBA();
    ensureComposerEsm_Wdt_Init();
    scrollAppActionTargetTo();
    _t();
  });
