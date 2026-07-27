// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Vnt` — pure helper.

export type EmptyUtteranceState = {
  orderedUtteranceIds: string[];
  finalTextByUtteranceId: Record<string, string>;
};

/** Empty realtime utterance accumulator. */
export function emptyUtteranceState(): EmptyUtteranceState {
  return { orderedUtteranceIds: [], finalTextByUtteranceId: {} };
}
