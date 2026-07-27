// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `y$n` / export `w6` — protobuf analytics enum.

export const CodexMicroConnectionTransport = {
  CODEX_MICRO_CONNECTION_TRANSPORT_UNSPECIFIED:
    "CODEX_MICRO_CONNECTION_TRANSPORT_UNSPECIFIED",
  CODEX_MICRO_CONNECTION_TRANSPORT_USB: "CODEX_MICRO_CONNECTION_TRANSPORT_USB",
  CODEX_MICRO_CONNECTION_TRANSPORT_BLUETOOTH:
    "CODEX_MICRO_CONNECTION_TRANSPORT_BLUETOOTH",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexMicroConnectionTransport =
  (typeof CodexMicroConnectionTransport)[keyof typeof CodexMicroConnectionTransport];
