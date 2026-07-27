// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `By`) / export `Nnt`.

export type BindDeferredUiNntPeers = {
  $Kt: (...args: unknown[]) => unknown;
  applyInverseTransform: (...args: unknown[]) => unknown;
  applyTransform: (...args: unknown[]) => unknown;
  applyTransformToBezier: (...args: unknown[]) => unknown;
  axialAlignedBoundingBox: (...args: unknown[]) => unknown;
  bezierBoundingBox: (...args: unknown[]) => unknown;
  domMatrixToTransform: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  intersect: (...args: unknown[]) => unknown;
  inverseTransform: (...args: unknown[]) => unknown;
  makeHexColor: (...args: unknown[]) => unknown;
  multiplyByDOMMatrix: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  normalizeRect: (...args: unknown[]) => unknown;
  pointBoundingBox: (...args: unknown[]) => unknown;
  rectBoundingBox: (...args: unknown[]) => unknown;
  scaleMinMax: (...args: unknown[]) => unknown;
  singularValueDecompose2dScale: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  transform: (...args: unknown[]) => unknown;
};
let peers: BindDeferredUiNntPeers | null = null;

/** Wire bindDeferredUiNnt peers once companions land. */
export function setBindDeferredUiNntPeers(next: BindDeferredUiNntPeers): void {
  peers = next;
}

/**
 * Bundle export `Nnt` / internal `By`.
 */
export function bindDeferredUiNnt() {
  if (peers == null) {
    throw new Error("bindDeferredUiNnt peers are not configured");
  }
  return class {
    static makeHexColor(e, t, n) {
      return `#${peers.$Kt[peers.e]}${peers.$Kt[peers.t]}${peers.$Kt[peers.n]}`;
    }
    static domMatrixToTransform(e) {
      return [peers.e.a, peers.e.b, peers.e.c, peers.e.d, peers.e.e, peers.e.f];
    }
    static scaleMinMax(e, t) {
      let n;
      peers.e[0]
        ? (peers.e[0] < 0 &&
            ((n = peers.t[0]),
            (peers.t[0] = peers.t[2]),
            (peers.t[2] = peers.n)),
          (peers.t[0] *= peers.e[0]),
          (peers.t[2] *= peers.e[0]),
          peers.e[3] < 0 &&
            ((n = peers.t[1]),
            (peers.t[1] = peers.t[3]),
            (peers.t[3] = peers.n)),
          (peers.t[1] *= peers.e[3]),
          (peers.t[3] *= peers.e[3]))
        : ((n = peers.t[0]),
          (peers.t[0] = peers.t[1]),
          (peers.t[1] = peers.n),
          (n = peers.t[2]),
          (peers.t[2] = peers.t[3]),
          (peers.t[3] = peers.n),
          peers.e[1] < 0 &&
            ((n = peers.t[1]),
            (peers.t[1] = peers.t[3]),
            (peers.t[3] = peers.n)),
          (peers.t[1] *= peers.e[1]),
          (peers.t[3] *= peers.e[1]),
          peers.e[2] < 0 &&
            ((n = peers.t[0]),
            (peers.t[0] = peers.t[2]),
            (peers.t[2] = peers.n)),
          (peers.t[0] *= peers.e[2]),
          (peers.t[2] *= peers.e[2]));
      peers.t[0] += peers.e[4];
      peers.t[1] += peers.e[5];
      peers.t[2] += peers.e[4];
      peers.t[3] += peers.e[5];
    }
    static transform(e, t) {
      return [
        peers.e[0] * peers.t[0] + peers.e[2] * peers.t[1],
        peers.e[1] * peers.t[0] + peers.e[3] * peers.t[1],
        peers.e[0] * peers.t[2] + peers.e[2] * peers.t[3],
        peers.e[1] * peers.t[2] + peers.e[3] * peers.t[3],
        peers.e[0] * peers.t[4] + peers.e[2] * peers.t[5] + peers.e[4],
        peers.e[1] * peers.t[4] + peers.e[3] * peers.t[5] + peers.e[5],
      ];
    }
    static multiplyByDOMMatrix(e, t) {
      return [
        peers.e[0] * peers.t.a + peers.e[2] * peers.t.b,
        peers.e[1] * peers.t.a + peers.e[3] * peers.t.b,
        peers.e[0] * peers.t.c + peers.e[2] * peers.t.d,
        peers.e[1] * peers.t.c + peers.e[3] * peers.t.d,
        peers.e[0] * peers.t.e + peers.e[2] * peers.t.f + peers.e[4],
        peers.e[1] * peers.t.e + peers.e[3] * peers.t.f + peers.e[5],
      ];
    }
    static applyTransform(e, t, n = 0) {
      let r = peers.e[peers.n],
        i = peers.e[peers.n + 1];
      peers.e[peers.n] = r * peers.t[0] + i * peers.t[2] + peers.t[4];
      peers.e[peers.n + 1] = r * peers.t[1] + i * peers.t[3] + peers.t[5];
    }
    static applyTransformToBezier(e, t, n = 0) {
      let r = peers.t[0],
        i = peers.t[1],
        a = peers.t[2],
        o = peers.t[3],
        s = peers.t[4],
        c = peers.t[5];
      for (let t = 0; peers.t < 6; t += 2) {
        let l = peers.e[peers.n + peers.t],
          u = peers.e[peers.n + peers.t + 1];
        peers.e[peers.n + peers.t] = l * r + u * a + s;
        peers.e[peers.n + peers.t + 1] = l * i + u * o + c;
      }
    }
    static applyInverseTransform(e, t) {
      let n = peers.e[0],
        r = peers.e[1],
        i = peers.t[0] * peers.t[3] - peers.t[1] * peers.t[2];
      peers.e[0] =
        (peers.n * peers.t[3] -
          r * peers.t[2] +
          peers.t[2] * peers.t[5] -
          peers.t[4] * peers.t[3]) /
        i;
      peers.e[1] =
        (-peers.n * peers.t[1] +
          r * peers.t[0] +
          peers.t[4] * peers.t[1] -
          peers.t[5] * peers.t[0]) /
        i;
    }
    static axialAlignedBoundingBox(e, t, n) {
      let r = peers.t[0],
        i = peers.t[1],
        a = peers.t[2],
        o = peers.t[3],
        s = peers.t[4],
        c = peers.t[5],
        l = peers.e[0],
        u = peers.e[1],
        d = peers.e[2],
        f = peers.e[3],
        p = r * l + s,
        m = p,
        h = r * d + s,
        g = h,
        _ = o * u + c,
        v = _,
        y = o * f + c,
        b = y;
      if (i !== 0 || a !== 0) {
        let e = i * l,
          t = i * d,
          n = a * u,
          r = a * f;
        p += peers.n;
        g += peers.n;
        h += r;
        m += r;
        _ += peers.e;
        b += peers.e;
        y += peers.t;
        v += peers.t;
      }
      peers.n[0] = Math.min(peers.n[0], p, h, m, g);
      peers.n[1] = Math.min(peers.n[1], _, y, v, b);
      peers.n[2] = Math.max(peers.n[2], p, h, m, g);
      peers.n[3] = Math.max(peers.n[3], _, y, v, b);
    }
    static inverseTransform(e) {
      let t = peers.e[0] * peers.e[3] - peers.e[1] * peers.e[2];
      return [
        peers.e[3] / peers.t,
        -peers.e[1] / peers.t,
        -peers.e[2] / peers.t,
        peers.e[0] / peers.t,
        (peers.e[2] * peers.e[5] - peers.e[4] * peers.e[3]) / peers.t,
        (peers.e[4] * peers.e[1] - peers.e[5] * peers.e[0]) / peers.t,
      ];
    }
    static singularValueDecompose2dScale(e, t) {
      let n = peers.e[0],
        r = peers.e[1],
        i = peers.e[2],
        a = peers.e[3],
        o = peers.n ** 2 + r ** 2,
        s = peers.n * i + r * a,
        c = i ** 2 + a ** 2,
        l = (o + c) / 2,
        u = Math.sqrt(l ** 2 - (o * c - s ** 2));
      peers.t[0] = Math.sqrt(l + u || 1);
      peers.t[1] = Math.sqrt(l - u || 1);
    }
    static normalizeRect(e) {
      let t = peers.e.slice(0);
      return (
        peers.e[0] > peers.e[2] &&
          ((peers.t[0] = peers.e[2]), (peers.t[2] = peers.e[0])),
        peers.e[1] > peers.e[3] &&
          ((peers.t[1] = peers.e[3]), (peers.t[3] = peers.e[1])),
        peers.t
      );
    }
    static intersect(e, t) {
      let n = Math.max(
          Math.min(peers.e[0], peers.e[2]),
          Math.min(peers.t[0], peers.t[2]),
        ),
        r = Math.min(
          Math.max(peers.e[0], peers.e[2]),
          Math.max(peers.t[0], peers.t[2]),
        );
      if (peers.n > r) return null;
      let i = Math.max(
          Math.min(peers.e[1], peers.e[3]),
          Math.min(peers.t[1], peers.t[3]),
        ),
        a = Math.min(
          Math.max(peers.e[1], peers.e[3]),
          Math.max(peers.t[1], peers.t[3]),
        );
      return i > a ? null : [peers.n, i, r, a];
    }
    static pointBoundingBox(e, t, n) {
      peers.n[0] = Math.min(peers.n[0], peers.e);
      peers.n[1] = Math.min(peers.n[1], peers.t);
      peers.n[2] = Math.max(peers.n[2], peers.e);
      peers.n[3] = Math.max(peers.n[3], peers.t);
    }
    static rectBoundingBox(e, t, n, r, i) {
      i[0] = Math.min(i[0], peers.e, peers.n);
      i[1] = Math.min(i[1], peers.t, r);
      i[2] = Math.max(i[2], peers.e, peers.n);
      i[3] = Math.max(i[3], peers.t, r);
    }
    static #e(e, t, n, r, i, a, o, s, c, l) {
      if (c <= 0 || c >= 1) return;
      let u = 1 - c,
        d = c * c,
        f = d * c,
        p = u * (u * (u * peers.e + 3 * c * peers.t) + 3 * d * peers.n) + f * r,
        m = u * (u * (u * i + 3 * c * a) + 3 * d * o) + f * s;
      l[0] = Math.min(l[0], p);
      l[1] = Math.min(l[1], m);
      l[2] = Math.max(l[2], p);
      l[3] = Math.max(l[3], m);
    }
    static #t(e, t, n, r, i, a, o, s, c, l, u, d) {
      if (Math.abs(c) < 1e-12) {
        Math.abs(l) >= 1e-12 &&
          this.#e(peers.e, peers.t, peers.n, r, i, a, o, s, -u / l, d);
        return;
      }
      let f = l ** 2 - 4 * u * c;
      if (f < 0) return;
      let p = Math.sqrt(f),
        m = 2 * c;
      this.#e(peers.e, peers.t, peers.n, r, i, a, o, s, (-l + p) / m, d);
      this.#e(peers.e, peers.t, peers.n, r, i, a, o, s, (-l - p) / m, d);
    }
    static bezierBoundingBox(e, t, n, r, i, a, o, s, c) {
      c[0] = Math.min(c[0], peers.e, o);
      c[1] = Math.min(c[1], peers.t, s);
      c[2] = Math.max(c[2], peers.e, o);
      c[3] = Math.max(c[3], peers.t, s);
      this.#t(
        peers.e,
        peers.n,
        i,
        o,
        peers.t,
        r,
        a,
        s,
        3 * (-peers.e + 3 * (peers.n - i) + o),
        6 * (peers.e - 2 * peers.n + i),
        3 * (peers.n - peers.e),
        c,
      );
      this.#t(
        peers.e,
        peers.n,
        i,
        o,
        peers.t,
        r,
        a,
        s,
        3 * (-peers.t + 3 * (r - a) + s),
        6 * (peers.t - 2 * r + a),
        3 * (r - peers.t),
        c,
      );
    }
  };
}
