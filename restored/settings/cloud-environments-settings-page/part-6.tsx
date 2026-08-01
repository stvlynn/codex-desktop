// Restored from ref/webview/assets/cloud-environments-settings-page-nUgiqirT.js
// Wave5 stub-pass soft companions.
const NativeContextMenuSurface: any = undefined;

// Wave FX — full polished body from `cloud-environments-settings-page-nUgiqirT/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 79/103).
// Wave5d — FZ repair from fy-clean L=5307 sus=36; JSX PascalCase + careful split.
// Wave5d careful split 6/8
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

// Wave5d soft JSX companions.
function Alpha(props: {
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
const AppInitialVC: any = undefined;
const CloudEnvironmentsSettingsPageHelper11: any = undefined;
const CloudEnvironmentsSettingsPageHelper13: any = undefined;
const CloudEnvironmentsSettingsPageHelper28: any = undefined;
const CloudEnvironmentsSettingsPageHelper43: any = undefined;
const CloudEnvironmentsSettingsPageHelper6: any = undefined;
const CloudEnvironmentsSettingsPageHelper8: any = undefined;
const CloudEnvironmentsSettingsPageHelper9: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function jasper(olive) {
  let {
      environment = undefined,
      onCancel,
      onSaved,
      preferredConnectorId
    } = olive,
    prism = CodexPluginActionType(appScopeAtom),
    quill = useIntl(),
    {
      planAtLogin
    } = useAuth(),
    reef = CodexPluginActionResult(marble),
    sage = CodexPluginActionResult(nickel),
    topaz = CodexPluginActionResult(onyx),
    ultra = NativeContextMenuSurface("479474474"),
    vapor = NativeContextMenuSurface("2664309699"),
    wheat = isTeamPlan(planAtLogin) || isBusinessPlan(planAtLogin);
  let yarn = wheat,
    zephyr = bravo(environment, preferredConnectorId);
  let acorn = honey => {
    let {
      value
    } = honey;
    if (delta(value, reef.data?.some(iris => iris.id === value.machineId) === true, environment?.machine_id)) {
      if (environment == null) {
        sage.mutate(echo(value), {
          onSuccess: jewel => {
            prism.get(toastAtom).success(quill.formatMessage({
              id: "settings.cloudEnvironments.create.success",
              defaultMessage: "Created cloud environment",
              description: "Toast shown after creating a cloud environment"
            }));
            onSaved(jewel.id);
          },
          onError: () => {
            prism.get(toastAtom).danger(quill.formatMessage({
              id: "settings.cloudEnvironments.create.error",
              defaultMessage: "Unable to create cloud environment",
              description: "Toast shown when creating a cloud environment fails"
            }));
          }
        });
        return;
      }
      topaz.mutate({
        environmentId: environment.id,
        requestBody: falcon(value, environment)
      }, {
        onSuccess: () => {
          prism.get(toastAtom).success(quill.formatMessage({
            id: "settings.cloudEnvironments.update.success",
            defaultMessage: "Updated cloud environment",
            description: "Toast shown after updating a cloud environment"
          }));
          onSaved(environment.id);
        },
        onError: () => {
          prism.get(toastAtom).danger(quill.formatMessage({
            id: "settings.cloudEnvironments.update.error",
            defaultMessage: "Unable to update cloud environment. Reload and try again",
            description: "Toast shown when updating a cloud environment fails"
          }));
        }
      });
    }
  };
  let bloom = {
    defaultValues: zephyr,
    onSubmit: acorn
  };
  let coral = useTanstackForm(bloom),
    drift = sage.isPending || topaz.isPending,
    eagle = event => {
      event.preventDefault();
      coral.handleSubmit();
    };
  let frost = knoll => {
    let lunar = copper(knoll),
      moss = reef.data?.find(orbit => orbit.id === knoll.machineId),
      north = environment?.machine_id === knoll.machineId ? environment.machine : undefined;
    return <>
        {<UseChromeAndCodeThemeSync {...{
        children: <UseChromeAndCodeThemeSync.Content {...{
          children: <ParseUrlOrFallback {...{
            children: [<Alpha.Field {...{
              name: "label",
              children: pine => <EnsurePersonalizationCInit {...{
                label: <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.editor.name",
                  defaultMessage: "Name",
                  description: "Label for a cloud environment name"
                }} />,
                description: lunar.label ? <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.editor.name.required",
                  defaultMessage: "Name is required",
                  description: "Validation message for a missing cloud environment name"
                }} /> : undefined,
                control: <CloudEnvironmentsSettingsPageHelper6 {...{
                  "aria-label": quill.formatMessage({
                    id: "settings.cloudEnvironments.editor.name.aria",
                    defaultMessage: "Environment name",
                    description: "Accessible label for a cloud environment name input"
                  }),
                  disabled: drift,
                  maxLength: 64,
                  value: pine.state.value,
                  onChange: event => pine.handleChange(event.target.value)
                }} />
              }} />
            }} />, <Alpha.Field {...{
              name: "description",
              children: quest => <EnsurePersonalizationCInit {...{
                label: <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.editor.description",
                  defaultMessage: "Description",
                  description: "Label for a cloud environment description"
                }} />,
                control: <CloudEnvironmentsSettingsPageHelper6 {...{
                  "aria-label": quill.formatMessage({
                    id: "settings.cloudEnvironments.editor.description.aria",
                    defaultMessage: "Environment description",
                    description: "Accessible label for a cloud environment description input"
                  }),
                  disabled: drift,
                  maxLength: 512,
                  value: quest.state.value,
                  onChange: event => quest.handleChange(event.target.value)
                }} />
              }} />
            }} />, <EnsurePersonalizationCInit {...{
              label: <MemoizedFormattedMessage {...{
                id: "settings.cloudEnvironments.editor.repository",
                defaultMessage: "Repository",
                description: "Label for a cloud environment repository"
              }} />,
              description: lunar.repositoryId ? <MemoizedFormattedMessage {...{
                id: "settings.cloudEnvironments.editor.repository.required",
                defaultMessage: "Repository is required",
                description: "Validation message for a missing cloud environment repository"
              }} /> : undefined,
              control: environment == null ? <CloudEnvironmentsSettingsPageHelper43 {...{
                form: coral,
                isPending: drift,
                preferredConnectorId
              }} /> : <CloudEnvironmentsSettingsPageHelper6 {...{
                "aria-label": quill.formatMessage({
                  id: "settings.cloudEnvironments.editor.repository.aria",
                  defaultMessage: "Repository",
                  description: "Accessible label for a cloud environment repository input"
                }),
                disabled: true,
                value: knoll.repositoryName
              }} />
            }} />, <Alpha.Field {...{
              name: "machineId",
              children: ridge => <EnsurePersonalizationCInit {...{
                label: <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.editor.machine",
                  defaultMessage: "Machine",
                  description: "Label for a cloud environment machine"
                }} />,
                description: reef.isError ? <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.editor.machine.error",
                  defaultMessage: "Unable to load machines",
                  description: "Error shown when cloud environment machines cannot be loaded"
                }} /> : lunar.machineId ? <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.editor.machine.required",
                  defaultMessage: "Machine is required",
                  description: "Validation message for a missing cloud environment machine"
                }} /> : undefined,
                control: reef.isError ? <div className="flex items-center gap-2">
                                            {north == null ? null : <DropdownTriggerButton disabled={true}>
                                                {north.label}
                                              </DropdownTriggerButton>}
                                            {<ReadLoginRouteQuerySnapshot {...{
                    color: "secondary",
                    onClick: () => void reef.refetch(),
                    size: "toolbar",
                    type: "button",
                    children: <MemoizedFormattedMessage {...{
                      id: "settings.cloudEnvironments.editor.machine.retry",
                      defaultMessage: "Retry",
                      description: "Button label for retrying cloud environment machine loading"
                    }} />
                  }} />}
                                          </div> : <DropdownMenuPopover {...{
                  triggerButton: <DropdownTriggerButton disabled={reef.isPending || drift}>
                                                  {moss?.label ?? north?.label ?? <MemoizedFormattedMessage {...{
                      id: "settings.cloudEnvironments.editor.machine.select",
                      defaultMessage: "Select a machine",
                      description: "Placeholder for a cloud environment machine selector"
                    }} />}
                                                </DropdownTriggerButton>,
                  children: reef.data?.map(storm => <DropdownMenu.Item key={storm.id} {...{
                    onSelect: () => ridge.handleChange(storm.id),
                    children: storm.label
                  }} />)
                }} />
              }} />
            }} />, <Alpha.Field {...{
              name: "workspaceDirectory",
              children: tide => <EnsurePersonalizationCInit {...{
                label: <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.editor.workspaceDirectory",
                  defaultMessage: "Workspace directory",
                  description: "Label for a cloud environment workspace directory"
                }} />,
                description: <MemoizedFormattedMessage {...{
                  id: "settings.cloudEnvironments.editor.workspaceDirectory.description",
                  defaultMessage: "Directory where the repository is cloned; change this only when setup requires an absolute path",
                  description: "Explanation for the cloud environment workspace directory"
                }} />,
                control: <CloudEnvironmentsSettingsPageHelper6 {...{
                  "aria-label": quill.formatMessage({
                    id: "settings.cloudEnvironments.editor.workspaceDirectory.aria",
                    defaultMessage: "Workspace directory",
                    description: "Accessible label for the cloud environment workspace directory input"
                  }),
                  disabled: drift,
                  value: tide.state.value,
                  onChange: event => tide.handleChange(event.target.value)
                }} />
              }} />
            }} />]
          }} />
        }} />
      }} />}
        {<CloudEnvironmentsSettingsPageHelper8 {...{
        form: coral,
        isPending: drift
      }} />}
        {<CloudEnvironmentsSettingsPageHelper28 {...{
        form: coral,
        isPending: drift
      }} />}
        {<CloudEnvironmentsSettingsPageHelper9 {...{
        form: coral,
        isPending: drift
      }} />}
        {<CloudEnvironmentsSettingsPageHelper11 {...{
        form: coral,
        isPending: drift,
        showAuthtranslator: ultra,
        showDockerInDocker: vapor
      }} />}
        {yarn ? <CloudEnvironmentsSettingsPageHelper13 {...{
        form: coral,
        isPending: drift
      }} /> : null}
        <div className="flex items-center justify-end gap-2">
          {<ReadLoginRouteQuerySnapshot {...{
          color: "secondary",
          disabled: drift,
          onClick: onCancel,
          type: "button",
          children: <MemoizedFormattedMessage {...{
            id: "settings.cloudEnvironments.editor.cancel",
            defaultMessage: "Cancel",
            description: "Button label for cancelling cloud environment editing"
          }} />
        }} />}
          {<ReadLoginRouteQuerySnapshot {...{
          color: "primary",
          disabled: !delta(knoll, moss != null, environment?.machine_id),
          loading: drift,
          type: "submit",
          children: environment == null ? <MemoizedFormattedMessage {...{
            id: "settings.cloudEnvironments.editor.create",
            defaultMessage: "Create environment",
            description: "Button label for creating a cloud environment"
          }} /> : <MemoizedFormattedMessage {...{
            id: "settings.cloudEnvironments.editor.save",
            defaultMessage: "Save changes",
            description: "Button label for saving a cloud environment"
          }} />
        }} />}
        </div>
      </>;
  };
  let glide = <Alpha.Subscribe {...{
    selector: kelp,
    children: frost
  }} />;
  return <form className="flex flex-col gap-[var(--padding-panel)]" onSubmit={eagle}>
      {glide}
    </form>;
}
function kelp(unity) {
  return unity.values;
}
var lotus,
  mint,
  nova = esmInit(() => {
    lotus = reactCompilerRuntime();
    ensureTanstackReactFormApiInit();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureAuthProviderInit();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    ensureComposerEsm_Ilt_Init();
    ensureAppScopeInit();
    codexCommandTheme();
    AppInitialVC();
    ensureSettingsSectionTitleInit();
    AppInitialFC();
    ensureSkillsPageHelpersInit();
    ensureChatGptPlanIdInit();
    previewCloudFilenamePattern();
    jade();
    lemon();
    kite();
    ivory();
    pearl();
    quartz();
  });
