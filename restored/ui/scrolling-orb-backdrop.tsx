// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$rt`) / export `Pct`.

export type ScrollingOrbBackdropPeers = {
  AudioContext: (...args: unknown[]) => unknown;
  Cit: (...args: unknown[]) => unknown;
  Dit: (...args: unknown[]) => unknown;
  Eit: (...args: unknown[]) => unknown;
  Float32Array: (...args: unknown[]) => unknown;
  Gh: (...args: unknown[]) => unknown;
  Oit: (...args: unknown[]) => unknown;
  Ret: (...args: unknown[]) => unknown;
  Sit: (...args: unknown[]) => unknown;
  Tit: (...args: unknown[]) => unknown;
  _it: (...args: unknown[]) => unknown;
  ait: (...args: unknown[]) => unknown;
  bit: (...args: unknown[]) => unknown;
  cancelAnimationFrame: (...args: unknown[]) => unknown;
  cit: (...args: unknown[]) => unknown;
  clearRect: (...args: unknown[]) => unknown;
  eit: (...args: unknown[]) => unknown;
  fit: (...args: unknown[]) => unknown;
  getComputedStyle: (...args: unknown[]) => unknown;
  getContext: (...args: unknown[]) => unknown;
  git: (...args: unknown[]) => unknown;
  iit: (...args: unknown[]) => unknown;
  mit: (...args: unknown[]) => unknown;
  nit: (...args: unknown[]) => unknown;
  requestAnimationFrame: (...args: unknown[]) => unknown;
  rit: (...args: unknown[]) => unknown;
  sit: (...args: unknown[]) => unknown;
  tit: (...args: unknown[]) => unknown;
  uit: (...args: unknown[]) => unknown;
  vit: (...args: unknown[]) => unknown;
  wit: (...args: unknown[]) => unknown;
  xit: (...args: unknown[]) => unknown;
  yit: (...args: unknown[]) => unknown;
  zet: (...args: unknown[]) => unknown;
};
let peers: ScrollingOrbBackdropPeers | null = null;

/** Wire ScrollingOrbBackdrop peers once companions land. */
export function setScrollingOrbBackdropPeers(
  next: ScrollingOrbBackdropPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Pct` / internal `$rt`.
 */
export function ScrollingOrbBackdrop(e: unknown) {
  if (peers == null) {
    throw new Error("ScrollingOrbBackdrop peers are not configured");
  }
  let n = e === undefined ? {} : e;
  let { bufferDurationSecs = 10, variant = "scrolling" } = n,
    [s, c] = peers.Gh.useState(0),
    l = peers.Gh.useRef(null),
    u = peers.Gh.useRef(null),
    d = peers.Gh.useRef(null),
    f = peers.Gh.useRef(null),
    p = peers.Gh.useRef(null),
    m = [];
  let h = peers.Gh.useRef(m),
    g = peers.Gh.useRef(0),
    _ = peers.Gh.useRef(0),
    v = peers.Gh.useRef(0),
    y = peers.Gh.useRef(null),
    b = peers.Gh.useRef(null),
    x = peers.Gh.useRef(0),
    S = peers.Gh.useRef(0),
    C = new peers.Float32Array();
  let w = peers.Gh.useRef(C),
    T = peers.Gh.useRef(1),
    E = peers.Gh.useRef(-1),
    D = (e) => {
      if (e == null) return false;
      let t = peers.nit(e.clientWidth, variant);
      return (
        (h.current = Array.from(
          {
            length: t,
          },
          peers.eit,
        )),
        (T.current = Math.max(
          1,
          Math.floor((peers.zet * bufferDurationSecs) / t),
        )),
        (w.current = new peers.Float32Array()),
        true
      );
    };
  let O = D,
    k = () => {
      let e = p.current;
      e?.getContext("2d")?.clearRect(0, 0, e.width, e.height);
    };
  let A = k,
    j = () => {
      d.current != null &&
        ((d.current.onaudioprocess = null),
        d.current.disconnect(),
        (d.current = null));
      u.current != null && (u.current.disconnect(), (u.current = null));
      l.current != null && l.current.close();
      l.current = null;
      f.current = null;
      h.current = [];
      g.current = 0;
      _.current = 0;
      v.current = 0;
      y.current != null && peers.cancelAnimationFrame(y.current);
      y.current = null;
      b.current = null;
      x.current = 0;
      S.current = 0;
      w.current = new peers.Float32Array();
      T.current = 1;
      E.current = -1;
      A();
    };
  let M = j,
    N = () => {
      h.current = [];
      g.current = 0;
      _.current = 0;
      v.current = 0;
      b.current = null;
      x.current = 0;
      S.current = 0;
      w.current = new peers.Float32Array();
      T.current = 1;
      c(0);
      E.current = -1;
    };
  let P = N,
    F = () => {
      let e = p.current;
      if (e == null) return;
      let t = e.getContext("2d");
      if (t == null) return;
      let { clientHeight, clientWidth } = e;
      if (clientWidth === 0 || clientHeight === 0) return;
      let i = peers.nit(clientWidth, variant);
      h.current.length !== i && O(e);
      let a = h.current;
      if (a.length === 0) return;
      let s = window.devicePixelRatio || 1;
      e.width = clientWidth * s;
      e.height = clientHeight * s;
      t.setTransform(1, 0, 0, 1, 0, 0);
      t.clearRect(0, 0, e.width, e.height);
      t.save();
      let c = e.height * 0.5;
      if (
        (t.translate(0, c),
        (t.fillStyle = peers.getComputedStyle(e).color || "#000"),
        variant === "orb")
      ) {
        let n = peers.Cit * s,
          r = n + peers.wit * s,
          i = -r * S.current;
        for (let o = 0; o < a.length; o += 1) {
          let s = Math.min(1, Math.max(0, a[o] ?? 0)),
            c = peers.Dit + s * (1 - peers.Dit),
            l = e.height * c * peers.Sit,
            u = o * r + i,
            d = Math.min(n / 2, l / 2);
          t.globalAlpha = 0.9;
          t.beginPath();
          t.roundRect(u, -l / 2, n, l, d);
          t.fill();
        }
        let o = t.createRadialGradient(
          e.width / 2,
          0,
          0,
          e.width / 2,
          0,
          e.width / 2,
        );
        o.addColorStop(0, "rgb(0 0 0 / 1)");
        o.addColorStop(peers.Tit, "rgb(0 0 0 / 1)");
        o.addColorStop(peers.Eit, "rgb(0 0 0 / 0)");
        o.addColorStop(1, "rgb(0 0 0 / 0)");
        t.globalAlpha = 1;
        t.globalCompositeOperation = "destination-in";
        t.fillStyle = o;
        t.fillRect(0, -c, e.width, e.height);
        t.restore();
        return;
      }
      let l = e.width / a.length;
      if (variant === "compact") {
        let n = l * peers._it,
          r = l * peers.vit,
          i = n * a.length + r * (a.length - 1),
          o = (e.width - i) / 2;
        for (let e = 0; e < a.length; e += 1) {
          let i = a[e] ?? 0,
            l = Math.max(1.5 * s, i * 10 * c),
            u = o + e * (n + r),
            d = Math.min(n / 2, l);
          t.globalAlpha = i <= 0.0025 ? 0.5 : 0.95;
          t.beginPath();
          t.roundRect(u, -l, n, l * 2, d);
          t.fill();
        }
        t.restore();
        return;
      }
      if (variant === "centered") {
        let e = l / 2;
        for (let n = 0; n < a.length; n += 1) {
          let r = a[n] ?? 0,
            i = peers.rit(n, a.length),
            o = r * 10 * c;
          t.globalAlpha = r <= 0.0025 ? 0.2 : Math.min(1, 0.35 + i * 0.45);
          t.fillRect(n * l, -o, e, o * 2);
        }
        t.restore();
        return;
      }
      let u = -1;
      for (let e = 0; e < a.length; e += 1)
        if ((a[e] ?? 0) > 0.0025) {
          u = e;
          break;
        }
      for (let e = 0; e < a.length; e += 1) {
        let n = a[e] ?? 0;
        n *= 10;
        let r = n * c,
          i = e * l;
        t.globalAlpha = u === -1 || e < u ? 0.35 : 1;
        t.fillRect(i, -r, l / 2, r * 2);
      }
      t.restore();
    };
  let I = F,
    L = () => {
      let e = () => {
        let t = b.current;
        S.current =
          t == null
            ? 0
            : Math.min(1, Math.max(0, (performance.now() - t) / peers.Oit));
        I();
        y.current = peers.requestAnimationFrame(e);
      };
      y.current = peers.requestAnimationFrame(e);
    };
  let R = L,
    z = (e) => {
      if (
        (M(),
        P(),
        O(p.current),
        variant === "orb" && ((b.current = performance.now()), R()),
        I(),
        typeof peers.AudioContext > "u")
      )
        return;
      let t = new peers.AudioContext();
      l.current = t;
      let n = t.createMediaStreamSource(e);
      u.current = n;
      let r = t.createScriptProcessor(2048, 1, 1);
      d.current = r;
      f.current = performance.now();
      r.onaudioprocess = (e) => {
        let t = e.inputBuffer.getChannelData(0),
          n = 0;
        for (let e = 0; e < t.length; e += 1) {
          let r = Math.abs(t[e] ?? 0);
          n += r * r;
          t[e] = r < 0.0025 ? peers.Ret : r;
        }
        h.current.length === 0 && O(p.current);
        let r = h.current.length,
          i = Math.sqrt(n / Math.max(1, t.length));
        if (variant === "orb") {
          let e = peers.tit(i);
          x.current = Math.max(x.current, e);
          let t = performance.now(),
            n = b.current ?? t,
            r = false;
          for (; t - n >= peers.Oit; ) {
            h.current.push(x.current);
            h.current.shift();
            x.current = e;
            n += peers.Oit;
            r = true;
          }
          b.current = n;
          r && I();
        } else if (variant === "compact") {
          let e = peers.tit(i) * peers.yit,
            n = _.current,
            a = e > n ? peers.mit : peers.xit,
            o = n * (1 - a) + e * a;
          _.current = o;
          v.current += peers.bit;
          for (let e = 0; e < r; e += 1) {
            let n = 0.9 + ((Math.sin(v.current - e * 0.8) + 1) / 2) * 0.1,
              a = peers.iit(t, e, r, i),
              s = Math.min(peers.yit, peers.Ret + o * n * a),
              c = h.current[e] ?? 0.0025;
            h.current[e] = c * (1 - peers.git) + s * peers.git;
          }
          I();
        } else if (variant === "centered") {
          let e = peers.tit(i) * peers.uit,
            n = g.current,
            a = e > n ? peers.cit : peers.fit,
            o = n * (1 - a) + e * a;
          g.current = o;
          for (let e = 0; e < r; e += 1) {
            let n = peers.ait(t, Math.round(Math.abs(e - (r - 1) / 2)), i);
            h.current[e] = Math.min(
              peers.uit,
              peers.Ret + o * peers.rit(e, r) * n,
            );
          }
          I();
        } else {
          let e = w.current,
            n = new peers.Float32Array(e.length + t.length);
          n.set(e, 0);
          n.set(t, e.length);
          let i = T.current,
            a = false,
            o = 0;
          if (r > 0 && i > 0)
            for (; o + i <= n.length; ) {
              let e = o + i,
                t = 0;
              for (let r = o; r < e; r += 1) t += n[r] ?? 0;
              let s = t / i;
              h.current.push(s);
              h.current.length > r && h.current.shift();
              o = e;
              a = true;
            }
          w.current = n.slice(o);
          a && I();
        }
        if (f.current != null) {
          let e = Math.max(
            0,
            Math.floor((performance.now() - f.current) / 1e3),
          );
          e !== E.current && ((E.current = e), c(e * 1e3));
        }
      };
      n.connect(r);
      r.connect(t.destination);
    };
  let B = z,
    V = () => {
      return f.current == null ? s : Math.max(0, performance.now() - f.current);
    };
  let H = V,
    U,
    W;
  U = () => {
    return () => {
      M();
    };
  };
  W = [M];
  peers.Gh.useEffect(U, W);
  return {
    getCurrentRecordingDurationMs: H,
    recordingDurationMs: s,
    waveformCanvasRef: p,
    startWaveformCapture: B,
    stopWaveformCapture: M,
    resetWaveformDisplay: P,
  };
}
