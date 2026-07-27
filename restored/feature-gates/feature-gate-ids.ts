// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Statsig / feature-gate numeric ids inlined into the app-initial aggregator.

/** Gate used with review-mode preference (full vs lighter review UX). */
export const REVIEW_MODE_FEATURE_GATE_ID = "2333235660";

/** Gate near git-origins / workspace directory helpers. */
export const GIT_ORIGINS_FEATURE_GATE_ID = "2911712394";

/** Gate co-located with mobile MFA setup + remote-control pairing copy. */
export const MOBILE_MFA_SETUP_FEATURE_GATE_ID = "2055603567";

/** Second gate in the mobile MFA / remote-control pairing cluster. */
export const REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID = "3936985709";

/** Gate co-located with spreadsheet artifact type labeling. */
export const SPREADSHEETS_ARTIFACT_FEATURE_GATE_ID = "1288674243";

/** Gate co-located with presentation artifact type labeling. */
export const PRESENTATIONS_ARTIFACT_FEATURE_GATE_ID = "1623794951";

/** Gate used around approval-card rendering. */
export const APPROVAL_CARD_FEATURE_GATE_ID = "4168530037";

/** Gate paired with the `wsl_remote_connections` capability flag. */
export const WSL_REMOTE_CONNECTIONS_FEATURE_GATE_ID = "3855399757";

/** Gate co-located with Playground / t5 onboarding v2 labels. */
export const PLAYGROUND_ONBOARDING_FEATURE_GATE_ID = "93537254";

/** Gate used when merging apps + connectors catalogs. */
export const APPS_CONNECTORS_FEATURE_GATE_ID = "3278809559";

/** Gate near notification / imported-tools onboarding checklist items. */
export const NOTIFICATIONS_ONBOARDING_FEATURE_GATE_ID = "1540453652";

/** Gate co-located with third-party agent id denylist (claude-code, cursor, …). */
export const THIRD_PARTY_AGENT_DENYLIST_FEATURE_GATE_ID = "3203613120";

/** Gate paired with ChatGPT gifts/credits purchase URL. */
export const GIFTS_CREDITS_FEATURE_GATE_ID = "1728613635";

/** Gate co-located with chat-slot command descriptions. */
export const CHAT_SLOT_COMMANDS_FEATURE_GATE_ID = "3026692602";

/** Gate paired with `/accounts/{account_id}/settings` query setup (`Vln`). */
export const ACCOUNT_SETTINGS_FEATURE_GATE_ID = "1463309241";

/** Gate for concurrent reasoning summaries overrides (`2380644311`). */
export const CONCURRENT_REASONING_SUMMARIES_FEATURE_GATE_ID = "2380644311";

/** Gate for workspace desktop-context dynamic config (`_un` / `gun`). */
export const WORKSPACE_CONTEXT_SECTIONS_FEATURE_GATE_ID = "1574672957";

/** Dynamic-config id for thread-history settings (`qer` / `Ger`). */
export const THREAD_HISTORY_DYNAMIC_CONFIG_GATE_ID = "4107843474";

/** Gate controlling paginated thread history / resume drain (`Yer`). */
export const PAGINATED_THREAD_HISTORY_FEATURE_GATE_ID = "3446105535";

/** Feature override: unified exec (`pun` entry). */
export const UNIFIED_EXEC_FEATURE_GATE_ID = "1786883712";

/** Feature override: shell snapshot (`pun` entry). */
export const SHELL_SNAPSHOT_FEATURE_GATE_ID = "1615536597";

/** Feature override: responses websockets v2 (`pun` entry). */
export const RESPONSES_WEBSOCKETS_V2_FEATURE_GATE_ID = "2734851136";

/** Feature override: standalone web search (`pun` entry). */
export const STANDALONE_WEB_SEARCH_FEATURE_GATE_ID = "3701003275";

/** Feature override: collaboration modes (`pun` entry). */
export const COLLABORATION_MODES_FEATURE_GATE_ID = "1156958996";

/** Gate used for cloud-environment onboarding / workspace Codex setup checks. */
export const CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID = "1907601843";

/** Gate for `features.remote_connections` / remote host picker (`lGr` / `kh`). */
export const REMOTE_CONNECTIONS_FEATURE_GATE_ID = "4114442250";

/** Slingshot / remote-control pairing gate (`uGr` / `Eh`). */
export const SLINGSHOT_FEATURE_GATE_ID = "1042620455";

/** Capability catalog + mention-server selectors (`bqr` cluster / `Eh`). */
export const CAPABILITY_CATALOG_FEATURE_GATE_ID = "3669474837";

/** Statsig layer gating `login_hint` on Codex purchase URLs (`Rws` near `Fws` / `Ly`). */
export const LOGIN_HINT_ON_PURCHASE_URL_LAYER_ID = "3800100299";

/** Personal credit custom-checkout Statsig layer (`OTs.personal` near `STs` / `dy`). */
export const PERSONAL_CUSTOM_CHECKOUT_LAYER_ID = "2336405413";

/** Workspace credit custom-checkout Statsig layer (`OTs.workspace` near `STs` / `dy`). */
export const WORKSPACE_CUSTOM_CHECKOUT_LAYER_ID = "3431030460";

/** Gate allowing free/go users to purchase credits (`kTs` near `oQ` / export `uy`). */
export const ALLOW_FREE_USERS_TO_USE_CREDITS_FEATURE_GATE_ID = "3291298264";

/** Dynamic-config param on the free-users credits gate (`ATs`). */
export const ALLOW_FREE_USERS_TO_USE_CREDITS_PARAM =
  "allow_free_users_to_use_credits";

/** Upgrade-plan surface gate (`jEs` near `OEs` / `PEs`). */
export const UPGRADE_PLAN_SURFACE_FEATURE_GATE_ID = "1640366510";

/** Logged-in pricing page URL gate (`337040058` near `_Es` / export `Wv`). */
export const LOGGED_IN_PRICING_PAGE_FEATURE_GATE_ID = "337040058";

/** Param selecting the logged-in pricing hash URL (`yEs`). */
export const SHOW_LOGGED_IN_PRICING_PAGE_PARAM = "show_logged_in_pricing_page";

/** Gate enabling open-thread-in-new-window affordances (`tBl` / export `Do`). */
export const OPEN_THREAD_IN_NEW_WINDOW_FEATURE_GATE_ID = "459748632";

/** Second chat-slot / commands gate co-located with `or` (`Tnu`, not separately exported). */
export const CHAT_SLOT_COMMANDS_SECONDARY_FEATURE_GATE_ID = "3502101112";
