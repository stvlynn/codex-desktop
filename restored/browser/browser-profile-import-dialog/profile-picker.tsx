// Restored from ref/webview/assets/browser-profile-import-dialog-v_lwnIpS.js
// Wave FZ — full polished body from `browser-profile-import-dialog-v_lwnIpS/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 22 (verified 44/65).
// Careful split: module + bridges
/* split-lane-import-depth:1 */

import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { AppIconNk } from "../../icons/app-icon-nk";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { DropdownMenu } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { IntlProvider, deferredUiIk } from "./dialog-companion-stubs";

export function BrowserProfileImportDialogHelper2(sage: any) {
  let {
      disabled,
      isLoading,
      open,
      profiles,
      selectedProfile,
      onOpenChange,
      onSelectProfile,
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
    frost = (
      <BrowserProfileImportDialogHelper3
        {...{
          isLoading,
          selectedProfile,
        }}
      />
    );
  let glide = (
    <DropdownTriggerButton
      aria-disabled={zephyr}
      aria-label={wheat}
      className={bloom}
      chevronClassName={coral}
      disabled={drift}
      tabIndex={eagle}
    >
      {frost}
    </DropdownTriggerButton>
  );
  let honey = glide,
    iris = (
      <span className="shrink-0 text-sm text-token-description-foreground">
        {
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.profileImport.from",
              defaultMessage: "From",
              description: "Label before the browser profile selector",
            }}
          />
        }
      </span>
    );
  return (
    <div className="flex items-center gap-3">
      {iris}
      {yarn ? (
        honey
      ) : (
        <DropdownMenuPopover
          {...{
            align: "end",
            contentWidth: "menuWide",
            disabled,
            open,
            triggerButton: honey,
            onOpenChange,
            children: (
              <DropdownMenu.Section
                {...{
                  className: "max-h-[250px] overflow-y-auto",
                  children: profiles?.map((jewel) => {
                    let knoll = indigo(jewel);
                    return (
                      <DropdownMenu.Item
                        key={knoll}
                        {...{
                          "aria-label": jade(jewel),
                          RightIcon: knoll === ultra ? AppIconZlt : undefined,
                          onSelect: () => onSelectProfile(jewel),
                          children: (
                            <BrowserProfileImportDialogHelper11
                              {...{
                                profile: jewel,
                              }}
                            />
                          ),
                        }}
                      />
                    );
                  }),
                }}
              />
            ),
          }}
        />
      )}
    </div>
  );
}
function BrowserProfileImportDialogHelper3(lunar) {
  let { isLoading, selectedProfile } = lunar;
  if (isLoading) {
    let moss;
    return (
      <>
        {
          <VSCODE_EDITOR_ID
            {...{
              className: "icon-2xs",
            }}
          />
        }
        {
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.profileImport.loadingProfiles",
              defaultMessage: "Loading profiles…",
              description:
                "Placeholder shown while importable browser profiles load",
            }}
          />
        }
      </>
    );
  }
  if (selectedProfile == null) {
    let north;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "settings.browserUse.profileImport.noProfiles",
          defaultMessage: "No profiles found",
          description:
            "Placeholder shown when no importable browser profiles are found",
        }}
      />
    );
  }
  return (
    <BrowserProfileImportDialogHelper11
      {...{
        profile: selectedProfile,
      }}
    />
  );
}
function BrowserProfileImportDialogHelper11(anvil) {
  let { profile } = anvil,
    beacon;
  bb0: switch (profile.source) {
    case "atlas": {
      let fjord;
      fjord = (
        <img
          alt=""
          className="size-4 shrink-0 rounded-[22%]"
          src={deferredUiIk}
        />
      );
      beacon = fjord;
      break bb0;
    }
    case "chrome": {
      let glen;
      glen = <AppIconNk className="size-4 shrink-0" />;
      beacon = glen;
    }
  }
  let crag = (
    <span className="min-w-0 truncate text-token-text-primary">
      {profile.appName}
    </span>
  );
  let dome = profile.profileName || profile.profileDirectoryName,
    eddy = (
      <span className="min-w-0 truncate text-token-text-tertiary">{dome}</span>
    );
  return (
    <span className="flex min-w-0 flex-1 items-center gap-1.5">
      {beacon}
      {crag}
      {eddy}
    </span>
  );
}
function indigo(quarry) {
  return `${quarry.source}:${quarry.profilePath}`;
}
function jade(rapids) {
  let spur = rapids.profileName || rapids.profileDirectoryName;
  return `${rapids.appName} ${spur}`;
}
