// Restored from ref/webview/assets/use-visible-settings-sections-CNgqcAwL.js
// External ChatGPT account/security nav entries + visibility gate id.

import { AppIconF0 } from "../../icons/app-icon-f0";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { esmInit } from "../../runtime/rolldown-runtime";
import { identity } from "../../utils/identity";
import { ensureSettingsGlyphI0Init } from "../../utils/wave-as-gap-ensure-inits";
import {
  ensureSecuritySettingsNavIconInit,
  SecuritySettingsNavIcon,
} from "../visible-settings-nav-icons";

let externalSettingsNavMessages: {
  account: { id: string; defaultMessage: string; description: string };
  securitySettings: { id: string; defaultMessage: string; description: string };
};
export let VISIBLE_SETTINGS_GATE_ID: string;
export let getVisibleSettingsNavEntries: {
  account: { href: string; icon: unknown; message: unknown };
  securitySettings: { href: string; icon: unknown; message: unknown };
};

export const ensureVisibleSettingsNavMessagesInit = esmInit(() => {
  ensureIntlFormattersInit();
  ensureSettingsGlyphI0Init();
  ensureSecuritySettingsNavIconInit();
  externalSettingsNavMessages = identity({
    account: {
      id: "settings.nav.chatSettings",
      defaultMessage: "Account",
      description:
        "Account navigation item that opens ChatGPT settings in the browser",
    },
    securitySettings: {
      id: "settings.nav.securitySettings",
      defaultMessage: "Security Settings",
      description:
        "Settings navigation item that opens ChatGPT security settings in the browser",
    },
  });
  VISIBLE_SETTINGS_GATE_ID = "3895602085";
  getVisibleSettingsNavEntries = {
    account: {
      href: "https://chatgpt.com/#settings",
      icon: AppIconF0,
      message: externalSettingsNavMessages.account,
    },
    securitySettings: {
      href: "https://chatgpt.com/open-security-settings",
      icon: SecuritySettingsNavIcon,
      message: externalSettingsNavMessages.securitySettings,
    },
  };
});
