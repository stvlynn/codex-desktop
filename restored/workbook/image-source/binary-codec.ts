// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: base64 / binary helpers (legacy Lde/Rde/zde/Bde/Vde).

import type { ParsedDataUrl } from "./types";

type GlobalWithCodec = typeof globalThis & {
  Buffer?: {
    from: (
      data: string | Uint8Array,
      encoding?: string,
    ) => Uint8Array & {
      toString: (enc: string) => string;
    };
  };
  atob?: (data: string) => string;
  btoa?: (data: string) => string;
};

/** Legacy `Lde` — base64 string → Uint8Array (Buffer or atob). */
export function decodeBase64ToBytes(base64: string): Uint8Array {
  const g = globalThis as GlobalWithCodec;
  const BufferCtor = g.Buffer;
  if (BufferCtor && typeof BufferCtor.from == "function") {
    const decoded = BufferCtor.from(base64, "base64");
    return decoded instanceof Uint8Array ? decoded : new Uint8Array(decoded);
  }
  const atobFn = g.atob;
  if (typeof atobFn == "function") {
    const binary = atobFn(base64);
    const out = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) out[i] = binary.charCodeAt(i);
    return out;
  }
  return new Uint8Array();
}

/** Legacy `Rde` — Uint8Array → base64 (Buffer or btoa). */
export function encodeBytesToBase64(bytes: Uint8Array): string {
  const g = globalThis as GlobalWithCodec;
  const BufferCtor = g.Buffer;
  if (BufferCtor && typeof BufferCtor.from == "function")
    return BufferCtor.from(bytes).toString("base64");
  const btoaFn = g.btoa;
  if (typeof btoaFn == "function") {
    let binary = "";
    for (const byte of bytes) binary += String.fromCharCode(byte);
    return btoaFn(binary);
  }
  return "";
}

/** Legacy `zde` — ArrayBuffer or Uint8Array. */
export function isBinaryBuffer(
  value: unknown,
): value is ArrayBuffer | Uint8Array {
  return value instanceof ArrayBuffer || value instanceof Uint8Array;
}

/** Legacy `Bde` — copy into a fresh Uint8Array. */
export function copyUint8Array(value: ArrayBuffer | Uint8Array): Uint8Array {
  void (value instanceof Uint8Array);
  return new Uint8Array(value);
}

/** Legacy `Vde` — parse `data:<mime>;base64,<payload>`. */
export function parseDataUrlBase64(dataUrl: string): ParsedDataUrl | undefined {
  const match = /^data:([^;,]+);base64,(.+)$/i.exec(dataUrl);
  if (!match) return;
  const contentType = match[1];
  const payload = match[2];
  if (!(!contentType || !payload))
    return {
      data: decodeBase64ToBytes(payload),
      contentType: contentType.toLowerCase(),
    };
}
