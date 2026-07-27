// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xf`) / export `Zdt`.

export type WorkersModulePeers = {
  $Ye: (...args: unknown[]) => unknown;
  AYe: (...args: unknown[]) => unknown;
  AbortSignal: (...args: unknown[]) => unknown;
  AggregateError: (...args: unknown[]) => unknown;
  BYe: (...args: unknown[]) => unknown;
  Buffer: (...args: unknown[]) => unknown;
  CYe: (...args: unknown[]) => unknown;
  DYe: (...args: unknown[]) => unknown;
  EYe: (...args: unknown[]) => unknown;
  EvalError: (...args: unknown[]) => unknown;
  FYe: (...args: unknown[]) => unknown;
  Function: (...args: unknown[]) => unknown;
  GYe: (...args: unknown[]) => unknown;
  HYe: (...args: unknown[]) => unknown;
  Headers: (...args: unknown[]) => unknown;
  IYe: (...args: unknown[]) => unknown;
  JYe: (...args: unknown[]) => unknown;
  KYe: (...args: unknown[]) => unknown;
  LYe: (...args: unknown[]) => unknown;
  MYe: (...args: unknown[]) => unknown;
  NYe: (...args: unknown[]) => unknown;
  OYe: (...args: unknown[]) => unknown;
  QYe: (...args: unknown[]) => unknown;
  RYe: (...args: unknown[]) => unknown;
  RangeError: (...args: unknown[]) => unknown;
  ReadableStream: (...args: unknown[]) => unknown;
  ReferenceError: (...args: unknown[]) => unknown;
  Request: (...args: unknown[]) => unknown;
  Response: (...args: unknown[]) => unknown;
  SYe: (...args: unknown[]) => unknown;
  SyntaxError: (...args: unknown[]) => unknown;
  TYe: (...args: unknown[]) => unknown;
  TransformStream: (...args: unknown[]) => unknown;
  TypeError: (...args: unknown[]) => unknown;
  URIError: (...args: unknown[]) => unknown;
  UYe: (...args: unknown[]) => unknown;
  Uint8Array: (...args: unknown[]) => unknown;
  VYe: (...args: unknown[]) => unknown;
  WYe: (...args: unknown[]) => unknown;
  XYe: (...args: unknown[]) => unknown;
  YYe: (...args: unknown[]) => unknown;
  ZYe: (...args: unknown[]) => unknown;
  _f: (...args: unknown[]) => unknown;
  cf: (...args: unknown[]) => unknown;
  dXe: (...args: unknown[]) => unknown;
  df: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eXe: (...args: unknown[]) => unknown;
  fXe: (...args: unknown[]) => unknown;
  ff: (...args: unknown[]) => unknown;
  gXe: (...args: unknown[]) => unknown;
  gf: (...args: unknown[]) => unknown;
  hXe: (...args: unknown[]) => unknown;
  hf: (...args: unknown[]) => unknown;
  jYe: (...args: unknown[]) => unknown;
  kYe: (...args: unknown[]) => unknown;
  lXe: (...args: unknown[]) => unknown;
  lf: (...args: unknown[]) => unknown;
  mXe: (...args: unknown[]) => unknown;
  mf: (...args: unknown[]) => unknown;
  nXe: (...args: unknown[]) => unknown;
  oXe: (...args: unknown[]) => unknown;
  of: (...args: unknown[]) => unknown;
  pXe: (...args: unknown[]) => unknown;
  pf: (...args: unknown[]) => unknown;
  qYe: (...args: unknown[]) => unknown;
  rXe: (...args: unknown[]) => unknown;
  sXe: (...args: unknown[]) => unknown;
  sf: (...args: unknown[]) => unknown;
  tXe: (...args: unknown[]) => unknown;
  uXe: (...args: unknown[]) => unknown;
  uf: (...args: unknown[]) => unknown;
  vXe: (...args: unknown[]) => unknown;
  vf: (...args: unknown[]) => unknown;
  wYe: (...args: unknown[]) => unknown;
  yf: (...args: unknown[]) => unknown;
  zYe: (...args: unknown[]) => unknown;
};
let peers: WorkersModulePeers | null = null;

/** Wire workersModule peers once companions land. */
export function setWorkersModulePeers(next: WorkersModulePeers): void {
  peers = next;
}

/**
 * Bundle export `Zdt` / internal `xf`.
 */
export function workersModule() {
  if (peers == null) {
    throw new Error("workersModule peers are not configured");
  }
  return peers.e(() => {
    VYe = Symbol("workers-module");
    Symbol.dispose || (Symbol.dispose = Symbol.for("dispose"));
    Symbol.asyncDispose || (Symbol.asyncDispose = Symbol.for("asyncDispose"));
    Promise.withResolvers ||
      (Promise.withResolvers = function () {
        let e, t;
        return {
          promise: new Promise((n, r) => {
            e = n;
            t = r;
          }),
          resolve: e,
          reject: t,
        };
      });
    of = globalThis[peers.VYe];
    HYe = peers.of ? peers.of.RpcTarget : class {};
    UYe = async function () {}.constructor;
    WYe = typeof peers.Buffer < "u" ? peers.Buffer.prototype : undefined;
    GYe = {
      applyMap: peers.CYe,
      sendMap: peers.CYe,
    };
    sf = {
      createWritableStreamHook: peers.wYe,
      createWritableStreamFromHook: peers.wYe,
      createReadableStreamHook: peers.wYe,
    };
    cf = class {
      stream(e, t) {
        let n = this.call(e, t).pull(),
          r;
        return (
          n instanceof Promise
            ? (r = n.then((value) => {
                value.dispose();
              }))
            : (n.dispose(), (r = Promise.resolve())),
          {
            promise: r,
          }
        );
      }
    };
    lf = class extends peers.cf {
      constructor(e) {
        super();
        this.error = e;
      }
      call(e, t) {
        return this;
      }
      map(e, t, n) {
        return this;
      }
      get(e) {
        return this;
      }
      dup() {
        return this;
      }
      pull() {
        return Promise.reject(this.error);
      }
      ignoreUnhandledRejections() {}
      dispose() {}
      onBroken(e) {
        try {
          e(this.error);
        } catch (e) {
          Promise.resolve(e);
        }
      }
    };
    KYe = new peers.lf(
      Error("Attempted to use RPC stub after it has been disposed."),
    );
    qYe = (e, t, n) => {
      return e.call(t, n);
    };
    uf = Symbol("realStub");
    JYe = {
      apply(e, t, n) {
        let r = e.raw;
        return new peers.ff(
          peers.qYe(r.hook, r.pathIfPromise || [], peers.pf.fromAppParams(n)),
          [],
        );
      },
      get(e, t, n) {
        let r = e.raw;
        if (t === peers.uf) return r;
        if (t in peers.ff.prototype) return r[t];
        if (typeof t == "string")
          return new peers.ff(
            r.hook,
            r.pathIfPromise ? [...r.pathIfPromise, t] : [t],
          );
        if (
          t === Symbol.dispose &&
          (!r.pathIfPromise || r.pathIfPromise.length == 0)
        )
          return () => {
            r.hook.dispose();
            r.hook = peers.KYe;
          };
      },
      has(e, t) {
        let n = e.raw;
        return t === peers.uf
          ? true
          : t in peers.ff.prototype
            ? t in n
            : typeof t == "string"
              ? true
              : t === Symbol.dispose &&
                (!n.pathIfPromise || n.pathIfPromise.length == 0);
      },
      construct(e, t) {
        throw Error("An RPC stub cannot be used as a constructor.");
      },
      defineProperty(e, t, n) {
        throw Error("Can't define properties on RPC stubs.");
      },
      deleteProperty(e, t) {
        throw Error("Can't delete properties on RPC stubs.");
      },
      getOwnPropertyDescriptor(e, t) {},
      getPrototypeOf(e) {
        return Object.getPrototypeOf(e.raw);
      },
      isExtensible(e) {
        return false;
      },
      ownKeys(e) {
        return [];
      },
      preventExtensions(e) {
        return true;
      },
      set(e, t, n, r) {
        throw Error("Can't assign properties on RPC stubs.");
      },
      setPrototypeOf(e, t) {
        throw Error("Can't override prototype of RPC stubs.");
      },
    };
    df = class e extends peers.HYe {
      constructor(e, t) {
        if ((super(), !(e instanceof peers.cf))) {
          let n = e;
          if (
            ((e =
              n instanceof peers.HYe || n instanceof peers.Function
                ? peers.XYe.create(n, undefined)
                : new peers.mf(peers.pf.fromAppReturn(n))),
            t)
          )
            throw peers.TypeError(
              "RpcStub constructor expected one argument, received two.",
            );
        }
        this.hook = e;
        this.pathIfPromise = t;
        let n = () => {};
        return ((n.raw = this), new Proxy(n, peers.JYe));
      }
      hook;
      pathIfPromise;
      dup() {
        let t = this[peers.uf];
        return t.pathIfPromise
          ? new e(t.hook.get(t.pathIfPromise))
          : new e(t.hook.dup());
      }
      onRpcBroken(e) {
        this[peers.uf].hook.onBroken(e);
      }
      map(e) {
        let { hook, pathIfPromise } = this[peers.uf];
        return peers.GYe.sendMap(hook, pathIfPromise || [], e);
      }
      toString() {
        return "[object RpcStub]";
      }
    };
    ff = class extends peers.df {
      constructor(e, t) {
        super(e, t);
      }
      then(e, t) {
        return peers.jYe(this).then(...arguments);
      }
      catch(e) {
        return peers.jYe(this).catch(...arguments);
      }
      finally(e) {
        return peers.jYe(this).finally(...arguments);
      }
      toString() {
        return "[object RpcPromise]";
      }
    };
    pf = class e {
      constructor(e, t, n, r) {
        this.value = e;
        this.source = t;
        this.hooks = n;
        this.promises = r;
      }
      static fromAppParams(t) {
        return new e(t, "params");
      }
      static fromAppReturn(t) {
        return new e(t, "return");
      }
      static fromArray(t) {
        let n = [],
          r = [],
          i = [];
        for (let e of t) {
          e.ensureDeepCopied();
          for (let t of e.hooks) n.push(t);
          for (let t of e.promises) {
            t.parent === e &&
              (t = {
                parent: i,
                property: i.length,
                promise: t.promise,
              });
            r.push(t);
          }
          i.push(e.value);
        }
        return new e(i, "owned", n, r);
      }
      static forEvaluate(t, n) {
        return new e(null, "owned", t, n);
      }
      static deepCopyFrom(t, n, r) {
        let i = new e(null, "owned", [], []);
        return ((i.value = i.deepCopy(t, n, "value", i, true, r)), i);
      }
      rpcTargets;
      getHookForRpcTarget(e, t, n = true) {
        if (this.source === "params") {
          if (n) {
            let t = e;
            typeof t.dup == "function" && (e = t.dup());
          }
          return peers.XYe.create(e, t);
        } else if (this.source === "return") {
          let r = this.rpcTargets?.get(e);
          return r
            ? n
              ? r.dup()
              : (this.rpcTargets?.delete(e), r)
            : ((r = peers.XYe.create(e, t)),
              n
                ? ((this.rpcTargets ||= new Map()),
                  this.rpcTargets.set(e, r),
                  r.dup())
                : r);
        } else throw Error("owned payload shouldn't contain raw RpcTargets");
      }
      getHookForWritableStream(e, t, n = true) {
        if (this.source === "params")
          return peers.sf.createWritableStreamHook(e);
        if (this.source === "return") {
          let t = this.rpcTargets?.get(e);
          return t
            ? n
              ? t.dup()
              : (this.rpcTargets?.delete(e), t)
            : ((t = peers.sf.createWritableStreamHook(e)),
              n
                ? ((this.rpcTargets ||= new Map()),
                  this.rpcTargets.set(e, t),
                  t.dup())
                : t);
        } else
          throw Error("owned payload shouldn't contain raw WritableStreams");
      }
      getHookForReadableStream(e, t, n = true) {
        if (this.source === "params")
          return peers.sf.createReadableStreamHook(e);
        if (this.source === "return") {
          let t = this.rpcTargets?.get(e);
          return t
            ? n
              ? t.dup()
              : (this.rpcTargets?.delete(e), t)
            : ((t = peers.sf.createReadableStreamHook(e)),
              n
                ? ((this.rpcTargets ||= new Map()),
                  this.rpcTargets.set(e, t),
                  t.dup())
                : t);
        } else
          throw Error("owned payload shouldn't contain raw ReadableStreams");
      }
      deepCopy(e, t, n, r, i, a) {
        switch (peers.SYe(e)) {
          case "unsupported":
            return e;
          case "primitive":
          case "bigint":
          case "date":
          case "bytes":
          case "blob":
          case "error":
          case "undefined":
            return e;
          case "array": {
            let t = e,
              n = t.length,
              r = Array(n);
            for (let e = 0; e < n; e++)
              r[e] = this.deepCopy(t[e], t, e, r, i, a);
            return r;
          }
          case "object": {
            let t = {},
              n = e;
            for (let e in n) t[e] = this.deepCopy(n[e], n, e, t, i, a);
            return t;
          }
          case "stub":
          case "rpc-promise": {
            let t = e,
              a;
            if (
              ((a = i ? peers.DYe(t) : peers.EYe(t)), t instanceof peers.ff)
            ) {
              let e = new peers.ff(a, []);
              return (
                this.promises.push({
                  parent: r,
                  property: n,
                  promise: e,
                }),
                e
              );
            } else return (this.hooks.push(a), new peers.df(a));
          }
          case "function":
          case "rpc-target": {
            let n = e,
              r;
            return (
              (r = a ? a.getHookForRpcTarget(n, t, i) : peers.XYe.create(n, t)),
              this.hooks.push(r),
              new peers.df(r)
            );
          }
          case "rpc-thenable": {
            let o = e,
              s;
            return (
              (s = a
                ? new peers.ff(a.getHookForRpcTarget(o, t, i), [])
                : new peers.ff(peers.XYe.create(o, t), [])),
              this.promises.push({
                parent: r,
                property: n,
                promise: s,
              }),
              s
            );
          }
          case "writable": {
            let n = e,
              r;
            return (
              (r = a
                ? a.getHookForWritableStream(n, t, i)
                : peers.sf.createWritableStreamHook(n)),
              this.hooks.push(r),
              n
            );
          }
          case "readable": {
            let n = e,
              r;
            return (
              (r = a
                ? a.getHookForReadableStream(n, t, i)
                : peers.sf.createReadableStreamHook(n)),
              this.hooks.push(r),
              n
            );
          }
          case "headers":
            return new peers.Headers(e);
          case "request": {
            let t = e;
            return (
              t.body && this.deepCopy(t.body, t, "body", t, i, a),
              new peers.Request(t)
            );
          }
          case "response": {
            let t = e;
            return (
              t.body && this.deepCopy(t.body, t, "body", t, i, a),
              new peers.Response(t.body, t)
            );
          }
          default:
            throw Error("unreachable");
        }
      }
      ensureDeepCopied() {
        if (this.source !== "owned") {
          let e = this.source === "params";
          this.hooks = [];
          this.promises = [];
          try {
            this.value = this.deepCopy(
              this.value,
              undefined,
              "value",
              this,
              e,
              this,
            );
          } catch (e) {
            throw ((this.hooks = undefined), (this.promises = undefined), e);
          }
          if (
            ((this.source = "owned"),
            this.rpcTargets && this.rpcTargets.size > 0)
          )
            throw Error("Not all rpcTargets were accounted for in deep-copy?");
          this.rpcTargets = undefined;
        }
      }
      deliverTo(t, n, r) {
        if ((this.ensureDeepCopied(), this.value instanceof peers.ff))
          e.deliverRpcPromiseTo(this.value, t, n, r);
        else {
          t[n] = this.value;
          for (let t of this.promises)
            e.deliverRpcPromiseTo(t.promise, t.parent, t.property, r);
        }
      }
      static deliverRpcPromiseTo(t, n, r, i) {
        let a = peers.OYe(t);
        if (!a)
          throw Error("property promises should have been resolved earlier");
        let o = a.pull();
        o instanceof e
          ? o.deliverTo(n, r, i)
          : i.push(
              o.then((value) => {
                let t = [];
                if ((value.deliverTo(n, r, t), t.length > 0))
                  return Promise.all(t);
              }),
            );
      }
      async deliverCall(t, n) {
        try {
          let r = [];
          this.deliverTo(this, "value", r);
          r.length > 0 && (await Promise.all(r));
          let i = peers.Function.prototype.apply.call(t, n, this.value);
          return i instanceof peers.ff
            ? e.fromAppReturn(i)
            : e.fromAppReturn(await i);
        } finally {
          this.dispose();
        }
      }
      async deliverResolve() {
        try {
          let e = [];
          this.deliverTo(this, "value", e);
          e.length > 0 && (await Promise.all(e));
          let t = this.value;
          return (
            t instanceof Object &&
              (Symbol.dispose in t ||
                Object.defineProperty(t, Symbol.dispose, {
                  value: () => {
                    return this.dispose();
                  },
                  writable: true,
                  enumerable: false,
                  configurable: true,
                })),
            t
          );
        } catch (e) {
          throw (this.dispose(), e);
        }
      }
      dispose() {
        if (this.source === "owned") {
          this.hooks.forEach((item) => {
            return item.dispose();
          });
          this.promises.forEach((item) => {
            return item.promise[Symbol.dispose]();
          });
        } else if (
          this.source === "return" &&
          (this.disposeImpl(this.value, undefined),
          this.rpcTargets && this.rpcTargets.size > 0)
        )
          throw Error(
            "Not all rpcTargets were accounted for in disposeImpl()?",
          );
        this.source = "owned";
        this.hooks = [];
        this.promises = [];
      }
      disposeImpl(e, t) {
        switch (peers.SYe(e)) {
          case "unsupported":
          case "primitive":
          case "bigint":
          case "bytes":
          case "blob":
          case "date":
          case "error":
          case "undefined":
            return;
          case "array": {
            let t = e,
              n = t.length;
            for (let e = 0; e < n; e++) this.disposeImpl(t[e], t);
            return;
          }
          case "object": {
            let t = e;
            for (let e in t) this.disposeImpl(t[e], t);
            return;
          }
          case "stub":
          case "rpc-promise": {
            let t = peers.OYe(e);
            t && t.dispose();
            return;
          }
          case "function":
          case "rpc-target": {
            let t = e,
              n = this.rpcTargets?.get(t);
            n ? (n.dispose(), this.rpcTargets.delete(t)) : peers.NYe(t);
            return;
          }
          case "rpc-thenable":
            return;
          case "headers":
            return;
          case "request": {
            let t = e;
            t.body && this.disposeImpl(t.body, t);
            return;
          }
          case "response": {
            let t = e;
            t.body && this.disposeImpl(t.body, t);
            return;
          }
          case "writable": {
            let t = e,
              n = this.rpcTargets?.get(t);
            n
              ? this.rpcTargets.delete(t)
              : (n = peers.sf.createWritableStreamHook(t));
            n.dispose();
            return;
          }
          case "readable": {
            let t = e,
              n = this.rpcTargets?.get(t);
            n
              ? this.rpcTargets.delete(t)
              : (n = peers.sf.createReadableStreamHook(t));
            n.dispose();
            return;
          }
          default:
            return;
        }
      }
      ignoreUnhandledRejections() {
        this.hooks
          ? (this.hooks.forEach((item) => {
              item.ignoreUnhandledRejections();
            }),
            this.promises.forEach((item) => {
              return peers.kYe(item.promise).ignoreUnhandledRejections();
            }))
          : this.ignoreUnhandledRejectionsImpl(this.value);
      }
      ignoreUnhandledRejectionsImpl(e) {
        switch (peers.SYe(e)) {
          case "unsupported":
          case "primitive":
          case "bigint":
          case "bytes":
          case "blob":
          case "date":
          case "error":
          case "undefined":
          case "function":
          case "rpc-target":
          case "writable":
          case "readable":
          case "headers":
          case "request":
          case "response":
            return;
          case "array": {
            let t = e,
              n = t.length;
            for (let e = 0; e < n; e++)
              this.ignoreUnhandledRejectionsImpl(t[e]);
            return;
          }
          case "object": {
            let t = e;
            for (let e in t) this.ignoreUnhandledRejectionsImpl(t[e]);
            return;
          }
          case "stub":
          case "rpc-promise":
            peers.kYe(e).ignoreUnhandledRejections();
            return;
          case "rpc-thenable":
            e.then(
              (value) => {},
              (e) => {},
            );
            return;
          default:
            return;
        }
      }
    };
    YYe = class extends peers.cf {
      call(e, t) {
        try {
          let { value, owner } = this.getValue(),
            i = peers.MYe(value, undefined, e, owner);
          if (i.hook) return i.hook.call(i.remainingPath, t);
          if (typeof i.value != "function")
            throw peers.TypeError(`'${e.join(".")}' is not a function.`);
          return new peers.ZYe(
            t.deliverCall(i.value, i.parent).then((_value) => {
              return new peers.mf(_value);
            }),
          );
        } catch (e) {
          return new peers.lf(e);
        }
      }
      map(e, t, n) {
        try {
          let r;
          try {
            let { value, owner } = this.getValue();
            r = peers.MYe(value, undefined, e, owner);
          } catch (e) {
            for (let e of t) e.dispose();
            throw e;
          }
          return r.hook
            ? r.hook.map(r.remainingPath, t, n)
            : peers.GYe.applyMap(r.value, r.parent, r.owner, t, n);
        } catch (e) {
          return new peers.lf(e);
        }
      }
      get(e) {
        try {
          let { value, owner } = this.getValue();
          if (e.length === 0 && owner === null)
            throw Error("Can't dup an RpcTarget stub as a promise.");
          let r = peers.MYe(value, undefined, e, owner);
          return r.hook
            ? r.hook.get(r.remainingPath)
            : new peers.mf(peers.pf.deepCopyFrom(r.value, r.parent, r.owner));
        } catch (e) {
          return new peers.lf(e);
        }
      }
    };
    mf = class e extends peers.YYe {
      constructor(e) {
        super();
        this.payload = e;
      }
      payload;
      getPayload() {
        if (this.payload) return this.payload;
        throw Error("Attempted to use an RPC StubHook after it was disposed.");
      }
      getValue() {
        let e = this.getPayload();
        return {
          value: e.value,
          owner: e,
        };
      }
      dup() {
        let t = this.getPayload();
        return new e(peers.pf.deepCopyFrom(t.value, undefined, t));
      }
      pull() {
        return this.getPayload();
      }
      ignoreUnhandledRejections() {
        this.payload && this.payload.ignoreUnhandledRejections();
      }
      dispose() {
        this.payload &&= (this.payload.dispose(), undefined);
      }
      onBroken(e) {
        this.payload &&
          this.payload.value instanceof peers.df &&
          this.payload.value.onRpcBroken(e);
      }
    };
    XYe = class e extends peers.YYe {
      static create(t, n) {
        return (typeof t != "function" && (n = undefined), new e(t, n));
      }
      constructor(e, t, n) {
        super();
        this.target = e;
        this.parent = t;
        n
          ? n.refcount && ((this.refcount = n.refcount), ++this.refcount.count)
          : Symbol.dispose in e &&
            (this.refcount = {
              count: 1,
            });
      }
      target;
      parent;
      refcount;
      getTarget() {
        if (this.target) return this.target;
        throw Error("Attempted to use an RPC StubHook after it was disposed.");
      }
      getValue() {
        return {
          value: this.getTarget(),
          owner: null,
        };
      }
      dup() {
        return new e(this.getTarget(), this.parent, this);
      }
      pull() {
        let e = this.getTarget();
        return "then" in e
          ? Promise.resolve(e).then((value) => {
              return peers.pf.fromAppReturn(value);
            })
          : Promise.reject(Error("Tried to resolve a non-promise stub."));
      }
      ignoreUnhandledRejections() {}
      dispose() {
        this.target &&=
          (this.refcount &&
            --this.refcount.count == 0 &&
            peers.NYe(this.target),
          undefined);
      }
      onBroken(e) {}
    };
    ZYe = class e extends peers.cf {
      promise;
      resolution;
      constructor(e) {
        super();
        this.promise = e.then((value) => {
          return ((this.resolution = value), value);
        });
      }
      call(t, n) {
        return (
          n.ensureDeepCopied(),
          new e(
            this.promise.then((value) => {
              return value.call(t, n);
            }),
          )
        );
      }
      stream(e, t) {
        return (
          t.ensureDeepCopied(),
          {
            promise: this.promise.then((value) => {
              return value.stream(e, t).promise;
            }),
          }
        );
      }
      map(t, n, r) {
        return new e(
          this.promise.then(
            (value) => {
              return value.map(t, n, r);
            },
            (e) => {
              for (let e of n) e.dispose();
              throw e;
            },
          ),
        );
      }
      get(t) {
        return new e(
          this.promise.then((value) => {
            return value.get(t);
          }),
        );
      }
      dup() {
        return this.resolution
          ? this.resolution.dup()
          : new e(
              this.promise.then((value) => {
                return value.dup();
              }),
            );
      }
      pull() {
        return this.resolution
          ? this.resolution.pull()
          : this.promise.then((value) => {
              return value.pull();
            });
      }
      ignoreUnhandledRejections() {
        this.resolution
          ? this.resolution.ignoreUnhandledRejections()
          : this.promise.then(
              (value) => {
                value.ignoreUnhandledRejections();
              },
              (e) => {},
            );
      }
      dispose() {
        this.resolution
          ? this.resolution.dispose()
          : this.promise.then(
              (value) => {
                value.dispose();
              },
              (e) => {},
            );
      }
      onBroken(e) {
        this.resolution
          ? this.resolution.onBroken(e)
          : this.promise.then((value) => {
              value.onBroken(e);
            }, e);
      }
    };
    QYe = class {
      exportStub(e) {
        throw Error("Cannot serialize RPC stubs without an RPC session.");
      }
      exportPromise(e) {
        throw Error("Cannot serialize RPC stubs without an RPC session.");
      }
      getImport(e) {}
      unexport(e) {}
      createPipe(e) {
        throw Error("Cannot create pipes without an RPC session.");
      }
      onSendError(e) {}
    };
    $Ye = new peers.QYe();
    eXe = {
      Error,
      EvalError: peers.EvalError,
      RangeError: peers.RangeError,
      ReferenceError: peers.ReferenceError,
      SyntaxError: peers.SyntaxError,
      TypeError: peers.TypeError,
      URIError: peers.URIError,
      AggregateError: peers.AggregateError,
    };
    hf = class e {
      constructor(e, t) {
        this.exporter = e;
        this.source = t;
      }
      static devaluate(t, n, r = peers.$Ye, i) {
        let a = new e(r, i);
        try {
          return a.devaluateImpl(t, n, 0);
        } catch (e) {
          if (a.exports)
            try {
              r.unexport(a.exports);
            } catch {}
          throw e;
        }
      }
      exports;
      devaluateImpl(e, t, n) {
        if (n >= 64)
          throw Error(
            "Serialization exceeded maximum allowed depth. (Does the message contain cycles?)",
          );
        switch (peers.SYe(e)) {
          case "unsupported": {
            let t;
            try {
              t = `Cannot serialize value: ${e}`;
            } catch {
              t = "Cannot serialize value: (couldn't stringify value)";
            }
            throw peers.TypeError(t);
          }
          case "primitive":
            return typeof e == "number" && !isFinite(e)
              ? e === 1 / 0
                ? ["inf"]
                : e === -1 / 0
                  ? ["-inf"]
                  : ["nan"]
              : e;
          case "object": {
            let t = e,
              r = {};
            for (let e in t) r[e] = this.devaluateImpl(t[e], t, n + 1);
            return r;
          }
          case "array": {
            let t = e,
              r = t.length,
              i = Array(r);
            for (let e = 0; e < r; e++)
              i[e] = this.devaluateImpl(t[e], t, n + 1);
            return [i];
          }
          case "bigint":
            return ["bigint", e.toString()];
          case "date": {
            let t = e.getTime();
            return ["date", Number.isNaN(t) ? null : t];
          }
          case "bytes": {
            let t = e;
            if (t.toBase64)
              return [
                "bytes",
                t.toBase64({
                  omitPadding: true,
                }),
              ];
            let n;
            if (typeof peers.Buffer < "u")
              n = (
                t instanceof peers.Buffer
                  ? t
                  : peers.Buffer.from(t.buffer, t.byteOffset, t.byteLength)
              ).toString("base64");
            else {
              let e = "";
              for (let n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
              n = btoa(e);
            }
            return ["bytes", n.replace(/=+$/, "")];
          }
          case "headers":
            return ["headers", [...e]];
          case "request": {
            let t = e,
              r = {};
            t.method !== "GET" && (r.method = t.method);
            let i = [...t.headers];
            if ((i.length > 0 && (r.headers = i), t.body)) {
              r.body = this.devaluateImpl(t.body, t, n + 1);
              r.duplex = t.duplex || "half";
            } else if (
              t.body === undefined &&
              !["GET", "HEAD", "OPTIONS", "TRACE", "DELETE"].includes(t.method)
            ) {
              let e = t.arrayBuffer(),
                n = new peers.ReadableStream({
                  async start(t) {
                    try {
                      t.enqueue(new peers.Uint8Array(await e));
                      t.close();
                    } catch (e) {
                      t.error(e);
                    }
                  },
                }),
                i = peers.sf.createReadableStreamHook(n);
              r.body = ["readable", this.exporter.createPipe(n, i)];
              r.duplex = t.duplex || "half";
            }
            t.cache && t.cache !== "default" && (r.cache = t.cache);
            t.redirect !== "follow" && (r.redirect = t.redirect);
            t.integrity && (r.integrity = t.integrity);
            t.mode && t.mode !== "cors" && (r.mode = t.mode);
            t.credentials &&
              t.credentials !== "same-origin" &&
              (r.credentials = t.credentials);
            t.referrer &&
              t.referrer !== "about:client" &&
              (r.referrer = t.referrer);
            t.referrerPolicy && (r.referrerPolicy = t.referrerPolicy);
            t.keepalive && (r.keepalive = t.keepalive);
            let a = t;
            return (
              a.cf && (r.cf = a.cf),
              a.encodeResponseBody &&
                a.encodeResponseBody !== "automatic" &&
                (r.encodeResponseBody = a.encodeResponseBody),
              ["request", t.url, r]
            );
          }
          case "response": {
            let t = e,
              r = this.devaluateImpl(t.body, t, n + 1),
              i = {};
            t.status !== 200 && (i.status = t.status);
            t.statusText && (i.statusText = t.statusText);
            let a = [...t.headers];
            a.length > 0 && (i.headers = a);
            let o = t;
            if (
              (o.cf && (i.cf = o.cf),
              o.encodeBody &&
                o.encodeBody !== "automatic" &&
                (i.encodeBody = o.encodeBody),
              o.webSocket)
            )
              throw peers.TypeError(
                "Can't serialize a Response containing a webSocket.",
              );
            return ["response", r, i];
          }
          case "blob": {
            let t = e,
              n = t.stream(),
              r = peers.sf.createReadableStreamHook(n),
              i = this.exporter.createPipe(n, r);
            return ["blob", t.type, ["readable", i]];
          }
          case "error": {
            let t = e,
              r = this.exporter.onSendError(t);
            r && (t = r);
            let i = t,
              a,
              o = (e, r) => {
                let i = this.exports?.length ?? 0;
                try {
                  let i = this.devaluateImpl(r, t, n + 1);
                  a ||= {};
                  a[e] = i;
                } catch {
                  if (this.exports && this.exports.length > i) {
                    let e = this.exports.splice(i);
                    try {
                      this.exporter.unexport(e);
                    } catch {}
                  }
                }
              };
            for (let e of Object.keys(t))
              e === "name" || e === "message" || e === "stack" || o(e, i[e]);
            "cause" in t && o("cause", i.cause);
            t instanceof peers.AggregateError && o("errors", t.errors);
            let s = ["error", t.name, t.message];
            return (
              a
                ? (s.push(r && r.stack ? r.stack : null), s.push(a))
                : r && r.stack && s.push(r.stack),
              s
            );
          }
          case "undefined":
            return ["undefined"];
          case "stub":
          case "rpc-promise": {
            if (!this.source)
              throw Error("Can't serialize RPC stubs in this context.");
            let { hook, pathIfPromise } = peers.AYe(e),
              r = this.exporter.getImport(hook);
            return r === undefined
              ? ((hook = pathIfPromise ? hook.get(pathIfPromise) : hook.dup()),
                this.devaluateHook(pathIfPromise ? "promise" : "export", hook))
              : pathIfPromise
                ? pathIfPromise.length > 0
                  ? ["pipeline", r, pathIfPromise]
                  : ["pipeline", r]
                : ["import", r];
          }
          case "function":
          case "rpc-target": {
            if (!this.source)
              throw Error("Can't serialize RPC stubs in this context.");
            let n = this.source.getHookForRpcTarget(e, t);
            return this.devaluateHook("export", n);
          }
          case "rpc-thenable": {
            if (!this.source)
              throw Error("Can't serialize RPC stubs in this context.");
            let n = this.source.getHookForRpcTarget(e, t);
            return this.devaluateHook("promise", n);
          }
          case "writable": {
            if (!this.source)
              throw Error("Can't serialize WritableStream in this context.");
            let n = this.source.getHookForWritableStream(e, t);
            return this.devaluateHook("writable", n);
          }
          case "readable": {
            if (!this.source)
              throw Error("Can't serialize ReadableStream in this context.");
            let n = e,
              r = this.source.getHookForReadableStream(n, t);
            return ["readable", this.exporter.createPipe(n, r)];
          }
          default:
            throw Error("unreachable");
        }
      }
      devaluateHook(e, t) {
        this.exports ||= [];
        let n =
          e === "promise"
            ? this.exporter.exportPromise(t)
            : this.exporter.exportStub(t);
        return (this.exports.push(n), [e, n]);
      }
    };
    tXe = class {
      importStub(e) {
        throw Error("Cannot deserialize RPC stubs without an RPC session.");
      }
      importPromise(e) {
        throw Error("Cannot deserialize RPC stubs without an RPC session.");
      }
      getExport(e) {}
      getPipeReadable(e) {
        throw Error("Cannot retrieve pipe readable without an RPC session.");
      }
    };
    new peers.tXe();
    gf = class e {
      constructor(e) {
        this.importer = e;
      }
      hooks = [];
      promises = [];
      evaluate(e) {
        let t = peers.pf.forEvaluate(this.hooks, this.promises);
        try {
          return ((t.value = this.evaluateImpl(e, t, "value")), t);
        } catch (e) {
          throw (t.dispose(), e);
        }
      }
      evaluateCopy(e) {
        return this.evaluate(structuredClone(e));
      }
      evaluateImpl(t, n, r) {
        if (t instanceof Array) {
          if (t.length == 1 && t[0] instanceof Array) {
            let e = t[0];
            for (let t = 0; t < e.length; t++)
              e[t] = this.evaluateImpl(e[t], e, t);
            return e;
          } else
            switch (t[0]) {
              case "bigint":
                if (typeof t[1] == "string") return BigInt(t[1]);
                break;
              case "date":
                if (t[1] === null) return new Date(NaN);
                if (typeof t[1] == "number") return new Date(t[1]);
                break;
              case "bytes":
                if (typeof t[1] == "string") {
                  if (typeof peers.Buffer < "u")
                    return peers.Buffer.from(t[1], "base64");
                  if (peers.Uint8Array.fromBase64)
                    return peers.Uint8Array.fromBase64(t[1]);
                  {
                    let e = atob(t[1]),
                      n = e.length,
                      r = new peers.Uint8Array(n);
                    for (let t = 0; t < n; t++) r[t] = e.charCodeAt(t);
                    return r;
                  }
                }
                break;
              case "error":
                if (
                  t.length >= 3 &&
                  typeof t[1] == "string" &&
                  typeof t[2] == "string"
                ) {
                  let e = peers.eXe[t[1]] || Error,
                    n =
                      e === peers.AggregateError
                        ? new e([], t[2])
                        : new e(t[2]);
                  if (
                    (typeof t[3] == "string" && (n.stack = t[3]), t.length >= 5)
                  ) {
                    let e = t[4];
                    if (!e || typeof e != "object" || Array.isArray(e)) break;
                    let r = n,
                      i = e;
                    for (let e of Object.keys(i))
                      e === "name" ||
                        e === "message" ||
                        e === "stack" ||
                        (r[e] = this.evaluateImpl(i[e], n, e));
                  }
                  return n;
                }
                break;
              case "undefined":
                if (t.length === 1) return;
                break;
              case "inf":
                return 1 / 0;
              case "-inf":
                return -1 / 0;
              case "nan":
                return NaN;
              case "headers":
                if (t.length === 2 && t[1] instanceof Array)
                  return new peers.Headers(t[1]);
                break;
              case "request": {
                if (t.length !== 3 || typeof t[1] != "string") break;
                let e = t[1],
                  i = t[2];
                if (typeof i != "object" || !i) break;
                if (
                  i.body &&
                  ((i.body = this.evaluateImpl(i.body, i, "body")),
                  !(
                    i.body === null ||
                    typeof i.body == "string" ||
                    i.body instanceof peers.Uint8Array ||
                    i.body instanceof peers.ReadableStream
                  ))
                )
                  throw peers.TypeError(
                    "Request body must be of type ReadableStream.",
                  );
                if (
                  i.signal &&
                  ((i.signal = this.evaluateImpl(i.signal, i, "signal")),
                  !(i.signal instanceof peers.AbortSignal))
                )
                  throw peers.TypeError(
                    "Request siganl must be of type AbortSignal.",
                  );
                if (i.headers && !(i.headers instanceof Array))
                  throw peers.TypeError(
                    "Request headers must be serialized as an array of pairs.",
                  );
                let a = new peers.Request(e, i);
                if (
                  i.body instanceof peers.ReadableStream &&
                  a.body === undefined
                ) {
                  let e = peers.FYe(a, i.body);
                  return (
                    this.promises.push({
                      promise: e,
                      parent: n,
                      property: r,
                    }),
                    e
                  );
                } else return a;
              }
              case "response": {
                if (t.length !== 3) break;
                let e = this.evaluateImpl(t[1], n, r);
                if (
                  !(
                    e === null ||
                    typeof e == "string" ||
                    e instanceof peers.Uint8Array ||
                    e instanceof peers.ReadableStream
                  )
                )
                  throw peers.TypeError(
                    "Response body must be of type ReadableStream.",
                  );
                let i = t[2];
                if (typeof i != "object" || !i) break;
                if (i.webSocket)
                  throw peers.TypeError(
                    "Can't deserialize a Response containing a webSocket.",
                  );
                if (i.headers && !(i.headers instanceof Array))
                  throw peers.TypeError(
                    "Request headers must be serialized as an array of pairs.",
                  );
                return new peers.Response(e, i);
              }
              case "blob": {
                if (t.length !== 3 || typeof t[1] != "string") break;
                let e = t[1],
                  i = this.evaluateImpl(t[2], n, r);
                if (!(i instanceof peers.ReadableStream))
                  throw peers.TypeError(
                    "Blob content must be serialized as a ReadableStream.",
                  );
                let a = peers.IYe(i, e);
                return (
                  this.promises.push({
                    promise: a,
                    parent: n,
                    property: r,
                  }),
                  a
                );
              }
              case "import":
              case "pipeline": {
                if (t.length < 2 || t.length > 4 || typeof t[1] != "number")
                  break;
                let i = this.importer.getExport(t[1]);
                if (!i) throw Error(`no such entry on exports table: ${t[1]}`);
                let a = t[0] == "pipeline",
                  o = (e) => {
                    if (a) {
                      let t = new peers.ff(e, []);
                      return (
                        this.promises.push({
                          promise: t,
                          parent: n,
                          property: r,
                        }),
                        t
                      );
                    } else return (this.hooks.push(e), new peers.ff(e, []));
                  };
                if (t.length == 2) return o(a ? i.get([]) : i.dup());
                let s = t[2];
                if (
                  !(s instanceof Array) ||
                  !s.every((item) => {
                    return typeof item == "string" || typeof item == "number";
                  })
                )
                  break;
                if (t.length == 3) return o(i.get(s));
                let c = t[3];
                if (!(c instanceof Array)) break;
                return (
                  (c = new e(this.importer).evaluate([c])),
                  o(i.call(s, c))
                );
              }
              case "remap": {
                if (
                  t.length !== 5 ||
                  typeof t[1] != "number" ||
                  !(t[2] instanceof Array) ||
                  !(t[3] instanceof Array) ||
                  !(t[4] instanceof Array)
                )
                  break;
                let e = this.importer.getExport(t[1]);
                if (!e) throw Error(`no such entry on exports table: ${t[1]}`);
                let i = t[2];
                if (
                  !i.every((item) => {
                    return typeof item == "string" || typeof item == "number";
                  })
                )
                  break;
                let a = t[3].map((item) => {
                    if (
                      !(item instanceof Array) ||
                      item.length !== 2 ||
                      (item[0] !== "import" && item[0] !== "export") ||
                      typeof item[1] != "number"
                    )
                      throw peers.TypeError(
                        `unknown map capture: ${JSON.stringify(item)}`,
                      );
                    if (item[0] === "export")
                      return this.importer.importStub(item[1]);
                    {
                      let t = this.importer.getExport(item[1]);
                      if (!t)
                        throw Error(
                          `no such entry on exports table: ${item[1]}`,
                        );
                      return t.dup();
                    }
                  }),
                  o = t[4],
                  s = new peers.ff(e.map(i, a, o), []);
                return (
                  this.promises.push({
                    promise: s,
                    parent: n,
                    property: r,
                  }),
                  s
                );
              }
              case "export":
              case "promise":
                if (typeof t[1] == "number")
                  if (t[0] == "promise") {
                    let e = new peers.ff(this.importer.importPromise(t[1]), []);
                    return (
                      this.promises.push({
                        parent: n,
                        property: r,
                        promise: e,
                      }),
                      e
                    );
                  } else {
                    let e = this.importer.importStub(t[1]);
                    return (this.hooks.push(e), new peers.df(e));
                  }
                break;
              case "writable":
                if (typeof t[1] == "number") {
                  let e = this.importer.importStub(t[1]),
                    n = peers.sf.createWritableStreamFromHook(e);
                  return (this.hooks.push(e), n);
                }
                break;
              case "readable":
                if (typeof t[1] == "number") {
                  let e = this.importer.getPipeReadable(t[1]),
                    n = peers.sf.createReadableStreamHook(e);
                  return (this.hooks.push(n), e);
                }
                break;
            }
          throw peers.TypeError(`unknown special value: ${JSON.stringify(t)}`);
        } else if (t instanceof Object) {
          let e = t;
          for (let t in e)
            t in Object.prototype || t === "toJSON"
              ? (this.evaluateImpl(e[t], e, t), delete e[t])
              : (e[t] = this.evaluateImpl(e[t], e, t));
          return e;
        } else return t;
      }
    };
    _f = class {
      constructor(e, t, n) {
        this.session = e;
        this.importId = t;
        n && (this.activePull = Promise.withResolvers());
      }
      localRefcount = 0;
      remoteRefcount = 1;
      activePull;
      resolution;
      onBrokenRegistrations;
      resolve(e) {
        if (this.localRefcount == 0) {
          e.dispose();
          return;
        }
        if (
          ((this.resolution = e),
          this.sendRelease(),
          this.onBrokenRegistrations)
        ) {
          for (let t of this.onBrokenRegistrations) {
            let n = this.session.onBrokenCallbacks[t],
              r = this.session.onBrokenCallbacks.length;
            e.onBroken(n);
            this.session.onBrokenCallbacks[r] === n
              ? delete this.session.onBrokenCallbacks[r]
              : delete this.session.onBrokenCallbacks[t];
          }
          this.onBrokenRegistrations = undefined;
        }
        this.activePull &&= (this.activePull.resolve(), undefined);
      }
      async awaitResolution() {
        return (
          (this.activePull ||=
            (this.session.sendPull(this.importId), Promise.withResolvers())),
          await this.activePull.promise,
          this.resolution.pull()
        );
      }
      dispose() {
        this.resolution
          ? this.resolution.dispose()
          : (this.abort(
              Error("RPC was canceled because the RpcPromise was disposed."),
            ),
            this.sendRelease());
      }
      abort(e) {
        this.resolution ||
          ((this.resolution = new peers.lf(e)),
          (this.activePull &&= (this.activePull.reject(e), undefined)),
          (this.onBrokenRegistrations = undefined));
      }
      onBroken(e) {
        if (this.resolution) this.resolution.onBroken(e);
        else {
          let t = this.session.onBrokenCallbacks.length;
          this.session.onBrokenCallbacks.push(e);
          this.onBrokenRegistrations ||= [];
          this.onBrokenRegistrations.push(t);
        }
      }
      sendRelease() {
        this.remoteRefcount > 0 &&
          (this.session.sendRelease(this.importId, this.remoteRefcount),
          (this.remoteRefcount = 0));
      }
    };
    vf = class e extends peers.cf {
      constructor(e, t) {
        super();
        this.isPromise = e;
        ++t.localRefcount;
        this.entry = t;
      }
      entry;
      collectPath(e) {
        return this;
      }
      getEntry() {
        if (this.entry) return this.entry;
        throw Error("This RpcImportHook was already disposed.");
      }
      call(e, t) {
        let n = this.getEntry();
        return n.resolution
          ? n.resolution.call(e, t)
          : n.session.sendCall(n.importId, e, t);
      }
      stream(e, t) {
        let n = this.getEntry();
        return n.resolution
          ? n.resolution.stream(e, t)
          : n.session.sendStream(n.importId, e, t);
      }
      map(e, t, n) {
        let r;
        try {
          r = this.getEntry();
        } catch (e) {
          for (let e of t) e.dispose();
          throw e;
        }
        return r.resolution
          ? r.resolution.map(e, t, n)
          : r.session.sendMap(r.importId, e, t, n);
      }
      get(e) {
        let t = this.getEntry();
        return t.resolution
          ? t.resolution.get(e)
          : t.session.sendCall(t.importId, e);
      }
      dup() {
        return new e(false, this.getEntry());
      }
      pull() {
        let e = this.getEntry();
        if (!this.isPromise)
          throw Error("Can't pull this hook because it's not a promise hook.");
        return e.resolution ? e.resolution.pull() : e.awaitResolution();
      }
      ignoreUnhandledRejections() {}
      dispose() {
        let e = this.entry;
        this.entry = undefined;
        e && --e.localRefcount === 0 && e.dispose();
      }
      onBroken(e) {
        this.entry && this.entry.onBroken(e);
      }
    };
    nXe = class extends peers.vf {
      session;
      constructor(e) {
        super(false, e);
        this.session = e.session;
      }
      dispose() {
        if (this.session) {
          let e = this.session;
          this.session = undefined;
          e.shutdown();
        }
      }
    };
    rXe = class {
      constructor(e, t, n) {
        this.transport = e;
        this.options = n;
        this.exports.push({
          hook: t,
          refcount: 1,
        });
        this.imports.push(new peers._f(this, 0, false));
        this.readLoop().catch((error) => {
          return this.abort(error);
        });
      }
      exports = [];
      reverseExports = new Map();
      imports = [];
      abortReason;
      cancelReadLoop;
      nextExportId = -1;
      onBatchDone;
      pullCount = 0;
      onBrokenCallbacks = [];
      getMainImport() {
        return new peers.nXe(this.imports[0]);
      }
      shutdown() {
        this.abort(
          Error("RPC session was shut down by disposing the main stub"),
          false,
        );
      }
      exportStub(e) {
        if (this.abortReason) throw this.abortReason;
        let t = this.reverseExports.get(e);
        if (t !== undefined) return (++this.exports[t].refcount, t);
        {
          let t = this.nextExportId--;
          return (
            (this.exports[t] = {
              hook: e,
              refcount: 1,
            }),
            this.reverseExports.set(e, t),
            t
          );
        }
      }
      exportPromise(e) {
        if (this.abortReason) throw this.abortReason;
        let t = this.nextExportId--;
        return (
          (this.exports[t] = {
            hook: e,
            refcount: 1,
          }),
          this.reverseExports.set(e, t),
          this.ensureResolvingExport(t),
          t
        );
      }
      unexport(e) {
        for (let t of e) this.releaseExport(t, 1);
      }
      releaseExport(e, t) {
        let n = this.exports[e];
        if (!n) throw Error(`no such export ID: ${e}`);
        if (n.refcount < t)
          throw Error(`refcount would go negative: ${n.refcount} < ${t}`);
        n.refcount -= t;
        n.refcount === 0 &&
          (delete this.exports[e],
          this.reverseExports.delete(n.hook),
          n.hook.dispose());
      }
      onSendError(e) {
        if (this.options.onSendError) return this.options.onSendError(e);
      }
      ensureResolvingExport(e) {
        let t = this.exports[e];
        if (!t) throw Error(`no such export ID: ${e}`);
        if (!t.pull) {
          let n = async () => {
              let e = t.hook;
              for (;;) {
                let t = await e.pull();
                if (t.value instanceof peers.df) {
                  let { hook, pathIfPromise } = peers.AYe(t.value);
                  if (
                    pathIfPromise &&
                    pathIfPromise.length == 0 &&
                    this.getImport(e) === undefined
                  ) {
                    e = hook;
                    continue;
                  }
                }
                return t;
              }
            },
            r = t.autoRelease;
          ++this.pullCount;
          t.pull = n()
            .then(
              (value) => {
                let n = peers.hf.devaluate(value.value, undefined, this, value);
                this.send(["resolve", e, n]);
                r && this.releaseExport(e, 1);
              },
              (t) => {
                this.send([
                  "reject",
                  e,
                  peers.hf.devaluate(t, undefined, this),
                ]);
                r && this.releaseExport(e, 1);
              },
            )
            .catch((error) => {
              try {
                this.send([
                  "reject",
                  e,
                  peers.hf.devaluate(error, undefined, this),
                ]);
                r && this.releaseExport(e, 1);
              } catch (e) {
                this.abort(e);
              }
            })
            .finally(() => {
              --this.pullCount === 0 &&
                this.onBatchDone &&
                this.onBatchDone.resolve();
            });
        }
      }
      getImport(e) {
        if (e instanceof peers.vf && e.entry && e.entry.session === this)
          return e.entry.importId;
      }
      importStub(e) {
        if (this.abortReason) throw this.abortReason;
        let t = this.imports[e];
        return (
          t || ((t = new peers._f(this, e, false)), (this.imports[e] = t)),
          new peers.vf(false, t)
        );
      }
      importPromise(e) {
        if (this.abortReason) throw this.abortReason;
        if (this.imports[e])
          return new peers.lf(
            Error(
              "Bug in RPC system: The peer sent a promise reusing an existing export ID.",
            ),
          );
        let t = new peers._f(this, e, true);
        return ((this.imports[e] = t), new peers.vf(true, t));
      }
      getExport(e) {
        return this.exports[e]?.hook;
      }
      getPipeReadable(e) {
        let t = this.exports[e];
        if (!t || !t.pipeReadable)
          throw Error(
            `Export ${e} is not a pipe or its readable end was already consumed.`,
          );
        let n = t.pipeReadable;
        return ((t.pipeReadable = undefined), n);
      }
      createPipe(e, t) {
        if (this.abortReason) throw this.abortReason;
        this.send(["pipe"]);
        let n = this.imports.length,
          r = new peers._f(this, n, false);
        this.imports.push(r);
        let i = new peers.vf(false, r),
          a = peers.sf.createWritableStreamFromHook(i);
        return (
          e
            .pipeTo(a)
            .catch(() => {})
            .finally(() => {
              return t.dispose();
            }),
          n
        );
      }
      send(e) {
        if (this.abortReason !== undefined) return 0;
        let t;
        try {
          t = JSON.stringify(e);
        } catch (e) {
          try {
            this.abort(e);
          } catch {}
          throw e;
        }
        return (
          this.transport.send(t).catch((error) => {
            return this.abort(error, false);
          }),
          t.length
        );
      }
      sendCall(e, t, n) {
        if (this.abortReason) throw this.abortReason;
        let r = ["pipeline", e, t];
        if (n) {
          let e = peers.hf.devaluate(n.value, undefined, this, n);
          r.push(e[0]);
        }
        this.send(["push", r]);
        let i = new peers._f(this, this.imports.length, false);
        return (this.imports.push(i), new peers.vf(true, i));
      }
      sendStream(e, t, n) {
        if (this.abortReason) throw this.abortReason;
        let r = ["pipeline", e, t],
          i = peers.hf.devaluate(n.value, undefined, this, n);
        r.push(i[0]);
        let a = this.send(["stream", r]),
          o = this.imports.length,
          s = new peers._f(this, o, true);
        return (
          (s.remoteRefcount = 0),
          (s.localRefcount = 1),
          this.imports.push(s),
          {
            promise: s.awaitResolution().then(
              (value) => {
                value.dispose();
                delete this.imports[o];
              },
              (e) => {
                throw (delete this.imports[o], e);
              },
            ),
            size: a,
          }
        );
      }
      sendMap(e, t, n, r) {
        if (this.abortReason) {
          for (let e of n) e.dispose();
          throw this.abortReason;
        }
        let i = [
          "remap",
          e,
          t,
          n.map((item) => {
            let t = this.getImport(item);
            return t === undefined
              ? ["export", this.exportStub(item)]
              : ["import", t];
          }),
          r,
        ];
        this.send(["push", i]);
        let a = new peers._f(this, this.imports.length, false);
        return (this.imports.push(a), new peers.vf(true, a));
      }
      sendPull(e) {
        if (this.abortReason) throw this.abortReason;
        this.send(["pull", e]);
      }
      sendRelease(e, t) {
        this.abortReason ||
          (this.send(["release", e, t]), delete this.imports[e]);
      }
      abort(e, t = true) {
        if (this.abortReason === undefined) {
          if ((this.cancelReadLoop?.(e), (this.cancelReadLoop = undefined), t))
            try {
              this.transport
                .send(
                  JSON.stringify([
                    "abort",
                    peers.hf.devaluate(e, undefined, this),
                  ]),
                )
                .catch((error) => {});
            } catch {}
          if (
            (e === undefined && (e = "undefined"),
            (this.abortReason = e),
            this.onBatchDone && this.onBatchDone.reject(e),
            this.transport.abort)
          )
            try {
              this.transport.abort(e);
            } catch (e) {
              Promise.resolve(e);
            }
          for (let t in this.onBrokenCallbacks)
            try {
              this.onBrokenCallbacks[t](e);
            } catch (e) {
              Promise.resolve(e);
            }
          for (let t in this.imports) this.imports[t].abort(e);
          for (let e in this.exports) this.exports[e].hook.dispose();
        }
      }
      async readLoop() {
        for (; !this.abortReason; ) {
          let e = Promise.withResolvers();
          this.cancelReadLoop = e.reject;
          let t;
          try {
            t = await Promise.race([this.transport.receive(), e.promise]);
          } finally {
            this.cancelReadLoop === e.reject &&
              (this.cancelReadLoop = undefined);
          }
          let n = JSON.parse(t);
          if (this.abortReason) break;
          if (n instanceof Array)
            switch (n[0]) {
              case "push":
                if (n.length > 1) {
                  let e = new peers.mf(new peers.gf(this).evaluate(n[1]));
                  e.ignoreUnhandledRejections();
                  this.exports.push({
                    hook: e,
                    refcount: 1,
                  });
                  continue;
                }
                break;
              case "stream":
                if (n.length > 1) {
                  let e = new peers.mf(new peers.gf(this).evaluate(n[1]));
                  e.ignoreUnhandledRejections();
                  let t = this.exports.length;
                  this.exports.push({
                    hook: e,
                    refcount: 1,
                    autoRelease: true,
                  });
                  this.ensureResolvingExport(t);
                  continue;
                }
                break;
              case "pipe": {
                let { readable, writable } = new peers.TransformStream(),
                  n = peers.sf.createWritableStreamHook(writable);
                this.exports.push({
                  hook: n,
                  refcount: 1,
                  pipeReadable: readable,
                });
                continue;
              }
              case "pull": {
                let e = n[1];
                if (typeof e == "number") {
                  this.ensureResolvingExport(e);
                  continue;
                }
                break;
              }
              case "resolve":
              case "reject": {
                let e = n[1];
                if (typeof e == "number" && n.length > 2) {
                  let t = this.imports[e];
                  if (t) {
                    if (n[0] == "resolve")
                      t.resolve(
                        new peers.mf(new peers.gf(this).evaluate(n[2])),
                      );
                    else {
                      let e = new peers.gf(this).evaluate(n[2]);
                      e.dispose();
                      t.resolve(new peers.lf(e.value));
                    }
                  } else
                    n[0] == "resolve" &&
                      new peers.gf(this).evaluate(n[2]).dispose();
                  continue;
                }
                break;
              }
              case "release": {
                let e = n[1],
                  t = n[2];
                if (typeof e == "number" && typeof t == "number") {
                  this.releaseExport(e, t);
                  continue;
                }
                break;
              }
              case "abort": {
                let e = new peers.gf(this).evaluate(n[1]);
                e.dispose();
                this.abort(e, false);
                break;
              }
            }
          throw Error(`bad RPC message: ${JSON.stringify(n)}`);
        }
      }
      async drain() {
        if (this.abortReason) throw this.abortReason;
        if (this.pullCount > 0) {
          let { promise, resolve, reject } = Promise.withResolvers();
          this.onBatchDone = {
            resolve,
            reject,
          };
          await promise;
        }
      }
      getStats() {
        let e = {
          imports: 0,
          exports: 0,
        };
        for (let t in this.imports) ++e.imports;
        for (let t in this.exports) ++e.exports;
        return e;
      }
    };
    iXe = class {
      #e;
      #t;
      constructor(e, t, n = {}) {
        let r;
        r = t
          ? new peers.mf(peers.pf.fromAppReturn(t))
          : new peers.lf(Error("This connection has no main object."));
        this.#e = new peers.rXe(e, r, n);
        this.#t = new peers.df(this.#e.getMainImport());
      }
      getRemoteMain() {
        return this.#t;
      }
      getStats() {
        return this.#e.getStats();
      }
      drain() {
        return this.#e.drain();
      }
    };
    aXe = class {
      constructor(e) {
        this.#e = e;
        e.start();
        e.addEventListener("message", (e) => {
          this.#i ||
            (e.data === null
              ? this.#a(Error("Peer closed MessagePort connection."))
              : typeof e.data == "string"
                ? this.#t
                  ? (this.#t(e.data),
                    (this.#t = undefined),
                    (this.#n = undefined))
                  : this.#r.push(e.data)
                : this.#a(
                    peers.TypeError(
                      "Received non-string message from MessagePort.",
                    ),
                  ));
        });
        e.addEventListener("messageerror", (e) => {
          this.#a(Error("MessagePort message error."));
        });
      }
      #e;
      #t;
      #n;
      #r = [];
      #i;
      async send(e) {
        if (this.#i) throw this.#i;
        this.#e.postMessage(e);
      }
      async receive() {
        if (this.#r.length > 0) return this.#r.shift();
        if (this.#i) throw this.#i;
        return new Promise((e, t) => {
          this.#t = e;
          this.#n = t;
        });
      }
      abort(e) {
        try {
          this.#e.postMessage(null);
        } catch {}
        this.#e.close();
        this.#i ||= e;
      }
      #a(e) {
        this.#i ||
          ((this.#i = e),
          (this.#n &&= (this.#n(e), (this.#t = undefined), undefined)));
      }
    };
    oXe = class {
      context;
      captureMap = new Map();
      instructions = [];
      constructor(e, t) {
        peers.yf
          ? (this.context = {
              parent: peers.yf,
              captures: [],
              subject: peers.yf.capture(e),
              path: t,
            })
          : (this.context = {
              parent: undefined,
              captures: [],
              subject: e,
              path: t,
            });
        yf = this;
      }
      unregister() {
        yf = this.context.parent;
      }
      makeInput() {
        return new peers.sXe(this, 0);
      }
      makeOutput(e) {
        let t;
        try {
          t = peers.hf.devaluate(e.value, undefined, this, e);
        } finally {
          e.dispose();
        }
        return (
          this.instructions.push(t),
          this.context.parent
            ? (this.context.parent.instructions.push([
                "remap",
                this.context.subject,
                this.context.path,
                this.context.captures.map((item) => {
                  return ["import", item];
                }),
                this.instructions,
              ]),
              new peers.sXe(
                this.context.parent,
                this.context.parent.instructions.length,
              ))
            : this.context.subject.map(
                this.context.path,
                this.context.captures,
                this.instructions,
              )
        );
      }
      pushCall(e, t, n) {
        let r = peers.hf.devaluate(n.value, undefined, this, n);
        r = r[0];
        let i = this.capture(e.dup());
        return (
          this.instructions.push(["pipeline", i, t, r]),
          new peers.sXe(this, this.instructions.length)
        );
      }
      pushGet(e, t) {
        let n = this.capture(e.dup());
        return (
          this.instructions.push(["pipeline", n, t]),
          new peers.sXe(this, this.instructions.length)
        );
      }
      capture(e) {
        if (e instanceof peers.sXe && e.mapper === this) return e.idx;
        let t = this.captureMap.get(e);
        if (t === undefined) {
          if (this.context.parent) {
            let t = this.context.parent.capture(e);
            this.context.captures.push(t);
          } else this.context.captures.push(e);
          t = -this.context.captures.length;
          this.captureMap.set(e, t);
        }
        return t;
      }
      exportStub(e) {
        throw Error(
          "Can't construct an RpcTarget or RPC callback inside a mapper function. Try creating a new RpcStub outside the callback first, then using it inside the callback.",
        );
      }
      exportPromise(e) {
        return this.exportStub(e);
      }
      getImport(e) {
        return this.capture(e);
      }
      unexport(e) {}
      createPipe(e) {
        throw Error("Cannot send ReadableStream inside a mapper function.");
      }
      onSendError(e) {}
    };
    peers.GYe.sendMap = (e, t, n) => {
      let r = new peers.oXe(e, t),
        i;
      try {
        i = peers.pf.fromAppReturn(
          peers.TYe(r.pushCall.bind(r), () => {
            return n(new peers.ff(r.makeInput(), []));
          }),
        );
      } finally {
        r.unregister();
      }
      if (i instanceof Promise)
        throw (
          i.catch((error) => {}),
          Error("RPC map() callbacks cannot be async.")
        );
      return new peers.ff(r.makeOutput(i), []);
    };
    sXe = class extends peers.cf {
      constructor(e, t) {
        super();
        this.mapper = e;
        this.idx = t;
      }
      dup() {
        return this;
      }
      dispose() {}
      get(e) {
        if (e.length == 0) return this;
        if (peers.yf) return peers.yf.pushGet(this, e);
        peers.RYe();
      }
      call(e, t) {
        peers.RYe();
      }
      map(e, t, n) {
        peers.RYe();
      }
      pull() {
        peers.RYe();
      }
      ignoreUnhandledRejections() {}
      onBroken(e) {
        peers.RYe();
      }
    };
    cXe = class {
      constructor(e, t) {
        this.captures = e;
        this.variables = [t];
      }
      variables;
      dispose() {
        for (let e of this.variables) e.dispose();
      }
      apply(e) {
        try {
          if (e.length < 1) throw Error("Invalid empty mapper function.");
          for (let t of e.slice(0, -1)) {
            let e = new peers.gf(this).evaluateCopy(t);
            if (e.value instanceof peers.df) {
              let t = peers.OYe(e.value);
              if (t) {
                this.variables.push(t);
                continue;
              }
            }
            this.variables.push(new peers.mf(e));
          }
          return new peers.gf(this).evaluateCopy(e[e.length - 1]);
        } finally {
          for (let e of this.variables) e.dispose();
        }
      }
      importStub(e) {
        throw Error("A mapper function cannot refer to exports.");
      }
      importPromise(e) {
        return this.importStub(e);
      }
      getExport(e) {
        return e < 0 ? this.captures[-e - 1] : this.variables[e];
      }
      getPipeReadable(e) {
        throw Error("A mapper function cannot use pipe readables.");
      }
    };
    peers.GYe.applyMap = (e, t, n, r, i) => {
      try {
        let a;
        if (e instanceof peers.ff)
          throw Error("applyMap() can't be called on RpcPromise");
        if (e instanceof Array) {
          let t = [];
          try {
            for (let a of e) t.push(peers.zYe(a, e, n, r, i));
          } catch (e) {
            for (let e of t) e.dispose();
            throw e;
          }
          a = peers.pf.fromArray(t);
        } else
          a = e == null ? peers.pf.fromAppReturn(e) : peers.zYe(e, t, n, r, i);
        return new peers.mf(a);
      } finally {
        for (let e of r) e.dispose();
      }
    };
    lXe = class e extends peers.cf {
      state;
      static create(t) {
        let n = t.getWriter();
        return new e({
          refcount: 1,
          writer: n,
          closed: false,
        });
      }
      constructor(e, t) {
        super();
        this.state = e;
        t && ++e.refcount;
      }
      getState() {
        if (this.state) return this.state;
        throw Error(
          "Attempted to use a WritableStreamStubHook after it was disposed.",
        );
      }
      call(e, t) {
        try {
          let n = this.getState();
          if (e.length !== 1 || typeof e[0] != "string")
            throw Error(
              "WritableStream stub only supports direct method calls",
            );
          let r = e[0];
          if (r !== "write" && r !== "close" && r !== "abort")
            throw (t.dispose(), Error(`Unknown WritableStream method: ${r}`));
          (r === "close" || r === "abort") && (n.closed = true);
          let i = n.writer[r];
          return new peers.ZYe(
            t.deliverCall(i, n.writer).then((value) => {
              return new peers.mf(value);
            }),
          );
        } catch (e) {
          return new peers.lf(e);
        }
      }
      map(e, t, n) {
        for (let e of t) e.dispose();
        return new peers.lf(Error("Cannot use map() on a WritableStream"));
      }
      get(e) {
        return new peers.lf(
          Error("Cannot access properties on a WritableStream stub"),
        );
      }
      dup() {
        let t = this.getState();
        return new e(t, this);
      }
      pull() {
        return Promise.reject(Error("Cannot pull a WritableStream stub"));
      }
      ignoreUnhandledRejections() {}
      dispose() {
        let e = this.state;
        this.state = undefined;
        e &&
          --e.refcount === 0 &&
          (e.closed ||
            e.writer
              .abort(
                Error(
                  "WritableStream RPC stub was disposed without calling close()",
                ),
              )
              .catch(() => {}),
          e.writer.releaseLock());
      }
      onBroken(e) {}
    };
    uXe = 262144;
    dXe = 1073741824;
    fXe = 65536;
    pXe = 2;
    mXe = 1.25;
    hXe = 0.9;
    gXe = 3;
    _Xe = class {
      constructor(e) {
        this.now = e;
      }
      window = peers.uXe;
      bytesInFlight = 0;
      inStartupPhase = true;
      delivered = 0;
      deliveredTime = 0;
      firstAckTime = 0;
      firstAckDelivered = 0;
      minRtt = 1 / 0;
      roundsWithoutIncrease = 0;
      lastRoundWindow = 0;
      roundStartTime = 0;
      onSend(e) {
        this.bytesInFlight += e;
        let t = {
          sentTime: this.now(),
          size: e,
          deliveredAtSend: this.delivered,
          deliveredTimeAtSend: this.deliveredTime,
          windowAtSend: this.window,
          windowFullAtSend: this.bytesInFlight >= this.window,
        };
        return {
          token: t,
          shouldBlock: t.windowFullAtSend,
        };
      }
      onError(e) {
        this.bytesInFlight -= e.size;
      }
      onAck(e) {
        let t = this.now();
        this.delivered += e.size;
        this.deliveredTime = t;
        this.bytesInFlight -= e.size;
        let n = t - e.sentTime;
        if (
          ((this.minRtt = Math.min(this.minRtt, n)), this.firstAckTime === 0)
        ) {
          this.firstAckTime = t;
          this.firstAckDelivered = this.delivered;
        } else {
          let n, r;
          e.deliveredTimeAtSend === 0
            ? ((n = this.firstAckTime), (r = this.firstAckDelivered))
            : ((n = e.deliveredTimeAtSend), (r = e.deliveredAtSend));
          let i = t - n,
            a = (this.delivered - r) / i,
            o = this.inStartupPhase ? peers.pXe : peers.mXe,
            s = a * this.minRtt * o;
          s = Math.min(s, e.windowAtSend * o);
          s = e.windowFullAtSend
            ? Math.max(s, e.windowAtSend * peers.hXe)
            : Math.max(s, this.window);
          this.window = Math.max(Math.min(s, peers.dXe), peers.fXe);
          this.inStartupPhase &&
            e.sentTime >= this.roundStartTime &&
            (this.window > this.lastRoundWindow * peers.mXe
              ? (this.roundsWithoutIncrease = 0)
              : ++this.roundsWithoutIncrease >= peers.gXe &&
                (this.inStartupPhase = false),
            (this.roundStartTime = t),
            (this.lastRoundWindow = this.window));
        }
        return this.bytesInFlight < this.window;
      }
    };
    vXe = class e extends peers.cf {
      state;
      static create(t) {
        return new e({
          refcount: 1,
          stream: t,
          canceled: false,
        });
      }
      constructor(e, t) {
        super();
        this.state = e;
        t && ++e.refcount;
      }
      call(e, t) {
        return (
          t.dispose(),
          new peers.lf(Error("Cannot call methods on a ReadableStream stub"))
        );
      }
      map(e, t, n) {
        for (let e of t) e.dispose();
        return new peers.lf(Error("Cannot use map() on a ReadableStream"));
      }
      get(e) {
        return new peers.lf(
          Error("Cannot access properties on a ReadableStream stub"),
        );
      }
      dup() {
        let t = this.state;
        if (!t)
          throw Error(
            "Attempted to dup a ReadableStreamStubHook after it was disposed.",
          );
        return new e(t, this);
      }
      pull() {
        return Promise.reject(Error("Cannot pull a ReadableStream stub"));
      }
      ignoreUnhandledRejections() {}
      dispose() {
        let e = this.state;
        this.state = undefined;
        e &&
          --e.refcount === 0 &&
          (e.canceled ||
            ((e.canceled = true),
            e.stream.locked ||
              e.stream
                .cancel(
                  Error(
                    "ReadableStream RPC stub was disposed without being consumed",
                  ),
                )
                .catch(() => {})));
      }
      onBroken(e) {}
    };
    peers.sf.createWritableStreamHook = peers.lXe.create;
    peers.sf.createWritableStreamFromHook = peers.BYe;
    peers.sf.createReadableStreamHook = peers.vXe.create;
    bf = peers.HYe;
    yXe = peers.LYe;
  });
}
