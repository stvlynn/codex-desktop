// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Codex Micro / Stream Deck default layout + mode enums (`bpe` cluster).

/** Encoder mode ids (`dpe` / export `t_t`). */
export const ENCODER_MODE_IDS = [
  "composer-navigation",
  "reasoning",
  "conversation-scroll",
] as const;

export type EncoderModeId = (typeof ENCODER_MODE_IDS)[number];

/** Voice-button mode ids (`fpe` / export `i_t`). */
export const VOICE_BUTTON_MODE_IDS = ["push-to-talk", "realtime"] as const;

export type VoiceButtonModeId = (typeof VOICE_BUTTON_MODE_IDS)[number];

/** Sidebar organize / pin section ids (`ppe` / export `e_t`). */
export const SIDEBAR_SECTION_IDS = [
  "pinned",
  "recent",
  "priority",
  "custom",
] as const;

export type SidebarSectionId = (typeof SIDEBAR_SECTION_IDS)[number];

export const DEFAULT_ENCODER_MODE_ID: EncoderModeId = "composer-navigation";
export const DEFAULT_VOICE_BUTTON_MODE_ID: VoiceButtonModeId = "push-to-talk";
export const DEFAULT_SIDEBAR_SECTION_ID: SidebarSectionId = "recent";

export type AnalogStickCommandBinding = {
  type: "command";
  commandId: string;
};

/** Default analog-stick command bindings (`hpe`). */
export const DEFAULT_ANALOG_STICK_BINDINGS = {
  up: {
    type: "command",
    commandId: "composer.togglePlanMode",
  } satisfies AnalogStickCommandBinding,
  right: {
    type: "command",
    commandId: "navigateForward",
  } satisfies AnalogStickCommandBinding,
  down: {
    type: "command",
    commandId: "toggleSidebar",
  } satisfies AnalogStickCommandBinding,
  left: {
    type: "command",
    commandId: "navigateBack",
  } satisfies AnalogStickCommandBinding,
} as const;

/**
 * Bundle `bpe` / export `$gt`.
 * Factory-default Codex Micro / Stream Deck slot + stick layout.
 */
export const DEFAULT_STREAM_DECK_LAYOUT = {
  version: 1 as const,
  slots: {
    ACT06: { keycapId: "FAST" },
    ACT07: { keycapId: "APPR" },
    ACT08: { keycapId: "REJ" },
    ACT09: { keycapId: "SPLIT" },
    ACT10_ACT11: { keycapId: "MIC" },
    ACT12: { keycapId: "CODEX" },
  },
  analogStick: DEFAULT_ANALOG_STICK_BINDINGS,
  encoderMode: DEFAULT_ENCODER_MODE_ID,
  voiceButtonMode: DEFAULT_VOICE_BUTTON_MODE_ID,
} as const;
