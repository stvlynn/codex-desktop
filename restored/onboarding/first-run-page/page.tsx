// Restored from ref/webview/assets/first-run-CmpS1-m3.js
// First-run NUX page: picks initial step from access mode + auth, then wizards.

import { useMemo, type ReactElement } from "react";

import { ensureMemoCacheAuthClusterInit } from "../../account/ensure-memo-cache-auth-cluster-init";
import { nuxAccessModeStub } from "../../appgen/nux-access-mode-stub";
import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
  useAppScope,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_n0_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Sdt_Init,
  ensureComposerEsm_Sut_Init,
} from "../../composer/composer-esm-inits";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { ensureAuthProviderInit } from "../../hooks/use-auth";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import {
  ensurePersonalizationJutInit,
  ensureSettingsGlyphI0Init,
} from "../../utils/wave-as-gap-ensure-inits";
import { STEP_INTRO, STEP_LEGAL, type FirstRunStep } from "./constants";
import { FirstRunWizard } from "./first-run-wizard";
import {
  ensureApplySvgInit,
  ensureAsciiEngineInit,
  ensureAsciiEngineViewInit,
  ensureDeferredUiFdInit,
  ensureDeferredUiKRInit,
  ensureDeferredUiWDInit,
  ensureDeferredUiqGInit,
  ensureFirstRunButtonInit,
  setDesktopGlobalState,
  useFirstRunAuthMethod,
} from "./runtime-bridges";

export type FirstRunPageProps = Record<string, never>;

/** Rolldown ESM side-effect cluster — restored as explicit ensure* calls. */
function ensureFirstRunModuleInits(): void {
  ensureComposerEsm_Sdt_Init();
  ensureAppScopeHostInit();
  ensureAppShellAtomsInit();
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  ensureAuthProviderInit();
  ensureFirstRunButtonInit();
  ensureDeferredUiKRInit();
  ensureComposerEsm_Sut_Init();
  ensureSkillsPageHelpersInit();
  ensurePersonalizationJutInit();
  ensureApplySvgInit();
  ensureDropdownMenuPopoverInit();
  ensureDeferredUiqGInit();
  ensureComposerEsm_n0_Init();
  ensureSettingsGlyphI0Init();
  ensureDeferredUiFdInit();
  ensureDeferredUiWDInit();
  ensureAppScopeInit();
  ensureAsciiEngineViewInit();
  ensureAsciiEngineInit();
  ensureMemoCacheAuthClusterInit();
}

ensureFirstRunModuleInits();

/**
 * First-run / NUX page (bundle export `FirstRun` / public `FirstRunPage`).
 */
export function FirstRunPage(_props: FirstRunPageProps = {}): ReactElement {
  const appScope = useAppScope(appScopeAtom);
  const accessMode = nuxAccessModeStub();
  const authMethod = useFirstRunAuthMethod();
  const hasCloudAccess = authMethod === "chatgpt";
  const isUsingCopilotAuth = authMethod === "copilot";
  const navigate = useNavigate();

  const initialStep = useMemo((): FirstRunStep => {
    switch (accessMode) {
      case "2025-09-15-full-chatgpt-auth":
        return STEP_INTRO;
      case "2025-09-15-apikey-auth":
        return STEP_LEGAL;
      case "none":
      case undefined:
      default:
        return hasCloudAccess ? STEP_INTRO : STEP_LEGAL;
    }
  }, [accessMode, hasCloudAccess]);

  const onAccept = async (): Promise<void> => {
    await setDesktopGlobalState(
      appScope,
      DesktopPersistenceKeys.NUX_2025_09_15,
      true,
    );
    if (accessMode === "2025-09-15-full-chatgpt-auth") {
      await setDesktopGlobalState(
        appScope,
        DesktopPersistenceKeys.NUX_2025_09_15_FULL_CHATGPT_AUTH_VIEWED,
        true,
      );
    } else if (accessMode === "2025-09-15-apikey-auth") {
      await setDesktopGlobalState(
        appScope,
        DesktopPersistenceKeys.NUX_2025_09_15_APIKEY_AUTH_VIEWED,
        true,
      );
    }
    navigate("/");
  };

  return (
    <FirstRunWizard
      initialStep={initialStep}
      onAccept={onAccept}
      hasCloudAccess={hasCloudAccess}
      isUsingCopilotAuth={isUsingCopilotAuth}
    />
  );
}

export function ensureFirstRunPageInit(): void {}
