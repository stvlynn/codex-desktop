// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `fxo` / export `FA` — thin `.viewer` projection over open-artifact.
// Full `pxo` open-artifact helper remains for a later restore; injectable here.

type OpenArtifactFn = (
  store: unknown,
  artifactId: string,
  options?: Record<string, unknown>,
) => { viewer: unknown };

let openArtifact: OpenArtifactFn | null = null;

/** Wire the open-artifact helper (`pxo` in the bundle). */
export function setOpenArtifactHelper(fn: OpenArtifactFn): void {
  openArtifact = fn;
}

export function getArtifactViewerFromOpen(
  store: unknown,
  artifactId: string,
  options: Record<string, unknown> = {},
): unknown {
  if (openArtifact == null) {
    throw new Error("open-artifact helper has not been configured");
  }
  return openArtifact(store, artifactId, options).viewer;
}
