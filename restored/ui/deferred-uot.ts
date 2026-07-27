// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kkt`) / export `uot`.

export type DeferredUotPeers = {
  Aut: (...args: unknown[]) => unknown;
  Ckt: (...args: unknown[]) => unknown;
  Dkt: (...args: unknown[]) => unknown;
  Ekt: (...args: unknown[]) => unknown;
  FOt: (...args: unknown[]) => unknown;
  IOt: (...args: unknown[]) => unknown;
  LOt: (...args: unknown[]) => unknown;
  NOt: (...args: unknown[]) => unknown;
  Okt: (...args: unknown[]) => unknown;
  POt: (...args: unknown[]) => unknown;
  ROt: (...args: unknown[]) => unknown;
  Tkt: (...args: unknown[]) => unknown;
  TypeError: (...args: unknown[]) => unknown;
  VOt: (...args: unknown[]) => unknown;
  _kt: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  bkt: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  copy: (...args: unknown[]) => unknown;
  data: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  freeze: (...args: unknown[]) => unknown;
  gkt: (...args: unknown[]) => unknown;
  hkt: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  mkt: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  parse: (...args: unknown[]) => unknown;
  pkt: (...args: unknown[]) => unknown;
  processSync: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  run: (...args: unknown[]) => unknown;
  runSync: (...args: unknown[]) => unknown;
  s: (...args: unknown[]) => unknown;
  stringify: (...args: unknown[]) => unknown;
  use: (...args: unknown[]) => unknown;
  vkt: (...args: unknown[]) => unknown;
  xkt: (...args: unknown[]) => unknown;
  ykt: (...args: unknown[]) => unknown;
};
let peers: DeferredUotPeers | null = null;

/** Wire deferredUot peers once companions land. */
export function setDeferredUotPeers(next: DeferredUotPeers): void {
  peers = next;
}

/**
 * Bundle export `uot` / internal `kkt`.
 */
export function deferredUot() {
  if (peers == null) {
    throw new Error("deferredUot peers are not configured");
  }
  return peers.e(() => {
    peers.POt();
    Tkt = peers.r(peers.FOt(), 1);
    peers.Aut();
    peers.LOt();
    peers.VOt();
    peers.pkt();
    peers.hkt();
    Ekt = {}.hasOwnProperty;
    Dkt = class e extends peers.mkt {
      constructor() {
        super("copy");
        this.Compiler = undefined;
        this.Parser = undefined;
        this.attachers = [];
        this.compiler = undefined;
        this.freezeIndex = -1;
        this.frozen = undefined;
        this.namespace = {};
        this.parser = undefined;
        this.transformers = peers.ROt();
      }
      copy() {
        let t = new peers.e(),
          n = -1;
        for (; ++n < this.attachers.length; ) {
          let e = this.attachers[n];
          t.use(...peers.e);
        }
        return (t.data(peers.Tkt.default(true, {}, this.namespace)), t);
      }
      data(e, t) {
        return typeof peers.e == "string"
          ? arguments.length === 2
            ? (peers.vkt("data", this.frozen),
              (this.namespace[peers.e] = t),
              this)
            : (peers.Ekt.call(this.namespace, peers.e) &&
                this.namespace[peers.e]) ||
              undefined
          : peers.e
            ? (peers.vkt("data", this.frozen), (this.namespace = peers.e), this)
            : this.namespace;
      }
      freeze() {
        if (this.frozen) return this;
        let e = this;
        for (; ++this.freezeIndex < this.attachers.length; ) {
          let [t, ...n] = this.attachers[this.freezeIndex];
          if (n[0] === false) continue;
          n[0] === true && (n[0] = undefined);
          let r = t.call(peers.e, ...n);
          typeof peers.r == "function" && this.transformers.use(peers.r);
        }
        return ((this.frozen = true), (this.freezeIndex = 1 / 0), this);
      }
      parse(e) {
        this.freeze();
        let t = peers.xkt(peers.e),
          n = this.parser || this.Parser;
        return (peers.gkt("parse", n), n(String(t), t));
      }
      process(e, t) {
        let n = this;
        return (
          this.freeze(),
          peers.gkt("process", this.parser || this.Parser),
          peers._kt("process", this.compiler || this.Compiler),
          t ? peers.r(undefined, t) : new Promise(peers.r)
        );
        function r(r, i) {
          let a = peers.xkt(peers.e),
            o = n.parse(peers.a);
          n.run(peers.o, peers.a, function (e, t, r) {
            if (peers.e || !t || !peers.r) return peers.s(peers.e);
            let i = t,
              a = n.stringify(peers.i, peers.r);
            peers.Ckt(peers.a)
              ? (peers.r.value = peers.a)
              : (peers.r.result = peers.a);
            peers.s(peers.e, peers.r);
          });
          function s(e, n) {
            peers.e || !n
              ? peers.i(peers.e)
              : peers.r
                ? peers.r(n)
                : t(undefined, n);
          }
        }
      }
      processSync(e) {
        let t = false,
          n;
        return (
          this.freeze(),
          peers.gkt("processSync", this.parser || this.Parser),
          peers._kt("processSync", this.compiler || this.Compiler),
          this.process(peers.e, peers.r),
          peers.bkt("processSync", "process", t),
          n
        );
        function r(e, r) {
          t = true;
          peers.NOt(peers.e);
          n = peers.r;
        }
      }
      run(e, t, n) {
        peers.ykt(peers.e);
        this.freeze();
        let r = this.transformers;
        return (
          !n && typeof t == "function" && ((n = t), (t = undefined)),
          n ? peers.i(undefined, n) : new Promise(peers.i)
        );
        function i(i, a) {
          let o = peers.xkt(t);
          peers.r.run(peers.e, peers.o, peers.s);
          function s(t, r, o) {
            let s = peers.r || peers.e;
            t
              ? peers.a(t)
              : peers.i
                ? peers.i(peers.s)
                : n(undefined, peers.s, peers.o);
          }
        }
      }
      runSync(e, t) {
        let n = false,
          r;
        return (
          this.run(peers.e, t, peers.i),
          peers.bkt("runSync", "run", n),
          peers.r
        );
        function i(e, t) {
          peers.NOt(peers.e);
          r = t;
          n = true;
        }
      }
      stringify(e, t) {
        this.freeze();
        let n = peers.xkt(t),
          r = this.compiler || this.Compiler;
        return (
          peers._kt("stringify", peers.r),
          peers.ykt(peers.e),
          peers.r(peers.e, n)
        );
      }
      use(e, ...t) {
        let n = this.attachers,
          r = this.namespace;
        if ((peers.vkt("use", this.frozen), peers.e != null))
          if (typeof peers.e == "function") peers.s(peers.e, t);
          else if (typeof peers.e == "object")
            Array.isArray(peers.e) ? peers.o(peers.e) : peers.a(peers.e);
          else
            throw peers.TypeError(
              "Expected usable value, not `" + peers.e + "`",
            );
        return this;
        function i(e) {
          if (typeof peers.e == "function") peers.s(peers.e, []);
          else if (typeof peers.e == "object") {
            if (Array.isArray(peers.e)) {
              let [t, ...n] = peers.e;
              peers.s(t, n);
            } else peers.a(peers.e);
          } else
            throw peers.TypeError(
              "Expected usable value, not `" + peers.e + "`",
            );
        }
        function a(e) {
          if (!("plugins" in peers.e) && !("settings" in peers.e))
            throw Error(
              "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither",
            );
          peers.o(peers.e.plugins);
          peers.e.settings &&
            (peers.r.settings = peers.Tkt.default(
              true,
              peers.r.settings,
              peers.e.settings,
            ));
        }
        function o(e) {
          let t = -1;
          if (peers.e != null)
            if (Array.isArray(peers.e))
              for (; ++t < peers.e.length; ) {
                let n = peers.e[t];
                peers.i(n);
              }
            else
              throw peers.TypeError(
                "Expected a list of plugins, not `" + peers.e + "`",
              );
        }
        function s(e, t) {
          let r = -1,
            i = -1;
          for (; ++peers.r < n.length; )
            if (n[peers.r][0] === peers.e) {
              i = peers.r;
              break;
            }
          if (peers.i === -1) n.push([peers.e, ...t]);
          else if (t.length > 0) {
            let [r, ...a] = t,
              o = n[peers.i][1];
            peers.IOt(peers.o) &&
              peers.IOt(peers.r) &&
              (r = peers.Tkt.default(true, peers.o, peers.r));
            n[peers.i] = [peers.e, peers.r, ...peers.a];
          }
        }
      }
    };
    Okt = new peers.Dkt().freeze();
  });
}
