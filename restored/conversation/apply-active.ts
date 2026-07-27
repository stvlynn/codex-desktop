// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Znt`) / export `Yct`.

export type ApplyActivePeers = {
  Bnt: (...args: unknown[]) => unknown;
  Hnt: (...args: unknown[]) => unknown;
  Qnt: (...args: unknown[]) => unknown;
  Rh: (...args: unknown[]) => unknown;
  Vnt: (...args: unknown[]) => unknown;
  Wnt: (...args: unknown[]) => unknown;
  audioContext: (...args: unknown[]) => unknown;
  catch: (...args: unknown[]) => unknown;
  client: (...args: unknown[]) => unknown;
  close: (...args: unknown[]) => unknown;
  disconnect: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  finish: (...args: unknown[]) => unknown;
  processor: (...args: unknown[]) => unknown;
  source: (...args: unknown[]) => unknown;
  start: (...args: unknown[]) => unknown;
  stopAudioCapture: (...args: unknown[]) => unknown;
  transcriptState: (...args: unknown[]) => unknown;
};

let peers: ApplyActivePeers | null = null;

/** Wire applyActive peers once companions land. */
export function setApplyActivePeers(next: ApplyActivePeers): void {
  peers = next;
}

/**
 * Bundle export `Yct` / internal `Znt`.
 */
export function applyActive() {
  if (peers == null) {
    throw new Error("applyActive peers are not configured");
  }

  return class {
    transcriptState = peers.Vnt();
    client = new peers.Qnt(e => {
      peers.Hnt(this.transcriptState, peers.e);
    });
    audioContext = null;
    source = null;
    processor = null;
    async start(e) {
      let t = window.AudioContext;
      if (t == null) throw new peers.Rh(`AudioContext is not available for streaming dictation.`);
      let n = new t();
      this.audioContext = n, this.source = n.createMediaStreamSource(peers.e), this.processor = n.createScriptProcessor(2048, 1, 1), this.processor.onaudioprocess = e => {
        let t = peers.e.inputBuffer.getChannelData(0);
        this.client.appendPCM16(peers.Bnt(t));
      }, this.source.connect(this.processor), this.processor.connect(n.destination), await this.client.connect(n.sampleRate);
    }
    async finish() {
      return this.stopAudioCapture(), await this.client.finish(), peers.Wnt(this.transcriptState);
    }
    close() {
      this.stopAudioCapture(), this.client.close();
    }
    stopAudioCapture() {
      this.processor?.disconnect(), this.source?.disconnect(), this.processor = null, this.source = null, this.audioContext?.close().catch(() => {}), this.audioContext = null;
    }
  };
}
