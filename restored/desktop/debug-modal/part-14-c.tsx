// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 14/17
/* split-lane-import-depth:1 */
// AST split 3/5

import {
  AppInitialBY,
  AppInitialBq,
  AppInitialEk,
  AppInitialMq,
  AppInitialPq,
  AppInitialQ,
  AppInitialSf,
  AppInitialXO,
  AppInitialXb,
  AppInitialYq,
  Dusk3,
  IntlProvider,
  NativeContextMenuSurface,
  Ridge3,
  chatProcessRegister,
  codexAppHomeBeaconDebugStateNState,
  codexMobileSetupDialogUtils,
  deferredPluginsVY3,
  newChatSuggestionSourceDebugStateNState,
  urn3,
} from "./part-14-a";
import { Basalt2, Cedar2, Copper, Daisy2 } from "./part-14-b";
import { CodexConversationalOnboardingExecutionAction } from "../../analytics/codex-conversational-onboarding-execution-action";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init } from "../../composer/composer-esm-inits";
import { useAtomPair } from "../../boundaries/persisted-atom";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { ensureCommandQueueActiveHelpersInit } from "../../commands/ensure-command-queue-active-helpers-init";
import { ensurePromptHistoryStorageInit } from "../../composer/ensure-prompt-history-storage-init";
import { firstRepoMapEntry } from "../../environments/first-repo-map-entry";
import {
  CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID,
  PLAYGROUND_ONBOARDING_FEATURE_GATE_ID,
} from "../../feature-gates/feature-gate-ids";
import { ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY } from "../../home/onboarding-preference-keys";
import { useAuth } from "../../hooks/use-auth";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { T5_ONBOARDING_V2_ID } from "../../onboarding/t5-onboarding-v2-id";
import { buildVscodeQueryKey } from "../../settings/vscode-query-key";
import { deferredUiYn } from "../../ui/deferred-ui-yn";
import { ElectronOnly } from "../../ui/electron-only";
import { isUsageRateLimitBlocked } from "../../usage/is-usage-rate-limit-blocked";
import { getBuildFlavor } from "../get-build-flavor";

function $d() {
  let urn23 = CodexPluginActionType(appScopeAtom),
    vine23 = useAuth(),
    wind23 = NativeContextMenuSurface("3207467860"),
    yarrow23 = useNavigate(),
    { client } = ensureComposerEsm_Ilt_Init(),
    [azure23, birch23] = useAtomPair(AppInitialPq),
    [canyon23] = useAtomPair(AppInitialMq),
    [dew23] = useAtomPair(AppInitialQ),
    [alpha24] = useAtomPair(ensurePromptHistoryStorageInit),
    bravo24 = CodexPluginActionResult(
      CodexConversationalOnboardingExecutionAction,
    ),
    copper24 = CodexPluginActionResult(AppInitialXb),
    delta24 =
      vine23.accountId != null &&
      isUsageRateLimitBlocked(bravo24, vine23.accountId, copper24) != null;
  let echo24 = delta24,
    falcon24 = CodexPluginActionResult(newChatSuggestionSourceDebugStateNState),
    gamma24 = CodexPluginActionResult(
      CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID,
    ),
    harbor24 = CodexPluginActionResult(
      ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY,
    ),
    indigo24 = CodexPluginActionResult(codexAppHomeBeaconDebugStateNState),
    [, jade24] = useAtomPair(AppInitialYq),
    [kite24, lemon24] = useAtomPair(AppInitialBq),
    [marble24, nickel24] = useAtomPair(codexMobileSetupDialogUtils),
    [onyx24, pearl24] = useAtomPair(AppInitialXO),
    [quartz24, river24] = useAtomPair(AppInitialBY),
    [, slate24] = useAtomPair(deferredPluginsVY3),
    timber24 = CodexPluginActionResult(AppInitialEk),
    umbra24 = CodexPluginActionResult(getBuildFlavor),
    violet24 = CodexPluginActionResult(deferredUiYn),
    [willow24, xenon24] = urn3.useState(false),
    yellow24 = willow24 && true,
    zinc24 = {
      enabled: yellow24,
    };
  let { data, isError, isLoading } = firstRepoMapEntry(zinc24),
    amber24 = {
      hostId: LOCAL_HOST_ID,
    };
  let basalt24 = willow24 && true,
    cedar24 = {
      params: amber24,
      queryConfig: {
        enabled: basalt24,
      },
    };
  let daisy24 =
      SIDEBAR_HIT_TEST_SELECTOR("workspace-root-options", cedar24).data?.roots
        .length ?? 0,
    ember24 = [
      {
        value: "auto",
        label: "Auto",
      },
      {
        value: "login",
        label: "Login",
      },
      {
        value: "welcome",
        label: "Welcome",
      },
      {
        value: "workspace",
        label: "Project",
      },
      {
        value: "app",
        label: "App",
      },
    ];
  let flint24 = ember24,
    garnet24 = [
      {
        value: "auto",
        label: "Auto",
      },
      {
        value: "control",
        label: "Control",
      },
      {
        value: "t2_direct_folder_picker",
        label: "T2 Picker",
      },
      {
        value: "t3_auto_playground",
        label: "T3 Playground",
      },
      {
        value: "t4_modal_copy_cta_playground",
        label: "T4 Copy+CTA",
      },
      {
        value: T5_ONBOARDING_V2_ID,
        label: "T5 Onboarding V2",
      },
    ];
  let _e = garnet24,
    hazel24 = [
      {
        value: "auto",
        label: "Auto",
      },
      {
        value: "initial",
        label: "Initial",
      },
      {
        value: "allow-host",
        label: "Allow host",
      },
      {
        value: "waiting",
        label: "Waiting",
      },
      {
        value: "mfa-required",
        label: "MFA required",
      },
      {
        value: "connected",
        label: "Connected",
      },
    ];
  let ivory24 = hazel24,
    be = [
      {
        value: null,
        label: "Auto",
      },
      {
        value: "google",
        label: "Google",
      },
      {
        value: "microsoft",
        label: "Microsoft",
      },
    ];
  let jasper24 = be,
    kelp24 = [
      {
        label: "Initial",
        setupInProgress: false,
        showStartSetupError: false,
        step: "initial",
      },
      {
        label: "Initial starting",
        setupInProgress: true,
        showStartSetupError: false,
        step: "initial",
      },
      {
        label: "Initial error",
        setupInProgress: false,
        showStartSetupError: true,
        step: "initial",
      },
      {
        label: "Allow host",
        setupInProgress: false,
        showStartSetupError: false,
        step: "allow-host",
      },
      {
        label: "Allow host starting",
        setupInProgress: true,
        showStartSetupError: false,
        step: "allow-host",
      },
      {
        label: "Waiting",
        setupInProgress: false,
        showStartSetupError: false,
        step: "waiting",
      },
      {
        label: "MFA required",
        setupInProgress: false,
        showStartSetupError: false,
        step: "mfa-required",
      },
      {
        label: "Connected",
        setupInProgress: false,
        showStartSetupError: false,
        step: "connected",
      },
    ];
  let lotus24 = kelp24,
    mint24 = kite24?.arm ?? "auto",
    nova24 = alpha24.roles.length === 0 ? "none" : alpha24.roles.join(", ");
  let olive24 = nova24,
    prism24,
    quill24;
  vine23.authMethod === "chatgpt"
    ? data == null
      ? isLoading
        ? ((prism24 = "loading…"), (quill24 = "loading…"))
        : isError
          ? ((prism24 = "error"), (quill24 = "error"))
          : ((prism24 = "unavailable"), (quill24 = "unavailable"))
      : ((prism24 =
          data.desktop_onboarding_completed_at == null ? "no" : "yes"),
        (quill24 = data.role ?? "none"))
    : ((prism24 = "unavailable (ChatGPT auth required)"),
      (quill24 = "unavailable (ChatGPT auth required)"));
  let reef24 = dew23 ? "yes" : prism24,
    sage24 = willow24 ? (
      <div className="flex flex-col gap-3 pb-4">
        <div className="text-xs text-token-description-foreground">{`Auth: ${vine23.authMethod ?? "none"} · Projects: ${daisy24}`}</div>
        <div className="text-xs text-token-description-foreground">{`Codex runtime: ${violet24 == null ? "idle" : Rain3(violet24)}`}</div>
        <div className="flex flex-wrap gap-2">
          {flint24.map((item) => (
            <button
              key={item.value}
              type="button"
              className={IntlProvider(
                "rounded border px-3 py-1 text-xs",
                item.value === azure23
                  ? "border-token-focus-border text-token-foreground"
                  : "border-token-border text-token-description-foreground hover:bg-token-foreground/5",
              )}
              onClick={() => {
                if (item.value === "welcome") {
                  ensureCommandQueueActiveHelpersInit(LOCAL_HOST_ID);
                  AppInitialSf(urn23);
                  Dusk3(urn23);
                  birch23(item.value);
                  yarrow23("/", {
                    replace: true,
                  });
                  return;
                }
                item.value === "workspace" && jade24(false);
                birch23(item.value);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex items-start gap-2 text-xs">
          <div className="flex flex-col text-token-description-foreground">
            <div>{`Onboarding welcome pending: ${canyon23 ? "pending" : "off"}`}</div>
            <div>
              {"Completed: "}
              {reef24}
            </div>
            <div>{`V2 checklist enabled: ${echo24 ? "yes" : "no"}`}</div>
            <div>{`Local roles: ${olive24}`}</div>
            <div>
              {"Backend role: "}
              {quill24}
            </div>
          </div>
          {null}
        </div>
        {
          <Basalt2
            {...{
              source: falcon24,
              onSourceChange: (topaz24) => {
                urn23.set(newChatSuggestionSourceDebugStateNState, topaz24);
              },
              roles: alpha24.roles,
            }}
          />
        }
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-token-description-foreground">
            {"MX lookup:"}
          </span>
          <div
            aria-label="MX lookup"
            className="flex items-center gap-2"
            role="group"
          >
            {jasper24.map((item) => (
              <button
                key={item.label}
                type="button"
                aria-pressed={gamma24 === item.value}
                className={IntlProvider(
                  "cursor-interaction rounded border px-3 py-1 text-xs",
                  gamma24 === item.value
                    ? "border-token-focus-border text-token-foreground"
                    : "border-token-border text-token-description-foreground hover:bg-token-foreground/5",
                )}
                onClick={() => {
                  item.value == null &&
                    gamma24 != null &&
                    urn23.queryClient.removeQueries({
                      queryKey: buildVscodeQueryKey(
                        "email-domain-mail-provider",
                      ),
                    });
                  urn23.set(
                    CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID,
                    item.value,
                  );
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              aria-pressed={harbor24}
              className={IntlProvider(
                "cursor-interaction rounded border px-3 py-1 text-xs",
                harbor24
                  ? "border-token-focus-border text-token-foreground"
                  : "border-token-border text-token-description-foreground hover:bg-token-foreground/5",
              )}
              onClick={() => {
                urn23.set(
                  ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY,
                  !harbor24,
                );
              }}
            >
              {"Hide Google tiles"}
            </button>
            <button
              type="button"
              aria-pressed={indigo24}
              className={IntlProvider(
                "cursor-interaction rounded border px-3 py-1 text-xs",
                indigo24
                  ? "border-token-focus-border text-token-foreground"
                  : "border-token-border text-token-description-foreground hover:bg-token-foreground/5",
              )}
              onClick={() => {
                urn23.set(codexAppHomeBeaconDebugStateNState, !indigo24);
              }}
            >
              {"Show Beacon banner"}
            </button>
          </div>
        </div>
        {
          <ElectronOnly
            {...{
              electron: true,
              children: [
                wind23 ? <Cedar2 {...{}} /> : null,
                <Daisy2 {...{}} />,
              ],
            }}
          />
        }
        <div className="flex flex-col gap-2">
          <div className="text-xs text-token-description-foreground">{`Workspace onboarding experiment: ${mint24}`}</div>
          <div className="flex flex-wrap gap-2">
            {_e.map((item) => (
              <button
                key={item.value}
                type="button"
                className={IntlProvider(
                  "rounded border px-3 py-1 text-xs",
                  item.value === mint24
                    ? "border-token-focus-border text-token-foreground"
                    : "border-token-border text-token-description-foreground hover:bg-token-foreground/5",
                )}
                onClick={() => {
                  if (item.value === "auto") {
                    lemon24(null);
                    return;
                  }
                  lemon24({
                    arm: item.value,
                    assignedAtMs: Date.now(),
                    experimentName: PLAYGROUND_ONBOARDING_FEATURE_GATE_ID,
                  });
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button
            type="button"
            className="rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5"
            onClick={() => {
              client.updateUserAsync(client.getContext().user);
            }}
          >
            {"Refetch skill config"}
          </button>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="text-token-description-foreground">{`Work plugins announcement: ${quartz24 ? "seen" : "unseen"}`}</div>
          <button
            type="button"
            className="cursor-interaction rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5"
            onClick={() => {
              river24(false);
              slate24(false);
              client.updateUserAsync(client.getContext().user);
            }}
          >
            {"Reset announcement"}
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xs text-token-description-foreground">{`Remote setup page: ${marble24}`}</div>
          <div className="flex flex-wrap gap-2">
            {ivory24.map((item) => (
              <button
                key={item.value}
                type="button"
                className={IntlProvider(
                  "rounded border px-3 py-1 text-xs",
                  item.value === marble24
                    ? "border-token-focus-border text-token-foreground"
                    : "border-token-border text-token-description-foreground hover:bg-token-foreground/5",
                )}
                onClick={() => {
                  nickel24(item.value);
                  yarrow23("/codex-mobile");
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xs text-token-description-foreground">
            {"Remote"}
            {" setup dialog"}
          </div>
          <div className="flex flex-wrap gap-2">
            {lotus24.map((item) => (
              <button
                key={item.label}
                type="button"
                className="rounded border border-token-border px-3 py-1 text-xs text-token-description-foreground hover:bg-token-foreground/5"
                onClick={() => {
                  chatProcessRegister(urn23, Ridge3, {
                    setupInProgress: item.setupInProgress,
                    showStartSetupError: item.showStartSetupError,
                    step: item.step,
                  });
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="text-token-description-foreground">{`Quick Chat NUX: ${umbra24 ? "seen" : "unseen"}`}</div>
          <button
            type="button"
            className="cursor-interaction rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5"
            onClick={() => {
              urn23.set(getBuildFlavor, false);
            }}
          >
            {"Reset NUX"}
          </button>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="text-token-description-foreground">{`Browser profile import NUX: ${timber24 ? "seen" : "unseen"}`}</div>
          <button
            type="button"
            className="cursor-interaction rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5"
            onClick={() => {
              urn23.set(AppInitialEk, false);
            }}
          >
            {"Reset NUX"}
          </button>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="text-token-description-foreground">{`Browser comment mode coachmark: ${onyx24 ? "seen" : "unseen"}`}</div>
          <button
            type="button"
            className="rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5"
            onClick={() => {
              pearl24(false);
            }}
          >
            {"Reset coachmark"}
          </button>
        </div>
      </div>
    ) : null;
  return (
    <Copper
      {...{
        storageKey: "debug-onboarding",
        title: "Onboarding",
        onToggle: xenon24,
        variant: "global",
        children: sage24,
      }}
    />
  );
}

function Rain3({ downloadedBytes, errorMessage, phase, totalBytes }) {
  return [
    phase,
    downloadedBytes == null
      ? null
      : totalBytes == null
        ? `${Seed3(downloadedBytes)} downloaded`
        : `${Seed3(downloadedBytes)} / ${Seed3(totalBytes)}`,
    errorMessage,
  ]
    .filter(Boolean)
    .join(" · ");
}

function Seed3(ultra24) {
  return `${(ultra24 / 1024 / 1024).toFixed(1)}MB`;
}
