// Restored from ref/webview/assets/appshots-settings-CJ4EHzWv.js
// Wave FX — full polished body from `appshots-settings-CJ4EHzWv/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 12 (verified 50/62).
// AST split 1/1
/* split-lane-import-depth:1 */


import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../../analytics/codex-appshot-shortcut-changed-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { logProductEvent } from "../../analytics/log-product-event";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appshotLogoUrl } from "../../assets/appshot-logo-url";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { createAppScopeQueryAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { appServices } from "../../desktop/desktop-services";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { readScrollTop } from "../../navigation/app-action-dom";
import { ensureOnboardingBannerInit as EnsureOnboardingBannerInit, OnboardingBanner } from "../../onboarding/onboarding-banner";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { devicechange } from "../../ui/devicechange";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { macOS4 } from "../../ui/mac-os4";
import { identity } from "../../utils/identity";
import { moveArrayItem } from "../../utils/move-array-item";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";
import { useSettingValue } from "../use-setting-value";

const AppInitialBC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FX unresolved companion (missing-export:settings/settings-values.ts) */
const setSettingValue: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useBatchWriteMcpServerConfig@mcp/use-batch-write-mcp-server-config.ts) */
const AppInitialK4: any = undefined;
/** Wave FX unresolved companion (jsx-collision:appshotSettingsDefinitions@settings/appshot-settings-definitions.ts) */
const AppInitialLpt: any = undefined;
/** Wave FX unresolved companion (jsx-collision:macOS3@ui/mac-os3.ts) */
const AppInitialO4: any = undefined;
/** Wave FX unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave FX unresolved companion (missing-export:utils/apply-footer-uoylu2.ts) */
const applyFooterUoylu2: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
var alpha,
  _e = esmInit(() => {
    alpha = "" + new URL("appshot-demo-DcV9m9GT.mp4", import.meta.url).href;
  });
function AppshotsSettingsHelper1() {
  let marble = CodexPluginActionType(appScopeAtom),
    nickel = CodexPluginActionResult(AppInitialK4),
    onyx = ensureGitRepoWatchAtomsInit(),
    [pearl, quartz] = delta.useState(null),
    {
      data
    } = CodexPluginActionResult(gamma),
    river = {
      mutationFn: bravo,
      onSuccess: olive => {
        marble.query.setData(gamma, olive.state);
        onyx(falcon);
      }
    };
  let slate = noop(river);
  if (!nickel || data?.supported === false) return null;
  let timber = async function (prism, quill) {
    quartz(null);
    try {
      let reef = await slate.mutateAsync({
        hotkey: prism
      });
      if (!reef.success) {
        quartz(reef.error);
        return;
      }
      logProductEvent(marble, CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE, {
        hotkey: prism ?? undefined,
        enabled: prism != null,
        source: quill
      });
    } catch (sage) {
      let topaz = sage;
      quartz(topaz instanceof Error ? topaz.message : String(topaz));
    }
  };
  let umbra = timber,
    violet = data?.configuredHotkey ?? null,
    willow = harbor.find(item => item.hotkey === violet) ?? null;
  let xenon = willow,
    yellow = xenon?.label ?? (violet == null ? null : moveArrayItem(violet));
  let zinc = yellow,
    amber = xenon?.hotkey ?? null,
    basalt = amber == null && pearl == null ? undefined : <div className="flex flex-col gap-1">
          {amber == null ? null : <Be {...{
        hotkey: amber
      }} />}
          {pearl ? <span className="text-token-error-foreground">
              {pearl}
            </span> : null}
        </div>;
  let cedar = basalt,
    daisy = <MemoizedFormattedMessage {...{
      id: "settings.appshotHotkey.label",
      defaultMessage: "Hotkey",
      description: "Label for appshot hotkey setting"
    }} />;
  let ember = slate.isPending,
    flint = zinc ?? <MemoizedFormattedMessage {...{
      id: "settings.appshotHotkey.none",
      defaultMessage: "None",
      description: "Label for disabling the appshot hotkey"
    }} />;
  let garnet = <DropdownTriggerButton className="w-max" contentClassName="flex-none" disabled={slate.isPending}>
      {flint}
    </DropdownTriggerButton>;
  let hazel = harbor.map(item => <DropdownMenu.Item key={item.hotkey} {...{
    RightIcon: item.hotkey === xenon?.hotkey ? AppIconZlt : undefined,
    onSelect: () => {
      quartz(null);
      item.hotkey !== violet && umbra(item.hotkey, "capture");
    },
    children: item.label
  }} />);
  let ivory = violet == null ? AppIconZlt : undefined,
    jasper = () => {
      quartz(null);
      violet != null && umbra(null, "disable");
    };
  let kelp = <MemoizedFormattedMessage {...{
    id: "settings.appshotHotkey.none",
    defaultMessage: "None",
    description: "Label for disabling the appshot hotkey"
  }} />;
  let lotus = <DropdownMenu.Item {...{
    RightIcon: ivory,
    onSelect: jasper,
    children: kelp
  }} />;
  let mint = <DropdownMenu.Section {...{
    children: [hazel, lotus]
  }} />;
  let nova = <DropdownMenuPopover {...{
    align: "end",
    contentWidth: "icon",
    disabled: ember,
    triggerButton: garnet,
    children: mint
  }} />;
  return <EnsurePersonalizationCInit {...{
    label: daisy,
    description: cedar,
    control: nova
  }} />;
}
async function bravo(ultra) {
  let {
      hotkey
    } = ultra,
    vapor = appServices.appshotHotkeys;
  if (vapor == null) throw Error("Appshot hotkeys are unavailable");
  return vapor.setHotkey(hotkey);
}
function Be(wheat) {
  let {
    hotkey
  } = wheat;
  switch (hotkey) {
    case "DoubleCommand":
      {
        let yarn;
        return <MemoizedFormattedMessage {...{
          id: "settings.appshotHotkey.description.command",
          defaultMessage: "Press both ⌘ keys simultaneously",
          description: "Description shown when the appshot hotkey is both Command keys"
        }} />;
      }
    case "DoubleOption":
      {
        let zephyr;
        return <MemoizedFormattedMessage {...{
          id: "settings.appshotHotkey.description.option",
          defaultMessage: "Press both ⌥ keys simultaneously",
          description: "Description shown when the appshot hotkey is both Option keys"
        }} />;
      }
    case "DoubleShift":
      {
        let acorn;
        return <MemoizedFormattedMessage {...{
          id: "settings.appshotHotkey.description.shift",
          defaultMessage: "Press both ⇧ keys simultaneously",
          description: "Description shown when the appshot hotkey is both Shift keys"
        }} />;
      }
  }
}
var copper,
  delta,
  echo,
  falcon,
  gamma,
  harbor,
  indigo = esmInit(() => {
    copper = reactCompilerRuntime();
    ensureComposerEsm_Utt_Init();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    delta = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    AppInitialO4();
    ensureDropdownMenuInit();
    ensureDropdownMenuPopoverInit();
    ensureContextMenuProviderInit();
    ensureComposerEsm_K9_Init();
    deferredHostsS3();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    AppInitialVC();
    ensureSettingsSectionTitleInit();
    dataAppActionReviewFileExpanded();
    falcon = ["appshot-hotkey-state"];
    gamma = createAppScopeQueryAtom(appScopeAtom, () => ({
      queryKey: falcon,
      queryFn: async () => {
        let bloom = appServices.appshotHotkeys;
        return bloom == null ? {
          supported: false,
          configuredHotkey: null,
          isActive: false
        } : bloom.getState();
      },
      staleTime: readScrollTop.ONE_MINUTE
    }));
    harbor = [{
      hotkey: "DoubleCommand",
      label: "⌘ + ⌘"
    }, {
      hotkey: "DoubleOption",
      label: "⌥ + ⌥"
    }, {
      hotkey: "DoubleShift",
      label: "⇧ + ⇧"
    }];
  }),
  jade,
  kite = esmInit(() => {
    ensureIntlFormattersInit();
    jade = identity({
      capture: {
        id: "settings.appshots.hero.title",
        defaultMessage: "Take an appshot to show ChatGPT your frontmost window",
        description: "Title for the Appshots settings explainer"
      },
      soundEffect: {
        id: "settings.appshots.soundEffect.label",
        defaultMessage: "Play sound effect",
        description: "Label for the Appshots sound effect setting row"
      }
    });
  });
export function AppshotsSettings() {
  let jewel = CodexPluginActionType(appScopeAtom),
    knoll = useIntl(),
    lunar = useSettingValue(AppInitialLpt.destination),
    moss = CodexPluginActionResult(AppInitialK4),
    north = applyFooterUoylu2(),
    {
      isLoading
    } = useHostPlatformModifierSymbol(),
    orbit = {
      id: "automatic",
      label: <MemoizedFormattedMessage {...{
        id: "settings.appshots.destination.automatic",
        defaultMessage: "Automatic",
        description: "Automatic Appshot destination option"
      }} />,
      description: <MemoizedFormattedMessage {...{
        id: "settings.appshots.destination.automatic.description",
        defaultMessage: "Uses the current chat if used recently, otherwise starts a new chat",
        description: "Description for the Automatic Appshot destination option"
      }} />
    };
  let pine = {
    id: "last-chat",
    label: <MemoizedFormattedMessage {...{
      id: "settings.appshots.destination.lastChat",
      defaultMessage: "Current chat",
      description: "Current chat Appshot destination option"
    }} />,
    description: <MemoizedFormattedMessage {...{
      id: "settings.appshots.destination.lastChat.description",
      defaultMessage: "Always use the current chat",
      description: "Description for the Current chat Appshot destination option"
    }} />
  };
  let quest = [orbit, pine, {
    id: "new-chat",
    label: <MemoizedFormattedMessage {...{
      id: "settings.appshots.destination.newChat",
      defaultMessage: "New chat",
      description: "New chat Appshot destination option"
    }} />,
    description: <MemoizedFormattedMessage {...{
      id: "settings.appshots.destination.newChat.description",
      defaultMessage: "Always start a new chat",
      description: "Description for the New chat Appshot destination option"
    }} />
  }];
  let ridge = quest,
    storm = ridge.find(item => item.id === lunar) ?? ridge[0];
  let tide = storm;
  if (north || isLoading || !moss) return null;
  let unity = <SettingsSectionTitle slug="appshots" />;
  let vale = <EnsureOnboardingBannerInit {...{
    description: <MemoizedFormattedMessage {...{
      id: "settings.appshots.hero.description",
      defaultMessage: "Appshots include visual and text content, including text scrolled offscreen",
      description: "Description for the Appshots settings explainer"
    }} />,
    leadingVisual: <img alt="" aria-hidden={true} className="size-8 object-contain" src={appshotLogoUrl} />,
    title: <MemoizedFormattedMessage {...{
      ...jade.capture
    }} />
  }} />;
  let wave = <AppshotsSettingsHelper1 {...{}} />;
  let apex, brook;
  apex = <MemoizedFormattedMessage {...{
    id: "settings.appshots.destination.label",
    defaultMessage: "Appshot destination",
    description: "Label for the Appshot destination setting row"
  }} />;
  brook = <MemoizedFormattedMessage {...{
    id: "settings.appshots.destination.description",
    defaultMessage: "Choose where appshots go when you use the hotkey",
    description: "Description for the Appshot destination setting"
  }} />;
  let cliff = <DropdownTriggerButton contentClassName="truncate">
      {tide.label}
    </DropdownTriggerButton>;
  let dusk = ridge.map(item => <DropdownMenu.Item key={item.id} {...{
    RightIcon: item.id === lunar ? AppIconZlt : undefined,
    subTextAllowWrap: true,
    onSelect: () => {
      setSettingValue(jewel, AppInitialLpt.destination, item.id);
    },
    SubText: <div className="pt-1 text-sm text-token-text-secondary">
            {item.description}
          </div>,
    children: <span className="text-sm">{item.label}</span>
  }} />);
  let elm = <EnsurePersonalizationCInit {...{
    label: apex,
    description: brook,
    control: <DropdownMenuPopover {...{
      align: "end",
      contentWidth: "panelWide",
      triggerButton: cliff,
      children: dusk
    }} />
  }} />;
  let fern = <AppshotsSettingsHelper3 {...{}} />;
  let grove = <UseChromeAndCodeThemeSync {...{
    className: "self-start",
    children: <UseChromeAndCodeThemeSync.Content {...{
      children: <ParseUrlOrFallback {...{
        children: [wave, elm, fern]
      }} />
    }} />
  }} />;
  let hill = knoll.formatMessage({
    id: "settings.appshots.demoVideo.label",
    defaultMessage: "Appshots walkthrough video",
    description: "Accessible label for the Appshots settings walkthrough video"
  });
  let isle = <ParseUrlOrFallback {...{
    className: "w-1/2 justify-self-center lg:w-auto lg:justify-self-stretch",
    children: <video aria-label={hill} autoPlay={true} className="aspect-[901/1095] w-full bg-token-bg-secondary object-cover" loop={true} muted={true} playsInline={true} preload="auto" src={alpha} />
  }} />;
  return <OpenInBrowser {...{
    title: unity,
    children: <div className="flex flex-col gap-[var(--padding-panel)]">
            {vale}
            <div className="grid gap-[var(--padding-panel)] lg:grid-cols-2">
              {grove}
              {isle}
            </div>
          </div>
  }} />;
}
function AppshotsSettingsHelper3() {
  let coral = CodexPluginActionType(appScopeAtom),
    drift = useIntl(),
    eagle = useSettingValue(AppInitialLpt.soundEnabled),
    frost = <MemoizedFormattedMessage {...{
      ...jade.soundEffect
    }} />;
  let glide = drift.formatMessage({
    id: "settings.appshots.soundEffect.ariaLabel",
    defaultMessage: "Play appshot sound effect",
    description: "Accessible label for the Appshots sound effect toggle"
  });
  let honey = iris => {
    setSettingValue(coral, AppInitialLpt.soundEnabled, iris);
  };
  return <EnsurePersonalizationCInit {...{
    label: frost,
    control: <AppInitialYC ariaLabel={glide} checked={eagle} onChange={honey} />
  }} />;
}
var lemon, $;
esmInit(() => {
  lemon = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  ensureIntlFormattersInit();
  AppInitialO4();
  _e();
  devicechange();
  ensureDropdownMenuInit();
  OnboardingBanner();
  AppInitialBC();
  macOS4();
  ensureDropdownMenuPopoverInit();
  ensureAppScopeInit();
  ensureSettingsQueryAtomsInit();
  AppIconOi();
  codexCommandTheme();
  AppInitialVC();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  ensureSkillsPageHelpersInit();
  indigo();
  kite();
})();
