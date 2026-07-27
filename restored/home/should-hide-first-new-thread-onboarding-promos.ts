// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Hide first-new-thread onboarding promos when flagged and on the home route.

export type ShouldHideFirstNewThreadOnboardingPromosProps = {
  hideFirstNewThreadOnboardingPromos: boolean;
  pathname: string;
};

/**
 * Returns true when the hide-promos preference is on and the user is on `/`.
 */
export function shouldHideFirstNewThreadOnboardingPromos({
  hideFirstNewThreadOnboardingPromos,
  pathname,
}: ShouldHideFirstNewThreadOnboardingPromosProps): boolean {
  return hideFirstNewThreadOnboardingPromos && pathname === "/";
}
