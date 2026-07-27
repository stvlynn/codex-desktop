// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `I4s` / export `xh`.

import {
  isPlaygroundExperimentId,
  PLAYGROUND_DEFAULT_TITLE,
} from "./playground-experiment-ids";

/** Default title when the experiment id is a playground variant. */
export function playgroundDefaultTitle(experimentId: string): string | undefined {
  if (isPlaygroundExperimentId(experimentId)) return PLAYGROUND_DEFAULT_TITLE;
}
