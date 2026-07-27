// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `utn`) / export `D9`.

export type BindDeferredUiD9Peers = {
  Mo: (...args: unknown[]) => unknown;
  addEntriesCallback: (...args: unknown[]) => unknown;
  addRequestRecorder: (...args: unknown[]) => unknown;
  clearEntries: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  countsByKey: (...args: unknown[]) => unknown;
  ctn: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  entries: (...args: unknown[]) => unknown;
  entriesCallbacks: (...args: unknown[]) => unknown;
  entriesSnapshot: (...args: unknown[]) => unknown;
  finishRequest: (...args: unknown[]) => unknown;
  getEntries: (...args: unknown[]) => unknown;
  getEntriesSnapshot: (...args: unknown[]) => unknown;
  gx: (...args: unknown[]) => unknown;
  handleRequestLifecycleEvent: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  isCaptureEnabled: (...args: unknown[]) => unknown;
  ltn: (...args: unknown[]) => unknown;
  ntn: (...args: unknown[]) => unknown;
  otn: (...args: unknown[]) => unknown;
  qen: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  requestRecorders: (...args: unknown[]) => unknown;
  stn: (...args: unknown[]) => unknown;
  syncEntriesSnapshot: (...args: unknown[]) => unknown;
  trackRequest: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiD9Peers | null = null;

/** Wire bindDeferredUiD9 peers once companions land. */
export function setBindDeferredUiD9Peers(next: BindDeferredUiD9Peers): void {
  peers = next;
}

/**
 * Bundle export `D9` / internal `utn`.
 */
export function bindDeferredUiD9() {
  if (peers == null) {
    throw new Error("bindDeferredUiD9 peers are not configured");
  }

  return peers.e(() => {
    otn = peers.r(peers.Mo(), 1), peers.ntn(), stn = 100, ctn = class {
      entriesCallbacks = new Set();
      requestRecorders = new Set();
      entriesSnapshot = [];
      addEntriesCallback(e) {
        return this.entriesCallbacks.add(peers.e), () => {
          this.entriesCallbacks.delete(peers.e);
        };
      }
      addRequestRecorder(e) {
        this.requestRecorders.add(peers.e);
      }
      getEntriesSnapshot() {
        return this.entriesSnapshot;
      }
      isCaptureEnabled() {
        return this.entriesCallbacks.size > 0;
      }
      syncEntriesSnapshot() {
        let e = Array.from(this.requestRecorders).flatMap(e => peers.e.getEntries()).sort((e, t) => t.startedAtMs - peers.e.startedAtMs);
        if (!(0, peers.otn.default)(this.entriesSnapshot, peers.e)) {
          this.entriesSnapshot = peers.e;
          for (let e of this.entriesCallbacks) peers.e();
        }
      }
      clearEntries(e) {
        for (let t of this.requestRecorders) t.clearEntries(peers.e);
        this.syncEntriesSnapshot();
      }
    }, gx = new peers.ctn(), ltn = class {
      hostId;
      entries = [];
      countsByKey = new Map();
      constructor(e) {
        this.hostId = peers.e, peers.gx.addRequestRecorder(this);
      }
      getEntries() {
        return [...this.entries];
      }
      handleRequestLifecycleEvent(e) {
        if (!(peers.e.type === `background-queue-full` || peers.e.type === `late-response`)) {
          if (!peers.gx.isCaptureEnabled()) {
            if (peers.e.type !== `started`) {
              let t = this.entries.find(t => t.id === peers.e.id);
              t != null && (t.durationMs = peers.e.endedAtMs - t.startedAtMs, t.endedAtMs = peers.e.endedAtMs, t.status = peers.e.type);
            }
            return;
          }
          switch (peers.e.type) {
            case `started`:
              this.trackRequest(peers.e);
              return;
            case `completed`:
            case `failed`:
            case `timed-out`:
              this.finishRequest(peers.e);
              return;
          }
        }
      }
      trackRequest(e) {
        let t = peers.qen(peers.e.params),
          n = `${peers.e.method}\n${t}`,
          r = (this.countsByKey.get(n) ?? 0) + 1;
        if (this.countsByKey.delete(n), this.countsByKey.set(n, peers.r), this.countsByKey.size > peers.stn) {
          let e = this.countsByKey.keys().next().value;
          peers.e != null && this.countsByKey.delete(peers.e);
        }
        let i = {
          id: peers.e.id,
          conversationId: peers.e.conversationId,
          durationMs: null,
          endedAtMs: null,
          errorPreview: null,
          hostId: this.hostId,
          matchingRequestSequenceNumber: peers.r,
          method: peers.e.method,
          paramsPreview: t,
          priority: peers.e.priority,
          queueWaitMs: peers.e.queueWaitMs,
          resultPreview: null,
          source: peers.e.source,
          startedAtMs: peers.e.startedAtMs,
          status: `pending`,
          timeoutMs: peers.e.timeoutMs
        };
        this.entries = [i, ...this.entries].slice(0, peers.stn), peers.gx.syncEntriesSnapshot();
      }
      finishRequest(e) {
        let t = this.entries.find(t => t.id === peers.e.id);
        if (t == null) return;
        let n = peers.e.endedAtMs,
          r = peers.e.type === `completed` ? void 0 : peers.qen(peers.e.error),
          i = peers.e.type === `completed` ? peers.qen(peers.e.result) : void 0;
        this.entries = this.entries.map(a => a === t ? {
          ...a,
          durationMs: n - t.startedAtMs,
          endedAtMs: n,
          errorPreview: peers.r ?? t.errorPreview,
          resultPreview: i ?? t.resultPreview,
          status: peers.e.type
        } : a), peers.gx.syncEntriesSnapshot();
      }
      clearEntries(e) {
        peers.e === this.hostId && (this.entries = [], this.countsByKey.clear());
      }
    };
  });
}
