// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Shape of one Welcome V2 home suggestion tile (title + prompt + optional apps).

import type { MessageDescriptor } from "react-intl";

/**
 * One home-prompt tile. `appIds` references apps/connectors catalog ids when the
 * prompt expects those integrations (e.g. `github`, `linear`, `gmail`).
 */
export type WelcomeV2RolePrompt = {
  appIds?: readonly string[];
  titleMessage: MessageDescriptor;
  promptMessage: MessageDescriptor;
};
