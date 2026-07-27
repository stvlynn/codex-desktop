// Restored from ref/webview/assets/_virtual_settings-search-documents-BNScSdXi.js
// Settings search index documents (message catalogs keyed by settings section).

import { agentMessages } from "./agent-messages";
import { appearanceMessages } from "./appearance-messages";
import { appshotsMessages } from "./appshots-messages";
import { browseruseMessages } from "./browser-use-messages";
import { chronicleMessages } from "./chronicle-messages";
import { cloudenvironmentsMessages } from "./cloud-environments-messages";
import { cloudsettingsMessages } from "./cloud-settings-messages";
import { codereviewMessages } from "./code-review-messages";
import { codexmicroMessages } from "./codex-micro-messages";
import { computeruseMessages } from "./computer-use-messages";
import { connectionsMessages } from "./connections-messages";
import { datacontrolsMessages } from "./data-controls-messages";
import { debugMessages } from "./debug-messages";
import { environmentsMessages } from "./environments-messages";
import { generalsettingsMessages } from "./general-settings-messages";
import { gitsettingsMessages } from "./git-settings-messages";
import { hookssettingsMessages } from "./hooks-settings-messages";
import { keyboardshortcutsMessages } from "./keyboard-shortcuts-messages";
import { localenvironmentsMessages } from "./local-environments-messages";
import { mcpsettingsMessages } from "./mcp-settings-messages";
import { personalizationMessages } from "./personalization-messages";
import { petsMessages } from "./pets-messages";
import { profileMessages } from "./profile-messages";
import { usageMessages } from "./usage-messages";
import { voiceMessages } from "./voice-messages";
import { worktreesMessages } from "./worktrees-messages";
export type SettingsSearchMessage = {
  id: string;
  defaultMessage?: string;
};
export type SettingsSearchDocuments = Record<string, SettingsSearchMessage[]>;
const settingsSearchDocuments: SettingsSearchDocuments = {
  agent: agentMessages,
  appearance: appearanceMessages,
  appshots: appshotsMessages,
  "browser-use": browseruseMessages,
  chronicle: chronicleMessages,
  "cloud-environments": cloudenvironmentsMessages,
  "cloud-settings": cloudsettingsMessages,
  "code-review": codereviewMessages,
  "codex-micro": codexmicroMessages,
  "computer-use": computeruseMessages,
  connections: connectionsMessages,
  "data-controls": datacontrolsMessages,
  debug: debugMessages,
  environments: environmentsMessages,
  "general-settings": generalsettingsMessages,
  "git-settings": gitsettingsMessages,
  "hooks-settings": hookssettingsMessages,
  "keyboard-shortcuts": keyboardshortcutsMessages,
  "local-environments": localenvironmentsMessages,
  "mcp-settings": mcpsettingsMessages,
  personalization: personalizationMessages,
  pets: petsMessages,
  profile: profileMessages,
  usage: usageMessages,
  voice: voiceMessages,
  worktrees: worktreesMessages,
};
export { settingsSearchDocuments };
