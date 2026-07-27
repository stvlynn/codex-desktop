// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Persistence key + default for realtime voice config override
// (bundle `L7n`/`R7n` / export `x4`).

export const REALTIME_VOICE_CONFIG_OVERRIDE_KEY =
  "realtime-voice-config-override";

export type RealtimeVoiceConfigOverride = {
  enabled: boolean;
  config: string;
};

export const DEFAULT_REALTIME_VOICE_CONFIG_OVERRIDE: RealtimeVoiceConfigOverride =
  {
    enabled: false,
    config: "",
  };
