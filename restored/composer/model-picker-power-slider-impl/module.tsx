// Restored from ref/webview/assets/model-picker-power-slider-impl-DbPnlWG9.js
// Wave FY — full polished body from `model-picker-power-slider-impl-DbPnlWG9/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 2 (verified 14/16).
// Wave FZ-support — PascalCase invalid JSX tags: ensureComposerEsm_Ul_Init→EnsureComposerEsm_Ul_Init, identity→Identity, renamedId→ModelPickerPowerSliderImplHelper13, renamedId→ModelPickerPowerSliderImplHelper2, renamedId→ModelPickerPowerSliderImplHelper3, renamedId→ModelPickerPowerSliderImplHelper5, renamedId→ModelPickerPowerSliderImplHelper9.
// Careful split: module + bridges
/* split-lane-import-depth:1 */

import { AppQueryClientProvider } from "../../app/app-query-client-provider";
import { EnsureComposerEsm_Ul_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { AssistantMessageActions } from "../../conversation/assistant-message-actions";
import { FormattedDate } from "../../i18n/formatted-date";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { createInMemoryStorageAdapter } from "../../utils/create-in-memory-storage-adapter";
import { Identity } from "../../utils/Identity";
import { replaceInMemoryStorageEntries } from "../../utils/replace-in-memory-storage-entries";

/** split companion stub */
const WebGLRenderingContext: any = undefined;

/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_Fl_Init@boundaries/composer-esm-inits.ts) */
const AppInitialFl: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_Ll_Init@boundaries/composer-esm-inits.ts) */
const AppInitialLl: any = undefined;
function bravo(field, grain) {
  let haven = Math.sin((field + 1) * 12.9898 + grain * 78.233) * 43758.5453;
  return haven - Math.floor(haven);
}
var copper = esmInit(() => {}),
  delta,
  echo,
  falcon,
  gamma,
  harbor,
  indigo,
  jade,
  kite,
  lemon = esmInit(() => {
    delta = "_FastTrackParticles_1pz9e_1";
    echo = "_FastTrackParticleTravel_1pz9e_1";
    falcon = "_FastTrackParticlePath_1pz9e_7";
    gamma = "_TrackParticle_1pz9e_22";
    harbor = "_TrackParticles_1pz9e_38";
    indigo = "_Burst_1pz9e_76";
    jade = "_ParticleBurst_1pz9e_1";
    kite = {
      FastTrackParticles: delta,
      FastTrackParticleTravel: echo,
      FastTrackParticlePath: falcon,
      TrackParticle: gamma,
      TrackParticles: harbor,
      Burst: indigo,
      ParticleBurst: jade
    };
  });
function ModelPickerPowerSliderImplHelper2(ink) {
  let {
      animationActive,
      initialStartPercent
    } = ink,
    [jadeite] = nickel.useState(initialStartPercent),
    kernel = 1 - Math.min(Math.max(jadeite, 0), 100) / 100,
    leaf = Array.from({
      length: 14
    }, (maple, nimbus) => {
      let opal = 1 + (bravo(nimbus, 21) - 0.5) * 2 * quartz,
        plume = pearl / opal,
        quillow = plume * kernel,
        root = 0.4 + bravo(nimbus, 11) * 0.6,
        silk = 0.5 + bravo(nimbus, 12) * 0.45;
      return <span key={nimbus} className={kite.FastTrackParticlePath} style={{
        animationDelay: `${nimbus * river - quillow}s`,
        animationDuration: `${plume}s`,
        top: `${12 + bravo(nimbus, 23) * 76}%`
      }}>
            <span className={kite.TrackParticle} style={{
          opacity: root,
          transform: `translate(-50%, -50%) scale(${silk})`
        }} />
          </span>;
    });
  return <span aria-hidden={true} className={kite.FastTrackParticles} data-animation-active={animationActive}>
      {leaf}
    </span>;
}
var marble,
  nickel,
  onyx,
  pearl,
  quartz,
  river,
  slate = esmInit(() => {
    marble = reactCompilerRuntime();
    nickel = commonJsInit(react(), 1);
    copper();
    lemon();
    pearl = 1.9;
    quartz = 0.2;
    river = pearl / 14;
  });
function ModelPickerPowerSliderImplHelper3() {
  return <span aria-hidden={true} className={kite.Burst}>
      {Array.from({
      length: 16
    }, timber)}
    </span>;
}
function timber(thorn, upland) {
  return <span key={upland} />;
}
var umbra,
  violet,
  willow = esmInit(() => {
    umbra = reactCompilerRuntime();
    lemon();
  }),
  xenon,
  yellow,
  zinc,
  _e,
  amber,
  basalt = esmInit(() => {
    xenon = "_Fill_notip_7";
    yellow = "_Reveal_notip_1";
    zinc = "_Mask_notip_14";
    _e = "_Canvas_notip_61";
    amber = {
      Fill: xenon,
      Reveal: yellow,
      Mask: zinc,
      Canvas: _e
    };
  });
function ModelPickerPowerSliderImplHelper5(vista) {
  let {
      active,
      reveal,
      shouldReduceMotion
    } = vista,
    wisp = be.useRef(null),
    yonder,
    zenith;
  yonder = () => {
    if (!active) return;
    let beacon = wisp.current;
    if (beacon != null) return cedar(beacon, shouldReduceMotion);
  };
  zenith = [active, shouldReduceMotion];
  be.useEffect(yonder, zenith);
  let anvil = <span className={amber.Mask}>
      <canvas className={amber.Canvas} ref={wisp} />
    </span>;
  return <span aria-hidden={true} className={amber.Fill} data-reveal={reveal}>
      {anvil}
    </span>;
}
function cedar(crag, dome) {
  if (typeof WebGLRenderingContext > "u" || typeof ResizeObserver > "u") return;
  let eddy = crag.getContext("webgl", {
    alpha: true,
    antialias: false,
    depth: false,
    powerPreference: "high-performance",
    stencil: false
  });
  if (eddy == null) return;
  let fjord = daisy(eddy);
  if (fjord == null) return;
  let glen = eddy.createBuffer();
  if (glen == null) {
    eddy.deleteProgram(fjord);
    return;
  }
  let hearth = eddy.getAttribLocation(fjord, "aPosition"),
    inlet = eddy.getUniformLocation(fjord, "uResolution"),
    jetty = eddy.getUniformLocation(fjord, "uTime"),
    knob = performance.now(),
    ledge = 0;
  eddy.useProgram(fjord);
  eddy.bindBuffer(eddy.ARRAY_BUFFER, glen);
  eddy.bufferData(eddy.ARRAY_BUFFER, jasper, eddy.STATIC_DRAW);
  eddy.enableVertexAttribArray(hearth);
  eddy.vertexAttribPointer(hearth, 2, eddy.FLOAT, false, 0, 0);
  let mire = quarry => {
      eddy.uniform1f(jetty, quarry);
      eddy.drawArrays(eddy.TRIANGLES, 0, 6);
    },
    nook = () => {
      let rapids = Math.min(window.devicePixelRatio, 2),
        {
          height,
          width
        } = crag.getBoundingClientRect(),
        spur = Math.max(Math.round(width), 1),
        tor = Math.max(Math.round(height), 1);
      crag.width = Math.round(spur * rapids);
      crag.height = Math.round(tor * rapids);
      eddy.viewport(0, 0, crag.width, crag.height);
      eddy.uniform2f(inlet, spur, tor);
      mire(dome ? 0 : (performance.now() - knob) / 1e3);
    },
    oxbow = updraft => {
      ledge = 0;
      mire((updraft - knob) / 1e3);
      ledge = window.requestAnimationFrame(oxbow);
    },
    pond = new ResizeObserver(nook);
  return nook(), pond.observe(crag), dome || (ledge = window.requestAnimationFrame(oxbow)), () => {
    ledge !== 0 && window.cancelAnimationFrame(ledge);
    pond.disconnect();
    eddy.deleteBuffer(glen);
    eddy.deleteProgram(fjord);
  };
}
function daisy(verge) {
  let weir = ember(verge, verge.VERTEX_SHADER, hazel),
    yard = ember(verge, verge.FRAGMENT_SHADER, ivory);
  if (weir == null || yard == null) return weir != null && verge.deleteShader(weir), yard != null && verge.deleteShader(yard), null;
  let anchor = verge.createProgram();
  return anchor == null ? (verge.deleteShader(weir), verge.deleteShader(yard), null) : (verge.attachShader(anchor, weir), verge.attachShader(anchor, yard), verge.linkProgram(anchor), verge.deleteShader(weir), verge.deleteShader(yard), verge.getProgramParameter(anchor, verge.LINK_STATUS) ? anchor : (verge.deleteProgram(anchor), null));
}
function ember(bolt, cog, disc) {
  let edge = bolt.createShader(cog);
  return edge == null ? null : (bolt.shaderSource(edge, disc), bolt.compileShader(edge), bolt.getShaderParameter(edge, bolt.COMPILE_STATUS) ? edge : (bolt.deleteShader(edge), null));
}
var flint,
  be,
  garnet,
  hazel,
  ivory,
  jasper,
  kelp = esmInit(() => {
    flint = reactCompilerRuntime();
    be = commonJsInit(react(), 1);
    basalt();
    hazel = "\n  attribute vec2 aPosition;\n  varying vec2 vUv;\n\n  void main() {\n    vUv = aPosition * 0.5 + 0.5;\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n  }\n";
    ivory = "\n  precision highp float;\n\n  varying vec2 vUv;\n\n  uniform float uTime;\n  uniform vec2 uResolution;\n\n  const vec3 COLOR_1 = vec3(0.592, 0.388, 0.945);\n  const vec3 COLOR_2 = vec3(0.831, 0.710, 0.953);\n  const vec3 COLOR_3 = vec3(0.286, 0.000, 0.404);\n  const vec3 COLOR_4 = vec3(0.145, 0.055, 0.478);\n  const vec3 COLOR_5 = vec3(0.592, 0.000, 0.996);\n  const vec3 COLOR_6 = vec3(0.780, 0.459, 0.914);\n  const vec3 COLOR_7 = vec3(0.725, 0.576, 1.000);\n  const vec3 COLOR_8 = vec3(0.400, 0.212, 0.820);\n  const vec3 COLOR_9 = vec3(0.882, 0.690, 1.000);\n  const vec3 COLOR_10 = vec3(0.498, 0.345, 0.957);\n  const vec3 COLOR_11 = vec3(0.659, 0.275, 0.910);\n  const vec3 COLOR_12 = vec3(0.212, 0.063, 0.400);\n\n  float grain(vec2 uv) {\n    vec2 grainUv = uv * uResolution * 0.5;\n    return fract(sin(dot(grainUv + uTime, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0;\n  }\n\n  float fieldWeight(vec2 point, vec2 center) {\n    return exp(-dot(point - center, point - center) * 12.0);\n  }\n\n  vec3 fieldColor(vec2 rawUv) {\n    const float speed = 1.25;\n    vec2 uv = vec2(rawUv.x, 0.40 + rawUv.y * 0.18);\n    vec2 spatialScale = vec2(1.55, 1.0);\n    vec2 point = uv * spatialScale;\n    vec2 center1 = vec2(0.18 + sin(uTime * speed * 0.42) * 0.18, 0.36 + cos(uTime * speed * 0.50) * 0.42) * spatialScale;\n    vec2 center2 = vec2(0.34 + cos(uTime * speed * 0.62) * 0.24, 0.62 + sin(uTime * speed * 0.47) * 0.38) * spatialScale;\n    vec2 center3 = vec2(0.52 + sin(uTime * speed * 0.38) * 0.28, 0.30 + cos(uTime * speed * 0.58) * 0.36) * spatialScale;\n    vec2 center4 = vec2(0.70 + cos(uTime * speed * 0.54) * 0.24, 0.68 + sin(uTime * speed * 0.41) * 0.36) * spatialScale;\n    vec2 center5 = vec2(0.88 + sin(uTime * speed * 0.74) * 0.16, 0.36 + cos(uTime * speed * 0.64) * 0.40) * spatialScale;\n    vec2 center6 = vec2(0.12 + cos(uTime * speed * 0.48) * 0.20, 0.72 + sin(uTime * speed * 0.70) * 0.30) * spatialScale;\n    vec2 center7 = vec2(0.30 + sin(uTime * speed * 0.58) * 0.22, 0.44 + cos(uTime * speed * 0.52) * 0.42) * spatialScale;\n    vec2 center8 = vec2(0.46 + cos(uTime * speed * 0.68) * 0.26, 0.72 + sin(uTime * speed * 0.56) * 0.32) * spatialScale;\n    vec2 center9 = vec2(0.60 + sin(uTime * speed * 0.44) * 0.28, 0.26 + cos(uTime * speed * 0.60) * 0.38) * spatialScale;\n    vec2 center10 = vec2(0.76 + cos(uTime * speed * 0.50) * 0.22, 0.54 + sin(uTime * speed * 0.66) * 0.40) * spatialScale;\n    vec2 center11 = vec2(0.92 + sin(uTime * speed * 0.70) * 0.15, 0.66 + cos(uTime * speed * 0.46) * 0.30) * spatialScale;\n    vec2 center12 = vec2(0.06 + cos(uTime * speed * 0.40) * 0.14, 0.32 + sin(uTime * speed * 0.60) * 0.40) * spatialScale;\n    float weight1 = fieldWeight(point, center1) * (0.7 + 0.3 * sin(uTime * 0.91));\n    float weight2 = fieldWeight(point, center2) * (0.7 + 0.3 * cos(uTime * 1.07));\n    float weight3 = fieldWeight(point, center3) * (0.7 + 0.3 * sin(uTime * 0.76));\n    float weight4 = fieldWeight(point, center4) * (0.7 + 0.3 * cos(uTime * 1.18));\n    float weight5 = fieldWeight(point, center5) * (0.7 + 0.3 * sin(uTime * 1.03));\n    float weight6 = fieldWeight(point, center6) * (0.7 + 0.3 * cos(uTime * 0.83));\n    float weight7 = fieldWeight(point, center7) * (0.7 + 0.3 * sin(uTime * 1.24));\n    float weight8 = fieldWeight(point, center8) * (0.7 + 0.3 * cos(uTime * 0.96));\n    float weight9 = fieldWeight(point, center9) * (0.7 + 0.3 * sin(uTime * 1.11));\n    float weight10 = fieldWeight(point, center10) * (0.7 + 0.3 * cos(uTime * 0.72));\n    float weight11 = fieldWeight(point, center11) * (0.7 + 0.3 * sin(uTime * 1.29));\n    float weight12 = fieldWeight(point, center12) * (0.7 + 0.3 * cos(uTime * 0.88));\n    float totalWeight = max(\n      weight1 + weight2 + weight3 + weight4 + weight5 + weight6 +\n        weight7 + weight8 + weight9 + weight10 + weight11 + weight12,\n      0.0001\n    );\n    vec3 color = (\n      COLOR_1 * weight1 + COLOR_2 * weight2 + COLOR_3 * weight3 +\n      COLOR_4 * weight4 + COLOR_5 * weight5 + COLOR_6 * weight6 +\n      COLOR_7 * weight7 + COLOR_8 * weight8 + COLOR_9 * weight9 +\n      COLOR_10 * weight10 + COLOR_11 * weight11 + COLOR_12 * weight12\n    ) / totalWeight;\n    color = mix(COLOR_4, color, 0.96);\n\n    return pow(clamp(color, vec3(0.0), vec3(1.0)), vec3(0.9));\n  }\n\n  void main() {\n    vec3 color = fieldColor(vUv);\n    color += grain(vUv) * 0.012;\n    color.r += sin(uTime * 0.5) * 0.02;\n    color.g += cos(uTime * 0.7) * 0.02;\n    color.b += sin(uTime * 0.6) * 0.02;\n    color = pow(color, vec3(0.92));\n\n    gl_FragColor = vec4(color, 1.0);\n  }\n";
    jasper = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
  });
function ModelPickerPowerSliderImplHelper9(forge) {
  let {
      animationActive,
      index
    } = forge,
    gear = () => lotus(index);
  let [hinge, iron] = prism.useState(gear),
    joint = Math.round(4 + bravo(index, 14) * 92);
  let keystone = joint,
    latch = reef * hinge.durationScale,
    motor = 0.4 + bravo(index, 11) * 0.6,
    nut = 0.5 + bravo(index, 12) * 0.45,
    piston,
    rivet;
  piston = () => {
    if (!animationActive) return;
    let axle = 0,
      bracket = () => {
        let drill = mint();
        iron(drill);
        axle = window.setTimeout(bracket, reef * drill.durationScale * 1e3);
      },
      clamp = window.requestAnimationFrame(bracket);
    return () => {
      window.cancelAnimationFrame(clamp);
      window.clearTimeout(axle);
    };
  };
  rivet = [animationActive];
  prism.useEffect(piston, rivet);
  let screw = `calc(${keystone}% + ${hinge.horizontalOffset}px)`,
    torque = `translate(-50%, -50%) scale(${nut})`,
    valve = `${latch}s`;
  return <span className={kite.TrackParticle} style={{
    left: screw,
    opacity: motor,
    top: hinge.y,
    transform: torque,
    transitionDuration: valve
  }} />;
}
function lotus(engine) {
  let frame = 1;
  return nova(() => {
    let gasket = bravo(engine, frame);
    return frame += 1, gasket;
  });
}
function mint() {
  return nova(Math.random);
}
function nova(handle) {
  let insert = handle(),
    jacket = handle();
  return {
    durationScale: 0.8 + handle() * 1.2,
    horizontalOffset: Math.round((insert - 0.5) * 8),
    y: Math.round(12 + (jacket - 0.5) * 14)
  };
}
var olive,
  prism,
  quill,
  reef,
  sage = esmInit(() => {
    olive = reactCompilerRuntime();
    prism = commonJsInit(react(), 1);
    copper();
    lemon();
    reef = 1.6;
  });
function ModelPickerPowerSliderImplHelper13(knurl) {
  let {
    animationActive
  } = knurl;
  return <span aria-hidden={true} className={kite.TrackParticles}>
      {Array.from({
      length: 14
    }, (lever, mount) => <ModelPickerPowerSliderImplHelper9 key={mount} {...{
      animationActive,
      index: mount
    }} />)}
    </span>;
}
var topaz,
  ultra,
  vapor = esmInit(() => {
    topaz = reactCompilerRuntime();
    sage();
    copper();
    lemon();
  }),
  wheat,
  yarn,
  zephyr,
  acorn,
  bloom,
  coral,
  drift,
  eagle,
  frost,
  glide,
  honey,
  iris,
  jewel,
  knoll,
  lunar,
  moss,
  north,
  orbit,
  pine,
  quest,
  ridge,
  storm,
  tide,
  unity = esmInit(() => {
    wheat = "_Container_3jngk_1";
    yarn = "_Thumb_3jngk_12";
    zephyr = "_Root_3jngk_19";
    acorn = "_EnableModelPickerPowerSliderThumbInputMotion_3jngk_1";
    bloom = "_FastModeTickScale_3jngk_1";
    coral = "_FastModeTickTranslate_3jngk_1";
    drift = "_FastModeTickFade_3jngk_1";
    eagle = "_FastModeTickReturnScale_3jngk_1";
    frost = "_FastModeTickReturnTranslate_3jngk_1";
    glide = "_FastModeTickReturnFade_3jngk_1";
    honey = "_Tick_3jngk_40";
    iris = "_ThumbInput_3jngk_116";
    jewel = "_Track_3jngk_212";
    knoll = "_Range_3jngk_226";
    lunar = "_MaxEffects_3jngk_236";
    moss = "_FastParticleClip_3jngk_242";
    north = "_ParticleTransition_3jngk_251";
    orbit = "_TickRail_3jngk_259";
    pine = "_VisualThumbRail_3jngk_302";
    quest = "_ThumbScale_3jngk_343";
    ridge = "_MaxBurst_3jngk_352";
    storm = "_ThumbSpring_3jngk_358";
    tide = {
      Container: wheat,
      Thumb: yarn,
      Root: zephyr,
      EnableModelPickerPowerSliderThumbInputMotion: acorn,
      FastModeTickScale: bloom,
      FastModeTickTranslate: coral,
      FastModeTickFade: drift,
      FastModeTickReturnScale: eagle,
      FastModeTickReturnTranslate: frost,
      FastModeTickReturnFade: glide,
      Tick: honey,
      ThumbInput: iris,
      Track: jewel,
      Range: knoll,
      MaxEffects: lunar,
      FastParticleClip: moss,
      ParticleTransition: north,
      TickRail: orbit,
      VisualThumbRail: pine,
      ThumbScale: quest,
      MaxBurst: ridge,
      ThumbSpring: storm
    };
  });
export function ModelPickerPowerSliderImpl(mandrel: unknown) {
  let {
      active,
      disabled = false,
      fastModeEnabled,
      keyboardControlFocused,
      onDragToMax,
      onSelectOption,
      options,
      selectedOptionId,
      shouldReduceMotion,
      transitionsReady = true
    } = mandrel,
    nipple = replaceInMemoryStorageEntries(),
    orifice = shouldReduceMotion ?? nipple ?? false,
    pin = fastModeEnabled ? "active" : "inactive",
    race = {
      enabled: fastModeEnabled,
      phase: pin,
      sequence: 0
    };
  let [sleeve, trunnion] = grove.useState(race),
    [boss, cam] = grove.useReducer(wave, ever),
    detent = grove.useRef(null),
    eccentric = grove.useRef(null),
    follower = grove.useRef(false),
    guide = grove.useRef(false),
    helix = grove.useRef(null),
    impeller = {
      accumulatedDelta: 0,
      lastEventTime: 0
    };
  let journal = grove.useRef(impeller),
    {
      areEndpointLabelsVisible,
      isDragging,
      isPointerDown,
      isThumbHovered,
      maxBurstKey,
      previewBaseOptionId,
      previewIndex,
      previewOptionIds
    } = boss,
    kingpin = disabled || options.length <= 1,
    land;
  {
    let kelpPrime;
    kelpPrime = lotusPrime => {
      let {
        id
      } = lotusPrime;
      return id === selectedOptionId;
    };
    land = options.findIndex(kelpPrime);
  }
  let be = Math.max(land, 0),
    mesh = previewIndex == null ? undefined : options[previewIndex],
    neck = mesh != null && mesh.id !== selectedOptionId && (selectedOptionId === previewBaseOptionId || previewOptionIds.slice(0, -1).some(item => item === selectedOptionId));
  let pad = neck;
  previewIndex != null && !pad && cam({
    type: "preview_acknowledged"
  });
  let quillshaft = options.length - 1,
    roller = Math.min(pad && previewIndex != null ? previewIndex : be, quillshaft),
    spindle = options[roller],
    thrust = quillshaft <= 0 ? 0 : Math.max(roller, 0) / quillshaft * 100,
    yoke = quillshaft > 0 && spindle?.isMax === true,
    baffle = createInMemoryStorageAdapter(thrust),
    capstan = mintPrime => brook(mintPrime, quillshaft);
  let diaphragm = FormattedDate(baffle, capstan),
    elbow = novaPrime => cliff(novaPrime, quillshaft);
  let ferrule = FormattedDate(baffle, elbow),
    grommet = olivePrime => brook(olivePrime, quillshaft, -(1 - (fastModeEnabled ? 0 : lagoon)));
  let header = FormattedDate(baffle, grommet),
    injector = FormattedDate(baffle, apex);
  sleeve.enabled !== fastModeEnabled && trunnion({
    enabled: fastModeEnabled,
    phase: fastModeEnabled ? "entering" : "exiting",
    sequence: sleeve.sequence + 1
  });
  let jumper, kerf;
  jumper = () => {
    let prismPrime = window.setTimeout(() => {
      trunnion(quillPrime => {
        let reefPrime = fastModeEnabled ? "active" : "inactive";
        return quillPrime.enabled === fastModeEnabled && quillPrime.phase !== reefPrime ? {
          ...quillPrime,
          phase: reefPrime
        } : quillPrime;
      });
    }, fastModeEnabled ? oak : at);
    return () => window.clearTimeout(prismPrime);
  };
  kerf = [fastModeEnabled];
  grove.useEffect(jumper, kerf);
  let louver = sagePrime => {
    let topazPrime = options[sagePrime];
    if (kingpin || topazPrime == null || sagePrime === roller) return;
    let ultraPrime = quillshaft > 0 && topazPrime.isMax;
    ultraPrime ? guide.current || (guide.current = true, follower.current && onDragToMax()) : guide.current = false;
    onSelectOption(topazPrime);
    cam({
      type: "value_preview",
      atMax: ultraPrime,
      baseOptionId: pad && previewBaseOptionId != null ? previewBaseOptionId : selectedOptionId,
      enteredMax: ultraPrime && !yoke,
      index: sagePrime,
      optionId: topazPrime.id
    });
  };
  let manifold = louver,
    nip = () => {
      eccentric.current != null && (window.clearTimeout(eccentric.current), eccentric.current = null);
    };
  let outlet = nip,
    packing = () => {
      outlet();
      helix.current = null;
      follower.current = false;
      guide.current = false;
      cam({
        type: "pointer_up"
      });
    };
  let reducer = packing,
    strainer = () => {
      outlet();
      cam({
        type: "show_endpoint_labels"
      });
    };
  let tee = strainer,
    union = event => {
      if (event.ctrlKey || kingpin || quillshaft <= 0) return;
      event.preventDefault();
      event.stopPropagation();
      let vaporPrime = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : -event.deltaY;
      "webkitDirectionInvertedFromDevice" in event && event.webkitDirectionInvertedFromDevice === true && (vaporPrime *= -1);
      let wheatPrime = event.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? vaporPrime : Math.sign(vaporPrime) * dew;
      if (wheatPrime === 0) return;
      let yarnPrime = journal.current;
      if ((event.timeStamp - yarnPrime.lastEventTime > canyon || Math.sign(wheatPrime) !== Math.sign(yarnPrime.accumulatedDelta)) && (yarnPrime.accumulatedDelta = 0), yarnPrime.lastEventTime = event.timeStamp, yarnPrime.accumulatedDelta += wheatPrime, Math.abs(yarnPrime.accumulatedDelta) < dew) return;
      let zephyrPrime = Math.sign(yarnPrime.accumulatedDelta);
      yarnPrime.accumulatedDelta -= zephyrPrime * dew;
      let acornPrime = Math.max(0, Math.min(roller + zephyrPrime, quillshaft));
      if (acornPrime === roller) {
        yarnPrime.accumulatedDelta = 0;
        return;
      }
      manifold(acornPrime);
      reducer();
    };
  let vent = grove.useEffectEvent(union),
    wye = () => {
      let bloomPrime = detent.current;
      if (bloomPrime == null) return;
      let coralPrime = driftPrime => vent(driftPrime);
      return bloomPrime.addEventListener("wheel", coralPrime, {
        passive: false
      }), () => bloomPrime.removeEventListener("wheel", coralPrime);
    };
  let zener;
  zener = [];
  grove.useEffect(wye, zener);
  let alphaPrime, bravoPrime;
  alphaPrime = () => () => {
    eccentric.current != null && window.clearTimeout(eccentric.current);
  };
  bravoPrime = [];
  grove.useEffect(alphaPrime, bravoPrime);
  let copperPrime, deltaPrime;
  if (copperPrime = () => {
    if (!active || orifice) {
      baffle.jump(thrust);
      return;
    }
    let eaglePrime = AppQueryClientProvider(baffle, thrust, isDragging ? quiet : petal);
    return () => eaglePrime.stop();
  }, deltaPrime = [active, baffle, thrust, isDragging, orifice], grove.useEffect(copperPrime, deltaPrime), spindle == null) return null;
  let echoPrime = !kingpin && (isThumbHovered || isPointerDown),
    falconPrime = !kingpin && isDragging,
    gammaPrime = sleeve.phase,
    harborPrime = !kingpin && areEndpointLabelsVisible,
    indigoPrime = !kingpin && isPointerDown,
    jadePrime = Math.max(quillshaft, 1),
    _ModelPickerPowerSliderImpl = event => {
      event.stopPropagation();
      reducer();
    };
  let kitePrime = event => {
    event.stopPropagation();
    follower.current = false;
    guide.current = false;
    kingpin || (cam({
      type: "pointer_down"
    }), helix.current = {
      x: event.clientX,
      y: event.clientY
    }, outlet(), eccentric.current = window.setTimeout(() => {
      eccentric.current = null;
      cam({
        type: "show_endpoint_labels"
      });
    }, isle));
  };
  let lemonPrime = event => {
    event.buttons !== 0 && (follower.current = true);
  };
  let marblePrime = event => {
    if (event.stopPropagation(), !kingpin && event.buttons !== 0) {
      let frostPrime = helix.current;
      frostPrime != null && (event.clientX - frostPrime.x) ** 2 + (event.clientY - frostPrime.y) ** 2 >= juniper ** 2 && tee();
      cam({
        type: "pointer_move"
      });
    }
  };
  let nickelPrime = event => {
    event.stopPropagation();
    reducer();
  };
  let onyxPrime = glidePrime => {
    let honeyPrime = glidePrime[0];
    honeyPrime != null && manifold(honeyPrime);
  };
  let pearlPrime = [roller];
  let quartzPrime = {
    transform: diaphragm
  };
  let riverPrime = yoke ? <ensureIntlFormattersInit.span key={"max-effects"} {...{
    animate: {
      opacity: 1
    },
    className: tide.MaxEffects,
    exit: {
      opacity: 0
    },
    initial: {
      opacity: 0
    },
    style: {
      transform: header
    },
    transition: orifice ? _t : petal,
    children: [<ModelPickerPowerSliderImplHelper5 {...{
      active,
      reveal: !orifice && maxBurstKey > 0,
      shouldReduceMotion: orifice
    }} />, <Identity {...{
      children: !sleeve.enabled && !orifice ? <ensureIntlFormattersInit.span key={`max-particles-${sleeve.sequence}`} {...{
        animate: {
          opacity: 1,
          transition: sleeve.phase === "exiting" ? urn : rain,
          x: 0
        },
        className: tide.ParticleTransition,
        exit: {
          opacity: 0,
          transition: vine,
          x: -110
        },
        initial: transitionsReady ? {
          opacity: 0,
          x: sleeve.phase === "exiting" ? 28 : 0
        } : false,
        children: <ModelPickerPowerSliderImplHelper13 {...{
          animationActive: active
        }} />
      }} /> : null
    }} />]
  }} /> : null;
  let slatePrime = <Identity {...{
    initial: false,
    children: riverPrime
  }} />;
  let $ = <ensureIntlFormattersInit.span {...{
    "aria-hidden": true,
    className: tide.Range,
    style: quartzPrime,
    children: slatePrime
  }} />;
  let timberPrime = sleeve.enabled && !orifice ? <ensureIntlFormattersInit.span key={`fast-particles-${sleeve.sequence}`} {...{
    animate: {
      opacity: 1
    },
    className: tide.FastParticleClip,
    exit: {
      opacity: 0,
      transition: yoke ? trail : yarrow
    },
    initial: {
      opacity: 0
    },
    style: {
      clipPath: ferrule
    },
    transition: yoke ? seed : wind,
    children: <ModelPickerPowerSliderImplHelper2 {...{
      animationActive: active,
      initialStartPercent: transitionsReady ? thrust : 0
    }} />
  }} /> : null;
  let umbraPrime = <Identity {...{
    initial: false,
    children: timberPrime
  }} />;
  let violetPrime;
  {
    let irisPrime;
    irisPrime = (jewelPrime, knollPrime) => <span key={jewelPrime.id} className={tide.Tick} data-selected={knollPrime <= roller} style={{
      left: apex(quillshaft === 0 ? 0 : knollPrime / quillshaft * 100)
    }} />;
    violetPrime = options.map(irisPrime);
  }
  let willowPrime = <div className={tide.TickRail}>
      {violetPrime}
    </div>;
  let xenonPrime = <AssistantMessageActions className={tide.Track}>
      {$}
      {umbraPrime}
      {willowPrime}
    </AssistantMessageActions>;
  let yellowPrime = {
    left: injector
  };
  let zincPrime = yoke && maxBurstKey > 0 && !orifice ? <span className={tide.MaxBurst} data-model-picker-power-slider-max-burst={true}>
        {<ModelPickerPowerSliderImplHelper3 key={maxBurstKey} {...{}} />}
      </span> : null;
  let amberPrime = !orifice && echoPrime ? $e : 1,
    basaltPrime = {
      scale: amberPrime
    };
  let cedarPrime = orifice ? _t : echoPrime ? azure : birch,
    daisyPrime = <span className={tide.Thumb} />;
  let emberPrime = <ensureIntlFormattersInit.span {...{
    animate: basaltPrime,
    className: tide.ThumbSpring,
    initial: false,
    transition: cedarPrime,
    children: daisyPrime
  }} />;
  let flintPrime = <div aria-hidden={true} className={tide.VisualThumbRail}>
      {<ensureIntlFormattersInit.span {...{
      className: tide.ThumbScale,
      style: yellowPrime,
      children: [zincPrime, emberPrime]
    }} />}
    </div>;
  let garnetPrime = () => {
    kingpin || cam({
      type: "thumb_hover",
      hovered: true
    });
  };
  let hazelPrime = () => {
    cam({
      type: "thumb_hover",
      hovered: false
    });
  };
  let ivoryPrime = <EnsureComposerEsm_Ul_Init {...{
    "aria-hidden": true,
    className: tide.ThumbInput,
    onBlur: reducer,
    onPointerEnter: garnetPrime,
    onPointerLeave: hazelPrime,
    tabIndex: -1
  }} />;
  let jasperPrime = <AppInitialLl className={tide.Root} data-dragging={falconPrime} data-fast-mode={fastModeEnabled} data-fast-mode-dot-transition={gammaPrime} data-max={yoke} data-endpoint-labels-visible={harborPrime} data-pointer-down={indigoPrime} data-reduced-motion={orifice} dir="ltr" disabled={kingpin} max={jadePrime} min={0} onClick={vale} onLostPointerCapture={reducer} onPointerCancel={_ModelPickerPowerSliderImpl} onPointerDown={kitePrime} onPointerMoveCapture={lemonPrime} onPointerMove={marblePrime} onPointerUp={nickelPrime} onValueChange={onyxPrime} onValueCommit={reducer} step={1} ref={detent} value={pearlPrime}>
      {xenonPrime}
      {flintPrime}
      {ivoryPrime}
    </AppInitialLl>;
  return <div className={tide.Container} data-keyboard-focused={keyboardControlFocused} data-model-picker-power-slider="">
      {jasperPrime}
    </div>;
}
function vale(event) {
  return event.stopPropagation();
}
function wave(nozzle, platen) {
  switch (platen.type) {
    case "pointer_down":
      return {
        ...nozzle,
        areEndpointLabelsVisible: false,
        isDragging: false,
        isPointerDown: true
      };
    case "pointer_move":
      return nozzle.isPointerDown && !nozzle.isDragging ? {
        ...nozzle,
        isDragging: true
      } : nozzle;
    case "pointer_up":
      return {
        ...nozzle,
        areEndpointLabelsVisible: false,
        isDragging: false,
        isPointerDown: false,
        isThumbHovered: false
      };
    case "preview_acknowledged":
      return {
        ...nozzle,
        previewBaseOptionId: null,
        previewIndex: null,
        previewOptionIds: []
      };
    case "show_endpoint_labels":
      return nozzle.isPointerDown && !nozzle.areEndpointLabelsVisible ? {
        ...nozzle,
        areEndpointLabelsVisible: true
      } : nozzle;
    case "thumb_hover":
      return {
        ...nozzle,
        isThumbHovered: platen.hovered
      };
    case "value_preview":
      return {
        ...nozzle,
        maxBurstKey: platen.enteredMax ? nozzle.maxBurstKey + 1 : platen.atMax ? nozzle.maxBurstKey : 0,
        previewBaseOptionId: platen.baseOptionId,
        previewIndex: platen.index,
        previewOptionIds: nozzle.previewBaseOptionId == null ? [platen.optionId] : [...nozzle.previewOptionIds, platen.optionId]
      };
  }
}
function apex(ratchet) {
  return `calc(${ratchet}% + ${elm(ratchet)}px)`;
}
function brook(shim, tappet, arbor = 1) {
  if (tappet <= 0) return `translateX(${-100 * arbor}%)`;
  let bushing = dusk(shim, tappet);
  return `translateX(calc(${(shim - 100) * arbor}% + ${bushing * arbor}px))`;
}
function cliff(collar, dowel) {
  let flange = dusk(collar, dowel);
  return `inset(0 calc(${100 - collar}% - ${flange}px) 0 0)`;
}
function dusk(gib, hub) {
  if (hub <= 0) return 0;
  let idler = 100 / hub,
    jig = Math.min(gib / idler, (100 - gib) / idler, 1);
  return elm(gib) * jig;
}
function elm(keeper) {
  let lug = meadow / 2 - nest;
  return lug - keeper / 50 * lug;
}
var fern, grove, hill, $e, isle, juniper, lagoon, meadow, nest, oak, at, petal, quiet, rain, seed, trail, urn, vine, wind, yarrow, azure, birch, _t, canyon, dew, ever;
esmInit(() => {
  fern = reactCompilerRuntime();
  AppInitialFl();
  useBrowserExtensionPluginSetupQuery();
  grove = commonJsInit(react(), 1);
  slate();
  willow();
  kelp();
  vapor();
  unity();
  $e = 1.1428571428571428;
  isle = 150;
  juniper = 4;
  lagoon = 0.1;
  meadow = 28;
  nest = 1;
  oak = 1200;
  at = 350;
  petal = {
    duration: 0.3,
    ease: [0.23, 1, 0.32, 1]
  };
  quiet = {
    duration: 0.15,
    ease: [0.23, 1, 0.32, 1]
  };
  rain = {
    delay: 0.15,
    duration: 0.35,
    ease: [0.42, 0, 0.58, 1]
  };
  seed = {
    duration: 0.25,
    ease: [0.42, 0, 1, 1]
  };
  trail = {
    delay: 0.1,
    duration: 0.3,
    ease: "linear"
  };
  urn = {
    opacity: {
      delay: 0.05,
      duration: 0.5,
      ease: "linear"
    },
    x: {
      delay: 0.05,
      duration: 0.5,
      ease: "easeOut"
    }
  };
  vine = {
    opacity: {
      delay: 1,
      duration: 0.55,
      ease: [0.42, 0, 1, 1]
    },
    x: {
      delay: 0.2,
      duration: 1.35,
      ease: [0.42, 0, 1, 1]
    }
  };
  wind = {
    duration: 0.08,
    ease: [0.42, 0, 0.58, 1]
  };
  yarrow = {
    duration: 0.25,
    ease: [0.42, 0, 0.58, 1]
  };
  azure = {
    type: "spring",
    stiffness: 420,
    damping: 38,
    mass: 1
  };
  birch = {
    type: "spring",
    stiffness: 220,
    damping: 26,
    mass: 1
  };
  _t = {
    duration: 0
  };
  canyon = 160;
  dew = 30;
  ever = {
    areEndpointLabelsVisible: false,
    isDragging: false,
    isPointerDown: false,
    isThumbHovered: false,
    maxBurstKey: 0,
    previewBaseOptionId: null,
    previewIndex: null,
    previewOptionIds: []
  };
})();
