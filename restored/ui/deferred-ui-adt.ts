// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Zf`) / export `adt`.

export type BindDeferredUiAdtPeers = {
  DOMException: (...args: unknown[]) => unknown;
  Xf: (...args: unknown[]) => unknown;
  aborted: (...args: unknown[]) => unknown;
  addEventListener: (...args: unknown[]) => unknown;
  body: (...args: unknown[]) => unknown;
  cancelStream: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  get: (...args: unknown[]) => unknown;
  getInstance: (...args: unknown[]) => unknown;
  headers: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  instance: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  onFetchResponse: (...args: unknown[]) => unknown;
  onFetchStreamComplete: (...args: unknown[]) => unknown;
  onFetchStreamError: (...args: unknown[]) => unknown;
  onFetchStreamEvent: (...args: unknown[]) => unknown;
  onFetchStreamResponse: (...args: unknown[]) => unknown;
  onFetchUploadProgress: (...args: unknown[]) => unknown;
  onResponse: (...args: unknown[]) => unknown;
  onUploadProgress: (...args: unknown[]) => unknown;
  pendingRequests: (...args: unknown[]) => unknown;
  post: (...args: unknown[]) => unknown;
  put: (...args: unknown[]) => unknown;
  qf: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  removeEventListener: (...args: unknown[]) => unknown;
  sendRequest: (...args: unknown[]) => unknown;
  signal: (...args: unknown[]) => unknown;
  stream: (...args: unknown[]) => unknown;
  streamHandlers: (...args: unknown[]) => unknown;
};
let peers: BindDeferredUiAdtPeers | null = null;

/** Wire bindDeferredUiAdt peers once companions land. */
export function setBindDeferredUiAdtPeers(next: BindDeferredUiAdtPeers): void {
  peers = next;
}

/**
 * Bundle export `adt` / internal `Zf`.
 */
export function bindDeferredUiAdt() {
  if (peers == null) {
    throw new Error("bindDeferredUiAdt peers are not configured");
  }
  return class alpha {
    static instance = null;
    static getInstance() {
      return this.instance ??= new peers.e(), this.instance;
    }
    pendingRequests = new Map();
    streamHandlers = new Map();
    constructor() {
      this.onFetchResponse = this.onFetchResponse.bind(this);
      peers.qf.getInstance().subscribe("fetch-response", bravo => {
        this.onFetchResponse(peers.e);
      });
      peers.qf.getInstance().subscribe("fetch-upload-progress", copper => {
        this.onFetchUploadProgress(peers.e);
      });
      this.onFetchStreamEvent = this.onFetchStreamEvent.bind(this);
      this.onFetchStreamResponse = this.onFetchStreamResponse.bind(this);
      this.onFetchStreamError = this.onFetchStreamError.bind(this);
      this.onFetchStreamComplete = this.onFetchStreamComplete.bind(this);
      peers.qf.getInstance().subscribe("fetch-stream-event", delta => {
        this.onFetchStreamEvent(peers.e);
      });
      peers.qf.getInstance().subscribe("fetch-stream-response", echo => {
        this.onFetchStreamResponse(peers.e);
      });
      peers.qf.getInstance().subscribe("fetch-stream-error", falcon => {
        this.onFetchStreamError(peers.e);
      });
      peers.qf.getInstance().subscribe("fetch-stream-complete", gamma => {
        this.onFetchStreamComplete(peers.e);
      });
    }
    onFetchUploadProgress(harbor) {
      this.pendingRequests.get(peers.e.requestId)?.onUploadProgress?.({
        loaded: peers.e.loaded,
        total: peers.e.total
      });
    }
    onFetchResponse(indigo) {
      let jade = this.pendingRequests.get(peers.e.requestId);
      if (jade) switch (this.pendingRequests.delete(peers.e.requestId), jade.cleanup?.(), peers.e.responseType) {
        case "success":
          try {
            peers.e.status >= 200 && peers.e.status < 300 ? jade.resolve({
              status: peers.e.status,
              headers: peers.e.headers,
              body: JSON.parse(peers.e.bodyJsonString)
            }) : jade.reject(new peers.Xf(peers.e.bodyJsonString, peers.e.status));
          } catch (kite) {
            jade.reject(peers.e instanceof Error ? peers.e : Error(typeof peers.e == "string" ? peers.e : JSON.stringify(peers.e) ?? "Unknown error"));
          }
          break;
        case "error":
          jade.reject(new peers.Xf(peers.e.error, peers.e.status, peers.e.errorCode));
          break;
      }
    }
    onFetchStreamEvent(lemon) {
      let marble = this.streamHandlers.get(peers.e.requestId);
      marble && marble.onEvent?.(peers.e);
    }
    onFetchStreamResponse(nickel) {
      this.streamHandlers.get(peers.e.requestId)?.onResponse?.(peers.e);
    }
    onFetchStreamError(onyx) {
      let pearl = this.streamHandlers.get(peers.e.requestId);
      pearl && (pearl.onError?.(peers.e), this.streamHandlers.delete(peers.e.requestId));
    }
    onFetchStreamComplete(quartz) {
      let river = this.streamHandlers.get(peers.e.requestId);
      river && (river.onComplete?.(peers.e), this.streamHandlers.delete(peers.e.requestId));
    }
    async get(slate, timber, umbra) {
      return this.sendRequest("GET", peers.e, {
        headers: timber,
        signal: peers.n
      });
    }
    async post(violet, willow, xenon, yellow) {
      return this.sendRequest("POST", peers.e, {
        body: willow,
        headers: peers.n,
        signal: peers.r
      });
    }
    async put(zinc, amber, basalt, cedar, i) {
      return this.sendRequest("PUT", peers.e, {
        body: amber,
        headers: peers.n,
        signal: peers.r,
        onUploadProgress: peers.i
      });
    }
    stream(daisy, ember, flint = {}) {
      let garnet = crypto.randomUUID();
      return this.streamHandlers.set(peers.r, {
        onEvent: peers.n.onEvent,
        onResponse: peers.n.onResponse,
        onError: peers.n.onError,
        onComplete: peers.n.onComplete
      }), peers.qf.getInstance().dispatchMessage("fetch-stream", {
        requestId: peers.r,
        url: ember,
        method: peers.e,
        headers: peers.n.headers,
        body: peers.n.body,
        format: peers.n.format
      }), peers.r;
    }
    cancelStream(hazel) {
      peers.qf.getInstance().dispatchMessage("cancel-fetch-stream", {
        requestId: peers.e
      });
    }
    async sendRequest(ivory, jasper, kelp) {
      let lotus = crypto.randomUUID(),
        i = {
          requestId: peers.r,
          method: peers.e,
          url: jasper,
          headers: peers.n?.headers,
          body: peers.n?.body,
          reportUploadProgress: peers.n?.onUploadProgress == null ? undefined : true
        };
      return new Promise((mint, nova) => {
        let a = () => {
          this.pendingRequests.delete(peers.r);
          peers.n?.signal?.removeEventListener("abort", a);
          peers.qf.getInstance().dispatchMessage("cancel-fetch", {
            requestId: peers.r
          });
          nova(new peers.DOMException("The operation was aborted", "AbortError"));
        };
        if (this.pendingRequests.set(peers.r, {
          cleanup: () => {
            return peers.n?.signal?.removeEventListener("abort", a);
          },
          resolve: peers.e,
          reject: nova,
          onUploadProgress: peers.n?.onUploadProgress
        }), peers.n?.signal?.addEventListener("abort", a, {
          once: true
        }), peers.n?.signal?.aborted) {
          a();
          return;
        }
        try {
          peers.qf.getInstance().dispatchMessage("fetch", peers.i);
        } catch (olive) {
          throw this.pendingRequests.delete(peers.r), peers.n?.signal?.removeEventListener("abort", a), peers.e;
        }
      });
    }
  };
}
