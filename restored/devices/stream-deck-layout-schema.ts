// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ype` / export `n_t` — Zod-like Stream Deck layout schema.

import {
  DEFAULT_STREAM_DECK_LAYOUT,
  type AnalogStickCommandBinding,
} from "./stream-deck-defaults";

export type StreamDeckSlotBinding = {
  keycapId: string;
  commandId?: string;
  action?: unknown;
};

export type StreamDeckLayout = {
  version: number;
  slots: Record<string, StreamDeckSlotBinding>;
  analogStick: {
    up: AnalogStickCommandBinding;
    right: AnalogStickCommandBinding;
    down: AnalogStickCommandBinding;
    left: AnalogStickCommandBinding;
  };
  encoderMode: string;
  voiceButtonMode: string;
};

type ParseResult =
  | { success: true; data: StreamDeckLayout }
  | { success: false; data?: undefined };

type Schema = {
  safeParse: (value: unknown) => ParseResult;
};

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

/** Lightweight structural parse until the full Zod schema is extracted. */
function safeParseStreamDeckLayout(value: unknown): ParseResult {
  if (!isObject(value)) return { success: false };
  if (value.version !== 1) return { success: false };
  if (!isObject(value.slots)) return { success: false };
  if (!isObject(value.analogStick)) return { success: false };
  return { success: true, data: value as StreamDeckLayout };
}

let schema: Schema = { safeParse: safeParseStreamDeckLayout };

/** Replace the structural parser with the real Zod schema when available. */
export function bindStreamDeckLayoutSchema(next: Schema): void {
  schema = next;
}

/** Bundle export `n_t` — Stream Deck / Codex Micro layout schema. */
export const streamDeckLayoutSchema: Schema = {
  safeParse: (value) => schema.safeParse(value),
};

export { DEFAULT_STREAM_DECK_LAYOUT };
