// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `Dz` near export `lz`).

import { defineMessages } from "react-intl";

export const pluginCardMessages = defineMessages({
  enabledSuccess: {
    id: "plugins.card.enableSuccess",
    defaultMessage: "{pluginName} plugin enabled",
    description: "Toast shown after successfully enabling a plugin",
  },
  disabledSuccess: {
    id: "plugins.card.disableSuccess",
    defaultMessage: "{pluginName} plugin disabled",
    description: "Toast shown after successfully disabling a plugin",
  },
  toggleError: {
    id: "plugins.card.toggleError",
    defaultMessage: "Failed to update plugin",
    description:
      "Toast message shown when enabling or disabling a plugin fails",
  },
  uninstallSuccess: {
    id: "plugins.card.uninstallSuccess",
    defaultMessage: "{pluginName} plugin uninstalled",
    description: "Toast shown after successfully uninstalling a plugin",
  },
  uninstallError: {
    id: "plugins.card.uninstallError",
    defaultMessage: "Failed to uninstall plugin",
    description: "Toast message shown when uninstalling a plugin fails",
  },
  marketplacesUpgradeSuccess: {
    id: "plugins.marketplace.upgradeAllSuccess",
    defaultMessage: "Marketplaces upgraded",
    description: "Toast shown after successfully upgrading marketplaces",
  },
  marketplaceUpgradeSuccess: {
    id: "plugins.marketplace.upgradeSuccess",
    defaultMessage: "{marketplaceName} marketplace upgraded",
    description: "Toast shown after successfully upgrading one marketplace",
  },
  marketplacesUpgradeError: {
    id: "plugins.marketplace.upgradeAllError",
    defaultMessage: "Some marketplaces failed to upgrade",
    description:
      "Toast message shown when upgrading marketplaces partially fails",
  },
  marketplaceUpgradeError: {
    id: "plugins.marketplace.upgradeError",
    defaultMessage: "Failed to upgrade marketplace",
    description: "Toast message shown when upgrading one marketplace fails",
  },
  marketplacesUpgradeRequestError: {
    id: "plugins.marketplace.upgradeAllRequestError",
    defaultMessage: "Failed to upgrade marketplaces",
    description: "Toast message shown when upgrading marketplaces fails",
  },
  skillCatalogReloadError: {
    id: "plugins.skillCatalog.reloadError",
    defaultMessage:
      "Plugin changed, but skills couldn't refresh. Reload skills before starting a new chat",
    description:
      "Toast shown when a plugin mutation succeeds but the runtime skill catalog cannot refresh",
  },
});
