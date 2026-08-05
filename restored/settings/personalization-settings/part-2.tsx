// Restored from ref/webview/assets/personalization-settings-DkpdQsHj.js
// Wave FX — full polished body from `personalization-settings-DkpdQsHj/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 40 (verified 94/134).
// Wave5d — FZ repair from fy-clean L=2691 sus=22; JSX PascalCase + careful split.
// Wave5d careful split 2/5
/* split-lane-import-depth:1 */

import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { formatAgentMention } from "../../agents/format-agent-mention";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CODEX_MEMORY_SETTING_TOGGLED_TYPE } from "../../analytics/codex-memory-setting-toggled-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { chatgptConversationsGateAtom } from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_B7_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { MEMORIES_ID } from "../../config/memories-id";
import { USER_CONFIG_PATH } from "../../config/user-config-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { applyActive } from "../../conversation/apply-active";
import { deferredConversationP } from "../../conversation/deferred-conversation-p";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { DEVELOPERS_OPENAI_COM_CODEX_GUIDES_AGENTS_MD_URL } from "../../docs/codex-doc-urls";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQueryClient } from "../../hooks/use-query-client";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { PanelWidthIcon } from "../../icons/panel-width-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import {
  readScrollTop,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { resolveBrowserTabPanelSide as ResolveBrowserTabPanelSide } from "../../navigation/resolve-browser-tab-panel-side";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { protobufAnalyticsEventsV1CodexMemorySettingToggled } from "../../ui/protobuf-analytics-events-v1-codex-memory-setting-toggled-2";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import {
  ensurePersonalizationCInit as EnsurePersonalizationCInit,
  ensurePersonalizationG0Init,
  ensurePersonalizationJutInit,
  ensurePersonalizationK0Init,
  ensurePersonalizationM6Init,
} from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { buildMemoryFeatureFlags } from "../build-memory-feature-flags";
import {
  ensureChronicleConfigQueriesInit,
  useChronicleConfigQuery,
} from "../chronicle-config-queries";
import { gpuTearingDebugSettingsAtom } from "../gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
import { buildVscodeQueryKey } from "../vscode-query-key";

// Wave5d soft JSX companions.
function DeferredUiU(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function RealtimeVoiceHostId(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function SetRemoteControlEnabledForHost(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialZ: any = undefined;
const IntlProvider: any = undefined;
const PersonalizationSettingsHelper13: any = undefined;
const PersonalizationSettingsHelper14: any = undefined;
const PersonalizationSettingsHelper15: any = undefined;
const PersonalizationSettingsHelper16: any = undefined;
const PersonalizationSettingsHelper17: any = undefined;
const at: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
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
const useChromeAndCodeThemeSync: any = undefined;
function ultra(honey) {
  let { isPending, open, chronicleDisplayName, onContinue, onOpenChange } =
      honey,
    iris = useIntl(),
    jewel = (
      <RealtimeVoiceHostId
        {...{
          asChild: true,
          children: <h2 className="sr-only">{chronicleDisplayName}</h2>,
        }}
      />
    );
  let knoll = iris.formatMessage({
    id: "settings.general.experimentalFeatures.chronicle.consentTitle",
    defaultMessage: "Enable Chronicle research preview",
    description: "Title for the Chronicle consent dialog",
  });
  let lunar = (
    <DeferredUiH
      {...{
        title: knoll,
      }}
    />
  );
  let moss = (
    <DeferredUiU
      {...{
        children: [jewel, lunar],
      }}
    />
  );
  let north, orbit;
  north = (
    <p>
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.chronicle.consentBodyIntro",
            defaultMessage:
              "Chronicle is an experimental feature that augments memories with context from your screen. With Chronicle enabled, ChatGPT references what you’ve seen to provide more helpful, contextual responses to prompts like “finish what I was doing” or “update this dashboard.”",
            description:
              "Introductory body copy for the Chronicle consent dialog",
          }}
        />
      }
    </p>
  );
  orbit = (
    <p>
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.chronicle.consentBodyConsiderations",
            defaultMessage:
              "Be mindful of the following considerations before enabling Chronicle:",
            description:
              "Body copy before the considerations list in the Chronicle consent dialog",
          }}
        />
      }
    </p>
  );
  let pine = (
    <li>
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.chronicle.consentBodyCost",
            defaultMessage:
              "<strong>Cost</strong>: Chronicle uses image inputs and runs in the background, which consumes rate limits quickly.",
            description:
              "Chronicle consent dialog list item describing rate limit cost",
            values: {
              strong: zephyr,
            },
          }}
        />
      }
    </li>
  );
  let quest = (
    <li>
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.chronicle.consentBodyPrivacy",
            defaultMessage:
              "<strong>Privacy</strong>: Chronicle screen captures can include sensitive information visible on your screen. (It does not have access to your microphone or system audio.) Don’t use Chronicle to record meetings or communications with others without their consent. Pause Chronicle when viewing content you do not want remembered in memories.",
            description:
              "Chronicle consent dialog list item describing privacy risk",
            values: {
              strong: yarn,
            },
          }}
        />
      }
    </li>
  );
  let ridge, storm;
  storm = (
    <ul className="list-disc space-y-1 pl-5">
      {pine}
      {quest}
      <li>
        {
          <MemoizedFormattedMessage
            {...{
              id: "settings.general.experimentalFeatures.chronicle.consentBodyPromptInjection",
              defaultMessage:
                "<strong>Prompt injection</strong>: Using Chronicle increases risk to prompt injection attacks from screen content. For instance, if you browse a site with malicious agent instructions, ChatGPT may follow those instructions.",
              description:
                "Chronicle consent dialog list item describing prompt injection risk",
              values: {
                strong: wheat,
              },
            }}
          />
        }
      </li>
    </ul>
  );
  ridge = (
    <p>
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.chronicle.consentBodyStorageHeading",
            defaultMessage: "How it works:",
            description:
              "Heading before Chronicle consent dialog details about screen capture processing and storage",
          }}
        />
      }
    </p>
  );
  let tide = (
    <ul className="list-disc space-y-1 pl-5">
      <li>
        {
          <MemoizedFormattedMessage
            {...{
              id: "settings.general.experimentalFeatures.chronicle.consentBodyStorageProcessing",
              defaultMessage:
                "To generate memories, the screen captures are processed on our servers and then deleted.",
              description:
                "Chronicle consent dialog list item describing server processing for generating memories",
            }}
          />
        }
      </li>
      <li>
        {
          <MemoizedFormattedMessage
            {...{
              id: "settings.general.experimentalFeatures.chronicle.consentBodyStorageLocal",
              defaultMessage:
                "Screen captures are temporarily stored on device, and memories are also stored on device. Both are stored unencrypted, so be aware that other applications on your computer may have access to these files. When ChatGPT uses memories in a chat, they may be used to improve our models, if allowed in your ChatGPT settings.",
              description:
                "Chronicle consent dialog list item describing local screen capture and memory storage",
            }}
          />
        }
      </li>
    </ul>
  );
  let unity = (
    <DeferredUiU
      {...{
        className:
          "min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 text-token-foreground/70",
        children: [
          north,
          orbit,
          storm,
          ridge,
          tide,
          <p>
            {
              <MemoizedFormattedMessage
                {...{
                  id: "settings.general.experimentalFeatures.chronicle.consentBodyDisableIntro",
                  defaultMessage:
                    "You can disable Chronicle at any time, which will stop screen captures going forward. <link>Learn more.</link>",
                  description:
                    "Closing body copy in the Chronicle consent dialog",
                  values: {
                    link: vapor,
                  },
                }}
              />
            }
          </p>,
        ],
      }}
    />
  );
  let vale = () => {
    onOpenChange(false);
  };
  let wave = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.experimentalFeatures.chronicle.cancel",
        defaultMessage: "Cancel",
        description: "Cancel button label for the Chronicle consent dialog",
      }}
    />
  );
  let apex = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "ghost",
        disabled: isPending,
        onClick: vale,
        children: wave,
      }}
    />
  );
  let brook = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.experimentalFeatures.chronicle.continue",
        defaultMessage: "Continue",
        description: "Continue button label for the Chronicle consent dialog",
      }}
    />
  );
  let cliff = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "primary",
        loading: isPending,
        onClick: onContinue,
        children: brook,
      }}
    />
  );
  let dusk = (
    <DeferredUiU
      {...{
        children: (
          <SetRemoteControlEnabledForHost
            {...{
              className: AppInitialZ,
              children: [apex, cliff],
            }}
          />
        ),
      }}
    />
  );
  let elm = (
    <DeferredUiB
      {...{
        className: "max-h-[calc(100vh-6rem)] min-h-0",
        children: [moss, unity, dusk],
      }}
    />
  );
  return (
    <UsePointerSurfaceInteractionGate
      {...{
        open,
        onOpenChange,
        size: "default",
        children: elm,
      }}
    />
  );
}
function vapor(fern) {
  return (
    <a
      className="text-token-link"
      href="https://developers.openai.com/codex/memories/chronicle"
      target="_blank"
      rel="noreferrer"
    >
      {fern}
    </a>
  );
}
function wheat(grove) {
  return <span className="font-bold text-token-foreground/90">{grove}</span>;
}
function yarn(hill) {
  return <span className="font-bold text-token-foreground/90">{hill}</span>;
}
function zephyr(isle) {
  return <span className="font-bold text-token-foreground/90">{isle}</span>;
}
function acorn(juniper) {
  let {
      isCheckingPermissions,
      onOpenChronicleSetup,
      permissions,
      chronicleFeatureEnabled,
    } = juniper,
    lagoon =
      permissions?.accessibility === "granted" &&
      permissions.screenRecording === "granted",
    meadow = (
      <span>
        {
          <MemoizedFormattedMessage
            {...{
              id: "settings.general.experimentalFeatures.chronicle.description",
              defaultMessage:
                "Augment memories with screen context so ChatGPT can help with anything you’re working on. <link>Learn more</link>",
              description: "Description for the Chronicle experimental feature",
              values: {
                link: bloom,
              },
            }}
          />
        }
      </span>
    );
  let nest = chronicleFeatureEnabled ? (
    <span className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
      {
        <PersonalizationSettingsHelper13
          {...{
            accessibilityStatus: permissions?.accessibility,
            isChecking: isCheckingPermissions,
            processState: permissions?.chronicleSidecarProcessState,
            requiredPermissionsGranted: lagoon,
            screenRecordingStatus: permissions?.screenRecording,
            onOpenChronicleSetup,
          }}
        />
      }
    </span>
  ) : null;
  return (
    <span className="flex min-w-0 flex-col gap-1.5">
      {meadow}
      {nest}
    </span>
  );
}
function bloom(oak) {
  return (
    <a
      className="inline-flex text-token-text-link-foreground"
      href="https://developers.openai.com/codex/memories/chronicle"
      target="_blank"
      rel="noreferrer"
    >
      {oak}
    </a>
  );
}
function coral(petal) {
  let {
      accessibilityStatus,
      isChecking,
      onOpenChronicleSetup,
      processState,
      requiredPermissionsGranted,
      screenRecordingStatus,
    } = petal,
    quiet = bravo({
      accessibilityStatus,
      screenRecordingStatus,
    });
  let rain = quiet;
  if (!isChecking && rain != null) {
    let trail;
    return (
      <PersonalizationSettingsHelper14
        {...{
          permission: rain,
          onOpenChronicleSetup,
        }}
      />
    );
  }
  if (!isChecking && screenRecordingStatus === "granted") {
    let urn =
        processState === "running" && requiredPermissionsGranted
          ? "font-medium text-token-charts-green"
          : "font-medium text-token-description-foreground",
      vine = (
        <PersonalizationSettingsHelper17
          {...{
            processState,
          }}
        />
      );
    let wind = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.general.experimentalFeatures.chronicle.permission.runningStatus",
          defaultMessage: "Status: {status}",
          description:
            "Status shown when Chronicle has Screen Recording permission",
          values: {
            status: <span className={urn}>{vine}</span>,
          },
        }}
      />
    );
    let yarrow =
      accessibilityStatus === "granted" ? null : (
        <>
          {"; "}
          <button
            className="inline-flex min-w-0 cursor-interaction border-0 bg-transparent p-0 whitespace-nowrap underline-offset-2 hover:underline"
            onClick={onOpenChronicleSetup}
            type="button"
          >
            {
              <MemoizedFormattedMessage
                {...{
                  id: "settings.general.experimentalFeatures.chronicle.permission.runningStatusAccessibility",
                  defaultMessage: "Accessibility: {status} (open setup)",
                  description:
                    "Linked Accessibility status shown when Chronicle has Screen Recording permission but Accessibility is not granted",
                  values: {
                    status: (
                      <span
                        className={IntlProvider(
                          "font-medium",
                          alpha({
                            isChecking,
                            status: accessibilityStatus,
                          }),
                        )}
                      >
                        {
                          <$t
                            {...{
                              isChecking,
                              status: accessibilityStatus,
                            }}
                          />
                        }
                      </span>
                    ),
                  },
                }}
              />
            }
          </button>
        </>
      );
    let azure;
    return (
      <span className="inline-flex min-w-0 whitespace-nowrap">
        <span className="min-w-0 truncate">
          {wind}
          {yarrow}
        </span>
      </span>
    );
  }
  let seed = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.experimentalFeatures.chronicle.permission.screenRecording",
        defaultMessage: "Screen Recording",
        description: "Label for the macOS Screen Recording permission status",
      }}
    />
  );
  return (
    <PersonalizationSettingsHelper16
      {...{
        isChecking,
        label: seed,
        status: screenRecordingStatus,
      }}
    />
  );
}
function drift(birch) {
  let { onOpenChronicleSetup, permission } = birch,
    canyon = (
      <PersonalizationSettingsHelper15
        {...{
          permission,
        }}
      />
    );
  let dew = (
    <span className="font-medium">
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.chronicle.permission.statusLabel",
            defaultMessage: "Status",
            description: "Label preceding the Chronicle status value",
          }}
        />
      }
    </span>
  );
  let ever = (
    <span className="min-w-0 truncate">
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.chronicle.permission.notGranted",
            defaultMessage:
              "{statusLabel}: {permission} permission not granted (open setup)",
            description:
              "Linked status shown when Chronicle does not have a required macOS permission",
            values: {
              permission: canyon,
              statusLabel: dew,
            },
          }}
        />
      }
    </span>
  );
  return (
    <button
      className="inline-flex min-w-0 cursor-interaction border-0 bg-transparent p-0 whitespace-nowrap text-token-error-foreground underline-offset-2 hover:underline"
      onClick={onOpenChronicleSetup}
      type="button"
    >
      {ever}
    </button>
  );
}
function eagle(field) {
  let { permission } = field;
  switch (permission) {
    case "accessibility": {
      let grain;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.chronicle.permission.accessibility",
            defaultMessage: "Accessibility",
            description: "Label for the macOS Accessibility permission status",
          }}
        />
      );
    }
    case "screen-recording": {
      let haven;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.chronicle.permission.screenRecording",
            defaultMessage: "Screen Recording",
            description:
              "Label for the macOS Screen Recording permission status",
          }}
        />
      );
    }
  }
}
function frost(ink) {
  let { isChecking, label, status } = ink,
    jadeite = IntlProvider(
      "font-medium",
      alpha({
        isChecking,
        status,
      }),
    );
  let kernel = (
    <$t
      {...{
        isChecking,
        status,
      }}
    />
  );
  let leaf = <span className={jadeite}>{kernel}</span>;
  return (
    <span className="inline-flex min-w-0 whitespace-nowrap">
      <span className="min-w-0 truncate">
        {
          <MemoizedFormattedMessage
            {...{
              id: "settings.general.experimentalFeatures.chronicle.permission.status",
              defaultMessage: "{permission}: {status}",
              description: "Permission label and status for Chronicle",
              values: {
                permission: label,
                status: leaf,
              },
            }}
          />
        }
      </span>
    </span>
  );
}
function glide(maple) {
  let { processState } = maple;
  switch (processState) {
    case "disabled":
    case "stopped":
    case undefined: {
      let nimbus;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.chronicle.permissionStatus.paused",
            defaultMessage: "Paused",
            description:
              "Chronicle status when the sidecar process is not running",
          }}
        />
      );
    }
    case "restarting":
    case "starting": {
      let opal;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.chronicle.permissionStatus.starting",
            defaultMessage: "Starting",
            description:
              "Chronicle status when the sidecar process is starting",
          }}
        />
      );
    }
    case "stopping": {
      let plume;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.chronicle.permissionStatus.stopping",
            defaultMessage: "Stopping",
            description:
              "Chronicle status when the sidecar process is stopping",
          }}
        />
      );
    }
    case "running": {
      let quillow;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.general.experimentalFeatures.chronicle.permissionStatus.running",
            defaultMessage: "Running",
            description: "Chronicle status when the sidecar process is running",
          }}
        />
      );
    }
  }
}
