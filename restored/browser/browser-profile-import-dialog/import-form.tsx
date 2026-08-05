// Restored from ref/webview/assets/browser-profile-import-dialog-v_lwnIpS.js
// Wave FZ — full polished body from `browser-profile-import-dialog-v_lwnIpS/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 22 (verified 44/65).
// Careful split: module + bridges
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import {
  AppInitialZ,
  DeferredUiU,
  ReadLoginRouteQuerySnapshot,
  RealtimeVoiceHostId,
  SetRemoteControlEnabledForHost,
} from "./dialog-companion-stubs";
import { echo } from "./dialog-shared-state";
import { BrowserProfileImportDialogHelper6 } from "./import-result";
import {
  BrowserProfileImportDialogHelper4,
  BrowserProfileImportDialogHelper5,
} from "./import-options";
import { BrowserProfileImportDialogHelper2 } from "./profile-picker";

export function BrowserProfileImportDialogHelper1(violet: any) {
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
    onSelectProfile,
  } = violet;
  if (willow != null) {
    let reef;
    return (
      <BrowserProfileImportDialogHelper6
        {...{
          cookieAccessFailureMessage,
          showCloseBrowserGuidance,
          result: willow,
          onDone: onCancel,
          onTryAgain,
        }}
      />
    );
  }
  let xenon = selectedProfile?.hasCookies === true && importCookies,
    yellow = selectedProfile?.hasPasswords === true && importPasswords,
    zinc =
      selectedProfile == null ||
      (!xenon && !yellow) ||
      (requiresElevatedChromeConsent && !elevatedChromeConsent),
    amber = (event) => {
      event.preventDefault();
      onImport();
    };
  let basalt = (
    <RealtimeVoiceHostId
      {...{
        asChild: true,
        children: (
          <h2 className="sr-only">
            {
              <MemoizedFormattedMessage
                {...{
                  ...echo.title,
                }}
              />
            }
          </h2>
        ),
      }}
    />
  );
  let cedar = (
    <MemoizedFormattedMessage
      {...{
        ...echo.title,
      }}
    />
  );
  let daisy = (
    <DeferredUiU
      {...{
        children: [
          basalt,
          <DeferredUiH
            {...{
              title: cedar,
              subtitle: (
                <IsStartingProcessExpired
                  {...{
                    asChild: true,
                    children: (
                      <div>
                        {
                          <MemoizedFormattedMessage
                            {...{
                              id: "settings.browserUse.profileImport.subtitle",
                              defaultMessage:
                                "Choose data to bring over to the built-in browser",
                              description:
                                "Subtitle for the browser data import dialog",
                            }}
                          />
                        }
                      </div>
                    ),
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  );
  let ember = isImporting || !profiles?.length,
    flint = (
      <BrowserProfileImportDialogHelper2
        {...{
          disabled: ember,
          isLoading: isLoadingProfiles,
          open: profilePickerOpen,
          profiles,
          selectedProfile,
          onOpenChange: onProfilePickerOpenChange,
          onSelectProfile,
        }}
      />
    );
  let garnet = profiles?.length === 0 && (
    <p className="text-sm text-token-description-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.profileImport.noProfilesDescription",
            defaultMessage:
              "No Chrome or Atlas profiles were found on this device",
            description:
              "Message shown when no importable browser profiles are found",
          }}
        />
      }
    </p>
  );
  let hazel = showCloseBrowserGuidance && selectedProfile != null && (
    <p className="text-sm text-token-description-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.profileImport.closeBrowser",
            defaultMessage: "Close {browserName} completely before importing",
            description:
              "Instruction to close the source browser before importing its profile data",
            values: {
              browserName: selectedProfile.appName,
            },
          }}
        />
      }
    </p>
  );
  let ivory = selectedProfile != null && (
    <ParseUrlOrFallback
      {...{
        children: [
          <BrowserProfileImportDialogHelper4
            {...{
              available: selectedProfile.hasPasswords,
              checked: yellow,
              disabled: isImporting,
              kind: "passwords",
              onChange: onImportPasswordsChange,
            }}
          />,
          <BrowserProfileImportDialogHelper4
            {...{
              available: selectedProfile.hasCookies,
              checked: xenon,
              disabled: isImporting,
              kind: "cookies",
              onChange: onImportCookiesChange,
            }}
          />,
        ],
      }}
    />
  );
  let jasper = requiresElevatedChromeConsent && (
    <BrowserProfileImportDialogHelper5
      {...{
        checked: elevatedChromeConsent,
        disabled: isImporting,
        onChange: onElevatedChromeConsentChange,
      }}
    />
  );
  let kelp = profilesHaveError && (
    <p className="px-3 text-sm text-token-error-foreground" role="alert">
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.profileImport.profilesError",
            defaultMessage:
              "We couldn't load browser profiles. Close and reopen this dialog to try again",
            description:
              "Error shown when browser profiles cannot be loaded for import",
          }}
        />
      }
    </p>
  );
  let lotus = (
    <DeferredUiU
      {...{
        className: "gap-3",
        children: [flint, garnet, hazel, ivory, jasper, kelp],
      }}
    />
  );
  let mint = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.profileImport.cancel",
        defaultMessage: "Cancel",
        description: "Button that closes the browser data import dialog",
      }}
    />
  );
  let nova = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "secondary",
        disabled: isImporting,
        onClick: onCancel,
        type: "button",
        children: mint,
      }}
    />
  );
  let olive = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.profileImport.import",
        defaultMessage: "Import",
        description: "Button that starts importing browser data",
      }}
    />
  );
  let prism = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "primary",
        disabled: zinc,
        loading: isImporting,
        type: "submit",
        children: olive,
      }}
    />
  );
  let quill = (
    <DeferredUiU
      {...{
        children: (
          <SetRemoteControlEnabledForHost
            {...{
              className: AppInitialZ,
              children: [nova, prism],
            }}
          />
        ),
      }}
    />
  );
  return (
    <DeferredUiB
      {...{
        as: "form",
        onSubmit: amber,
        children: [daisy, lotus, quill],
      }}
    />
  );
}
