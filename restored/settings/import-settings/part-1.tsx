// Restored from ref/webview/assets/import-settings-DUWst0h6.js
// Wave FX — full polished body from `import-settings-DUWst0h6/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 29 (verified 66/95).
// AST split 1/2
/* split-lane-import-depth:1 */

import { openInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexProfileEditAction } from "../../analytics/codex-profile-edit-action";
import { logProductEvent } from "../../analytics/log-product-event";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { chatgpt2 } from "../../browser/chatgpt2";
import { INLINE_MENTION_GROUP_CLASS } from "../../composer/inline-mention-class-names";
import { APP_HOST_UPDATE_STATUS_PATH } from "../../config/app-host-update-status-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { applyActive as ApplyActive } from "../../conversation/apply-active";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { LOCAL_ENVIRONMENT_CONFIG_PATH_KEY } from "../../env/codex-path-env-keys";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { FormattedDate } from "../../i18n/formatted-date";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { AppBrandMark } from "../../onboarding/app-brand-mark";
import { useOnboardingPluginPlanEffect } from "../../onboarding/use-onboarding-plugin-plan-effect";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { claudeCode } from "../../ui/claude-code";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { resetStoreAtomListVs } from "../../utils/set-store-atom-value";
import { valueOrEmptyString as ValueOrEmptyString } from "../../utils/value-or-empty-string";
import {
  ensureImportSettingsCLInit,
  ensureImportSettingsCsInit,
  ensureImportSettingsDpInit,
  ensureImportSettingsDsInit,
  ensureImportSettingsGctInit,
  ensurePersonalizationCInit as EnsurePersonalizationCInit,
} from "../../utils/wave-as-gap-ensure-inits";
import { CodeThemePreviewGlyph } from "../code-theme-preview-glyph";
import { EXTERNAL_AGENT_CONFIG_IMPORT_SETTINGS_ID } from "../external-agent-config-import-settings-id";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  initSettingsLoadingRow,
  SettingsLoadingRow,
} from "../settings-loading-row";
import {
  initSettingsRowDisclosure,
  SettingsRowDisclosure,
} from "../settings-row-disclosure";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
const AppInitialAs: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureImportSettingsB4Init@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialB4: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredOnboardingBs@onboarding/deferred-onboarding-bs.ts) */
const AppInitialBs: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureImportSettingsClInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialCl: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureImportSettingsEsInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialEs: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiHn@ui/deferred-ui-hn.tsx) */
const AppInitialHn: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiHs@ui/deferred-ui-hs.ts) */
const AppInitialHs: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-js.ts) */
const deferredUiJs: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-ks.ts) */
const deferredUiKs: any = undefined;
/** Wave FX unresolved companion (jsx-collision:codexThemeV1@settings/codex-theme-v1.ts) */
const AppInitialLn: any = undefined;
/** Wave FX unresolved companion (jsx-collision:formatExternalAgentImportProviderLabel@onboarding/format-external-agent-import-provider-label.ts) */
const AppInitialMs: any = undefined;
/** Wave FX unresolved companion (missing-export:desktop/mcpserverconfig.tsx) */
const AppInitialNs: any = undefined;
/** Wave FX unresolved companion (jsx-collision:mcpServersNeedingLoginFromImport@onboarding/mcp-servers-needing-login-from-import.ts) */
const AppInitialOs: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureEmptyStateHeroIconInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialPn: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureConfigQueryAtomsInit: any = undefined;
/** Wave FX unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FX unresolved companion (jsx-collision:thirdPartyAgentIdsForCursorGate@plugins/third-party-agent-ids-for-cursor-gate.ts) */
const AppInitialSs: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredT@ui/deferred-t.ts) */
const AppInitialT: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureHooksSettingsRouteInit@settings/hooks-format-helpers.ts) */
const AppInitialTl: any = undefined;
/** Wave FX unresolved companion (jsx-collision:summarizeImportItemTypes@onboarding/summarize-import-item-types.ts) */
const AppInitialTs: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiWs@ui/deferred-ui-ws.ts) */
const AppInitialWs: any = undefined;
/** Wave FX unresolved companion (jsx-collision:localProjectRootsAtom@settings/hooks-query-atoms.ts) */
const AppInitialX4: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-y4.ts) */
const deferredHostsY4: any = undefined;
/** Wave FX unresolved companion (missing-export:conversation/microsoft.ts) */
const microsoft: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-z4.ts) */
const deferredHostsZ4: any = undefined;
function ImportSettingsHelper1(timber) {
  let { isImportContextLoading, latestSuccessfulImportAtMs, workspaceRoots } =
      timber,
    umbra = CodexPluginActionType(appScopeAtom),
    violet = useIntl(),
    willow = echo.useRef(null),
    xenon = CodexPluginActionResult(AppInitialAs),
    yellow = NativeContextMenuSurface(AppInitialBs),
    zinc = AppInitialSs(yellow);
  let amber = zinc,
    basalt = microsoft(),
    cedar = {
      enabled: true,
      hostId: LOCAL_HOST_ID,
      providers: amber,
      sessionLimits: basalt,
      workspaceRoots,
    };
  let {
      choices,
      detectedItems,
      isDetecting,
      isDetectionError,
      refetchDetectedItems,
      unsupportedProjects,
    } = useOnboardingPluginPlanEffect(cedar),
    daisy = choices.length === 0 ? null : AppInitialLn(violet, choices),
    ember = AppInitialPn(detectedItems),
    flint = xenon?.hostId === LOCAL_HOST_ID,
    garnet =
      flint && xenon != null
        ? CodeThemePreviewGlyph({
            detectedItems: xenon.items,
            intl: violet,
            providerIds: AppInitialPn(xenon.items),
          })
        : null,
    hazel = isDetecting || isImportContextLoading,
    ivory = (wheat) => AppInitialMs(violet, wheat);
  let jasper = (
      <ValueOrEmptyString
        {...{
          type: "conjunction",
          value: ember.map(ivory),
        }}
      />
    ),
    kelp = () => {
      daisy != null &&
        (logProductEvent(umbra, CodexProfileEditAction, {
          source: "settings",
          action: "shown",
          ...AppBrandMark(daisy, APP_HOST_UPDATE_STATUS_PATH(daisy), ember),
        }),
        claudeCode(umbra, {
          hostId: LOCAL_HOST_ID,
          items: detectedItems,
          restoreFocus: () => willow.current?.focus(),
          sessionLimits: basalt,
          source: "settings",
        }));
    },
    lotus = () => {
      refetchDetectedItems();
    };
  let mint = lotus,
    nova = UseChromeAndCodeThemeSync,
    olive = EXTERNAL_AGENT_CONFIG_IMPORT_SETTINGS_ID,
    prism = (
      <UseChromeAndCodeThemeSync.Header
        {...{
          title: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.agent.importSettings.sectionTitle.v2",
                defaultMessage: "Import from another AI app",
                description: "Heading for importing setup from another AI app",
              }}
            />
          ),
        }}
      />
    );
  let Quill = UseChromeAndCodeThemeSync,
    reef = ParseUrlOrFallback,
    sage = flint ? (
      <EnsurePersonalizationCInit
        {...{
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.agent.importSettings.importingLabel",
                defaultMessage: "Import in progress",
                description:
                  "Settings row label shown while an external agent import is running",
              }}
            />
          ),
          description:
            garnet == null ? null : (
              <ValueOrEmptyString
                {...{
                  type: "unit",
                  value: garnet.customizeItems.map(copper),
                }}
              />
            ),
          control: (
            <VSCODE_EDITOR_ID
              {...{
                className: "icon-xs",
              }}
            />
          ),
        }}
      />
    ) : hazel ? (
      <EnsurePersonalizationCInit
        {...{
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.agent.importSettings.loadingLabel.v2",
                defaultMessage: "Checking for imports",
                description:
                  "Label shown while external agent setup is loading",
              }}
            />
          ),
          description: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.agent.importSettings.detectingDescription.v2",
                defaultMessage:
                  "Looking for compatible setup, projects, and recent chats",
                description:
                  "Description shown while checking for external agent setup",
              }}
            />
          ),
          control: (
            <VSCODE_EDITOR_ID
              {...{
                className: "icon-xs",
              }}
            />
          ),
        }}
      />
    ) : isDetectionError ? (
      <EnsurePersonalizationCInit
        {...{
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.import.error.label",
                defaultMessage: "Couldn't check for imports",
                description:
                  "Settings row label shown when external agent setup detection fails",
              }}
            />
          ),
          description: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.import.error.description",
                defaultMessage:
                  "Try again to look for compatible setup, projects, and recent chats",
                description:
                  "Settings row description shown when external agent setup detection fails",
              }}
            />
          ),
          control: (
            <ReadLoginRouteQuerySnapshot
              {...{
                color: "secondary",
                size: "toolbar",
                onClick: mint,
                children: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.import.error.retry",
                      defaultMessage: "Retry",
                      description:
                        "Button label to retry external agent setup detection",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    ) : daisy == null &&
      unsupportedProjects.length === 0 &&
      latestSuccessfulImportAtMs == null ? (
      <EnsurePersonalizationCInit
        {...{
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.import.empty.label",
                defaultMessage: "Import from other AI apps",
                description:
                  "Settings row label shown when no external agent setup can currently be imported",
              }}
            />
          ),
          description: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.import.empty.description",
                defaultMessage: "No importable setup found",
                description:
                  "Settings row description shown when no external agent setup can currently be imported",
              }}
            />
          ),
          control: (
            <ReadLoginRouteQuerySnapshot
              {...{
                color: "secondary",
                size: "toolbar",
                disabled: true,
                children: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.import.empty.button",
                      defaultMessage: "Import",
                      description:
                        "Disabled import button shown when no external agent setup can currently be imported",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    ) : daisy == null && unsupportedProjects.length === 0 ? (
      <EnsurePersonalizationCInit
        {...{
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.import.empty.noNewItems",
                defaultMessage: "No new items found",
                description:
                  "Settings row label shown when a previous import exists and no additional external agent setup is available",
              }}
            />
          ),
          description:
            latestSuccessfulImportAtMs == null ? null : (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.empty.lastImported",
                  defaultMessage: "Last imported {relativeTime} ago",
                  description:
                    "Description showing when another local agent setup was last imported",
                  values: {
                    relativeTime: (
                      <INLINE_MENTION_GROUP_CLASS
                        key={"last-imported-at"}
                        {...{
                          dateString: new Date(
                            latestSuccessfulImportAtMs,
                          ).toISOString(),
                        }}
                      />
                    ),
                  },
                }}
              />
            ),
          control: (
            <ReadLoginRouteQuerySnapshot
              {...{
                color: "secondary",
                size: "toolbar",
                onClick: mint,
                children: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.import.empty.checkAgain",
                      defaultMessage: "Check again",
                      description:
                        "Button label to check again for importable external agent setup",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    ) : daisy == null ? null : (
      <EnsurePersonalizationCInit
        {...{
          label:
            latestSuccessfulImportAtMs == null ? (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.agent.importSettings.detectedLabel",
                  defaultMessage: "Found setup from {providers}",
                  description:
                    "Settings row label shown when importable setup is found in detected external agent apps",
                  values: {
                    providers: jasper,
                  },
                }}
              />
            ) : (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.agent.importSettings.newItemsLabel",
                  defaultMessage: "New items found in {providers}",
                  description:
                    "Settings row label shown when additional setup is available from detected external agent apps",
                  values: {
                    providers: jasper,
                  },
                }}
              />
            ),
          description: (
            <ValueOrEmptyString
              {...{
                type: "unit",
                value: daisy.customizeItems.map(bravo),
              }}
            />
          ),
          control: (
            <ReadLoginRouteQuerySnapshot
              {...{
                ref: willow,
                color: "primary",
                size: "toolbar",
                onClick: kelp,
                children:
                  latestSuccessfulImportAtMs == null ? (
                    <MemoizedFormattedMessage
                      {...{
                        id: "settings.agent.importSettings.reviewAndImport",
                        defaultMessage: "Review and import",
                        description:
                          "Button label to review detected external agent setup before importing",
                      }}
                    />
                  ) : (
                    <MemoizedFormattedMessage
                      {...{
                        id: "settings.agent.importSettings.reviewNewItems",
                        defaultMessage: "Review new items",
                        description:
                          "Button label to review newly detected external agent setup",
                      }}
                    />
                  ),
              }}
            />
          ),
        }}
      />
    ),
    topaz =
      !hazel && !isDetectionError && unsupportedProjects.length > 0 ? (
        <EnsurePersonalizationCInit
          {...{
            icon: (
              <ApplyActive
                {...{
                  className:
                    "icon-2xs shrink-0 text-token-editor-warning-foreground",
                }}
              />
            ),
            label: (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.unsupportedProjects.label",
                  defaultMessage:
                    "{count, plural, one {# project can't be imported} other {# projects can't be imported}}",
                  description:
                    "Settings row label shown when detected external agent projects cannot be imported",
                  values: {
                    count: unsupportedProjects.length,
                  },
                }}
              />
            ),
            description: (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.unsupportedProjects.description",
                  defaultMessage:
                    "{projects} {count, plural, one {uses} other {use}} an unsupported project configuration",
                  description:
                    "Settings row description listing detected external agent projects that cannot be imported",
                  values: {
                    count: unsupportedProjects.length,
                    projects: (
                      <ValueOrEmptyString
                        key={"unsupported-projects"}
                        {...{
                          type: "conjunction",
                          value: unsupportedProjects.map(alpha),
                        }}
                      />
                    ),
                  },
                }}
              />
            ),
            control: null,
          }}
        />
      ) : null;
  let ultra = (
    <ParseUrlOrFallback
      {...{
        children: [sage, topaz],
      }}
    />
  );
  let vapor = (
    <Quill.Content
      {...{
        children: ultra,
      }}
    />
  );
  return (
    <UseChromeAndCodeThemeSync
      {...{
        id: olive,
        children: [prism, vapor],
      }}
    />
  );
}
function alpha(yarn) {
  return yarn.name;
}
function bravo(zephyr) {
  return zephyr.title;
}
function copper(acorn) {
  return acorn.title;
}
var delta,
  echo,
  falcon,
  gamma = esmInit(() => {
    delta = reactCompilerRuntime();
    ensureComposerEsm_Utt_Init();
    ensureComposerEsm_MT_Init();
    echo = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureImportSettingsCLInit();
    ensureComposerEsm_Sut_Init();
    AppInitialT();
    deferredUiKs();
    ensureImportSettingsDpInit();
    AppInitialNs();
    ensureImportSettingsCsInit();
    resetStoreAtomListVs();
    AppInitialHs();
    buildCodexDesktopRequestHeaders();
    AppInitialHn();
    ensureComposerEsm_K9_Init();
    ensureAppScopeInit();
    codexCommandTheme();
    AppInitialVC();
    AppInitialFC();
    ensureAppShellAtomsInit();
    ensureSkillsPageHelpersInit();
  });
function $e(bloom) {
  let { category, history } = bloom,
    coral = useNavigate(),
    drift,
    eagle;
  {
    let glide = (moss) => moss.itemType === category.itemType;
    let honey = history.successes.filter(glide),
      iris = (north) => north.itemType === category.itemType;
    let jewel = history.failures.filter(iris),
      knoll;
    knoll = (event, orbit) => (
      <ImportSettingsHelper5
        key={`success-${orbit}`}
        {...{
          itemType: category.itemType,
          label: event.source,
          status: "success",
          target: event.target,
        }}
      />
    );
    drift = honey.map(knoll);
    let lunar;
    lunar = (pine, quest) => (
      <ImportSettingsHelper5
        key={`failure-${quest}`}
        {...{
          itemType: category.itemType,
          failureMessage: pine.message,
          label: pine.source,
          status: "error",
        }}
      />
    );
    eagle = jewel.map(lunar);
  }
  let frost =
    category.itemType === "HOOKS" ? (
      <EnsurePersonalizationCInit
        {...{
          variant: "nested",
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.import.history.details.reviewHooks",
                defaultMessage: "Manage imported hooks",
                description:
                  "Label for the inline action to manage imported hooks",
              }}
            />
          ),
          control: (
            <ReadLoginRouteQuerySnapshot
              {...{
                color: "ghost",
                onClick: () => {
                  coral(
                    AppInitialCl({
                      hostId: LOCAL_HOST_ID,
                    }),
                  );
                },
                children: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.import.history.details.openHooks",
                      defaultMessage: "Open hooks settings",
                      description:
                        "Button label to open hooks settings from imported hooks",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    ) : null;
  return (
    <>
      {drift}
      {eagle}
      {frost}
    </>
  );
}
function ImportSettingsHelper5(event) {
  let ridge = useIntl(),
    storm = useNavigate(),
    tide = null;
  if (event.status === "error") tide = event.failureMessage;
  else if (event.target == null) {
    let dusk;
    dusk = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.details.imported",
          defaultMessage: "Imported",
          description:
            "Fallback destination label for a successful import history detail item",
        }}
      />
    );
    tide = dusk;
  } else event.target !== event.label && (tide = event.target);
  let unity =
    event.status === "success" && event.label != null
      ? harbor(event.itemType, event.label, event.target)
      : null;
  let vale = unity,
    wave =
      event.label == null ? (
        <MemoizedFormattedMessage
          {...{
            id: "settings.import.history.details.unknownItem",
            defaultMessage: "Imported item",
            description:
              "Fallback label for an import history detail item without a source name",
          }}
        />
      ) : (
        event.label
      );
  let apex = wave,
    brook =
      event.status === "error" ? (
        <ApplyActive
          {...{
            className: "icon-2xs shrink-0 text-token-editor-error-foreground",
          }}
        />
      ) : null;
  let cliff =
    vale == null ? null : (
      <ReadLoginRouteQuerySnapshot
        {...{
          "aria-label": ridge.formatMessage(
            {
              id: "settings.import.history.details.openItem",
              defaultMessage: "Open {item}",
              description: "Accessible label to open an imported item",
            },
            {
              item: event.label,
            },
          ),
          color: "ghost",
          onClick: () => {
            storm(vale, {
              state:
                event.itemType === "SKILLS" || event.itemType === "COMMANDS"
                  ? {
                      initialHostId: LOCAL_HOST_ID,
                      initialTab: "skills",
                    }
                  : undefined,
            });
          },
          children:
            event.itemType === "SKILLS" || event.itemType === "COMMANDS" ? (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.history.details.openInSkills",
                  defaultMessage: "Open in Skills",
                  description:
                    "Button label to open an imported skill or converted command in Skills",
                }}
              />
            ) : event.itemType === "MCP_SERVER_CONFIG" ? (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.history.details.openMcpSettings",
                  defaultMessage: "Open MCP settings",
                  description:
                    "Button label to open an imported MCP server in settings",
                }}
              />
            ) : event.itemType === "SESSIONS" ? (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.history.details.openChat",
                  defaultMessage: "Open chat",
                  description: "Button label to open an imported chat",
                }}
              />
            ) : (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.history.details.openPlugin",
                  defaultMessage: "Open plugin",
                  description: "Button label to open an imported plugin",
                }}
              />
            ),
        }}
      />
    );
  return (
    <EnsurePersonalizationCInit
      {...{
        variant: "nested",
        icon: brook,
        label: apex,
        description: tide,
        control: cliff,
      }}
    />
  );
}
function harbor(elm, fern, grove) {
  return elm === "SKILLS" || elm === "COMMANDS" || elm === "MCP_SERVER_CONFIG"
    ? `${elm === "MCP_SERVER_CONFIG" ? "/settings/mcp-settings" : "/skills"}?search=${encodeURIComponent(grove ?? fern)}`
    : elm === "SESSIONS" && grove != null
      ? AriaIconBadge(resolveScienceModelLabel(grove))
      : elm === "PLUGINS"
        ? LOCAL_ENVIRONMENT_CONFIG_PATH_KEY({
            hostId: LOCAL_HOST_ID,
            pluginId: grove ?? fern,
          })
        : null;
}
var indigo,
  jade,
  kite = esmInit(() => {
    indigo = reactCompilerRuntime();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    ensureSettingsQueryAtomsInit();
    buildCodexDesktopRequestHeaders();
    AppInitialTl();
    AppInitialVC();
    ensureAppShellAtomsInit();
  });
function ImportSettingsHelper7(hill) {
  let { defaultExpanded = false, entry, mcpServerStatuses } = hill;
  if (entry.kind === "running") {
    let isle;
    return (
      <At
        {...{
          runningImport: entry.runningImport,
        }}
      />
    );
  }
  return (
    <ImportSettingsHelper8
      {...{
        defaultExpanded: defaultExpanded,
        history: entry.history,
        mcpServerStatuses,
      }}
    />
  );
}
function At(juniper) {
  let { runningImport } = juniper,
    lagoon = useIntl(),
    meadow;
  {
    let nest = ensureImportSettingsDsInit(runningImport.items),
      oak = (
        <EnsurePersonalizationCInit
          {...{
            label: (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.history.running",
                  defaultMessage: "Importing now",
                  description:
                    "Header for an import history entry while its results are pending",
                }}
              />
            ),
            control: (
              <VSCODE_EDITOR_ID
                {...{
                  className: "icon-xs shrink-0 text-token-text-secondary",
                }}
              />
            ),
          }}
        />
      );
    let petal;
    petal = (quiet) => (
      <EnsurePersonalizationCInit
        key={quiet}
        {...{
          variant: "nested",
          label: deferredUiJs(lagoon, quiet),
          control: (
            <span className="text-xs text-token-text-secondary">
              {
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.import.history.runningBadge",
                    defaultMessage: "Importing",
                    description:
                      "Status for an import history category while its results are pending",
                  }}
                />
              }
            </span>
          ),
        }}
      />
    );
    meadow = (
      <ParseUrlOrFallback
        {...{
          children: [oak, nest.map(petal)],
        }}
      />
    );
  }
  return meadow;
}
function ImportSettingsHelper8(rain) {
  let { defaultExpanded, history, mcpServerStatuses } = rain,
    seed = AppInitialTs(history),
    trail = seed.reduce(onyx, 0),
    urn = seed.reduce(nickel, 0),
    vine = AppInitialOs({
      histories: [history],
      mcpServerStatuses,
    });
  let wind = vine.length,
    yarrow = history.successes.filter(marble);
  let azure = wind + yarrow.length,
    [birch, canyon] = quartz.useState(defaultExpanded),
    [dew, ever] = quartz.useState(null),
    field = `import-history-${history.importId}`,
    grain = ParseUrlOrFallback,
    haven = SettingsRowDisclosure,
    ink =
      seed.length === 0 ? (
        <EnsurePersonalizationCInit
          {...{
            variant: "nested",
            label: (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.history.noResults",
                  defaultMessage: "No results recorded",
                  description:
                    "Label shown when an import history entry has no category results",
                }}
              />
            ),
            control: null,
          }}
        />
      ) : (
        seed.map((item) => {
          let silk = `${field}-${item.itemType}`,
            thorn = dew === item.itemType;
          return (
            <SettingsRowDisclosure
              key={item.itemType}
              {...{
                content: (
                  <$e
                    {...{
                      category: item,
                      history,
                    }}
                  />
                ),
                contentId: silk,
                expanded: thorn,
                children: (
                  <ImportSettingsHelper13
                    {...{
                      category: item,
                      contentId: silk,
                      expanded: thorn,
                      history,
                      mcpServerStatuses,
                      onToggleExpanded: () => {
                        ever(thorn ? null : item.itemType);
                      },
                    }}
                  />
                ),
              }}
            />
          );
        })
      ),
    jadeite = Number(history.completedAtMs),
    kernel = (
      <FormattedDate
        {...{
          value: jadeite,
          dateStyle: "medium",
          timeStyle: "short",
        }}
      />
    );
  let leaf =
    urn > 0 && azure > 0 ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.summaryWithFailuresAndWarnings",
          defaultMessage:
            "{importedCount} imported · {failedCount} did not import · {warningCount} need review",
          description:
            "Summary of imported, failed, and review-required items for a completed import",
          values: {
            importedCount: trail,
            failedCount: urn,
            warningCount: azure,
          },
        }}
      />
    ) : urn > 0 ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.summaryWithFailures",
          defaultMessage:
            "{importedCount} imported · {failedCount} did not import",
          description:
            "Summary of imported and failed items for a completed import",
          values: {
            importedCount: trail,
            failedCount: urn,
          },
        }}
      />
    ) : azure > 0 ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.summaryWithWarnings",
          defaultMessage:
            "{importedCount} imported · {warningCount} need review",
          description:
            "Summary of imported and review-required items for a completed import",
          values: {
            importedCount: trail,
            warningCount: azure,
          },
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.summary",
          defaultMessage: "{importedCount} imported",
          description: "Summary of imported items for a completed import",
          values: {
            importedCount: trail,
          },
        }}
      />
    );
  let maple = birch && "rotate-180",
    nimbus = IntlProvider(
      "icon-2xs text-token-input-placeholder-foreground transition-transform",
      maple,
    );
  let opal = (
    <AppIconSft
      {...{
        "aria-hidden": true,
        className: nimbus,
      }}
    />
  );
  let plume = () => {
    canyon(lemon);
  };
  let quillow = (
    <ImportSettingsHelper14
      {...{
        contentId: field,
        expanded: birch,
        label: kernel,
        description: leaf,
        control: opal,
        onClick: plume,
      }}
    />
  );
  let root = (
    <SettingsRowDisclosure
      {...{
        contentId: field,
        expanded: birch,
        content: ink,
        children: quillow,
      }}
    />
  );
  return (
    <ParseUrlOrFallback
      {...{
        children: root,
      }}
    />
  );
}
function lemon(upland) {
  return !upland;
}
function marble(vista) {
  return vista.itemType === "HOOKS";
}
function nickel(wisp, yonder) {
  return wisp + yonder.failedCount;
}
function onyx(zenith, anvil) {
  return zenith + anvil.importedCount;
}
function ImportSettingsHelper13(beacon) {
  let {
      category,
      contentId,
      expanded,
      history,
      mcpServerStatuses,
      onToggleExpanded,
    } = beacon,
    crag = useIntl(),
    dome =
      category.itemType === "MCP_SERVER_CONFIG"
        ? AppInitialOs({
            histories: [history],
            mcpServerStatuses,
          }).length
        : 0;
  let eddy = dome,
    fjord = deferredUiJs(crag, category.itemType);
  let glen =
    category.itemType === "COMMANDS" ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.destination.commands",
          defaultMessage: "Converted into Codex skills",
          description: "Destination label for imported commands",
        }}
      />
    ) : category.itemType === "HOOKS" && category.importedCount > 0 ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.manageHooks",
          defaultMessage: "Manage imported hooks in Hooks settings",
          description:
            "Description for opening imported hooks in Hooks settings",
        }}
      />
    ) : eddy > 0 ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.authRequiredCount.v2",
          defaultMessage:
            "{count, plural, one {# server needs authentication} other {# servers need authentication}}",
          description:
            "Imported MCP server count that still requires authentication",
          values: {
            count: eddy,
          },
        }}
      />
    ) : null;
  let hearth =
    category.failedCount > 0 || eddy > 0 ? (
      <ApplyActive
        {...{
          className: IntlProvider(
            "icon-2xs shrink-0",
            category.failedCount > 0
              ? "text-token-editor-error-foreground"
              : "text-token-editor-warning-foreground",
          ),
        }}
      />
    ) : null;
  let inlet = (
    <span>
      {category.failedCount > 0 ? (
        <MemoizedFormattedMessage
          {...{
            id: "settings.import.history.categorySummaryWithFailures",
            defaultMessage:
              "{importedCount} imported · {failedCount} did not import",
            description:
              "Summary of imported and failed items for an import history category",
            values: {
              importedCount: category.importedCount,
              failedCount: category.failedCount,
            },
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "settings.import.history.categorySummary",
            defaultMessage: "{importedCount} imported",
            description:
              "Summary of imported items for an import history category",
            values: {
              importedCount: category.importedCount,
            },
          }}
        />
      )}
    </span>
  );
  let jetty = expanded && "rotate-90",
    knob = IntlProvider(
      "icon-2xs shrink-0 text-token-input-placeholder-foreground transition-transform",
      jetty,
    );
  let ledge = (
    <AppIconYlt
      {...{
        className: knob,
      }}
    />
  );
  let mire = (
    <div className="flex shrink-0 items-center gap-3 text-xs whitespace-nowrap text-token-text-secondary">
      {hearth}
      {inlet}
      {ledge}
    </div>
  );
  return (
    <ImportSettingsHelper14
      {...{
        contentId,
        expanded,
        variant: "nested",
        label: fjord,
        description: glen,
        control: mire,
        onClick: onToggleExpanded,
      }}
    />
  );
}
function ImportSettingsHelper14(nook) {
  let { contentId, control, description, expanded, label, onClick, variant } =
      nook,
    oxbow = (
      <EnsurePersonalizationCInit
        {...{
          variant,
          label,
          description,
          control,
        }}
      />
    );
  return (
    <button
      aria-controls={contentId}
      aria-expanded={expanded}
      className="focus-visible:outline-token-focus w-full cursor-interaction text-left hover:bg-token-list-hover-background"
      onClick={onClick}
      type="button"
    >
      {oxbow}
    </button>
  );
}
var pearl,
  quartz,
  river,
  slate = esmInit(() => {
    pearl = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    quartz = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_Sut_Init();
    deferredUiKs();
    AppInitialNs();
    AppIconYlt();
    ensureAppIconSftInit();
    buildCodexDesktopRequestHeaders();
    AppInitialVC();
    initSettingsRowDisclosure();
    AppInitialFC();
    kite();
  });
