// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rb`) / export `jnt`.

export type BindDeferredUiJntPeers = {
  By: (...args: unknown[]) => unknown;
  C: (...args: unknown[]) => unknown;
  Cy: (...args: unknown[]) => unknown;
  D: (...args: unknown[]) => unknown;
  E: (...args: unknown[]) => unknown;
  JJt: (...args: unknown[]) => unknown;
  O: (...args: unknown[]) => unknown;
  ReadableStream: (...args: unknown[]) => unknown;
  Ry: (...args: unknown[]) => unknown;
  S: (...args: unknown[]) => unknown;
  T: (...args: unknown[]) => unknown;
  Uy: (...args: unknown[]) => unknown;
  _: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  b: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cancel: (...args: unknown[]) => unknown;
  catch: (...args: unknown[]) => unknown;
  cleanup: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  d: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  f: (...args: unknown[]) => unknown;
  fontFamilyMap: (...args: unknown[]) => unknown;
  fy: (...args: unknown[]) => unknown;
  g: (...args: unknown[]) => unknown;
  h: (...args: unknown[]) => unknown;
  hy: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  k: (...args: unknown[]) => unknown;
  l: (...args: unknown[]) => unknown;
  m: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  p: (...args: unknown[]) => unknown;
  qJt: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  render: (...args: unknown[]) => unknown;
  s: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  textContentItemsStr: (...args: unknown[]) => unknown;
  zy: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiJntPeers | null = null;

/** Wire bindDeferredUiJnt peers once companions land. */
export function setBindDeferredUiJntPeers(next: BindDeferredUiJntPeers): void {
  peers = next;
}

/**
 * Bundle export `jnt` / internal `rb`.
 */
export function bindDeferredUiJnt() {
  if (peers == null) {
    throw new Error("bindDeferredUiJnt peers are not configured");
  }

  return class e {
    #e = Promise.withResolvers();
    #t = null;
    #n = !1;
    #r = !!globalThis.FontInspector?.enabled;
    #i = null;
    #a = null;
    #o = 0;
    #s = 0;
    #c = null;
    #l = null;
    #u = 0;
    #d = 0;
    #f = Object.create(null);
    #p = [];
    #m = null;
    #h = [];
    #g = new WeakMap();
    #_ = null;
    static #v = new Map();
    static #y = new Map();
    static #b = new WeakMap();
    static #x = null;
    static #S = new Set();
    constructor({ textContentSource: t, container: n, viewport: r }) {
      if (peers.t instanceof peers.ReadableStream) this.#m = peers.t;
      else if (typeof peers.t == `object`)
        this.#m = new peers.ReadableStream({
          start(e) {
            (peers.e.enqueue(peers.t), peers.e.close());
          },
        });
      else throw Error(`No "textContentSource" parameter specified.`);
      ((this.#t = this.#l = peers.n),
        (this.#d = peers.r.scale * peers.Uy.pixelRatio),
        (this.#u = peers.r.rotation),
        (this.#a = {
          div: null,
          properties: null,
          ctx: null,
        }));
      let { pageWidth: i, pageHeight: a, pageX: o, pageY: s } = peers.r.rawDims;
      ((this.#_ = [1, 0, 0, -1, -peers.o, peers.s + peers.a]),
        (this.#s = peers.i),
        (this.#o = peers.a),
        peers.e.#O(),
        peers.Cy(peers.n, peers.r),
        this.#e.promise
          .finally(() => {
            (peers.e.#S.delete(this), (this.#a = null), (this.#f = null));
          })
          .catch(() => {}));
    }
    static get fontFamilyMap() {
      let { isWindows: e, isFirefox: t } = peers.zy.platform;
      return peers.hy(
        this,
        `fontFamilyMap`,
        new Map([
          [`sans-serif`, `${peers.e && peers.t ? `Calibri, ` : ``}sans-serif`],
          [
            `monospace`,
            `${peers.e && peers.t ? `Lucida Console, ` : ``}monospace`,
          ],
        ]),
      );
    }
    render() {
      let t = () => {
        this.#c.read().then(({ value: e, done: n }) => {
          if (peers.n) {
            this.#e.resolve();
            return;
          }
          ((this.#i ??= peers.e.lang),
            Object.assign(this.#f, peers.e.styles),
            this.#C(peers.e.items),
            peers.t());
        }, this.#e.reject);
      };
      return (
        (this.#c = this.#m.getReader()),
        peers.e.#S.add(this),
        peers.t(),
        this.#e.promise
      );
    }
    update({ viewport: t, onBefore: n = null }) {
      let r = peers.t.scale * peers.Uy.pixelRatio,
        i = peers.t.rotation;
      if (
        (peers.i !== this.#u &&
          (peers.n?.(),
          (this.#u = peers.i),
          peers.Cy(this.#l, {
            rotation: peers.i,
          })),
        peers.r !== this.#d)
      ) {
        (peers.n?.(), (this.#d = peers.r));
        let t = {
          div: null,
          properties: null,
          ctx: peers.e.#E(this.#i),
        };
        for (let e of this.#h)
          ((peers.t.properties = this.#g.get(peers.e)),
            (peers.t.div = peers.e),
            this.#T(peers.t));
      }
    }
    cancel() {
      let e = new peers.Ry(`TextLayer task cancelled.`);
      (this.#c?.cancel(peers.e).catch(() => {}),
        (this.#c = null),
        this.#e.reject(peers.e));
    }
    get textDivs() {
      return this.#h;
    }
    get textContentItemsStr() {
      return this.#p;
    }
    #C(t) {
      if (this.#n) return;
      this.#a.ctx ??= peers.e.#E(this.#i);
      let n = this.#h,
        r = this.#p;
      for (let e of peers.t) {
        if (peers.n.length > peers.qJt) {
          (peers.fy(`Ignoring additional textDivs for performance reasons.`),
            (this.#n = !0));
          return;
        }
        if (peers.e.str === void 0) {
          if (
            peers.e.type === `beginMarkedContentProps` ||
            peers.e.type === `beginMarkedContent`
          ) {
            let t = this.#t;
            ((this.#t = document.createElement(`span`)),
              this.#t.classList.add(`markedContent`),
              peers.e.id && this.#t.setAttribute(`id`, `${peers.e.id}`),
              peers.t.append(this.#t));
          } else
            peers.e.type === `endMarkedContent` &&
              (this.#t = this.#t.parentNode);
          continue;
        }
        (peers.r.push(peers.e.str), this.#w(peers.e));
      }
    }
    #w(t) {
      let n = document.createElement(`span`),
        r = {
          angle: 0,
          canvasWidth: 0,
          hasText: peers.t.str !== ``,
          hasEOL: peers.t.hasEOL,
          fontSize: 0,
        };
      this.#h.push(peers.n);
      let i = peers.By.transform(this.#_, peers.t.transform),
        a = Math.atan2(peers.i[1], peers.i[0]),
        o = this.#f[peers.t.fontName];
      peers.o.vertical && (a += Math.PI / 2);
      let s = (this.#r && peers.o.fontSubstitution) || peers.o.fontFamily;
      s = peers.e.fontFamilyMap.get(peers.s) || peers.s;
      let c = Math.hypot(peers.i[2], peers.i[3]),
        l = peers.c * peers.e.#k(peers.s, peers.o, this.#i),
        u,
        d;
      peers.a === 0
        ? ((u = peers.i[4]), (d = peers.i[5] - peers.l))
        : ((u = peers.i[4] + peers.l * Math.sin(peers.a)),
          (d = peers.i[5] - peers.l * Math.cos(peers.a)));
      let f = `calc(var(--total-scale-factor) *`,
        p = peers.n.style;
      (this.#t === this.#l
        ? ((peers.p.left = `${((100 * u) / this.#s).toFixed(2)}%`),
          (peers.p.top = `${((100 * peers.d) / this.#o).toFixed(2)}%`))
        : ((peers.p.left = `${peers.f}${u.toFixed(2)}px)`),
          (peers.p.top = `${peers.f}${peers.d.toFixed(2)}px)`)),
        (peers.p.fontSize = `${peers.f}${(peers.e.#x * peers.c).toFixed(2)}px)`),
        (peers.p.fontFamily = peers.s),
        (peers.r.fontSize = peers.c),
        peers.n.setAttribute(`role`, `presentation`),
        (peers.n.textContent = peers.t.str),
        (peers.n.dir = peers.t.dir),
        this.#r &&
          (peers.n.dataset.fontName =
            peers.o.fontSubstitutionLoadedName || peers.t.fontName),
        peers.a !== 0 && (peers.r.angle = (180 / Math.PI) * peers.a));
      let m = !1;
      if (peers.t.str.length > 1) m = !0;
      else if (
        peers.t.str !== ` ` &&
        peers.t.transform[0] !== peers.t.transform[3]
      ) {
        let e = Math.abs(peers.t.transform[0]),
          n = Math.abs(peers.t.transform[3]);
        peers.e !== peers.n &&
          Math.max(peers.e, peers.n) / Math.min(peers.e, peers.n) > 1.5 &&
          (m = !0);
      }
      if (
        (peers.m &&
          (peers.r.canvasWidth = peers.o.vertical
            ? peers.t.height
            : peers.t.width),
        this.#g.set(peers.n, peers.r),
        (this.#a.div = peers.n),
        (this.#a.properties = peers.r),
        this.#T(this.#a),
        peers.r.hasText && this.#t.append(peers.n),
        peers.r.hasEOL)
      ) {
        let e = document.createElement(`br`);
        (peers.e.setAttribute(`role`, `presentation`), this.#t.append(peers.e));
      }
    }
    #T(t) {
      let { div: n, properties: r, ctx: i } = peers.t,
        { style: a } = peers.n,
        o = ``;
      if (
        (peers.e.#x > 1 && (o = `scale(${1 / peers.e.#x})`),
        peers.r.canvasWidth !== 0 && peers.r.hasText)
      ) {
        let { fontFamily: t } = peers.a,
          { canvasWidth: s, fontSize: c } = peers.r;
        peers.e.#D(peers.i, peers.c * this.#d, peers.t);
        let { width: l } = peers.i.measureText(peers.n.textContent);
        peers.l > 0 &&
          (o = `scaleX(${(peers.s * this.#d) / peers.l}) ${peers.o}`);
      }
      (peers.r.angle !== 0 && (o = `rotate(${peers.r.angle}deg) ${peers.o}`),
        peers.o.length > 0 && (peers.a.transform = peers.o));
    }
    static cleanup() {
      if (!(this.#S.size > 0)) {
        this.#v.clear();
        for (let { canvas: e } of this.#y.values()) peers.e.remove();
        this.#y.clear();
      }
    }
    static #E(e = null) {
      let t = this.#y.get((e ||= ``));
      if (!peers.t) {
        let n = document.createElement(`canvas`);
        ((peers.n.className = `hiddenCanvasElement`),
          (peers.n.lang = peers.e),
          document.body.append(peers.n),
          (t = peers.n.getContext(`2d`, {
            alpha: !1,
            willReadFrequently: !0,
          })),
          this.#y.set(peers.e, peers.t),
          this.#b.set(peers.t, {
            size: 0,
            family: ``,
          }));
      }
      return peers.t;
    }
    static #D(e, t, n) {
      let r = this.#b.get(peers.e);
      (peers.t === peers.r.size && peers.n === peers.r.family) ||
        ((peers.e.font = `${peers.t}px ${peers.n}`),
        (peers.r.size = peers.t),
        (peers.r.family = peers.n));
    }
    static #O() {
      if (this.#x !== null) return;
      let e = document.createElement(`div`);
      ((peers.e.style.opacity = 0),
        (peers.e.style.lineHeight = 1),
        (peers.e.style.fontSize = `1px`),
        (peers.e.style.position = `absolute`),
        (peers.e.textContent = `X`),
        document.body.append(peers.e),
        (this.#x = peers.e.getBoundingClientRect().height),
        peers.e.remove());
    }
    static #k(e, t, n) {
      let r = this.#v.get(peers.e);
      if (peers.r) return peers.r;
      let i = this.#E(peers.n);
      ((peers.i.canvas.width = peers.i.canvas.height = peers.JJt),
        this.#D(peers.i, peers.JJt, peers.e));
      let a = peers.i.measureText(``),
        o = peers.a.fontBoundingBoxAscent,
        s = Math.abs(peers.a.fontBoundingBoxDescent);
      peers.i.canvas.width = peers.i.canvas.height = 0;
      let c = 0.8;
      return (
        peers.o
          ? (c = peers.o / (peers.o + peers.s))
          : (peers.zy.platform.isFirefox &&
              peers.fy(
                "Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering.",
              ),
            peers.t.ascent
              ? (c = peers.t.ascent)
              : peers.t.descent && (c = 1 + peers.t.descent)),
        this.#v.set(peers.e, peers.c),
        peers.c
      );
    }
  };
}
