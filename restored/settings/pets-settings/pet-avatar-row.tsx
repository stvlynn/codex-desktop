// Restored from ref/webview/assets/pets-settings-BdgUlXRY.js
// Wave FX — full polished body from `pets-settings-BdgUlXRY/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 77/93).
// AST split 1/1
/* split-lane-import-depth:1 */

import {
  CodexAvatar,
  ensureCodexAvatarInit as EnsureCodexAvatarInit,
} from "../../avatar/codex-avatar";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { useIntl } from "../../i18n/use-intl";
import { esmInit } from "../../runtime/rolldown-runtime";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";

/** Wave FX unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
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
export var alpha,
  bravo,
  copper = esmInit(() => {
    alpha = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    CodexAvatar();
  });

export function gamma(seed: any) {
  return seed.id.startsWith("custom:");
}
export function $e(trail: any) {
  return !trail.id.startsWith("custom:");
}

export function PetsSettingsHelper6(urn: any) {
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
