// Restored from ref/webview/assets/model-picker-power-slider-impl-DbPnlWG9.js
// Wave FY — full polished body from `model-picker-power-slider-impl-DbPnlWG9/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 2 (verified 14/16).
// Wave FZ-support — PascalCase invalid JSX tags: ensureComposerEsm_Ul_Init→EnsureComposerEsm_Ul_Init, identity→Identity, renamedId→ModelPickerPowerSliderImplHelper13, renamedId→ModelPickerPowerSliderImplHelper2, renamedId→ModelPickerPowerSliderImplHelper3, renamedId→ModelPickerPowerSliderImplHelper5, renamedId→ModelPickerPowerSliderImplHelper9.
// Split from module.tsx — WebGL max-effects canvas fill.
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";

/** split companion stub */
const WebGLRenderingContext: any = undefined;

var xenon,
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
      Canvas: _e,
    };
  });
function ModelPickerPowerSliderImplHelper5(vista) {
  let { active, reveal, shouldReduceMotion } = vista,
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
  let anvil = (
    <span className={amber.Mask}>
      <canvas className={amber.Canvas} ref={wisp} />
    </span>
  );
  return (
    <span aria-hidden={true} className={amber.Fill} data-reveal={reveal}>
      {anvil}
    </span>
  );
}
function cedar(crag, dome) {
  if (typeof WebGLRenderingContext > "u" || typeof ResizeObserver > "u") return;
  let eddy = crag.getContext("webgl", {
    alpha: true,
    antialias: false,
    depth: false,
    powerPreference: "high-performance",
    stencil: false,
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
  let mire = (quarry) => {
      eddy.uniform1f(jetty, quarry);
      eddy.drawArrays(eddy.TRIANGLES, 0, 6);
    },
    nook = () => {
      let rapids = Math.min(window.devicePixelRatio, 2),
        { height, width } = crag.getBoundingClientRect(),
        spur = Math.max(Math.round(width), 1),
        tor = Math.max(Math.round(height), 1);
      crag.width = Math.round(spur * rapids);
      crag.height = Math.round(tor * rapids);
      eddy.viewport(0, 0, crag.width, crag.height);
      eddy.uniform2f(inlet, spur, tor);
      mire(dome ? 0 : (performance.now() - knob) / 1e3);
    },
    oxbow = (updraft) => {
      ledge = 0;
      mire((updraft - knob) / 1e3);
      ledge = window.requestAnimationFrame(oxbow);
    },
    pond = new ResizeObserver(nook);
  return (
    nook(),
    pond.observe(crag),
    dome || (ledge = window.requestAnimationFrame(oxbow)),
    () => {
      ledge !== 0 && window.cancelAnimationFrame(ledge);
      pond.disconnect();
      eddy.deleteBuffer(glen);
      eddy.deleteProgram(fjord);
    }
  );
}
function daisy(verge) {
  let weir = ember(verge, verge.VERTEX_SHADER, hazel),
    yard = ember(verge, verge.FRAGMENT_SHADER, ivory);
  if (weir == null || yard == null)
    return (
      weir != null && verge.deleteShader(weir),
      yard != null && verge.deleteShader(yard),
      null
    );
  let anchor = verge.createProgram();
  return anchor == null
    ? (verge.deleteShader(weir), verge.deleteShader(yard), null)
    : (verge.attachShader(anchor, weir),
      verge.attachShader(anchor, yard),
      verge.linkProgram(anchor),
      verge.deleteShader(weir),
      verge.deleteShader(yard),
      verge.getProgramParameter(anchor, verge.LINK_STATUS)
        ? anchor
        : (verge.deleteProgram(anchor), null));
}
function ember(bolt, cog, disc) {
  let edge = bolt.createShader(cog);
  return edge == null
    ? null
    : (bolt.shaderSource(edge, disc),
      bolt.compileShader(edge),
      bolt.getShaderParameter(edge, bolt.COMPILE_STATUS)
        ? edge
        : (bolt.deleteShader(edge), null));
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
    hazel =
      "\n  attribute vec2 aPosition;\n  varying vec2 vUv;\n\n  void main() {\n    vUv = aPosition * 0.5 + 0.5;\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n  }\n";
    ivory =
      "\n  precision highp float;\n\n  varying vec2 vUv;\n\n  uniform float uTime;\n  uniform vec2 uResolution;\n\n  const vec3 COLOR_1 = vec3(0.592, 0.388, 0.945);\n  const vec3 COLOR_2 = vec3(0.831, 0.710, 0.953);\n  const vec3 COLOR_3 = vec3(0.286, 0.000, 0.404);\n  const vec3 COLOR_4 = vec3(0.145, 0.055, 0.478);\n  const vec3 COLOR_5 = vec3(0.592, 0.000, 0.996);\n  const vec3 COLOR_6 = vec3(0.780, 0.459, 0.914);\n  const vec3 COLOR_7 = vec3(0.725, 0.576, 1.000);\n  const vec3 COLOR_8 = vec3(0.400, 0.212, 0.820);\n  const vec3 COLOR_9 = vec3(0.882, 0.690, 1.000);\n  const vec3 COLOR_10 = vec3(0.498, 0.345, 0.957);\n  const vec3 COLOR_11 = vec3(0.659, 0.275, 0.910);\n  const vec3 COLOR_12 = vec3(0.212, 0.063, 0.400);\n\n  float grain(vec2 uv) {\n    vec2 grainUv = uv * uResolution * 0.5;\n    return fract(sin(dot(grainUv + uTime, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0;\n  }\n\n  float fieldWeight(vec2 point, vec2 center) {\n    return exp(-dot(point - center, point - center) * 12.0);\n  }\n\n  vec3 fieldColor(vec2 rawUv) {\n    const float speed = 1.25;\n    vec2 uv = vec2(rawUv.x, 0.40 + rawUv.y * 0.18);\n    vec2 spatialScale = vec2(1.55, 1.0);\n    vec2 point = uv * spatialScale;\n    vec2 center1 = vec2(0.18 + sin(uTime * speed * 0.42) * 0.18, 0.36 + cos(uTime * speed * 0.50) * 0.42) * spatialScale;\n    vec2 center2 = vec2(0.34 + cos(uTime * speed * 0.62) * 0.24, 0.62 + sin(uTime * speed * 0.47) * 0.38) * spatialScale;\n    vec2 center3 = vec2(0.52 + sin(uTime * speed * 0.38) * 0.28, 0.30 + cos(uTime * speed * 0.58) * 0.36) * spatialScale;\n    vec2 center4 = vec2(0.70 + cos(uTime * speed * 0.54) * 0.24, 0.68 + sin(uTime * speed * 0.41) * 0.36) * spatialScale;\n    vec2 center5 = vec2(0.88 + sin(uTime * speed * 0.74) * 0.16, 0.36 + cos(uTime * speed * 0.64) * 0.40) * spatialScale;\n    vec2 center6 = vec2(0.12 + cos(uTime * speed * 0.48) * 0.20, 0.72 + sin(uTime * speed * 0.70) * 0.30) * spatialScale;\n    vec2 center7 = vec2(0.30 + sin(uTime * speed * 0.58) * 0.22, 0.44 + cos(uTime * speed * 0.52) * 0.42) * spatialScale;\n    vec2 center8 = vec2(0.46 + cos(uTime * speed * 0.68) * 0.26, 0.72 + sin(uTime * speed * 0.56) * 0.32) * spatialScale;\n    vec2 center9 = vec2(0.60 + sin(uTime * speed * 0.44) * 0.28, 0.26 + cos(uTime * speed * 0.60) * 0.38) * spatialScale;\n    vec2 center10 = vec2(0.76 + cos(uTime * speed * 0.50) * 0.22, 0.54 + sin(uTime * speed * 0.66) * 0.40) * spatialScale;\n    vec2 center11 = vec2(0.92 + sin(uTime * speed * 0.70) * 0.15, 0.66 + cos(uTime * speed * 0.46) * 0.30) * spatialScale;\n    vec2 center12 = vec2(0.06 + cos(uTime * speed * 0.40) * 0.14, 0.32 + sin(uTime * speed * 0.60) * 0.40) * spatialScale;\n    float weight1 = fieldWeight(point, center1) * (0.7 + 0.3 * sin(uTime * 0.91));\n    float weight2 = fieldWeight(point, center2) * (0.7 + 0.3 * cos(uTime * 1.07));\n    float weight3 = fieldWeight(point, center3) * (0.7 + 0.3 * sin(uTime * 0.76));\n    float weight4 = fieldWeight(point, center4) * (0.7 + 0.3 * cos(uTime * 1.18));\n    float weight5 = fieldWeight(point, center5) * (0.7 + 0.3 * sin(uTime * 1.03));\n    float weight6 = fieldWeight(point, center6) * (0.7 + 0.3 * cos(uTime * 0.83));\n    float weight7 = fieldWeight(point, center7) * (0.7 + 0.3 * sin(uTime * 1.24));\n    float weight8 = fieldWeight(point, center8) * (0.7 + 0.3 * cos(uTime * 0.96));\n    float weight9 = fieldWeight(point, center9) * (0.7 + 0.3 * sin(uTime * 1.11));\n    float weight10 = fieldWeight(point, center10) * (0.7 + 0.3 * cos(uTime * 0.72));\n    float weight11 = fieldWeight(point, center11) * (0.7 + 0.3 * sin(uTime * 1.29));\n    float weight12 = fieldWeight(point, center12) * (0.7 + 0.3 * cos(uTime * 0.88));\n    float totalWeight = max(\n      weight1 + weight2 + weight3 + weight4 + weight5 + weight6 +\n        weight7 + weight8 + weight9 + weight10 + weight11 + weight12,\n      0.0001\n    );\n    vec3 color = (\n      COLOR_1 * weight1 + COLOR_2 * weight2 + COLOR_3 * weight3 +\n      COLOR_4 * weight4 + COLOR_5 * weight5 + COLOR_6 * weight6 +\n      COLOR_7 * weight7 + COLOR_8 * weight8 + COLOR_9 * weight9 +\n      COLOR_10 * weight10 + COLOR_11 * weight11 + COLOR_12 * weight12\n    ) / totalWeight;\n    color = mix(COLOR_4, color, 0.96);\n\n    return pow(clamp(color, vec3(0.0), vec3(1.0)), vec3(0.9));\n  }\n\n  void main() {\n    vec3 color = fieldColor(vUv);\n    color += grain(vUv) * 0.012;\n    color.r += sin(uTime * 0.5) * 0.02;\n    color.g += cos(uTime * 0.7) * 0.02;\n    color.b += sin(uTime * 0.6) * 0.02;\n    color = pow(color, vec3(0.92));\n\n    gl_FragColor = vec4(color, 1.0);\n  }\n";
    jasper = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
  });
export { kelp, ModelPickerPowerSliderImplHelper5 };
