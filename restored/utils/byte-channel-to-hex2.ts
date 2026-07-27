// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Q_` — pure helper.

import { clampByteChannel } from "./clamp-byte-channel";

/** Clamp to a byte and format as two lowercase hex digits. */
export function byteChannelToHex2(value: number): string {
  const byte = clampByteChannel(value);
  return (byte < 16 ? "0" : "") + byte.toString(16);
}
