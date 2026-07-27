// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `HV` / export `IF`.

export type ChatgptMessageLike = {
  id?: string | null;
  author: { role: string };
  create_time?: number | string | null;
};

export function chatgptMessageFallbackId(message: ChatgptMessageLike): string {
  return (
    message.id ?? `${message.author.role}-${message.create_time ?? "unknown"}`
  );
}
