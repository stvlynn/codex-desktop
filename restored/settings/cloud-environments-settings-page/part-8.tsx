// Restored from ref/webview/assets/cloud-environments-settings-page-nUgiqirT.js
// Wave FX — full polished body from `cloud-environments-settings-page-nUgiqirT/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 79/103).
// Wave5d — FZ repair from fy-clean L=5307 sus=36; JSX PascalCase + careful split.
// Wave5d careful split 8/8
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
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Sut_Init } from "../../boundaries/composer-esm-inits";
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

// Wave5d soft JSX companions.
function At(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialFC: any = undefined;
const AppInitialJo: any = undefined;
const AppInitialNi: any = undefined;
const AppInitialVO: any = undefined;
const CloudEnvironmentsSettingsPageHelper4: any = undefined;
const CloudEnvironmentsSettingsPageHelper45: any = undefined;
const CloudEnvironmentsSettingsPageHelper5: any = undefined;
const CloudEnvironmentsSettingsPageHelper55: any = undefined;
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
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const cedar: any = undefined;
const daisy: any = undefined;
const ember: any = undefined;
const flint: any = undefined;
const garnet: any = undefined;
const hazel: any = undefined;
const ivory: any = undefined;
const jasper: any = undefined;
const kelp: any = undefined;
const lotus: any = undefined;
const mint: any = undefined;
const nova: any = undefined;
const olive: any = undefined;
const prism: any = undefined;
const quill: any = undefined;
const reef: any = undefined;
const sage: any = undefined;
const topaz: any = undefined;
const ultra: any = undefined;
const vapor: any = undefined;
const wheat: any = undefined;
const yarn: any = undefined;
const zephyr: any = undefined;
const acorn: any = undefined;
const bloom: any = undefined;
const coral: any = undefined;
const drift: any = undefined;
const eagle: any = undefined;
const frost: any = undefined;
const glide: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function honey(quest) {
  let {
      environmentId,
      onBack,
      onDeleted,
      onEdit
    } = quest,
    ridge = CodexPluginActionType(appScopeAtom),
    storm = useIntl(),
    {
      userId
    } = useAuth(),
    tide = CodexBrowserSurfaceActionType(alpha, environmentId),
    unity = CodexPluginActionResult(bravo),
    vale = CodexPluginActionResult(jade),
    wave = CodexPluginActionResult(onyx),
    [apex, brook] = lunar.useState(null);
  if (tide.isPending || tide.isError) {
    let birch = <CloudEnvironmentsSettingsPageHelper55 {...{
      current: orbit,
      onRootClick: onBack
    }} />;
    let canyon = tide.isPending ? <AppInitialNi>
          {<MemoizedFormattedMessage {...{
        id: "settings.cloudEnvironments.details.loading",
        defaultMessage: "Loading environment…",
        description: "Loading state for cloud environment details"
      }} />}
        </AppInitialNi> : <ParseUrlOrFallback {...{
      children: <div className="flex items-center justify-between gap-3 p-3 text-sm text-token-text-secondary">
                {<MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.details.error",
          defaultMessage: "Unable to load this cloud environment",
          description: "Error state for cloud environment details"
        }} />}
                {<ReadLoginRouteQuerySnapshot {...{
          color: "secondary",
          onClick: () => void tide.refetch(),
          size: "toolbar",
          children: <MemoizedFormattedMessage {...{
            id: "settings.cloudEnvironments.retry",
            defaultMessage: "Retry",
            description: "Button label to retry loading cloud environments"
          }} />
        }} />}
              </div>
    }} />;
    let dew;
    return <OpenInBrowser {...{
      backSlot: birch,
      title: orbit,
      children: canyon
    }} />;
  }
  let cliff = tide.data,
    dusk = cliff.permissions?.can_write === true,
    elm = cliff.permissions?.can_delete === true,
    fern = userId != null && cliff.creator.id.includes(userId);
  let grove = dusk && fern,
    hill = dusk && (cliff.cache_settings?.post_setup_cache_enabled ?? true),
    isle = cliff.is_pinned ? storm.formatMessage({
      id: "settings.cloudEnvironments.details.unpin",
      defaultMessage: "Unpin environment",
      description: "Tooltip for unpinning a cloud environment"
    }) : storm.formatMessage({
      id: "settings.cloudEnvironments.details.pin",
      defaultMessage: "Pin environment",
      description: "Tooltip for pinning a cloud environment"
    });
  let juniper = isle,
    lagoon = storm.formatMessage({
      id: "settings.cloudEnvironments.details.edit",
      defaultMessage: "Edit environment",
      description: "Tooltip for editing a cloud environment"
    });
  let meadow = lagoon,
    nest = dusk || elm ? <div className="flex items-center gap-2">
          {grove ? <OptionalTooltip {...{
        tooltipContent: juniper,
        children: <ReadLoginRouteQuerySnapshot {...{
          "aria-label": juniper,
          color: "ghost",
          loading: wave.isPending,
          onClick: () => {
            wave.mutate({
              environmentId: cliff.id,
              etag: cliff.etag,
              isPinned: !cliff.is_pinned
            }, {
              onError: () => {
                ridge.get(toastAtom).danger(storm.formatMessage({
                  id: "settings.cloudEnvironments.pin.error",
                  defaultMessage: "Unable to update pinned environment",
                  description: "Toast shown when pinning a cloud environment fails"
                }));
              }
            });
          },
          size: "toolbar",
          uniform: true,
          children: cliff.is_pinned ? <AppIconAo className="icon-xs" /> : <DefaultHourlyScheduleConfig {...{
            className: "icon-xs"
          }} />
        }} />
      }} /> : null}
          {dusk ? <ReadLoginRouteQuerySnapshot {...{
        "aria-label": meadow,
        color: "secondary",
        onClick: onEdit,
        size: "toolbar",
        children: [<CopyButton {...{
          className: "icon-xs"
        }} />, <MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.details.editAction",
          defaultMessage: "Edit",
          description: "Button label for editing a cloud environment"
        }} />]
      }} /> : null}
          {elm || hill ? <DropdownMenuPopover {...{
        align: "end",
        contentWidth: "menu",
        triggerButton: <CoerceLocalFilesystemPath {...{
          label: storm.formatMessage({
            id: "settings.cloudEnvironments.details.actions",
            defaultMessage: "Environment actions",
            description: "Accessible label for cloud environment actions"
          })
        }} />,
        children: [hill ? <DropdownMenu.Item {...{
          LeftIcon: AppIconAlt,
          onSelect: () => brook("reset-cache"),
          children: <MemoizedFormattedMessage {...{
            id: "settings.cloudEnvironments.details.resetCache",
            defaultMessage: "Reset cache",
            description: "Menu item for resetting a cloud environment cache"
          }} />
        }} /> : null, elm ? <DropdownMenu.Item {...{
          LeftIcon: AppIconBO,
          onSelect: () => brook("delete"),
          children: <MemoizedFormattedMessage {...{
            id: "settings.cloudEnvironments.details.delete",
            defaultMessage: "Delete environment",
            description: "Menu item for deleting a cloud environment"
          }} />
        }} /> : null]
      }} /> : null}
        </div> : null;
  let oak = <CloudEnvironmentsSettingsPageHelper55 {...{
    current: cliff.label,
    onRootClick: onBack
  }} />;
  let petal = cliff.description || undefined,
    quiet = <At {...{
      environment: cliff
    }} />;
  let rain = apex === "delete",
    seed = () => {
      unity.mutate(cliff.id, {
        onSuccess: () => {
          ridge.get(toastAtom).success(storm.formatMessage({
            id: "settings.cloudEnvironments.delete.success",
            defaultMessage: "Deleted cloud environment",
            description: "Toast shown after deleting a cloud environment"
          }));
          onDeleted();
        },
        onError: () => {
          ridge.get(toastAtom).danger(storm.formatMessage({
            id: "settings.cloudEnvironments.delete.error",
            defaultMessage: "Unable to delete cloud environment",
            description: "Toast shown when cloud environment deletion fails"
          }));
        }
      });
    };
  let trail = ever => brook(ever ? "delete" : null);
  let urn = <CloudEnvironmentsSettingsPageHelper4 {...{
    environmentName: cliff.label,
    isPending: unity.isPending,
    open: rain,
    onConfirm: seed,
    onOpenChange: trail
  }} />;
  let vine = apex === "reset-cache",
    wind = () => {
      vale.mutate(cliff.id, {
        onSuccess: () => {
          brook(null);
          ridge.get(toastAtom).success(storm.formatMessage({
            id: "settings.cloudEnvironments.resetCache.success",
            defaultMessage: "Reset cloud environment cache",
            description: "Toast shown after resetting a cloud environment cache"
          }));
        },
        onError: () => {
          ridge.get(toastAtom).danger(storm.formatMessage({
            id: "settings.cloudEnvironments.resetCache.error",
            defaultMessage: "Unable to reset cloud environment cache",
            description: "Toast shown when resetting a cloud environment cache fails"
          }));
        }
      });
    };
  let yarrow = field => brook(field ? "reset-cache" : null);
  let azure = <CloudEnvironmentsSettingsPageHelper5 {...{
    isPending: vale.isPending,
    open: vine,
    onConfirm: wind,
    onOpenChange: yarrow
  }} />;
  return <OpenInBrowser {...{
    action: nest,
    backSlot: oak,
    subtitle: petal,
    title: cliff.label,
    children: [quiet, urn, azure]
  }} />;
}
function iris(grain) {
  let {
      environmentId,
      onBack,
      onRootClick
    } = grain,
    haven = CodexBrowserSurfaceActionType(alpha, environmentId);
  if (haven.isError) {
    let leaf = `${$}/${environmentId}`,
      maple;
    return <Navigate {...{
      to: leaf,
      replace: true
    }} />;
  }
  if (haven.isPending) {
    let nimbus = {
      label: orbit,
      onClick: onBack
    };
    let opal = <CloudEnvironmentsSettingsPageHelper55 {...{
      current: pine,
      environment: nimbus,
      onRootClick
    }} />;
    let plume = <AppInitialNi>
        {<MemoizedFormattedMessage {...{
        id: "settings.cloudEnvironments.edit.loading",
        defaultMessage: "Loading environment…",
        description: "Loading state for the cloud environment editor"
      }} />}
      </AppInitialNi>;
    let quillow;
    return <OpenInBrowser {...{
      backSlot: opal,
      title: pine,
      children: plume
    }} />;
  }
  if (haven.data.permissions?.can_write !== true) {
    let root = `${$}/${environmentId}`,
      silk;
    return <Navigate {...{
      to: root,
      replace: true
    }} />;
  }
  let ink = {
    label: haven.data.label,
    onClick: onBack
  };
  let jadeite = <CloudEnvironmentsSettingsPageHelper55 {...{
    current: pine,
    environment: ink,
    onRootClick
  }} />;
  let kernel = <CloudEnvironmentsSettingsPageHelper45 key={haven.data.id} {...{
    environment: haven.data,
    onCancel: onBack,
    onSaved: onBack
  }} />;
  return <OpenInBrowser {...{
    backSlot: jadeite,
    title: pine,
    children: kernel
  }} />;
}
function jewel(thorn) {
  let {
      current,
      environment,
      onRootClick
    } = thorn,
    upland = <SettingsSectionTitle slug="cloud-environments" />;
  let vista = {
    id: "cloud-environments",
    label: upland,
    onClick: onRootClick
  };
  let wisp = environment == null ? [] : [{
    id: "environment",
    label: environment.label,
    onClick: environment.onClick
  }];
  let yonder = [vista, ...wisp];
  return <ToolbarBreadcrumb {...{
    ancestors: yonder,
    current
  }} />;
}
var knoll, lunar, moss, $, north, orbit, pine;
esmInit(() => {
  knoll = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  lunar = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  ensureAuthProviderInit();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  ensurePinnedConversationsQueryInit();
  ensureComposerEsm_Ilt_Init();
  initToolbarBreadcrumb();
  ensureComposerEsm_Hlt_Init();
  isIndeterminate();
  AppInitialJo();
  normalizeCronScheduleFields();
  useEventCallback();
  AppInitialVO();
  ensureAppScopeInit();
  AppIconOi();
  useGateEnabledWithAccountData();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  timber();
  basalt();
  zinc();
  amber();
  umbra();
  $ = "/settings/cloud-environments";
  north = <MemoizedFormattedMessage {...{
    id: "settings.cloudEnvironments.create.title",
    defaultMessage: "Create cloud environment",
    description: "Title for creating a cloud environment"
  }} />;
  orbit = <MemoizedFormattedMessage {...{
    id: "settings.cloudEnvironments.details.title",
    defaultMessage: "Cloud environment",
    description: "Title for cloud environment details"
  }} />;
  pine = <MemoizedFormattedMessage {...{
    id: "settings.cloudEnvironments.edit.title",
    defaultMessage: "Edit cloud environment",
    description: "Title for editing a cloud environment"
  }} />;
})();
