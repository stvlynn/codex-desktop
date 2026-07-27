// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `_y`) / export `znt`.

export type FetchTextOrBinaryFromUrlPeers = {
  isSameOrigin: (url: string, base: string) => boolean;
  getBaseUri: () => string;
  fetch: (url: string) => Promise<Response>;
  xhr: (url: string, responseType: string) => Promise<unknown>;
};

let peers: FetchTextOrBinaryFromUrlPeers | null = null;

/** Wire fetchTextOrBinaryFromUrl peers once companions land. */
export function setFetchTextOrBinaryFromUrlPeers(
  next: FetchTextOrBinaryFromUrlPeers,
): void {
  peers = next;
}

/**
 * Bundle export `znt` / internal `_y`.
 * Fetch text/binary from same-origin URL or XHR fallback.
 */
export async function fetchTextOrBinaryFromUrl(
  url: string,
  responseType: "text" | "arraybuffer" | "blob" | "json" = "text",
): Promise<unknown> {
  if (peers == null) {
    throw new Error("FetchTextOrBinaryFromUrl peers are not configured");
  }
  if (peers.isSameOrigin(url, peers.getBaseUri())) {
    const response = await peers.fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    switch (responseType) {
      case "arraybuffer":
        return response.arrayBuffer();
      case "blob":
        return response.blob();
      case "json":
        return response.json();
      default:
        return response.text();
    }
  }
  return peers.xhr(url, responseType);
}
