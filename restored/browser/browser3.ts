// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lXt`) / export `hnt`.

export type Browser3Peers = {
  _svgFactory: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  destroy: (...args: unknown[]) => unknown;
  draw: (...args: unknown[]) => unknown;
  drawOutline: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  finalizeDraw: (...args: unknown[]) => unknown;
  hy: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  remove: (...args: unknown[]) => unknown;
  s: (...args: unknown[]) => unknown;
  setParent: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  uYt: (...args: unknown[]) => unknown;
  updateParent: (...args: unknown[]) => unknown;
  updateProperties: (...args: unknown[]) => unknown;
};
let peers: Browser3Peers | null = null;

/** Wire browser3 peers once companions land. */
export function setBrowser3Peers(next: Browser3Peers): void {
  peers = next;
}

/**
 * Bundle export `hnt` / internal `lXt`.
 */
export function browser3() {
  if (peers == null) {
    throw new Error("browser3 peers are not configured");
  }
  return class e {
    #e = null;
    #t = new Map();
    #n = new Map();
    static #r = 0;
    constructor({ pageIndex }) {
      this.pageIndex = peers.e;
    }
    setParent(e) {
      if (!this.#e) {
        this.#e = peers.e;
        return;
      }
      if (this.#e !== peers.e) {
        if (this.#t.size > 0)
          for (let t of this.#t.values()) {
            peers.t.remove();
            peers.e.append(peers.t);
          }
        this.#e = peers.e;
      }
    }
    static get _svgFactory() {
      return peers.hy(this, "_svgFactory", new peers.uYt());
    }
    static #i(e, [t, n, r, i]) {
      let { style } = peers.e;
      style.top = `${100 * peers.n}%`;
      style.left = `${100 * peers.t}%`;
      style.width = `${100 * peers.r}%`;
      style.height = `${100 * peers.i}%`;
    }
    #a() {
      let t = peers.e._svgFactory.create(1, 1, true);
      return (
        this.#e.append(peers.t),
        peers.t.setAttribute("aria-hidden", true),
        peers.t
      );
    }
    #o(t, n) {
      let r = peers.e._svgFactory.createElement("clipPath");
      peers.t.append(peers.r);
      let i = `clip_${peers.n}`;
      peers.r.setAttribute("id", peers.i);
      peers.r.setAttribute("clipPathUnits", "objectBoundingBox");
      let a = peers.e._svgFactory.createElement("use");
      return (
        peers.r.append(a),
        a.setAttribute("href", `#${peers.n}`),
        a.classList.add("clip"),
        peers.i
      );
    }
    #s(e, t) {
      for (let [n, r] of Object.entries(peers.t))
        peers.r === null
          ? peers.e.removeAttribute(peers.n)
          : peers.e.setAttribute(peers.n, peers.r);
    }
    draw(t, n = false, r = false) {
      let i = peers.e.#r++,
        a = this.#a(),
        o = peers.e._svgFactory.createElement("defs");
      a.append(peers.o);
      let s = peers.e._svgFactory.createElement("path");
      peers.o.append(peers.s);
      let c = `path_p${this.pageIndex}_${peers.i}`;
      peers.s.setAttribute("id", c);
      peers.s.setAttribute("vector-effect", "non-scaling-stroke");
      peers.n && this.#n.set(peers.i, peers.s);
      let l = peers.r ? this.#o(peers.o, c) : null,
        u = peers.e._svgFactory.createElement("use");
      return (
        a.append(u),
        u.setAttribute("href", `#${c}`),
        this.updateProperties(a, peers.t),
        this.#t.set(peers.i, a),
        {
          id: peers.i,
          clipPathId: `url(#${l})`,
        }
      );
    }
    drawOutline(t, n) {
      let r = peers.e.#r++,
        i = this.#a(),
        a = peers.e._svgFactory.createElement("defs");
      peers.i.append(a);
      let o = peers.e._svgFactory.createElement("path");
      a.append(peers.o);
      let s = `path_p${this.pageIndex}_${peers.r}`;
      peers.o.setAttribute("id", peers.s);
      peers.o.setAttribute("vector-effect", "non-scaling-stroke");
      let c;
      if (peers.n) {
        let t = peers.e._svgFactory.createElement("mask");
        a.append(peers.t);
        c = `mask_p${this.pageIndex}_${peers.r}`;
        peers.t.setAttribute("id", c);
        peers.t.setAttribute("maskUnits", "objectBoundingBox");
        let n = peers.e._svgFactory.createElement("rect");
        peers.t.append(peers.n);
        peers.n.setAttribute("width", "1");
        peers.n.setAttribute("height", "1");
        peers.n.setAttribute("fill", "white");
        let i = peers.e._svgFactory.createElement("use");
        peers.t.append(peers.i);
        peers.i.setAttribute("href", `#${peers.s}`);
        peers.i.setAttribute("stroke", "none");
        peers.i.setAttribute("fill", "black");
        peers.i.setAttribute("fill-rule", "nonzero");
        peers.i.classList.add("mask");
      }
      let l = peers.e._svgFactory.createElement("use");
      peers.i.append(l);
      l.setAttribute("href", `#${peers.s}`);
      c && l.setAttribute("mask", `url(#${c})`);
      let u = l.cloneNode();
      return (
        peers.i.append(u),
        l.classList.add("mainOutline"),
        u.classList.add("secondaryOutline"),
        this.updateProperties(peers.i, peers.t),
        this.#t.set(peers.r, peers.i),
        peers.r
      );
    }
    finalizeDraw(e, t) {
      this.#n.delete(peers.e);
      this.updateProperties(peers.e, peers.t);
    }
    updateProperties(t, n) {
      if (!peers.n) return;
      let { root, bbox, rootClass, path } = peers.n,
        s = typeof peers.t == "number" ? this.#t.get(peers.t) : peers.t;
      if (peers.s) {
        if (
          (peers.r && this.#s(peers.s, peers.r),
          peers.i && peers.e.#i(peers.s, peers.i),
          rootClass)
        ) {
          let { classList } = peers.s;
          for (let [t, n] of Object.entries(rootClass))
            peers.e.toggle(peers.t, peers.n);
        }
        if (peers.o) {
          let e = peers.s.firstChild.firstChild;
          this.#s(peers.e, peers.o);
        }
      }
    }
    updateParent(e, t) {
      if (peers.t === this) return;
      let n = this.#t.get(peers.e);
      peers.n &&
        (peers.t.#e.append(peers.n),
        this.#t.delete(peers.e),
        peers.t.#t.set(peers.e, peers.n));
    }
    remove(e) {
      this.#n.delete(peers.e);
      this.#e !== null &&
        (this.#t.get(peers.e).remove(), this.#t.delete(peers.e));
    }
    destroy() {
      this.#e = null;
      for (let e of this.#t.values()) peers.e.remove();
      this.#t.clear();
      this.#n.clear();
    }
  };
}
