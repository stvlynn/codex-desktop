// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rjt`) / export `Zat`.

export type ZatPeers = {
  $At: (...args: unknown[]) => unknown;
  $_: (...args: unknown[]) => unknown;
  AAt: (...args: unknown[]) => unknown;
  DAt: (...args: unknown[]) => unknown;
  EAt: (...args: unknown[]) => unknown;
  FAt: (...args: unknown[]) => unknown;
  GAt: (...args: unknown[]) => unknown;
  HAt: (...args: unknown[]) => unknown;
  IAt: (...args: unknown[]) => unknown;
  JAt: (...args: unknown[]) => unknown;
  KAt: (...args: unknown[]) => unknown;
  LAt: (...args: unknown[]) => unknown;
  OAt: (...args: unknown[]) => unknown;
  QAt: (...args: unknown[]) => unknown;
  RAt: (...args: unknown[]) => unknown;
  TAt: (...args: unknown[]) => unknown;
  UAt: (...args: unknown[]) => unknown;
  WAt: (...args: unknown[]) => unknown;
  XAt: (...args: unknown[]) => unknown;
  X_: (...args: unknown[]) => unknown;
  YAt: (...args: unknown[]) => unknown;
  Y_: (...args: unknown[]) => unknown;
  ZAt: (...args: unknown[]) => unknown;
  Z_: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ejt: (...args: unknown[]) => unknown;
  ev: (...args: unknown[]) => unknown;
  isNaN: (...args: unknown[]) => unknown;
  jAt: (...args: unknown[]) => unknown;
  kAt: (...args: unknown[]) => unknown;
  njt: (...args: unknown[]) => unknown;
  qAt: (...args: unknown[]) => unknown;
  tjt: (...args: unknown[]) => unknown;
  tv: (...args: unknown[]) => unknown;
  wAt: (...args: unknown[]) => unknown;
  zAt: (...args: unknown[]) => unknown;
};

let peers: ZatPeers | null = null;

/** Wire zat peers once companions land. */
export function setZatPeers(next: ZatPeers): void {
  peers = next;
}

/**
 * Bundle export `Zat` / internal `rjt`.
 */
export function zat() {
  if (peers == null) {
    throw new Error("zat peers are not configured");
  }

  return peers.e(() => {
    peers.EAt(), KAt = 0.7, qAt = 1 / peers.KAt, ev = `\\s*([+-]?\\d+)\\s*`, JAt = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`, tv = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`, YAt = /^#([0-9a-f]{3,8})$/, XAt = RegExp(`^rgb\\(${peers.ev},${peers.ev},${peers.ev}\\)$`), ZAt = RegExp(`^rgb\\(${peers.tv},${peers.tv},${peers.tv}\\)$`), QAt = RegExp(`^rgba\\(${peers.ev},${peers.ev},${peers.ev},${peers.JAt}\\)$`), $At = RegExp(`^rgba\\(${peers.tv},${peers.tv},${peers.tv},${peers.JAt}\\)$`), ejt = RegExp(`^hsl\\(${peers.JAt},${peers.tv},${peers.tv}\\)$`), tjt = RegExp(`^hsla\\(${peers.JAt},${peers.tv},${peers.tv},${peers.JAt}\\)$`), njt = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    }, peers.wAt(peers.Y_, peers.jAt, {
      copy(e) {
        return Object.assign(new this.constructor(), this, peers.e);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: peers.DAt,
      formatHex: peers.DAt,
      formatHex8: peers.OAt,
      formatHsl: peers.kAt,
      formatRgb: peers.AAt,
      toString: peers.AAt
    }), peers.wAt(peers.X_, peers.FAt, peers.TAt(peers.Y_, {
      brighter(e) {
        return e = peers.e == null ? peers.qAt : peers.qAt ** +peers.e, new peers.X_(this.r * peers.e, this.g * peers.e, this.b * peers.e, this.opacity);
      },
      darker(e) {
        return e = peers.e == null ? peers.KAt : peers.KAt ** +peers.e, new peers.X_(this.r * peers.e, this.g * peers.e, this.b * peers.e, this.opacity);
      },
      rgb() {
        return this;
      },
      clamp() {
        return new peers.X_(peers.Z_(this.r), peers.Z_(this.g), peers.Z_(this.b), peers.zAt(this.opacity));
      },
      displayable() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
      },
      hex: peers.IAt,
      formatHex: peers.IAt,
      formatHex8: peers.LAt,
      formatRgb: peers.RAt,
      toString: peers.RAt
    })), peers.wAt(peers.$_, peers.HAt, peers.TAt(peers.Y_, {
      brighter(e) {
        return e = peers.e == null ? peers.qAt : peers.qAt ** +peers.e, new peers.$_(this.h, this.s, this.l * peers.e, this.opacity);
      },
      darker(e) {
        return e = peers.e == null ? peers.KAt : peers.KAt ** +peers.e, new peers.$_(this.h, this.s, this.l * peers.e, this.opacity);
      },
      rgb() {
        var e = this.h % 360 + (this.h < 0) * 360,
          t = peers.isNaN(peers.e) || peers.isNaN(this.s) ? 0 : this.s,
          n = this.l,
          r = n + (n < 0.5 ? n : 1 - n) * t,
          i = 2 * n - r;
        return new peers.X_(peers.GAt(peers.e >= 240 ? peers.e - 240 : peers.e + 120, i, r), peers.GAt(peers.e, i, r), peers.GAt(peers.e < 120 ? peers.e + 240 : peers.e - 120, i, r), this.opacity);
      },
      clamp() {
        return new peers.$_(peers.UAt(this.h), peers.WAt(this.s), peers.WAt(this.l), peers.zAt(this.opacity));
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || peers.isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      },
      formatHsl() {
        let e = peers.zAt(this.opacity);
        return `${peers.e === 1 ? `hsl(` : `hsla(`}${peers.UAt(this.h)}, ${peers.WAt(this.s) * 100}%, ${peers.WAt(this.l) * 100}%${peers.e === 1 ? `)` : `, ${peers.e})`}`;
      }
    }));
  });
}
