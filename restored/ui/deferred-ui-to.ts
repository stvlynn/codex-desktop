// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `UBl`) / export `To`.

export type BindDeferredUiToPeers = {
  ABl: (...args: unknown[]) => unknown;
  BBl: (...args: unknown[]) => unknown;
  CBl: (...args: unknown[]) => unknown;
  DBl: (...args: unknown[]) => unknown;
  EBl: (...args: unknown[]) => unknown;
  FBl: (...args: unknown[]) => unknown;
  HBl: (...args: unknown[]) => unknown;
  IBl: (...args: unknown[]) => unknown;
  LBl: (...args: unknown[]) => unknown;
  MBl: (...args: unknown[]) => unknown;
  NBl: (...args: unknown[]) => unknown;
  OBl: (...args: unknown[]) => unknown;
  PBl: (...args: unknown[]) => unknown;
  RBl: (...args: unknown[]) => unknown;
  SBl: (...args: unknown[]) => unknown;
  TBl: (...args: unknown[]) => unknown;
  VBl: (...args: unknown[]) => unknown;
  _Bl: (...args: unknown[]) => unknown;
  __webpack_nonce__: (...args: unknown[]) => unknown;
  a5: (...args: unknown[]) => unknown;
  bBl: (...args: unknown[]) => unknown;
  dBl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fBl: (...args: unknown[]) => unknown;
  gBl: (...args: unknown[]) => unknown;
  hBl: (...args: unknown[]) => unknown;
  i5: (...args: unknown[]) => unknown;
  jBl: (...args: unknown[]) => unknown;
  kBl: (...args: unknown[]) => unknown;
  mBl: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  pBl: (...args: unknown[]) => unknown;
  parseInt: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  self: (...args: unknown[]) => unknown;
  uBl: (...args: unknown[]) => unknown;
  vBl: (...args: unknown[]) => unknown;
  wBl: (...args: unknown[]) => unknown;
  xBl: (...args: unknown[]) => unknown;
  yBl: (...args: unknown[]) => unknown;
  zBl: (...args: unknown[]) => unknown;
};
let peers: BindDeferredUiToPeers | null = null;

/** Wire bindDeferredUiTo peers once companions land. */
export function setBindDeferredUiToPeers(next: BindDeferredUiToPeers): void {
  peers = next;
}

/**
 * Bundle export `To` / internal `UBl`.
 */
export function bindDeferredUiTo() {
  if (peers == null) {
    throw new Error("bindDeferredUiTo peers are not configured");
  }
  return peers.e(() => {
    i5 = peers.r(peers.o(), 1);
    mBl = function (e, t, n) {
      return (
        t === undefined && (t = 0),
        n === undefined && (n = 1),
        peers.e > n ? n : peers.e < t ? t : peers.e
      );
    };
    hBl = function (e) {
      return "touches" in peers.e;
    };
    gBl = function (e) {
      return (peers.e && peers.e.ownerDocument.defaultView) || peers.self;
    };
    _Bl = function (e, event, n) {
      var r = peers.e.getBoundingClientRect(),
        i = peers.hBl(event)
          ? (function (e, t) {
              for (var n = 0; n < peers.e.length; n++)
                if (peers.e[n].identifier === t) return peers.e[n];
              return peers.e[0];
            })(event.touches, n)
          : event;
      return {
        left: peers.mBl(
          (i.pageX - (peers.r.left + peers.gBl(peers.e).pageXOffset)) /
            peers.r.width,
        ),
        top: peers.mBl(
          (i.pageY - (peers.r.top + peers.gBl(peers.e).pageYOffset)) /
            peers.r.height,
        ),
      };
    };
    vBl = function (e) {
      !peers.hBl(peers.e) && peers.e.preventDefault();
    };
    yBl = peers.i5.memo(function (e) {
      var t = peers.e.onMove,
        n = peers.e.onKey,
        r = peers.dBl(peers.e, ["onMove", "onKey"]),
        i = peers.i5.useRef(null),
        a = peers.fBl(t),
        o = peers.fBl(n),
        s = peers.i5.useRef(null),
        c = peers.i5.useRef(false),
        l = peers.i5.useMemo(
          function () {
            var e = function (e) {
                peers.vBl(peers.e);
                (peers.hBl(peers.e)
                  ? peers.e.touches.length > 0
                  : peers.e.buttons > 0) && i.current
                  ? a(peers._Bl(i.current, peers.e, s.current))
                  : n(false);
              },
              t = function () {
                return n(false);
              };
            function n(n) {
              var r = c.current,
                a = peers.gBl(i.current),
                o = n ? a.addEventListener : a.removeEventListener;
              peers.o(peers.r ? "touchmove" : "mousemove", peers.e);
              peers.o(peers.r ? "touchend" : "mouseup", t);
            }
            return [
              function (e) {
                var t = peers.e.nativeEvent,
                  r = i.current;
                if (
                  peers.r &&
                  (peers.vBl(t),
                  !(function (e, t) {
                    return t && !peers.hBl(peers.e);
                  })(t, c.current) && peers.r)
                ) {
                  if (peers.hBl(t)) {
                    c.current = true;
                    var o = t.changedTouches || [];
                    peers.o.length && (s.current = peers.o[0].identifier);
                  }
                  peers.r.focus();
                  a(peers._Bl(peers.r, t, s.current));
                  n(true);
                }
              },
              function (e) {
                var t = peers.e.which || peers.e.keyCode;
                t < 37 ||
                  t > 40 ||
                  (peers.e.preventDefault(),
                  peers.o({
                    left: t === 39 ? 0.05 : t === 37 ? -0.05 : 0,
                    top: t === 40 ? 0.05 : t === 38 ? -0.05 : 0,
                  }));
              },
              n,
            ];
          },
          [peers.o, a],
        ),
        u = l[0],
        d = l[1],
        f = l[2];
      return (
        peers.i5.useEffect(
          function () {
            return f;
          },
          [f],
        ),
        peers.i5.createElement(
          "div",
          peers.uBl({}, peers.r, {
            onTouchStart: u,
            onMouseDown: u,
            className: "react-colorful__interactive",
            ref: i,
            onKeyDown: d,
            tabIndex: 0,
            role: "slider",
          }),
        )
      );
    });
    bBl = function (e) {
      return peers.e.filter(Boolean).join(" ");
    };
    xBl = function (e) {
      var t = peers.e.color,
        n = peers.e.left,
        r = peers.e.top,
        i = peers.r === undefined ? 0.5 : peers.r,
        a = peers.bBl(["react-colorful__pointer", peers.e.className]);
      return peers.i5.createElement(
        "div",
        {
          className: a,
          style: {
            top: 100 * i + "%",
            left: 100 * n + "%",
          },
        },
        peers.i5.createElement("div", {
          className: "react-colorful__pointer-fill",
          style: {
            backgroundColor: t,
          },
        }),
      );
    };
    a5 = function (e, t, n) {
      return (
        t === undefined && (t = 0),
        n === undefined && (n = 10 ** t),
        Math.round(n * peers.e) / n
      );
    };
    360 / (2 * Math.PI);
    SBl = function (e) {
      return peers.ABl(peers.CBl(peers.e));
    };
    CBl = function (e) {
      return (
        peers.e[0] === "#" && (e = peers.e.substring(1)),
        peers.e.length < 6
          ? {
              r: peers.parseInt(peers.e[0] + peers.e[0], 16),
              g: peers.parseInt(peers.e[1] + peers.e[1], 16),
              b: peers.parseInt(peers.e[2] + peers.e[2], 16),
              a:
                peers.e.length === 4
                  ? peers.a5(
                      peers.parseInt(peers.e[3] + peers.e[3], 16) / 255,
                      2,
                    )
                  : 1,
            }
          : {
              r: peers.parseInt(peers.e.substring(0, 2), 16),
              g: peers.parseInt(peers.e.substring(2, 4), 16),
              b: peers.parseInt(peers.e.substring(4, 6), 16),
              a:
                peers.e.length === 8
                  ? peers.a5(
                      peers.parseInt(peers.e.substring(6, 8), 16) / 255,
                      2,
                    )
                  : 1,
            }
      );
    };
    wBl = function (e) {
      return peers.kBl(peers.DBl(peers.e));
    };
    TBl = function (e) {
      var t = peers.e.s,
        n = peers.e.v,
        r = peers.e.a,
        i = ((200 - t) * n) / 100;
      return {
        h: peers.a5(peers.e.h),
        s: peers.a5(
          i > 0 && i < 200
            ? ((t * n) / 100 / (i <= 100 ? i : 200 - i)) * 100
            : 0,
        ),
        l: peers.a5(i / 2),
        a: peers.a5(peers.r, 2),
      };
    };
    EBl = function (e) {
      var t = peers.TBl(peers.e);
      return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
    };
    DBl = function (e) {
      var t = peers.e.h,
        n = peers.e.s,
        r = peers.e.v,
        i = peers.e.a;
      t = (t / 360) * 6;
      n /= 100;
      r /= 100;
      var a = Math.floor(t),
        o = peers.r * (1 - n),
        s = peers.r * (1 - (t - a) * n),
        c = peers.r * (1 - (1 - t + a) * n),
        l = a % 6;
      return {
        r: peers.a5(255 * [peers.r, s, peers.o, peers.o, c, peers.r][l]),
        g: peers.a5(255 * [c, peers.r, peers.r, s, peers.o, peers.o][l]),
        b: peers.a5(255 * [peers.o, peers.o, c, peers.r, peers.r, s][l]),
        a: peers.a5(i, 2),
      };
    };
    OBl = function (e) {
      var t = peers.e.toString(16);
      return t.length < 2 ? "0" + t : t;
    };
    kBl = function (e) {
      var t = peers.e.r,
        n = peers.e.g,
        r = peers.e.b,
        i = peers.e.a,
        a = i < 1 ? peers.OBl(peers.a5(255 * i)) : "";
      return "#" + peers.OBl(t) + peers.OBl(n) + peers.OBl(peers.r) + a;
    };
    ABl = function (e) {
      var t = peers.e.r,
        n = peers.e.g,
        r = peers.e.b,
        i = peers.e.a,
        a = Math.max(t, n, peers.r),
        o = a - Math.min(t, n, peers.r),
        s = peers.o
          ? a === t
            ? (n - peers.r) / peers.o
            : a === n
              ? 2 + (peers.r - t) / peers.o
              : 4 + (t - n) / peers.o
          : 0;
      return {
        h: peers.a5(60 * (s < 0 ? s + 6 : s)),
        s: peers.a5(a ? (peers.o / a) * 100 : 0),
        v: peers.a5((a / 255) * 100),
        a: i,
      };
    };
    jBl = peers.i5.memo(function (e) {
      var t = peers.e.hue,
        n = peers.e.onChange,
        r = peers.bBl(["react-colorful__hue", peers.e.className]);
      return peers.i5.createElement(
        "div",
        {
          className: peers.r,
        },
        peers.i5.createElement(
          peers.yBl,
          {
            onMove: function (e) {
              n({
                h: 360 * peers.e.left,
              });
            },
            onKey: function (e) {
              n({
                h: peers.mBl(t + 360 * peers.e.left, 0, 360),
              });
            },
            "aria-label": "Hue",
            "aria-valuenow": peers.a5(t),
            "aria-valuemax": "360",
            "aria-valuemin": "0",
          },
          peers.i5.createElement(peers.xBl, {
            className: "react-colorful__hue-pointer",
            left: t / 360,
            color: peers.EBl({
              h: t,
              s: 100,
              v: 100,
              a: 1,
            }),
          }),
        ),
      );
    });
    MBl = peers.i5.memo(function (e) {
      var t = peers.e.hsva,
        n = peers.e.onChange,
        r = {
          backgroundColor: peers.EBl({
            h: t.h,
            s: 100,
            v: 100,
            a: 1,
          }),
        };
      return peers.i5.createElement(
        "div",
        {
          className: "react-colorful__saturation",
          style: peers.r,
        },
        peers.i5.createElement(
          peers.yBl,
          {
            onMove: function (e) {
              n({
                s: 100 * peers.e.left,
                v: 100 - 100 * peers.e.top,
              });
            },
            onKey: function (e) {
              n({
                s: peers.mBl(t.s + 100 * peers.e.left, 0, 100),
                v: peers.mBl(t.v - 100 * peers.e.top, 0, 100),
              });
            },
            "aria-label": "Color",
            "aria-valuetext":
              "Saturation " +
              peers.a5(t.s) +
              "%, Brightness " +
              peers.a5(t.v) +
              "%",
          },
          peers.i5.createElement(peers.xBl, {
            className: "react-colorful__saturation-pointer",
            top: 1 - t.v / 100,
            left: t.s / 100,
            color: peers.EBl(t),
          }),
        ),
      );
    });
    NBl = function (e, t) {
      if (peers.e === t) return true;
      for (var n in peers.e) if (peers.e[n] !== t[n]) return false;
      return true;
    };
    PBl = function (e, t) {
      return (
        peers.e.toLowerCase() === t.toLowerCase() ||
        peers.NBl(peers.CBl(peers.e), peers.CBl(t))
      );
    };
    IBl = typeof window < "u" ? peers.i5.useLayoutEffect : peers.i5.useEffect;
    LBl = function () {
      return (
        peers.FBl ||
        (typeof peers.__webpack_nonce__ < "u"
          ? peers.__webpack_nonce__
          : undefined)
      );
    };
    RBl = new Map();
    zBl = function (e) {
      peers.IBl(function () {
        var t = peers.e.current ? peers.e.current.ownerDocument : document;
        if (t !== undefined && !peers.RBl.has(t)) {
          var n = t.createElement("style");
          n.innerHTML =
            '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}';
          peers.RBl.set(t, n);
          var r = peers.LBl();
          peers.r && n.setAttribute("nonce", peers.r);
          t.head.appendChild(n);
        }
      }, []);
    };
    BBl = function (e) {
      var t = peers.e.className,
        n = peers.e.colorModel,
        r = peers.e.color,
        i = peers.r === undefined ? n.defaultColor : peers.r,
        a = peers.e.onChange,
        o = peers.dBl(peers.e, [
          "className",
          "colorModel",
          "color",
          "onChange",
        ]),
        s = peers.i5.useRef(null);
      peers.zBl(s);
      var c = peers.pBl(n, i, a),
        l = c[0],
        u = c[1],
        d = peers.bBl(["react-colorful", t]);
      return peers.i5.createElement(
        "div",
        peers.uBl({}, peers.o, {
          ref: s,
          className: d,
        }),
        peers.i5.createElement(peers.MBl, {
          hsva: l,
          onChange: u,
        }),
        peers.i5.createElement(peers.jBl, {
          hue: l.h,
          onChange: u,
          className: "react-colorful__last-control",
        }),
      );
    };
    VBl = {
      defaultColor: "000",
      toHsva: peers.SBl,
      fromHsva: function (e) {
        return peers.wBl({
          h: peers.e.h,
          s: peers.e.s,
          v: peers.e.v,
          a: 1,
        });
      },
      equal: peers.PBl,
    };
    HBl = function (e) {
      return peers.i5.createElement(
        peers.BBl,
        peers.uBl({}, peers.e, {
          colorModel: peers.VBl,
        }),
      );
    };
  });
}
