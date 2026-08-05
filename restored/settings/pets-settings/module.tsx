// Restored from ref/webview/assets/pets-settings-BdgUlXRY.js
// Wave FX — full polished body from `pets-settings-BdgUlXRY/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 77/93).
// AST split 1/1
/* split-lane-import-depth:1 */

import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { buildSkillMentionMarkdown } from "../../composer/build-skill-mention-markdown";
import {
  ensureComposerEsm_F7_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Sst_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import { composerNavigation } from "../../composer/composer-navigation";
import { ensureConversationPageEsm_NZ_Init } from "../../conversation/conversation-page-esm-inits";
import { THREAD_DETAIL_LEVEL_STEPS_COMMANDS } from "../../conversation/thread-detail-level-ids";
import { defaultAvatarOverlayMascotWidthPx } from "../../desktop/avatar-overlay-mascot-size";
import {
  customAvatarByIdQueryAtom,
  customAvatarsQueryKey,
  ensureCustomAvatarsQueryInit,
} from "../../desktop/custom-avatars-query";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { useEventCallback } from "../../hooks/use-event-callback";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { AppIconOi } from "../../icons/app-icon-oi";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { toMarkdownLink } from "../../markdown/to-markdown-link";
import {
  findSidebarSectionElement,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { OnboardingProviderContinuePanel } from "../../onboarding/onboarding-provider-continue-panel";
import { mergeCodexCompanions } from "../../pets/merge-codex-companions";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureRecommendedSkillStatsigOverridesInit,
  getRecommendedSkillStatsigOverride,
  useRecommendedSkillStatsigOverrides,
} from "../../skills/recommended-skill-statsig-overrides";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { codex2 } from "../../ui/codex2-2";
import { ElectronOnly } from "../../ui/electron-only";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { initSettingsLoadingRow } from "../settings-loading-row";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
import { usePetsSettingsController } from "../use-pets-settings-controller";
import { falcon, PetsSettingsHelper3 } from "./custom-pets-section";
import { copper } from "./pet-avatar-row";

const AppInitialFC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:usePetsSettingsQuery@settings/use-pets-settings-query.ts) */
const AppInitialI7: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const WorkingDotsActionButton: any = undefined;
/** Wave FX unresolved companion (missing-export:desktop/use-selected-avatar.ts) */
const ensureUseSelectedAvatarInit: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave FX unresolved companion (missing-export:browser/skills3.tsx) */
const Skills3: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
var harbor,
  indigo,
  jade = esmInit(() => {
    harbor = reactCompilerRuntime();
    ensureComposerEsm_Utt_Init();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    copper();
    ensureCodexSpriteAssetsInit();
    defaultAvatarOverlayMascotWidthPx();
    ensureConversationPageEsm_NZ_Init();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Hlt_Init();
    ensureComposerEsm_K1_Init();
    useEventCallback();
    findSidebarSectionElement();
    ensureComposerEsm_K9_Init();
    ensureAppScopeInit();
    ensureSettingsQueryAtomsInit();
    codexCommandTheme();
    initSettingsLoadingRow();
    AppInitialVC();
    AppInitialFC();
    ensureSkillsPageHelpersInit();
    codex2();
    ensureUseSelectedAvatarInit();
    falcon();
  });
async function kite(field) {
  return `${await marble(field)} create a pet based on what you know about me`;
}
async function lemon({
  forceReloadSkills,
  petDirectoryPath,
  petName,
  skillStatsigOverride,
}) {
  return `${await marble({
    forceReloadSkills,
    skillStatsigOverride,
  })} upgrade the existing pet at ${toMarkdownLink(petName.replaceAll(/[\r\n]+/g, " "), petDirectoryPath)} to the latest pet version with looking directions`;
}
async function marble({ forceReloadSkills, skillStatsigOverride }) {
  let grain = await invokeDesktopRpc("install-recommended-skill", {
    params: {
      forceReinstall: true,
      hostId: LOCAL_HOST_ID,
      installRoot: null,
      repoPath: nickel,
      skillId: at,
      skillStatsigOverride,
      source: "bundled",
    },
  });
  if (!grain.success || grain.destination == null)
    throw Error(grain.error ?? "Unable to install Hatch Pet");
  return (
    await forceReloadSkills(),
    buildSkillMentionMarkdown({
      name: at,
      path: WorkingDotsActionButton(grain.destination, "SKILL.md"),
    })
  );
}
var at,
  nickel,
  onyx = esmInit(() => {
    ensureComposerEsm_Sst_Init();
    OnboardingProviderContinuePanel();
    ensureAppShellAtomsInit();
    ensureSkillsPageHelpersInit();
    scrollAppActionTargetTo();
    at = "hatch-pet";
    nickel = "skills/.curated/hatch-pet";
  });
function pearl() {
  let { data, isError, isFetching, isLoading } = CodexPluginActionResult(
      customAvatarByIdQueryAtom,
    ),
    haven = data?.avatarDirectory ?? null,
    ink = data?.avatars,
    jadeite = mergeCodexCompanions(ink);
  return {
    avatarDirectory: haven,
    avatarOptions: jadeite,
    isError,
    isFetching,
    isLoading,
  };
}
var quartz,
  river = esmInit(() => {
    quartz = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    codex2();
    customAvatarsQueryKey();
  });
function PetsSettingsHelper11() {
  return (
    <ElectronOnly
      {...{
        electron: true,
        children: <PetsSettingsHelper12 {...{}} />,
      }}
    />
  );
}
function PetsSettingsHelper12() {
  let kernel = CodexPluginActionType(appScopeAtom),
    [leaf, maple] = timber.useState(false),
    { avatarDirectory, avatarOptions, isError, isLoading } = pearl(),
    nimbus = ensureGitRepoWatchAtomsInit(),
    opal = composerNavigation(),
    { forceReload } = usePetsSettingsController(undefined, LOCAL_HOST_ID),
    plume = getRecommendedSkillStatsigOverride(
      useRecommendedSkillStatsigOverrides(),
      "hatch-pet",
    ),
    quillow = async () => {
      await forceReload();
    },
    root = async () => {
      maple(true);
      try {
        let thorn = await kite({
          forceReloadSkills: quillow,
          skillStatsigOverride: plume,
        });
        await AppInitialI7(kernel, THREAD_DETAIL_LEVEL_STEPS_COMMANDS);
        opal({
          activeProject: null,
          prefillComposerMode: "local",
          prefillPrompt: thorn,
        });
      } catch {
        kernel.get(toastAtom).danger(
          <MemoizedFormattedMessage
            {...{
              id: "settings.pets.createCustom.error",
              defaultMessage: "Unable to start pet creation",
              description:
                "Toast shown when the Hatch Pet skill cannot be installed",
            }}
          />,
        );
      } finally {
        maple(false);
      }
    },
    silk = async (upland, vista) => {
      try {
        opal({
          prefillPrompt: await lemon({
            forceReloadSkills: quillow,
            petDirectoryPath: vista,
            petName: upland,
            skillStatsigOverride: plume,
          }),
        });
      } catch {
        kernel.get(toastAtom).danger(
          <MemoizedFormattedMessage
            {...{
              id: "settings.pets.upgradeCustom.error",
              defaultMessage: "Unable to start pet upgrade",
              description:
                "Toast shown when the Hatch Pet skill cannot be installed for a pet upgrade",
            }}
          />,
        );
      }
    };
  return (
    <PetsSettingsHelper3
      {...{
        avatarDirectory,
        avatarOptions,
        isCreatingCustomAvatar: leaf,
        isCustomAvatarLoadError: isError,
        isLoadingCustomAvatars: isLoading,
        onCreateCustomAvatar: () => {
          root();
        },
        onRefreshCustomAvatars: () => {
          nimbus(ensureCustomAvatarsQueryInit);
        },
        onUpgradeCustomAvatar: (wisp, yonder) => {
          silk(wisp, yonder);
        },
      }}
    />
  );
}
var slate,
  timber,
  $,
  umbra = esmInit(() => {
    slate = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    timber = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_Ilt_Init();
    ensureComposerEsm_K1_Init();
    conversationsSidebarMessages();
    deferredHostsS3();
    ensureAppScopeInit();
    ensureComposerEsm_F7_Init();
    ensureAppShellAtomsInit();
    ensureRecommendedSkillStatsigOverridesInit();
    Skills3();
    jade();
    onyx();
    customAvatarsQueryKey();
    river();
  });
export function PetsSettings() {
  return (
    <OpenInBrowser
      {...{
        title: <SettingsSectionTitle slug="pets" />,
        children: <PetsSettingsHelper11 {...{}} />,
      }}
    />
  );
}
var _t, violet;
esmInit(() => {
  _t = reactCompilerRuntime();
  umbra();
  AppIconOi();
  ensureSettingsSectionTitleInit();
})();
