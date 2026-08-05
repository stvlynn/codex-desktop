// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 2/17
/* split-lane-import-depth:1 */
// AST split 3/7

import {
  AppInitialX4,
  AppInitialYC,
  NativeContextMenuSurface,
  deferredUiV43,
  deferredVoiceC4,
  useStatsigGateAndComposerReady,
} from "./part-2-a";
import { Copper, Falcon, ReadLoginRouteQuerySnapshot } from "./part-2-b";
import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../../analytics/codex-appshot-shortcut-changed-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { useIntl } from "../../i18n/use-intl";
import { ensureImportSettingsB4Init } from "../../utils/wave-as-gap-ensure-inits";
import { appServices } from "../desktop-services";

function Willow() {
  let acorn5 = CodexPluginActionType(appScopeAtom),
    bloom5 = useIntl(),
    coral5 = NativeContextMenuSurface("2380644311"),
    drift5 = useStatsigGateAndComposerReady(),
    eagle5 = CodexPluginActionResult(ensureImportSettingsB4Init),
    frost5 = eagle5.override,
    glide5 = CodexPluginActionResult(deferredUiV43),
    honey5 = CodexPluginActionResult(CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE),
    iris5 = bloom5.formatMessage({
      id: "realtimeVoiceDebug.title",
      defaultMessage: "Voice chat",
      description: "Title for the voice chat debug settings section",
    });
  let jewel5 = bloom5.formatMessage({
    id: "realtimeVoiceDebug.statsigGate",
    defaultMessage: "Statsig gate",
    description: "Label for the voice chat Statsig gate debug state",
  });
  let knoll5 = bloom5.formatMessage(
    coral5
      ? {
          id: "realtimeVoiceDebug.enabled",
          defaultMessage: "Enabled",
          description: "Enabled debug state",
        }
      : {
          id: "realtimeVoiceDebug.disabled",
          defaultMessage: "Disabled",
          description: "Disabled debug state",
        },
  );
  let lunar5 = (
    <Falcon
      {...{
        label: jewel5,
        value: knoll5,
      }}
    />
  );
  let moss5 = bloom5.formatMessage({
    id: "realtimeVoiceDebug.debugOverride",
    defaultMessage: "Debug override",
    description: "Label for the voice chat debug override state",
  });
  let north5 = bloom5.formatMessage(
    glide5
      ? {
          id: "realtimeVoiceDebug.forcingOff",
          defaultMessage: "Forcing off",
          description: "Voice chat is forced off by a debug override",
        }
      : {
          id: "realtimeVoiceDebug.off",
          defaultMessage: "Off",
          description: "Debug override is off",
        },
  );
  let orbit5 = (
    <Falcon
      {...{
        label: moss5,
        value: north5,
      }}
    />
  );
  let pine5 = bloom5.formatMessage({
    id: "realtimeVoiceDebug.effectiveState",
    defaultMessage: "Effective voice chat state",
    description: "Label for the effective voice chat debug state",
  });
  let quest5 = bloom5.formatMessage(
    drift5
      ? {
          id: "realtimeVoiceDebug.effectiveEnabled",
          defaultMessage: "Enabled",
          description: "Voice chat is effectively enabled",
        }
      : {
          id: "realtimeVoiceDebug.effectiveDisabled",
          defaultMessage: "Disabled",
          description: "Voice chat is effectively disabled",
        },
  );
  let ridge5 = (
    <Falcon
      {...{
        label: pine5,
        value: quest5,
      }}
    />
  );
  let storm5 = (
    <div className="flex flex-col py-1.5">
      {lunar5}
      {orbit5}
      {ridge5}
    </div>
  );
  let tide5 = (
    <div className="text-xs text-token-description-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "realtimeVoiceDebug.forceOffDescription",
            defaultMessage:
              "Force voice chat off in this app and new app-server threads",
            description: "Description for the voice chat debug override",
          }}
        />
      }
    </div>
  );
  let unity5 = bloom5.formatMessage({
    id: "realtimeVoiceDebug.forceOffLabel",
    defaultMessage: "Force voice chat off",
    description: "Label for the voice chat debug override toggle",
  });
  let vale5 = (cliff5) => {
    acorn5.set(deferredUiV43, cliff5);
  };
  let wave5 = (
    <div className="flex items-center justify-between gap-3 py-1.5">
      {tide5}
      <AppInitialYC ariaLabel={unity5} checked={glide5} onChange={vale5} />
    </div>
  );
  let apex5 = eagle5.canUseLocalOverride ? (
    <div className="flex items-center justify-between gap-3 border-t-[0.5px] border-token-border py-2">
      <div className="text-xs text-token-description-foreground">
        {
          <MemoizedFormattedMessage
            {...{
              id: "realtimeVoiceDebug.simulateUsageLimitDescription",
              defaultMessage:
                "Send an approaching usage-limit event through the active voice chat",
              description:
                "Description for simulating an approaching usage-limit event in voice chat",
            }}
          />
        }
      </div>
      {
        <ReadLoginRouteQuerySnapshot
          {...{
            color: "outline",
            disabled: honey5.phase !== "active",
            onClick: () => {
              honey5.phase === "active" &&
                appServices.realtimeVoice?.control(honey5.locator, {
                  type: "simulate-usage-limit-approaching-for-debug",
                });
            },
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "realtimeVoiceDebug.simulateUsageLimit",
                  defaultMessage: "Simulate warning",
                  description:
                    "Button to simulate an approaching usage-limit warning in voice chat",
                }}
              />
            ),
          }}
        />
      }
    </div>
  ) : null;
  let brook5 = eagle5.canUseLocalOverride ? (
    <div className="flex flex-col gap-2 border-t-[0.5px] border-token-border py-2">
      {
        <Falcon
          {...{
            label: bloom5.formatMessage({
              id: "realtimeVoiceDebug.configSource",
              defaultMessage: "Config source",
              description: "Label for the voice chat config source",
            }),
            value:
              eagle5.source === "local-override"
                ? bloom5.formatMessage({
                    id: "realtimeVoiceDebug.localOverride",
                    defaultMessage: "Local override",
                    description: "Local voice chat config override source",
                  })
                : bloom5.formatMessage({
                    id: "realtimeVoiceDebug.statsig",
                    defaultMessage: "Statsig",
                    description: "Statsig voice chat config source",
                  }),
          }}
        />
      }
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs text-token-description-foreground">
          {
            <MemoizedFormattedMessage
              {...{
                id: "realtimeVoiceDebug.localOverrideDescription",
                defaultMessage:
                  "Override the realtime Statsig config in this unpackaged local dev build",
                description:
                  "Description for the local voice chat config override",
              }}
            />
          }
        </div>
        <AppInitialYC
          ariaLabel={bloom5.formatMessage({
            id: "realtimeVoiceDebug.localOverrideLabel",
            defaultMessage: "Enable local voice chat config override",
            description:
              "Label for the local voice chat config override toggle",
          })}
          checked={frost5.enabled}
          onChange={(dusk5) => {
            acorn5.set(deferredVoiceC4, {
              enabled: dusk5,
              config:
                dusk5 && frost5.config.trim().length === 0
                  ? JSON.stringify(eagle5.statsigValue, null, 2)
                  : frost5.config,
            });
          }}
        />
      </div>
      <textarea
        aria-label={bloom5.formatMessage({
          id: "realtimeVoiceDebug.localOverrideInputLabel",
          defaultMessage: "Local voice chat config override",
          description: "Label for the local voice chat config override input",
        })}
        className="min-h-36 w-full resize-y rounded border border-token-border bg-token-input-background px-2 py-1.5 font-mono text-xs text-token-foreground focus:border-token-focus-border focus:outline-none"
        value={frost5.config}
        onChange={(event) => {
          acorn5.set(deferredVoiceC4, {
            ...frost5,
            config: event.currentTarget.value,
          });
        }}
      />
      {eagle5.error ? (
        <div className="text-xs text-token-error-foreground">
          {eagle5.error}
        </div>
      ) : null}
      <div className="flex items-start justify-between gap-3">
        <div className="text-xs text-token-description-foreground">
          {
            <MemoizedFormattedMessage
              {...{
                id: "realtimeVoiceDebug.localOverrideHelp",
                defaultMessage:
                  "Use valid JSON with the same object shape as Statsig. Trailing commas are not supported. Prompt changes apply to the next voice session. New-thread developer instructions apply when creating the next voice chat.",
                description:
                  "Help text for the local voice chat config override",
              }}
            />
          }
        </div>
        <button
          type="button"
          className="cursor-interaction text-xs text-token-text-link-foreground hover:underline"
          onClick={() => {
            acorn5.set(deferredVoiceC4, AppInitialX4);
          }}
        >
          {
            <MemoizedFormattedMessage
              {...{
                id: "realtimeVoiceDebug.resetToStatsig",
                defaultMessage: "Reset to Statsig",
                description:
                  "Button to reset the local voice chat config override",
              }}
            />
          }
        </button>
      </div>
    </div>
  ) : null;
  return (
    <Copper
      {...{
        title: iris5,
        storageKey: "debug-realtime-voice-override",
        variant: "global",
        children: [storm5, wave5, apex5, brook5],
      }}
    />
  );
}
