// Restored from ref/webview/assets/model-picker-power-slider-impl-DbPnlWG9.js
// Wave FY — full polished body from `model-picker-power-slider-impl-DbPnlWG9/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 2 (verified 14/16).
// Wave FZ-support — PascalCase invalid JSX tags: ensureComposerEsm_Ul_Init→EnsureComposerEsm_Ul_Init, identity→Identity, renamedId→ModelPickerPowerSliderImplHelper13, renamedId→ModelPickerPowerSliderImplHelper2, renamedId→ModelPickerPowerSliderImplHelper3, renamedId→ModelPickerPowerSliderImplHelper5, renamedId→ModelPickerPowerSliderImplHelper9.
// Split from module.tsx — deterministic PRNG + fast-track particle path classes/component.
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";

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
      ParticleBurst: jade,
    };
  });
function ModelPickerPowerSliderImplHelper2(ink) {
  let { animationActive, initialStartPercent } = ink,
    [jadeite] = nickel.useState(initialStartPercent),
    kernel = 1 - Math.min(Math.max(jadeite, 0), 100) / 100,
    leaf = Array.from(
      {
        length: 14,
      },
      (maple, nimbus) => {
        let opal = 1 + (bravo(nimbus, 21) - 0.5) * 2 * quartz,
          plume = pearl / opal,
          quillow = plume * kernel,
          root = 0.4 + bravo(nimbus, 11) * 0.6,
          silk = 0.5 + bravo(nimbus, 12) * 0.45;
        return (
          <span
            key={nimbus}
            className={kite.FastTrackParticlePath}
            style={{
              animationDelay: `${nimbus * river - quillow}s`,
              animationDuration: `${plume}s`,
              top: `${12 + bravo(nimbus, 23) * 76}%`,
            }}
          >
            <span
              className={kite.TrackParticle}
              style={{
                opacity: root,
                transform: `translate(-50%, -50%) scale(${silk})`,
              }}
            />
          </span>
        );
      },
    );
  return (
    <span
      aria-hidden={true}
      className={kite.FastTrackParticles}
      data-animation-active={animationActive}
    >
      {leaf}
    </span>
  );
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
export { bravo, copper, kite, lemon, ModelPickerPowerSliderImplHelper2, slate };
