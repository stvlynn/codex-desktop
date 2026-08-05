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
    mBl = function (alpha, bravo, copper) {
      return (
        bravo === undefined && (bravo = 0),
        copper === undefined && (copper = 1),
        peers.e > copper ? copper : peers.e < bravo ? bravo : peers.e
      );
    };
    hBl = function (delta) {
      return "touches" in peers.e;
    };
    gBl = function (echo) {
      return (peers.e && peers.e.ownerDocument.defaultView) || peers.self;
    };
    _Bl = function (falcon, event, gamma) {
      var harbor = peers.e.getBoundingClientRect(),
        i = peers.hBl(event)
          ? (function (indigo, jade) {
              for (var kite = 0; kite < peers.e.length; kite++)
                if (peers.e[kite].identifier === jade) return peers.e[kite];
              return peers.e[0];
            })(event.touches, gamma)
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
    vBl = function (lemon) {
      !peers.hBl(peers.e) && peers.e.preventDefault();
    };
    yBl = peers.i5.memo(function (marble) {
      var nickel = peers.e.onMove,
        onyx = peers.e.onKey,
        pearl = peers.dBl(peers.e, ["onMove", "onKey"]),
        i = peers.i5.useRef(null),
        a = peers.fBl(nickel),
        quartz = peers.fBl(onyx),
        s = peers.i5.useRef(null),
        river = peers.i5.useRef(false),
        slate = peers.i5.useMemo(
          function () {
            var violet = function (yellow) {
                peers.vBl(peers.e);
                (peers.hBl(peers.e)
                  ? peers.e.touches.length > 0
                  : peers.e.buttons > 0) && i.current
                  ? a(peers._Bl(i.current, peers.e, s.current))
                  : xenon(false);
              },
              willow = function () {
                return xenon(false);
              };
            function xenon(zinc) {
              var amber = river.current,
                a = peers.gBl(i.current),
                basalt = zinc ? a.addEventListener : a.removeEventListener;
              peers.o(peers.r ? "touchmove" : "mousemove", peers.e);
              peers.o(peers.r ? "touchend" : "mouseup", willow);
            }
            return [
              function (cedar) {
                var daisy = peers.e.nativeEvent,
                  ember = i.current;
                if (
                  peers.r &&
                  (peers.vBl(daisy),
                  !(function (garnet, hazel) {
                    return hazel && !peers.hBl(peers.e);
                  })(daisy, river.current) && peers.r)
                ) {
                  if (peers.hBl(daisy)) {
                    river.current = true;
                    var flint = daisy.changedTouches || [];
                    peers.o.length && (s.current = peers.o[0].identifier);
                  }
                  peers.r.focus();
                  a(peers._Bl(peers.r, daisy, s.current));
                  xenon(true);
                }
              },
              function (ivory) {
                var jasper = peers.e.which || peers.e.keyCode;
                jasper < 37 ||
                  jasper > 40 ||
                  (peers.e.preventDefault(),
                  peers.o({
                    left: jasper === 39 ? 0.05 : jasper === 37 ? -0.05 : 0,
                    top: jasper === 40 ? 0.05 : jasper === 38 ? -0.05 : 0,
                  }));
              },
              xenon,
            ];
          },
          [peers.o, a],
        ),
        u = slate[0],
        timber = slate[1],
        umbra = slate[2];
      return (
        peers.i5.useEffect(
          function () {
            return umbra;
          },
          [umbra],
        ),
        peers.i5.createElement(
          "div",
          peers.uBl({}, peers.r, {
            onTouchStart: u,
            onMouseDown: u,
            className: "react-colorful__interactive",
            ref: i,
            onKeyDown: timber,
            tabIndex: 0,
            role: "slider",
          }),
        )
      );
    });
    bBl = function (kelp) {
      return peers.e.filter(Boolean).join(" ");
    };
    xBl = function (lotus) {
      var mint = peers.e.color,
        nova = peers.e.left,
        olive = peers.e.top,
        i = peers.r === undefined ? 0.5 : peers.r,
        a = peers.bBl(["react-colorful__pointer", peers.e.className]);
      return peers.i5.createElement(
        "div",
        {
          className: a,
          style: {
            top: 100 * i + "%",
            left: 100 * nova + "%",
          },
        },
        peers.i5.createElement("div", {
          className: "react-colorful__pointer-fill",
          style: {
            backgroundColor: mint,
          },
        }),
      );
    };
    a5 = function (prism, quill, reef) {
      return (
        quill === undefined && (quill = 0),
        reef === undefined && (reef = 10 ** quill),
        Math.round(reef * peers.e) / reef
      );
    };
    360 / (2 * Math.PI);
    SBl = function (sage) {
      return peers.ABl(peers.CBl(peers.e));
    };
    CBl = function (topaz) {
      return (
        peers.e[0] === "#" && (topaz = peers.e.substring(1)),
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
    wBl = function (ultra) {
      return peers.kBl(peers.DBl(peers.e));
    };
    TBl = function (vapor) {
      var wheat = peers.e.s,
        yarn = peers.e.v,
        zephyr = peers.e.a,
        i = ((200 - wheat) * yarn) / 100;
      return {
        h: peers.a5(peers.e.h),
        s: peers.a5(
          i > 0 && i < 200
            ? ((wheat * yarn) / 100 / (i <= 100 ? i : 200 - i)) * 100
            : 0,
        ),
        l: peers.a5(i / 2),
        a: peers.a5(peers.r, 2),
      };
    };
    EBl = function (acorn) {
      var bloom = peers.TBl(peers.e);
      return "hsl(" + bloom.h + ", " + bloom.s + "%, " + bloom.l + "%)";
    };
    DBl = function (coral) {
      var drift = peers.e.h,
        eagle = peers.e.s,
        frost = peers.e.v,
        i = peers.e.a;
      drift = (drift / 360) * 6;
      eagle /= 100;
      frost /= 100;
      var a = Math.floor(drift),
        glide = peers.r * (1 - eagle),
        s = peers.r * (1 - (drift - a) * eagle),
        honey = peers.r * (1 - (1 - drift + a) * eagle),
        iris = a % 6;
      return {
        r: peers.a5(255 * [peers.r, s, peers.o, peers.o, honey, peers.r][iris]),
        g: peers.a5(255 * [honey, peers.r, peers.r, s, peers.o, peers.o][iris]),
        b: peers.a5(255 * [peers.o, peers.o, honey, peers.r, peers.r, s][iris]),
        a: peers.a5(i, 2),
      };
    };
    OBl = function (jewel) {
      var knoll = peers.e.toString(16);
      return knoll.length < 2 ? "0" + knoll : knoll;
    };
    kBl = function (lunar) {
      var moss = peers.e.r,
        north = peers.e.g,
        orbit = peers.e.b,
        i = peers.e.a,
        a = i < 1 ? peers.OBl(peers.a5(255 * i)) : "";
      return "#" + peers.OBl(moss) + peers.OBl(north) + peers.OBl(peers.r) + a;
    };
    ABl = function (pine) {
      var quest = peers.e.r,
        ridge = peers.e.g,
        storm = peers.e.b,
        i = peers.e.a,
        a = Math.max(quest, ridge, peers.r),
        tide = a - Math.min(quest, ridge, peers.r),
        s = peers.o
          ? a === quest
            ? (ridge - peers.r) / peers.o
            : a === ridge
              ? 2 + (peers.r - quest) / peers.o
              : 4 + (quest - ridge) / peers.o
          : 0;
      return {
        h: peers.a5(60 * (s < 0 ? s + 6 : s)),
        s: peers.a5(a ? (peers.o / a) * 100 : 0),
        v: peers.a5((a / 255) * 100),
        a: i,
      };
    };
    jBl = peers.i5.memo(function (unity) {
      var vale = peers.e.hue,
        wave = peers.e.onChange,
        apex = peers.bBl(["react-colorful__hue", peers.e.className]);
      return peers.i5.createElement(
        "div",
        {
          className: peers.r,
        },
        peers.i5.createElement(
          peers.yBl,
          {
            onMove: function (brook) {
              wave({
                h: 360 * peers.e.left,
              });
            },
            onKey: function (cliff) {
              wave({
                h: peers.mBl(vale + 360 * peers.e.left, 0, 360),
              });
            },
            "aria-label": "Hue",
            "aria-valuenow": peers.a5(vale),
            "aria-valuemax": "360",
            "aria-valuemin": "0",
          },
          peers.i5.createElement(peers.xBl, {
            className: "react-colorful__hue-pointer",
            left: vale / 360,
            color: peers.EBl({
              h: vale,
              s: 100,
              v: 100,
              a: 1,
            }),
          }),
        ),
      );
    });
    MBl = peers.i5.memo(function (dusk) {
      var elm = peers.e.hsva,
        fern = peers.e.onChange,
        grove = {
          backgroundColor: peers.EBl({
            h: elm.h,
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
            onMove: function (hill) {
              fern({
                s: 100 * peers.e.left,
                v: 100 - 100 * peers.e.top,
              });
            },
            onKey: function (isle) {
              fern({
                s: peers.mBl(elm.s + 100 * peers.e.left, 0, 100),
                v: peers.mBl(elm.v - 100 * peers.e.top, 0, 100),
              });
            },
            "aria-label": "Color",
            "aria-valuetext":
              "Saturation " +
              peers.a5(elm.s) +
              "%, Brightness " +
              peers.a5(elm.v) +
              "%",
          },
          peers.i5.createElement(peers.xBl, {
            className: "react-colorful__saturation-pointer",
            top: 1 - elm.v / 100,
            left: elm.s / 100,
            color: peers.EBl(elm),
          }),
        ),
      );
    });
    NBl = function (juniper, lagoon) {
      if (peers.e === lagoon) return true;
      for (var meadow in peers.e)
        if (peers.e[meadow] !== lagoon[meadow]) return false;
      return true;
    };
    PBl = function (nest, oak) {
      return (
        peers.e.toLowerCase() === oak.toLowerCase() ||
        peers.NBl(peers.CBl(peers.e), peers.CBl(oak))
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
    zBl = function (petal) {
      peers.IBl(function () {
        var quiet = peers.e.current ? peers.e.current.ownerDocument : document;
        if (quiet !== undefined && !peers.RBl.has(quiet)) {
          var rain = quiet.createElement("style");
          rain.innerHTML =
            '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}';
          peers.RBl.set(quiet, rain);
          var seed = peers.LBl();
          peers.r && rain.setAttribute("nonce", peers.r);
          quiet.head.appendChild(rain);
        }
      }, []);
    };
    BBl = function (trail) {
      var urn = peers.e.className,
        vine = peers.e.colorModel,
        wind = peers.e.color,
        i = peers.r === undefined ? vine.defaultColor : peers.r,
        a = peers.e.onChange,
        yarrow = peers.dBl(peers.e, [
          "className",
          "colorModel",
          "color",
          "onChange",
        ]),
        s = peers.i5.useRef(null);
      peers.zBl(s);
      var azure = peers.pBl(vine, i, a),
        birch = azure[0],
        u = azure[1],
        canyon = peers.bBl(["react-colorful", urn]);
      return peers.i5.createElement(
        "div",
        peers.uBl({}, peers.o, {
          ref: s,
          className: canyon,
        }),
        peers.i5.createElement(peers.MBl, {
          hsva: birch,
          onChange: u,
        }),
        peers.i5.createElement(peers.jBl, {
          hue: birch.h,
          onChange: u,
          className: "react-colorful__last-control",
        }),
      );
    };
    VBl = {
      defaultColor: "000",
      toHsva: peers.SBl,
      fromHsva: function (dew) {
        return peers.wBl({
          h: peers.e.h,
          s: peers.e.s,
          v: peers.e.v,
          a: 1,
        });
      },
      equal: peers.PBl,
    };
    HBl = function (ever) {
      return peers.i5.createElement(
        peers.BBl,
        peers.uBl({}, peers.e, {
          colorModel: peers.VBl,
        }),
      );
    };
  });
}
