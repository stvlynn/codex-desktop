// Restored from ref/webview/assets/import-settings-DUWst0h6.js
// Wave FX — full polished body from `import-settings-DUWst0h6/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 29 (verified 66/95).
// AST split 2/2
/* split-lane-import-depth:1 */

import { openInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexProfileEditAction } from "../../analytics/codex-profile-edit-action";
import { logProductEvent } from "../../analytics/log-product-event";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
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
import { ensureImportSettingsCLInit, ensureImportSettingsCsInit, ensureImportSettingsDpInit, ensureImportSettingsDsInit, ensureImportSettingsGctInit, ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { CodeThemePreviewGlyph } from "../code-theme-preview-glyph";
import { EXTERNAL_AGENT_CONFIG_IMPORT_SETTINGS_ID } from "../external-agent-config-import-settings-id";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { initSettingsLoadingRow, SettingsLoadingRow } from "../settings-loading-row";
import { initSettingsRowDisclosure, SettingsRowDisclosure } from "../settings-row-disclosure";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";

/** split companion stub */
const knollFifth: any = undefined;
/** split companion stub */
const lunarFifth: any = undefined;

/** app-initial companion (stub only; never promote) */
const AppInitialAs: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialB4: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialEs: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialFC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialOs: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialWs: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialX4: any = undefined;
/** split companion stub */
const deferredHostsY4: any = undefined;
/** split companion stub */
const deferredHostsZ4: any = undefined;
/** split companion stub */
const deferredUiKs: any = undefined;
/** split companion stub */
const ensureConfigQueryAtomsInit: any = undefined;
/** split companion stub */
const idlerThird: any = undefined;
/** split companion stub */
const jigThird: any = undefined;

const Alpha: any = undefined;
const ImportSettingsHelper1: any = undefined;
const ImportSettingsHelper7: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
export function ImportSettings() {
  let gamma = useNavigate(),
    {
      data,
      isLoading
    } = CodexPluginActionResult(deferredHostsZ4),
    harbor = CodexPluginActionResult(AppInitialX4),
    indigo = CodexPluginActionResult(deferredHostsY4),
    [jade, kite] = echo.useState(false),
    lemon = CodexPluginActionResult(AppInitialAs),
    {
      data: _data,
      error,
      isLoading: _isLoading,
      refetch
    } = CodexBrowserSurfaceActionType(AppInitialWs, LOCAL_HOST_ID),
    {
      data: __data,
      error: _error,
      isLoading: __isLoading,
      refetch: _refetch
    } = CodexBrowserSurfaceActionType(AppInitialB4, LOCAL_HOST_ID),
    marble;
  {
    let nickel = AppInitialEs({
        histories: (_data == null || jade ? _data : _data.slice(0, falcon)) ?? [],
        runningImport: lemon?.hostId === "local" ? lemon : null
      }),
      onyx = _data != null && _data.length > falcon && !jade,
      pearl = _data?.find(copper);
    let quartz = pearl,
      river,
      slate,
      timber,
      umbra,
      violet;
    {
      let willow = AppInitialOs({
          histories: _data ?? [],
          mcpServerStatuses: __data?.data ?? []
        }),
        xenon = (_data?.some(bravo) ?? false) && (__isLoading || _error != null);
      river = openInBrowser;
      slate = <SettingsSectionTitle slug="import" />;
      timber = <MemoizedFormattedMessage {...{
        id: "settings.import.subtitle.v2",
        defaultMessage: "Bring setup, projects, and chats from other AI apps into {appName}",
        description: "Subtitle for the import settings page",
        values: {
          appName: ensureImportSettingsGctInit
        }
      }} />;
      let yellow = isLoading || indigo || _isLoading,
        zinc = quartz == null ? null : Number(quartz.completedAtMs),
        amber = data == null ? undefined : harbor;
      umbra = <ImportSettingsHelper1 {...{
        isImportContextLoading: yellow,
        latestSuccessfulImportAtMs: zinc,
        workspaceRoots: amber
      }} />;
      violet = willow.length > 0 || xenon ? <UseChromeAndCodeThemeSync {...{
        children: [<UseChromeAndCodeThemeSync.Header {...{
          title: <MemoizedFormattedMessage {...{
            id: "settings.import.attention.title",
            defaultMessage: "Needs attention",
            description: "Heading for imported setup that needs review or authentication"
          }} />,
          subtitle: <MemoizedFormattedMessage {...{
            id: "settings.import.attention.subtitle",
            defaultMessage: "Finish setting up items from a previous import",
            description: "Subtitle for imported setup that needs review or authentication"
          }} />
        }} />, <UseChromeAndCodeThemeSync.Content {...{
          children: <ParseUrlOrFallback {...{
            children: [willow.map(item => <EnsurePersonalizationCInit key={item} {...{
              icon: <ApplyActive {...{
                className: "icon-2xs shrink-0 text-token-editor-warning-foreground"
              }} />,
              label: item,
              description: <MemoizedFormattedMessage {...{
                id: "settings.import.attention.authenticationRequired",
                defaultMessage: "Authentication required",
                description: "Description for an imported MCP server that requires authentication"
              }} />,
              control: <ReadLoginRouteQuerySnapshot {...{
                color: "outline",
                size: "toolbar",
                onClick: () => {
                  gamma(`/settings/mcp-settings?search=${encodeURIComponent(item)}`);
                },
                children: <MemoizedFormattedMessage {...{
                  id: "settings.import.attention.authenticate",
                  defaultMessage: "Authenticate",
                  description: "Button label to open an imported MCP server that needs authentication"
                }} />
              }} />
            }} />), xenon ? __isLoading ? <SettingsLoadingRow {...{
              children: <MemoizedFormattedMessage {...{
                id: "settings.import.attention.authenticationLoading",
                defaultMessage: "Checking imported MCP servers",
                description: "Label shown while checking imported MCP servers for authentication requirements"
              }} />
            }} /> : <EnsurePersonalizationCInit {...{
              icon: <ApplyActive {...{
                className: "icon-2xs shrink-0 text-token-editor-warning-foreground"
              }} />,
              label: <MemoizedFormattedMessage {...{
                id: "settings.import.attention.authenticationError",
                defaultMessage: "Couldn't check imported MCP servers",
                description: "Error shown when imported MCP servers cannot be checked for authentication requirements"
              }} />,
              control: <ReadLoginRouteQuerySnapshot {...{
                color: "secondary",
                size: "toolbar",
                onClick: () => {
                  _refetch();
                },
                children: <MemoizedFormattedMessage {...{
                  id: "settings.import.attention.authenticationRetry",
                  defaultMessage: "Retry",
                  description: "Button label to retry checking imported MCP servers for authentication requirements"
                }} />
              }} />
            }} /> : null]
          }} />
        }} />]
      }} /> : null;
    }
    marble = <Alpha {...{
      title: slate,
      subtitle: timber,
      children: [umbra, violet, nickel.length > 0 || _isLoading || error != null ? <UseChromeAndCodeThemeSync {...{
        children: [<UseChromeAndCodeThemeSync.Header {...{
          title: <MemoizedFormattedMessage {...{
            id: "settings.import.history.title",
            defaultMessage: "Import history",
            description: "Heading for the import history section"
          }} />,
          subtitle: <MemoizedFormattedMessage {...{
            id: "settings.import.history.subtitle",
            defaultMessage: "Current and previous import results",
            description: "Subtitle for the import history section"
          }} />
        }} />, <UseChromeAndCodeThemeSync.Content {...{
          children: [nickel.map(item => <ImportSettingsHelper7 key={item.kind === "running" ? `running-${item.runningImport.startedAtMs}` : item.history.importId} {...{
            defaultExpanded: item.kind === "completed" && item.history.importId === _data?.[0]?.importId,
            entry: item,
            mcpServerStatuses: __data?.data ?? []
          }} />), _isLoading ? <ParseUrlOrFallback {...{
            children: <SettingsLoadingRow {...{
              children: <MemoizedFormattedMessage {...{
                id: "settings.import.history.loading",
                defaultMessage: "Loading import history",
                description: "Label shown while import history is loading"
              }} />
            }} />
          }} /> : error == null ? null : <ParseUrlOrFallback {...{
            children: <EnsurePersonalizationCInit {...{
              label: <MemoizedFormattedMessage {...{
                id: "settings.import.history.error",
                defaultMessage: "Couldn't load import history",
                description: "Error shown when import history cannot be loaded"
              }} />,
              control: <ReadLoginRouteQuerySnapshot {...{
                color: "secondary",
                size: "toolbar",
                onClick: () => {
                  refetch();
                },
                children: <MemoizedFormattedMessage {...{
                  id: "settings.import.history.retry",
                  defaultMessage: "Retry",
                  description: "Button label to retry loading import history"
                }} />
              }} />
            }} />
          }} />, onyx ? <ReadLoginRouteQuerySnapshot {...{
            color: "ghostMuted",
            size: "default",
            onClick: () => {
              kite(true);
            },
            children: <MemoizedFormattedMessage {...{
              id: "settings.import.history.viewMore",
              defaultMessage: "View more",
              description: "Link to reveal older import history entries"
            }} />
          }} /> : null]
        }} />]
      }} /> : null]
    }} />;
  }
  return marble;
}
function bravo(basalt) {
  return basalt.successes.some(_t);
}
function _t(cedar) {
  return cedar.itemType === "MCP_SERVER_CONFIG";
}
function copper(daisy) {
  return daisy.successes.length > 0;
}
var delta, echo, $, falcon;
esmInit(() => {
  delta = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  echo = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  chatgpt2();
  ensureSettingsQueryAtomsInit();
  deferredUiKs();
  buildCodexDesktopRequestHeaders();
  ensureConfigQueryAtomsInit();
  extractColonPrefixedNamedTokens();
  AppIconOi();
  codexCommandTheme();
  initSettingsLoadingRow();
  AppInitialVC();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  ensureAppShellAtomsInit();
  lunarFifth();
  knollFifth();
  falcon = 5;
})();
