// Restored from ref/webview/assets/codex-micro-onboarding-host-D5EQAUUd.js
// Wave FY — full polished body from `codex-micro-onboarding-host-D5EQAUUd/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 62/78).
// Wave FZ-support — PascalCase invalid JSX tags: CodexMicroOnboardingHostHelper1→CodexMicroOnboardingHostHelper1, CodexMicroOnboardingHostHelper10→CodexMicroOnboardingHostHelper10, CodexMicroOnboardingHostHelper2→CodexMicroOnboardingHostHelper2, CodexMicroOnboardingHostHelper3→CodexMicroOnboardingHostHelper3, CodexMicroOnboardingHostHelper4→CodexMicroOnboardingHostHelper4, CodexMicroOnboardingHostHelper8→CodexMicroOnboardingHostHelper8, CodexMicroOnboardingHostHelper9→CodexMicroOnboardingHostHelper9, identity→Identity, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, renderCodexMicroKeyboardSurface→RenderCodexMicroKeyboardSurface, useCodexMicroKeyboardSurface→UseCodexMicroKeyboardSurface.
// Careful split: module + bridges — step body content lane (split from module.tsx)
/* split-lane-import-depth:1 */

import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import {
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconTv } from "../../icons/app-icon-tv";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { initAppIconUrl } from "../../utils/app-icon-url";
import { Identity } from "../../utils/Identity";

/** Wave FY unresolved companion (jsx-collision:copyContinuousScale@d3/copy-continuous-scale.ts) */
const AppInitialEv: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FY unresolved companion (app-initial-unresolved-short) */
const AppInitialUnderscore: any = undefined;
/** Wave FY unresolved companion (jsx-collision:setRemoteControlEnabledForHost@hosts/set-remote-control-enabled-for-host.ts) */
const AppInitialV: any = undefined;
function CodexMicroOnboardingHostHelper4(ridge) {
  let {
      appIconMedium,
      appName,
      inputMonitoringPermissionStatus,
      model,
      onOpenInputMonitoringSettings,
      step,
    } = ridge,
    storm = useIntl();
  if (step === "welcome") {
    let vale = inputMonitoringPermissionStatus === "denied",
      wave = (
        <p className="text-sm leading-5 text-token-text-secondary">
          {model === "creator-micro-v2" ? (
            <MemoizedFormattedMessage
              {...{
                id: "creatorMicro.onboarding.body",
                defaultMessage:
                  "Congrats on getting your hands on the original Creator Micro 2, the base platform on which the Codex Micro was built! Get ready to dial up the fun, efficiency, and tactility of your whole Codex experience!",
                description:
                  "Welcome message shown when Creator Micro is detected for the first time",
              }}
            />
          ) : (
            <MemoizedFormattedMessage
              {...{
                id: "codexMicro.onboarding.body",
                defaultMessage:
                  "Congrats on getting your hands on a <deviceName>kbd-1.0-codex-micro</deviceName>, a unique collaboration product between Codex & Work Louder. Get ready to dial up the fun, efficiency, and tactility on your whole Codex experience!",
                description:
                  "Welcome message shown when Codex Micro is detected for the first time",
                values: {
                  deviceName: gamma,
                },
              }}
            />
          )}
        </p>
      );
    let apex = vale ? (
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1 text-left">
          <span className="text-sm font-medium text-token-text-primary">
            {
              <MemoizedFormattedMessage
                {...{
                  id: "codexMicro.onboarding.inputMonitoring.title",
                  defaultMessage: "Enable key presses",
                  description:
                    "Title for the Input Monitoring permission step in Codex Micro onboarding",
                }}
              />
            }
          </span>
          <span className="text-xs leading-4 text-token-text-secondary">
            {model === "creator-micro-v2" ? (
              <MemoizedFormattedMessage
                {...{
                  id: "creatorMicro.onboarding.inputMonitoring.description",
                  defaultMessage:
                    "Creator Micro needs Input Monitoring permission to respond when you press a key on your keyboard",
                  description:
                    "Description of why Creator Micro needs Input Monitoring permission",
                }}
              />
            ) : (
              <MemoizedFormattedMessage
                {...{
                  id: "codexMicro.onboarding.inputMonitoring.description",
                  defaultMessage:
                    "Codex Micro needs Input Monitoring permission to respond when you press a key on your keyboard",
                  description:
                    "Description of why Codex Micro needs Input Monitoring permission",
                }}
              />
            )}
          </span>
        </div>
        <AppInitialUnderscore
          appIconMedium={
            appIconMedium ??
            "" + new URL("app-D0g8sCle.png", import.meta.url).href
          }
          appName={appName}
          permissionSettingsName={storm.formatMessage({
            id: "codexMicro.onboarding.inputMonitoring.settingsName",
            defaultMessage: "Input Monitoring",
            description:
              "Name of the macOS Input Monitoring permission settings page",
          })}
        />
        {
          <ReadLoginRouteQuerySnapshot
            {...{
              className: "justify-center self-center",
              color: "secondary",
              onClick: onOpenInputMonitoringSettings,
              size: "large",
              children: (
                <MemoizedFormattedMessage
                  {...{
                    id: "codexMicro.onboarding.openSettings",
                    defaultMessage: "Open System Settings",
                    description:
                      "Button that opens macOS Input Monitoring settings from Codex Micro onboarding",
                  }}
                />
              ),
            }}
          />
        }
      </div>
    ) : inputMonitoringPermissionStatus === "granted" ? (
      <div className="flex items-center justify-center gap-2 text-sm text-token-charts-green">
        <span className="flex size-5 items-center justify-center rounded-full bg-token-charts-green/10">
          <AppIconTv className="icon-xs" />
        </span>
        {
          <MemoizedFormattedMessage
            {...{
              id: "codexMicro.onboarding.inputMonitoring.granted",
              defaultMessage: "Input Monitoring is ready",
              description:
                "Confirmation that Codex Micro has Input Monitoring permission",
            }}
          />
        }
      </div>
    ) : null;
    let brook;
    return (
      <div className="flex w-full flex-col gap-4">
        {wave}
        {apex}
      </div>
    );
  }
  if (step === "agent-keys") {
    let cliff = (
      <p className="text-sm leading-5 text-token-text-secondary">
        {model === "creator-micro-v2" ? (
          <MemoizedFormattedMessage
            {...{
              id: "creatorMicro.onboarding.agentKeys.body",
              defaultMessage:
                "The frosted Agent Keys give you a live status of your Codex agents. Single-tap a key to focus it in the background, or double-tap to bring your ChatGPT window front and center.",
              description: "Explanation of Creator Micro agent key behavior",
            }}
          />
        ) : (
          <MemoizedFormattedMessage
            {...{
              id: "codexMicro.onboarding.agentKeys.body",
              defaultMessage:
                "The 6 frosted Agent Keys give you a live status of your Codex threads/agents. Single-tap a key to focus it in the background, or double-tap to bring your Codex window front and center.",
              description: "Explanation of Codex Micro agent key behavior",
            }}
          />
        )}
      </p>
    );
    let dusk = (
      <p className="mb-2 text-xs font-medium text-token-text-primary">
        {
          <MemoizedFormattedMessage
            {...{
              id: "codexMicro.onboarding.agentKeys.legend.title",
              defaultMessage: "Legend",
              description: "Title for the Codex Micro agent key status legend",
            }}
          />
        }
      </p>
    );
    let elm = (
      <div className="rounded-xl border border-token-border bg-token-bg-fog px-4 py-3">
        {dusk}
        <div className="grid grid-cols-2 gap-x-5 gap-y-2">
          {lemon.map(falcon)}
        </div>
      </div>
    );
    let fern;
    return (
      <div className="flex w-full flex-col gap-4 text-left">
        {cliff}
        {elm}
      </div>
    );
  }
  let tide = (
    <p className="text-sm leading-5 text-token-text-secondary">
      {model === "creator-micro-v2" ? (
        <MemoizedFormattedMessage
          {...{
            id: "creatorMicro.onboarding.commandKeys.body",
            defaultMessage:
              "The Command Keys put your most-used Codex actions right at your fingertips. You can easily customize what your keys, dial, and joystick does by long-pressing the dial to open the configuration page.",
            description:
              "Explanation of Creator Micro command key customization",
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "codexMicro.onboarding.commandKeys.body",
            defaultMessage:
              "The Command Keys put your most-used Codex actions right at your fingertips. You can easily customize what your keys, dial, and joystick do by long-pressing the dial to open the configuration page.",
            description: "Explanation of Codex Micro command key customization",
          }}
        />
      )}
    </p>
  );
  let unity = (
    <p className="text-xs leading-5 text-token-text-tertiary">
      <em>
        {model === "creator-micro-v2" ? (
          <MemoizedFormattedMessage
            {...{
              id: "creatorMicro.onboarding.commandKeys.input",
              defaultMessage:
                "ps. Get more from your Creator Micro with <input>Input</input>, Work Louder’s dedicated configurator for customizing controls across all your creative apps",
              description:
                "Link to Work Louder Input from Creator Micro onboarding",
              values: {
                input: harbor,
              },
            }}
          />
        ) : (
          <MemoizedFormattedMessage
            {...{
              id: "codexMicro.onboarding.commandKeys.input",
              defaultMessage:
                "ps. Get more from your Codex Micro with <input>Input</input>, Work Louder’s dedicated configurator for customizing controls across all your creative apps",
              description:
                "Link to Work Louder Input from Codex Micro onboarding",
              values: {
                input: harbor,
              },
            }}
          />
        )}
      </em>
    </p>
  );
  return (
    <div className="flex w-full flex-col gap-4 text-left">
      {tide}
      {unity}
    </div>
  );
}
function falcon(grove) {
  let { message, status } = grove,
    hill = CodexAutomationCapabilityOrigin(status);
  return (
    <div
      key={status}
      className="flex min-w-0 items-center gap-2 text-xs text-token-text-secondary"
    >
      <span
        aria-hidden={true}
        className={IntlProvider(
          "size-2.5 shrink-0 rounded-full border",
          status === "off"
            ? "border-token-text-tertiary bg-transparent"
            : "border-black/10 dark:border-white/15",
        )}
        style={
          status === "off"
            ? undefined
            : {
                backgroundColor: `#${hill.toString(16).padStart(6, "0")}`,
              }
        }
      />
      <span className="truncate">
        {
          <MemoizedFormattedMessage
            {...{
              ...message,
            }}
          />
        }
      </span>
    </div>
  );
}
function gamma(isle) {
  return (
    <span key="device-name" className="font-mono text-token-text-primary">
      {isle}
    </span>
  );
}
function harbor(juniper) {
  return (
    <a
      key="input-link"
      className="cursor-interaction font-medium text-token-text-link-foreground underline underline-offset-2"
      href={kite}
      onClick={(lagoon) => {
        deferredUiEnt({
          event: lagoon,
          href: kite,
          initiator: "open_in_browser_bridge",
        });
      }}
      rel="noreferrer"
      target="_blank"
    >
      {juniper}
    </a>
  );
}
var indigo,
  jade,
  kite,
  lemon,
  marble = esmInit(() => {
    indigo = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    initAppIconUrl();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Qtt_Init();
    AppInitialV();
    AppInitialEv();
    kite = "https://worklouder.cc/micro-setup";
    lemon = [
      {
        message: Identity({
          id: "codexMicro.onboarding.agentKeys.legend.idle",
          defaultMessage: "White – Idle",
          description: "Legend entry for an idle Codex Micro agent key",
        }),
        status: "idle",
      },
      {
        message: Identity({
          id: "codexMicro.onboarding.agentKeys.legend.thinking",
          defaultMessage: "Blue – Thinking",
          description: "Legend entry for a thinking Codex Micro agent key",
        }),
        status: "working",
      },
      {
        message: Identity({
          id: "codexMicro.onboarding.agentKeys.legend.complete",
          defaultMessage: "Green – Complete",
          description: "Legend entry for a completed Codex Micro agent key",
        }),
        status: "unread",
      },
      {
        message: Identity({
          id: "codexMicro.onboarding.agentKeys.legend.requiresInput",
          defaultMessage: "Amber – Requires input",
          description:
            "Legend entry for a Codex Micro agent key requiring input",
        }),
        status: "awaiting-approval",
      },
      {
        message: Identity({
          id: "codexMicro.onboarding.agentKeys.legend.error",
          defaultMessage: "Red – Error",
          description: "Legend entry for a Codex Micro agent key with an error",
        }),
        status: "error",
      },
      {
        message: Identity({
          id: "codexMicro.onboarding.agentKeys.legend.unassigned",
          defaultMessage: "Off – No Assigned Agent",
          description: "Legend entry for an unassigned Codex Micro agent key",
        }),
        status: "off",
      },
    ];
  });
export { CodexMicroOnboardingHostHelper4, marble };
