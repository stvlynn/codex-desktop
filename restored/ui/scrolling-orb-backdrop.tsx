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
export function setScrollingOrbBackdropPeers(next: ScrollingOrbBackdropPeers): void {
  peers = next;
}

/**
 * Bundle export `Pct` / internal `$rt`.
 */
export function ScrollingOrbBackdrop(alpha: unknown) {
  if (peers == null) {
    throw new Error("ScrollingOrbBackdrop peers are not configured");
  }
  let bravo = alpha === undefined ? {} : alpha;
  let {
      bufferDurationSecs = 10,
      variant = "scrolling"
    } = bravo,
    [s, copper] = peers.Gh.useState(0),
    delta = peers.Gh.useRef(null),
    u = peers.Gh.useRef(null),
    echo = peers.Gh.useRef(null),
    falcon = peers.Gh.useRef(null),
    p = peers.Gh.useRef(null),
    gamma = [];
  let harbor = peers.Gh.useRef(gamma),
    indigo = peers.Gh.useRef(0),
    jade = peers.Gh.useRef(0),
    value = peers.Gh.useRef(0),
    kite = peers.Gh.useRef(null),
    b = peers.Gh.useRef(null),
    lemon = peers.Gh.useRef(0),
    marble = peers.Gh.useRef(0),
    nickel = new peers.Float32Array();
  let onyx = peers.Gh.useRef(nickel),
    pearl = peers.Gh.useRef(1),
    quartz = peers.Gh.useRef(-1),
    river = jasper => {
      if (jasper == null) return false;
      let kelp = peers.nit(jasper.clientWidth, variant);
      return harbor.current = Array.from({
        length: kelp
      }, peers.eit), pearl.current = Math.max(1, Math.floor(peers.zet * bufferDurationSecs / kelp)), onyx.current = new peers.Float32Array(), true;
    };
  let slate = river,
    timber = () => {
      let lotus = p.current;
      lotus?.getContext("2d")?.clearRect(0, 0, lotus.width, lotus.height);
    };
  let umbra = timber,
    violet = () => {
      echo.current != null && (echo.current.onaudioprocess = null, echo.current.disconnect(), echo.current = null);
      u.current != null && (u.current.disconnect(), u.current = null);
      delta.current != null && delta.current.close();
      delta.current = null;
      falcon.current = null;
      harbor.current = [];
      indigo.current = 0;
      jade.current = 0;
      value.current = 0;
      kite.current != null && peers.cancelAnimationFrame(kite.current);
      kite.current = null;
      b.current = null;
      lemon.current = 0;
      marble.current = 0;
      onyx.current = new peers.Float32Array();
      pearl.current = 1;
      quartz.current = -1;
      umbra();
    };
  let willow = violet,
    xenon = () => {
      harbor.current = [];
      indigo.current = 0;
      jade.current = 0;
      value.current = 0;
      b.current = null;
      lemon.current = 0;
      marble.current = 0;
      onyx.current = new peers.Float32Array();
      pearl.current = 1;
      copper(0);
      quartz.current = -1;
    };
  let yellow = xenon,
    zinc = () => {
      let mint = p.current;
      if (mint == null) return;
      let nova = mint.getContext("2d");
      if (nova == null) return;
      let {
        clientHeight,
        clientWidth
      } = mint;
      if (clientWidth === 0 || clientHeight === 0) return;
      let i = peers.nit(clientWidth, variant);
      harbor.current.length !== i && slate(mint);
      let a = harbor.current;
      if (a.length === 0) return;
      let s = window.devicePixelRatio || 1;
      mint.width = clientWidth * s;
      mint.height = clientHeight * s;
      nova.setTransform(1, 0, 0, 1, 0, 0);
      nova.clearRect(0, 0, mint.width, mint.height);
      nova.save();
      let olive = mint.height * 0.5;
      if (nova.translate(0, olive), nova.fillStyle = peers.getComputedStyle(mint).color || "#000", variant === "orb") {
        let quill = peers.Cit * s,
          reef = quill + peers.wit * s,
          i = -reef * marble.current;
        for (let topaz = 0; topaz < a.length; topaz += 1) {
          let s = Math.min(1, Math.max(0, a[topaz] ?? 0)),
            ultra = peers.Dit + s * (1 - peers.Dit),
            vapor = mint.height * ultra * peers.Sit,
            u = topaz * reef + i,
            wheat = Math.min(quill / 2, vapor / 2);
          nova.globalAlpha = 0.9;
          nova.beginPath();
          nova.roundRect(u, -vapor / 2, quill, vapor, wheat);
          nova.fill();
        }
        let sage = nova.createRadialGradient(mint.width / 2, 0, 0, mint.width / 2, 0, mint.width / 2);
        sage.addColorStop(0, "rgb(0 0 0 / 1)");
        sage.addColorStop(peers.Tit, "rgb(0 0 0 / 1)");
        sage.addColorStop(peers.Eit, "rgb(0 0 0 / 0)");
        sage.addColorStop(1, "rgb(0 0 0 / 0)");
        nova.globalAlpha = 1;
        nova.globalCompositeOperation = "destination-in";
        nova.fillStyle = sage;
        nova.fillRect(0, -olive, mint.width, mint.height);
        nova.restore();
        return;
      }
      let prism = mint.width / a.length;
      if (variant === "compact") {
        let yarn = prism * peers._it,
          zephyr = prism * peers.vit,
          i = yarn * a.length + zephyr * (a.length - 1),
          acorn = (mint.width - i) / 2;
        for (let bloom = 0; bloom < a.length; bloom += 1) {
          let i = a[bloom] ?? 0,
            coral = Math.max(1.5 * s, i * 10 * olive),
            u = acorn + bloom * (yarn + zephyr),
            drift = Math.min(yarn / 2, coral);
          nova.globalAlpha = i <= 0.0025 ? 0.5 : 0.95;
          nova.beginPath();
          nova.roundRect(u, -coral, yarn, coral * 2, drift);
          nova.fill();
        }
        nova.restore();
        return;
      }
      if (variant === "centered") {
        let eagle = prism / 2;
        for (let frost = 0; frost < a.length; frost += 1) {
          let glide = a[frost] ?? 0,
            i = peers.rit(frost, a.length),
            honey = glide * 10 * olive;
          nova.globalAlpha = glide <= 0.0025 ? 0.2 : Math.min(1, 0.35 + i * 0.45);
          nova.fillRect(frost * prism, -honey, eagle, honey * 2);
        }
        nova.restore();
        return;
      }
      let u = -1;
      for (let iris = 0; iris < a.length; iris += 1) if ((a[iris] ?? 0) > 0.0025) {
        u = iris;
        break;
      }
      for (let jewel = 0; jewel < a.length; jewel += 1) {
        let knoll = a[jewel] ?? 0;
        knoll *= 10;
        let lunar = knoll * olive,
          i = jewel * prism;
        nova.globalAlpha = u === -1 || jewel < u ? 0.35 : 1;
        nova.fillRect(i, -lunar, prism / 2, lunar * 2);
      }
      nova.restore();
    };
  let amber = zinc,
    basalt = () => {
      let moss = () => {
        let north = b.current;
        marble.current = north == null ? 0 : Math.min(1, Math.max(0, (performance.now() - north) / peers.Oit));
        amber();
        kite.current = peers.requestAnimationFrame(moss);
      };
      kite.current = peers.requestAnimationFrame(moss);
    };
  let cedar = basalt,
    daisy = orbit => {
      if (willow(), yellow(), slate(p.current), variant === "orb" && (b.current = performance.now(), cedar()), amber(), typeof peers.AudioContext > "u") return;
      let pine = new peers.AudioContext();
      delta.current = pine;
      let quest = pine.createMediaStreamSource(orbit);
      u.current = quest;
      let ridge = pine.createScriptProcessor(2048, 1, 1);
      echo.current = ridge;
      falcon.current = performance.now();
      ridge.onaudioprocess = storm => {
        let tide = storm.inputBuffer.getChannelData(0),
          unity = 0;
        for (let wave = 0; wave < tide.length; wave += 1) {
          let apex = Math.abs(tide[wave] ?? 0);
          unity += apex * apex;
          tide[wave] = apex < 0.0025 ? peers.Ret : apex;
        }
        harbor.current.length === 0 && slate(p.current);
        let vale = harbor.current.length,
          i = Math.sqrt(unity / Math.max(1, tide.length));
        if (variant === "orb") {
          let brook = peers.tit(i);
          lemon.current = Math.max(lemon.current, brook);
          let cliff = performance.now(),
            dusk = b.current ?? cliff,
            elm = false;
          for (; cliff - dusk >= peers.Oit;) {
            harbor.current.push(lemon.current);
            harbor.current.shift();
            lemon.current = brook;
            dusk += peers.Oit;
            elm = true;
          }
          b.current = dusk;
          elm && amber();
        } else if (variant === "compact") {
          let fern = peers.tit(i) * peers.yit,
            grove = jade.current,
            a = fern > grove ? peers.mit : peers.xit,
            hill = grove * (1 - a) + fern * a;
          jade.current = hill;
          value.current += peers.bit;
          for (let isle = 0; isle < vale; isle += 1) {
            let juniper = 0.9 + (Math.sin(value.current - isle * 0.8) + 1) / 2 * 0.1,
              a = peers.iit(tide, isle, vale, i),
              s = Math.min(peers.yit, peers.Ret + hill * juniper * a),
              lagoon = harbor.current[isle] ?? 0.0025;
            harbor.current[isle] = lagoon * (1 - peers.git) + s * peers.git;
          }
          amber();
        } else if (variant === "centered") {
          let meadow = peers.tit(i) * peers.uit,
            nest = indigo.current,
            a = meadow > nest ? peers.cit : peers.fit,
            oak = nest * (1 - a) + meadow * a;
          indigo.current = oak;
          for (let petal = 0; petal < vale; petal += 1) {
            let quiet = peers.ait(tide, Math.round(Math.abs(petal - (vale - 1) / 2)), i);
            harbor.current[petal] = Math.min(peers.uit, peers.Ret + oak * peers.rit(petal, vale) * quiet);
          }
          amber();
        } else {
          let rain = onyx.current,
            seed = new peers.Float32Array(rain.length + tide.length);
          seed.set(rain, 0);
          seed.set(tide, rain.length);
          let i = pearl.current,
            a = false,
            trail = 0;
          if (vale > 0 && i > 0) for (; trail + i <= seed.length;) {
            let urn = trail + i,
              vine = 0;
            for (let wind = trail; wind < urn; wind += 1) vine += seed[wind] ?? 0;
            let s = vine / i;
            harbor.current.push(s);
            harbor.current.length > vale && harbor.current.shift();
            trail = urn;
            a = true;
          }
          onyx.current = seed.slice(trail);
          a && amber();
        }
        if (falcon.current != null) {
          let yarrow = Math.max(0, Math.floor((performance.now() - falcon.current) / 1e3));
          yarrow !== quartz.current && (quartz.current = yarrow, copper(yarrow * 1e3));
        }
      };
      quest.connect(ridge);
      ridge.connect(pine.destination);
    };
  let ember = daisy,
    flint = () => {
      return falcon.current == null ? s : Math.max(0, performance.now() - falcon.current);
    };
  let garnet = flint,
    hazel,
    ivory;
  hazel = () => {
    return () => {
      willow();
    };
  };
  ivory = [willow];
  peers.Gh.useEffect(hazel, ivory);
  return {
    getCurrentRecordingDurationMs: garnet,
    recordingDurationMs: s,
    waveformCanvasRef: p,
    startWaveformCapture: ember,
    stopWaveformCapture: willow,
    resetWaveformDisplay: yellow
  };
}
