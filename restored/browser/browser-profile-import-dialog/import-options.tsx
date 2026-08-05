// Restored from ref/webview/assets/browser-profile-import-dialog-v_lwnIpS.js
// Wave FZ — full polished body from `browser-profile-import-dialog-v_lwnIpS/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 22 (verified 44/65).
// Careful split: module + bridges
/* split-lane-import-depth:1 */

import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { AppInitialYC, Queued } from "./dialog-companion-stubs";
import {
  BrowserProfileImportCookiesIcon as _e,
  Delta,
  echo,
} from "./dialog-shared-state";

export function BrowserProfileImportDialogHelper4(orbit: any) {
  let { available, checked, disabled, kind, onChange } = orbit,
    pine = `browser-profile-import-${kind}-label`,
    quest,
    ridge;
  if (kind === "cookies") {
    let vale;
    vale = (
      <MemoizedFormattedMessage
        {...{
          ...echo.cookies,
        }}
      />
    );
    quest = vale;
    let wave;
    wave = (
      <_e
        {...{
          className: "size-5 text-token-text-secondary",
        }}
      />
    );
    ridge = wave;
  } else {
    let apex;
    apex = (
      <MemoizedFormattedMessage
        {...{
          ...echo.passwords,
        }}
      />
    );
    quest = apex;
    let brook;
    brook = (
      <Delta
        {...{
          className: "size-5 text-token-text-secondary",
        }}
      />
    );
    ridge = brook;
  }
  let storm = <span id={pine}>{quest}</span>;
  let tide = !available || disabled,
    unity = (
      <AppInitialYC
        aria-labelledby={pine}
        checked={checked}
        disabled={tide}
        onChange={onChange}
      />
    );
  return (
    <EnsurePersonalizationCInit
      {...{
        icon: ridge,
        label: storm,
        control: unity,
      }}
    />
  );
}
export function BrowserProfileImportDialogHelper5(cliff: any) {
  let { checked, disabled, onChange } = cliff,
    dusk = (
      <p className="font-medium text-token-text-primary">
        {
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.profileImport.windowsChrome.title",
              defaultMessage: "Administrator approval required",
              description:
                "Title for the Windows Chrome browser import consent notice",
            }}
          />
        }
      </p>
    );
  let elm = (
    <p className="text-token-description-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.profileImport.windowsChrome.description",
            defaultMessage:
              "Windows protects Chrome cookies and passwords with App-Bound Encryption, so ChatGPT also needs administrator approval",
            description:
              "Description for the Windows Chrome browser import consent notice",
          }}
        />
      }
    </p>
  );
  let fern = (
    <Queued
      {...{
        checked,
        disabled,
        onCheckedChange: onChange,
      }}
    />
  );
  let grove = (
    <span>
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.profileImport.windowsChrome.consent",
            defaultMessage:
              "I understand the app will request administrator approval to import this Chrome data",
            description:
              "Consent label for elevated Windows Chrome browser data import",
          }}
        />
      }
    </span>
  );
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-token-input-border bg-token-foreground/[0.025] p-3 text-sm">
      {dusk}
      {elm}
      <label className="relative flex cursor-interaction items-start gap-2">
        {fern}
        {grove}
      </label>
    </div>
  );
}
