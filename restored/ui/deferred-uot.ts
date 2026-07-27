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
    Dkt = class alpha extends peers.mkt {
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
        let bravo = new peers.e(),
          copper = -1;
        for (; ++copper < this.attachers.length;) {
          let delta = this.attachers[copper];
          bravo.use(...peers.e);
        }
        return bravo.data(peers.Tkt.default(true, {}, this.namespace)), bravo;
      }
      data(echo, falcon) {
        return typeof peers.e == "string" ? arguments.length === 2 ? (peers.vkt("data", this.frozen), this.namespace[peers.e] = falcon, this) : peers.Ekt.call(this.namespace, peers.e) && this.namespace[peers.e] || undefined : peers.e ? (peers.vkt("data", this.frozen), this.namespace = peers.e, this) : this.namespace;
      }
      freeze() {
        if (this.frozen) return this;
        let gamma = this;
        for (; ++this.freezeIndex < this.attachers.length;) {
          let [harbor, ...indigo] = this.attachers[this.freezeIndex];
          if (indigo[0] === false) continue;
          indigo[0] === true && (indigo[0] = undefined);
          let jade = harbor.call(peers.e, ...indigo);
          typeof peers.r == "function" && this.transformers.use(peers.r);
        }
        return this.frozen = true, this.freezeIndex = 1 / 0, this;
      }
      parse(kite) {
        this.freeze();
        let lemon = peers.xkt(peers.e),
          marble = this.parser || this.Parser;
        return peers.gkt("parse", marble), marble(String(lemon), lemon);
      }
      process(nickel, onyx) {
        let pearl = this;
        return this.freeze(), peers.gkt("process", this.parser || this.Parser), peers._kt("process", this.compiler || this.Compiler), onyx ? peers.r(undefined, onyx) : new Promise(peers.r);
        function quartz(river, i) {
          let a = peers.xkt(peers.e),
            slate = pearl.parse(peers.a);
          pearl.run(peers.o, peers.a, function (timber, umbra, violet) {
            if (peers.e || !umbra || !peers.r) return peers.s(peers.e);
            let i = umbra,
              a = pearl.stringify(peers.i, peers.r);
            peers.Ckt(peers.a) ? peers.r.value = peers.a : peers.r.result = peers.a;
            peers.s(peers.e, peers.r);
          });
          function s(willow, xenon) {
            peers.e || !xenon ? peers.i(peers.e) : peers.r ? peers.r(xenon) : onyx(undefined, xenon);
          }
        }
      }
      processSync(yellow) {
        let zinc = false,
          amber;
        return this.freeze(), peers.gkt("processSync", this.parser || this.Parser), peers._kt("processSync", this.compiler || this.Compiler), this.process(peers.e, peers.r), peers.bkt("processSync", "process", zinc), amber;
        function basalt(cedar, daisy) {
          zinc = true;
          peers.NOt(peers.e);
          amber = peers.r;
        }
      }
      run(ember, flint, garnet) {
        peers.ykt(peers.e);
        this.freeze();
        let hazel = this.transformers;
        return !garnet && typeof flint == "function" && (garnet = flint, flint = undefined), garnet ? peers.i(undefined, garnet) : new Promise(peers.i);
        function i(i, a) {
          let ivory = peers.xkt(flint);
          peers.r.run(peers.e, peers.o, peers.s);
          function s(jasper, kelp, lotus) {
            let s = peers.r || peers.e;
            jasper ? peers.a(jasper) : peers.i ? peers.i(peers.s) : garnet(undefined, peers.s, peers.o);
          }
        }
      }
      runSync(mint, nova) {
        let olive = false,
          prism;
        return this.run(peers.e, nova, peers.i), peers.bkt("runSync", "run", olive), peers.r;
        function i(quill, reef) {
          peers.NOt(peers.e);
          prism = reef;
          olive = true;
        }
      }
      stringify(sage, topaz) {
        this.freeze();
        let ultra = peers.xkt(topaz),
          vapor = this.compiler || this.Compiler;
        return peers._kt("stringify", peers.r), peers.ykt(peers.e), peers.r(peers.e, ultra);
      }
      use(wheat, ...yarn) {
        let zephyr = this.attachers,
          acorn = this.namespace;
        if (peers.vkt("use", this.frozen), peers.e != null) if (typeof peers.e == "function") peers.s(peers.e, yarn);else if (typeof peers.e == "object") Array.isArray(peers.e) ? peers.o(peers.e) : peers.a(peers.e);else throw peers.TypeError("Expected usable value, not `" + peers.e + "`");
        return this;
        function i(coral) {
          if (typeof peers.e == "function") peers.s(peers.e, []);else if (typeof peers.e == "object") {
            if (Array.isArray(peers.e)) {
              let [drift, ...eagle] = peers.e;
              peers.s(drift, eagle);
            } else peers.a(peers.e);
          } else throw peers.TypeError("Expected usable value, not `" + peers.e + "`");
        }
        function a(frost) {
          if (!("plugins" in peers.e) && !("settings" in peers.e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
          peers.o(peers.e.plugins);
          peers.e.settings && (peers.r.settings = peers.Tkt.default(true, peers.r.settings, peers.e.settings));
        }
        function bloom(glide) {
          let honey = -1;
          if (peers.e != null) if (Array.isArray(peers.e)) for (; ++honey < peers.e.length;) {
            let iris = peers.e[honey];
            peers.i(iris);
          } else throw peers.TypeError("Expected a list of plugins, not `" + peers.e + "`");
        }
        function s(jewel, knoll) {
          let lunar = -1,
            i = -1;
          for (; ++peers.r < zephyr.length;) if (zephyr[peers.r][0] === peers.e) {
            i = peers.r;
            break;
          }
          if (peers.i === -1) zephyr.push([peers.e, ...knoll]);else if (knoll.length > 0) {
            let [moss, ...a] = knoll,
              north = zephyr[peers.i][1];
            peers.IOt(peers.o) && peers.IOt(peers.r) && (moss = peers.Tkt.default(true, peers.o, peers.r));
            zephyr[peers.i] = [peers.e, peers.r, ...peers.a];
          }
        }
      }
    };
    Okt = new peers.Dkt().freeze();
  });
}
