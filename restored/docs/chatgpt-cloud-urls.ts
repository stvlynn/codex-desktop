// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// ChatGPT Codex cloud / pricing / admin deep-link URLs (`yws` cluster / export `Uy`).

import { CHATGPT_CODEX_ROOT_URL } from "./chatgpt-codex-root-url";

/** Bundle `yws` / export `Uy`. */
export const CHATGPT_CODEX_CLOUD_URL = `${CHATGPT_CODEX_ROOT_URL}/cloud`;

/** Bundle `bws` / export `Hy`. */
export const CHATGPT_CODEX_CLOUD_ENVIRONMENTS_SETTINGS_URL = `${CHATGPT_CODEX_CLOUD_URL}/settings/environments`;

/** Bundle `xws` (co-located; not a chunk export). */
export const CHATGPT_CODEX_SETTINGS_USAGE_URL = `${CHATGPT_CODEX_ROOT_URL}/settings/usage`;

/** Bundle `Sws` (co-located; not a chunk export). */
export const CHATGPT_CODEX_SETTINGS_USAGE_CREDITS_MODAL_URL = `${CHATGPT_CODEX_SETTINGS_USAGE_URL}?credits_modal=true`;

const chatgptOrigin = new URL(CHATGPT_CODEX_ROOT_URL).origin;

/** Bundle `wws` (co-located; not a chunk export). */
export const CHATGPT_PRICING_URL = `${chatgptOrigin}/pricing/`;

/** Bundle `Tws` (co-located; not a chunk export). */
export const CHATGPT_PRICING_HASH_URL = `${chatgptOrigin}/#pricing`;

/** Bundle `Ews` (co-located; not a chunk export). */
export const CHATGPT_PRICING_HIGHLIGHT_PLUS_URL = `${chatgptOrigin}/?cta_tab=personal&highlight_plan=plus#pricing`;

/** Bundle `Dws` (co-located; not a chunk export). */
export const CHATGPT_PRICING_HIGHLIGHT_PRO_URL = `${chatgptOrigin}/?cta_tab=personal&highlight_plan=pro#pricing`;

/** Bundle `Ows` (co-located; not a chunk export). */
export const CHATGPT_PRICING_HIGHLIGHT_PRO_2X_URL = `${chatgptOrigin}/?cta_tab=personal&highlight_plan=pro&pro_variant=2x#pricing`;

/** Bundle `kws` (co-located; not a chunk export). */
export const CHATGPT_COM_ADMIN_ROOT_URL = "https://chatgpt.com/admin";

/** Bundle `jws` (co-located; not a chunk export). */
export const CHATGPT_COM_ADMIN_BILLING_URL =
  "https://chatgpt.com/admin/billing";

/** Bundle `Mws` (co-located; not a chunk export). */
export const CHATGPT_COM_ADMIN_USAGE_LIMITS_WORKSPACE_URL =
  "https://chatgpt.com/admin/usage-limits/workspace";

/** Bundle `Nws` (co-located; not a chunk export). */
export const CHATGPT_COM_ADMIN_BILLING_ADD_CREDITS_URL = `${CHATGPT_COM_ADMIN_BILLING_URL}?codex_credit_action=add_credits`;
