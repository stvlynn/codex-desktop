// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `m2l`) / export `di`.

export type BindDeferredUtilsDiPeers = {
  $l: (...args: unknown[]) => unknown;
  Ql: (...args: unknown[]) => unknown;
  __vite__mapDeps: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  f2l: (...args: unknown[]) => unknown;
  import: (...args: unknown[]) => unknown;
  meta: (...args: unknown[]) => unknown;
  p2l: (...args: unknown[]) => unknown;
  qY: (...args: unknown[]) => unknown;
  s6o: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUtilsDiPeers | null = null;

/** Wire bindDeferredUtilsDi peers once companions land. */
export function setBindDeferredUtilsDiPeers(next: BindDeferredUtilsDiPeers): void {
  peers = next;
}

/**
 * Bundle export `di` / internal `m2l`.
 */
export function bindDeferredUtilsDi() {
  if (peers == null) {
    throw new Error("bindDeferredUtilsDi peers are not configured");
  }

  return peers.e(() => {
    peers.s6o(), peers.$l(), f2l = peers.qY(async () => (await peers.Ql(async () => {
      let {
        OpenSourceLicensesPage: e
      } = await import(`./open-source-licenses-page-BGQWixF9.js`);
      return {
        OpenSourceLicensesPage: peers.e
      };
    }, peers.__vite__mapDeps([670, 1]), import.meta.url)).OpenSourceLicensesPage), p2l = {
      "general-settings": peers.qY(async () => (await peers.Ql(async () => {
        let {
          GeneralSettings: e
        } = await import(`./general-settings-CU3TAvlp.js`);
        return {
          GeneralSettings: peers.e
        };
      }, peers.__vite__mapDeps([671, 672, 1, 673, 674]), import.meta.url)).GeneralSettings),
      import: peers.qY(async () => (await peers.Ql(async () => {
        let {
          ImportSettings: e
        } = await import(`./import-settings-DUWst0h6.js`);
        return {
          ImportSettings: peers.e
        };
      }, peers.__vite__mapDeps([675, 1, 676, 677]), import.meta.url)).ImportSettings),
      profile: peers.qY(async () => (await peers.Ql(async () => {
        let {
          Profile: e
        } = await import(`./profile-XeYpwh9N.js`);
        return {
          Profile: peers.e
        };
      }, peers.__vite__mapDeps([678, 1, 679, 680, 681, 682]), import.meta.url)).Profile),
      "keyboard-shortcuts": peers.qY(async () => (await peers.Ql(async () => {
        let {
          KeyboardShortcutsSettings: e
        } = await import(`./keyboard-shortcuts-settings-CbGfl9Qf.js`);
        return {
          KeyboardShortcutsSettings: peers.e
        };
      }, peers.__vite__mapDeps([683, 1, 673]), import.meta.url)).KeyboardShortcutsSettings),
      "codex-micro": peers.qY(async () => (await peers.Ql(async () => {
        let {
          CodexMicroSettings: e
        } = await import(`./codex-micro-settings-OfPypdLl.js`);
        return {
          CodexMicroSettings: peers.e
        };
      }, peers.__vite__mapDeps([684, 1, 630, 659, 660, 662, 666, 668, 571, 572, 557]), import.meta.url)).CodexMicroSettings),
      appshots: peers.qY(async () => (await peers.Ql(async () => {
        let {
          AppshotsSettings: e
        } = await import(`./appshots-settings-CJ4EHzWv.js`);
        return {
          AppshotsSettings: peers.e
        };
      }, peers.__vite__mapDeps([685, 1, 555]), import.meta.url)).AppshotsSettings),
      appearance: peers.qY(async () => (await peers.Ql(async () => {
        let {
          AppearanceSettings: e
        } = await import(`./appearance-settings-DS7AO6pK.js`);
        return {
          AppearanceSettings: peers.e
        };
      }, peers.__vite__mapDeps([686, 1, 672, 673, 674]), import.meta.url)).AppearanceSettings),
      voice: peers.qY(async () => (await peers.Ql(async () => {
        let {
          VoiceSettings: e
        } = await import(`./voice-settings-vkVvUNXN.js`);
        return {
          VoiceSettings: peers.e
        };
      }, peers.__vite__mapDeps([687, 1, 673]), import.meta.url)).VoiceSettings),
      pets: peers.qY(async () => (await peers.Ql(async () => {
        let {
          PetsSettings: e
        } = await import(`./pets-settings-BdgUlXRY.js`);
        return {
          PetsSettings: peers.e
        };
      }, peers.__vite__mapDeps([688, 1, 679, 680, 586, 689, 681, 676]), import.meta.url)).PetsSettings),
      agent: peers.qY(async () => (await peers.Ql(async () => {
        let {
          AgentSettings: e
        } = await import(`./agent-settings-3N239YzB.js`);
        return {
          AgentSettings: peers.e
        };
      }, peers.__vite__mapDeps([690, 1, 691, 676]), import.meta.url)).AgentSettings),
      "git-settings": peers.qY(async () => (await peers.Ql(async () => {
        let {
          GitSettings: e
        } = await import(`./git-settings-0pyuGSeN.js`);
        return {
          GitSettings: peers.e
        };
      }, peers.__vite__mapDeps([692, 1, 674]), import.meta.url)).GitSettings),
      "data-controls": peers.qY(async () => (await peers.Ql(async () => {
        let {
          DataControlsSettings: e
        } = await import(`./data-controls-DQbGPTwz.js`);
        return {
          DataControlsSettings: peers.e
        };
      }, peers.__vite__mapDeps([693, 1, 676, 644]), import.meta.url)).DataControlsSettings),
      "code-review": peers.qY(async () => (await peers.Ql(async () => {
        let {
          CodeReviewSettings: e
        } = await import(`./code-review-settings-Ci3aKMa3.js`);
        return {
          CodeReviewSettings: peers.e
        };
      }, peers.__vite__mapDeps([694, 1, 695]), import.meta.url)).CodeReviewSettings),
      "cloud-settings": peers.qY(async () => (await peers.Ql(async () => {
        let {
          CloudPreferencesSettings: e
        } = await import(`./cloud-preferences-settings-BdfWKEwp.js`);
        return {
          CloudPreferencesSettings: peers.e
        };
      }, peers.__vite__mapDeps([696, 1, 695]), import.meta.url)).CloudPreferencesSettings),
      "cloud-environments": peers.qY(async () => (await peers.Ql(async () => {
        let {
          CloudEnvironmentsSettingsPage: e
        } = await import(`./cloud-environments-settings-page-nUgiqirT.js`);
        return {
          CloudEnvironmentsSettingsPage: peers.e
        };
      }, peers.__vite__mapDeps([697, 1, 473, 573, 695]), import.meta.url)).CloudEnvironmentsSettingsPage),
      personalization: peers.qY(async () => (await peers.Ql(async () => {
        let {
          PersonalizationSettings: e
        } = await import(`./personalization-settings-DkpdQsHj.js`);
        return {
          PersonalizationSettings: peers.e
        };
      }, peers.__vite__mapDeps([698, 1, 699]), import.meta.url)).PersonalizationSettings),
      chronicle: peers.qY(async () => (await peers.Ql(async () => {
        let {
          ChronicleSettingsPage: e
        } = await import(`./chronicle-settings-page-BM3S8jwp.js`);
        return {
          ChronicleSettingsPage: peers.e
        };
      }, peers.__vite__mapDeps([700, 1, 699, 701]), import.meta.url)).ChronicleSettingsPage),
      usage: peers.qY(async () => (await peers.Ql(async () => {
        let {
          UsageSettings: e
        } = await import(`./usage-settings-1b4YOoJ0.js`);
        return {
          UsageSettings: peers.e
        };
      }, peers.__vite__mapDeps([702, 1, 622, 621, 573, 676, 625]), import.meta.url)).UsageSettings),
      debug: peers.qY(async () => (await peers.Ql(async () => {
        let {
          DebugSettings: e
        } = await import(`./debug-settings-DtPgVIaI.js`);
        return {
          DebugSettings: peers.e
        };
      }, peers.__vite__mapDeps([703, 1]), import.meta.url)).DebugSettings),
      "computer-use": peers.qY(async () => (await peers.Ql(async () => {
        let {
          ComputerUseSettings: e
        } = await import(`./computer-use-settings-Bhf26OaV.js`);
        return {
          ComputerUseSettings: peers.e
        };
      }, peers.__vite__mapDeps([704, 1, 473, 642, 676, 705, 677]), import.meta.url)).ComputerUseSettings),
      "browser-use": peers.qY(async () => (await peers.Ql(async () => {
        let {
          BrowserUseSettings: e
        } = await import(`./browser-use-settings-Dl8N036k.js`);
        return {
          BrowserUseSettings: peers.e
        };
      }, peers.__vite__mapDeps([706, 705, 1, 473, 642, 676, 677]), import.meta.url)).BrowserUseSettings),
      "local-environments": peers.qY(async () => (await peers.Ql(async () => {
        let {
          LocalEnvironmentsSettings: e
        } = await import(`./local-environments-settings-page-DsmByKKn.js`);
        return {
          LocalEnvironmentsSettings: peers.e
        };
      }, peers.__vite__mapDeps([707, 1, 473, 563, 570, 571, 572, 573, 677]), import.meta.url)).LocalEnvironmentsSettings),
      worktrees: peers.qY(async () => (await peers.Ql(async () => {
        let {
          WorktreesSettingsPage: e
        } = await import(`./worktrees-settings-page-D8I58eIb.js`);
        return {
          WorktreesSettingsPage: peers.e
        };
      }, peers.__vite__mapDeps([708, 1, 562]), import.meta.url)).WorktreesSettingsPage),
      environments: peers.qY(async () => (await peers.Ql(async () => {
        let {
          SettingsExternalSection: e
        } = await import(`./settings-external-section-CUhNrXMO.js`);
        return {
          SettingsExternalSection: peers.e
        };
      }, peers.__vite__mapDeps([709, 1]), import.meta.url)).SettingsExternalSection),
      "mcp-settings": peers.qY(async () => (await peers.Ql(async () => {
        let {
          McpSettings: e
        } = await import(`./mcp-settings-B15vUYaF.js`);
        return {
          McpSettings: peers.e
        };
      }, peers.__vite__mapDeps([710, 1, 711, 643, 473, 642, 609, 573, 581, 641, 586, 585, 469, 470, 631, 594, 578, 644, 645]), import.meta.url)).McpSettings),
      "hooks-settings": peers.qY(async () => (await peers.Ql(async () => {
        let {
          HooksSettings: e
        } = await import(`./hooks-settings-wtkEXqdK.js`);
        return {
          HooksSettings: peers.e
        };
      }, peers.__vite__mapDeps([712, 1, 676]), import.meta.url)).HooksSettings),
      connections: peers.qY(async () => (await peers.Ql(async () => {
        let {
          RemoteConnectionsSettings: e
        } = await import(`./remote-connections-settings-D2095Inq.js`);
        return {
          RemoteConnectionsSettings: peers.e
        };
      }, peers.__vite__mapDeps([713, 1, 714, 656, 642, 715, 573, 716]), import.meta.url)).RemoteConnectionsSettings),
      "plugins-settings": peers.qY(async () => (await peers.Ql(async () => {
        let {
          PluginsSettings: e
        } = await import(`./plugins-settings-DLv8wJ1C.js`);
        return {
          PluginsSettings: peers.e
        };
      }, peers.__vite__mapDeps([717, 711, 1, 643, 473, 642, 609, 573, 581, 641, 586, 585, 469, 470, 631, 594, 578, 644, 645]), import.meta.url)).PluginsSettings),
      "skills-settings": peers.qY(async () => (await peers.Ql(async () => {
        let {
          SkillsSettings: e
        } = await import(`./skills-settings-uK_TVER6.js`);
        return {
          SkillsSettings: peers.e
        };
      }, peers.__vite__mapDeps([718, 1, 640, 634, 641, 586, 585, 473, 469, 470, 631, 594, 642, 578, 643, 609, 573, 581, 644, 645, 646]), import.meta.url)).SkillsSettings)
    };
  });
}
