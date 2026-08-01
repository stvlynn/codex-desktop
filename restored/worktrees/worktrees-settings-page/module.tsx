// Restored from ref/webview/assets/worktrees-settings-page-D8I58eIb.js
// Wave FY — full polished body from `worktrees-settings-page-D8I58eIb/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 67/88).
// Wave FZ-support — PascalCase invalid JSX tags: deferredUiB→DeferredUiB, deferredUiH→DeferredUiH, deferredUiU→DeferredUiU, ensurePersonalizationCInit→EnsurePersonalizationCInit, openInBrowser→OpenInBrowser, parseUrlOrFallback→ParseUrlOrFallback, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, setRemoteControlEnabledForHost→SetRemoteControlEnabledForHost, useChromeAndCodeThemeSync→UseChromeAndCodeThemeSync, usePointerSurfaceInteractionGate→UsePointerSurfaceInteractionGate, renamedId→WorktreesSettingsPageHelper1, renamedId→WorktreesSettingsPageHelper2.
// AST split 1/1
/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Rst_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Wdt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Ist_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { getHostConfigId } from "../../hooks/host-rpc-client";
import { ensureUseCodexWorktreesInit, useCodexWorktrees } from "../../hooks/use-codex-worktrees";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { PanelWidthIcon } from "../../icons/panel-width-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../../overlay/avatar-overlay-surface-stack-ids";
import { REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE } from "../../remote-control/enrollment-account-mismatch-error-code";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { gitSettingsDefinitions } from "../../settings/git-settings-definitions";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../../settings/settings-section-title";
import { useSettingValue } from "../../settings/use-setting-value";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { DeferredUiB } from "../../ui/deferred-ui-b";
import { DeferredUiH } from "../../ui/deferred-ui-h";
import { ElectronOnly } from "../../ui/electron-only";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey, toComparableUnixPath } from "../../utils/workspace-path-keys";

const AppInitialA3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:realtimeVoiceCatalog@voice/realtime-voice-catalog.ts) */
const AppInitialBC: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureSelectWorkspaceEMInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialEM: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsF3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialF3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/settings-values.ts) */
const setSettingValue: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceKstInit: any = undefined;
/** Wave FY unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureSidebarPanelIconInit: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/use-local-environment-editor-state.ts) */
const useLocalEnvironmentEditorState: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredAccountNi@account/deferred-account-ni.ts) */
const AppInitialNi: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsP3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialP3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureShapeColorTokenClusterInit@ui/ensure-shape-color-token-cluster-init.ts) */
const AppInitialTM: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FY unresolved companion (app-initial-unresolved-short) */
const AppInitialValue: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureBooleanSchemaClusterInit@settings/ensure-boolean-schema-cluster-init.ts) */
const AppInitialWst: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-wx.ts) */
const deferredUiWX: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (jsx-collision:getRecentConversationsQueryKey@worktrees/get-recent-conversations-query-key.ts) */
const AppInitialYX: any = undefined;
function WorktreesSettingsPageHelper1() {
  let timber = CodexPluginActionType(appScopeAtom),
    umbra = useIntl(),
    [violet, willow] = bravo.useState(false),
    [xenon, yellow] = bravo.useState(null),
    zinc = useSettingValue(REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE.autoCleanupEnabled),
    amber = useSettingValue(REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE.keepCount),
    basalt = iris => setSettingValue(timber, REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE.autoCleanupEnabled, iris);
  let cedar, daisy;
  cedar = (jewel, knoll) => {
    if (knoll) {
      timber.get(toastAtom).success(umbra.formatMessage({
        id: "settings.worktrees.autoCleanup.save.enabled",
        defaultMessage: "Automatic deletion enabled",
        description: "Toast shown when automatic worktree deletion is enabled"
      }));
      return;
    }
    timber.get(toastAtom).success(umbra.formatMessage({
      id: "settings.worktrees.autoCleanup.save.disabled",
      defaultMessage: "Automatic deletion disabled",
      description: "Toast shown when automatic worktree deletion is disabled"
    }));
  };
  daisy = () => {
    timber.get(toastAtom).danger(umbra.formatMessage({
      id: "settings.worktrees.autoCleanup.save.error",
      defaultMessage: "Failed to save automatic deletion setting",
      description: "Toast shown when saving the automatic worktree deletion setting fails"
    }));
  };
  let ember = {
    mutationFn: basalt,
    onSuccess: cedar,
    onError: daisy
  };
  let flint = noop(ember),
    garnet = lunar => setSettingValue(timber, REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE.keepCount, lunar);
  let hazel, ivory;
  hazel = () => {
    yellow(null);
    timber.get(toastAtom).success(umbra.formatMessage({
      id: "settings.worktrees.keepCount.save.success",
      defaultMessage: "Saved auto-delete limit",
      description: "Toast shown when the worktree auto-delete limit is saved"
    }));
  };
  ivory = () => {
    timber.get(toastAtom).danger(umbra.formatMessage({
      id: "settings.worktrees.keepCount.save.error",
      defaultMessage: "Failed to save auto-delete limit",
      description: "Toast shown when saving the worktree auto-delete limit fails"
    }));
  };
  let jasper = {
    mutationFn: garnet,
    onSuccess: hazel,
    onError: ivory
  };
  let kelp = noop(jasper),
    lotus = String(amber),
    mint = xenon ?? lotus,
    nova = flint.isPending,
    olive = kelp.isPending || nova || !zinc,
    prism = moss => {
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
  vapor = <MemoizedFormattedMessage {...{
    id: "settings.worktrees.autoCleanup.label",
    defaultMessage: "Automatically delete old worktrees",
    description: "Label for the automatic worktree deletion toggle"
  }} />;
  wheat = <MemoizedFormattedMessage {...{
    id: "settings.worktrees.autoCleanup.description",
    defaultMessage: "Recommended for most users. Turn this off only if you want to manage old worktrees and disk usage yourself.",
    description: "Description for the automatic worktree deletion toggle"
  }} />;
  let yarn = umbra.formatMessage({
    id: "settings.worktrees.autoCleanup.ariaLabel",
    defaultMessage: "Automatically delete old worktrees",
    description: "Aria label for the automatic worktree deletion toggle"
  });
  let zephyr = <EnsurePersonalizationCInit {...{
    label: vapor,
    description: wheat,
    control: <AppInitialYC checked={zinc} disabled={nova} onChange={quill} ariaLabel={yarn} />
  }} />;
  let acorn = <MemoizedFormattedMessage {...{
    id: "settings.worktrees.keepCount.label",
    defaultMessage: "Auto-delete limit",
    description: "Label for the worktree auto-delete limit setting"
  }} />;
  let bloom = zinc ? <MemoizedFormattedMessage {...{
    id: "settings.worktrees.keepCount.description",
    defaultMessage: "Number of managed worktrees to keep before older ones are pruned automatically. ChatGPT snapshots worktrees before deleting, so pruned worktrees should always be restorable.",
    description: "Description for the worktree keep count setting"
  }} /> : <MemoizedFormattedMessage {...{
    id: "settings.worktrees.keepCount.description.disabled",
    defaultMessage: "Automatic deletion is disabled. ChatGPT will not prune old worktrees automatically. Re-enable it to use this saved limit again.",
    description: "Description for the worktree keep count setting when automatic deletion is disabled"
  }} />;
  let coral = event => {
    if (olive) return;
    let quest = event.target.value;
    yellow(quest === lotus ? null : quest);
  };
  let drift = event => {
    event.key === "Enter" && (event.preventDefault(), ultra());
  };
  let eagle = umbra.formatMessage({
    id: "settings.worktrees.keepCount.ariaLabel",
    defaultMessage: "Auto-delete limit",
    description: "Aria label for the worktree auto-delete limit input"
  });
  let frost = <div className="ml-6">
      <input className="w-24 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border" value={mint} onChange={coral} onBlur={ultra} onKeyDown={drift} type="number" inputMode="numeric" min={1} step={1} aria-label={eagle} disabled={olive} />
    </div>;
  let glide = <EnsurePersonalizationCInit {...{
    label: acorn,
    description: bloom,
    control: frost
  }} />;
  let honey = <WorktreesSettingsPageHelper2 {...{
    open: violet,
    onOpenChange: willow,
    onConfirm: sage
  }} />;
  return <>
      {zephyr}
      {glide}
      {honey}
    </>;
}
function WorktreesSettingsPageHelper2(ridge) {
  let {
      open,
      onOpenChange,
      onConfirm
    } = ridge,
    storm = <DeferredUiU {...{
      children: <DeferredUiH {...{
        title: <MemoizedFormattedMessage {...{
          id: "settings.worktrees.autoCleanup.confirm.title",
          defaultMessage: "Disable automatic worktree deletion?",
          description: "Title for the automatic worktree deletion disable confirmation dialog"
        }} />
      }} />
    }} />;
  let tide = <DeferredUiU {...{
    className: "text-token-description-foreground",
    children: <p>
            {<MemoizedFormattedMessage {...{
        id: "settings.worktrees.autoCleanup.confirm.body",
        defaultMessage: "We highly recommend keeping automatic deletion on so old worktrees do not build up and use unnecessary disk space. If you prefer to manage old worktrees yourself, you can turn this off and ChatGPT will stop deleting them automatically.",
        description: "Body copy in the automatic worktree deletion disable confirmation dialog"
      }} />}
          </p>
  }} />;
  let unity = () => {
    onOpenChange(false);
  };
  let vale = <MemoizedFormattedMessage {...{
    id: "settings.worktrees.autoCleanup.confirm.cancel",
    defaultMessage: "Keep automatic deletion",
    description: "Cancel button label for the automatic worktree deletion disable confirmation dialog"
  }} />;
  let wave = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    onClick: unity,
    children: vale
  }} />;
  let apex = () => {
    onConfirm();
  };
  let brook = <MemoizedFormattedMessage {...{
    id: "settings.worktrees.autoCleanup.confirm.confirm",
    defaultMessage: "Disable automatic deletion",
    description: "Confirm button label for the automatic worktree deletion disable confirmation dialog"
  }} />;
  let cliff = <ReadLoginRouteQuerySnapshot {...{
    color: "danger",
    onClick: apex,
    children: brook
  }} />;
  let dusk = <DeferredUiB {...{
    children: [storm, tide, <DeferredUiU {...{
      children: <SetRemoteControlEnabledForHost {...{
        children: [wave, cliff]
      }} />
    }} />]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open,
    showDialogClose: false,
    onOpenChange,
    children: dusk
  }} />;
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
function WorktreesSettingsPageHelper3() {
  let elm = CodexPluginActionType(appScopeAtom),
    fern = useIntl(),
    grove = useSettingValue(gitSettingsDefinitions.worktreeRoot),
    [hill, isle] = falcon.useState(null),
    juniper = field => setSettingValue(elm, gitSettingsDefinitions.worktreeRoot, field);
  let lagoon, meadow;
  lagoon = () => {
    isle(null);
    elm.get(toastAtom).success(fern.formatMessage({
      id: "settings.git.worktreeRoot.save.success",
      defaultMessage: "Saved worktree root",
      description: "Toast shown when git worktree root is saved"
    }));
  };
  meadow = () => {
    elm.get(toastAtom).danger(fern.formatMessage({
      id: "settings.git.worktreeRoot.save.error",
      defaultMessage: "Failed to save worktree root",
      description: "Toast shown when git worktree root save fails"
    }));
  };
  let nest = {
    mutationFn: juniper,
    onSuccess: lagoon,
    onError: meadow
  };
  let oak = noop(nest),
    petal = grove ?? "",
    quiet = hill ?? petal,
    rain = hill != null && hill !== petal,
    seed = oak.isPending,
    trail = () => {
      !rain || seed || oak.mutate(quiet.trim());
    };
  let urn = trail,
    vine = rain && !seed,
    wind = event => {
      event.preventDefault();
      urn();
    };
  let yarrow;
  yarrow = {
    accelerator: "CmdOrCtrl+S",
    enabled: vine,
    onKeyDown: wind
  };
  PanelWidthIcon(yarrow);
  let azure, birch;
  azure = <MemoizedFormattedMessage {...{
    id: "settings.git.worktreeRoot.label",
    defaultMessage: "Worktree root",
    description: "Label for git worktree root setting"
  }} />;
  birch = <MemoizedFormattedMessage {...{
    id: "settings.git.worktreeRoot.description",
    defaultMessage: "Directory where ChatGPT creates managed worktrees; leave blank to use the default location",
    description: "Description for git worktree root setting"
  }} />;
  let canyon = event => {
    if (seed) return;
    let grain = event.target.value;
    isle(grain === petal ? null : grain);
  };
  let dew = fern.formatMessage({
    id: "settings.git.worktreeRoot.placeholder",
    defaultMessage: "Default",
    description: "Placeholder for git worktree root input"
  });
  let ever = fern.formatMessage({
    id: "settings.git.worktreeRoot.ariaLabel",
    defaultMessage: "Worktree root",
    description: "Aria label for git worktree root input"
  });
  return <EnsurePersonalizationCInit {...{
    label: azure,
    description: birch,
    control: <input className="w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border" value={quiet} onChange={canyon} onBlur={urn} placeholder={dew} aria-label={ever} disabled={seed} />
  }} />;
}
var echo,
  falcon,
  gamma,
  harbor = esmInit(() => {
    echo = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    falcon = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_Ilt_Init();
    ensureSidebarPanelIconInit();
    ensureAppScopeInit();
    ensureSettingsQueryAtomsInit();
    AppInitialVC();
  });
function WorktreesSettingsPageHelper4() {
  return <ElectronOnly {...{
    electron: true,
    children: <ParseUrlOrFallback {...{
      children: [<WorktreesSettingsPageHelper3 {...{}} />, <WorktreesSettingsPageHelper1 {...{}} />]
    }} />
  }} />;
}
var indigo,
  jade,
  kite = esmInit(() => {
    indigo = reactCompilerRuntime();
    ensureComposerEsm_K1_Init();
    delta();
    harbor();
    AppInitialFC();
  });
export function WorktreesSettingsPage() {
  let latch = useIntl(),
    {
      selectedHostId
    } = useSelectedHost(),
    motor = ensureSteeringUserMessageClusterInit(selectedHostId),
    nut = motor.kind === "local",
    {
      data,
      isLoading,
      isFetching,
      error,
      refetch
    } = useCodexWorktrees(motor, "worktrees_settings_page"),
    piston = {
      hostId: selectedHostId
    };
  let {
      data: _data,
      isLoading: _isLoading,
      error: rivet
    } = CodexBrowserSurfaceActionType(AppInitialA3, piston),
    {
      data: __data,
      isLoading: __isLoading
    } = AppInitialYX(),
    screw = AppInitialEM(),
    torque,
    valve;
  valve = Symbol.for("react.early_return_sentinel");
  bb0: {
    let axle = marble(data?.worktrees ?? [], _data?.roots ?? []),
      bracket,
      clamp;
    {
      let platen;
      platen = shim => quartz(shim) === selectedHostId;
      bracket = (__data ?? []).filter(platen);
      let ratchet;
      ratchet = tappet => !ensureSelectWorkspaceKstInit(tappet, screw);
      clamp = bracket.filter(ratchet);
    }
    let drill = clamp,
      engine = lemon(axle),
      frame = latch.formatMessage({
        id: "settings.worktrees.refresh",
        defaultMessage: "Refresh",
        description: "Button label to refresh the worktree list"
      });
    let gasket = frame,
      handle = () => {
        refetch();
      };
    let insert = isFetching ? null : <AppIconAlt {...{
      className: "icon-xs"
    }} />;
    let jacket = <ReadLoginRouteQuerySnapshot {...{
      "aria-label": gasket,
      className: "shrink-0",
      color: "ghost",
      loading: isFetching,
      onClick: handle,
      size: "toolbar",
      title: gasket,
      uniform: true,
      children: insert
    }} />;
    let knurl = jacket,
      lever = error ?? rivet;
    if (isLoading || _isLoading) {
      let arbor = <SettingsSectionTitle slug="worktrees" />;
      let bushing = nut ? <WorktreesSettingsPageHelper4 {...{}} /> : null;
      let collar = <AppInitialNi>
          {<MemoizedFormattedMessage {...{
          id: "settings.worktrees.loading.body",
          defaultMessage: "Fetching worktree details…",
          description: "Loading state body for worktrees settings"
        }} />}
        </AppInitialNi>;
      let dowel;
      dowel = <OpenInBrowser {...{
        title: arbor,
        children: [bushing, collar]
      }} />;
      valve = dowel;
      break bb0;
    }
    if (lever) {
      let flange = <SettingsSectionTitle slug="worktrees" />;
      let gib = nut ? <WorktreesSettingsPageHelper4 {...{}} /> : null;
      let hub = <MemoizedFormattedMessage {...{
        id: "settings.worktrees.error.title",
        defaultMessage: "Unable to load worktrees",
        description: "Error state title for worktrees settings"
      }} />;
      let idler = <UseChromeAndCodeThemeSync.Header {...{
        title: hub,
        actions: knurl
      }} />;
      let jig = lever.message || latch.formatMessage({
        id: "settings.worktrees.error.body",
        defaultMessage: "Something went wrong while loading worktrees.",
        description: "Error body for worktrees settings"
      });
      let keeper = <UseChromeAndCodeThemeSync.Content {...{
        children: <ParseUrlOrFallback {...{
          children: <div className="p-3 text-sm text-token-text-secondary">
                      {jig}
                    </div>
        }} />
      }} />;
      let lug = <UseChromeAndCodeThemeSync {...{
        children: [idler, keeper]
      }} />;
      let mandrel;
      mandrel = <OpenInBrowser {...{
        title: flange,
        children: [gib, lug]
      }} />;
      valve = mandrel;
      break bb0;
    }
    let mount = <SettingsSectionTitle slug="worktrees" />;
    let nozzle;
    nozzle = nut ? <WorktreesSettingsPageHelper4 {...{}} /> : null;
    torque = <OpenInBrowser {...{
      title: mount,
      children: [nozzle, engine.length === 0 ? <UseChromeAndCodeThemeSync {...{
        children: [<UseChromeAndCodeThemeSync.Header {...{
          title: <MemoizedFormattedMessage {...{
            id: "settings.worktrees.empty.title",
            defaultMessage: "No worktrees yet",
            description: "Empty state title for worktrees settings"
          }} />,
          actions: knurl
        }} />, <UseChromeAndCodeThemeSync.Content {...{
          children: <ParseUrlOrFallback {...{
            children: <div className="p-3 text-sm text-token-text-secondary">
                                  {<MemoizedFormattedMessage {...{
                id: "settings.worktrees.empty.body",
                defaultMessage: "Worktrees created by ChatGPT will appear here",
                description: "Empty state body for worktrees settings"
              }} />}
                                </div>
          }} />
        }} />]
      }} /> : engine.map((item, index) => <WorktreesSettingsPageHelper5 key={item.key} {...{
        action: index === 0 ? knurl : null,
        allConversations: bracket,
        visibleConversations: drill,
        hostId: selectedHostId,
        isConversationsLoading: __isLoading,
        onWorktreeDeleted: () => {
          refetch();
        },
        repoRoot: item.repoRoot,
        worktrees: item.worktrees
      }} />)]
    }} />;
  }
  return valve === Symbol.for("react.early_return_sentinel") ? torque : valve;
}
function WorktreesSettingsPageHelper5(haven) {
  let {
      action,
      repoRoot,
      worktrees,
      allConversations,
      visibleConversations,
      hostId,
      isConversationsLoading,
      onWorktreeDeleted
    } = haven,
    ink = ensureSteeringUserMessageClusterInit(hostId),
    jadeite = CodexPluginActionResult(getHostConfigId),
    kernel = repoRoot == null ? null : {
      cwd: repoRoot,
      hostConfig: ink
    };
  let leaf = {
    retainRepoWatch: jadeite
  };
  let {
      data,
      isLoading: maple
    } = AppInitialF3(kernel, "worktree_restore_banner", leaf),
    nimbus = data?.root ?? repoRoot ?? worktrees[0]?.dir ?? null,
    opal = nimbus ? <span className="truncate text-sm">{nimbus}</span> : <MemoizedFormattedMessage {...{
      id: "settings.worktrees.repository.unknown",
      defaultMessage: "Unknown repository",
      description: "Fallback label when worktree repository cannot be resolved"
    }} />;
  let plume = opal,
    quillow = maple && nimbus == null,
    silk = <div className="min-w-0 truncate text-sm text-token-text-primary">
        {plume}
      </div>;
  let thorn = quillow ? <div className="text-xs text-token-text-secondary">
      {<MemoizedFormattedMessage {...{
      id: "settings.worktrees.repository.loading",
      defaultMessage: "Loading repository metadata…",
      description: "Subtitle while repository metadata is loading"
    }} />}
    </div> : null;
  let upland = <div className="flex min-w-0 flex-col">
      {silk}
      {thorn}
    </div>;
  let vista = <UseChromeAndCodeThemeSync.Header {...{
    title: upland,
    actions: action
  }} />;
  let wisp;
  {
    let zenith;
    zenith = anvil => <$e key={anvil.dir} {...{
      allConversations: nickel(anvil.dir, allConversations),
      hostId,
      visibleConversations: nickel(anvil.dir, visibleConversations),
      isConversationsLoading,
      onWorktreeDeleted,
      worktree: anvil
    }} />;
    wisp = onyx(worktrees, visibleConversations).map(zenith);
  }
  let yonder = <UseChromeAndCodeThemeSync.Content {...{
    children: <ParseUrlOrFallback {...{
      children: wisp
    }} />
  }} />;
  return <UseChromeAndCodeThemeSync {...{
    children: [vista, yonder]
  }} />;
}
function $e({
  worktree,
  allConversations,
  visibleConversations,
  hostId,
  isConversationsLoading,
  onWorktreeDeleted
}) {
  let beacon = CodexPluginActionType(appScopeAtom),
    crag = useColdNavigate(),
    dome = useIntl(),
    [eddy, fjord] = slate.useState(false),
    glen = ensureSteeringUserMessageClusterInit(hostId),
    hearth = async () => {
      if (!eddy) {
        fjord(true);
        try {
          allConversations.length > 0 && (await Promise.all(allConversations.map(item => canonicalizeWorkspacePathKey("archive-conversation", {
            conversationId: item.id,
            cleanupWorktree: false,
            source: "worktree_delete"
          }))));
          await invokeDesktopRpc("worktree-delete", {
            params: {
              hostId: glen.id,
              worktree: worktree.dir,
              reason: "settings-delete-targeted"
            }
          });
          onWorktreeDeleted();
        } catch (inlet) {
          appActionSidebarProjectRefSchema.error("Failed to delete worktree", {
            safe: {},
            sensitive: {
              error: AVATAR_OVERLAY_SURFACE_STACK_IDS(inlet)
            }
          });
          beacon.get(toastAtom).danger(dome.formatMessage({
            id: "settings.worktrees.delete.error",
            defaultMessage: "Failed to delete worktree",
            description: "Error message when deleting a worktree from settings"
          }));
        } finally {
          fjord(false);
        }
      }
    };
  return <div className="flex flex-col gap-2 p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-sm font-medium text-token-text-primary">
            {<MemoizedFormattedMessage {...{
            id: "settings.worktrees.row.title",
            defaultMessage: "Worktree",
            description: "Label for a worktree row"
          }} />}
          </div>
          <div className="mt-1 truncate text-xs text-token-text-secondary">
            {worktree.dir}
          </div>
        </div>
        {<ReadLoginRouteQuerySnapshot {...{
        className: "shrink-0",
        color: "danger",
        loading: eddy,
        onClick: () => {
          hearth();
        },
        size: "toolbar",
        children: <MemoizedFormattedMessage {...{
          id: "settings.worktrees.row.delete",
          defaultMessage: "Delete",
          description: "Delete button label for a worktree row"
        }} />
      }} />}
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-xs text-token-text-secondary">
          {<MemoizedFormattedMessage {...{
          id: "settings.worktrees.row.conversations",
          defaultMessage: "Conversations",
          description: "Label for conversations list within a worktree row"
        }} />}
        </div>
        {isConversationsLoading ? <div className="flex items-center gap-2 text-xs text-token-text-secondary">
            {<VSCODE_EDITOR_ID {...{
          className: "icon-xxs"
        }} />}
            {<MemoizedFormattedMessage {...{
          id: "settings.worktrees.row.conversations.loading",
          defaultMessage: "Loading conversations…",
          description: "Loading label for conversations list"
        }} />}
          </div> : visibleConversations.length === 0 ? <div className="text-xs text-token-text-secondary">
            {<MemoizedFormattedMessage {...{
          id: "settings.worktrees.row.conversations.empty",
          defaultMessage: "No conversations linked to this worktree.",
          description: "Empty state for conversations list in worktree row"
        }} />}
          </div> : <div className="flex flex-col gap-1">
            {visibleConversations.map(item => {
          let jetty = ensureComposerEsm_Rst_Init(item);
          return <button key={item.id} className="focus-visible:outline-token-focus flex w-full items-center justify-between gap-2 rounded-lg px-row-x py-row-y text-left text-sm text-token-text-primary hover:bg-token-list-hover-background hover:text-token-text-primary/80 focus-visible:outline-1 focus-visible:outline-offset-[-2px]" onClick={() => {
            crag(item.id);
          }} type="button">
                  <span className="truncate">
                    {jetty || <MemoizedFormattedMessage {...{
                id: "settings.worktrees.conversation.untitled",
                defaultMessage: "Untitled conversation",
                description: "Fallback title for a conversation"
              }} />}
                  </span>
                </button>;
        })}
          </div>}
      </div>
    </div>;
}
function lemon(knob) {
  let ledge = new Map();
  for (let mire of knob) {
    let nook = AppInitialValue(mire.gitDir),
      oxbow = pearl(nook ?? mire.dir),
      pond = ledge.get(oxbow);
    if (pond) {
      pond.worktrees.push(mire);
      continue;
    }
    ledge.set(oxbow, {
      key: oxbow,
      repoRoot: nook,
      worktrees: [mire]
    });
  }
  return Array.from(ledge.values());
}
function marble(quarry, rapids) {
  return rapids.length === 0 ? quarry : quarry.filter(item => !rapids.some(_item => at(_item, item.dir)));
}
function nickel(spur, tor) {
  if (tor.length === 0) return [];
  let updraft = pearl(spur);
  return tor.filter(item => {
    let verge = item.cwd;
    if (!verge) return false;
    let weir = pearl(verge);
    return weir === updraft ? true : weir.startsWith(`${updraft}/`);
  });
}
function onyx(yard, anchor) {
  if (anchor.length === 0) return yard;
  let bolt = yard.map((item, index) => ({
    worktree: item,
    index,
    conversationCount: nickel(item.dir, anchor).length
  }));
  return bolt.sort((cog, disc) => {
    let edge = disc.conversationCount - cog.conversationCount;
    return edge === 0 ? cog.index - disc.index : edge;
  }), bolt.map(item => item.worktree);
}
function pearl(forge) {
  return toComparableUnixPath(forge).replace(/\/+$/, "");
}
function quartz(gear) {
  return gear.hostId ?? "local";
}
function at(hinge, iron) {
  let joint = pearl(hinge),
    keystone = pearl(iron);
  return joint === keystone || joint.startsWith(`${keystone}/`);
}
var river, slate, $;
esmInit(() => {
  river = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  slate = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  deferredUiWX();
  AppActionSelector();
  AppInitialWst();
  ensureSettingsQueryAtomsInit();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Ilt_Init();
  ensureUseCodexWorktreesInit();
  AppInitialP3();
  AppInitialTM();
  useEventCallback();
  ensureConversationPageEsm_Ist_Init();
  useLocalEnvironmentEditorState();
  ensureAppScopeInit();
  extractColonPrefixedNamedTokens();
  AppIconOi();
  kite();
  codexCommandTheme();
  AppIconBO();
  useGateEnabledWithAccountData();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  ensureAppShellAtomsInit();
  posixPathBasename();
  ensureComposerEsm_Wdt_Init();
  ensureComposerEsm_ML_Init();
  scrollAppActionTargetTo();
  isStartingProcessExpired();
})();
