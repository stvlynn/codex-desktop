// Restored from ref/webview/assets/appgen-settings-page-8V-xKkmK.js
// Wave FZ — full polished body from `appgen-settings-page-8V-xKkmK/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 76/109).
// AST split — size-gate sibling part-1 d/4
/* split-lane-import-depth:1 */

import { esmInit } from "../../runtime/rolldown-runtime";

/** split companion stub */
const xenon: any = undefined;

function marble(screw) {
  return {
    environmentVariables: screw.entries
      .filter((item) => !item.is_secret)
      .map(({ key, value }) => ({
        key,
        value: value ?? "",
      })),
    secrets: screw.entries
      .filter((item) => item.is_secret)
      .map(({ key }) => ({
        key,
        keyInputDisabledWhileValue: river,
        previousKey: key,
        value: river,
      })),
  };
}

function nickel(torque, valve) {
  let axle = [
    ...valve.environmentVariables.map(({ key }) => key),
    ...valve.secrets.map(({ key }) => key),
  ];
  if (new Set(axle).size !== axle.length) return null;
  let bracket = new Set([
    ...valve.environmentVariables.map(({ key }) => key),
    ...valve.secrets.map((item) => (onyx(item) ? item.previousKey : item.key)),
  ]);
  return {
    remove: torque.entries
      .filter(({ key }) => !bracket.has(key))
      .map(({ key }) => key),
    set_values: [
      ...valve.environmentVariables
        .filter((item) => pearl(torque, item))
        .map((item) => quartz(item, false)),
      ...valve.secrets
        .filter((item) => !onyx(item))
        .map((item) => quartz(item, true)),
    ],
  };
}

function onyx(clamp) {
  return clamp.previousKey != null && clamp.value === river;
}

function pearl(drill, event) {
  let engine = drill.entries.find((item) => item.key === event.key);
  return engine == null || engine.is_secret || engine.value !== event.value;
}

function quartz(event, frame) {
  return {
    is_secret: frame,
    key: event.key,
    type: "envvar",
    value: event.value,
  };
}

var river,
  slate = esmInit(() => {
    river = "<REDACTED>";
  });

function timber(gasket, handle, insert = false) {
  let jacket = gasket ?? handle,
    knurl = jacket.trim();
  return {
    isInvalid: gasket != null && knurl.length === 0,
    title: jacket,
    update:
      gasket != null && knurl.length > 0 && (knurl !== handle || insert)
        ? {
            title: knurl,
          }
        : null,
  };
}

async function umbra({
  environmentUpdate,
  titleUpdate,
  updateEnvironment,
  updateTitle,
}) {
  let [lever, mount] = await Promise.allSettled([
    titleUpdate == null ? undefined : updateTitle(titleUpdate),
    environmentUpdate == null
      ? undefined
      : updateEnvironment(environmentUpdate),
  ]);
  return {
    environmentSaved: mount.status === "fulfilled",
    titleSaved: lever.status === "fulfilled",
  };
}

var violet = esmInit(() => {});

function willow(nozzle, platen, ratchet) {
  let shim = xenon(ratchet),
    tappet = shim[0];
  return tappet == null
    ? null
    : [
        ...nozzle.map((item, index) =>
          index === platen
            ? {
                ...item,
                ...tappet,
              }
            : item,
        ),
        ...shim.slice(1),
      ];
}
