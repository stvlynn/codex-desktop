// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `m8i`) / export `RR`.

export type ArtifactPreviewDownloadButtonPeers = {
  Ef: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Lz: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  W_: (...args: unknown[]) => unknown;
  Xm: (...args: unknown[]) => unknown;
  bxe: (...args: unknown[]) => unknown;
  fk: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  rp: (...args: unknown[]) => unknown;
  v8i: (...args: unknown[]) => unknown;
};
let peers: ArtifactPreviewDownloadButtonPeers | null = null;

/** Wire ArtifactPreviewDownloadButton peers once companions land. */
export function setArtifactPreviewDownloadButtonPeers(
  next: ArtifactPreviewDownloadButtonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `RR` / internal `m8i`.
 */
export function ArtifactPreviewDownloadButton({
  hostId,
  path,
  sizeBytes,
}: Record<string, unknown>) {
  const Xm = peers.Xm;
  const Np = peers.Np;
  const Fk = peers.fk;
  if (peers == null) {
    throw new Error("ArtifactPreviewDownloadButton peers are not configured");
  }
  let r = peers.Io(peers.Q),
    i = peers.Ju(),
    a = peers.W_(hostId),
    [o, s] = peers.v8i.useState(false),
    c = i.formatMessage({
      id: "artifactTab.preview.download",
      defaultMessage: "Download",
      description:
        "Button label that saves a remote artifact to the local computer",
    }),
    l = i.formatMessage({
      id: "artifactTab.preview.downloading",
      defaultMessage: "Downloading...",
      description: "Tooltip shown while a remote artifact download is running",
    }),
    u = i.formatMessage({
      id: "artifactTab.preview.downloadFailure",
      defaultMessage: "Could not download artifact",
      description: "Error shown when a remote artifact download fails",
    });
  if (
    hostId === "local" ||
    (sizeBytes != null && sizeBytes > 47185920 && !peers.bxe(a))
  )
    return null;
  let d = async () => {
    s(true);
    try {
      let { sizeBytes: _sizeBytes } = await peers.rp("read-file-metadata", {
        params: {
          hostId,
          path,
        },
      });
      if ((_sizeBytes == null || _sizeBytes > 47185920) && peers.bxe(a)) {
        await peers.rp("save-file", {
          params: {
            kind: "remote-file",
            hostId,
            sourcePath: path,
            suggestedFilename: peers.Ef(path),
          },
        });
        return;
      }
      if (_sizeBytes == null || _sizeBytes > 47185920)
        throw Error("File is too large to download directly");
      let { contentsBase64 } = await peers.rp("read-file-binary", {
        params: {
          hostId,
          path,
        },
      });
      if (contentsBase64 == null) return;
      await peers.rp("save-file", {
        params: {
          kind: "contents",
          suggestedFilename: peers.Ef(path),
          contentsBase64,
        },
      });
    } catch {
      r.get(peers.rh).danger(u);
    } finally {
      s(false);
    }
  };
  return (
    <Xm tooltipContent={o ? l : c}>
      <Np
        aria-label={c}
        aria-busy={o}
        color="ghost"
        loading={o}
        size="toolbar"
        uniform={true}
        onClick={() => {
          d();
        }}
      >
        {o ? null : <Fk className="icon-sm" />}
      </Np>
    </Xm>
  );
}
