// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Appearance setting descriptors (bundle `Su` / export `zpt`).
// Schemas omitted — consumers use keys + defaults via settings IPC.

import {
  createConfigurationSetting,
  createGlobalStateSetting,
  type SettingDefinition,
} from "./setting-definition";
import { CodeThemeId } from "../appearance/code-theme-ids";
import type { ChromeTheme } from "../appearance/chrome-theme-defaults";

export type AppearanceThemeMode = "system" | "light" | "dark";
export type DiffMarkerStyle = "color" | "symbols";
export type ReducedMotionPreference = "system" | "on" | "off";

/**
 * Bundle `Su` / export `zpt` — appearance-related setting definitions.
 * The original init thunk also wired Zod schemas; definitions here carry
 * defaults + keys so `fetchSettingValue` / `persistSettingValue` work.
 */
export const AppearanceSettings = {
  theme: createConfigurationSetting<AppearanceThemeMode>({
    agentAccess: "read-write",
    default: "system",
    description: "Preferred app appearance mode",
    key: "appearanceTheme",
  }),
  lightChromeTheme: createConfigurationSetting<ChromeTheme | undefined>({
    agentAccess: "read-write",
    default: undefined,
    description: "Chrome theme used in light mode",
    key: "appearanceLightChromeTheme",
  }),
  darkChromeTheme: createConfigurationSetting<ChromeTheme | undefined>({
    agentAccess: "read-write",
    default: undefined,
    description: "Chrome theme used in dark mode",
    key: "appearanceDarkChromeTheme",
  }),
  lightCodeThemeId: createConfigurationSetting<string>({
    agentAccess: "read-write",
    default: CodeThemeId.CODEX,
    description: "Code theme used in light mode",
    key: "appearanceLightCodeThemeId",
  }),
  darkCodeThemeId: createConfigurationSetting<string>({
    agentAccess: "read-write",
    default: CodeThemeId.CODEX,
    description: "Code theme used in dark mode",
    key: "appearanceDarkCodeThemeId",
  }),
  diffMarkerStyle: createConfigurationSetting<DiffMarkerStyle>({
    agentAccess: "read-write",
    default: "color",
    description: "Diff marker style used in code review surfaces",
    key: "appearanceDiffMarkerStyle",
  }),
  sansFontSize: createConfigurationSetting<number>({
    agentAccess: "read-write",
    default: 14,
    description: "Base UI font size",
    key: "sansFontSize",
  }),
  codeFontSize: createConfigurationSetting<number>({
    agentAccess: "read-write",
    default: 12,
    description: "Code font size",
    key: "codeFontSize",
  }),
  useFontSmoothing: createConfigurationSetting<boolean>({
    agentAccess: "read-write",
    default: true,
    description: "Whether font smoothing is enabled",
    key: "useFontSmoothing",
  }),
  usePointerCursors: createConfigurationSetting<boolean>({
    agentAccess: "read-write",
    default: false,
    description: "Whether interactive controls use pointer cursors",
    key: "usePointerCursors",
  }),
  dockIconPreference: createGlobalStateSetting<string>({
    agentAccess: "read-write",
    default: "app-default",
    description: "Preferred macOS Dock icon",
    key: "dock-icon-preference",
  }),
  reducedMotionPreference: createGlobalStateSetting<ReducedMotionPreference>({
    agentAccess: "read-write",
    default: "system",
    description: "Whether Codex reduces interface motion",
    key: "reduced-motion-preference",
  }),
} as const satisfies Record<string, SettingDefinition<unknown>>;

/** No-op stand-in for the original `Su` ESM init thunk. */
export function ensureAppearanceSettingsInit(): void {}
