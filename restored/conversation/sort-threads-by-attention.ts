// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jY` / export `WT`.

import {
  ATTENTION_STATE_ORDER,
  type AttentionState,
} from "./attention-state-order";

export type AttentionSortableThread = {
  attentionState: AttentionState | string;
  recencyAt: number;
};

/** Sort threads by attention priority, then recency descending. */
export function sortThreadsByAttention<T extends AttentionSortableThread>(
  threads: readonly T[],
): T[] {
  return [...threads].sort(
    (a, b) =>
      (ATTENTION_STATE_ORDER[a.attentionState as AttentionState] ?? 99) -
        (ATTENTION_STATE_ORDER[b.attentionState as AttentionState] ?? 99) ||
      b.recencyAt - a.recencyAt,
  );
}
