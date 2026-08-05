// Restored from ref/webview/assets/worktrees-settings-page-D8I58eIb.js
// Wave FY — full polished body from `worktrees-settings-page-D8I58eIb/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 67/88).
// Wave FZ-support — PascalCase invalid JSX tags: deferredUiB→DeferredUiB, deferredUiH→DeferredUiH, deferredUiU→DeferredUiU, ensurePersonalizationCInit→EnsurePersonalizationCInit, openInBrowser→OpenInBrowser, parseUrlOrFallback→ParseUrlOrFallback, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, setRemoteControlEnabledForHost→SetRemoteControlEnabledForHost, useChromeAndCodeThemeSync→UseChromeAndCodeThemeSync, usePointerSurfaceInteractionGate→UsePointerSurfaceInteractionGate, renamedId→WorktreesSettingsPageHelper1, renamedId→WorktreesSettingsPageHelper2.
// AST split — auto-cleanup section (WorktreesSettingsPageHelper1/2 + delta init lane).

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import {
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_MT_Init,
} from "../../composer/composer-esm-inits";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE } from "../../remote-control/enrollment-account-mismatch-error-code";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { DeferredUiB } from "../../ui/deferred-ui-b";
import { DeferredUiH } from "../../ui/deferred-ui-h";
import { noop } from "../../utils/noop";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";

/** Wave FY unresolved companion (jsx-collision:realtimeVoiceCatalog@voice/realtime-voice-catalog.ts) */
const AppInitialBC: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/settings-values.ts) */
const setSettingValue: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
export function WorktreesSettingsPageHelper1() {
  let timber = CodexPluginActionType(appScopeAtom),
    umbra = useIntl(),
    [violet, willow] = bravo.useState(false),
    [xenon, yellow] = bravo.useState(null),
    zinc = useSettingValue(
      REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE.autoCleanupEnabled,
    ),
    amber = useSettingValue(
      REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE.keepCount,
    ),
    basalt = (iris) =>
      setSettingValue(
        timber,
        REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE.autoCleanupEnabled,
        iris,
      );
  let cedar, daisy;
  cedar = (jewel, knoll) => {
    if (knoll) {
      timber.get(toastAtom).success(
        umbra.formatMessage({
          id: "settings.worktrees.autoCleanup.save.enabled",
          defaultMessage: "Automatic deletion enabled",
          description:
            "Toast shown when automatic worktree deletion is enabled",
        }),
      );
      return;
    }
    timber.get(toastAtom).success(
      umbra.formatMessage({
        id: "settings.worktrees.autoCleanup.save.disabled",
        defaultMessage: "Automatic deletion disabled",
        description: "Toast shown when automatic worktree deletion is disabled",
      }),
    );
  };
  daisy = () => {
    timber.get(toastAtom).danger(
      umbra.formatMessage({
        id: "settings.worktrees.autoCleanup.save.error",
        defaultMessage: "Failed to save automatic deletion setting",
        description:
          "Toast shown when saving the automatic worktree deletion setting fails",
      }),
    );
  };
  let ember = {
    mutationFn: basalt,
    onSuccess: cedar,
    onError: daisy,
  };
  let flint = noop(ember),
    garnet = (lunar) =>
      setSettingValue(
        timber,
        REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE.keepCount,
        lunar,
      );
  let hazel, ivory;
  hazel = () => {
    yellow(null);
    timber.get(toastAtom).success(
      umbra.formatMessage({
        id: "settings.worktrees.keepCount.save.success",
        defaultMessage: "Saved auto-delete limit",
        description: "Toast shown when the worktree auto-delete limit is saved",
      }),
    );
  };
  ivory = () => {
    timber.get(toastAtom).danger(
      umbra.formatMessage({
        id: "settings.worktrees.keepCount.save.error",
        defaultMessage: "Failed to save auto-delete limit",
        description:
          "Toast shown when saving the worktree auto-delete limit fails",
      }),
    );
  };
  let jasper = {
    mutationFn: garnet,
    onSuccess: hazel,
    onError: ivory,
  };
  let kelp = noop(jasper),
    lotus = String(amber),
    mint = xenon ?? lotus,
    nova = flint.isPending,
    olive = kelp.isPending || nova || !zinc,
    prism = (moss) => {
      if (!nova) {
        if (moss) {
          flint.mutate(true);
          return;
        }
        willow(true);
      }
    };
  let quill = prism,
    reef = () => {
      yellow(null);
      willow(false);
      flint.mutate(false);
    };
  let sage = reef,
    topaz = () => {
      if (olive || xenon == null) return;
      let north = xenon.trim(),
        orbit = Number.parseInt(north, 10);
      if (north.length === 0 || Number.isNaN(orbit)) {
        yellow(null);
        return;
      }
      let pine = Math.max(1, Math.trunc(orbit));
      if (pine === amber) {
        yellow(null);
        return;
      }
      kelp.mutate(pine);
    };
  let ultra = topaz,
    vapor,
    wheat;
  vapor = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.worktrees.autoCleanup.label",
        defaultMessage: "Automatically delete old worktrees",
        description: "Label for the automatic worktree deletion toggle",
      }}
    />
  );
  wheat = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.worktrees.autoCleanup.description",
        defaultMessage:
          "Recommended for most users. Turn this off only if you want to manage old worktrees and disk usage yourself.",
        description: "Description for the automatic worktree deletion toggle",
      }}
    />
  );
  let yarn = umbra.formatMessage({
    id: "settings.worktrees.autoCleanup.ariaLabel",
    defaultMessage: "Automatically delete old worktrees",
    description: "Aria label for the automatic worktree deletion toggle",
  });
  let zephyr = (
    <EnsurePersonalizationCInit
      {...{
        label: vapor,
        description: wheat,
        control: (
          <AppInitialYC
            checked={zinc}
            disabled={nova}
            onChange={quill}
            ariaLabel={yarn}
          />
        ),
      }}
    />
  );
  let acorn = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.worktrees.keepCount.label",
        defaultMessage: "Auto-delete limit",
        description: "Label for the worktree auto-delete limit setting",
      }}
    />
  );
  let bloom = zinc ? (
    <MemoizedFormattedMessage
      {...{
        id: "settings.worktrees.keepCount.description",
        defaultMessage:
          "Number of managed worktrees to keep before older ones are pruned automatically. ChatGPT snapshots worktrees before deleting, so pruned worktrees should always be restorable.",
        description: "Description for the worktree keep count setting",
      }}
    />
  ) : (
    <MemoizedFormattedMessage
      {...{
        id: "settings.worktrees.keepCount.description.disabled",
        defaultMessage:
          "Automatic deletion is disabled. ChatGPT will not prune old worktrees automatically. Re-enable it to use this saved limit again.",
        description:
          "Description for the worktree keep count setting when automatic deletion is disabled",
      }}
    />
  );
  let coral = (event) => {
    if (olive) return;
    let quest = event.target.value;
    yellow(quest === lotus ? null : quest);
  };
  let drift = (event) => {
    event.key === "Enter" && (event.preventDefault(), ultra());
  };
  let eagle = umbra.formatMessage({
    id: "settings.worktrees.keepCount.ariaLabel",
    defaultMessage: "Auto-delete limit",
    description: "Aria label for the worktree auto-delete limit input",
  });
  let frost = (
    <div className="ml-6">
      <input
        className="w-24 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border"
        value={mint}
        onChange={coral}
        onBlur={ultra}
        onKeyDown={drift}
        type="number"
        inputMode="numeric"
        min={1}
        step={1}
        aria-label={eagle}
        disabled={olive}
      />
    </div>
  );
  let glide = (
    <EnsurePersonalizationCInit
      {...{
        label: acorn,
        description: bloom,
        control: frost,
      }}
    />
  );
  let honey = (
    <WorktreesSettingsPageHelper2
      {...{
        open: violet,
        onOpenChange: willow,
        onConfirm: sage,
      }}
    />
  );
  return (
    <>
      {zephyr}
      {glide}
      {honey}
    </>
  );
}
function WorktreesSettingsPageHelper2(ridge) {
  let { open, onOpenChange, onConfirm } = ridge,
    storm = (
      <DeferredUiU
        {...{
          children: (
            <DeferredUiH
              {...{
                title: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.worktrees.autoCleanup.confirm.title",
                      defaultMessage: "Disable automatic worktree deletion?",
                      description:
                        "Title for the automatic worktree deletion disable confirmation dialog",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    );
  let tide = (
    <DeferredUiU
      {...{
        className: "text-token-description-foreground",
        children: (
          <p>
            {
              <MemoizedFormattedMessage
                {...{
                  id: "settings.worktrees.autoCleanup.confirm.body",
                  defaultMessage:
                    "We highly recommend keeping automatic deletion on so old worktrees do not build up and use unnecessary disk space. If you prefer to manage old worktrees yourself, you can turn this off and ChatGPT will stop deleting them automatically.",
                  description:
                    "Body copy in the automatic worktree deletion disable confirmation dialog",
                }}
              />
            }
          </p>
        ),
      }}
    />
  );
  let unity = () => {
    onOpenChange(false);
  };
  let vale = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.worktrees.autoCleanup.confirm.cancel",
        defaultMessage: "Keep automatic deletion",
        description:
          "Cancel button label for the automatic worktree deletion disable confirmation dialog",
      }}
    />
  );
  let wave = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "ghost",
        onClick: unity,
        children: vale,
      }}
    />
  );
  let apex = () => {
    onConfirm();
  };
  let brook = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.worktrees.autoCleanup.confirm.confirm",
        defaultMessage: "Disable automatic deletion",
        description:
          "Confirm button label for the automatic worktree deletion disable confirmation dialog",
      }}
    />
  );
  let cliff = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "danger",
        onClick: apex,
        children: brook,
      }}
    />
  );
  let dusk = (
    <DeferredUiB
      {...{
        children: [
          storm,
          tide,
          <DeferredUiU
            {...{
              children: (
                <SetRemoteControlEnabledForHost
                  {...{
                    children: [wave, cliff],
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  );
  return (
    <UsePointerSurfaceInteractionGate
      {...{
        open,
        showDialogClose: false,
        onOpenChange,
        children: dusk,
      }}
    />
  );
}
var alpha,
  bravo,
  copper,
  delta = esmInit(() => {
    alpha = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    bravo = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureComposerEsm_Ilt_Init();
    AppInitialBC();
    ensureAppScopeInit();
    ensureSettingsQueryAtomsInit();
    AppInitialVC();
  });
export { delta };
