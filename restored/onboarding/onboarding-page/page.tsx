// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Onboarding page entry: scope provider around the fullscreen wizard.

import { type ReactElement } from "react";

import {
  ensureAppScopeHostInit,
  ensureAppScopeInit,
} from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_P5_Init } from "../../boundaries/composer-esm-inits";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { OnboardingShell } from "./onboarding-shell";
import {
  OnboardingScopeProvider,
  ensureOnboardingPageBridgesInit,
  getOnboardingScopeAndSignals,
} from "./runtime-bridges";

export type OnboardingPageProps = {
  className?: string;
};

/** Rolldown ESM side-effect cluster — restored as explicit ensure* calls. */
function ensureOnboardingModuleInits(): void {
  ensureAppScopeHostInit();
  ensureAppScopeInit();
  ensureAppShellAtomsInit();
  ensureComposerEsm_P5_Init();
  ensureSkillsPageHelpersInit();
  ensureOnboardingPageBridgesInit();
}

ensureOnboardingModuleInits();

/**
 * Bundle export `Xl` / public `OnboardingPage`.
 * Wraps the wizard in OnboardingScope (parent: AppScope).
 */
export function OnboardingPage(_props: OnboardingPageProps = {}): ReactElement {
  const { scope } = getOnboardingScopeAndSignals();
  return (
    <OnboardingScopeProvider scope={scope}>
      <OnboardingShell />
    </OnboardingScopeProvider>
  );
}

export function ensureOnboardingPageInit(): void {
  ensureOnboardingModuleInits();
}

/** Soft-host bind no longer required after full body promote. */
export function bindOnboardingPage(_next: unknown): void {
  void _next;
}
