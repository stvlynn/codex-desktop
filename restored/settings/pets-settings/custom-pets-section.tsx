// Restored from ref/webview/assets/pets-settings-BdgUlXRY.js
// Wave FX — full polished body from `pets-settings-BdgUlXRY/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 77/93).
// AST split 1/1
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CODEX_LOGIN_SUCCESS_TYPE } from "../../analytics/codex-login-success-type";
import { CODEX_ONBOARDING_WORKSPACE_CONTINUE_CLICKED_TYPE } from "../../analytics/codex-onboarding-workspace-continue-clicked-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginPageName } from "../../analytics/codex-plugin-page-name";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import {
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_MT_Init,
} from "../../composer/composer-esm-inits";
import { useSelectedAvatar } from "../../desktop/use-selected-avatar";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { buildAvatarOverlayAnalyticsPayload } from "../../overlay/build-avatar-overlay-analytics-payload";
import { usePluginCategoryPageTelemetry } from "../../plugins/use-plugin-category-page-telemetry";
import { usePluginNavigationTelemetry as UsePluginNavigationTelemetry } from "../../plugins/use-plugin-navigation-telemetry";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { esmInit } from "../../runtime/rolldown-runtime";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { SettingsLoadingRow } from "../settings-loading-row";
import { useSettingValue } from "../use-setting-value";
import { $e, gamma, PetsSettingsHelper6 } from "./pet-avatar-row";

/** Wave FX unresolved companion (missing-export:settings/settings-values.ts) */
const setSettingValue: any = undefined;
/** Wave FX unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FX unresolved companion (jsx-collision:avatarOverlaySettings@desktop/avatar-overlay-settings.ts) */
const AppInitialSpt: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-tz.tsx) */
const DeferredTZ: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVX@ui/deferred-vx.ts) */
const AppInitialVX: any = undefined;
/** Wave FX unresolved companion (jsx-collision:collectUniqueMappedPresenceEntries@shell/collect-unique-mapped-presence-entries.ts) */
const AppInitialX: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-x9.ts) */
const deferredUiX9: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
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
export { falcon };
export function PetsSettingsHelper3(reef: any) {
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
