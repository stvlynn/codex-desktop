// Restored from ref/webview/assets/pets-settings-BdgUlXRY.js
// Wave FX — full polished body from `pets-settings-BdgUlXRY/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 77/93).
// AST split 1/1
/* split-lane-import-depth:1 */

import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CODEX_LOGIN_SUCCESS_TYPE } from "../../analytics/codex-login-success-type";
import { CODEX_ONBOARDING_WORKSPACE_CONTINUE_CLICKED_TYPE } from "../../analytics/codex-onboarding-workspace-continue-clicked-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginPageName } from "../../analytics/codex-plugin-page-name";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import {
  CodexAvatar,
  ensureCodexAvatarInit as EnsureCodexAvatarInit,
} from "../../avatar/codex-avatar";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_F7_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Sst_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_NZ_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { buildSkillMentionMarkdown } from "../../composer/build-skill-mention-markdown";
import { composerNavigation } from "../../composer/composer-navigation";
import { THREAD_DETAIL_LEVEL_STEPS_COMMANDS } from "../../conversation/thread-detail-level-ids";
import { defaultAvatarOverlayMascotWidthPx } from "../../desktop/avatar-overlay-mascot-size";
import {
  customAvatarByIdQueryAtom,
  customAvatarsQueryKey,
  ensureCustomAvatarsQueryInit,
} from "../../desktop/custom-avatars-query";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { useSelectedAvatar } from "../../desktop/use-selected-avatar";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { useEventCallback } from "../../hooks/use-event-callback";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconOi } from "../../icons/app-icon-oi";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { toMarkdownLink } from "../../markdown/to-markdown-link";
import {
  findSidebarSectionElement,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { OnboardingProviderContinuePanel } from "../../onboarding/onboarding-provider-continue-panel";
import { buildAvatarOverlayAnalyticsPayload } from "../../overlay/build-avatar-overlay-analytics-payload";
import { mergeCodexCompanions } from "../../pets/merge-codex-companions";
import { usePluginCategoryPageTelemetry } from "../../plugins/use-plugin-category-page-telemetry";
import { usePluginNavigationTelemetry as UsePluginNavigationTelemetry } from "../../plugins/use-plugin-navigation-telemetry";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureRecommendedSkillStatsigOverridesInit,
  getRecommendedSkillStatsigOverride,
  useRecommendedSkillStatsigOverrides,
} from "../../skills/recommended-skill-statsig-overrides";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { codex2 } from "../../ui/codex2-2";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  initSettingsLoadingRow,
  SettingsLoadingRow,
} from "../settings-loading-row";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
import { usePetsSettingsController } from "../use-pets-settings-controller";
import { useSettingValue } from "../use-setting-value";

const AppInitialFC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:usePetsSettingsQuery@settings/use-pets-settings-query.ts) */
const AppInitialI7: any = undefined;
/** Wave FX unresolved companion (missing-export:settings/settings-values.ts) */
const setSettingValue: any = undefined;
/** Wave FX unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const WorkingDotsActionButton: any = undefined;
/** Wave FX unresolved companion (missing-export:desktop/use-selected-avatar.ts) */
const ensureUseSelectedAvatarInit: any = undefined;
/** Wave FX unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave FX unresolved companion (jsx-collision:avatarOverlaySettings@desktop/avatar-overlay-settings.ts) */
const AppInitialSpt: any = undefined;
/** Wave FX unresolved companion (missing-export:browser/skills3.tsx) */
const Skills3: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-tz.tsx) */
const DeferredTZ: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVX@ui/deferred-vx.ts) */
const AppInitialVX: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FX unresolved companion (jsx-collision:collectUniqueMappedPresenceEntries@shell/collect-unique-mapped-presence-entries.ts) */
const AppInitialX: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-x9.ts) */
const deferredUiX9: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
function PetsSettingsHelper1(willow) {
  let { avatar, className, size = "md" } = willow,
    xenon = size === "sm" ? "size-8" : "size-16",
    yellow = IntlProvider(
      "flex shrink-0 items-center justify-center overflow-hidden rounded-lg",
      xenon,
      className,
    );
  let zinc = avatar?.id ?? "default",
    amber = avatar?.assetRef,
    basalt = size === "sm" ? "scale-[0.42]" : "scale-75",
    cedar = avatar?.spriteVersionNumber,
    daisy = avatar?.spritesheetUrl,
    ember = (
      <EnsureCodexAvatarInit
        {...{
          assetRef: amber,
          className: basalt,
          spriteVersionNumber: cedar,
          spritesheetUrl: daisy,
        }}
      />
    );
  return (
    <div className={yellow} data-avatar-id={zinc}>
      {ember}
    </div>
  );
}
var alpha,
  bravo,
  copper = esmInit(() => {
    alpha = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    CodexAvatar();
  });
function PetsSettingsHelper2(flint) {
  let { avatarDirectory } = flint,
    garnet = CodexPluginActionType(appScopeAtom),
    hazel = useIntl(),
    ivory = () => {
      garnet.get(toastAtom).danger(
        hazel.formatMessage({
          id: "settings.pets.custom.openFolderError",
          defaultMessage: "Unable to open pet folder",
          description: "Toast shown when opening the custom pet folder fails",
        }),
      );
    };
  let jasper = ivory,
    kelp = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.pets.custom.title",
          defaultMessage: "Custom pets",
          description: "Heading for custom pet settings",
        }}
      />
    );
  let lotus = (
    <span className="font-mono text-xs [text-wrap:wrap] break-all">
      {avatarDirectory}
    </span>
  );
  let mint = () => {
    garnet.get(AppInitialVX).mutate(
      {
        path: avatarDirectory,
        cwd: null,
        target: "fileManager",
        openMode: "workspace",
      },
      {
        onSuccess: (quill) => {
          quill.success || jasper();
        },
        onError: jasper,
      },
    );
  };
  let nova, olive;
  nova = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.pets.custom.openFolder",
        defaultMessage: "Open folder",
        description: "Button label to open the local custom pet folder",
      }}
    />
  );
  olive = (
    <UsePluginNavigationTelemetry
      {...{
        className: "icon-2xs",
      }}
    />
  );
  let prism = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "ghost",
        onClick: mint,
        size: "toolbar",
        children: [nova, olive],
      }}
    />
  );
  return (
    <EnsurePersonalizationCInit
      {...{
        label: kelp,
        description: lotus,
        control: prism,
      }}
    />
  );
}
var delta,
  echo,
  falcon = esmInit(() => {
    delta = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Ilt_Init();
    AppInitialX();
    usePluginCategoryPageTelemetry();
    ensureAppScopeInit();
    AppInitialVC();
  });
function PetsSettingsHelper3(reef) {
  let {
      avatarDirectory,
      avatarOptions,
      isCreatingCustomAvatar = false,
      isCustomAvatarLoadError = false,
      isLoadingCustomAvatars = false,
      onCreateCustomAvatar,
      onRefreshCustomAvatars,
      onUpgradeCustomAvatar,
    } = reef,
    sage = avatarOptions === undefined ? DropdownTriggerButton : avatarOptions;
  return (
    <ElectronOnly
      {...{
        electron: true,
        children: (
          <PetsSettingsHelper4
            {...{
              avatarDirectory,
              avatarOptions: sage,
              isCreatingCustomAvatar: isCreatingCustomAvatar,
              isCustomAvatarLoadError: isCustomAvatarLoadError,
              isLoadingCustomAvatars: isLoadingCustomAvatars,
              onCreateCustomAvatar,
              onRefreshCustomAvatars,
              onUpgradeCustomAvatar,
            }}
          />
        ),
      }}
    />
  );
}
function PetsSettingsHelper4(topaz) {
  let {
      avatarDirectory,
      avatarOptions,
      isCreatingCustomAvatar,
      isCustomAvatarLoadError,
      isLoadingCustomAvatars,
      onCreateCustomAvatar,
      onRefreshCustomAvatars,
      onUpgradeCustomAvatar,
    } = topaz,
    ultra = useIntl(),
    vapor = CodexPluginActionResult(DeferredTZ),
    wheat = NativeContextMenuSurface("188145323"),
    yarn = NativeContextMenuSurface("3563904085"),
    zephyr = CodexPluginActionResult(deferredUiX9),
    acorn = CodexPluginActionType(appScopeAtom),
    bloom = useSettingValue(AppInitialSpt.petSize),
    { selectedAvatar, setSelectedAvatarId } = useSelectedAvatar(avatarOptions),
    coral = ((bloom - 80) / 144) * 100,
    drift,
    eagle,
    frost,
    glide,
    honey,
    iris,
    jewel;
  {
    let pine = avatarOptions.filter($e),
      quest = avatarOptions.filter(gamma),
      ridge = ultra.formatMessage({
        id: "settings.pets.custom.create.label",
        defaultMessage: "Create your own pet",
        description:
          "Accessible label for creating a custom Codex pet from settings",
      });
    let storm = ridge,
      tide = ultra.formatMessage({
        id: "settings.pets.refresh",
        defaultMessage: "Refresh",
        description: "Button label to refresh custom pets from local manifests",
      });
    let unity = tide,
      vale = (nest, oak) => {
        zephyr.logProductEvent(
          CODEX_ONBOARDING_WORKSPACE_CONTINUE_CLICKED_TYPE,
          buildAvatarOverlayAnalyticsPayload({
            action: nest,
            selectedAvatar: oak,
            source: CodexPluginPageName.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
          }),
        );
      };
    let wave = vale,
      apex = (petal) => {
        setSelectedAvatarId(petal.id);
        wave(
          CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED,
          petal,
        );
      };
    let brook = apex;
    frost = UseChromeAndCodeThemeSync;
    let cliff = onRefreshCustomAvatars ? (
      <OptionalTooltip
        {...{
          delayDuration: 0,
          tooltipContent: unity,
          children: (
            <ReadLoginRouteQuerySnapshot
              {...{
                "aria-label": unity,
                color: "ghost",
                onClick: onRefreshCustomAvatars,
                size: "icon",
                children: (
                  <AppIconAlt
                    {...{
                      className: "icon-xs",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    ) : null;
    let dusk = onCreateCustomAvatar ? (
      <ReadLoginRouteQuerySnapshot
        {...{
          "aria-label": storm,
          color: "secondary",
          loading: isCreatingCustomAvatar,
          onClick: () => {
            wave(
              CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED,
              selectedAvatar,
            );
            onCreateCustomAvatar();
          },
          size: "toolbar",
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.pets.custom.create.title",
                defaultMessage: "Create",
                description:
                  "Button label for creating a custom Codex pet from settings",
              }}
            />
          ),
        }}
      />
    ) : null;
    let elm = () => {
      wave(
        vapor
          ? CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
          : CODEX_LOGIN_SUCCESS_TYPE.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
        selectedAvatar,
      );
      ensureAppActionPayloadSchemasInit.dispatchMessage(
        "avatar-overlay-open",
        {},
      );
    };
    let fern = vapor ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.personalization.pets.tuckAwayPet",
          defaultMessage: "Tuck Away Pet",
          description: "Button that closes the floating pet overlay",
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "settings.personalization.pets.openPet",
          defaultMessage: "Wake Pet",
          description: "Button that opens the floating pet overlay",
        }}
      />
    );
    let grove = (
      <ReadLoginRouteQuerySnapshot
        {...{
          color: "secondary",
          onClick: elm,
          size: "toolbar",
          children: fern,
        }}
      />
    );
    let hill = (
      <>
        {cliff}
        {dusk}
        {grove}
      </>
    );
    let isle, juniper;
    isle = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.pets.pickPet.title",
          defaultMessage: "Pick a pet",
          description: "Title for the Pets settings explainer",
        }}
      />
    );
    juniper = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.pets.pickPet.description",
          defaultMessage:
            "Pets manage threads and surface what needs attention",
          description: "Description explaining what Codex pets do in settings",
        }}
      />
    );
    jewel = (
      <UseChromeAndCodeThemeSync.Header
        {...{
          actions: hill,
          title: isle,
          subtitle: juniper,
        }}
      />
    );
    eagle = UseChromeAndCodeThemeSync.Content;
    drift = ParseUrlOrFallback;
    glide = isLoadingCustomAvatars ? (
      <SettingsLoadingRow
        {...{
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.pets.loadingCustom",
                defaultMessage: "Loading custom pets…",
                description: "Message shown while loading custom pet manifests",
              }}
            />
          ),
        }}
      />
    ) : isCustomAvatarLoadError ? (
      <EnsurePersonalizationCInit
        {...{
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.pets.loadCustomError",
                defaultMessage: "Unable to load custom pets",
                description:
                  "Message shown when custom pet manifests fail to load",
              }}
            />
          ),
          control: null,
        }}
      />
    ) : null;
    let lagoon;
    lagoon = (quiet) => (
      <PetsSettingsHelper6
        key={quiet.id}
        {...{
          avatar: quiet,
          isSelected: quiet.id === selectedAvatar.id,
          onSelectAvatar: brook,
          onUpgradeAvatar: wheat ? onUpgradeCustomAvatar : undefined,
        }}
      />
    );
    honey = quest.map(lagoon);
    let meadow;
    meadow = (rain) => (
      <PetsSettingsHelper6
        key={rain.id}
        {...{
          avatar: rain,
          isSelected: rain.id === selectedAvatar.id,
          onSelectAvatar: brook,
        }}
      />
    );
    iris = pine.map(meadow);
  }
  let knoll =
    avatarDirectory == null ? null : (
      <PetsSettingsHelper2
        {...{
          avatarDirectory,
        }}
      />
    );
  let lunar = (
    <ParseUrlOrFallback
      {...{
        children: [glide, honey, iris, knoll],
      }}
    />
  );
  let moss = (
    <ParseUrlOrFallback
      {...{
        children: lunar,
      }}
    />
  );
  let north = (
    <ParseUrlOrFallback
      {...{
        children: [jewel, moss],
      }}
    />
  );
  let orbit = yarn ? (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          <UseChromeAndCodeThemeSync.Header
            {...{
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.pets.appearance.title",
                    defaultMessage: "Appearance",
                    description: "Heading above pet appearance settings",
                  }}
                />
              ),
            }}
          />,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: (
                      <EnsurePersonalizationCInit
                        {...{
                          label: (
                            <label htmlFor="pet-size">
                              {
                                <MemoizedFormattedMessage
                                  {...{
                                    id: "settings.pets.size",
                                    defaultMessage: "Pet size",
                                    description:
                                      "Label for the floating pet size setting",
                                  }}
                                />
                              }
                            </label>
                          ),
                          description: (
                            <MemoizedFormattedMessage
                              {...{
                                id: "settings.pets.size.description",
                                defaultMessage: "Adjust the size of your pet",
                                description:
                                  "Description for the floating pet size setting",
                              }}
                            />
                          ),
                          control: (
                            <input
                              id="pet-size"
                              className="h-0.5 w-40 cursor-interaction appearance-none rounded-full [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:cursor-interaction [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-token-border-heavy [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:cursor-interaction [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-token-border-heavy [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger"
                              max={224}
                              min={80}
                              onInput={(event) => {
                                setSettingValue(
                                  acorn,
                                  AppInitialSpt.petSize,
                                  Number(event.currentTarget.value),
                                );
                              }}
                              style={{
                                background: `linear-gradient(to right, var(--color-token-primary) ${coral}%, var(--color-token-border-light) ${coral}%)`,
                              }}
                              type="range"
                              value={bloom}
                            />
                          ),
                        }}
                      />
                    ),
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  ) : null;
  return (
    <>
      {north}
      {orbit}
    </>
  );
}
function gamma(seed) {
  return seed.id.startsWith("custom:");
}
function $e(trail) {
  return !trail.id.startsWith("custom:");
}
function PetsSettingsHelper6(urn) {
  let { avatar, isSelected, onSelectAvatar, onUpgradeAvatar } = urn,
    vine = useIntl(),
    wind = avatar.upgradeDirectoryPath,
    yarrow = vine.formatMessage(
      {
        id: "settings.pets.custom.update.accessibleLabel",
        defaultMessage: "Update {petName}",
        description: "Accessible label for updating an outdated custom pet",
      },
      {
        petName: avatar.displayName,
      },
    );
  let azure = yarrow,
    birch = (
      <PetsSettingsHelper1
        {...{
          avatar,
        }}
      />
    );
  let canyon =
    wind != null && onUpgradeAvatar != null ? (
      <OptionalTooltip
        {...{
          delayDuration: 0,
          tooltipContent: azure,
          children: (
            <ReadLoginRouteQuerySnapshot
              {...{
                "aria-label": azure,
                color: "accent",
                onClick: () => {
                  onUpgradeAvatar(avatar.displayName, wind);
                },
                size: "toolbar",
                children: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.pets.custom.update",
                      defaultMessage: "Update",
                      description:
                        "Button label for updating an outdated custom pet",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    ) : null;
  let dew = isSelected ? (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "secondary",
        disabled: true,
        size: "toolbar",
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.personalization.avatars.selected",
              defaultMessage: "Selected",
              description: "Label for the selected avatar",
            }}
          />
        ),
      }}
    />
  ) : (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "secondary",
        size: "toolbar",
        onClick: () => {
          onSelectAvatar(avatar);
        },
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.personalization.avatars.select",
              defaultMessage: "Select",
              description: "Button label to select an avatar",
            }}
          />
        ),
      }}
    />
  );
  let ever = (
    <>
      {canyon}
      {dew}
    </>
  );
  return (
    <EnsurePersonalizationCInit
      {...{
        icon: birch,
        label: avatar.displayName,
        description: avatar.description,
        control: ever,
      }}
    />
  );
}
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
