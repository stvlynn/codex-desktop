// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Krt`) / export `Ict`.

export type BuildDictationAudioUploadRequestPeers = {
  Hh: (...args: unknown[]) => unknown;
  Ih: (...args: unknown[]) => unknown;
  Jrt: (...args: unknown[]) => unknown;
  Yrt: (...args: unknown[]) => unknown;
  Zf: (...args: unknown[]) => unknown;
  Zl: (...args: unknown[]) => unknown;
  qrt: (...args: unknown[]) => unknown;
};
let peers: BuildDictationAudioUploadRequestPeers | null = null;

/** Wire buildDictationAudioUploadRequest peers once companions land. */
export function setBuildDictationAudioUploadRequestPeers(
  next: BuildDictationAudioUploadRequestPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ict` / internal `Krt`.
 */
export async function buildDictationAudioUploadRequest(
  e: unknown,
  t: unknown = {},
) {
  if (peers == null) {
    throw new Error(
      "buildDictationAudioUploadRequest peers are not configured",
    );
  }
  let n =
      t.contentType ??
      (e.type && e.type.trim().length > 0 ? e.type : "audio/webm"),
    r = n.split(/[/;]/)[1] ?? "webm",
    i = peers.Jrt(t.filename ?? `codex.${r}`),
    a = peers.Yrt(),
    o = peers.Ih(
      await peers.qrt({
        blob: e,
        boundary: a,
        filename: i,
        contentType: n,
        language: t.language,
      }),
    ),
    s = {
      "Content-Type": `multipart/form-data; boundary=${a}`,
      [peers.Zl]: "1",
      ...peers.Hh(),
    };
  return (await peers.Zf.getInstance().post("/transcribe", o, s)).body.text;
}
