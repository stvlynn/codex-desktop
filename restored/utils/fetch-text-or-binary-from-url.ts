// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_y`) / export `znt`.

export type FetchTextOrBinaryFromUrlPeers = {
  XMLHttpRequest: (...args: unknown[]) => unknown;
  ZGt: (...args: unknown[]) => unknown;
  fetch: (...args: unknown[]) => unknown;
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
 */
async function fetchTextOrBinaryFromUrl(e, t = `text`) {
  if (peers == null) {
    throw new Error("fetchTextOrBinaryFromUrl peers are not configured");
  }

  if (peers.ZGt(e, document.baseURI)) {
    let n = await peers.fetch(e);
    if (!n.ok) throw Error(n.statusText);
    switch (t) {
      case `arraybuffer`:
        return n.arrayBuffer();
      case `blob`:
        return n.blob();
      case `json`:
        return n.json();
    }
    return n.text();
  }
  return new Promise((n, r) => {
    let i = new peers.XMLHttpRequest();
    (i.open(`GET`, e, !0),
      (i.responseType = t),
      (i.onreadystatechange = () => {
        if (i.readyState === peers.XMLHttpRequest.DONE) {
          if (i.status === 200 || i.status === 0) {
            switch (t) {
              case `arraybuffer`:
              case `blob`:
              case `json`:
                n(i.response);
                return;
            }
            n(i.responseText);
            return;
          }
          r(Error(i.statusText));
        }
      }),
      i.send(null));
  });
}
