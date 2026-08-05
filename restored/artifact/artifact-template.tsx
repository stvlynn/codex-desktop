// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `z4n`) / export `Y3`.

export type BindArtifactTemplatePeers = {
  F4n: (...args: unknown[]) => unknown;
  I4n: (...args: unknown[]) => unknown;
  Il: (...args: unknown[]) => unknown;
  L4n: (...args: unknown[]) => unknown;
  R4n: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
};

let peers: BindArtifactTemplatePeers | null = null;

/** Wire bindArtifactTemplate peers once companions land. */
export function setBindArtifactTemplatePeers(
  next: BindArtifactTemplatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Y3` / internal `z4n`.
 */
export function bindArtifactTemplate() {
  if (peers == null) {
    throw new Error("bindArtifactTemplate peers are not configured");
  }

  return peers.e(() => {
    ((F4n = peers.r(peers.Il(), 1)),
      peers.Sl(),
      peers.jf(),
      (I4n = `artifact-template-`),
      (L4n = peers.sl({
        schemaVersion: peers.ml(1),
        kind: peers.pl([
          `document`,
          `presentation`,
          `spreadsheet`,
          `google-docs`,
          `google-slides`,
          `google-sheets`,
        ]),
      })),
      (R4n = {
        document: `docx`,
        presentation: `pptx`,
        spreadsheet: `xlsx`,
        "google-docs": `pdf`,
        "google-slides": `pdf`,
        "google-sheets": `pdf`,
      }));
  });
}
