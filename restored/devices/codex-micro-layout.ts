// Restored from ref/webview/assets/codex-micro-layout-CIGyS1bN.js
// Codex Micro / Stream Deck layout helpers (bindable until catalog split).
// Stage 3: n_t→streamDeckLayoutSchema; $gt→DEFAULT_STREAM_DECK_LAYOUT.

import { DEFAULT_STREAM_DECK_LAYOUT } from "./stream-deck-defaults";
import { streamDeckLayoutSchema } from "./stream-deck-layout-schema";

/** Bundle export `i` — parse stored layout or fall back to factory default. */
export function parseStreamDeckLayout(value: unknown) {
  return (
    streamDeckLayoutSchema.safeParse(value).data ?? DEFAULT_STREAM_DECK_LAYOUT
  );
}

/** Bundle export `o` / `d` — layout module ESM init retained as no-op. */
export function ensureCodexMicroLayoutInit(): void {}
export { DEFAULT_STREAM_DECK_LAYOUT, streamDeckLayoutSchema };
