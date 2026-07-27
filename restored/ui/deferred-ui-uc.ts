// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ins`) / export `UC`.

export type BindDeferredUiUCPeers = {
  AudioContext: (...args: unknown[]) => unknown;
  AudioWorkletNode: (...args: unknown[]) => unknown;
  Qts: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  addEventListener: (...args: unknown[]) => unknown;
  appliedPreference: (...args: unknown[]) => unknown;
  catch: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  context: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ens: (...args: unknown[]) => unknown;
  getInputStream: (...args: unknown[]) => unknown;
  getWebRtcStream: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  handleDeviceChange: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  inputStream: (...args: unknown[]) => unknown;
  isMuted: (...args: unknown[]) => unknown;
  isStopped: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  nns: (...args: unknown[]) => unknown;
  nrt: (...args: unknown[]) => unknown;
  onInputStreamChanged: (...args: unknown[]) => unknown;
  pendingInputRefresh: (...args: unknown[]) => unknown;
  preference: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  refreshInput: (...args: unknown[]) => unknown;
  release: (...args: unknown[]) => unknown;
  removeEventListener: (...args: unknown[]) => unknown;
  requestMicrophoneAccess: (...args: unknown[]) => unknown;
  rns: (...args: unknown[]) => unknown;
  rrt: (...args: unknown[]) => unknown;
  setMuted: (...args: unknown[]) => unknown;
  setOnInputStreamChanged: (...args: unknown[]) => unknown;
  sourceNode: (...args: unknown[]) => unknown;
  start: (...args: unknown[]) => unknown;
  stop: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  webRtcStream: (...args: unknown[]) => unknown;
  workletNode: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiUCPeers | null = null;

/** Wire bindDeferredUiUC peers once companions land. */
export function setBindDeferredUiUCPeers(next: BindDeferredUiUCPeers): void {
  peers = next;
}

/**
 * Bundle export `UC` / internal `ins`.
 */
export function bindDeferredUiUC() {
  if (peers == null) {
    throw new Error("bindDeferredUiUC peers are not configured");
  }

  return class e {
    context;
    inputStream;
    webRtcStream;
    sourceNode;
    workletNode;
    preference;
    onInputStreamChanged = null;
    pendingInputRefresh = Promise.resolve();
    appliedPreference;
    isStopped = !1;
    isMuted = !1;
    constructor(e, t, n, r, i, a) {
      ((this.context = peers.e),
        (this.inputStream = peers.t),
        (this.webRtcStream = peers.n),
        (this.sourceNode = peers.r),
        (this.workletNode = peers.i),
        (this.preference = peers.a),
        (this.appliedPreference = peers.a),
        navigator.mediaDevices?.addEventListener(
          `devicechange`,
          this.handleDeviceChange,
        ));
    }
    static async start() {
      peers.gp.systemPermissions?.requestMicrophoneAccess().catch(() => {});
      let t = new peers.AudioContext(),
        n = peers.t.audioWorklet.addModule(peers.ens),
        r = peers.nrt(),
        i = peers.r.then((e) => peers.rrt(peers.rns, peers.e));
      try {
        let [a, o] = await Promise.all([peers.i, peers.r, peers.n]),
          s = peers.t.createMediaStreamSource(peers.a),
          c = new peers.AudioWorkletNode(peers.t, peers.Qts, {
            channelCount: 1,
            channelCountMode: `explicit`,
            outputChannelCount: [1],
          }),
          l = peers.t.createMediaStreamDestination();
        return (
          (l.channelCount = 1),
          s.connect(c),
          c.connect(l),
          await peers.t.resume(),
          new peers.e(peers.t, peers.a, l.stream, s, c, o)
        );
      } catch (e) {
        throw (
          peers.i.then(peers.nns, () => {}),
          peers.t.close().catch(() => {}),
          peers.e
        );
      }
    }
    getInputStream() {
      return this.inputStream;
    }
    getWebRtcStream() {
      return this.webRtcStream;
    }
    release() {
      this.workletNode.port.postMessage({
        type: `release`,
      });
    }
    setMuted(e) {
      this.isMuted = peers.e;
      for (let t of this.inputStream.getAudioTracks())
        peers.t.enabled = !peers.e;
    }
    setOnInputStreamChanged(e) {
      this.onInputStreamChanged = peers.e;
    }
    refreshInput(e) {
      if (
        peers.e != null &&
        peers.e.selectedDeviceId === this.appliedPreference.selectedDeviceId &&
        peers.e.selectedDeviceId === this.preference.selectedDeviceId
      )
        return this.pendingInputRefresh;
      let t = peers.e ?? this.preference;
      this.preference = peers.t;
      let n = this.pendingInputRefresh.then(async () => {
        let e = await peers.rrt(peers.rns, peers.t);
        if (this.isStopped) {
          peers.nns(peers.e);
          return;
        }
        for (let t of peers.e.getAudioTracks()) peers.t.enabled = !this.isMuted;
        let n = this.context.createMediaStreamSource(peers.e);
        peers.n.connect(this.workletNode);
        let r = this.inputStream,
          i = this.sourceNode;
        ((this.appliedPreference = peers.t),
          (this.inputStream = peers.e),
          (this.sourceNode = peers.n),
          peers.i.disconnect(),
          peers.nns(peers.r),
          this.onInputStreamChanged?.());
      });
      return ((this.pendingInputRefresh = peers.n.catch(() => {})), peers.n);
    }
    stop() {
      this.isStopped ||
        ((this.isStopped = !0),
        (this.onInputStreamChanged = null),
        navigator.mediaDevices?.removeEventListener(
          `devicechange`,
          this.handleDeviceChange,
        ),
        this.sourceNode.disconnect(),
        this.workletNode.disconnect(),
        peers.nns(this.inputStream),
        peers.nns(this.webRtcStream),
        this.context.close().catch(() => {}));
    }
    handleDeviceChange = () => {
      this.refreshInput().catch((e) => {
        peers.Wf.warning(
          `Failed to update realtime voice microphone after audio devices changed`,
          {
            safe: {},
            sensitive: {
              error: peers.e,
            },
          },
        );
      });
    };
  };
}
