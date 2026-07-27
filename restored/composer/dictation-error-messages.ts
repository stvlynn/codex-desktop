// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `Yh` near export `Oct`).

import { defineMessages } from "react-intl";

export const dictationErrorMessages = defineMessages({
  connectionError: {
    id: "dictation.error.connection",
    defaultMessage: "Check your connection and try again",
    description:
      "Toast text shown when dictation audio transcription fails because of a connection problem",
  },
  microphoneMissing: {
    id: "dictation.error.microphoneMissing",
    defaultMessage: "Connect a microphone to use dictation",
    description:
      "Toast text shown when dictation cannot find an available microphone",
  },
  microphonePermissionDenied: {
    id: "dictation.error.microphonePermissionDenied",
    defaultMessage: "Allow microphone access to use dictation",
    description:
      "Toast text shown when dictation cannot start because microphone permission was denied",
  },
  microphoneUnavailable: {
    id: "dictation.error.microphoneUnavailable",
    defaultMessage: "Close other apps using the microphone",
    description:
      "Toast text shown when dictation cannot start because the microphone is unavailable",
  },
  startError: {
    id: "composer.dictation.startError",
    defaultMessage: "Unable to start dictation",
    description: "Toast text shown when dictation could not be started",
  },
  transcribeError: {
    id: "composer.dictation.transcribeError",
    defaultMessage: "Unable to transcribe audio",
    description: "Toast text shown when dictation audio transcription fails",
  },
  unsupported: {
    id: "dictation.error.unsupported",
    defaultMessage: "Dictation is not available on this device",
    description:
      "Toast text shown when dictation is not supported on the current device",
  },
});
