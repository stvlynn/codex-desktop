// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Preference key strings for Welcome V2 / home onboarding atoms.

/** Override that forces a specific onboarding path (`auto` by default). */
export const ONBOARDING_OVERRIDE_PREFERENCE_KEY =
  "electron:onboarding-override";

/** Whether the Welcome V2 flow is still pending. */
export const ONBOARDING_WELCOME_PENDING_PREFERENCE_KEY =
  "electron:onboarding-welcome-pending";

/** Hide first-new-thread onboarding promo chips on `/`. */
export const HIDE_FIRST_NEW_THREAD_ONBOARDING_PROMOS_PREFERENCE_KEY =
  "electron:onboarding-hide-first-new-thread-promos";

/** Debug override for mail-provider tiles during onboarding. */
export const ONBOARDING_MAIL_PROVIDER_DEBUG_OVERRIDE_PREFERENCE_KEY =
  "electron:onboarding-mail-provider-debug-override";

/** Debug override that hides Google connector tiles during onboarding. */
export const ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY =
  "electron:onboarding-hide-google-tiles-debug-override";

/** User requested primary runtime install during onboarding. */
export const ONBOARDING_PRIMARY_RUNTIME_INSTALL_REQUESTED_PREFERENCE_KEY =
  "electron:onboarding-primary-runtime-install-requested";

/** Primary runtime install finished and is ready. */
export const ONBOARDING_PRIMARY_RUNTIME_INSTALL_READY_PREFERENCE_KEY =
  "electron:onboarding-primary-runtime-install-ready";

/** Assigned workspace onboarding experiment bucket. */
export const ONBOARDING_WORKSPACE_EXPERIMENT_ASSIGNMENT_PREFERENCE_KEY =
  "electron:onboarding-workspace-experiment-assignment";

/** Whether workspace autolaunch was already applied. */
export const ONBOARDING_WORKSPACE_AUTOLAUNCH_APPLIED_PREFERENCE_KEY =
  "electron:onboarding-workspace-autolaunch-applied";

/** Persisted Welcome V2 role picker state (roles, suggestions, work mode). */
export const WELCOME_V2_ROLE_STATE_PREFERENCE_KEY =
  "electron:onboarding-welcome-v2-role-state";
