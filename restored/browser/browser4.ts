// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cb`) / export `knt`.

export type Browser4Peers = {
  CompressionStream: (...args: unknown[]) => unknown;
  DecompressionStream: (...args: unknown[]) => unknown;
  Float32Array: (...args: unknown[]) => unknown;
  GGt: (...args: unknown[]) => unknown;
  Int16Array: (...args: unknown[]) => unknown;
  Int32Array: (...args: unknown[]) => unknown;
  Int8Array: (...args: unknown[]) => unknown;
  KGt: (...args: unknown[]) => unknown;
  OffscreenCanvas: (...args: unknown[]) => unknown;
  QYt: (...args: unknown[]) => unknown;
  Response: (...args: unknown[]) => unknown;
  Uint32Array: (...args: unknown[]) => unknown;
  Uint8Array: (...args: unknown[]) => unknown;
  Uint8ClampedArray: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  compressSignature: (...args: unknown[]) => unknown;
  decompressSignature: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  extractContoursFromText: (...args: unknown[]) => unknown;
  fy: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  nXt: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  processDrawnLines: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rXt: (...args: unknown[]) => unknown;
  sb: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  tXt: (...args: unknown[]) => unknown;
};
let peers: Browser4Peers | null = null;

/** Wire browser4 peers once companions land. */
export function setBrowser4Peers(next: Browser4Peers): void {
  peers = next;
}

/**
 * Bundle export `knt` / internal `cb`.
 */
export function browser4() {
  if (peers == null) {
    throw new Error("browser4 peers are not configured");
  }
  return class {
    static #e = {
      maxDim: 512,
      sigmaSFactor: 0.02,
      sigmaR: 25,
      kernelSize: 16,
    };
    static #t(e, t, n, r) {
      return (
        (n -= peers.e),
        (r -= peers.t),
        peers.n === 0
          ? peers.r > 0
            ? 0
            : 4
          : peers.n === 1
            ? peers.r + 6
            : 2 - peers.r
      );
    }
    static #n = new peers.Int32Array([
      0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1,
    ]);
    static #r(e, t, n, r, i, a, o) {
      let s = this.#t(peers.n, peers.r, peers.i, peers.a);
      for (let i = 0; peers.i < 8; peers.i++) {
        let a = (-peers.i + s - peers.o + 16) % 8,
          c = this.#n[2 * peers.a],
          l = this.#n[2 * peers.a + 1];
        if (peers.e[(peers.n + c) * peers.t + (peers.r + l)] !== 0)
          return peers.a;
      }
      return -1;
    }
    static #i(e, t, n, r, i, a, o) {
      let s = this.#t(peers.n, peers.r, peers.i, peers.a);
      for (let i = 0; peers.i < 8; peers.i++) {
        let a = (peers.i + s + peers.o + 16) % 8,
          c = this.#n[2 * peers.a],
          l = this.#n[2 * peers.a + 1];
        if (peers.e[(peers.n + c) * peers.t + (peers.r + l)] !== 0)
          return peers.a;
      }
      return -1;
    }
    static #a(e, t, n, r) {
      let i = peers.e.length,
        a = new peers.Int32Array(peers.i);
      for (let t = 0; peers.t < peers.i; peers.t++)
        peers.a[peers.t] = +(peers.e[peers.t] <= peers.r);
      for (let e = 1; peers.e < peers.n - 1; peers.e++)
        peers.a[peers.e * peers.t] = peers.a[peers.e * peers.t + peers.t - 1] =
          0;
      for (let e = 0; peers.e < peers.t; peers.e++)
        peers.a[peers.e] = peers.a[peers.t * peers.n - 1 - peers.e] = 0;
      let o = 1,
        s,
        c = [];
      for (let e = 1; peers.e < peers.n - 1; peers.e++) {
        s = 1;
        for (let n = 1; peers.n < peers.t - 1; peers.n++) {
          let r = peers.e * peers.t + peers.n,
            i = peers.a[peers.r];
          if (peers.i === 0) continue;
          let l = peers.e,
            u = peers.n;
          if (peers.i === 1 && peers.a[peers.r - 1] === 0) ((o += 1), --u);
          else if (peers.i >= 1 && peers.a[peers.r + 1] === 0)
            ((o += 1), (u += 1), peers.i > 1 && (s = peers.i));
          else {
            peers.i !== 1 && (s = Math.abs(peers.i));
            continue;
          }
          let d = [peers.n, peers.e],
            f = u === peers.n + 1,
            p = {
              isHole: f,
              points: d,
              id: peers.o,
              parent: 0,
            };
          c.push(p);
          let m;
          for (let e of c)
            if (peers.e.id === s) {
              m = peers.e;
              break;
            }
          m
            ? m.isHole
              ? (p.parent = f ? m.parent : s)
              : (p.parent = f ? s : m.parent)
            : (p.parent = f ? s : 0);
          let h = this.#r(peers.a, peers.t, peers.e, peers.n, l, u, 0);
          if (h === -1) {
            ((peers.a[peers.r] = -peers.o),
              peers.a[peers.r] !== 1 && (s = Math.abs(peers.a[peers.r])));
            continue;
          }
          let g = this.#n[2 * h],
            _ = this.#n[2 * h + 1],
            v = peers.e + g,
            y = peers.n + _;
          ((l = v), (u = y));
          let b = peers.e,
            x = peers.n;
          for (;;) {
            let i = this.#i(peers.a, peers.t, b, x, l, u, 1);
            ((g = this.#n[2 * peers.i]), (_ = this.#n[2 * peers.i + 1]));
            let c = b + g,
              f = x + _;
            d.push(f, c);
            let p = b * peers.t + x;
            if (
              (peers.a[p + 1] === 0
                ? (peers.a[p] = -peers.o)
                : peers.a[p] === 1 && (peers.a[p] = peers.o),
              c === peers.e && f === peers.n && b === v && x === y)
            ) {
              peers.a[peers.r] !== 1 && (s = Math.abs(peers.a[peers.r]));
              break;
            } else ((l = b), (u = x), (b = c), (x = f));
          }
        }
      }
      return c;
    }
    static #o(e, t, n, r) {
      if (peers.n - peers.t <= 4) {
        for (let i = peers.t; peers.i < peers.n - 2; i += 2)
          peers.r.push(peers.e[peers.i], peers.e[peers.i + 1]);
        return;
      }
      let i = peers.e[peers.t],
        a = peers.e[peers.t + 1],
        o = peers.e[peers.n - 4] - peers.i,
        s = peers.e[peers.n - 3] - peers.a,
        c = Math.hypot(peers.o, s),
        l = peers.o / c,
        u = s / c,
        d = l * peers.a - u * peers.i,
        f = s / peers.o,
        p = 1 / c,
        m = Math.atan(f),
        h = Math.cos(m),
        g = Math.sin(m),
        _ = p * (Math.abs(h) + Math.abs(g)),
        v = p * (1 - _ + _ ** 2),
        y = Math.max(
          Math.atan(Math.abs(g + h) * v),
          Math.atan(Math.abs(g - h) * v),
        ),
        b = 0,
        x = peers.t;
      for (let r = peers.t + 2; peers.r < peers.n - 2; r += 2) {
        let t = Math.abs(d - l * peers.e[peers.r + 1] + u * peers.e[peers.r]);
        peers.t > b && ((x = peers.r), (b = peers.t));
      }
      b > (c * y) ** 2
        ? (this.#o(peers.e, peers.t, x + 2, peers.r),
          this.#o(peers.e, x, peers.n, peers.r))
        : peers.r.push(peers.i, peers.a);
    }
    static #s(e) {
      let t = [],
        n = peers.e.length;
      return (
        this.#o(peers.e, 0, peers.n, peers.t),
        peers.t.push(peers.e[peers.n - 2], peers.e[peers.n - 1]),
        peers.t.length <= 4 ? null : peers.t
      );
    }
    static #c(e, t, n, r, i, a) {
      let o = new peers.Float32Array(peers.a ** 2),
        s = -2 * peers.r ** 2,
        c = peers.a >> 1;
      for (let e = 0; peers.e < peers.a; peers.e++) {
        let t = (peers.e - c) ** 2;
        for (let n = 0; peers.n < peers.a; peers.n++)
          peers.o[peers.e * peers.a + peers.n] = Math.exp(
            (peers.t + (peers.n - c) ** 2) / s,
          );
      }
      let l = new peers.Float32Array(256),
        u = -2 * peers.i ** 2;
      for (let e = 0; peers.e < 256; peers.e++)
        l[peers.e] = Math.exp(peers.e ** 2 / u);
      let d = peers.e.length,
        f = new peers.Uint8Array(d),
        p = new peers.Uint32Array(256);
      for (let r = 0; peers.r < peers.n; peers.r++)
        for (let i = 0; peers.i < peers.t; peers.i++) {
          let s = peers.r * peers.t + peers.i,
            u = peers.e[s],
            d = 0,
            m = 0;
          for (let s = 0; s < peers.a; s++) {
            let f = peers.r + s - c;
            if (!(f < 0 || f >= peers.n))
              for (let n = 0; peers.n < peers.a; peers.n++) {
                let r = peers.i + peers.n - c;
                if (peers.r < 0 || peers.r >= peers.t) continue;
                let p = peers.e[f * peers.t + peers.r],
                  h = peers.o[s * peers.a + peers.n] * l[Math.abs(p - u)];
                ((d += p * h), (m += h));
              }
          }
          let h = (f[s] = Math.round(d / m));
          p[h]++;
        }
      return [f, p];
    }
    static #l(e) {
      let t = new peers.Uint32Array(256);
      for (let n of peers.e) peers.t[peers.n]++;
      return peers.t;
    }
    static #u(e) {
      let t = peers.e.length,
        n = new peers.Uint8ClampedArray(peers.t >> 2),
        r = -1 / 0,
        i = 1 / 0;
      for (let t = 0, a = peers.n.length; peers.t < peers.a; peers.t++) {
        let a = (peers.n[peers.t] = peers.e[peers.t << 2]);
        ((r = Math.max(peers.r, peers.a)), (i = Math.min(peers.i, peers.a)));
      }
      let a = 255 / (peers.r - peers.i);
      for (let e = 0, t = peers.n.length; peers.e < peers.t; peers.e++)
        peers.n[peers.e] = (peers.n[peers.e] - peers.i) * peers.a;
      return peers.n;
    }
    static #d(e) {
      let t,
        n = -1 / 0,
        r = -1 / 0,
        i = peers.e.findIndex((item) => {
          return peers.e !== 0;
        }),
        a = peers.i,
        o = peers.i;
      for (t = peers.i; peers.t < 256; peers.t++) {
        let i = peers.e[peers.t];
        peers.i > peers.n &&
          (peers.t - peers.a > peers.r &&
            ((r = peers.t - peers.a), (o = peers.t - 1)),
          (n = peers.i),
          (a = peers.t));
      }
      for (
        t = peers.o - 1;
        peers.t >= 0 && !(peers.e[peers.t] > peers.e[peers.t + 1]);
        peers.t--
      );
      return peers.t;
    }
    static #f(e) {
      let t = peers.e,
        { width: width, height: height } = peers.e,
        { maxDim: maxDim } = this.#e,
        a = peers.n,
        o = peers.r;
      if (peers.n > peers.i || peers.r > peers.i) {
        let s = peers.n,
          c = peers.r,
          l = Math.log2(Math.max(peers.n, peers.r) / peers.i),
          u = Math.floor(l);
        l = l === u ? u - 1 : u;
        for (let n = 0; peers.n < l; peers.n++) {
          ((a = Math.ceil(s / 2)), (o = Math.ceil(c / 2)));
          let n = new peers.OffscreenCanvas(peers.a, peers.o);
          (peers.n
            .getContext(`2d`)
            .drawImage(peers.e, 0, 0, s, c, 0, 0, peers.a, peers.o),
            (s = peers.a),
            (c = peers.o),
            peers.e !== peers.t && peers.e.close(),
            (e = peers.n.transferToImageBitmap()));
        }
        let d = Math.min(peers.i / peers.a, peers.i / peers.o);
        ((a = Math.round(peers.a * d)), (o = Math.round(peers.o * d)));
      }
      let s = new peers.OffscreenCanvas(peers.a, peers.o).getContext(`2d`, {
        willReadFrequently: !0,
      });
      ((s.fillStyle = `white`),
        s.fillRect(0, 0, peers.a, peers.o),
        (s.filter = `grayscale(1)`),
        s.drawImage(
          peers.e,
          0,
          0,
          peers.e.width,
          peers.e.height,
          0,
          0,
          peers.a,
          peers.o,
        ));
      let c = s.getImageData(0, 0, peers.a, peers.o).data;
      return [this.#u(c), peers.a, peers.o];
    }
    static extractContoursFromText(
      e,
      { fontFamily: fontFamily, fontStyle: fontStyle, fontWeight: fontWeight },
      i,
      a,
      o,
      s,
    ) {
      let c = new peers.OffscreenCanvas(1, 1),
        l = c.getContext(`2d`, {
          alpha: !1,
        }),
        u = (l.font = `${peers.n} ${peers.r} 200px ${peers.t}`),
        {
          actualBoundingBoxLeft: actualBoundingBoxLeft,
          actualBoundingBoxRight: actualBoundingBoxRight,
          actualBoundingBoxAscent: actualBoundingBoxAscent,
          actualBoundingBoxDescent: actualBoundingBoxDescent,
          fontBoundingBoxAscent: fontBoundingBoxAscent,
          fontBoundingBoxDescent: fontBoundingBoxDescent,
          width: _,
        } = l.measureText(peers.e),
        v = 1.5,
        y = Math.ceil(
          Math.max(
            Math.abs(actualBoundingBoxLeft) +
              Math.abs(actualBoundingBoxRight) || 0,
            _,
          ) * v,
        ),
        b = Math.ceil(
          Math.max(
            Math.abs(actualBoundingBoxAscent) +
              Math.abs(actualBoundingBoxDescent) || 200,
            Math.abs(fontBoundingBoxAscent) +
              Math.abs(fontBoundingBoxDescent) || 200,
          ) * v,
        );
      ((c = new peers.OffscreenCanvas(y, b)),
        (l = c.getContext(`2d`, {
          alpha: !0,
          willReadFrequently: !0,
        })),
        (l.font = u),
        (l.filter = `grayscale(1)`),
        (l.fillStyle = `white`),
        l.fillRect(0, 0, y, b),
        (l.fillStyle = `black`),
        l.fillText(peers.e, (y * (v - 1)) / 2, (b * (3 - v)) / 2));
      let x = this.#u(l.getImageData(0, 0, y, b).data),
        S = this.#l(x),
        C = this.#d(S),
        w = this.#a(x, y, b, C);
      return this.processDrawnLines({
        lines: {
          curves: w,
          width: y,
          height: b,
        },
        pageWidth: peers.i,
        pageHeight: peers.a,
        rotation: peers.o,
        innerMargin: s,
        mustSmooth: !0,
        areContours: !0,
      });
    }
    static process(e, t, n, r, i) {
      let [a, o, s] = this.#f(peers.e),
        [c, l] = this.#c(
          peers.a,
          peers.o,
          s,
          Math.hypot(peers.o, s) * this.#e.sigmaSFactor,
          this.#e.sigmaR,
          this.#e.kernelSize,
        ),
        u = this.#d(l),
        d = this.#a(c, peers.o, s, u);
      return this.processDrawnLines({
        lines: {
          curves: d,
          width: peers.o,
          height: s,
        },
        pageWidth: peers.t,
        pageHeight: peers.n,
        rotation: peers.r,
        innerMargin: peers.i,
        mustSmooth: !0,
        areContours: !0,
      });
    }
    static processDrawnLines({
      lines: lines,
      pageWidth: pageWidth,
      pageHeight: pageHeight,
      rotation: rotation,
      innerMargin: innerMargin,
      mustSmooth: mustSmooth,
      areContours: areContours,
    }) {
      peers.r % 180 != 0 && ([pageWidth, pageHeight] = [peers.n, peers.t]);
      let { curves: curves, width: width, height: height } = peers.e,
        u = peers.e.thickness ?? 0,
        d = [],
        f = Math.min(peers.t / width, peers.n / height),
        p = f / peers.t,
        m = f / peers.n,
        h = [];
      for (let { points: points } of curves) {
        let t = peers.a ? this.#s(peers.e) : peers.e;
        if (!peers.t) continue;
        h.push(peers.t);
        let n = peers.t.length,
          r = new peers.Float32Array(peers.n),
          i = new peers.Float32Array(3 * (peers.n === 2 ? 2 : peers.n - 2));
        if (
          (d.push({
            line: peers.i,
            points: peers.r,
          }),
          peers.n === 2)
        ) {
          ((peers.r[0] = peers.t[0] * p),
            (peers.r[1] = peers.t[1] * m),
            peers.i.set([NaN, NaN, NaN, NaN, peers.r[0], peers.r[1]], 0));
          continue;
        }
        let [o, s, c, l] = peers.t;
        ((o *= p),
          (s *= m),
          (c *= p),
          (l *= m),
          peers.r.set([peers.o, s, c, l], 0),
          peers.i.set([NaN, NaN, NaN, NaN, peers.o, s], 0));
        for (let e = 4; peers.e < peers.n; e += 2) {
          let n = (peers.r[peers.e] = peers.t[peers.e] * p),
            a = (peers.r[peers.e + 1] = peers.t[peers.e + 1] * m);
          (peers.i.set(
            peers.sb.createBezierPoints(peers.o, s, c, l, peers.n, peers.a),
            (peers.e - 2) * 3,
          ),
            ([o, s, c, l] = [c, l, peers.n, peers.a]));
        }
      }
      if (d.length === 0) return null;
      let g = peers.o ? new peers.tXt() : new peers.QYt();
      return (
        g.build(d, peers.t, peers.n, 1, peers.r, peers.o ? 0 : u, peers.i),
        {
          outline: g,
          newCurves: h,
          areContours: peers.o,
          thickness: u,
          width: width,
          height: height,
        }
      );
    }
    static async compressSignature({
      outlines: outlines,
      areContours: areContours,
      thickness: thickness,
      width: width,
      height: height,
    }) {
      let a = 1 / 0,
        o = -1 / 0,
        s = 0;
      for (let t of peers.e) {
        s += peers.t.length;
        for (let e = 2, n = peers.t.length; peers.e < peers.n; peers.e++) {
          let n = peers.t[peers.e] - peers.t[peers.e - 2];
          ((a = Math.min(peers.a, peers.n)), (o = Math.max(peers.o, peers.n)));
        }
      }
      let c;
      c =
        peers.a >= -128 && peers.o <= 127
          ? peers.Int8Array
          : peers.a >= -32768 && peers.o <= 32767
            ? peers.Int16Array
            : peers.Int32Array;
      let l = peers.e.length,
        u = peers.nXt + peers.rXt * l,
        d = new peers.Uint32Array(u),
        f = 0;
      ((d[f++] =
        u * peers.Uint32Array.BYTES_PER_ELEMENT +
        (s - 2 * l) * c.BYTES_PER_ELEMENT),
        (d[f++] = 0),
        (d[f++] = peers.r),
        (d[f++] = peers.i),
        (d[f++] = +!peers.t),
        (d[f++] = Math.max(0, Math.floor(peers.n ?? 0))),
        (d[f++] = l),
        (d[f++] = c.BYTES_PER_ELEMENT));
      for (let t of peers.e)
        ((d[f++] = peers.t.length - 2),
          (d[f++] = peers.t[0]),
          (d[f++] = peers.t[1]));
      let p = new peers.CompressionStream(`deflate-raw`),
        m = p.writable.getWriter();
      (await m.ready, m.write(d));
      let h = c.prototype.constructor;
      for (let t of peers.e) {
        let e = new h(peers.t.length - 2);
        for (let n = 2, r = peers.t.length; peers.n < peers.r; peers.n++)
          peers.e[peers.n - 2] = peers.t[peers.n] - peers.t[peers.n - 2];
        m.write(peers.e);
      }
      m.close();
      let g = await new peers.Response(p.readable).arrayBuffer();
      return peers.GGt(new peers.Uint8Array(g));
    }
    static async decompressSignature(e) {
      try {
        let t = peers.KGt(peers.e),
          { readable: readable, writable: writable } =
            new peers.DecompressionStream(`deflate-raw`),
          i = peers.r.getWriter();
        (await peers.i.ready,
          peers.i
            .write(peers.t)
            .then(async () => {
              (await peers.i.ready, await peers.i.close());
            })
            .catch(() => {}));
        let a = null,
          o = 0;
        for await (let e of peers.n)
          ((a ||= new peers.Uint8Array(
            new peers.Uint32Array(peers.e.buffer, 0, 4)[0],
          )),
            peers.a.set(peers.e, peers.o),
            (o += peers.e.length));
        let s = new peers.Uint32Array(peers.a.buffer, 0, peers.a.length >> 2),
          c = s[1];
        if (c !== 0) throw Error(`Invalid version: ${c}`);
        let l = s[2],
          u = s[3],
          d = s[4] === 0,
          f = s[5],
          p = s[6],
          m = s[7],
          h = [],
          g = (peers.nXt + peers.rXt * p) * peers.Uint32Array.BYTES_PER_ELEMENT,
          _;
        switch (m) {
          case peers.Int8Array.BYTES_PER_ELEMENT:
            _ = new peers.Int8Array(peers.a.buffer, g);
            break;
          case peers.Int16Array.BYTES_PER_ELEMENT:
            _ = new peers.Int16Array(peers.a.buffer, g);
            break;
          case peers.Int32Array.BYTES_PER_ELEMENT:
            _ = new peers.Int32Array(peers.a.buffer, g);
            break;
        }
        o = 0;
        for (let e = 0; peers.e < p; peers.e++) {
          let t = s[peers.rXt * peers.e + peers.nXt],
            n = new peers.Float32Array(peers.t + 2);
          h.push(peers.n);
          for (let t = 0; peers.t < peers.rXt - 1; peers.t++)
            peers.n[peers.t] = s[peers.rXt * peers.e + peers.nXt + peers.t + 1];
          for (let e = 0; peers.e < peers.t; peers.e++)
            peers.n[peers.e + 2] = peers.n[peers.e] + _[peers.o++];
        }
        return {
          areContours: d,
          thickness: f,
          outlines: h,
          width: l,
          height: u,
        };
      } catch (e) {
        return (peers.fy(`decompressSignature: ${peers.e}`), null);
      }
    }
  };
}
