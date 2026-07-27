// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `AEe` / export `Npt` — Codex Micro agent/layout/lighting settings.

import {
  createGlobalStateSetting,
  createPersistedAtomSetting,
  type SettingDefinition,
} from "./setting-definition";
import { DesktopPersistenceKeys } from "../desktop/persistence-keys";

/** Bundle default `gpe`. */
export const CODEX_MICRO_AGENT_SOURCE_DEFAULT = "recent" as const;

/** Bundle default `bpe` — simplified; full slot map stays with micro UI. */
export const CODEX_MICRO_LAYOUT_DEFAULT = {
  version: 1,
  slots: {
    ACT06: { keycapId: "FAST" },
    ACT07: { keycapId: "APPR" },
  },
} as const;

export const codexMicroSettingsDefinitions = {
  agentSource: createGlobalStateSetting<string>({
    agentAccess: "hidden",
    default: CODEX_MICRO_AGENT_SOURCE_DEFAULT,
    description: "Task source for Codex Micro agent keys",
    key: DesktopPersistenceKeys.CODEX_MICRO_AGENT_SOURCE,
  }),
  layout: createGlobalStateSetting<unknown>({
    agentAccess: "hidden",
    default: CODEX_MICRO_LAYOUT_DEFAULT,
    description: "Configured action-key layout for Codex Micro",
    key: DesktopPersistenceKeys.CODEX_MICRO_LAYOUT,
  }),
  lightingBrightness: createPersistedAtomSetting<number>({
    agentAccess: "hidden",
    default: 100,
    description: "Brightness of Codex Micro lighting",
    key: "codex-micro-lighting-brightness",
  }),
  lightingAutoOff: createPersistedAtomSetting<string>({
    agentAccess: "hidden",
    default: "3-minutes",
    description: "When Codex Micro lighting turns off after inactivity",
    key: "codex-micro-lighting-auto-off",
  }),
} as const satisfies Record<string, SettingDefinition<unknown>>;
