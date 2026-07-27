// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Chrome settings pages opened for contact / address autofill
// (bundle `wve` / export `rht`; includes mapped `aht` addresses URL).

import { CHROME_SETTINGS_ADDRESSES_URL } from "./chrome-internal-urls";

export const CHROME_SETTINGS_CONTACT_INFO_URL = "chrome://settings/contactInfo";

/** Address book + contact-info Chrome settings URLs (export `rht`). */
export const CHROME_CONTACT_INFO_SETTINGS_URLS: readonly string[] = [
  CHROME_SETTINGS_ADDRESSES_URL,
  CHROME_SETTINGS_CONTACT_INFO_URL,
];
