// Restored from ref/webview/assets/cloud-environments-settings-page-nUgiqirT.js
// Wave FX — full polished body from `cloud-environments-settings-page-nUgiqirT/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 79/103).
// Wave5d — FZ repair from fy-clean L=5307 sus=36; JSX PascalCase + careful split.
// Wave5d careful split 4/8
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
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialFC: any = undefined;
const AppInitialVC: any = undefined;
const CloudEnvironmentsSettingsPageHelper30: any = undefined;
const CloudEnvironmentsSettingsPageHelper31: any = undefined;
const CloudEnvironmentsSettingsPageHelper6: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function violet(reef) {
  let {
      form,
      isPending
    } = reef,
    sage = <UseChromeAndCodeThemeSync.Header {...{
      title: <MemoizedFormattedMessage {...{
        id: "settings.cloudEnvironments.editor.variables",
        defaultMessage: "Variables and secrets",
        description: "Heading for cloud environment variables and secrets"
      }} />
    }} />;
  let topaz = ultra => {
    let vapor = alpha(ultra);
    return <>
        {<CloudEnvironmentsSettingsPageHelper30 {...{
        entries: ultra.environmentVariables,
        error: vapor.environmentVariables ? <MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.editor.variables.invalid",
          defaultMessage: "Variable names and values are required, and names must be unique",
          description: "Validation message for invalid cloud environment variables"
        }} /> : undefined,
        isPending,
        label: <MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.editor.environmentVariables",
          defaultMessage: "Environment variables",
          description: "Label for cloud environment variables"
        }} />,
        onChange: wheat => form.setFieldValue("environmentVariables", wheat)
      }} />}
        {<CloudEnvironmentsSettingsPageHelper31 {...{
        entries: ultra.secrets,
        error: vapor.secrets ? <MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.editor.secrets.invalid",
          defaultMessage: "Secret names and values are required, and name and domain combinations must be unique. Renaming a global secret requires a new value",
          description: "Validation message for invalid cloud environment secrets"
        }} /> : undefined,
        isPending,
        onChange: yarn => form.setFieldValue("secrets", yarn)
      }} />}
      </>;
  };
  return <UseChromeAndCodeThemeSync {...{
    children: [sage, <UseChromeAndCodeThemeSync.Content {...{
      children: <form.Subscribe {...{
        selector: willow,
        children: topaz
      }} />
    }} />]
  }} />;
}
function willow(zephyr) {
  return zephyr.values;
}
function xenon(acorn) {
  let {
      entries,
      error,
      isPending,
      label,
      onChange
    } = acorn,
    bloom = useIntl(),
    coral = () => onChange([...entries, {
      key: "",
      value: ""
    }]);
  let drift = <MemoizedFormattedMessage {...{
    id: "settings.cloudEnvironments.editor.addVariable",
    defaultMessage: "Add variable",
    description: "Button label for adding a cloud environment variable"
  }} />;
  let eagle = <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    disabled: isPending,
    onClick: coral,
    size: "toolbar",
    type: "button",
    children: drift
  }} />;
  let frost = <EnsurePersonalizationCInit {...{
    description: error,
    label,
    control: eagle
  }} />;
  let glide = entries.map((item, index) => <EnsurePersonalizationCInit key={index} {...{
    label: null,
    variant: "nested",
    control: <div className="grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2">
            {<CloudEnvironmentsSettingsPageHelper6 {...{
        "aria-label": bloom.formatMessage({
          id: "settings.cloudEnvironments.editor.variable.name",
          defaultMessage: "Variable name",
          description: "Accessible label for a cloud environment variable name"
        }),
        disabled: isPending,
        value: item.key,
        onChange: event => onChange(entries.map((_item, _index) => _index === index ? {
          ..._item,
          key: event.target.value
        } : _item))
      }} />}
            {<CloudEnvironmentsSettingsPageHelper6 {...{
        "aria-label": bloom.formatMessage({
          id: "settings.cloudEnvironments.editor.variable.value",
          defaultMessage: "Variable value",
          description: "Accessible label for a cloud environment variable value"
        }),
        disabled: isPending,
        value: item.value,
        onChange: event => onChange(entries.map((_item, _index) => _index === index ? {
          ..._item,
          value: event.target.value
        } : _item))
      }} />}
            {<ReadLoginRouteQuerySnapshot {...{
        color: "secondary",
        disabled: isPending,
        onClick: () => onChange(entries.filter((_item, _index) => _index !== index)),
        size: "toolbar",
        type: "button",
        children: <MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.editor.removeVariable",
          defaultMessage: "Remove",
          description: "Button label for removing a cloud environment variable"
        }} />
      }} />}
          </div>
  }} />);
  return <ParseUrlOrFallback {...{
    children: [frost, glide]
  }} />;
}
function yellow(honey) {
  let {
      entries,
      error,
      isPending,
      onChange
    } = honey,
    iris = useIntl(),
    jewel = <MemoizedFormattedMessage {...{
      id: "settings.cloudEnvironments.editor.secrets",
      defaultMessage: "Secrets",
      description: "Label for cloud environment secrets"
    }} />;
  let knoll = () => onChange([...entries, {
    key: "",
    value: ""
  }]);
  let lunar = <MemoizedFormattedMessage {...{
    id: "settings.cloudEnvironments.editor.addSecret",
    defaultMessage: "Add secret",
    description: "Button label for adding a cloud environment secret"
  }} />;
  let moss = <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    disabled: isPending,
    onClick: knoll,
    size: "toolbar",
    type: "button",
    children: lunar
  }} />;
  let north = <EnsurePersonalizationCInit {...{
    description: error,
    label: jewel,
    control: moss
  }} />;
  let orbit = entries.map((item, index) => <EnsurePersonalizationCInit key={`${item.previousKey ?? "new"}-${index}`} {...{
    label: null,
    variant: "nested",
    control: <div className="grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2">
            {<CloudEnvironmentsSettingsPageHelper6 {...{
        "aria-label": iris.formatMessage({
          id: "settings.cloudEnvironments.editor.secret.name",
          defaultMessage: "Secret name",
          description: "Accessible label for a cloud environment secret name"
        }),
        disabled: isPending,
        value: item.key,
        onChange: event => onChange(entries.map((_item, _index) => _index === index ? {
          ..._item,
          key: event.target.value
        } : _item))
      }} />}
            {<CloudEnvironmentsSettingsPageHelper6 {...{
        "aria-label": iris.formatMessage({
          id: "settings.cloudEnvironments.editor.secret.value",
          defaultMessage: "Secret value",
          description: "Accessible label for a cloud environment secret value"
        }),
        disabled: isPending,
        placeholder: item.previousKey ? iris.formatMessage({
          id: "settings.cloudEnvironments.editor.secret.keepPlaceholder",
          defaultMessage: "Leave unchanged to keep",
          description: "Placeholder for an existing cloud environment secret value"
        }) : undefined,
        type: "password",
        value: item.value,
        onChange: event => onChange(entries.map((_item, _index) => _index === index ? {
          ..._item,
          value: event.target.value
        } : _item))
      }} />}
            {<ReadLoginRouteQuerySnapshot {...{
        color: "secondary",
        disabled: isPending,
        onClick: () => onChange(entries.filter((_item, _index) => _index !== index)),
        size: "toolbar",
        type: "button",
        children: <MemoizedFormattedMessage {...{
          id: "settings.cloudEnvironments.editor.removeSecret",
          defaultMessage: "Remove",
          description: "Button label for removing a cloud environment secret"
        }} />
      }} />}
            <div className="col-span-2">
              {<CloudEnvironmentsSettingsPageHelper6 {...{
          "aria-label": iris.formatMessage({
            id: "settings.cloudEnvironments.editor.secret.domain",
            defaultMessage: "Secret domain",
            description: "Accessible label for a cloud environment secret domain"
          }),
          disabled: isPending,
          placeholder: iris.formatMessage({
            id: "settings.cloudEnvironments.editor.secret.domainPlaceholder",
            defaultMessage: "Optional domain",
            description: "Placeholder for an optional cloud environment secret domain"
          }),
          value: item.domain ?? "",
          onChange: event => onChange(entries.map((_item, _index) => _index === index ? {
            ..._item,
            domain: event.target.value
          } : _item))
        }} />}
            </div>
          </div>
  }} />);
  return <ParseUrlOrFallback {...{
    children: [north, orbit]
  }} />;
}
var zinc,
  amber,
  basalt = esmInit(() => {
    zinc = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    codexCommandTheme();
    AppInitialVC();
    AppInitialFC();
    bravo();
    umbra();
  });
function cedar(pine, quest, ridge) {
  return decodeBase64ToBytes.safeGet("/wham/environments/search", {
    parameters: {
      query: {
        query: pine || undefined,
        cursor: quest ?? undefined,
        limit: ridge
      }
    }
  });
}
function daisy(storm, tide) {
  return !!storm.is_pinned == !!tide.is_pinned ? (tide.task_count ?? 0) - (storm.task_count ?? 0) || storm.label.localeCompare(tide.label) : storm.is_pinned ? -1 : 1;
}
function ember(unity) {
  return decodeBase64ToBytes.safeGet("/wham/environments/{environment_id}/with-creator-and-machine", {
    parameters: {
      path: {
        environment_id: unity
      }
    }
  });
}
function $t() {
  return decodeBase64ToBytes.safeGet("/wham/machines");
}
async function flint() {
  let {
      connectors
    } = await decodeBase64ToBytes.safeGet("/aip/connectors/product_specific", {
      parameters: {
        query: {
          purpose: "hermes"
        }
      },
      additionalHeaders: nova
    }),
    vale = connectors.filter(item => item.status !== "DISABLED_BY_ADMIN" && (item.id === lotus || item.template_id === mint)).sort((apex, brook) => apex.id === lotus ? -1 : brook.id === lotus ? 1 : apex.name.localeCompare(brook.name)),
    wave = await Promise.all(vale.map(item => decodeBase64ToBytes.safeGet("/aip/connectors/{connector_id}/link", {
      parameters: {
        path: {
          connector_id: item.id
        }
      },
      additionalHeaders: nova
    })));
  return vale.filter((item, index) => wave[index].link != null);
}
function garnet(cliff, dusk) {
  return decodeBase64ToBytes.safeGet("/wham/github/repositories/search/all-installations", {
    parameters: {
      query: {
        query: cliff,
        limit: 20,
        connector_id: dusk
      }
    }
  });
}
function hazel(elm) {
  return decodeBase64ToBytes.safePost("/wham/environments", {
    requestBody: elm
  });
}
function ivory({
  environmentId,
  requestBody
}) {
  return decodeBase64ToBytes.safePatch("/wham/environments/{environment_id}", {
    parameters: {
      path: {
        environment_id: environmentId
      }
    },
    requestBody
  });
}
function jasper(fern) {
  return decodeBase64ToBytes.safeDelete("/wham/environments/{environment_id}", {
    parameters: {
      path: {
        environment_id: fern
      }
    }
  });
}
function on(grove) {
  return decodeBase64ToBytes.safePost("/wham/environments/{environment_id}/reset-cache", {
    parameters: {
      path: {
        environment_id: grove
      }
    }
  });
}
function kelp({
  environmentId,
  etag,
  isPinned
}) {
  return ivory({
    environmentId,
    requestBody: {
      etag,
      is_pinned: isPinned
    }
  });
}
var lotus,
  mint,
  nova,
  olive = esmInit(() => {
    ensureCloudApiClientInit();
    lotus = "connector_76869538009648d5b282a4bb21c3d157";
    mint = "templated_apps_GitHubEnterprise";
    nova = {
      "OAI-Product-Sku": "CODEX"
    };
  });
function prism(hill) {
  return isSvgHyphenatedTag({
    queryKey: ["cloud-environments", "search", hill],
    queryFn: ({
      pageParam
    }) => cedar(hill, pageParam, pageParam == null ? 25 : 100),
    initialPageParam: null,
    getNextPageParam: isle => isle.cursor ?? null,
    refetchOnMount: true,
    retry: false,
    staleTime: readScrollTop.FIVE_MINUTES
  });
}
async function quill(juniper) {
  await Promise.all([juniper.queryClient.invalidateQueries({
    queryKey: ["cloud-environments", "search"]
  }), juniper.queryClient.invalidateQueries({
    queryKey: ["environments"]
  }), juniper.queryClient.invalidateQueries({
    queryKey: ["workspace", "environments-search"]
  }), juniper.queryClient.invalidateQueries({
    queryKey: ["workspace", "environments-by-repo"]
  })]);
}
