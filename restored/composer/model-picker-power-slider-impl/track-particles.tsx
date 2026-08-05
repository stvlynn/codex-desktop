// Restored from ref/webview/assets/model-picker-power-slider-impl-DbPnlWG9.js
// Wave FY — full polished body from `model-picker-power-slider-impl-DbPnlWG9/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 2 (verified 14/16).
// Wave FZ-support — PascalCase invalid JSX tags: ensureComposerEsm_Ul_Init→EnsureComposerEsm_Ul_Init, identity→Identity, renamedId→ModelPickerPowerSliderImplHelper13, renamedId→ModelPickerPowerSliderImplHelper2, renamedId→ModelPickerPowerSliderImplHelper3, renamedId→ModelPickerPowerSliderImplHelper5, renamedId→ModelPickerPowerSliderImplHelper9.
// Split from module.tsx — traveling track particles.
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { bravo, copper, kite, lemon } from "./fast-track-particles";

function ModelPickerPowerSliderImplHelper9(forge) {
  let { animationActive, index } = forge,
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
  return (
    <span
      className={kite.TrackParticle}
      style={{
        left: screw,
        opacity: motor,
        top: hinge.y,
        transform: torque,
        transitionDuration: valve,
      }}
    />
  );
}
function lotus(engine) {
  let frame = 1;
  return nova(() => {
    let gasket = bravo(engine, frame);
    return ((frame += 1), gasket);
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
    y: Math.round(12 + (jacket - 0.5) * 14),
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
  let { animationActive } = knurl;
  return (
    <span aria-hidden={true} className={kite.TrackParticles}>
      {Array.from(
        {
          length: 14,
        },
        (lever, mount) => (
          <ModelPickerPowerSliderImplHelper9
            key={mount}
            {...{
              animationActive,
              index: mount,
            }}
          />
        ),
      )}
    </span>
  );
}
var topaz,
  ultra,
  vapor = esmInit(() => {
    topaz = reactCompilerRuntime();
    sage();
    copper();
    lemon();
  });
export { ModelPickerPowerSliderImplHelper13, vapor };
