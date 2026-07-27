// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `eYt`) / export `Cnt`.

export type BindDeferredUiCntPeers = {
  AbortController: (...args: unknown[]) => unknown;
  Blob: (...args: unknown[]) => unknown;
  Iqt: (...args: unknown[]) => unknown;
  MGt: (...args: unknown[]) => unknown;
  Pqt: (...args: unknown[]) => unknown;
  QGt: (...args: unknown[]) => unknown;
  Ql: (...args: unknown[]) => unknown;
  Ty: (...args: unknown[]) => unknown;
  URL: (...args: unknown[]) => unknown;
  Uint8Array: (...args: unknown[]) => unknown;
  Worker: (...args: unknown[]) => unknown;
  WorkerMessageHandler: (...args: unknown[]) => unknown;
  _setupFakeWorkerGlobal: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  create: (...args: unknown[]) => unknown;
  d: (...args: unknown[]) => unknown;
  destroy: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fy: (...args: unknown[]) => unknown;
  hy: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  import: (...args: unknown[]) => unknown;
  jGt: (...args: unknown[]) => unknown;
  l: (...args: unknown[]) => unknown;
  messageHandler: (...args: unknown[]) => unknown;
  meta: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  origin: (...args: unknown[]) => unknown;
  port: (...args: unknown[]) => unknown;
  promise: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  s: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  tb: (...args: unknown[]) => unknown;
  terminate: (...args: unknown[]) => unknown;
  u: (...args: unknown[]) => unknown;
  workerSrc: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiCntPeers | null = null;

/** Wire bindDeferredUiCnt peers once companions land. */
export function setBindDeferredUiCntPeers(next: BindDeferredUiCntPeers): void {
  peers = next;
}

/**
 * Bundle export `Cnt` / internal `eYt`.
 */
export function bindDeferredUiCnt() {
  if (peers == null) {
    throw new Error("bindDeferredUiCnt peers are not configured");
  }

  return class e {
    #e = Promise.withResolvers();
    #t = null;
    #n = null;
    #r = null;
    static #i = 0;
    static #a = !1;
    static #o = new WeakMap();
    static {
      (peers.Ty &&
        ((this.#a = !0), (peers.tb.workerSrc ||= `./pdf.worker.mjs`)),
        (this._isSameOrigin = (e, t) => {
          let n = peers.URL.parse(peers.e);
          if (!peers.n?.origin || peers.n.origin === `null`) return !1;
          let r = new peers.URL(peers.t, peers.n);
          return peers.n.origin === peers.r.origin;
        }),
        (this._createCDNWrapper = (e) => {
          let t = `await import("${peers.e}");`;
          return peers.URL.createObjectURL(
            new peers.Blob([peers.t], {
              type: `text/javascript`,
            }),
          );
        }),
        (this.fromPort = (e) => {
          if (
            (peers.QGt(
              "`PDFWorker.fromPort` - please use `PDFWorker.create` instead.",
            ),
            !peers.e?.port)
          )
            throw Error(`PDFWorker.fromPort - invalid method signature.`);
          return this.create(peers.e);
        }));
    }
    constructor({
      name: t = null,
      port: n = null,
      verbosity: r = peers.jGt(),
    } = {}) {
      if (
        ((this.name = peers.t),
        (this.destroyed = !1),
        (this.verbosity = peers.r),
        peers.n)
      ) {
        if (peers.e.#o.has(peers.n))
          throw Error(`Cannot use more than one PDFWorker per port.`);
        (peers.e.#o.set(peers.n, this), this.#c(peers.n));
      } else this.#l();
    }
    get promise() {
      return this.#e.promise;
    }
    #s() {
      (this.#e.resolve(),
        this.#t.send(`configure`, {
          verbosity: this.verbosity,
        }));
    }
    get port() {
      return this.#n;
    }
    get messageHandler() {
      return this.#t;
    }
    #c(e) {
      ((this.#n = peers.e),
        (this.#t = new peers.Iqt(`main`, `worker`, peers.e)),
        this.#t.on(`ready`, () => {}),
        this.#s());
    }
    #l() {
      if (peers.e.#a || peers.e.#d) {
        this.#u();
        return;
      }
      let { workerSrc: t } = peers.e;
      try {
        peers.e._isSameOrigin(window.location, peers.t) ||
          (t = peers.e._createCDNWrapper(
            new peers.URL(peers.t, window.location).href,
          ));
        let n = new peers.Worker(peers.t, {
            type: `module`,
          }),
          r = new peers.Iqt(`main`, `worker`, peers.n),
          i = () => {
            (peers.a.abort(),
              peers.r.destroy(),
              peers.n.terminate(),
              this.destroyed
                ? this.#e.reject(Error(`Worker was destroyed`))
                : this.#u());
          },
          a = new peers.AbortController();
        (peers.n.addEventListener(
          `error`,
          () => {
            this.#r || peers.i();
          },
          {
            signal: peers.a.signal,
          },
        ),
          peers.r.on(`test`, (e) => {
            if ((peers.a.abort(), this.destroyed || !peers.e)) {
              peers.i();
              return;
            }
            ((this.#t = peers.r),
              (this.#n = peers.n),
              (this.#r = peers.n),
              this.#s());
          }),
          peers.r.on(`ready`, (e) => {
            if ((peers.a.abort(), this.destroyed)) {
              peers.i();
              return;
            }
            try {
              peers.o();
            } catch {
              this.#u();
            }
          }));
        let o = () => {
          let e = new peers.Uint8Array();
          peers.r.send(`test`, peers.e, [peers.e.buffer]);
        };
        peers.o();
        return;
      } catch {
        peers.MGt(`The worker has been disabled.`);
      }
      this.#u();
    }
    #u() {
      ((peers.e.#a ||= (peers.fy(`Setting up fake worker.`), !0)),
        peers.e._setupFakeWorkerGlobal
          .then((t) => {
            if (this.destroyed) {
              this.#e.reject(Error(`Worker was destroyed`));
              return;
            }
            let n = new peers.Pqt();
            this.#n = peers.n;
            let r = `fake${peers.e.#i++}`,
              i = new peers.Iqt(peers.r + `_worker`, peers.r, peers.n);
            (peers.t.setup(peers.i, peers.n),
              (this.#t = new peers.Iqt(peers.r, peers.r + `_worker`, peers.n)),
              this.#s());
          })
          .catch((e) => {
            this.#e.reject(
              Error(`Setting up fake worker failed: "${peers.e.message}".`),
            );
          }));
    }
    destroy() {
      ((this.destroyed = !0),
        this.#r?.terminate(),
        (this.#r = null),
        peers.e.#o.delete(this.#n),
        (this.#n = null),
        this.#t?.destroy(),
        (this.#t = null));
    }
    static create(t) {
      let n = this.#o.get(peers.t?.port);
      if (peers.n) {
        if (peers.n._pendingDestroy)
          throw Error(
            "PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.",
          );
        return peers.n;
      }
      return new peers.e(peers.t);
    }
    static get workerSrc() {
      if (peers.tb.workerSrc) return peers.tb.workerSrc;
      throw Error(`No "GlobalWorkerOptions.workerSrc" specified.`);
    }
    static get #d() {
      try {
        return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
      } catch {
        return null;
      }
    }
    static get _setupFakeWorkerGlobal() {
      return peers.hy(
        this,
        `_setupFakeWorkerGlobal`,
        (async () =>
          this.#d
            ? this.#d
            : (
                await peers.Ql(
                  () => import(this.workerSrc),
                  [],
                  import.meta.url,
                )
              ).WorkerMessageHandler)(),
      );
    }
  };
}
