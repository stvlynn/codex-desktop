// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Optionally append `login_hint` to Codex purchase URLs (`Fws` / export `Ly`).

import { CHATGPT_CODEX_ROOT_URL } from "../docs/chatgpt-codex-root-url";
import { LOGIN_HINT_ON_PURCHASE_URL_LAYER_ID } from "../feature-gates/feature-gate-ids";

type StatsigLayer = {
  get: (key: string, defaultValue: boolean) => boolean;
};

type StatsigClientLike = {
  getLayer: (
    layerId: string,
    options?: { disableExposureLog?: boolean },
  ) => StatsigLayer;
};

export type AppendLoginHintToPurchaseUrlArgs = {
  loginHint: string | null | undefined;
  statsigClient: StatsigClientLike;
  url: string;
};

const purchaseUrlRoot = new URL(CHATGPT_CODEX_ROOT_URL);
const purchasePathPrefix = `${purchaseUrlRoot.pathname}/purchase/`;

/**
 * When the Statsig layer is enabled and `url` is a Codex purchase deep link on
 * the ChatGPT origin, append `login_hint`. Bundle `Fws` / export `Ly`.
 */
export function appendLoginHintToPurchaseUrl({
  loginHint,
  statsigClient,
  url,
}: AppendLoginHintToPurchaseUrlArgs): string {
  if (loginHint == null) return url;

  const parsed = new URL(url);
  if (
    parsed.origin !== purchaseUrlRoot.origin ||
    !parsed.pathname.startsWith(purchasePathPrefix) ||
    !statsigClient
      .getLayer(LOGIN_HINT_ON_PURCHASE_URL_LAYER_ID, {
        disableExposureLog: false,
      })
      .get("enabled", false)
  ) {
    return url;
  }

  parsed.searchParams.set("login_hint", loginHint);
  return parsed.toString();
}
