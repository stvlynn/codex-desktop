// Restored from ref/webview/assets/browser-profile-import-dialog-v_lwnIpS.js
// Wave FZ — full polished body from `browser-profile-import-dialog-v_lwnIpS/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 22 (verified 44/65).
// Careful split: module + bridges
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { writeClipboardIfPresent } from "../../clipboard/write-clipboard-if-present";
import { writeCodexThreadDeeplink as WriteCodexThreadDeeplink } from "../../clipboard/write-codex-thread-deeplink";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { AppIconNk } from "../../icons/app-icon-nk";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureHooksQueriesInit, writeHooksStateMutationAtom as WriteHooksStateMutationAtom } from "../../settings/hooks-query-atoms";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSettingsSectionTitleInit } from "../../settings/settings-section-title";
import { threadActionErrorMessages } from "../../sidebar/thread-action-error-messages";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { openMcpAppSidePanelTab } from "../../thread/open-mcp-app-side-panel-tab";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { logBrowserProfileImportDialogClosed } from "../log-browser-profile-import-dialog-closed";
import { logBrowserProfileImportWindowsChromeNoticeAcked } from "../log-browser-profile-import-windows-chrome-notice-acked";

/** Wave FZ unresolved companion (jsx-collision:inProgress@ui/in-progress.tsx) */
const AppInitialAk: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:realtimeVoiceCatalog@voice/realtime-voice-catalog.ts) */
const AppInitialBC: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-bk.tsx) */
const DeferredBk: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:forkConversationFromLatest@conversation/fork-conversation-from-latest.ts) */
const AppInitialGk: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiHk@ui/deferred-ui-hk.tsx) */
const AppInitialHk: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ik.ts) */
const deferredUiIk: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-mk.tsx) */
const deferredUiMk: any = undefined;
/** Wave FZ unresolved companion (missing-export:browser/deferred-rk.tsx) */
const AppInitialRk: any = undefined;
/** Wave FZ unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FZ unresolved companion (missing-export:worktree/queued.ts) */
const Queued: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-wk.ts) */
const deferredUiWk: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:chatProcessRegister@ui/chat-process-register.ts) */
const AppInitialZ: any = undefined;
var alpha,
  _e,
  bravo = esmInit(() => {
    react();
    _e = timber => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...timber}>
        <path d="M12 2A10 10 0 1 0 22 12C19.7909 12 18 10.2091 18 8C15.7909 8 14 6.20914 14 4C14 3.3072 13.824 2.6555 13.5143 2.0873C13.0186 2.02962 12.5139 2 12 2Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={12} cy={7} r={1} fill="currentColor" />
        <circle cx={7.5} cy={11} r={1} fill="currentColor" />
        <circle cx={11.5} cy={15} r={1} fill="currentColor" />
        <circle cx={16} cy={12.5} r={1} fill="currentColor" />
      </svg>;
  }),
  copper,
  Delta,
  be = esmInit(() => {
    react();
    Delta = umbra => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...umbra}>
        <path d="M8.75 9.55V15.75L6.5 18.25L4.25 15.75V9.55C2.886 8.748 2 7.267 2 5.625C2 3.14 4.015 1.125 6.5 1.125C8.985 1.125 11 3.14 11 5.625C11 7.267 10.114 8.748 8.75 9.55Z" stroke="currentColor" strokeWidth={1.33} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={6.5} cy={5.5} r={0.75} fill="currentColor" />
        <path d="M11.45 2.775C12.078 2.362 12.83 2.125 13.625 2.125C16.11 2.125 18.125 4.14 18.125 6.625C18.125 8.267 17.239 9.748 15.875 10.55V15.75L13.625 18.25L11.375 15.75V10.55C10.818 10.223 10.342 9.783 9.977 9.263" stroke="currentColor" strokeWidth={1.33} strokeLinecap="round" strokeLinejoin="round" />
      </svg>;
  }),
  echo,
  falcon = esmInit(() => {
    ensureIntlFormattersInit();
    echo = identity({
      cookies: {
        id: "settings.browserUse.profileImport.cookies",
        defaultMessage: "Cookies",
        description: "Label for importing cookies from a browser profile"
      },
      passwords: {
        id: "settings.browserUse.profileImport.passwords",
        defaultMessage: "Passwords",
        description: "Label for importing passwords from a browser profile"
      },
      title: {
        id: "settings.browserUse.profileImport.title",
        defaultMessage: "Import from your browser",
        description: "Title for the browser profile import dialog"
      }
    });
  });
function BrowserProfileImportDialogHelper1(violet) {
  let {
    cookieAccessFailureMessage,
    elevatedChromeConsent,
    importCookies,
    importPasswords,
    isImporting,
    isLoadingProfiles,
    showCloseBrowserGuidance,
    profilePickerOpen,
    profiles,
    profilesHaveError,
    requiresElevatedChromeConsent,
    result: willow,
    selectedProfile,
    onCancel,
    onElevatedChromeConsentChange,
    onImport,
    onImportCookiesChange,
    onImportPasswordsChange,
    onProfilePickerOpenChange,
    onTryAgain,
    onSelectProfile
  } = violet;
  if (willow != null) {
    let reef;
    return <BrowserProfileImportDialogHelper6 {...{
      cookieAccessFailureMessage,
      showCloseBrowserGuidance,
      result: willow,
      onDone: onCancel,
      onTryAgain
    }} />;
  }
  let xenon = selectedProfile?.hasCookies === true && importCookies,
    yellow = selectedProfile?.hasPasswords === true && importPasswords,
    zinc = selectedProfile == null || !xenon && !yellow || requiresElevatedChromeConsent && !elevatedChromeConsent,
    amber = event => {
      event.preventDefault();
      onImport();
    };
  let basalt = <RealtimeVoiceHostId {...{
    asChild: true,
    children: <h2 className="sr-only">
            {<MemoizedFormattedMessage {...{
        ...echo.title
      }} />}
          </h2>
  }} />;
  let cedar = <MemoizedFormattedMessage {...{
    ...echo.title
  }} />;
  let daisy = <DeferredUiU {...{
    children: [basalt, <DeferredUiH {...{
      title: cedar,
      subtitle: <IsStartingProcessExpired {...{
        asChild: true,
        children: <div>
                        {<MemoizedFormattedMessage {...{
            id: "settings.browserUse.profileImport.subtitle",
            defaultMessage: "Choose data to bring over to the built-in browser",
            description: "Subtitle for the browser data import dialog"
          }} />}
                      </div>
      }} />
    }} />]
  }} />;
  let ember = isImporting || !profiles?.length,
    flint = <BrowserProfileImportDialogHelper2 {...{
      disabled: ember,
      isLoading: isLoadingProfiles,
      open: profilePickerOpen,
      profiles,
      selectedProfile,
      onOpenChange: onProfilePickerOpenChange,
      onSelectProfile
    }} />;
  let garnet = profiles?.length === 0 && <p className="text-sm text-token-description-foreground">
      {<MemoizedFormattedMessage {...{
      id: "settings.browserUse.profileImport.noProfilesDescription",
      defaultMessage: "No Chrome or Atlas profiles were found on this device",
      description: "Message shown when no importable browser profiles are found"
    }} />}
    </p>;
  let hazel = showCloseBrowserGuidance && selectedProfile != null && <p className="text-sm text-token-description-foreground">
        {<MemoizedFormattedMessage {...{
      id: "settings.browserUse.profileImport.closeBrowser",
      defaultMessage: "Close {browserName} completely before importing",
      description: "Instruction to close the source browser before importing its profile data",
      values: {
        browserName: selectedProfile.appName
      }
    }} />}
      </p>;
  let ivory = selectedProfile != null && <ParseUrlOrFallback {...{
    children: [<BrowserProfileImportDialogHelper4 {...{
      available: selectedProfile.hasPasswords,
      checked: yellow,
      disabled: isImporting,
      kind: "passwords",
      onChange: onImportPasswordsChange
    }} />, <BrowserProfileImportDialogHelper4 {...{
      available: selectedProfile.hasCookies,
      checked: xenon,
      disabled: isImporting,
      kind: "cookies",
      onChange: onImportCookiesChange
    }} />]
  }} />;
  let jasper = requiresElevatedChromeConsent && <BrowserProfileImportDialogHelper5 {...{
    checked: elevatedChromeConsent,
    disabled: isImporting,
    onChange: onElevatedChromeConsentChange
  }} />;
  let kelp = profilesHaveError && <p className="px-3 text-sm text-token-error-foreground" role="alert">
      {<MemoizedFormattedMessage {...{
      id: "settings.browserUse.profileImport.profilesError",
      defaultMessage: "We couldn't load browser profiles. Close and reopen this dialog to try again",
      description: "Error shown when browser profiles cannot be loaded for import"
    }} />}
    </p>;
  let lotus = <DeferredUiU {...{
    className: "gap-3",
    children: [flint, garnet, hazel, ivory, jasper, kelp]
  }} />;
  let mint = <MemoizedFormattedMessage {...{
    id: "settings.browserUse.profileImport.cancel",
    defaultMessage: "Cancel",
    description: "Button that closes the browser data import dialog"
  }} />;
  let nova = <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    disabled: isImporting,
    onClick: onCancel,
    type: "button",
    children: mint
  }} />;
  let olive = <MemoizedFormattedMessage {...{
    id: "settings.browserUse.profileImport.import",
    defaultMessage: "Import",
    description: "Button that starts importing browser data"
  }} />;
  let prism = <ReadLoginRouteQuerySnapshot {...{
    color: "primary",
    disabled: zinc,
    loading: isImporting,
    type: "submit",
    children: olive
  }} />;
  let quill = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      className: AppInitialZ,
      children: [nova, prism]
    }} />
  }} />;
  return <DeferredUiB {...{
    as: "form",
    onSubmit: amber,
    children: [daisy, lotus, quill]
  }} />;
}
function BrowserProfileImportDialogHelper2(sage) {
  let {
      disabled,
      isLoading,
      open,
      profiles,
      selectedProfile,
      onOpenChange,
      onSelectProfile
    } = sage,
    topaz = selectedProfile ? indigo(selectedProfile) : null;
  let ultra = topaz,
    vapor = selectedProfile ? jade(selectedProfile) : undefined;
  let wheat = vapor,
    yarn = profiles?.length === 1,
    zephyr = yarn || undefined,
    acorn = yarn && "pointer-events-none",
    bloom = IntlProvider("min-w-0 flex-1", acorn);
  let coral = yarn ? "hidden" : undefined,
    drift = yarn ? undefined : disabled,
    eagle = yarn ? -1 : undefined,
    frost = <BrowserProfileImportDialogHelper3 {...{
      isLoading,
      selectedProfile
    }} />;
  let glide = <DropdownTriggerButton aria-disabled={zephyr} aria-label={wheat} className={bloom} chevronClassName={coral} disabled={drift} tabIndex={eagle}>
      {frost}
    </DropdownTriggerButton>;
  let honey = glide,
    iris = <span className="shrink-0 text-sm text-token-description-foreground">
        {<MemoizedFormattedMessage {...{
        id: "settings.browserUse.profileImport.from",
        defaultMessage: "From",
        description: "Label before the browser profile selector"
      }} />}
      </span>;
  return <div className="flex items-center gap-3">
      {iris}
      {yarn ? honey : <DropdownMenuPopover {...{
      align: "end",
      contentWidth: "menuWide",
      disabled,
      open,
      triggerButton: honey,
      onOpenChange,
      children: <DropdownMenu.Section {...{
        className: "max-h-[250px] overflow-y-auto",
        children: profiles?.map(jewel => {
          let knoll = indigo(jewel);
          return <DropdownMenu.Item key={knoll} {...{
            "aria-label": jade(jewel),
            RightIcon: knoll === ultra ? AppIconZlt : undefined,
            onSelect: () => onSelectProfile(jewel),
            children: <BrowserProfileImportDialogHelper11 {...{
              profile: jewel
            }} />
          }} />;
        })
      }} />
    }} />}
    </div>;
}
function BrowserProfileImportDialogHelper3(lunar) {
  let {
    isLoading,
    selectedProfile
  } = lunar;
  if (isLoading) {
    let moss;
    return <>
        {<VSCODE_EDITOR_ID {...{
        className: "icon-2xs"
      }} />}
        {<MemoizedFormattedMessage {...{
        id: "settings.browserUse.profileImport.loadingProfiles",
        defaultMessage: "Loading profiles…",
        description: "Placeholder shown while importable browser profiles load"
      }} />}
      </>;
  }
  if (selectedProfile == null) {
    let north;
    return <MemoizedFormattedMessage {...{
      id: "settings.browserUse.profileImport.noProfiles",
      defaultMessage: "No profiles found",
      description: "Placeholder shown when no importable browser profiles are found"
    }} />;
  }
  return <BrowserProfileImportDialogHelper11 {...{
    profile: selectedProfile
  }} />;
}
function BrowserProfileImportDialogHelper4(orbit) {
  let {
      available,
      checked,
      disabled,
      kind,
      onChange
    } = orbit,
    pine = `browser-profile-import-${kind}-label`,
    quest,
    ridge;
  if (kind === "cookies") {
    let vale;
    vale = <MemoizedFormattedMessage {...{
      ...echo.cookies
    }} />;
    quest = vale;
    let wave;
    wave = <_e {...{
      className: "size-5 text-token-text-secondary"
    }} />;
    ridge = wave;
  } else {
    let apex;
    apex = <MemoizedFormattedMessage {...{
      ...echo.passwords
    }} />;
    quest = apex;
    let brook;
    brook = <Delta {...{
      className: "size-5 text-token-text-secondary"
    }} />;
    ridge = brook;
  }
  let storm = <span id={pine}>
      {quest}
    </span>;
  let tide = !available || disabled,
    unity = <AppInitialYC aria-labelledby={pine} checked={checked} disabled={tide} onChange={onChange} />;
  return <EnsurePersonalizationCInit {...{
    icon: ridge,
    label: storm,
    control: unity
  }} />;
}
function BrowserProfileImportDialogHelper5(cliff) {
  let {
      checked,
      disabled,
      onChange
    } = cliff,
    dusk = <p className="font-medium text-token-text-primary">
        {<MemoizedFormattedMessage {...{
        id: "settings.browserUse.profileImport.windowsChrome.title",
        defaultMessage: "Administrator approval required",
        description: "Title for the Windows Chrome browser import consent notice"
      }} />}
      </p>;
  let elm = <p className="text-token-description-foreground">
      {<MemoizedFormattedMessage {...{
      id: "settings.browserUse.profileImport.windowsChrome.description",
      defaultMessage: "Windows protects Chrome cookies and passwords with App-Bound Encryption, so ChatGPT also needs administrator approval",
      description: "Description for the Windows Chrome browser import consent notice"
    }} />}
    </p>;
  let fern = <Queued {...{
    checked,
    disabled,
    onCheckedChange: onChange
  }} />;
  let grove = <span>
      {<MemoizedFormattedMessage {...{
      id: "settings.browserUse.profileImport.windowsChrome.consent",
      defaultMessage: "I understand the app will request administrator approval to import this Chrome data",
      description: "Consent label for elevated Windows Chrome browser data import"
    }} />}
    </span>;
  return <div className="flex flex-col gap-2 rounded-lg border border-token-input-border bg-token-foreground/[0.025] p-3 text-sm">
      {dusk}
      {elm}
      <label className="relative flex cursor-interaction items-start gap-2">
        {fern}
        {grove}
      </label>
    </div>;
}
function BrowserProfileImportDialogHelper6(hill) {
  let {
      cookieAccessFailureMessage,
      showCloseBrowserGuidance,
      result,
      onDone,
      onTryAgain
    } = hill,
    isle = result.cookies?.status === "failed_to_copy",
    juniper = kite(result.cookies);
  let lagoon = juniper,
    meadow = lagoon && ((result.cookies?.imported ?? 0) > 0 || result.cookies?.status === "partial-success"),
    nest = result.passwords?.profile,
    oak = result.passwords?.account,
    petal,
    quiet;
  petal = [result.passwords, nest, oak];
  quiet = petal.some(kite);
  let rain = quiet,
    seed = petal.some(harbor),
    trail = rain && petal.some(gamma);
  let urn = trail,
    vine = lagoon || rain,
    wind = onTryAgain == null ? nickel.complete : nickel.failed,
    yarrow = <RealtimeVoiceHostId {...{
      asChild: true,
      children: <h2 className="sr-only">
              {<MemoizedFormattedMessage {...{
          ...wind
        }} />}
            </h2>
    }} />;
  let azure = vine ? "sr-only" : undefined,
    birch = <MemoizedFormattedMessage {...{
      ...wind
    }} />;
  let canyon = <IsStartingProcessExpired {...{
    asChild: true,
    children: <div>
            {vine ? <MemoizedFormattedMessage {...{
        id: "settings.browserUse.profileImport.partialDescription",
        defaultMessage: "Review the import status for each browser data type",
        description: "Accessible description for a browser data import with one or more failed data types"
      }} /> : <MemoizedFormattedMessage {...{
        id: "settings.browserUse.profileImport.completeDescription",
        defaultMessage: "Your data is now available in the built-in browser",
        description: "Description shown after browser data import completes"
      }} />}
          </div>
  }} />;
  let dew = <DeferredUiH {...{
    subtitleClassName: azure,
    title: birch,
    subtitle: canyon
  }} />;
  let ever = <DeferredUiU {...{
    children: [yarrow, dew]
  }} />;
  let field = result.passwords != null && <BrowserProfileImportDialogHelper12 {...{
    failureMessage: rain ? <BrowserProfileImportDialogHelper10 {...{
      accessFailed: seed,
      partiallyFailed: urn
    }} /> : undefined,
    kind: "passwords"
  }} />;
  let grain = result.cookies != null && <BrowserProfileImportDialogHelper12 {...{
    failureMessage: lagoon ? <BrowserProfileImportDialogHelper9 {...{
      accessFailed: isle,
      showCloseBrowserGuidance,
      message: cookieAccessFailureMessage,
      partiallyFailed: meadow,
      source: result.source
    }} /> : undefined,
    kind: "cookies"
  }} />;
  let haven = <DeferredUiU {...{
    children: <ParseUrlOrFallback {...{
      children: [field, grain]
    }} />
  }} />;
  let ink = onTryAgain != null && <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    onClick: onDone,
    type: "button",
    children: <MemoizedFormattedMessage {...{
      id: "settings.browserUse.profileImport.dismiss",
      defaultMessage: "Dismiss",
      description: "Button that closes a failed browser data import result"
    }} />
  }} />;
  let jadeite = onTryAgain ?? onDone,
    kernel = onTryAgain == null ? nickel.done : nickel.retry,
    leaf = <MemoizedFormattedMessage {...{
      ...kernel
    }} />;
  let maple = <ReadLoginRouteQuerySnapshot {...{
    color: "primary",
    onClick: jadeite,
    type: "button",
    children: leaf
  }} />;
  let nimbus = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      className: AppInitialZ,
      expandSingleButton: false,
      children: [ink, maple]
    }} />
  }} />;
  return <DeferredUiB {...{
    children: [ever, haven, nimbus]
  }} />;
}
function gamma(opal) {
  return (opal?.imported ?? 0) > 0 || opal?.status === "success" || opal?.status === "partial-success";
}
function harbor(plume) {
  return plume?.status === "failed_to_copy";
}
function BrowserProfileImportDialogHelper9(quillow) {
  let {
    accessFailed,
    showCloseBrowserGuidance,
    message,
    partiallyFailed,
    source
  } = quillow;
  if (accessFailed) {
    if (message != null) {
      let root;
      return <>{message}</>;
    }
    if (!showCloseBrowserGuidance) {
      let silk;
      return <MemoizedFormattedMessage {...{
        id: "settings.browserUse.profileImport.cookieAccessError",
        defaultMessage: "ChatGPT couldn’t access this profile’s cookies. A device security policy may be blocking access",
        description: "Error shown when device security may have blocked access to cookies during browser profile import"
      }} />;
    }
    switch (source) {
      case "chrome":
        {
          let thorn;
          return <MemoizedFormattedMessage {...{
            id: "settings.browserUse.profileImport.chromeCookieAccessError",
            defaultMessage: "ChatGPT couldn’t access this profile’s cookies. Chrome may still be running in the background. Close Chrome completely and try again. A device security policy may also block access",
            description: "Error shown when Chrome or device security may have blocked access to cookies during browser profile import"
          }} />;
        }
      case "atlas":
        {
          let upland;
          return <MemoizedFormattedMessage {...{
            id: "settings.browserUse.profileImport.atlasCookieAccessError",
            defaultMessage: "ChatGPT couldn’t access this profile’s cookies. Atlas may still be running in the background. Close Atlas completely and try again. A device security policy may also block access",
            description: "Error shown when Atlas or device security may have blocked access to cookies during browser profile import"
          }} />;
        }
    }
  }
  if (partiallyFailed) {
    let vista;
    return <MemoizedFormattedMessage {...{
      id: "settings.browserUse.profileImport.cookiesPartialError",
      defaultMessage: "Some cookies couldn’t be imported",
      description: "Error shown when some cookies could not be imported from a browser profile"
    }} />;
  }
  return <MemoizedFormattedMessage {...{
    id: "settings.browserUse.profileImport.cookiesError",
    defaultMessage: "Cookies couldn’t be imported",
    description: "Error shown when cookies could not be imported from a browser profile"
  }} />;
}
function BrowserProfileImportDialogHelper10(wisp) {
  let {
    accessFailed,
    partiallyFailed
  } = wisp;
  if (partiallyFailed) {
    let yonder;
    return <MemoizedFormattedMessage {...{
      id: "settings.browserUse.profileImport.passwordsPartialError",
      defaultMessage: "Some passwords couldn’t be imported",
      description: "Error shown when some passwords could not be imported from a browser profile"
    }} />;
  }
  if (accessFailed) {
    let zenith;
    return <MemoizedFormattedMessage {...{
      id: "settings.browserUse.profileImport.passwordAccessError",
      defaultMessage: "ChatGPT couldn’t access this profile’s passwords. A device security policy may be blocking access",
      description: "Error shown when device security may have blocked access to passwords during browser profile import"
    }} />;
  }
  return <MemoizedFormattedMessage {...{
    id: "settings.browserUse.profileImport.passwordsError",
    defaultMessage: "Passwords couldn’t be imported",
    description: "Error shown when passwords could not be imported from a browser profile"
  }} />;
}
function BrowserProfileImportDialogHelper11(anvil) {
  let {
      profile
    } = anvil,
    beacon;
  bb0: switch (profile.source) {
    case "atlas":
      {
        let fjord;
        fjord = <img alt="" className="size-4 shrink-0 rounded-[22%]" src={deferredUiIk} />;
        beacon = fjord;
        break bb0;
      }
    case "chrome":
      {
        let glen;
        glen = <AppIconNk className="size-4 shrink-0" />;
        beacon = glen;
      }
  }
  let crag = <span className="min-w-0 truncate text-token-text-primary">
      {profile.appName}
    </span>;
  let dome = profile.profileName || profile.profileDirectoryName,
    eddy = <span className="min-w-0 truncate text-token-text-tertiary">
        {dome}
      </span>;
  return <span className="flex min-w-0 flex-1 items-center gap-1.5">
      {beacon}
      {crag}
      {eddy}
    </span>;
}
function BrowserProfileImportDialogHelper12(hearth) {
  let {
      failureMessage,
      kind
    } = hearth,
    inlet,
    jetty;
  if (kind === "cookies") {
    let mire;
    mire = <_e {...{
      className: "size-5 text-token-text-secondary"
    }} />;
    inlet = mire;
    let nook;
    nook = <MemoizedFormattedMessage {...{
      ...echo.cookies
    }} />;
    jetty = nook;
  } else {
    let oxbow;
    oxbow = <Delta {...{
      className: "size-5 text-token-text-secondary"
    }} />;
    inlet = oxbow;
    let pond;
    pond = <MemoizedFormattedMessage {...{
      ...echo.passwords
    }} />;
    jetty = pond;
  }
  let knob, ledge;
  knob = failureMessage == null ? <WriteHooksStateMutationAtom {...{
    className: "size-5 text-token-text-primary"
  }} /> : <WriteCodexThreadDeeplink {...{
    className: "size-5 text-token-error-foreground"
  }} />;
  ledge = failureMessage == null ? undefined : <span className="text-token-error-foreground" role="alert">
        {failureMessage}
      </span>;
  return <EnsurePersonalizationCInit {...{
    control: knob,
    description: ledge,
    icon: inlet,
    label: jetty
  }} />;
}
function indigo(quarry) {
  return `${quarry.source}:${quarry.profilePath}`;
}
function jade(rapids) {
  let spur = rapids.profileName || rapids.profileDirectoryName;
  return `${rapids.appName} ${spur}`;
}
function kite(tor) {
  return (tor?.failed ?? 0) > 0 || tor?.error != null || tor?.status != null && tor.status !== "success";
}
var lemon,
  marble,
  nickel,
  onyx = esmInit(() => {
    lemon = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    AppInitialAk();
    ensureSettingsQueryAtomsInit();
    openMcpAppSidePanelTab();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureDropdownMenuInit();
    ensureComposerEsm_Sut_Init();
    AppInitialBC();
    ensureHooksQueriesInit();
    ensureDropdownMenuPopoverInit();
    bravo();
    AppInitialRk();
    be();
    deferredUiMk();
    AppInitialVC();
    ensureSettingsSectionTitleInit();
    AppInitialFC();
    falcon();
    nickel = identity({
      complete: {
        id: "settings.browserUse.profileImport.complete",
        defaultMessage: "Import complete",
        description: "Title shown after browser data import completes"
      },
      done: {
        id: "settings.browserUse.profileImport.done",
        defaultMessage: "Done",
        description: "Button that closes the browser data import dialog"
      },
      failed: {
        id: "settings.browserUse.profileImport.failed",
        defaultMessage: "Import failed",
        description: "Title shown when browser data import fails"
      },
      retry: {
        id: "settings.browserUse.profileImport.retry",
        defaultMessage: "Try again",
        description: "Button that retries browser data import"
      }
    });
  });
export function BrowserProfileImportDialogIcon(delta: unknown) {
  let {
      entryPoint,
      flowId,
      onClose,
      service
    } = delta,
    cog = CodexPluginActionType(appScopeAtom),
    disc = NativeContextMenuSurface("1834314516"),
    [edge, forge] = $.useState(""),
    [gear, hinge] = $.useState(true),
    [iron, joint] = $.useState(true),
    [keystone, latch] = $.useState(null),
    motor = $.useRef("before-attempt"),
    nut = $.useRef(false),
    piston = $.useRef(false),
    rivet = $.useRef(false),
    screw = $.useRef(null),
    torque = deferredUiMk(service, true);
  let valve = useQuery(torque),
    axle = trunnion => {
      let {
        request
      } = trunnion;
      return service.importBrowserProfile(request);
    };
  let bracket, clamp;
  bracket = (boss, cam) => {
    let {
      context,
      request
    } = cam;
    motor.current = "after-request-error";
    DeferredBk(cog, entryPoint, request, context);
  };
  clamp = (detent, eccentric) => {
    let {
      context,
      request
    } = eccentric;
    motor.current = "after-result";
    DeferredBk(cog, entryPoint, request, context, detent);
  };
  let drill = {
    mutationFn: axle,
    onError: bracket,
    onSuccess: clamp
  };
  let engine = noop(drill),
    frame = valve.data,
    gasket = frame?.find(follower => quartz(follower) === edge) ?? AppInitialHk(frame ?? [])[0] ?? frame?.[0] ?? null;
  let handle = gasket,
    insert = handle?.hasCookies === true && gear,
    jacket = handle?.hasPasswords === true && iron,
    knurl = typeof document < "u" && document.documentElement.dataset.codexOs === "win32",
    lever = typeof document < "u" && document.documentElement.dataset.codexOs === "darwin",
    mount = knurl && handle?.source === "chrome",
    nozzle = handle ? quartz(handle) : null;
  let platen = nozzle,
    ratchet = platen != null && keystone === platen,
    shim = engine.isError && engine.variables != null ? {
      source: engine.variables.request.source,
      profilePath: engine.variables.request.profilePath,
      cookies: engine.variables.request.importCookies === false ? undefined : {
        status: "failed"
      },
      passwords: engine.variables.request.importPasswords === false ? undefined : {
        status: "failed"
      }
    } : null;
  let tappet = shim,
    arbor = engine.data ?? tappet,
    bushing = () => {
      nut.current || (nut.current = true, logBrowserProfileImportDialogClosed(cog, entryPoint, {
        flowId,
        attemptIndex: screw.current?.context.attemptIndex,
        source: screw.current?.request.source ?? (rivet.current ? "chrome" : handle?.source),
        windowsChromeAdminApprovalNoticeRequired: screw.current?.context.windowsChromeAdminApprovalNoticeRequired ?? rivet.current,
        windowsChromeAdminApprovalNoticeAcknowledged: screw.current?.context.windowsChromeAdminApprovalNoticeAcknowledged ?? piston.current,
        exitState: engine.isPending ? undefined : motor.current
      }));
    };
  let collar = bushing,
    dowel = () => {
      collar();
      onClose();
    };
  let flange = $.useEffectEvent(dowel),
    gib = () => {
      disc || flange();
    };
  let hub;
  hub = [disc];
  $.useEffect(gib, hub);
  let idler, jig;
  idler = () => {
    !disc || !mount || platen == null || rivet.current || (rivet.current = true, deferredUiWk(cog, entryPoint, flowId));
  };
  jig = [platen, disc, entryPoint, flowId, mount, cog];
  $.useEffect(idler, jig);
  let keeper = () => {
    engine.isPending || (collar(), onClose());
  };
  let lug = keeper,
    mandrel = guide => {
      guide || lug();
    };
  let _e = !engine.isPending && arbor == null,
    nipple = undefined;
  let orifice = helix => {
    helix && !piston.current && (piston.current = true, logBrowserProfileImportWindowsChromeNoticeAcked(cog, entryPoint, flowId));
    latch(helix ? platen : null);
  };
  let pin = () => {
    if (handle == null) return;
    let impeller = pearl(handle, insert, jacket, mount),
      journal = {
        flowId,
        attemptIndex: (screw.current?.context.attemptIndex ?? 0) + 1,
        windowsChromeAdminApprovalNoticeRequired: mount,
        windowsChromeAdminApprovalNoticeAcknowledged: ratchet
      };
    screw.current = {
      context: journal,
      request: impeller
    };
    threadActionErrorMessages(cog, entryPoint, impeller, journal);
    engine.mutate({
      context: journal,
      request: impeller
    });
  };
  let be = tappet == null ? undefined : engine.reset,
    race = kingpin => {
      forge(quartz(kingpin));
      latch(null);
      engine.reset();
    };
  let sleeve = <BrowserProfileImportDialogHelper1 {...{
    cookieAccessFailureMessage: nipple,
    elevatedChromeConsent: ratchet,
    importCookies: gear,
    importPasswords: iron,
    isImporting: engine.isPending,
    isLoadingProfiles: valve.isLoading,
    showCloseBrowserGuidance: lever,
    profiles: frame,
    profilesHaveError: valve.isError,
    requiresElevatedChromeConsent: mount,
    result: arbor,
    selectedProfile: handle,
    onCancel: lug,
    onElevatedChromeConsentChange: orifice,
    onImport: pin,
    onImportCookiesChange: hinge,
    onImportPasswordsChange: joint,
    onTryAgain: be,
    onSelectProfile: race
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: true,
    onOpenChange: mandrel,
    showDialogClose: _e,
    size: "narrow",
    children: sleeve
  }} />;
}
function pearl(updraft, verge, weir, yard) {
  let anchor = {
    source: updraft.source,
    profilePath: updraft.profilePath,
    importCookies: verge,
    importPasswords: weir
  };
  return yard ? {
    ...anchor,
    allowElevatedChromeDecryption: true
  } : anchor;
}
function quartz(bolt) {
  return `${bolt.source}:${bolt.profilePath}`;
}
var river, $, slate;
esmInit(() => {
  river = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  ensureComposerEsm_MT_Init();
  $ = commonJsInit(react(), 1);
  findProcessManagerRow();
  ensureAppScopeInit();
  onyx();
  ensureSkillsPageHelpersInit();
  writeClipboardIfPresent();
  AppInitialGk();
})();
