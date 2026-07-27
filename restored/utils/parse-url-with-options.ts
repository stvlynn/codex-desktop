// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `PGt` / export `Rnt`.

import { decodeUriComponentEscape } from "./decode-uri-component-escape";
import { isNavigableUrlProtocol } from "./is-navigable-url-protocol";

export type ParseUrlOptions = {
  addDefaultProtocol?: boolean;
  tryConvertEncoding?: boolean;
};

/** Parse a URL string with optional www→http and encoding recovery. */
export function parseUrlWithOptions(value: string | null | undefined, base: string | null = null, options: ParseUrlOptions | null = null): URL | null {
  if (!value) return null;
  let input = value;
  if (options && typeof input === "string") {
    if (
      options.addDefaultProtocol &&
      input.startsWith("www.") &&
      (input.match(/\./g)?.length ?? 0) >= 2
    ) {
      input = `http://${input}`;
    }
    if (options.tryConvertEncoding) {
      try {
        input = decodeUriComponentEscape(input);
      } catch {
        /* ignore */
      }
    }
  }
  const parsed = base ? URL.parse(input, base) : URL.parse(input);
  return isNavigableUrlProtocol(parsed) ? parsed : null;
}
