// Restored from ref/webview/assets/git-settings-0pyuGSeN.js
// Wave FX — full polished body from `git-settings-0pyuGSeN/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 10 (verified 38/48).
// AST split 1/1
/* split-lane-import-depth:1 */


import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_MT_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { ensureHostConfigIdInit } from "../../hooks/host-rpc-client";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconOi } from "../../icons/app-icon-oi";
import { PanelWidthIcon } from "../../icons/panel-width-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { ElectronOnly } from "../../ui/electron-only";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { gitSettingsDefinitions } from "../git-settings-definitions";
import { ensureReviewDeliverySettingsRowInit, ReviewDeliverySettingsRow } from "../review-delivery-settings-row";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";
import { useSettingValue } from "../use-setting-value";

const AppInitialBC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FX unresolved companion (missing-export:settings/settings-values.ts) */
const setSettingValue: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const ensureSidebarPanelIconInit: any = undefined;
/** Wave FX unresolved companion (missing-export:settings/use-local-environment-editor-state.ts) */
const useLocalEnvironmentEditorState: any = undefined;
/** Wave FX unresolved companion (jsx-collision:updateToneSectionContent@composer/update-tone-section-content.ts) */
const AppInitialPl: any = undefined;
/** Wave FX unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
function GitSettingsHelper1() {
  let harbor = CodexPluginActionType(appScopeAtom),
    indigo = useIntl(),
    jade = NativeContextMenuSurface(ensureHostConfigIdInit),
    kite = useSettingValue(gitSettingsDefinitions.reviewMode);
  if (!jade) return null;
  let lemon, marble;
  lemon = <MemoizedFormattedMessage {...{
    id: "settings.git.reviewMode.label",
    defaultMessage: "Disable Git-Based Review",
    description: "Label for the Git Review mode setting"
  }} />;
  marble = <MemoizedFormattedMessage {...{
    id: "settings.git.reviewMode.description",
    defaultMessage: 'Only show "Last Turn" in the Review panel and disable Unstaged/Staged/Branch to avoid git operations',
    description: "Description for the Git Review mode setting"
  }} />;
  let nickel = indigo.formatMessage({
    id: "settings.git.reviewMode.ariaLabel",
    defaultMessage: "Disable Git-Based Review",
    description: "Accessible label for the Git-Based Review toggle"
  });
  let onyx = kite === "last-turn-only",
    pearl = quartz => {
      setSettingValue(harbor, gitSettingsDefinitions.reviewMode, quartz ? "last-turn-only" : "full");
    };
  return <EnsurePersonalizationCInit {...{
    label: lemon,
    description: marble,
    control: <AppInitialYC ariaLabel={nickel} checked={onyx} onChange={pearl} />
  }} />;
}
var alpha,
  bravo,
  copper = esmInit(() => {
    alpha = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    AppInitialBC();
    useLocalEnvironmentEditorState();
    ensureAppScopeInit();
    ensureSettingsQueryAtomsInit();
    AppInitialVC();
    ensureSkillsPageHelpersInit();
  }),
  delta,
  be = esmInit(() => {
    ensureIntlFormattersInit();
    delta = identity({
      branchPrefix: {
        id: "settings.git.branchPrefix.label",
        defaultMessage: "Branch prefix",
        description: "Label for git branch prefix setting"
      },
      alwaysForcePush: {
        id: "settings.git.forcePush.label",
        defaultMessage: "Always force push",
        description: "Label for always force push toggle"
      },
      createDraftPullRequests: {
        id: "settings.git.createDraftPullRequest.label",
        defaultMessage: "Create draft pull requests",
        description: "Label for create draft pull requests toggle"
      },
      pullRequestMergeMethod: {
        id: "settings.git.pullRequestMergeMethod.label",
        defaultMessage: "Pull request merge method",
        description: "Label for pull request merge method setting"
      },
      merge: {
        id: "settings.git.pullRequestMergeMethod.merge",
        defaultMessage: "Merge",
        description: "Merge option for pull request merge method"
      },
      squash: {
        id: "settings.git.pullRequestMergeMethod.squash",
        defaultMessage: "Squash",
        description: "Squash option for pull request merge method"
      },
      commitInstructions: {
        id: "settings.git.commitInstructions.label",
        defaultMessage: "Commit instructions",
        description: "Label for commit instructions"
      },
      pullRequestInstructions: {
        id: "settings.git.prInstructions.label",
        defaultMessage: "Pull request instructions",
        description: "Label for pull request instructions"
      }
    });
  });
export function GitSettings() {
  let river = CodexPluginActionType(appScopeAtom),
    slate = useIntl(),
    timber = NativeContextMenuSurface("2764989143"),
    [umbra, violet] = falcon.useState(null),
    willow = useSettingValue(gitSettingsDefinitions.branchPrefix),
    xenon = useSettingValue(gitSettingsDefinitions.alwaysForcePush),
    yellow = useSettingValue(gitSettingsDefinitions.createPullRequestAsDraft),
    zinc = useSettingValue(gitSettingsDefinitions.pullRequestMergeMethod),
    amber = useSettingValue(gitSettingsDefinitions.commitInstructions),
    basalt = useSettingValue(gitSettingsDefinitions.pullRequestInstructions),
    cedar = eddy => setSettingValue(river, gitSettingsDefinitions.branchPrefix, eddy);
  let daisy, ember;
  daisy = () => {
    violet(null);
    river.get(toastAtom).success(slate.formatMessage({
      id: "settings.git.branchPrefix.save.success",
      defaultMessage: "Saved branch prefix",
      description: "Toast shown when git branch prefix is saved"
    }));
  };
  ember = () => {
    river.get(toastAtom).danger(slate.formatMessage({
      id: "settings.git.branchPrefix.save.error",
      defaultMessage: "Failed to save branch prefix",
      description: "Toast shown when git branch prefix save fails"
    }));
  };
  let flint = {
    mutationFn: cedar,
    onSuccess: daisy,
    onError: ember
  };
  let garnet = noop(flint),
    hazel = fjord => setSettingValue(river, gitSettingsDefinitions.alwaysForcePush, fjord);
  let ivory, jasper;
  ivory = (glen, hearth) => {
    hearth ? river.get(toastAtom).success(slate.formatMessage({
      id: "settings.git.forcePush.save.enabled",
      defaultMessage: "Always force push enabled",
      description: "Toast shown when the always force push toggle is enabled"
    })) : river.get(toastAtom).success(slate.formatMessage({
      id: "settings.git.forcePush.save.disabled",
      defaultMessage: "Always force push disabled",
      description: "Toast shown when the always force push toggle is disabled"
    }));
  };
  jasper = () => {
    river.get(toastAtom).danger(slate.formatMessage({
      id: "settings.git.forcePush.save.error",
      defaultMessage: "Failed to save force push setting",
      description: "Toast shown when saving the always force push toggle fails"
    }));
  };
  let kelp = {
    mutationFn: hazel,
    onSuccess: ivory,
    onError: jasper
  };
  let lotus = noop(kelp),
    mint = inlet => setSettingValue(river, gitSettingsDefinitions.pullRequestMergeMethod, inlet);
  let nova, olive;
  olive = () => {
    river.get(toastAtom).success(slate.formatMessage({
      id: "settings.git.pullRequestMergeMethod.save.success",
      defaultMessage: "Saved pull request merge method",
      description: "Toast shown when the pull request merge method setting is saved"
    }));
  };
  nova = () => {
    river.get(toastAtom).danger(slate.formatMessage({
      id: "settings.git.pullRequestMergeMethod.save.error",
      defaultMessage: "Failed to save pull request merge method",
      description: "Toast shown when saving the pull request merge method setting fails"
    }));
  };
  let prism = {
    mutationFn: mint,
    onSuccess: olive,
    onError: nova
  };
  let _e = noop(prism),
    quill = jetty => setSettingValue(river, gitSettingsDefinitions.createPullRequestAsDraft, jetty);
  let reef, sage;
  reef = (knob, ledge) => {
    ledge ? river.get(toastAtom).success(slate.formatMessage({
      id: "settings.git.createDraftPullRequest.save.enabled",
      defaultMessage: "Create draft pull requests enabled",
      description: "Toast shown when the draft pull request toggle is enabled"
    })) : river.get(toastAtom).success(slate.formatMessage({
      id: "settings.git.createDraftPullRequest.save.disabled",
      defaultMessage: "Create draft pull requests disabled",
      description: "Toast shown when the draft pull request toggle is disabled"
    }));
  };
  sage = () => {
    river.get(toastAtom).danger(slate.formatMessage({
      id: "settings.git.createDraftPullRequest.save.error",
      defaultMessage: "Failed to save draft pull request setting",
      description: "Toast shown when saving the draft pull request toggle fails"
    }));
  };
  let be = {
    mutationFn: quill,
    onSuccess: reef,
    onError: sage
  };
  let _GitSettings = noop(be),
    [topaz, ultra] = falcon.useState(null),
    [vapor, wheat] = falcon.useState(null),
    yarn = mire => setSettingValue(river, gitSettingsDefinitions.commitInstructions, mire);
  let zephyr, acorn;
  zephyr = () => {
    ultra(null);
    river.get(toastAtom).success(slate.formatMessage({
      id: "settings.git.commitInstructions.save.success",
      defaultMessage: "Saved commit instructions",
      description: "Toast shown when commit instructions are saved"
    }));
  };
  acorn = () => {
    river.get(toastAtom).danger(slate.formatMessage({
      id: "settings.git.commitInstructions.save.error",
      defaultMessage: "Failed to save commit instructions",
      description: "Toast shown when commit instructions save fails"
    }));
  };
  let bloom = {
    mutationFn: yarn,
    onSuccess: zephyr,
    onError: acorn
  };
  let coral = noop(bloom),
    drift = nook => setSettingValue(river, gitSettingsDefinitions.pullRequestInstructions, nook);
  let eagle, frost;
  eagle = () => {
    wheat(null);
    river.get(toastAtom).success(slate.formatMessage({
      id: "settings.git.prInstructions.save.success",
      defaultMessage: "Saved pull request instructions",
      description: "Toast shown when pull request instructions are saved"
    }));
  };
  frost = () => {
    river.get(toastAtom).danger(slate.formatMessage({
      id: "settings.git.prInstructions.save.error",
      defaultMessage: "Failed to save pull request instructions",
      description: "Toast shown when pull request instructions save fails"
    }));
  };
  let glide = {
    mutationFn: drift,
    onSuccess: eagle,
    onError: frost
  };
  let honey = noop(glide),
    iris = willow,
    jewel = umbra ?? iris,
    knoll = umbra != null && umbra !== iris,
    lunar = garnet.isPending,
    moss = lotus.isPending,
    north = _GitSettings.isPending,
    orbit = _e.isPending,
    pine = amber ?? "",
    quest = topaz ?? pine,
    ridge = topaz != null && topaz !== pine,
    storm = coral.isPending,
    tide = basalt ?? "",
    unity = vapor ?? tide,
    vale = vapor != null && vapor !== tide,
    wave = honey.isPending,
    apex = () => {
      !knoll || lunar || garnet.mutate(jewel);
    };
  let brook = apex,
    cliff = oxbow => {
      moss || lotus.mutate(oxbow);
    };
  let dusk = cliff,
    elm = pond => {
      north || _GitSettings.mutate(pond);
    };
  let fern = elm,
    grove = quarry => {
      orbit || quarry !== zinc && _e.mutate(quarry);
    };
  let hill = grove,
    isle = () => {
      storm || !ridge || coral.mutate(quest);
    };
  let juniper = isle,
    lagoon = () => {
      wave || !vale || honey.mutate(unity);
    };
  let $ = lagoon,
    meadow = knoll && !lunar || ridge && !storm || vale && !wave,
    nest = event => {
      event.preventDefault();
      brook();
      juniper();
      $();
    };
  let oak;
  oak = {
    accelerator: "CmdOrCtrl+S",
    enabled: meadow,
    onKeyDown: nest
  };
  PanelWidthIcon(oak);
  let petal = <SettingsSectionTitle slug="git-settings" />;
  let quiet = <GitSettingsHelper1 {...{}} />;
  let rain, seed;
  rain = <MemoizedFormattedMessage {...{
    ...delta.branchPrefix
  }} />;
  seed = <MemoizedFormattedMessage {...{
    id: "settings.git.branchPrefix.description",
    defaultMessage: "Prefix used when ChatGPT creates new branches",
    description: "Description for git branch prefix setting"
  }} />;
  let trail = event => {
    if (lunar) return;
    let rapids = event.target.value;
    violet(rapids === iris ? null : rapids);
  };
  let $e = slate.formatMessage({
    id: "settings.git.branchPrefix.placeholder",
    defaultMessage: "codex/",
    description: "Placeholder for git branch prefix input"
  });
  let urn = slate.formatMessage({
    id: "settings.git.branchPrefix.ariaLabel",
    defaultMessage: "Branch prefix",
    description: "Aria label for git branch prefix input"
  });
  let vine = <EnsurePersonalizationCInit {...{
    label: rain,
    description: seed,
    control: <input className="w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border" value={jewel} onChange={trail} onBlur={brook} placeholder={$e} aria-label={urn} disabled={lunar} />
  }} />;
  let wind = timber ? <EnsurePersonalizationCInit {...{
    label: <MemoizedFormattedMessage {...{
      ...delta.pullRequestMergeMethod
    }} />,
    description: <MemoizedFormattedMessage {...{
      id: "settings.git.pullRequestMergeMethod.description",
      defaultMessage: "Choose how ChatGPT merges pull requests",
      description: "Description for pull request merge method setting"
    }} />,
    control: <AppInitialPl ariaLabel={slate.formatMessage({
      id: "settings.git.pullRequestMergeMethod.ariaLabel",
      defaultMessage: "Pull request merge method",
      description: "Accessible label for pull request merge method selector"
    })} selectedId={zinc} onSelect={hill} options={[{
      id: "merge",
      label: <MemoizedFormattedMessage {...{
        ...delta.merge
      }} />,
      ariaLabel: slate.formatMessage(delta.merge),
      disabled: orbit
    }, {
      id: "squash",
      label: <MemoizedFormattedMessage {...{
        ...delta.squash
      }} />,
      ariaLabel: slate.formatMessage(delta.squash),
      disabled: orbit
    }]} />
  }} /> : null;
  let yarrow, azure;
  yarrow = <MemoizedFormattedMessage {...{
    ...delta.alwaysForcePush
  }} />;
  azure = <MemoizedFormattedMessage {...{
    id: "settings.git.forcePush.description",
    defaultMessage: "Use --force-with-lease when pushing from ChatGPT",
    description: "Description for always force push toggle"
  }} />;
  let at = spur => {
    dusk(spur);
  };
  let birch = slate.formatMessage({
    id: "settings.git.forcePush.ariaLabel",
    defaultMessage: "Always force push",
    description: "Aria label for always force push toggle"
  });
  let canyon = <EnsurePersonalizationCInit {...{
    label: yarrow,
    description: azure,
    control: <AppInitialYC checked={xenon} disabled={moss} onChange={at} ariaLabel={birch} />
  }} />;
  let dew, ever;
  dew = <MemoizedFormattedMessage {...{
    ...delta.createDraftPullRequests
  }} />;
  ever = <MemoizedFormattedMessage {...{
    id: "settings.git.createDraftPullRequest.description",
    defaultMessage: "Use draft pull requests by default when creating PRs from ChatGPT",
    description: "Description for create draft pull requests toggle"
  }} />;
  let field = tor => {
    fern(tor);
  };
  let grain = slate.formatMessage({
    id: "settings.git.createDraftPullRequest.ariaLabel",
    defaultMessage: "Create draft pull requests",
    description: "Aria label for create draft pull requests toggle"
  });
  let haven = <EnsurePersonalizationCInit {...{
    label: dew,
    description: ever,
    control: <AppInitialYC checked={yellow} disabled={north} onChange={field} ariaLabel={grain} />
  }} />;
  let ink = <ElectronOnly {...{
    electron: true,
    children: <ReviewDeliverySettingsRow {...{}} />
  }} />;
  let jadeite = <UseChromeAndCodeThemeSync {...{
    children: <UseChromeAndCodeThemeSync.Content {...{
      children: <ParseUrlOrFallback {...{
        children: [quiet, vine, wind, canyon, haven, ink]
      }} />
    }} />
  }} />;
  let kernel, leaf;
  kernel = <MemoizedFormattedMessage {...{
    ...delta.commitInstructions
  }} />;
  leaf = <MemoizedFormattedMessage {...{
    id: "settings.git.commitInstructions.description",
    defaultMessage: "Added to commit message generation prompts",
    description: "Description for commit instructions"
  }} />;
  let _t = !ridge || storm,
    maple = <MemoizedFormattedMessage {...{
      id: "settings.git.commitInstructions.save",
      defaultMessage: "Save",
      description: "Button label to save commit instructions"
    }} />;
  let nimbus = <UseChromeAndCodeThemeSync.Header {...{
    title: kernel,
    subtitle: leaf,
    actions: <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      disabled: _t,
      loading: coral.isPending,
      onClick: juniper,
      size: "toolbar",
      children: maple
    }} />
  }} />;
  let opal = event => {
    if (storm) return;
    let updraft = event.target.value;
    ultra(updraft === pine ? null : updraft);
  };
  let plume = slate.formatMessage({
    id: "settings.git.commitInstructions.placeholder",
    defaultMessage: "Add commit message guidance…",
    description: "Placeholder for commit instructions textarea"
  });
  let quillow = slate.formatMessage({
    id: "settings.git.commitInstructions.ariaLabel",
    defaultMessage: "Commit instructions",
    description: "Aria label for commit instructions textarea"
  });
  let root = <UseChromeAndCodeThemeSync.Content {...{
    children: <textarea className="mt-1.5 w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-2 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border" value={quest} onChange={opal} placeholder={plume} aria-label={quillow} disabled={storm} rows={6} />
  }} />;
  let silk = <UseChromeAndCodeThemeSync {...{
    children: [nimbus, root]
  }} />;
  let thorn, upland;
  thorn = <MemoizedFormattedMessage {...{
    ...delta.pullRequestInstructions
  }} />;
  upland = <MemoizedFormattedMessage {...{
    id: "settings.git.prInstructions.description",
    defaultMessage: "Added to PR title/description generation prompts",
    description: "Description for pull request instructions"
  }} />;
  let vista = !vale || wave,
    wisp = <MemoizedFormattedMessage {...{
      id: "settings.git.prInstructions.save",
      defaultMessage: "Save",
      description: "Button label to save pull request instructions"
    }} />;
  let yonder = <UseChromeAndCodeThemeSync.Header {...{
    title: thorn,
    subtitle: upland,
    actions: <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      disabled: vista,
      loading: honey.isPending,
      onClick: $,
      size: "toolbar",
      children: wisp
    }} />
  }} />;
  let zenith = event => {
    if (wave) return;
    let verge = event.target.value;
    wheat(verge === tide ? null : verge);
  };
  let anvil = slate.formatMessage({
    id: "settings.git.prInstructions.placeholder",
    defaultMessage: "Add pull request guidance…",
    description: "Placeholder for pull request instructions textarea"
  });
  let beacon = slate.formatMessage({
    id: "settings.git.prInstructions.ariaLabel",
    defaultMessage: "Pull request instructions",
    description: "Aria label for pull request instructions textarea"
  });
  let crag = <UseChromeAndCodeThemeSync.Content {...{
    children: <textarea className="mt-1.5 w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-2 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border" value={unity} onChange={zenith} placeholder={anvil} aria-label={beacon} disabled={wave} rows={6} />
  }} />;
  let dome = <UseChromeAndCodeThemeSync {...{
    children: [yonder, crag]
  }} />;
  return <OpenInBrowser {...{
    title: petal,
    children: [jadeite, silk, dome]
  }} />;
}
var echo, falcon, gamma;
esmInit(() => {
  echo = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  falcon = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureSettingsQueryAtomsInit();
  WritingBlockRenderer();
  ensureComposerEsm_Ilt_Init();
  AppInitialBC();
  ensureComposerEsm_K1_Init();
  ensureSidebarPanelIconInit();
  ensureAppScopeInit();
  ensureSettingsQueryAtomsInit();
  AppIconOi();
  copper();
  be();
  ensureReviewDeliverySettingsRowInit();
  codexCommandTheme();
  AppInitialVC();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  ensureSkillsPageHelpersInit();
})();
