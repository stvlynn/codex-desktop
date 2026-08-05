// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zy`) / export `irt`.

export type BindDeferredUiIrtPeers = {
  BGt: (...args: unknown[]) => unknown;
  ImageDecoder: (...args: unknown[]) => unknown;
  OffscreenCanvas: (...args: unknown[]) => unknown;
  hy: (...args: unknown[]) => unknown;
  isCSSRoundSupported: (...args: unknown[]) => unknown;
  isEvalSupported: (...args: unknown[]) => unknown;
  isImageDecoderSupported: (...args: unknown[]) => unknown;
  isLittleEndian: (...args: unknown[]) => unknown;
  isOffscreenCanvasSupported: (...args: unknown[]) => unknown;
  platform: (...args: unknown[]) => unknown;
  supports: (...args: unknown[]) => unknown;
  zGt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiIrtPeers | null = null;

/** Wire bindDeferredUiIrt peers once companions land. */
export function setBindDeferredUiIrtPeers(next: BindDeferredUiIrtPeers): void {
  peers = next;
}

/**
 * Bundle export `irt` / internal `zy`.
 */
export function bindDeferredUiIrt() {
  if (peers == null) {
    throw new Error("bindDeferredUiIrt peers are not configured");
  }

  return class {
    static get isLittleEndian() {
      return peers.hy(this, `isLittleEndian`, peers.zGt());
    }
    static get isEvalSupported() {
      return peers.hy(this, `isEvalSupported`, peers.BGt());
    }
    static get isOffscreenCanvasSupported() {
      return peers.hy(
        this,
        `isOffscreenCanvasSupported`,
        typeof peers.OffscreenCanvas < `u`,
      );
    }
    static get isImageDecoderSupported() {
      return peers.hy(
        this,
        `isImageDecoderSupported`,
        typeof peers.ImageDecoder < `u`,
      );
    }
    static get platform() {
      let { platform: e, userAgent: t } = navigator;
      return peers.hy(this, `platform`, {
        isAndroid: t.includes(`Android`),
        isLinux: e.includes(`Linux`),
        isMac: e.includes(`Mac`),
        isWindows: e.includes(`Win`),
        isFirefox: t.includes(`Firefox`),
      });
    }
    static get isCSSRoundSupported() {
      return peers.hy(
        this,
        `isCSSRoundSupported`,
        globalThis.CSS?.supports?.(`width: round(1.5px, 1px)`),
      );
    }
  };
}
