// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// `Su.reducedMotionPreference` setting descriptor.

import {
  createGlobalStateSetting,
  type SettingDefinition,
} from "./setting-definition";
import type { ReducedMotionPreference } from "../motion/reduced-motion";

/** Host storage key for the reduced-motion preference. */
export const REDUCED_MOTION_PREFERENCE_KEY = "reduced-motion-preference";

/** Allowed preference enum (bundle schema `pl(['system','on','off'])`). */
export const REDUCED_MOTION_PREFERENCE_VALUES = [
  "system",
  "on",
  "off",
] as const satisfies readonly ReducedMotionPreference[];

/**
 * Setting definition used by the prefers-reduced-motion atom family
 * (`Su.reducedMotionPreference`).
 */
export const reducedMotionPreferenceSetting: SettingDefinition<ReducedMotionPreference> =
  createGlobalStateSetting({
    agentAccess: "read-write",
    default: "system",
    description: "Whether Codex reduces interface motion",
    key: REDUCED_MOTION_PREFERENCE_KEY,
  });
