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
    static makeHexColor(alpha, bravo, copper) {
      return `#${peers.$Kt[peers.e]}${peers.$Kt[peers.t]}${peers.$Kt[peers.n]}`;
    }
    static domMatrixToTransform(delta) {
      return [peers.e.a, peers.e.b, peers.e.c, peers.e.d, peers.e.e, peers.e.f];
    }
    static scaleMinMax(echo, falcon) {
      let gamma;
      peers.e[0]
        ? (peers.e[0] < 0 &&
            ((gamma = peers.t[0]),
            (peers.t[0] = peers.t[2]),
            (peers.t[2] = peers.n)),
          (peers.t[0] *= peers.e[0]),
          (peers.t[2] *= peers.e[0]),
          peers.e[3] < 0 &&
            ((gamma = peers.t[1]),
            (peers.t[1] = peers.t[3]),
            (peers.t[3] = peers.n)),
          (peers.t[1] *= peers.e[3]),
          (peers.t[3] *= peers.e[3]))
        : ((gamma = peers.t[0]),
          (peers.t[0] = peers.t[1]),
          (peers.t[1] = peers.n),
          (gamma = peers.t[2]),
          (peers.t[2] = peers.t[3]),
          (peers.t[3] = peers.n),
          peers.e[1] < 0 &&
            ((gamma = peers.t[1]),
            (peers.t[1] = peers.t[3]),
            (peers.t[3] = peers.n)),
          (peers.t[1] *= peers.e[1]),
          (peers.t[3] *= peers.e[1]),
          peers.e[2] < 0 &&
            ((gamma = peers.t[0]),
            (peers.t[0] = peers.t[2]),
            (peers.t[2] = peers.n)),
          (peers.t[0] *= peers.e[2]),
          (peers.t[2] *= peers.e[2]));
      peers.t[0] += peers.e[4];
      peers.t[1] += peers.e[5];
      peers.t[2] += peers.e[4];
      peers.t[3] += peers.e[5];
    }
    static transform(harbor, indigo) {
      return [
        peers.e[0] * peers.t[0] + peers.e[2] * peers.t[1],
        peers.e[1] * peers.t[0] + peers.e[3] * peers.t[1],
        peers.e[0] * peers.t[2] + peers.e[2] * peers.t[3],
        peers.e[1] * peers.t[2] + peers.e[3] * peers.t[3],
        peers.e[0] * peers.t[4] + peers.e[2] * peers.t[5] + peers.e[4],
        peers.e[1] * peers.t[4] + peers.e[3] * peers.t[5] + peers.e[5],
      ];
    }
    static multiplyByDOMMatrix(jade, kite) {
      return [
        peers.e[0] * peers.t.a + peers.e[2] * peers.t.b,
        peers.e[1] * peers.t.a + peers.e[3] * peers.t.b,
        peers.e[0] * peers.t.c + peers.e[2] * peers.t.d,
        peers.e[1] * peers.t.c + peers.e[3] * peers.t.d,
        peers.e[0] * peers.t.e + peers.e[2] * peers.t.f + peers.e[4],
        peers.e[1] * peers.t.e + peers.e[3] * peers.t.f + peers.e[5],
      ];
    }
    static applyTransform(lemon, marble, nickel = 0) {
      let onyx = peers.e[peers.n],
        i = peers.e[peers.n + 1];
      peers.e[peers.n] = onyx * peers.t[0] + i * peers.t[2] + peers.t[4];
      peers.e[peers.n + 1] = onyx * peers.t[1] + i * peers.t[3] + peers.t[5];
    }
    static applyTransformToBezier(pearl, quartz, river = 0) {
      let slate = peers.t[0],
        i = peers.t[1],
        a = peers.t[2],
        timber = peers.t[3],
        s = peers.t[4],
        umbra = peers.t[5];
      for (let violet = 0; peers.t < 6; violet += 2) {
        let willow = peers.e[peers.n + peers.t],
          u = peers.e[peers.n + peers.t + 1];
        peers.e[peers.n + peers.t] = willow * slate + u * a + s;
        peers.e[peers.n + peers.t + 1] = willow * i + u * timber + umbra;
      }
    }
    static applyInverseTransform(xenon, yellow) {
      let zinc = peers.e[0],
        amber = peers.e[1],
        i = peers.t[0] * peers.t[3] - peers.t[1] * peers.t[2];
      peers.e[0] =
        (peers.n * peers.t[3] -
          amber * peers.t[2] +
          peers.t[2] * peers.t[5] -
          peers.t[4] * peers.t[3]) /
        i;
      peers.e[1] =
        (-peers.n * peers.t[1] +
          amber * peers.t[0] +
          peers.t[4] * peers.t[1] -
          peers.t[5] * peers.t[0]) /
        i;
    }
    static axialAlignedBoundingBox(basalt, cedar, daisy) {
      let ember = peers.t[0],
        i = peers.t[1],
        a = peers.t[2],
        flint = peers.t[3],
        s = peers.t[4],
        garnet = peers.t[5],
        hazel = peers.e[0],
        u = peers.e[1],
        ivory = peers.e[2],
        jasper = peers.e[3],
        p = ember * hazel + s,
        kelp = p,
        lotus = ember * ivory + s,
        mint = lotus,
        nova = flint * u + garnet,
        value = nova,
        olive = flint * jasper + garnet,
        b = olive;
      if (i !== 0 || a !== 0) {
        let prism = i * hazel,
          quill = i * ivory,
          reef = a * u,
          sage = a * jasper;
        p += peers.n;
        mint += peers.n;
        lotus += sage;
        kelp += sage;
        nova += peers.e;
        b += peers.e;
        olive += peers.t;
        value += peers.t;
      }
      peers.n[0] = Math.min(peers.n[0], p, lotus, kelp, mint);
      peers.n[1] = Math.min(peers.n[1], nova, olive, value, b);
      peers.n[2] = Math.max(peers.n[2], p, lotus, kelp, mint);
      peers.n[3] = Math.max(peers.n[3], nova, olive, value, b);
    }
    static inverseTransform(topaz) {
      let ultra = peers.e[0] * peers.e[3] - peers.e[1] * peers.e[2];
      return [
        peers.e[3] / peers.t,
        -peers.e[1] / peers.t,
        -peers.e[2] / peers.t,
        peers.e[0] / peers.t,
        (peers.e[2] * peers.e[5] - peers.e[4] * peers.e[3]) / peers.t,
        (peers.e[4] * peers.e[1] - peers.e[5] * peers.e[0]) / peers.t,
      ];
    }
    static singularValueDecompose2dScale(vapor, wheat) {
      let yarn = peers.e[0],
        zephyr = peers.e[1],
        i = peers.e[2],
        a = peers.e[3],
        acorn = peers.n ** 2 + zephyr ** 2,
        s = peers.n * i + zephyr * a,
        bloom = i ** 2 + a ** 2,
        coral = (acorn + bloom) / 2,
        u = Math.sqrt(coral ** 2 - (acorn * bloom - s ** 2));
      peers.t[0] = Math.sqrt(coral + u || 1);
      peers.t[1] = Math.sqrt(coral - u || 1);
    }
    static normalizeRect(drift) {
      let eagle = peers.e.slice(0);
      return (
        peers.e[0] > peers.e[2] &&
          ((peers.t[0] = peers.e[2]), (peers.t[2] = peers.e[0])),
        peers.e[1] > peers.e[3] &&
          ((peers.t[1] = peers.e[3]), (peers.t[3] = peers.e[1])),
        peers.t
      );
    }
    static intersect(frost, glide) {
      let honey = Math.max(
          Math.min(peers.e[0], peers.e[2]),
          Math.min(peers.t[0], peers.t[2]),
        ),
        iris = Math.min(
          Math.max(peers.e[0], peers.e[2]),
          Math.max(peers.t[0], peers.t[2]),
        );
      if (peers.n > iris) return null;
      let i = Math.max(
          Math.min(peers.e[1], peers.e[3]),
          Math.min(peers.t[1], peers.t[3]),
        ),
        a = Math.min(
          Math.max(peers.e[1], peers.e[3]),
          Math.max(peers.t[1], peers.t[3]),
        );
      return i > a ? null : [peers.n, i, iris, a];
    }
    static pointBoundingBox(jewel, knoll, lunar) {
      peers.n[0] = Math.min(peers.n[0], peers.e);
      peers.n[1] = Math.min(peers.n[1], peers.t);
      peers.n[2] = Math.max(peers.n[2], peers.e);
      peers.n[3] = Math.max(peers.n[3], peers.t);
    }
    static rectBoundingBox(moss, north, orbit, pine, i) {
      i[0] = Math.min(i[0], peers.e, peers.n);
      i[1] = Math.min(i[1], peers.t, pine);
      i[2] = Math.max(i[2], peers.e, peers.n);
      i[3] = Math.max(i[3], peers.t, pine);
    }
    static #e(quest, ridge, storm, tide, i, a, unity, s, vale, wave) {
      if (vale <= 0 || vale >= 1) return;
      let u = 1 - vale,
        apex = vale * vale,
        brook = apex * vale,
        p =
          u * (u * (u * peers.e + 3 * vale * peers.t) + 3 * apex * peers.n) +
          brook * tide,
        cliff = u * (u * (u * i + 3 * vale * a) + 3 * apex * unity) + brook * s;
      wave[0] = Math.min(wave[0], p);
      wave[1] = Math.min(wave[1], cliff);
      wave[2] = Math.max(wave[2], p);
      wave[3] = Math.max(wave[3], cliff);
    }
    static #t(dusk, elm, fern, grove, i, a, hill, s, isle, juniper, u, lagoon) {
      if (Math.abs(isle) < 1e-12) {
        Math.abs(juniper) >= 1e-12 &&
          this.#e(
            peers.e,
            peers.t,
            peers.n,
            grove,
            i,
            a,
            hill,
            s,
            -u / juniper,
            lagoon,
          );
        return;
      }
      let meadow = juniper ** 2 - 4 * u * isle;
      if (meadow < 0) return;
      let p = Math.sqrt(meadow),
        nest = 2 * isle;
      this.#e(
        peers.e,
        peers.t,
        peers.n,
        grove,
        i,
        a,
        hill,
        s,
        (-juniper + p) / nest,
        lagoon,
      );
      this.#e(
        peers.e,
        peers.t,
        peers.n,
        grove,
        i,
        a,
        hill,
        s,
        (-juniper - p) / nest,
        lagoon,
      );
    }
    static bezierBoundingBox(oak, petal, quiet, rain, i, a, seed, s, trail) {
      trail[0] = Math.min(trail[0], peers.e, seed);
      trail[1] = Math.min(trail[1], peers.t, s);
      trail[2] = Math.max(trail[2], peers.e, seed);
      trail[3] = Math.max(trail[3], peers.t, s);
      this.#t(
        peers.e,
        peers.n,
        i,
        seed,
        peers.t,
        rain,
        a,
        s,
        3 * (-peers.e + 3 * (peers.n - i) + seed),
        6 * (peers.e - 2 * peers.n + i),
        3 * (peers.n - peers.e),
        trail,
      );
      this.#t(
        peers.e,
        peers.n,
        i,
        seed,
        peers.t,
        rain,
        a,
        s,
        3 * (-peers.t + 3 * (rain - a) + s),
        6 * (peers.t - 2 * rain + a),
        3 * (rain - peers.t),
        trail,
      );
    }
  };
}
