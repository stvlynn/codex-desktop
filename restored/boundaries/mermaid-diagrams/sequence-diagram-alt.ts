// Restored from ref/webview/assets/sequenceDiagram-FGHM5R23-DDl_sINH.js
// Mermaid sequence diagram definition alt (db + renderer + parser).
// Stage 3 candidate: IMPORT_MAP-ready local deps (no app-initial edge).
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  init?: (...args: unknown[]) => void;
  [key: string]: unknown;
};
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import { dist } from "../../vendor/sanitize-url";
import {
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt";
import {
  A as _chunkICPOFSXXA,
  C as _chunkICPOFSXXC,
  R as _chunkICPOFSXXR,
  V as _chunkICPOFSXXV,
  A,
  b,
  C,
  D,
  F,
  G,
  H,
  i,
  k,
  R,
  s,
  _,
  V,
  W,
  y,
} from "../../diagrams/mermaid-config-alt";
import {
  chunk5PVQY5BWG,
  chunk5PVQY5BWP,
  chunk5PVQY5BWU,
} from "./mermaid-common-utils-alt";
import {
  a,
  c,
  i as chunkYZCP3GAMI,
  l,
  n,
  r,
  s as chunkYZCP3GAMS,
} from "../../diagrams/svg-drawing-helpers-alt";
import { n as chunkQZHKN3VNN, t } from "../../diagrams/imperative-state";
import {
  n as chunkXPW4576IN,
  r as chunkXPW4576IR,
  t as chunkXPW4576IT,
} from "../../utils/mermaid-js-yaml-core";
async function sequenceDiagramFGHM5R23Helper1(
  sequenceDiagramFGHM5R23Input141,
  sequenceDiagramFGHM5R23Input142,
) {
  sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(10);
  let { startx, stopx, message } = sequenceDiagramFGHM5R23Input142,
    sequenceDiagramFGHM5R23Binding415 = s.splitBreaks(message).length,
    sequenceDiagramFGHM5R23Binding416 = k(message),
    sequenceDiagramFGHM5R23Binding417 = sequenceDiagramFGHM5R23Binding416
      ? await i(message, b())
      : chunk5PVQY5BWG.calculateTextDimensions(
          message,
          $(sequenceDiagramFGHM5R23Binding49),
        );
  if (!sequenceDiagramFGHM5R23Binding416) {
    let sequenceDiagramFGHM5R23Binding576 =
      sequenceDiagramFGHM5R23Binding417.height /
      sequenceDiagramFGHM5R23Binding415;
    sequenceDiagramFGHM5R23Input142.height += sequenceDiagramFGHM5R23Binding576;
    sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
      sequenceDiagramFGHM5R23Binding576,
    );
  }
  let sequenceDiagramFGHM5R23Binding418,
    sequenceDiagramFGHM5R23Binding419 =
      sequenceDiagramFGHM5R23Binding417.height - 10,
    sequenceDiagramFGHM5R23Binding420 = sequenceDiagramFGHM5R23Binding417.width;
  if (startx === stopx) {
    sequenceDiagramFGHM5R23Binding418 =
      sequenceDiagramFGHM5R23Binding50.getVerticalPos() +
      sequenceDiagramFGHM5R23Binding419;
    sequenceDiagramFGHM5R23Binding49.rightAngles ||
      ((sequenceDiagramFGHM5R23Binding419 +=
        sequenceDiagramFGHM5R23Binding49.boxMargin),
      (sequenceDiagramFGHM5R23Binding418 =
        sequenceDiagramFGHM5R23Binding50.getVerticalPos() +
        sequenceDiagramFGHM5R23Binding419));
    sequenceDiagramFGHM5R23Binding419 += 30;
    let sequenceDiagramFGHM5R23Binding512 = s.getMax(
      sequenceDiagramFGHM5R23Binding420 / 2,
      sequenceDiagramFGHM5R23Binding49.width / 2,
    );
    sequenceDiagramFGHM5R23Binding50.insert(
      startx - sequenceDiagramFGHM5R23Binding512,
      sequenceDiagramFGHM5R23Binding50.getVerticalPos() -
        10 +
        sequenceDiagramFGHM5R23Binding419,
      stopx + sequenceDiagramFGHM5R23Binding512,
      sequenceDiagramFGHM5R23Binding50.getVerticalPos() +
        30 +
        sequenceDiagramFGHM5R23Binding419,
    );
  } else {
    sequenceDiagramFGHM5R23Binding419 +=
      sequenceDiagramFGHM5R23Binding49.boxMargin;
    sequenceDiagramFGHM5R23Binding418 =
      sequenceDiagramFGHM5R23Binding50.getVerticalPos() +
      sequenceDiagramFGHM5R23Binding419;
    sequenceDiagramFGHM5R23Binding50.insert(
      startx,
      sequenceDiagramFGHM5R23Binding418 - 10,
      stopx,
      sequenceDiagramFGHM5R23Binding418,
    );
  }
  return (
    sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
      sequenceDiagramFGHM5R23Binding419,
    ),
    (sequenceDiagramFGHM5R23Input142.height +=
      sequenceDiagramFGHM5R23Binding419),
    (sequenceDiagramFGHM5R23Input142.stopy =
      sequenceDiagramFGHM5R23Input142.starty +
      sequenceDiagramFGHM5R23Input142.height),
    sequenceDiagramFGHM5R23Binding50.insert(
      sequenceDiagramFGHM5R23Input142.fromBounds,
      sequenceDiagramFGHM5R23Input142.starty,
      sequenceDiagramFGHM5R23Input142.toBounds,
      sequenceDiagramFGHM5R23Input142.stopy,
    ),
    sequenceDiagramFGHM5R23Binding418
  );
}
function sequenceDiagramFGHM5R23Helper2(
  sequenceDiagramFGHM5R23Input228,
  sequenceDiagramFGHM5R23Input229,
  sequenceDiagramFGHM5R23Input230,
  sequenceDiagramFGHM5R23Input231,
  sequenceDiagramFGHM5R23Input232,
) {
  sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
    sequenceDiagramFGHM5R23Input230,
  );
  let sequenceDiagramFGHM5R23Binding477 = sequenceDiagramFGHM5R23Input231;
  if (
    sequenceDiagramFGHM5R23Input229.id &&
    sequenceDiagramFGHM5R23Input229.message &&
    sequenceDiagramFGHM5R23Input228[sequenceDiagramFGHM5R23Input229.id]
  ) {
    let sequenceDiagramFGHM5R23Binding502 =
        sequenceDiagramFGHM5R23Input228[sequenceDiagramFGHM5R23Input229.id]
          .width,
      sequenceDiagramFGHM5R23Binding503 = $(sequenceDiagramFGHM5R23Binding49);
    sequenceDiagramFGHM5R23Input229.message = chunk5PVQY5BWG.wrapLabel(
      `[${sequenceDiagramFGHM5R23Input229.message}]`,
      sequenceDiagramFGHM5R23Binding502 -
        2 * sequenceDiagramFGHM5R23Binding49.wrapPadding,
      sequenceDiagramFGHM5R23Binding503,
    );
    sequenceDiagramFGHM5R23Input229.width = sequenceDiagramFGHM5R23Binding502;
    sequenceDiagramFGHM5R23Input229.wrap = true;
    let sequenceDiagramFGHM5R23Binding504 =
        chunk5PVQY5BWG.calculateTextDimensions(
          sequenceDiagramFGHM5R23Input229.message,
          sequenceDiagramFGHM5R23Binding503,
        ),
      sequenceDiagramFGHM5R23Binding505 = s.getMax(
        sequenceDiagramFGHM5R23Binding504.height,
        sequenceDiagramFGHM5R23Binding49.labelBoxHeight,
      );
    sequenceDiagramFGHM5R23Binding477 =
      sequenceDiagramFGHM5R23Input231 + sequenceDiagramFGHM5R23Binding505;
    logger.debug(
      `${sequenceDiagramFGHM5R23Binding505} - ${sequenceDiagramFGHM5R23Input229.message}`,
    );
  }
  sequenceDiagramFGHM5R23Input232(sequenceDiagramFGHM5R23Input229);
  sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
    sequenceDiagramFGHM5R23Binding477,
  );
}
function sequenceDiagramFGHM5R23Helper3(
  sequenceDiagramFGHM5R23Input95,
  sequenceDiagramFGHM5R23Input96,
  sequenceDiagramFGHM5R23Input97,
  sequenceDiagramFGHM5R23Input98,
  sequenceDiagramFGHM5R23Input99,
  sequenceDiagramFGHM5R23Input100,
  sequenceDiagramFGHM5R23Input101,
) {
  function sequenceDiagramFGHM5R23Helper19(
    sequenceDiagramFGHM5R23Input261,
    sequenceDiagramFGHM5R23Input262,
  ) {
    sequenceDiagramFGHM5R23Input261.x <
    sequenceDiagramFGHM5R23Input99.get(sequenceDiagramFGHM5R23Input95.from).x
      ? (sequenceDiagramFGHM5R23Binding50.insert(
          sequenceDiagramFGHM5R23Input96.stopx -
            sequenceDiagramFGHM5R23Input262,
          sequenceDiagramFGHM5R23Input96.starty,
          sequenceDiagramFGHM5R23Input96.startx,
          sequenceDiagramFGHM5R23Input96.stopy +
            sequenceDiagramFGHM5R23Input261.height / 2 +
            sequenceDiagramFGHM5R23Binding49.noteMargin,
        ),
        (sequenceDiagramFGHM5R23Input96.stopx +=
          sequenceDiagramFGHM5R23Input262))
      : (sequenceDiagramFGHM5R23Binding50.insert(
          sequenceDiagramFGHM5R23Input96.startx,
          sequenceDiagramFGHM5R23Input96.starty,
          sequenceDiagramFGHM5R23Input96.stopx +
            sequenceDiagramFGHM5R23Input262,
          sequenceDiagramFGHM5R23Input96.stopy +
            sequenceDiagramFGHM5R23Input261.height / 2 +
            sequenceDiagramFGHM5R23Binding49.noteMargin,
        ),
        (sequenceDiagramFGHM5R23Input96.stopx -=
          sequenceDiagramFGHM5R23Input262));
  }
  defineFunctionName(sequenceDiagramFGHM5R23Helper19, "receiverAdjustment");
  function sequenceDiagramFGHM5R23Helper20(
    sequenceDiagramFGHM5R23Input263,
    sequenceDiagramFGHM5R23Input264,
  ) {
    sequenceDiagramFGHM5R23Input263.x <
    sequenceDiagramFGHM5R23Input99.get(sequenceDiagramFGHM5R23Input95.to).x
      ? (sequenceDiagramFGHM5R23Binding50.insert(
          sequenceDiagramFGHM5R23Input96.startx -
            sequenceDiagramFGHM5R23Input264,
          sequenceDiagramFGHM5R23Input96.starty,
          sequenceDiagramFGHM5R23Input96.stopx,
          sequenceDiagramFGHM5R23Input96.stopy +
            sequenceDiagramFGHM5R23Input263.height / 2 +
            sequenceDiagramFGHM5R23Binding49.noteMargin,
        ),
        (sequenceDiagramFGHM5R23Input96.startx +=
          sequenceDiagramFGHM5R23Input264))
      : (sequenceDiagramFGHM5R23Binding50.insert(
          sequenceDiagramFGHM5R23Input96.stopx,
          sequenceDiagramFGHM5R23Input96.starty,
          sequenceDiagramFGHM5R23Input96.startx +
            sequenceDiagramFGHM5R23Input264,
          sequenceDiagramFGHM5R23Input96.stopy +
            sequenceDiagramFGHM5R23Input263.height / 2 +
            sequenceDiagramFGHM5R23Binding49.noteMargin,
        ),
        (sequenceDiagramFGHM5R23Input96.startx -=
          sequenceDiagramFGHM5R23Input264));
  }
  defineFunctionName(sequenceDiagramFGHM5R23Helper20, "senderAdjustment");
  let sequenceDiagramFGHM5R23Binding355 = [
    sequenceDiagramFGHM5R23Binding7.ACTOR,
    sequenceDiagramFGHM5R23Binding7.CONTROL,
    sequenceDiagramFGHM5R23Binding7.ENTITY,
    sequenceDiagramFGHM5R23Binding7.DATABASE,
  ];
  if (
    sequenceDiagramFGHM5R23Input100.get(sequenceDiagramFGHM5R23Input95.to) ==
    sequenceDiagramFGHM5R23Input98
  ) {
    let sequenceDiagramFGHM5R23Binding554 = sequenceDiagramFGHM5R23Input99.get(
      sequenceDiagramFGHM5R23Input95.to,
    );
    sequenceDiagramFGHM5R23Helper19(
      sequenceDiagramFGHM5R23Binding554,
      sequenceDiagramFGHM5R23Binding355.includes(
        sequenceDiagramFGHM5R23Binding554.type,
      )
        ? sequenceDiagramFGHM5R23Binding10 / 2 + 3
        : sequenceDiagramFGHM5R23Binding554.width / 2 + 3,
    );
    sequenceDiagramFGHM5R23Binding554.starty =
      sequenceDiagramFGHM5R23Input97 -
      sequenceDiagramFGHM5R23Binding554.height / 2;
    sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
      sequenceDiagramFGHM5R23Binding554.height / 2,
    );
  } else if (
    sequenceDiagramFGHM5R23Input101.get(sequenceDiagramFGHM5R23Input95.from) ==
    sequenceDiagramFGHM5R23Input98
  ) {
    let sequenceDiagramFGHM5R23Binding550 = sequenceDiagramFGHM5R23Input99.get(
      sequenceDiagramFGHM5R23Input95.from,
    );
    sequenceDiagramFGHM5R23Binding49.mirrorActors &&
      sequenceDiagramFGHM5R23Helper20(
        sequenceDiagramFGHM5R23Binding550,
        sequenceDiagramFGHM5R23Binding355.includes(
          sequenceDiagramFGHM5R23Binding550.type,
        )
          ? sequenceDiagramFGHM5R23Binding10 / 2
          : sequenceDiagramFGHM5R23Binding550.width / 2,
      );
    sequenceDiagramFGHM5R23Binding550.stopy =
      sequenceDiagramFGHM5R23Input97 -
      sequenceDiagramFGHM5R23Binding550.height / 2;
    sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
      sequenceDiagramFGHM5R23Binding550.height / 2,
    );
  } else if (
    sequenceDiagramFGHM5R23Input101.get(sequenceDiagramFGHM5R23Input95.to) ==
    sequenceDiagramFGHM5R23Input98
  ) {
    let sequenceDiagramFGHM5R23Binding545 = sequenceDiagramFGHM5R23Input99.get(
      sequenceDiagramFGHM5R23Input95.to,
    );
    sequenceDiagramFGHM5R23Binding49.mirrorActors &&
      sequenceDiagramFGHM5R23Helper19(
        sequenceDiagramFGHM5R23Binding545,
        sequenceDiagramFGHM5R23Binding355.includes(
          sequenceDiagramFGHM5R23Binding545.type,
        )
          ? sequenceDiagramFGHM5R23Binding10 / 2 + 3
          : sequenceDiagramFGHM5R23Binding545.width / 2 + 3,
      );
    sequenceDiagramFGHM5R23Binding545.stopy =
      sequenceDiagramFGHM5R23Input97 -
      sequenceDiagramFGHM5R23Binding545.height / 2;
    sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
      sequenceDiagramFGHM5R23Binding545.height / 2,
    );
  }
}
async function sequenceDiagramFGHM5R23Helper4(
  sequenceDiagramFGHM5R23Input102,
  sequenceDiagramFGHM5R23Input103,
  sequenceDiagramFGHM5R23Input104,
) {
  let sequenceDiagramFGHM5R23Binding356 = {};
  for (let sequenceDiagramFGHM5R23Binding357 of sequenceDiagramFGHM5R23Input103)
    if (
      sequenceDiagramFGHM5R23Input102.get(
        sequenceDiagramFGHM5R23Binding357.to,
      ) &&
      sequenceDiagramFGHM5R23Input102.get(
        sequenceDiagramFGHM5R23Binding357.from,
      )
    ) {
      let sequenceDiagramFGHM5R23Binding358 =
        sequenceDiagramFGHM5R23Input102.get(
          sequenceDiagramFGHM5R23Binding357.to,
        );
      if (
        (sequenceDiagramFGHM5R23Binding357.placement ===
          sequenceDiagramFGHM5R23Input104.db.PLACEMENT.LEFTOF &&
          !sequenceDiagramFGHM5R23Binding358.prevActor) ||
        (sequenceDiagramFGHM5R23Binding357.placement ===
          sequenceDiagramFGHM5R23Input104.db.PLACEMENT.RIGHTOF &&
          !sequenceDiagramFGHM5R23Binding358.nextActor)
      )
        continue;
      let sequenceDiagramFGHM5R23Binding359 =
          sequenceDiagramFGHM5R23Binding357.placement !== undefined,
        sequenceDiagramFGHM5R23Binding360 = !sequenceDiagramFGHM5R23Binding359,
        sequenceDiagramFGHM5R23Binding361 = sequenceDiagramFGHM5R23Binding359
          ? sequenceDiagramFGHM5R23Binding53(sequenceDiagramFGHM5R23Binding49)
          : $(sequenceDiagramFGHM5R23Binding49),
        sequenceDiagramFGHM5R23Binding362 =
          sequenceDiagramFGHM5R23Binding357.wrap
            ? chunk5PVQY5BWG.wrapLabel(
                sequenceDiagramFGHM5R23Binding357.message,
                sequenceDiagramFGHM5R23Binding49.width -
                  2 * sequenceDiagramFGHM5R23Binding49.wrapPadding,
                sequenceDiagramFGHM5R23Binding361,
              )
            : sequenceDiagramFGHM5R23Binding357.message,
        sequenceDiagramFGHM5R23Binding363 =
          (k(sequenceDiagramFGHM5R23Binding362)
            ? await i(sequenceDiagramFGHM5R23Binding357.message, b())
            : chunk5PVQY5BWG.calculateTextDimensions(
                sequenceDiagramFGHM5R23Binding362,
                sequenceDiagramFGHM5R23Binding361,
              )
          ).width +
          2 * sequenceDiagramFGHM5R23Binding49.wrapPadding;
      sequenceDiagramFGHM5R23Binding360 &&
      sequenceDiagramFGHM5R23Binding357.from ===
        sequenceDiagramFGHM5R23Binding358.nextActor
        ? (sequenceDiagramFGHM5R23Binding356[
            sequenceDiagramFGHM5R23Binding357.to
          ] = s.getMax(
            sequenceDiagramFGHM5R23Binding356[
              sequenceDiagramFGHM5R23Binding357.to
            ] || 0,
            sequenceDiagramFGHM5R23Binding363,
          ))
        : sequenceDiagramFGHM5R23Binding360 &&
            sequenceDiagramFGHM5R23Binding357.from ===
              sequenceDiagramFGHM5R23Binding358.prevActor
          ? (sequenceDiagramFGHM5R23Binding356[
              sequenceDiagramFGHM5R23Binding357.from
            ] = s.getMax(
              sequenceDiagramFGHM5R23Binding356[
                sequenceDiagramFGHM5R23Binding357.from
              ] || 0,
              sequenceDiagramFGHM5R23Binding363,
            ))
          : sequenceDiagramFGHM5R23Binding360 &&
              sequenceDiagramFGHM5R23Binding357.from ===
                sequenceDiagramFGHM5R23Binding357.to
            ? ((sequenceDiagramFGHM5R23Binding356[
                sequenceDiagramFGHM5R23Binding357.from
              ] = s.getMax(
                sequenceDiagramFGHM5R23Binding356[
                  sequenceDiagramFGHM5R23Binding357.from
                ] || 0,
                sequenceDiagramFGHM5R23Binding363 / 2,
              )),
              (sequenceDiagramFGHM5R23Binding356[
                sequenceDiagramFGHM5R23Binding357.to
              ] = s.getMax(
                sequenceDiagramFGHM5R23Binding356[
                  sequenceDiagramFGHM5R23Binding357.to
                ] || 0,
                sequenceDiagramFGHM5R23Binding363 / 2,
              )))
            : sequenceDiagramFGHM5R23Binding357.placement ===
                sequenceDiagramFGHM5R23Input104.db.PLACEMENT.RIGHTOF
              ? (sequenceDiagramFGHM5R23Binding356[
                  sequenceDiagramFGHM5R23Binding357.from
                ] = s.getMax(
                  sequenceDiagramFGHM5R23Binding356[
                    sequenceDiagramFGHM5R23Binding357.from
                  ] || 0,
                  sequenceDiagramFGHM5R23Binding363,
                ))
              : sequenceDiagramFGHM5R23Binding357.placement ===
                  sequenceDiagramFGHM5R23Input104.db.PLACEMENT.LEFTOF
                ? (sequenceDiagramFGHM5R23Binding356[
                    sequenceDiagramFGHM5R23Binding358.prevActor
                  ] = s.getMax(
                    sequenceDiagramFGHM5R23Binding356[
                      sequenceDiagramFGHM5R23Binding358.prevActor
                    ] || 0,
                    sequenceDiagramFGHM5R23Binding363,
                  ))
                : sequenceDiagramFGHM5R23Binding357.placement ===
                    sequenceDiagramFGHM5R23Input104.db.PLACEMENT.OVER &&
                  (sequenceDiagramFGHM5R23Binding358.prevActor &&
                    (sequenceDiagramFGHM5R23Binding356[
                      sequenceDiagramFGHM5R23Binding358.prevActor
                    ] = s.getMax(
                      sequenceDiagramFGHM5R23Binding356[
                        sequenceDiagramFGHM5R23Binding358.prevActor
                      ] || 0,
                      sequenceDiagramFGHM5R23Binding363 / 2,
                    )),
                  sequenceDiagramFGHM5R23Binding358.nextActor &&
                    (sequenceDiagramFGHM5R23Binding356[
                      sequenceDiagramFGHM5R23Binding357.from
                    ] = s.getMax(
                      sequenceDiagramFGHM5R23Binding356[
                        sequenceDiagramFGHM5R23Binding357.from
                      ] || 0,
                      sequenceDiagramFGHM5R23Binding363 / 2,
                    )));
    }
  return (
    logger.debug("maxMessageWidthPerActor:", sequenceDiagramFGHM5R23Binding356),
    sequenceDiagramFGHM5R23Binding356
  );
}
async function sequenceDiagramFGHM5R23Helper5(
  sequenceDiagramFGHM5R23Input92,
  sequenceDiagramFGHM5R23Input93,
  sequenceDiagramFGHM5R23Input94,
) {
  let sequenceDiagramFGHM5R23Binding353 = 0;
  for (let sequenceDiagramFGHM5R23Binding469 of sequenceDiagramFGHM5R23Input92.keys()) {
    let sequenceDiagramFGHM5R23Binding472 = sequenceDiagramFGHM5R23Input92.get(
      sequenceDiagramFGHM5R23Binding469,
    );
    sequenceDiagramFGHM5R23Binding472.wrap &&
      (sequenceDiagramFGHM5R23Binding472.description = chunk5PVQY5BWG.wrapLabel(
        sequenceDiagramFGHM5R23Binding472.description,
        sequenceDiagramFGHM5R23Binding49.width -
          2 * sequenceDiagramFGHM5R23Binding49.wrapPadding,
        sequenceDiagramFGHM5R23Binding54(sequenceDiagramFGHM5R23Binding49),
      ));
    let sequenceDiagramFGHM5R23Binding473 = k(
      sequenceDiagramFGHM5R23Binding472.description,
    )
      ? await i(sequenceDiagramFGHM5R23Binding472.description, b())
      : chunk5PVQY5BWG.calculateTextDimensions(
          sequenceDiagramFGHM5R23Binding472.description,
          sequenceDiagramFGHM5R23Binding54(sequenceDiagramFGHM5R23Binding49),
        );
    sequenceDiagramFGHM5R23Binding472.width =
      sequenceDiagramFGHM5R23Binding472.wrap
        ? sequenceDiagramFGHM5R23Binding49.width
        : s.getMax(
            sequenceDiagramFGHM5R23Binding49.width,
            sequenceDiagramFGHM5R23Binding473.width +
              2 * sequenceDiagramFGHM5R23Binding49.wrapPadding,
          );
    sequenceDiagramFGHM5R23Binding472.height =
      sequenceDiagramFGHM5R23Binding472.wrap
        ? s.getMax(
            sequenceDiagramFGHM5R23Binding473.height,
            sequenceDiagramFGHM5R23Binding49.height,
          )
        : sequenceDiagramFGHM5R23Binding49.height;
    sequenceDiagramFGHM5R23Binding353 = s.getMax(
      sequenceDiagramFGHM5R23Binding353,
      sequenceDiagramFGHM5R23Binding472.height,
    );
  }
  for (let sequenceDiagramFGHM5R23Binding501 in sequenceDiagramFGHM5R23Input93) {
    let sequenceDiagramFGHM5R23Binding506 = sequenceDiagramFGHM5R23Input92.get(
      sequenceDiagramFGHM5R23Binding501,
    );
    if (!sequenceDiagramFGHM5R23Binding506) continue;
    let sequenceDiagramFGHM5R23Binding507 = sequenceDiagramFGHM5R23Input92.get(
      sequenceDiagramFGHM5R23Binding506.nextActor,
    );
    if (!sequenceDiagramFGHM5R23Binding507) {
      let sequenceDiagramFGHM5R23Binding561 =
        sequenceDiagramFGHM5R23Input93[sequenceDiagramFGHM5R23Binding501] +
        sequenceDiagramFGHM5R23Binding49.actorMargin -
        sequenceDiagramFGHM5R23Binding506.width / 2;
      sequenceDiagramFGHM5R23Binding506.margin = s.getMax(
        sequenceDiagramFGHM5R23Binding561,
        sequenceDiagramFGHM5R23Binding49.actorMargin,
      );
      continue;
    }
    let sequenceDiagramFGHM5R23Binding508 =
      sequenceDiagramFGHM5R23Input93[sequenceDiagramFGHM5R23Binding501] +
      sequenceDiagramFGHM5R23Binding49.actorMargin -
      sequenceDiagramFGHM5R23Binding506.width / 2 -
      sequenceDiagramFGHM5R23Binding507.width / 2;
    sequenceDiagramFGHM5R23Binding506.margin = s.getMax(
      sequenceDiagramFGHM5R23Binding508,
      sequenceDiagramFGHM5R23Binding49.actorMargin,
    );
  }
  let sequenceDiagramFGHM5R23Binding354 = 0;
  return (
    sequenceDiagramFGHM5R23Input94.forEach((item) => {
      let sequenceDiagramFGHM5R23Binding461 = $(
          sequenceDiagramFGHM5R23Binding49,
        ),
        sequenceDiagramFGHM5R23Binding462 = item.actorKeys.reduce(
          (accumulator, current) =>
            (accumulator +=
              sequenceDiagramFGHM5R23Input92.get(current).width +
              (sequenceDiagramFGHM5R23Input92.get(current).margin || 0)),
          0,
        ),
        sequenceDiagramFGHM5R23Binding463 =
          sequenceDiagramFGHM5R23Binding49.boxMargin * 8;
      sequenceDiagramFGHM5R23Binding462 += sequenceDiagramFGHM5R23Binding463;
      sequenceDiagramFGHM5R23Binding462 -=
        2 * sequenceDiagramFGHM5R23Binding49.boxTextMargin;
      item.wrap &&
        (item.name = chunk5PVQY5BWG.wrapLabel(
          item.name,
          sequenceDiagramFGHM5R23Binding462 -
            2 * sequenceDiagramFGHM5R23Binding49.wrapPadding,
          sequenceDiagramFGHM5R23Binding461,
        ));
      let sequenceDiagramFGHM5R23Binding464 =
        chunk5PVQY5BWG.calculateTextDimensions(
          item.name,
          sequenceDiagramFGHM5R23Binding461,
        );
      sequenceDiagramFGHM5R23Binding354 = s.getMax(
        sequenceDiagramFGHM5R23Binding464.height,
        sequenceDiagramFGHM5R23Binding354,
      );
      let sequenceDiagramFGHM5R23Binding465 = s.getMax(
        sequenceDiagramFGHM5R23Binding462,
        sequenceDiagramFGHM5R23Binding464.width +
          2 * sequenceDiagramFGHM5R23Binding49.wrapPadding,
      );
      if (
        ((item.margin = sequenceDiagramFGHM5R23Binding49.boxTextMargin),
        sequenceDiagramFGHM5R23Binding462 < sequenceDiagramFGHM5R23Binding465)
      ) {
        let sequenceDiagramFGHM5R23Binding579 =
          (sequenceDiagramFGHM5R23Binding465 -
            sequenceDiagramFGHM5R23Binding462) /
          2;
        item.margin += sequenceDiagramFGHM5R23Binding579;
      }
    }),
    sequenceDiagramFGHM5R23Input94.forEach(
      (item) => (item.textMaxHeight = sequenceDiagramFGHM5R23Binding354),
    ),
    s.getMax(
      sequenceDiagramFGHM5R23Binding353,
      sequenceDiagramFGHM5R23Binding49.height,
    )
  );
}
var sequenceDiagramFGHM5R23Binding1,
  sequenceDiagramFGHM5R23Binding2,
  sequenceDiagramFGHM5R23Binding3,
  sequenceDiagramFGHM5R23Binding4,
  sequenceDiagramFGHM5R23Binding5,
  sequenceDiagramFGHM5R23Binding6,
  sequenceDiagramFGHM5R23Binding7,
  sequenceDiagramFGHM5R23Binding8,
  sequenceDiagramFGHM5R23Binding9,
  sequenceDiagramFGHM5R23Binding10,
  sequenceDiagramFGHM5R23Binding11,
  sequenceDiagramFGHM5R23Binding12,
  sequenceDiagramFGHM5R23Binding13,
  sequenceDiagramFGHM5R23Binding14,
  sequenceDiagramFGHM5R23Binding15,
  sequenceDiagramFGHM5R23Binding16,
  _e,
  sequenceDiagramFGHM5R23Binding17,
  sequenceDiagramFGHM5R23Binding18,
  sequenceDiagramFGHM5R23Binding19,
  be,
  sequenceDiagramFGHM5R23Binding20,
  sequenceDiagramFGHM5R23Binding21,
  sequenceDiagramFGHM5R23Binding22,
  sequenceDiagramFGHM5R23Binding23,
  sequenceDiagramFGHM5R23Binding24,
  sequenceDiagramFGHM5R23Binding25,
  sequenceDiagramFGHM5R23Binding26,
  sequenceDiagramFGHM5R23Binding27,
  sequenceDiagramFGHM5R23Binding28,
  sequenceDiagramFGHM5R23Binding29,
  sequenceDiagramFGHM5R23Binding30,
  sequenceDiagramFGHM5R23Binding31,
  sequenceDiagramFGHM5R23Binding32,
  sequenceDiagramFGHM5R23Binding33,
  sequenceDiagramFGHM5R23Binding34,
  sequenceDiagramFGHM5R23Binding35,
  sequenceDiagramFGHM5R23Binding36,
  sequenceDiagramFGHM5R23Binding37,
  sequenceDiagramFGHM5R23Binding38,
  sequenceDiagramFGHM5R23Binding39,
  sequenceDiagramFGHM5R23Binding40,
  sequenceDiagramFGHM5R23Binding41,
  sequenceDiagramFGHM5R23Binding42,
  sequenceDiagramFGHM5R23Binding43,
  sequenceDiagramFGHM5R23Binding44,
  sequenceDiagramFGHM5R23Binding45,
  sequenceDiagramFGHM5R23Binding46,
  sequenceDiagramFGHM5R23Binding47,
  sequenceDiagramFGHM5R23Binding48,
  sequenceDiagramFGHM5R23Binding49,
  sequenceDiagramFGHM5R23Binding50,
  sequenceDiagramFGHM5R23Binding51,
  sequenceDiagramFGHM5R23Binding52,
  $,
  sequenceDiagramFGHM5R23Binding53,
  sequenceDiagramFGHM5R23Binding54,
  sequenceDiagramFGHM5R23Binding55,
  sequenceDiagramFGHM5R23Binding56,
  sequenceDiagramFGHM5R23Binding57,
  sequenceDiagramFGHM5R23Binding58,
  $e,
  sequenceDiagramFGHM5R23Binding59,
  sequenceDiagramFGHM5R23Binding60,
  sequenceDiagramFGHM5R23Binding61,
  sequenceDiagramFGHM5R23Binding62,
  sequenceDiagramFGHM5R23Binding63,
  at,
  sequenceDiagramFGHM5R23Binding64,
  sequenceDiagramFGHM5R23Binding65,
  sequenceDiagramFGHM5R23Binding66,
  sequenceDiagramFGHM5R23Binding67,
  sequenceDiagramFGHM5R23Binding68,
  sequenceDiagramFGHM5R23Binding69,
  sequenceDiagramFGHM5R23Binding70,
  SequenceDiagramFGHM5R23;
esmInit(() => {
  chunkXPW4576IN();
  l();
  chunkQZHKN3VNN();
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  sequenceDiagramFGHM5R23Binding1 = dist();
  sequenceDiagramFGHM5R23Binding2 = (function () {
    var sequenceDiagramFGHM5R23Binding71 = defineFunctionName(function (
        sequenceDiagramFGHM5R23Input344,
        sequenceDiagramFGHM5R23Input345,
        sequenceDiagramFGHM5R23Input346,
        sequenceDiagramFGHM5R23Input347,
      ) {
        for (
          sequenceDiagramFGHM5R23Input346 ||= {},
            sequenceDiagramFGHM5R23Input347 =
              sequenceDiagramFGHM5R23Input344.length;
          sequenceDiagramFGHM5R23Input347--;
          sequenceDiagramFGHM5R23Input346[
            sequenceDiagramFGHM5R23Input344[sequenceDiagramFGHM5R23Input347]
          ] = sequenceDiagramFGHM5R23Input345
        );
        return sequenceDiagramFGHM5R23Input346;
      }, "o"),
      sequenceDiagramFGHM5R23Binding72 = [1, 2],
      sequenceDiagramFGHM5R23Binding73 = [1, 3],
      sequenceDiagramFGHM5R23Binding74 = [1, 4],
      sequenceDiagramFGHM5R23Binding75 = [2, 4],
      sequenceDiagramFGHM5R23Binding76 = [1, 9],
      sequenceDiagramFGHM5R23Binding77 = [1, 11],
      sequenceDiagramFGHM5R23Binding78 = [1, 12],
      sequenceDiagramFGHM5R23Binding79 = [1, 14],
      sequenceDiagramFGHM5R23Binding80 = [1, 15],
      sequenceDiagramFGHM5R23Binding81 = [1, 17],
      sequenceDiagramFGHM5R23Binding82 = [1, 18],
      sequenceDiagramFGHM5R23Binding83 = [1, 19],
      sequenceDiagramFGHM5R23Binding84 = [1, 25],
      sequenceDiagramFGHM5R23Binding85 = [1, 26],
      sequenceDiagramFGHM5R23Binding86 = [1, 27],
      sequenceDiagramFGHM5R23Binding87 = [1, 28],
      sequenceDiagramFGHM5R23Binding88 = [1, 29],
      sequenceDiagramFGHM5R23Binding89 = [1, 30],
      sequenceDiagramFGHM5R23Binding90 = [1, 31],
      sequenceDiagramFGHM5R23Binding91 = [1, 32],
      sequenceDiagramFGHM5R23Binding92 = [1, 33],
      sequenceDiagramFGHM5R23Binding93 = [1, 34],
      sequenceDiagramFGHM5R23Binding94 = [1, 35],
      sequenceDiagramFGHM5R23Binding95 = [1, 36],
      sequenceDiagramFGHM5R23Binding96 = [1, 37],
      sequenceDiagramFGHM5R23Binding97 = [1, 38],
      sequenceDiagramFGHM5R23Binding98 = [1, 39],
      sequenceDiagramFGHM5R23Binding99 = [1, 40],
      sequenceDiagramFGHM5R23Binding100 = [1, 42],
      sequenceDiagramFGHM5R23Binding101 = [1, 43],
      sequenceDiagramFGHM5R23Binding102 = [1, 44],
      sequenceDiagramFGHM5R23Binding103 = [1, 45],
      sequenceDiagramFGHM5R23Binding104 = [1, 46],
      sequenceDiagramFGHM5R23Binding105 = [1, 47],
      sequenceDiagramFGHM5R23Binding106 = [
        1, 4, 5, 10, 14, 15, 17, 19, 22, 24, 30, 31, 32, 34, 36, 37, 38, 39, 40,
        42, 44, 45, 47, 48, 49, 50, 51, 53, 54, 56, 61, 62, 63, 64, 73,
      ],
      sequenceDiagramFGHM5R23Binding107 = [1, 74],
      sequenceDiagramFGHM5R23Binding108 = [1, 80],
      sequenceDiagramFGHM5R23Binding109 = [1, 81],
      sequenceDiagramFGHM5R23Binding110 = [1, 82],
      sequenceDiagramFGHM5R23Binding111 = [1, 83],
      sequenceDiagramFGHM5R23Binding112 = [1, 84],
      sequenceDiagramFGHM5R23Binding113 = [1, 85],
      sequenceDiagramFGHM5R23Binding114 = [1, 86],
      sequenceDiagramFGHM5R23Binding115 = [1, 87],
      sequenceDiagramFGHM5R23Binding116 = [1, 88],
      sequenceDiagramFGHM5R23Binding117 = [1, 89],
      sequenceDiagramFGHM5R23Binding118 = [1, 90],
      sequenceDiagramFGHM5R23Binding119 = [1, 91],
      sequenceDiagramFGHM5R23Binding120 = [1, 92],
      sequenceDiagramFGHM5R23Binding121 = [1, 93],
      sequenceDiagramFGHM5R23Binding122 = [1, 94],
      sequenceDiagramFGHM5R23Binding123 = [1, 95],
      sequenceDiagramFGHM5R23Binding124 = [1, 96],
      sequenceDiagramFGHM5R23Binding125 = [1, 97],
      sequenceDiagramFGHM5R23Binding126 = [1, 98],
      sequenceDiagramFGHM5R23Binding127 = [1, 99],
      sequenceDiagramFGHM5R23Binding128 = [1, 100],
      sequenceDiagramFGHM5R23Binding129 = [1, 101],
      sequenceDiagramFGHM5R23Binding130 = [1, 102],
      sequenceDiagramFGHM5R23Binding131 = [1, 103],
      _e = [1, 104],
      sequenceDiagramFGHM5R23Binding132 = [1, 105],
      sequenceDiagramFGHM5R23Binding133 = [2, 78],
      sequenceDiagramFGHM5R23Binding134 = [4, 5, 17, 51, 53, 54],
      be = [
        4, 5, 10, 14, 15, 17, 19, 22, 24, 30, 31, 32, 34, 36, 37, 38, 39, 40,
        42, 44, 45, 47, 51, 53, 54, 56, 61, 62, 63, 64, 73,
      ],
      sequenceDiagramFGHM5R23Binding135 = [
        4, 5, 10, 14, 15, 17, 19, 22, 24, 30, 31, 32, 34, 36, 37, 38, 39, 40,
        42, 44, 45, 47, 50, 51, 53, 54, 56, 61, 62, 63, 64, 73,
      ],
      sequenceDiagramFGHM5R23Binding136 = [
        4, 5, 10, 14, 15, 17, 19, 22, 24, 30, 31, 32, 34, 36, 37, 38, 39, 40,
        42, 44, 45, 47, 49, 51, 53, 54, 56, 61, 62, 63, 64, 73,
      ],
      sequenceDiagramFGHM5R23Binding137 = [
        4, 5, 10, 14, 15, 17, 19, 22, 24, 30, 31, 32, 34, 36, 37, 38, 39, 40,
        42, 44, 45, 47, 48, 51, 53, 54, 56, 61, 62, 63, 64, 73,
      ],
      sequenceDiagramFGHM5R23Binding138 = [5, 52],
      sequenceDiagramFGHM5R23Binding139 = [70, 71, 72, 73],
      sequenceDiagramFGHM5R23Binding140 = [1, 151],
      sequenceDiagramFGHM5R23Binding141 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          SPACE: 4,
          NEWLINE: 5,
          SD: 6,
          document: 7,
          line: 8,
          statement: 9,
          INVALID: 10,
          box_section: 11,
          box_line: 12,
          participant_statement: 13,
          create: 14,
          box: 15,
          restOfLine: 16,
          end: 17,
          signal: 18,
          autonumber: 19,
          NUM: 20,
          off: 21,
          activate: 22,
          actor: 23,
          deactivate: 24,
          note_statement: 25,
          links_statement: 26,
          link_statement: 27,
          properties_statement: 28,
          details_statement: 29,
          title: 30,
          legacy_title: 31,
          acc_title: 32,
          acc_title_value: 33,
          acc_descr: 34,
          acc_descr_value: 35,
          acc_descr_multiline_value: 36,
          loop: 37,
          rect: 38,
          opt: 39,
          alt: 40,
          else_sections: 41,
          par: 42,
          par_sections: 43,
          par_over: 44,
          critical: 45,
          option_sections: 46,
          break: 47,
          option: 48,
          and: 49,
          else: 50,
          participant: 51,
          AS: 52,
          participant_actor: 53,
          destroy: 54,
          actor_with_config: 55,
          note: 56,
          placement: 57,
          text2: 58,
          over: 59,
          actor_pair: 60,
          links: 61,
          link: 62,
          properties: 63,
          details: 64,
          spaceList: 65,
          ",": 66,
          left_of: 67,
          right_of: 68,
          signaltype: 69,
          "+": 70,
          "-": 71,
          "()": 72,
          ACTOR: 73,
          config_object: 74,
          CONFIG_START: 75,
          CONFIG_CONTENT: 76,
          CONFIG_END: 77,
          SOLID_OPEN_ARROW: 78,
          DOTTED_OPEN_ARROW: 79,
          SOLID_ARROW: 80,
          SOLID_ARROW_TOP: 81,
          SOLID_ARROW_BOTTOM: 82,
          STICK_ARROW_TOP: 83,
          STICK_ARROW_BOTTOM: 84,
          SOLID_ARROW_TOP_DOTTED: 85,
          SOLID_ARROW_BOTTOM_DOTTED: 86,
          STICK_ARROW_TOP_DOTTED: 87,
          STICK_ARROW_BOTTOM_DOTTED: 88,
          SOLID_ARROW_TOP_REVERSE: 89,
          SOLID_ARROW_BOTTOM_REVERSE: 90,
          STICK_ARROW_TOP_REVERSE: 91,
          STICK_ARROW_BOTTOM_REVERSE: 92,
          SOLID_ARROW_TOP_REVERSE_DOTTED: 93,
          SOLID_ARROW_BOTTOM_REVERSE_DOTTED: 94,
          STICK_ARROW_TOP_REVERSE_DOTTED: 95,
          STICK_ARROW_BOTTOM_REVERSE_DOTTED: 96,
          BIDIRECTIONAL_SOLID_ARROW: 97,
          DOTTED_ARROW: 98,
          BIDIRECTIONAL_DOTTED_ARROW: 99,
          SOLID_CROSS: 100,
          DOTTED_CROSS: 101,
          SOLID_POINT: 102,
          DOTTED_POINT: 103,
          TXT: 104,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          4: "SPACE",
          5: "NEWLINE",
          6: "SD",
          10: "INVALID",
          14: "create",
          15: "box",
          16: "restOfLine",
          17: "end",
          19: "autonumber",
          20: "NUM",
          21: "off",
          22: "activate",
          24: "deactivate",
          30: "title",
          31: "legacy_title",
          32: "acc_title",
          33: "acc_title_value",
          34: "acc_descr",
          35: "acc_descr_value",
          36: "acc_descr_multiline_value",
          37: "loop",
          38: "rect",
          39: "opt",
          40: "alt",
          42: "par",
          44: "par_over",
          45: "critical",
          47: "break",
          48: "option",
          49: "and",
          50: "else",
          51: "participant",
          52: "AS",
          53: "participant_actor",
          54: "destroy",
          56: "note",
          59: "over",
          61: "links",
          62: "link",
          63: "properties",
          64: "details",
          66: ",",
          67: "left_of",
          68: "right_of",
          70: "+",
          71: "-",
          72: "()",
          73: "ACTOR",
          75: "CONFIG_START",
          76: "CONFIG_CONTENT",
          77: "CONFIG_END",
          78: "SOLID_OPEN_ARROW",
          79: "DOTTED_OPEN_ARROW",
          80: "SOLID_ARROW",
          81: "SOLID_ARROW_TOP",
          82: "SOLID_ARROW_BOTTOM",
          83: "STICK_ARROW_TOP",
          84: "STICK_ARROW_BOTTOM",
          85: "SOLID_ARROW_TOP_DOTTED",
          86: "SOLID_ARROW_BOTTOM_DOTTED",
          87: "STICK_ARROW_TOP_DOTTED",
          88: "STICK_ARROW_BOTTOM_DOTTED",
          89: "SOLID_ARROW_TOP_REVERSE",
          90: "SOLID_ARROW_BOTTOM_REVERSE",
          91: "STICK_ARROW_TOP_REVERSE",
          92: "STICK_ARROW_BOTTOM_REVERSE",
          93: "SOLID_ARROW_TOP_REVERSE_DOTTED",
          94: "SOLID_ARROW_BOTTOM_REVERSE_DOTTED",
          95: "STICK_ARROW_TOP_REVERSE_DOTTED",
          96: "STICK_ARROW_BOTTOM_REVERSE_DOTTED",
          97: "BIDIRECTIONAL_SOLID_ARROW",
          98: "DOTTED_ARROW",
          99: "BIDIRECTIONAL_DOTTED_ARROW",
          100: "SOLID_CROSS",
          101: "DOTTED_CROSS",
          102: "SOLID_POINT",
          103: "DOTTED_POINT",
          104: "TXT",
        },
        productions_: [
          0,
          [3, 2],
          [3, 2],
          [3, 2],
          [7, 0],
          [7, 2],
          [8, 2],
          [8, 1],
          [8, 1],
          [8, 1],
          [11, 0],
          [11, 2],
          [12, 2],
          [12, 1],
          [12, 1],
          [9, 1],
          [9, 2],
          [9, 4],
          [9, 2],
          [9, 4],
          [9, 3],
          [9, 3],
          [9, 2],
          [9, 3],
          [9, 3],
          [9, 2],
          [9, 2],
          [9, 2],
          [9, 2],
          [9, 2],
          [9, 1],
          [9, 1],
          [9, 2],
          [9, 2],
          [9, 1],
          [9, 4],
          [9, 4],
          [9, 4],
          [9, 4],
          [9, 4],
          [9, 4],
          [9, 4],
          [9, 4],
          [46, 1],
          [46, 4],
          [43, 1],
          [43, 4],
          [41, 1],
          [41, 4],
          [13, 5],
          [13, 3],
          [13, 5],
          [13, 3],
          [13, 3],
          [13, 5],
          [13, 3],
          [13, 5],
          [13, 3],
          [25, 4],
          [25, 4],
          [26, 3],
          [27, 3],
          [28, 3],
          [29, 3],
          [65, 2],
          [65, 1],
          [60, 3],
          [60, 1],
          [57, 1],
          [57, 1],
          [18, 5],
          [18, 5],
          [18, 5],
          [18, 5],
          [18, 6],
          [18, 4],
          [55, 2],
          [74, 3],
          [23, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [69, 1],
          [58, 1],
        ],
        performAction: defineFunctionName(function (
          sequenceDiagramFGHM5R23Input1,
          sequenceDiagramFGHM5R23Input2,
          sequenceDiagramFGHM5R23Input3,
          sequenceDiagramFGHM5R23Input4,
          sequenceDiagramFGHM5R23Input5,
          sequenceDiagramFGHM5R23Input6,
          sequenceDiagramFGHM5R23Input7,
        ) {
          var sequenceDiagramFGHM5R23Binding142 =
            sequenceDiagramFGHM5R23Input6.length - 1;
          switch (sequenceDiagramFGHM5R23Input5) {
            case 3:
              return (
                sequenceDiagramFGHM5R23Input4.apply(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
                ),
                sequenceDiagramFGHM5R23Input6[sequenceDiagramFGHM5R23Binding142]
              );
            case 4:
            case 10:
              this.$ = [];
              break;
            case 5:
            case 11:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].push(
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ],
              );
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 6:
            case 7:
            case 12:
            case 13:
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ];
              break;
            case 8:
            case 9:
            case 14:
              this.$ = [];
              break;
            case 16:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142
              ].type = "createParticipant";
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ];
              break;
            case 17:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].unshift({
                type: "boxStart",
                boxData: sequenceDiagramFGHM5R23Input4.parseBoxData(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                ),
              });
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].push({
                type: "boxEnd",
                boxText:
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
              });
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 19:
              this.$ = {
                type: "sequenceIndex",
                sequenceIndex: Number(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                ),
                sequenceIndexStep: Number(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 1
                  ],
                ),
                sequenceVisible: true,
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.AUTONUMBER,
              };
              break;
            case 20:
              this.$ = {
                type: "sequenceIndex",
                sequenceIndex: Number(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 1
                  ],
                ),
                sequenceIndexStep: 1,
                sequenceVisible: true,
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.AUTONUMBER,
              };
              break;
            case 21:
              this.$ = {
                type: "sequenceIndex",
                sequenceVisible: false,
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.AUTONUMBER,
              };
              break;
            case 22:
              this.$ = {
                type: "sequenceIndex",
                sequenceVisible: true,
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.AUTONUMBER,
              };
              break;
            case 23:
              this.$ = {
                type: "activeStart",
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.ACTIVE_START,
                actor:
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 1
                  ].actor,
              };
              break;
            case 24:
              this.$ = {
                type: "activeEnd",
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.ACTIVE_END,
                actor:
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 1
                  ].actor,
              };
              break;
            case 30:
              sequenceDiagramFGHM5R23Input4.setDiagramTitle(
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ].substring(6),
              );
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ].substring(6);
              break;
            case 31:
              sequenceDiagramFGHM5R23Input4.setDiagramTitle(
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ].substring(7),
              );
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ].substring(7);
              break;
            case 32:
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ].trim();
              sequenceDiagramFGHM5R23Input4.setAccTitle(this.$);
              break;
            case 33:
            case 34:
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ].trim();
              sequenceDiagramFGHM5R23Input4.setAccDescription(this.$);
              break;
            case 35:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].unshift({
                type: "loopStart",
                loopText: sequenceDiagramFGHM5R23Input4.parseMessage(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                ),
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.LOOP_START,
              });
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].push({
                type: "loopEnd",
                loopText:
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.LOOP_END,
              });
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 36:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].unshift({
                type: "rectStart",
                color: sequenceDiagramFGHM5R23Input4.parseMessage(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                ),
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.RECT_START,
              });
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].push({
                type: "rectEnd",
                color: sequenceDiagramFGHM5R23Input4.parseMessage(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                ),
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.RECT_END,
              });
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 37:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].unshift({
                type: "optStart",
                optText: sequenceDiagramFGHM5R23Input4.parseMessage(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                ),
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.OPT_START,
              });
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].push({
                type: "optEnd",
                optText: sequenceDiagramFGHM5R23Input4.parseMessage(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                ),
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.OPT_END,
              });
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 38:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].unshift({
                type: "altStart",
                altText: sequenceDiagramFGHM5R23Input4.parseMessage(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                ),
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.ALT_START,
              });
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].push({
                type: "altEnd",
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.ALT_END,
              });
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 39:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].unshift({
                type: "parStart",
                parText: sequenceDiagramFGHM5R23Input4.parseMessage(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                ),
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.PAR_START,
              });
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].push({
                type: "parEnd",
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.PAR_END,
              });
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 40:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].unshift({
                type: "parStart",
                parText: sequenceDiagramFGHM5R23Input4.parseMessage(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                ),
                signalType:
                  sequenceDiagramFGHM5R23Input4.LINETYPE.PAR_OVER_START,
              });
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].push({
                type: "parEnd",
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.PAR_END,
              });
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 41:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].unshift({
                type: "criticalStart",
                criticalText: sequenceDiagramFGHM5R23Input4.parseMessage(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                ),
                signalType:
                  sequenceDiagramFGHM5R23Input4.LINETYPE.CRITICAL_START,
              });
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].push({
                type: "criticalEnd",
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.CRITICAL_END,
              });
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 42:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].unshift({
                type: "breakStart",
                breakText: sequenceDiagramFGHM5R23Input4.parseMessage(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                ),
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.BREAK_START,
              });
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].push({
                type: "breakEnd",
                optText: sequenceDiagramFGHM5R23Input4.parseMessage(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ],
                ),
                signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.BREAK_END,
              });
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 44:
              this.$ = sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].concat([
                {
                  type: "option",
                  optionText: sequenceDiagramFGHM5R23Input4.parseMessage(
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 1
                    ],
                  ),
                  signalType:
                    sequenceDiagramFGHM5R23Input4.LINETYPE.CRITICAL_OPTION,
                },
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ],
              ]);
              break;
            case 46:
              this.$ = sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].concat([
                {
                  type: "and",
                  parText: sequenceDiagramFGHM5R23Input4.parseMessage(
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 1
                    ],
                  ),
                  signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.PAR_AND,
                },
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ],
              ]);
              break;
            case 48:
              this.$ = sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].concat([
                {
                  type: "else",
                  altText: sequenceDiagramFGHM5R23Input4.parseMessage(
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 1
                    ],
                  ),
                  signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.ALT_ELSE,
                },
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ],
              ]);
              break;
            case 49:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].draw = "participant";
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].type = "addParticipant";
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].description = sequenceDiagramFGHM5R23Input4.parseMessage(
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
              );
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 3
                ];
              break;
            case 50:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].draw = "participant";
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].type = "addParticipant";
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 51:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].draw = "actor";
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].type = "addParticipant";
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].description = sequenceDiagramFGHM5R23Input4.parseMessage(
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
              );
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 3
                ];
              break;
            case 52:
            case 57:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].draw = "actor";
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].type = "addParticipant";
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 53:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].type = "destroyParticipant";
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 54:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].draw = "participant";
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].type = "addParticipant";
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].description = sequenceDiagramFGHM5R23Input4.parseMessage(
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
              );
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 3
                ];
              break;
            case 55:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].draw = "participant";
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 1
              ].type = "addParticipant";
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ];
              break;
            case 56:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].draw = "actor";
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].type = "addParticipant";
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 3
              ].description = sequenceDiagramFGHM5R23Input4.parseMessage(
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
              );
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 3
                ];
              break;
            case 58:
              this.$ = [
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
                {
                  type: "addNote",
                  placement:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 2
                    ],
                  actor:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 1
                    ].actor,
                  text: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
                },
              ];
              break;
            case 59:
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 2
              ] = []
                .concat(
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 1
                  ],
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 1
                  ],
                )
                .slice(0, 2);
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 2
              ][0] =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 2
                ][0].actor;
              sequenceDiagramFGHM5R23Input6[
                sequenceDiagramFGHM5R23Binding142 - 2
              ][1] =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 2
                ][1].actor;
              this.$ = [
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
                {
                  type: "addNote",
                  placement: sequenceDiagramFGHM5R23Input4.PLACEMENT.OVER,
                  actor: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 2
                  ].slice(0, 2),
                  text: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
                },
              ];
              break;
            case 60:
              this.$ = [
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
                {
                  type: "addLinks",
                  actor:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 1
                    ].actor,
                  text: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
                },
              ];
              break;
            case 61:
              this.$ = [
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
                {
                  type: "addALink",
                  actor:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 1
                    ].actor,
                  text: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
                },
              ];
              break;
            case 62:
              this.$ = [
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
                {
                  type: "addProperties",
                  actor:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 1
                    ].actor,
                  text: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
                },
              ];
              break;
            case 63:
              this.$ = [
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
                {
                  type: "addDetails",
                  actor:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 1
                    ].actor,
                  text: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
                },
              ];
              break;
            case 66:
              this.$ = [
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 2
                ],
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ],
              ];
              break;
            case 67:
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142
                ];
              break;
            case 68:
              this.$ = sequenceDiagramFGHM5R23Input4.PLACEMENT.LEFTOF;
              break;
            case 69:
              this.$ = sequenceDiagramFGHM5R23Input4.PLACEMENT.RIGHTOF;
              break;
            case 70:
              this.$ = [
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 4
                ],
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
                {
                  type: "addMessage",
                  from: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 4
                  ].actor,
                  to: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 1
                  ].actor,
                  signalType:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 3
                    ],
                  msg: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
                  activate: true,
                },
                {
                  type: "activeStart",
                  signalType:
                    sequenceDiagramFGHM5R23Input4.LINETYPE.ACTIVE_START,
                  actor:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 1
                    ].actor,
                },
              ];
              break;
            case 71:
              this.$ = [
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 4
                ],
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
                {
                  type: "addMessage",
                  from: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 4
                  ].actor,
                  to: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 1
                  ].actor,
                  signalType:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 3
                    ],
                  msg: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
                },
                {
                  type: "activeEnd",
                  signalType: sequenceDiagramFGHM5R23Input4.LINETYPE.ACTIVE_END,
                  actor:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 4
                    ].actor,
                },
              ];
              break;
            case 72:
              this.$ = [
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 4
                ],
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
                {
                  type: "addMessage",
                  from: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 4
                  ].actor,
                  to: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 1
                  ].actor,
                  signalType:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 3
                    ],
                  msg: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
                  activate: true,
                  centralConnection:
                    sequenceDiagramFGHM5R23Input4.LINETYPE.CENTRAL_CONNECTION,
                },
                {
                  type: "centralConnection",
                  signalType:
                    sequenceDiagramFGHM5R23Input4.LINETYPE.CENTRAL_CONNECTION,
                  actor:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 1
                    ].actor,
                },
              ];
              break;
            case 73:
              this.$ = [
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 4
                ],
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
                {
                  type: "addMessage",
                  from: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 4
                  ].actor,
                  to: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 1
                  ].actor,
                  signalType:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 2
                    ],
                  msg: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
                  activate: false,
                  centralConnection:
                    sequenceDiagramFGHM5R23Input4.LINETYPE
                      .CENTRAL_CONNECTION_REVERSE,
                },
                {
                  type: "centralConnectionReverse",
                  signalType:
                    sequenceDiagramFGHM5R23Input4.LINETYPE
                      .CENTRAL_CONNECTION_REVERSE,
                  actor:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 4
                    ].actor,
                },
              ];
              break;
            case 74:
              this.$ = [
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 5
                ],
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
                {
                  type: "addMessage",
                  from: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 5
                  ].actor,
                  to: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 1
                  ].actor,
                  signalType:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 3
                    ],
                  msg: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
                  activate: true,
                  centralConnection:
                    sequenceDiagramFGHM5R23Input4.LINETYPE
                      .CENTRAL_CONNECTION_DUAL,
                },
                {
                  type: "centralConnection",
                  signalType:
                    sequenceDiagramFGHM5R23Input4.LINETYPE.CENTRAL_CONNECTION,
                  actor:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 1
                    ].actor,
                },
                {
                  type: "centralConnectionReverse",
                  signalType:
                    sequenceDiagramFGHM5R23Input4.LINETYPE
                      .CENTRAL_CONNECTION_REVERSE,
                  actor:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 5
                    ].actor,
                },
              ];
              break;
            case 75:
              this.$ = [
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 3
                ],
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ],
                {
                  type: "addMessage",
                  from: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 3
                  ].actor,
                  to: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 1
                  ].actor,
                  signalType:
                    sequenceDiagramFGHM5R23Input6[
                      sequenceDiagramFGHM5R23Binding142 - 2
                    ],
                  msg: sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
                },
              ];
              break;
            case 76:
              this.$ = {
                type: "addParticipant",
                actor:
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142 - 1
                  ],
                config:
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
              };
              break;
            case 77:
              this.$ =
                sequenceDiagramFGHM5R23Input6[
                  sequenceDiagramFGHM5R23Binding142 - 1
                ].trim();
              break;
            case 78:
              this.$ = {
                type: "addParticipant",
                actor:
                  sequenceDiagramFGHM5R23Input6[
                    sequenceDiagramFGHM5R23Binding142
                  ],
              };
              break;
            case 79:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.SOLID_OPEN;
              break;
            case 80:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.DOTTED_OPEN;
              break;
            case 81:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.SOLID;
              break;
            case 82:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.SOLID_TOP;
              break;
            case 83:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.SOLID_BOTTOM;
              break;
            case 84:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.STICK_TOP;
              break;
            case 85:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.STICK_BOTTOM;
              break;
            case 86:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.SOLID_TOP_DOTTED;
              break;
            case 87:
              this.$ =
                sequenceDiagramFGHM5R23Input4.LINETYPE.SOLID_BOTTOM_DOTTED;
              break;
            case 88:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.STICK_TOP_DOTTED;
              break;
            case 89:
              this.$ =
                sequenceDiagramFGHM5R23Input4.LINETYPE.STICK_BOTTOM_DOTTED;
              break;
            case 90:
              this.$ =
                sequenceDiagramFGHM5R23Input4.LINETYPE.SOLID_ARROW_TOP_REVERSE;
              break;
            case 91:
              this.$ =
                sequenceDiagramFGHM5R23Input4.LINETYPE.SOLID_ARROW_BOTTOM_REVERSE;
              break;
            case 92:
              this.$ =
                sequenceDiagramFGHM5R23Input4.LINETYPE.STICK_ARROW_TOP_REVERSE;
              break;
            case 93:
              this.$ =
                sequenceDiagramFGHM5R23Input4.LINETYPE.STICK_ARROW_BOTTOM_REVERSE;
              break;
            case 94:
              this.$ =
                sequenceDiagramFGHM5R23Input4.LINETYPE.SOLID_ARROW_TOP_REVERSE_DOTTED;
              break;
            case 95:
              this.$ =
                sequenceDiagramFGHM5R23Input4.LINETYPE.SOLID_ARROW_BOTTOM_REVERSE_DOTTED;
              break;
            case 96:
              this.$ =
                sequenceDiagramFGHM5R23Input4.LINETYPE.STICK_ARROW_TOP_REVERSE_DOTTED;
              break;
            case 97:
              this.$ =
                sequenceDiagramFGHM5R23Input4.LINETYPE.STICK_ARROW_BOTTOM_REVERSE_DOTTED;
              break;
            case 98:
              this.$ =
                sequenceDiagramFGHM5R23Input4.LINETYPE.BIDIRECTIONAL_SOLID;
              break;
            case 99:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.DOTTED;
              break;
            case 100:
              this.$ =
                sequenceDiagramFGHM5R23Input4.LINETYPE.BIDIRECTIONAL_DOTTED;
              break;
            case 101:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.SOLID_CROSS;
              break;
            case 102:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.DOTTED_CROSS;
              break;
            case 103:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.SOLID_POINT;
              break;
            case 104:
              this.$ = sequenceDiagramFGHM5R23Input4.LINETYPE.DOTTED_POINT;
              break;
            case 105:
              this.$ = sequenceDiagramFGHM5R23Input4.parseMessage(
                sequenceDiagramFGHM5R23Input6[sequenceDiagramFGHM5R23Binding142]
                  .trim()
                  .substring(1),
              );
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: sequenceDiagramFGHM5R23Binding72,
            5: sequenceDiagramFGHM5R23Binding73,
            6: sequenceDiagramFGHM5R23Binding74,
          },
          {
            1: [3],
          },
          {
            3: 5,
            4: sequenceDiagramFGHM5R23Binding72,
            5: sequenceDiagramFGHM5R23Binding73,
            6: sequenceDiagramFGHM5R23Binding74,
          },
          {
            3: 6,
            4: sequenceDiagramFGHM5R23Binding72,
            5: sequenceDiagramFGHM5R23Binding73,
            6: sequenceDiagramFGHM5R23Binding74,
          },
          sequenceDiagramFGHM5R23Binding71(
            [
              1, 4, 5, 10, 14, 15, 19, 22, 24, 30, 31, 32, 34, 36, 37, 38, 39,
              40, 42, 44, 45, 47, 51, 53, 54, 56, 61, 62, 63, 64, 73,
            ],
            sequenceDiagramFGHM5R23Binding75,
            {
              7: 7,
            },
          ),
          {
            1: [2, 1],
          },
          {
            1: [2, 2],
          },
          {
            1: [2, 3],
            4: sequenceDiagramFGHM5R23Binding76,
            5: sequenceDiagramFGHM5R23Binding77,
            8: 8,
            9: 10,
            10: sequenceDiagramFGHM5R23Binding78,
            13: 13,
            14: sequenceDiagramFGHM5R23Binding79,
            15: sequenceDiagramFGHM5R23Binding80,
            18: 16,
            19: sequenceDiagramFGHM5R23Binding81,
            22: sequenceDiagramFGHM5R23Binding82,
            23: 41,
            24: sequenceDiagramFGHM5R23Binding83,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: 24,
            30: sequenceDiagramFGHM5R23Binding84,
            31: sequenceDiagramFGHM5R23Binding85,
            32: sequenceDiagramFGHM5R23Binding86,
            34: sequenceDiagramFGHM5R23Binding87,
            36: sequenceDiagramFGHM5R23Binding88,
            37: sequenceDiagramFGHM5R23Binding89,
            38: sequenceDiagramFGHM5R23Binding90,
            39: sequenceDiagramFGHM5R23Binding91,
            40: sequenceDiagramFGHM5R23Binding92,
            42: sequenceDiagramFGHM5R23Binding93,
            44: sequenceDiagramFGHM5R23Binding94,
            45: sequenceDiagramFGHM5R23Binding95,
            47: sequenceDiagramFGHM5R23Binding96,
            51: sequenceDiagramFGHM5R23Binding97,
            53: sequenceDiagramFGHM5R23Binding98,
            54: sequenceDiagramFGHM5R23Binding99,
            56: sequenceDiagramFGHM5R23Binding100,
            61: sequenceDiagramFGHM5R23Binding101,
            62: sequenceDiagramFGHM5R23Binding102,
            63: sequenceDiagramFGHM5R23Binding103,
            64: sequenceDiagramFGHM5R23Binding104,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 5],
          ),
          {
            9: 48,
            13: 13,
            14: sequenceDiagramFGHM5R23Binding79,
            15: sequenceDiagramFGHM5R23Binding80,
            18: 16,
            19: sequenceDiagramFGHM5R23Binding81,
            22: sequenceDiagramFGHM5R23Binding82,
            23: 41,
            24: sequenceDiagramFGHM5R23Binding83,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: 24,
            30: sequenceDiagramFGHM5R23Binding84,
            31: sequenceDiagramFGHM5R23Binding85,
            32: sequenceDiagramFGHM5R23Binding86,
            34: sequenceDiagramFGHM5R23Binding87,
            36: sequenceDiagramFGHM5R23Binding88,
            37: sequenceDiagramFGHM5R23Binding89,
            38: sequenceDiagramFGHM5R23Binding90,
            39: sequenceDiagramFGHM5R23Binding91,
            40: sequenceDiagramFGHM5R23Binding92,
            42: sequenceDiagramFGHM5R23Binding93,
            44: sequenceDiagramFGHM5R23Binding94,
            45: sequenceDiagramFGHM5R23Binding95,
            47: sequenceDiagramFGHM5R23Binding96,
            51: sequenceDiagramFGHM5R23Binding97,
            53: sequenceDiagramFGHM5R23Binding98,
            54: sequenceDiagramFGHM5R23Binding99,
            56: sequenceDiagramFGHM5R23Binding100,
            61: sequenceDiagramFGHM5R23Binding101,
            62: sequenceDiagramFGHM5R23Binding102,
            63: sequenceDiagramFGHM5R23Binding103,
            64: sequenceDiagramFGHM5R23Binding104,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 7],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 8],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 9],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 15],
          ),
          {
            13: 49,
            51: sequenceDiagramFGHM5R23Binding97,
            53: sequenceDiagramFGHM5R23Binding98,
            54: sequenceDiagramFGHM5R23Binding99,
          },
          {
            16: [1, 50],
          },
          {
            5: [1, 51],
          },
          {
            5: [1, 54],
            20: [1, 52],
            21: [1, 53],
          },
          {
            23: 55,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            23: 56,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            5: [1, 57],
          },
          {
            5: [1, 58],
          },
          {
            5: [1, 59],
          },
          {
            5: [1, 60],
          },
          {
            5: [1, 61],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 30],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 31],
          ),
          {
            33: [1, 62],
          },
          {
            35: [1, 63],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 34],
          ),
          {
            16: [1, 64],
          },
          {
            16: [1, 65],
          },
          {
            16: [1, 66],
          },
          {
            16: [1, 67],
          },
          {
            16: [1, 68],
          },
          {
            16: [1, 69],
          },
          {
            16: [1, 70],
          },
          {
            16: [1, 71],
          },
          {
            23: 72,
            55: 73,
            73: sequenceDiagramFGHM5R23Binding107,
          },
          {
            23: 75,
            55: 76,
            73: sequenceDiagramFGHM5R23Binding107,
          },
          {
            23: 77,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            69: 78,
            72: [1, 79],
            78: sequenceDiagramFGHM5R23Binding108,
            79: sequenceDiagramFGHM5R23Binding109,
            80: sequenceDiagramFGHM5R23Binding110,
            81: sequenceDiagramFGHM5R23Binding111,
            82: sequenceDiagramFGHM5R23Binding112,
            83: sequenceDiagramFGHM5R23Binding113,
            84: sequenceDiagramFGHM5R23Binding114,
            85: sequenceDiagramFGHM5R23Binding115,
            86: sequenceDiagramFGHM5R23Binding116,
            87: sequenceDiagramFGHM5R23Binding117,
            88: sequenceDiagramFGHM5R23Binding118,
            89: sequenceDiagramFGHM5R23Binding119,
            90: sequenceDiagramFGHM5R23Binding120,
            91: sequenceDiagramFGHM5R23Binding121,
            92: sequenceDiagramFGHM5R23Binding122,
            93: sequenceDiagramFGHM5R23Binding123,
            94: sequenceDiagramFGHM5R23Binding124,
            95: sequenceDiagramFGHM5R23Binding125,
            96: sequenceDiagramFGHM5R23Binding126,
            97: sequenceDiagramFGHM5R23Binding127,
            98: sequenceDiagramFGHM5R23Binding128,
            99: sequenceDiagramFGHM5R23Binding129,
            100: sequenceDiagramFGHM5R23Binding130,
            101: sequenceDiagramFGHM5R23Binding131,
            102: _e,
            103: sequenceDiagramFGHM5R23Binding132,
          },
          {
            57: 106,
            59: [1, 107],
            67: [1, 108],
            68: [1, 109],
          },
          {
            23: 110,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            23: 111,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            23: 112,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            23: 113,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          sequenceDiagramFGHM5R23Binding71(
            [
              5, 66, 72, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91,
              92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
            ],
            sequenceDiagramFGHM5R23Binding133,
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 6],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 16],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding134,
            [2, 10],
            {
              11: 114,
            },
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 18],
          ),
          {
            5: [1, 116],
            20: [1, 115],
          },
          {
            5: [1, 117],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 22],
          ),
          {
            5: [1, 118],
          },
          {
            5: [1, 119],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 25],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 26],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 27],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 28],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 29],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 32],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 33],
          ),
          sequenceDiagramFGHM5R23Binding71(
            be,
            sequenceDiagramFGHM5R23Binding75,
            {
              7: 120,
            },
          ),
          sequenceDiagramFGHM5R23Binding71(
            be,
            sequenceDiagramFGHM5R23Binding75,
            {
              7: 121,
            },
          ),
          sequenceDiagramFGHM5R23Binding71(
            be,
            sequenceDiagramFGHM5R23Binding75,
            {
              7: 122,
            },
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding135,
            sequenceDiagramFGHM5R23Binding75,
            {
              41: 123,
              7: 124,
            },
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding136,
            sequenceDiagramFGHM5R23Binding75,
            {
              43: 125,
              7: 126,
            },
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding136,
            sequenceDiagramFGHM5R23Binding75,
            {
              7: 126,
              43: 127,
            },
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding137,
            sequenceDiagramFGHM5R23Binding75,
            {
              46: 128,
              7: 129,
            },
          ),
          sequenceDiagramFGHM5R23Binding71(
            be,
            sequenceDiagramFGHM5R23Binding75,
            {
              7: 130,
            },
          ),
          {
            5: [1, 132],
            52: [1, 131],
          },
          {
            5: [1, 134],
            52: [1, 133],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding138,
            sequenceDiagramFGHM5R23Binding133,
            {
              74: 135,
              75: [1, 136],
            },
          ),
          {
            5: [1, 138],
            52: [1, 137],
          },
          {
            5: [1, 140],
            52: [1, 139],
          },
          {
            5: [1, 141],
          },
          {
            23: 145,
            70: [1, 142],
            71: [1, 143],
            72: [1, 144],
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            69: 146,
            78: sequenceDiagramFGHM5R23Binding108,
            79: sequenceDiagramFGHM5R23Binding109,
            80: sequenceDiagramFGHM5R23Binding110,
            81: sequenceDiagramFGHM5R23Binding111,
            82: sequenceDiagramFGHM5R23Binding112,
            83: sequenceDiagramFGHM5R23Binding113,
            84: sequenceDiagramFGHM5R23Binding114,
            85: sequenceDiagramFGHM5R23Binding115,
            86: sequenceDiagramFGHM5R23Binding116,
            87: sequenceDiagramFGHM5R23Binding117,
            88: sequenceDiagramFGHM5R23Binding118,
            89: sequenceDiagramFGHM5R23Binding119,
            90: sequenceDiagramFGHM5R23Binding120,
            91: sequenceDiagramFGHM5R23Binding121,
            92: sequenceDiagramFGHM5R23Binding122,
            93: sequenceDiagramFGHM5R23Binding123,
            94: sequenceDiagramFGHM5R23Binding124,
            95: sequenceDiagramFGHM5R23Binding125,
            96: sequenceDiagramFGHM5R23Binding126,
            97: sequenceDiagramFGHM5R23Binding127,
            98: sequenceDiagramFGHM5R23Binding128,
            99: sequenceDiagramFGHM5R23Binding129,
            100: sequenceDiagramFGHM5R23Binding130,
            101: sequenceDiagramFGHM5R23Binding131,
            102: _e,
            103: sequenceDiagramFGHM5R23Binding132,
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 79],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 80],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 81],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 82],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 83],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 84],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 85],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 86],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 87],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 88],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 89],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 90],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 91],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 92],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 93],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 94],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 95],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 96],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 97],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 98],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 99],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 100],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 101],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 102],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 103],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding139,
            [2, 104],
          ),
          {
            23: 147,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            23: 149,
            60: 148,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            73: [2, 68],
          },
          {
            73: [2, 69],
          },
          {
            58: 150,
            104: sequenceDiagramFGHM5R23Binding140,
          },
          {
            58: 152,
            104: sequenceDiagramFGHM5R23Binding140,
          },
          {
            58: 153,
            104: sequenceDiagramFGHM5R23Binding140,
          },
          {
            58: 154,
            104: sequenceDiagramFGHM5R23Binding140,
          },
          {
            4: [1, 157],
            5: [1, 159],
            12: 156,
            13: 158,
            17: [1, 155],
            51: sequenceDiagramFGHM5R23Binding97,
            53: sequenceDiagramFGHM5R23Binding98,
            54: sequenceDiagramFGHM5R23Binding99,
          },
          {
            5: [1, 160],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 20],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 21],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 23],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 24],
          ),
          {
            4: sequenceDiagramFGHM5R23Binding76,
            5: sequenceDiagramFGHM5R23Binding77,
            8: 8,
            9: 10,
            10: sequenceDiagramFGHM5R23Binding78,
            13: 13,
            14: sequenceDiagramFGHM5R23Binding79,
            15: sequenceDiagramFGHM5R23Binding80,
            17: [1, 161],
            18: 16,
            19: sequenceDiagramFGHM5R23Binding81,
            22: sequenceDiagramFGHM5R23Binding82,
            23: 41,
            24: sequenceDiagramFGHM5R23Binding83,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: 24,
            30: sequenceDiagramFGHM5R23Binding84,
            31: sequenceDiagramFGHM5R23Binding85,
            32: sequenceDiagramFGHM5R23Binding86,
            34: sequenceDiagramFGHM5R23Binding87,
            36: sequenceDiagramFGHM5R23Binding88,
            37: sequenceDiagramFGHM5R23Binding89,
            38: sequenceDiagramFGHM5R23Binding90,
            39: sequenceDiagramFGHM5R23Binding91,
            40: sequenceDiagramFGHM5R23Binding92,
            42: sequenceDiagramFGHM5R23Binding93,
            44: sequenceDiagramFGHM5R23Binding94,
            45: sequenceDiagramFGHM5R23Binding95,
            47: sequenceDiagramFGHM5R23Binding96,
            51: sequenceDiagramFGHM5R23Binding97,
            53: sequenceDiagramFGHM5R23Binding98,
            54: sequenceDiagramFGHM5R23Binding99,
            56: sequenceDiagramFGHM5R23Binding100,
            61: sequenceDiagramFGHM5R23Binding101,
            62: sequenceDiagramFGHM5R23Binding102,
            63: sequenceDiagramFGHM5R23Binding103,
            64: sequenceDiagramFGHM5R23Binding104,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            4: sequenceDiagramFGHM5R23Binding76,
            5: sequenceDiagramFGHM5R23Binding77,
            8: 8,
            9: 10,
            10: sequenceDiagramFGHM5R23Binding78,
            13: 13,
            14: sequenceDiagramFGHM5R23Binding79,
            15: sequenceDiagramFGHM5R23Binding80,
            17: [1, 162],
            18: 16,
            19: sequenceDiagramFGHM5R23Binding81,
            22: sequenceDiagramFGHM5R23Binding82,
            23: 41,
            24: sequenceDiagramFGHM5R23Binding83,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: 24,
            30: sequenceDiagramFGHM5R23Binding84,
            31: sequenceDiagramFGHM5R23Binding85,
            32: sequenceDiagramFGHM5R23Binding86,
            34: sequenceDiagramFGHM5R23Binding87,
            36: sequenceDiagramFGHM5R23Binding88,
            37: sequenceDiagramFGHM5R23Binding89,
            38: sequenceDiagramFGHM5R23Binding90,
            39: sequenceDiagramFGHM5R23Binding91,
            40: sequenceDiagramFGHM5R23Binding92,
            42: sequenceDiagramFGHM5R23Binding93,
            44: sequenceDiagramFGHM5R23Binding94,
            45: sequenceDiagramFGHM5R23Binding95,
            47: sequenceDiagramFGHM5R23Binding96,
            51: sequenceDiagramFGHM5R23Binding97,
            53: sequenceDiagramFGHM5R23Binding98,
            54: sequenceDiagramFGHM5R23Binding99,
            56: sequenceDiagramFGHM5R23Binding100,
            61: sequenceDiagramFGHM5R23Binding101,
            62: sequenceDiagramFGHM5R23Binding102,
            63: sequenceDiagramFGHM5R23Binding103,
            64: sequenceDiagramFGHM5R23Binding104,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            4: sequenceDiagramFGHM5R23Binding76,
            5: sequenceDiagramFGHM5R23Binding77,
            8: 8,
            9: 10,
            10: sequenceDiagramFGHM5R23Binding78,
            13: 13,
            14: sequenceDiagramFGHM5R23Binding79,
            15: sequenceDiagramFGHM5R23Binding80,
            17: [1, 163],
            18: 16,
            19: sequenceDiagramFGHM5R23Binding81,
            22: sequenceDiagramFGHM5R23Binding82,
            23: 41,
            24: sequenceDiagramFGHM5R23Binding83,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: 24,
            30: sequenceDiagramFGHM5R23Binding84,
            31: sequenceDiagramFGHM5R23Binding85,
            32: sequenceDiagramFGHM5R23Binding86,
            34: sequenceDiagramFGHM5R23Binding87,
            36: sequenceDiagramFGHM5R23Binding88,
            37: sequenceDiagramFGHM5R23Binding89,
            38: sequenceDiagramFGHM5R23Binding90,
            39: sequenceDiagramFGHM5R23Binding91,
            40: sequenceDiagramFGHM5R23Binding92,
            42: sequenceDiagramFGHM5R23Binding93,
            44: sequenceDiagramFGHM5R23Binding94,
            45: sequenceDiagramFGHM5R23Binding95,
            47: sequenceDiagramFGHM5R23Binding96,
            51: sequenceDiagramFGHM5R23Binding97,
            53: sequenceDiagramFGHM5R23Binding98,
            54: sequenceDiagramFGHM5R23Binding99,
            56: sequenceDiagramFGHM5R23Binding100,
            61: sequenceDiagramFGHM5R23Binding101,
            62: sequenceDiagramFGHM5R23Binding102,
            63: sequenceDiagramFGHM5R23Binding103,
            64: sequenceDiagramFGHM5R23Binding104,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            17: [1, 164],
          },
          {
            4: sequenceDiagramFGHM5R23Binding76,
            5: sequenceDiagramFGHM5R23Binding77,
            8: 8,
            9: 10,
            10: sequenceDiagramFGHM5R23Binding78,
            13: 13,
            14: sequenceDiagramFGHM5R23Binding79,
            15: sequenceDiagramFGHM5R23Binding80,
            17: [2, 47],
            18: 16,
            19: sequenceDiagramFGHM5R23Binding81,
            22: sequenceDiagramFGHM5R23Binding82,
            23: 41,
            24: sequenceDiagramFGHM5R23Binding83,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: 24,
            30: sequenceDiagramFGHM5R23Binding84,
            31: sequenceDiagramFGHM5R23Binding85,
            32: sequenceDiagramFGHM5R23Binding86,
            34: sequenceDiagramFGHM5R23Binding87,
            36: sequenceDiagramFGHM5R23Binding88,
            37: sequenceDiagramFGHM5R23Binding89,
            38: sequenceDiagramFGHM5R23Binding90,
            39: sequenceDiagramFGHM5R23Binding91,
            40: sequenceDiagramFGHM5R23Binding92,
            42: sequenceDiagramFGHM5R23Binding93,
            44: sequenceDiagramFGHM5R23Binding94,
            45: sequenceDiagramFGHM5R23Binding95,
            47: sequenceDiagramFGHM5R23Binding96,
            50: [1, 165],
            51: sequenceDiagramFGHM5R23Binding97,
            53: sequenceDiagramFGHM5R23Binding98,
            54: sequenceDiagramFGHM5R23Binding99,
            56: sequenceDiagramFGHM5R23Binding100,
            61: sequenceDiagramFGHM5R23Binding101,
            62: sequenceDiagramFGHM5R23Binding102,
            63: sequenceDiagramFGHM5R23Binding103,
            64: sequenceDiagramFGHM5R23Binding104,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            17: [1, 166],
          },
          {
            4: sequenceDiagramFGHM5R23Binding76,
            5: sequenceDiagramFGHM5R23Binding77,
            8: 8,
            9: 10,
            10: sequenceDiagramFGHM5R23Binding78,
            13: 13,
            14: sequenceDiagramFGHM5R23Binding79,
            15: sequenceDiagramFGHM5R23Binding80,
            17: [2, 45],
            18: 16,
            19: sequenceDiagramFGHM5R23Binding81,
            22: sequenceDiagramFGHM5R23Binding82,
            23: 41,
            24: sequenceDiagramFGHM5R23Binding83,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: 24,
            30: sequenceDiagramFGHM5R23Binding84,
            31: sequenceDiagramFGHM5R23Binding85,
            32: sequenceDiagramFGHM5R23Binding86,
            34: sequenceDiagramFGHM5R23Binding87,
            36: sequenceDiagramFGHM5R23Binding88,
            37: sequenceDiagramFGHM5R23Binding89,
            38: sequenceDiagramFGHM5R23Binding90,
            39: sequenceDiagramFGHM5R23Binding91,
            40: sequenceDiagramFGHM5R23Binding92,
            42: sequenceDiagramFGHM5R23Binding93,
            44: sequenceDiagramFGHM5R23Binding94,
            45: sequenceDiagramFGHM5R23Binding95,
            47: sequenceDiagramFGHM5R23Binding96,
            49: [1, 167],
            51: sequenceDiagramFGHM5R23Binding97,
            53: sequenceDiagramFGHM5R23Binding98,
            54: sequenceDiagramFGHM5R23Binding99,
            56: sequenceDiagramFGHM5R23Binding100,
            61: sequenceDiagramFGHM5R23Binding101,
            62: sequenceDiagramFGHM5R23Binding102,
            63: sequenceDiagramFGHM5R23Binding103,
            64: sequenceDiagramFGHM5R23Binding104,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            17: [1, 168],
          },
          {
            17: [1, 169],
          },
          {
            4: sequenceDiagramFGHM5R23Binding76,
            5: sequenceDiagramFGHM5R23Binding77,
            8: 8,
            9: 10,
            10: sequenceDiagramFGHM5R23Binding78,
            13: 13,
            14: sequenceDiagramFGHM5R23Binding79,
            15: sequenceDiagramFGHM5R23Binding80,
            17: [2, 43],
            18: 16,
            19: sequenceDiagramFGHM5R23Binding81,
            22: sequenceDiagramFGHM5R23Binding82,
            23: 41,
            24: sequenceDiagramFGHM5R23Binding83,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: 24,
            30: sequenceDiagramFGHM5R23Binding84,
            31: sequenceDiagramFGHM5R23Binding85,
            32: sequenceDiagramFGHM5R23Binding86,
            34: sequenceDiagramFGHM5R23Binding87,
            36: sequenceDiagramFGHM5R23Binding88,
            37: sequenceDiagramFGHM5R23Binding89,
            38: sequenceDiagramFGHM5R23Binding90,
            39: sequenceDiagramFGHM5R23Binding91,
            40: sequenceDiagramFGHM5R23Binding92,
            42: sequenceDiagramFGHM5R23Binding93,
            44: sequenceDiagramFGHM5R23Binding94,
            45: sequenceDiagramFGHM5R23Binding95,
            47: sequenceDiagramFGHM5R23Binding96,
            48: [1, 170],
            51: sequenceDiagramFGHM5R23Binding97,
            53: sequenceDiagramFGHM5R23Binding98,
            54: sequenceDiagramFGHM5R23Binding99,
            56: sequenceDiagramFGHM5R23Binding100,
            61: sequenceDiagramFGHM5R23Binding101,
            62: sequenceDiagramFGHM5R23Binding102,
            63: sequenceDiagramFGHM5R23Binding103,
            64: sequenceDiagramFGHM5R23Binding104,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            4: sequenceDiagramFGHM5R23Binding76,
            5: sequenceDiagramFGHM5R23Binding77,
            8: 8,
            9: 10,
            10: sequenceDiagramFGHM5R23Binding78,
            13: 13,
            14: sequenceDiagramFGHM5R23Binding79,
            15: sequenceDiagramFGHM5R23Binding80,
            17: [1, 171],
            18: 16,
            19: sequenceDiagramFGHM5R23Binding81,
            22: sequenceDiagramFGHM5R23Binding82,
            23: 41,
            24: sequenceDiagramFGHM5R23Binding83,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: 24,
            30: sequenceDiagramFGHM5R23Binding84,
            31: sequenceDiagramFGHM5R23Binding85,
            32: sequenceDiagramFGHM5R23Binding86,
            34: sequenceDiagramFGHM5R23Binding87,
            36: sequenceDiagramFGHM5R23Binding88,
            37: sequenceDiagramFGHM5R23Binding89,
            38: sequenceDiagramFGHM5R23Binding90,
            39: sequenceDiagramFGHM5R23Binding91,
            40: sequenceDiagramFGHM5R23Binding92,
            42: sequenceDiagramFGHM5R23Binding93,
            44: sequenceDiagramFGHM5R23Binding94,
            45: sequenceDiagramFGHM5R23Binding95,
            47: sequenceDiagramFGHM5R23Binding96,
            51: sequenceDiagramFGHM5R23Binding97,
            53: sequenceDiagramFGHM5R23Binding98,
            54: sequenceDiagramFGHM5R23Binding99,
            56: sequenceDiagramFGHM5R23Binding100,
            61: sequenceDiagramFGHM5R23Binding101,
            62: sequenceDiagramFGHM5R23Binding102,
            63: sequenceDiagramFGHM5R23Binding103,
            64: sequenceDiagramFGHM5R23Binding104,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            16: [1, 172],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 50],
          ),
          {
            16: [1, 173],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 55],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding138,
            [2, 76],
          ),
          {
            76: [1, 174],
          },
          {
            16: [1, 175],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 52],
          ),
          {
            16: [1, 176],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 57],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 53],
          ),
          {
            23: 177,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            23: 178,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            23: 179,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            58: 180,
            104: sequenceDiagramFGHM5R23Binding140,
          },
          {
            23: 181,
            72: [1, 182],
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            58: 183,
            104: sequenceDiagramFGHM5R23Binding140,
          },
          {
            58: 184,
            104: sequenceDiagramFGHM5R23Binding140,
          },
          {
            66: [1, 185],
            104: [2, 67],
          },
          {
            5: [2, 60],
          },
          {
            5: [2, 105],
          },
          {
            5: [2, 61],
          },
          {
            5: [2, 62],
          },
          {
            5: [2, 63],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 17],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding134,
            [2, 11],
          ),
          {
            13: 186,
            51: sequenceDiagramFGHM5R23Binding97,
            53: sequenceDiagramFGHM5R23Binding98,
            54: sequenceDiagramFGHM5R23Binding99,
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding134,
            [2, 13],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding134,
            [2, 14],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 19],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 35],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 36],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 37],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 38],
          ),
          {
            16: [1, 187],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 39],
          ),
          {
            16: [1, 188],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 40],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 41],
          ),
          {
            16: [1, 189],
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 42],
          ),
          {
            5: [1, 190],
          },
          {
            5: [1, 191],
          },
          {
            77: [1, 192],
          },
          {
            5: [1, 193],
          },
          {
            5: [1, 194],
          },
          {
            58: 195,
            104: sequenceDiagramFGHM5R23Binding140,
          },
          {
            58: 196,
            104: sequenceDiagramFGHM5R23Binding140,
          },
          {
            58: 197,
            104: sequenceDiagramFGHM5R23Binding140,
          },
          {
            5: [2, 75],
          },
          {
            58: 198,
            104: sequenceDiagramFGHM5R23Binding140,
          },
          {
            23: 199,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          {
            5: [2, 58],
          },
          {
            5: [2, 59],
          },
          {
            23: 200,
            73: sequenceDiagramFGHM5R23Binding105,
          },
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding134,
            [2, 12],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding135,
            sequenceDiagramFGHM5R23Binding75,
            {
              7: 124,
              41: 201,
            },
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding136,
            sequenceDiagramFGHM5R23Binding75,
            {
              7: 126,
              43: 202,
            },
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding137,
            sequenceDiagramFGHM5R23Binding75,
            {
              7: 129,
              46: 203,
            },
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 49],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 54],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding138,
            [2, 77],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 51],
          ),
          sequenceDiagramFGHM5R23Binding71(
            sequenceDiagramFGHM5R23Binding106,
            [2, 56],
          ),
          {
            5: [2, 70],
          },
          {
            5: [2, 71],
          },
          {
            5: [2, 72],
          },
          {
            5: [2, 73],
          },
          {
            58: 204,
            104: sequenceDiagramFGHM5R23Binding140,
          },
          {
            104: [2, 66],
          },
          {
            17: [2, 48],
          },
          {
            17: [2, 46],
          },
          {
            17: [2, 44],
          },
          {
            5: [2, 74],
          },
        ],
        defaultActions: {
          5: [2, 1],
          6: [2, 2],
          108: [2, 68],
          109: [2, 69],
          150: [2, 60],
          151: [2, 105],
          152: [2, 61],
          153: [2, 62],
          154: [2, 63],
          180: [2, 75],
          183: [2, 58],
          184: [2, 59],
          195: [2, 70],
          196: [2, 71],
          197: [2, 72],
          198: [2, 73],
          200: [2, 66],
          201: [2, 48],
          202: [2, 46],
          203: [2, 44],
          204: [2, 74],
        },
        parseError: defineFunctionName(function (
          sequenceDiagramFGHM5R23Input324,
          sequenceDiagramFGHM5R23Input325,
        ) {
          if (sequenceDiagramFGHM5R23Input325.recoverable)
            this.trace(sequenceDiagramFGHM5R23Input324);
          else {
            var sequenceDiagramFGHM5R23Binding551 = Error(
              sequenceDiagramFGHM5R23Input324,
            );
            throw (
              (sequenceDiagramFGHM5R23Binding551.hash =
                sequenceDiagramFGHM5R23Input325),
              sequenceDiagramFGHM5R23Binding551
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (sequenceDiagramFGHM5R23Input25) {
          var sequenceDiagramFGHM5R23Binding180 = this,
            sequenceDiagramFGHM5R23Binding181 = [0],
            sequenceDiagramFGHM5R23Binding182 = [],
            sequenceDiagramFGHM5R23Binding183 = [null],
            sequenceDiagramFGHM5R23Binding184 = [],
            sequenceDiagramFGHM5R23Binding185 = this.table,
            sequenceDiagramFGHM5R23Binding186 = "",
            sequenceDiagramFGHM5R23Binding187 = 0,
            sequenceDiagramFGHM5R23Binding188 = 0,
            sequenceDiagramFGHM5R23Binding189 = 0,
            sequenceDiagramFGHM5R23Binding192 =
              sequenceDiagramFGHM5R23Binding184.slice.call(arguments, 1),
            sequenceDiagramFGHM5R23Binding193 = Object.create(this.lexer),
            sequenceDiagramFGHM5R23Binding194 = {
              yy: {},
            };
          for (var sequenceDiagramFGHM5R23Binding195 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              sequenceDiagramFGHM5R23Binding195,
            ) &&
              (sequenceDiagramFGHM5R23Binding194.yy[
                sequenceDiagramFGHM5R23Binding195
              ] = this.yy[sequenceDiagramFGHM5R23Binding195]);
          sequenceDiagramFGHM5R23Binding193.setInput(
            sequenceDiagramFGHM5R23Input25,
            sequenceDiagramFGHM5R23Binding194.yy,
          );
          sequenceDiagramFGHM5R23Binding194.yy.lexer =
            sequenceDiagramFGHM5R23Binding193;
          sequenceDiagramFGHM5R23Binding194.yy.parser = this;
          sequenceDiagramFGHM5R23Binding193.yylloc === undefined &&
            (sequenceDiagramFGHM5R23Binding193.yylloc = {});
          var sequenceDiagramFGHM5R23Binding196 =
            sequenceDiagramFGHM5R23Binding193.yylloc;
          sequenceDiagramFGHM5R23Binding184.push(
            sequenceDiagramFGHM5R23Binding196,
          );
          var sequenceDiagramFGHM5R23Binding197 =
            sequenceDiagramFGHM5R23Binding193.options &&
            sequenceDiagramFGHM5R23Binding193.options.ranges;
          typeof sequenceDiagramFGHM5R23Binding194.yy.parseError == "function"
            ? (this.parseError =
                sequenceDiagramFGHM5R23Binding194.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function sequenceDiagramFGHM5R23Helper8(
            sequenceDiagramFGHM5R23Input349,
          ) {
            sequenceDiagramFGHM5R23Binding181.length -=
              2 * sequenceDiagramFGHM5R23Input349;
            sequenceDiagramFGHM5R23Binding183.length -=
              sequenceDiagramFGHM5R23Input349;
            sequenceDiagramFGHM5R23Binding184.length -=
              sequenceDiagramFGHM5R23Input349;
          }
          defineFunctionName(sequenceDiagramFGHM5R23Helper8, "popStack");
          function sequenceDiagramFGHM5R23Helper9() {
            var sequenceDiagramFGHM5R23Binding519 =
              sequenceDiagramFGHM5R23Binding182.pop() ||
              sequenceDiagramFGHM5R23Binding193.lex() ||
              1;
            return (
              typeof sequenceDiagramFGHM5R23Binding519 != "number" &&
                (sequenceDiagramFGHM5R23Binding519 instanceof Array &&
                  ((sequenceDiagramFGHM5R23Binding182 =
                    sequenceDiagramFGHM5R23Binding519),
                  (sequenceDiagramFGHM5R23Binding519 =
                    sequenceDiagramFGHM5R23Binding182.pop())),
                (sequenceDiagramFGHM5R23Binding519 =
                  sequenceDiagramFGHM5R23Binding180.symbols_[
                    sequenceDiagramFGHM5R23Binding519
                  ] || sequenceDiagramFGHM5R23Binding519)),
              sequenceDiagramFGHM5R23Binding519
            );
          }
          defineFunctionName(sequenceDiagramFGHM5R23Helper9, "lex");
          for (
            var sequenceDiagramFGHM5R23Binding198,
              sequenceDiagramFGHM5R23Binding199,
              sequenceDiagramFGHM5R23Binding200,
              sequenceDiagramFGHM5R23Binding201,
              sequenceDiagramFGHM5R23Binding202,
              sequenceDiagramFGHM5R23Binding203 = {},
              sequenceDiagramFGHM5R23Binding204,
              sequenceDiagramFGHM5R23Binding205,
              sequenceDiagramFGHM5R23Binding206,
              sequenceDiagramFGHM5R23Binding207;
            ;
          ) {
            if (
              ((sequenceDiagramFGHM5R23Binding200 =
                sequenceDiagramFGHM5R23Binding181[
                  sequenceDiagramFGHM5R23Binding181.length - 1
                ]),
              this.defaultActions[sequenceDiagramFGHM5R23Binding200]
                ? (sequenceDiagramFGHM5R23Binding201 =
                    this.defaultActions[sequenceDiagramFGHM5R23Binding200])
                : ((sequenceDiagramFGHM5R23Binding198 ??=
                    sequenceDiagramFGHM5R23Helper9()),
                  (sequenceDiagramFGHM5R23Binding201 =
                    sequenceDiagramFGHM5R23Binding185[
                      sequenceDiagramFGHM5R23Binding200
                    ] &&
                    sequenceDiagramFGHM5R23Binding185[
                      sequenceDiagramFGHM5R23Binding200
                    ][sequenceDiagramFGHM5R23Binding198])),
              sequenceDiagramFGHM5R23Binding201 === undefined ||
                !sequenceDiagramFGHM5R23Binding201.length ||
                !sequenceDiagramFGHM5R23Binding201[0])
            ) {
              var sequenceDiagramFGHM5R23Binding208 = "";
              for (sequenceDiagramFGHM5R23Binding204 in ((sequenceDiagramFGHM5R23Binding207 =
                []),
              sequenceDiagramFGHM5R23Binding185[
                sequenceDiagramFGHM5R23Binding200
              ]))
                this.terminals_[sequenceDiagramFGHM5R23Binding204] &&
                  sequenceDiagramFGHM5R23Binding204 > 2 &&
                  sequenceDiagramFGHM5R23Binding207.push(
                    "'" +
                      this.terminals_[sequenceDiagramFGHM5R23Binding204] +
                      "'",
                  );
              sequenceDiagramFGHM5R23Binding208 =
                sequenceDiagramFGHM5R23Binding193.showPosition
                  ? "Parse error on line " +
                    (sequenceDiagramFGHM5R23Binding187 + 1) +
                    ":\n" +
                    sequenceDiagramFGHM5R23Binding193.showPosition() +
                    "\nExpecting " +
                    sequenceDiagramFGHM5R23Binding207.join(", ") +
                    ", got '" +
                    (this.terminals_[sequenceDiagramFGHM5R23Binding198] ||
                      sequenceDiagramFGHM5R23Binding198) +
                    "'"
                  : "Parse error on line " +
                    (sequenceDiagramFGHM5R23Binding187 + 1) +
                    ": Unexpected " +
                    (sequenceDiagramFGHM5R23Binding198 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[sequenceDiagramFGHM5R23Binding198] ||
                          sequenceDiagramFGHM5R23Binding198) +
                        "'");
              this.parseError(sequenceDiagramFGHM5R23Binding208, {
                text: sequenceDiagramFGHM5R23Binding193.match,
                token:
                  this.terminals_[sequenceDiagramFGHM5R23Binding198] ||
                  sequenceDiagramFGHM5R23Binding198,
                line: sequenceDiagramFGHM5R23Binding193.yylineno,
                loc: sequenceDiagramFGHM5R23Binding196,
                expected: sequenceDiagramFGHM5R23Binding207,
              });
            }
            if (
              sequenceDiagramFGHM5R23Binding201[0] instanceof Array &&
              sequenceDiagramFGHM5R23Binding201.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  sequenceDiagramFGHM5R23Binding200 +
                  ", token: " +
                  sequenceDiagramFGHM5R23Binding198,
              );
            switch (sequenceDiagramFGHM5R23Binding201[0]) {
              case 1:
                sequenceDiagramFGHM5R23Binding181.push(
                  sequenceDiagramFGHM5R23Binding198,
                );
                sequenceDiagramFGHM5R23Binding183.push(
                  sequenceDiagramFGHM5R23Binding193.yytext,
                );
                sequenceDiagramFGHM5R23Binding184.push(
                  sequenceDiagramFGHM5R23Binding193.yylloc,
                );
                sequenceDiagramFGHM5R23Binding181.push(
                  sequenceDiagramFGHM5R23Binding201[1],
                );
                sequenceDiagramFGHM5R23Binding198 = null;
                sequenceDiagramFGHM5R23Binding199
                  ? ((sequenceDiagramFGHM5R23Binding198 =
                      sequenceDiagramFGHM5R23Binding199),
                    (sequenceDiagramFGHM5R23Binding199 = null))
                  : ((sequenceDiagramFGHM5R23Binding188 =
                      sequenceDiagramFGHM5R23Binding193.yyleng),
                    (sequenceDiagramFGHM5R23Binding186 =
                      sequenceDiagramFGHM5R23Binding193.yytext),
                    (sequenceDiagramFGHM5R23Binding187 =
                      sequenceDiagramFGHM5R23Binding193.yylineno),
                    (sequenceDiagramFGHM5R23Binding196 =
                      sequenceDiagramFGHM5R23Binding193.yylloc),
                    sequenceDiagramFGHM5R23Binding189 > 0 &&
                      sequenceDiagramFGHM5R23Binding189--);
                break;
              case 2:
                if (
                  ((sequenceDiagramFGHM5R23Binding205 =
                    this.productions_[sequenceDiagramFGHM5R23Binding201[1]][1]),
                  (sequenceDiagramFGHM5R23Binding203.$ =
                    sequenceDiagramFGHM5R23Binding183[
                      sequenceDiagramFGHM5R23Binding183.length -
                        sequenceDiagramFGHM5R23Binding205
                    ]),
                  (sequenceDiagramFGHM5R23Binding203._$ = {
                    first_line:
                      sequenceDiagramFGHM5R23Binding184[
                        sequenceDiagramFGHM5R23Binding184.length -
                          (sequenceDiagramFGHM5R23Binding205 || 1)
                      ].first_line,
                    last_line:
                      sequenceDiagramFGHM5R23Binding184[
                        sequenceDiagramFGHM5R23Binding184.length - 1
                      ].last_line,
                    first_column:
                      sequenceDiagramFGHM5R23Binding184[
                        sequenceDiagramFGHM5R23Binding184.length -
                          (sequenceDiagramFGHM5R23Binding205 || 1)
                      ].first_column,
                    last_column:
                      sequenceDiagramFGHM5R23Binding184[
                        sequenceDiagramFGHM5R23Binding184.length - 1
                      ].last_column,
                  }),
                  sequenceDiagramFGHM5R23Binding197 &&
                    (sequenceDiagramFGHM5R23Binding203._$.range = [
                      sequenceDiagramFGHM5R23Binding184[
                        sequenceDiagramFGHM5R23Binding184.length -
                          (sequenceDiagramFGHM5R23Binding205 || 1)
                      ].range[0],
                      sequenceDiagramFGHM5R23Binding184[
                        sequenceDiagramFGHM5R23Binding184.length - 1
                      ].range[1],
                    ]),
                  (sequenceDiagramFGHM5R23Binding202 = this.performAction.apply(
                    sequenceDiagramFGHM5R23Binding203,
                    [
                      sequenceDiagramFGHM5R23Binding186,
                      sequenceDiagramFGHM5R23Binding188,
                      sequenceDiagramFGHM5R23Binding187,
                      sequenceDiagramFGHM5R23Binding194.yy,
                      sequenceDiagramFGHM5R23Binding201[1],
                      sequenceDiagramFGHM5R23Binding183,
                      sequenceDiagramFGHM5R23Binding184,
                    ].concat(sequenceDiagramFGHM5R23Binding192),
                  )),
                  sequenceDiagramFGHM5R23Binding202 !== undefined)
                )
                  return sequenceDiagramFGHM5R23Binding202;
                sequenceDiagramFGHM5R23Binding205 &&
                  ((sequenceDiagramFGHM5R23Binding181 =
                    sequenceDiagramFGHM5R23Binding181.slice(
                      0,
                      -1 * sequenceDiagramFGHM5R23Binding205 * 2,
                    )),
                  (sequenceDiagramFGHM5R23Binding183 =
                    sequenceDiagramFGHM5R23Binding183.slice(
                      0,
                      -1 * sequenceDiagramFGHM5R23Binding205,
                    )),
                  (sequenceDiagramFGHM5R23Binding184 =
                    sequenceDiagramFGHM5R23Binding184.slice(
                      0,
                      -1 * sequenceDiagramFGHM5R23Binding205,
                    )));
                sequenceDiagramFGHM5R23Binding181.push(
                  this.productions_[sequenceDiagramFGHM5R23Binding201[1]][0],
                );
                sequenceDiagramFGHM5R23Binding183.push(
                  sequenceDiagramFGHM5R23Binding203.$,
                );
                sequenceDiagramFGHM5R23Binding184.push(
                  sequenceDiagramFGHM5R23Binding203._$,
                );
                sequenceDiagramFGHM5R23Binding206 =
                  sequenceDiagramFGHM5R23Binding185[
                    sequenceDiagramFGHM5R23Binding181[
                      sequenceDiagramFGHM5R23Binding181.length - 2
                    ]
                  ][
                    sequenceDiagramFGHM5R23Binding181[
                      sequenceDiagramFGHM5R23Binding181.length - 1
                    ]
                  ];
                sequenceDiagramFGHM5R23Binding181.push(
                  sequenceDiagramFGHM5R23Binding206,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    sequenceDiagramFGHM5R23Binding141.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          sequenceDiagramFGHM5R23Input338,
          sequenceDiagramFGHM5R23Input339,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              sequenceDiagramFGHM5R23Input338,
              sequenceDiagramFGHM5R23Input339,
            );
          else throw Error(sequenceDiagramFGHM5R23Input338);
        }, "parseError"),
        setInput: defineFunctionName(function (
          sequenceDiagramFGHM5R23Input177,
          sequenceDiagramFGHM5R23Input178,
        ) {
          return (
            (this.yy = sequenceDiagramFGHM5R23Input178 || this.yy || {}),
            (this._input = sequenceDiagramFGHM5R23Input177),
            (this._more = this._backtrack = this.done = false),
            (this.yylineno = this.yyleng = 0),
            (this.yytext = this.matched = this.match = ""),
            (this.conditionStack = ["INITIAL"]),
            (this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0,
            }),
            this.options.ranges && (this.yylloc.range = [0, 0]),
            (this.offset = 0),
            this
          );
        }, "setInput"),
        input: defineFunctionName(function () {
          var sequenceDiagramFGHM5R23Binding468 = this._input[0];
          return (
            (this.yytext += sequenceDiagramFGHM5R23Binding468),
            this.yyleng++,
            this.offset++,
            (this.match += sequenceDiagramFGHM5R23Binding468),
            (this.matched += sequenceDiagramFGHM5R23Binding468),
            sequenceDiagramFGHM5R23Binding468.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            sequenceDiagramFGHM5R23Binding468
          );
        }, "input"),
        unput: defineFunctionName(function (sequenceDiagramFGHM5R23Input120) {
          var sequenceDiagramFGHM5R23Binding402 =
              sequenceDiagramFGHM5R23Input120.length,
            sequenceDiagramFGHM5R23Binding403 =
              sequenceDiagramFGHM5R23Input120.split(/(?:\r\n?|\n)/g);
          this._input = sequenceDiagramFGHM5R23Input120 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - sequenceDiagramFGHM5R23Binding402,
          );
          this.offset -= sequenceDiagramFGHM5R23Binding402;
          var sequenceDiagramFGHM5R23Binding404 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          sequenceDiagramFGHM5R23Binding403.length - 1 &&
            (this.yylineno -= sequenceDiagramFGHM5R23Binding403.length - 1);
          var sequenceDiagramFGHM5R23Binding405 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: sequenceDiagramFGHM5R23Binding403
                ? (sequenceDiagramFGHM5R23Binding403.length ===
                  sequenceDiagramFGHM5R23Binding404.length
                    ? this.yylloc.first_column
                    : 0) +
                  sequenceDiagramFGHM5R23Binding404[
                    sequenceDiagramFGHM5R23Binding404.length -
                      sequenceDiagramFGHM5R23Binding403.length
                  ].length -
                  sequenceDiagramFGHM5R23Binding403[0].length
                : this.yylloc.first_column - sequenceDiagramFGHM5R23Binding402,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                sequenceDiagramFGHM5R23Binding405[0],
                sequenceDiagramFGHM5R23Binding405[0] +
                  this.yyleng -
                  sequenceDiagramFGHM5R23Binding402,
              ]),
            (this.yyleng = this.yytext.length),
            this
          );
        }, "unput"),
        more: defineFunctionName(function () {
          return ((this._more = true), this);
        }, "more"),
        reject: defineFunctionName(function () {
          if (this.options.backtrack_lexer) this._backtrack = true;
          else
            return this.parseError(
              "Lexical error on line " +
                (this.yylineno + 1) +
                ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
                this.showPosition(),
              {
                text: "",
                token: null,
                line: this.yylineno,
              },
            );
          return this;
        }, "reject"),
        less: defineFunctionName(function (sequenceDiagramFGHM5R23Input362) {
          this.unput(this.match.slice(sequenceDiagramFGHM5R23Input362));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var sequenceDiagramFGHM5R23Binding522 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (sequenceDiagramFGHM5R23Binding522.length > 20 ? "..." : "") +
            sequenceDiagramFGHM5R23Binding522.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var sequenceDiagramFGHM5R23Binding510 = this.match;
          return (
            sequenceDiagramFGHM5R23Binding510.length < 20 &&
              (sequenceDiagramFGHM5R23Binding510 += this._input.substr(
                0,
                20 - sequenceDiagramFGHM5R23Binding510.length,
              )),
            (
              sequenceDiagramFGHM5R23Binding510.substr(0, 20) +
              (sequenceDiagramFGHM5R23Binding510.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var sequenceDiagramFGHM5R23Binding525 = this.pastInput(),
            sequenceDiagramFGHM5R23Binding526 = Array(
              sequenceDiagramFGHM5R23Binding525.length + 1,
            ).join("-");
          return (
            sequenceDiagramFGHM5R23Binding525 +
            this.upcomingInput() +
            "\n" +
            sequenceDiagramFGHM5R23Binding526 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          sequenceDiagramFGHM5R23Input67,
          sequenceDiagramFGHM5R23Input68,
        ) {
          var sequenceDiagramFGHM5R23Binding303,
            sequenceDiagramFGHM5R23Binding304,
            sequenceDiagramFGHM5R23Binding305;
          if (
            (this.options.backtrack_lexer &&
              ((sequenceDiagramFGHM5R23Binding305 = {
                yylineno: this.yylineno,
                yylloc: {
                  first_line: this.yylloc.first_line,
                  last_line: this.last_line,
                  first_column: this.yylloc.first_column,
                  last_column: this.yylloc.last_column,
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done,
              }),
              this.options.ranges &&
                (sequenceDiagramFGHM5R23Binding305.yylloc.range =
                  this.yylloc.range.slice(0))),
            (sequenceDiagramFGHM5R23Binding304 =
              sequenceDiagramFGHM5R23Input67[0].match(/(?:\r\n?|\n).*/g)),
            sequenceDiagramFGHM5R23Binding304 &&
              (this.yylineno += sequenceDiagramFGHM5R23Binding304.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: sequenceDiagramFGHM5R23Binding304
                ? sequenceDiagramFGHM5R23Binding304[
                    sequenceDiagramFGHM5R23Binding304.length - 1
                  ].length -
                  sequenceDiagramFGHM5R23Binding304[
                    sequenceDiagramFGHM5R23Binding304.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  sequenceDiagramFGHM5R23Input67[0].length,
            }),
            (this.yytext += sequenceDiagramFGHM5R23Input67[0]),
            (this.match += sequenceDiagramFGHM5R23Input67[0]),
            (this.matches = sequenceDiagramFGHM5R23Input67),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              sequenceDiagramFGHM5R23Input67[0].length,
            )),
            (this.matched += sequenceDiagramFGHM5R23Input67[0]),
            (sequenceDiagramFGHM5R23Binding303 = this.performAction.call(
              this,
              this.yy,
              this,
              sequenceDiagramFGHM5R23Input68,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            sequenceDiagramFGHM5R23Binding303)
          )
            return sequenceDiagramFGHM5R23Binding303;
          if (this._backtrack) {
            for (var sequenceDiagramFGHM5R23Binding306 in sequenceDiagramFGHM5R23Binding305)
              this[sequenceDiagramFGHM5R23Binding306] =
                sequenceDiagramFGHM5R23Binding305[
                  sequenceDiagramFGHM5R23Binding306
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var sequenceDiagramFGHM5R23Binding394,
            sequenceDiagramFGHM5R23Binding395,
            sequenceDiagramFGHM5R23Binding396,
            sequenceDiagramFGHM5R23Binding397;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var sequenceDiagramFGHM5R23Binding398 = this._currentRules(),
              sequenceDiagramFGHM5R23Binding399 = 0;
            sequenceDiagramFGHM5R23Binding399 <
            sequenceDiagramFGHM5R23Binding398.length;
            sequenceDiagramFGHM5R23Binding399++
          )
            if (
              ((sequenceDiagramFGHM5R23Binding396 = this._input.match(
                this.rules[
                  sequenceDiagramFGHM5R23Binding398[
                    sequenceDiagramFGHM5R23Binding399
                  ]
                ],
              )),
              sequenceDiagramFGHM5R23Binding396 &&
                (!sequenceDiagramFGHM5R23Binding395 ||
                  sequenceDiagramFGHM5R23Binding396[0].length >
                    sequenceDiagramFGHM5R23Binding395[0].length))
            ) {
              if (
                ((sequenceDiagramFGHM5R23Binding395 =
                  sequenceDiagramFGHM5R23Binding396),
                (sequenceDiagramFGHM5R23Binding397 =
                  sequenceDiagramFGHM5R23Binding399),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((sequenceDiagramFGHM5R23Binding394 = this.test_match(
                    sequenceDiagramFGHM5R23Binding396,
                    sequenceDiagramFGHM5R23Binding398[
                      sequenceDiagramFGHM5R23Binding399
                    ],
                  )),
                  sequenceDiagramFGHM5R23Binding394 !== false)
                )
                  return sequenceDiagramFGHM5R23Binding394;
                if (this._backtrack) {
                  sequenceDiagramFGHM5R23Binding395 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return sequenceDiagramFGHM5R23Binding395
            ? ((sequenceDiagramFGHM5R23Binding394 = this.test_match(
                sequenceDiagramFGHM5R23Binding395,
                sequenceDiagramFGHM5R23Binding398[
                  sequenceDiagramFGHM5R23Binding397
                ],
              )),
              sequenceDiagramFGHM5R23Binding394 === false
                ? false
                : sequenceDiagramFGHM5R23Binding394)
            : this._input === ""
              ? this.EOF
              : this.parseError(
                  "Lexical error on line " +
                    (this.yylineno + 1) +
                    ". Unrecognized text.\n" +
                    this.showPosition(),
                  {
                    text: "",
                    token: null,
                    line: this.yylineno,
                  },
                );
        }, "next"),
        lex: defineFunctionName(function () {
          return this.next() || this.lex();
        }, "lex"),
        begin: defineFunctionName(function (sequenceDiagramFGHM5R23Input364) {
          this.conditionStack.push(sequenceDiagramFGHM5R23Input364);
        }, "begin"),
        popState: defineFunctionName(function () {
          return this.conditionStack.length - 1 > 0
            ? this.conditionStack.pop()
            : this.conditionStack[0];
        }, "popState"),
        _currentRules: defineFunctionName(function () {
          return this.conditionStack.length &&
            this.conditionStack[this.conditionStack.length - 1]
            ? this.conditions[
                this.conditionStack[this.conditionStack.length - 1]
              ].rules
            : this.conditions.INITIAL.rules;
        }, "_currentRules"),
        topState: defineFunctionName(function (
          sequenceDiagramFGHM5R23Input322,
        ) {
          return (
            (sequenceDiagramFGHM5R23Input322 =
              this.conditionStack.length -
              1 -
              Math.abs(sequenceDiagramFGHM5R23Input322 || 0)),
            sequenceDiagramFGHM5R23Input322 >= 0
              ? this.conditionStack[sequenceDiagramFGHM5R23Input322]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (
          sequenceDiagramFGHM5R23Input371,
        ) {
          this.begin(sequenceDiagramFGHM5R23Input371);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          sequenceDiagramFGHM5R23Input21,
          sequenceDiagramFGHM5R23Input22,
          sequenceDiagramFGHM5R23Input23,
          sequenceDiagramFGHM5R23Input24,
        ) {
          switch (sequenceDiagramFGHM5R23Input23) {
            case 0:
              return 5;
            case 1:
              break;
            case 2:
              break;
            case 3:
              break;
            case 4:
              break;
            case 5:
              break;
            case 6:
              return 20;
            case 7:
              return (this.begin("CONFIG"), 75);
            case 8:
              return 76;
            case 9:
              return (this.popState(), this.begin("ALIAS"), 77);
            case 10:
              return (this.popState(), this.popState(), 77);
            case 11:
              return (
                (sequenceDiagramFGHM5R23Input22.yytext =
                  sequenceDiagramFGHM5R23Input22.yytext.trim()),
                73
              );
            case 12:
              return (
                (sequenceDiagramFGHM5R23Input22.yytext =
                  sequenceDiagramFGHM5R23Input22.yytext.trim()),
                this.begin("ALIAS"),
                73
              );
            case 13:
              return (
                (sequenceDiagramFGHM5R23Input22.yytext =
                  sequenceDiagramFGHM5R23Input22.yytext.trim()),
                this.popState(),
                73
              );
            case 14:
              return (this.popState(), 10);
            case 15:
              return (
                (sequenceDiagramFGHM5R23Input22.yytext =
                  sequenceDiagramFGHM5R23Input22.yytext.trim()),
                this.popState(),
                10
              );
            case 16:
              return (this.begin("LINE"), 15);
            case 17:
              return (this.begin("ID"), 51);
            case 18:
              return (this.begin("ID"), 53);
            case 19:
              return 14;
            case 20:
              return (this.begin("ID"), 54);
            case 21:
              return (this.popState(), this.popState(), this.begin("LINE"), 52);
            case 22:
              return (this.popState(), this.popState(), 5);
            case 23:
              return (this.begin("LINE"), 37);
            case 24:
              return (this.begin("LINE"), 38);
            case 25:
              return (this.begin("LINE"), 39);
            case 26:
              return (this.begin("LINE"), 40);
            case 27:
              return (this.begin("LINE"), 50);
            case 28:
              return (this.begin("LINE"), 42);
            case 29:
              return (this.begin("LINE"), 44);
            case 30:
              return (this.begin("LINE"), 49);
            case 31:
              return (this.begin("LINE"), 45);
            case 32:
              return (this.begin("LINE"), 48);
            case 33:
              return (this.begin("LINE"), 47);
            case 34:
              return (this.popState(), 16);
            case 35:
              return 17;
            case 36:
              return 67;
            case 37:
              return 68;
            case 38:
              return 61;
            case 39:
              return 62;
            case 40:
              return 63;
            case 41:
              return 64;
            case 42:
              return 59;
            case 43:
              return 56;
            case 44:
              return (this.begin("ID"), 22);
            case 45:
              return (this.begin("ID"), 24);
            case 46:
              return 30;
            case 47:
              return 31;
            case 48:
              return (this.begin("acc_title"), 32);
            case 49:
              return (this.popState(), "acc_title_value");
            case 50:
              return (this.begin("acc_descr"), 34);
            case 51:
              return (this.popState(), "acc_descr_value");
            case 52:
              this.begin("acc_descr_multiline");
              break;
            case 53:
              this.popState();
              break;
            case 54:
              return "acc_descr_multiline_value";
            case 55:
              return 6;
            case 56:
              return 19;
            case 57:
              return 21;
            case 58:
              return 66;
            case 59:
              return 5;
            case 60:
              return (
                (sequenceDiagramFGHM5R23Input22.yytext =
                  sequenceDiagramFGHM5R23Input22.yytext.trim()),
                73
              );
            case 61:
              return 80;
            case 62:
              return 97;
            case 63:
              return 98;
            case 64:
              return 99;
            case 65:
              return 78;
            case 66:
              return 79;
            case 67:
              return 100;
            case 68:
              return 101;
            case 69:
              return 102;
            case 70:
              return 103;
            case 71:
              return 85;
            case 72:
              return 86;
            case 73:
              return 87;
            case 74:
              return 88;
            case 75:
              return 93;
            case 76:
              return 94;
            case 77:
              return 95;
            case 78:
              return 96;
            case 79:
              return 81;
            case 80:
              return 82;
            case 81:
              return 83;
            case 82:
              return 84;
            case 83:
              return 89;
            case 84:
              return 90;
            case 85:
              return 91;
            case 86:
              return 92;
            case 87:
              return 104;
            case 88:
              return 104;
            case 89:
              return 70;
            case 90:
              return 71;
            case 91:
              return 72;
            case 92:
              return 5;
            case 93:
              return 10;
          }
        }, "anonymous"),
        rules: [
          /^(?:[\n]+)/i,
          /^(?:\s+)/i,
          /^(?:((?!\n)\s)+)/i,
          /^(?:#[^\n]*)/i,
          /^(?:%(?!\{)[^\n]*)/i,
          /^(?:[^\}]%%[^\n]*)/i,
          /^(?:[0-9]+(?=[ \n]+))/i,
          /^(?:@\{)/i,
          /^(?:[^\}]+)/i,
          /^(?:\}(?=\s+as\s))/i,
          /^(?:\})/i,
          /^(?:[^\<->\->:\n,;@\s]+(?=@\{))/i,
          /^(?:[^<>:\n,;@\s]+(?=\s+as\s))/i,
          /^(?:[^<>:\n,;@]+(?=\s*[\n;#]|$))/i,
          /^(?:[^<>:\n,;@]*<[^\n]*)/i,
          /^(?:[^\n]+)/i,
          /^(?:box\b)/i,
          /^(?:participant\b)/i,
          /^(?:actor\b)/i,
          /^(?:create\b)/i,
          /^(?:destroy\b)/i,
          /^(?:as\b)/i,
          /^(?:(?:))/i,
          /^(?:loop\b)/i,
          /^(?:rect\b)/i,
          /^(?:opt\b)/i,
          /^(?:alt\b)/i,
          /^(?:else\b)/i,
          /^(?:par\b)/i,
          /^(?:par_over\b)/i,
          /^(?:and\b)/i,
          /^(?:critical\b)/i,
          /^(?:option\b)/i,
          /^(?:break\b)/i,
          /^(?:(?:[:]?(?:no)?wrap)?[^#\n;]*)/i,
          /^(?:end\b)/i,
          /^(?:left of\b)/i,
          /^(?:right of\b)/i,
          /^(?:links\b)/i,
          /^(?:link\b)/i,
          /^(?:properties\b)/i,
          /^(?:details\b)/i,
          /^(?:over\b)/i,
          /^(?:note\b)/i,
          /^(?:activate\b)/i,
          /^(?:deactivate\b)/i,
          /^(?:title\s[^#\n;]+)/i,
          /^(?:title:\s[^#\n;]+)/i,
          /^(?:accTitle\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*\{\s*)/i,
          /^(?:[\}])/i,
          /^(?:[^\}]*)/i,
          /^(?:sequenceDiagram\b)/i,
          /^(?:autonumber\b)/i,
          /^(?:off\b)/i,
          /^(?:,)/i,
          /^(?:;)/i,
          /^(?:[^\/\\\+\()\+<\->\->:\n,;]+((?!(-x|--x|-\)|--\)|-\|\\|-\\|-\/|-\/\/|-\|\/|\/\|-|\\\|-|\/\/-|\\\\-|\/\|-|--\|\\|--|\(\)))[\-]*[^\+<\->\->:\n,;]+)*)/i,
          /^(?:->>)/i,
          /^(?:<<->>)/i,
          /^(?:-->>)/i,
          /^(?:<<-->>)/i,
          /^(?:->)/i,
          /^(?:-->)/i,
          /^(?:-[x])/i,
          /^(?:--[x])/i,
          /^(?:-[\)])/i,
          /^(?:--[\)])/i,
          /^(?:--\|\\)/i,
          /^(?:--\|\/)/i,
          /^(?:--\\\\)/i,
          /^(?:--\/\/)/i,
          /^(?:\/\|--)/i,
          /^(?:\\\|--)/i,
          /^(?:\/\/--)/i,
          /^(?:\\\\--)/i,
          /^(?:-\|\\)/i,
          /^(?:-\|\/)/i,
          /^(?:-\\\\)/i,
          /^(?:-\/\/)/i,
          /^(?:\/\|-)/i,
          /^(?:\\\|-)/i,
          /^(?:\/\/-)/i,
          /^(?:\\\\-)/i,
          /^(?::(?:(?:no)?wrap)?[^#\n;]*)/i,
          /^(?::)/i,
          /^(?:\+)/i,
          /^(?:-)/i,
          /^(?:\(\))/i,
          /^(?:$)/i,
          /^(?:.)/i,
        ],
        conditions: {
          acc_descr_multiline: {
            rules: [53, 54],
            inclusive: false,
          },
          acc_descr: {
            rules: [51],
            inclusive: false,
          },
          acc_title: {
            rules: [49],
            inclusive: false,
          },
          ID: {
            rules: [2, 3, 7, 11, 12, 13, 14, 15],
            inclusive: false,
          },
          ALIAS: {
            rules: [2, 3, 21, 22],
            inclusive: false,
          },
          LINE: {
            rules: [2, 3, 34],
            inclusive: false,
          },
          CONFIG: {
            rules: [8, 9, 10],
            inclusive: false,
          },
          CONFIG_DATA: {
            rules: [],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 1, 3, 4, 5, 6, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29,
              30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
              47, 48, 50, 52, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
              67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
              83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function sequenceDiagramFGHM5R23Helper6() {
      this.yy = {};
    }
    return (
      defineFunctionName(sequenceDiagramFGHM5R23Helper6, "Parser"),
      (sequenceDiagramFGHM5R23Helper6.prototype =
        sequenceDiagramFGHM5R23Binding141),
      (sequenceDiagramFGHM5R23Binding141.Parser =
        sequenceDiagramFGHM5R23Helper6),
      new sequenceDiagramFGHM5R23Helper6()
    );
  })();
  sequenceDiagramFGHM5R23Binding2.parser = sequenceDiagramFGHM5R23Binding2;
  sequenceDiagramFGHM5R23Binding3 = sequenceDiagramFGHM5R23Binding2;
  sequenceDiagramFGHM5R23Binding4 = {
    SOLID: 0,
    DOTTED: 1,
    NOTE: 2,
    SOLID_CROSS: 3,
    DOTTED_CROSS: 4,
    SOLID_OPEN: 5,
    DOTTED_OPEN: 6,
    LOOP_START: 10,
    LOOP_END: 11,
    ALT_START: 12,
    ALT_ELSE: 13,
    ALT_END: 14,
    OPT_START: 15,
    OPT_END: 16,
    ACTIVE_START: 17,
    ACTIVE_END: 18,
    PAR_START: 19,
    PAR_AND: 20,
    PAR_END: 21,
    RECT_START: 22,
    RECT_END: 23,
    SOLID_POINT: 24,
    DOTTED_POINT: 25,
    AUTONUMBER: 26,
    CRITICAL_START: 27,
    CRITICAL_OPTION: 28,
    CRITICAL_END: 29,
    BREAK_START: 30,
    BREAK_END: 31,
    PAR_OVER_START: 32,
    BIDIRECTIONAL_SOLID: 33,
    BIDIRECTIONAL_DOTTED: 34,
    SOLID_TOP: 41,
    SOLID_BOTTOM: 42,
    STICK_TOP: 43,
    STICK_BOTTOM: 44,
    SOLID_ARROW_TOP_REVERSE: 45,
    SOLID_ARROW_BOTTOM_REVERSE: 46,
    STICK_ARROW_TOP_REVERSE: 47,
    STICK_ARROW_BOTTOM_REVERSE: 48,
    SOLID_TOP_DOTTED: 51,
    SOLID_BOTTOM_DOTTED: 52,
    STICK_TOP_DOTTED: 53,
    STICK_BOTTOM_DOTTED: 54,
    SOLID_ARROW_TOP_REVERSE_DOTTED: 55,
    SOLID_ARROW_BOTTOM_REVERSE_DOTTED: 56,
    STICK_ARROW_TOP_REVERSE_DOTTED: 57,
    STICK_ARROW_BOTTOM_REVERSE_DOTTED: 58,
    CENTRAL_CONNECTION: 59,
    CENTRAL_CONNECTION_REVERSE: 60,
    CENTRAL_CONNECTION_DUAL: 61,
  };
  sequenceDiagramFGHM5R23Binding5 = {
    FILLED: 0,
    OPEN: 1,
  };
  sequenceDiagramFGHM5R23Binding6 = {
    LEFTOF: 0,
    RIGHTOF: 1,
    OVER: 2,
  };
  sequenceDiagramFGHM5R23Binding7 = {
    ACTOR: "actor",
    BOUNDARY: "boundary",
    COLLECTIONS: "collections",
    CONTROL: "control",
    DATABASE: "database",
    ENTITY: "entity",
    PARTICIPANT: "participant",
    QUEUE: "queue",
  };
  sequenceDiagramFGHM5R23Binding8 = class {
    constructor() {
      this.state = new t(() => ({
        prevActor: undefined,
        actors: new Map(),
        createdActors: new Map(),
        destroyedActors: new Map(),
        boxes: [],
        messages: [],
        notes: [],
        sequenceNumbersEnabled: false,
        wrapEnabled: undefined,
        currentBox: undefined,
        lastCreated: undefined,
        lastDestroyed: undefined,
      }));
      this.setAccTitle = H;
      this.setAccDescription = V;
      this.setDiagramTitle = G;
      this.getAccTitle = _chunkICPOFSXXV;
      this.getAccDescription = _;
      this.getDiagramTitle = C;
      this.apply = this.apply.bind(this);
      this.parseBoxData = this.parseBoxData.bind(this);
      this.parseMessage = this.parseMessage.bind(this);
      this.clear();
      this.setWrap(b().wrap);
      this.LINETYPE = sequenceDiagramFGHM5R23Binding4;
      this.ARROWTYPE = sequenceDiagramFGHM5R23Binding5;
      this.PLACEMENT = sequenceDiagramFGHM5R23Binding6;
    }
    static {
      defineFunctionName(this, "SequenceDB");
    }
    addBox(sequenceDiagramFGHM5R23Input287) {
      this.state.records.boxes.push({
        name: sequenceDiagramFGHM5R23Input287.text,
        wrap: sequenceDiagramFGHM5R23Input287.wrap ?? this.autoWrap(),
        fill: sequenceDiagramFGHM5R23Input287.color,
        actorKeys: [],
      });
      this.state.records.currentBox = this.state.records.boxes.slice(-1)[0];
    }
    addActor(
      sequenceDiagramFGHM5R23Input87,
      sequenceDiagramFGHM5R23Input88,
      sequenceDiagramFGHM5R23Input89,
      sequenceDiagramFGHM5R23Input90,
      sequenceDiagramFGHM5R23Input91,
    ) {
      let sequenceDiagramFGHM5R23Binding350 = this.state.records.currentBox,
        sequenceDiagramFGHM5R23Binding351;
      if (sequenceDiagramFGHM5R23Input91 !== undefined) {
        let sequenceDiagramFGHM5R23Binding537;
        sequenceDiagramFGHM5R23Binding537 =
          sequenceDiagramFGHM5R23Input91.includes("\n")
            ? sequenceDiagramFGHM5R23Input91 + "\n"
            : "{\n" + sequenceDiagramFGHM5R23Input91 + "\n}";
        sequenceDiagramFGHM5R23Binding351 = chunkXPW4576IR(
          sequenceDiagramFGHM5R23Binding537,
          {
            schema: chunkXPW4576IT,
          },
        );
      }
      sequenceDiagramFGHM5R23Input90 =
        sequenceDiagramFGHM5R23Binding351?.type ??
        sequenceDiagramFGHM5R23Input90;
      sequenceDiagramFGHM5R23Binding351?.alias &&
        (!sequenceDiagramFGHM5R23Input89 ||
          sequenceDiagramFGHM5R23Input89.text ===
            sequenceDiagramFGHM5R23Input88) &&
        (sequenceDiagramFGHM5R23Input89 = {
          text: sequenceDiagramFGHM5R23Binding351.alias,
          wrap: sequenceDiagramFGHM5R23Input89?.wrap,
          type: sequenceDiagramFGHM5R23Input90,
        });
      let sequenceDiagramFGHM5R23Binding352 = this.state.records.actors.get(
        sequenceDiagramFGHM5R23Input87,
      );
      if (sequenceDiagramFGHM5R23Binding352) {
        if (
          this.state.records.currentBox &&
          sequenceDiagramFGHM5R23Binding352.box &&
          this.state.records.currentBox !==
            sequenceDiagramFGHM5R23Binding352.box
        )
          throw Error(
            `A same participant should only be defined in one Box: ${sequenceDiagramFGHM5R23Binding352.name} can't be in '${sequenceDiagramFGHM5R23Binding352.box.name}' and in '${this.state.records.currentBox.name}' at the same time.`,
          );
        if (
          ((sequenceDiagramFGHM5R23Binding350 =
            sequenceDiagramFGHM5R23Binding352.box
              ? sequenceDiagramFGHM5R23Binding352.box
              : this.state.records.currentBox),
          (sequenceDiagramFGHM5R23Binding352.box =
            sequenceDiagramFGHM5R23Binding350),
          sequenceDiagramFGHM5R23Binding352 &&
            sequenceDiagramFGHM5R23Input88 ===
              sequenceDiagramFGHM5R23Binding352.name &&
            sequenceDiagramFGHM5R23Input89 == null)
        )
          return;
      }
      if (
        (sequenceDiagramFGHM5R23Input89?.text ??
          (sequenceDiagramFGHM5R23Input89 = {
            text: sequenceDiagramFGHM5R23Input88,
            type: sequenceDiagramFGHM5R23Input90,
          }),
        (sequenceDiagramFGHM5R23Input90 == null ||
          sequenceDiagramFGHM5R23Input89.text == null) &&
          (sequenceDiagramFGHM5R23Input89 = {
            text: sequenceDiagramFGHM5R23Input88,
            type: sequenceDiagramFGHM5R23Input90,
          }),
        this.state.records.actors.set(sequenceDiagramFGHM5R23Input87, {
          box: sequenceDiagramFGHM5R23Binding350,
          name: sequenceDiagramFGHM5R23Input88,
          description: sequenceDiagramFGHM5R23Input89.text,
          wrap: sequenceDiagramFGHM5R23Input89.wrap ?? this.autoWrap(),
          prevActor: this.state.records.prevActor,
          links: {},
          properties: {},
          actorCnt: null,
          rectData: null,
          type: sequenceDiagramFGHM5R23Input90 ?? "participant",
        }),
        this.state.records.prevActor)
      ) {
        let sequenceDiagramFGHM5R23Binding560 = this.state.records.actors.get(
          this.state.records.prevActor,
        );
        sequenceDiagramFGHM5R23Binding560 &&
          (sequenceDiagramFGHM5R23Binding560.nextActor =
            sequenceDiagramFGHM5R23Input87);
      }
      this.state.records.currentBox &&
        this.state.records.currentBox.actorKeys.push(
          sequenceDiagramFGHM5R23Input87,
        );
      this.state.records.prevActor = sequenceDiagramFGHM5R23Input87;
    }
    activationCount(sequenceDiagramFGHM5R23Input220) {
      let sequenceDiagramFGHM5R23Binding474,
        sequenceDiagramFGHM5R23Binding475 = 0;
      if (!sequenceDiagramFGHM5R23Input220) return 0;
      for (
        sequenceDiagramFGHM5R23Binding474 = 0;
        sequenceDiagramFGHM5R23Binding474 < this.state.records.messages.length;
        sequenceDiagramFGHM5R23Binding474++
      ) {
        this.state.records.messages[sequenceDiagramFGHM5R23Binding474].type ===
          this.LINETYPE.ACTIVE_START &&
          this.state.records.messages[sequenceDiagramFGHM5R23Binding474]
            .from === sequenceDiagramFGHM5R23Input220 &&
          sequenceDiagramFGHM5R23Binding475++;
        this.state.records.messages[sequenceDiagramFGHM5R23Binding474].type ===
          this.LINETYPE.ACTIVE_END &&
          this.state.records.messages[sequenceDiagramFGHM5R23Binding474]
            .from === sequenceDiagramFGHM5R23Input220 &&
          sequenceDiagramFGHM5R23Binding475--;
      }
      return sequenceDiagramFGHM5R23Binding475;
    }
    addMessage(
      sequenceDiagramFGHM5R23Input290,
      sequenceDiagramFGHM5R23Input291,
      sequenceDiagramFGHM5R23Input292,
      sequenceDiagramFGHM5R23Input293,
    ) {
      this.state.records.messages.push({
        id: this.state.records.messages.length.toString(),
        from: sequenceDiagramFGHM5R23Input290,
        to: sequenceDiagramFGHM5R23Input291,
        message: sequenceDiagramFGHM5R23Input292.text,
        wrap: sequenceDiagramFGHM5R23Input292.wrap ?? this.autoWrap(),
        answer: sequenceDiagramFGHM5R23Input293,
      });
    }
    addSignal(
      sequenceDiagramFGHM5R23Input124,
      sequenceDiagramFGHM5R23Input125,
      sequenceDiagramFGHM5R23Input126,
      sequenceDiagramFGHM5R23Input127,
      sequenceDiagramFGHM5R23Input128 = false,
      sequenceDiagramFGHM5R23Input129,
    ) {
      if (
        sequenceDiagramFGHM5R23Input127 === this.LINETYPE.ACTIVE_END &&
        this.activationCount(sequenceDiagramFGHM5R23Input124 ?? "") < 1
      ) {
        let sequenceDiagramFGHM5R23Binding470 = Error(
          "Trying to inactivate an inactive participant (" +
            sequenceDiagramFGHM5R23Input124 +
            ")",
        );
        throw (
          (sequenceDiagramFGHM5R23Binding470.hash = {
            text: "->>-",
            token: "->>-",
            line: "1",
            loc: {
              first_line: 1,
              last_line: 1,
              first_column: 1,
              last_column: 1,
            },
            expected: ["'ACTIVE_PARTICIPANT'"],
          }),
          sequenceDiagramFGHM5R23Binding470
        );
      }
      return (
        this.state.records.messages.push({
          id: this.state.records.messages.length.toString(),
          from: sequenceDiagramFGHM5R23Input124,
          to: sequenceDiagramFGHM5R23Input125,
          message: sequenceDiagramFGHM5R23Input126?.text ?? "",
          wrap: sequenceDiagramFGHM5R23Input126?.wrap ?? this.autoWrap(),
          type: sequenceDiagramFGHM5R23Input127,
          activate: sequenceDiagramFGHM5R23Input128,
          centralConnection: sequenceDiagramFGHM5R23Input129 ?? 0,
        }),
        true
      );
    }
    hasAtLeastOneBox() {
      return this.state.records.boxes.length > 0;
    }
    hasAtLeastOneBoxWithTitle() {
      return this.state.records.boxes.some((item) => item.name);
    }
    getMessages() {
      return this.state.records.messages;
    }
    getBoxes() {
      return this.state.records.boxes;
    }
    getActors() {
      return this.state.records.actors;
    }
    getCreatedActors() {
      return this.state.records.createdActors;
    }
    getDestroyedActors() {
      return this.state.records.destroyedActors;
    }
    getActor(sequenceDiagramFGHM5R23Input363) {
      return this.state.records.actors.get(sequenceDiagramFGHM5R23Input363);
    }
    getActorKeys() {
      return [...this.state.records.actors.keys()];
    }
    enableSequenceNumbers() {
      this.state.records.sequenceNumbersEnabled = true;
    }
    disableSequenceNumbers() {
      this.state.records.sequenceNumbersEnabled = false;
    }
    showSequenceNumbers() {
      return this.state.records.sequenceNumbersEnabled;
    }
    setWrap(sequenceDiagramFGHM5R23Input365) {
      this.state.records.wrapEnabled = sequenceDiagramFGHM5R23Input365;
    }
    extractWrap(sequenceDiagramFGHM5R23Input248) {
      if (sequenceDiagramFGHM5R23Input248 === undefined) return {};
      sequenceDiagramFGHM5R23Input248 = sequenceDiagramFGHM5R23Input248.trim();
      let sequenceDiagramFGHM5R23Binding488 =
        /^:?wrap:/.exec(sequenceDiagramFGHM5R23Input248) === null
          ? /^:?nowrap:/.exec(sequenceDiagramFGHM5R23Input248) === null
            ? undefined
            : false
          : true;
      return {
        cleanedText: (sequenceDiagramFGHM5R23Binding488 === undefined
          ? sequenceDiagramFGHM5R23Input248
          : sequenceDiagramFGHM5R23Input248.replace(/^:?(?:no)?wrap:/, "")
        ).trim(),
        wrap: sequenceDiagramFGHM5R23Binding488,
      };
    }
    autoWrap() {
      return this.state.records.wrapEnabled === undefined
        ? (b().sequence?.wrap ?? false)
        : this.state.records.wrapEnabled;
    }
    clear() {
      this.state.reset();
      _chunkICPOFSXXA();
    }
    parseMessage(sequenceDiagramFGHM5R23Input317) {
      let sequenceDiagramFGHM5R23Binding531 =
          sequenceDiagramFGHM5R23Input317.trim(),
        { wrap, cleanedText } = this.extractWrap(
          sequenceDiagramFGHM5R23Binding531,
        ),
        sequenceDiagramFGHM5R23Binding532 = {
          text: cleanedText,
          wrap,
        };
      return (
        logger.debug(
          `parseMessage: ${JSON.stringify(sequenceDiagramFGHM5R23Binding532)}`,
        ),
        sequenceDiagramFGHM5R23Binding532
      );
    }
    parseBoxData(sequenceDiagramFGHM5R23Input205) {
      let sequenceDiagramFGHM5R23Binding454 =
          /^((?:rgba?|hsla?)\s*\(.*\)|\w*)(.*)$/.exec(
            sequenceDiagramFGHM5R23Input205,
          ),
        sequenceDiagramFGHM5R23Binding455 =
          sequenceDiagramFGHM5R23Binding454?.[1]
            ? sequenceDiagramFGHM5R23Binding454[1].trim()
            : "transparent",
        sequenceDiagramFGHM5R23Binding456 =
          sequenceDiagramFGHM5R23Binding454?.[2]
            ? sequenceDiagramFGHM5R23Binding454[2].trim()
            : undefined;
      if (window?.CSS)
        window.CSS.supports("color", sequenceDiagramFGHM5R23Binding455) ||
          ((sequenceDiagramFGHM5R23Binding455 = "transparent"),
          (sequenceDiagramFGHM5R23Binding456 =
            sequenceDiagramFGHM5R23Input205.trim()));
      else {
        let sequenceDiagramFGHM5R23Binding559 = new Option().style;
        sequenceDiagramFGHM5R23Binding559.color =
          sequenceDiagramFGHM5R23Binding455;
        sequenceDiagramFGHM5R23Binding559.color !==
          sequenceDiagramFGHM5R23Binding455 &&
          ((sequenceDiagramFGHM5R23Binding455 = "transparent"),
          (sequenceDiagramFGHM5R23Binding456 =
            sequenceDiagramFGHM5R23Input205.trim()));
      }
      let { wrap, cleanedText } = this.extractWrap(
        sequenceDiagramFGHM5R23Binding456,
      );
      return {
        text: cleanedText ? R(cleanedText, b()) : undefined,
        color: sequenceDiagramFGHM5R23Binding455,
        wrap,
      };
    }
    addNote(
      sequenceDiagramFGHM5R23Input206,
      sequenceDiagramFGHM5R23Input207,
      sequenceDiagramFGHM5R23Input208,
    ) {
      let sequenceDiagramFGHM5R23Binding466 = {
          actor: sequenceDiagramFGHM5R23Input206,
          placement: sequenceDiagramFGHM5R23Input207,
          message: sequenceDiagramFGHM5R23Input208.text,
          wrap: sequenceDiagramFGHM5R23Input208.wrap ?? this.autoWrap(),
        },
        sequenceDiagramFGHM5R23Binding467 = [].concat(
          sequenceDiagramFGHM5R23Input206,
          sequenceDiagramFGHM5R23Input206,
        );
      this.state.records.notes.push(sequenceDiagramFGHM5R23Binding466);
      this.state.records.messages.push({
        id: this.state.records.messages.length.toString(),
        from: sequenceDiagramFGHM5R23Binding467[0],
        to: sequenceDiagramFGHM5R23Binding467[1],
        message: sequenceDiagramFGHM5R23Input208.text,
        wrap: sequenceDiagramFGHM5R23Input208.wrap ?? this.autoWrap(),
        type: this.LINETYPE.NOTE,
        placement: sequenceDiagramFGHM5R23Input207,
      });
    }
    addLinks(sequenceDiagramFGHM5R23Input271, sequenceDiagramFGHM5R23Input272) {
      let sequenceDiagramFGHM5R23Binding497 = this.getActor(
        sequenceDiagramFGHM5R23Input271,
      );
      try {
        let sequenceDiagramFGHM5R23Binding540 = R(
          sequenceDiagramFGHM5R23Input272.text,
          b(),
        );
        sequenceDiagramFGHM5R23Binding540 =
          sequenceDiagramFGHM5R23Binding540.replace(/&equals;/g, "=");
        sequenceDiagramFGHM5R23Binding540 =
          sequenceDiagramFGHM5R23Binding540.replace(/&amp;/g, "&");
        let sequenceDiagramFGHM5R23Binding541 = JSON.parse(
          sequenceDiagramFGHM5R23Binding540,
        );
        this.insertLinks(
          sequenceDiagramFGHM5R23Binding497,
          sequenceDiagramFGHM5R23Binding541,
        );
      } catch (sequenceDiagramFGHM5R23Binding573) {
        logger.error(
          "error while parsing actor link text",
          sequenceDiagramFGHM5R23Binding573,
        );
      }
    }
    addALink(sequenceDiagramFGHM5R23Input235, sequenceDiagramFGHM5R23Input236) {
      let sequenceDiagramFGHM5R23Binding478 = this.getActor(
        sequenceDiagramFGHM5R23Input235,
      );
      try {
        let sequenceDiagramFGHM5R23Binding515 = {},
          sequenceDiagramFGHM5R23Binding516 = R(
            sequenceDiagramFGHM5R23Input236.text,
            b(),
          ),
          sequenceDiagramFGHM5R23Binding517 =
            sequenceDiagramFGHM5R23Binding516.indexOf("@");
        sequenceDiagramFGHM5R23Binding516 =
          sequenceDiagramFGHM5R23Binding516.replace(/&equals;/g, "=");
        sequenceDiagramFGHM5R23Binding516 =
          sequenceDiagramFGHM5R23Binding516.replace(/&amp;/g, "&");
        let sequenceDiagramFGHM5R23Binding518 =
          sequenceDiagramFGHM5R23Binding516
            .slice(0, sequenceDiagramFGHM5R23Binding517 - 1)
            .trim();
        sequenceDiagramFGHM5R23Binding515[sequenceDiagramFGHM5R23Binding518] =
          sequenceDiagramFGHM5R23Binding516
            .slice(sequenceDiagramFGHM5R23Binding517 + 1)
            .trim();
        this.insertLinks(
          sequenceDiagramFGHM5R23Binding478,
          sequenceDiagramFGHM5R23Binding515,
        );
      } catch (sequenceDiagramFGHM5R23Binding574) {
        logger.error(
          "error while parsing actor link text",
          sequenceDiagramFGHM5R23Binding574,
        );
      }
    }
    insertLinks(
      sequenceDiagramFGHM5R23Input340,
      sequenceDiagramFGHM5R23Input341,
    ) {
      if (sequenceDiagramFGHM5R23Input340.links == null)
        sequenceDiagramFGHM5R23Input340.links = sequenceDiagramFGHM5R23Input341;
      else
        for (let sequenceDiagramFGHM5R23Binding583 in sequenceDiagramFGHM5R23Input341)
          sequenceDiagramFGHM5R23Input340.links[
            sequenceDiagramFGHM5R23Binding583
          ] =
            sequenceDiagramFGHM5R23Input341[sequenceDiagramFGHM5R23Binding583];
    }
    addProperties(
      sequenceDiagramFGHM5R23Input288,
      sequenceDiagramFGHM5R23Input289,
    ) {
      let sequenceDiagramFGHM5R23Binding521 = this.getActor(
        sequenceDiagramFGHM5R23Input288,
      );
      try {
        let sequenceDiagramFGHM5R23Binding562 = R(
            sequenceDiagramFGHM5R23Input289.text,
            b(),
          ),
          sequenceDiagramFGHM5R23Binding563 = JSON.parse(
            sequenceDiagramFGHM5R23Binding562,
          );
        this.insertProperties(
          sequenceDiagramFGHM5R23Binding521,
          sequenceDiagramFGHM5R23Binding563,
        );
      } catch (sequenceDiagramFGHM5R23Binding570) {
        logger.error(
          "error while parsing actor properties text",
          sequenceDiagramFGHM5R23Binding570,
        );
      }
    }
    insertProperties(
      sequenceDiagramFGHM5R23Input332,
      sequenceDiagramFGHM5R23Input333,
    ) {
      if (sequenceDiagramFGHM5R23Input332.properties == null)
        sequenceDiagramFGHM5R23Input332.properties =
          sequenceDiagramFGHM5R23Input333;
      else
        for (let sequenceDiagramFGHM5R23Binding582 in sequenceDiagramFGHM5R23Input333)
          sequenceDiagramFGHM5R23Input332.properties[
            sequenceDiagramFGHM5R23Binding582
          ] =
            sequenceDiagramFGHM5R23Input333[sequenceDiagramFGHM5R23Binding582];
    }
    boxEnd() {
      this.state.records.currentBox = undefined;
    }
    addDetails(
      sequenceDiagramFGHM5R23Input252,
      sequenceDiagramFGHM5R23Input253,
    ) {
      let sequenceDiagramFGHM5R23Binding492 = this.getActor(
          sequenceDiagramFGHM5R23Input252,
        ),
        sequenceDiagramFGHM5R23Binding493 = document.getElementById(
          sequenceDiagramFGHM5R23Input253.text,
        );
      try {
        let sequenceDiagramFGHM5R23Binding538 =
            sequenceDiagramFGHM5R23Binding493.innerHTML,
          sequenceDiagramFGHM5R23Binding539 = JSON.parse(
            sequenceDiagramFGHM5R23Binding538,
          );
        sequenceDiagramFGHM5R23Binding539.properties &&
          this.insertProperties(
            sequenceDiagramFGHM5R23Binding492,
            sequenceDiagramFGHM5R23Binding539.properties,
          );
        sequenceDiagramFGHM5R23Binding539.links &&
          this.insertLinks(
            sequenceDiagramFGHM5R23Binding492,
            sequenceDiagramFGHM5R23Binding539.links,
          );
      } catch (sequenceDiagramFGHM5R23Binding572) {
        logger.error(
          "error while parsing actor details text",
          sequenceDiagramFGHM5R23Binding572,
        );
      }
    }
    getActorProperty(
      sequenceDiagramFGHM5R23Input350,
      sequenceDiagramFGHM5R23Input351,
    ) {
      if (sequenceDiagramFGHM5R23Input350?.properties !== undefined)
        return sequenceDiagramFGHM5R23Input350.properties[
          sequenceDiagramFGHM5R23Input351
        ];
    }
    apply(sequenceDiagramFGHM5R23Input20) {
      if (Array.isArray(sequenceDiagramFGHM5R23Input20))
        sequenceDiagramFGHM5R23Input20.forEach((item) => {
          this.apply(item);
        });
      else
        switch (sequenceDiagramFGHM5R23Input20.type) {
          case "sequenceIndex":
            this.state.records.messages.push({
              id: this.state.records.messages.length.toString(),
              from: undefined,
              to: undefined,
              message: {
                start: sequenceDiagramFGHM5R23Input20.sequenceIndex,
                step: sequenceDiagramFGHM5R23Input20.sequenceIndexStep,
                visible: sequenceDiagramFGHM5R23Input20.sequenceVisible,
              },
              wrap: false,
              type: sequenceDiagramFGHM5R23Input20.signalType,
            });
            break;
          case "addParticipant":
            this.addActor(
              sequenceDiagramFGHM5R23Input20.actor,
              sequenceDiagramFGHM5R23Input20.actor,
              sequenceDiagramFGHM5R23Input20.description,
              sequenceDiagramFGHM5R23Input20.draw,
              sequenceDiagramFGHM5R23Input20.config,
            );
            break;
          case "createParticipant":
            if (
              this.state.records.actors.has(
                sequenceDiagramFGHM5R23Input20.actor,
              )
            )
              throw Error(
                "It is not possible to have actors with the same id, even if one is destroyed before the next is created. Use 'AS' aliases to simulate the behavior",
              );
            this.state.records.lastCreated =
              sequenceDiagramFGHM5R23Input20.actor;
            this.addActor(
              sequenceDiagramFGHM5R23Input20.actor,
              sequenceDiagramFGHM5R23Input20.actor,
              sequenceDiagramFGHM5R23Input20.description,
              sequenceDiagramFGHM5R23Input20.draw,
              sequenceDiagramFGHM5R23Input20.config,
            );
            this.state.records.createdActors.set(
              sequenceDiagramFGHM5R23Input20.actor,
              this.state.records.messages.length,
            );
            break;
          case "destroyParticipant":
            this.state.records.lastDestroyed =
              sequenceDiagramFGHM5R23Input20.actor;
            this.state.records.destroyedActors.set(
              sequenceDiagramFGHM5R23Input20.actor,
              this.state.records.messages.length,
            );
            break;
          case "activeStart":
            this.addSignal(
              sequenceDiagramFGHM5R23Input20.actor,
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "centralConnection":
            this.addSignal(
              sequenceDiagramFGHM5R23Input20.actor,
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "centralConnectionReverse":
            this.addSignal(
              sequenceDiagramFGHM5R23Input20.actor,
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "activeEnd":
            this.addSignal(
              sequenceDiagramFGHM5R23Input20.actor,
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "addNote":
            this.addNote(
              sequenceDiagramFGHM5R23Input20.actor,
              sequenceDiagramFGHM5R23Input20.placement,
              sequenceDiagramFGHM5R23Input20.text,
            );
            break;
          case "addLinks":
            this.addLinks(
              sequenceDiagramFGHM5R23Input20.actor,
              sequenceDiagramFGHM5R23Input20.text,
            );
            break;
          case "addALink":
            this.addALink(
              sequenceDiagramFGHM5R23Input20.actor,
              sequenceDiagramFGHM5R23Input20.text,
            );
            break;
          case "addProperties":
            this.addProperties(
              sequenceDiagramFGHM5R23Input20.actor,
              sequenceDiagramFGHM5R23Input20.text,
            );
            break;
          case "addDetails":
            this.addDetails(
              sequenceDiagramFGHM5R23Input20.actor,
              sequenceDiagramFGHM5R23Input20.text,
            );
            break;
          case "addMessage":
            if (this.state.records.lastCreated) {
              if (
                sequenceDiagramFGHM5R23Input20.to !==
                this.state.records.lastCreated
              )
                throw Error(
                  "The created participant " +
                    this.state.records.lastCreated.name +
                    " does not have an associated creating message after its declaration. Please check the sequence diagram.",
                );
              this.state.records.lastCreated = undefined;
            } else if (this.state.records.lastDestroyed) {
              if (
                sequenceDiagramFGHM5R23Input20.to !==
                  this.state.records.lastDestroyed &&
                sequenceDiagramFGHM5R23Input20.from !==
                  this.state.records.lastDestroyed
              )
                throw Error(
                  "The destroyed participant " +
                    this.state.records.lastDestroyed.name +
                    " does not have an associated destroying message after its declaration. Please check the sequence diagram.",
                );
              this.state.records.lastDestroyed = undefined;
            }
            this.addSignal(
              sequenceDiagramFGHM5R23Input20.from,
              sequenceDiagramFGHM5R23Input20.to,
              sequenceDiagramFGHM5R23Input20.msg,
              sequenceDiagramFGHM5R23Input20.signalType,
              sequenceDiagramFGHM5R23Input20.activate,
              sequenceDiagramFGHM5R23Input20.centralConnection,
            );
            break;
          case "boxStart":
            this.addBox(sequenceDiagramFGHM5R23Input20.boxData);
            break;
          case "boxEnd":
            this.boxEnd();
            break;
          case "loopStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.loopText,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "loopEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "rectStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.color,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "rectEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "optStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.optText,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "optEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "altStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.altText,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "else":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.altText,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "altEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "setAccTitle":
            H(sequenceDiagramFGHM5R23Input20.text);
            break;
          case "parStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.parText,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "and":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.parText,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "parEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "criticalStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.criticalText,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "option":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.optionText,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "criticalEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "breakStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.breakText,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
          case "breakEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramFGHM5R23Input20.signalType,
            );
            break;
        }
    }
    getConfig() {
      return b().sequence;
    }
  };
  sequenceDiagramFGHM5R23Binding9 = defineFunctionName(
    (sequenceDiagramFGHM5R23Input61) => {
      let sequenceDiagramFGHM5R23Binding290 =
          sequenceDiagramFGHM5R23Input61.dropShadow ?? "none",
        { look } = b();
      return `.actor {
    stroke: ${sequenceDiagramFGHM5R23Input61.actorBorder};
    fill: ${sequenceDiagramFGHM5R23Input61.actorBkg};
    stroke-width: ${sequenceDiagramFGHM5R23Input61.strokeWidth ?? 1};
  }

  rect.actor.outer-path[data-look="neo"] {
      filter: ${sequenceDiagramFGHM5R23Binding290};
  }

  rect.note[data-look="neo"] {
      stroke:${sequenceDiagramFGHM5R23Input61.noteBorderColor};
      fill:${sequenceDiagramFGHM5R23Input61.noteBkgColor};
      filter: ${sequenceDiagramFGHM5R23Binding290};
  }

  text.actor > tspan {
    fill: ${sequenceDiagramFGHM5R23Input61.actorTextColor};
    stroke: none;
  }

  .actor-line {
    stroke: ${sequenceDiagramFGHM5R23Input61.actorLineColor};
  }

  .innerArc {
    stroke-width: 1.5;
    stroke-dasharray: none;
  }

  .messageLine0 {
    stroke-width: 1.5;
    stroke-dasharray: none;
    stroke: ${sequenceDiagramFGHM5R23Input61.signalColor};
  }

  .messageLine1 {
    stroke-width: 1.5;
    stroke-dasharray: 2, 2;
    stroke: ${sequenceDiagramFGHM5R23Input61.signalColor};
  }

  [id$="-arrowhead"] path {
    fill: ${sequenceDiagramFGHM5R23Input61.signalColor};
    stroke: ${sequenceDiagramFGHM5R23Input61.signalColor};
  }

  .sequenceNumber {
    fill: ${sequenceDiagramFGHM5R23Input61.sequenceNumberColor};
  }

  [id$="-sequencenumber"] {
    fill: ${sequenceDiagramFGHM5R23Input61.signalColor};
  }

  [id$="-crosshead"] path {
    fill: ${sequenceDiagramFGHM5R23Input61.signalColor};
    stroke: ${sequenceDiagramFGHM5R23Input61.signalColor};
  }

  .messageText {
    fill: ${sequenceDiagramFGHM5R23Input61.signalTextColor};
    stroke: none;
  }

  .labelBox {
    stroke: ${sequenceDiagramFGHM5R23Input61.labelBoxBorderColor};
    fill: ${sequenceDiagramFGHM5R23Input61.labelBoxBkgColor};
    filter: ${look === "neo" ? sequenceDiagramFGHM5R23Binding290 : "none"};
  }

  .labelText, .labelText > tspan {
    fill: ${sequenceDiagramFGHM5R23Input61.labelTextColor};
    stroke: none;
  }

  .loopText, .loopText > tspan {
    fill: ${sequenceDiagramFGHM5R23Input61.loopTextColor};
    stroke: none;
  }

  .loopLine {
    stroke-width: 2px;
    stroke-dasharray: 2, 2;
    stroke: ${sequenceDiagramFGHM5R23Input61.labelBoxBorderColor};
    fill: ${sequenceDiagramFGHM5R23Input61.labelBoxBorderColor};
  }

  .note {
    //stroke: #decc93;
    stroke: ${sequenceDiagramFGHM5R23Input61.noteBorderColor};
    fill: ${sequenceDiagramFGHM5R23Input61.noteBkgColor};
  }

  .noteText, .noteText > tspan {
    fill: ${sequenceDiagramFGHM5R23Input61.noteTextColor};
    stroke: none;
    ${sequenceDiagramFGHM5R23Input61.noteFontWeight ? `font-weight: ${sequenceDiagramFGHM5R23Input61.noteFontWeight};` : ""}
  }

  .activation0 {
    fill: ${sequenceDiagramFGHM5R23Input61.activationBkgColor};
    stroke: ${sequenceDiagramFGHM5R23Input61.activationBorderColor};
  }

  .activation1 {
    fill: ${sequenceDiagramFGHM5R23Input61.activationBkgColor};
    stroke: ${sequenceDiagramFGHM5R23Input61.activationBorderColor};
  }

  .activation2 {
    fill: ${sequenceDiagramFGHM5R23Input61.activationBkgColor};
    stroke: ${sequenceDiagramFGHM5R23Input61.activationBorderColor};
  }

  .actorPopupMenu {
    position: absolute;
  }

  .actorPopupMenuPanel {
    position: absolute;
    fill: ${sequenceDiagramFGHM5R23Input61.actorBkg};
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
  .actor-man circle, line {
    fill: ${sequenceDiagramFGHM5R23Input61.actorBkg};
    stroke-width: 2px;
  }

  g rect.rect {
    filter: ${sequenceDiagramFGHM5R23Binding290};
    stroke: ${sequenceDiagramFGHM5R23Input61.nodeBorder};
  }
`;
    },
    "getStyles",
  );
  sequenceDiagramFGHM5R23Binding10 = 36;
  sequenceDiagramFGHM5R23Binding11 = "actor-top";
  sequenceDiagramFGHM5R23Binding12 = "actor-bottom";
  sequenceDiagramFGHM5R23Binding13 = "actor-box";
  sequenceDiagramFGHM5R23Binding14 = "actor-man";
  sequenceDiagramFGHM5R23Binding15 = new Set([
    "redux-color",
    "redux-dark-color",
  ]);
  sequenceDiagramFGHM5R23Binding16 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input342,
    sequenceDiagramFGHM5R23Input343,
  ) {
    let sequenceDiagramFGHM5R23Binding564 = a(
      sequenceDiagramFGHM5R23Input342,
      sequenceDiagramFGHM5R23Input343,
    );
    return (
      y().look === "neo" &&
        sequenceDiagramFGHM5R23Binding564.attr("data-look", "neo"),
      sequenceDiagramFGHM5R23Binding564
    );
  }, "drawRect");
  _e = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input108,
    sequenceDiagramFGHM5R23Input109,
    sequenceDiagramFGHM5R23Input110,
    sequenceDiagramFGHM5R23Input111,
    sequenceDiagramFGHM5R23Input112,
  ) {
    if (
      sequenceDiagramFGHM5R23Input109.links === undefined ||
      sequenceDiagramFGHM5R23Input109.links === null ||
      Object.keys(sequenceDiagramFGHM5R23Input109.links).length === 0
    )
      return {
        height: 0,
        width: 0,
      };
    let sequenceDiagramFGHM5R23Binding370 =
        sequenceDiagramFGHM5R23Input109.links,
      sequenceDiagramFGHM5R23Binding371 =
        sequenceDiagramFGHM5R23Input109.actorCnt,
      sequenceDiagramFGHM5R23Binding372 =
        sequenceDiagramFGHM5R23Input109.rectData;
    var sequenceDiagramFGHM5R23Binding373 = "none";
    sequenceDiagramFGHM5R23Input112 &&
      (sequenceDiagramFGHM5R23Binding373 = "block !important");
    let sequenceDiagramFGHM5R23Binding374 =
      sequenceDiagramFGHM5R23Input108.append("g");
    sequenceDiagramFGHM5R23Binding374.attr(
      "id",
      "actor" + sequenceDiagramFGHM5R23Binding371 + "_popup",
    );
    sequenceDiagramFGHM5R23Binding374.attr("class", "actorPopupMenu");
    sequenceDiagramFGHM5R23Binding374.attr(
      "display",
      sequenceDiagramFGHM5R23Binding373,
    );
    var sequenceDiagramFGHM5R23Binding375 = "";
    sequenceDiagramFGHM5R23Binding372.class !== undefined &&
      (sequenceDiagramFGHM5R23Binding375 =
        " " + sequenceDiagramFGHM5R23Binding372.class);
    let sequenceDiagramFGHM5R23Binding376 =
        sequenceDiagramFGHM5R23Binding372.width >
        sequenceDiagramFGHM5R23Input110
          ? sequenceDiagramFGHM5R23Binding372.width
          : sequenceDiagramFGHM5R23Input110,
      sequenceDiagramFGHM5R23Binding377 =
        sequenceDiagramFGHM5R23Binding374.append("rect");
    if (
      (sequenceDiagramFGHM5R23Binding377.attr(
        "class",
        "actorPopupMenuPanel" + sequenceDiagramFGHM5R23Binding375,
      ),
      sequenceDiagramFGHM5R23Binding377.attr(
        "x",
        sequenceDiagramFGHM5R23Binding372.x,
      ),
      sequenceDiagramFGHM5R23Binding377.attr(
        "y",
        sequenceDiagramFGHM5R23Binding372.height,
      ),
      sequenceDiagramFGHM5R23Binding377.attr(
        "fill",
        sequenceDiagramFGHM5R23Binding372.fill,
      ),
      sequenceDiagramFGHM5R23Binding377.attr(
        "stroke",
        sequenceDiagramFGHM5R23Binding372.stroke,
      ),
      sequenceDiagramFGHM5R23Binding377.attr(
        "width",
        sequenceDiagramFGHM5R23Binding376,
      ),
      sequenceDiagramFGHM5R23Binding377.attr(
        "height",
        sequenceDiagramFGHM5R23Binding372.height,
      ),
      sequenceDiagramFGHM5R23Binding377.attr(
        "rx",
        sequenceDiagramFGHM5R23Binding372.rx,
      ),
      sequenceDiagramFGHM5R23Binding377.attr(
        "ry",
        sequenceDiagramFGHM5R23Binding372.ry,
      ),
      sequenceDiagramFGHM5R23Binding370 != null)
    ) {
      var sequenceDiagramFGHM5R23Binding378 = 20;
      for (let sequenceDiagramFGHM5R23Binding520 in sequenceDiagramFGHM5R23Binding370) {
        var sequenceDiagramFGHM5R23Binding379 =
            sequenceDiagramFGHM5R23Binding374.append("a"),
          sequenceDiagramFGHM5R23Binding380 =
            sequenceDiagramFGHM5R23Binding1.sanitizeUrl(
              sequenceDiagramFGHM5R23Binding370[
                sequenceDiagramFGHM5R23Binding520
              ],
            );
        sequenceDiagramFGHM5R23Binding379.attr(
          "xlink:href",
          sequenceDiagramFGHM5R23Binding380,
        );
        sequenceDiagramFGHM5R23Binding379.attr("target", "_blank");
        sequenceDiagramFGHM5R23Binding47(sequenceDiagramFGHM5R23Input111)(
          sequenceDiagramFGHM5R23Binding520,
          sequenceDiagramFGHM5R23Binding379,
          sequenceDiagramFGHM5R23Binding372.x + 10,
          sequenceDiagramFGHM5R23Binding372.height +
            sequenceDiagramFGHM5R23Binding378,
          sequenceDiagramFGHM5R23Binding376,
          20,
          {
            class: "actor",
          },
          sequenceDiagramFGHM5R23Input111,
        );
        sequenceDiagramFGHM5R23Binding378 += 30;
      }
    }
    return (
      sequenceDiagramFGHM5R23Binding377.attr(
        "height",
        sequenceDiagramFGHM5R23Binding378,
      ),
      {
        height:
          sequenceDiagramFGHM5R23Binding372.height +
          sequenceDiagramFGHM5R23Binding378,
        width: sequenceDiagramFGHM5R23Binding376,
      }
    );
  }, "drawPopup");
  sequenceDiagramFGHM5R23Binding17 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input321,
  ) {
    return (
      "var pu = document.getElementById('" +
      sequenceDiagramFGHM5R23Input321 +
      "'); if (pu != null) { pu.style.display = pu.style.display == 'block' ? 'none' : 'block'; }"
    );
  }, "popupMenuToggle");
  sequenceDiagramFGHM5R23Binding18 = defineFunctionName(async function (
    sequenceDiagramFGHM5R23Input121,
    sequenceDiagramFGHM5R23Input122,
    sequenceDiagramFGHM5R23Input123 = null,
  ) {
    let sequenceDiagramFGHM5R23Binding406 =
        sequenceDiagramFGHM5R23Input121.append("foreignObject"),
      sequenceDiagramFGHM5R23Binding407 = await F(
        sequenceDiagramFGHM5R23Input122.text,
        y(),
      ),
      sequenceDiagramFGHM5R23Binding408 = sequenceDiagramFGHM5R23Binding406
        .append("xhtml:div")
        .attr("style", "width: fit-content;")
        .attr("xmlns", "http://www.w3.org/1999/xhtml")
        .html(sequenceDiagramFGHM5R23Binding407)
        .node()
        .getBoundingClientRect();
    if (
      (sequenceDiagramFGHM5R23Binding406
        .attr("height", Math.round(sequenceDiagramFGHM5R23Binding408.height))
        .attr("width", Math.round(sequenceDiagramFGHM5R23Binding408.width)),
      sequenceDiagramFGHM5R23Input122.class === "noteText")
    ) {
      let sequenceDiagramFGHM5R23Binding513 =
        sequenceDiagramFGHM5R23Input121.node().firstChild;
      sequenceDiagramFGHM5R23Binding513.setAttribute(
        "height",
        sequenceDiagramFGHM5R23Binding408.height +
          2 * sequenceDiagramFGHM5R23Input122.textMargin,
      );
      let sequenceDiagramFGHM5R23Binding514 =
        sequenceDiagramFGHM5R23Binding513.getBBox();
      sequenceDiagramFGHM5R23Binding406
        .attr(
          "x",
          Math.round(
            sequenceDiagramFGHM5R23Binding514.x +
              sequenceDiagramFGHM5R23Binding514.width / 2 -
              sequenceDiagramFGHM5R23Binding408.width / 2,
          ),
        )
        .attr(
          "y",
          Math.round(
            sequenceDiagramFGHM5R23Binding514.y +
              sequenceDiagramFGHM5R23Binding514.height / 2 -
              sequenceDiagramFGHM5R23Binding408.height / 2,
          ),
        );
    } else if (sequenceDiagramFGHM5R23Input123) {
      let { startx, stopx, starty } = sequenceDiagramFGHM5R23Input123;
      if (startx > stopx) {
        let sequenceDiagramFGHM5R23Binding578 = startx;
        startx = stopx;
        stopx = sequenceDiagramFGHM5R23Binding578;
      }
      sequenceDiagramFGHM5R23Binding406.attr(
        "x",
        Math.round(
          startx +
            Math.abs(startx - stopx) / 2 -
            sequenceDiagramFGHM5R23Binding408.width / 2,
        ),
      );
      sequenceDiagramFGHM5R23Input122.class === "loopText"
        ? sequenceDiagramFGHM5R23Binding406.attr("y", Math.round(starty))
        : sequenceDiagramFGHM5R23Binding406.attr(
            "y",
            Math.round(starty - sequenceDiagramFGHM5R23Binding408.height),
          );
    }
    return [sequenceDiagramFGHM5R23Binding406];
  }, "drawKatex");
  sequenceDiagramFGHM5R23Binding19 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input38,
    sequenceDiagramFGHM5R23Input39,
  ) {
    let sequenceDiagramFGHM5R23Binding242 = 0,
      sequenceDiagramFGHM5R23Binding243 = 0,
      sequenceDiagramFGHM5R23Binding244 =
        sequenceDiagramFGHM5R23Input39.text.split(s.lineBreakRegex),
      [sequenceDiagramFGHM5R23Binding245, sequenceDiagramFGHM5R23Binding246] =
        chunk5PVQY5BWP(sequenceDiagramFGHM5R23Input39.fontSize),
      sequenceDiagramFGHM5R23Binding247 = [],
      sequenceDiagramFGHM5R23Binding248 = 0,
      sequenceDiagramFGHM5R23Binding249 = defineFunctionName(
        () => sequenceDiagramFGHM5R23Input39.y,
        "yfunc",
      );
    if (
      sequenceDiagramFGHM5R23Input39.valign !== undefined &&
      sequenceDiagramFGHM5R23Input39.textMargin !== undefined &&
      sequenceDiagramFGHM5R23Input39.textMargin > 0
    )
      switch (sequenceDiagramFGHM5R23Input39.valign) {
        case "top":
        case "start":
          sequenceDiagramFGHM5R23Binding249 = defineFunctionName(
            () =>
              Math.round(
                sequenceDiagramFGHM5R23Input39.y +
                  sequenceDiagramFGHM5R23Input39.textMargin,
              ),
            "yfunc",
          );
          break;
        case "middle":
        case "center":
          sequenceDiagramFGHM5R23Binding249 = defineFunctionName(
            () =>
              Math.round(
                sequenceDiagramFGHM5R23Input39.y +
                  (sequenceDiagramFGHM5R23Binding242 +
                    sequenceDiagramFGHM5R23Binding243 +
                    sequenceDiagramFGHM5R23Input39.textMargin) /
                    2,
              ),
            "yfunc",
          );
          break;
        case "bottom":
        case "end":
          sequenceDiagramFGHM5R23Binding249 = defineFunctionName(
            () =>
              Math.round(
                sequenceDiagramFGHM5R23Input39.y +
                  (sequenceDiagramFGHM5R23Binding242 +
                    sequenceDiagramFGHM5R23Binding243 +
                    2 * sequenceDiagramFGHM5R23Input39.textMargin) -
                  sequenceDiagramFGHM5R23Input39.textMargin,
              ),
            "yfunc",
          );
          break;
      }
    if (
      sequenceDiagramFGHM5R23Input39.anchor !== undefined &&
      sequenceDiagramFGHM5R23Input39.textMargin !== undefined &&
      sequenceDiagramFGHM5R23Input39.width !== undefined
    )
      switch (sequenceDiagramFGHM5R23Input39.anchor) {
        case "left":
        case "start":
          sequenceDiagramFGHM5R23Input39.x = Math.round(
            sequenceDiagramFGHM5R23Input39.x +
              sequenceDiagramFGHM5R23Input39.textMargin,
          );
          sequenceDiagramFGHM5R23Input39.anchor = "start";
          sequenceDiagramFGHM5R23Input39.dominantBaseline = "middle";
          sequenceDiagramFGHM5R23Input39.alignmentBaseline = "middle";
          break;
        case "middle":
        case "center":
          sequenceDiagramFGHM5R23Input39.x = Math.round(
            sequenceDiagramFGHM5R23Input39.x +
              sequenceDiagramFGHM5R23Input39.width / 2,
          );
          sequenceDiagramFGHM5R23Input39.anchor = "middle";
          sequenceDiagramFGHM5R23Input39.dominantBaseline = "middle";
          sequenceDiagramFGHM5R23Input39.alignmentBaseline = "middle";
          break;
        case "right":
        case "end":
          sequenceDiagramFGHM5R23Input39.x = Math.round(
            sequenceDiagramFGHM5R23Input39.x +
              sequenceDiagramFGHM5R23Input39.width -
              sequenceDiagramFGHM5R23Input39.textMargin,
          );
          sequenceDiagramFGHM5R23Input39.anchor = "end";
          sequenceDiagramFGHM5R23Input39.dominantBaseline = "middle";
          sequenceDiagramFGHM5R23Input39.alignmentBaseline = "middle";
          break;
      }
    for (let [
      sequenceDiagramFGHM5R23Binding392,
      sequenceDiagramFGHM5R23Binding393,
    ] of sequenceDiagramFGHM5R23Binding244.entries()) {
      sequenceDiagramFGHM5R23Input39.textMargin !== undefined &&
        sequenceDiagramFGHM5R23Input39.textMargin === 0 &&
        sequenceDiagramFGHM5R23Binding245 !== undefined &&
        (sequenceDiagramFGHM5R23Binding248 =
          sequenceDiagramFGHM5R23Binding392 *
          sequenceDiagramFGHM5R23Binding245);
      let sequenceDiagramFGHM5R23Binding400 =
        sequenceDiagramFGHM5R23Input38.append("text");
      sequenceDiagramFGHM5R23Binding400.attr(
        "x",
        sequenceDiagramFGHM5R23Input39.x,
      );
      sequenceDiagramFGHM5R23Binding400.attr(
        "y",
        sequenceDiagramFGHM5R23Binding249(),
      );
      sequenceDiagramFGHM5R23Input39.anchor !== undefined &&
        sequenceDiagramFGHM5R23Binding400
          .attr("text-anchor", sequenceDiagramFGHM5R23Input39.anchor)
          .attr(
            "dominant-baseline",
            sequenceDiagramFGHM5R23Input39.dominantBaseline,
          )
          .attr(
            "alignment-baseline",
            sequenceDiagramFGHM5R23Input39.alignmentBaseline,
          );
      sequenceDiagramFGHM5R23Input39.fontFamily !== undefined &&
        sequenceDiagramFGHM5R23Binding400.style(
          "font-family",
          sequenceDiagramFGHM5R23Input39.fontFamily,
        );
      sequenceDiagramFGHM5R23Binding246 !== undefined &&
        sequenceDiagramFGHM5R23Binding400.style(
          "font-size",
          sequenceDiagramFGHM5R23Binding246,
        );
      sequenceDiagramFGHM5R23Input39.fontWeight !== undefined &&
        sequenceDiagramFGHM5R23Binding400.style(
          "font-weight",
          sequenceDiagramFGHM5R23Input39.fontWeight,
        );
      sequenceDiagramFGHM5R23Input39.fill !== undefined &&
        sequenceDiagramFGHM5R23Binding400.attr(
          "fill",
          sequenceDiagramFGHM5R23Input39.fill,
        );
      sequenceDiagramFGHM5R23Input39.class !== undefined &&
        sequenceDiagramFGHM5R23Binding400.attr(
          "class",
          sequenceDiagramFGHM5R23Input39.class,
        );
      sequenceDiagramFGHM5R23Input39.dy === undefined
        ? sequenceDiagramFGHM5R23Binding248 !== 0 &&
          sequenceDiagramFGHM5R23Binding400.attr(
            "dy",
            sequenceDiagramFGHM5R23Binding248,
          )
        : sequenceDiagramFGHM5R23Binding400.attr(
            "dy",
            sequenceDiagramFGHM5R23Input39.dy,
          );
      let sequenceDiagramFGHM5R23Binding401 =
        sequenceDiagramFGHM5R23Binding393 || "​";
      if (sequenceDiagramFGHM5R23Input39.tspan) {
        let sequenceDiagramFGHM5R23Binding556 =
          sequenceDiagramFGHM5R23Binding400.append("tspan");
        sequenceDiagramFGHM5R23Binding556.attr(
          "x",
          sequenceDiagramFGHM5R23Input39.x,
        );
        sequenceDiagramFGHM5R23Input39.fill !== undefined &&
          sequenceDiagramFGHM5R23Binding556.attr(
            "fill",
            sequenceDiagramFGHM5R23Input39.fill,
          );
        sequenceDiagramFGHM5R23Binding556.text(
          sequenceDiagramFGHM5R23Binding401,
        );
      } else
        sequenceDiagramFGHM5R23Binding400.text(
          sequenceDiagramFGHM5R23Binding401,
        );
      sequenceDiagramFGHM5R23Input39.valign !== undefined &&
        sequenceDiagramFGHM5R23Input39.textMargin !== undefined &&
        sequenceDiagramFGHM5R23Input39.textMargin > 0 &&
        ((sequenceDiagramFGHM5R23Binding243 +=
          (sequenceDiagramFGHM5R23Binding400._groups ||
            sequenceDiagramFGHM5R23Binding400)[0][0].getBBox().height),
        (sequenceDiagramFGHM5R23Binding242 =
          sequenceDiagramFGHM5R23Binding243));
      sequenceDiagramFGHM5R23Binding247.push(sequenceDiagramFGHM5R23Binding400);
    }
    return sequenceDiagramFGHM5R23Binding247;
  }, "drawText");
  be = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input168,
    sequenceDiagramFGHM5R23Input169,
  ) {
    function sequenceDiagramFGHM5R23Helper22(
      sequenceDiagramFGHM5R23Input254,
      sequenceDiagramFGHM5R23Input255,
      sequenceDiagramFGHM5R23Input256,
      sequenceDiagramFGHM5R23Input257,
      sequenceDiagramFGHM5R23Input258,
    ) {
      return (
        sequenceDiagramFGHM5R23Input254 +
        "," +
        sequenceDiagramFGHM5R23Input255 +
        " " +
        (sequenceDiagramFGHM5R23Input254 + sequenceDiagramFGHM5R23Input256) +
        "," +
        sequenceDiagramFGHM5R23Input255 +
        " " +
        (sequenceDiagramFGHM5R23Input254 + sequenceDiagramFGHM5R23Input256) +
        "," +
        (sequenceDiagramFGHM5R23Input255 +
          sequenceDiagramFGHM5R23Input257 -
          sequenceDiagramFGHM5R23Input258) +
        " " +
        (sequenceDiagramFGHM5R23Input254 +
          sequenceDiagramFGHM5R23Input256 -
          sequenceDiagramFGHM5R23Input258 * 1.2) +
        "," +
        (sequenceDiagramFGHM5R23Input255 + sequenceDiagramFGHM5R23Input257) +
        " " +
        sequenceDiagramFGHM5R23Input254 +
        "," +
        (sequenceDiagramFGHM5R23Input255 + sequenceDiagramFGHM5R23Input257)
      );
    }
    defineFunctionName(sequenceDiagramFGHM5R23Helper22, "genPoints");
    let sequenceDiagramFGHM5R23Binding438 =
      sequenceDiagramFGHM5R23Input168.append("polygon");
    return (
      sequenceDiagramFGHM5R23Binding438.attr(
        "points",
        sequenceDiagramFGHM5R23Helper22(
          sequenceDiagramFGHM5R23Input169.x,
          sequenceDiagramFGHM5R23Input169.y,
          sequenceDiagramFGHM5R23Input169.width,
          sequenceDiagramFGHM5R23Input169.height,
          7,
        ),
      ),
      sequenceDiagramFGHM5R23Binding438.attr("class", "labelBox"),
      (sequenceDiagramFGHM5R23Input169.y +=
        sequenceDiagramFGHM5R23Input169.height / 2),
      sequenceDiagramFGHM5R23Binding19(
        sequenceDiagramFGHM5R23Input168,
        sequenceDiagramFGHM5R23Input169,
      ),
      sequenceDiagramFGHM5R23Binding438
    );
  }, "drawLabel");
  sequenceDiagramFGHM5R23Binding20 = -1;
  sequenceDiagramFGHM5R23Binding21 = defineFunctionName(
    (
      sequenceDiagramFGHM5R23Input282,
      sequenceDiagramFGHM5R23Input283,
      sequenceDiagramFGHM5R23Input284,
      sequenceDiagramFGHM5R23Input285,
    ) => {
      sequenceDiagramFGHM5R23Input282.select &&
        sequenceDiagramFGHM5R23Input284.forEach((item) => {
          let sequenceDiagramFGHM5R23Binding528 =
              sequenceDiagramFGHM5R23Input283.get(item),
            sequenceDiagramFGHM5R23Binding529 =
              sequenceDiagramFGHM5R23Input282.select(
                "#actor" + sequenceDiagramFGHM5R23Binding528.actorCnt,
              );
          !sequenceDiagramFGHM5R23Input285.mirrorActors &&
          sequenceDiagramFGHM5R23Binding528.stopy
            ? sequenceDiagramFGHM5R23Binding529.attr(
                "y2",
                sequenceDiagramFGHM5R23Binding528.stopy +
                  sequenceDiagramFGHM5R23Binding528.height / 2,
              )
            : sequenceDiagramFGHM5R23Input285.mirrorActors &&
              sequenceDiagramFGHM5R23Binding529.attr(
                "y2",
                sequenceDiagramFGHM5R23Binding528.stopy,
              );
        });
    },
    "fixLifeLineHeights",
  );
  sequenceDiagramFGHM5R23Binding22 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input74,
    sequenceDiagramFGHM5R23Input75,
    sequenceDiagramFGHM5R23Input76,
    sequenceDiagramFGHM5R23Input77,
    sequenceDiagramFGHM5R23Input78,
  ) {
    let sequenceDiagramFGHM5R23Binding323 = sequenceDiagramFGHM5R23Input77
        ? sequenceDiagramFGHM5R23Input75.stopy
        : sequenceDiagramFGHM5R23Input75.starty,
      sequenceDiagramFGHM5R23Binding324 =
        sequenceDiagramFGHM5R23Input75.x +
        sequenceDiagramFGHM5R23Input75.width / 2,
      sequenceDiagramFGHM5R23Binding325 =
        sequenceDiagramFGHM5R23Binding323 +
        sequenceDiagramFGHM5R23Input75.height,
      { look, theme, themeVariables } = sequenceDiagramFGHM5R23Input76,
      { bkgColorArray, borderColorArray } = themeVariables,
      sequenceDiagramFGHM5R23Binding326 = sequenceDiagramFGHM5R23Input74
        .append("g")
        .lower();
    var sequenceDiagramFGHM5R23Binding327 = sequenceDiagramFGHM5R23Binding326;
    sequenceDiagramFGHM5R23Input77 ||
      (sequenceDiagramFGHM5R23Binding20++,
      Object.keys(sequenceDiagramFGHM5R23Input75.links || {}).length &&
        !sequenceDiagramFGHM5R23Input76.forceMenus &&
        sequenceDiagramFGHM5R23Binding327
          .attr(
            "onclick",
            sequenceDiagramFGHM5R23Binding17(
              `actor${sequenceDiagramFGHM5R23Binding20}_popup`,
            ),
          )
          .attr("cursor", "pointer"),
      sequenceDiagramFGHM5R23Binding327
        .append("line")
        .attr("id", "actor" + sequenceDiagramFGHM5R23Binding20)
        .attr("x1", sequenceDiagramFGHM5R23Binding324)
        .attr("y1", sequenceDiagramFGHM5R23Binding325)
        .attr("x2", sequenceDiagramFGHM5R23Binding324)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramFGHM5R23Input75.name)
        .attr("data-et", "life-line")
        .attr("data-id", sequenceDiagramFGHM5R23Input75.name),
      (sequenceDiagramFGHM5R23Binding327 =
        sequenceDiagramFGHM5R23Binding326.append("g")),
      (sequenceDiagramFGHM5R23Input75.actorCnt =
        sequenceDiagramFGHM5R23Binding20),
      sequenceDiagramFGHM5R23Input75.links != null &&
        sequenceDiagramFGHM5R23Binding327.attr(
          "id",
          "root-" + sequenceDiagramFGHM5R23Binding20,
        ),
      look === "neo" &&
        sequenceDiagramFGHM5R23Binding327.attr("data-look", "neo"));
    let sequenceDiagramFGHM5R23Binding328 = chunkYZCP3GAMS();
    var sequenceDiagramFGHM5R23Binding329 = "actor";
    sequenceDiagramFGHM5R23Input75.properties?.class
      ? (sequenceDiagramFGHM5R23Binding329 =
          sequenceDiagramFGHM5R23Input75.properties.class)
      : (sequenceDiagramFGHM5R23Binding328.fill = "#eaeaea");
    sequenceDiagramFGHM5R23Input77
      ? (sequenceDiagramFGHM5R23Binding329 += ` ${sequenceDiagramFGHM5R23Binding12}`)
      : (sequenceDiagramFGHM5R23Binding329 += ` ${sequenceDiagramFGHM5R23Binding11}`);
    sequenceDiagramFGHM5R23Binding328.x = sequenceDiagramFGHM5R23Input75.x;
    sequenceDiagramFGHM5R23Binding328.y = sequenceDiagramFGHM5R23Binding323;
    sequenceDiagramFGHM5R23Binding328.width =
      sequenceDiagramFGHM5R23Input75.width;
    sequenceDiagramFGHM5R23Binding328.height =
      sequenceDiagramFGHM5R23Input75.height;
    sequenceDiagramFGHM5R23Binding328.class = sequenceDiagramFGHM5R23Binding329;
    sequenceDiagramFGHM5R23Binding328.rx = 3;
    sequenceDiagramFGHM5R23Binding328.ry = 3;
    sequenceDiagramFGHM5R23Binding328.name =
      sequenceDiagramFGHM5R23Input75.name;
    look === "neo" &&
      ((sequenceDiagramFGHM5R23Binding328.rx = 6),
      (sequenceDiagramFGHM5R23Binding328.ry = 6));
    let sequenceDiagramFGHM5R23Binding330 = sequenceDiagramFGHM5R23Binding16(
        sequenceDiagramFGHM5R23Binding327,
        sequenceDiagramFGHM5R23Binding328,
      ),
      sequenceDiagramFGHM5R23Binding331 =
        sequenceDiagramFGHM5R23Input78.get(
          sequenceDiagramFGHM5R23Input75.name,
        ) ?? 0;
    if (
      (sequenceDiagramFGHM5R23Binding15.has(theme) &&
        (sequenceDiagramFGHM5R23Binding330.style(
          "stroke",
          borderColorArray[
            sequenceDiagramFGHM5R23Binding331 % borderColorArray.length
          ],
        ),
        sequenceDiagramFGHM5R23Binding330.style(
          "fill",
          bkgColorArray[
            sequenceDiagramFGHM5R23Binding331 % borderColorArray.length
          ],
        )),
      look === "neo" &&
        sequenceDiagramFGHM5R23Binding330.attr("filter", "url(#drop-shadow)"),
      (sequenceDiagramFGHM5R23Input75.rectData =
        sequenceDiagramFGHM5R23Binding328),
      sequenceDiagramFGHM5R23Input75.properties?.icon)
    ) {
      let sequenceDiagramFGHM5R23Binding542 =
        sequenceDiagramFGHM5R23Input75.properties.icon.trim();
      sequenceDiagramFGHM5R23Binding542.charAt(0) === "@"
        ? r(
            sequenceDiagramFGHM5R23Binding327,
            sequenceDiagramFGHM5R23Binding328.x +
              sequenceDiagramFGHM5R23Binding328.width -
              20,
            sequenceDiagramFGHM5R23Binding328.y + 10,
            sequenceDiagramFGHM5R23Binding542.substr(1),
          )
        : chunkYZCP3GAMI(
            sequenceDiagramFGHM5R23Binding327,
            sequenceDiagramFGHM5R23Binding328.x +
              sequenceDiagramFGHM5R23Binding328.width -
              20,
            sequenceDiagramFGHM5R23Binding328.y + 10,
            sequenceDiagramFGHM5R23Binding542,
          );
    }
    sequenceDiagramFGHM5R23Input77 ||
      (sequenceDiagramFGHM5R23Binding327.attr("data-et", "participant"),
      sequenceDiagramFGHM5R23Binding327.attr("data-type", "participant"),
      sequenceDiagramFGHM5R23Binding327.attr(
        "data-id",
        sequenceDiagramFGHM5R23Input75.name,
      ));
    sequenceDiagramFGHM5R23Binding46(
      sequenceDiagramFGHM5R23Input76,
      k(sequenceDiagramFGHM5R23Input75.description),
    )(
      sequenceDiagramFGHM5R23Input75.description,
      sequenceDiagramFGHM5R23Binding327,
      sequenceDiagramFGHM5R23Binding328.x,
      sequenceDiagramFGHM5R23Binding328.y,
      sequenceDiagramFGHM5R23Binding328.width,
      sequenceDiagramFGHM5R23Binding328.height,
      {
        class: `actor ${sequenceDiagramFGHM5R23Binding13}`,
      },
      sequenceDiagramFGHM5R23Input76,
    );
    let sequenceDiagramFGHM5R23Binding332 =
      sequenceDiagramFGHM5R23Input75.height;
    if (sequenceDiagramFGHM5R23Binding330.node) {
      let sequenceDiagramFGHM5R23Binding566 = sequenceDiagramFGHM5R23Binding330
        .node()
        .getBBox();
      sequenceDiagramFGHM5R23Input75.height =
        sequenceDiagramFGHM5R23Binding566.height;
      sequenceDiagramFGHM5R23Binding332 =
        sequenceDiagramFGHM5R23Binding566.height;
    }
    return sequenceDiagramFGHM5R23Binding332;
  }, "drawActorTypeParticipant");
  sequenceDiagramFGHM5R23Binding23 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input62,
    sequenceDiagramFGHM5R23Input63,
    sequenceDiagramFGHM5R23Input64,
    sequenceDiagramFGHM5R23Input65,
    sequenceDiagramFGHM5R23Input66,
  ) {
    let sequenceDiagramFGHM5R23Binding291 = sequenceDiagramFGHM5R23Input65
        ? sequenceDiagramFGHM5R23Input63.stopy
        : sequenceDiagramFGHM5R23Input63.starty,
      sequenceDiagramFGHM5R23Binding292 =
        sequenceDiagramFGHM5R23Input63.x +
        sequenceDiagramFGHM5R23Input63.width / 2,
      sequenceDiagramFGHM5R23Binding293 =
        sequenceDiagramFGHM5R23Binding291 +
        sequenceDiagramFGHM5R23Input63.height,
      { look, theme, themeVariables } = sequenceDiagramFGHM5R23Input64,
      { bkgColorArray, borderColorArray } = themeVariables,
      sequenceDiagramFGHM5R23Binding294 = sequenceDiagramFGHM5R23Input62
        .append("g")
        .lower();
    var sequenceDiagramFGHM5R23Binding295 = sequenceDiagramFGHM5R23Binding294;
    sequenceDiagramFGHM5R23Input65 ||
      (sequenceDiagramFGHM5R23Binding20++,
      Object.keys(sequenceDiagramFGHM5R23Input63.links || {}).length &&
        !sequenceDiagramFGHM5R23Input64.forceMenus &&
        sequenceDiagramFGHM5R23Binding295
          .attr(
            "onclick",
            sequenceDiagramFGHM5R23Binding17(
              `actor${sequenceDiagramFGHM5R23Binding20}_popup`,
            ),
          )
          .attr("cursor", "pointer"),
      sequenceDiagramFGHM5R23Binding295
        .append("line")
        .attr("id", "actor" + sequenceDiagramFGHM5R23Binding20)
        .attr("x1", sequenceDiagramFGHM5R23Binding292)
        .attr("y1", sequenceDiagramFGHM5R23Binding293)
        .attr("x2", sequenceDiagramFGHM5R23Binding292)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramFGHM5R23Input63.name)
        .attr("data-et", "life-line")
        .attr("data-id", sequenceDiagramFGHM5R23Input63.name),
      (sequenceDiagramFGHM5R23Binding295 =
        sequenceDiagramFGHM5R23Binding294.append("g")),
      (sequenceDiagramFGHM5R23Input63.actorCnt =
        sequenceDiagramFGHM5R23Binding20),
      sequenceDiagramFGHM5R23Input63.links != null &&
        sequenceDiagramFGHM5R23Binding295.attr(
          "id",
          "root-" + sequenceDiagramFGHM5R23Binding20,
        ),
      look === "neo" &&
        sequenceDiagramFGHM5R23Binding295.attr("data-look", "neo"));
    let sequenceDiagramFGHM5R23Binding296 = chunkYZCP3GAMS();
    var sequenceDiagramFGHM5R23Binding297 = "actor";
    sequenceDiagramFGHM5R23Input63.properties?.class
      ? (sequenceDiagramFGHM5R23Binding297 =
          sequenceDiagramFGHM5R23Input63.properties.class)
      : (sequenceDiagramFGHM5R23Binding296.fill = "#eaeaea");
    sequenceDiagramFGHM5R23Input65
      ? (sequenceDiagramFGHM5R23Binding297 += ` ${sequenceDiagramFGHM5R23Binding12}`)
      : (sequenceDiagramFGHM5R23Binding297 += ` ${sequenceDiagramFGHM5R23Binding11}`);
    sequenceDiagramFGHM5R23Binding296.x = sequenceDiagramFGHM5R23Input63.x;
    sequenceDiagramFGHM5R23Binding296.y = sequenceDiagramFGHM5R23Binding291;
    sequenceDiagramFGHM5R23Binding296.width =
      sequenceDiagramFGHM5R23Input63.width;
    sequenceDiagramFGHM5R23Binding296.height =
      sequenceDiagramFGHM5R23Input63.height;
    sequenceDiagramFGHM5R23Binding296.class = sequenceDiagramFGHM5R23Binding297;
    sequenceDiagramFGHM5R23Binding296.name =
      sequenceDiagramFGHM5R23Input63.name;
    let sequenceDiagramFGHM5R23Binding298 = {
        ...sequenceDiagramFGHM5R23Binding296,
        x: sequenceDiagramFGHM5R23Binding296.x + -6,
        y: sequenceDiagramFGHM5R23Binding296.y + 6,
        class: "actor",
      },
      sequenceDiagramFGHM5R23Binding299 = sequenceDiagramFGHM5R23Binding16(
        sequenceDiagramFGHM5R23Binding295,
        sequenceDiagramFGHM5R23Binding296,
      ),
      sequenceDiagramFGHM5R23Binding300 = sequenceDiagramFGHM5R23Binding16(
        sequenceDiagramFGHM5R23Binding295,
        sequenceDiagramFGHM5R23Binding298,
      );
    sequenceDiagramFGHM5R23Input63.rectData = sequenceDiagramFGHM5R23Binding296;
    look === "neo" &&
      sequenceDiagramFGHM5R23Binding295.attr("filter", "url(#drop-shadow)");
    let sequenceDiagramFGHM5R23Binding301 =
      sequenceDiagramFGHM5R23Input66.get(sequenceDiagramFGHM5R23Input63.name) ??
      0;
    if (
      (sequenceDiagramFGHM5R23Binding15.has(theme) &&
        (sequenceDiagramFGHM5R23Binding299.style(
          "stroke",
          borderColorArray[
            sequenceDiagramFGHM5R23Binding301 % borderColorArray.length
          ],
        ),
        sequenceDiagramFGHM5R23Binding299.style(
          "fill",
          bkgColorArray[
            sequenceDiagramFGHM5R23Binding301 % borderColorArray.length
          ],
        ),
        sequenceDiagramFGHM5R23Binding300.style(
          "stroke",
          borderColorArray[
            sequenceDiagramFGHM5R23Binding301 % borderColorArray.length
          ],
        ),
        sequenceDiagramFGHM5R23Binding300.style(
          "fill",
          bkgColorArray[
            sequenceDiagramFGHM5R23Binding301 % borderColorArray.length
          ],
        )),
      sequenceDiagramFGHM5R23Input63.properties?.icon)
    ) {
      let sequenceDiagramFGHM5R23Binding543 =
        sequenceDiagramFGHM5R23Input63.properties.icon.trim();
      sequenceDiagramFGHM5R23Binding543.charAt(0) === "@"
        ? r(
            sequenceDiagramFGHM5R23Binding295,
            sequenceDiagramFGHM5R23Binding296.x +
              sequenceDiagramFGHM5R23Binding296.width -
              20,
            sequenceDiagramFGHM5R23Binding296.y + 10,
            sequenceDiagramFGHM5R23Binding543.substr(1),
          )
        : chunkYZCP3GAMI(
            sequenceDiagramFGHM5R23Binding295,
            sequenceDiagramFGHM5R23Binding296.x +
              sequenceDiagramFGHM5R23Binding296.width -
              20,
            sequenceDiagramFGHM5R23Binding296.y + 10,
            sequenceDiagramFGHM5R23Binding543,
          );
    }
    sequenceDiagramFGHM5R23Binding46(
      sequenceDiagramFGHM5R23Input64,
      k(sequenceDiagramFGHM5R23Input63.description),
    )(
      sequenceDiagramFGHM5R23Input63.description,
      sequenceDiagramFGHM5R23Binding295,
      sequenceDiagramFGHM5R23Binding296.x - 6,
      sequenceDiagramFGHM5R23Binding296.y + 6,
      sequenceDiagramFGHM5R23Binding296.width,
      sequenceDiagramFGHM5R23Binding296.height,
      {
        class: `actor ${sequenceDiagramFGHM5R23Binding13}`,
      },
      sequenceDiagramFGHM5R23Input64,
    );
    let sequenceDiagramFGHM5R23Binding302 =
      sequenceDiagramFGHM5R23Input63.height;
    if (sequenceDiagramFGHM5R23Binding299.node) {
      let sequenceDiagramFGHM5R23Binding567 = sequenceDiagramFGHM5R23Binding299
        .node()
        .getBBox();
      sequenceDiagramFGHM5R23Input63.height =
        sequenceDiagramFGHM5R23Binding567.height;
      sequenceDiagramFGHM5R23Binding302 =
        sequenceDiagramFGHM5R23Binding567.height;
    }
    return (
      sequenceDiagramFGHM5R23Input65 ||
        (sequenceDiagramFGHM5R23Binding295.attr("data-et", "participant"),
        sequenceDiagramFGHM5R23Binding295.attr("data-type", "collections"),
        sequenceDiagramFGHM5R23Binding295.attr(
          "data-id",
          sequenceDiagramFGHM5R23Input63.name,
        )),
      sequenceDiagramFGHM5R23Binding302
    );
  }, "drawActorTypeCollections");
  sequenceDiagramFGHM5R23Binding24 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input33,
    sequenceDiagramFGHM5R23Input34,
    sequenceDiagramFGHM5R23Input35,
    sequenceDiagramFGHM5R23Input36,
    sequenceDiagramFGHM5R23Input37,
  ) {
    let sequenceDiagramFGHM5R23Binding227 = sequenceDiagramFGHM5R23Input36
        ? sequenceDiagramFGHM5R23Input34.stopy
        : sequenceDiagramFGHM5R23Input34.starty,
      sequenceDiagramFGHM5R23Binding228 =
        sequenceDiagramFGHM5R23Input34.x +
        sequenceDiagramFGHM5R23Input34.width / 2,
      sequenceDiagramFGHM5R23Binding229 =
        sequenceDiagramFGHM5R23Binding227 +
        sequenceDiagramFGHM5R23Input34.height,
      { look, theme, themeVariables } = sequenceDiagramFGHM5R23Input35,
      { bkgColorArray, borderColorArray } = themeVariables,
      sequenceDiagramFGHM5R23Binding230 = sequenceDiagramFGHM5R23Input33
        .append("g")
        .lower(),
      sequenceDiagramFGHM5R23Binding231 = sequenceDiagramFGHM5R23Binding230;
    sequenceDiagramFGHM5R23Input36 ||
      (sequenceDiagramFGHM5R23Binding20++,
      Object.keys(sequenceDiagramFGHM5R23Input34.links || {}).length &&
        !sequenceDiagramFGHM5R23Input35.forceMenus &&
        sequenceDiagramFGHM5R23Binding231
          .attr(
            "onclick",
            sequenceDiagramFGHM5R23Binding17(
              `actor${sequenceDiagramFGHM5R23Binding20}_popup`,
            ),
          )
          .attr("cursor", "pointer"),
      sequenceDiagramFGHM5R23Binding231
        .append("line")
        .attr("id", "actor" + sequenceDiagramFGHM5R23Binding20)
        .attr("x1", sequenceDiagramFGHM5R23Binding228)
        .attr("y1", sequenceDiagramFGHM5R23Binding229)
        .attr("x2", sequenceDiagramFGHM5R23Binding228)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramFGHM5R23Input34.name)
        .attr("data-et", "life-line")
        .attr("data-id", sequenceDiagramFGHM5R23Input34.name),
      (sequenceDiagramFGHM5R23Binding231 =
        sequenceDiagramFGHM5R23Binding230.append("g")),
      (sequenceDiagramFGHM5R23Input34.actorCnt =
        sequenceDiagramFGHM5R23Binding20),
      sequenceDiagramFGHM5R23Input34.links != null &&
        sequenceDiagramFGHM5R23Binding231.attr(
          "id",
          "root-" + sequenceDiagramFGHM5R23Binding20,
        ),
      look === "neo" &&
        sequenceDiagramFGHM5R23Binding231.attr("data-look", "neo"));
    let sequenceDiagramFGHM5R23Binding232 = chunkYZCP3GAMS(),
      sequenceDiagramFGHM5R23Binding233 = "actor";
    sequenceDiagramFGHM5R23Input34.properties?.class
      ? (sequenceDiagramFGHM5R23Binding233 =
          sequenceDiagramFGHM5R23Input34.properties.class)
      : (sequenceDiagramFGHM5R23Binding232.fill = "#eaeaea");
    sequenceDiagramFGHM5R23Input36
      ? (sequenceDiagramFGHM5R23Binding233 += ` ${sequenceDiagramFGHM5R23Binding12}`)
      : (sequenceDiagramFGHM5R23Binding233 += ` ${sequenceDiagramFGHM5R23Binding11}`);
    sequenceDiagramFGHM5R23Binding231.attr(
      "class",
      sequenceDiagramFGHM5R23Binding233,
    );
    sequenceDiagramFGHM5R23Binding232.x = sequenceDiagramFGHM5R23Input34.x;
    sequenceDiagramFGHM5R23Binding232.y = sequenceDiagramFGHM5R23Binding227;
    sequenceDiagramFGHM5R23Binding232.width =
      sequenceDiagramFGHM5R23Input34.width;
    sequenceDiagramFGHM5R23Binding232.height =
      sequenceDiagramFGHM5R23Input34.height;
    sequenceDiagramFGHM5R23Binding232.name =
      sequenceDiagramFGHM5R23Input34.name;
    let sequenceDiagramFGHM5R23Binding234 =
        sequenceDiagramFGHM5R23Binding232.height / 2,
      sequenceDiagramFGHM5R23Binding235 =
        sequenceDiagramFGHM5R23Binding234 /
        (2.5 + sequenceDiagramFGHM5R23Binding232.height / 50),
      sequenceDiagramFGHM5R23Binding236 =
        sequenceDiagramFGHM5R23Binding231.append("g"),
      sequenceDiagramFGHM5R23Binding237 =
        sequenceDiagramFGHM5R23Binding231.append("g"),
      sequenceDiagramFGHM5R23Binding238 = `M ${sequenceDiagramFGHM5R23Binding232.x},${sequenceDiagramFGHM5R23Binding232.y + sequenceDiagramFGHM5R23Binding234}
    a ${sequenceDiagramFGHM5R23Binding235},${sequenceDiagramFGHM5R23Binding234} 0 0 0 0,${sequenceDiagramFGHM5R23Binding232.height}
    h ${sequenceDiagramFGHM5R23Binding232.width - 2 * sequenceDiagramFGHM5R23Binding235}
    a ${sequenceDiagramFGHM5R23Binding235},${sequenceDiagramFGHM5R23Binding234} 0 0 0 0,-${sequenceDiagramFGHM5R23Binding232.height}
    Z
  `;
    sequenceDiagramFGHM5R23Binding236
      .append("path")
      .attr("d", sequenceDiagramFGHM5R23Binding238);
    sequenceDiagramFGHM5R23Binding237.append("path").attr(
      "d",
      `M ${sequenceDiagramFGHM5R23Binding232.x},${sequenceDiagramFGHM5R23Binding232.y + sequenceDiagramFGHM5R23Binding234}
      a ${sequenceDiagramFGHM5R23Binding235},${sequenceDiagramFGHM5R23Binding234} 0 0 0 0,${sequenceDiagramFGHM5R23Binding232.height}`,
    );
    sequenceDiagramFGHM5R23Binding236.attr(
      "transform",
      `translate(${sequenceDiagramFGHM5R23Binding235}, ${-(sequenceDiagramFGHM5R23Binding232.height / 2)})`,
    );
    sequenceDiagramFGHM5R23Binding237.attr(
      "transform",
      `translate(${sequenceDiagramFGHM5R23Binding232.width - sequenceDiagramFGHM5R23Binding235}, ${-sequenceDiagramFGHM5R23Binding232.height / 2})`,
    );
    sequenceDiagramFGHM5R23Input34.rectData = sequenceDiagramFGHM5R23Binding232;
    look === "neo" &&
      sequenceDiagramFGHM5R23Binding236.attr("filter", "url(#drop-shadow)");
    let sequenceDiagramFGHM5R23Binding239 =
      sequenceDiagramFGHM5R23Input37.get(sequenceDiagramFGHM5R23Input34.name) ??
      0;
    if (
      (sequenceDiagramFGHM5R23Binding15.has(theme) &&
        (sequenceDiagramFGHM5R23Binding236.style(
          "stroke",
          borderColorArray[
            sequenceDiagramFGHM5R23Binding239 % borderColorArray.length
          ],
        ),
        sequenceDiagramFGHM5R23Binding236.style(
          "fill",
          bkgColorArray[
            sequenceDiagramFGHM5R23Binding239 % borderColorArray.length
          ],
        ),
        sequenceDiagramFGHM5R23Binding237.style(
          "stroke",
          borderColorArray[
            sequenceDiagramFGHM5R23Binding239 % borderColorArray.length
          ],
        ),
        sequenceDiagramFGHM5R23Binding237.style(
          "fill",
          bkgColorArray[
            sequenceDiagramFGHM5R23Binding239 % borderColorArray.length
          ],
        )),
      sequenceDiagramFGHM5R23Input34.properties?.icon)
    ) {
      let sequenceDiagramFGHM5R23Binding547 =
          sequenceDiagramFGHM5R23Input34.properties.icon.trim(),
        sequenceDiagramFGHM5R23Binding548 =
          sequenceDiagramFGHM5R23Binding232.x +
          sequenceDiagramFGHM5R23Binding232.width -
          20,
        sequenceDiagramFGHM5R23Binding549 =
          sequenceDiagramFGHM5R23Binding232.y + 10;
      sequenceDiagramFGHM5R23Binding547.charAt(0) === "@"
        ? r(
            sequenceDiagramFGHM5R23Binding231,
            sequenceDiagramFGHM5R23Binding548,
            sequenceDiagramFGHM5R23Binding549,
            sequenceDiagramFGHM5R23Binding547.substr(1),
          )
        : chunkYZCP3GAMI(
            sequenceDiagramFGHM5R23Binding231,
            sequenceDiagramFGHM5R23Binding548,
            sequenceDiagramFGHM5R23Binding549,
            sequenceDiagramFGHM5R23Binding547,
          );
    }
    sequenceDiagramFGHM5R23Binding46(
      sequenceDiagramFGHM5R23Input35,
      k(sequenceDiagramFGHM5R23Input34.description),
    )(
      sequenceDiagramFGHM5R23Input34.description,
      sequenceDiagramFGHM5R23Binding231,
      sequenceDiagramFGHM5R23Binding232.x,
      sequenceDiagramFGHM5R23Binding232.y,
      sequenceDiagramFGHM5R23Binding232.width,
      sequenceDiagramFGHM5R23Binding232.height,
      {
        class: `actor ${sequenceDiagramFGHM5R23Binding13}`,
      },
      sequenceDiagramFGHM5R23Input35,
    );
    let sequenceDiagramFGHM5R23Binding240 =
        sequenceDiagramFGHM5R23Input34.height,
      sequenceDiagramFGHM5R23Binding241 =
        sequenceDiagramFGHM5R23Binding236.select("path:last-child");
    if (sequenceDiagramFGHM5R23Binding241.node()) {
      let sequenceDiagramFGHM5R23Binding568 = sequenceDiagramFGHM5R23Binding241
        .node()
        .getBBox();
      sequenceDiagramFGHM5R23Input34.height =
        sequenceDiagramFGHM5R23Binding568.height;
      sequenceDiagramFGHM5R23Binding240 =
        sequenceDiagramFGHM5R23Binding568.height;
    }
    return (
      sequenceDiagramFGHM5R23Input36 ||
        (sequenceDiagramFGHM5R23Binding231.attr("data-et", "participant"),
        sequenceDiagramFGHM5R23Binding231.attr("data-type", "queue"),
        sequenceDiagramFGHM5R23Binding231.attr(
          "data-id",
          sequenceDiagramFGHM5R23Input34.name,
        )),
      sequenceDiagramFGHM5R23Binding240
    );
  }, "drawActorTypeQueue");
  sequenceDiagramFGHM5R23Binding25 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input55,
    sequenceDiagramFGHM5R23Input56,
    sequenceDiagramFGHM5R23Input57,
    sequenceDiagramFGHM5R23Input58,
    sequenceDiagramFGHM5R23Input59,
    sequenceDiagramFGHM5R23Input60,
  ) {
    let sequenceDiagramFGHM5R23Binding280 = sequenceDiagramFGHM5R23Input58
        ? sequenceDiagramFGHM5R23Input56.stopy
        : sequenceDiagramFGHM5R23Input56.starty,
      sequenceDiagramFGHM5R23Binding281 =
        sequenceDiagramFGHM5R23Input56.x +
        sequenceDiagramFGHM5R23Input56.width / 2,
      sequenceDiagramFGHM5R23Binding282 =
        sequenceDiagramFGHM5R23Binding280 + 75,
      { look, theme, themeVariables } = sequenceDiagramFGHM5R23Input57,
      { bkgColorArray, borderColorArray, actorBorder, actorBkg } =
        themeVariables,
      sequenceDiagramFGHM5R23Binding283 = sequenceDiagramFGHM5R23Input55
        .append("g")
        .lower();
    sequenceDiagramFGHM5R23Input58 ||
      (sequenceDiagramFGHM5R23Binding20++,
      sequenceDiagramFGHM5R23Binding283
        .append("line")
        .attr("id", "actor" + sequenceDiagramFGHM5R23Binding20)
        .attr("x1", sequenceDiagramFGHM5R23Binding281)
        .attr("y1", sequenceDiagramFGHM5R23Binding282)
        .attr("x2", sequenceDiagramFGHM5R23Binding281)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramFGHM5R23Input56.name)
        .attr("data-et", "life-line")
        .attr("data-id", sequenceDiagramFGHM5R23Input56.name),
      (sequenceDiagramFGHM5R23Input56.actorCnt =
        sequenceDiagramFGHM5R23Binding20));
    let sequenceDiagramFGHM5R23Binding284 =
        sequenceDiagramFGHM5R23Input55.append("g"),
      sequenceDiagramFGHM5R23Binding285 = sequenceDiagramFGHM5R23Binding14;
    sequenceDiagramFGHM5R23Input58
      ? (sequenceDiagramFGHM5R23Binding285 += ` ${sequenceDiagramFGHM5R23Binding12}`)
      : (sequenceDiagramFGHM5R23Binding285 += ` ${sequenceDiagramFGHM5R23Binding11}`);
    sequenceDiagramFGHM5R23Binding284.attr(
      "class",
      sequenceDiagramFGHM5R23Binding285,
    );
    sequenceDiagramFGHM5R23Binding284.attr(
      "name",
      sequenceDiagramFGHM5R23Input56.name,
    );
    let sequenceDiagramFGHM5R23Binding286 = chunkYZCP3GAMS();
    sequenceDiagramFGHM5R23Binding286.x = sequenceDiagramFGHM5R23Input56.x;
    sequenceDiagramFGHM5R23Binding286.y = sequenceDiagramFGHM5R23Binding280;
    sequenceDiagramFGHM5R23Binding286.fill = "#eaeaea";
    sequenceDiagramFGHM5R23Binding286.width =
      sequenceDiagramFGHM5R23Input56.width;
    sequenceDiagramFGHM5R23Binding286.height =
      sequenceDiagramFGHM5R23Input56.height;
    sequenceDiagramFGHM5R23Binding286.class = "actor";
    let sequenceDiagramFGHM5R23Binding287 =
        sequenceDiagramFGHM5R23Input56.x +
        sequenceDiagramFGHM5R23Input56.width / 2,
      sequenceDiagramFGHM5R23Binding288 =
        sequenceDiagramFGHM5R23Binding280 + 32;
    sequenceDiagramFGHM5R23Binding284
      .append("defs")
      .append("marker")
      .attr("id", sequenceDiagramFGHM5R23Input59 + "-filled-head-control")
      .attr("refX", 11)
      .attr("refY", 5.8)
      .attr("markerWidth", 20)
      .attr("markerHeight", 28)
      .attr("orient", "172.5")
      .attr("stroke-width", 1.2)
      .append("path")
      .attr("d", "M 14.4 5.6 L 7.2 10.4 L 8.8 5.6 L 7.2 0.8 Z");
    sequenceDiagramFGHM5R23Binding284
      .append("circle")
      .attr("cx", sequenceDiagramFGHM5R23Binding287)
      .attr("cy", sequenceDiagramFGHM5R23Binding288)
      .attr("r", 22)
      .attr("filter", `${look === "neo" ? "url(#drop-shadow)" : ""}`);
    sequenceDiagramFGHM5R23Binding284
      .append("line")
      .attr(
        "marker-end",
        "url(#" + sequenceDiagramFGHM5R23Input59 + "-filled-head-control)",
      )
      .attr(
        "transform",
        `translate(${sequenceDiagramFGHM5R23Binding287}, ${sequenceDiagramFGHM5R23Binding288 - 22})`,
      );
    let sequenceDiagramFGHM5R23Binding289 =
      sequenceDiagramFGHM5R23Input60.get(sequenceDiagramFGHM5R23Input56.name) ??
      0;
    return (
      sequenceDiagramFGHM5R23Binding15.has(theme)
        ? (sequenceDiagramFGHM5R23Binding284.style(
            "stroke",
            borderColorArray[
              sequenceDiagramFGHM5R23Binding289 % borderColorArray.length
            ],
          ),
          sequenceDiagramFGHM5R23Binding284.style(
            "fill",
            bkgColorArray[
              sequenceDiagramFGHM5R23Binding289 % borderColorArray.length
            ],
          ))
        : (sequenceDiagramFGHM5R23Binding284.style("stroke", actorBorder),
          sequenceDiagramFGHM5R23Binding284.style("fill", actorBkg)),
      (sequenceDiagramFGHM5R23Input56.height =
        sequenceDiagramFGHM5R23Binding284.node().getBBox().height +
        2 * (sequenceDiagramFGHM5R23Input57?.sequence?.labelBoxHeight ?? 0)),
      sequenceDiagramFGHM5R23Binding46(
        sequenceDiagramFGHM5R23Input57,
        k(sequenceDiagramFGHM5R23Input56.description),
      )(
        sequenceDiagramFGHM5R23Input56.description,
        sequenceDiagramFGHM5R23Binding284,
        sequenceDiagramFGHM5R23Binding286.x,
        sequenceDiagramFGHM5R23Binding286.y +
          22 +
          (sequenceDiagramFGHM5R23Input58 ? 5 : 12),
        sequenceDiagramFGHM5R23Binding286.width,
        sequenceDiagramFGHM5R23Binding286.height,
        {
          class: `actor ${sequenceDiagramFGHM5R23Binding14}`,
        },
        sequenceDiagramFGHM5R23Input57,
      ),
      sequenceDiagramFGHM5R23Input58 ||
        (sequenceDiagramFGHM5R23Binding284.attr("data-et", "participant"),
        sequenceDiagramFGHM5R23Binding284.attr("data-type", "control"),
        sequenceDiagramFGHM5R23Binding284.attr(
          "data-id",
          sequenceDiagramFGHM5R23Input56.name,
        )),
      sequenceDiagramFGHM5R23Input56.height
    );
  }, "drawActorTypeControl");
  sequenceDiagramFGHM5R23Binding26 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input82,
    sequenceDiagramFGHM5R23Input83,
    sequenceDiagramFGHM5R23Input84,
    sequenceDiagramFGHM5R23Input85,
    sequenceDiagramFGHM5R23Input86,
  ) {
    let sequenceDiagramFGHM5R23Binding340 = sequenceDiagramFGHM5R23Input85
        ? sequenceDiagramFGHM5R23Input83.stopy
        : sequenceDiagramFGHM5R23Input83.starty,
      sequenceDiagramFGHM5R23Binding341 =
        sequenceDiagramFGHM5R23Input83.x +
        sequenceDiagramFGHM5R23Input83.width / 2,
      sequenceDiagramFGHM5R23Binding342 =
        sequenceDiagramFGHM5R23Binding340 + 75,
      { look, theme, themeVariables } = sequenceDiagramFGHM5R23Input84,
      { bkgColorArray, borderColorArray } = themeVariables,
      sequenceDiagramFGHM5R23Binding343 = sequenceDiagramFGHM5R23Input82
        .append("g")
        .lower(),
      sequenceDiagramFGHM5R23Binding344 =
        sequenceDiagramFGHM5R23Input82.append("g"),
      sequenceDiagramFGHM5R23Binding345 = "actor";
    sequenceDiagramFGHM5R23Input85
      ? (sequenceDiagramFGHM5R23Binding345 += ` ${sequenceDiagramFGHM5R23Binding12}`)
      : (sequenceDiagramFGHM5R23Binding345 += ` ${sequenceDiagramFGHM5R23Binding11}`);
    sequenceDiagramFGHM5R23Binding344.attr(
      "class",
      sequenceDiagramFGHM5R23Binding345,
    );
    sequenceDiagramFGHM5R23Binding344.attr(
      "name",
      sequenceDiagramFGHM5R23Input83.name,
    );
    let sequenceDiagramFGHM5R23Binding346 = chunkYZCP3GAMS();
    sequenceDiagramFGHM5R23Binding346.x = sequenceDiagramFGHM5R23Input83.x;
    sequenceDiagramFGHM5R23Binding346.y = sequenceDiagramFGHM5R23Binding340;
    sequenceDiagramFGHM5R23Binding346.fill = "#eaeaea";
    sequenceDiagramFGHM5R23Binding346.width =
      sequenceDiagramFGHM5R23Input83.width;
    sequenceDiagramFGHM5R23Binding346.height =
      sequenceDiagramFGHM5R23Input83.height;
    sequenceDiagramFGHM5R23Binding346.class = "actor";
    let sequenceDiagramFGHM5R23Binding347 =
        sequenceDiagramFGHM5R23Input83.x +
        sequenceDiagramFGHM5R23Input83.width / 2,
      sequenceDiagramFGHM5R23Binding348 =
        sequenceDiagramFGHM5R23Binding340 +
        (sequenceDiagramFGHM5R23Input85 ? 10 : 25);
    sequenceDiagramFGHM5R23Binding344
      .append("circle")
      .attr("cx", sequenceDiagramFGHM5R23Binding347)
      .attr("cy", sequenceDiagramFGHM5R23Binding348)
      .attr("r", 22)
      .attr("width", sequenceDiagramFGHM5R23Input83.width)
      .attr("height", sequenceDiagramFGHM5R23Input83.height);
    sequenceDiagramFGHM5R23Binding344
      .append("line")
      .attr("x1", sequenceDiagramFGHM5R23Binding347 - 22)
      .attr("x2", sequenceDiagramFGHM5R23Binding347 + 22)
      .attr("y1", sequenceDiagramFGHM5R23Binding348 + 22)
      .attr("y2", sequenceDiagramFGHM5R23Binding348 + 22)
      .attr("stroke-width", 2);
    look === "neo" &&
      sequenceDiagramFGHM5R23Binding344.attr("filter", "url(#drop-shadow)");
    let sequenceDiagramFGHM5R23Binding349 =
      sequenceDiagramFGHM5R23Input86.get(sequenceDiagramFGHM5R23Input83.name) ??
      0;
    return (
      sequenceDiagramFGHM5R23Binding15.has(theme) &&
        (sequenceDiagramFGHM5R23Binding344.style(
          "stroke",
          borderColorArray[
            sequenceDiagramFGHM5R23Binding349 % borderColorArray.length
          ],
        ),
        sequenceDiagramFGHM5R23Binding344.style(
          "fill",
          bkgColorArray[
            sequenceDiagramFGHM5R23Binding349 % borderColorArray.length
          ],
        )),
      (sequenceDiagramFGHM5R23Input83.height =
        sequenceDiagramFGHM5R23Binding344.node().getBBox().height +
        (sequenceDiagramFGHM5R23Input84?.sequence?.labelBoxHeight ?? 0)),
      sequenceDiagramFGHM5R23Input85 ||
        (sequenceDiagramFGHM5R23Binding20++,
        sequenceDiagramFGHM5R23Binding343
          .append("line")
          .attr("id", "actor" + sequenceDiagramFGHM5R23Binding20)
          .attr("x1", sequenceDiagramFGHM5R23Binding341)
          .attr("y1", sequenceDiagramFGHM5R23Binding342)
          .attr("x2", sequenceDiagramFGHM5R23Binding341)
          .attr("y2", 2e3)
          .attr("class", "actor-line 200")
          .attr("stroke-width", "0.5px")
          .attr("stroke", "#999")
          .attr("name", sequenceDiagramFGHM5R23Input83.name)
          .attr("data-et", "life-line")
          .attr("data-id", sequenceDiagramFGHM5R23Input83.name),
        (sequenceDiagramFGHM5R23Input83.actorCnt =
          sequenceDiagramFGHM5R23Binding20)),
      sequenceDiagramFGHM5R23Binding46(
        sequenceDiagramFGHM5R23Input84,
        k(sequenceDiagramFGHM5R23Input83.description),
      )(
        sequenceDiagramFGHM5R23Input83.description,
        sequenceDiagramFGHM5R23Binding344,
        sequenceDiagramFGHM5R23Binding346.x,
        sequenceDiagramFGHM5R23Binding346.y +
          (sequenceDiagramFGHM5R23Input85 ? 15 : 30),
        sequenceDiagramFGHM5R23Binding346.width,
        sequenceDiagramFGHM5R23Binding346.height,
        {
          class: `actor ${sequenceDiagramFGHM5R23Binding14}`,
        },
        sequenceDiagramFGHM5R23Input84,
      ),
      sequenceDiagramFGHM5R23Input85
        ? sequenceDiagramFGHM5R23Binding344.attr(
            "transform",
            "translate(0, 22)",
          )
        : (sequenceDiagramFGHM5R23Binding344.attr(
            "transform",
            `translate(0, ${6})`,
          ),
          sequenceDiagramFGHM5R23Binding344.attr("data-et", "participant"),
          sequenceDiagramFGHM5R23Binding344.attr("data-type", "entity"),
          sequenceDiagramFGHM5R23Binding344.attr(
            "data-id",
            sequenceDiagramFGHM5R23Input83.name,
          )),
      sequenceDiagramFGHM5R23Input83.height
    );
  }, "drawActorTypeEntity");
  sequenceDiagramFGHM5R23Binding27 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input50,
    sequenceDiagramFGHM5R23Input51,
    sequenceDiagramFGHM5R23Input52,
    sequenceDiagramFGHM5R23Input53,
    sequenceDiagramFGHM5R23Input54,
  ) {
    let sequenceDiagramFGHM5R23Binding265 = sequenceDiagramFGHM5R23Input53
        ? sequenceDiagramFGHM5R23Input51.stopy
        : sequenceDiagramFGHM5R23Input51.starty,
      sequenceDiagramFGHM5R23Binding266 =
        sequenceDiagramFGHM5R23Input51.x +
        sequenceDiagramFGHM5R23Input51.width / 2,
      sequenceDiagramFGHM5R23Binding267 =
        sequenceDiagramFGHM5R23Binding265 +
        sequenceDiagramFGHM5R23Input51.height +
        2 * sequenceDiagramFGHM5R23Input52.boxTextMargin,
      { theme, themeVariables, look } = sequenceDiagramFGHM5R23Input52,
      { bkgColorArray, borderColorArray, actorBorder } = themeVariables,
      sequenceDiagramFGHM5R23Binding268 = sequenceDiagramFGHM5R23Input50
        .append("g")
        .lower(),
      sequenceDiagramFGHM5R23Binding269 = sequenceDiagramFGHM5R23Binding268;
    sequenceDiagramFGHM5R23Input53 ||
      (sequenceDiagramFGHM5R23Binding20++,
      Object.keys(sequenceDiagramFGHM5R23Input51.links || {}).length &&
        !sequenceDiagramFGHM5R23Input52.forceMenus &&
        sequenceDiagramFGHM5R23Binding269
          .attr(
            "onclick",
            sequenceDiagramFGHM5R23Binding17(
              `actor${sequenceDiagramFGHM5R23Binding20}_popup`,
            ),
          )
          .attr("cursor", "pointer"),
      sequenceDiagramFGHM5R23Binding269
        .append("line")
        .attr("id", "actor" + sequenceDiagramFGHM5R23Binding20)
        .attr("x1", sequenceDiagramFGHM5R23Binding266)
        .attr("y1", sequenceDiagramFGHM5R23Binding267)
        .attr("x2", sequenceDiagramFGHM5R23Binding266)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramFGHM5R23Input51.name)
        .attr("data-et", "life-line")
        .attr("data-id", sequenceDiagramFGHM5R23Input51.name),
      (sequenceDiagramFGHM5R23Binding269 =
        sequenceDiagramFGHM5R23Binding268.append("g")),
      (sequenceDiagramFGHM5R23Input51.actorCnt =
        sequenceDiagramFGHM5R23Binding20),
      sequenceDiagramFGHM5R23Input51.links != null &&
        sequenceDiagramFGHM5R23Binding269.attr(
          "id",
          "root-" + sequenceDiagramFGHM5R23Binding20,
        ),
      look === "neo" &&
        sequenceDiagramFGHM5R23Binding269.attr("data-look", "neo"));
    let sequenceDiagramFGHM5R23Binding270 = chunkYZCP3GAMS(),
      sequenceDiagramFGHM5R23Binding271 = "actor";
    sequenceDiagramFGHM5R23Input51.properties?.class
      ? (sequenceDiagramFGHM5R23Binding271 =
          sequenceDiagramFGHM5R23Input51.properties.class)
      : (sequenceDiagramFGHM5R23Binding270.fill = "#eaeaea");
    sequenceDiagramFGHM5R23Input53
      ? (sequenceDiagramFGHM5R23Binding271 += ` ${sequenceDiagramFGHM5R23Binding12}`)
      : (sequenceDiagramFGHM5R23Binding271 += ` ${sequenceDiagramFGHM5R23Binding11}`);
    sequenceDiagramFGHM5R23Binding270.x = sequenceDiagramFGHM5R23Input51.x;
    sequenceDiagramFGHM5R23Binding270.y = sequenceDiagramFGHM5R23Binding265;
    sequenceDiagramFGHM5R23Binding270.width =
      sequenceDiagramFGHM5R23Input51.width;
    sequenceDiagramFGHM5R23Binding270.height =
      sequenceDiagramFGHM5R23Input51.height;
    sequenceDiagramFGHM5R23Binding270.class = sequenceDiagramFGHM5R23Binding271;
    sequenceDiagramFGHM5R23Binding270.name =
      sequenceDiagramFGHM5R23Input51.name;
    sequenceDiagramFGHM5R23Binding270.x = sequenceDiagramFGHM5R23Input51.x;
    sequenceDiagramFGHM5R23Binding270.y = sequenceDiagramFGHM5R23Binding265;
    let sequenceDiagramFGHM5R23Binding272 =
        sequenceDiagramFGHM5R23Binding270.width / 3,
      sequenceDiagramFGHM5R23Binding273 =
        sequenceDiagramFGHM5R23Binding270.width / 3,
      sequenceDiagramFGHM5R23Binding274 = sequenceDiagramFGHM5R23Binding272 / 2,
      sequenceDiagramFGHM5R23Binding275 =
        sequenceDiagramFGHM5R23Binding274 /
        (2.5 + sequenceDiagramFGHM5R23Binding272 / 50),
      sequenceDiagramFGHM5R23Binding276 =
        sequenceDiagramFGHM5R23Binding269.append("g");
    sequenceDiagramFGHM5R23Binding276.attr(
      "class",
      sequenceDiagramFGHM5R23Binding271,
    );
    let sequenceDiagramFGHM5R23Binding277 = `
  M ${sequenceDiagramFGHM5R23Binding270.x},${sequenceDiagramFGHM5R23Binding270.y + sequenceDiagramFGHM5R23Binding275}
  a ${sequenceDiagramFGHM5R23Binding274},${sequenceDiagramFGHM5R23Binding275} 0 0 0 ${sequenceDiagramFGHM5R23Binding272},0
  a ${sequenceDiagramFGHM5R23Binding274},${sequenceDiagramFGHM5R23Binding275} 0 0 0 -${sequenceDiagramFGHM5R23Binding272},0
  l 0,${sequenceDiagramFGHM5R23Binding273 - 2 * sequenceDiagramFGHM5R23Binding275}
  a ${sequenceDiagramFGHM5R23Binding274},${sequenceDiagramFGHM5R23Binding275} 0 0 0 ${sequenceDiagramFGHM5R23Binding272},0
  l 0,-${sequenceDiagramFGHM5R23Binding273 - 2 * sequenceDiagramFGHM5R23Binding275}
`;
    sequenceDiagramFGHM5R23Binding276
      .append("path")
      .attr("d", sequenceDiagramFGHM5R23Binding277);
    look === "neo" &&
      sequenceDiagramFGHM5R23Binding276.attr("filter", "url(#drop-shadow)");
    let sequenceDiagramFGHM5R23Binding278 =
      sequenceDiagramFGHM5R23Input54.get(sequenceDiagramFGHM5R23Input51.name) ??
      0;
    sequenceDiagramFGHM5R23Binding15.has(theme)
      ? (sequenceDiagramFGHM5R23Binding276.style(
          "stroke",
          borderColorArray[
            sequenceDiagramFGHM5R23Binding278 % borderColorArray.length
          ],
        ),
        sequenceDiagramFGHM5R23Binding276.style(
          "fill",
          bkgColorArray[
            sequenceDiagramFGHM5R23Binding278 % borderColorArray.length
          ],
        ))
      : sequenceDiagramFGHM5R23Binding276.style("stroke", actorBorder);
    sequenceDiagramFGHM5R23Binding276.attr(
      "transform",
      `translate(${sequenceDiagramFGHM5R23Binding272}, ${sequenceDiagramFGHM5R23Binding275})`,
    );
    sequenceDiagramFGHM5R23Input51.rectData = sequenceDiagramFGHM5R23Binding270;
    sequenceDiagramFGHM5R23Binding46(
      sequenceDiagramFGHM5R23Input52,
      k(sequenceDiagramFGHM5R23Input51.description),
    )(
      sequenceDiagramFGHM5R23Input51.description,
      sequenceDiagramFGHM5R23Binding269,
      sequenceDiagramFGHM5R23Binding270.x,
      sequenceDiagramFGHM5R23Binding270.y + 35,
      sequenceDiagramFGHM5R23Binding270.width,
      sequenceDiagramFGHM5R23Binding270.height,
      {
        class: `actor ${sequenceDiagramFGHM5R23Binding13}`,
      },
      sequenceDiagramFGHM5R23Input52,
    );
    let sequenceDiagramFGHM5R23Binding279 =
      sequenceDiagramFGHM5R23Binding276.select("path:last-child");
    return (
      sequenceDiagramFGHM5R23Binding279.node() &&
        (sequenceDiagramFGHM5R23Input51.height =
          sequenceDiagramFGHM5R23Binding279.node().getBBox().height +
          (sequenceDiagramFGHM5R23Input52.sequence.labelBoxHeight ?? 0)),
      sequenceDiagramFGHM5R23Input53 ||
        (sequenceDiagramFGHM5R23Binding269.attr("data-et", "participant"),
        sequenceDiagramFGHM5R23Binding269.attr("data-type", "database"),
        sequenceDiagramFGHM5R23Binding269.attr(
          "data-id",
          sequenceDiagramFGHM5R23Input51.name,
        )),
      sequenceDiagramFGHM5R23Input51.height
    );
  }, "drawActorTypeDatabase");
  sequenceDiagramFGHM5R23Binding28 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input69,
    sequenceDiagramFGHM5R23Input70,
    sequenceDiagramFGHM5R23Input71,
    sequenceDiagramFGHM5R23Input72,
    sequenceDiagramFGHM5R23Input73,
  ) {
    let sequenceDiagramFGHM5R23Binding315 = sequenceDiagramFGHM5R23Input72
        ? sequenceDiagramFGHM5R23Input70.stopy
        : sequenceDiagramFGHM5R23Input70.starty,
      sequenceDiagramFGHM5R23Binding316 =
        sequenceDiagramFGHM5R23Input70.x +
        sequenceDiagramFGHM5R23Input70.width / 2,
      sequenceDiagramFGHM5R23Binding317 =
        sequenceDiagramFGHM5R23Binding315 + 80,
      sequenceDiagramFGHM5R23Binding318 = sequenceDiagramFGHM5R23Input69
        .append("g")
        .lower(),
      { look, theme, themeVariables } = sequenceDiagramFGHM5R23Input71,
      { bkgColorArray, borderColorArray, actorBorder } = themeVariables;
    sequenceDiagramFGHM5R23Input72 ||
      (sequenceDiagramFGHM5R23Binding20++,
      sequenceDiagramFGHM5R23Binding318
        .append("line")
        .attr("id", "actor" + sequenceDiagramFGHM5R23Binding20)
        .attr("x1", sequenceDiagramFGHM5R23Binding316)
        .attr("y1", sequenceDiagramFGHM5R23Binding317)
        .attr("x2", sequenceDiagramFGHM5R23Binding316)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramFGHM5R23Input70.name)
        .attr("data-et", "life-line")
        .attr("data-id", sequenceDiagramFGHM5R23Input70.name),
      (sequenceDiagramFGHM5R23Input70.actorCnt =
        sequenceDiagramFGHM5R23Binding20));
    let sequenceDiagramFGHM5R23Binding319 =
        sequenceDiagramFGHM5R23Input69.append("g"),
      sequenceDiagramFGHM5R23Binding320 = sequenceDiagramFGHM5R23Binding14;
    sequenceDiagramFGHM5R23Input72
      ? (sequenceDiagramFGHM5R23Binding320 += ` ${sequenceDiagramFGHM5R23Binding12}`)
      : (sequenceDiagramFGHM5R23Binding320 += ` ${sequenceDiagramFGHM5R23Binding11}`);
    sequenceDiagramFGHM5R23Binding319.attr(
      "class",
      sequenceDiagramFGHM5R23Binding320,
    );
    sequenceDiagramFGHM5R23Binding319.attr(
      "name",
      sequenceDiagramFGHM5R23Input70.name,
    );
    let sequenceDiagramFGHM5R23Binding321 = chunkYZCP3GAMS();
    sequenceDiagramFGHM5R23Binding321.x = sequenceDiagramFGHM5R23Input70.x;
    sequenceDiagramFGHM5R23Binding321.y = sequenceDiagramFGHM5R23Binding315;
    sequenceDiagramFGHM5R23Binding321.fill = "#eaeaea";
    sequenceDiagramFGHM5R23Binding321.width =
      sequenceDiagramFGHM5R23Input70.width;
    sequenceDiagramFGHM5R23Binding321.height =
      sequenceDiagramFGHM5R23Input70.height;
    sequenceDiagramFGHM5R23Binding321.class = "actor";
    sequenceDiagramFGHM5R23Binding319
      .append("line")
      .attr("id", "actor-man-torso" + sequenceDiagramFGHM5R23Binding20)
      .attr(
        "x1",
        sequenceDiagramFGHM5R23Input70.x +
          sequenceDiagramFGHM5R23Input70.width / 2 -
          55,
      )
      .attr("y1", sequenceDiagramFGHM5R23Binding315 + 12)
      .attr(
        "x2",
        sequenceDiagramFGHM5R23Input70.x +
          sequenceDiagramFGHM5R23Input70.width / 2 -
          15,
      )
      .attr("y2", sequenceDiagramFGHM5R23Binding315 + 12);
    sequenceDiagramFGHM5R23Binding319
      .append("line")
      .attr("id", "actor-man-arms" + sequenceDiagramFGHM5R23Binding20)
      .attr(
        "x1",
        sequenceDiagramFGHM5R23Input70.x +
          sequenceDiagramFGHM5R23Input70.width / 2 -
          55,
      )
      .attr("y1", sequenceDiagramFGHM5R23Binding315 + 2)
      .attr(
        "x2",
        sequenceDiagramFGHM5R23Input70.x +
          sequenceDiagramFGHM5R23Input70.width / 2 -
          55,
      )
      .attr("y2", sequenceDiagramFGHM5R23Binding315 + 22);
    sequenceDiagramFGHM5R23Binding319
      .append("circle")
      .attr(
        "cx",
        sequenceDiagramFGHM5R23Input70.x +
          sequenceDiagramFGHM5R23Input70.width / 2,
      )
      .attr("cy", sequenceDiagramFGHM5R23Binding315 + 12)
      .attr("r", 22);
    look === "neo" &&
      sequenceDiagramFGHM5R23Binding319.attr("filter", "url(#drop-shadow)");
    let sequenceDiagramFGHM5R23Binding322 =
      sequenceDiagramFGHM5R23Input73.get(sequenceDiagramFGHM5R23Input70.name) ??
      0;
    return (
      sequenceDiagramFGHM5R23Binding15.has(theme)
        ? (sequenceDiagramFGHM5R23Binding319.style(
            "stroke",
            borderColorArray[
              sequenceDiagramFGHM5R23Binding322 % borderColorArray.length
            ],
          ),
          sequenceDiagramFGHM5R23Binding319.style(
            "fill",
            bkgColorArray[
              sequenceDiagramFGHM5R23Binding322 % borderColorArray.length
            ],
          ))
        : sequenceDiagramFGHM5R23Binding319.style("stroke", actorBorder),
      (sequenceDiagramFGHM5R23Input70.height =
        sequenceDiagramFGHM5R23Binding319.node().getBBox().height +
        (sequenceDiagramFGHM5R23Input71.sequence.labelBoxHeight ?? 0)),
      sequenceDiagramFGHM5R23Binding46(
        sequenceDiagramFGHM5R23Input71,
        k(sequenceDiagramFGHM5R23Input70.description),
      )(
        sequenceDiagramFGHM5R23Input70.description,
        sequenceDiagramFGHM5R23Binding319,
        sequenceDiagramFGHM5R23Binding321.x,
        sequenceDiagramFGHM5R23Binding321.y + 15,
        sequenceDiagramFGHM5R23Binding321.width,
        sequenceDiagramFGHM5R23Binding321.height,
        {
          class: `actor ${sequenceDiagramFGHM5R23Binding14}`,
        },
        sequenceDiagramFGHM5R23Input71,
      ),
      sequenceDiagramFGHM5R23Binding319.attr("transform", "translate(0,21)"),
      sequenceDiagramFGHM5R23Input72 ||
        (sequenceDiagramFGHM5R23Binding319.attr("data-et", "participant"),
        sequenceDiagramFGHM5R23Binding319.attr("data-type", "boundary"),
        sequenceDiagramFGHM5R23Binding319.attr(
          "data-id",
          sequenceDiagramFGHM5R23Input70.name,
        )),
      sequenceDiagramFGHM5R23Input70.height
    );
  }, "drawActorTypeBoundary");
  sequenceDiagramFGHM5R23Binding29 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input45,
    sequenceDiagramFGHM5R23Input46,
    sequenceDiagramFGHM5R23Input47,
    sequenceDiagramFGHM5R23Input48,
    sequenceDiagramFGHM5R23Input49,
  ) {
    let sequenceDiagramFGHM5R23Binding254 = sequenceDiagramFGHM5R23Input48
        ? sequenceDiagramFGHM5R23Input46.stopy
        : sequenceDiagramFGHM5R23Input46.starty,
      sequenceDiagramFGHM5R23Binding255 =
        sequenceDiagramFGHM5R23Input46.x +
        sequenceDiagramFGHM5R23Input46.width / 2,
      sequenceDiagramFGHM5R23Binding256 =
        sequenceDiagramFGHM5R23Binding254 + 80,
      { look, theme, themeVariables } = sequenceDiagramFGHM5R23Input47,
      { bkgColorArray, borderColorArray, actorBorder } = themeVariables,
      sequenceDiagramFGHM5R23Binding257 = sequenceDiagramFGHM5R23Input45
        .append("g")
        .lower();
    sequenceDiagramFGHM5R23Input48 ||
      (sequenceDiagramFGHM5R23Binding20++,
      sequenceDiagramFGHM5R23Binding257
        .append("line")
        .attr("id", "actor" + sequenceDiagramFGHM5R23Binding20)
        .attr("x1", sequenceDiagramFGHM5R23Binding255)
        .attr("y1", sequenceDiagramFGHM5R23Binding256)
        .attr("x2", sequenceDiagramFGHM5R23Binding255)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramFGHM5R23Input46.name)
        .attr("data-et", "life-line")
        .attr("data-id", sequenceDiagramFGHM5R23Input46.name),
      (sequenceDiagramFGHM5R23Input46.actorCnt =
        sequenceDiagramFGHM5R23Binding20));
    let sequenceDiagramFGHM5R23Binding258 =
        sequenceDiagramFGHM5R23Input45.append("g"),
      sequenceDiagramFGHM5R23Binding259 = sequenceDiagramFGHM5R23Binding14;
    sequenceDiagramFGHM5R23Input48
      ? (sequenceDiagramFGHM5R23Binding259 += ` ${sequenceDiagramFGHM5R23Binding12}`)
      : (sequenceDiagramFGHM5R23Binding259 += ` ${sequenceDiagramFGHM5R23Binding11}`);
    sequenceDiagramFGHM5R23Binding258.attr(
      "class",
      sequenceDiagramFGHM5R23Binding259,
    );
    sequenceDiagramFGHM5R23Binding258.attr(
      "name",
      sequenceDiagramFGHM5R23Input46.name,
    );
    sequenceDiagramFGHM5R23Input48 ||
      sequenceDiagramFGHM5R23Binding258
        .attr("data-et", "participant")
        .attr("data-type", "actor")
        .attr("data-id", sequenceDiagramFGHM5R23Input46.name);
    let sequenceDiagramFGHM5R23Binding260 = look === "neo" ? 0.5 : 1,
      sequenceDiagramFGHM5R23Binding261 =
        look === "neo"
          ? sequenceDiagramFGHM5R23Binding254 +
            (1 - sequenceDiagramFGHM5R23Binding260) * 30
          : sequenceDiagramFGHM5R23Binding254;
    sequenceDiagramFGHM5R23Binding258
      .append("line")
      .attr("id", "actor-man-torso" + sequenceDiagramFGHM5R23Binding20)
      .attr("x1", sequenceDiagramFGHM5R23Binding255)
      .attr(
        "y1",
        sequenceDiagramFGHM5R23Binding261 +
          25 * sequenceDiagramFGHM5R23Binding260,
      )
      .attr("x2", sequenceDiagramFGHM5R23Binding255)
      .attr(
        "y2",
        sequenceDiagramFGHM5R23Binding261 +
          45 * sequenceDiagramFGHM5R23Binding260,
      );
    sequenceDiagramFGHM5R23Binding258
      .append("line")
      .attr("id", "actor-man-arms" + sequenceDiagramFGHM5R23Binding20)
      .attr(
        "x1",
        sequenceDiagramFGHM5R23Binding255 -
          (sequenceDiagramFGHM5R23Binding10 / 2) *
            sequenceDiagramFGHM5R23Binding260,
      )
      .attr(
        "y1",
        sequenceDiagramFGHM5R23Binding261 +
          33 * sequenceDiagramFGHM5R23Binding260,
      )
      .attr(
        "x2",
        sequenceDiagramFGHM5R23Binding255 +
          (sequenceDiagramFGHM5R23Binding10 / 2) *
            sequenceDiagramFGHM5R23Binding260,
      )
      .attr(
        "y2",
        sequenceDiagramFGHM5R23Binding261 +
          33 * sequenceDiagramFGHM5R23Binding260,
      );
    sequenceDiagramFGHM5R23Binding258
      .append("line")
      .attr(
        "x1",
        sequenceDiagramFGHM5R23Binding255 -
          (sequenceDiagramFGHM5R23Binding10 / 2) *
            sequenceDiagramFGHM5R23Binding260,
      )
      .attr(
        "y1",
        sequenceDiagramFGHM5R23Binding261 +
          60 * sequenceDiagramFGHM5R23Binding260,
      )
      .attr("x2", sequenceDiagramFGHM5R23Binding255)
      .attr(
        "y2",
        sequenceDiagramFGHM5R23Binding261 +
          45 * sequenceDiagramFGHM5R23Binding260,
      );
    sequenceDiagramFGHM5R23Binding258
      .append("line")
      .attr("x1", sequenceDiagramFGHM5R23Binding255)
      .attr(
        "y1",
        sequenceDiagramFGHM5R23Binding261 +
          45 * sequenceDiagramFGHM5R23Binding260,
      )
      .attr(
        "x2",
        sequenceDiagramFGHM5R23Binding255 +
          (sequenceDiagramFGHM5R23Binding10 / 2 - 2) *
            sequenceDiagramFGHM5R23Binding260,
      )
      .attr(
        "y2",
        sequenceDiagramFGHM5R23Binding261 +
          60 * sequenceDiagramFGHM5R23Binding260,
      );
    let sequenceDiagramFGHM5R23Binding262 =
      sequenceDiagramFGHM5R23Binding258.append("circle");
    sequenceDiagramFGHM5R23Binding262.attr(
      "cx",
      sequenceDiagramFGHM5R23Input46.x +
        sequenceDiagramFGHM5R23Input46.width / 2,
    );
    sequenceDiagramFGHM5R23Binding262.attr(
      "cy",
      sequenceDiagramFGHM5R23Binding261 +
        10 * sequenceDiagramFGHM5R23Binding260,
    );
    sequenceDiagramFGHM5R23Binding262.attr(
      "r",
      15 * sequenceDiagramFGHM5R23Binding260,
    );
    sequenceDiagramFGHM5R23Binding262.attr(
      "width",
      sequenceDiagramFGHM5R23Input46.width * sequenceDiagramFGHM5R23Binding260,
    );
    sequenceDiagramFGHM5R23Binding262.attr(
      "height",
      sequenceDiagramFGHM5R23Input46.height * sequenceDiagramFGHM5R23Binding260,
    );
    sequenceDiagramFGHM5R23Input46.height = sequenceDiagramFGHM5R23Binding258
      .node()
      .getBBox().height;
    let sequenceDiagramFGHM5R23Binding263 = chunkYZCP3GAMS();
    sequenceDiagramFGHM5R23Binding263.x = sequenceDiagramFGHM5R23Input46.x;
    sequenceDiagramFGHM5R23Binding263.y = sequenceDiagramFGHM5R23Binding261;
    sequenceDiagramFGHM5R23Binding263.fill = "#eaeaea";
    sequenceDiagramFGHM5R23Binding263.width =
      sequenceDiagramFGHM5R23Input46.width;
    sequenceDiagramFGHM5R23Binding263.height =
      sequenceDiagramFGHM5R23Input46.height / sequenceDiagramFGHM5R23Binding260;
    sequenceDiagramFGHM5R23Binding263.class = "actor";
    sequenceDiagramFGHM5R23Binding263.rx = 3;
    sequenceDiagramFGHM5R23Binding263.ry = 3;
    let sequenceDiagramFGHM5R23Binding264 =
      sequenceDiagramFGHM5R23Input49.get(sequenceDiagramFGHM5R23Input46.name) ??
      0;
    return (
      sequenceDiagramFGHM5R23Binding15.has(theme)
        ? (sequenceDiagramFGHM5R23Binding258.style(
            "stroke",
            borderColorArray[
              sequenceDiagramFGHM5R23Binding264 % borderColorArray.length
            ],
          ),
          sequenceDiagramFGHM5R23Binding258.style(
            "fill",
            bkgColorArray[
              sequenceDiagramFGHM5R23Binding264 % borderColorArray.length
            ],
          ))
        : sequenceDiagramFGHM5R23Binding258.style("stroke", actorBorder),
      sequenceDiagramFGHM5R23Binding46(
        sequenceDiagramFGHM5R23Input47,
        k(sequenceDiagramFGHM5R23Input46.description),
      )(
        sequenceDiagramFGHM5R23Input46.description,
        sequenceDiagramFGHM5R23Binding258,
        sequenceDiagramFGHM5R23Binding263.x,
        sequenceDiagramFGHM5R23Binding261 +
          35 * sequenceDiagramFGHM5R23Binding260 -
          (look === "neo" ? 10 : 0),
        sequenceDiagramFGHM5R23Binding263.width,
        sequenceDiagramFGHM5R23Binding263.height,
        {
          class: `actor ${sequenceDiagramFGHM5R23Binding14}`,
        },
        sequenceDiagramFGHM5R23Input47,
      ),
      sequenceDiagramFGHM5R23Input46.height
    );
  }, "drawActorTypeActor");
  sequenceDiagramFGHM5R23Binding30 = defineFunctionName(async function (
    sequenceDiagramFGHM5R23Input161,
    sequenceDiagramFGHM5R23Input162,
    sequenceDiagramFGHM5R23Input163,
    sequenceDiagramFGHM5R23Input164,
    sequenceDiagramFGHM5R23Input165,
    sequenceDiagramFGHM5R23Input166,
    sequenceDiagramFGHM5R23Input167,
  ) {
    let sequenceDiagramFGHM5R23Binding436 =
      sequenceDiagramFGHM5R23Input167 ??
      new Map(
        [...sequenceDiagramFGHM5R23Input166.db.getActors().values()].map(
          (item, index) => [item.name, index],
        ),
      );
    switch (sequenceDiagramFGHM5R23Input162.type) {
      case "actor":
        return await sequenceDiagramFGHM5R23Binding29(
          sequenceDiagramFGHM5R23Input161,
          sequenceDiagramFGHM5R23Input162,
          sequenceDiagramFGHM5R23Input163,
          sequenceDiagramFGHM5R23Input164,
          sequenceDiagramFGHM5R23Binding436,
        );
      case "participant":
        return await sequenceDiagramFGHM5R23Binding22(
          sequenceDiagramFGHM5R23Input161,
          sequenceDiagramFGHM5R23Input162,
          sequenceDiagramFGHM5R23Input163,
          sequenceDiagramFGHM5R23Input164,
          sequenceDiagramFGHM5R23Binding436,
        );
      case "boundary":
        return await sequenceDiagramFGHM5R23Binding28(
          sequenceDiagramFGHM5R23Input161,
          sequenceDiagramFGHM5R23Input162,
          sequenceDiagramFGHM5R23Input163,
          sequenceDiagramFGHM5R23Input164,
          sequenceDiagramFGHM5R23Binding436,
        );
      case "control":
        return await sequenceDiagramFGHM5R23Binding25(
          sequenceDiagramFGHM5R23Input161,
          sequenceDiagramFGHM5R23Input162,
          sequenceDiagramFGHM5R23Input163,
          sequenceDiagramFGHM5R23Input164,
          sequenceDiagramFGHM5R23Input165,
          sequenceDiagramFGHM5R23Binding436,
        );
      case "entity":
        return await sequenceDiagramFGHM5R23Binding26(
          sequenceDiagramFGHM5R23Input161,
          sequenceDiagramFGHM5R23Input162,
          sequenceDiagramFGHM5R23Input163,
          sequenceDiagramFGHM5R23Input164,
          sequenceDiagramFGHM5R23Binding436,
        );
      case "database":
        return await sequenceDiagramFGHM5R23Binding27(
          sequenceDiagramFGHM5R23Input161,
          sequenceDiagramFGHM5R23Input162,
          sequenceDiagramFGHM5R23Input163,
          sequenceDiagramFGHM5R23Input164,
          sequenceDiagramFGHM5R23Binding436,
        );
      case "collections":
        return await sequenceDiagramFGHM5R23Binding23(
          sequenceDiagramFGHM5R23Input161,
          sequenceDiagramFGHM5R23Input162,
          sequenceDiagramFGHM5R23Input163,
          sequenceDiagramFGHM5R23Input164,
          sequenceDiagramFGHM5R23Binding436,
        );
      case "queue":
        return await sequenceDiagramFGHM5R23Binding24(
          sequenceDiagramFGHM5R23Input161,
          sequenceDiagramFGHM5R23Input162,
          sequenceDiagramFGHM5R23Input163,
          sequenceDiagramFGHM5R23Input164,
          sequenceDiagramFGHM5R23Binding436,
        );
    }
  }, "drawActor");
  sequenceDiagramFGHM5R23Binding31 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input273,
    sequenceDiagramFGHM5R23Input274,
    sequenceDiagramFGHM5R23Input275,
  ) {
    let sequenceDiagramFGHM5R23Binding498 =
      sequenceDiagramFGHM5R23Input273.append("g");
    sequenceDiagramFGHM5R23Binding35(
      sequenceDiagramFGHM5R23Binding498,
      sequenceDiagramFGHM5R23Input274,
    );
    sequenceDiagramFGHM5R23Input274.name &&
      sequenceDiagramFGHM5R23Binding46(sequenceDiagramFGHM5R23Input275)(
        sequenceDiagramFGHM5R23Input274.name,
        sequenceDiagramFGHM5R23Binding498,
        sequenceDiagramFGHM5R23Input274.x,
        sequenceDiagramFGHM5R23Input274.y +
          sequenceDiagramFGHM5R23Input275.boxTextMargin +
          (sequenceDiagramFGHM5R23Input274.textMaxHeight || 0) / 2,
        sequenceDiagramFGHM5R23Input274.width,
        0,
        {
          class: "text",
        },
        sequenceDiagramFGHM5R23Input275,
      );
    sequenceDiagramFGHM5R23Binding498.lower();
  }, "drawBox");
  sequenceDiagramFGHM5R23Binding32 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input373,
  ) {
    return sequenceDiagramFGHM5R23Input373.append("g");
  }, "anchorElement");
  sequenceDiagramFGHM5R23Binding33 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input170,
    sequenceDiagramFGHM5R23Input171,
    sequenceDiagramFGHM5R23Input172,
    sequenceDiagramFGHM5R23Input173,
    sequenceDiagramFGHM5R23Input174,
    sequenceDiagramFGHM5R23Input175,
    sequenceDiagramFGHM5R23Input176,
  ) {
    let { theme, themeVariables } = sequenceDiagramFGHM5R23Input173,
      { bkgColorArray, borderColorArray, mainBkg } = themeVariables,
      sequenceDiagramFGHM5R23Binding439 = chunkYZCP3GAMS(),
      sequenceDiagramFGHM5R23Binding440 =
        sequenceDiagramFGHM5R23Input171.anchored,
      sequenceDiagramFGHM5R23Binding441 = sequenceDiagramFGHM5R23Input171.actor;
    sequenceDiagramFGHM5R23Binding439.x =
      sequenceDiagramFGHM5R23Input171.startx;
    sequenceDiagramFGHM5R23Binding439.y =
      sequenceDiagramFGHM5R23Input171.starty;
    sequenceDiagramFGHM5R23Binding439.class =
      "activation" + (sequenceDiagramFGHM5R23Input174 % 3);
    sequenceDiagramFGHM5R23Binding439.width =
      sequenceDiagramFGHM5R23Input171.stopx -
      sequenceDiagramFGHM5R23Input171.startx;
    sequenceDiagramFGHM5R23Binding439.height =
      sequenceDiagramFGHM5R23Input172 - sequenceDiagramFGHM5R23Input171.starty;
    let sequenceDiagramFGHM5R23Binding442 = sequenceDiagramFGHM5R23Binding16(
        sequenceDiagramFGHM5R23Binding440,
        sequenceDiagramFGHM5R23Binding439,
      ),
      sequenceDiagramFGHM5R23Binding443 =
        (
          sequenceDiagramFGHM5R23Input176 ??
          new Map(
            [...sequenceDiagramFGHM5R23Input175.db.getActors().values()].map(
              (item, index) => [item.name, index],
            ),
          )
        ).get(sequenceDiagramFGHM5R23Binding441) ?? 0;
    sequenceDiagramFGHM5R23Binding15.has(theme) &&
      (sequenceDiagramFGHM5R23Binding442.style(
        "stroke",
        borderColorArray[
          sequenceDiagramFGHM5R23Binding443 % borderColorArray.length
        ],
      ),
      sequenceDiagramFGHM5R23Binding442.style(
        "fill",
        bkgColorArray[
          sequenceDiagramFGHM5R23Binding443 % borderColorArray.length
        ] ?? mainBkg,
      ));
  }, "drawActivation");
  sequenceDiagramFGHM5R23Binding34 = defineFunctionName(async function (
    sequenceDiagramFGHM5R23Input40,
    sequenceDiagramFGHM5R23Input41,
    sequenceDiagramFGHM5R23Input42,
    sequenceDiagramFGHM5R23Input43,
    sequenceDiagramFGHM5R23Input44,
  ) {
    let {
        boxMargin,
        boxTextMargin,
        labelBoxHeight,
        labelBoxWidth,
        messageFontFamily,
        messageFontSize,
        messageFontWeight,
      } = sequenceDiagramFGHM5R23Input43,
      sequenceDiagramFGHM5R23Binding250 = sequenceDiagramFGHM5R23Input40
        .append("g")
        .attr("data-et", "control-structure")
        .attr("data-id", "i" + sequenceDiagramFGHM5R23Input44.id),
      sequenceDiagramFGHM5R23Binding251 = defineFunctionName(function (
        sequenceDiagramFGHM5R23Input311,
        sequenceDiagramFGHM5R23Input312,
        sequenceDiagramFGHM5R23Input313,
        sequenceDiagramFGHM5R23Input314,
      ) {
        return sequenceDiagramFGHM5R23Binding250
          .append("line")
          .attr("x1", sequenceDiagramFGHM5R23Input311)
          .attr("y1", sequenceDiagramFGHM5R23Input312)
          .attr("x2", sequenceDiagramFGHM5R23Input313)
          .attr("y2", sequenceDiagramFGHM5R23Input314)
          .attr("class", "loopLine");
      }, "drawLoopLine");
    sequenceDiagramFGHM5R23Binding251(
      sequenceDiagramFGHM5R23Input41.startx,
      sequenceDiagramFGHM5R23Input41.starty,
      sequenceDiagramFGHM5R23Input41.stopx,
      sequenceDiagramFGHM5R23Input41.starty,
    );
    sequenceDiagramFGHM5R23Binding251(
      sequenceDiagramFGHM5R23Input41.stopx,
      sequenceDiagramFGHM5R23Input41.starty,
      sequenceDiagramFGHM5R23Input41.stopx,
      sequenceDiagramFGHM5R23Input41.stopy,
    );
    sequenceDiagramFGHM5R23Binding251(
      sequenceDiagramFGHM5R23Input41.startx,
      sequenceDiagramFGHM5R23Input41.stopy,
      sequenceDiagramFGHM5R23Input41.stopx,
      sequenceDiagramFGHM5R23Input41.stopy,
    );
    sequenceDiagramFGHM5R23Binding251(
      sequenceDiagramFGHM5R23Input41.startx,
      sequenceDiagramFGHM5R23Input41.starty,
      sequenceDiagramFGHM5R23Input41.startx,
      sequenceDiagramFGHM5R23Input41.stopy,
    );
    sequenceDiagramFGHM5R23Input41.sections !== undefined &&
      sequenceDiagramFGHM5R23Input41.sections.forEach(function (item) {
        sequenceDiagramFGHM5R23Binding251(
          sequenceDiagramFGHM5R23Input41.startx,
          item.y,
          sequenceDiagramFGHM5R23Input41.stopx,
          item.y,
        ).style("stroke-dasharray", "3, 3");
      });
    let sequenceDiagramFGHM5R23Binding252 = c();
    sequenceDiagramFGHM5R23Binding252.text = sequenceDiagramFGHM5R23Input42;
    sequenceDiagramFGHM5R23Binding252.x = sequenceDiagramFGHM5R23Input41.startx;
    sequenceDiagramFGHM5R23Binding252.y = sequenceDiagramFGHM5R23Input41.starty;
    sequenceDiagramFGHM5R23Binding252.fontFamily = messageFontFamily;
    sequenceDiagramFGHM5R23Binding252.fontSize = messageFontSize;
    sequenceDiagramFGHM5R23Binding252.fontWeight = messageFontWeight;
    sequenceDiagramFGHM5R23Binding252.anchor = "middle";
    sequenceDiagramFGHM5R23Binding252.valign = "middle";
    sequenceDiagramFGHM5R23Binding252.tspan = false;
    sequenceDiagramFGHM5R23Binding252.width = Math.max(labelBoxWidth ?? 0, 50);
    sequenceDiagramFGHM5R23Binding252.height =
      labelBoxHeight +
        (sequenceDiagramFGHM5R23Input43.look === "neo" ? 15 : 0) || 20;
    sequenceDiagramFGHM5R23Binding252.textMargin = boxTextMargin;
    sequenceDiagramFGHM5R23Binding252.class = "labelText";
    be(sequenceDiagramFGHM5R23Binding250, sequenceDiagramFGHM5R23Binding252);
    sequenceDiagramFGHM5R23Binding252 = sequenceDiagramFGHM5R23Binding44();
    sequenceDiagramFGHM5R23Binding252.text =
      sequenceDiagramFGHM5R23Input41.title;
    sequenceDiagramFGHM5R23Binding252.x =
      sequenceDiagramFGHM5R23Input41.startx +
      labelBoxWidth / 2 +
      (sequenceDiagramFGHM5R23Input41.stopx -
        sequenceDiagramFGHM5R23Input41.startx) /
        2;
    sequenceDiagramFGHM5R23Binding252.y =
      sequenceDiagramFGHM5R23Input41.starty + boxMargin + boxTextMargin;
    sequenceDiagramFGHM5R23Binding252.anchor = "middle";
    sequenceDiagramFGHM5R23Binding252.valign = "middle";
    sequenceDiagramFGHM5R23Binding252.textMargin = boxTextMargin;
    sequenceDiagramFGHM5R23Binding252.class = "loopText";
    sequenceDiagramFGHM5R23Binding252.fontFamily = messageFontFamily;
    sequenceDiagramFGHM5R23Binding252.fontSize = messageFontSize;
    sequenceDiagramFGHM5R23Binding252.fontWeight = messageFontWeight;
    sequenceDiagramFGHM5R23Binding252.wrap = true;
    let sequenceDiagramFGHM5R23Binding253 = k(
      sequenceDiagramFGHM5R23Binding252.text,
    )
      ? await sequenceDiagramFGHM5R23Binding18(
          sequenceDiagramFGHM5R23Binding250,
          sequenceDiagramFGHM5R23Binding252,
          sequenceDiagramFGHM5R23Input41,
        )
      : sequenceDiagramFGHM5R23Binding19(
          sequenceDiagramFGHM5R23Binding250,
          sequenceDiagramFGHM5R23Binding252,
        );
    if (sequenceDiagramFGHM5R23Input41.sectionTitles !== undefined) {
      for (let [
        sequenceDiagramFGHM5R23Binding428,
        sequenceDiagramFGHM5R23Binding429,
      ] of Object.entries(sequenceDiagramFGHM5R23Input41.sectionTitles))
        if (sequenceDiagramFGHM5R23Binding429.message) {
          sequenceDiagramFGHM5R23Binding252.text =
            sequenceDiagramFGHM5R23Binding429.message;
          sequenceDiagramFGHM5R23Binding252.x =
            sequenceDiagramFGHM5R23Input41.startx +
            (sequenceDiagramFGHM5R23Input41.stopx -
              sequenceDiagramFGHM5R23Input41.startx) /
              2;
          sequenceDiagramFGHM5R23Binding252.y =
            sequenceDiagramFGHM5R23Input41.sections[
              sequenceDiagramFGHM5R23Binding428
            ].y +
            boxMargin +
            boxTextMargin;
          sequenceDiagramFGHM5R23Binding252.class = "loopText";
          sequenceDiagramFGHM5R23Binding252.anchor = "middle";
          sequenceDiagramFGHM5R23Binding252.valign = "middle";
          sequenceDiagramFGHM5R23Binding252.tspan = false;
          sequenceDiagramFGHM5R23Binding252.fontFamily = messageFontFamily;
          sequenceDiagramFGHM5R23Binding252.fontSize = messageFontSize;
          sequenceDiagramFGHM5R23Binding252.fontWeight = messageFontWeight;
          sequenceDiagramFGHM5R23Binding252.wrap =
            sequenceDiagramFGHM5R23Input41.wrap;
          k(sequenceDiagramFGHM5R23Binding252.text)
            ? ((sequenceDiagramFGHM5R23Input41.starty =
                sequenceDiagramFGHM5R23Input41.sections[
                  sequenceDiagramFGHM5R23Binding428
                ].y),
              await sequenceDiagramFGHM5R23Binding18(
                sequenceDiagramFGHM5R23Binding250,
                sequenceDiagramFGHM5R23Binding252,
                sequenceDiagramFGHM5R23Input41,
              ))
            : sequenceDiagramFGHM5R23Binding19(
                sequenceDiagramFGHM5R23Binding250,
                sequenceDiagramFGHM5R23Binding252,
              );
          let sequenceDiagramFGHM5R23Binding434 = Math.round(
            sequenceDiagramFGHM5R23Binding253
              .map((item) => (item._groups || item)[0][0].getBBox().height)
              .reduce((accumulator, current) => accumulator + current),
          );
          sequenceDiagramFGHM5R23Input41.sections[
            sequenceDiagramFGHM5R23Binding428
          ].height +=
            sequenceDiagramFGHM5R23Binding434 - (boxMargin + boxTextMargin);
        }
    }
    return (
      (sequenceDiagramFGHM5R23Input41.height = Math.round(
        sequenceDiagramFGHM5R23Input41.stopy -
          sequenceDiagramFGHM5R23Input41.starty,
      )),
      sequenceDiagramFGHM5R23Binding250
    );
  }, "drawLoop");
  sequenceDiagramFGHM5R23Binding35 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input377,
    sequenceDiagramFGHM5R23Input378,
  ) {
    n(sequenceDiagramFGHM5R23Input377, sequenceDiagramFGHM5R23Input378);
  }, "drawBackgroundRect");
  sequenceDiagramFGHM5R23Binding36 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input8,
    sequenceDiagramFGHM5R23Input9,
  ) {
    sequenceDiagramFGHM5R23Input8
      .append("defs")
      .append("symbol")
      .attr("id", sequenceDiagramFGHM5R23Input9 + "-database")
      .attr("fill-rule", "evenodd")
      .attr("clip-rule", "evenodd")
      .append("path")
      .attr("transform", "scale(.5)")
      .attr(
        "d",
        "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z",
      );
  }, "insertDatabaseIcon");
  sequenceDiagramFGHM5R23Binding37 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input237,
    sequenceDiagramFGHM5R23Input238,
  ) {
    sequenceDiagramFGHM5R23Input237
      .append("defs")
      .append("symbol")
      .attr("id", sequenceDiagramFGHM5R23Input238 + "-computer")
      .attr("width", "24")
      .attr("height", "24")
      .append("path")
      .attr("transform", "scale(.5)")
      .attr(
        "d",
        "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z",
      );
  }, "insertComputerIcon");
  sequenceDiagramFGHM5R23Binding38 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input203,
    sequenceDiagramFGHM5R23Input204,
  ) {
    sequenceDiagramFGHM5R23Input203
      .append("defs")
      .append("symbol")
      .attr("id", sequenceDiagramFGHM5R23Input204 + "-clock")
      .attr("width", "24")
      .attr("height", "24")
      .append("path")
      .attr("transform", "scale(.5)")
      .attr(
        "d",
        "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z",
      );
  }, "insertClockIcon");
  sequenceDiagramFGHM5R23Binding39 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input259,
    sequenceDiagramFGHM5R23Input260,
  ) {
    sequenceDiagramFGHM5R23Input259
      .append("defs")
      .append("marker")
      .attr("id", sequenceDiagramFGHM5R23Input260 + "-arrowhead")
      .attr("refX", 7.9)
      .attr("refY", 5)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("markerWidth", 12)
      .attr("markerHeight", 12)
      .attr("orient", "auto-start-reverse")
      .append("path")
      .attr("d", "M -1 0 L 10 5 L 0 10 z");
  }, "insertArrowHead");
  sequenceDiagramFGHM5R23Binding40 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input276,
    sequenceDiagramFGHM5R23Input277,
  ) {
    sequenceDiagramFGHM5R23Input276
      .append("defs")
      .append("marker")
      .attr("id", sequenceDiagramFGHM5R23Input277 + "-filled-head")
      .attr("refX", 15.5)
      .attr("refY", 7)
      .attr("markerWidth", 20)
      .attr("markerHeight", 28)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "insertArrowFilledHead");
  sequenceDiagramFGHM5R23Binding41 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input267,
    sequenceDiagramFGHM5R23Input268,
  ) {
    sequenceDiagramFGHM5R23Input267
      .append("defs")
      .append("marker")
      .attr("id", sequenceDiagramFGHM5R23Input268 + "-sequencenumber")
      .attr("refX", 15)
      .attr("refY", 15)
      .attr("markerWidth", 60)
      .attr("markerHeight", 40)
      .attr("orient", "auto")
      .append("circle")
      .attr("cx", 15)
      .attr("cy", 15)
      .attr("r", 6);
  }, "insertSequenceNumber");
  sequenceDiagramFGHM5R23Binding42 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input226,
    sequenceDiagramFGHM5R23Input227,
  ) {
    sequenceDiagramFGHM5R23Input226
      .append("defs")
      .append("marker")
      .attr("id", sequenceDiagramFGHM5R23Input227 + "-crosshead")
      .attr("markerWidth", 15)
      .attr("markerHeight", 8)
      .attr("orient", "auto")
      .attr("refX", 4)
      .attr("refY", 4.5)
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "#000000")
      .style("stroke-dasharray", "0, 0")
      .attr("stroke-width", "1pt")
      .attr("d", "M 1,2 L 6,7 M 6,2 L 1,7");
  }, "insertArrowCrossHead");
  sequenceDiagramFGHM5R23Binding43 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input224,
    sequenceDiagramFGHM5R23Input225,
  ) {
    let { theme } = sequenceDiagramFGHM5R23Input225;
    sequenceDiagramFGHM5R23Input224
      .append("defs")
      .append("filter")
      .attr("id", "drop-shadow")
      .attr("height", "130%")
      .attr("width", "130%")
      .append("feDropShadow")
      .attr("dx", "4")
      .attr("dy", "4")
      .attr("stdDeviation", 0)
      .attr("flood-opacity", "0.06")
      .attr(
        "flood-color",
        `${theme === "redux" || theme === "redux-color" ? "#000000" : "#FFFFFF"}`,
      );
  }, "insertDropShadow");
  sequenceDiagramFGHM5R23Binding44 = defineFunctionName(function () {
    return {
      x: 0,
      y: 0,
      fill: undefined,
      anchor: undefined,
      style: "#666",
      width: undefined,
      height: undefined,
      textMargin: 0,
      rx: 0,
      ry: 0,
      tspan: true,
      valign: undefined,
    };
  }, "getTextObj");
  sequenceDiagramFGHM5R23Binding45 = defineFunctionName(function () {
    return {
      x: 0,
      y: 0,
      fill: "#EDF2AE",
      stroke: "#666",
      width: 100,
      anchor: "start",
      height: 100,
      rx: 0,
      ry: 0,
    };
  }, "getNoteRect");
  sequenceDiagramFGHM5R23Binding46 = (function () {
    function sequenceDiagramFGHM5R23Helper10(
      sequenceDiagramFGHM5R23Input295,
      sequenceDiagramFGHM5R23Input296,
      sequenceDiagramFGHM5R23Input297,
      sequenceDiagramFGHM5R23Input298,
      sequenceDiagramFGHM5R23Input299,
      sequenceDiagramFGHM5R23Input300,
      sequenceDiagramFGHM5R23Input301,
    ) {
      sequenceDiagramFGHM5R23Helper14(
        sequenceDiagramFGHM5R23Input296
          .append("text")
          .attr(
            "x",
            sequenceDiagramFGHM5R23Input297 +
              sequenceDiagramFGHM5R23Input299 / 2,
          )
          .attr(
            "y",
            sequenceDiagramFGHM5R23Input298 +
              sequenceDiagramFGHM5R23Input300 / 2 +
              5,
          )
          .style("text-anchor", "middle")
          .text(sequenceDiagramFGHM5R23Input295),
        sequenceDiagramFGHM5R23Input301,
      );
    }
    defineFunctionName(sequenceDiagramFGHM5R23Helper10, "byText");
    function sequenceDiagramFGHM5R23Helper11(
      sequenceDiagramFGHM5R23Input143,
      sequenceDiagramFGHM5R23Input144,
      sequenceDiagramFGHM5R23Input145,
      sequenceDiagramFGHM5R23Input146,
      sequenceDiagramFGHM5R23Input147,
      sequenceDiagramFGHM5R23Input148,
      sequenceDiagramFGHM5R23Input149,
      sequenceDiagramFGHM5R23Input150,
    ) {
      let { actorFontSize, actorFontFamily, actorFontWeight } =
          sequenceDiagramFGHM5R23Input150,
        [sequenceDiagramFGHM5R23Binding425, sequenceDiagramFGHM5R23Binding426] =
          chunk5PVQY5BWP(actorFontSize),
        sequenceDiagramFGHM5R23Binding427 =
          sequenceDiagramFGHM5R23Input143.split(s.lineBreakRegex);
      for (
        let sequenceDiagramFGHM5R23Binding437 = 0;
        sequenceDiagramFGHM5R23Binding437 <
        sequenceDiagramFGHM5R23Binding427.length;
        sequenceDiagramFGHM5R23Binding437++
      ) {
        let sequenceDiagramFGHM5R23Binding447 =
            sequenceDiagramFGHM5R23Binding437 *
              sequenceDiagramFGHM5R23Binding425 -
            (sequenceDiagramFGHM5R23Binding425 *
              (sequenceDiagramFGHM5R23Binding427.length - 1)) /
              2,
          sequenceDiagramFGHM5R23Binding448 = sequenceDiagramFGHM5R23Input144
            .append("text")
            .attr(
              "x",
              sequenceDiagramFGHM5R23Input145 +
                sequenceDiagramFGHM5R23Input147 / 2,
            )
            .attr("y", sequenceDiagramFGHM5R23Input146)
            .style("text-anchor", "middle")
            .style("font-size", sequenceDiagramFGHM5R23Binding426)
            .style("font-weight", actorFontWeight)
            .style("font-family", actorFontFamily);
        sequenceDiagramFGHM5R23Binding448
          .append("tspan")
          .attr(
            "x",
            sequenceDiagramFGHM5R23Input145 +
              sequenceDiagramFGHM5R23Input147 / 2,
          )
          .attr("dy", sequenceDiagramFGHM5R23Binding447)
          .text(
            sequenceDiagramFGHM5R23Binding427[
              sequenceDiagramFGHM5R23Binding437
            ],
          );
        sequenceDiagramFGHM5R23Binding448
          .attr(
            "y",
            sequenceDiagramFGHM5R23Input146 +
              sequenceDiagramFGHM5R23Input148 / 2,
          )
          .attr("dominant-baseline", "central")
          .attr("alignment-baseline", "central");
        sequenceDiagramFGHM5R23Helper14(
          sequenceDiagramFGHM5R23Binding448,
          sequenceDiagramFGHM5R23Input149,
        );
      }
    }
    defineFunctionName(sequenceDiagramFGHM5R23Helper11, "byTspan");
    function sequenceDiagramFGHM5R23Helper12(
      sequenceDiagramFGHM5R23Input187,
      sequenceDiagramFGHM5R23Input188,
      sequenceDiagramFGHM5R23Input189,
      sequenceDiagramFGHM5R23Input190,
      sequenceDiagramFGHM5R23Input191,
      sequenceDiagramFGHM5R23Input192,
      sequenceDiagramFGHM5R23Input193,
      sequenceDiagramFGHM5R23Input194,
    ) {
      let sequenceDiagramFGHM5R23Binding449 =
          sequenceDiagramFGHM5R23Input188.append("switch"),
        sequenceDiagramFGHM5R23Binding450 = sequenceDiagramFGHM5R23Binding449
          .append("foreignObject")
          .attr("x", sequenceDiagramFGHM5R23Input189)
          .attr("y", sequenceDiagramFGHM5R23Input190)
          .attr("width", sequenceDiagramFGHM5R23Input191)
          .attr("height", sequenceDiagramFGHM5R23Input192)
          .append("xhtml:div")
          .style("display", "table")
          .style("height", "100%")
          .style("width", "100%");
      sequenceDiagramFGHM5R23Binding450
        .append("div")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(sequenceDiagramFGHM5R23Input187);
      sequenceDiagramFGHM5R23Helper11(
        sequenceDiagramFGHM5R23Input187,
        sequenceDiagramFGHM5R23Binding449,
        sequenceDiagramFGHM5R23Input189,
        sequenceDiagramFGHM5R23Input190,
        sequenceDiagramFGHM5R23Input191,
        sequenceDiagramFGHM5R23Input192,
        sequenceDiagramFGHM5R23Input193,
        sequenceDiagramFGHM5R23Input194,
      );
      sequenceDiagramFGHM5R23Helper14(
        sequenceDiagramFGHM5R23Binding450,
        sequenceDiagramFGHM5R23Input193,
      );
    }
    defineFunctionName(sequenceDiagramFGHM5R23Helper12, "byFo");
    async function sequenceDiagramFGHM5R23Helper13(
      sequenceDiagramFGHM5R23Input179,
      sequenceDiagramFGHM5R23Input180,
      sequenceDiagramFGHM5R23Input181,
      sequenceDiagramFGHM5R23Input182,
      sequenceDiagramFGHM5R23Input183,
      sequenceDiagramFGHM5R23Input184,
      sequenceDiagramFGHM5R23Input185,
      sequenceDiagramFGHM5R23Input186,
    ) {
      let sequenceDiagramFGHM5R23Binding444 = await i(
          sequenceDiagramFGHM5R23Input179,
          y(),
        ),
        sequenceDiagramFGHM5R23Binding445 =
          sequenceDiagramFGHM5R23Input180.append("switch"),
        sequenceDiagramFGHM5R23Binding446 = sequenceDiagramFGHM5R23Binding445
          .append("foreignObject")
          .attr(
            "x",
            sequenceDiagramFGHM5R23Input181 +
              sequenceDiagramFGHM5R23Input183 / 2 -
              sequenceDiagramFGHM5R23Binding444.width / 2,
          )
          .attr(
            "y",
            sequenceDiagramFGHM5R23Input182 +
              sequenceDiagramFGHM5R23Input184 / 2 -
              sequenceDiagramFGHM5R23Binding444.height / 2,
          )
          .attr("width", sequenceDiagramFGHM5R23Binding444.width)
          .attr("height", sequenceDiagramFGHM5R23Binding444.height)
          .append("xhtml:div")
          .style("height", "100%")
          .style("width", "100%");
      sequenceDiagramFGHM5R23Binding446
        .append("div")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .html(await F(sequenceDiagramFGHM5R23Input179, y()));
      sequenceDiagramFGHM5R23Helper11(
        sequenceDiagramFGHM5R23Input179,
        sequenceDiagramFGHM5R23Binding445,
        sequenceDiagramFGHM5R23Input181,
        sequenceDiagramFGHM5R23Input182,
        sequenceDiagramFGHM5R23Input183,
        sequenceDiagramFGHM5R23Input184,
        sequenceDiagramFGHM5R23Input185,
        sequenceDiagramFGHM5R23Input186,
      );
      sequenceDiagramFGHM5R23Helper14(
        sequenceDiagramFGHM5R23Binding446,
        sequenceDiagramFGHM5R23Input185,
      );
    }
    defineFunctionName(sequenceDiagramFGHM5R23Helper13, "byKatex");
    function sequenceDiagramFGHM5R23Helper14(
      sequenceDiagramFGHM5R23Input352,
      sequenceDiagramFGHM5R23Input353,
    ) {
      for (let sequenceDiagramFGHM5R23Binding580 in sequenceDiagramFGHM5R23Input353)
        sequenceDiagramFGHM5R23Input353.hasOwnProperty(
          sequenceDiagramFGHM5R23Binding580,
        ) &&
          sequenceDiagramFGHM5R23Input352.attr(
            sequenceDiagramFGHM5R23Binding580,
            sequenceDiagramFGHM5R23Input353[sequenceDiagramFGHM5R23Binding580],
          );
    }
    return (
      defineFunctionName(sequenceDiagramFGHM5R23Helper14, "_setTextAttrs"),
      function (
        sequenceDiagramFGHM5R23Input318,
        sequenceDiagramFGHM5R23Input319 = false,
      ) {
        return sequenceDiagramFGHM5R23Input319
          ? sequenceDiagramFGHM5R23Helper13
          : sequenceDiagramFGHM5R23Input318.textPlacement === "fo"
            ? sequenceDiagramFGHM5R23Helper12
            : sequenceDiagramFGHM5R23Input318.textPlacement === "old"
              ? sequenceDiagramFGHM5R23Helper10
              : sequenceDiagramFGHM5R23Helper11;
      }
    );
  })();
  sequenceDiagramFGHM5R23Binding47 = (function () {
    function sequenceDiagramFGHM5R23Helper15(
      sequenceDiagramFGHM5R23Input304,
      sequenceDiagramFGHM5R23Input305,
      sequenceDiagramFGHM5R23Input306,
      sequenceDiagramFGHM5R23Input307,
      sequenceDiagramFGHM5R23Input308,
      sequenceDiagramFGHM5R23Input309,
      sequenceDiagramFGHM5R23Input310,
    ) {
      sequenceDiagramFGHM5R23Helper18(
        sequenceDiagramFGHM5R23Input305
          .append("text")
          .attr("x", sequenceDiagramFGHM5R23Input306)
          .attr("y", sequenceDiagramFGHM5R23Input307)
          .style("text-anchor", "start")
          .text(sequenceDiagramFGHM5R23Input304),
        sequenceDiagramFGHM5R23Input310,
      );
    }
    defineFunctionName(sequenceDiagramFGHM5R23Helper15, "byText");
    function sequenceDiagramFGHM5R23Helper16(
      sequenceDiagramFGHM5R23Input152,
      sequenceDiagramFGHM5R23Input153,
      sequenceDiagramFGHM5R23Input154,
      sequenceDiagramFGHM5R23Input155,
      sequenceDiagramFGHM5R23Input156,
      sequenceDiagramFGHM5R23Input157,
      sequenceDiagramFGHM5R23Input158,
      sequenceDiagramFGHM5R23Input159,
    ) {
      let { actorFontSize, actorFontFamily, actorFontWeight } =
          sequenceDiagramFGHM5R23Input159,
        sequenceDiagramFGHM5R23Binding433 =
          sequenceDiagramFGHM5R23Input152.split(s.lineBreakRegex);
      for (
        let sequenceDiagramFGHM5R23Binding453 = 0;
        sequenceDiagramFGHM5R23Binding453 <
        sequenceDiagramFGHM5R23Binding433.length;
        sequenceDiagramFGHM5R23Binding453++
      ) {
        let sequenceDiagramFGHM5R23Binding459 =
            sequenceDiagramFGHM5R23Binding453 * actorFontSize -
            (actorFontSize * (sequenceDiagramFGHM5R23Binding433.length - 1)) /
              2,
          sequenceDiagramFGHM5R23Binding460 = sequenceDiagramFGHM5R23Input153
            .append("text")
            .attr("x", sequenceDiagramFGHM5R23Input154)
            .attr("y", sequenceDiagramFGHM5R23Input155)
            .style("text-anchor", "start")
            .style("font-size", actorFontSize)
            .style("font-weight", actorFontWeight)
            .style("font-family", actorFontFamily);
        sequenceDiagramFGHM5R23Binding460
          .append("tspan")
          .attr("x", sequenceDiagramFGHM5R23Input154)
          .attr("dy", sequenceDiagramFGHM5R23Binding459)
          .text(
            sequenceDiagramFGHM5R23Binding433[
              sequenceDiagramFGHM5R23Binding453
            ],
          );
        sequenceDiagramFGHM5R23Binding460
          .attr(
            "y",
            sequenceDiagramFGHM5R23Input155 +
              sequenceDiagramFGHM5R23Input157 / 2,
          )
          .attr("dominant-baseline", "central")
          .attr("alignment-baseline", "central");
        sequenceDiagramFGHM5R23Helper18(
          sequenceDiagramFGHM5R23Binding460,
          sequenceDiagramFGHM5R23Input158,
        );
      }
    }
    defineFunctionName(sequenceDiagramFGHM5R23Helper16, "byTspan");
    function sequenceDiagramFGHM5R23Helper17(
      sequenceDiagramFGHM5R23Input195,
      sequenceDiagramFGHM5R23Input196,
      sequenceDiagramFGHM5R23Input197,
      sequenceDiagramFGHM5R23Input198,
      sequenceDiagramFGHM5R23Input199,
      sequenceDiagramFGHM5R23Input200,
      sequenceDiagramFGHM5R23Input201,
      sequenceDiagramFGHM5R23Input202,
    ) {
      let sequenceDiagramFGHM5R23Binding451 =
          sequenceDiagramFGHM5R23Input196.append("switch"),
        sequenceDiagramFGHM5R23Binding452 = sequenceDiagramFGHM5R23Binding451
          .append("foreignObject")
          .attr("x", sequenceDiagramFGHM5R23Input197)
          .attr("y", sequenceDiagramFGHM5R23Input198)
          .attr("width", sequenceDiagramFGHM5R23Input199)
          .attr("height", sequenceDiagramFGHM5R23Input200)
          .append("xhtml:div")
          .style("display", "table")
          .style("height", "100%")
          .style("width", "100%");
      sequenceDiagramFGHM5R23Binding452
        .append("div")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(sequenceDiagramFGHM5R23Input195);
      sequenceDiagramFGHM5R23Helper16(
        sequenceDiagramFGHM5R23Input195,
        sequenceDiagramFGHM5R23Binding451,
        sequenceDiagramFGHM5R23Input197,
        sequenceDiagramFGHM5R23Input198,
        sequenceDiagramFGHM5R23Input199,
        sequenceDiagramFGHM5R23Input200,
        sequenceDiagramFGHM5R23Input201,
        sequenceDiagramFGHM5R23Input202,
      );
      sequenceDiagramFGHM5R23Helper18(
        sequenceDiagramFGHM5R23Binding452,
        sequenceDiagramFGHM5R23Input201,
      );
    }
    defineFunctionName(sequenceDiagramFGHM5R23Helper17, "byFo");
    function sequenceDiagramFGHM5R23Helper18(
      sequenceDiagramFGHM5R23Input354,
      sequenceDiagramFGHM5R23Input355,
    ) {
      for (let sequenceDiagramFGHM5R23Binding581 in sequenceDiagramFGHM5R23Input355)
        sequenceDiagramFGHM5R23Input355.hasOwnProperty(
          sequenceDiagramFGHM5R23Binding581,
        ) &&
          sequenceDiagramFGHM5R23Input354.attr(
            sequenceDiagramFGHM5R23Binding581,
            sequenceDiagramFGHM5R23Input355[sequenceDiagramFGHM5R23Binding581],
          );
    }
    return (
      defineFunctionName(sequenceDiagramFGHM5R23Helper18, "_setTextAttrs"),
      function (sequenceDiagramFGHM5R23Input326) {
        return sequenceDiagramFGHM5R23Input326.textPlacement === "fo"
          ? sequenceDiagramFGHM5R23Helper17
          : sequenceDiagramFGHM5R23Input326.textPlacement === "old"
            ? sequenceDiagramFGHM5R23Helper15
            : sequenceDiagramFGHM5R23Helper16;
      }
    );
  })();
  sequenceDiagramFGHM5R23Binding48 = {
    drawRect: sequenceDiagramFGHM5R23Binding16,
    drawText: sequenceDiagramFGHM5R23Binding19,
    drawLabel: be,
    drawActor: sequenceDiagramFGHM5R23Binding30,
    drawBox: sequenceDiagramFGHM5R23Binding31,
    drawPopup: _e,
    anchorElement: sequenceDiagramFGHM5R23Binding32,
    drawActivation: sequenceDiagramFGHM5R23Binding33,
    drawLoop: sequenceDiagramFGHM5R23Binding34,
    drawBackgroundRect: sequenceDiagramFGHM5R23Binding35,
    insertArrowHead: sequenceDiagramFGHM5R23Binding39,
    insertArrowFilledHead: sequenceDiagramFGHM5R23Binding40,
    insertSequenceNumber: sequenceDiagramFGHM5R23Binding41,
    insertArrowCrossHead: sequenceDiagramFGHM5R23Binding42,
    insertDatabaseIcon: sequenceDiagramFGHM5R23Binding36,
    insertComputerIcon: sequenceDiagramFGHM5R23Binding37,
    insertClockIcon: sequenceDiagramFGHM5R23Binding38,
    getTextObj: sequenceDiagramFGHM5R23Binding44,
    getNoteRect: sequenceDiagramFGHM5R23Binding45,
    fixLifeLineHeights: sequenceDiagramFGHM5R23Binding21,
    sanitizeUrl: sequenceDiagramFGHM5R23Binding1.sanitizeUrl,
    insertDropShadow: sequenceDiagramFGHM5R23Binding43,
    insertSolidTopArrowHead: defineFunctionName(function (
      sequenceDiagramFGHM5R23Input242,
      sequenceDiagramFGHM5R23Input243,
    ) {
      sequenceDiagramFGHM5R23Input242
        .append("defs")
        .append("marker")
        .attr("id", sequenceDiagramFGHM5R23Input243 + "-solidTopArrowHead")
        .attr("refX", 7.9)
        .attr("refY", 7.25)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 12)
        .attr("markerHeight", 12)
        .attr("orient", "auto-start-reverse")
        .append("path")
        .attr("d", "M 0 0 L 10 8 L 0 8 z");
    }, "insertSolidTopArrowHead"),
    insertSolidBottomArrowHead: defineFunctionName(function (
      sequenceDiagramFGHM5R23Input240,
      sequenceDiagramFGHM5R23Input241,
    ) {
      sequenceDiagramFGHM5R23Input240
        .append("defs")
        .append("marker")
        .attr("id", sequenceDiagramFGHM5R23Input241 + "-solidBottomArrowHead")
        .attr("refX", 7.9)
        .attr("refY", 0.75)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 12)
        .attr("markerHeight", 12)
        .attr("orient", "auto-start-reverse")
        .append("path")
        .attr("d", "M 0 0 L 10 0 L 0 8 z");
    }, "insertSolidBottomArrowHead"),
    insertStickTopArrowHead: defineFunctionName(function (
      sequenceDiagramFGHM5R23Input211,
      sequenceDiagramFGHM5R23Input212,
    ) {
      sequenceDiagramFGHM5R23Input211
        .append("defs")
        .append("marker")
        .attr("id", sequenceDiagramFGHM5R23Input212 + "-stickTopArrowHead")
        .attr("refX", 7.5)
        .attr("refY", 7)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 12)
        .attr("markerHeight", 12)
        .attr("orient", "auto-start-reverse")
        .append("path")
        .attr("d", "M 0 0 L 7 7")
        .attr("stroke", "black")
        .attr("stroke-width", 1.5)
        .attr("fill", "none");
    }, "insertStickTopArrowHead"),
    insertStickBottomArrowHead: defineFunctionName(function (
      sequenceDiagramFGHM5R23Input209,
      sequenceDiagramFGHM5R23Input210,
    ) {
      sequenceDiagramFGHM5R23Input209
        .append("defs")
        .append("marker")
        .attr("id", sequenceDiagramFGHM5R23Input210 + "-stickBottomArrowHead")
        .attr("refX", 7.5)
        .attr("refY", 0)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 12)
        .attr("markerHeight", 12)
        .attr("orient", "auto-start-reverse")
        .append("path")
        .attr("d", "M 0 7 L 7 0")
        .attr("stroke", "black")
        .attr("stroke-width", 1.5)
        .attr("fill", "none");
    }, "insertStickBottomArrowHead"),
  };
  sequenceDiagramFGHM5R23Binding49 = {};
  sequenceDiagramFGHM5R23Binding50 = {
    data: {
      startx: undefined,
      stopx: undefined,
      starty: undefined,
      stopy: undefined,
    },
    verticalPos: 0,
    sequenceItems: [],
    activations: [],
    models: {
      getHeight: defineFunctionName(function () {
        return (
          Math.max.apply(
            null,
            this.actors.length === 0
              ? [0]
              : this.actors.map((item) => item.height || 0),
          ) +
          (this.loops.length === 0
            ? 0
            : this.loops
                .map((item) => item.height || 0)
                .reduce((accumulator, current) => accumulator + current)) +
          (this.messages.length === 0
            ? 0
            : this.messages
                .map((item) => item.height || 0)
                .reduce((accumulator, current) => accumulator + current)) +
          (this.notes.length === 0
            ? 0
            : this.notes
                .map((item) => item.height || 0)
                .reduce((accumulator, current) => accumulator + current))
        );
      }, "getHeight"),
      clear: defineFunctionName(function () {
        this.actors = [];
        this.boxes = [];
        this.loops = [];
        this.messages = [];
        this.notes = [];
      }, "clear"),
      addBox: defineFunctionName(function (sequenceDiagramFGHM5R23Input368) {
        this.boxes.push(sequenceDiagramFGHM5R23Input368);
      }, "addBox"),
      addActor: defineFunctionName(function (sequenceDiagramFGHM5R23Input367) {
        this.actors.push(sequenceDiagramFGHM5R23Input367);
      }, "addActor"),
      addLoop: defineFunctionName(function (sequenceDiagramFGHM5R23Input369) {
        this.loops.push(sequenceDiagramFGHM5R23Input369);
      }, "addLoop"),
      addMessage: defineFunctionName(function (
        sequenceDiagramFGHM5R23Input366,
      ) {
        this.messages.push(sequenceDiagramFGHM5R23Input366);
      }, "addMessage"),
      addNote: defineFunctionName(function (sequenceDiagramFGHM5R23Input370) {
        this.notes.push(sequenceDiagramFGHM5R23Input370);
      }, "addNote"),
      lastActor: defineFunctionName(function () {
        return this.actors[this.actors.length - 1];
      }, "lastActor"),
      lastLoop: defineFunctionName(function () {
        return this.loops[this.loops.length - 1];
      }, "lastLoop"),
      lastMessage: defineFunctionName(function () {
        return this.messages[this.messages.length - 1];
      }, "lastMessage"),
      lastNote: defineFunctionName(function () {
        return this.notes[this.notes.length - 1];
      }, "lastNote"),
      actors: [],
      boxes: [],
      loops: [],
      messages: [],
      notes: [],
    },
    init: defineFunctionName(function () {
      this.sequenceItems = [];
      this.activations = [];
      this.models.clear();
      this.data = {
        startx: undefined,
        stopx: undefined,
        starty: undefined,
        stopy: undefined,
      };
      this.verticalPos = 0;
      $e(b());
    }, "init"),
    updateVal: defineFunctionName(function (
      sequenceDiagramFGHM5R23Input356,
      sequenceDiagramFGHM5R23Input357,
      sequenceDiagramFGHM5R23Input358,
      sequenceDiagramFGHM5R23Input359,
    ) {
      sequenceDiagramFGHM5R23Input356[sequenceDiagramFGHM5R23Input357] ===
      undefined
        ? (sequenceDiagramFGHM5R23Input356[sequenceDiagramFGHM5R23Input357] =
            sequenceDiagramFGHM5R23Input358)
        : (sequenceDiagramFGHM5R23Input356[sequenceDiagramFGHM5R23Input357] =
            sequenceDiagramFGHM5R23Input359(
              sequenceDiagramFGHM5R23Input358,
              sequenceDiagramFGHM5R23Input356[sequenceDiagramFGHM5R23Input357],
            ));
    }, "updateVal"),
    updateBounds: defineFunctionName(function (
      sequenceDiagramFGHM5R23Input130,
      sequenceDiagramFGHM5R23Input131,
      sequenceDiagramFGHM5R23Input132,
      sequenceDiagramFGHM5R23Input133,
    ) {
      let sequenceDiagramFGHM5R23Binding409 = this,
        sequenceDiagramFGHM5R23Binding410 = 0;
      function sequenceDiagramFGHM5R23Helper21(
        sequenceDiagramFGHM5R23Input151,
      ) {
        return defineFunctionName(function (sequenceDiagramFGHM5R23Input160) {
          sequenceDiagramFGHM5R23Binding410++;
          let sequenceDiagramFGHM5R23Binding435 =
            sequenceDiagramFGHM5R23Binding409.sequenceItems.length -
            sequenceDiagramFGHM5R23Binding410 +
            1;
          sequenceDiagramFGHM5R23Binding409.updateVal(
            sequenceDiagramFGHM5R23Input160,
            "starty",
            sequenceDiagramFGHM5R23Input131 -
              sequenceDiagramFGHM5R23Binding435 *
                sequenceDiagramFGHM5R23Binding49.boxMargin,
            Math.min,
          );
          sequenceDiagramFGHM5R23Binding409.updateVal(
            sequenceDiagramFGHM5R23Input160,
            "stopy",
            sequenceDiagramFGHM5R23Input133 +
              sequenceDiagramFGHM5R23Binding435 *
                sequenceDiagramFGHM5R23Binding49.boxMargin,
            Math.max,
          );
          sequenceDiagramFGHM5R23Binding409.updateVal(
            sequenceDiagramFGHM5R23Binding50.data,
            "startx",
            sequenceDiagramFGHM5R23Input130 -
              sequenceDiagramFGHM5R23Binding435 *
                sequenceDiagramFGHM5R23Binding49.boxMargin,
            Math.min,
          );
          sequenceDiagramFGHM5R23Binding409.updateVal(
            sequenceDiagramFGHM5R23Binding50.data,
            "stopx",
            sequenceDiagramFGHM5R23Input132 +
              sequenceDiagramFGHM5R23Binding435 *
                sequenceDiagramFGHM5R23Binding49.boxMargin,
            Math.max,
          );
          sequenceDiagramFGHM5R23Input151 !== "activation" &&
            (sequenceDiagramFGHM5R23Binding409.updateVal(
              sequenceDiagramFGHM5R23Input160,
              "startx",
              sequenceDiagramFGHM5R23Input130 -
                sequenceDiagramFGHM5R23Binding435 *
                  sequenceDiagramFGHM5R23Binding49.boxMargin,
              Math.min,
            ),
            sequenceDiagramFGHM5R23Binding409.updateVal(
              sequenceDiagramFGHM5R23Input160,
              "stopx",
              sequenceDiagramFGHM5R23Input132 +
                sequenceDiagramFGHM5R23Binding435 *
                  sequenceDiagramFGHM5R23Binding49.boxMargin,
              Math.max,
            ),
            sequenceDiagramFGHM5R23Binding409.updateVal(
              sequenceDiagramFGHM5R23Binding50.data,
              "starty",
              sequenceDiagramFGHM5R23Input131 -
                sequenceDiagramFGHM5R23Binding435 *
                  sequenceDiagramFGHM5R23Binding49.boxMargin,
              Math.min,
            ),
            sequenceDiagramFGHM5R23Binding409.updateVal(
              sequenceDiagramFGHM5R23Binding50.data,
              "stopy",
              sequenceDiagramFGHM5R23Input133 +
                sequenceDiagramFGHM5R23Binding435 *
                  sequenceDiagramFGHM5R23Binding49.boxMargin,
              Math.max,
            ));
        }, "updateItemBounds");
      }
      defineFunctionName(sequenceDiagramFGHM5R23Helper21, "updateFn");
      this.sequenceItems.forEach(sequenceDiagramFGHM5R23Helper21());
      this.activations.forEach(sequenceDiagramFGHM5R23Helper21("activation"));
    }, "updateBounds"),
    insert: defineFunctionName(function (
      sequenceDiagramFGHM5R23Input244,
      sequenceDiagramFGHM5R23Input245,
      sequenceDiagramFGHM5R23Input246,
      sequenceDiagramFGHM5R23Input247,
    ) {
      let sequenceDiagramFGHM5R23Binding484 = s.getMin(
          sequenceDiagramFGHM5R23Input244,
          sequenceDiagramFGHM5R23Input246,
        ),
        sequenceDiagramFGHM5R23Binding485 = s.getMax(
          sequenceDiagramFGHM5R23Input244,
          sequenceDiagramFGHM5R23Input246,
        ),
        sequenceDiagramFGHM5R23Binding486 = s.getMin(
          sequenceDiagramFGHM5R23Input245,
          sequenceDiagramFGHM5R23Input247,
        ),
        sequenceDiagramFGHM5R23Binding487 = s.getMax(
          sequenceDiagramFGHM5R23Input245,
          sequenceDiagramFGHM5R23Input247,
        );
      this.updateVal(
        sequenceDiagramFGHM5R23Binding50.data,
        "startx",
        sequenceDiagramFGHM5R23Binding484,
        Math.min,
      );
      this.updateVal(
        sequenceDiagramFGHM5R23Binding50.data,
        "starty",
        sequenceDiagramFGHM5R23Binding486,
        Math.min,
      );
      this.updateVal(
        sequenceDiagramFGHM5R23Binding50.data,
        "stopx",
        sequenceDiagramFGHM5R23Binding485,
        Math.max,
      );
      this.updateVal(
        sequenceDiagramFGHM5R23Binding50.data,
        "stopy",
        sequenceDiagramFGHM5R23Binding487,
        Math.max,
      );
      this.updateBounds(
        sequenceDiagramFGHM5R23Binding484,
        sequenceDiagramFGHM5R23Binding486,
        sequenceDiagramFGHM5R23Binding485,
        sequenceDiagramFGHM5R23Binding487,
      );
    }, "insert"),
    newActivation: defineFunctionName(function (
      sequenceDiagramFGHM5R23Input249,
      sequenceDiagramFGHM5R23Input250,
      sequenceDiagramFGHM5R23Input251,
    ) {
      let sequenceDiagramFGHM5R23Binding489 =
          sequenceDiagramFGHM5R23Input251.get(
            sequenceDiagramFGHM5R23Input249.from,
          ),
        sequenceDiagramFGHM5R23Binding490 =
          sequenceDiagramFGHM5R23Binding59(sequenceDiagramFGHM5R23Input249.from)
            .length || 0,
        sequenceDiagramFGHM5R23Binding491 =
          sequenceDiagramFGHM5R23Binding489.x +
          sequenceDiagramFGHM5R23Binding489.width / 2 +
          ((sequenceDiagramFGHM5R23Binding490 - 1) *
            sequenceDiagramFGHM5R23Binding49.activationWidth) /
            2;
      this.activations.push({
        startx: sequenceDiagramFGHM5R23Binding491,
        starty: this.verticalPos + 2,
        stopx:
          sequenceDiagramFGHM5R23Binding491 +
          sequenceDiagramFGHM5R23Binding49.activationWidth,
        stopy: undefined,
        actor: sequenceDiagramFGHM5R23Input249.from,
        anchored: sequenceDiagramFGHM5R23Binding48.anchorElement(
          sequenceDiagramFGHM5R23Input250,
        ),
      });
    }, "newActivation"),
    endActivation: defineFunctionName(function (
      sequenceDiagramFGHM5R23Input320,
    ) {
      let sequenceDiagramFGHM5R23Binding533 = this.activations
        .map(function (item) {
          return item.actor;
        })
        .lastIndexOf(sequenceDiagramFGHM5R23Input320.from);
      return this.activations.splice(sequenceDiagramFGHM5R23Binding533, 1)[0];
    }, "endActivation"),
    createLoop: defineFunctionName(function (
      sequenceDiagramFGHM5R23Input269 = {
        message: undefined,
        wrap: false,
        width: undefined,
      },
      sequenceDiagramFGHM5R23Input270,
    ) {
      return {
        startx: undefined,
        starty: this.verticalPos,
        stopx: undefined,
        stopy: undefined,
        title: sequenceDiagramFGHM5R23Input269.message,
        wrap: sequenceDiagramFGHM5R23Input269.wrap,
        width: sequenceDiagramFGHM5R23Input269.width,
        height: 0,
        fill: sequenceDiagramFGHM5R23Input270,
      };
    }, "createLoop"),
    newLoop: defineFunctionName(function (
      sequenceDiagramFGHM5R23Input327 = {
        message: undefined,
        wrap: false,
        width: undefined,
      },
      sequenceDiagramFGHM5R23Input328,
    ) {
      this.sequenceItems.push(
        this.createLoop(
          sequenceDiagramFGHM5R23Input327,
          sequenceDiagramFGHM5R23Input328,
        ),
      );
    }, "newLoop"),
    endLoop: defineFunctionName(function () {
      return this.sequenceItems.pop();
    }, "endLoop"),
    isLoopOverlap: defineFunctionName(function () {
      return this.sequenceItems.length
        ? this.sequenceItems[this.sequenceItems.length - 1].overlap
        : false;
    }, "isLoopOverlap"),
    addSectionToLoop: defineFunctionName(function (
      sequenceDiagramFGHM5R23Input286,
    ) {
      let sequenceDiagramFGHM5R23Binding511 = this.sequenceItems.pop();
      sequenceDiagramFGHM5R23Binding511.sections =
        sequenceDiagramFGHM5R23Binding511.sections || [];
      sequenceDiagramFGHM5R23Binding511.sectionTitles =
        sequenceDiagramFGHM5R23Binding511.sectionTitles || [];
      sequenceDiagramFGHM5R23Binding511.sections.push({
        y: sequenceDiagramFGHM5R23Binding50.getVerticalPos(),
        height: 0,
      });
      sequenceDiagramFGHM5R23Binding511.sectionTitles.push(
        sequenceDiagramFGHM5R23Input286,
      );
      this.sequenceItems.push(sequenceDiagramFGHM5R23Binding511);
    }, "addSectionToLoop"),
    saveVerticalPos: defineFunctionName(function () {
      this.isLoopOverlap() && (this.savedVerticalPos = this.verticalPos);
    }, "saveVerticalPos"),
    resetVerticalPos: defineFunctionName(function () {
      this.isLoopOverlap() && (this.verticalPos = this.savedVerticalPos);
    }, "resetVerticalPos"),
    bumpVerticalPos: defineFunctionName(function (
      sequenceDiagramFGHM5R23Input335,
    ) {
      this.verticalPos += sequenceDiagramFGHM5R23Input335;
      this.data.stopy = s.getMax(this.data.stopy, this.verticalPos);
    }, "bumpVerticalPos"),
    getVerticalPos: defineFunctionName(function () {
      return this.verticalPos;
    }, "getVerticalPos"),
    getBounds: defineFunctionName(function () {
      return {
        bounds: this.data,
        models: this.models,
      };
    }, "getBounds"),
  };
  sequenceDiagramFGHM5R23Binding51 = defineFunctionName(async function (
    sequenceDiagramFGHM5R23Input105,
    sequenceDiagramFGHM5R23Input106,
    sequenceDiagramFGHM5R23Input107,
  ) {
    sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
      sequenceDiagramFGHM5R23Binding49.boxMargin,
    );
    sequenceDiagramFGHM5R23Input106.height =
      sequenceDiagramFGHM5R23Binding49.boxMargin;
    sequenceDiagramFGHM5R23Input106.starty =
      sequenceDiagramFGHM5R23Binding50.getVerticalPos();
    let sequenceDiagramFGHM5R23Binding364 = chunkYZCP3GAMS();
    sequenceDiagramFGHM5R23Binding364.x =
      sequenceDiagramFGHM5R23Input106.startx;
    sequenceDiagramFGHM5R23Binding364.y =
      sequenceDiagramFGHM5R23Input106.starty;
    sequenceDiagramFGHM5R23Binding364.width =
      sequenceDiagramFGHM5R23Input106.width ||
      sequenceDiagramFGHM5R23Binding49.width;
    sequenceDiagramFGHM5R23Binding364.class = "note";
    let sequenceDiagramFGHM5R23Binding365 =
      sequenceDiagramFGHM5R23Input105.append("g");
    sequenceDiagramFGHM5R23Binding365.attr("data-et", "note");
    sequenceDiagramFGHM5R23Binding365.attr(
      "data-id",
      "i" + sequenceDiagramFGHM5R23Input107,
    );
    let sequenceDiagramFGHM5R23Binding366 =
        sequenceDiagramFGHM5R23Binding48.drawRect(
          sequenceDiagramFGHM5R23Binding365,
          sequenceDiagramFGHM5R23Binding364,
        ),
      sequenceDiagramFGHM5R23Binding367 = c();
    sequenceDiagramFGHM5R23Binding367.x =
      sequenceDiagramFGHM5R23Input106.startx;
    sequenceDiagramFGHM5R23Binding367.y =
      sequenceDiagramFGHM5R23Input106.starty;
    sequenceDiagramFGHM5R23Binding367.width =
      sequenceDiagramFGHM5R23Binding364.width;
    sequenceDiagramFGHM5R23Binding367.dy = "1em";
    sequenceDiagramFGHM5R23Binding367.text =
      sequenceDiagramFGHM5R23Input106.message;
    sequenceDiagramFGHM5R23Binding367.class = "noteText";
    sequenceDiagramFGHM5R23Binding367.fontFamily =
      sequenceDiagramFGHM5R23Binding49.noteFontFamily;
    sequenceDiagramFGHM5R23Binding367.fontSize =
      sequenceDiagramFGHM5R23Binding49.noteFontSize;
    sequenceDiagramFGHM5R23Binding367.fontWeight =
      sequenceDiagramFGHM5R23Binding49.noteFontWeight;
    sequenceDiagramFGHM5R23Binding367.anchor =
      sequenceDiagramFGHM5R23Binding49.noteAlign;
    sequenceDiagramFGHM5R23Binding367.textMargin =
      sequenceDiagramFGHM5R23Binding49.noteMargin;
    sequenceDiagramFGHM5R23Binding367.valign = "center";
    let sequenceDiagramFGHM5R23Binding368 = k(
        sequenceDiagramFGHM5R23Binding367.text,
      )
        ? await sequenceDiagramFGHM5R23Binding18(
            sequenceDiagramFGHM5R23Binding365,
            sequenceDiagramFGHM5R23Binding367,
          )
        : sequenceDiagramFGHM5R23Binding19(
            sequenceDiagramFGHM5R23Binding365,
            sequenceDiagramFGHM5R23Binding367,
          ),
      sequenceDiagramFGHM5R23Binding369 = Math.round(
        sequenceDiagramFGHM5R23Binding368
          .map((item) => (item._groups || item)[0][0].getBBox().height)
          .reduce((accumulator, current) => accumulator + current),
      );
    sequenceDiagramFGHM5R23Binding366.attr(
      "height",
      sequenceDiagramFGHM5R23Binding369 +
        2 * sequenceDiagramFGHM5R23Binding49.noteMargin,
    );
    sequenceDiagramFGHM5R23Input106.height +=
      sequenceDiagramFGHM5R23Binding369 +
      2 * sequenceDiagramFGHM5R23Binding49.noteMargin;
    sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
      sequenceDiagramFGHM5R23Binding369 +
        2 * sequenceDiagramFGHM5R23Binding49.noteMargin,
    );
    sequenceDiagramFGHM5R23Input106.stopy =
      sequenceDiagramFGHM5R23Input106.starty +
      sequenceDiagramFGHM5R23Binding369 +
      2 * sequenceDiagramFGHM5R23Binding49.noteMargin;
    sequenceDiagramFGHM5R23Input106.stopx =
      sequenceDiagramFGHM5R23Input106.startx +
      sequenceDiagramFGHM5R23Binding364.width;
    sequenceDiagramFGHM5R23Binding50.insert(
      sequenceDiagramFGHM5R23Input106.startx,
      sequenceDiagramFGHM5R23Input106.starty,
      sequenceDiagramFGHM5R23Input106.stopx,
      sequenceDiagramFGHM5R23Input106.stopy,
    );
    sequenceDiagramFGHM5R23Binding50.models.addNote(
      sequenceDiagramFGHM5R23Input106,
    );
  }, "drawNote");
  sequenceDiagramFGHM5R23Binding52 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input113,
    sequenceDiagramFGHM5R23Input114,
    sequenceDiagramFGHM5R23Input115,
    sequenceDiagramFGHM5R23Input116,
    sequenceDiagramFGHM5R23Input117,
    sequenceDiagramFGHM5R23Input118,
    sequenceDiagramFGHM5R23Input119,
  ) {
    let sequenceDiagramFGHM5R23Binding381 =
        sequenceDiagramFGHM5R23Input116.db.getActors(),
      sequenceDiagramFGHM5R23Binding382 = sequenceDiagramFGHM5R23Binding381.get(
        sequenceDiagramFGHM5R23Input114.from,
      ),
      sequenceDiagramFGHM5R23Binding383 = sequenceDiagramFGHM5R23Binding381.get(
        sequenceDiagramFGHM5R23Input114.to,
      ),
      sequenceDiagramFGHM5R23Binding384 =
        sequenceDiagramFGHM5R23Input115.sequenceVisible,
      sequenceDiagramFGHM5R23Binding385 =
        sequenceDiagramFGHM5R23Binding382.x +
        sequenceDiagramFGHM5R23Binding382.width / 2,
      sequenceDiagramFGHM5R23Binding386 =
        sequenceDiagramFGHM5R23Binding383.x +
        sequenceDiagramFGHM5R23Binding383.width / 2,
      sequenceDiagramFGHM5R23Binding387 =
        sequenceDiagramFGHM5R23Binding385 <= sequenceDiagramFGHM5R23Binding386,
      sequenceDiagramFGHM5R23Binding388 = sequenceDiagramFGHM5R23Binding67(
        sequenceDiagramFGHM5R23Input114,
        sequenceDiagramFGHM5R23Input116,
      ),
      sequenceDiagramFGHM5R23Binding389 =
        sequenceDiagramFGHM5R23Input113.append("g"),
      sequenceDiagramFGHM5R23Binding390 = defineFunctionName(
        (sequenceDiagramFGHM5R23Input360, sequenceDiagramFGHM5R23Input361) => {
          let sequenceDiagramFGHM5R23Binding571 =
            sequenceDiagramFGHM5R23Input360 ? 16.5 : -16.5;
          return sequenceDiagramFGHM5R23Input361
            ? -sequenceDiagramFGHM5R23Binding571
            : sequenceDiagramFGHM5R23Binding571;
        },
        "getCircleOffset",
      ),
      sequenceDiagramFGHM5R23Binding391 = defineFunctionName(
        (sequenceDiagramFGHM5R23Input323) => {
          sequenceDiagramFGHM5R23Binding389
            .append("circle")
            .attr("cx", sequenceDiagramFGHM5R23Input323)
            .attr("cy", sequenceDiagramFGHM5R23Input119)
            .attr("r", 5)
            .attr("width", 10)
            .attr("height", 10);
        },
        "drawCircle",
      ),
      {
        CENTRAL_CONNECTION,
        CENTRAL_CONNECTION_REVERSE,
        CENTRAL_CONNECTION_DUAL,
      } = sequenceDiagramFGHM5R23Input116.db.LINETYPE;
    if (sequenceDiagramFGHM5R23Binding384)
      switch (sequenceDiagramFGHM5R23Input114.centralConnection) {
        case CENTRAL_CONNECTION:
          sequenceDiagramFGHM5R23Binding388 &&
            (sequenceDiagramFGHM5R23Binding386 +=
              sequenceDiagramFGHM5R23Binding390(
                sequenceDiagramFGHM5R23Binding387,
                true,
              ));
          break;
        case CENTRAL_CONNECTION_REVERSE:
          sequenceDiagramFGHM5R23Binding388 ||
            (sequenceDiagramFGHM5R23Binding385 +=
              sequenceDiagramFGHM5R23Binding390(
                sequenceDiagramFGHM5R23Binding387,
                false,
              ));
          break;
        case CENTRAL_CONNECTION_DUAL:
          sequenceDiagramFGHM5R23Binding388
            ? (sequenceDiagramFGHM5R23Binding386 +=
                sequenceDiagramFGHM5R23Binding390(
                  sequenceDiagramFGHM5R23Binding387,
                  true,
                ))
            : (sequenceDiagramFGHM5R23Binding385 +=
                sequenceDiagramFGHM5R23Binding390(
                  sequenceDiagramFGHM5R23Binding387,
                  false,
                ));
          break;
      }
    switch (sequenceDiagramFGHM5R23Input114.centralConnection) {
      case CENTRAL_CONNECTION:
        sequenceDiagramFGHM5R23Binding391(sequenceDiagramFGHM5R23Binding386);
        break;
      case CENTRAL_CONNECTION_REVERSE:
        sequenceDiagramFGHM5R23Binding391(sequenceDiagramFGHM5R23Binding385);
        break;
      case CENTRAL_CONNECTION_DUAL:
        sequenceDiagramFGHM5R23Binding391(sequenceDiagramFGHM5R23Binding385);
        sequenceDiagramFGHM5R23Binding391(sequenceDiagramFGHM5R23Binding386);
        break;
    }
  }, "drawCentralConnection");
  $ = defineFunctionName(
    (sequenceDiagramFGHM5R23Input334) => ({
      fontFamily: sequenceDiagramFGHM5R23Input334.messageFontFamily,
      fontSize: sequenceDiagramFGHM5R23Input334.messageFontSize,
      fontWeight: sequenceDiagramFGHM5R23Input334.messageFontWeight,
    }),
    "messageFont",
  );
  sequenceDiagramFGHM5R23Binding53 = defineFunctionName(
    (sequenceDiagramFGHM5R23Input337) => ({
      fontFamily: sequenceDiagramFGHM5R23Input337.noteFontFamily,
      fontSize: sequenceDiagramFGHM5R23Input337.noteFontSize,
      fontWeight: sequenceDiagramFGHM5R23Input337.noteFontWeight,
    }),
    "noteFont",
  );
  sequenceDiagramFGHM5R23Binding54 = defineFunctionName(
    (sequenceDiagramFGHM5R23Input336) => ({
      fontFamily: sequenceDiagramFGHM5R23Input336.actorFontFamily,
      fontSize: sequenceDiagramFGHM5R23Input336.actorFontSize,
      fontWeight: sequenceDiagramFGHM5R23Input336.actorFontWeight,
    }),
    "actorFont",
  );
  defineFunctionName(sequenceDiagramFGHM5R23Helper1, "boundMessage");
  sequenceDiagramFGHM5R23Binding55 = defineFunctionName(async function (
    sequenceDiagramFGHM5R23Input14,
    sequenceDiagramFGHM5R23Input15,
    sequenceDiagramFGHM5R23Input16,
    sequenceDiagramFGHM5R23Input17,
    sequenceDiagramFGHM5R23Input18,
    sequenceDiagramFGHM5R23Input19,
  ) {
    let {
        startx,
        stopx,
        starty,
        message,
        type,
        sequenceIndex,
        sequenceVisible,
      } = sequenceDiagramFGHM5R23Input15,
      sequenceDiagramFGHM5R23Binding171 =
        chunk5PVQY5BWG.calculateTextDimensions(
          message,
          $(sequenceDiagramFGHM5R23Binding49),
        ),
      sequenceDiagramFGHM5R23Binding172 = c();
    sequenceDiagramFGHM5R23Binding172.x = startx;
    sequenceDiagramFGHM5R23Binding172.y = starty + 10;
    sequenceDiagramFGHM5R23Binding172.width = stopx - startx;
    sequenceDiagramFGHM5R23Binding172.class = "messageText";
    sequenceDiagramFGHM5R23Binding172.dy = "1em";
    sequenceDiagramFGHM5R23Binding172.text = message;
    sequenceDiagramFGHM5R23Binding172.fontFamily =
      sequenceDiagramFGHM5R23Binding49.messageFontFamily;
    sequenceDiagramFGHM5R23Binding172.fontSize =
      sequenceDiagramFGHM5R23Binding49.messageFontSize;
    sequenceDiagramFGHM5R23Binding172.fontWeight =
      sequenceDiagramFGHM5R23Binding49.messageFontWeight;
    sequenceDiagramFGHM5R23Binding172.anchor =
      sequenceDiagramFGHM5R23Binding49.messageAlign;
    sequenceDiagramFGHM5R23Binding172.valign = "center";
    sequenceDiagramFGHM5R23Binding172.textMargin =
      sequenceDiagramFGHM5R23Binding49.wrapPadding;
    sequenceDiagramFGHM5R23Binding172.tspan = false;
    k(sequenceDiagramFGHM5R23Binding172.text)
      ? await sequenceDiagramFGHM5R23Binding18(
          sequenceDiagramFGHM5R23Input14,
          sequenceDiagramFGHM5R23Binding172,
          {
            startx,
            stopx,
            starty: sequenceDiagramFGHM5R23Input16,
          },
        )
      : sequenceDiagramFGHM5R23Binding19(
          sequenceDiagramFGHM5R23Input14,
          sequenceDiagramFGHM5R23Binding172,
        );
    let sequenceDiagramFGHM5R23Binding173 =
        sequenceDiagramFGHM5R23Binding171.width,
      sequenceDiagramFGHM5R23Binding174;
    if (startx === stopx) {
      let sequenceDiagramFGHM5R23Binding421 =
          sequenceVisible ||
          sequenceDiagramFGHM5R23Binding49.showSequenceNumbers,
        sequenceDiagramFGHM5R23Binding422 = sequenceDiagramFGHM5R23Binding67(
          sequenceDiagramFGHM5R23Input18,
          sequenceDiagramFGHM5R23Input17,
        ),
        sequenceDiagramFGHM5R23Binding423 = sequenceDiagramFGHM5R23Binding68(
          sequenceDiagramFGHM5R23Input18,
          sequenceDiagramFGHM5R23Input17,
        ),
        sequenceDiagramFGHM5R23Binding424 =
          startx +
          (sequenceDiagramFGHM5R23Binding421 &&
          (sequenceDiagramFGHM5R23Binding422 ||
            sequenceDiagramFGHM5R23Binding423)
            ? 10
            : 0);
      sequenceDiagramFGHM5R23Binding174 =
        sequenceDiagramFGHM5R23Binding49.rightAngles
          ? sequenceDiagramFGHM5R23Input14
              .append("path")
              .attr(
                "d",
                `M  ${sequenceDiagramFGHM5R23Binding424},${sequenceDiagramFGHM5R23Input16} H ${startx + s.getMax(sequenceDiagramFGHM5R23Binding49.width / 2, sequenceDiagramFGHM5R23Binding173 / 2)} V ${sequenceDiagramFGHM5R23Input16 + 25} H ${startx}`,
              )
          : sequenceDiagramFGHM5R23Input14
              .append("path")
              .attr(
                "d",
                "M " +
                  sequenceDiagramFGHM5R23Binding424 +
                  "," +
                  sequenceDiagramFGHM5R23Input16 +
                  " C " +
                  (sequenceDiagramFGHM5R23Binding424 + 60) +
                  "," +
                  (sequenceDiagramFGHM5R23Input16 - 10) +
                  " " +
                  (startx + 60) +
                  "," +
                  (sequenceDiagramFGHM5R23Input16 + 30) +
                  " " +
                  startx +
                  "," +
                  (sequenceDiagramFGHM5R23Input16 + 20),
              );
      sequenceDiagramFGHM5R23Binding65(
        sequenceDiagramFGHM5R23Input18,
        sequenceDiagramFGHM5R23Input17,
      ) &&
        sequenceDiagramFGHM5R23Binding52(
          sequenceDiagramFGHM5R23Input14,
          sequenceDiagramFGHM5R23Input18,
          sequenceDiagramFGHM5R23Input15,
          sequenceDiagramFGHM5R23Input17,
          startx,
          stopx,
          sequenceDiagramFGHM5R23Input16,
        );
    } else {
      sequenceDiagramFGHM5R23Binding174 =
        sequenceDiagramFGHM5R23Input14.append("line");
      sequenceDiagramFGHM5R23Binding174.attr("x1", startx);
      sequenceDiagramFGHM5R23Binding174.attr(
        "y1",
        sequenceDiagramFGHM5R23Input16,
      );
      sequenceDiagramFGHM5R23Binding174.attr("x2", stopx);
      sequenceDiagramFGHM5R23Binding174.attr(
        "y2",
        sequenceDiagramFGHM5R23Input16,
      );
      sequenceDiagramFGHM5R23Binding65(
        sequenceDiagramFGHM5R23Input18,
        sequenceDiagramFGHM5R23Input17,
      ) &&
        sequenceDiagramFGHM5R23Binding52(
          sequenceDiagramFGHM5R23Input14,
          sequenceDiagramFGHM5R23Input18,
          sequenceDiagramFGHM5R23Input15,
          sequenceDiagramFGHM5R23Input17,
          startx,
          stopx,
          sequenceDiagramFGHM5R23Input16,
        );
    }
    type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.DOTTED ||
    type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.DOTTED_CROSS ||
    type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.DOTTED_POINT ||
    type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.DOTTED_OPEN ||
    type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.BIDIRECTIONAL_DOTTED ||
    type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.SOLID_TOP_DOTTED ||
    type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.SOLID_BOTTOM_DOTTED ||
    type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.STICK_TOP_DOTTED ||
    type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.STICK_BOTTOM_DOTTED ||
    type ===
      sequenceDiagramFGHM5R23Input17.db.LINETYPE
        .SOLID_ARROW_TOP_REVERSE_DOTTED ||
    type ===
      sequenceDiagramFGHM5R23Input17.db.LINETYPE
        .SOLID_ARROW_BOTTOM_REVERSE_DOTTED ||
    type ===
      sequenceDiagramFGHM5R23Input17.db.LINETYPE
        .STICK_ARROW_TOP_REVERSE_DOTTED ||
    type ===
      sequenceDiagramFGHM5R23Input17.db.LINETYPE
        .STICK_ARROW_BOTTOM_REVERSE_DOTTED
      ? (sequenceDiagramFGHM5R23Binding174.style("stroke-dasharray", "3, 3"),
        sequenceDiagramFGHM5R23Binding174.attr("class", "messageLine1"))
      : sequenceDiagramFGHM5R23Binding174.attr("class", "messageLine0");
    sequenceDiagramFGHM5R23Binding174.attr("data-et", "message");
    sequenceDiagramFGHM5R23Binding174.attr(
      "data-id",
      "i" + sequenceDiagramFGHM5R23Input15.id,
    );
    sequenceDiagramFGHM5R23Binding174.attr(
      "data-from",
      sequenceDiagramFGHM5R23Input15.from,
    );
    sequenceDiagramFGHM5R23Binding174.attr(
      "data-to",
      sequenceDiagramFGHM5R23Input15.to,
    );
    let sequenceDiagramFGHM5R23Binding175 = "";
    if (
      (sequenceDiagramFGHM5R23Binding49.arrowMarkerAbsolute &&
        (sequenceDiagramFGHM5R23Binding175 = D(true)),
      sequenceDiagramFGHM5R23Binding174.attr("stroke-width", 2),
      sequenceDiagramFGHM5R23Binding174.attr("stroke", "none"),
      sequenceDiagramFGHM5R23Binding174.style("fill", "none"),
      (type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.SOLID_TOP ||
        type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.SOLID_TOP_DOTTED) &&
        sequenceDiagramFGHM5R23Binding174.attr(
          "marker-end",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-solidTopArrowHead)",
        ),
      (type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.SOLID_BOTTOM ||
        type ===
          sequenceDiagramFGHM5R23Input17.db.LINETYPE.SOLID_BOTTOM_DOTTED) &&
        sequenceDiagramFGHM5R23Binding174.attr(
          "marker-end",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-solidBottomArrowHead)",
        ),
      (type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.STICK_TOP ||
        type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.STICK_TOP_DOTTED) &&
        sequenceDiagramFGHM5R23Binding174.attr(
          "marker-end",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-stickTopArrowHead)",
        ),
      (type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.STICK_BOTTOM ||
        type ===
          sequenceDiagramFGHM5R23Input17.db.LINETYPE.STICK_BOTTOM_DOTTED) &&
        sequenceDiagramFGHM5R23Binding174.attr(
          "marker-end",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-stickBottomArrowHead)",
        ),
      (type ===
        sequenceDiagramFGHM5R23Input17.db.LINETYPE.SOLID_ARROW_TOP_REVERSE ||
        type ===
          sequenceDiagramFGHM5R23Input17.db.LINETYPE
            .SOLID_ARROW_TOP_REVERSE_DOTTED) &&
        sequenceDiagramFGHM5R23Binding174.attr(
          "marker-start",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-solidBottomArrowHead)",
        ),
      (type ===
        sequenceDiagramFGHM5R23Input17.db.LINETYPE.SOLID_ARROW_BOTTOM_REVERSE ||
        type ===
          sequenceDiagramFGHM5R23Input17.db.LINETYPE
            .SOLID_ARROW_BOTTOM_REVERSE_DOTTED) &&
        sequenceDiagramFGHM5R23Binding174.attr(
          "marker-start",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-solidTopArrowHead)",
        ),
      (type ===
        sequenceDiagramFGHM5R23Input17.db.LINETYPE.STICK_ARROW_TOP_REVERSE ||
        type ===
          sequenceDiagramFGHM5R23Input17.db.LINETYPE
            .STICK_ARROW_TOP_REVERSE_DOTTED) &&
        sequenceDiagramFGHM5R23Binding174.attr(
          "marker-start",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-stickBottomArrowHead)",
        ),
      (type ===
        sequenceDiagramFGHM5R23Input17.db.LINETYPE.STICK_ARROW_BOTTOM_REVERSE ||
        type ===
          sequenceDiagramFGHM5R23Input17.db.LINETYPE
            .STICK_ARROW_BOTTOM_REVERSE_DOTTED) &&
        sequenceDiagramFGHM5R23Binding174.attr(
          "marker-start",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-stickTopArrowHead)",
        ),
      (type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.SOLID ||
        type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.DOTTED) &&
        sequenceDiagramFGHM5R23Binding174.attr(
          "marker-end",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-arrowhead)",
        ),
      (type ===
        sequenceDiagramFGHM5R23Input17.db.LINETYPE.BIDIRECTIONAL_SOLID ||
        type ===
          sequenceDiagramFGHM5R23Input17.db.LINETYPE.BIDIRECTIONAL_DOTTED) &&
        (sequenceDiagramFGHM5R23Binding174.attr(
          "marker-start",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-arrowhead)",
        ),
        sequenceDiagramFGHM5R23Binding174.attr(
          "marker-end",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-arrowhead)",
        )),
      (type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.SOLID_POINT ||
        type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.DOTTED_POINT) &&
        sequenceDiagramFGHM5R23Binding174.attr(
          "marker-end",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-filled-head)",
        ),
      (type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.SOLID_CROSS ||
        type === sequenceDiagramFGHM5R23Input17.db.LINETYPE.DOTTED_CROSS) &&
        sequenceDiagramFGHM5R23Binding174.attr(
          "marker-end",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-crosshead)",
        ),
      sequenceVisible || sequenceDiagramFGHM5R23Binding49.showSequenceNumbers)
    ) {
      let sequenceDiagramFGHM5R23Binding307 =
          type ===
            sequenceDiagramFGHM5R23Input17.db.LINETYPE.BIDIRECTIONAL_SOLID ||
          type ===
            sequenceDiagramFGHM5R23Input17.db.LINETYPE.BIDIRECTIONAL_DOTTED,
        sequenceDiagramFGHM5R23Binding308 =
          type ===
            sequenceDiagramFGHM5R23Input17.db.LINETYPE
              .SOLID_ARROW_TOP_REVERSE ||
          type ===
            sequenceDiagramFGHM5R23Input17.db.LINETYPE
              .SOLID_ARROW_TOP_REVERSE_DOTTED ||
          type ===
            sequenceDiagramFGHM5R23Input17.db.LINETYPE
              .SOLID_ARROW_BOTTOM_REVERSE ||
          type ===
            sequenceDiagramFGHM5R23Input17.db.LINETYPE
              .SOLID_ARROW_BOTTOM_REVERSE_DOTTED ||
          type ===
            sequenceDiagramFGHM5R23Input17.db.LINETYPE
              .STICK_ARROW_TOP_REVERSE ||
          type ===
            sequenceDiagramFGHM5R23Input17.db.LINETYPE
              .STICK_ARROW_TOP_REVERSE_DOTTED ||
          type ===
            sequenceDiagramFGHM5R23Input17.db.LINETYPE
              .STICK_ARROW_BOTTOM_REVERSE ||
          type ===
            sequenceDiagramFGHM5R23Input17.db.LINETYPE
              .STICK_ARROW_BOTTOM_REVERSE_DOTTED,
        sequenceDiagramFGHM5R23Binding309 = sequenceDiagramFGHM5R23Binding65(
          sequenceDiagramFGHM5R23Input18,
          sequenceDiagramFGHM5R23Input17,
        ),
        sequenceDiagramFGHM5R23Binding310 = startx,
        sequenceDiagramFGHM5R23Binding311 = stopx;
      sequenceDiagramFGHM5R23Binding307
        ? (startx < stopx
            ? (sequenceDiagramFGHM5R23Binding310 = startx + 12)
            : ((sequenceDiagramFGHM5R23Binding310 =
                startx - 6 + (sequenceDiagramFGHM5R23Binding309 ? -5 : 0)),
              (sequenceDiagramFGHM5R23Binding310 +=
                sequenceDiagramFGHM5R23Input18?.centralConnection ===
                  sequenceDiagramFGHM5R23Input17.db.LINETYPE
                    .CENTRAL_CONNECTION_DUAL ||
                sequenceDiagramFGHM5R23Input18?.centralConnection ===
                  sequenceDiagramFGHM5R23Input17.db.LINETYPE
                    .CENTRAL_CONNECTION_REVERSE
                  ? -7.5
                  : 0)),
          sequenceDiagramFGHM5R23Binding174.attr(
            "x1",
            sequenceDiagramFGHM5R23Binding310,
          ))
        : sequenceDiagramFGHM5R23Binding308
          ? (stopx > startx
              ? (sequenceDiagramFGHM5R23Binding311 = stopx - 12)
              : ((sequenceDiagramFGHM5R23Binding311 = stopx - 6),
                (sequenceDiagramFGHM5R23Binding310 +=
                  sequenceDiagramFGHM5R23Input18?.centralConnection ===
                    sequenceDiagramFGHM5R23Input17.db.LINETYPE
                      .CENTRAL_CONNECTION_DUAL ||
                  sequenceDiagramFGHM5R23Input18?.centralConnection ===
                    sequenceDiagramFGHM5R23Input17.db.LINETYPE
                      .CENTRAL_CONNECTION_REVERSE
                    ? -7.5
                    : 0)),
            (sequenceDiagramFGHM5R23Binding311 +=
              sequenceDiagramFGHM5R23Binding309 ? 15 : 0),
            sequenceDiagramFGHM5R23Binding174.attr(
              "x2",
              sequenceDiagramFGHM5R23Binding311,
            ),
            sequenceDiagramFGHM5R23Binding174.attr(
              "x1",
              sequenceDiagramFGHM5R23Binding310,
            ))
          : sequenceDiagramFGHM5R23Binding174.attr("x1", startx + 6);
      let sequenceDiagramFGHM5R23Binding312 = 0,
        sequenceDiagramFGHM5R23Binding313 = startx === stopx,
        sequenceDiagramFGHM5R23Binding314 = startx <= stopx;
      sequenceDiagramFGHM5R23Binding312 = sequenceDiagramFGHM5R23Binding313
        ? sequenceDiagramFGHM5R23Input15.fromBounds + 1
        : sequenceDiagramFGHM5R23Binding308
          ? sequenceDiagramFGHM5R23Binding314
            ? sequenceDiagramFGHM5R23Input15.toBounds - 1
            : sequenceDiagramFGHM5R23Input15.fromBounds + 1
          : sequenceDiagramFGHM5R23Binding314
            ? sequenceDiagramFGHM5R23Input15.fromBounds + 1
            : sequenceDiagramFGHM5R23Input15.toBounds - 1;
      sequenceDiagramFGHM5R23Input14
        .append("line")
        .attr("x1", sequenceDiagramFGHM5R23Binding312)
        .attr("y1", sequenceDiagramFGHM5R23Input16)
        .attr("x2", sequenceDiagramFGHM5R23Binding312)
        .attr("y2", sequenceDiagramFGHM5R23Input16)
        .attr("stroke-width", 0)
        .attr(
          "marker-start",
          "url(" +
            sequenceDiagramFGHM5R23Binding175 +
            "#" +
            sequenceDiagramFGHM5R23Input19 +
            "-sequencenumber)",
        );
      sequenceDiagramFGHM5R23Input14
        .append("text")
        .attr("x", sequenceDiagramFGHM5R23Binding312)
        .attr("y", sequenceDiagramFGHM5R23Input16 + 4)
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("text-anchor", "middle")
        .attr("class", "sequenceNumber")
        .text(sequenceIndex);
    }
  }, "drawMessage");
  sequenceDiagramFGHM5R23Binding56 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input134,
    sequenceDiagramFGHM5R23Input135,
    sequenceDiagramFGHM5R23Input136,
    sequenceDiagramFGHM5R23Input137,
    sequenceDiagramFGHM5R23Input138,
    sequenceDiagramFGHM5R23Input139,
    sequenceDiagramFGHM5R23Input140,
  ) {
    let sequenceDiagramFGHM5R23Binding411 = 0,
      sequenceDiagramFGHM5R23Binding412 = 0,
      sequenceDiagramFGHM5R23Binding413,
      sequenceDiagramFGHM5R23Binding414 = 0;
    for (let sequenceDiagramFGHM5R23Binding430 of sequenceDiagramFGHM5R23Input137) {
      let sequenceDiagramFGHM5R23Binding431 =
          sequenceDiagramFGHM5R23Input135.get(
            sequenceDiagramFGHM5R23Binding430,
          ),
        sequenceDiagramFGHM5R23Binding432 =
          sequenceDiagramFGHM5R23Binding431.box;
      sequenceDiagramFGHM5R23Binding413 &&
        sequenceDiagramFGHM5R23Binding413 !=
          sequenceDiagramFGHM5R23Binding432 &&
        (sequenceDiagramFGHM5R23Input140 ||
          sequenceDiagramFGHM5R23Binding50.models.addBox(
            sequenceDiagramFGHM5R23Binding413,
          ),
        (sequenceDiagramFGHM5R23Binding412 +=
          sequenceDiagramFGHM5R23Binding49.boxMargin +
          sequenceDiagramFGHM5R23Binding413.margin));
      sequenceDiagramFGHM5R23Binding432 &&
        sequenceDiagramFGHM5R23Binding432 !=
          sequenceDiagramFGHM5R23Binding413 &&
        (sequenceDiagramFGHM5R23Input140 ||
          ((sequenceDiagramFGHM5R23Binding432.x =
            sequenceDiagramFGHM5R23Binding411 +
            sequenceDiagramFGHM5R23Binding412),
          (sequenceDiagramFGHM5R23Binding432.y =
            sequenceDiagramFGHM5R23Input138)),
        (sequenceDiagramFGHM5R23Binding412 +=
          sequenceDiagramFGHM5R23Binding432.margin));
      sequenceDiagramFGHM5R23Binding431.width = s.getMax(
        sequenceDiagramFGHM5R23Binding431.width ||
          sequenceDiagramFGHM5R23Binding49.width,
        sequenceDiagramFGHM5R23Binding49.width,
      );
      sequenceDiagramFGHM5R23Binding431.height = s.getMax(
        sequenceDiagramFGHM5R23Binding431.height ||
          sequenceDiagramFGHM5R23Binding49.height,
        sequenceDiagramFGHM5R23Binding49.height,
      );
      sequenceDiagramFGHM5R23Binding431.margin =
        sequenceDiagramFGHM5R23Binding431.margin ||
        sequenceDiagramFGHM5R23Binding49.actorMargin;
      sequenceDiagramFGHM5R23Binding414 = s.getMax(
        sequenceDiagramFGHM5R23Binding414,
        sequenceDiagramFGHM5R23Binding431.height,
      );
      sequenceDiagramFGHM5R23Input136.get(
        sequenceDiagramFGHM5R23Binding431.name,
      ) &&
        (sequenceDiagramFGHM5R23Binding412 +=
          sequenceDiagramFGHM5R23Binding431.width / 2);
      sequenceDiagramFGHM5R23Binding431.x =
        sequenceDiagramFGHM5R23Binding411 + sequenceDiagramFGHM5R23Binding412;
      sequenceDiagramFGHM5R23Binding431.starty =
        sequenceDiagramFGHM5R23Binding50.getVerticalPos();
      sequenceDiagramFGHM5R23Binding50.insert(
        sequenceDiagramFGHM5R23Binding431.x,
        sequenceDiagramFGHM5R23Input138,
        sequenceDiagramFGHM5R23Binding431.x +
          sequenceDiagramFGHM5R23Binding431.width,
        sequenceDiagramFGHM5R23Binding431.height,
      );
      sequenceDiagramFGHM5R23Binding411 +=
        sequenceDiagramFGHM5R23Binding431.width +
        sequenceDiagramFGHM5R23Binding412;
      sequenceDiagramFGHM5R23Binding431.box &&
        (sequenceDiagramFGHM5R23Binding431.box.width =
          sequenceDiagramFGHM5R23Binding411 +
          sequenceDiagramFGHM5R23Binding432.margin -
          sequenceDiagramFGHM5R23Binding431.box.x);
      sequenceDiagramFGHM5R23Binding412 =
        sequenceDiagramFGHM5R23Binding431.margin;
      sequenceDiagramFGHM5R23Binding413 = sequenceDiagramFGHM5R23Binding431.box;
      sequenceDiagramFGHM5R23Binding50.models.addActor(
        sequenceDiagramFGHM5R23Binding431,
      );
    }
    sequenceDiagramFGHM5R23Binding413 &&
      !sequenceDiagramFGHM5R23Input140 &&
      sequenceDiagramFGHM5R23Binding50.models.addBox(
        sequenceDiagramFGHM5R23Binding413,
      );
    sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
      sequenceDiagramFGHM5R23Binding414,
    );
  }, "addActorRenderingData");
  sequenceDiagramFGHM5R23Binding57 = defineFunctionName(async function (
    sequenceDiagramFGHM5R23Input213,
    sequenceDiagramFGHM5R23Input214,
    sequenceDiagramFGHM5R23Input215,
    sequenceDiagramFGHM5R23Input216,
    sequenceDiagramFGHM5R23Input217,
    sequenceDiagramFGHM5R23Input218,
    sequenceDiagramFGHM5R23Input219,
  ) {
    if (sequenceDiagramFGHM5R23Input216) {
      let sequenceDiagramFGHM5R23Binding509 = 0;
      sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
        sequenceDiagramFGHM5R23Binding49.boxMargin * 2,
      );
      for (let sequenceDiagramFGHM5R23Binding544 of sequenceDiagramFGHM5R23Input215) {
        let sequenceDiagramFGHM5R23Binding552 =
          sequenceDiagramFGHM5R23Input214.get(
            sequenceDiagramFGHM5R23Binding544,
          );
        sequenceDiagramFGHM5R23Binding552.stopy ||=
          sequenceDiagramFGHM5R23Binding50.getVerticalPos();
        let sequenceDiagramFGHM5R23Binding553 =
          await sequenceDiagramFGHM5R23Binding48.drawActor(
            sequenceDiagramFGHM5R23Input213,
            sequenceDiagramFGHM5R23Binding552,
            sequenceDiagramFGHM5R23Binding49,
            true,
            sequenceDiagramFGHM5R23Input217,
            sequenceDiagramFGHM5R23Input218,
            sequenceDiagramFGHM5R23Input219,
          );
        sequenceDiagramFGHM5R23Binding509 = s.getMax(
          sequenceDiagramFGHM5R23Binding509,
          sequenceDiagramFGHM5R23Binding553,
        );
      }
      sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
        sequenceDiagramFGHM5R23Binding509 +
          sequenceDiagramFGHM5R23Binding49.boxMargin,
      );
    } else
      for (let sequenceDiagramFGHM5R23Binding565 of sequenceDiagramFGHM5R23Input215) {
        let sequenceDiagramFGHM5R23Binding569 =
          sequenceDiagramFGHM5R23Input214.get(
            sequenceDiagramFGHM5R23Binding565,
          );
        await sequenceDiagramFGHM5R23Binding48.drawActor(
          sequenceDiagramFGHM5R23Input213,
          sequenceDiagramFGHM5R23Binding569,
          sequenceDiagramFGHM5R23Binding49,
          false,
          sequenceDiagramFGHM5R23Input217,
          sequenceDiagramFGHM5R23Input218,
          sequenceDiagramFGHM5R23Input219,
        );
      }
  }, "drawActors");
  sequenceDiagramFGHM5R23Binding58 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input278,
    sequenceDiagramFGHM5R23Input279,
    sequenceDiagramFGHM5R23Input280,
    sequenceDiagramFGHM5R23Input281,
  ) {
    let sequenceDiagramFGHM5R23Binding499 = 0,
      sequenceDiagramFGHM5R23Binding500 = 0;
    for (let sequenceDiagramFGHM5R23Binding530 of sequenceDiagramFGHM5R23Input280) {
      let sequenceDiagramFGHM5R23Binding534 =
          sequenceDiagramFGHM5R23Input279.get(
            sequenceDiagramFGHM5R23Binding530,
          ),
        sequenceDiagramFGHM5R23Binding535 = sequenceDiagramFGHM5R23Binding62(
          sequenceDiagramFGHM5R23Binding534,
        ),
        sequenceDiagramFGHM5R23Binding536 =
          sequenceDiagramFGHM5R23Binding48.drawPopup(
            sequenceDiagramFGHM5R23Input278,
            sequenceDiagramFGHM5R23Binding534,
            sequenceDiagramFGHM5R23Binding535,
            sequenceDiagramFGHM5R23Binding49,
            sequenceDiagramFGHM5R23Binding49.forceMenus,
            sequenceDiagramFGHM5R23Input281,
          );
      sequenceDiagramFGHM5R23Binding536.height >
        sequenceDiagramFGHM5R23Binding499 &&
        (sequenceDiagramFGHM5R23Binding499 =
          sequenceDiagramFGHM5R23Binding536.height);
      sequenceDiagramFGHM5R23Binding536.width +
        sequenceDiagramFGHM5R23Binding534.x >
        sequenceDiagramFGHM5R23Binding500 &&
        (sequenceDiagramFGHM5R23Binding500 =
          sequenceDiagramFGHM5R23Binding536.width +
          sequenceDiagramFGHM5R23Binding534.x);
    }
    return {
      maxHeight: sequenceDiagramFGHM5R23Binding499,
      maxWidth: sequenceDiagramFGHM5R23Binding500,
    };
  }, "drawActorsPopup");
  $e = defineFunctionName(function (sequenceDiagramFGHM5R23Input239) {
    _chunkICPOFSXXR(
      sequenceDiagramFGHM5R23Binding49,
      sequenceDiagramFGHM5R23Input239,
    );
    sequenceDiagramFGHM5R23Input239.fontFamily &&
      (sequenceDiagramFGHM5R23Binding49.actorFontFamily =
        sequenceDiagramFGHM5R23Binding49.noteFontFamily =
        sequenceDiagramFGHM5R23Binding49.messageFontFamily =
          sequenceDiagramFGHM5R23Input239.fontFamily);
    sequenceDiagramFGHM5R23Input239.fontSize &&
      (sequenceDiagramFGHM5R23Binding49.actorFontSize =
        sequenceDiagramFGHM5R23Binding49.noteFontSize =
        sequenceDiagramFGHM5R23Binding49.messageFontSize =
          sequenceDiagramFGHM5R23Input239.fontSize);
    sequenceDiagramFGHM5R23Input239.fontWeight &&
      (sequenceDiagramFGHM5R23Binding49.actorFontWeight =
        sequenceDiagramFGHM5R23Binding49.noteFontWeight =
        sequenceDiagramFGHM5R23Binding49.messageFontWeight =
          sequenceDiagramFGHM5R23Input239.fontWeight);
  }, "setConf");
  sequenceDiagramFGHM5R23Binding59 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input348,
  ) {
    return sequenceDiagramFGHM5R23Binding50.activations.filter(function (item) {
      return item.actor === sequenceDiagramFGHM5R23Input348;
    });
  }, "actorActivations");
  sequenceDiagramFGHM5R23Binding60 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input265,
    sequenceDiagramFGHM5R23Input266,
  ) {
    let sequenceDiagramFGHM5R23Binding495 = sequenceDiagramFGHM5R23Input266.get(
        sequenceDiagramFGHM5R23Input265,
      ),
      sequenceDiagramFGHM5R23Binding496 = sequenceDiagramFGHM5R23Binding59(
        sequenceDiagramFGHM5R23Input265,
      );
    return [
      sequenceDiagramFGHM5R23Binding496.reduce(
        function (accumulator, current) {
          return s.getMin(accumulator, current.startx);
        },
        sequenceDiagramFGHM5R23Binding495.x +
          sequenceDiagramFGHM5R23Binding495.width / 2 -
          1,
      ),
      sequenceDiagramFGHM5R23Binding496.reduce(
        function (accumulator, current) {
          return s.getMax(accumulator, current.stopx);
        },
        sequenceDiagramFGHM5R23Binding495.x +
          sequenceDiagramFGHM5R23Binding495.width / 2 +
          1,
      ),
    ];
  }, "activationBounds");
  defineFunctionName(sequenceDiagramFGHM5R23Helper2, "adjustLoopHeightForWrap");
  defineFunctionName(
    sequenceDiagramFGHM5R23Helper3,
    "adjustCreatedDestroyedData",
  );
  sequenceDiagramFGHM5R23Binding61 = defineFunctionName(async function (
    sequenceDiagramFGHM5R23Input10,
    sequenceDiagramFGHM5R23Input11,
    sequenceDiagramFGHM5R23Input12,
    sequenceDiagramFGHM5R23Input13,
  ) {
    let { securityLevel, sequence, look } = b();
    sequenceDiagramFGHM5R23Binding49 = sequence;
    let sequenceDiagramFGHM5R23Binding143;
    securityLevel === "sandbox" &&
      (sequenceDiagramFGHM5R23Binding143 = select(
        "#i" + sequenceDiagramFGHM5R23Input11,
      ));
    let sequenceDiagramFGHM5R23Binding144 = select(
        securityLevel === "sandbox"
          ? sequenceDiagramFGHM5R23Binding143.nodes()[0].contentDocument.body
          : "body",
      ),
      sequenceDiagramFGHM5R23Binding145 =
        securityLevel === "sandbox"
          ? sequenceDiagramFGHM5R23Binding143.nodes()[0].contentDocument
          : document;
    sequenceDiagramFGHM5R23Binding50.init();
    logger.debug(sequenceDiagramFGHM5R23Input13.db);
    let sequenceDiagramFGHM5R23Binding146 =
        securityLevel === "sandbox"
          ? sequenceDiagramFGHM5R23Binding144.select(
              `[id="${sequenceDiagramFGHM5R23Input11}"]`,
            )
          : select(`[id="${sequenceDiagramFGHM5R23Input11}"]`),
      sequenceDiagramFGHM5R23Binding147 =
        sequenceDiagramFGHM5R23Input13.db.getActors(),
      sequenceDiagramFGHM5R23Binding148 =
        sequenceDiagramFGHM5R23Input13.db.getCreatedActors(),
      sequenceDiagramFGHM5R23Binding149 =
        sequenceDiagramFGHM5R23Input13.db.getDestroyedActors(),
      sequenceDiagramFGHM5R23Binding150 =
        sequenceDiagramFGHM5R23Input13.db.getBoxes(),
      sequenceDiagramFGHM5R23Binding151 =
        sequenceDiagramFGHM5R23Input13.db.getActorKeys(),
      sequenceDiagramFGHM5R23Binding152 =
        sequenceDiagramFGHM5R23Input13.db.getMessages(),
      sequenceDiagramFGHM5R23Binding153 =
        sequenceDiagramFGHM5R23Input13.db.getDiagramTitle(),
      sequenceDiagramFGHM5R23Binding154 =
        sequenceDiagramFGHM5R23Input13.db.hasAtLeastOneBox(),
      sequenceDiagramFGHM5R23Binding155 =
        sequenceDiagramFGHM5R23Input13.db.hasAtLeastOneBoxWithTitle(),
      sequenceDiagramFGHM5R23Binding156 = await sequenceDiagramFGHM5R23Helper4(
        sequenceDiagramFGHM5R23Binding147,
        sequenceDiagramFGHM5R23Binding152,
        sequenceDiagramFGHM5R23Input13,
      );
    if (
      ((sequenceDiagramFGHM5R23Binding49.height =
        await sequenceDiagramFGHM5R23Helper5(
          sequenceDiagramFGHM5R23Binding147,
          sequenceDiagramFGHM5R23Binding156,
          sequenceDiagramFGHM5R23Binding150,
        )),
      sequenceDiagramFGHM5R23Binding48.insertComputerIcon(
        sequenceDiagramFGHM5R23Binding146,
        sequenceDiagramFGHM5R23Input11,
      ),
      sequenceDiagramFGHM5R23Binding48.insertDatabaseIcon(
        sequenceDiagramFGHM5R23Binding146,
        sequenceDiagramFGHM5R23Input11,
      ),
      sequenceDiagramFGHM5R23Binding48.insertClockIcon(
        sequenceDiagramFGHM5R23Binding146,
        sequenceDiagramFGHM5R23Input11,
      ),
      sequenceDiagramFGHM5R23Binding154 &&
        (sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
          sequenceDiagramFGHM5R23Binding49.boxMargin,
        ),
        sequenceDiagramFGHM5R23Binding155 &&
          sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
            sequenceDiagramFGHM5R23Binding150[0].textMaxHeight,
          )),
      sequenceDiagramFGHM5R23Binding49.hideUnusedParticipants === true)
    ) {
      let sequenceDiagramFGHM5R23Binding555 = new Set();
      sequenceDiagramFGHM5R23Binding152.forEach((item) => {
        sequenceDiagramFGHM5R23Binding555.add(item.from);
        sequenceDiagramFGHM5R23Binding555.add(item.to);
      });
      sequenceDiagramFGHM5R23Binding151 =
        sequenceDiagramFGHM5R23Binding151.filter((item) =>
          sequenceDiagramFGHM5R23Binding555.has(item),
        );
    }
    let sequenceDiagramFGHM5R23Binding157 = new Map(
      sequenceDiagramFGHM5R23Binding151.map((item, index) => [
        sequenceDiagramFGHM5R23Binding147.get(item)?.name ?? item,
        index,
      ]),
    );
    sequenceDiagramFGHM5R23Binding56(
      sequenceDiagramFGHM5R23Binding146,
      sequenceDiagramFGHM5R23Binding147,
      sequenceDiagramFGHM5R23Binding148,
      sequenceDiagramFGHM5R23Binding151,
      0,
      sequenceDiagramFGHM5R23Binding152,
      false,
    );
    let sequenceDiagramFGHM5R23Binding158 =
      await sequenceDiagramFGHM5R23Binding70(
        sequenceDiagramFGHM5R23Binding152,
        sequenceDiagramFGHM5R23Binding147,
        sequenceDiagramFGHM5R23Binding156,
        sequenceDiagramFGHM5R23Input13,
      );
    sequenceDiagramFGHM5R23Binding48.insertArrowHead(
      sequenceDiagramFGHM5R23Binding146,
      sequenceDiagramFGHM5R23Input11,
    );
    sequenceDiagramFGHM5R23Binding48.insertArrowCrossHead(
      sequenceDiagramFGHM5R23Binding146,
      sequenceDiagramFGHM5R23Input11,
    );
    sequenceDiagramFGHM5R23Binding48.insertArrowFilledHead(
      sequenceDiagramFGHM5R23Binding146,
      sequenceDiagramFGHM5R23Input11,
    );
    sequenceDiagramFGHM5R23Binding48.insertSequenceNumber(
      sequenceDiagramFGHM5R23Binding146,
      sequenceDiagramFGHM5R23Input11,
    );
    sequenceDiagramFGHM5R23Binding48.insertSolidTopArrowHead(
      sequenceDiagramFGHM5R23Binding146,
      sequenceDiagramFGHM5R23Input11,
    );
    sequenceDiagramFGHM5R23Binding48.insertSolidBottomArrowHead(
      sequenceDiagramFGHM5R23Binding146,
      sequenceDiagramFGHM5R23Input11,
    );
    sequenceDiagramFGHM5R23Binding48.insertStickTopArrowHead(
      sequenceDiagramFGHM5R23Binding146,
      sequenceDiagramFGHM5R23Input11,
    );
    sequenceDiagramFGHM5R23Binding48.insertStickBottomArrowHead(
      sequenceDiagramFGHM5R23Binding146,
      sequenceDiagramFGHM5R23Input11,
    );
    look === "neo" &&
      sequenceDiagramFGHM5R23Binding48.insertDropShadow(
        sequenceDiagramFGHM5R23Binding146,
        sequenceDiagramFGHM5R23Binding49,
      );
    function sequenceDiagramFGHM5R23Helper7(
      sequenceDiagramFGHM5R23Input302,
      sequenceDiagramFGHM5R23Input303,
    ) {
      let sequenceDiagramFGHM5R23Binding527 =
        sequenceDiagramFGHM5R23Binding50.endActivation(
          sequenceDiagramFGHM5R23Input302,
        );
      sequenceDiagramFGHM5R23Binding527.starty + 18 >
        sequenceDiagramFGHM5R23Input303 &&
        ((sequenceDiagramFGHM5R23Binding527.starty =
          sequenceDiagramFGHM5R23Input303 - 6),
        (sequenceDiagramFGHM5R23Input303 += 12));
      sequenceDiagramFGHM5R23Binding48.drawActivation(
        sequenceDiagramFGHM5R23Binding146,
        sequenceDiagramFGHM5R23Binding527,
        sequenceDiagramFGHM5R23Input303,
        sequenceDiagramFGHM5R23Binding49,
        sequenceDiagramFGHM5R23Binding59(sequenceDiagramFGHM5R23Input302.from)
          .length,
        sequenceDiagramFGHM5R23Input13,
        sequenceDiagramFGHM5R23Binding157,
      );
      sequenceDiagramFGHM5R23Binding50.insert(
        sequenceDiagramFGHM5R23Binding527.startx,
        sequenceDiagramFGHM5R23Input303 - 10,
        sequenceDiagramFGHM5R23Binding527.stopx,
        sequenceDiagramFGHM5R23Input303,
      );
    }
    defineFunctionName(sequenceDiagramFGHM5R23Helper7, "activeEnd");
    let sequenceDiagramFGHM5R23Binding159 = 1,
      sequenceDiagramFGHM5R23Binding160 = 1,
      sequenceDiagramFGHM5R23Binding161 = [],
      sequenceDiagramFGHM5R23Binding162 = [],
      sequenceDiagramFGHM5R23Binding163 = 0;
    for (let sequenceDiagramFGHM5R23Binding176 of sequenceDiagramFGHM5R23Binding152) {
      let sequenceDiagramFGHM5R23Binding177,
        sequenceDiagramFGHM5R23Binding178,
        sequenceDiagramFGHM5R23Binding179;
      switch (sequenceDiagramFGHM5R23Binding176.type) {
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.NOTE:
          sequenceDiagramFGHM5R23Binding50.resetVerticalPos();
          sequenceDiagramFGHM5R23Binding178 =
            sequenceDiagramFGHM5R23Binding176.noteModel;
          await sequenceDiagramFGHM5R23Binding51(
            sequenceDiagramFGHM5R23Binding146,
            sequenceDiagramFGHM5R23Binding178,
            sequenceDiagramFGHM5R23Binding176.id,
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.ACTIVE_START:
          sequenceDiagramFGHM5R23Binding50.newActivation(
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding146,
            sequenceDiagramFGHM5R23Binding147,
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.CENTRAL_CONNECTION:
          sequenceDiagramFGHM5R23Binding50.newActivation(
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding146,
            sequenceDiagramFGHM5R23Binding147,
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE
          .CENTRAL_CONNECTION_REVERSE:
          sequenceDiagramFGHM5R23Binding50.newActivation(
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding146,
            sequenceDiagramFGHM5R23Binding147,
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.ACTIVE_END:
          sequenceDiagramFGHM5R23Helper7(
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding50.getVerticalPos(),
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.LOOP_START:
          sequenceDiagramFGHM5R23Helper2(
            sequenceDiagramFGHM5R23Binding158,
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding49.boxMargin,
            sequenceDiagramFGHM5R23Binding49.boxMargin +
              sequenceDiagramFGHM5R23Binding49.boxTextMargin,
            (sequenceDiagramFGHM5R23Input379) =>
              sequenceDiagramFGHM5R23Binding50.newLoop(
                sequenceDiagramFGHM5R23Input379,
              ),
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.LOOP_END:
          sequenceDiagramFGHM5R23Binding177 =
            sequenceDiagramFGHM5R23Binding50.endLoop();
          await sequenceDiagramFGHM5R23Binding48.drawLoop(
            sequenceDiagramFGHM5R23Binding146,
            sequenceDiagramFGHM5R23Binding177,
            "loop",
            sequenceDiagramFGHM5R23Binding49,
            sequenceDiagramFGHM5R23Binding176,
          );
          sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
            sequenceDiagramFGHM5R23Binding177.stopy -
              sequenceDiagramFGHM5R23Binding50.getVerticalPos(),
          );
          sequenceDiagramFGHM5R23Binding50.models.addLoop(
            sequenceDiagramFGHM5R23Binding177,
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.RECT_START:
          sequenceDiagramFGHM5R23Helper2(
            sequenceDiagramFGHM5R23Binding158,
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding49.boxMargin,
            sequenceDiagramFGHM5R23Binding49.boxMargin,
            (sequenceDiagramFGHM5R23Input372) =>
              sequenceDiagramFGHM5R23Binding50.newLoop(
                undefined,
                sequenceDiagramFGHM5R23Input372.message,
              ),
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.RECT_END:
          sequenceDiagramFGHM5R23Binding177 =
            sequenceDiagramFGHM5R23Binding50.endLoop();
          sequenceDiagramFGHM5R23Binding162.push(
            sequenceDiagramFGHM5R23Binding177,
          );
          sequenceDiagramFGHM5R23Binding50.models.addLoop(
            sequenceDiagramFGHM5R23Binding177,
          );
          sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
            sequenceDiagramFGHM5R23Binding177.stopy -
              sequenceDiagramFGHM5R23Binding50.getVerticalPos(),
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.OPT_START:
          sequenceDiagramFGHM5R23Helper2(
            sequenceDiagramFGHM5R23Binding158,
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding49.boxMargin,
            sequenceDiagramFGHM5R23Binding49.boxMargin +
              sequenceDiagramFGHM5R23Binding49.boxTextMargin,
            (sequenceDiagramFGHM5R23Input380) =>
              sequenceDiagramFGHM5R23Binding50.newLoop(
                sequenceDiagramFGHM5R23Input380,
              ),
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.OPT_END:
          sequenceDiagramFGHM5R23Binding177 =
            sequenceDiagramFGHM5R23Binding50.endLoop();
          await sequenceDiagramFGHM5R23Binding48.drawLoop(
            sequenceDiagramFGHM5R23Binding146,
            sequenceDiagramFGHM5R23Binding177,
            "opt",
            sequenceDiagramFGHM5R23Binding49,
            sequenceDiagramFGHM5R23Binding176,
          );
          sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
            sequenceDiagramFGHM5R23Binding177.stopy -
              sequenceDiagramFGHM5R23Binding50.getVerticalPos(),
          );
          sequenceDiagramFGHM5R23Binding50.models.addLoop(
            sequenceDiagramFGHM5R23Binding177,
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.ALT_START:
          sequenceDiagramFGHM5R23Helper2(
            sequenceDiagramFGHM5R23Binding158,
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding49.boxMargin,
            sequenceDiagramFGHM5R23Binding49.boxMargin +
              sequenceDiagramFGHM5R23Binding49.boxTextMargin,
            (sequenceDiagramFGHM5R23Input381) =>
              sequenceDiagramFGHM5R23Binding50.newLoop(
                sequenceDiagramFGHM5R23Input381,
              ),
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.ALT_ELSE:
          sequenceDiagramFGHM5R23Helper2(
            sequenceDiagramFGHM5R23Binding158,
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding49.boxMargin +
              sequenceDiagramFGHM5R23Binding49.boxTextMargin,
            sequenceDiagramFGHM5R23Binding49.boxMargin,
            (sequenceDiagramFGHM5R23Input374) =>
              sequenceDiagramFGHM5R23Binding50.addSectionToLoop(
                sequenceDiagramFGHM5R23Input374,
              ),
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.ALT_END:
          sequenceDiagramFGHM5R23Binding177 =
            sequenceDiagramFGHM5R23Binding50.endLoop();
          await sequenceDiagramFGHM5R23Binding48.drawLoop(
            sequenceDiagramFGHM5R23Binding146,
            sequenceDiagramFGHM5R23Binding177,
            "alt",
            sequenceDiagramFGHM5R23Binding49,
            sequenceDiagramFGHM5R23Binding176,
          );
          sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
            sequenceDiagramFGHM5R23Binding177.stopy -
              sequenceDiagramFGHM5R23Binding50.getVerticalPos(),
          );
          sequenceDiagramFGHM5R23Binding50.models.addLoop(
            sequenceDiagramFGHM5R23Binding177,
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.PAR_START:
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.PAR_OVER_START:
          sequenceDiagramFGHM5R23Helper2(
            sequenceDiagramFGHM5R23Binding158,
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding49.boxMargin,
            sequenceDiagramFGHM5R23Binding49.boxMargin +
              sequenceDiagramFGHM5R23Binding49.boxTextMargin,
            (sequenceDiagramFGHM5R23Input382) =>
              sequenceDiagramFGHM5R23Binding50.newLoop(
                sequenceDiagramFGHM5R23Input382,
              ),
          );
          sequenceDiagramFGHM5R23Binding50.saveVerticalPos();
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.PAR_AND:
          sequenceDiagramFGHM5R23Helper2(
            sequenceDiagramFGHM5R23Binding158,
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding49.boxMargin +
              sequenceDiagramFGHM5R23Binding49.boxTextMargin,
            sequenceDiagramFGHM5R23Binding49.boxMargin,
            (sequenceDiagramFGHM5R23Input375) =>
              sequenceDiagramFGHM5R23Binding50.addSectionToLoop(
                sequenceDiagramFGHM5R23Input375,
              ),
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.PAR_END:
          sequenceDiagramFGHM5R23Binding177 =
            sequenceDiagramFGHM5R23Binding50.endLoop();
          await sequenceDiagramFGHM5R23Binding48.drawLoop(
            sequenceDiagramFGHM5R23Binding146,
            sequenceDiagramFGHM5R23Binding177,
            "par",
            sequenceDiagramFGHM5R23Binding49,
            sequenceDiagramFGHM5R23Binding176,
          );
          sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
            sequenceDiagramFGHM5R23Binding177.stopy -
              sequenceDiagramFGHM5R23Binding50.getVerticalPos(),
          );
          sequenceDiagramFGHM5R23Binding50.models.addLoop(
            sequenceDiagramFGHM5R23Binding177,
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.AUTONUMBER:
          sequenceDiagramFGHM5R23Binding159 =
            sequenceDiagramFGHM5R23Binding176.message.start ||
            sequenceDiagramFGHM5R23Binding159;
          sequenceDiagramFGHM5R23Binding160 =
            sequenceDiagramFGHM5R23Binding176.message.step ||
            sequenceDiagramFGHM5R23Binding160;
          sequenceDiagramFGHM5R23Binding176.message.visible
            ? sequenceDiagramFGHM5R23Input13.db.enableSequenceNumbers()
            : sequenceDiagramFGHM5R23Input13.db.disableSequenceNumbers();
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.CRITICAL_START:
          sequenceDiagramFGHM5R23Helper2(
            sequenceDiagramFGHM5R23Binding158,
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding49.boxMargin,
            sequenceDiagramFGHM5R23Binding49.boxMargin +
              sequenceDiagramFGHM5R23Binding49.boxTextMargin,
            (sequenceDiagramFGHM5R23Input383) =>
              sequenceDiagramFGHM5R23Binding50.newLoop(
                sequenceDiagramFGHM5R23Input383,
              ),
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.CRITICAL_OPTION:
          sequenceDiagramFGHM5R23Helper2(
            sequenceDiagramFGHM5R23Binding158,
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding49.boxMargin +
              sequenceDiagramFGHM5R23Binding49.boxTextMargin,
            sequenceDiagramFGHM5R23Binding49.boxMargin,
            (sequenceDiagramFGHM5R23Input376) =>
              sequenceDiagramFGHM5R23Binding50.addSectionToLoop(
                sequenceDiagramFGHM5R23Input376,
              ),
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.CRITICAL_END:
          sequenceDiagramFGHM5R23Binding177 =
            sequenceDiagramFGHM5R23Binding50.endLoop();
          await sequenceDiagramFGHM5R23Binding48.drawLoop(
            sequenceDiagramFGHM5R23Binding146,
            sequenceDiagramFGHM5R23Binding177,
            "critical",
            sequenceDiagramFGHM5R23Binding49,
            sequenceDiagramFGHM5R23Binding176,
          );
          sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
            sequenceDiagramFGHM5R23Binding177.stopy -
              sequenceDiagramFGHM5R23Binding50.getVerticalPos(),
          );
          sequenceDiagramFGHM5R23Binding50.models.addLoop(
            sequenceDiagramFGHM5R23Binding177,
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.BREAK_START:
          sequenceDiagramFGHM5R23Helper2(
            sequenceDiagramFGHM5R23Binding158,
            sequenceDiagramFGHM5R23Binding176,
            sequenceDiagramFGHM5R23Binding49.boxMargin,
            sequenceDiagramFGHM5R23Binding49.boxMargin +
              sequenceDiagramFGHM5R23Binding49.boxTextMargin,
            (sequenceDiagramFGHM5R23Input384) =>
              sequenceDiagramFGHM5R23Binding50.newLoop(
                sequenceDiagramFGHM5R23Input384,
              ),
          );
          break;
        case sequenceDiagramFGHM5R23Input13.db.LINETYPE.BREAK_END:
          sequenceDiagramFGHM5R23Binding177 =
            sequenceDiagramFGHM5R23Binding50.endLoop();
          await sequenceDiagramFGHM5R23Binding48.drawLoop(
            sequenceDiagramFGHM5R23Binding146,
            sequenceDiagramFGHM5R23Binding177,
            "break",
            sequenceDiagramFGHM5R23Binding49,
            sequenceDiagramFGHM5R23Binding176,
          );
          sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
            sequenceDiagramFGHM5R23Binding177.stopy -
              sequenceDiagramFGHM5R23Binding50.getVerticalPos(),
          );
          sequenceDiagramFGHM5R23Binding50.models.addLoop(
            sequenceDiagramFGHM5R23Binding177,
          );
          break;
        default:
          try {
            sequenceDiagramFGHM5R23Binding179 =
              sequenceDiagramFGHM5R23Binding176.msgModel;
            sequenceDiagramFGHM5R23Binding179.starty =
              sequenceDiagramFGHM5R23Binding50.getVerticalPos();
            sequenceDiagramFGHM5R23Binding179.sequenceIndex =
              sequenceDiagramFGHM5R23Binding159;
            sequenceDiagramFGHM5R23Binding179.sequenceVisible =
              sequenceDiagramFGHM5R23Input13.db.showSequenceNumbers();
            sequenceDiagramFGHM5R23Binding179.id =
              sequenceDiagramFGHM5R23Binding176.id;
            sequenceDiagramFGHM5R23Binding179.from =
              sequenceDiagramFGHM5R23Binding176.from;
            sequenceDiagramFGHM5R23Binding179.to =
              sequenceDiagramFGHM5R23Binding176.to;
            let sequenceDiagramFGHM5R23Binding471 =
              await sequenceDiagramFGHM5R23Helper1(
                sequenceDiagramFGHM5R23Binding146,
                sequenceDiagramFGHM5R23Binding179,
              );
            sequenceDiagramFGHM5R23Helper3(
              sequenceDiagramFGHM5R23Binding176,
              sequenceDiagramFGHM5R23Binding179,
              sequenceDiagramFGHM5R23Binding471,
              sequenceDiagramFGHM5R23Binding163,
              sequenceDiagramFGHM5R23Binding147,
              sequenceDiagramFGHM5R23Binding148,
              sequenceDiagramFGHM5R23Binding149,
            );
            sequenceDiagramFGHM5R23Binding161.push({
              messageModel: sequenceDiagramFGHM5R23Binding179,
              lineStartY: sequenceDiagramFGHM5R23Binding471,
              msg: sequenceDiagramFGHM5R23Binding176,
            });
            sequenceDiagramFGHM5R23Binding50.models.addMessage(
              sequenceDiagramFGHM5R23Binding179,
            );
          } catch (sequenceDiagramFGHM5R23Binding575) {
            logger.error(
              "error while drawing message",
              sequenceDiagramFGHM5R23Binding575,
            );
          }
      }
      [
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.SOLID_OPEN,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.DOTTED_OPEN,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.SOLID,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.SOLID_TOP,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.SOLID_BOTTOM,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.STICK_TOP,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.STICK_BOTTOM,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.SOLID_TOP_DOTTED,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.SOLID_BOTTOM_DOTTED,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.STICK_TOP_DOTTED,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.STICK_BOTTOM_DOTTED,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.SOLID_ARROW_TOP_REVERSE,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.SOLID_ARROW_BOTTOM_REVERSE,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.STICK_ARROW_TOP_REVERSE,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.STICK_ARROW_BOTTOM_REVERSE,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE
          .SOLID_ARROW_TOP_REVERSE_DOTTED,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE
          .SOLID_ARROW_BOTTOM_REVERSE_DOTTED,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE
          .STICK_ARROW_TOP_REVERSE_DOTTED,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE
          .STICK_ARROW_BOTTOM_REVERSE_DOTTED,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.DOTTED,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.SOLID_CROSS,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.DOTTED_CROSS,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.SOLID_POINT,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.DOTTED_POINT,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.BIDIRECTIONAL_SOLID,
        sequenceDiagramFGHM5R23Input13.db.LINETYPE.BIDIRECTIONAL_DOTTED,
      ].includes(sequenceDiagramFGHM5R23Binding176.type) &&
        (sequenceDiagramFGHM5R23Binding159 +=
          sequenceDiagramFGHM5R23Binding160);
      sequenceDiagramFGHM5R23Binding163++;
    }
    logger.debug("createdActors", sequenceDiagramFGHM5R23Binding148);
    logger.debug("destroyedActors", sequenceDiagramFGHM5R23Binding149);
    await sequenceDiagramFGHM5R23Binding57(
      sequenceDiagramFGHM5R23Binding146,
      sequenceDiagramFGHM5R23Binding147,
      sequenceDiagramFGHM5R23Binding151,
      false,
      sequenceDiagramFGHM5R23Input11,
      sequenceDiagramFGHM5R23Input13,
      sequenceDiagramFGHM5R23Binding157,
    );
    for (let sequenceDiagramFGHM5R23Binding577 of sequenceDiagramFGHM5R23Binding161)
      await sequenceDiagramFGHM5R23Binding55(
        sequenceDiagramFGHM5R23Binding146,
        sequenceDiagramFGHM5R23Binding577.messageModel,
        sequenceDiagramFGHM5R23Binding577.lineStartY,
        sequenceDiagramFGHM5R23Input13,
        sequenceDiagramFGHM5R23Binding577.msg,
        sequenceDiagramFGHM5R23Input11,
      );
    sequenceDiagramFGHM5R23Binding49.mirrorActors &&
      (await sequenceDiagramFGHM5R23Binding57(
        sequenceDiagramFGHM5R23Binding146,
        sequenceDiagramFGHM5R23Binding147,
        sequenceDiagramFGHM5R23Binding151,
        true,
        sequenceDiagramFGHM5R23Input11,
        sequenceDiagramFGHM5R23Input13,
        sequenceDiagramFGHM5R23Binding157,
      ));
    sequenceDiagramFGHM5R23Binding162.forEach((item) =>
      sequenceDiagramFGHM5R23Binding48.drawBackgroundRect(
        sequenceDiagramFGHM5R23Binding146,
        item,
      ),
    );
    sequenceDiagramFGHM5R23Binding21(
      sequenceDiagramFGHM5R23Binding146,
      sequenceDiagramFGHM5R23Binding147,
      sequenceDiagramFGHM5R23Binding151,
      sequenceDiagramFGHM5R23Binding49,
    );
    for (let sequenceDiagramFGHM5R23Binding483 of sequenceDiagramFGHM5R23Binding50
      .models.boxes) {
      sequenceDiagramFGHM5R23Binding483.height =
        sequenceDiagramFGHM5R23Binding50.getVerticalPos() -
        sequenceDiagramFGHM5R23Binding483.y;
      sequenceDiagramFGHM5R23Binding50.insert(
        sequenceDiagramFGHM5R23Binding483.x,
        sequenceDiagramFGHM5R23Binding483.y,
        sequenceDiagramFGHM5R23Binding483.x +
          sequenceDiagramFGHM5R23Binding483.width,
        sequenceDiagramFGHM5R23Binding483.height,
      );
      let sequenceDiagramFGHM5R23Binding494 =
        sequenceDiagramFGHM5R23Binding49.boxMargin * 2;
      sequenceDiagramFGHM5R23Binding483.startx =
        sequenceDiagramFGHM5R23Binding483.x - sequenceDiagramFGHM5R23Binding494;
      sequenceDiagramFGHM5R23Binding483.starty =
        sequenceDiagramFGHM5R23Binding483.y -
        sequenceDiagramFGHM5R23Binding494 * 0.25;
      sequenceDiagramFGHM5R23Binding483.stopx =
        sequenceDiagramFGHM5R23Binding483.startx +
        sequenceDiagramFGHM5R23Binding483.width +
        2 * sequenceDiagramFGHM5R23Binding494;
      sequenceDiagramFGHM5R23Binding483.stopy =
        sequenceDiagramFGHM5R23Binding483.starty +
        sequenceDiagramFGHM5R23Binding483.height +
        sequenceDiagramFGHM5R23Binding494 * 0.75;
      sequenceDiagramFGHM5R23Binding483.stroke = "rgb(0,0,0, 0.5)";
      sequenceDiagramFGHM5R23Binding48.drawBox(
        sequenceDiagramFGHM5R23Binding146,
        sequenceDiagramFGHM5R23Binding483,
        sequenceDiagramFGHM5R23Binding49,
      );
    }
    sequenceDiagramFGHM5R23Binding154 &&
      sequenceDiagramFGHM5R23Binding50.bumpVerticalPos(
        sequenceDiagramFGHM5R23Binding49.boxMargin,
      );
    let sequenceDiagramFGHM5R23Binding164 = sequenceDiagramFGHM5R23Binding58(
        sequenceDiagramFGHM5R23Binding146,
        sequenceDiagramFGHM5R23Binding147,
        sequenceDiagramFGHM5R23Binding151,
        sequenceDiagramFGHM5R23Binding145,
      ),
      { bounds } = sequenceDiagramFGHM5R23Binding50.getBounds();
    bounds.startx === undefined && (bounds.startx = 0);
    bounds.starty === undefined && (bounds.starty = 0);
    bounds.stopx === undefined && (bounds.stopx = 0);
    bounds.stopy === undefined && (bounds.stopy = 0);
    let sequenceDiagramFGHM5R23Binding165 = bounds.stopy - bounds.starty;
    sequenceDiagramFGHM5R23Binding165 <
      sequenceDiagramFGHM5R23Binding164.maxHeight &&
      (sequenceDiagramFGHM5R23Binding165 =
        sequenceDiagramFGHM5R23Binding164.maxHeight);
    let sequenceDiagramFGHM5R23Binding166 =
      sequenceDiagramFGHM5R23Binding165 +
      2 * sequenceDiagramFGHM5R23Binding49.diagramMarginY;
    sequenceDiagramFGHM5R23Binding49.mirrorActors &&
      (sequenceDiagramFGHM5R23Binding166 =
        sequenceDiagramFGHM5R23Binding166 -
        sequenceDiagramFGHM5R23Binding49.boxMargin +
        sequenceDiagramFGHM5R23Binding49.bottomMarginAdj);
    let sequenceDiagramFGHM5R23Binding167 = bounds.stopx - bounds.startx;
    sequenceDiagramFGHM5R23Binding167 <
      sequenceDiagramFGHM5R23Binding164.maxWidth &&
      (sequenceDiagramFGHM5R23Binding167 =
        sequenceDiagramFGHM5R23Binding164.maxWidth);
    let sequenceDiagramFGHM5R23Binding168 =
      sequenceDiagramFGHM5R23Binding167 +
      2 * sequenceDiagramFGHM5R23Binding49.diagramMarginX;
    sequenceDiagramFGHM5R23Binding153 &&
      sequenceDiagramFGHM5R23Binding146
        .append("text")
        .text(sequenceDiagramFGHM5R23Binding153)
        .attr(
          "x",
          (bounds.stopx - bounds.startx) / 2 -
            2 * sequenceDiagramFGHM5R23Binding49.diagramMarginX,
        )
        .attr("y", -25);
    _chunkICPOFSXXC(
      sequenceDiagramFGHM5R23Binding146,
      sequenceDiagramFGHM5R23Binding166,
      sequenceDiagramFGHM5R23Binding168,
      sequenceDiagramFGHM5R23Binding49.useMaxWidth,
    );
    let sequenceDiagramFGHM5R23Binding169 = sequenceDiagramFGHM5R23Binding153
        ? 40
        : 0,
      sequenceDiagramFGHM5R23Binding170 =
        sequenceDiagramFGHM5R23Binding147.size && look === "neo" ? 30 : 0;
    sequenceDiagramFGHM5R23Binding146.attr(
      "viewBox",
      bounds.startx -
        sequenceDiagramFGHM5R23Binding49.diagramMarginX +
        " -" +
        (sequenceDiagramFGHM5R23Binding49.diagramMarginY +
          sequenceDiagramFGHM5R23Binding169) +
        " " +
        sequenceDiagramFGHM5R23Binding168 +
        " " +
        (sequenceDiagramFGHM5R23Binding166 +
          sequenceDiagramFGHM5R23Binding169 +
          sequenceDiagramFGHM5R23Binding170),
    );
    logger.debug("models:", sequenceDiagramFGHM5R23Binding50.models);
  }, "draw");
  defineFunctionName(
    sequenceDiagramFGHM5R23Helper4,
    "getMaxMessageWidthPerActor",
  );
  sequenceDiagramFGHM5R23Binding62 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input294,
  ) {
    let sequenceDiagramFGHM5R23Binding523 = 0,
      sequenceDiagramFGHM5R23Binding524 = sequenceDiagramFGHM5R23Binding54(
        sequenceDiagramFGHM5R23Binding49,
      );
    for (let sequenceDiagramFGHM5R23Binding546 in sequenceDiagramFGHM5R23Input294.links) {
      let sequenceDiagramFGHM5R23Binding557 =
        chunk5PVQY5BWG.calculateTextDimensions(
          sequenceDiagramFGHM5R23Binding546,
          sequenceDiagramFGHM5R23Binding524,
        ).width +
        2 * sequenceDiagramFGHM5R23Binding49.wrapPadding +
        2 * sequenceDiagramFGHM5R23Binding49.boxMargin;
      sequenceDiagramFGHM5R23Binding523 < sequenceDiagramFGHM5R23Binding557 &&
        (sequenceDiagramFGHM5R23Binding523 = sequenceDiagramFGHM5R23Binding557);
    }
    return sequenceDiagramFGHM5R23Binding523;
  }, "getRequiredPopupWidth");
  defineFunctionName(sequenceDiagramFGHM5R23Helper5, "calculateActorMargins");
  sequenceDiagramFGHM5R23Binding63 = defineFunctionName(async function (
    sequenceDiagramFGHM5R23Input79,
    sequenceDiagramFGHM5R23Input80,
    sequenceDiagramFGHM5R23Input81,
  ) {
    let sequenceDiagramFGHM5R23Binding333 = sequenceDiagramFGHM5R23Input80.get(
        sequenceDiagramFGHM5R23Input79.from,
      ),
      sequenceDiagramFGHM5R23Binding334 = sequenceDiagramFGHM5R23Input80.get(
        sequenceDiagramFGHM5R23Input79.to,
      ),
      sequenceDiagramFGHM5R23Binding335 = sequenceDiagramFGHM5R23Binding333.x,
      sequenceDiagramFGHM5R23Binding336 = sequenceDiagramFGHM5R23Binding334.x,
      sequenceDiagramFGHM5R23Binding337 =
        sequenceDiagramFGHM5R23Input79.wrap &&
        sequenceDiagramFGHM5R23Input79.message,
      sequenceDiagramFGHM5R23Binding338 = k(
        sequenceDiagramFGHM5R23Input79.message,
      )
        ? await i(sequenceDiagramFGHM5R23Input79.message, b())
        : chunk5PVQY5BWG.calculateTextDimensions(
            sequenceDiagramFGHM5R23Binding337
              ? chunk5PVQY5BWG.wrapLabel(
                  sequenceDiagramFGHM5R23Input79.message,
                  sequenceDiagramFGHM5R23Binding49.width,
                  sequenceDiagramFGHM5R23Binding53(
                    sequenceDiagramFGHM5R23Binding49,
                  ),
                )
              : sequenceDiagramFGHM5R23Input79.message,
            sequenceDiagramFGHM5R23Binding53(sequenceDiagramFGHM5R23Binding49),
          ),
      sequenceDiagramFGHM5R23Binding339 = {
        width: sequenceDiagramFGHM5R23Binding337
          ? sequenceDiagramFGHM5R23Binding49.width
          : s.getMax(
              sequenceDiagramFGHM5R23Binding49.width,
              sequenceDiagramFGHM5R23Binding338.width +
                2 * sequenceDiagramFGHM5R23Binding49.noteMargin,
            ),
        height: 0,
        startx: sequenceDiagramFGHM5R23Binding333.x,
        stopx: 0,
        starty: 0,
        stopy: 0,
        message: sequenceDiagramFGHM5R23Input79.message,
      };
    return (
      sequenceDiagramFGHM5R23Input79.placement ===
      sequenceDiagramFGHM5R23Input81.db.PLACEMENT.RIGHTOF
        ? ((sequenceDiagramFGHM5R23Binding339.width =
            sequenceDiagramFGHM5R23Binding337
              ? s.getMax(
                  sequenceDiagramFGHM5R23Binding49.width,
                  sequenceDiagramFGHM5R23Binding338.width,
                )
              : s.getMax(
                  sequenceDiagramFGHM5R23Binding333.width / 2 +
                    sequenceDiagramFGHM5R23Binding334.width / 2,
                  sequenceDiagramFGHM5R23Binding338.width +
                    2 * sequenceDiagramFGHM5R23Binding49.noteMargin,
                )),
          (sequenceDiagramFGHM5R23Binding339.startx =
            sequenceDiagramFGHM5R23Binding335 +
            (sequenceDiagramFGHM5R23Binding333.width +
              sequenceDiagramFGHM5R23Binding49.actorMargin) /
              2))
        : sequenceDiagramFGHM5R23Input79.placement ===
            sequenceDiagramFGHM5R23Input81.db.PLACEMENT.LEFTOF
          ? ((sequenceDiagramFGHM5R23Binding339.width =
              sequenceDiagramFGHM5R23Binding337
                ? s.getMax(
                    sequenceDiagramFGHM5R23Binding49.width,
                    sequenceDiagramFGHM5R23Binding338.width +
                      2 * sequenceDiagramFGHM5R23Binding49.noteMargin,
                  )
                : s.getMax(
                    sequenceDiagramFGHM5R23Binding333.width / 2 +
                      sequenceDiagramFGHM5R23Binding334.width / 2,
                    sequenceDiagramFGHM5R23Binding338.width +
                      2 * sequenceDiagramFGHM5R23Binding49.noteMargin,
                  )),
            (sequenceDiagramFGHM5R23Binding339.startx =
              sequenceDiagramFGHM5R23Binding335 -
              sequenceDiagramFGHM5R23Binding339.width +
              (sequenceDiagramFGHM5R23Binding333.width -
                sequenceDiagramFGHM5R23Binding49.actorMargin) /
                2))
          : sequenceDiagramFGHM5R23Input79.to ===
              sequenceDiagramFGHM5R23Input79.from
            ? ((sequenceDiagramFGHM5R23Binding338 =
                chunk5PVQY5BWG.calculateTextDimensions(
                  sequenceDiagramFGHM5R23Binding337
                    ? chunk5PVQY5BWG.wrapLabel(
                        sequenceDiagramFGHM5R23Input79.message,
                        s.getMax(
                          sequenceDiagramFGHM5R23Binding49.width,
                          sequenceDiagramFGHM5R23Binding333.width,
                        ),
                        sequenceDiagramFGHM5R23Binding53(
                          sequenceDiagramFGHM5R23Binding49,
                        ),
                      )
                    : sequenceDiagramFGHM5R23Input79.message,
                  sequenceDiagramFGHM5R23Binding53(
                    sequenceDiagramFGHM5R23Binding49,
                  ),
                )),
              (sequenceDiagramFGHM5R23Binding339.width =
                sequenceDiagramFGHM5R23Binding337
                  ? s.getMax(
                      sequenceDiagramFGHM5R23Binding49.width,
                      sequenceDiagramFGHM5R23Binding333.width,
                    )
                  : s.getMax(
                      sequenceDiagramFGHM5R23Binding333.width,
                      sequenceDiagramFGHM5R23Binding49.width,
                      sequenceDiagramFGHM5R23Binding338.width +
                        2 * sequenceDiagramFGHM5R23Binding49.noteMargin,
                    )),
              (sequenceDiagramFGHM5R23Binding339.startx =
                sequenceDiagramFGHM5R23Binding335 +
                (sequenceDiagramFGHM5R23Binding333.width -
                  sequenceDiagramFGHM5R23Binding339.width) /
                  2))
            : ((sequenceDiagramFGHM5R23Binding339.width =
                Math.abs(
                  sequenceDiagramFGHM5R23Binding335 +
                    sequenceDiagramFGHM5R23Binding333.width / 2 -
                    (sequenceDiagramFGHM5R23Binding336 +
                      sequenceDiagramFGHM5R23Binding334.width / 2),
                ) + sequenceDiagramFGHM5R23Binding49.actorMargin),
              (sequenceDiagramFGHM5R23Binding339.startx =
                sequenceDiagramFGHM5R23Binding335 <
                sequenceDiagramFGHM5R23Binding336
                  ? sequenceDiagramFGHM5R23Binding335 +
                    sequenceDiagramFGHM5R23Binding333.width / 2 -
                    sequenceDiagramFGHM5R23Binding49.actorMargin / 2
                  : sequenceDiagramFGHM5R23Binding336 +
                    sequenceDiagramFGHM5R23Binding334.width / 2 -
                    sequenceDiagramFGHM5R23Binding49.actorMargin / 2)),
      sequenceDiagramFGHM5R23Binding337 &&
        (sequenceDiagramFGHM5R23Binding339.message = chunk5PVQY5BWG.wrapLabel(
          sequenceDiagramFGHM5R23Input79.message,
          sequenceDiagramFGHM5R23Binding339.width -
            2 * sequenceDiagramFGHM5R23Binding49.wrapPadding,
          sequenceDiagramFGHM5R23Binding53(sequenceDiagramFGHM5R23Binding49),
        )),
      logger.debug(
        `NM:[${sequenceDiagramFGHM5R23Binding339.startx},${sequenceDiagramFGHM5R23Binding339.stopx},${sequenceDiagramFGHM5R23Binding339.starty},${sequenceDiagramFGHM5R23Binding339.stopy}:${sequenceDiagramFGHM5R23Binding339.width},${sequenceDiagramFGHM5R23Binding339.height}=${sequenceDiagramFGHM5R23Input79.message}]`,
      ),
      sequenceDiagramFGHM5R23Binding339
    );
  }, "buildNoteModel");
  at = 4;
  sequenceDiagramFGHM5R23Binding64 = 6;
  sequenceDiagramFGHM5R23Binding65 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input315,
    sequenceDiagramFGHM5R23Input316,
  ) {
    let {
      CENTRAL_CONNECTION,
      CENTRAL_CONNECTION_REVERSE,
      CENTRAL_CONNECTION_DUAL,
    } = sequenceDiagramFGHM5R23Input316.db.LINETYPE;
    return [
      CENTRAL_CONNECTION,
      CENTRAL_CONNECTION_REVERSE,
      CENTRAL_CONNECTION_DUAL,
    ].includes(sequenceDiagramFGHM5R23Input315.centralConnection);
  }, "hasCentralConnection");
  sequenceDiagramFGHM5R23Binding66 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input221,
    sequenceDiagramFGHM5R23Input222,
    sequenceDiagramFGHM5R23Input223,
  ) {
    let {
        CENTRAL_CONNECTION_REVERSE,
        CENTRAL_CONNECTION_DUAL,
        BIDIRECTIONAL_SOLID,
        BIDIRECTIONAL_DOTTED,
      } = sequenceDiagramFGHM5R23Input222.db.LINETYPE,
      sequenceDiagramFGHM5R23Binding476 = 0;
    return (
      (sequenceDiagramFGHM5R23Input221.centralConnection ===
        CENTRAL_CONNECTION_REVERSE ||
        sequenceDiagramFGHM5R23Input221.centralConnection ===
          CENTRAL_CONNECTION_DUAL) &&
        (sequenceDiagramFGHM5R23Binding476 += at),
      (sequenceDiagramFGHM5R23Input221.centralConnection ===
        CENTRAL_CONNECTION_REVERSE ||
        sequenceDiagramFGHM5R23Input221.centralConnection ===
          CENTRAL_CONNECTION_DUAL) &&
        (sequenceDiagramFGHM5R23Input221.type === BIDIRECTIONAL_SOLID ||
          sequenceDiagramFGHM5R23Input221.type === BIDIRECTIONAL_DOTTED) &&
        (sequenceDiagramFGHM5R23Binding476 += sequenceDiagramFGHM5R23Input223
          ? 0
          : -sequenceDiagramFGHM5R23Binding64),
      sequenceDiagramFGHM5R23Binding476
    );
  }, "calculateCentralConnectionOffset");
  sequenceDiagramFGHM5R23Binding67 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input233,
    sequenceDiagramFGHM5R23Input234,
  ) {
    let {
      SOLID_ARROW_TOP_REVERSE,
      SOLID_ARROW_TOP_REVERSE_DOTTED,
      SOLID_ARROW_BOTTOM_REVERSE,
      SOLID_ARROW_BOTTOM_REVERSE_DOTTED,
      STICK_ARROW_TOP_REVERSE,
      STICK_ARROW_TOP_REVERSE_DOTTED,
      STICK_ARROW_BOTTOM_REVERSE,
      STICK_ARROW_BOTTOM_REVERSE_DOTTED,
    } = sequenceDiagramFGHM5R23Input234.db.LINETYPE;
    return [
      SOLID_ARROW_TOP_REVERSE,
      SOLID_ARROW_TOP_REVERSE_DOTTED,
      SOLID_ARROW_BOTTOM_REVERSE,
      SOLID_ARROW_BOTTOM_REVERSE_DOTTED,
      STICK_ARROW_TOP_REVERSE,
      STICK_ARROW_TOP_REVERSE_DOTTED,
      STICK_ARROW_BOTTOM_REVERSE,
      STICK_ARROW_BOTTOM_REVERSE_DOTTED,
    ].includes(sequenceDiagramFGHM5R23Input233.type);
  }, "isReverseArrowType");
  sequenceDiagramFGHM5R23Binding68 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input330,
    sequenceDiagramFGHM5R23Input331,
  ) {
    let { BIDIRECTIONAL_SOLID, BIDIRECTIONAL_DOTTED } =
      sequenceDiagramFGHM5R23Input331.db.LINETYPE;
    return [BIDIRECTIONAL_SOLID, BIDIRECTIONAL_DOTTED].includes(
      sequenceDiagramFGHM5R23Input330.type,
    );
  }, "isBidirectionalArrowType");
  sequenceDiagramFGHM5R23Binding69 = defineFunctionName(function (
    sequenceDiagramFGHM5R23Input26,
    sequenceDiagramFGHM5R23Input27,
    sequenceDiagramFGHM5R23Input28,
  ) {
    let { look } = b();
    if (
      ![
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_OPEN,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.DOTTED_OPEN,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_TOP,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_BOTTOM,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.STICK_TOP,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.STICK_BOTTOM,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_TOP_DOTTED,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_BOTTOM_DOTTED,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.STICK_TOP_DOTTED,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.STICK_BOTTOM_DOTTED,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_ARROW_TOP_REVERSE,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_ARROW_BOTTOM_REVERSE,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.STICK_ARROW_TOP_REVERSE,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.STICK_ARROW_BOTTOM_REVERSE,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE
          .SOLID_ARROW_TOP_REVERSE_DOTTED,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE
          .SOLID_ARROW_BOTTOM_REVERSE_DOTTED,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE
          .STICK_ARROW_TOP_REVERSE_DOTTED,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE
          .STICK_ARROW_BOTTOM_REVERSE_DOTTED,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.DOTTED,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_CROSS,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.DOTTED_CROSS,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_POINT,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.DOTTED_POINT,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.BIDIRECTIONAL_SOLID,
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.BIDIRECTIONAL_DOTTED,
      ].includes(sequenceDiagramFGHM5R23Input26.type)
    )
      return {};
    let [sequenceDiagramFGHM5R23Binding209, sequenceDiagramFGHM5R23Binding210] =
        sequenceDiagramFGHM5R23Binding60(
          sequenceDiagramFGHM5R23Input26.from,
          sequenceDiagramFGHM5R23Input27,
        ),
      [sequenceDiagramFGHM5R23Binding211, sequenceDiagramFGHM5R23Binding212] =
        sequenceDiagramFGHM5R23Binding60(
          sequenceDiagramFGHM5R23Input26.to,
          sequenceDiagramFGHM5R23Input27,
        ),
      sequenceDiagramFGHM5R23Binding213 =
        sequenceDiagramFGHM5R23Binding209 <= sequenceDiagramFGHM5R23Binding211,
      sequenceDiagramFGHM5R23Binding214 = sequenceDiagramFGHM5R23Binding213
        ? sequenceDiagramFGHM5R23Binding210
        : sequenceDiagramFGHM5R23Binding209,
      sequenceDiagramFGHM5R23Binding215 = sequenceDiagramFGHM5R23Binding213
        ? sequenceDiagramFGHM5R23Binding211
        : sequenceDiagramFGHM5R23Binding212;
    look === "neo" &&
      (sequenceDiagramFGHM5R23Input26.type !==
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_OPEN &&
        (sequenceDiagramFGHM5R23Binding215 += sequenceDiagramFGHM5R23Binding213
          ? -3
          : 3),
      (sequenceDiagramFGHM5R23Input26.type ===
        sequenceDiagramFGHM5R23Input28.db.LINETYPE.BIDIRECTIONAL_SOLID ||
        sequenceDiagramFGHM5R23Input26.type ===
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.BIDIRECTIONAL_DOTTED) &&
        (sequenceDiagramFGHM5R23Binding214 += sequenceDiagramFGHM5R23Binding213
          ? 3
          : -3));
    sequenceDiagramFGHM5R23Binding214 += sequenceDiagramFGHM5R23Binding66(
      sequenceDiagramFGHM5R23Input26,
      sequenceDiagramFGHM5R23Input28,
      sequenceDiagramFGHM5R23Binding213,
    );
    let sequenceDiagramFGHM5R23Binding216 =
        Math.abs(
          sequenceDiagramFGHM5R23Binding211 - sequenceDiagramFGHM5R23Binding212,
        ) > 2,
      sequenceDiagramFGHM5R23Binding217 = defineFunctionName(
        (sequenceDiagramFGHM5R23Input385) =>
          sequenceDiagramFGHM5R23Binding213
            ? -sequenceDiagramFGHM5R23Input385
            : sequenceDiagramFGHM5R23Input385,
        "adjustValue",
      );
    sequenceDiagramFGHM5R23Input26.from === sequenceDiagramFGHM5R23Input26.to
      ? (sequenceDiagramFGHM5R23Binding215 = sequenceDiagramFGHM5R23Binding214)
      : (sequenceDiagramFGHM5R23Input26.activate &&
          !sequenceDiagramFGHM5R23Binding216 &&
          (sequenceDiagramFGHM5R23Binding215 +=
            sequenceDiagramFGHM5R23Binding217(
              sequenceDiagramFGHM5R23Binding49.activationWidth / 2 - 1,
            )),
        [
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_OPEN,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.DOTTED_OPEN,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.STICK_TOP,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.STICK_BOTTOM,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.STICK_TOP_DOTTED,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.STICK_BOTTOM_DOTTED,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE
            .SOLID_ARROW_TOP_REVERSE_DOTTED,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE
            .SOLID_ARROW_BOTTOM_REVERSE_DOTTED,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.STICK_ARROW_TOP_REVERSE,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.STICK_ARROW_BOTTOM_REVERSE,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE
            .STICK_ARROW_TOP_REVERSE_DOTTED,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE
            .STICK_ARROW_BOTTOM_REVERSE_DOTTED,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_ARROW_TOP_REVERSE,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_ARROW_BOTTOM_REVERSE,
        ].includes(sequenceDiagramFGHM5R23Input26.type) ||
          (sequenceDiagramFGHM5R23Binding215 +=
            sequenceDiagramFGHM5R23Binding217(3)),
        [
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.BIDIRECTIONAL_SOLID,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.BIDIRECTIONAL_DOTTED,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE
            .SOLID_ARROW_TOP_REVERSE_DOTTED,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE
            .SOLID_ARROW_BOTTOM_REVERSE_DOTTED,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_ARROW_TOP_REVERSE,
          sequenceDiagramFGHM5R23Input28.db.LINETYPE.SOLID_ARROW_BOTTOM_REVERSE,
        ].includes(sequenceDiagramFGHM5R23Input26.type) &&
          (sequenceDiagramFGHM5R23Binding214 -=
            sequenceDiagramFGHM5R23Binding217(3)));
    let sequenceDiagramFGHM5R23Binding218 = [
        sequenceDiagramFGHM5R23Binding209,
        sequenceDiagramFGHM5R23Binding210,
        sequenceDiagramFGHM5R23Binding211,
        sequenceDiagramFGHM5R23Binding212,
      ],
      sequenceDiagramFGHM5R23Binding219 = Math.abs(
        sequenceDiagramFGHM5R23Binding214 - sequenceDiagramFGHM5R23Binding215,
      );
    sequenceDiagramFGHM5R23Input26.wrap &&
      sequenceDiagramFGHM5R23Input26.message &&
      (sequenceDiagramFGHM5R23Input26.message = chunk5PVQY5BWG.wrapLabel(
        sequenceDiagramFGHM5R23Input26.message,
        s.getMax(
          sequenceDiagramFGHM5R23Binding219 +
            2 * sequenceDiagramFGHM5R23Binding49.wrapPadding,
          sequenceDiagramFGHM5R23Binding49.width,
        ),
        $(sequenceDiagramFGHM5R23Binding49),
      ));
    let sequenceDiagramFGHM5R23Binding220 =
      chunk5PVQY5BWG.calculateTextDimensions(
        sequenceDiagramFGHM5R23Input26.message,
        $(sequenceDiagramFGHM5R23Binding49),
      );
    return {
      width: s.getMax(
        sequenceDiagramFGHM5R23Input26.wrap
          ? 0
          : sequenceDiagramFGHM5R23Binding220.width +
              2 * sequenceDiagramFGHM5R23Binding49.wrapPadding,
        sequenceDiagramFGHM5R23Binding219 +
          2 * sequenceDiagramFGHM5R23Binding49.wrapPadding,
        sequenceDiagramFGHM5R23Binding49.width,
      ),
      height: 0,
      startx: sequenceDiagramFGHM5R23Binding214,
      stopx: sequenceDiagramFGHM5R23Binding215,
      starty: 0,
      stopy: 0,
      message: sequenceDiagramFGHM5R23Input26.message,
      type: sequenceDiagramFGHM5R23Input26.type,
      wrap: sequenceDiagramFGHM5R23Input26.wrap,
      fromBounds: Math.min.apply(null, sequenceDiagramFGHM5R23Binding218),
      toBounds: Math.max.apply(null, sequenceDiagramFGHM5R23Binding218),
    };
  }, "buildMessageModel");
  sequenceDiagramFGHM5R23Binding70 = defineFunctionName(async function (
    sequenceDiagramFGHM5R23Input29,
    sequenceDiagramFGHM5R23Input30,
    sequenceDiagramFGHM5R23Input31,
    sequenceDiagramFGHM5R23Input32,
  ) {
    let sequenceDiagramFGHM5R23Binding221 = {},
      sequenceDiagramFGHM5R23Binding222 = [],
      sequenceDiagramFGHM5R23Binding223,
      sequenceDiagramFGHM5R23Binding224,
      sequenceDiagramFGHM5R23Binding225;
    for (let sequenceDiagramFGHM5R23Binding226 of sequenceDiagramFGHM5R23Input29) {
      switch (sequenceDiagramFGHM5R23Binding226.type) {
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.LOOP_START:
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.ALT_START:
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.OPT_START:
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.PAR_START:
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.PAR_OVER_START:
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.CRITICAL_START:
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.BREAK_START:
          sequenceDiagramFGHM5R23Binding222.push({
            id: sequenceDiagramFGHM5R23Binding226.id,
            msg: sequenceDiagramFGHM5R23Binding226.message,
            from: 9007199254740991,
            to: -9007199254740991,
            width: 0,
          });
          break;
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.ALT_ELSE:
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.PAR_AND:
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.CRITICAL_OPTION:
          sequenceDiagramFGHM5R23Binding226.message &&
            ((sequenceDiagramFGHM5R23Binding223 =
              sequenceDiagramFGHM5R23Binding222.pop()),
            (sequenceDiagramFGHM5R23Binding221[
              sequenceDiagramFGHM5R23Binding223.id
            ] = sequenceDiagramFGHM5R23Binding223),
            (sequenceDiagramFGHM5R23Binding221[
              sequenceDiagramFGHM5R23Binding226.id
            ] = sequenceDiagramFGHM5R23Binding223),
            sequenceDiagramFGHM5R23Binding222.push(
              sequenceDiagramFGHM5R23Binding223,
            ));
          break;
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.LOOP_END:
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.ALT_END:
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.OPT_END:
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.PAR_END:
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.CRITICAL_END:
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.BREAK_END:
          sequenceDiagramFGHM5R23Binding223 =
            sequenceDiagramFGHM5R23Binding222.pop();
          sequenceDiagramFGHM5R23Binding221[
            sequenceDiagramFGHM5R23Binding223.id
          ] = sequenceDiagramFGHM5R23Binding223;
          break;
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.ACTIVE_START:
          {
            let sequenceDiagramFGHM5R23Binding479 =
                sequenceDiagramFGHM5R23Input30.get(
                  sequenceDiagramFGHM5R23Binding226.from
                    ? sequenceDiagramFGHM5R23Binding226.from
                    : sequenceDiagramFGHM5R23Binding226.to.actor,
                ),
              sequenceDiagramFGHM5R23Binding480 =
                sequenceDiagramFGHM5R23Binding59(
                  sequenceDiagramFGHM5R23Binding226.from
                    ? sequenceDiagramFGHM5R23Binding226.from
                    : sequenceDiagramFGHM5R23Binding226.to.actor,
                ).length,
              sequenceDiagramFGHM5R23Binding481 =
                sequenceDiagramFGHM5R23Binding479.x +
                sequenceDiagramFGHM5R23Binding479.width / 2 +
                ((sequenceDiagramFGHM5R23Binding480 - 1) *
                  sequenceDiagramFGHM5R23Binding49.activationWidth) /
                  2,
              sequenceDiagramFGHM5R23Binding482 = {
                startx: sequenceDiagramFGHM5R23Binding481,
                stopx:
                  sequenceDiagramFGHM5R23Binding481 +
                  sequenceDiagramFGHM5R23Binding49.activationWidth,
                actor: sequenceDiagramFGHM5R23Binding226.from,
                enabled: true,
              };
            sequenceDiagramFGHM5R23Binding50.activations.push(
              sequenceDiagramFGHM5R23Binding482,
            );
          }
          break;
        case sequenceDiagramFGHM5R23Input32.db.LINETYPE.ACTIVE_END:
          {
            let sequenceDiagramFGHM5R23Binding558 =
              sequenceDiagramFGHM5R23Binding50.activations
                .map((item) => item.actor)
                .lastIndexOf(sequenceDiagramFGHM5R23Binding226.from);
            sequenceDiagramFGHM5R23Binding50.activations
              .splice(sequenceDiagramFGHM5R23Binding558, 1)
              .splice(0, 1);
          }
          break;
      }
      sequenceDiagramFGHM5R23Binding226.placement === undefined
        ? ((sequenceDiagramFGHM5R23Binding225 =
            sequenceDiagramFGHM5R23Binding69(
              sequenceDiagramFGHM5R23Binding226,
              sequenceDiagramFGHM5R23Input30,
              sequenceDiagramFGHM5R23Input32,
            )),
          (sequenceDiagramFGHM5R23Binding226.msgModel =
            sequenceDiagramFGHM5R23Binding225),
          sequenceDiagramFGHM5R23Binding225.startx &&
            sequenceDiagramFGHM5R23Binding225.stopx &&
            sequenceDiagramFGHM5R23Binding222.length > 0 &&
            sequenceDiagramFGHM5R23Binding222.forEach((item) => {
              if (
                ((sequenceDiagramFGHM5R23Binding223 = item),
                sequenceDiagramFGHM5R23Binding225.startx ===
                  sequenceDiagramFGHM5R23Binding225.stopx)
              ) {
                let sequenceDiagramFGHM5R23Binding457 =
                    sequenceDiagramFGHM5R23Input30.get(
                      sequenceDiagramFGHM5R23Binding226.from,
                    ),
                  sequenceDiagramFGHM5R23Binding458 =
                    sequenceDiagramFGHM5R23Input30.get(
                      sequenceDiagramFGHM5R23Binding226.to,
                    );
                sequenceDiagramFGHM5R23Binding223.from = s.getMin(
                  sequenceDiagramFGHM5R23Binding457.x -
                    sequenceDiagramFGHM5R23Binding225.width / 2,
                  sequenceDiagramFGHM5R23Binding457.x -
                    sequenceDiagramFGHM5R23Binding457.width / 2,
                  sequenceDiagramFGHM5R23Binding223.from,
                );
                sequenceDiagramFGHM5R23Binding223.to = s.getMax(
                  sequenceDiagramFGHM5R23Binding458.x +
                    sequenceDiagramFGHM5R23Binding225.width / 2,
                  sequenceDiagramFGHM5R23Binding458.x +
                    sequenceDiagramFGHM5R23Binding457.width / 2,
                  sequenceDiagramFGHM5R23Binding223.to,
                );
                sequenceDiagramFGHM5R23Binding223.width =
                  s.getMax(
                    sequenceDiagramFGHM5R23Binding223.width,
                    Math.abs(
                      sequenceDiagramFGHM5R23Binding223.to -
                        sequenceDiagramFGHM5R23Binding223.from,
                    ),
                  ) - sequenceDiagramFGHM5R23Binding49.labelBoxWidth;
              } else {
                sequenceDiagramFGHM5R23Binding223.from = s.getMin(
                  sequenceDiagramFGHM5R23Binding225.startx,
                  sequenceDiagramFGHM5R23Binding223.from,
                );
                sequenceDiagramFGHM5R23Binding223.to = s.getMax(
                  sequenceDiagramFGHM5R23Binding225.stopx,
                  sequenceDiagramFGHM5R23Binding223.to,
                );
                sequenceDiagramFGHM5R23Binding223.width =
                  s.getMax(
                    sequenceDiagramFGHM5R23Binding223.width,
                    sequenceDiagramFGHM5R23Binding225.width,
                  ) - sequenceDiagramFGHM5R23Binding49.labelBoxWidth;
              }
            }))
        : ((sequenceDiagramFGHM5R23Binding224 =
            await sequenceDiagramFGHM5R23Binding63(
              sequenceDiagramFGHM5R23Binding226,
              sequenceDiagramFGHM5R23Input30,
              sequenceDiagramFGHM5R23Input32,
            )),
          (sequenceDiagramFGHM5R23Binding226.noteModel =
            sequenceDiagramFGHM5R23Binding224),
          sequenceDiagramFGHM5R23Binding222.forEach((item) => {
            sequenceDiagramFGHM5R23Binding223 = item;
            sequenceDiagramFGHM5R23Binding223.from = s.getMin(
              sequenceDiagramFGHM5R23Binding223.from,
              sequenceDiagramFGHM5R23Binding224.startx,
            );
            sequenceDiagramFGHM5R23Binding223.to = s.getMax(
              sequenceDiagramFGHM5R23Binding223.to,
              sequenceDiagramFGHM5R23Binding224.startx +
                sequenceDiagramFGHM5R23Binding224.width,
            );
            sequenceDiagramFGHM5R23Binding223.width =
              s.getMax(
                sequenceDiagramFGHM5R23Binding223.width,
                Math.abs(
                  sequenceDiagramFGHM5R23Binding223.from -
                    sequenceDiagramFGHM5R23Binding223.to,
                ),
              ) - sequenceDiagramFGHM5R23Binding49.labelBoxWidth;
          }));
    }
    return (
      (sequenceDiagramFGHM5R23Binding50.activations = []),
      logger.debug("Loop type widths:", sequenceDiagramFGHM5R23Binding221),
      sequenceDiagramFGHM5R23Binding221
    );
  }, "calculateLoopBounds");
  SequenceDiagramFGHM5R23 = {
    parser: sequenceDiagramFGHM5R23Binding3,
    get db() {
      return new sequenceDiagramFGHM5R23Binding8();
    },
    renderer: {
      bounds: sequenceDiagramFGHM5R23Binding50,
      drawActors: sequenceDiagramFGHM5R23Binding57,
      drawActorsPopup: sequenceDiagramFGHM5R23Binding58,
      setConf: $e,
      draw: sequenceDiagramFGHM5R23Binding61,
    },
    styles: sequenceDiagramFGHM5R23Binding9,
    init: defineFunctionName((sequenceDiagramFGHM5R23Input329) => {
      sequenceDiagramFGHM5R23Input329.sequence ||= {};
      sequenceDiagramFGHM5R23Input329.wrap &&
        ((sequenceDiagramFGHM5R23Input329.sequence.wrap =
          sequenceDiagramFGHM5R23Input329.wrap),
        W({
          sequence: {
            wrap: sequenceDiagramFGHM5R23Input329.wrap,
          },
        }));
    }, "init"),
  };
})();
export { SequenceDiagramFGHM5R23 as diagram };
