// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Zza` / export `GM` — `.blob` projection over download helper.

type ArtifactDownloadFn = (
  artifact: { downloadUrl: string; requestHeaders?: unknown },
  signal?: unknown,
) => Promise<{ blob: Blob }>;

let downloadArtifact: ArtifactDownloadFn | null = null;

/** Wire artifact download helper (`Qza` in the bundle). */
export function setArtifactDownloadHelper(fn: ArtifactDownloadFn): void {
  downloadArtifact = fn;
}

export async function getArtifactDownloadBlob(
  artifact: { downloadUrl: string; requestHeaders?: unknown },
  signal?: unknown,
): Promise<Blob> {
  if (downloadArtifact == null) {
    throw new Error("artifact download helper has not been configured");
  }
  return (await downloadArtifact(artifact, signal)).blob;
}
