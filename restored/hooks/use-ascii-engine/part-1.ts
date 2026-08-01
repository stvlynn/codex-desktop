// Restored from ref/webview/assets/use-ascii-engine-DfvLy_CH.js
// Wave GA — full polished body from `use-ascii-engine-DfvLy_CH/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 1 (verified 6/6).
// AST split 1/3
/* split-lane-import-depth:1 */

import { jsxRuntime as getJsxRuntime, react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";

/** split companion stub */
const bravo: any = undefined;
/** split companion stub */
const useAsciiEngineHelper1: any = undefined;

export function useAsciiEngineR(nut: unknown) {
  let {
      lines,
      columns,
      rows,
      scale = 0.75,
      foregroundColor: _useAsciiEngineR = "var(--color-token-checkbox-border)",
      backgroundColor: _useAsciiEngineI = "var(--color-token-side-bar-background)",
      autoCover = false
    } = nut,
    _useAsciiEngineN = bravo.useRef(null),
    piston = bravo.useRef(null),
    rivet = bravo.useRef(null),
    _useAsciiEngineT = bravo.useRef(""),
    screw = bravo.useRef(8),
    torque = bravo.useRef(16),
    valve = bravo.useRef(12),
    axle = bravo.useRef("monospace"),
    bracket = bravo.useRef(lines),
    clamp = bravo.useRef(useAsciiEngineHelper1),
    drill = () => {
      if (!_useAsciiEngineN.current) return null;
      if (!rivet.current) {
        let hub = document.createElement("canvas");
        hub.style.display = "block";
        hub.style.borderRadius = autoCover ? "0px" : "10px";
        hub.style.imageRendering = "crisp-edges";
        _useAsciiEngineN.current.appendChild(hub);
        rivet.current = hub;
      }
      return rivet.current.getContext("2d");
    };
  let engine = drill,
    frame = idler => {
      let jig = valve.current;
      idler.font = `${jig}px ${axle.current}`;
      let keeper = idler.measureText("M"),
        lug = Math.max(1, Math.round(keeper.width)),
        mandrel = Math.max(1, Math.round((keeper.actualBoundingBoxAscent || jig) + (keeper.actualBoundingBoxDescent || Math.ceil(jig * 0.3))));
      screw.current = lug;
      torque.current = mandrel;
    };
  let gasket = frame,
    handle = (nipple, orifice) => {
      let pin = rivet.current,
        race = _useAsciiEngineN.current;
      if (!pin) return 1;
      let __useAsciiEngineR = Number.isFinite(orifice) && orifice > 0 ? orifice : 1,
        sleeve = Math.max(1, Math.floor(window.devicePixelRatio || 1)),
        trunnion = Math.max(1, columns * screw.current),
        boss = Math.max(1, rows * torque.current),
        cam = trunnion * __useAsciiEngineR,
        __useAsciiEngineI = boss * __useAsciiEngineR,
        detent = Math.max(1, Math.round(cam * sleeve)),
        eccentric = Math.max(1, Math.round(__useAsciiEngineI * sleeve));
      return (pin.width !== detent || pin.height !== eccentric) && (pin.width = detent, pin.height = eccentric), pin.style.width = `${cam}px`, pin.style.height = `${__useAsciiEngineI}px`, race && (race.style.width = `${cam}px`, race.style.height = `${__useAsciiEngineI}px`), nipple.setTransform(sleeve * __useAsciiEngineR, 0, 0, sleeve * __useAsciiEngineR, 0, 0), nipple.imageSmoothingEnabled = false, __useAsciiEngineR;
    };
  let insert = handle,
    jacket = () => {
      let follower = engine();
      if (!follower || !rivet.current) return;
      rivet.current.style.borderRadius = autoCover ? "0px" : "10px";
      try {
        follower.setTransform(1, 0, 0, 1, 0, 0);
      } catch {}
      gasket(follower);
      let guide = 1;
      if (autoCover && piston.current) try {
        let quillshaft = piston.current.parentElement?.getBoundingClientRect(),
          roller = Math.max(1, columns * screw.current),
          spindle = Math.max(1, rows * torque.current);
        if (quillshaft && roller > 0 && spindle > 0) {
          let thrust = quillshaft.width / roller,
            yoke = quillshaft.height / spindle;
          guide = Math.max(thrust, yoke);
          !Number.isFinite(guide) || guide <= 0 ? guide = 1 : guide *= 1.02;
        }
      } catch {
        guide = 1;
      }
      let helix = insert(follower, guide) || 1,
        impeller = Math.max(helix, 0.001),
        __useAsciiEngineR = Math.max(1, Math.floor(window.devicePixelRatio || 1)),
        journal = rivet.current.width / (__useAsciiEngineR * impeller),
        kingpin = rivet.current.height / (__useAsciiEngineR * impeller);
      follower.save();
      let land = _useAsciiEngineN.current,
        mesh = (baffle, capstan) => {
          let diaphragm = grommet => {
            try {
              let header = document.createElement("div");
              header.style.display = "none";
              header.style[capstan] = grommet;
              document.body.appendChild(header);
              let injector = getComputedStyle(header)[capstan] || "";
              return header.remove(), injector;
            } catch {
              return "";
            }
          };
          if (baffle && baffle !== "") {
            if (baffle.trim().startsWith("var(")) {
              let jumper = diaphragm(baffle);
              if (jumper) return jumper;
            }
            return baffle;
          }
          if (!land) return "";
          let elbow = getComputedStyle(land),
            ferrule = capstan === "color" ? elbow.color : elbow.backgroundColor;
          if ((ferrule === "rgba(0, 0, 0, 0)" || ferrule === "transparent") && land.parentElement) {
            let kerf = getComputedStyle(land.parentElement);
            ferrule = capstan === "color" ? kerf.color : kerf.backgroundColor;
          }
          return ferrule;
        },
        __useAsciiEngineI = mesh(_useAsciiEngineI, "backgroundColor"),
        neck = mesh(_useAsciiEngineR, "color");
      __useAsciiEngineI && (follower.fillStyle = __useAsciiEngineI, follower.fillRect(0, 0, journal, kingpin));
      neck && (follower.fillStyle = neck);
      follower.textBaseline = "top";
      follower.font = `${valve.current}px ${axle.current}`;
      let pad = torque.current,
        __useAsciiEngineT = Math.min(rows, bracket.current.length);
      for (let louver = 0; louver < __useAsciiEngineT; louver++) {
        let manifold = bracket.current[louver] ?? "";
        manifold && follower.fillText(manifold, 0, louver * pad);
      }
      if (follower.restore(), autoCover && piston.current && _useAsciiEngineN.current) try {
        if (!piston.current.parentElement) return;
        let nip = piston.current;
        nip.style.position = "absolute";
        nip.style.left = "50%";
        nip.style.top = "50%";
        nip.style.transform = "translate(-50%, -50%)";
        nip.style.transformOrigin = "center";
        nip.style.display = "block";
        nip.style.width = _useAsciiEngineN.current.style.width;
        nip.style.height = _useAsciiEngineN.current.style.height;
      } catch {}
    };
  let knurl = jacket,
    lever,
    mount;
  mount = () => {
    clamp.current = knurl;
  };
  lever = [knurl];
  bravo.useEffect(mount, lever);
  let nozzle, platen;
  nozzle = () => {
    let outlet = false,
      packing = _useAsciiEngineN.current;
    return (async () => {
      if (packing) {
        try {
          if (document?.fonts?.ready?.then) try {
            await document.fonts.ready;
          } catch {}
        } catch {}
        outlet || clamp.current();
      }
    })(), () => {
      if (outlet = true, rivet.current) try {
        rivet.current.remove();
      } catch {}
      if (rivet.current = null, packing) try {
        for (; packing.firstChild;) packing.removeChild(packing.firstChild);
      } catch {}
    };
  };
  platen = [];
  bravo.useEffect(nozzle, platen);
  let ratchet, shim;
  ratchet = () => {
    bracket.current = lines;
    let reducer = lines.join("\n");
    reducer !== _useAsciiEngineT.current && (_useAsciiEngineT.current = reducer, requestAnimationFrame(() => {
      requestAnimationFrame(() => clamp.current());
    }));
  };
  shim = [lines];
  bravo.useEffect(ratchet, shim);
  let tappet = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => clamp.current());
    });
  };
  let arbor;
  arbor = [columns, rows, _useAsciiEngineR, _useAsciiEngineI];
  bravo.useEffect(tappet, arbor);
  let bushing, collar;
  bushing = () => {
    if (!autoCover) return;
    let strainer = () => {
      requestAnimationFrame(() => clamp.current());
    };
    return window.addEventListener("resize", strainer), () => {
      window.removeEventListener("resize", strainer);
    };
  };
  collar = [autoCover];
  bravo.useEffect(bushing, collar);
  let dowel = autoCover ? {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "block"
  } : {
    transform: `scale(${scale})`,
    transformOrigin: "center",
    display: "inline-block"
  };
  let flange = autoCover ? 0 : 10,
    gib = <div ref={_useAsciiEngineN} style={{
      display: "inline-block",
      lineHeight: 1,
      borderRadius: flange
    }} />;
  return <div ref={piston} style={dowel}>{gib}</div>;
}
export const useAsciiEngineI = esmInit(() => {
  alpha = reactCompilerRuntime();
  bravo = commonJsInit(react(), 1);
  copper = getJsxRuntime();
});
