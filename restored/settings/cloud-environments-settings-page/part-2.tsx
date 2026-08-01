// Restored from ref/webview/assets/cloud-environments-settings-page-nUgiqirT.js
// Wave FX — full polished body from `cloud-environments-settings-page-nUgiqirT/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 79/103).
// Wave5d — FZ repair from fy-clean L=5307 sus=36; JSX PascalCase + careful split.
// Wave5d careful split 2/8
/* split-lane-import-depth:1 */

import { ensureChatGptPlanIdInit } from "../../account/chatgpt-plan-ids";
import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { isBusinessPlan, isTeamPlan } from "../../account/plan-type-helpers";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { defaultHourlyScheduleConfig as DefaultHourlyScheduleConfig } from "../../automation/default-hourly-schedule-config";
import { normalizeCronScheduleFields } from "../../automation/normalize-cron-schedule-fields";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sut_Init } from "../../composer/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { ensureTanstackReactFormApiInit, useTanstackForm } from "../../forms/tanstack-react-form";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { FormattedDate } from "../../i18n/formatted-date";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconAo } from "../../icons/app-icon-ao";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { readScrollTop } from "../../navigation/app-action-dom";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { isRestoring } from "../../ui/is-restoring";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { coerceLocalFilesystemPath as CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { decodeBase64ToBytes } from "../../utils/decode-base64-to-bytes";
import { hvtBindableHelper } from "../../utils/hvt-bindable-helper";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { isSvgHyphenatedTag } from "../../utils/is-svg-hyphenated-tag";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { ensureCloudApiClientInit } from "../cloud-api-client";
import { previewCloudFilenamePattern, useCloudUserPreferences } from "../cloud-preferences";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";

// Wave5d soft stubs.
const AppInitialPl: any = undefined;
const AppInitialYC: any = undefined;
const CloudEnvironmentsSettingsPageHelper6: any = undefined;
const CloudEnvironmentsSettingsPageHelper7: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
var lemon,
  marble,
  nickel = esmInit(() => {
    lemon = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
  });
function onyx(xenon) {
  return <input {...xenon} className="w-72 max-w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border" />;
}
function pearl(yellow) {
  return <textarea {...yellow} className="w-72 max-w-full resize-y rounded-md border border-token-input-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border" />;
}
var quartz,
  _t,
  river = esmInit(() => {
    quartz = reactCompilerRuntime();
  });
function slate(zinc) {
  let {
      form,
      isPending
    } = zinc,
    amber = useIntl(),
    basalt = <UseChromeAndCodeThemeSync.Header {...{
      title: <MemoizedFormattedMessage {...{
        id: "settings.cloudEnvironments.editor.scripts",
        defaultMessage: "Scripts",
        description: "Heading for cloud environment scripts"
      }} />
    }} />;
  let cedar = garnet => <EnsurePersonalizationCInit {...{
    label: <MemoizedFormattedMessage {...{
      id: "settings.cloudEnvironments.editor.setup",
      defaultMessage: "Setup script",
      description: "Label for a cloud environment setup script"
    }} />,
    description: <MemoizedFormattedMessage {...{
      id: "settings.cloudEnvironments.editor.setup.description",
      defaultMessage: "Runs after the repository is cloned; with caching enabled, it runs only for new containers",
      description: "Explanation for the cloud environment setup script"
    }} />,
    control: <CloudEnvironmentsSettingsPageHelper7 {...{
      "aria-label": amber.formatMessage({
        id: "settings.cloudEnvironments.editor.setup.aria",
        defaultMessage: "Setup script",
        description: "Accessible label for a cloud environment setup script"
      }),
      disabled: isPending,
      rows: 5,
      value: garnet.state.value,
      onChange: event => garnet.handleChange(event.target.value)
    }} />
  }} />;
  let daisy = <form.Field {...{
    name: "setupCommands",
    children: cedar
  }} />;
  let ember = hazel => <EnsurePersonalizationCInit {...{
    label: <MemoizedFormattedMessage {...{
      id: "settings.cloudEnvironments.editor.maintenance",
      defaultMessage: "Maintenance script",
      description: "Label for a cloud environment maintenance script"
    }} />,
    description: <MemoizedFormattedMessage {...{
      id: "settings.cloudEnvironments.editor.maintenance.description",
      defaultMessage: "Runs after branch checkout whenever ChatGPT reuses a cached container",
      description: "Explanation for the cloud environment maintenance script"
    }} />,
    control: <CloudEnvironmentsSettingsPageHelper7 {...{
      "aria-label": amber.formatMessage({
        id: "settings.cloudEnvironments.editor.maintenance.aria",
        defaultMessage: "Maintenance script",
        description: "Accessible label for a cloud environment maintenance script"
      }),
      disabled: isPending,
      rows: 5,
      value: hazel.state.value,
      onChange: event => hazel.handleChange(event.target.value)
    }} />
  }} />;
  let flint = <form.Field {...{
    name: "maintenanceSetupCommands",
    children: ember
  }} />;
  return <UseChromeAndCodeThemeSync {...{
    children: [basalt, <UseChromeAndCodeThemeSync.Content {...{
      children: <ParseUrlOrFallback {...{
        children: [daisy, flint]
      }} />
    }} />]
  }} />;
}
function timber(ivory) {
  let {
      form,
      isPending
    } = ivory,
    jasper = useIntl(),
    kelp = lotus => {
      let mint = lotus ?? {
        mode: "off"
      };
      return <UseChromeAndCodeThemeSync {...{
        children: [<UseChromeAndCodeThemeSync.Header {...{
          title: <MemoizedFormattedMessage {...{
            id: "settings.cloudEnvironments.editor.network",
            defaultMessage: "Network access",
            description: "Heading for cloud environment network access"
          }} />
        }} />, <UseChromeAndCodeThemeSync.Content {...{
          children: <ParseUrlOrFallback {...{
            children: [<EnsurePersonalizationCInit {...{
              label: <MemoizedFormattedMessage {...{
                id: "settings.cloudEnvironments.editor.network.mode",
                defaultMessage: "Access",
                description: "Label for the cloud environment network access mode"
              }} />,
              description: <MemoizedFormattedMessage {...{
                id: "settings.cloudEnvironments.editor.network.mode.description",
                defaultMessage: "Controls internet access after setup completes",
                description: "Explanation for cloud environment network access"
              }} />,
              control: <AppInitialPl ariaLabel={jasper.formatMessage({
                id: "settings.cloudEnvironments.editor.network.aria",
                defaultMessage: "Network access",
                description: "Accessible label for cloud environment network access"
              })} options={[{
                id: "off",
                label: <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.network.off",
                  defaultMessage: "Off",
                  description: "Label for disabled cloud environment network access"
                }} />,
                disabled: isPending
              }, {
                id: "custom",
                label: <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.network.custom",
                  defaultMessage: "Custom",
                  description: "Label for custom cloud environment network access"
                }} />,
                disabled: isPending
              }, {
                id: "on",
                label: <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.network.on",
                  defaultMessage: "On",
                  description: "Label for enabled cloud environment network access"
                }} />,
                disabled: isPending
              }]} selectedId={mint.mode} onSelect={nova => form.setFieldValue("agentNetworkAccess", {
                ...mint,
                mode: nova
              })} />
            }} />, mint.mode === "custom" ? <>
                              {<EnsurePersonalizationCInit {...{
                label: <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.editor.network.allowedDomains",
                  defaultMessage: "Allowed domains",
                  description: "Label for allowed cloud environment network domains"
                }} />,
                control: <CloudEnvironmentsSettingsPageHelper6 {...{
                  "aria-label": jasper.formatMessage({
                    id: "settings.cloudEnvironments.editor.network.allowedDomains.aria",
                    defaultMessage: "Allowed domains",
                    description: "Accessible label for allowed cloud environment network domains"
                  }),
                  disabled: isPending,
                  value: mint.allowlist_domains ?? "",
                  onChange: event => form.setFieldValue("agentNetworkAccess", {
                    ...mint,
                    allowlist_domains: event.target.value
                  })
                }} />
              }} />}
                              {<EnsurePersonalizationCInit {...{
                label: <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.editor.network.blockedDomains",
                  defaultMessage: "Blocked domains",
                  description: "Label for blocked cloud environment network domains"
                }} />,
                control: <CloudEnvironmentsSettingsPageHelper6 {...{
                  "aria-label": jasper.formatMessage({
                    id: "settings.cloudEnvironments.editor.network.blockedDomains.aria",
                    defaultMessage: "Blocked domains",
                    description: "Accessible label for blocked cloud environment network domains"
                  }),
                  disabled: isPending,
                  value: mint.denylist_domains ?? "",
                  onChange: event => form.setFieldValue("agentNetworkAccess", {
                    ...mint,
                    denylist_domains: event.target.value
                  })
                }} />
              }} />}
                            </> : null]
          }} />
        }} />]
      }} />;
    };
  return <form.Subscribe {...{
    selector: umbra,
    children: kelp
  }} />;
}
function umbra(olive) {
  return olive.values.agentNetworkAccess;
}
function violet(prism) {
  let {
      form,
      isPending,
      showAuthtranslator,
      showDockerInDocker
    } = prism,
    quill = useIntl(),
    reef = sage => <UseChromeAndCodeThemeSync {...{
      children: [<UseChromeAndCodeThemeSync.Header {...{
        title: <MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.editor.runtime",
          defaultMessage: "Runtime",
          description: "Heading for cloud environment runtime settings"
        }} />
      }} />, <UseChromeAndCodeThemeSync.Content {...{
        children: <ParseUrlOrFallback {...{
          children: [<EnsurePersonalizationCInit {...{
            label: <MemoizedFormattedMessage {...{
              id: "settings.cloudEnvironments.editor.runtime.autoSetup",
              defaultMessage: "Automatic setup",
              description: "Label for automatic cloud environment setup"
            }} />,
            control: <AppInitialYC ariaLabel={quill.formatMessage({
              id: "settings.cloudEnvironments.editor.runtime.autoSetup.aria",
              defaultMessage: "Automatic setup",
              description: "Accessible label for automatic cloud environment setup"
            })} checked={sage.autoSetupSettings?.use_auto_setup ?? false} disabled={isPending} onChange={topaz => form.setFieldValue("autoSetupSettings", {
              use_auto_setup: topaz
            })} />
          }} />, <EnsurePersonalizationCInit {...{
            label: <MemoizedFormattedMessage {...{
              id: "settings.cloudEnvironments.editor.runtime.cache",
              defaultMessage: "Post-setup cache",
              description: "Label for cloud environment post-setup caching"
            }} />,
            description: <MemoizedFormattedMessage {...{
              id: "settings.cloudEnvironments.editor.runtime.cache.description",
              defaultMessage: "Speeds up chat startup by saving the container after setup",
              description: "Explanation for cloud environment post-setup caching"
            }} />,
            control: <AppInitialYC ariaLabel={quill.formatMessage({
              id: "settings.cloudEnvironments.editor.runtime.cache.aria",
              defaultMessage: "Post-setup cache",
              description: "Accessible label for cloud environment post-setup caching"
            })} checked={sage.cacheSettings?.post_setup_cache_enabled ?? false} disabled={isPending} onChange={ultra => form.setFieldValue("cacheSettings", {
              post_setup_cache_enabled: ultra
            })} />
          }} />, showAuthtranslator ? <EnsurePersonalizationCInit {...{
            label: <MemoizedFormattedMessage {...{
              id: "settings.cloudEnvironments.editor.runtime.authtranslator",
              defaultMessage: "Authentication translation",
              description: "Label for cloud environment authentication translation"
            }} />,
            control: <AppInitialYC ariaLabel={quill.formatMessage({
              id: "settings.cloudEnvironments.editor.runtime.authtranslator.aria",
              defaultMessage: "Authentication translation",
              description: "Accessible label for cloud environment authentication translation"
            })} checked={sage.enableAuthtranslator} disabled={isPending} onChange={vapor => form.setFieldValue("enableAuthtranslator", vapor)} />
          }} /> : null, showDockerInDocker ? <EnsurePersonalizationCInit {...{
            label: <MemoizedFormattedMessage {...{
              id: "settings.cloudEnvironments.editor.runtime.dockerInDocker",
              defaultMessage: "Docker in Docker",
              description: "Label for Docker in Docker support in a cloud environment"
            }} />,
            control: <AppInitialYC ariaLabel={quill.formatMessage({
              id: "settings.cloudEnvironments.editor.runtime.dockerInDocker.aria",
              defaultMessage: "Docker in Docker",
              description: "Accessible label for Docker in Docker support in a cloud environment"
            })} checked={sage.enableDockerInDocker} disabled={isPending} onChange={wheat => form.setFieldValue("enableDockerInDocker", wheat)} />
          }} /> : null]
        }} />
      }} />]
    }} />;
  return <form.Subscribe {...{
    selector: willow,
    children: reef
  }} />;
}
function willow(yarn) {
  return yarn.values;
}
