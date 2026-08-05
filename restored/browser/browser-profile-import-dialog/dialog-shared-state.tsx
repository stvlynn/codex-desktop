// Restored from ref/webview/assets/browser-profile-import-dialog-v_lwnIpS.js
// Wave FZ — full polished body from `browser-profile-import-dialog-v_lwnIpS/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 22 (verified 44/65).
// Careful split: module + bridges
/* split-lane-import-depth:1 */

import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureHooksQueriesInit } from "../../settings/hooks-query-atoms";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSettingsSectionTitleInit } from "../../settings/settings-section-title";
import { openMcpAppSidePanelTab } from "../../thread/open-mcp-app-side-panel-tab";
import { ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { identity } from "../../utils/identity";
import {
  AppInitialAk,
  AppInitialBC,
  AppInitialFC,
  AppInitialRk,
  AppInitialVC,
  deferredUiMk,
} from "./dialog-companion-stubs";

var alpha,
  _e,
  bravo = esmInit(() => {
    react();
    _e = (timber) => (
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...timber}
      >
        <path
          d="M12 2A10 10 0 1 0 22 12C19.7909 12 18 10.2091 18 8C15.7909 8 14 6.20914 14 4C14 3.3072 13.824 2.6555 13.5143 2.0873C13.0186 2.02962 12.5139 2 12 2Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={12} cy={7} r={1} fill="currentColor" />
        <circle cx={7.5} cy={11} r={1} fill="currentColor" />
        <circle cx={11.5} cy={15} r={1} fill="currentColor" />
        <circle cx={16} cy={12.5} r={1} fill="currentColor" />
      </svg>
    );
  }),
  copper,
  Delta,
  be = esmInit(() => {
    react();
    Delta = (umbra) => (
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...umbra}
      >
        <path
          d="M8.75 9.55V15.75L6.5 18.25L4.25 15.75V9.55C2.886 8.748 2 7.267 2 5.625C2 3.14 4.015 1.125 6.5 1.125C8.985 1.125 11 3.14 11 5.625C11 7.267 10.114 8.748 8.75 9.55Z"
          stroke="currentColor"
          strokeWidth={1.33}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={6.5} cy={5.5} r={0.75} fill="currentColor" />
        <path
          d="M11.45 2.775C12.078 2.362 12.83 2.125 13.625 2.125C16.11 2.125 18.125 4.14 18.125 6.625C18.125 8.267 17.239 9.748 15.875 10.55V15.75L13.625 18.25L11.375 15.75V10.55C10.818 10.223 10.342 9.783 9.977 9.263"
          stroke="currentColor"
          strokeWidth={1.33}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }),
  echo,
  falcon = esmInit(() => {
    ensureIntlFormattersInit();
    echo = identity({
      cookies: {
        id: "settings.browserUse.profileImport.cookies",
        defaultMessage: "Cookies",
        description: "Label for importing cookies from a browser profile",
      },
      passwords: {
        id: "settings.browserUse.profileImport.passwords",
        defaultMessage: "Passwords",
        description: "Label for importing passwords from a browser profile",
      },
      title: {
        id: "settings.browserUse.profileImport.title",
        defaultMessage: "Import from your browser",
        description: "Title for the browser profile import dialog",
      },
    });
  });

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
        description: "Title shown after browser data import completes",
      },
      done: {
        id: "settings.browserUse.profileImport.done",
        defaultMessage: "Done",
        description: "Button that closes the browser data import dialog",
      },
      failed: {
        id: "settings.browserUse.profileImport.failed",
        defaultMessage: "Import failed",
        description: "Title shown when browser data import fails",
      },
      retry: {
        id: "settings.browserUse.profileImport.retry",
        defaultMessage: "Try again",
        description: "Button that retries browser data import",
      },
    });
  });

export { _e as BrowserProfileImportCookiesIcon, Delta, echo, nickel, onyx };
