// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Aat`) / export `fct`.

export type DeferredUifctPeers = {
  Cat: (...args: unknown[]) => unknown;
  Dat: (...args: unknown[]) => unknown;
  Eat: (...args: unknown[]) => unknown;
  Float32Array: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Oat: (...args: unknown[]) => unknown;
  Tat: (...args: unknown[]) => unknown;
  _at: (...args: unknown[]) => unknown;
  animationFrameId: (...args: unknown[]) => unknown;
  audioData: (...args: unknown[]) => unknown;
  bat: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  canvas: (...args: unknown[]) => unknown;
  canvasContext: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  createProgram: (...args: unknown[]) => unknown;
  cumulativeAudioData: (...args: unknown[]) => unknown;
  dispose: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gl: (...args: unknown[]) => unknown;
  hasInputs: (...args: unknown[]) => unknown;
  inputs: (...args: unknown[]) => unknown;
  kat: (...args: unknown[]) => unknown;
  lastFrameTime: (...args: unknown[]) => unknown;
  micLevel: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  outputLevel: (...args: unknown[]) => unknown;
  program: (...args: unknown[]) => unknown;
  publishedAudioLevels: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  render: (...args: unknown[]) => unknown;
  renderCanvasFallback: (...args: unknown[]) => unknown;
  renderFrame: (...args: unknown[]) => unknown;
  resizeCanvas: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  setInputs: (...args: unknown[]) => unknown;
  setPublishedAudioLevels: (...args: unknown[]) => unknown;
  stateListen: (...args: unknown[]) => unknown;
  stateSpeak: (...args: unknown[]) => unknown;
  stateThink: (...args: unknown[]) => unknown;
  tg: (...args: unknown[]) => unknown;
  xat: (...args: unknown[]) => unknown;
  yat: (...args: unknown[]) => unknown;
};

let peers: DeferredUifctPeers | null = null;

/** Wire deferredUifct peers once companions land. */
export function setDeferredUifctPeers(next: DeferredUifctPeers): void {
  peers = next;
}

/**
 * Bundle export `fct` / internal `Aat`.
 */
export function deferredUifct() {
  if (peers == null) {
    throw new Error("deferredUifct peers are not configured");
  }

  return peers.e(() => {
    ((Cat = peers.c()),
      peers.sd(),
      (wat = peers.r(peers.o(), 1)),
      peers._at(),
      (Tat = peers.J()),
      (Eat = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  v_uv = (a_position + 1.0) * 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`),
      (Dat = `
precision highp float;

varying vec2 v_uv;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_micLevel;
uniform float u_outputLevel;
uniform float u_stateListen;
uniform float u_stateThink;
uniform float u_stateSpeak;
uniform vec4 u_audio;
uniform vec4 u_cumulativeAudio;

#define PI 3.141592653589793
#define NUM_OCTAVES 5

float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u * u * (3.0 - 2.0 * u);

  float res = mix(
    mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
    mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
    u.y
  );
  return res * res;
}

float fbm(vec2 x) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < NUM_OCTAVES; i++) {
    v += a * noise(x);
    x = rot * x * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
  vec3 burned = max(base + blend - vec3(1.0), vec3(0.0));
  return burned * opacity + base * (1.0 - opacity);
}

vec4 permute(vec4 x) {
  return mod((x * 34.0 + 1.0) * x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec3 point) {
  vec3 cell0 = floor(point);
  vec3 cell1 = cell0 + vec3(1.0);
  cell0 = mod(cell0, 289.0);
  cell1 = mod(cell1, 289.0);
  vec3 offset0 = fract(point);
  vec3 offset1 = offset0 - vec3(1.0);
  vec4 x = vec4(cell0.x, cell1.x, cell0.x, cell1.x);
  vec4 y = vec4(cell0.yy, cell1.yy);
  vec4 z0 = vec4(cell0.z);
  vec4 z1 = vec4(cell1.z);
  vec4 xy = permute(permute(x) + y);
  vec4 xy0 = permute(xy + z0);
  vec4 xy1 = permute(xy + z1);

  vec4 gx0 = xy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(vec4(0.0), gx0) - 0.5);
  gy0 -= sz0 * (step(vec4(0.0), gy0) - 0.5);

  vec4 gx1 = xy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(vec4(0.0), gx1) - 0.5);
  gy1 -= sz1 * (step(vec4(0.0), gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(
    vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110))
  );
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(
    vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111))
  );
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, offset0);
  float n100 = dot(g100, vec3(offset1.x, offset0.yz));
  float n010 = dot(g010, vec3(offset0.x, offset1.y, offset0.z));
  float n110 = dot(g110, vec3(offset1.xy, offset0.z));
  float n001 = dot(g001, vec3(offset0.xy, offset1.z));
  float n101 = dot(g101, vec3(offset1.x, offset0.y, offset1.z));
  float n011 = dot(g011, vec3(offset0.x, offset1.yz));
  float n111 = dot(g111, offset1);

  vec3 fadePoint = fade(offset0);
  vec4 noiseZ = mix(
    vec4(n000, n100, n010, n110),
    vec4(n001, n101, n011, n111),
    fadePoint.z
  );
  vec2 noiseYZ = mix(noiseZ.xy, noiseZ.zw, fadePoint.y);
  return 2.2 * mix(noiseYZ.x, noiseYZ.y, fadePoint.x);
}

void main() {
  vec2 st = v_uv - 0.5;
  st.x *= u_resolution.x / u_resolution.y;

  float sound = max(max(u_audio.x, u_audio.y), max(u_audio.z, u_audio.w));
  float stateAmount = max(u_stateListen, max(u_stateThink, u_stateSpeak));
  float thinking = u_stateThink;
  float audioEnergy = smoothstep(0.08, 0.72, max(sound, u_micLevel));
  float outputEnergy = smoothstep(0.04, 0.46, u_outputLevel);
  float breath = sin(u_time * PI * 0.34) * 0.5 + 0.5;
  float entry = smoothstep(0.0, 0.9, stateAmount);
  float maxDrawableRadius = min(0.36, min(0.5, 0.5 * u_resolution.x / u_resolution.y) - 0.16);
  float baseRadius = mix(maxDrawableRadius * 0.88, maxDrawableRadius * 0.94, thinking);
  float radius = baseRadius * mix(0.82, 1.0, entry);
  float outputExpansion = outputEnergy * maxDrawableRadius * 0.12;
  float restingBreath =
    (1.0 - thinking) *
    (1.0 - outputEnergy) *
    breath *
    maxDrawableRadius *
    0.01;
  radius = min(maxDrawableRadius, radius + outputExpansion + restingBreath);

  float horizontalDrift = sin(u_time * 0.43) * 0.0028;
  float verticalDrift = sin(u_time * 0.36 + 1.7) * 0.0035;
  vec2 lifted = st - vec2(horizontalDrift, verticalDrift);
  float dist = length(lifted) - radius;
  float edgeWidth = max(1.25 / min(u_resolution.x, u_resolution.y), 0.0014);
  if (dist > edgeWidth) {
    discard;
  }
  float edge = 1.0 - smoothstep(-edgeWidth, edgeWidth, dist);

  vec2 uv = lifted / (2.0 * radius) + 0.5;
  float overallSoundScale = 1.0 + audioEnergy * 0.22;
  float time = u_time * 0.34;
  float noiseX = cnoise(vec3(
    uv + vec2(0.0, 74.8572),
    (time + u_cumulativeAudio.x * 0.05 * overallSoundScale) * 0.3
  ));
  float noiseY = cnoise(vec3(
    uv + vec2(203.91282, 10.0),
    (time + u_cumulativeAudio.z * 0.05 * overallSoundScale) * 0.3
  ));
  uv += vec2(noiseX * 2.0, noiseY) * 0.19;
  float voiceWarpX = cnoise(vec3(
    uv * 3.1 + vec2(0.0, 17.3),
    u_cumulativeAudio.x * 0.085 + u_cumulativeAudio.z * 0.035
  ));
  float voiceWarpY = cnoise(vec3(
    uv * 3.4 + vec2(31.7, 0.0),
    u_cumulativeAudio.y * 0.075 + u_cumulativeAudio.w * 0.045
  ));
  uv += vec2(voiceWarpX, voiceWarpY) * audioEnergy * 0.04;
  uv.y +=
    sin(uv.x * 5.4 + u_cumulativeAudio.w * 0.19) *
    audioEnergy *
    0.016;
  float watercolorNoise =
    cnoise(vec3(uv * 18.0 + vec2(344.91282, 0.0), time * 0.3)) +
    cnoise(vec3(uv * 39.6 + vec2(723.937, 0.0), time * 0.4)) * 0.5;
  uv += watercolorNoise * 0.006;
  float textureNoiseA = noise(
    uv * 22.0 + vec2(time * 0.08, u_cumulativeAudio.x * 0.025)
  );
  float textureNoiseB = noise(
    vec2(1.0 - uv.x, uv.y) * 41.0 +
    vec2(u_cumulativeAudio.z * 0.018, -time * 0.11)
  );
  float textureDisplacement =
    mix(
      textureNoiseA,
      textureNoiseB,
      sin(time + u_cumulativeAudio.w * 0.12) * 0.5 + 0.5
    ) -
    0.5;
  uv += textureDisplacement * (0.012 + audioEnergy * 0.004);
  uv.y = 1.0 - uv.y;
  vec2 rotatedUv = uv - 0.5;
  float gradientAngle = -0.16;
  uv = mat2(
    cos(gradientAngle), -sin(gradientAngle),
    sin(gradientAngle), cos(gradientAngle)
  ) * rotatedUv + 0.5;
  uv.y -= 0.03;

  vec2 stNoise = uv * 1.25;
  vec2 q = vec2(0.0);
  q.x = fbm(
    stNoise * 0.5 +
    0.075 * (time + u_cumulativeAudio.w * 0.175 * overallSoundScale)
  );
  q.y = fbm(
    stNoise * 0.5 +
    0.075 * (time + u_cumulativeAudio.x * 0.136 * overallSoundScale)
  );
  vec2 r = vec2(
    fbm(
      stNoise +
      q +
      vec2(0.3, 9.2) +
      0.15 * (time + u_cumulativeAudio.y * 0.234 * overallSoundScale)
    ),
    fbm(
      stNoise +
      q +
      vec2(8.3, 0.8) +
      0.126 * (time + u_cumulativeAudio.z * 0.165 * overallSoundScale)
    )
  );
  float f = fbm(stNoise + r - q);
  float fullFbm = pow(((f + 0.6 * f * f + 0.7 * f) + 0.5) * 0.5, 0.55);

  vec3 mainColor = mix(vec3(0.94, 0.965, 1.0), vec3(1.0, 0.99, 0.96), u_micLevel);
  vec3 lowColor = vec3(0.36, 0.34, 0.96);
  vec3 midColor = mix(vec3(0.57, 0.64, 1.0), vec3(0.96, 0.92, 1.0), u_micLevel);
  vec3 highColor = vec3(1.0, 0.99, 0.97);

  vec3 sinOffsets = vec3(
    u_cumulativeAudio.x * 0.15 * overallSoundScale,
    -u_cumulativeAudio.y * 0.5 * overallSoundScale,
    u_cumulativeAudio.z * 1.5 * overallSoundScale
  );

  vec2 snUv = uv + vec2((fullFbm - 0.5) * 1.2, 0.025);
  float sn = noise(snUv * 2.0 + vec2(sin(sinOffsets.x * 0.25), time * 0.5 + sinOffsets.x)) * 2.0;
  float sn2 = smoothstep(
    sn - 1.8,
    sn + 1.8,
    ((snUv.y - 0.5) * (5.0 - u_audio.x * 0.05 * overallSoundScale)) + 0.5
  );

  vec2 snUvBis = uv + vec2((fullFbm - 0.5) * 0.85, 0.025);
  float snBis = noise(snUvBis * 4.0 + vec2(sin(sinOffsets.y * 0.15) * 2.4 + 293.0, time + sinOffsets.y * 0.5)) * 2.0;
  float sn2Bis = smoothstep(
    snBis - ((0.9 + u_audio.y * 0.4) * 1.5),
    snBis + ((0.9 + u_audio.y * 0.8) * 1.5),
    ((snUvBis.y - 0.6) * (5.0 - u_audio.y * 0.75)) + 0.5
  );

  vec2 snUvThird = uv + vec2((fullFbm - 0.5) * 1.1);
  float snThird = noise(snUvThird * 6.0 + vec2(sin(sinOffsets.z * 0.1) * 2.4 + 153.0, time * 1.2 + sinOffsets.z * 0.8)) * 2.0;
  float sn2Third = smoothstep(
    snThird - 1.05,
    snThird + 1.05,
    ((snUvThird.y - 0.9) * 6.0) + 0.5
  );

  sn2 = pow(sn2, 0.8);
  sn2Bis = pow(sn2Bis, 0.9);

  vec3 color = blendLinearBurn(mainColor, lowColor, 1.0 - sn2);
  color = blendLinearBurn(color, mix(mainColor, midColor, 1.0 - sn2Bis), sn2);
  color = mix(color, mix(mainColor, highColor, 1.0 - sn2Third), sn2 * sn2Bis);
  float fineColorNoise = fbm(
    uv * 12.0 + vec2(time * 0.13, -time * 0.09) + r * 0.4
  );
  color = mix(
    color,
    highColor,
    smoothstep(0.58, 0.9, fineColorNoise) * (0.035 + audioEnergy * 0.025)
  );
  color = mix(
    color,
    lowColor,
    smoothstep(0.42, 0.12, fineColorNoise) * 0.018
  );

  float orbAlpha = edge * smoothstep(0.0, 0.18, stateAmount + 0.3);
  gl_FragColor = vec4(color, orbAlpha);
}
`),
      (Oat = new peers.Float32Array([
        -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
      ])),
      (kat = class {
        canvas;
        animationFrameId = null;
        audioData = new peers.Float32Array(4);
        canvasContext = null;
        cumulativeAudioData = new peers.Float32Array(4);
        gl = null;
        hasInputs = !1;
        inputs = {
          phase: `inactive`,
          previewAudioLevel: 0,
          previewTimeMs: void 0,
          voiceActivity: `idle`,
        };
        lastFrameTime = 0;
        micLevel = 0;
        outputLevel = 0;
        program = null;
        publishedAudioLevels = null;
        stateListen = 0;
        stateSpeak = 0;
        stateThink = 0;
        uniforms = null;
        constructor(e) {
          if (
            ((this.canvas = peers.e),
            (this.gl = peers.e.getContext(`webgl`, {
              alpha: !0,
              antialias: !1,
              depth: !1,
              premultipliedAlpha: !1,
            })),
            this.gl == null)
          ) {
            this.canvasContext = peers.e.getContext(`2d`);
            return;
          }
          this.createProgram(this.gl);
        }
        setInputs(e) {
          if (((this.inputs = peers.e), !this.hasInputs)) {
            let t = peers.bat(peers.e.phase, peers.e.voiceActivity);
            ((this.stateListen = t.listen),
              (this.stateThink = t.think),
              (this.stateSpeak = t.speak),
              (this.hasInputs = !0));
          }
          if (peers.e.previewTimeMs != null || peers.e.phase === `inactive`) {
            (this.animationFrameId != null &&
              (window.cancelAnimationFrame(this.animationFrameId),
              (this.animationFrameId = null)),
              this.render((peers.e.previewTimeMs ?? performance.now()) / 1e3));
            return;
          }
          this.animationFrameId ??=
            ((this.lastFrameTime = performance.now() / 1e3),
            window.requestAnimationFrame(this.renderFrame));
        }
        setPublishedAudioLevels(e) {
          this.publishedAudioLevels = peers.e;
        }
        dispose() {
          this.animationFrameId != null &&
            (window.cancelAnimationFrame(this.animationFrameId),
            (this.animationFrameId = null));
        }
        renderFrame = (e) => {
          ((this.animationFrameId = null),
            this.render(peers.e / 1e3),
            this.inputs.previewTimeMs ??
              (this.animationFrameId = window.requestAnimationFrame(
                this.renderFrame,
              )));
        };
        createProgram(e) {
          let t = peers.e.createProgram();
          if (t == null) {
            ((this.gl = null),
              (this.canvasContext = this.canvas.getContext(`2d`)));
            return;
          }
          let n = peers.yat(peers.e, peers.e.VERTEX_SHADER, peers.Eat),
            r = peers.yat(peers.e, peers.e.FRAGMENT_SHADER, peers.Dat);
          if (
            (peers.e.attachShader(t, n),
            peers.e.attachShader(t, peers.r),
            peers.e.linkProgram(t),
            !peers.e.getProgramParameter(t, peers.e.LINK_STATUS))
          ) {
            ((this.gl = null),
              (this.canvasContext = this.canvas.getContext(`2d`)));
            return;
          }
          let i = peers.e.getAttribLocation(t, `a_position`),
            a = peers.e.createBuffer();
          (peers.e.bindBuffer(peers.e.ARRAY_BUFFER, a),
            peers.e.bufferData(
              peers.e.ARRAY_BUFFER,
              peers.Oat,
              peers.e.STATIC_DRAW,
            ),
            peers.e.viewport(0, 0, this.canvas.width, this.canvas.height),
            peers.e.useProgram(t),
            peers.e.enableVertexAttribArray(i),
            peers.e.vertexAttribPointer(i, 2, peers.e.FLOAT, !1, 0, 0),
            peers.e.enable(peers.e.BLEND),
            peers.e.blendFunc(peers.e.SRC_ALPHA, peers.e.ONE_MINUS_SRC_ALPHA),
            (this.program = t),
            (this.uniforms = {
              audio: peers.tg(peers.e, t, `u_audio`),
              cumulativeAudio: peers.tg(peers.e, t, `u_cumulativeAudio`),
              micLevel: peers.tg(peers.e, t, `u_micLevel`),
              outputLevel: peers.tg(peers.e, t, `u_outputLevel`),
              resolution: peers.tg(peers.e, t, `u_resolution`),
              stateListen: peers.tg(peers.e, t, `u_stateListen`),
              stateSpeak: peers.tg(peers.e, t, `u_stateSpeak`),
              stateThink: peers.tg(peers.e, t, `u_stateThink`),
              time: peers.tg(peers.e, t, `u_time`),
            }));
        }
        render(e) {
          let t =
            this.lastFrameTime === 0 || this.inputs.previewTimeMs != null
              ? 0.016
              : Math.max(0, Math.min(0.05, peers.e - this.lastFrameTime));
          if (
            ((this.lastFrameTime = peers.e),
            this.updateState(t),
            this.updateAudio(t, peers.e),
            this.resizeCanvas(),
            this.gl == null || this.program == null || this.uniforms == null)
          ) {
            this.renderCanvasFallback(peers.e);
            return;
          }
          (this.gl.clearColor(0, 0, 0, 0),
            this.gl.clear(this.gl.COLOR_BUFFER_BIT),
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height),
            this.gl.useProgram(this.program),
            this.gl.uniform1f(this.uniforms.time, peers.e),
            this.gl.uniform1f(this.uniforms.micLevel, this.micLevel),
            this.gl.uniform1f(this.uniforms.outputLevel, this.outputLevel),
            this.gl.uniform1f(this.uniforms.stateListen, this.stateListen),
            this.gl.uniform1f(this.uniforms.stateThink, this.stateThink),
            this.gl.uniform1f(this.uniforms.stateSpeak, this.stateSpeak),
            this.gl.uniform2f(
              this.uniforms.resolution,
              this.canvas.width,
              this.canvas.height,
            ),
            this.gl.uniform4fv(this.uniforms.audio, this.audioData),
            this.gl.uniform4fv(
              this.uniforms.cumulativeAudio,
              this.cumulativeAudioData,
            ),
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6));
        }
        resizeCanvas() {
          let e = Math.min(window.devicePixelRatio || 1, 1.5),
            t = Math.max(1, Math.round(this.canvas.clientWidth * peers.e)),
            n = Math.max(1, Math.round(this.canvas.clientHeight * peers.e));
          (this.canvas.width !== t && (this.canvas.width = t),
            this.canvas.height !== n && (this.canvas.height = n));
        }
        updateState(e) {
          let t = peers.bat(this.inputs.phase, this.inputs.voiceActivity),
            n =
              this.inputs.previewTimeMs == null
                ? 1 - Math.exp(-peers.e / 0.28)
                : 1;
          ((this.stateListen += (t.listen - this.stateListen) * n),
            (this.stateThink += (t.think - this.stateThink) * n),
            (this.stateSpeak += (t.speak - this.stateSpeak) * n),
            this.inputs.phase === `starting` &&
              (this.stateThink = Math.max(this.stateThink, 0.6)));
        }
        updateAudio(e, t) {
          let n = this.publishedAudioLevels;
          if (n != null) {
            let t = [n.low, n.mid, n.high, n.overall],
              r = peers.e * 60,
              i = 1 - Math.exp(-peers.e / 2);
            for (let e = 0; peers.e < this.audioData.length; e += 1) {
              let n = t[peers.e] * peers.r;
              ((this.audioData[peers.e] += (n - this.audioData[peers.e]) * i),
                (this.cumulativeAudioData[peers.e] +=
                  t[peers.e] * peers.r * 40 * i));
            }
            let a = Math.max(t[0], t[1], t[2], t[3]),
              o = 1 - Math.exp(-peers.e / (a > this.micLevel ? 0.12 : 0.32));
            this.micLevel += (a - this.micLevel) * peers.o;
            let s =
              1 -
              Math.exp(-peers.e / (n.overall > this.outputLevel ? 0.09 : 0.3));
            this.outputLevel += (n.overall - this.outputLevel) * s;
            return;
          }
          let r = peers.xat(
            this.inputs.voiceActivity,
            this.inputs.previewAudioLevel,
            this.inputs.previewTimeMs == null,
            t,
          );
          if (this.inputs.previewTimeMs != null) {
            for (let e = 0; peers.e < this.audioData.length; e += 1)
              ((this.audioData[peers.e] = peers.r[peers.e]),
                (this.cumulativeAudioData[peers.e] =
                  peers.r[peers.e] * t * 2.5));
            ((this.micLevel = peers.r[3]), (this.outputLevel = peers.r[3]));
            return;
          }
          for (let t = 0; t < this.audioData.length; t += 1) {
            let n =
              1 -
              Math.exp(
                -peers.e / (peers.r[t] > this.audioData[t] ? 0.24 : 0.72),
              );
            ((this.audioData[t] += (peers.r[t] - this.audioData[t]) * n),
              (this.cumulativeAudioData[t] +=
                this.audioData[t] *
                peers.e *
                (this.inputs.voiceActivity === `speaking` ? 7 : 3.5)));
          }
          let i =
            1 - Math.exp(-peers.e / (peers.r[3] > this.micLevel ? 0.26 : 0.8));
          this.micLevel += (peers.r[3] - this.micLevel) * i;
          let a = this.inputs.previewAudioLevel > 0 ? peers.r[3] : 0,
            o = 1 - Math.exp(-peers.e / (a > this.outputLevel ? 0.09 : 0.3));
          this.outputLevel += (a - this.outputLevel) * peers.o;
        }
        renderCanvasFallback(e) {
          if (this.canvasContext == null) return;
          let t = this.canvasContext,
            n = Math.min(this.canvas.width, this.canvas.height) * 0.29,
            r = this.canvas.width / 2,
            i = this.canvas.height / 2 + Math.sin(peers.e * 0.36) * 1.5;
          t.clearRect(0, 0, this.canvas.width, this.canvas.height);
          let a = t.createLinearGradient(
            peers.r - n * 0.7,
            i - n,
            peers.r + n * 0.55,
            i + n,
          );
          (a.addColorStop(0, `rgba(1, 129, 254, 1)`),
            a.addColorStop(0.46, `rgba(164, 239, 255, 0.98)`),
            a.addColorStop(1, `rgba(255, 253, 239, 0.98)`),
            (t.fillStyle = a),
            t.beginPath(),
            t.arc(
              peers.r,
              i,
              n * (1 + this.outputLevel * 0.12),
              0,
              Math.PI * 2,
            ),
            t.fill());
        }
      }));
  });
}
