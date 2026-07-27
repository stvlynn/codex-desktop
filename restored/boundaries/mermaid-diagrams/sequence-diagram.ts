// Restored from ref/webview/assets/sequenceDiagram-WL72ISMW-BEfk_Kge.js
// Mermaid sequence diagram definition primary (db + renderer + parser).
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
  logger,
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt-dup";
import {
  B as _chunkABZYJK2DB,
  C as _chunkABZYJK2DC,
  V as _chunkABZYJK2DV,
  a,
  B,
  C,
  E,
  i,
  k,
  L,
  O,
  P,
  r,
  s,
  U,
  _,
  V,
  W,
  y,
} from "../../diagrams/mermaid-config";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import { dist } from "../../vendor/sanitize-url";
import {
  chunkS3R3BYOJG,
  chunkS3R3BYOJP,
  chunkS3R3BYOJU,
} from "./mermaid-common-utils";
import { initSvgDrawingHelpersChunk as c, drawRect as chunkTZMSLE5BI, drawEmbeddedImage as n, getNoteRect as o, drawImage as chunkTZMSLE5BR, getTextObj as chunkTZMSLE5BS, drawBackgroundRect as t } from "../../diagrams/svg-drawing-helpers";
import { initMermaidJsYamlAlt as chunkMI3HLSF2N, yamlLoad as chunkMI3HLSF2R, yamlCoreSchema as chunkMI3HLSF2T } from "../../utils/mermaid-js-yaml-alt";
import { initImperativeStateChunk as chunkQZHKN3VNN, ImperativeState as chunkQZHKN3VNT } from "../../diagrams/imperative-state-alt";
async function sequenceDiagramWL72ISMWHelper1(
  sequenceDiagramWL72ISMWInput119,
  sequenceDiagramWL72ISMWInput120,
) {
  sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(10);
  let { startx, stopx, message } = sequenceDiagramWL72ISMWInput120,
    sequenceDiagramWL72ISMWBinding346 = s.splitBreaks(message).length,
    sequenceDiagramWL72ISMWBinding347 = O(message),
    sequenceDiagramWL72ISMWBinding348 = sequenceDiagramWL72ISMWBinding347
      ? await i(message, _chunkABZYJK2DB())
      : chunkS3R3BYOJG.calculateTextDimensions(
          message,
          sequenceDiagramWL72ISMWBinding50(sequenceDiagramWL72ISMWBinding47),
        );
  if (!sequenceDiagramWL72ISMWBinding347) {
    let sequenceDiagramWL72ISMWBinding496 =
      sequenceDiagramWL72ISMWBinding348.height /
      sequenceDiagramWL72ISMWBinding346;
    sequenceDiagramWL72ISMWInput120.height += sequenceDiagramWL72ISMWBinding496;
    sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
      sequenceDiagramWL72ISMWBinding496,
    );
  }
  let sequenceDiagramWL72ISMWBinding349,
    sequenceDiagramWL72ISMWBinding350 =
      sequenceDiagramWL72ISMWBinding348.height - 10,
    sequenceDiagramWL72ISMWBinding351 = sequenceDiagramWL72ISMWBinding348.width;
  if (startx === stopx) {
    sequenceDiagramWL72ISMWBinding349 =
      sequenceDiagramWL72ISMWBinding48.getVerticalPos() +
      sequenceDiagramWL72ISMWBinding350;
    sequenceDiagramWL72ISMWBinding47.rightAngles ||
      ((sequenceDiagramWL72ISMWBinding350 +=
        sequenceDiagramWL72ISMWBinding47.boxMargin),
      (sequenceDiagramWL72ISMWBinding349 =
        sequenceDiagramWL72ISMWBinding48.getVerticalPos() +
        sequenceDiagramWL72ISMWBinding350));
    sequenceDiagramWL72ISMWBinding350 += 30;
    let sequenceDiagramWL72ISMWBinding432 = s.getMax(
      sequenceDiagramWL72ISMWBinding351 / 2,
      sequenceDiagramWL72ISMWBinding47.width / 2,
    );
    sequenceDiagramWL72ISMWBinding48.insert(
      startx - sequenceDiagramWL72ISMWBinding432,
      sequenceDiagramWL72ISMWBinding48.getVerticalPos() -
        10 +
        sequenceDiagramWL72ISMWBinding350,
      stopx + sequenceDiagramWL72ISMWBinding432,
      sequenceDiagramWL72ISMWBinding48.getVerticalPos() +
        30 +
        sequenceDiagramWL72ISMWBinding350,
    );
  } else {
    sequenceDiagramWL72ISMWBinding350 +=
      sequenceDiagramWL72ISMWBinding47.boxMargin;
    sequenceDiagramWL72ISMWBinding349 =
      sequenceDiagramWL72ISMWBinding48.getVerticalPos() +
      sequenceDiagramWL72ISMWBinding350;
    sequenceDiagramWL72ISMWBinding48.insert(
      startx,
      sequenceDiagramWL72ISMWBinding349 - 10,
      stopx,
      sequenceDiagramWL72ISMWBinding349,
    );
  }
  return (
    sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
      sequenceDiagramWL72ISMWBinding350,
    ),
    (sequenceDiagramWL72ISMWInput120.height +=
      sequenceDiagramWL72ISMWBinding350),
    (sequenceDiagramWL72ISMWInput120.stopy =
      sequenceDiagramWL72ISMWInput120.starty +
      sequenceDiagramWL72ISMWInput120.height),
    sequenceDiagramWL72ISMWBinding48.insert(
      sequenceDiagramWL72ISMWInput120.fromBounds,
      sequenceDiagramWL72ISMWInput120.starty,
      sequenceDiagramWL72ISMWInput120.toBounds,
      sequenceDiagramWL72ISMWInput120.stopy,
    ),
    sequenceDiagramWL72ISMWBinding349
  );
}
function sequenceDiagramWL72ISMWHelper2(
  sequenceDiagramWL72ISMWInput182,
  sequenceDiagramWL72ISMWInput183,
  sequenceDiagramWL72ISMWInput184,
  sequenceDiagramWL72ISMWInput185,
  sequenceDiagramWL72ISMWInput186,
) {
  sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
    sequenceDiagramWL72ISMWInput184,
  );
  let sequenceDiagramWL72ISMWBinding396 = sequenceDiagramWL72ISMWInput185;
  if (
    sequenceDiagramWL72ISMWInput183.id &&
    sequenceDiagramWL72ISMWInput183.message &&
    sequenceDiagramWL72ISMWInput182[sequenceDiagramWL72ISMWInput183.id]
  ) {
    let sequenceDiagramWL72ISMWBinding422 =
        sequenceDiagramWL72ISMWInput182[sequenceDiagramWL72ISMWInput183.id]
          .width,
      sequenceDiagramWL72ISMWBinding423 = sequenceDiagramWL72ISMWBinding50(
        sequenceDiagramWL72ISMWBinding47,
      );
    sequenceDiagramWL72ISMWInput183.message = chunkS3R3BYOJG.wrapLabel(
      `[${sequenceDiagramWL72ISMWInput183.message}]`,
      sequenceDiagramWL72ISMWBinding422 -
        2 * sequenceDiagramWL72ISMWBinding47.wrapPadding,
      sequenceDiagramWL72ISMWBinding423,
    );
    sequenceDiagramWL72ISMWInput183.width = sequenceDiagramWL72ISMWBinding422;
    sequenceDiagramWL72ISMWInput183.wrap = true;
    let sequenceDiagramWL72ISMWBinding424 =
        chunkS3R3BYOJG.calculateTextDimensions(
          sequenceDiagramWL72ISMWInput183.message,
          sequenceDiagramWL72ISMWBinding423,
        ),
      sequenceDiagramWL72ISMWBinding425 = s.getMax(
        sequenceDiagramWL72ISMWBinding424.height,
        sequenceDiagramWL72ISMWBinding47.labelBoxHeight,
      );
    sequenceDiagramWL72ISMWBinding396 =
      sequenceDiagramWL72ISMWInput185 + sequenceDiagramWL72ISMWBinding425;
    logger.debug(
      `${sequenceDiagramWL72ISMWBinding425} - ${sequenceDiagramWL72ISMWInput183.message}`,
    );
  }
  sequenceDiagramWL72ISMWInput186(sequenceDiagramWL72ISMWInput183);
  sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
    sequenceDiagramWL72ISMWBinding396,
  );
}
function sequenceDiagramWL72ISMWHelper3(
  sequenceDiagramWL72ISMWInput82,
  sequenceDiagramWL72ISMWInput83,
  sequenceDiagramWL72ISMWInput84,
  sequenceDiagramWL72ISMWInput85,
  sequenceDiagramWL72ISMWInput86,
  sequenceDiagramWL72ISMWInput87,
  sequenceDiagramWL72ISMWInput88,
) {
  function sequenceDiagramWL72ISMWHelper19(
    sequenceDiagramWL72ISMWInput207,
    sequenceDiagramWL72ISMWInput208,
  ) {
    sequenceDiagramWL72ISMWInput207.x <
    sequenceDiagramWL72ISMWInput86.get(sequenceDiagramWL72ISMWInput82.from).x
      ? (sequenceDiagramWL72ISMWBinding48.insert(
          sequenceDiagramWL72ISMWInput83.stopx -
            sequenceDiagramWL72ISMWInput208,
          sequenceDiagramWL72ISMWInput83.starty,
          sequenceDiagramWL72ISMWInput83.startx,
          sequenceDiagramWL72ISMWInput83.stopy +
            sequenceDiagramWL72ISMWInput207.height / 2 +
            sequenceDiagramWL72ISMWBinding47.noteMargin,
        ),
        (sequenceDiagramWL72ISMWInput83.stopx +=
          sequenceDiagramWL72ISMWInput208))
      : (sequenceDiagramWL72ISMWBinding48.insert(
          sequenceDiagramWL72ISMWInput83.startx,
          sequenceDiagramWL72ISMWInput83.starty,
          sequenceDiagramWL72ISMWInput83.stopx +
            sequenceDiagramWL72ISMWInput208,
          sequenceDiagramWL72ISMWInput83.stopy +
            sequenceDiagramWL72ISMWInput207.height / 2 +
            sequenceDiagramWL72ISMWBinding47.noteMargin,
        ),
        (sequenceDiagramWL72ISMWInput83.stopx -=
          sequenceDiagramWL72ISMWInput208));
  }
  defineFunctionName(sequenceDiagramWL72ISMWHelper19, "receiverAdjustment");
  function sequenceDiagramWL72ISMWHelper20(
    sequenceDiagramWL72ISMWInput209,
    sequenceDiagramWL72ISMWInput210,
  ) {
    sequenceDiagramWL72ISMWInput209.x <
    sequenceDiagramWL72ISMWInput86.get(sequenceDiagramWL72ISMWInput82.to).x
      ? (sequenceDiagramWL72ISMWBinding48.insert(
          sequenceDiagramWL72ISMWInput83.startx -
            sequenceDiagramWL72ISMWInput210,
          sequenceDiagramWL72ISMWInput83.starty,
          sequenceDiagramWL72ISMWInput83.stopx,
          sequenceDiagramWL72ISMWInput83.stopy +
            sequenceDiagramWL72ISMWInput209.height / 2 +
            sequenceDiagramWL72ISMWBinding47.noteMargin,
        ),
        (sequenceDiagramWL72ISMWInput83.startx +=
          sequenceDiagramWL72ISMWInput210))
      : (sequenceDiagramWL72ISMWBinding48.insert(
          sequenceDiagramWL72ISMWInput83.stopx,
          sequenceDiagramWL72ISMWInput83.starty,
          sequenceDiagramWL72ISMWInput83.startx +
            sequenceDiagramWL72ISMWInput210,
          sequenceDiagramWL72ISMWInput83.stopy +
            sequenceDiagramWL72ISMWInput209.height / 2 +
            sequenceDiagramWL72ISMWBinding47.noteMargin,
        ),
        (sequenceDiagramWL72ISMWInput83.startx -=
          sequenceDiagramWL72ISMWInput210));
  }
  defineFunctionName(sequenceDiagramWL72ISMWHelper20, "senderAdjustment");
  let sequenceDiagramWL72ISMWBinding297 = [
    sequenceDiagramWL72ISMWBinding7.ACTOR,
    sequenceDiagramWL72ISMWBinding7.CONTROL,
    sequenceDiagramWL72ISMWBinding7.ENTITY,
    sequenceDiagramWL72ISMWBinding7.DATABASE,
  ];
  if (
    sequenceDiagramWL72ISMWInput87.get(sequenceDiagramWL72ISMWInput82.to) ==
    sequenceDiagramWL72ISMWInput85
  ) {
    let sequenceDiagramWL72ISMWBinding474 = sequenceDiagramWL72ISMWInput86.get(
      sequenceDiagramWL72ISMWInput82.to,
    );
    sequenceDiagramWL72ISMWHelper19(
      sequenceDiagramWL72ISMWBinding474,
      sequenceDiagramWL72ISMWBinding297.includes(
        sequenceDiagramWL72ISMWBinding474.type,
      )
        ? sequenceDiagramWL72ISMWBinding10 / 2 + 3
        : sequenceDiagramWL72ISMWBinding474.width / 2 + 3,
    );
    sequenceDiagramWL72ISMWBinding474.starty =
      sequenceDiagramWL72ISMWInput84 -
      sequenceDiagramWL72ISMWBinding474.height / 2;
    sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
      sequenceDiagramWL72ISMWBinding474.height / 2,
    );
  } else if (
    sequenceDiagramWL72ISMWInput88.get(sequenceDiagramWL72ISMWInput82.from) ==
    sequenceDiagramWL72ISMWInput85
  ) {
    let sequenceDiagramWL72ISMWBinding471 = sequenceDiagramWL72ISMWInput86.get(
      sequenceDiagramWL72ISMWInput82.from,
    );
    sequenceDiagramWL72ISMWBinding47.mirrorActors &&
      sequenceDiagramWL72ISMWHelper20(
        sequenceDiagramWL72ISMWBinding471,
        sequenceDiagramWL72ISMWBinding297.includes(
          sequenceDiagramWL72ISMWBinding471.type,
        )
          ? sequenceDiagramWL72ISMWBinding10 / 2
          : sequenceDiagramWL72ISMWBinding471.width / 2,
      );
    sequenceDiagramWL72ISMWBinding471.stopy =
      sequenceDiagramWL72ISMWInput84 -
      sequenceDiagramWL72ISMWBinding471.height / 2;
    sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
      sequenceDiagramWL72ISMWBinding471.height / 2,
    );
  } else if (
    sequenceDiagramWL72ISMWInput88.get(sequenceDiagramWL72ISMWInput82.to) ==
    sequenceDiagramWL72ISMWInput85
  ) {
    let sequenceDiagramWL72ISMWBinding466 = sequenceDiagramWL72ISMWInput86.get(
      sequenceDiagramWL72ISMWInput82.to,
    );
    sequenceDiagramWL72ISMWBinding47.mirrorActors &&
      sequenceDiagramWL72ISMWHelper19(
        sequenceDiagramWL72ISMWBinding466,
        sequenceDiagramWL72ISMWBinding297.includes(
          sequenceDiagramWL72ISMWBinding466.type,
        )
          ? sequenceDiagramWL72ISMWBinding10 / 2 + 3
          : sequenceDiagramWL72ISMWBinding466.width / 2 + 3,
      );
    sequenceDiagramWL72ISMWBinding466.stopy =
      sequenceDiagramWL72ISMWInput84 -
      sequenceDiagramWL72ISMWBinding466.height / 2;
    sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
      sequenceDiagramWL72ISMWBinding466.height / 2,
    );
  }
}
async function sequenceDiagramWL72ISMWHelper4(
  sequenceDiagramWL72ISMWInput89,
  sequenceDiagramWL72ISMWInput90,
  sequenceDiagramWL72ISMWInput91,
) {
  let sequenceDiagramWL72ISMWBinding298 = {};
  for (let sequenceDiagramWL72ISMWBinding299 of sequenceDiagramWL72ISMWInput90)
    if (
      sequenceDiagramWL72ISMWInput89.get(
        sequenceDiagramWL72ISMWBinding299.to,
      ) &&
      sequenceDiagramWL72ISMWInput89.get(sequenceDiagramWL72ISMWBinding299.from)
    ) {
      let sequenceDiagramWL72ISMWBinding300 =
        sequenceDiagramWL72ISMWInput89.get(
          sequenceDiagramWL72ISMWBinding299.to,
        );
      if (
        (sequenceDiagramWL72ISMWBinding299.placement ===
          sequenceDiagramWL72ISMWInput91.db.PLACEMENT.LEFTOF &&
          !sequenceDiagramWL72ISMWBinding300.prevActor) ||
        (sequenceDiagramWL72ISMWBinding299.placement ===
          sequenceDiagramWL72ISMWInput91.db.PLACEMENT.RIGHTOF &&
          !sequenceDiagramWL72ISMWBinding300.nextActor)
      )
        continue;
      let sequenceDiagramWL72ISMWBinding301 =
          sequenceDiagramWL72ISMWBinding299.placement !== undefined,
        sequenceDiagramWL72ISMWBinding302 = !sequenceDiagramWL72ISMWBinding301,
        sequenceDiagramWL72ISMWBinding303 = sequenceDiagramWL72ISMWBinding301
          ? $(sequenceDiagramWL72ISMWBinding47)
          : sequenceDiagramWL72ISMWBinding50(sequenceDiagramWL72ISMWBinding47),
        sequenceDiagramWL72ISMWBinding304 =
          sequenceDiagramWL72ISMWBinding299.wrap
            ? chunkS3R3BYOJG.wrapLabel(
                sequenceDiagramWL72ISMWBinding299.message,
                sequenceDiagramWL72ISMWBinding47.width -
                  2 * sequenceDiagramWL72ISMWBinding47.wrapPadding,
                sequenceDiagramWL72ISMWBinding303,
              )
            : sequenceDiagramWL72ISMWBinding299.message,
        sequenceDiagramWL72ISMWBinding305 =
          (O(sequenceDiagramWL72ISMWBinding304)
            ? await i(
                sequenceDiagramWL72ISMWBinding299.message,
                _chunkABZYJK2DB(),
              )
            : chunkS3R3BYOJG.calculateTextDimensions(
                sequenceDiagramWL72ISMWBinding304,
                sequenceDiagramWL72ISMWBinding303,
              )
          ).width +
          2 * sequenceDiagramWL72ISMWBinding47.wrapPadding;
      sequenceDiagramWL72ISMWBinding302 &&
      sequenceDiagramWL72ISMWBinding299.from ===
        sequenceDiagramWL72ISMWBinding300.nextActor
        ? (sequenceDiagramWL72ISMWBinding298[
            sequenceDiagramWL72ISMWBinding299.to
          ] = s.getMax(
            sequenceDiagramWL72ISMWBinding298[
              sequenceDiagramWL72ISMWBinding299.to
            ] || 0,
            sequenceDiagramWL72ISMWBinding305,
          ))
        : sequenceDiagramWL72ISMWBinding302 &&
            sequenceDiagramWL72ISMWBinding299.from ===
              sequenceDiagramWL72ISMWBinding300.prevActor
          ? (sequenceDiagramWL72ISMWBinding298[
              sequenceDiagramWL72ISMWBinding299.from
            ] = s.getMax(
              sequenceDiagramWL72ISMWBinding298[
                sequenceDiagramWL72ISMWBinding299.from
              ] || 0,
              sequenceDiagramWL72ISMWBinding305,
            ))
          : sequenceDiagramWL72ISMWBinding302 &&
              sequenceDiagramWL72ISMWBinding299.from ===
                sequenceDiagramWL72ISMWBinding299.to
            ? ((sequenceDiagramWL72ISMWBinding298[
                sequenceDiagramWL72ISMWBinding299.from
              ] = s.getMax(
                sequenceDiagramWL72ISMWBinding298[
                  sequenceDiagramWL72ISMWBinding299.from
                ] || 0,
                sequenceDiagramWL72ISMWBinding305 / 2,
              )),
              (sequenceDiagramWL72ISMWBinding298[
                sequenceDiagramWL72ISMWBinding299.to
              ] = s.getMax(
                sequenceDiagramWL72ISMWBinding298[
                  sequenceDiagramWL72ISMWBinding299.to
                ] || 0,
                sequenceDiagramWL72ISMWBinding305 / 2,
              )))
            : sequenceDiagramWL72ISMWBinding299.placement ===
                sequenceDiagramWL72ISMWInput91.db.PLACEMENT.RIGHTOF
              ? (sequenceDiagramWL72ISMWBinding298[
                  sequenceDiagramWL72ISMWBinding299.from
                ] = s.getMax(
                  sequenceDiagramWL72ISMWBinding298[
                    sequenceDiagramWL72ISMWBinding299.from
                  ] || 0,
                  sequenceDiagramWL72ISMWBinding305,
                ))
              : sequenceDiagramWL72ISMWBinding299.placement ===
                  sequenceDiagramWL72ISMWInput91.db.PLACEMENT.LEFTOF
                ? (sequenceDiagramWL72ISMWBinding298[
                    sequenceDiagramWL72ISMWBinding300.prevActor
                  ] = s.getMax(
                    sequenceDiagramWL72ISMWBinding298[
                      sequenceDiagramWL72ISMWBinding300.prevActor
                    ] || 0,
                    sequenceDiagramWL72ISMWBinding305,
                  ))
                : sequenceDiagramWL72ISMWBinding299.placement ===
                    sequenceDiagramWL72ISMWInput91.db.PLACEMENT.OVER &&
                  (sequenceDiagramWL72ISMWBinding300.prevActor &&
                    (sequenceDiagramWL72ISMWBinding298[
                      sequenceDiagramWL72ISMWBinding300.prevActor
                    ] = s.getMax(
                      sequenceDiagramWL72ISMWBinding298[
                        sequenceDiagramWL72ISMWBinding300.prevActor
                      ] || 0,
                      sequenceDiagramWL72ISMWBinding305 / 2,
                    )),
                  sequenceDiagramWL72ISMWBinding300.nextActor &&
                    (sequenceDiagramWL72ISMWBinding298[
                      sequenceDiagramWL72ISMWBinding299.from
                    ] = s.getMax(
                      sequenceDiagramWL72ISMWBinding298[
                        sequenceDiagramWL72ISMWBinding299.from
                      ] || 0,
                      sequenceDiagramWL72ISMWBinding305 / 2,
                    )));
    }
  return (
    logger.debug("maxMessageWidthPerActor:", sequenceDiagramWL72ISMWBinding298),
    sequenceDiagramWL72ISMWBinding298
  );
}
async function sequenceDiagramWL72ISMWHelper5(
  sequenceDiagramWL72ISMWInput79,
  sequenceDiagramWL72ISMWInput80,
  sequenceDiagramWL72ISMWInput81,
) {
  let sequenceDiagramWL72ISMWBinding295 = 0;
  for (let sequenceDiagramWL72ISMWBinding390 of sequenceDiagramWL72ISMWInput79.keys()) {
    let sequenceDiagramWL72ISMWBinding392 = sequenceDiagramWL72ISMWInput79.get(
      sequenceDiagramWL72ISMWBinding390,
    );
    sequenceDiagramWL72ISMWBinding392.wrap &&
      (sequenceDiagramWL72ISMWBinding392.description = chunkS3R3BYOJG.wrapLabel(
        sequenceDiagramWL72ISMWBinding392.description,
        sequenceDiagramWL72ISMWBinding47.width -
          2 * sequenceDiagramWL72ISMWBinding47.wrapPadding,
        sequenceDiagramWL72ISMWBinding51(sequenceDiagramWL72ISMWBinding47),
      ));
    let sequenceDiagramWL72ISMWBinding393 = O(
      sequenceDiagramWL72ISMWBinding392.description,
    )
      ? await i(
          sequenceDiagramWL72ISMWBinding392.description,
          _chunkABZYJK2DB(),
        )
      : chunkS3R3BYOJG.calculateTextDimensions(
          sequenceDiagramWL72ISMWBinding392.description,
          sequenceDiagramWL72ISMWBinding51(sequenceDiagramWL72ISMWBinding47),
        );
    sequenceDiagramWL72ISMWBinding392.width =
      sequenceDiagramWL72ISMWBinding392.wrap
        ? sequenceDiagramWL72ISMWBinding47.width
        : s.getMax(
            sequenceDiagramWL72ISMWBinding47.width,
            sequenceDiagramWL72ISMWBinding393.width +
              2 * sequenceDiagramWL72ISMWBinding47.wrapPadding,
          );
    sequenceDiagramWL72ISMWBinding392.height =
      sequenceDiagramWL72ISMWBinding392.wrap
        ? s.getMax(
            sequenceDiagramWL72ISMWBinding393.height,
            sequenceDiagramWL72ISMWBinding47.height,
          )
        : sequenceDiagramWL72ISMWBinding47.height;
    sequenceDiagramWL72ISMWBinding295 = s.getMax(
      sequenceDiagramWL72ISMWBinding295,
      sequenceDiagramWL72ISMWBinding392.height,
    );
  }
  for (let sequenceDiagramWL72ISMWBinding421 in sequenceDiagramWL72ISMWInput80) {
    let sequenceDiagramWL72ISMWBinding426 = sequenceDiagramWL72ISMWInput79.get(
      sequenceDiagramWL72ISMWBinding421,
    );
    if (!sequenceDiagramWL72ISMWBinding426) continue;
    let sequenceDiagramWL72ISMWBinding427 = sequenceDiagramWL72ISMWInput79.get(
      sequenceDiagramWL72ISMWBinding426.nextActor,
    );
    if (!sequenceDiagramWL72ISMWBinding427) {
      let sequenceDiagramWL72ISMWBinding483 =
        sequenceDiagramWL72ISMWInput80[sequenceDiagramWL72ISMWBinding421] +
        sequenceDiagramWL72ISMWBinding47.actorMargin -
        sequenceDiagramWL72ISMWBinding426.width / 2;
      sequenceDiagramWL72ISMWBinding426.margin = s.getMax(
        sequenceDiagramWL72ISMWBinding483,
        sequenceDiagramWL72ISMWBinding47.actorMargin,
      );
      continue;
    }
    let sequenceDiagramWL72ISMWBinding428 =
      sequenceDiagramWL72ISMWInput80[sequenceDiagramWL72ISMWBinding421] +
      sequenceDiagramWL72ISMWBinding47.actorMargin -
      sequenceDiagramWL72ISMWBinding426.width / 2 -
      sequenceDiagramWL72ISMWBinding427.width / 2;
    sequenceDiagramWL72ISMWBinding426.margin = s.getMax(
      sequenceDiagramWL72ISMWBinding428,
      sequenceDiagramWL72ISMWBinding47.actorMargin,
    );
  }
  let sequenceDiagramWL72ISMWBinding296 = 0;
  return (
    sequenceDiagramWL72ISMWInput81.forEach((item) => {
      let sequenceDiagramWL72ISMWBinding382 = sequenceDiagramWL72ISMWBinding50(
          sequenceDiagramWL72ISMWBinding47,
        ),
        sequenceDiagramWL72ISMWBinding383 = item.actorKeys.reduce(
          (accumulator, current) =>
            (accumulator +=
              sequenceDiagramWL72ISMWInput79.get(current).width +
              (sequenceDiagramWL72ISMWInput79.get(current).margin || 0)),
          0,
        ),
        sequenceDiagramWL72ISMWBinding384 =
          sequenceDiagramWL72ISMWBinding47.boxMargin * 8;
      sequenceDiagramWL72ISMWBinding383 += sequenceDiagramWL72ISMWBinding384;
      sequenceDiagramWL72ISMWBinding383 -=
        2 * sequenceDiagramWL72ISMWBinding47.boxTextMargin;
      item.wrap &&
        (item.name = chunkS3R3BYOJG.wrapLabel(
          item.name,
          sequenceDiagramWL72ISMWBinding383 -
            2 * sequenceDiagramWL72ISMWBinding47.wrapPadding,
          sequenceDiagramWL72ISMWBinding382,
        ));
      let sequenceDiagramWL72ISMWBinding385 =
        chunkS3R3BYOJG.calculateTextDimensions(
          item.name,
          sequenceDiagramWL72ISMWBinding382,
        );
      sequenceDiagramWL72ISMWBinding296 = s.getMax(
        sequenceDiagramWL72ISMWBinding385.height,
        sequenceDiagramWL72ISMWBinding296,
      );
      let sequenceDiagramWL72ISMWBinding386 = s.getMax(
        sequenceDiagramWL72ISMWBinding383,
        sequenceDiagramWL72ISMWBinding385.width +
          2 * sequenceDiagramWL72ISMWBinding47.wrapPadding,
      );
      if (
        ((item.margin = sequenceDiagramWL72ISMWBinding47.boxTextMargin),
        sequenceDiagramWL72ISMWBinding383 < sequenceDiagramWL72ISMWBinding386)
      ) {
        let sequenceDiagramWL72ISMWBinding499 =
          (sequenceDiagramWL72ISMWBinding386 -
            sequenceDiagramWL72ISMWBinding383) /
          2;
        item.margin += sequenceDiagramWL72ISMWBinding499;
      }
    }),
    sequenceDiagramWL72ISMWInput81.forEach(
      (item) => (item.textMaxHeight = sequenceDiagramWL72ISMWBinding296),
    ),
    s.getMax(
      sequenceDiagramWL72ISMWBinding295,
      sequenceDiagramWL72ISMWBinding47.height,
    )
  );
}
var sequenceDiagramWL72ISMWBinding1,
  sequenceDiagramWL72ISMWBinding2,
  sequenceDiagramWL72ISMWBinding3,
  sequenceDiagramWL72ISMWBinding4,
  sequenceDiagramWL72ISMWBinding5,
  sequenceDiagramWL72ISMWBinding6,
  sequenceDiagramWL72ISMWBinding7,
  sequenceDiagramWL72ISMWBinding8,
  sequenceDiagramWL72ISMWBinding9,
  sequenceDiagramWL72ISMWBinding10,
  sequenceDiagramWL72ISMWBinding11,
  sequenceDiagramWL72ISMWBinding12,
  sequenceDiagramWL72ISMWBinding13,
  sequenceDiagramWL72ISMWBinding14,
  sequenceDiagramWL72ISMWBinding15,
  sequenceDiagramWL72ISMWBinding16,
  sequenceDiagramWL72ISMWBinding17,
  _e,
  sequenceDiagramWL72ISMWBinding18,
  sequenceDiagramWL72ISMWBinding19,
  sequenceDiagramWL72ISMWBinding20,
  sequenceDiagramWL72ISMWBinding21,
  be,
  sequenceDiagramWL72ISMWBinding22,
  sequenceDiagramWL72ISMWBinding23,
  sequenceDiagramWL72ISMWBinding24,
  sequenceDiagramWL72ISMWBinding25,
  sequenceDiagramWL72ISMWBinding26,
  sequenceDiagramWL72ISMWBinding27,
  sequenceDiagramWL72ISMWBinding28,
  sequenceDiagramWL72ISMWBinding29,
  sequenceDiagramWL72ISMWBinding30,
  sequenceDiagramWL72ISMWBinding31,
  sequenceDiagramWL72ISMWBinding32,
  sequenceDiagramWL72ISMWBinding33,
  sequenceDiagramWL72ISMWBinding34,
  sequenceDiagramWL72ISMWBinding35,
  sequenceDiagramWL72ISMWBinding36,
  sequenceDiagramWL72ISMWBinding37,
  sequenceDiagramWL72ISMWBinding38,
  sequenceDiagramWL72ISMWBinding39,
  sequenceDiagramWL72ISMWBinding40,
  sequenceDiagramWL72ISMWBinding41,
  sequenceDiagramWL72ISMWBinding42,
  sequenceDiagramWL72ISMWBinding43,
  sequenceDiagramWL72ISMWBinding44,
  sequenceDiagramWL72ISMWBinding45,
  sequenceDiagramWL72ISMWBinding46,
  sequenceDiagramWL72ISMWBinding47,
  sequenceDiagramWL72ISMWBinding48,
  sequenceDiagramWL72ISMWBinding49,
  sequenceDiagramWL72ISMWBinding50,
  $,
  sequenceDiagramWL72ISMWBinding51,
  sequenceDiagramWL72ISMWBinding52,
  sequenceDiagramWL72ISMWBinding53,
  sequenceDiagramWL72ISMWBinding54,
  sequenceDiagramWL72ISMWBinding55,
  sequenceDiagramWL72ISMWBinding56,
  sequenceDiagramWL72ISMWBinding57,
  sequenceDiagramWL72ISMWBinding58,
  $e,
  sequenceDiagramWL72ISMWBinding59,
  sequenceDiagramWL72ISMWBinding60,
  sequenceDiagramWL72ISMWBinding61,
  sequenceDiagramWL72ISMWBinding62,
  SequenceDiagramWL72ISMW;
esmInit(() => {
  c();
  chunkMI3HLSF2N();
  chunkQZHKN3VNN();
  chunkS3R3BYOJU();
  k();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  sequenceDiagramWL72ISMWBinding1 = dist();
  sequenceDiagramWL72ISMWBinding2 = (function () {
    var sequenceDiagramWL72ISMWBinding63 = defineFunctionName(function (
        sequenceDiagramWL72ISMWInput286,
        sequenceDiagramWL72ISMWInput287,
        sequenceDiagramWL72ISMWInput288,
        sequenceDiagramWL72ISMWInput289,
      ) {
        for (
          sequenceDiagramWL72ISMWInput288 ||= {},
            sequenceDiagramWL72ISMWInput289 =
              sequenceDiagramWL72ISMWInput286.length;
          sequenceDiagramWL72ISMWInput289--;
          sequenceDiagramWL72ISMWInput288[
            sequenceDiagramWL72ISMWInput286[sequenceDiagramWL72ISMWInput289]
          ] = sequenceDiagramWL72ISMWInput287
        );
        return sequenceDiagramWL72ISMWInput288;
      }, "o"),
      sequenceDiagramWL72ISMWBinding64 = [1, 2],
      sequenceDiagramWL72ISMWBinding65 = [1, 3],
      sequenceDiagramWL72ISMWBinding66 = [1, 4],
      sequenceDiagramWL72ISMWBinding67 = [2, 4],
      sequenceDiagramWL72ISMWBinding68 = [1, 9],
      sequenceDiagramWL72ISMWBinding69 = [1, 11],
      sequenceDiagramWL72ISMWBinding70 = [1, 13],
      sequenceDiagramWL72ISMWBinding71 = [1, 14],
      sequenceDiagramWL72ISMWBinding72 = [1, 16],
      sequenceDiagramWL72ISMWBinding73 = [1, 17],
      sequenceDiagramWL72ISMWBinding74 = [1, 18],
      sequenceDiagramWL72ISMWBinding75 = [1, 24],
      sequenceDiagramWL72ISMWBinding76 = [1, 25],
      sequenceDiagramWL72ISMWBinding77 = [1, 26],
      sequenceDiagramWL72ISMWBinding78 = [1, 27],
      sequenceDiagramWL72ISMWBinding79 = [1, 28],
      sequenceDiagramWL72ISMWBinding80 = [1, 29],
      sequenceDiagramWL72ISMWBinding81 = [1, 30],
      sequenceDiagramWL72ISMWBinding82 = [1, 31],
      sequenceDiagramWL72ISMWBinding83 = [1, 32],
      sequenceDiagramWL72ISMWBinding84 = [1, 33],
      sequenceDiagramWL72ISMWBinding85 = [1, 34],
      sequenceDiagramWL72ISMWBinding86 = [1, 35],
      sequenceDiagramWL72ISMWBinding87 = [1, 36],
      sequenceDiagramWL72ISMWBinding88 = [1, 37],
      sequenceDiagramWL72ISMWBinding89 = [1, 38],
      sequenceDiagramWL72ISMWBinding90 = [1, 39],
      sequenceDiagramWL72ISMWBinding91 = [1, 41],
      sequenceDiagramWL72ISMWBinding92 = [1, 42],
      sequenceDiagramWL72ISMWBinding93 = [1, 43],
      sequenceDiagramWL72ISMWBinding94 = [1, 44],
      sequenceDiagramWL72ISMWBinding95 = [1, 45],
      sequenceDiagramWL72ISMWBinding96 = [1, 46],
      sequenceDiagramWL72ISMWBinding97 = [
        1, 4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41,
        43, 44, 46, 47, 48, 49, 50, 52, 53, 55, 60, 61, 62, 63, 71,
      ],
      sequenceDiagramWL72ISMWBinding98 = [2, 71],
      sequenceDiagramWL72ISMWBinding99 = [4, 5, 16, 50, 52, 53],
      sequenceDiagramWL72ISMWBinding100 = [
        4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41,
        43, 44, 46, 50, 52, 53, 55, 60, 61, 62, 63, 71,
      ],
      sequenceDiagramWL72ISMWBinding101 = [
        4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41,
        43, 44, 46, 49, 50, 52, 53, 55, 60, 61, 62, 63, 71,
      ],
      sequenceDiagramWL72ISMWBinding102 = [
        4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41,
        43, 44, 46, 48, 50, 52, 53, 55, 60, 61, 62, 63, 71,
      ],
      sequenceDiagramWL72ISMWBinding103 = [
        4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41,
        43, 44, 46, 47, 50, 52, 53, 55, 60, 61, 62, 63, 71,
      ],
      sequenceDiagramWL72ISMWBinding104 = [69, 70, 71],
      sequenceDiagramWL72ISMWBinding105 = [1, 127],
      sequenceDiagramWL72ISMWBinding106 = {
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
          box_section: 10,
          box_line: 11,
          participant_statement: 12,
          create: 13,
          box: 14,
          restOfLine: 15,
          end: 16,
          signal: 17,
          autonumber: 18,
          NUM: 19,
          off: 20,
          activate: 21,
          actor: 22,
          deactivate: 23,
          note_statement: 24,
          links_statement: 25,
          link_statement: 26,
          properties_statement: 27,
          details_statement: 28,
          title: 29,
          legacy_title: 30,
          acc_title: 31,
          acc_title_value: 32,
          acc_descr: 33,
          acc_descr_value: 34,
          acc_descr_multiline_value: 35,
          loop: 36,
          rect: 37,
          opt: 38,
          alt: 39,
          else_sections: 40,
          par: 41,
          par_sections: 42,
          par_over: 43,
          critical: 44,
          option_sections: 45,
          break: 46,
          option: 47,
          and: 48,
          else: 49,
          participant: 50,
          AS: 51,
          participant_actor: 52,
          destroy: 53,
          actor_with_config: 54,
          note: 55,
          placement: 56,
          text2: 57,
          over: 58,
          actor_pair: 59,
          links: 60,
          link: 61,
          properties: 62,
          details: 63,
          spaceList: 64,
          ",": 65,
          left_of: 66,
          right_of: 67,
          signaltype: 68,
          "+": 69,
          "-": 70,
          ACTOR: 71,
          config_object: 72,
          CONFIG_START: 73,
          CONFIG_CONTENT: 74,
          CONFIG_END: 75,
          SOLID_OPEN_ARROW: 76,
          DOTTED_OPEN_ARROW: 77,
          SOLID_ARROW: 78,
          BIDIRECTIONAL_SOLID_ARROW: 79,
          DOTTED_ARROW: 80,
          BIDIRECTIONAL_DOTTED_ARROW: 81,
          SOLID_CROSS: 82,
          DOTTED_CROSS: 83,
          SOLID_POINT: 84,
          DOTTED_POINT: 85,
          TXT: 86,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          4: "SPACE",
          5: "NEWLINE",
          6: "SD",
          13: "create",
          14: "box",
          15: "restOfLine",
          16: "end",
          18: "autonumber",
          19: "NUM",
          20: "off",
          21: "activate",
          23: "deactivate",
          29: "title",
          30: "legacy_title",
          31: "acc_title",
          32: "acc_title_value",
          33: "acc_descr",
          34: "acc_descr_value",
          35: "acc_descr_multiline_value",
          36: "loop",
          37: "rect",
          38: "opt",
          39: "alt",
          41: "par",
          43: "par_over",
          44: "critical",
          46: "break",
          47: "option",
          48: "and",
          49: "else",
          50: "participant",
          51: "AS",
          52: "participant_actor",
          53: "destroy",
          55: "note",
          58: "over",
          60: "links",
          61: "link",
          62: "properties",
          63: "details",
          65: ",",
          66: "left_of",
          67: "right_of",
          69: "+",
          70: "-",
          71: "ACTOR",
          73: "CONFIG_START",
          74: "CONFIG_CONTENT",
          75: "CONFIG_END",
          76: "SOLID_OPEN_ARROW",
          77: "DOTTED_OPEN_ARROW",
          78: "SOLID_ARROW",
          79: "BIDIRECTIONAL_SOLID_ARROW",
          80: "DOTTED_ARROW",
          81: "BIDIRECTIONAL_DOTTED_ARROW",
          82: "SOLID_CROSS",
          83: "DOTTED_CROSS",
          84: "SOLID_POINT",
          85: "DOTTED_POINT",
          86: "TXT",
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
          [10, 0],
          [10, 2],
          [11, 2],
          [11, 1],
          [11, 1],
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
          [45, 1],
          [45, 4],
          [42, 1],
          [42, 4],
          [40, 1],
          [40, 4],
          [12, 5],
          [12, 3],
          [12, 5],
          [12, 3],
          [12, 3],
          [12, 3],
          [24, 4],
          [24, 4],
          [25, 3],
          [26, 3],
          [27, 3],
          [28, 3],
          [64, 2],
          [64, 1],
          [59, 3],
          [59, 1],
          [56, 1],
          [56, 1],
          [17, 5],
          [17, 5],
          [17, 4],
          [54, 2],
          [72, 3],
          [22, 1],
          [68, 1],
          [68, 1],
          [68, 1],
          [68, 1],
          [68, 1],
          [68, 1],
          [68, 1],
          [68, 1],
          [68, 1],
          [68, 1],
          [57, 1],
        ],
        performAction: defineFunctionName(function (
          sequenceDiagramWL72ISMWInput1,
          sequenceDiagramWL72ISMWInput2,
          sequenceDiagramWL72ISMWInput3,
          sequenceDiagramWL72ISMWInput4,
          sequenceDiagramWL72ISMWInput5,
          sequenceDiagramWL72ISMWInput6,
          sequenceDiagramWL72ISMWInput7,
        ) {
          var sequenceDiagramWL72ISMWBinding107 =
            sequenceDiagramWL72ISMWInput6.length - 1;
          switch (sequenceDiagramWL72ISMWInput5) {
            case 3:
              return (
                sequenceDiagramWL72ISMWInput4.apply(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107
                  ],
                ),
                sequenceDiagramWL72ISMWInput6[sequenceDiagramWL72ISMWBinding107]
              );
            case 4:
            case 9:
              this.$ = [];
              break;
            case 5:
            case 10:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].push(
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ],
              );
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 6:
            case 7:
            case 11:
            case 12:
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ];
              break;
            case 8:
            case 13:
              this.$ = [];
              break;
            case 15:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107
              ].type = "createParticipant";
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ];
              break;
            case 16:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].unshift({
                type: "boxStart",
                boxData: sequenceDiagramWL72ISMWInput4.parseBoxData(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                ),
              });
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].push({
                type: "boxEnd",
                boxText:
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
              });
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 18:
              this.$ = {
                type: "sequenceIndex",
                sequenceIndex: Number(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                ),
                sequenceIndexStep: Number(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 1
                  ],
                ),
                sequenceVisible: true,
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.AUTONUMBER,
              };
              break;
            case 19:
              this.$ = {
                type: "sequenceIndex",
                sequenceIndex: Number(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 1
                  ],
                ),
                sequenceIndexStep: 1,
                sequenceVisible: true,
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.AUTONUMBER,
              };
              break;
            case 20:
              this.$ = {
                type: "sequenceIndex",
                sequenceVisible: false,
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.AUTONUMBER,
              };
              break;
            case 21:
              this.$ = {
                type: "sequenceIndex",
                sequenceVisible: true,
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.AUTONUMBER,
              };
              break;
            case 22:
              this.$ = {
                type: "activeStart",
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.ACTIVE_START,
                actor:
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 1
                  ].actor,
              };
              break;
            case 23:
              this.$ = {
                type: "activeEnd",
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.ACTIVE_END,
                actor:
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 1
                  ].actor,
              };
              break;
            case 29:
              sequenceDiagramWL72ISMWInput4.setDiagramTitle(
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ].substring(6),
              );
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ].substring(6);
              break;
            case 30:
              sequenceDiagramWL72ISMWInput4.setDiagramTitle(
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ].substring(7),
              );
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ].substring(7);
              break;
            case 31:
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ].trim();
              sequenceDiagramWL72ISMWInput4.setAccTitle(this.$);
              break;
            case 32:
            case 33:
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ].trim();
              sequenceDiagramWL72ISMWInput4.setAccDescription(this.$);
              break;
            case 34:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].unshift({
                type: "loopStart",
                loopText: sequenceDiagramWL72ISMWInput4.parseMessage(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                ),
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.LOOP_START,
              });
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].push({
                type: "loopEnd",
                loopText:
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.LOOP_END,
              });
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 35:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].unshift({
                type: "rectStart",
                color: sequenceDiagramWL72ISMWInput4.parseMessage(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                ),
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.RECT_START,
              });
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].push({
                type: "rectEnd",
                color: sequenceDiagramWL72ISMWInput4.parseMessage(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                ),
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.RECT_END,
              });
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 36:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].unshift({
                type: "optStart",
                optText: sequenceDiagramWL72ISMWInput4.parseMessage(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                ),
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.OPT_START,
              });
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].push({
                type: "optEnd",
                optText: sequenceDiagramWL72ISMWInput4.parseMessage(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                ),
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.OPT_END,
              });
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 37:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].unshift({
                type: "altStart",
                altText: sequenceDiagramWL72ISMWInput4.parseMessage(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                ),
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.ALT_START,
              });
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].push({
                type: "altEnd",
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.ALT_END,
              });
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 38:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].unshift({
                type: "parStart",
                parText: sequenceDiagramWL72ISMWInput4.parseMessage(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                ),
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.PAR_START,
              });
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].push({
                type: "parEnd",
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.PAR_END,
              });
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 39:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].unshift({
                type: "parStart",
                parText: sequenceDiagramWL72ISMWInput4.parseMessage(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                ),
                signalType:
                  sequenceDiagramWL72ISMWInput4.LINETYPE.PAR_OVER_START,
              });
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].push({
                type: "parEnd",
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.PAR_END,
              });
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 40:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].unshift({
                type: "criticalStart",
                criticalText: sequenceDiagramWL72ISMWInput4.parseMessage(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                ),
                signalType:
                  sequenceDiagramWL72ISMWInput4.LINETYPE.CRITICAL_START,
              });
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].push({
                type: "criticalEnd",
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.CRITICAL_END,
              });
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 41:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].unshift({
                type: "breakStart",
                breakText: sequenceDiagramWL72ISMWInput4.parseMessage(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                ),
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.BREAK_START,
              });
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].push({
                type: "breakEnd",
                optText: sequenceDiagramWL72ISMWInput4.parseMessage(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ],
                ),
                signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.BREAK_END,
              });
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 43:
              this.$ = sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 3
              ].concat([
                {
                  type: "option",
                  optionText: sequenceDiagramWL72ISMWInput4.parseMessage(
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 1
                    ],
                  ),
                  signalType:
                    sequenceDiagramWL72ISMWInput4.LINETYPE.CRITICAL_OPTION,
                },
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ],
              ]);
              break;
            case 45:
              this.$ = sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 3
              ].concat([
                {
                  type: "and",
                  parText: sequenceDiagramWL72ISMWInput4.parseMessage(
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 1
                    ],
                  ),
                  signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.PAR_AND,
                },
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ],
              ]);
              break;
            case 47:
              this.$ = sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 3
              ].concat([
                {
                  type: "else",
                  altText: sequenceDiagramWL72ISMWInput4.parseMessage(
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 1
                    ],
                  ),
                  signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.ALT_ELSE,
                },
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ],
              ]);
              break;
            case 48:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 3
              ].draw = "participant";
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 3
              ].type = "addParticipant";
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 3
              ].description = sequenceDiagramWL72ISMWInput4.parseMessage(
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ],
              );
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 3
                ];
              break;
            case 49:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].draw = "participant";
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].type = "addParticipant";
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 50:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 3
              ].draw = "actor";
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 3
              ].type = "addParticipant";
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 3
              ].description = sequenceDiagramWL72ISMWInput4.parseMessage(
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ],
              );
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 3
                ];
              break;
            case 51:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].draw = "actor";
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].type = "addParticipant";
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 52:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].type = "destroyParticipant";
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 53:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].draw = "participant";
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 1
              ].type = "addParticipant";
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ];
              break;
            case 54:
              this.$ = [
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ],
                {
                  type: "addNote",
                  placement:
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 2
                    ],
                  actor:
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 1
                    ].actor,
                  text: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107
                  ],
                },
              ];
              break;
            case 55:
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 2
              ] = []
                .concat(
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 1
                  ],
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 1
                  ],
                )
                .slice(0, 2);
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 2
              ][0] =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 2
                ][0].actor;
              sequenceDiagramWL72ISMWInput6[
                sequenceDiagramWL72ISMWBinding107 - 2
              ][1] =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 2
                ][1].actor;
              this.$ = [
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ],
                {
                  type: "addNote",
                  placement: sequenceDiagramWL72ISMWInput4.PLACEMENT.OVER,
                  actor: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 2
                  ].slice(0, 2),
                  text: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107
                  ],
                },
              ];
              break;
            case 56:
              this.$ = [
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ],
                {
                  type: "addLinks",
                  actor:
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 1
                    ].actor,
                  text: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107
                  ],
                },
              ];
              break;
            case 57:
              this.$ = [
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ],
                {
                  type: "addALink",
                  actor:
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 1
                    ].actor,
                  text: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107
                  ],
                },
              ];
              break;
            case 58:
              this.$ = [
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ],
                {
                  type: "addProperties",
                  actor:
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 1
                    ].actor,
                  text: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107
                  ],
                },
              ];
              break;
            case 59:
              this.$ = [
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ],
                {
                  type: "addDetails",
                  actor:
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 1
                    ].actor,
                  text: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107
                  ],
                },
              ];
              break;
            case 62:
              this.$ = [
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 2
                ],
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ],
              ];
              break;
            case 63:
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107
                ];
              break;
            case 64:
              this.$ = sequenceDiagramWL72ISMWInput4.PLACEMENT.LEFTOF;
              break;
            case 65:
              this.$ = sequenceDiagramWL72ISMWInput4.PLACEMENT.RIGHTOF;
              break;
            case 66:
              this.$ = [
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 4
                ],
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ],
                {
                  type: "addMessage",
                  from: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 4
                  ].actor,
                  to: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 1
                  ].actor,
                  signalType:
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 3
                    ],
                  msg: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107
                  ],
                  activate: true,
                },
                {
                  type: "activeStart",
                  signalType:
                    sequenceDiagramWL72ISMWInput4.LINETYPE.ACTIVE_START,
                  actor:
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 1
                    ].actor,
                },
              ];
              break;
            case 67:
              this.$ = [
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 4
                ],
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ],
                {
                  type: "addMessage",
                  from: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 4
                  ].actor,
                  to: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 1
                  ].actor,
                  signalType:
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 3
                    ],
                  msg: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107
                  ],
                },
                {
                  type: "activeEnd",
                  signalType: sequenceDiagramWL72ISMWInput4.LINETYPE.ACTIVE_END,
                  actor:
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 4
                    ].actor,
                },
              ];
              break;
            case 68:
              this.$ = [
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 3
                ],
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ],
                {
                  type: "addMessage",
                  from: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 3
                  ].actor,
                  to: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 1
                  ].actor,
                  signalType:
                    sequenceDiagramWL72ISMWInput6[
                      sequenceDiagramWL72ISMWBinding107 - 2
                    ],
                  msg: sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107
                  ],
                },
              ];
              break;
            case 69:
              this.$ = {
                type: "addParticipant",
                actor:
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107 - 1
                  ],
                config:
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107
                  ],
              };
              break;
            case 70:
              this.$ =
                sequenceDiagramWL72ISMWInput6[
                  sequenceDiagramWL72ISMWBinding107 - 1
                ].trim();
              break;
            case 71:
              this.$ = {
                type: "addParticipant",
                actor:
                  sequenceDiagramWL72ISMWInput6[
                    sequenceDiagramWL72ISMWBinding107
                  ],
              };
              break;
            case 72:
              this.$ = sequenceDiagramWL72ISMWInput4.LINETYPE.SOLID_OPEN;
              break;
            case 73:
              this.$ = sequenceDiagramWL72ISMWInput4.LINETYPE.DOTTED_OPEN;
              break;
            case 74:
              this.$ = sequenceDiagramWL72ISMWInput4.LINETYPE.SOLID;
              break;
            case 75:
              this.$ =
                sequenceDiagramWL72ISMWInput4.LINETYPE.BIDIRECTIONAL_SOLID;
              break;
            case 76:
              this.$ = sequenceDiagramWL72ISMWInput4.LINETYPE.DOTTED;
              break;
            case 77:
              this.$ =
                sequenceDiagramWL72ISMWInput4.LINETYPE.BIDIRECTIONAL_DOTTED;
              break;
            case 78:
              this.$ = sequenceDiagramWL72ISMWInput4.LINETYPE.SOLID_CROSS;
              break;
            case 79:
              this.$ = sequenceDiagramWL72ISMWInput4.LINETYPE.DOTTED_CROSS;
              break;
            case 80:
              this.$ = sequenceDiagramWL72ISMWInput4.LINETYPE.SOLID_POINT;
              break;
            case 81:
              this.$ = sequenceDiagramWL72ISMWInput4.LINETYPE.DOTTED_POINT;
              break;
            case 82:
              this.$ = sequenceDiagramWL72ISMWInput4.parseMessage(
                sequenceDiagramWL72ISMWInput6[sequenceDiagramWL72ISMWBinding107]
                  .trim()
                  .substring(1),
              );
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: sequenceDiagramWL72ISMWBinding64,
            5: sequenceDiagramWL72ISMWBinding65,
            6: sequenceDiagramWL72ISMWBinding66,
          },
          {
            1: [3],
          },
          {
            3: 5,
            4: sequenceDiagramWL72ISMWBinding64,
            5: sequenceDiagramWL72ISMWBinding65,
            6: sequenceDiagramWL72ISMWBinding66,
          },
          {
            3: 6,
            4: sequenceDiagramWL72ISMWBinding64,
            5: sequenceDiagramWL72ISMWBinding65,
            6: sequenceDiagramWL72ISMWBinding66,
          },
          sequenceDiagramWL72ISMWBinding63(
            [
              1, 4, 5, 13, 14, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39,
              41, 43, 44, 46, 50, 52, 53, 55, 60, 61, 62, 63, 71,
            ],
            sequenceDiagramWL72ISMWBinding67,
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
            4: sequenceDiagramWL72ISMWBinding68,
            5: sequenceDiagramWL72ISMWBinding69,
            8: 8,
            9: 10,
            12: 12,
            13: sequenceDiagramWL72ISMWBinding70,
            14: sequenceDiagramWL72ISMWBinding71,
            17: 15,
            18: sequenceDiagramWL72ISMWBinding72,
            21: sequenceDiagramWL72ISMWBinding73,
            22: 40,
            23: sequenceDiagramWL72ISMWBinding74,
            24: 19,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: sequenceDiagramWL72ISMWBinding75,
            30: sequenceDiagramWL72ISMWBinding76,
            31: sequenceDiagramWL72ISMWBinding77,
            33: sequenceDiagramWL72ISMWBinding78,
            35: sequenceDiagramWL72ISMWBinding79,
            36: sequenceDiagramWL72ISMWBinding80,
            37: sequenceDiagramWL72ISMWBinding81,
            38: sequenceDiagramWL72ISMWBinding82,
            39: sequenceDiagramWL72ISMWBinding83,
            41: sequenceDiagramWL72ISMWBinding84,
            43: sequenceDiagramWL72ISMWBinding85,
            44: sequenceDiagramWL72ISMWBinding86,
            46: sequenceDiagramWL72ISMWBinding87,
            50: sequenceDiagramWL72ISMWBinding88,
            52: sequenceDiagramWL72ISMWBinding89,
            53: sequenceDiagramWL72ISMWBinding90,
            55: sequenceDiagramWL72ISMWBinding91,
            60: sequenceDiagramWL72ISMWBinding92,
            61: sequenceDiagramWL72ISMWBinding93,
            62: sequenceDiagramWL72ISMWBinding94,
            63: sequenceDiagramWL72ISMWBinding95,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 5],
          ),
          {
            9: 47,
            12: 12,
            13: sequenceDiagramWL72ISMWBinding70,
            14: sequenceDiagramWL72ISMWBinding71,
            17: 15,
            18: sequenceDiagramWL72ISMWBinding72,
            21: sequenceDiagramWL72ISMWBinding73,
            22: 40,
            23: sequenceDiagramWL72ISMWBinding74,
            24: 19,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: sequenceDiagramWL72ISMWBinding75,
            30: sequenceDiagramWL72ISMWBinding76,
            31: sequenceDiagramWL72ISMWBinding77,
            33: sequenceDiagramWL72ISMWBinding78,
            35: sequenceDiagramWL72ISMWBinding79,
            36: sequenceDiagramWL72ISMWBinding80,
            37: sequenceDiagramWL72ISMWBinding81,
            38: sequenceDiagramWL72ISMWBinding82,
            39: sequenceDiagramWL72ISMWBinding83,
            41: sequenceDiagramWL72ISMWBinding84,
            43: sequenceDiagramWL72ISMWBinding85,
            44: sequenceDiagramWL72ISMWBinding86,
            46: sequenceDiagramWL72ISMWBinding87,
            50: sequenceDiagramWL72ISMWBinding88,
            52: sequenceDiagramWL72ISMWBinding89,
            53: sequenceDiagramWL72ISMWBinding90,
            55: sequenceDiagramWL72ISMWBinding91,
            60: sequenceDiagramWL72ISMWBinding92,
            61: sequenceDiagramWL72ISMWBinding93,
            62: sequenceDiagramWL72ISMWBinding94,
            63: sequenceDiagramWL72ISMWBinding95,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 7],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 8],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 14],
          ),
          {
            12: 48,
            50: sequenceDiagramWL72ISMWBinding88,
            52: sequenceDiagramWL72ISMWBinding89,
            53: sequenceDiagramWL72ISMWBinding90,
          },
          {
            15: [1, 49],
          },
          {
            5: [1, 50],
          },
          {
            5: [1, 53],
            19: [1, 51],
            20: [1, 52],
          },
          {
            22: 54,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            22: 55,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            5: [1, 56],
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
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 29],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 30],
          ),
          {
            32: [1, 61],
          },
          {
            34: [1, 62],
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 33],
          ),
          {
            15: [1, 63],
          },
          {
            15: [1, 64],
          },
          {
            15: [1, 65],
          },
          {
            15: [1, 66],
          },
          {
            15: [1, 67],
          },
          {
            15: [1, 68],
          },
          {
            15: [1, 69],
          },
          {
            15: [1, 70],
          },
          {
            22: 71,
            54: 72,
            71: [1, 73],
          },
          {
            22: 74,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            22: 75,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            68: 76,
            76: [1, 77],
            77: [1, 78],
            78: [1, 79],
            79: [1, 80],
            80: [1, 81],
            81: [1, 82],
            82: [1, 83],
            83: [1, 84],
            84: [1, 85],
            85: [1, 86],
          },
          {
            56: 87,
            58: [1, 88],
            66: [1, 89],
            67: [1, 90],
          },
          {
            22: 91,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            22: 92,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            22: 93,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            22: 94,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          sequenceDiagramWL72ISMWBinding63(
            [5, 51, 65, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
            sequenceDiagramWL72ISMWBinding98,
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 6],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 15],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding99,
            [2, 9],
            {
              10: 95,
            },
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 17],
          ),
          {
            5: [1, 97],
            19: [1, 96],
          },
          {
            5: [1, 98],
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 21],
          ),
          {
            5: [1, 99],
          },
          {
            5: [1, 100],
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 24],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 25],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 26],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 27],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 28],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 31],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 32],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding100,
            sequenceDiagramWL72ISMWBinding67,
            {
              7: 101,
            },
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding100,
            sequenceDiagramWL72ISMWBinding67,
            {
              7: 102,
            },
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding100,
            sequenceDiagramWL72ISMWBinding67,
            {
              7: 103,
            },
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding101,
            sequenceDiagramWL72ISMWBinding67,
            {
              40: 104,
              7: 105,
            },
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding102,
            sequenceDiagramWL72ISMWBinding67,
            {
              42: 106,
              7: 107,
            },
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding102,
            sequenceDiagramWL72ISMWBinding67,
            {
              7: 107,
              42: 108,
            },
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding103,
            sequenceDiagramWL72ISMWBinding67,
            {
              45: 109,
              7: 110,
            },
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding100,
            sequenceDiagramWL72ISMWBinding67,
            {
              7: 111,
            },
          ),
          {
            5: [1, 113],
            51: [1, 112],
          },
          {
            5: [1, 114],
          },
          sequenceDiagramWL72ISMWBinding63(
            [5, 51],
            sequenceDiagramWL72ISMWBinding98,
            {
              72: 115,
              73: [1, 116],
            },
          ),
          {
            5: [1, 118],
            51: [1, 117],
          },
          {
            5: [1, 119],
          },
          {
            22: 122,
            69: [1, 120],
            70: [1, 121],
            71: sequenceDiagramWL72ISMWBinding96,
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding104,
            [2, 72],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding104,
            [2, 73],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding104,
            [2, 74],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding104,
            [2, 75],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding104,
            [2, 76],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding104,
            [2, 77],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding104,
            [2, 78],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding104,
            [2, 79],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding104,
            [2, 80],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding104,
            [2, 81],
          ),
          {
            22: 123,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            22: 125,
            59: 124,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            71: [2, 64],
          },
          {
            71: [2, 65],
          },
          {
            57: 126,
            86: sequenceDiagramWL72ISMWBinding105,
          },
          {
            57: 128,
            86: sequenceDiagramWL72ISMWBinding105,
          },
          {
            57: 129,
            86: sequenceDiagramWL72ISMWBinding105,
          },
          {
            57: 130,
            86: sequenceDiagramWL72ISMWBinding105,
          },
          {
            4: [1, 133],
            5: [1, 135],
            11: 132,
            12: 134,
            16: [1, 131],
            50: sequenceDiagramWL72ISMWBinding88,
            52: sequenceDiagramWL72ISMWBinding89,
            53: sequenceDiagramWL72ISMWBinding90,
          },
          {
            5: [1, 136],
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 19],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 20],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 22],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 23],
          ),
          {
            4: sequenceDiagramWL72ISMWBinding68,
            5: sequenceDiagramWL72ISMWBinding69,
            8: 8,
            9: 10,
            12: 12,
            13: sequenceDiagramWL72ISMWBinding70,
            14: sequenceDiagramWL72ISMWBinding71,
            16: [1, 137],
            17: 15,
            18: sequenceDiagramWL72ISMWBinding72,
            21: sequenceDiagramWL72ISMWBinding73,
            22: 40,
            23: sequenceDiagramWL72ISMWBinding74,
            24: 19,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: sequenceDiagramWL72ISMWBinding75,
            30: sequenceDiagramWL72ISMWBinding76,
            31: sequenceDiagramWL72ISMWBinding77,
            33: sequenceDiagramWL72ISMWBinding78,
            35: sequenceDiagramWL72ISMWBinding79,
            36: sequenceDiagramWL72ISMWBinding80,
            37: sequenceDiagramWL72ISMWBinding81,
            38: sequenceDiagramWL72ISMWBinding82,
            39: sequenceDiagramWL72ISMWBinding83,
            41: sequenceDiagramWL72ISMWBinding84,
            43: sequenceDiagramWL72ISMWBinding85,
            44: sequenceDiagramWL72ISMWBinding86,
            46: sequenceDiagramWL72ISMWBinding87,
            50: sequenceDiagramWL72ISMWBinding88,
            52: sequenceDiagramWL72ISMWBinding89,
            53: sequenceDiagramWL72ISMWBinding90,
            55: sequenceDiagramWL72ISMWBinding91,
            60: sequenceDiagramWL72ISMWBinding92,
            61: sequenceDiagramWL72ISMWBinding93,
            62: sequenceDiagramWL72ISMWBinding94,
            63: sequenceDiagramWL72ISMWBinding95,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            4: sequenceDiagramWL72ISMWBinding68,
            5: sequenceDiagramWL72ISMWBinding69,
            8: 8,
            9: 10,
            12: 12,
            13: sequenceDiagramWL72ISMWBinding70,
            14: sequenceDiagramWL72ISMWBinding71,
            16: [1, 138],
            17: 15,
            18: sequenceDiagramWL72ISMWBinding72,
            21: sequenceDiagramWL72ISMWBinding73,
            22: 40,
            23: sequenceDiagramWL72ISMWBinding74,
            24: 19,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: sequenceDiagramWL72ISMWBinding75,
            30: sequenceDiagramWL72ISMWBinding76,
            31: sequenceDiagramWL72ISMWBinding77,
            33: sequenceDiagramWL72ISMWBinding78,
            35: sequenceDiagramWL72ISMWBinding79,
            36: sequenceDiagramWL72ISMWBinding80,
            37: sequenceDiagramWL72ISMWBinding81,
            38: sequenceDiagramWL72ISMWBinding82,
            39: sequenceDiagramWL72ISMWBinding83,
            41: sequenceDiagramWL72ISMWBinding84,
            43: sequenceDiagramWL72ISMWBinding85,
            44: sequenceDiagramWL72ISMWBinding86,
            46: sequenceDiagramWL72ISMWBinding87,
            50: sequenceDiagramWL72ISMWBinding88,
            52: sequenceDiagramWL72ISMWBinding89,
            53: sequenceDiagramWL72ISMWBinding90,
            55: sequenceDiagramWL72ISMWBinding91,
            60: sequenceDiagramWL72ISMWBinding92,
            61: sequenceDiagramWL72ISMWBinding93,
            62: sequenceDiagramWL72ISMWBinding94,
            63: sequenceDiagramWL72ISMWBinding95,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            4: sequenceDiagramWL72ISMWBinding68,
            5: sequenceDiagramWL72ISMWBinding69,
            8: 8,
            9: 10,
            12: 12,
            13: sequenceDiagramWL72ISMWBinding70,
            14: sequenceDiagramWL72ISMWBinding71,
            16: [1, 139],
            17: 15,
            18: sequenceDiagramWL72ISMWBinding72,
            21: sequenceDiagramWL72ISMWBinding73,
            22: 40,
            23: sequenceDiagramWL72ISMWBinding74,
            24: 19,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: sequenceDiagramWL72ISMWBinding75,
            30: sequenceDiagramWL72ISMWBinding76,
            31: sequenceDiagramWL72ISMWBinding77,
            33: sequenceDiagramWL72ISMWBinding78,
            35: sequenceDiagramWL72ISMWBinding79,
            36: sequenceDiagramWL72ISMWBinding80,
            37: sequenceDiagramWL72ISMWBinding81,
            38: sequenceDiagramWL72ISMWBinding82,
            39: sequenceDiagramWL72ISMWBinding83,
            41: sequenceDiagramWL72ISMWBinding84,
            43: sequenceDiagramWL72ISMWBinding85,
            44: sequenceDiagramWL72ISMWBinding86,
            46: sequenceDiagramWL72ISMWBinding87,
            50: sequenceDiagramWL72ISMWBinding88,
            52: sequenceDiagramWL72ISMWBinding89,
            53: sequenceDiagramWL72ISMWBinding90,
            55: sequenceDiagramWL72ISMWBinding91,
            60: sequenceDiagramWL72ISMWBinding92,
            61: sequenceDiagramWL72ISMWBinding93,
            62: sequenceDiagramWL72ISMWBinding94,
            63: sequenceDiagramWL72ISMWBinding95,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            16: [1, 140],
          },
          {
            4: sequenceDiagramWL72ISMWBinding68,
            5: sequenceDiagramWL72ISMWBinding69,
            8: 8,
            9: 10,
            12: 12,
            13: sequenceDiagramWL72ISMWBinding70,
            14: sequenceDiagramWL72ISMWBinding71,
            16: [2, 46],
            17: 15,
            18: sequenceDiagramWL72ISMWBinding72,
            21: sequenceDiagramWL72ISMWBinding73,
            22: 40,
            23: sequenceDiagramWL72ISMWBinding74,
            24: 19,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: sequenceDiagramWL72ISMWBinding75,
            30: sequenceDiagramWL72ISMWBinding76,
            31: sequenceDiagramWL72ISMWBinding77,
            33: sequenceDiagramWL72ISMWBinding78,
            35: sequenceDiagramWL72ISMWBinding79,
            36: sequenceDiagramWL72ISMWBinding80,
            37: sequenceDiagramWL72ISMWBinding81,
            38: sequenceDiagramWL72ISMWBinding82,
            39: sequenceDiagramWL72ISMWBinding83,
            41: sequenceDiagramWL72ISMWBinding84,
            43: sequenceDiagramWL72ISMWBinding85,
            44: sequenceDiagramWL72ISMWBinding86,
            46: sequenceDiagramWL72ISMWBinding87,
            49: [1, 141],
            50: sequenceDiagramWL72ISMWBinding88,
            52: sequenceDiagramWL72ISMWBinding89,
            53: sequenceDiagramWL72ISMWBinding90,
            55: sequenceDiagramWL72ISMWBinding91,
            60: sequenceDiagramWL72ISMWBinding92,
            61: sequenceDiagramWL72ISMWBinding93,
            62: sequenceDiagramWL72ISMWBinding94,
            63: sequenceDiagramWL72ISMWBinding95,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            16: [1, 142],
          },
          {
            4: sequenceDiagramWL72ISMWBinding68,
            5: sequenceDiagramWL72ISMWBinding69,
            8: 8,
            9: 10,
            12: 12,
            13: sequenceDiagramWL72ISMWBinding70,
            14: sequenceDiagramWL72ISMWBinding71,
            16: [2, 44],
            17: 15,
            18: sequenceDiagramWL72ISMWBinding72,
            21: sequenceDiagramWL72ISMWBinding73,
            22: 40,
            23: sequenceDiagramWL72ISMWBinding74,
            24: 19,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: sequenceDiagramWL72ISMWBinding75,
            30: sequenceDiagramWL72ISMWBinding76,
            31: sequenceDiagramWL72ISMWBinding77,
            33: sequenceDiagramWL72ISMWBinding78,
            35: sequenceDiagramWL72ISMWBinding79,
            36: sequenceDiagramWL72ISMWBinding80,
            37: sequenceDiagramWL72ISMWBinding81,
            38: sequenceDiagramWL72ISMWBinding82,
            39: sequenceDiagramWL72ISMWBinding83,
            41: sequenceDiagramWL72ISMWBinding84,
            43: sequenceDiagramWL72ISMWBinding85,
            44: sequenceDiagramWL72ISMWBinding86,
            46: sequenceDiagramWL72ISMWBinding87,
            48: [1, 143],
            50: sequenceDiagramWL72ISMWBinding88,
            52: sequenceDiagramWL72ISMWBinding89,
            53: sequenceDiagramWL72ISMWBinding90,
            55: sequenceDiagramWL72ISMWBinding91,
            60: sequenceDiagramWL72ISMWBinding92,
            61: sequenceDiagramWL72ISMWBinding93,
            62: sequenceDiagramWL72ISMWBinding94,
            63: sequenceDiagramWL72ISMWBinding95,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            16: [1, 144],
          },
          {
            16: [1, 145],
          },
          {
            4: sequenceDiagramWL72ISMWBinding68,
            5: sequenceDiagramWL72ISMWBinding69,
            8: 8,
            9: 10,
            12: 12,
            13: sequenceDiagramWL72ISMWBinding70,
            14: sequenceDiagramWL72ISMWBinding71,
            16: [2, 42],
            17: 15,
            18: sequenceDiagramWL72ISMWBinding72,
            21: sequenceDiagramWL72ISMWBinding73,
            22: 40,
            23: sequenceDiagramWL72ISMWBinding74,
            24: 19,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: sequenceDiagramWL72ISMWBinding75,
            30: sequenceDiagramWL72ISMWBinding76,
            31: sequenceDiagramWL72ISMWBinding77,
            33: sequenceDiagramWL72ISMWBinding78,
            35: sequenceDiagramWL72ISMWBinding79,
            36: sequenceDiagramWL72ISMWBinding80,
            37: sequenceDiagramWL72ISMWBinding81,
            38: sequenceDiagramWL72ISMWBinding82,
            39: sequenceDiagramWL72ISMWBinding83,
            41: sequenceDiagramWL72ISMWBinding84,
            43: sequenceDiagramWL72ISMWBinding85,
            44: sequenceDiagramWL72ISMWBinding86,
            46: sequenceDiagramWL72ISMWBinding87,
            47: [1, 146],
            50: sequenceDiagramWL72ISMWBinding88,
            52: sequenceDiagramWL72ISMWBinding89,
            53: sequenceDiagramWL72ISMWBinding90,
            55: sequenceDiagramWL72ISMWBinding91,
            60: sequenceDiagramWL72ISMWBinding92,
            61: sequenceDiagramWL72ISMWBinding93,
            62: sequenceDiagramWL72ISMWBinding94,
            63: sequenceDiagramWL72ISMWBinding95,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            4: sequenceDiagramWL72ISMWBinding68,
            5: sequenceDiagramWL72ISMWBinding69,
            8: 8,
            9: 10,
            12: 12,
            13: sequenceDiagramWL72ISMWBinding70,
            14: sequenceDiagramWL72ISMWBinding71,
            16: [1, 147],
            17: 15,
            18: sequenceDiagramWL72ISMWBinding72,
            21: sequenceDiagramWL72ISMWBinding73,
            22: 40,
            23: sequenceDiagramWL72ISMWBinding74,
            24: 19,
            25: 20,
            26: 21,
            27: 22,
            28: 23,
            29: sequenceDiagramWL72ISMWBinding75,
            30: sequenceDiagramWL72ISMWBinding76,
            31: sequenceDiagramWL72ISMWBinding77,
            33: sequenceDiagramWL72ISMWBinding78,
            35: sequenceDiagramWL72ISMWBinding79,
            36: sequenceDiagramWL72ISMWBinding80,
            37: sequenceDiagramWL72ISMWBinding81,
            38: sequenceDiagramWL72ISMWBinding82,
            39: sequenceDiagramWL72ISMWBinding83,
            41: sequenceDiagramWL72ISMWBinding84,
            43: sequenceDiagramWL72ISMWBinding85,
            44: sequenceDiagramWL72ISMWBinding86,
            46: sequenceDiagramWL72ISMWBinding87,
            50: sequenceDiagramWL72ISMWBinding88,
            52: sequenceDiagramWL72ISMWBinding89,
            53: sequenceDiagramWL72ISMWBinding90,
            55: sequenceDiagramWL72ISMWBinding91,
            60: sequenceDiagramWL72ISMWBinding92,
            61: sequenceDiagramWL72ISMWBinding93,
            62: sequenceDiagramWL72ISMWBinding94,
            63: sequenceDiagramWL72ISMWBinding95,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            15: [1, 148],
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 49],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 53],
          ),
          {
            5: [2, 69],
          },
          {
            74: [1, 149],
          },
          {
            15: [1, 150],
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 51],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 52],
          ),
          {
            22: 151,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            22: 152,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          {
            57: 153,
            86: sequenceDiagramWL72ISMWBinding105,
          },
          {
            57: 154,
            86: sequenceDiagramWL72ISMWBinding105,
          },
          {
            57: 155,
            86: sequenceDiagramWL72ISMWBinding105,
          },
          {
            65: [1, 156],
            86: [2, 63],
          },
          {
            5: [2, 56],
          },
          {
            5: [2, 82],
          },
          {
            5: [2, 57],
          },
          {
            5: [2, 58],
          },
          {
            5: [2, 59],
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 16],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding99,
            [2, 10],
          ),
          {
            12: 157,
            50: sequenceDiagramWL72ISMWBinding88,
            52: sequenceDiagramWL72ISMWBinding89,
            53: sequenceDiagramWL72ISMWBinding90,
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding99,
            [2, 12],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding99,
            [2, 13],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 18],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 34],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 35],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 36],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 37],
          ),
          {
            15: [1, 158],
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 38],
          ),
          {
            15: [1, 159],
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 39],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 40],
          ),
          {
            15: [1, 160],
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 41],
          ),
          {
            5: [1, 161],
          },
          {
            75: [1, 162],
          },
          {
            5: [1, 163],
          },
          {
            57: 164,
            86: sequenceDiagramWL72ISMWBinding105,
          },
          {
            57: 165,
            86: sequenceDiagramWL72ISMWBinding105,
          },
          {
            5: [2, 68],
          },
          {
            5: [2, 54],
          },
          {
            5: [2, 55],
          },
          {
            22: 166,
            71: sequenceDiagramWL72ISMWBinding96,
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding99,
            [2, 11],
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding101,
            sequenceDiagramWL72ISMWBinding67,
            {
              7: 105,
              40: 167,
            },
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding102,
            sequenceDiagramWL72ISMWBinding67,
            {
              7: 107,
              42: 168,
            },
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding103,
            sequenceDiagramWL72ISMWBinding67,
            {
              7: 110,
              45: 169,
            },
          ),
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 48],
          ),
          {
            5: [2, 70],
          },
          sequenceDiagramWL72ISMWBinding63(
            sequenceDiagramWL72ISMWBinding97,
            [2, 50],
          ),
          {
            5: [2, 66],
          },
          {
            5: [2, 67],
          },
          {
            86: [2, 62],
          },
          {
            16: [2, 47],
          },
          {
            16: [2, 45],
          },
          {
            16: [2, 43],
          },
        ],
        defaultActions: {
          5: [2, 1],
          6: [2, 2],
          89: [2, 64],
          90: [2, 65],
          115: [2, 69],
          126: [2, 56],
          127: [2, 82],
          128: [2, 57],
          129: [2, 58],
          130: [2, 59],
          153: [2, 68],
          154: [2, 54],
          155: [2, 55],
          162: [2, 70],
          164: [2, 66],
          165: [2, 67],
          166: [2, 62],
          167: [2, 47],
          168: [2, 45],
          169: [2, 43],
        },
        parseError: defineFunctionName(function (
          sequenceDiagramWL72ISMWInput270,
          sequenceDiagramWL72ISMWInput271,
        ) {
          if (sequenceDiagramWL72ISMWInput271.recoverable)
            this.trace(sequenceDiagramWL72ISMWInput270);
          else {
            var sequenceDiagramWL72ISMWBinding472 = Error(
              sequenceDiagramWL72ISMWInput270,
            );
            throw (
              (sequenceDiagramWL72ISMWBinding472.hash =
                sequenceDiagramWL72ISMWInput271),
              sequenceDiagramWL72ISMWBinding472
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (sequenceDiagramWL72ISMWInput14) {
          var sequenceDiagramWL72ISMWBinding138 = this,
            sequenceDiagramWL72ISMWBinding139 = [0],
            sequenceDiagramWL72ISMWBinding140 = [],
            sequenceDiagramWL72ISMWBinding141 = [null],
            sequenceDiagramWL72ISMWBinding142 = [],
            sequenceDiagramWL72ISMWBinding143 = this.table,
            sequenceDiagramWL72ISMWBinding144 = "",
            sequenceDiagramWL72ISMWBinding145 = 0,
            sequenceDiagramWL72ISMWBinding146 = 0,
            sequenceDiagramWL72ISMWBinding147 = 0,
            sequenceDiagramWL72ISMWBinding150 =
              sequenceDiagramWL72ISMWBinding142.slice.call(arguments, 1),
            sequenceDiagramWL72ISMWBinding151 = Object.create(this.lexer),
            sequenceDiagramWL72ISMWBinding152 = {
              yy: {},
            };
          for (var sequenceDiagramWL72ISMWBinding153 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              sequenceDiagramWL72ISMWBinding153,
            ) &&
              (sequenceDiagramWL72ISMWBinding152.yy[
                sequenceDiagramWL72ISMWBinding153
              ] = this.yy[sequenceDiagramWL72ISMWBinding153]);
          sequenceDiagramWL72ISMWBinding151.setInput(
            sequenceDiagramWL72ISMWInput14,
            sequenceDiagramWL72ISMWBinding152.yy,
          );
          sequenceDiagramWL72ISMWBinding152.yy.lexer =
            sequenceDiagramWL72ISMWBinding151;
          sequenceDiagramWL72ISMWBinding152.yy.parser = this;
          sequenceDiagramWL72ISMWBinding151.yylloc === undefined &&
            (sequenceDiagramWL72ISMWBinding151.yylloc = {});
          var sequenceDiagramWL72ISMWBinding154 =
            sequenceDiagramWL72ISMWBinding151.yylloc;
          sequenceDiagramWL72ISMWBinding142.push(
            sequenceDiagramWL72ISMWBinding154,
          );
          var sequenceDiagramWL72ISMWBinding155 =
            sequenceDiagramWL72ISMWBinding151.options &&
            sequenceDiagramWL72ISMWBinding151.options.ranges;
          typeof sequenceDiagramWL72ISMWBinding152.yy.parseError == "function"
            ? (this.parseError =
                sequenceDiagramWL72ISMWBinding152.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function sequenceDiagramWL72ISMWHelper8(
            sequenceDiagramWL72ISMWInput291,
          ) {
            sequenceDiagramWL72ISMWBinding139.length -=
              2 * sequenceDiagramWL72ISMWInput291;
            sequenceDiagramWL72ISMWBinding141.length -=
              sequenceDiagramWL72ISMWInput291;
            sequenceDiagramWL72ISMWBinding142.length -=
              sequenceDiagramWL72ISMWInput291;
          }
          defineFunctionName(sequenceDiagramWL72ISMWHelper8, "popStack");
          function sequenceDiagramWL72ISMWHelper9() {
            var sequenceDiagramWL72ISMWBinding439 =
              sequenceDiagramWL72ISMWBinding140.pop() ||
              sequenceDiagramWL72ISMWBinding151.lex() ||
              1;
            return (
              typeof sequenceDiagramWL72ISMWBinding439 != "number" &&
                (sequenceDiagramWL72ISMWBinding439 instanceof Array &&
                  ((sequenceDiagramWL72ISMWBinding140 =
                    sequenceDiagramWL72ISMWBinding439),
                  (sequenceDiagramWL72ISMWBinding439 =
                    sequenceDiagramWL72ISMWBinding140.pop())),
                (sequenceDiagramWL72ISMWBinding439 =
                  sequenceDiagramWL72ISMWBinding138.symbols_[
                    sequenceDiagramWL72ISMWBinding439
                  ] || sequenceDiagramWL72ISMWBinding439)),
              sequenceDiagramWL72ISMWBinding439
            );
          }
          defineFunctionName(sequenceDiagramWL72ISMWHelper9, "lex");
          for (
            var sequenceDiagramWL72ISMWBinding156,
              sequenceDiagramWL72ISMWBinding157,
              sequenceDiagramWL72ISMWBinding158,
              sequenceDiagramWL72ISMWBinding159,
              sequenceDiagramWL72ISMWBinding160,
              sequenceDiagramWL72ISMWBinding161 = {},
              sequenceDiagramWL72ISMWBinding162,
              sequenceDiagramWL72ISMWBinding163,
              sequenceDiagramWL72ISMWBinding164,
              sequenceDiagramWL72ISMWBinding165;
            ;
          ) {
            if (
              ((sequenceDiagramWL72ISMWBinding158 =
                sequenceDiagramWL72ISMWBinding139[
                  sequenceDiagramWL72ISMWBinding139.length - 1
                ]),
              this.defaultActions[sequenceDiagramWL72ISMWBinding158]
                ? (sequenceDiagramWL72ISMWBinding159 =
                    this.defaultActions[sequenceDiagramWL72ISMWBinding158])
                : ((sequenceDiagramWL72ISMWBinding156 ??=
                    sequenceDiagramWL72ISMWHelper9()),
                  (sequenceDiagramWL72ISMWBinding159 =
                    sequenceDiagramWL72ISMWBinding143[
                      sequenceDiagramWL72ISMWBinding158
                    ] &&
                    sequenceDiagramWL72ISMWBinding143[
                      sequenceDiagramWL72ISMWBinding158
                    ][sequenceDiagramWL72ISMWBinding156])),
              sequenceDiagramWL72ISMWBinding159 === undefined ||
                !sequenceDiagramWL72ISMWBinding159.length ||
                !sequenceDiagramWL72ISMWBinding159[0])
            ) {
              var sequenceDiagramWL72ISMWBinding166 = "";
              for (sequenceDiagramWL72ISMWBinding162 in ((sequenceDiagramWL72ISMWBinding165 =
                []),
              sequenceDiagramWL72ISMWBinding143[
                sequenceDiagramWL72ISMWBinding158
              ]))
                this.terminals_[sequenceDiagramWL72ISMWBinding162] &&
                  sequenceDiagramWL72ISMWBinding162 > 2 &&
                  sequenceDiagramWL72ISMWBinding165.push(
                    "'" +
                      this.terminals_[sequenceDiagramWL72ISMWBinding162] +
                      "'",
                  );
              sequenceDiagramWL72ISMWBinding166 =
                sequenceDiagramWL72ISMWBinding151.showPosition
                  ? "Parse error on line " +
                    (sequenceDiagramWL72ISMWBinding145 + 1) +
                    ":\n" +
                    sequenceDiagramWL72ISMWBinding151.showPosition() +
                    "\nExpecting " +
                    sequenceDiagramWL72ISMWBinding165.join(", ") +
                    ", got '" +
                    (this.terminals_[sequenceDiagramWL72ISMWBinding156] ||
                      sequenceDiagramWL72ISMWBinding156) +
                    "'"
                  : "Parse error on line " +
                    (sequenceDiagramWL72ISMWBinding145 + 1) +
                    ": Unexpected " +
                    (sequenceDiagramWL72ISMWBinding156 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[sequenceDiagramWL72ISMWBinding156] ||
                          sequenceDiagramWL72ISMWBinding156) +
                        "'");
              this.parseError(sequenceDiagramWL72ISMWBinding166, {
                text: sequenceDiagramWL72ISMWBinding151.match,
                token:
                  this.terminals_[sequenceDiagramWL72ISMWBinding156] ||
                  sequenceDiagramWL72ISMWBinding156,
                line: sequenceDiagramWL72ISMWBinding151.yylineno,
                loc: sequenceDiagramWL72ISMWBinding154,
                expected: sequenceDiagramWL72ISMWBinding165,
              });
            }
            if (
              sequenceDiagramWL72ISMWBinding159[0] instanceof Array &&
              sequenceDiagramWL72ISMWBinding159.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  sequenceDiagramWL72ISMWBinding158 +
                  ", token: " +
                  sequenceDiagramWL72ISMWBinding156,
              );
            switch (sequenceDiagramWL72ISMWBinding159[0]) {
              case 1:
                sequenceDiagramWL72ISMWBinding139.push(
                  sequenceDiagramWL72ISMWBinding156,
                );
                sequenceDiagramWL72ISMWBinding141.push(
                  sequenceDiagramWL72ISMWBinding151.yytext,
                );
                sequenceDiagramWL72ISMWBinding142.push(
                  sequenceDiagramWL72ISMWBinding151.yylloc,
                );
                sequenceDiagramWL72ISMWBinding139.push(
                  sequenceDiagramWL72ISMWBinding159[1],
                );
                sequenceDiagramWL72ISMWBinding156 = null;
                sequenceDiagramWL72ISMWBinding157
                  ? ((sequenceDiagramWL72ISMWBinding156 =
                      sequenceDiagramWL72ISMWBinding157),
                    (sequenceDiagramWL72ISMWBinding157 = null))
                  : ((sequenceDiagramWL72ISMWBinding146 =
                      sequenceDiagramWL72ISMWBinding151.yyleng),
                    (sequenceDiagramWL72ISMWBinding144 =
                      sequenceDiagramWL72ISMWBinding151.yytext),
                    (sequenceDiagramWL72ISMWBinding145 =
                      sequenceDiagramWL72ISMWBinding151.yylineno),
                    (sequenceDiagramWL72ISMWBinding154 =
                      sequenceDiagramWL72ISMWBinding151.yylloc),
                    sequenceDiagramWL72ISMWBinding147 > 0 &&
                      sequenceDiagramWL72ISMWBinding147--);
                break;
              case 2:
                if (
                  ((sequenceDiagramWL72ISMWBinding163 =
                    this.productions_[sequenceDiagramWL72ISMWBinding159[1]][1]),
                  (sequenceDiagramWL72ISMWBinding161.$ =
                    sequenceDiagramWL72ISMWBinding141[
                      sequenceDiagramWL72ISMWBinding141.length -
                        sequenceDiagramWL72ISMWBinding163
                    ]),
                  (sequenceDiagramWL72ISMWBinding161._$ = {
                    first_line:
                      sequenceDiagramWL72ISMWBinding142[
                        sequenceDiagramWL72ISMWBinding142.length -
                          (sequenceDiagramWL72ISMWBinding163 || 1)
                      ].first_line,
                    last_line:
                      sequenceDiagramWL72ISMWBinding142[
                        sequenceDiagramWL72ISMWBinding142.length - 1
                      ].last_line,
                    first_column:
                      sequenceDiagramWL72ISMWBinding142[
                        sequenceDiagramWL72ISMWBinding142.length -
                          (sequenceDiagramWL72ISMWBinding163 || 1)
                      ].first_column,
                    last_column:
                      sequenceDiagramWL72ISMWBinding142[
                        sequenceDiagramWL72ISMWBinding142.length - 1
                      ].last_column,
                  }),
                  sequenceDiagramWL72ISMWBinding155 &&
                    (sequenceDiagramWL72ISMWBinding161._$.range = [
                      sequenceDiagramWL72ISMWBinding142[
                        sequenceDiagramWL72ISMWBinding142.length -
                          (sequenceDiagramWL72ISMWBinding163 || 1)
                      ].range[0],
                      sequenceDiagramWL72ISMWBinding142[
                        sequenceDiagramWL72ISMWBinding142.length - 1
                      ].range[1],
                    ]),
                  (sequenceDiagramWL72ISMWBinding160 = this.performAction.apply(
                    sequenceDiagramWL72ISMWBinding161,
                    [
                      sequenceDiagramWL72ISMWBinding144,
                      sequenceDiagramWL72ISMWBinding146,
                      sequenceDiagramWL72ISMWBinding145,
                      sequenceDiagramWL72ISMWBinding152.yy,
                      sequenceDiagramWL72ISMWBinding159[1],
                      sequenceDiagramWL72ISMWBinding141,
                      sequenceDiagramWL72ISMWBinding142,
                    ].concat(sequenceDiagramWL72ISMWBinding150),
                  )),
                  sequenceDiagramWL72ISMWBinding160 !== undefined)
                )
                  return sequenceDiagramWL72ISMWBinding160;
                sequenceDiagramWL72ISMWBinding163 &&
                  ((sequenceDiagramWL72ISMWBinding139 =
                    sequenceDiagramWL72ISMWBinding139.slice(
                      0,
                      -1 * sequenceDiagramWL72ISMWBinding163 * 2,
                    )),
                  (sequenceDiagramWL72ISMWBinding141 =
                    sequenceDiagramWL72ISMWBinding141.slice(
                      0,
                      -1 * sequenceDiagramWL72ISMWBinding163,
                    )),
                  (sequenceDiagramWL72ISMWBinding142 =
                    sequenceDiagramWL72ISMWBinding142.slice(
                      0,
                      -1 * sequenceDiagramWL72ISMWBinding163,
                    )));
                sequenceDiagramWL72ISMWBinding139.push(
                  this.productions_[sequenceDiagramWL72ISMWBinding159[1]][0],
                );
                sequenceDiagramWL72ISMWBinding141.push(
                  sequenceDiagramWL72ISMWBinding161.$,
                );
                sequenceDiagramWL72ISMWBinding142.push(
                  sequenceDiagramWL72ISMWBinding161._$,
                );
                sequenceDiagramWL72ISMWBinding164 =
                  sequenceDiagramWL72ISMWBinding143[
                    sequenceDiagramWL72ISMWBinding139[
                      sequenceDiagramWL72ISMWBinding139.length - 2
                    ]
                  ][
                    sequenceDiagramWL72ISMWBinding139[
                      sequenceDiagramWL72ISMWBinding139.length - 1
                    ]
                  ];
                sequenceDiagramWL72ISMWBinding139.push(
                  sequenceDiagramWL72ISMWBinding164,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    sequenceDiagramWL72ISMWBinding106.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          sequenceDiagramWL72ISMWInput282,
          sequenceDiagramWL72ISMWInput283,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              sequenceDiagramWL72ISMWInput282,
              sequenceDiagramWL72ISMWInput283,
            );
          else throw Error(sequenceDiagramWL72ISMWInput282);
        }, "parseError"),
        setInput: defineFunctionName(function (
          sequenceDiagramWL72ISMWInput141,
          sequenceDiagramWL72ISMWInput142,
        ) {
          return (
            (this.yy = sequenceDiagramWL72ISMWInput142 || this.yy || {}),
            (this._input = sequenceDiagramWL72ISMWInput141),
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
          var sequenceDiagramWL72ISMWBinding389 = this._input[0];
          return (
            (this.yytext += sequenceDiagramWL72ISMWBinding389),
            this.yyleng++,
            this.offset++,
            (this.match += sequenceDiagramWL72ISMWBinding389),
            (this.matched += sequenceDiagramWL72ISMWBinding389),
            sequenceDiagramWL72ISMWBinding389.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            sequenceDiagramWL72ISMWBinding389
          );
        }, "input"),
        unput: defineFunctionName(function (sequenceDiagramWL72ISMWInput99) {
          var sequenceDiagramWL72ISMWBinding333 =
              sequenceDiagramWL72ISMWInput99.length,
            sequenceDiagramWL72ISMWBinding334 =
              sequenceDiagramWL72ISMWInput99.split(/(?:\r\n?|\n)/g);
          this._input = sequenceDiagramWL72ISMWInput99 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - sequenceDiagramWL72ISMWBinding333,
          );
          this.offset -= sequenceDiagramWL72ISMWBinding333;
          var sequenceDiagramWL72ISMWBinding335 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          sequenceDiagramWL72ISMWBinding334.length - 1 &&
            (this.yylineno -= sequenceDiagramWL72ISMWBinding334.length - 1);
          var sequenceDiagramWL72ISMWBinding336 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: sequenceDiagramWL72ISMWBinding334
                ? (sequenceDiagramWL72ISMWBinding334.length ===
                  sequenceDiagramWL72ISMWBinding335.length
                    ? this.yylloc.first_column
                    : 0) +
                  sequenceDiagramWL72ISMWBinding335[
                    sequenceDiagramWL72ISMWBinding335.length -
                      sequenceDiagramWL72ISMWBinding334.length
                  ].length -
                  sequenceDiagramWL72ISMWBinding334[0].length
                : this.yylloc.first_column - sequenceDiagramWL72ISMWBinding333,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                sequenceDiagramWL72ISMWBinding336[0],
                sequenceDiagramWL72ISMWBinding336[0] +
                  this.yyleng -
                  sequenceDiagramWL72ISMWBinding333,
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
        less: defineFunctionName(function (sequenceDiagramWL72ISMWInput302) {
          this.unput(this.match.slice(sequenceDiagramWL72ISMWInput302));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var sequenceDiagramWL72ISMWBinding442 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (sequenceDiagramWL72ISMWBinding442.length > 20 ? "..." : "") +
            sequenceDiagramWL72ISMWBinding442.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var sequenceDiagramWL72ISMWBinding430 = this.match;
          return (
            sequenceDiagramWL72ISMWBinding430.length < 20 &&
              (sequenceDiagramWL72ISMWBinding430 += this._input.substr(
                0,
                20 - sequenceDiagramWL72ISMWBinding430.length,
              )),
            (
              sequenceDiagramWL72ISMWBinding430.substr(0, 20) +
              (sequenceDiagramWL72ISMWBinding430.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var sequenceDiagramWL72ISMWBinding447 = this.pastInput(),
            sequenceDiagramWL72ISMWBinding448 = Array(
              sequenceDiagramWL72ISMWBinding447.length + 1,
            ).join("-");
          return (
            sequenceDiagramWL72ISMWBinding447 +
            this.upcomingInput() +
            "\n" +
            sequenceDiagramWL72ISMWBinding448 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          sequenceDiagramWL72ISMWInput37,
          sequenceDiagramWL72ISMWInput38,
        ) {
          var sequenceDiagramWL72ISMWBinding203,
            sequenceDiagramWL72ISMWBinding204,
            sequenceDiagramWL72ISMWBinding205;
          if (
            (this.options.backtrack_lexer &&
              ((sequenceDiagramWL72ISMWBinding205 = {
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
                (sequenceDiagramWL72ISMWBinding205.yylloc.range =
                  this.yylloc.range.slice(0))),
            (sequenceDiagramWL72ISMWBinding204 =
              sequenceDiagramWL72ISMWInput37[0].match(/(?:\r\n?|\n).*/g)),
            sequenceDiagramWL72ISMWBinding204 &&
              (this.yylineno += sequenceDiagramWL72ISMWBinding204.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: sequenceDiagramWL72ISMWBinding204
                ? sequenceDiagramWL72ISMWBinding204[
                    sequenceDiagramWL72ISMWBinding204.length - 1
                  ].length -
                  sequenceDiagramWL72ISMWBinding204[
                    sequenceDiagramWL72ISMWBinding204.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  sequenceDiagramWL72ISMWInput37[0].length,
            }),
            (this.yytext += sequenceDiagramWL72ISMWInput37[0]),
            (this.match += sequenceDiagramWL72ISMWInput37[0]),
            (this.matches = sequenceDiagramWL72ISMWInput37),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              sequenceDiagramWL72ISMWInput37[0].length,
            )),
            (this.matched += sequenceDiagramWL72ISMWInput37[0]),
            (sequenceDiagramWL72ISMWBinding203 = this.performAction.call(
              this,
              this.yy,
              this,
              sequenceDiagramWL72ISMWInput38,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            sequenceDiagramWL72ISMWBinding203)
          )
            return sequenceDiagramWL72ISMWBinding203;
          if (this._backtrack) {
            for (var sequenceDiagramWL72ISMWBinding206 in sequenceDiagramWL72ISMWBinding205)
              this[sequenceDiagramWL72ISMWBinding206] =
                sequenceDiagramWL72ISMWBinding205[
                  sequenceDiagramWL72ISMWBinding206
                ];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var sequenceDiagramWL72ISMWBinding325,
            sequenceDiagramWL72ISMWBinding326,
            sequenceDiagramWL72ISMWBinding327,
            sequenceDiagramWL72ISMWBinding328;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var sequenceDiagramWL72ISMWBinding329 = this._currentRules(),
              sequenceDiagramWL72ISMWBinding330 = 0;
            sequenceDiagramWL72ISMWBinding330 <
            sequenceDiagramWL72ISMWBinding329.length;
            sequenceDiagramWL72ISMWBinding330++
          )
            if (
              ((sequenceDiagramWL72ISMWBinding327 = this._input.match(
                this.rules[
                  sequenceDiagramWL72ISMWBinding329[
                    sequenceDiagramWL72ISMWBinding330
                  ]
                ],
              )),
              sequenceDiagramWL72ISMWBinding327 &&
                (!sequenceDiagramWL72ISMWBinding326 ||
                  sequenceDiagramWL72ISMWBinding327[0].length >
                    sequenceDiagramWL72ISMWBinding326[0].length))
            ) {
              if (
                ((sequenceDiagramWL72ISMWBinding326 =
                  sequenceDiagramWL72ISMWBinding327),
                (sequenceDiagramWL72ISMWBinding328 =
                  sequenceDiagramWL72ISMWBinding330),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((sequenceDiagramWL72ISMWBinding325 = this.test_match(
                    sequenceDiagramWL72ISMWBinding327,
                    sequenceDiagramWL72ISMWBinding329[
                      sequenceDiagramWL72ISMWBinding330
                    ],
                  )),
                  sequenceDiagramWL72ISMWBinding325 !== false)
                )
                  return sequenceDiagramWL72ISMWBinding325;
                if (this._backtrack) {
                  sequenceDiagramWL72ISMWBinding326 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return sequenceDiagramWL72ISMWBinding326
            ? ((sequenceDiagramWL72ISMWBinding325 = this.test_match(
                sequenceDiagramWL72ISMWBinding326,
                sequenceDiagramWL72ISMWBinding329[
                  sequenceDiagramWL72ISMWBinding328
                ],
              )),
              sequenceDiagramWL72ISMWBinding325 === false
                ? false
                : sequenceDiagramWL72ISMWBinding325)
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
        begin: defineFunctionName(function (sequenceDiagramWL72ISMWInput304) {
          this.conditionStack.push(sequenceDiagramWL72ISMWInput304);
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
          sequenceDiagramWL72ISMWInput269,
        ) {
          return (
            (sequenceDiagramWL72ISMWInput269 =
              this.conditionStack.length -
              1 -
              Math.abs(sequenceDiagramWL72ISMWInput269 || 0)),
            sequenceDiagramWL72ISMWInput269 >= 0
              ? this.conditionStack[sequenceDiagramWL72ISMWInput269]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (
          sequenceDiagramWL72ISMWInput311,
        ) {
          this.begin(sequenceDiagramWL72ISMWInput311);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          sequenceDiagramWL72ISMWInput15,
          sequenceDiagramWL72ISMWInput16,
          sequenceDiagramWL72ISMWInput17,
          sequenceDiagramWL72ISMWInput18,
        ) {
          switch (sequenceDiagramWL72ISMWInput17) {
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
              return 19;
            case 7:
              return (this.begin("CONFIG"), 73);
            case 8:
              return 74;
            case 9:
              return (this.popState(), this.popState(), 75);
            case 10:
              return (
                (sequenceDiagramWL72ISMWInput16.yytext =
                  sequenceDiagramWL72ISMWInput16.yytext.trim()),
                71
              );
            case 11:
              return (
                (sequenceDiagramWL72ISMWInput16.yytext =
                  sequenceDiagramWL72ISMWInput16.yytext.trim()),
                this.begin("ALIAS"),
                71
              );
            case 12:
              return (this.begin("LINE"), 14);
            case 13:
              return (this.begin("ID"), 50);
            case 14:
              return (this.begin("ID"), 52);
            case 15:
              return 13;
            case 16:
              return (this.begin("ID"), 53);
            case 17:
              return (
                (sequenceDiagramWL72ISMWInput16.yytext =
                  sequenceDiagramWL72ISMWInput16.yytext.trim()),
                this.begin("ALIAS"),
                71
              );
            case 18:
              return (this.popState(), this.popState(), this.begin("LINE"), 51);
            case 19:
              return (this.popState(), this.popState(), 5);
            case 20:
              return (this.begin("LINE"), 36);
            case 21:
              return (this.begin("LINE"), 37);
            case 22:
              return (this.begin("LINE"), 38);
            case 23:
              return (this.begin("LINE"), 39);
            case 24:
              return (this.begin("LINE"), 49);
            case 25:
              return (this.begin("LINE"), 41);
            case 26:
              return (this.begin("LINE"), 43);
            case 27:
              return (this.begin("LINE"), 48);
            case 28:
              return (this.begin("LINE"), 44);
            case 29:
              return (this.begin("LINE"), 47);
            case 30:
              return (this.begin("LINE"), 46);
            case 31:
              return (this.popState(), 15);
            case 32:
              return 16;
            case 33:
              return 66;
            case 34:
              return 67;
            case 35:
              return 60;
            case 36:
              return 61;
            case 37:
              return 62;
            case 38:
              return 63;
            case 39:
              return 58;
            case 40:
              return 55;
            case 41:
              return (this.begin("ID"), 21);
            case 42:
              return (this.begin("ID"), 23);
            case 43:
              return 29;
            case 44:
              return 30;
            case 45:
              return (this.begin("acc_title"), 31);
            case 46:
              return (this.popState(), "acc_title_value");
            case 47:
              return (this.begin("acc_descr"), 33);
            case 48:
              return (this.popState(), "acc_descr_value");
            case 49:
              this.begin("acc_descr_multiline");
              break;
            case 50:
              this.popState();
              break;
            case 51:
              return "acc_descr_multiline_value";
            case 52:
              return 6;
            case 53:
              return 18;
            case 54:
              return 20;
            case 55:
              return 65;
            case 56:
              return 5;
            case 57:
              return (
                (sequenceDiagramWL72ISMWInput16.yytext =
                  sequenceDiagramWL72ISMWInput16.yytext.trim()),
                71
              );
            case 58:
              return 78;
            case 59:
              return 79;
            case 60:
              return 80;
            case 61:
              return 81;
            case 62:
              return 76;
            case 63:
              return 77;
            case 64:
              return 82;
            case 65:
              return 83;
            case 66:
              return 84;
            case 67:
              return 85;
            case 68:
              return 86;
            case 69:
              return 86;
            case 70:
              return 69;
            case 71:
              return 70;
            case 72:
              return 5;
            case 73:
              return "INVALID";
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
          /^(?:\})/i,
          /^(?:[^\<->\->:\n,;@\s]+(?=@\{))/i,
          /^(?:[^\<->\->:\n,;@]+?([\-]*[^\<->\->:\n,;@]+?)*?(?=((?!\n)\s)+as(?!\n)\s|[#\n;]|$))/i,
          /^(?:box\b)/i,
          /^(?:participant\b)/i,
          /^(?:actor\b)/i,
          /^(?:create\b)/i,
          /^(?:destroy\b)/i,
          /^(?:[^<\->\->:\n,;]+?([\-]*[^<\->\->:\n,;]+?)*?(?=((?!\n)\s)+as(?!\n)\s|[#\n;]|$))/i,
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
          /^(?:[^+<\->\->:\n,;]+((?!(-x|--x|-\)|--\)))[\-]*[^\+<\->\->:\n,;]+)*)/i,
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
          /^(?::(?:(?:no)?wrap)?[^#\n;]*)/i,
          /^(?::)/i,
          /^(?:\+)/i,
          /^(?:-)/i,
          /^(?:$)/i,
          /^(?:.)/i,
        ],
        conditions: {
          acc_descr_multiline: {
            rules: [50, 51],
            inclusive: false,
          },
          acc_descr: {
            rules: [48],
            inclusive: false,
          },
          acc_title: {
            rules: [46],
            inclusive: false,
          },
          ID: {
            rules: [2, 3, 7, 10, 11, 17],
            inclusive: false,
          },
          ALIAS: {
            rules: [2, 3, 18, 19],
            inclusive: false,
          },
          LINE: {
            rules: [2, 3, 31],
            inclusive: false,
          },
          CONFIG: {
            rules: [8, 9],
            inclusive: false,
          },
          CONFIG_DATA: {
            rules: [],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 1, 3, 4, 5, 6, 12, 13, 14, 15, 16, 20, 21, 22, 23, 24, 25, 26,
              27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 47, 49, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
              64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function sequenceDiagramWL72ISMWHelper6() {
      this.yy = {};
    }
    return (
      defineFunctionName(sequenceDiagramWL72ISMWHelper6, "Parser"),
      (sequenceDiagramWL72ISMWHelper6.prototype =
        sequenceDiagramWL72ISMWBinding106),
      (sequenceDiagramWL72ISMWBinding106.Parser =
        sequenceDiagramWL72ISMWHelper6),
      new sequenceDiagramWL72ISMWHelper6()
    );
  })();
  sequenceDiagramWL72ISMWBinding2.parser = sequenceDiagramWL72ISMWBinding2;
  sequenceDiagramWL72ISMWBinding3 = sequenceDiagramWL72ISMWBinding2;
  sequenceDiagramWL72ISMWBinding4 = {
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
  };
  sequenceDiagramWL72ISMWBinding5 = {
    FILLED: 0,
    OPEN: 1,
  };
  sequenceDiagramWL72ISMWBinding6 = {
    LEFTOF: 0,
    RIGHTOF: 1,
    OVER: 2,
  };
  sequenceDiagramWL72ISMWBinding7 = {
    ACTOR: "actor",
    BOUNDARY: "boundary",
    COLLECTIONS: "collections",
    CONTROL: "control",
    DATABASE: "database",
    ENTITY: "entity",
    PARTICIPANT: "participant",
    QUEUE: "queue",
  };
  sequenceDiagramWL72ISMWBinding8 = class {
    constructor() {
      this.state = new chunkQZHKN3VNT(() => ({
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
      this.setAccTitle = V;
      this.setAccDescription = B;
      this.setDiagramTitle = W;
      this.getAccTitle = _chunkABZYJK2DV;
      this.getAccDescription = _;
      this.getDiagramTitle = C;
      this.apply = this.apply.bind(this);
      this.parseBoxData = this.parseBoxData.bind(this);
      this.parseMessage = this.parseMessage.bind(this);
      this.clear();
      this.setWrap(_chunkABZYJK2DB().wrap);
      this.LINETYPE = sequenceDiagramWL72ISMWBinding4;
      this.ARROWTYPE = sequenceDiagramWL72ISMWBinding5;
      this.PLACEMENT = sequenceDiagramWL72ISMWBinding6;
    }
    static {
      defineFunctionName(this, "SequenceDB");
    }
    addBox(sequenceDiagramWL72ISMWInput231) {
      this.state.records.boxes.push({
        name: sequenceDiagramWL72ISMWInput231.text,
        wrap: sequenceDiagramWL72ISMWInput231.wrap ?? this.autoWrap(),
        fill: sequenceDiagramWL72ISMWInput231.color,
        actorKeys: [],
      });
      this.state.records.currentBox = this.state.records.boxes.slice(-1)[0];
    }
    addActor(
      sequenceDiagramWL72ISMWInput63,
      sequenceDiagramWL72ISMWInput64,
      sequenceDiagramWL72ISMWInput65,
      sequenceDiagramWL72ISMWInput66,
      sequenceDiagramWL72ISMWInput67,
    ) {
      let sequenceDiagramWL72ISMWBinding261 = this.state.records.currentBox,
        sequenceDiagramWL72ISMWBinding262;
      if (sequenceDiagramWL72ISMWInput67 !== undefined) {
        let sequenceDiagramWL72ISMWBinding459;
        sequenceDiagramWL72ISMWBinding459 =
          sequenceDiagramWL72ISMWInput67.includes("\n")
            ? sequenceDiagramWL72ISMWInput67 + "\n"
            : "{\n" + sequenceDiagramWL72ISMWInput67 + "\n}";
        sequenceDiagramWL72ISMWBinding262 = chunkMI3HLSF2R(
          sequenceDiagramWL72ISMWBinding459,
          {
            schema: chunkMI3HLSF2T,
          },
        );
      }
      sequenceDiagramWL72ISMWInput66 =
        sequenceDiagramWL72ISMWBinding262?.type ??
        sequenceDiagramWL72ISMWInput66;
      let sequenceDiagramWL72ISMWBinding263 = this.state.records.actors.get(
        sequenceDiagramWL72ISMWInput63,
      );
      if (sequenceDiagramWL72ISMWBinding263) {
        if (
          this.state.records.currentBox &&
          sequenceDiagramWL72ISMWBinding263.box &&
          this.state.records.currentBox !==
            sequenceDiagramWL72ISMWBinding263.box
        )
          throw Error(
            `A same participant should only be defined in one Box: ${sequenceDiagramWL72ISMWBinding263.name} can't be in '${sequenceDiagramWL72ISMWBinding263.box.name}' and in '${this.state.records.currentBox.name}' at the same time.`,
          );
        if (
          ((sequenceDiagramWL72ISMWBinding261 =
            sequenceDiagramWL72ISMWBinding263.box
              ? sequenceDiagramWL72ISMWBinding263.box
              : this.state.records.currentBox),
          (sequenceDiagramWL72ISMWBinding263.box =
            sequenceDiagramWL72ISMWBinding261),
          sequenceDiagramWL72ISMWBinding263 &&
            sequenceDiagramWL72ISMWInput64 ===
              sequenceDiagramWL72ISMWBinding263.name &&
            sequenceDiagramWL72ISMWInput65 == null)
        )
          return;
      }
      if (
        (sequenceDiagramWL72ISMWInput65?.text ??
          (sequenceDiagramWL72ISMWInput65 = {
            text: sequenceDiagramWL72ISMWInput64,
            type: sequenceDiagramWL72ISMWInput66,
          }),
        (sequenceDiagramWL72ISMWInput66 == null ||
          sequenceDiagramWL72ISMWInput65.text == null) &&
          (sequenceDiagramWL72ISMWInput65 = {
            text: sequenceDiagramWL72ISMWInput64,
            type: sequenceDiagramWL72ISMWInput66,
          }),
        this.state.records.actors.set(sequenceDiagramWL72ISMWInput63, {
          box: sequenceDiagramWL72ISMWBinding261,
          name: sequenceDiagramWL72ISMWInput64,
          description: sequenceDiagramWL72ISMWInput65.text,
          wrap: sequenceDiagramWL72ISMWInput65.wrap ?? this.autoWrap(),
          prevActor: this.state.records.prevActor,
          links: {},
          properties: {},
          actorCnt: null,
          rectData: null,
          type: sequenceDiagramWL72ISMWInput66 ?? "participant",
        }),
        this.state.records.prevActor)
      ) {
        let sequenceDiagramWL72ISMWBinding482 = this.state.records.actors.get(
          this.state.records.prevActor,
        );
        sequenceDiagramWL72ISMWBinding482 &&
          (sequenceDiagramWL72ISMWBinding482.nextActor =
            sequenceDiagramWL72ISMWInput63);
      }
      this.state.records.currentBox &&
        this.state.records.currentBox.actorKeys.push(
          sequenceDiagramWL72ISMWInput63,
        );
      this.state.records.prevActor = sequenceDiagramWL72ISMWInput63;
    }
    activationCount(sequenceDiagramWL72ISMWInput176) {
      let sequenceDiagramWL72ISMWBinding394,
        sequenceDiagramWL72ISMWBinding395 = 0;
      if (!sequenceDiagramWL72ISMWInput176) return 0;
      for (
        sequenceDiagramWL72ISMWBinding394 = 0;
        sequenceDiagramWL72ISMWBinding394 < this.state.records.messages.length;
        sequenceDiagramWL72ISMWBinding394++
      ) {
        this.state.records.messages[sequenceDiagramWL72ISMWBinding394].type ===
          this.LINETYPE.ACTIVE_START &&
          this.state.records.messages[sequenceDiagramWL72ISMWBinding394]
            .from === sequenceDiagramWL72ISMWInput176 &&
          sequenceDiagramWL72ISMWBinding395++;
        this.state.records.messages[sequenceDiagramWL72ISMWBinding394].type ===
          this.LINETYPE.ACTIVE_END &&
          this.state.records.messages[sequenceDiagramWL72ISMWBinding394]
            .from === sequenceDiagramWL72ISMWInput176 &&
          sequenceDiagramWL72ISMWBinding395--;
      }
      return sequenceDiagramWL72ISMWBinding395;
    }
    addMessage(
      sequenceDiagramWL72ISMWInput234,
      sequenceDiagramWL72ISMWInput235,
      sequenceDiagramWL72ISMWInput236,
      sequenceDiagramWL72ISMWInput237,
    ) {
      this.state.records.messages.push({
        id: this.state.records.messages.length.toString(),
        from: sequenceDiagramWL72ISMWInput234,
        to: sequenceDiagramWL72ISMWInput235,
        message: sequenceDiagramWL72ISMWInput236.text,
        wrap: sequenceDiagramWL72ISMWInput236.wrap ?? this.autoWrap(),
        answer: sequenceDiagramWL72ISMWInput237,
      });
    }
    addSignal(
      sequenceDiagramWL72ISMWInput107,
      sequenceDiagramWL72ISMWInput108,
      sequenceDiagramWL72ISMWInput109,
      sequenceDiagramWL72ISMWInput110,
      sequenceDiagramWL72ISMWInput111 = false,
    ) {
      if (
        sequenceDiagramWL72ISMWInput110 === this.LINETYPE.ACTIVE_END &&
        this.activationCount(sequenceDiagramWL72ISMWInput107 ?? "") < 1
      ) {
        let sequenceDiagramWL72ISMWBinding391 = Error(
          "Trying to inactivate an inactive participant (" +
            sequenceDiagramWL72ISMWInput107 +
            ")",
        );
        throw (
          (sequenceDiagramWL72ISMWBinding391.hash = {
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
          sequenceDiagramWL72ISMWBinding391
        );
      }
      return (
        this.state.records.messages.push({
          id: this.state.records.messages.length.toString(),
          from: sequenceDiagramWL72ISMWInput107,
          to: sequenceDiagramWL72ISMWInput108,
          message: sequenceDiagramWL72ISMWInput109?.text ?? "",
          wrap: sequenceDiagramWL72ISMWInput109?.wrap ?? this.autoWrap(),
          type: sequenceDiagramWL72ISMWInput110,
          activate: sequenceDiagramWL72ISMWInput111,
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
    getActor(sequenceDiagramWL72ISMWInput303) {
      return this.state.records.actors.get(sequenceDiagramWL72ISMWInput303);
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
    setWrap(sequenceDiagramWL72ISMWInput305) {
      this.state.records.wrapEnabled = sequenceDiagramWL72ISMWInput305;
    }
    extractWrap(sequenceDiagramWL72ISMWInput195) {
      if (sequenceDiagramWL72ISMWInput195 === undefined) return {};
      sequenceDiagramWL72ISMWInput195 = sequenceDiagramWL72ISMWInput195.trim();
      let sequenceDiagramWL72ISMWBinding407 =
        /^:?wrap:/.exec(sequenceDiagramWL72ISMWInput195) === null
          ? /^:?nowrap:/.exec(sequenceDiagramWL72ISMWInput195) === null
            ? undefined
            : false
          : true;
      return {
        cleanedText: (sequenceDiagramWL72ISMWBinding407 === undefined
          ? sequenceDiagramWL72ISMWInput195
          : sequenceDiagramWL72ISMWInput195.replace(/^:?(?:no)?wrap:/, "")
        ).trim(),
        wrap: sequenceDiagramWL72ISMWBinding407,
      };
    }
    autoWrap() {
      return this.state.records.wrapEnabled === undefined
        ? (_chunkABZYJK2DB().sequence?.wrap ?? false)
        : this.state.records.wrapEnabled;
    }
    clear() {
      this.state.reset();
      a();
    }
    parseMessage(sequenceDiagramWL72ISMWInput264) {
      let sequenceDiagramWL72ISMWBinding453 =
          sequenceDiagramWL72ISMWInput264.trim(),
        { wrap, cleanedText } = this.extractWrap(
          sequenceDiagramWL72ISMWBinding453,
        ),
        sequenceDiagramWL72ISMWBinding454 = {
          text: cleanedText,
          wrap,
        };
      return (
        logger.debug(
          `parseMessage: ${JSON.stringify(sequenceDiagramWL72ISMWBinding454)}`,
        ),
        sequenceDiagramWL72ISMWBinding454
      );
    }
    parseBoxData(sequenceDiagramWL72ISMWInput168) {
      let sequenceDiagramWL72ISMWBinding375 =
          /^((?:rgba?|hsla?)\s*\(.*\)|\w*)(.*)$/.exec(
            sequenceDiagramWL72ISMWInput168,
          ),
        sequenceDiagramWL72ISMWBinding376 =
          sequenceDiagramWL72ISMWBinding375?.[1]
            ? sequenceDiagramWL72ISMWBinding375[1].trim()
            : "transparent",
        sequenceDiagramWL72ISMWBinding377 =
          sequenceDiagramWL72ISMWBinding375?.[2]
            ? sequenceDiagramWL72ISMWBinding375[2].trim()
            : undefined;
      if (window?.CSS)
        window.CSS.supports("color", sequenceDiagramWL72ISMWBinding376) ||
          ((sequenceDiagramWL72ISMWBinding376 = "transparent"),
          (sequenceDiagramWL72ISMWBinding377 =
            sequenceDiagramWL72ISMWInput168.trim()));
      else {
        let sequenceDiagramWL72ISMWBinding481 = new Option().style;
        sequenceDiagramWL72ISMWBinding481.color =
          sequenceDiagramWL72ISMWBinding376;
        sequenceDiagramWL72ISMWBinding481.color !==
          sequenceDiagramWL72ISMWBinding376 &&
          ((sequenceDiagramWL72ISMWBinding376 = "transparent"),
          (sequenceDiagramWL72ISMWBinding377 =
            sequenceDiagramWL72ISMWInput168.trim()));
      }
      let { wrap, cleanedText } = this.extractWrap(
        sequenceDiagramWL72ISMWBinding377,
      );
      return {
        text: cleanedText ? L(cleanedText, _chunkABZYJK2DB()) : undefined,
        color: sequenceDiagramWL72ISMWBinding376,
        wrap,
      };
    }
    addNote(
      sequenceDiagramWL72ISMWInput173,
      sequenceDiagramWL72ISMWInput174,
      sequenceDiagramWL72ISMWInput175,
    ) {
      let sequenceDiagramWL72ISMWBinding387 = {
          actor: sequenceDiagramWL72ISMWInput173,
          placement: sequenceDiagramWL72ISMWInput174,
          message: sequenceDiagramWL72ISMWInput175.text,
          wrap: sequenceDiagramWL72ISMWInput175.wrap ?? this.autoWrap(),
        },
        sequenceDiagramWL72ISMWBinding388 = [].concat(
          sequenceDiagramWL72ISMWInput173,
          sequenceDiagramWL72ISMWInput173,
        );
      this.state.records.notes.push(sequenceDiagramWL72ISMWBinding387);
      this.state.records.messages.push({
        id: this.state.records.messages.length.toString(),
        from: sequenceDiagramWL72ISMWBinding388[0],
        to: sequenceDiagramWL72ISMWBinding388[1],
        message: sequenceDiagramWL72ISMWInput175.text,
        wrap: sequenceDiagramWL72ISMWInput175.wrap ?? this.autoWrap(),
        type: this.LINETYPE.NOTE,
        placement: sequenceDiagramWL72ISMWInput174,
      });
    }
    addLinks(sequenceDiagramWL72ISMWInput216, sequenceDiagramWL72ISMWInput217) {
      let sequenceDiagramWL72ISMWBinding417 = this.getActor(
        sequenceDiagramWL72ISMWInput216,
      );
      try {
        let sequenceDiagramWL72ISMWBinding462 = L(
          sequenceDiagramWL72ISMWInput217.text,
          _chunkABZYJK2DB(),
        );
        sequenceDiagramWL72ISMWBinding462 =
          sequenceDiagramWL72ISMWBinding462.replace(/&equals;/g, "=");
        sequenceDiagramWL72ISMWBinding462 =
          sequenceDiagramWL72ISMWBinding462.replace(/&amp;/g, "&");
        let sequenceDiagramWL72ISMWBinding463 = JSON.parse(
          sequenceDiagramWL72ISMWBinding462,
        );
        this.insertLinks(
          sequenceDiagramWL72ISMWBinding417,
          sequenceDiagramWL72ISMWBinding463,
        );
      } catch (sequenceDiagramWL72ISMWBinding492) {
        logger.error(
          "error while parsing actor link text",
          sequenceDiagramWL72ISMWBinding492,
        );
      }
    }
    addALink(sequenceDiagramWL72ISMWInput187, sequenceDiagramWL72ISMWInput188) {
      let sequenceDiagramWL72ISMWBinding397 = this.getActor(
        sequenceDiagramWL72ISMWInput187,
      );
      try {
        let sequenceDiagramWL72ISMWBinding435 = {},
          sequenceDiagramWL72ISMWBinding436 = L(
            sequenceDiagramWL72ISMWInput188.text,
            _chunkABZYJK2DB(),
          ),
          sequenceDiagramWL72ISMWBinding437 =
            sequenceDiagramWL72ISMWBinding436.indexOf("@");
        sequenceDiagramWL72ISMWBinding436 =
          sequenceDiagramWL72ISMWBinding436.replace(/&equals;/g, "=");
        sequenceDiagramWL72ISMWBinding436 =
          sequenceDiagramWL72ISMWBinding436.replace(/&amp;/g, "&");
        let sequenceDiagramWL72ISMWBinding438 =
          sequenceDiagramWL72ISMWBinding436
            .slice(0, sequenceDiagramWL72ISMWBinding437 - 1)
            .trim();
        sequenceDiagramWL72ISMWBinding435[sequenceDiagramWL72ISMWBinding438] =
          sequenceDiagramWL72ISMWBinding436
            .slice(sequenceDiagramWL72ISMWBinding437 + 1)
            .trim();
        this.insertLinks(
          sequenceDiagramWL72ISMWBinding397,
          sequenceDiagramWL72ISMWBinding435,
        );
      } catch (sequenceDiagramWL72ISMWBinding493) {
        logger.error(
          "error while parsing actor link text",
          sequenceDiagramWL72ISMWBinding493,
        );
      }
    }
    insertLinks(
      sequenceDiagramWL72ISMWInput284,
      sequenceDiagramWL72ISMWInput285,
    ) {
      if (sequenceDiagramWL72ISMWInput284.links == null)
        sequenceDiagramWL72ISMWInput284.links = sequenceDiagramWL72ISMWInput285;
      else
        for (let sequenceDiagramWL72ISMWBinding503 in sequenceDiagramWL72ISMWInput285)
          sequenceDiagramWL72ISMWInput284.links[
            sequenceDiagramWL72ISMWBinding503
          ] =
            sequenceDiagramWL72ISMWInput285[sequenceDiagramWL72ISMWBinding503];
    }
    addProperties(
      sequenceDiagramWL72ISMWInput232,
      sequenceDiagramWL72ISMWInput233,
    ) {
      let sequenceDiagramWL72ISMWBinding441 = this.getActor(
        sequenceDiagramWL72ISMWInput232,
      );
      try {
        let sequenceDiagramWL72ISMWBinding484 = L(
            sequenceDiagramWL72ISMWInput233.text,
            _chunkABZYJK2DB(),
          ),
          sequenceDiagramWL72ISMWBinding485 = JSON.parse(
            sequenceDiagramWL72ISMWBinding484,
          );
        this.insertProperties(
          sequenceDiagramWL72ISMWBinding441,
          sequenceDiagramWL72ISMWBinding485,
        );
      } catch (sequenceDiagramWL72ISMWBinding490) {
        logger.error(
          "error while parsing actor properties text",
          sequenceDiagramWL72ISMWBinding490,
        );
      }
    }
    insertProperties(
      sequenceDiagramWL72ISMWInput276,
      sequenceDiagramWL72ISMWInput277,
    ) {
      if (sequenceDiagramWL72ISMWInput276.properties == null)
        sequenceDiagramWL72ISMWInput276.properties =
          sequenceDiagramWL72ISMWInput277;
      else
        for (let sequenceDiagramWL72ISMWBinding502 in sequenceDiagramWL72ISMWInput277)
          sequenceDiagramWL72ISMWInput276.properties[
            sequenceDiagramWL72ISMWBinding502
          ] =
            sequenceDiagramWL72ISMWInput277[sequenceDiagramWL72ISMWBinding502];
    }
    boxEnd() {
      this.state.records.currentBox = undefined;
    }
    addDetails(
      sequenceDiagramWL72ISMWInput199,
      sequenceDiagramWL72ISMWInput200,
    ) {
      let sequenceDiagramWL72ISMWBinding411 = this.getActor(
          sequenceDiagramWL72ISMWInput199,
        ),
        sequenceDiagramWL72ISMWBinding412 = document.getElementById(
          sequenceDiagramWL72ISMWInput200.text,
        );
      try {
        let sequenceDiagramWL72ISMWBinding460 =
            sequenceDiagramWL72ISMWBinding412.innerHTML,
          sequenceDiagramWL72ISMWBinding461 = JSON.parse(
            sequenceDiagramWL72ISMWBinding460,
          );
        sequenceDiagramWL72ISMWBinding461.properties &&
          this.insertProperties(
            sequenceDiagramWL72ISMWBinding411,
            sequenceDiagramWL72ISMWBinding461.properties,
          );
        sequenceDiagramWL72ISMWBinding461.links &&
          this.insertLinks(
            sequenceDiagramWL72ISMWBinding411,
            sequenceDiagramWL72ISMWBinding461.links,
          );
      } catch (sequenceDiagramWL72ISMWBinding491) {
        logger.error(
          "error while parsing actor details text",
          sequenceDiagramWL72ISMWBinding491,
        );
      }
    }
    getActorProperty(
      sequenceDiagramWL72ISMWInput292,
      sequenceDiagramWL72ISMWInput293,
    ) {
      if (sequenceDiagramWL72ISMWInput292?.properties !== undefined)
        return sequenceDiagramWL72ISMWInput292.properties[
          sequenceDiagramWL72ISMWInput293
        ];
    }
    apply(sequenceDiagramWL72ISMWInput13) {
      if (Array.isArray(sequenceDiagramWL72ISMWInput13))
        sequenceDiagramWL72ISMWInput13.forEach((item) => {
          this.apply(item);
        });
      else
        switch (sequenceDiagramWL72ISMWInput13.type) {
          case "sequenceIndex":
            this.state.records.messages.push({
              id: this.state.records.messages.length.toString(),
              from: undefined,
              to: undefined,
              message: {
                start: sequenceDiagramWL72ISMWInput13.sequenceIndex,
                step: sequenceDiagramWL72ISMWInput13.sequenceIndexStep,
                visible: sequenceDiagramWL72ISMWInput13.sequenceVisible,
              },
              wrap: false,
              type: sequenceDiagramWL72ISMWInput13.signalType,
            });
            break;
          case "addParticipant":
            this.addActor(
              sequenceDiagramWL72ISMWInput13.actor,
              sequenceDiagramWL72ISMWInput13.actor,
              sequenceDiagramWL72ISMWInput13.description,
              sequenceDiagramWL72ISMWInput13.draw,
              sequenceDiagramWL72ISMWInput13.config,
            );
            break;
          case "createParticipant":
            if (
              this.state.records.actors.has(
                sequenceDiagramWL72ISMWInput13.actor,
              )
            )
              throw Error(
                "It is not possible to have actors with the same id, even if one is destroyed before the next is created. Use 'AS' aliases to simulate the behavior",
              );
            this.state.records.lastCreated =
              sequenceDiagramWL72ISMWInput13.actor;
            this.addActor(
              sequenceDiagramWL72ISMWInput13.actor,
              sequenceDiagramWL72ISMWInput13.actor,
              sequenceDiagramWL72ISMWInput13.description,
              sequenceDiagramWL72ISMWInput13.draw,
              sequenceDiagramWL72ISMWInput13.config,
            );
            this.state.records.createdActors.set(
              sequenceDiagramWL72ISMWInput13.actor,
              this.state.records.messages.length,
            );
            break;
          case "destroyParticipant":
            this.state.records.lastDestroyed =
              sequenceDiagramWL72ISMWInput13.actor;
            this.state.records.destroyedActors.set(
              sequenceDiagramWL72ISMWInput13.actor,
              this.state.records.messages.length,
            );
            break;
          case "activeStart":
            this.addSignal(
              sequenceDiagramWL72ISMWInput13.actor,
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "activeEnd":
            this.addSignal(
              sequenceDiagramWL72ISMWInput13.actor,
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "addNote":
            this.addNote(
              sequenceDiagramWL72ISMWInput13.actor,
              sequenceDiagramWL72ISMWInput13.placement,
              sequenceDiagramWL72ISMWInput13.text,
            );
            break;
          case "addLinks":
            this.addLinks(
              sequenceDiagramWL72ISMWInput13.actor,
              sequenceDiagramWL72ISMWInput13.text,
            );
            break;
          case "addALink":
            this.addALink(
              sequenceDiagramWL72ISMWInput13.actor,
              sequenceDiagramWL72ISMWInput13.text,
            );
            break;
          case "addProperties":
            this.addProperties(
              sequenceDiagramWL72ISMWInput13.actor,
              sequenceDiagramWL72ISMWInput13.text,
            );
            break;
          case "addDetails":
            this.addDetails(
              sequenceDiagramWL72ISMWInput13.actor,
              sequenceDiagramWL72ISMWInput13.text,
            );
            break;
          case "addMessage":
            if (this.state.records.lastCreated) {
              if (
                sequenceDiagramWL72ISMWInput13.to !==
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
                sequenceDiagramWL72ISMWInput13.to !==
                  this.state.records.lastDestroyed &&
                sequenceDiagramWL72ISMWInput13.from !==
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
              sequenceDiagramWL72ISMWInput13.from,
              sequenceDiagramWL72ISMWInput13.to,
              sequenceDiagramWL72ISMWInput13.msg,
              sequenceDiagramWL72ISMWInput13.signalType,
              sequenceDiagramWL72ISMWInput13.activate,
            );
            break;
          case "boxStart":
            this.addBox(sequenceDiagramWL72ISMWInput13.boxData);
            break;
          case "boxEnd":
            this.boxEnd();
            break;
          case "loopStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.loopText,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "loopEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "rectStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.color,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "rectEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "optStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.optText,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "optEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "altStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.altText,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "else":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.altText,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "altEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "setAccTitle":
            V(sequenceDiagramWL72ISMWInput13.text);
            break;
          case "parStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.parText,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "and":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.parText,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "parEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "criticalStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.criticalText,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "option":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.optionText,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "criticalEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "breakStart":
            this.addSignal(
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.breakText,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
          case "breakEnd":
            this.addSignal(
              undefined,
              undefined,
              undefined,
              sequenceDiagramWL72ISMWInput13.signalType,
            );
            break;
        }
    }
    getConfig() {
      return _chunkABZYJK2DB().sequence;
    }
  };
  sequenceDiagramWL72ISMWBinding9 = defineFunctionName(
    (sequenceDiagramWL72ISMWInput46) => `.actor {
    stroke: ${sequenceDiagramWL72ISMWInput46.actorBorder};
    fill: ${sequenceDiagramWL72ISMWInput46.actorBkg};
  }

  text.actor > tspan {
    fill: ${sequenceDiagramWL72ISMWInput46.actorTextColor};
    stroke: none;
  }

  .actor-line {
    stroke: ${sequenceDiagramWL72ISMWInput46.actorLineColor};
  }
  
  .innerArc {
    stroke-width: 1.5;
    stroke-dasharray: none;
  }

  .messageLine0 {
    stroke-width: 1.5;
    stroke-dasharray: none;
    stroke: ${sequenceDiagramWL72ISMWInput46.signalColor};
  }

  .messageLine1 {
    stroke-width: 1.5;
    stroke-dasharray: 2, 2;
    stroke: ${sequenceDiagramWL72ISMWInput46.signalColor};
  }

  #arrowhead path {
    fill: ${sequenceDiagramWL72ISMWInput46.signalColor};
    stroke: ${sequenceDiagramWL72ISMWInput46.signalColor};
  }

  .sequenceNumber {
    fill: ${sequenceDiagramWL72ISMWInput46.sequenceNumberColor};
  }

  #sequencenumber {
    fill: ${sequenceDiagramWL72ISMWInput46.signalColor};
  }

  #crosshead path {
    fill: ${sequenceDiagramWL72ISMWInput46.signalColor};
    stroke: ${sequenceDiagramWL72ISMWInput46.signalColor};
  }

  .messageText {
    fill: ${sequenceDiagramWL72ISMWInput46.signalTextColor};
    stroke: none;
  }

  .labelBox {
    stroke: ${sequenceDiagramWL72ISMWInput46.labelBoxBorderColor};
    fill: ${sequenceDiagramWL72ISMWInput46.labelBoxBkgColor};
  }

  .labelText, .labelText > tspan {
    fill: ${sequenceDiagramWL72ISMWInput46.labelTextColor};
    stroke: none;
  }

  .loopText, .loopText > tspan {
    fill: ${sequenceDiagramWL72ISMWInput46.loopTextColor};
    stroke: none;
  }

  .loopLine {
    stroke-width: 2px;
    stroke-dasharray: 2, 2;
    stroke: ${sequenceDiagramWL72ISMWInput46.labelBoxBorderColor};
    fill: ${sequenceDiagramWL72ISMWInput46.labelBoxBorderColor};
  }

  .note {
    //stroke: #decc93;
    stroke: ${sequenceDiagramWL72ISMWInput46.noteBorderColor};
    fill: ${sequenceDiagramWL72ISMWInput46.noteBkgColor};
  }

  .noteText, .noteText > tspan {
    fill: ${sequenceDiagramWL72ISMWInput46.noteTextColor};
    stroke: none;
  }

  .activation0 {
    fill: ${sequenceDiagramWL72ISMWInput46.activationBkgColor};
    stroke: ${sequenceDiagramWL72ISMWInput46.activationBorderColor};
  }

  .activation1 {
    fill: ${sequenceDiagramWL72ISMWInput46.activationBkgColor};
    stroke: ${sequenceDiagramWL72ISMWInput46.activationBorderColor};
  }

  .activation2 {
    fill: ${sequenceDiagramWL72ISMWInput46.activationBkgColor};
    stroke: ${sequenceDiagramWL72ISMWInput46.activationBorderColor};
  }

  .actorPopupMenu {
    position: absolute;
  }

  .actorPopupMenuPanel {
    position: absolute;
    fill: ${sequenceDiagramWL72ISMWInput46.actorBkg};
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
  .actor-man line {
    stroke: ${sequenceDiagramWL72ISMWInput46.actorBorder};
    fill: ${sequenceDiagramWL72ISMWInput46.actorBkg};
  }
  .actor-man circle, line {
    stroke: ${sequenceDiagramWL72ISMWInput46.actorBorder};
    fill: ${sequenceDiagramWL72ISMWInput46.actorBkg};
    stroke-width: 2px;
  }

`,
    "getStyles",
  );
  sequenceDiagramWL72ISMWBinding10 = 36;
  sequenceDiagramWL72ISMWBinding11 = "actor-top";
  sequenceDiagramWL72ISMWBinding12 = "actor-bottom";
  sequenceDiagramWL72ISMWBinding13 = "actor-box";
  sequenceDiagramWL72ISMWBinding14 = "actor-man";
  sequenceDiagramWL72ISMWBinding15 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput314,
    sequenceDiagramWL72ISMWInput315,
  ) {
    return chunkTZMSLE5BI(
      sequenceDiagramWL72ISMWInput314,
      sequenceDiagramWL72ISMWInput315,
    );
  }, "drawRect");
  sequenceDiagramWL72ISMWBinding16 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput92,
    sequenceDiagramWL72ISMWInput93,
    sequenceDiagramWL72ISMWInput94,
    sequenceDiagramWL72ISMWInput95,
    sequenceDiagramWL72ISMWInput96,
  ) {
    if (
      sequenceDiagramWL72ISMWInput93.links === undefined ||
      sequenceDiagramWL72ISMWInput93.links === null ||
      Object.keys(sequenceDiagramWL72ISMWInput93.links).length === 0
    )
      return {
        height: 0,
        width: 0,
      };
    let sequenceDiagramWL72ISMWBinding306 =
        sequenceDiagramWL72ISMWInput93.links,
      sequenceDiagramWL72ISMWBinding307 =
        sequenceDiagramWL72ISMWInput93.actorCnt,
      sequenceDiagramWL72ISMWBinding308 =
        sequenceDiagramWL72ISMWInput93.rectData;
    var sequenceDiagramWL72ISMWBinding309 = "none";
    sequenceDiagramWL72ISMWInput96 &&
      (sequenceDiagramWL72ISMWBinding309 = "block !important");
    let sequenceDiagramWL72ISMWBinding310 =
      sequenceDiagramWL72ISMWInput92.append("g");
    sequenceDiagramWL72ISMWBinding310.attr(
      "id",
      "actor" + sequenceDiagramWL72ISMWBinding307 + "_popup",
    );
    sequenceDiagramWL72ISMWBinding310.attr("class", "actorPopupMenu");
    sequenceDiagramWL72ISMWBinding310.attr(
      "display",
      sequenceDiagramWL72ISMWBinding309,
    );
    var sequenceDiagramWL72ISMWBinding311 = "";
    sequenceDiagramWL72ISMWBinding308.class !== undefined &&
      (sequenceDiagramWL72ISMWBinding311 =
        " " + sequenceDiagramWL72ISMWBinding308.class);
    let sequenceDiagramWL72ISMWBinding312 =
        sequenceDiagramWL72ISMWBinding308.width > sequenceDiagramWL72ISMWInput94
          ? sequenceDiagramWL72ISMWBinding308.width
          : sequenceDiagramWL72ISMWInput94,
      sequenceDiagramWL72ISMWBinding313 =
        sequenceDiagramWL72ISMWBinding310.append("rect");
    if (
      (sequenceDiagramWL72ISMWBinding313.attr(
        "class",
        "actorPopupMenuPanel" + sequenceDiagramWL72ISMWBinding311,
      ),
      sequenceDiagramWL72ISMWBinding313.attr(
        "x",
        sequenceDiagramWL72ISMWBinding308.x,
      ),
      sequenceDiagramWL72ISMWBinding313.attr(
        "y",
        sequenceDiagramWL72ISMWBinding308.height,
      ),
      sequenceDiagramWL72ISMWBinding313.attr(
        "fill",
        sequenceDiagramWL72ISMWBinding308.fill,
      ),
      sequenceDiagramWL72ISMWBinding313.attr(
        "stroke",
        sequenceDiagramWL72ISMWBinding308.stroke,
      ),
      sequenceDiagramWL72ISMWBinding313.attr(
        "width",
        sequenceDiagramWL72ISMWBinding312,
      ),
      sequenceDiagramWL72ISMWBinding313.attr(
        "height",
        sequenceDiagramWL72ISMWBinding308.height,
      ),
      sequenceDiagramWL72ISMWBinding313.attr(
        "rx",
        sequenceDiagramWL72ISMWBinding308.rx,
      ),
      sequenceDiagramWL72ISMWBinding313.attr(
        "ry",
        sequenceDiagramWL72ISMWBinding308.ry,
      ),
      sequenceDiagramWL72ISMWBinding306 != null)
    ) {
      var sequenceDiagramWL72ISMWBinding314 = 20;
      for (let sequenceDiagramWL72ISMWBinding440 in sequenceDiagramWL72ISMWBinding306) {
        var sequenceDiagramWL72ISMWBinding315 =
            sequenceDiagramWL72ISMWBinding310.append("a"),
          sequenceDiagramWL72ISMWBinding316 =
            sequenceDiagramWL72ISMWBinding1.sanitizeUrl(
              sequenceDiagramWL72ISMWBinding306[
                sequenceDiagramWL72ISMWBinding440
              ],
            );
        sequenceDiagramWL72ISMWBinding315.attr(
          "xlink:href",
          sequenceDiagramWL72ISMWBinding316,
        );
        sequenceDiagramWL72ISMWBinding315.attr("target", "_blank");
        sequenceDiagramWL72ISMWBinding45(sequenceDiagramWL72ISMWInput95)(
          sequenceDiagramWL72ISMWBinding440,
          sequenceDiagramWL72ISMWBinding315,
          sequenceDiagramWL72ISMWBinding308.x + 10,
          sequenceDiagramWL72ISMWBinding308.height +
            sequenceDiagramWL72ISMWBinding314,
          sequenceDiagramWL72ISMWBinding312,
          20,
          {
            class: "actor",
          },
          sequenceDiagramWL72ISMWInput95,
        );
        sequenceDiagramWL72ISMWBinding314 += 30;
      }
    }
    return (
      sequenceDiagramWL72ISMWBinding313.attr(
        "height",
        sequenceDiagramWL72ISMWBinding314,
      ),
      {
        height:
          sequenceDiagramWL72ISMWBinding308.height +
          sequenceDiagramWL72ISMWBinding314,
        width: sequenceDiagramWL72ISMWBinding312,
      }
    );
  }, "drawPopup");
  sequenceDiagramWL72ISMWBinding17 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput268,
  ) {
    return (
      "var pu = document.getElementById('" +
      sequenceDiagramWL72ISMWInput268 +
      "'); if (pu != null) { pu.style.display = pu.style.display == 'block' ? 'none' : 'block'; }"
    );
  }, "popupMenuToggle");
  _e = defineFunctionName(async function (
    sequenceDiagramWL72ISMWInput100,
    sequenceDiagramWL72ISMWInput101,
    sequenceDiagramWL72ISMWInput102 = null,
  ) {
    let sequenceDiagramWL72ISMWBinding337 =
        sequenceDiagramWL72ISMWInput100.append("foreignObject"),
      sequenceDiagramWL72ISMWBinding338 = await P(
        sequenceDiagramWL72ISMWInput101.text,
        y(),
      ),
      sequenceDiagramWL72ISMWBinding339 = sequenceDiagramWL72ISMWBinding337
        .append("xhtml:div")
        .attr("style", "width: fit-content;")
        .attr("xmlns", "http://www.w3.org/1999/xhtml")
        .html(sequenceDiagramWL72ISMWBinding338)
        .node()
        .getBoundingClientRect();
    if (
      (sequenceDiagramWL72ISMWBinding337
        .attr("height", Math.round(sequenceDiagramWL72ISMWBinding339.height))
        .attr("width", Math.round(sequenceDiagramWL72ISMWBinding339.width)),
      sequenceDiagramWL72ISMWInput101.class === "noteText")
    ) {
      let sequenceDiagramWL72ISMWBinding433 =
        sequenceDiagramWL72ISMWInput100.node().firstChild;
      sequenceDiagramWL72ISMWBinding433.setAttribute(
        "height",
        sequenceDiagramWL72ISMWBinding339.height +
          2 * sequenceDiagramWL72ISMWInput101.textMargin,
      );
      let sequenceDiagramWL72ISMWBinding434 =
        sequenceDiagramWL72ISMWBinding433.getBBox();
      sequenceDiagramWL72ISMWBinding337
        .attr(
          "x",
          Math.round(
            sequenceDiagramWL72ISMWBinding434.x +
              sequenceDiagramWL72ISMWBinding434.width / 2 -
              sequenceDiagramWL72ISMWBinding339.width / 2,
          ),
        )
        .attr(
          "y",
          Math.round(
            sequenceDiagramWL72ISMWBinding434.y +
              sequenceDiagramWL72ISMWBinding434.height / 2 -
              sequenceDiagramWL72ISMWBinding339.height / 2,
          ),
        );
    } else if (sequenceDiagramWL72ISMWInput102) {
      let { startx, stopx, starty } = sequenceDiagramWL72ISMWInput102;
      if (startx > stopx) {
        let sequenceDiagramWL72ISMWBinding497 = startx;
        startx = stopx;
        stopx = sequenceDiagramWL72ISMWBinding497;
      }
      sequenceDiagramWL72ISMWBinding337.attr(
        "x",
        Math.round(
          startx +
            Math.abs(startx - stopx) / 2 -
            sequenceDiagramWL72ISMWBinding339.width / 2,
        ),
      );
      sequenceDiagramWL72ISMWInput101.class === "loopText"
        ? sequenceDiagramWL72ISMWBinding337.attr("y", Math.round(starty))
        : sequenceDiagramWL72ISMWBinding337.attr(
            "y",
            Math.round(starty - sequenceDiagramWL72ISMWBinding339.height),
          );
    }
    return [sequenceDiagramWL72ISMWBinding337];
  }, "drawKatex");
  sequenceDiagramWL72ISMWBinding18 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput27,
    sequenceDiagramWL72ISMWInput28,
  ) {
    let sequenceDiagramWL72ISMWBinding178 = 0,
      sequenceDiagramWL72ISMWBinding179 = 0,
      sequenceDiagramWL72ISMWBinding180 =
        sequenceDiagramWL72ISMWInput28.text.split(s.lineBreakRegex),
      [sequenceDiagramWL72ISMWBinding181, sequenceDiagramWL72ISMWBinding182] =
        chunkS3R3BYOJP(sequenceDiagramWL72ISMWInput28.fontSize),
      sequenceDiagramWL72ISMWBinding183 = [],
      sequenceDiagramWL72ISMWBinding184 = 0,
      sequenceDiagramWL72ISMWBinding185 = defineFunctionName(
        () => sequenceDiagramWL72ISMWInput28.y,
        "yfunc",
      );
    if (
      sequenceDiagramWL72ISMWInput28.valign !== undefined &&
      sequenceDiagramWL72ISMWInput28.textMargin !== undefined &&
      sequenceDiagramWL72ISMWInput28.textMargin > 0
    )
      switch (sequenceDiagramWL72ISMWInput28.valign) {
        case "top":
        case "start":
          sequenceDiagramWL72ISMWBinding185 = defineFunctionName(
            () =>
              Math.round(
                sequenceDiagramWL72ISMWInput28.y +
                  sequenceDiagramWL72ISMWInput28.textMargin,
              ),
            "yfunc",
          );
          break;
        case "middle":
        case "center":
          sequenceDiagramWL72ISMWBinding185 = defineFunctionName(
            () =>
              Math.round(
                sequenceDiagramWL72ISMWInput28.y +
                  (sequenceDiagramWL72ISMWBinding178 +
                    sequenceDiagramWL72ISMWBinding179 +
                    sequenceDiagramWL72ISMWInput28.textMargin) /
                    2,
              ),
            "yfunc",
          );
          break;
        case "bottom":
        case "end":
          sequenceDiagramWL72ISMWBinding185 = defineFunctionName(
            () =>
              Math.round(
                sequenceDiagramWL72ISMWInput28.y +
                  (sequenceDiagramWL72ISMWBinding178 +
                    sequenceDiagramWL72ISMWBinding179 +
                    2 * sequenceDiagramWL72ISMWInput28.textMargin) -
                  sequenceDiagramWL72ISMWInput28.textMargin,
              ),
            "yfunc",
          );
          break;
      }
    if (
      sequenceDiagramWL72ISMWInput28.anchor !== undefined &&
      sequenceDiagramWL72ISMWInput28.textMargin !== undefined &&
      sequenceDiagramWL72ISMWInput28.width !== undefined
    )
      switch (sequenceDiagramWL72ISMWInput28.anchor) {
        case "left":
        case "start":
          sequenceDiagramWL72ISMWInput28.x = Math.round(
            sequenceDiagramWL72ISMWInput28.x +
              sequenceDiagramWL72ISMWInput28.textMargin,
          );
          sequenceDiagramWL72ISMWInput28.anchor = "start";
          sequenceDiagramWL72ISMWInput28.dominantBaseline = "middle";
          sequenceDiagramWL72ISMWInput28.alignmentBaseline = "middle";
          break;
        case "middle":
        case "center":
          sequenceDiagramWL72ISMWInput28.x = Math.round(
            sequenceDiagramWL72ISMWInput28.x +
              sequenceDiagramWL72ISMWInput28.width / 2,
          );
          sequenceDiagramWL72ISMWInput28.anchor = "middle";
          sequenceDiagramWL72ISMWInput28.dominantBaseline = "middle";
          sequenceDiagramWL72ISMWInput28.alignmentBaseline = "middle";
          break;
        case "right":
        case "end":
          sequenceDiagramWL72ISMWInput28.x = Math.round(
            sequenceDiagramWL72ISMWInput28.x +
              sequenceDiagramWL72ISMWInput28.width -
              sequenceDiagramWL72ISMWInput28.textMargin,
          );
          sequenceDiagramWL72ISMWInput28.anchor = "end";
          sequenceDiagramWL72ISMWInput28.dominantBaseline = "middle";
          sequenceDiagramWL72ISMWInput28.alignmentBaseline = "middle";
          break;
      }
    for (let [
      sequenceDiagramWL72ISMWBinding323,
      sequenceDiagramWL72ISMWBinding324,
    ] of sequenceDiagramWL72ISMWBinding180.entries()) {
      sequenceDiagramWL72ISMWInput28.textMargin !== undefined &&
        sequenceDiagramWL72ISMWInput28.textMargin === 0 &&
        sequenceDiagramWL72ISMWBinding181 !== undefined &&
        (sequenceDiagramWL72ISMWBinding184 =
          sequenceDiagramWL72ISMWBinding323 *
          sequenceDiagramWL72ISMWBinding181);
      let sequenceDiagramWL72ISMWBinding331 =
        sequenceDiagramWL72ISMWInput27.append("text");
      sequenceDiagramWL72ISMWBinding331.attr(
        "x",
        sequenceDiagramWL72ISMWInput28.x,
      );
      sequenceDiagramWL72ISMWBinding331.attr(
        "y",
        sequenceDiagramWL72ISMWBinding185(),
      );
      sequenceDiagramWL72ISMWInput28.anchor !== undefined &&
        sequenceDiagramWL72ISMWBinding331
          .attr("text-anchor", sequenceDiagramWL72ISMWInput28.anchor)
          .attr(
            "dominant-baseline",
            sequenceDiagramWL72ISMWInput28.dominantBaseline,
          )
          .attr(
            "alignment-baseline",
            sequenceDiagramWL72ISMWInput28.alignmentBaseline,
          );
      sequenceDiagramWL72ISMWInput28.fontFamily !== undefined &&
        sequenceDiagramWL72ISMWBinding331.style(
          "font-family",
          sequenceDiagramWL72ISMWInput28.fontFamily,
        );
      sequenceDiagramWL72ISMWBinding182 !== undefined &&
        sequenceDiagramWL72ISMWBinding331.style(
          "font-size",
          sequenceDiagramWL72ISMWBinding182,
        );
      sequenceDiagramWL72ISMWInput28.fontWeight !== undefined &&
        sequenceDiagramWL72ISMWBinding331.style(
          "font-weight",
          sequenceDiagramWL72ISMWInput28.fontWeight,
        );
      sequenceDiagramWL72ISMWInput28.fill !== undefined &&
        sequenceDiagramWL72ISMWBinding331.attr(
          "fill",
          sequenceDiagramWL72ISMWInput28.fill,
        );
      sequenceDiagramWL72ISMWInput28.class !== undefined &&
        sequenceDiagramWL72ISMWBinding331.attr(
          "class",
          sequenceDiagramWL72ISMWInput28.class,
        );
      sequenceDiagramWL72ISMWInput28.dy === undefined
        ? sequenceDiagramWL72ISMWBinding184 !== 0 &&
          sequenceDiagramWL72ISMWBinding331.attr(
            "dy",
            sequenceDiagramWL72ISMWBinding184,
          )
        : sequenceDiagramWL72ISMWBinding331.attr(
            "dy",
            sequenceDiagramWL72ISMWInput28.dy,
          );
      let sequenceDiagramWL72ISMWBinding332 =
        sequenceDiagramWL72ISMWBinding324 || "​";
      if (sequenceDiagramWL72ISMWInput28.tspan) {
        let sequenceDiagramWL72ISMWBinding478 =
          sequenceDiagramWL72ISMWBinding331.append("tspan");
        sequenceDiagramWL72ISMWBinding478.attr(
          "x",
          sequenceDiagramWL72ISMWInput28.x,
        );
        sequenceDiagramWL72ISMWInput28.fill !== undefined &&
          sequenceDiagramWL72ISMWBinding478.attr(
            "fill",
            sequenceDiagramWL72ISMWInput28.fill,
          );
        sequenceDiagramWL72ISMWBinding478.text(
          sequenceDiagramWL72ISMWBinding332,
        );
      } else
        sequenceDiagramWL72ISMWBinding331.text(
          sequenceDiagramWL72ISMWBinding332,
        );
      sequenceDiagramWL72ISMWInput28.valign !== undefined &&
        sequenceDiagramWL72ISMWInput28.textMargin !== undefined &&
        sequenceDiagramWL72ISMWInput28.textMargin > 0 &&
        ((sequenceDiagramWL72ISMWBinding179 +=
          (sequenceDiagramWL72ISMWBinding331._groups ||
            sequenceDiagramWL72ISMWBinding331)[0][0].getBBox().height),
        (sequenceDiagramWL72ISMWBinding178 =
          sequenceDiagramWL72ISMWBinding179));
      sequenceDiagramWL72ISMWBinding183.push(sequenceDiagramWL72ISMWBinding331);
    }
    return sequenceDiagramWL72ISMWBinding183;
  }, "drawText");
  sequenceDiagramWL72ISMWBinding19 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput139,
    sequenceDiagramWL72ISMWInput140,
  ) {
    function sequenceDiagramWL72ISMWHelper22(
      sequenceDiagramWL72ISMWInput201,
      sequenceDiagramWL72ISMWInput202,
      sequenceDiagramWL72ISMWInput203,
      sequenceDiagramWL72ISMWInput204,
      sequenceDiagramWL72ISMWInput205,
    ) {
      return (
        sequenceDiagramWL72ISMWInput201 +
        "," +
        sequenceDiagramWL72ISMWInput202 +
        " " +
        (sequenceDiagramWL72ISMWInput201 + sequenceDiagramWL72ISMWInput203) +
        "," +
        sequenceDiagramWL72ISMWInput202 +
        " " +
        (sequenceDiagramWL72ISMWInput201 + sequenceDiagramWL72ISMWInput203) +
        "," +
        (sequenceDiagramWL72ISMWInput202 +
          sequenceDiagramWL72ISMWInput204 -
          sequenceDiagramWL72ISMWInput205) +
        " " +
        (sequenceDiagramWL72ISMWInput201 +
          sequenceDiagramWL72ISMWInput203 -
          sequenceDiagramWL72ISMWInput205 * 1.2) +
        "," +
        (sequenceDiagramWL72ISMWInput202 + sequenceDiagramWL72ISMWInput204) +
        " " +
        sequenceDiagramWL72ISMWInput201 +
        "," +
        (sequenceDiagramWL72ISMWInput202 + sequenceDiagramWL72ISMWInput204)
      );
    }
    defineFunctionName(sequenceDiagramWL72ISMWHelper22, "genPoints");
    let sequenceDiagramWL72ISMWBinding364 =
      sequenceDiagramWL72ISMWInput139.append("polygon");
    return (
      sequenceDiagramWL72ISMWBinding364.attr(
        "points",
        sequenceDiagramWL72ISMWHelper22(
          sequenceDiagramWL72ISMWInput140.x,
          sequenceDiagramWL72ISMWInput140.y,
          sequenceDiagramWL72ISMWInput140.width,
          sequenceDiagramWL72ISMWInput140.height,
          7,
        ),
      ),
      sequenceDiagramWL72ISMWBinding364.attr("class", "labelBox"),
      (sequenceDiagramWL72ISMWInput140.y +=
        sequenceDiagramWL72ISMWInput140.height / 2),
      sequenceDiagramWL72ISMWBinding18(
        sequenceDiagramWL72ISMWInput139,
        sequenceDiagramWL72ISMWInput140,
      ),
      sequenceDiagramWL72ISMWBinding364
    );
  }, "drawLabel");
  sequenceDiagramWL72ISMWBinding20 = -1;
  sequenceDiagramWL72ISMWBinding21 = defineFunctionName(
    (
      sequenceDiagramWL72ISMWInput226,
      sequenceDiagramWL72ISMWInput227,
      sequenceDiagramWL72ISMWInput228,
      sequenceDiagramWL72ISMWInput229,
    ) => {
      sequenceDiagramWL72ISMWInput226.select &&
        sequenceDiagramWL72ISMWInput228.forEach((item) => {
          let sequenceDiagramWL72ISMWBinding449 =
              sequenceDiagramWL72ISMWInput227.get(item),
            sequenceDiagramWL72ISMWBinding450 =
              sequenceDiagramWL72ISMWInput226.select(
                "#actor" + sequenceDiagramWL72ISMWBinding449.actorCnt,
              );
          !sequenceDiagramWL72ISMWInput229.mirrorActors &&
          sequenceDiagramWL72ISMWBinding449.stopy
            ? sequenceDiagramWL72ISMWBinding450.attr(
                "y2",
                sequenceDiagramWL72ISMWBinding449.stopy +
                  sequenceDiagramWL72ISMWBinding449.height / 2,
              )
            : sequenceDiagramWL72ISMWInput229.mirrorActors &&
              sequenceDiagramWL72ISMWBinding450.attr(
                "y2",
                sequenceDiagramWL72ISMWBinding449.stopy,
              );
        });
    },
    "fixLifeLineHeights",
  );
  be = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput75,
    sequenceDiagramWL72ISMWInput76,
    sequenceDiagramWL72ISMWInput77,
    sequenceDiagramWL72ISMWInput78,
  ) {
    let sequenceDiagramWL72ISMWBinding286 = sequenceDiagramWL72ISMWInput78
        ? sequenceDiagramWL72ISMWInput76.stopy
        : sequenceDiagramWL72ISMWInput76.starty,
      sequenceDiagramWL72ISMWBinding287 =
        sequenceDiagramWL72ISMWInput76.x +
        sequenceDiagramWL72ISMWInput76.width / 2,
      sequenceDiagramWL72ISMWBinding288 =
        sequenceDiagramWL72ISMWBinding286 +
        sequenceDiagramWL72ISMWInput76.height,
      sequenceDiagramWL72ISMWBinding289 = sequenceDiagramWL72ISMWInput75
        .append("g")
        .lower();
    var sequenceDiagramWL72ISMWBinding290 = sequenceDiagramWL72ISMWBinding289;
    sequenceDiagramWL72ISMWInput78 ||
      (sequenceDiagramWL72ISMWBinding20++,
      Object.keys(sequenceDiagramWL72ISMWInput76.links || {}).length &&
        !sequenceDiagramWL72ISMWInput77.forceMenus &&
        sequenceDiagramWL72ISMWBinding290
          .attr(
            "onclick",
            sequenceDiagramWL72ISMWBinding17(
              `actor${sequenceDiagramWL72ISMWBinding20}_popup`,
            ),
          )
          .attr("cursor", "pointer"),
      sequenceDiagramWL72ISMWBinding290
        .append("line")
        .attr("id", "actor" + sequenceDiagramWL72ISMWBinding20)
        .attr("x1", sequenceDiagramWL72ISMWBinding287)
        .attr("y1", sequenceDiagramWL72ISMWBinding288)
        .attr("x2", sequenceDiagramWL72ISMWBinding287)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramWL72ISMWInput76.name),
      (sequenceDiagramWL72ISMWBinding290 =
        sequenceDiagramWL72ISMWBinding289.append("g")),
      (sequenceDiagramWL72ISMWInput76.actorCnt =
        sequenceDiagramWL72ISMWBinding20),
      sequenceDiagramWL72ISMWInput76.links != null &&
        sequenceDiagramWL72ISMWBinding290.attr(
          "id",
          "root-" + sequenceDiagramWL72ISMWBinding20,
        ));
    let sequenceDiagramWL72ISMWBinding291 = o();
    var sequenceDiagramWL72ISMWBinding292 = "actor";
    sequenceDiagramWL72ISMWInput76.properties?.class
      ? (sequenceDiagramWL72ISMWBinding292 =
          sequenceDiagramWL72ISMWInput76.properties.class)
      : (sequenceDiagramWL72ISMWBinding291.fill = "#eaeaea");
    sequenceDiagramWL72ISMWInput78
      ? (sequenceDiagramWL72ISMWBinding292 += ` ${sequenceDiagramWL72ISMWBinding12}`)
      : (sequenceDiagramWL72ISMWBinding292 += ` ${sequenceDiagramWL72ISMWBinding11}`);
    sequenceDiagramWL72ISMWBinding291.x = sequenceDiagramWL72ISMWInput76.x;
    sequenceDiagramWL72ISMWBinding291.y = sequenceDiagramWL72ISMWBinding286;
    sequenceDiagramWL72ISMWBinding291.width =
      sequenceDiagramWL72ISMWInput76.width;
    sequenceDiagramWL72ISMWBinding291.height =
      sequenceDiagramWL72ISMWInput76.height;
    sequenceDiagramWL72ISMWBinding291.class = sequenceDiagramWL72ISMWBinding292;
    sequenceDiagramWL72ISMWBinding291.rx = 3;
    sequenceDiagramWL72ISMWBinding291.ry = 3;
    sequenceDiagramWL72ISMWBinding291.name =
      sequenceDiagramWL72ISMWInput76.name;
    let sequenceDiagramWL72ISMWBinding293 = sequenceDiagramWL72ISMWBinding15(
      sequenceDiagramWL72ISMWBinding290,
      sequenceDiagramWL72ISMWBinding291,
    );
    if (
      ((sequenceDiagramWL72ISMWInput76.rectData =
        sequenceDiagramWL72ISMWBinding291),
      sequenceDiagramWL72ISMWInput76.properties?.icon)
    ) {
      let sequenceDiagramWL72ISMWBinding464 =
        sequenceDiagramWL72ISMWInput76.properties.icon.trim();
      sequenceDiagramWL72ISMWBinding464.charAt(0) === "@"
        ? n(
            sequenceDiagramWL72ISMWBinding290,
            sequenceDiagramWL72ISMWBinding291.x +
              sequenceDiagramWL72ISMWBinding291.width -
              20,
            sequenceDiagramWL72ISMWBinding291.y + 10,
            sequenceDiagramWL72ISMWBinding464.substr(1),
          )
        : chunkTZMSLE5BR(
            sequenceDiagramWL72ISMWBinding290,
            sequenceDiagramWL72ISMWBinding291.x +
              sequenceDiagramWL72ISMWBinding291.width -
              20,
            sequenceDiagramWL72ISMWBinding291.y + 10,
            sequenceDiagramWL72ISMWBinding464,
          );
    }
    sequenceDiagramWL72ISMWBinding44(
      sequenceDiagramWL72ISMWInput77,
      O(sequenceDiagramWL72ISMWInput76.description),
    )(
      sequenceDiagramWL72ISMWInput76.description,
      sequenceDiagramWL72ISMWBinding290,
      sequenceDiagramWL72ISMWBinding291.x,
      sequenceDiagramWL72ISMWBinding291.y,
      sequenceDiagramWL72ISMWBinding291.width,
      sequenceDiagramWL72ISMWBinding291.height,
      {
        class: `actor ${sequenceDiagramWL72ISMWBinding13}`,
      },
      sequenceDiagramWL72ISMWInput77,
    );
    let sequenceDiagramWL72ISMWBinding294 =
      sequenceDiagramWL72ISMWInput76.height;
    if (sequenceDiagramWL72ISMWBinding293.node) {
      let sequenceDiagramWL72ISMWBinding487 = sequenceDiagramWL72ISMWBinding293
        .node()
        .getBBox();
      sequenceDiagramWL72ISMWInput76.height =
        sequenceDiagramWL72ISMWBinding487.height;
      sequenceDiagramWL72ISMWBinding294 =
        sequenceDiagramWL72ISMWBinding487.height;
    }
    return sequenceDiagramWL72ISMWBinding294;
  }, "drawActorTypeParticipant");
  sequenceDiagramWL72ISMWBinding22 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput71,
    sequenceDiagramWL72ISMWInput72,
    sequenceDiagramWL72ISMWInput73,
    sequenceDiagramWL72ISMWInput74,
  ) {
    let sequenceDiagramWL72ISMWBinding276 = sequenceDiagramWL72ISMWInput74
        ? sequenceDiagramWL72ISMWInput72.stopy
        : sequenceDiagramWL72ISMWInput72.starty,
      sequenceDiagramWL72ISMWBinding277 =
        sequenceDiagramWL72ISMWInput72.x +
        sequenceDiagramWL72ISMWInput72.width / 2,
      sequenceDiagramWL72ISMWBinding278 =
        sequenceDiagramWL72ISMWBinding276 +
        sequenceDiagramWL72ISMWInput72.height,
      sequenceDiagramWL72ISMWBinding279 = sequenceDiagramWL72ISMWInput71
        .append("g")
        .lower();
    var sequenceDiagramWL72ISMWBinding280 = sequenceDiagramWL72ISMWBinding279;
    sequenceDiagramWL72ISMWInput74 ||
      (sequenceDiagramWL72ISMWBinding20++,
      Object.keys(sequenceDiagramWL72ISMWInput72.links || {}).length &&
        !sequenceDiagramWL72ISMWInput73.forceMenus &&
        sequenceDiagramWL72ISMWBinding280
          .attr(
            "onclick",
            sequenceDiagramWL72ISMWBinding17(
              `actor${sequenceDiagramWL72ISMWBinding20}_popup`,
            ),
          )
          .attr("cursor", "pointer"),
      sequenceDiagramWL72ISMWBinding280
        .append("line")
        .attr("id", "actor" + sequenceDiagramWL72ISMWBinding20)
        .attr("x1", sequenceDiagramWL72ISMWBinding277)
        .attr("y1", sequenceDiagramWL72ISMWBinding278)
        .attr("x2", sequenceDiagramWL72ISMWBinding277)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramWL72ISMWInput72.name),
      (sequenceDiagramWL72ISMWBinding280 =
        sequenceDiagramWL72ISMWBinding279.append("g")),
      (sequenceDiagramWL72ISMWInput72.actorCnt =
        sequenceDiagramWL72ISMWBinding20),
      sequenceDiagramWL72ISMWInput72.links != null &&
        sequenceDiagramWL72ISMWBinding280.attr(
          "id",
          "root-" + sequenceDiagramWL72ISMWBinding20,
        ));
    let sequenceDiagramWL72ISMWBinding281 = o();
    var sequenceDiagramWL72ISMWBinding282 = "actor";
    sequenceDiagramWL72ISMWInput72.properties?.class
      ? (sequenceDiagramWL72ISMWBinding282 =
          sequenceDiagramWL72ISMWInput72.properties.class)
      : (sequenceDiagramWL72ISMWBinding281.fill = "#eaeaea");
    sequenceDiagramWL72ISMWInput74
      ? (sequenceDiagramWL72ISMWBinding282 += ` ${sequenceDiagramWL72ISMWBinding12}`)
      : (sequenceDiagramWL72ISMWBinding282 += ` ${sequenceDiagramWL72ISMWBinding11}`);
    sequenceDiagramWL72ISMWBinding281.x = sequenceDiagramWL72ISMWInput72.x;
    sequenceDiagramWL72ISMWBinding281.y = sequenceDiagramWL72ISMWBinding276;
    sequenceDiagramWL72ISMWBinding281.width =
      sequenceDiagramWL72ISMWInput72.width;
    sequenceDiagramWL72ISMWBinding281.height =
      sequenceDiagramWL72ISMWInput72.height;
    sequenceDiagramWL72ISMWBinding281.class = sequenceDiagramWL72ISMWBinding282;
    sequenceDiagramWL72ISMWBinding281.name =
      sequenceDiagramWL72ISMWInput72.name;
    let sequenceDiagramWL72ISMWBinding283 = {
        ...sequenceDiagramWL72ISMWBinding281,
        x: sequenceDiagramWL72ISMWBinding281.x + -6,
        y: sequenceDiagramWL72ISMWBinding281.y + 6,
        class: "actor",
      },
      sequenceDiagramWL72ISMWBinding284 = sequenceDiagramWL72ISMWBinding15(
        sequenceDiagramWL72ISMWBinding280,
        sequenceDiagramWL72ISMWBinding281,
      );
    if (
      (sequenceDiagramWL72ISMWBinding15(
        sequenceDiagramWL72ISMWBinding280,
        sequenceDiagramWL72ISMWBinding283,
      ),
      (sequenceDiagramWL72ISMWInput72.rectData =
        sequenceDiagramWL72ISMWBinding281),
      sequenceDiagramWL72ISMWInput72.properties?.icon)
    ) {
      let sequenceDiagramWL72ISMWBinding465 =
        sequenceDiagramWL72ISMWInput72.properties.icon.trim();
      sequenceDiagramWL72ISMWBinding465.charAt(0) === "@"
        ? n(
            sequenceDiagramWL72ISMWBinding280,
            sequenceDiagramWL72ISMWBinding281.x +
              sequenceDiagramWL72ISMWBinding281.width -
              20,
            sequenceDiagramWL72ISMWBinding281.y + 10,
            sequenceDiagramWL72ISMWBinding465.substr(1),
          )
        : chunkTZMSLE5BR(
            sequenceDiagramWL72ISMWBinding280,
            sequenceDiagramWL72ISMWBinding281.x +
              sequenceDiagramWL72ISMWBinding281.width -
              20,
            sequenceDiagramWL72ISMWBinding281.y + 10,
            sequenceDiagramWL72ISMWBinding465,
          );
    }
    sequenceDiagramWL72ISMWBinding44(
      sequenceDiagramWL72ISMWInput73,
      O(sequenceDiagramWL72ISMWInput72.description),
    )(
      sequenceDiagramWL72ISMWInput72.description,
      sequenceDiagramWL72ISMWBinding280,
      sequenceDiagramWL72ISMWBinding281.x - 6,
      sequenceDiagramWL72ISMWBinding281.y + 6,
      sequenceDiagramWL72ISMWBinding281.width,
      sequenceDiagramWL72ISMWBinding281.height,
      {
        class: `actor ${sequenceDiagramWL72ISMWBinding13}`,
      },
      sequenceDiagramWL72ISMWInput73,
    );
    let sequenceDiagramWL72ISMWBinding285 =
      sequenceDiagramWL72ISMWInput72.height;
    if (sequenceDiagramWL72ISMWBinding284.node) {
      let sequenceDiagramWL72ISMWBinding488 = sequenceDiagramWL72ISMWBinding284
        .node()
        .getBBox();
      sequenceDiagramWL72ISMWInput72.height =
        sequenceDiagramWL72ISMWBinding488.height;
      sequenceDiagramWL72ISMWBinding285 =
        sequenceDiagramWL72ISMWBinding488.height;
    }
    return sequenceDiagramWL72ISMWBinding285;
  }, "drawActorTypeCollections");
  sequenceDiagramWL72ISMWBinding23 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput33,
    sequenceDiagramWL72ISMWInput34,
    sequenceDiagramWL72ISMWInput35,
    sequenceDiagramWL72ISMWInput36,
  ) {
    let sequenceDiagramWL72ISMWBinding190 = sequenceDiagramWL72ISMWInput36
        ? sequenceDiagramWL72ISMWInput34.stopy
        : sequenceDiagramWL72ISMWInput34.starty,
      sequenceDiagramWL72ISMWBinding191 =
        sequenceDiagramWL72ISMWInput34.x +
        sequenceDiagramWL72ISMWInput34.width / 2,
      sequenceDiagramWL72ISMWBinding192 =
        sequenceDiagramWL72ISMWBinding190 +
        sequenceDiagramWL72ISMWInput34.height,
      sequenceDiagramWL72ISMWBinding193 = sequenceDiagramWL72ISMWInput33
        .append("g")
        .lower(),
      sequenceDiagramWL72ISMWBinding194 = sequenceDiagramWL72ISMWBinding193;
    sequenceDiagramWL72ISMWInput36 ||
      (sequenceDiagramWL72ISMWBinding20++,
      Object.keys(sequenceDiagramWL72ISMWInput34.links || {}).length &&
        !sequenceDiagramWL72ISMWInput35.forceMenus &&
        sequenceDiagramWL72ISMWBinding194
          .attr(
            "onclick",
            sequenceDiagramWL72ISMWBinding17(
              `actor${sequenceDiagramWL72ISMWBinding20}_popup`,
            ),
          )
          .attr("cursor", "pointer"),
      sequenceDiagramWL72ISMWBinding194
        .append("line")
        .attr("id", "actor" + sequenceDiagramWL72ISMWBinding20)
        .attr("x1", sequenceDiagramWL72ISMWBinding191)
        .attr("y1", sequenceDiagramWL72ISMWBinding192)
        .attr("x2", sequenceDiagramWL72ISMWBinding191)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramWL72ISMWInput34.name),
      (sequenceDiagramWL72ISMWBinding194 =
        sequenceDiagramWL72ISMWBinding193.append("g")),
      (sequenceDiagramWL72ISMWInput34.actorCnt =
        sequenceDiagramWL72ISMWBinding20),
      sequenceDiagramWL72ISMWInput34.links != null &&
        sequenceDiagramWL72ISMWBinding194.attr(
          "id",
          "root-" + sequenceDiagramWL72ISMWBinding20,
        ));
    let sequenceDiagramWL72ISMWBinding195 = o(),
      sequenceDiagramWL72ISMWBinding196 = "actor";
    sequenceDiagramWL72ISMWInput34.properties?.class
      ? (sequenceDiagramWL72ISMWBinding196 =
          sequenceDiagramWL72ISMWInput34.properties.class)
      : (sequenceDiagramWL72ISMWBinding195.fill = "#eaeaea");
    sequenceDiagramWL72ISMWInput36
      ? (sequenceDiagramWL72ISMWBinding196 += ` ${sequenceDiagramWL72ISMWBinding12}`)
      : (sequenceDiagramWL72ISMWBinding196 += ` ${sequenceDiagramWL72ISMWBinding11}`);
    sequenceDiagramWL72ISMWBinding195.x = sequenceDiagramWL72ISMWInput34.x;
    sequenceDiagramWL72ISMWBinding195.y = sequenceDiagramWL72ISMWBinding190;
    sequenceDiagramWL72ISMWBinding195.width =
      sequenceDiagramWL72ISMWInput34.width;
    sequenceDiagramWL72ISMWBinding195.height =
      sequenceDiagramWL72ISMWInput34.height;
    sequenceDiagramWL72ISMWBinding195.class = sequenceDiagramWL72ISMWBinding196;
    sequenceDiagramWL72ISMWBinding195.name =
      sequenceDiagramWL72ISMWInput34.name;
    let sequenceDiagramWL72ISMWBinding197 =
        sequenceDiagramWL72ISMWBinding195.height / 2,
      sequenceDiagramWL72ISMWBinding198 =
        sequenceDiagramWL72ISMWBinding197 /
        (2.5 + sequenceDiagramWL72ISMWBinding195.height / 50),
      sequenceDiagramWL72ISMWBinding199 =
        sequenceDiagramWL72ISMWBinding194.append("g"),
      sequenceDiagramWL72ISMWBinding200 =
        sequenceDiagramWL72ISMWBinding194.append("g");
    if (
      (sequenceDiagramWL72ISMWBinding199
        .append("path")
        .attr(
          "d",
          `M ${sequenceDiagramWL72ISMWBinding195.x},${sequenceDiagramWL72ISMWBinding195.y + sequenceDiagramWL72ISMWBinding197}
    a ${sequenceDiagramWL72ISMWBinding198},${sequenceDiagramWL72ISMWBinding197} 0 0 0 0,${sequenceDiagramWL72ISMWBinding195.height}
    h ${sequenceDiagramWL72ISMWBinding195.width - 2 * sequenceDiagramWL72ISMWBinding198}
    a ${sequenceDiagramWL72ISMWBinding198},${sequenceDiagramWL72ISMWBinding197} 0 0 0 0,-${sequenceDiagramWL72ISMWBinding195.height}
    Z
  `,
        )
        .attr("class", sequenceDiagramWL72ISMWBinding196),
      sequenceDiagramWL72ISMWBinding200
        .append("path")
        .attr(
          "d",
          `M ${sequenceDiagramWL72ISMWBinding195.x},${sequenceDiagramWL72ISMWBinding195.y + sequenceDiagramWL72ISMWBinding197}
      a ${sequenceDiagramWL72ISMWBinding198},${sequenceDiagramWL72ISMWBinding197} 0 0 0 0,${sequenceDiagramWL72ISMWBinding195.height}`,
        )
        .attr("stroke", "#666")
        .attr("stroke-width", "1px")
        .attr("class", sequenceDiagramWL72ISMWBinding196),
      sequenceDiagramWL72ISMWBinding199.attr(
        "transform",
        `translate(${sequenceDiagramWL72ISMWBinding198}, ${-(sequenceDiagramWL72ISMWBinding195.height / 2)})`,
      ),
      sequenceDiagramWL72ISMWBinding200.attr(
        "transform",
        `translate(${sequenceDiagramWL72ISMWBinding195.width - sequenceDiagramWL72ISMWBinding198}, ${-sequenceDiagramWL72ISMWBinding195.height / 2})`,
      ),
      (sequenceDiagramWL72ISMWInput34.rectData =
        sequenceDiagramWL72ISMWBinding195),
      sequenceDiagramWL72ISMWInput34.properties?.icon)
    ) {
      let sequenceDiagramWL72ISMWBinding468 =
          sequenceDiagramWL72ISMWInput34.properties.icon.trim(),
        sequenceDiagramWL72ISMWBinding469 =
          sequenceDiagramWL72ISMWBinding195.x +
          sequenceDiagramWL72ISMWBinding195.width -
          20,
        sequenceDiagramWL72ISMWBinding470 =
          sequenceDiagramWL72ISMWBinding195.y + 10;
      sequenceDiagramWL72ISMWBinding468.charAt(0) === "@"
        ? n(
            sequenceDiagramWL72ISMWBinding194,
            sequenceDiagramWL72ISMWBinding469,
            sequenceDiagramWL72ISMWBinding470,
            sequenceDiagramWL72ISMWBinding468.substr(1),
          )
        : chunkTZMSLE5BR(
            sequenceDiagramWL72ISMWBinding194,
            sequenceDiagramWL72ISMWBinding469,
            sequenceDiagramWL72ISMWBinding470,
            sequenceDiagramWL72ISMWBinding468,
          );
    }
    sequenceDiagramWL72ISMWBinding44(
      sequenceDiagramWL72ISMWInput35,
      O(sequenceDiagramWL72ISMWInput34.description),
    )(
      sequenceDiagramWL72ISMWInput34.description,
      sequenceDiagramWL72ISMWBinding194,
      sequenceDiagramWL72ISMWBinding195.x,
      sequenceDiagramWL72ISMWBinding195.y,
      sequenceDiagramWL72ISMWBinding195.width,
      sequenceDiagramWL72ISMWBinding195.height,
      {
        class: `actor ${sequenceDiagramWL72ISMWBinding13}`,
      },
      sequenceDiagramWL72ISMWInput35,
    );
    let sequenceDiagramWL72ISMWBinding201 =
        sequenceDiagramWL72ISMWInput34.height,
      sequenceDiagramWL72ISMWBinding202 =
        sequenceDiagramWL72ISMWBinding199.select("path:last-child");
    if (sequenceDiagramWL72ISMWBinding202.node()) {
      let sequenceDiagramWL72ISMWBinding489 = sequenceDiagramWL72ISMWBinding202
        .node()
        .getBBox();
      sequenceDiagramWL72ISMWInput34.height =
        sequenceDiagramWL72ISMWBinding489.height;
      sequenceDiagramWL72ISMWBinding201 =
        sequenceDiagramWL72ISMWBinding489.height;
    }
    return sequenceDiagramWL72ISMWBinding201;
  }, "drawActorTypeQueue");
  sequenceDiagramWL72ISMWBinding24 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput51,
    sequenceDiagramWL72ISMWInput52,
    sequenceDiagramWL72ISMWInput53,
    sequenceDiagramWL72ISMWInput54,
  ) {
    let sequenceDiagramWL72ISMWBinding236 = sequenceDiagramWL72ISMWInput54
        ? sequenceDiagramWL72ISMWInput52.stopy
        : sequenceDiagramWL72ISMWInput52.starty,
      sequenceDiagramWL72ISMWBinding237 =
        sequenceDiagramWL72ISMWInput52.x +
        sequenceDiagramWL72ISMWInput52.width / 2,
      sequenceDiagramWL72ISMWBinding238 =
        sequenceDiagramWL72ISMWBinding236 + 75,
      sequenceDiagramWL72ISMWBinding239 = sequenceDiagramWL72ISMWInput51
        .append("g")
        .lower();
    sequenceDiagramWL72ISMWInput54 ||
      (sequenceDiagramWL72ISMWBinding20++,
      sequenceDiagramWL72ISMWBinding239
        .append("line")
        .attr("id", "actor" + sequenceDiagramWL72ISMWBinding20)
        .attr("x1", sequenceDiagramWL72ISMWBinding237)
        .attr("y1", sequenceDiagramWL72ISMWBinding238)
        .attr("x2", sequenceDiagramWL72ISMWBinding237)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramWL72ISMWInput52.name),
      (sequenceDiagramWL72ISMWInput52.actorCnt =
        sequenceDiagramWL72ISMWBinding20));
    let sequenceDiagramWL72ISMWBinding240 =
        sequenceDiagramWL72ISMWInput51.append("g"),
      sequenceDiagramWL72ISMWBinding241 = sequenceDiagramWL72ISMWBinding14;
    sequenceDiagramWL72ISMWInput54
      ? (sequenceDiagramWL72ISMWBinding241 += ` ${sequenceDiagramWL72ISMWBinding12}`)
      : (sequenceDiagramWL72ISMWBinding241 += ` ${sequenceDiagramWL72ISMWBinding11}`);
    sequenceDiagramWL72ISMWBinding240.attr(
      "class",
      sequenceDiagramWL72ISMWBinding241,
    );
    sequenceDiagramWL72ISMWBinding240.attr(
      "name",
      sequenceDiagramWL72ISMWInput52.name,
    );
    let sequenceDiagramWL72ISMWBinding242 = o();
    sequenceDiagramWL72ISMWBinding242.x = sequenceDiagramWL72ISMWInput52.x;
    sequenceDiagramWL72ISMWBinding242.y = sequenceDiagramWL72ISMWBinding236;
    sequenceDiagramWL72ISMWBinding242.fill = "#eaeaea";
    sequenceDiagramWL72ISMWBinding242.width =
      sequenceDiagramWL72ISMWInput52.width;
    sequenceDiagramWL72ISMWBinding242.height =
      sequenceDiagramWL72ISMWInput52.height;
    sequenceDiagramWL72ISMWBinding242.class = "actor";
    let sequenceDiagramWL72ISMWBinding243 =
        sequenceDiagramWL72ISMWInput52.x +
        sequenceDiagramWL72ISMWInput52.width / 2,
      sequenceDiagramWL72ISMWBinding244 =
        sequenceDiagramWL72ISMWBinding236 + 30;
    return (
      sequenceDiagramWL72ISMWBinding240
        .append("defs")
        .append("marker")
        .attr("id", "filled-head-control")
        .attr("refX", 11)
        .attr("refY", 5.8)
        .attr("markerWidth", 20)
        .attr("markerHeight", 28)
        .attr("orient", "172.5")
        .append("path")
        .attr("d", "M 14.4 5.6 L 7.2 10.4 L 8.8 5.6 L 7.2 0.8 Z"),
      sequenceDiagramWL72ISMWBinding240
        .append("circle")
        .attr("cx", sequenceDiagramWL72ISMWBinding243)
        .attr("cy", sequenceDiagramWL72ISMWBinding244)
        .attr("r", 18)
        .attr("fill", "#eaeaf7")
        .attr("stroke", "#666")
        .attr("stroke-width", 1.2),
      sequenceDiagramWL72ISMWBinding240
        .append("line")
        .attr("marker-end", "url(#filled-head-control)")
        .attr(
          "transform",
          `translate(${sequenceDiagramWL72ISMWBinding243}, ${sequenceDiagramWL72ISMWBinding244 - 18})`,
        ),
      (sequenceDiagramWL72ISMWInput52.height =
        sequenceDiagramWL72ISMWBinding240.node().getBBox().height +
        2 * (sequenceDiagramWL72ISMWInput53?.sequence?.labelBoxHeight ?? 0)),
      sequenceDiagramWL72ISMWBinding44(
        sequenceDiagramWL72ISMWInput53,
        O(sequenceDiagramWL72ISMWInput52.description),
      )(
        sequenceDiagramWL72ISMWInput52.description,
        sequenceDiagramWL72ISMWBinding240,
        sequenceDiagramWL72ISMWBinding242.x,
        sequenceDiagramWL72ISMWBinding242.y +
          18 +
          (sequenceDiagramWL72ISMWInput54 ? 5 : 10),
        sequenceDiagramWL72ISMWBinding242.width,
        sequenceDiagramWL72ISMWBinding242.height,
        {
          class: `actor ${sequenceDiagramWL72ISMWBinding14}`,
        },
        sequenceDiagramWL72ISMWInput53,
      ),
      sequenceDiagramWL72ISMWInput52.height
    );
  }, "drawActorTypeControl");
  sequenceDiagramWL72ISMWBinding25 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput59,
    sequenceDiagramWL72ISMWInput60,
    sequenceDiagramWL72ISMWInput61,
    sequenceDiagramWL72ISMWInput62,
  ) {
    let sequenceDiagramWL72ISMWBinding252 = sequenceDiagramWL72ISMWInput62
        ? sequenceDiagramWL72ISMWInput60.stopy
        : sequenceDiagramWL72ISMWInput60.starty,
      sequenceDiagramWL72ISMWBinding253 =
        sequenceDiagramWL72ISMWInput60.x +
        sequenceDiagramWL72ISMWInput60.width / 2,
      sequenceDiagramWL72ISMWBinding254 =
        sequenceDiagramWL72ISMWBinding252 + 75,
      sequenceDiagramWL72ISMWBinding255 = sequenceDiagramWL72ISMWInput59
        .append("g")
        .lower(),
      sequenceDiagramWL72ISMWBinding256 =
        sequenceDiagramWL72ISMWInput59.append("g"),
      sequenceDiagramWL72ISMWBinding257 = sequenceDiagramWL72ISMWBinding14;
    sequenceDiagramWL72ISMWInput62
      ? (sequenceDiagramWL72ISMWBinding257 += ` ${sequenceDiagramWL72ISMWBinding12}`)
      : (sequenceDiagramWL72ISMWBinding257 += ` ${sequenceDiagramWL72ISMWBinding11}`);
    sequenceDiagramWL72ISMWBinding256.attr(
      "class",
      sequenceDiagramWL72ISMWBinding257,
    );
    sequenceDiagramWL72ISMWBinding256.attr(
      "name",
      sequenceDiagramWL72ISMWInput60.name,
    );
    let sequenceDiagramWL72ISMWBinding258 = o();
    sequenceDiagramWL72ISMWBinding258.x = sequenceDiagramWL72ISMWInput60.x;
    sequenceDiagramWL72ISMWBinding258.y = sequenceDiagramWL72ISMWBinding252;
    sequenceDiagramWL72ISMWBinding258.fill = "#eaeaea";
    sequenceDiagramWL72ISMWBinding258.width =
      sequenceDiagramWL72ISMWInput60.width;
    sequenceDiagramWL72ISMWBinding258.height =
      sequenceDiagramWL72ISMWInput60.height;
    sequenceDiagramWL72ISMWBinding258.class = "actor";
    let sequenceDiagramWL72ISMWBinding259 =
        sequenceDiagramWL72ISMWInput60.x +
        sequenceDiagramWL72ISMWInput60.width / 2,
      sequenceDiagramWL72ISMWBinding260 =
        sequenceDiagramWL72ISMWBinding252 +
        (sequenceDiagramWL72ISMWInput62 ? 10 : 25);
    return (
      sequenceDiagramWL72ISMWBinding256
        .append("circle")
        .attr("cx", sequenceDiagramWL72ISMWBinding259)
        .attr("cy", sequenceDiagramWL72ISMWBinding260)
        .attr("r", 18)
        .attr("width", sequenceDiagramWL72ISMWInput60.width)
        .attr("height", sequenceDiagramWL72ISMWInput60.height),
      sequenceDiagramWL72ISMWBinding256
        .append("line")
        .attr("x1", sequenceDiagramWL72ISMWBinding259 - 18)
        .attr("x2", sequenceDiagramWL72ISMWBinding259 + 18)
        .attr("y1", sequenceDiagramWL72ISMWBinding260 + 18)
        .attr("y2", sequenceDiagramWL72ISMWBinding260 + 18)
        .attr("stroke", "#333")
        .attr("stroke-width", 2),
      (sequenceDiagramWL72ISMWInput60.height =
        sequenceDiagramWL72ISMWBinding256.node().getBBox().height +
        (sequenceDiagramWL72ISMWInput61?.sequence?.labelBoxHeight ?? 0)),
      sequenceDiagramWL72ISMWInput62 ||
        (sequenceDiagramWL72ISMWBinding20++,
        sequenceDiagramWL72ISMWBinding255
          .append("line")
          .attr("id", "actor" + sequenceDiagramWL72ISMWBinding20)
          .attr("x1", sequenceDiagramWL72ISMWBinding253)
          .attr("y1", sequenceDiagramWL72ISMWBinding254)
          .attr("x2", sequenceDiagramWL72ISMWBinding253)
          .attr("y2", 2e3)
          .attr("class", "actor-line 200")
          .attr("stroke-width", "0.5px")
          .attr("stroke", "#999")
          .attr("name", sequenceDiagramWL72ISMWInput60.name),
        (sequenceDiagramWL72ISMWInput60.actorCnt =
          sequenceDiagramWL72ISMWBinding20)),
      sequenceDiagramWL72ISMWBinding44(
        sequenceDiagramWL72ISMWInput61,
        O(sequenceDiagramWL72ISMWInput60.description),
      )(
        sequenceDiagramWL72ISMWInput60.description,
        sequenceDiagramWL72ISMWBinding256,
        sequenceDiagramWL72ISMWBinding258.x,
        sequenceDiagramWL72ISMWBinding258.y +
          (sequenceDiagramWL72ISMWInput62
            ? (sequenceDiagramWL72ISMWBinding260 -
                sequenceDiagramWL72ISMWBinding252 +
                18 -
                5) /
              2
            : (sequenceDiagramWL72ISMWBinding260 +
                18 -
                sequenceDiagramWL72ISMWBinding252) /
              2),
        sequenceDiagramWL72ISMWBinding258.width,
        sequenceDiagramWL72ISMWBinding258.height,
        {
          class: `actor ${sequenceDiagramWL72ISMWBinding14}`,
        },
        sequenceDiagramWL72ISMWInput61,
      ),
      sequenceDiagramWL72ISMWBinding256.attr("transform", `translate(0, ${9})`),
      sequenceDiagramWL72ISMWInput60.height
    );
  }, "drawActorTypeEntity");
  sequenceDiagramWL72ISMWBinding26 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput42,
    sequenceDiagramWL72ISMWInput43,
    sequenceDiagramWL72ISMWInput44,
    sequenceDiagramWL72ISMWInput45,
  ) {
    let sequenceDiagramWL72ISMWBinding214 = sequenceDiagramWL72ISMWInput45
        ? sequenceDiagramWL72ISMWInput43.stopy
        : sequenceDiagramWL72ISMWInput43.starty,
      sequenceDiagramWL72ISMWBinding215 =
        sequenceDiagramWL72ISMWInput43.x +
        sequenceDiagramWL72ISMWInput43.width / 2,
      sequenceDiagramWL72ISMWBinding216 =
        sequenceDiagramWL72ISMWBinding214 +
        sequenceDiagramWL72ISMWInput43.height +
        2 * sequenceDiagramWL72ISMWInput44.boxTextMargin,
      sequenceDiagramWL72ISMWBinding217 = sequenceDiagramWL72ISMWInput42
        .append("g")
        .lower(),
      sequenceDiagramWL72ISMWBinding218 = sequenceDiagramWL72ISMWBinding217;
    sequenceDiagramWL72ISMWInput45 ||
      (sequenceDiagramWL72ISMWBinding20++,
      Object.keys(sequenceDiagramWL72ISMWInput43.links || {}).length &&
        !sequenceDiagramWL72ISMWInput44.forceMenus &&
        sequenceDiagramWL72ISMWBinding218
          .attr(
            "onclick",
            sequenceDiagramWL72ISMWBinding17(
              `actor${sequenceDiagramWL72ISMWBinding20}_popup`,
            ),
          )
          .attr("cursor", "pointer"),
      sequenceDiagramWL72ISMWBinding218
        .append("line")
        .attr("id", "actor" + sequenceDiagramWL72ISMWBinding20)
        .attr("x1", sequenceDiagramWL72ISMWBinding215)
        .attr("y1", sequenceDiagramWL72ISMWBinding216)
        .attr("x2", sequenceDiagramWL72ISMWBinding215)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramWL72ISMWInput43.name),
      (sequenceDiagramWL72ISMWBinding218 =
        sequenceDiagramWL72ISMWBinding217.append("g")),
      (sequenceDiagramWL72ISMWInput43.actorCnt =
        sequenceDiagramWL72ISMWBinding20),
      sequenceDiagramWL72ISMWInput43.links != null &&
        sequenceDiagramWL72ISMWBinding218.attr(
          "id",
          "root-" + sequenceDiagramWL72ISMWBinding20,
        ));
    let sequenceDiagramWL72ISMWBinding219 = o(),
      sequenceDiagramWL72ISMWBinding220 = "actor";
    sequenceDiagramWL72ISMWInput43.properties?.class
      ? (sequenceDiagramWL72ISMWBinding220 =
          sequenceDiagramWL72ISMWInput43.properties.class)
      : (sequenceDiagramWL72ISMWBinding219.fill = "#eaeaea");
    sequenceDiagramWL72ISMWInput45
      ? (sequenceDiagramWL72ISMWBinding220 += ` ${sequenceDiagramWL72ISMWBinding12}`)
      : (sequenceDiagramWL72ISMWBinding220 += ` ${sequenceDiagramWL72ISMWBinding11}`);
    sequenceDiagramWL72ISMWBinding219.x = sequenceDiagramWL72ISMWInput43.x;
    sequenceDiagramWL72ISMWBinding219.y = sequenceDiagramWL72ISMWBinding214;
    sequenceDiagramWL72ISMWBinding219.width =
      sequenceDiagramWL72ISMWInput43.width;
    sequenceDiagramWL72ISMWBinding219.height =
      sequenceDiagramWL72ISMWInput43.height;
    sequenceDiagramWL72ISMWBinding219.class = sequenceDiagramWL72ISMWBinding220;
    sequenceDiagramWL72ISMWBinding219.name =
      sequenceDiagramWL72ISMWInput43.name;
    sequenceDiagramWL72ISMWBinding219.x = sequenceDiagramWL72ISMWInput43.x;
    sequenceDiagramWL72ISMWBinding219.y = sequenceDiagramWL72ISMWBinding214;
    let sequenceDiagramWL72ISMWBinding221 =
        sequenceDiagramWL72ISMWBinding219.width / 4,
      sequenceDiagramWL72ISMWBinding222 =
        sequenceDiagramWL72ISMWBinding219.width / 4,
      sequenceDiagramWL72ISMWBinding223 = sequenceDiagramWL72ISMWBinding221 / 2,
      sequenceDiagramWL72ISMWBinding224 =
        sequenceDiagramWL72ISMWBinding223 /
        (2.5 + sequenceDiagramWL72ISMWBinding221 / 50),
      sequenceDiagramWL72ISMWBinding225 =
        sequenceDiagramWL72ISMWBinding218.append("g"),
      sequenceDiagramWL72ISMWBinding226 = `
  M ${sequenceDiagramWL72ISMWBinding219.x},${sequenceDiagramWL72ISMWBinding219.y + sequenceDiagramWL72ISMWBinding224}
  a ${sequenceDiagramWL72ISMWBinding223},${sequenceDiagramWL72ISMWBinding224} 0 0 0 ${sequenceDiagramWL72ISMWBinding221},0
  a ${sequenceDiagramWL72ISMWBinding223},${sequenceDiagramWL72ISMWBinding224} 0 0 0 -${sequenceDiagramWL72ISMWBinding221},0
  l 0,${sequenceDiagramWL72ISMWBinding222 - 2 * sequenceDiagramWL72ISMWBinding224}
  a ${sequenceDiagramWL72ISMWBinding223},${sequenceDiagramWL72ISMWBinding224} 0 0 0 ${sequenceDiagramWL72ISMWBinding221},0
  l 0,-${sequenceDiagramWL72ISMWBinding222 - 2 * sequenceDiagramWL72ISMWBinding224}
`;
    sequenceDiagramWL72ISMWBinding225
      .append("path")
      .attr("d", sequenceDiagramWL72ISMWBinding226)
      .attr("fill", "#eaeaea")
      .attr("stroke", "#000")
      .attr("stroke-width", 1)
      .attr("class", sequenceDiagramWL72ISMWBinding220);
    sequenceDiagramWL72ISMWInput45
      ? sequenceDiagramWL72ISMWBinding225.attr(
          "transform",
          `translate(${sequenceDiagramWL72ISMWBinding221 * 1.5}, ${sequenceDiagramWL72ISMWBinding219.height / 4 - 2 * sequenceDiagramWL72ISMWBinding224})`,
        )
      : sequenceDiagramWL72ISMWBinding225.attr(
          "transform",
          `translate(${sequenceDiagramWL72ISMWBinding221 * 1.5}, ${(sequenceDiagramWL72ISMWBinding219.height + sequenceDiagramWL72ISMWBinding224) / 4})`,
        );
    sequenceDiagramWL72ISMWInput43.rectData = sequenceDiagramWL72ISMWBinding219;
    sequenceDiagramWL72ISMWBinding44(
      sequenceDiagramWL72ISMWInput44,
      O(sequenceDiagramWL72ISMWInput43.description),
    )(
      sequenceDiagramWL72ISMWInput43.description,
      sequenceDiagramWL72ISMWBinding218,
      sequenceDiagramWL72ISMWBinding219.x,
      sequenceDiagramWL72ISMWBinding219.y +
        (sequenceDiagramWL72ISMWInput45
          ? (sequenceDiagramWL72ISMWBinding219.height +
              sequenceDiagramWL72ISMWBinding222) /
            4
          : (sequenceDiagramWL72ISMWBinding219.height +
              sequenceDiagramWL72ISMWBinding224) /
            2),
      sequenceDiagramWL72ISMWBinding219.width,
      sequenceDiagramWL72ISMWBinding219.height,
      {
        class: `actor ${sequenceDiagramWL72ISMWBinding13}`,
      },
      sequenceDiagramWL72ISMWInput44,
    );
    let sequenceDiagramWL72ISMWBinding227 =
      sequenceDiagramWL72ISMWBinding225.select("path:last-child");
    return (
      sequenceDiagramWL72ISMWBinding227.node() &&
        (sequenceDiagramWL72ISMWInput43.height =
          sequenceDiagramWL72ISMWBinding227.node().getBBox().height +
          (sequenceDiagramWL72ISMWInput44.sequence.labelBoxHeight ?? 0)),
      sequenceDiagramWL72ISMWInput43.height
    );
  }, "drawActorTypeDatabase");
  sequenceDiagramWL72ISMWBinding27 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput55,
    sequenceDiagramWL72ISMWInput56,
    sequenceDiagramWL72ISMWInput57,
    sequenceDiagramWL72ISMWInput58,
  ) {
    let sequenceDiagramWL72ISMWBinding245 = sequenceDiagramWL72ISMWInput58
        ? sequenceDiagramWL72ISMWInput56.stopy
        : sequenceDiagramWL72ISMWInput56.starty,
      sequenceDiagramWL72ISMWBinding246 =
        sequenceDiagramWL72ISMWInput56.x +
        sequenceDiagramWL72ISMWInput56.width / 2,
      sequenceDiagramWL72ISMWBinding247 =
        sequenceDiagramWL72ISMWBinding245 + 80,
      sequenceDiagramWL72ISMWBinding248 = sequenceDiagramWL72ISMWInput55
        .append("g")
        .lower();
    sequenceDiagramWL72ISMWInput58 ||
      (sequenceDiagramWL72ISMWBinding20++,
      sequenceDiagramWL72ISMWBinding248
        .append("line")
        .attr("id", "actor" + sequenceDiagramWL72ISMWBinding20)
        .attr("x1", sequenceDiagramWL72ISMWBinding246)
        .attr("y1", sequenceDiagramWL72ISMWBinding247)
        .attr("x2", sequenceDiagramWL72ISMWBinding246)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramWL72ISMWInput56.name),
      (sequenceDiagramWL72ISMWInput56.actorCnt =
        sequenceDiagramWL72ISMWBinding20));
    let sequenceDiagramWL72ISMWBinding249 =
        sequenceDiagramWL72ISMWInput55.append("g"),
      sequenceDiagramWL72ISMWBinding250 = sequenceDiagramWL72ISMWBinding14;
    sequenceDiagramWL72ISMWInput58
      ? (sequenceDiagramWL72ISMWBinding250 += ` ${sequenceDiagramWL72ISMWBinding12}`)
      : (sequenceDiagramWL72ISMWBinding250 += ` ${sequenceDiagramWL72ISMWBinding11}`);
    sequenceDiagramWL72ISMWBinding249.attr(
      "class",
      sequenceDiagramWL72ISMWBinding250,
    );
    sequenceDiagramWL72ISMWBinding249.attr(
      "name",
      sequenceDiagramWL72ISMWInput56.name,
    );
    let sequenceDiagramWL72ISMWBinding251 = o();
    return (
      (sequenceDiagramWL72ISMWBinding251.x = sequenceDiagramWL72ISMWInput56.x),
      (sequenceDiagramWL72ISMWBinding251.y = sequenceDiagramWL72ISMWBinding245),
      (sequenceDiagramWL72ISMWBinding251.fill = "#eaeaea"),
      (sequenceDiagramWL72ISMWBinding251.width =
        sequenceDiagramWL72ISMWInput56.width),
      (sequenceDiagramWL72ISMWBinding251.height =
        sequenceDiagramWL72ISMWInput56.height),
      (sequenceDiagramWL72ISMWBinding251.class = "actor"),
      sequenceDiagramWL72ISMWBinding249
        .append("line")
        .attr("id", "actor-man-torso" + sequenceDiagramWL72ISMWBinding20)
        .attr(
          "x1",
          sequenceDiagramWL72ISMWInput56.x +
            sequenceDiagramWL72ISMWInput56.width / 2 -
            75,
        )
        .attr("y1", sequenceDiagramWL72ISMWBinding245 + 10)
        .attr(
          "x2",
          sequenceDiagramWL72ISMWInput56.x +
            sequenceDiagramWL72ISMWInput56.width / 2 -
            15,
        )
        .attr("y2", sequenceDiagramWL72ISMWBinding245 + 10),
      sequenceDiagramWL72ISMWBinding249
        .append("line")
        .attr("id", "actor-man-arms" + sequenceDiagramWL72ISMWBinding20)
        .attr(
          "x1",
          sequenceDiagramWL72ISMWInput56.x +
            sequenceDiagramWL72ISMWInput56.width / 2 -
            75,
        )
        .attr("y1", sequenceDiagramWL72ISMWBinding245)
        .attr(
          "x2",
          sequenceDiagramWL72ISMWInput56.x +
            sequenceDiagramWL72ISMWInput56.width / 2 -
            75,
        )
        .attr("y2", sequenceDiagramWL72ISMWBinding245 + 20),
      sequenceDiagramWL72ISMWBinding249
        .append("circle")
        .attr(
          "cx",
          sequenceDiagramWL72ISMWInput56.x +
            sequenceDiagramWL72ISMWInput56.width / 2,
        )
        .attr("cy", sequenceDiagramWL72ISMWBinding245 + 10)
        .attr("r", 30),
      (sequenceDiagramWL72ISMWInput56.height =
        sequenceDiagramWL72ISMWBinding249.node().getBBox().height +
        (sequenceDiagramWL72ISMWInput57.sequence.labelBoxHeight ?? 0)),
      sequenceDiagramWL72ISMWBinding44(
        sequenceDiagramWL72ISMWInput57,
        O(sequenceDiagramWL72ISMWInput56.description),
      )(
        sequenceDiagramWL72ISMWInput56.description,
        sequenceDiagramWL72ISMWBinding249,
        sequenceDiagramWL72ISMWBinding251.x,
        sequenceDiagramWL72ISMWBinding251.y +
          (sequenceDiagramWL72ISMWInput58 ? 11 : 18),
        sequenceDiagramWL72ISMWBinding251.width,
        sequenceDiagramWL72ISMWBinding251.height,
        {
          class: `actor ${sequenceDiagramWL72ISMWBinding14}`,
        },
        sequenceDiagramWL72ISMWInput57,
      ),
      sequenceDiagramWL72ISMWBinding249.attr("transform", "translate(0,22)"),
      sequenceDiagramWL72ISMWInput56.height
    );
  }, "drawActorTypeBoundary");
  sequenceDiagramWL72ISMWBinding28 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput47,
    sequenceDiagramWL72ISMWInput48,
    sequenceDiagramWL72ISMWInput49,
    sequenceDiagramWL72ISMWInput50,
  ) {
    let sequenceDiagramWL72ISMWBinding228 = sequenceDiagramWL72ISMWInput50
        ? sequenceDiagramWL72ISMWInput48.stopy
        : sequenceDiagramWL72ISMWInput48.starty,
      sequenceDiagramWL72ISMWBinding229 =
        sequenceDiagramWL72ISMWInput48.x +
        sequenceDiagramWL72ISMWInput48.width / 2,
      sequenceDiagramWL72ISMWBinding230 =
        sequenceDiagramWL72ISMWBinding228 + 80,
      sequenceDiagramWL72ISMWBinding231 = sequenceDiagramWL72ISMWInput47
        .append("g")
        .lower();
    sequenceDiagramWL72ISMWInput50 ||
      (sequenceDiagramWL72ISMWBinding20++,
      sequenceDiagramWL72ISMWBinding231
        .append("line")
        .attr("id", "actor" + sequenceDiagramWL72ISMWBinding20)
        .attr("x1", sequenceDiagramWL72ISMWBinding229)
        .attr("y1", sequenceDiagramWL72ISMWBinding230)
        .attr("x2", sequenceDiagramWL72ISMWBinding229)
        .attr("y2", 2e3)
        .attr("class", "actor-line 200")
        .attr("stroke-width", "0.5px")
        .attr("stroke", "#999")
        .attr("name", sequenceDiagramWL72ISMWInput48.name),
      (sequenceDiagramWL72ISMWInput48.actorCnt =
        sequenceDiagramWL72ISMWBinding20));
    let sequenceDiagramWL72ISMWBinding232 =
        sequenceDiagramWL72ISMWInput47.append("g"),
      sequenceDiagramWL72ISMWBinding233 = sequenceDiagramWL72ISMWBinding14;
    sequenceDiagramWL72ISMWInput50
      ? (sequenceDiagramWL72ISMWBinding233 += ` ${sequenceDiagramWL72ISMWBinding12}`)
      : (sequenceDiagramWL72ISMWBinding233 += ` ${sequenceDiagramWL72ISMWBinding11}`);
    sequenceDiagramWL72ISMWBinding232.attr(
      "class",
      sequenceDiagramWL72ISMWBinding233,
    );
    sequenceDiagramWL72ISMWBinding232.attr(
      "name",
      sequenceDiagramWL72ISMWInput48.name,
    );
    let sequenceDiagramWL72ISMWBinding234 = o();
    sequenceDiagramWL72ISMWBinding234.x = sequenceDiagramWL72ISMWInput48.x;
    sequenceDiagramWL72ISMWBinding234.y = sequenceDiagramWL72ISMWBinding228;
    sequenceDiagramWL72ISMWBinding234.fill = "#eaeaea";
    sequenceDiagramWL72ISMWBinding234.width =
      sequenceDiagramWL72ISMWInput48.width;
    sequenceDiagramWL72ISMWBinding234.height =
      sequenceDiagramWL72ISMWInput48.height;
    sequenceDiagramWL72ISMWBinding234.class = "actor";
    sequenceDiagramWL72ISMWBinding234.rx = 3;
    sequenceDiagramWL72ISMWBinding234.ry = 3;
    sequenceDiagramWL72ISMWBinding232
      .append("line")
      .attr("id", "actor-man-torso" + sequenceDiagramWL72ISMWBinding20)
      .attr("x1", sequenceDiagramWL72ISMWBinding229)
      .attr("y1", sequenceDiagramWL72ISMWBinding228 + 25)
      .attr("x2", sequenceDiagramWL72ISMWBinding229)
      .attr("y2", sequenceDiagramWL72ISMWBinding228 + 45);
    sequenceDiagramWL72ISMWBinding232
      .append("line")
      .attr("id", "actor-man-arms" + sequenceDiagramWL72ISMWBinding20)
      .attr(
        "x1",
        sequenceDiagramWL72ISMWBinding229 -
          sequenceDiagramWL72ISMWBinding10 / 2,
      )
      .attr("y1", sequenceDiagramWL72ISMWBinding228 + 33)
      .attr(
        "x2",
        sequenceDiagramWL72ISMWBinding229 +
          sequenceDiagramWL72ISMWBinding10 / 2,
      )
      .attr("y2", sequenceDiagramWL72ISMWBinding228 + 33);
    sequenceDiagramWL72ISMWBinding232
      .append("line")
      .attr(
        "x1",
        sequenceDiagramWL72ISMWBinding229 -
          sequenceDiagramWL72ISMWBinding10 / 2,
      )
      .attr("y1", sequenceDiagramWL72ISMWBinding228 + 60)
      .attr("x2", sequenceDiagramWL72ISMWBinding229)
      .attr("y2", sequenceDiagramWL72ISMWBinding228 + 45);
    sequenceDiagramWL72ISMWBinding232
      .append("line")
      .attr("x1", sequenceDiagramWL72ISMWBinding229)
      .attr("y1", sequenceDiagramWL72ISMWBinding228 + 45)
      .attr(
        "x2",
        sequenceDiagramWL72ISMWBinding229 +
          sequenceDiagramWL72ISMWBinding10 / 2 -
          2,
      )
      .attr("y2", sequenceDiagramWL72ISMWBinding228 + 60);
    let sequenceDiagramWL72ISMWBinding235 =
      sequenceDiagramWL72ISMWBinding232.append("circle");
    return (
      sequenceDiagramWL72ISMWBinding235.attr(
        "cx",
        sequenceDiagramWL72ISMWInput48.x +
          sequenceDiagramWL72ISMWInput48.width / 2,
      ),
      sequenceDiagramWL72ISMWBinding235.attr(
        "cy",
        sequenceDiagramWL72ISMWBinding228 + 10,
      ),
      sequenceDiagramWL72ISMWBinding235.attr("r", 15),
      sequenceDiagramWL72ISMWBinding235.attr(
        "width",
        sequenceDiagramWL72ISMWInput48.width,
      ),
      sequenceDiagramWL72ISMWBinding235.attr(
        "height",
        sequenceDiagramWL72ISMWInput48.height,
      ),
      (sequenceDiagramWL72ISMWInput48.height = sequenceDiagramWL72ISMWBinding232
        .node()
        .getBBox().height),
      sequenceDiagramWL72ISMWBinding44(
        sequenceDiagramWL72ISMWInput49,
        O(sequenceDiagramWL72ISMWInput48.description),
      )(
        sequenceDiagramWL72ISMWInput48.description,
        sequenceDiagramWL72ISMWBinding232,
        sequenceDiagramWL72ISMWBinding234.x,
        sequenceDiagramWL72ISMWBinding234.y + 35,
        sequenceDiagramWL72ISMWBinding234.width,
        sequenceDiagramWL72ISMWBinding234.height,
        {
          class: `actor ${sequenceDiagramWL72ISMWBinding14}`,
        },
        sequenceDiagramWL72ISMWInput49,
      ),
      sequenceDiagramWL72ISMWInput48.height
    );
  }, "drawActorTypeActor");
  sequenceDiagramWL72ISMWBinding29 = defineFunctionName(async function (
    sequenceDiagramWL72ISMWInput169,
    sequenceDiagramWL72ISMWInput170,
    sequenceDiagramWL72ISMWInput171,
    sequenceDiagramWL72ISMWInput172,
  ) {
    switch (sequenceDiagramWL72ISMWInput170.type) {
      case "actor":
        return await sequenceDiagramWL72ISMWBinding28(
          sequenceDiagramWL72ISMWInput169,
          sequenceDiagramWL72ISMWInput170,
          sequenceDiagramWL72ISMWInput171,
          sequenceDiagramWL72ISMWInput172,
        );
      case "participant":
        return await be(
          sequenceDiagramWL72ISMWInput169,
          sequenceDiagramWL72ISMWInput170,
          sequenceDiagramWL72ISMWInput171,
          sequenceDiagramWL72ISMWInput172,
        );
      case "boundary":
        return await sequenceDiagramWL72ISMWBinding27(
          sequenceDiagramWL72ISMWInput169,
          sequenceDiagramWL72ISMWInput170,
          sequenceDiagramWL72ISMWInput171,
          sequenceDiagramWL72ISMWInput172,
        );
      case "control":
        return await sequenceDiagramWL72ISMWBinding24(
          sequenceDiagramWL72ISMWInput169,
          sequenceDiagramWL72ISMWInput170,
          sequenceDiagramWL72ISMWInput171,
          sequenceDiagramWL72ISMWInput172,
        );
      case "entity":
        return await sequenceDiagramWL72ISMWBinding25(
          sequenceDiagramWL72ISMWInput169,
          sequenceDiagramWL72ISMWInput170,
          sequenceDiagramWL72ISMWInput171,
          sequenceDiagramWL72ISMWInput172,
        );
      case "database":
        return await sequenceDiagramWL72ISMWBinding26(
          sequenceDiagramWL72ISMWInput169,
          sequenceDiagramWL72ISMWInput170,
          sequenceDiagramWL72ISMWInput171,
          sequenceDiagramWL72ISMWInput172,
        );
      case "collections":
        return await sequenceDiagramWL72ISMWBinding22(
          sequenceDiagramWL72ISMWInput169,
          sequenceDiagramWL72ISMWInput170,
          sequenceDiagramWL72ISMWInput171,
          sequenceDiagramWL72ISMWInput172,
        );
      case "queue":
        return await sequenceDiagramWL72ISMWBinding23(
          sequenceDiagramWL72ISMWInput169,
          sequenceDiagramWL72ISMWInput170,
          sequenceDiagramWL72ISMWInput171,
          sequenceDiagramWL72ISMWInput172,
        );
    }
  }, "drawActor");
  sequenceDiagramWL72ISMWBinding30 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput218,
    sequenceDiagramWL72ISMWInput219,
    sequenceDiagramWL72ISMWInput220,
  ) {
    let sequenceDiagramWL72ISMWBinding418 =
      sequenceDiagramWL72ISMWInput218.append("g");
    sequenceDiagramWL72ISMWBinding34(
      sequenceDiagramWL72ISMWBinding418,
      sequenceDiagramWL72ISMWInput219,
    );
    sequenceDiagramWL72ISMWInput219.name &&
      sequenceDiagramWL72ISMWBinding44(sequenceDiagramWL72ISMWInput220)(
        sequenceDiagramWL72ISMWInput219.name,
        sequenceDiagramWL72ISMWBinding418,
        sequenceDiagramWL72ISMWInput219.x,
        sequenceDiagramWL72ISMWInput219.y +
          sequenceDiagramWL72ISMWInput220.boxTextMargin +
          (sequenceDiagramWL72ISMWInput219.textMaxHeight || 0) / 2,
        sequenceDiagramWL72ISMWInput219.width,
        0,
        {
          class: "text",
        },
        sequenceDiagramWL72ISMWInput220,
      );
    sequenceDiagramWL72ISMWBinding418.lower();
  }, "drawBox");
  sequenceDiagramWL72ISMWBinding31 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput313,
  ) {
    return sequenceDiagramWL72ISMWInput313.append("g");
  }, "anchorElement");
  sequenceDiagramWL72ISMWBinding32 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput238,
    sequenceDiagramWL72ISMWInput239,
    sequenceDiagramWL72ISMWInput240,
    sequenceDiagramWL72ISMWInput241,
    sequenceDiagramWL72ISMWInput242,
  ) {
    let sequenceDiagramWL72ISMWBinding443 = o(),
      sequenceDiagramWL72ISMWBinding444 =
        sequenceDiagramWL72ISMWInput239.anchored;
    sequenceDiagramWL72ISMWBinding443.x =
      sequenceDiagramWL72ISMWInput239.startx;
    sequenceDiagramWL72ISMWBinding443.y =
      sequenceDiagramWL72ISMWInput239.starty;
    sequenceDiagramWL72ISMWBinding443.class =
      "activation" + (sequenceDiagramWL72ISMWInput242 % 3);
    sequenceDiagramWL72ISMWBinding443.width =
      sequenceDiagramWL72ISMWInput239.stopx -
      sequenceDiagramWL72ISMWInput239.startx;
    sequenceDiagramWL72ISMWBinding443.height =
      sequenceDiagramWL72ISMWInput240 - sequenceDiagramWL72ISMWInput239.starty;
    sequenceDiagramWL72ISMWBinding15(
      sequenceDiagramWL72ISMWBinding444,
      sequenceDiagramWL72ISMWBinding443,
    );
  }, "drawActivation");
  sequenceDiagramWL72ISMWBinding33 = defineFunctionName(async function (
    sequenceDiagramWL72ISMWInput29,
    sequenceDiagramWL72ISMWInput30,
    sequenceDiagramWL72ISMWInput31,
    sequenceDiagramWL72ISMWInput32,
  ) {
    let {
        boxMargin,
        boxTextMargin,
        labelBoxHeight,
        labelBoxWidth,
        messageFontFamily,
        messageFontSize,
        messageFontWeight,
      } = sequenceDiagramWL72ISMWInput32,
      sequenceDiagramWL72ISMWBinding186 =
        sequenceDiagramWL72ISMWInput29.append("g"),
      sequenceDiagramWL72ISMWBinding187 = defineFunctionName(function (
        sequenceDiagramWL72ISMWInput260,
        sequenceDiagramWL72ISMWInput261,
        sequenceDiagramWL72ISMWInput262,
        sequenceDiagramWL72ISMWInput263,
      ) {
        return sequenceDiagramWL72ISMWBinding186
          .append("line")
          .attr("x1", sequenceDiagramWL72ISMWInput260)
          .attr("y1", sequenceDiagramWL72ISMWInput261)
          .attr("x2", sequenceDiagramWL72ISMWInput262)
          .attr("y2", sequenceDiagramWL72ISMWInput263)
          .attr("class", "loopLine");
      }, "drawLoopLine");
    sequenceDiagramWL72ISMWBinding187(
      sequenceDiagramWL72ISMWInput30.startx,
      sequenceDiagramWL72ISMWInput30.starty,
      sequenceDiagramWL72ISMWInput30.stopx,
      sequenceDiagramWL72ISMWInput30.starty,
    );
    sequenceDiagramWL72ISMWBinding187(
      sequenceDiagramWL72ISMWInput30.stopx,
      sequenceDiagramWL72ISMWInput30.starty,
      sequenceDiagramWL72ISMWInput30.stopx,
      sequenceDiagramWL72ISMWInput30.stopy,
    );
    sequenceDiagramWL72ISMWBinding187(
      sequenceDiagramWL72ISMWInput30.startx,
      sequenceDiagramWL72ISMWInput30.stopy,
      sequenceDiagramWL72ISMWInput30.stopx,
      sequenceDiagramWL72ISMWInput30.stopy,
    );
    sequenceDiagramWL72ISMWBinding187(
      sequenceDiagramWL72ISMWInput30.startx,
      sequenceDiagramWL72ISMWInput30.starty,
      sequenceDiagramWL72ISMWInput30.startx,
      sequenceDiagramWL72ISMWInput30.stopy,
    );
    sequenceDiagramWL72ISMWInput30.sections !== undefined &&
      sequenceDiagramWL72ISMWInput30.sections.forEach(function (item) {
        sequenceDiagramWL72ISMWBinding187(
          sequenceDiagramWL72ISMWInput30.startx,
          item.y,
          sequenceDiagramWL72ISMWInput30.stopx,
          item.y,
        ).style("stroke-dasharray", "3, 3");
      });
    let sequenceDiagramWL72ISMWBinding188 = chunkTZMSLE5BS();
    sequenceDiagramWL72ISMWBinding188.text = sequenceDiagramWL72ISMWInput31;
    sequenceDiagramWL72ISMWBinding188.x = sequenceDiagramWL72ISMWInput30.startx;
    sequenceDiagramWL72ISMWBinding188.y = sequenceDiagramWL72ISMWInput30.starty;
    sequenceDiagramWL72ISMWBinding188.fontFamily = messageFontFamily;
    sequenceDiagramWL72ISMWBinding188.fontSize = messageFontSize;
    sequenceDiagramWL72ISMWBinding188.fontWeight = messageFontWeight;
    sequenceDiagramWL72ISMWBinding188.anchor = "middle";
    sequenceDiagramWL72ISMWBinding188.valign = "middle";
    sequenceDiagramWL72ISMWBinding188.tspan = false;
    sequenceDiagramWL72ISMWBinding188.width = labelBoxWidth || 50;
    sequenceDiagramWL72ISMWBinding188.height = labelBoxHeight || 20;
    sequenceDiagramWL72ISMWBinding188.textMargin = boxTextMargin;
    sequenceDiagramWL72ISMWBinding188.class = "labelText";
    sequenceDiagramWL72ISMWBinding19(
      sequenceDiagramWL72ISMWBinding186,
      sequenceDiagramWL72ISMWBinding188,
    );
    sequenceDiagramWL72ISMWBinding188 = sequenceDiagramWL72ISMWBinding42();
    sequenceDiagramWL72ISMWBinding188.text =
      sequenceDiagramWL72ISMWInput30.title;
    sequenceDiagramWL72ISMWBinding188.x =
      sequenceDiagramWL72ISMWInput30.startx +
      labelBoxWidth / 2 +
      (sequenceDiagramWL72ISMWInput30.stopx -
        sequenceDiagramWL72ISMWInput30.startx) /
        2;
    sequenceDiagramWL72ISMWBinding188.y =
      sequenceDiagramWL72ISMWInput30.starty + boxMargin + boxTextMargin;
    sequenceDiagramWL72ISMWBinding188.anchor = "middle";
    sequenceDiagramWL72ISMWBinding188.valign = "middle";
    sequenceDiagramWL72ISMWBinding188.textMargin = boxTextMargin;
    sequenceDiagramWL72ISMWBinding188.class = "loopText";
    sequenceDiagramWL72ISMWBinding188.fontFamily = messageFontFamily;
    sequenceDiagramWL72ISMWBinding188.fontSize = messageFontSize;
    sequenceDiagramWL72ISMWBinding188.fontWeight = messageFontWeight;
    sequenceDiagramWL72ISMWBinding188.wrap = true;
    let sequenceDiagramWL72ISMWBinding189 = O(
      sequenceDiagramWL72ISMWBinding188.text,
    )
      ? await _e(
          sequenceDiagramWL72ISMWBinding186,
          sequenceDiagramWL72ISMWBinding188,
          sequenceDiagramWL72ISMWInput30,
        )
      : sequenceDiagramWL72ISMWBinding18(
          sequenceDiagramWL72ISMWBinding186,
          sequenceDiagramWL72ISMWBinding188,
        );
    if (sequenceDiagramWL72ISMWInput30.sectionTitles !== undefined) {
      for (let [
        sequenceDiagramWL72ISMWBinding355,
        sequenceDiagramWL72ISMWBinding356,
      ] of Object.entries(sequenceDiagramWL72ISMWInput30.sectionTitles))
        if (sequenceDiagramWL72ISMWBinding356.message) {
          sequenceDiagramWL72ISMWBinding188.text =
            sequenceDiagramWL72ISMWBinding356.message;
          sequenceDiagramWL72ISMWBinding188.x =
            sequenceDiagramWL72ISMWInput30.startx +
            (sequenceDiagramWL72ISMWInput30.stopx -
              sequenceDiagramWL72ISMWInput30.startx) /
              2;
          sequenceDiagramWL72ISMWBinding188.y =
            sequenceDiagramWL72ISMWInput30.sections[
              sequenceDiagramWL72ISMWBinding355
            ].y +
            boxMargin +
            boxTextMargin;
          sequenceDiagramWL72ISMWBinding188.class = "loopText";
          sequenceDiagramWL72ISMWBinding188.anchor = "middle";
          sequenceDiagramWL72ISMWBinding188.valign = "middle";
          sequenceDiagramWL72ISMWBinding188.tspan = false;
          sequenceDiagramWL72ISMWBinding188.fontFamily = messageFontFamily;
          sequenceDiagramWL72ISMWBinding188.fontSize = messageFontSize;
          sequenceDiagramWL72ISMWBinding188.fontWeight = messageFontWeight;
          sequenceDiagramWL72ISMWBinding188.wrap =
            sequenceDiagramWL72ISMWInput30.wrap;
          O(sequenceDiagramWL72ISMWBinding188.text)
            ? ((sequenceDiagramWL72ISMWInput30.starty =
                sequenceDiagramWL72ISMWInput30.sections[
                  sequenceDiagramWL72ISMWBinding355
                ].y),
              await _e(
                sequenceDiagramWL72ISMWBinding186,
                sequenceDiagramWL72ISMWBinding188,
                sequenceDiagramWL72ISMWInput30,
              ))
            : sequenceDiagramWL72ISMWBinding18(
                sequenceDiagramWL72ISMWBinding186,
                sequenceDiagramWL72ISMWBinding188,
              );
          let sequenceDiagramWL72ISMWBinding359 = Math.round(
            sequenceDiagramWL72ISMWBinding189
              .map((item) => (item._groups || item)[0][0].getBBox().height)
              .reduce((accumulator, current) => accumulator + current),
          );
          sequenceDiagramWL72ISMWInput30.sections[
            sequenceDiagramWL72ISMWBinding355
          ].height +=
            sequenceDiagramWL72ISMWBinding359 - (boxMargin + boxTextMargin);
        }
    }
    return (
      (sequenceDiagramWL72ISMWInput30.height = Math.round(
        sequenceDiagramWL72ISMWInput30.stopy -
          sequenceDiagramWL72ISMWInput30.starty,
      )),
      sequenceDiagramWL72ISMWBinding186
    );
  }, "drawLoop");
  sequenceDiagramWL72ISMWBinding34 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput319,
    sequenceDiagramWL72ISMWInput320,
  ) {
    t(sequenceDiagramWL72ISMWInput319, sequenceDiagramWL72ISMWInput320);
  }, "drawBackgroundRect");
  sequenceDiagramWL72ISMWBinding35 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput8,
  ) {
    sequenceDiagramWL72ISMWInput8
      .append("defs")
      .append("symbol")
      .attr("id", "database")
      .attr("fill-rule", "evenodd")
      .attr("clip-rule", "evenodd")
      .append("path")
      .attr("transform", "scale(.5)")
      .attr(
        "d",
        "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z",
      );
  }, "insertDatabaseIcon");
  sequenceDiagramWL72ISMWBinding36 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput190,
  ) {
    sequenceDiagramWL72ISMWInput190
      .append("defs")
      .append("symbol")
      .attr("id", "computer")
      .attr("width", "24")
      .attr("height", "24")
      .append("path")
      .attr("transform", "scale(.5)")
      .attr(
        "d",
        "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z",
      );
  }, "insertComputerIcon");
  sequenceDiagramWL72ISMWBinding37 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput167,
  ) {
    sequenceDiagramWL72ISMWInput167
      .append("defs")
      .append("symbol")
      .attr("id", "clock")
      .attr("width", "24")
      .attr("height", "24")
      .append("path")
      .attr("transform", "scale(.5)")
      .attr(
        "d",
        "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z",
      );
  }, "insertClockIcon");
  sequenceDiagramWL72ISMWBinding38 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput206,
  ) {
    sequenceDiagramWL72ISMWInput206
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("refX", 7.9)
      .attr("refY", 5)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("markerWidth", 12)
      .attr("markerHeight", 12)
      .attr("orient", "auto-start-reverse")
      .append("path")
      .attr("d", "M -1 0 L 10 5 L 0 10 z");
  }, "insertArrowHead");
  sequenceDiagramWL72ISMWBinding39 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput225,
  ) {
    sequenceDiagramWL72ISMWInput225
      .append("defs")
      .append("marker")
      .attr("id", "filled-head")
      .attr("refX", 15.5)
      .attr("refY", 7)
      .attr("markerWidth", 20)
      .attr("markerHeight", 28)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "insertArrowFilledHead");
  sequenceDiagramWL72ISMWBinding40 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput213,
  ) {
    sequenceDiagramWL72ISMWInput213
      .append("defs")
      .append("marker")
      .attr("id", "sequencenumber")
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
  sequenceDiagramWL72ISMWBinding41 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput177,
  ) {
    sequenceDiagramWL72ISMWInput177
      .append("defs")
      .append("marker")
      .attr("id", "crosshead")
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
  sequenceDiagramWL72ISMWBinding42 = defineFunctionName(function () {
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
  sequenceDiagramWL72ISMWBinding43 = defineFunctionName(function () {
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
  sequenceDiagramWL72ISMWBinding44 = (function () {
    function sequenceDiagramWL72ISMWHelper10(
      sequenceDiagramWL72ISMWInput244,
      sequenceDiagramWL72ISMWInput245,
      sequenceDiagramWL72ISMWInput246,
      sequenceDiagramWL72ISMWInput247,
      sequenceDiagramWL72ISMWInput248,
      sequenceDiagramWL72ISMWInput249,
      sequenceDiagramWL72ISMWInput250,
    ) {
      sequenceDiagramWL72ISMWHelper14(
        sequenceDiagramWL72ISMWInput245
          .append("text")
          .attr(
            "x",
            sequenceDiagramWL72ISMWInput246 +
              sequenceDiagramWL72ISMWInput248 / 2,
          )
          .attr(
            "y",
            sequenceDiagramWL72ISMWInput247 +
              sequenceDiagramWL72ISMWInput249 / 2 +
              5,
          )
          .style("text-anchor", "middle")
          .text(sequenceDiagramWL72ISMWInput244),
        sequenceDiagramWL72ISMWInput250,
      );
    }
    defineFunctionName(sequenceDiagramWL72ISMWHelper10, "byText");
    function sequenceDiagramWL72ISMWHelper11(
      sequenceDiagramWL72ISMWInput121,
      sequenceDiagramWL72ISMWInput122,
      sequenceDiagramWL72ISMWInput123,
      sequenceDiagramWL72ISMWInput124,
      sequenceDiagramWL72ISMWInput125,
      sequenceDiagramWL72ISMWInput126,
      sequenceDiagramWL72ISMWInput127,
      sequenceDiagramWL72ISMWInput128,
    ) {
      let { actorFontSize, actorFontFamily, actorFontWeight } =
          sequenceDiagramWL72ISMWInput128,
        [sequenceDiagramWL72ISMWBinding352, sequenceDiagramWL72ISMWBinding353] =
          chunkS3R3BYOJP(actorFontSize),
        sequenceDiagramWL72ISMWBinding354 =
          sequenceDiagramWL72ISMWInput121.split(s.lineBreakRegex);
      for (
        let sequenceDiagramWL72ISMWBinding363 = 0;
        sequenceDiagramWL72ISMWBinding363 <
        sequenceDiagramWL72ISMWBinding354.length;
        sequenceDiagramWL72ISMWBinding363++
      ) {
        let sequenceDiagramWL72ISMWBinding368 =
            sequenceDiagramWL72ISMWBinding363 *
              sequenceDiagramWL72ISMWBinding352 -
            (sequenceDiagramWL72ISMWBinding352 *
              (sequenceDiagramWL72ISMWBinding354.length - 1)) /
              2,
          sequenceDiagramWL72ISMWBinding369 = sequenceDiagramWL72ISMWInput122
            .append("text")
            .attr(
              "x",
              sequenceDiagramWL72ISMWInput123 +
                sequenceDiagramWL72ISMWInput125 / 2,
            )
            .attr("y", sequenceDiagramWL72ISMWInput124)
            .style("text-anchor", "middle")
            .style("font-size", sequenceDiagramWL72ISMWBinding353)
            .style("font-weight", actorFontWeight)
            .style("font-family", actorFontFamily);
        sequenceDiagramWL72ISMWBinding369
          .append("tspan")
          .attr(
            "x",
            sequenceDiagramWL72ISMWInput123 +
              sequenceDiagramWL72ISMWInput125 / 2,
          )
          .attr("dy", sequenceDiagramWL72ISMWBinding368)
          .text(
            sequenceDiagramWL72ISMWBinding354[
              sequenceDiagramWL72ISMWBinding363
            ],
          );
        sequenceDiagramWL72ISMWBinding369
          .attr(
            "y",
            sequenceDiagramWL72ISMWInput124 +
              sequenceDiagramWL72ISMWInput126 / 2,
          )
          .attr("dominant-baseline", "central")
          .attr("alignment-baseline", "central");
        sequenceDiagramWL72ISMWHelper14(
          sequenceDiagramWL72ISMWBinding369,
          sequenceDiagramWL72ISMWInput127,
        );
      }
    }
    defineFunctionName(sequenceDiagramWL72ISMWHelper11, "byTspan");
    function sequenceDiagramWL72ISMWHelper12(
      sequenceDiagramWL72ISMWInput151,
      sequenceDiagramWL72ISMWInput152,
      sequenceDiagramWL72ISMWInput153,
      sequenceDiagramWL72ISMWInput154,
      sequenceDiagramWL72ISMWInput155,
      sequenceDiagramWL72ISMWInput156,
      sequenceDiagramWL72ISMWInput157,
      sequenceDiagramWL72ISMWInput158,
    ) {
      let sequenceDiagramWL72ISMWBinding370 =
          sequenceDiagramWL72ISMWInput152.append("switch"),
        sequenceDiagramWL72ISMWBinding371 = sequenceDiagramWL72ISMWBinding370
          .append("foreignObject")
          .attr("x", sequenceDiagramWL72ISMWInput153)
          .attr("y", sequenceDiagramWL72ISMWInput154)
          .attr("width", sequenceDiagramWL72ISMWInput155)
          .attr("height", sequenceDiagramWL72ISMWInput156)
          .append("xhtml:div")
          .style("display", "table")
          .style("height", "100%")
          .style("width", "100%");
      sequenceDiagramWL72ISMWBinding371
        .append("div")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(sequenceDiagramWL72ISMWInput151);
      sequenceDiagramWL72ISMWHelper11(
        sequenceDiagramWL72ISMWInput151,
        sequenceDiagramWL72ISMWBinding370,
        sequenceDiagramWL72ISMWInput153,
        sequenceDiagramWL72ISMWInput154,
        sequenceDiagramWL72ISMWInput155,
        sequenceDiagramWL72ISMWInput156,
        sequenceDiagramWL72ISMWInput157,
        sequenceDiagramWL72ISMWInput158,
      );
      sequenceDiagramWL72ISMWHelper14(
        sequenceDiagramWL72ISMWBinding371,
        sequenceDiagramWL72ISMWInput157,
      );
    }
    defineFunctionName(sequenceDiagramWL72ISMWHelper12, "byFo");
    async function sequenceDiagramWL72ISMWHelper13(
      sequenceDiagramWL72ISMWInput143,
      sequenceDiagramWL72ISMWInput144,
      sequenceDiagramWL72ISMWInput145,
      sequenceDiagramWL72ISMWInput146,
      sequenceDiagramWL72ISMWInput147,
      sequenceDiagramWL72ISMWInput148,
      sequenceDiagramWL72ISMWInput149,
      sequenceDiagramWL72ISMWInput150,
    ) {
      let sequenceDiagramWL72ISMWBinding365 = await i(
          sequenceDiagramWL72ISMWInput143,
          y(),
        ),
        sequenceDiagramWL72ISMWBinding366 =
          sequenceDiagramWL72ISMWInput144.append("switch"),
        sequenceDiagramWL72ISMWBinding367 = sequenceDiagramWL72ISMWBinding366
          .append("foreignObject")
          .attr(
            "x",
            sequenceDiagramWL72ISMWInput145 +
              sequenceDiagramWL72ISMWInput147 / 2 -
              sequenceDiagramWL72ISMWBinding365.width / 2,
          )
          .attr(
            "y",
            sequenceDiagramWL72ISMWInput146 +
              sequenceDiagramWL72ISMWInput148 / 2 -
              sequenceDiagramWL72ISMWBinding365.height / 2,
          )
          .attr("width", sequenceDiagramWL72ISMWBinding365.width)
          .attr("height", sequenceDiagramWL72ISMWBinding365.height)
          .append("xhtml:div")
          .style("height", "100%")
          .style("width", "100%");
      sequenceDiagramWL72ISMWBinding367
        .append("div")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .html(await P(sequenceDiagramWL72ISMWInput143, y()));
      sequenceDiagramWL72ISMWHelper11(
        sequenceDiagramWL72ISMWInput143,
        sequenceDiagramWL72ISMWBinding366,
        sequenceDiagramWL72ISMWInput145,
        sequenceDiagramWL72ISMWInput146,
        sequenceDiagramWL72ISMWInput147,
        sequenceDiagramWL72ISMWInput148,
        sequenceDiagramWL72ISMWInput149,
        sequenceDiagramWL72ISMWInput150,
      );
      sequenceDiagramWL72ISMWHelper14(
        sequenceDiagramWL72ISMWBinding367,
        sequenceDiagramWL72ISMWInput149,
      );
    }
    defineFunctionName(sequenceDiagramWL72ISMWHelper13, "byKatex");
    function sequenceDiagramWL72ISMWHelper14(
      sequenceDiagramWL72ISMWInput294,
      sequenceDiagramWL72ISMWInput295,
    ) {
      for (let sequenceDiagramWL72ISMWBinding500 in sequenceDiagramWL72ISMWInput295)
        sequenceDiagramWL72ISMWInput295.hasOwnProperty(
          sequenceDiagramWL72ISMWBinding500,
        ) &&
          sequenceDiagramWL72ISMWInput294.attr(
            sequenceDiagramWL72ISMWBinding500,
            sequenceDiagramWL72ISMWInput295[sequenceDiagramWL72ISMWBinding500],
          );
    }
    return (
      defineFunctionName(sequenceDiagramWL72ISMWHelper14, "_setTextAttrs"),
      function (
        sequenceDiagramWL72ISMWInput265,
        sequenceDiagramWL72ISMWInput266 = false,
      ) {
        return sequenceDiagramWL72ISMWInput266
          ? sequenceDiagramWL72ISMWHelper13
          : sequenceDiagramWL72ISMWInput265.textPlacement === "fo"
            ? sequenceDiagramWL72ISMWHelper12
            : sequenceDiagramWL72ISMWInput265.textPlacement === "old"
              ? sequenceDiagramWL72ISMWHelper10
              : sequenceDiagramWL72ISMWHelper11;
      }
    );
  })();
  sequenceDiagramWL72ISMWBinding45 = (function () {
    function sequenceDiagramWL72ISMWHelper15(
      sequenceDiagramWL72ISMWInput253,
      sequenceDiagramWL72ISMWInput254,
      sequenceDiagramWL72ISMWInput255,
      sequenceDiagramWL72ISMWInput256,
      sequenceDiagramWL72ISMWInput257,
      sequenceDiagramWL72ISMWInput258,
      sequenceDiagramWL72ISMWInput259,
    ) {
      sequenceDiagramWL72ISMWHelper18(
        sequenceDiagramWL72ISMWInput254
          .append("text")
          .attr("x", sequenceDiagramWL72ISMWInput255)
          .attr("y", sequenceDiagramWL72ISMWInput256)
          .style("text-anchor", "start")
          .text(sequenceDiagramWL72ISMWInput253),
        sequenceDiagramWL72ISMWInput259,
      );
    }
    defineFunctionName(sequenceDiagramWL72ISMWHelper15, "byText");
    function sequenceDiagramWL72ISMWHelper16(
      sequenceDiagramWL72ISMWInput130,
      sequenceDiagramWL72ISMWInput131,
      sequenceDiagramWL72ISMWInput132,
      sequenceDiagramWL72ISMWInput133,
      sequenceDiagramWL72ISMWInput134,
      sequenceDiagramWL72ISMWInput135,
      sequenceDiagramWL72ISMWInput136,
      sequenceDiagramWL72ISMWInput137,
    ) {
      let { actorFontSize, actorFontFamily, actorFontWeight } =
          sequenceDiagramWL72ISMWInput137,
        sequenceDiagramWL72ISMWBinding358 =
          sequenceDiagramWL72ISMWInput130.split(s.lineBreakRegex);
      for (
        let sequenceDiagramWL72ISMWBinding374 = 0;
        sequenceDiagramWL72ISMWBinding374 <
        sequenceDiagramWL72ISMWBinding358.length;
        sequenceDiagramWL72ISMWBinding374++
      ) {
        let sequenceDiagramWL72ISMWBinding380 =
            sequenceDiagramWL72ISMWBinding374 * actorFontSize -
            (actorFontSize * (sequenceDiagramWL72ISMWBinding358.length - 1)) /
              2,
          sequenceDiagramWL72ISMWBinding381 = sequenceDiagramWL72ISMWInput131
            .append("text")
            .attr("x", sequenceDiagramWL72ISMWInput132)
            .attr("y", sequenceDiagramWL72ISMWInput133)
            .style("text-anchor", "start")
            .style("font-size", actorFontSize)
            .style("font-weight", actorFontWeight)
            .style("font-family", actorFontFamily);
        sequenceDiagramWL72ISMWBinding381
          .append("tspan")
          .attr("x", sequenceDiagramWL72ISMWInput132)
          .attr("dy", sequenceDiagramWL72ISMWBinding380)
          .text(
            sequenceDiagramWL72ISMWBinding358[
              sequenceDiagramWL72ISMWBinding374
            ],
          );
        sequenceDiagramWL72ISMWBinding381
          .attr(
            "y",
            sequenceDiagramWL72ISMWInput133 +
              sequenceDiagramWL72ISMWInput135 / 2,
          )
          .attr("dominant-baseline", "central")
          .attr("alignment-baseline", "central");
        sequenceDiagramWL72ISMWHelper18(
          sequenceDiagramWL72ISMWBinding381,
          sequenceDiagramWL72ISMWInput136,
        );
      }
    }
    defineFunctionName(sequenceDiagramWL72ISMWHelper16, "byTspan");
    function sequenceDiagramWL72ISMWHelper17(
      sequenceDiagramWL72ISMWInput159,
      sequenceDiagramWL72ISMWInput160,
      sequenceDiagramWL72ISMWInput161,
      sequenceDiagramWL72ISMWInput162,
      sequenceDiagramWL72ISMWInput163,
      sequenceDiagramWL72ISMWInput164,
      sequenceDiagramWL72ISMWInput165,
      sequenceDiagramWL72ISMWInput166,
    ) {
      let sequenceDiagramWL72ISMWBinding372 =
          sequenceDiagramWL72ISMWInput160.append("switch"),
        sequenceDiagramWL72ISMWBinding373 = sequenceDiagramWL72ISMWBinding372
          .append("foreignObject")
          .attr("x", sequenceDiagramWL72ISMWInput161)
          .attr("y", sequenceDiagramWL72ISMWInput162)
          .attr("width", sequenceDiagramWL72ISMWInput163)
          .attr("height", sequenceDiagramWL72ISMWInput164)
          .append("xhtml:div")
          .style("display", "table")
          .style("height", "100%")
          .style("width", "100%");
      sequenceDiagramWL72ISMWBinding373
        .append("div")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(sequenceDiagramWL72ISMWInput159);
      sequenceDiagramWL72ISMWHelper16(
        sequenceDiagramWL72ISMWInput159,
        sequenceDiagramWL72ISMWBinding372,
        sequenceDiagramWL72ISMWInput161,
        sequenceDiagramWL72ISMWInput162,
        sequenceDiagramWL72ISMWInput163,
        sequenceDiagramWL72ISMWInput164,
        sequenceDiagramWL72ISMWInput165,
        sequenceDiagramWL72ISMWInput166,
      );
      sequenceDiagramWL72ISMWHelper18(
        sequenceDiagramWL72ISMWBinding373,
        sequenceDiagramWL72ISMWInput165,
      );
    }
    defineFunctionName(sequenceDiagramWL72ISMWHelper17, "byFo");
    function sequenceDiagramWL72ISMWHelper18(
      sequenceDiagramWL72ISMWInput296,
      sequenceDiagramWL72ISMWInput297,
    ) {
      for (let sequenceDiagramWL72ISMWBinding501 in sequenceDiagramWL72ISMWInput297)
        sequenceDiagramWL72ISMWInput297.hasOwnProperty(
          sequenceDiagramWL72ISMWBinding501,
        ) &&
          sequenceDiagramWL72ISMWInput296.attr(
            sequenceDiagramWL72ISMWBinding501,
            sequenceDiagramWL72ISMWInput297[sequenceDiagramWL72ISMWBinding501],
          );
    }
    return (
      defineFunctionName(sequenceDiagramWL72ISMWHelper18, "_setTextAttrs"),
      function (sequenceDiagramWL72ISMWInput272) {
        return sequenceDiagramWL72ISMWInput272.textPlacement === "fo"
          ? sequenceDiagramWL72ISMWHelper17
          : sequenceDiagramWL72ISMWInput272.textPlacement === "old"
            ? sequenceDiagramWL72ISMWHelper15
            : sequenceDiagramWL72ISMWHelper16;
      }
    );
  })();
  sequenceDiagramWL72ISMWBinding46 = {
    drawRect: sequenceDiagramWL72ISMWBinding15,
    drawText: sequenceDiagramWL72ISMWBinding18,
    drawLabel: sequenceDiagramWL72ISMWBinding19,
    drawActor: sequenceDiagramWL72ISMWBinding29,
    drawBox: sequenceDiagramWL72ISMWBinding30,
    drawPopup: sequenceDiagramWL72ISMWBinding16,
    anchorElement: sequenceDiagramWL72ISMWBinding31,
    drawActivation: sequenceDiagramWL72ISMWBinding32,
    drawLoop: sequenceDiagramWL72ISMWBinding33,
    drawBackgroundRect: sequenceDiagramWL72ISMWBinding34,
    insertArrowHead: sequenceDiagramWL72ISMWBinding38,
    insertArrowFilledHead: sequenceDiagramWL72ISMWBinding39,
    insertSequenceNumber: sequenceDiagramWL72ISMWBinding40,
    insertArrowCrossHead: sequenceDiagramWL72ISMWBinding41,
    insertDatabaseIcon: sequenceDiagramWL72ISMWBinding35,
    insertComputerIcon: sequenceDiagramWL72ISMWBinding36,
    insertClockIcon: sequenceDiagramWL72ISMWBinding37,
    getTextObj: sequenceDiagramWL72ISMWBinding42,
    getNoteRect: sequenceDiagramWL72ISMWBinding43,
    fixLifeLineHeights: sequenceDiagramWL72ISMWBinding21,
    sanitizeUrl: sequenceDiagramWL72ISMWBinding1.sanitizeUrl,
  };
  sequenceDiagramWL72ISMWBinding47 = {};
  sequenceDiagramWL72ISMWBinding48 = {
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
      addBox: defineFunctionName(function (sequenceDiagramWL72ISMWInput308) {
        this.boxes.push(sequenceDiagramWL72ISMWInput308);
      }, "addBox"),
      addActor: defineFunctionName(function (sequenceDiagramWL72ISMWInput307) {
        this.actors.push(sequenceDiagramWL72ISMWInput307);
      }, "addActor"),
      addLoop: defineFunctionName(function (sequenceDiagramWL72ISMWInput309) {
        this.loops.push(sequenceDiagramWL72ISMWInput309);
      }, "addLoop"),
      addMessage: defineFunctionName(function (
        sequenceDiagramWL72ISMWInput306,
      ) {
        this.messages.push(sequenceDiagramWL72ISMWInput306);
      }, "addMessage"),
      addNote: defineFunctionName(function (sequenceDiagramWL72ISMWInput310) {
        this.notes.push(sequenceDiagramWL72ISMWInput310);
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
      sequenceDiagramWL72ISMWBinding56(_chunkABZYJK2DB());
    }, "init"),
    updateVal: defineFunctionName(function (
      sequenceDiagramWL72ISMWInput298,
      sequenceDiagramWL72ISMWInput299,
      sequenceDiagramWL72ISMWInput300,
      sequenceDiagramWL72ISMWInput301,
    ) {
      sequenceDiagramWL72ISMWInput298[sequenceDiagramWL72ISMWInput299] ===
      undefined
        ? (sequenceDiagramWL72ISMWInput298[sequenceDiagramWL72ISMWInput299] =
            sequenceDiagramWL72ISMWInput300)
        : (sequenceDiagramWL72ISMWInput298[sequenceDiagramWL72ISMWInput299] =
            sequenceDiagramWL72ISMWInput301(
              sequenceDiagramWL72ISMWInput300,
              sequenceDiagramWL72ISMWInput298[sequenceDiagramWL72ISMWInput299],
            ));
    }, "updateVal"),
    updateBounds: defineFunctionName(function (
      sequenceDiagramWL72ISMWInput103,
      sequenceDiagramWL72ISMWInput104,
      sequenceDiagramWL72ISMWInput105,
      sequenceDiagramWL72ISMWInput106,
    ) {
      let sequenceDiagramWL72ISMWBinding340 = this,
        sequenceDiagramWL72ISMWBinding341 = 0;
      function sequenceDiagramWL72ISMWHelper21(
        sequenceDiagramWL72ISMWInput129,
      ) {
        return defineFunctionName(function (sequenceDiagramWL72ISMWInput138) {
          sequenceDiagramWL72ISMWBinding341++;
          let sequenceDiagramWL72ISMWBinding362 =
            sequenceDiagramWL72ISMWBinding340.sequenceItems.length -
            sequenceDiagramWL72ISMWBinding341 +
            1;
          sequenceDiagramWL72ISMWBinding340.updateVal(
            sequenceDiagramWL72ISMWInput138,
            "starty",
            sequenceDiagramWL72ISMWInput104 -
              sequenceDiagramWL72ISMWBinding362 *
                sequenceDiagramWL72ISMWBinding47.boxMargin,
            Math.min,
          );
          sequenceDiagramWL72ISMWBinding340.updateVal(
            sequenceDiagramWL72ISMWInput138,
            "stopy",
            sequenceDiagramWL72ISMWInput106 +
              sequenceDiagramWL72ISMWBinding362 *
                sequenceDiagramWL72ISMWBinding47.boxMargin,
            Math.max,
          );
          sequenceDiagramWL72ISMWBinding340.updateVal(
            sequenceDiagramWL72ISMWBinding48.data,
            "startx",
            sequenceDiagramWL72ISMWInput103 -
              sequenceDiagramWL72ISMWBinding362 *
                sequenceDiagramWL72ISMWBinding47.boxMargin,
            Math.min,
          );
          sequenceDiagramWL72ISMWBinding340.updateVal(
            sequenceDiagramWL72ISMWBinding48.data,
            "stopx",
            sequenceDiagramWL72ISMWInput105 +
              sequenceDiagramWL72ISMWBinding362 *
                sequenceDiagramWL72ISMWBinding47.boxMargin,
            Math.max,
          );
          sequenceDiagramWL72ISMWInput129 !== "activation" &&
            (sequenceDiagramWL72ISMWBinding340.updateVal(
              sequenceDiagramWL72ISMWInput138,
              "startx",
              sequenceDiagramWL72ISMWInput103 -
                sequenceDiagramWL72ISMWBinding362 *
                  sequenceDiagramWL72ISMWBinding47.boxMargin,
              Math.min,
            ),
            sequenceDiagramWL72ISMWBinding340.updateVal(
              sequenceDiagramWL72ISMWInput138,
              "stopx",
              sequenceDiagramWL72ISMWInput105 +
                sequenceDiagramWL72ISMWBinding362 *
                  sequenceDiagramWL72ISMWBinding47.boxMargin,
              Math.max,
            ),
            sequenceDiagramWL72ISMWBinding340.updateVal(
              sequenceDiagramWL72ISMWBinding48.data,
              "starty",
              sequenceDiagramWL72ISMWInput104 -
                sequenceDiagramWL72ISMWBinding362 *
                  sequenceDiagramWL72ISMWBinding47.boxMargin,
              Math.min,
            ),
            sequenceDiagramWL72ISMWBinding340.updateVal(
              sequenceDiagramWL72ISMWBinding48.data,
              "stopy",
              sequenceDiagramWL72ISMWInput106 +
                sequenceDiagramWL72ISMWBinding362 *
                  sequenceDiagramWL72ISMWBinding47.boxMargin,
              Math.max,
            ));
        }, "updateItemBounds");
      }
      defineFunctionName(sequenceDiagramWL72ISMWHelper21, "updateFn");
      this.sequenceItems.forEach(sequenceDiagramWL72ISMWHelper21());
      this.activations.forEach(sequenceDiagramWL72ISMWHelper21("activation"));
    }, "updateBounds"),
    insert: defineFunctionName(function (
      sequenceDiagramWL72ISMWInput191,
      sequenceDiagramWL72ISMWInput192,
      sequenceDiagramWL72ISMWInput193,
      sequenceDiagramWL72ISMWInput194,
    ) {
      let sequenceDiagramWL72ISMWBinding403 = s.getMin(
          sequenceDiagramWL72ISMWInput191,
          sequenceDiagramWL72ISMWInput193,
        ),
        sequenceDiagramWL72ISMWBinding404 = s.getMax(
          sequenceDiagramWL72ISMWInput191,
          sequenceDiagramWL72ISMWInput193,
        ),
        sequenceDiagramWL72ISMWBinding405 = s.getMin(
          sequenceDiagramWL72ISMWInput192,
          sequenceDiagramWL72ISMWInput194,
        ),
        sequenceDiagramWL72ISMWBinding406 = s.getMax(
          sequenceDiagramWL72ISMWInput192,
          sequenceDiagramWL72ISMWInput194,
        );
      this.updateVal(
        sequenceDiagramWL72ISMWBinding48.data,
        "startx",
        sequenceDiagramWL72ISMWBinding403,
        Math.min,
      );
      this.updateVal(
        sequenceDiagramWL72ISMWBinding48.data,
        "starty",
        sequenceDiagramWL72ISMWBinding405,
        Math.min,
      );
      this.updateVal(
        sequenceDiagramWL72ISMWBinding48.data,
        "stopx",
        sequenceDiagramWL72ISMWBinding404,
        Math.max,
      );
      this.updateVal(
        sequenceDiagramWL72ISMWBinding48.data,
        "stopy",
        sequenceDiagramWL72ISMWBinding406,
        Math.max,
      );
      this.updateBounds(
        sequenceDiagramWL72ISMWBinding403,
        sequenceDiagramWL72ISMWBinding405,
        sequenceDiagramWL72ISMWBinding404,
        sequenceDiagramWL72ISMWBinding406,
      );
    }, "insert"),
    newActivation: defineFunctionName(function (
      sequenceDiagramWL72ISMWInput196,
      sequenceDiagramWL72ISMWInput197,
      sequenceDiagramWL72ISMWInput198,
    ) {
      let sequenceDiagramWL72ISMWBinding408 =
          sequenceDiagramWL72ISMWInput198.get(
            sequenceDiagramWL72ISMWInput196.from,
          ),
        sequenceDiagramWL72ISMWBinding409 =
          sequenceDiagramWL72ISMWBinding57(sequenceDiagramWL72ISMWInput196.from)
            .length || 0,
        sequenceDiagramWL72ISMWBinding410 =
          sequenceDiagramWL72ISMWBinding408.x +
          sequenceDiagramWL72ISMWBinding408.width / 2 +
          ((sequenceDiagramWL72ISMWBinding409 - 1) *
            sequenceDiagramWL72ISMWBinding47.activationWidth) /
            2;
      this.activations.push({
        startx: sequenceDiagramWL72ISMWBinding410,
        starty: this.verticalPos + 2,
        stopx:
          sequenceDiagramWL72ISMWBinding410 +
          sequenceDiagramWL72ISMWBinding47.activationWidth,
        stopy: undefined,
        actor: sequenceDiagramWL72ISMWInput196.from,
        anchored: sequenceDiagramWL72ISMWBinding46.anchorElement(
          sequenceDiagramWL72ISMWInput197,
        ),
      });
    }, "newActivation"),
    endActivation: defineFunctionName(function (
      sequenceDiagramWL72ISMWInput267,
    ) {
      let sequenceDiagramWL72ISMWBinding455 = this.activations
        .map(function (item) {
          return item.actor;
        })
        .lastIndexOf(sequenceDiagramWL72ISMWInput267.from);
      return this.activations.splice(sequenceDiagramWL72ISMWBinding455, 1)[0];
    }, "endActivation"),
    createLoop: defineFunctionName(function (
      sequenceDiagramWL72ISMWInput214 = {
        message: undefined,
        wrap: false,
        width: undefined,
      },
      sequenceDiagramWL72ISMWInput215,
    ) {
      return {
        startx: undefined,
        starty: this.verticalPos,
        stopx: undefined,
        stopy: undefined,
        title: sequenceDiagramWL72ISMWInput214.message,
        wrap: sequenceDiagramWL72ISMWInput214.wrap,
        width: sequenceDiagramWL72ISMWInput214.width,
        height: 0,
        fill: sequenceDiagramWL72ISMWInput215,
      };
    }, "createLoop"),
    newLoop: defineFunctionName(function (
      sequenceDiagramWL72ISMWInput273 = {
        message: undefined,
        wrap: false,
        width: undefined,
      },
      sequenceDiagramWL72ISMWInput274,
    ) {
      this.sequenceItems.push(
        this.createLoop(
          sequenceDiagramWL72ISMWInput273,
          sequenceDiagramWL72ISMWInput274,
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
      sequenceDiagramWL72ISMWInput230,
    ) {
      let sequenceDiagramWL72ISMWBinding431 = this.sequenceItems.pop();
      sequenceDiagramWL72ISMWBinding431.sections =
        sequenceDiagramWL72ISMWBinding431.sections || [];
      sequenceDiagramWL72ISMWBinding431.sectionTitles =
        sequenceDiagramWL72ISMWBinding431.sectionTitles || [];
      sequenceDiagramWL72ISMWBinding431.sections.push({
        y: sequenceDiagramWL72ISMWBinding48.getVerticalPos(),
        height: 0,
      });
      sequenceDiagramWL72ISMWBinding431.sectionTitles.push(
        sequenceDiagramWL72ISMWInput230,
      );
      this.sequenceItems.push(sequenceDiagramWL72ISMWBinding431);
    }, "addSectionToLoop"),
    saveVerticalPos: defineFunctionName(function () {
      this.isLoopOverlap() && (this.savedVerticalPos = this.verticalPos);
    }, "saveVerticalPos"),
    resetVerticalPos: defineFunctionName(function () {
      this.isLoopOverlap() && (this.verticalPos = this.savedVerticalPos);
    }, "resetVerticalPos"),
    bumpVerticalPos: defineFunctionName(function (
      sequenceDiagramWL72ISMWInput279,
    ) {
      this.verticalPos += sequenceDiagramWL72ISMWInput279;
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
  sequenceDiagramWL72ISMWBinding49 = defineFunctionName(async function (
    sequenceDiagramWL72ISMWInput97,
    sequenceDiagramWL72ISMWInput98,
  ) {
    sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
      sequenceDiagramWL72ISMWBinding47.boxMargin,
    );
    sequenceDiagramWL72ISMWInput98.height =
      sequenceDiagramWL72ISMWBinding47.boxMargin;
    sequenceDiagramWL72ISMWInput98.starty =
      sequenceDiagramWL72ISMWBinding48.getVerticalPos();
    let sequenceDiagramWL72ISMWBinding317 = o();
    sequenceDiagramWL72ISMWBinding317.x = sequenceDiagramWL72ISMWInput98.startx;
    sequenceDiagramWL72ISMWBinding317.y = sequenceDiagramWL72ISMWInput98.starty;
    sequenceDiagramWL72ISMWBinding317.width =
      sequenceDiagramWL72ISMWInput98.width ||
      sequenceDiagramWL72ISMWBinding47.width;
    sequenceDiagramWL72ISMWBinding317.class = "note";
    let sequenceDiagramWL72ISMWBinding318 =
        sequenceDiagramWL72ISMWInput97.append("g"),
      sequenceDiagramWL72ISMWBinding319 =
        sequenceDiagramWL72ISMWBinding46.drawRect(
          sequenceDiagramWL72ISMWBinding318,
          sequenceDiagramWL72ISMWBinding317,
        ),
      sequenceDiagramWL72ISMWBinding320 = chunkTZMSLE5BS();
    sequenceDiagramWL72ISMWBinding320.x = sequenceDiagramWL72ISMWInput98.startx;
    sequenceDiagramWL72ISMWBinding320.y = sequenceDiagramWL72ISMWInput98.starty;
    sequenceDiagramWL72ISMWBinding320.width =
      sequenceDiagramWL72ISMWBinding317.width;
    sequenceDiagramWL72ISMWBinding320.dy = "1em";
    sequenceDiagramWL72ISMWBinding320.text =
      sequenceDiagramWL72ISMWInput98.message;
    sequenceDiagramWL72ISMWBinding320.class = "noteText";
    sequenceDiagramWL72ISMWBinding320.fontFamily =
      sequenceDiagramWL72ISMWBinding47.noteFontFamily;
    sequenceDiagramWL72ISMWBinding320.fontSize =
      sequenceDiagramWL72ISMWBinding47.noteFontSize;
    sequenceDiagramWL72ISMWBinding320.fontWeight =
      sequenceDiagramWL72ISMWBinding47.noteFontWeight;
    sequenceDiagramWL72ISMWBinding320.anchor =
      sequenceDiagramWL72ISMWBinding47.noteAlign;
    sequenceDiagramWL72ISMWBinding320.textMargin =
      sequenceDiagramWL72ISMWBinding47.noteMargin;
    sequenceDiagramWL72ISMWBinding320.valign = "center";
    let sequenceDiagramWL72ISMWBinding321 = O(
        sequenceDiagramWL72ISMWBinding320.text,
      )
        ? await _e(
            sequenceDiagramWL72ISMWBinding318,
            sequenceDiagramWL72ISMWBinding320,
          )
        : sequenceDiagramWL72ISMWBinding18(
            sequenceDiagramWL72ISMWBinding318,
            sequenceDiagramWL72ISMWBinding320,
          ),
      sequenceDiagramWL72ISMWBinding322 = Math.round(
        sequenceDiagramWL72ISMWBinding321
          .map((item) => (item._groups || item)[0][0].getBBox().height)
          .reduce((accumulator, current) => accumulator + current),
      );
    sequenceDiagramWL72ISMWBinding319.attr(
      "height",
      sequenceDiagramWL72ISMWBinding322 +
        2 * sequenceDiagramWL72ISMWBinding47.noteMargin,
    );
    sequenceDiagramWL72ISMWInput98.height +=
      sequenceDiagramWL72ISMWBinding322 +
      2 * sequenceDiagramWL72ISMWBinding47.noteMargin;
    sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
      sequenceDiagramWL72ISMWBinding322 +
        2 * sequenceDiagramWL72ISMWBinding47.noteMargin,
    );
    sequenceDiagramWL72ISMWInput98.stopy =
      sequenceDiagramWL72ISMWInput98.starty +
      sequenceDiagramWL72ISMWBinding322 +
      2 * sequenceDiagramWL72ISMWBinding47.noteMargin;
    sequenceDiagramWL72ISMWInput98.stopx =
      sequenceDiagramWL72ISMWInput98.startx +
      sequenceDiagramWL72ISMWBinding317.width;
    sequenceDiagramWL72ISMWBinding48.insert(
      sequenceDiagramWL72ISMWInput98.startx,
      sequenceDiagramWL72ISMWInput98.starty,
      sequenceDiagramWL72ISMWInput98.stopx,
      sequenceDiagramWL72ISMWInput98.stopy,
    );
    sequenceDiagramWL72ISMWBinding48.models.addNote(
      sequenceDiagramWL72ISMWInput98,
    );
  }, "drawNote");
  sequenceDiagramWL72ISMWBinding50 = defineFunctionName(
    (sequenceDiagramWL72ISMWInput278) => ({
      fontFamily: sequenceDiagramWL72ISMWInput278.messageFontFamily,
      fontSize: sequenceDiagramWL72ISMWInput278.messageFontSize,
      fontWeight: sequenceDiagramWL72ISMWInput278.messageFontWeight,
    }),
    "messageFont",
  );
  $ = defineFunctionName(
    (sequenceDiagramWL72ISMWInput281) => ({
      fontFamily: sequenceDiagramWL72ISMWInput281.noteFontFamily,
      fontSize: sequenceDiagramWL72ISMWInput281.noteFontSize,
      fontWeight: sequenceDiagramWL72ISMWInput281.noteFontWeight,
    }),
    "noteFont",
  );
  sequenceDiagramWL72ISMWBinding51 = defineFunctionName(
    (sequenceDiagramWL72ISMWInput280) => ({
      fontFamily: sequenceDiagramWL72ISMWInput280.actorFontFamily,
      fontSize: sequenceDiagramWL72ISMWInput280.actorFontSize,
      fontWeight: sequenceDiagramWL72ISMWInput280.actorFontWeight,
    }),
    "actorFont",
  );
  defineFunctionName(sequenceDiagramWL72ISMWHelper1, "boundMessage");
  sequenceDiagramWL72ISMWBinding52 = defineFunctionName(async function (
    sequenceDiagramWL72ISMWInput19,
    sequenceDiagramWL72ISMWInput20,
    sequenceDiagramWL72ISMWInput21,
    sequenceDiagramWL72ISMWInput22,
  ) {
    let {
        startx,
        stopx,
        starty,
        message,
        type,
        sequenceIndex,
        sequenceVisible,
      } = sequenceDiagramWL72ISMWInput20,
      sequenceDiagramWL72ISMWBinding167 =
        chunkS3R3BYOJG.calculateTextDimensions(
          message,
          sequenceDiagramWL72ISMWBinding50(sequenceDiagramWL72ISMWBinding47),
        ),
      sequenceDiagramWL72ISMWBinding168 = chunkTZMSLE5BS();
    sequenceDiagramWL72ISMWBinding168.x = startx;
    sequenceDiagramWL72ISMWBinding168.y = starty + 10;
    sequenceDiagramWL72ISMWBinding168.width = stopx - startx;
    sequenceDiagramWL72ISMWBinding168.class = "messageText";
    sequenceDiagramWL72ISMWBinding168.dy = "1em";
    sequenceDiagramWL72ISMWBinding168.text = message;
    sequenceDiagramWL72ISMWBinding168.fontFamily =
      sequenceDiagramWL72ISMWBinding47.messageFontFamily;
    sequenceDiagramWL72ISMWBinding168.fontSize =
      sequenceDiagramWL72ISMWBinding47.messageFontSize;
    sequenceDiagramWL72ISMWBinding168.fontWeight =
      sequenceDiagramWL72ISMWBinding47.messageFontWeight;
    sequenceDiagramWL72ISMWBinding168.anchor =
      sequenceDiagramWL72ISMWBinding47.messageAlign;
    sequenceDiagramWL72ISMWBinding168.valign = "center";
    sequenceDiagramWL72ISMWBinding168.textMargin =
      sequenceDiagramWL72ISMWBinding47.wrapPadding;
    sequenceDiagramWL72ISMWBinding168.tspan = false;
    O(sequenceDiagramWL72ISMWBinding168.text)
      ? await _e(
          sequenceDiagramWL72ISMWInput19,
          sequenceDiagramWL72ISMWBinding168,
          {
            startx,
            stopx,
            starty: sequenceDiagramWL72ISMWInput21,
          },
        )
      : sequenceDiagramWL72ISMWBinding18(
          sequenceDiagramWL72ISMWInput19,
          sequenceDiagramWL72ISMWBinding168,
        );
    let sequenceDiagramWL72ISMWBinding169 =
        sequenceDiagramWL72ISMWBinding167.width,
      sequenceDiagramWL72ISMWBinding170;
    startx === stopx
      ? (sequenceDiagramWL72ISMWBinding170 =
          sequenceDiagramWL72ISMWBinding47.rightAngles
            ? sequenceDiagramWL72ISMWInput19
                .append("path")
                .attr(
                  "d",
                  `M  ${startx},${sequenceDiagramWL72ISMWInput21} H ${startx + s.getMax(sequenceDiagramWL72ISMWBinding47.width / 2, sequenceDiagramWL72ISMWBinding169 / 2)} V ${sequenceDiagramWL72ISMWInput21 + 25} H ${startx}`,
                )
            : sequenceDiagramWL72ISMWInput19
                .append("path")
                .attr(
                  "d",
                  "M " +
                    startx +
                    "," +
                    sequenceDiagramWL72ISMWInput21 +
                    " C " +
                    (startx + 60) +
                    "," +
                    (sequenceDiagramWL72ISMWInput21 - 10) +
                    " " +
                    (startx + 60) +
                    "," +
                    (sequenceDiagramWL72ISMWInput21 + 30) +
                    " " +
                    startx +
                    "," +
                    (sequenceDiagramWL72ISMWInput21 + 20),
                ))
      : ((sequenceDiagramWL72ISMWBinding170 =
          sequenceDiagramWL72ISMWInput19.append("line")),
        sequenceDiagramWL72ISMWBinding170.attr("x1", startx),
        sequenceDiagramWL72ISMWBinding170.attr(
          "y1",
          sequenceDiagramWL72ISMWInput21,
        ),
        sequenceDiagramWL72ISMWBinding170.attr("x2", stopx),
        sequenceDiagramWL72ISMWBinding170.attr(
          "y2",
          sequenceDiagramWL72ISMWInput21,
        ));
    type === sequenceDiagramWL72ISMWInput22.db.LINETYPE.DOTTED ||
    type === sequenceDiagramWL72ISMWInput22.db.LINETYPE.DOTTED_CROSS ||
    type === sequenceDiagramWL72ISMWInput22.db.LINETYPE.DOTTED_POINT ||
    type === sequenceDiagramWL72ISMWInput22.db.LINETYPE.DOTTED_OPEN ||
    type === sequenceDiagramWL72ISMWInput22.db.LINETYPE.BIDIRECTIONAL_DOTTED
      ? (sequenceDiagramWL72ISMWBinding170.style("stroke-dasharray", "3, 3"),
        sequenceDiagramWL72ISMWBinding170.attr("class", "messageLine1"))
      : sequenceDiagramWL72ISMWBinding170.attr("class", "messageLine0");
    let sequenceDiagramWL72ISMWBinding171 = "";
    sequenceDiagramWL72ISMWBinding47.arrowMarkerAbsolute &&
      (sequenceDiagramWL72ISMWBinding171 = E(true));
    sequenceDiagramWL72ISMWBinding170.attr("stroke-width", 2);
    sequenceDiagramWL72ISMWBinding170.attr("stroke", "none");
    sequenceDiagramWL72ISMWBinding170.style("fill", "none");
    (type === sequenceDiagramWL72ISMWInput22.db.LINETYPE.SOLID ||
      type === sequenceDiagramWL72ISMWInput22.db.LINETYPE.DOTTED) &&
      sequenceDiagramWL72ISMWBinding170.attr(
        "marker-end",
        "url(" + sequenceDiagramWL72ISMWBinding171 + "#arrowhead)",
      );
    (type === sequenceDiagramWL72ISMWInput22.db.LINETYPE.BIDIRECTIONAL_SOLID ||
      type ===
        sequenceDiagramWL72ISMWInput22.db.LINETYPE.BIDIRECTIONAL_DOTTED) &&
      (sequenceDiagramWL72ISMWBinding170.attr(
        "marker-start",
        "url(" + sequenceDiagramWL72ISMWBinding171 + "#arrowhead)",
      ),
      sequenceDiagramWL72ISMWBinding170.attr(
        "marker-end",
        "url(" + sequenceDiagramWL72ISMWBinding171 + "#arrowhead)",
      ));
    (type === sequenceDiagramWL72ISMWInput22.db.LINETYPE.SOLID_POINT ||
      type === sequenceDiagramWL72ISMWInput22.db.LINETYPE.DOTTED_POINT) &&
      sequenceDiagramWL72ISMWBinding170.attr(
        "marker-end",
        "url(" + sequenceDiagramWL72ISMWBinding171 + "#filled-head)",
      );
    (type === sequenceDiagramWL72ISMWInput22.db.LINETYPE.SOLID_CROSS ||
      type === sequenceDiagramWL72ISMWInput22.db.LINETYPE.DOTTED_CROSS) &&
      sequenceDiagramWL72ISMWBinding170.attr(
        "marker-end",
        "url(" + sequenceDiagramWL72ISMWBinding171 + "#crosshead)",
      );
    (sequenceVisible || sequenceDiagramWL72ISMWBinding47.showSequenceNumbers) &&
      ((type ===
        sequenceDiagramWL72ISMWInput22.db.LINETYPE.BIDIRECTIONAL_SOLID ||
        type ===
          sequenceDiagramWL72ISMWInput22.db.LINETYPE.BIDIRECTIONAL_DOTTED) &&
        (startx < stopx
          ? sequenceDiagramWL72ISMWBinding170.attr("x1", startx + 12)
          : sequenceDiagramWL72ISMWBinding170.attr("x1", startx + 6)),
      sequenceDiagramWL72ISMWInput19
        .append("line")
        .attr("x1", startx)
        .attr("y1", sequenceDiagramWL72ISMWInput21)
        .attr("x2", startx)
        .attr("y2", sequenceDiagramWL72ISMWInput21)
        .attr("stroke-width", 0)
        .attr(
          "marker-start",
          "url(" + sequenceDiagramWL72ISMWBinding171 + "#sequencenumber)",
        ),
      sequenceDiagramWL72ISMWInput19
        .append("text")
        .attr("x", startx)
        .attr("y", sequenceDiagramWL72ISMWInput21 + 4)
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("text-anchor", "middle")
        .attr("class", "sequenceNumber")
        .text(sequenceIndex));
  }, "drawMessage");
  sequenceDiagramWL72ISMWBinding53 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput112,
    sequenceDiagramWL72ISMWInput113,
    sequenceDiagramWL72ISMWInput114,
    sequenceDiagramWL72ISMWInput115,
    sequenceDiagramWL72ISMWInput116,
    sequenceDiagramWL72ISMWInput117,
    sequenceDiagramWL72ISMWInput118,
  ) {
    let sequenceDiagramWL72ISMWBinding342 = 0,
      sequenceDiagramWL72ISMWBinding343 = 0,
      sequenceDiagramWL72ISMWBinding344,
      sequenceDiagramWL72ISMWBinding345 = 0;
    for (let sequenceDiagramWL72ISMWBinding357 of sequenceDiagramWL72ISMWInput115) {
      let sequenceDiagramWL72ISMWBinding360 =
          sequenceDiagramWL72ISMWInput113.get(
            sequenceDiagramWL72ISMWBinding357,
          ),
        sequenceDiagramWL72ISMWBinding361 =
          sequenceDiagramWL72ISMWBinding360.box;
      sequenceDiagramWL72ISMWBinding344 &&
        sequenceDiagramWL72ISMWBinding344 !=
          sequenceDiagramWL72ISMWBinding361 &&
        (sequenceDiagramWL72ISMWInput118 ||
          sequenceDiagramWL72ISMWBinding48.models.addBox(
            sequenceDiagramWL72ISMWBinding344,
          ),
        (sequenceDiagramWL72ISMWBinding343 +=
          sequenceDiagramWL72ISMWBinding47.boxMargin +
          sequenceDiagramWL72ISMWBinding344.margin));
      sequenceDiagramWL72ISMWBinding361 &&
        sequenceDiagramWL72ISMWBinding361 !=
          sequenceDiagramWL72ISMWBinding344 &&
        (sequenceDiagramWL72ISMWInput118 ||
          ((sequenceDiagramWL72ISMWBinding361.x =
            sequenceDiagramWL72ISMWBinding342 +
            sequenceDiagramWL72ISMWBinding343),
          (sequenceDiagramWL72ISMWBinding361.y =
            sequenceDiagramWL72ISMWInput116)),
        (sequenceDiagramWL72ISMWBinding343 +=
          sequenceDiagramWL72ISMWBinding361.margin));
      sequenceDiagramWL72ISMWBinding360.width =
        sequenceDiagramWL72ISMWBinding360.width ||
        sequenceDiagramWL72ISMWBinding47.width;
      sequenceDiagramWL72ISMWBinding360.height = s.getMax(
        sequenceDiagramWL72ISMWBinding360.height ||
          sequenceDiagramWL72ISMWBinding47.height,
        sequenceDiagramWL72ISMWBinding47.height,
      );
      sequenceDiagramWL72ISMWBinding360.margin =
        sequenceDiagramWL72ISMWBinding360.margin ||
        sequenceDiagramWL72ISMWBinding47.actorMargin;
      sequenceDiagramWL72ISMWBinding345 = s.getMax(
        sequenceDiagramWL72ISMWBinding345,
        sequenceDiagramWL72ISMWBinding360.height,
      );
      sequenceDiagramWL72ISMWInput114.get(
        sequenceDiagramWL72ISMWBinding360.name,
      ) &&
        (sequenceDiagramWL72ISMWBinding343 +=
          sequenceDiagramWL72ISMWBinding360.width / 2);
      sequenceDiagramWL72ISMWBinding360.x =
        sequenceDiagramWL72ISMWBinding342 + sequenceDiagramWL72ISMWBinding343;
      sequenceDiagramWL72ISMWBinding360.starty =
        sequenceDiagramWL72ISMWBinding48.getVerticalPos();
      sequenceDiagramWL72ISMWBinding48.insert(
        sequenceDiagramWL72ISMWBinding360.x,
        sequenceDiagramWL72ISMWInput116,
        sequenceDiagramWL72ISMWBinding360.x +
          sequenceDiagramWL72ISMWBinding360.width,
        sequenceDiagramWL72ISMWBinding360.height,
      );
      sequenceDiagramWL72ISMWBinding342 +=
        sequenceDiagramWL72ISMWBinding360.width +
        sequenceDiagramWL72ISMWBinding343;
      sequenceDiagramWL72ISMWBinding360.box &&
        (sequenceDiagramWL72ISMWBinding360.box.width =
          sequenceDiagramWL72ISMWBinding342 +
          sequenceDiagramWL72ISMWBinding361.margin -
          sequenceDiagramWL72ISMWBinding360.box.x);
      sequenceDiagramWL72ISMWBinding343 =
        sequenceDiagramWL72ISMWBinding360.margin;
      sequenceDiagramWL72ISMWBinding344 = sequenceDiagramWL72ISMWBinding360.box;
      sequenceDiagramWL72ISMWBinding48.models.addActor(
        sequenceDiagramWL72ISMWBinding360,
      );
    }
    sequenceDiagramWL72ISMWBinding344 &&
      !sequenceDiagramWL72ISMWInput118 &&
      sequenceDiagramWL72ISMWBinding48.models.addBox(
        sequenceDiagramWL72ISMWBinding344,
      );
    sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
      sequenceDiagramWL72ISMWBinding345,
    );
  }, "addActorRenderingData");
  sequenceDiagramWL72ISMWBinding54 = defineFunctionName(async function (
    sequenceDiagramWL72ISMWInput178,
    sequenceDiagramWL72ISMWInput179,
    sequenceDiagramWL72ISMWInput180,
    sequenceDiagramWL72ISMWInput181,
  ) {
    if (sequenceDiagramWL72ISMWInput181) {
      let sequenceDiagramWL72ISMWBinding429 = 0;
      sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
        sequenceDiagramWL72ISMWBinding47.boxMargin * 2,
      );
      for (let sequenceDiagramWL72ISMWBinding473 of sequenceDiagramWL72ISMWInput180) {
        let sequenceDiagramWL72ISMWBinding475 =
          sequenceDiagramWL72ISMWInput179.get(
            sequenceDiagramWL72ISMWBinding473,
          );
        sequenceDiagramWL72ISMWBinding475.stopy ||=
          sequenceDiagramWL72ISMWBinding48.getVerticalPos();
        let sequenceDiagramWL72ISMWBinding476 =
          await sequenceDiagramWL72ISMWBinding46.drawActor(
            sequenceDiagramWL72ISMWInput178,
            sequenceDiagramWL72ISMWBinding475,
            sequenceDiagramWL72ISMWBinding47,
            true,
          );
        sequenceDiagramWL72ISMWBinding429 = s.getMax(
          sequenceDiagramWL72ISMWBinding429,
          sequenceDiagramWL72ISMWBinding476,
        );
      }
      sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
        sequenceDiagramWL72ISMWBinding429 +
          sequenceDiagramWL72ISMWBinding47.boxMargin,
      );
    } else
      for (let sequenceDiagramWL72ISMWBinding486 of sequenceDiagramWL72ISMWInput180) {
        let sequenceDiagramWL72ISMWBinding495 =
          sequenceDiagramWL72ISMWInput179.get(
            sequenceDiagramWL72ISMWBinding486,
          );
        await sequenceDiagramWL72ISMWBinding46.drawActor(
          sequenceDiagramWL72ISMWInput178,
          sequenceDiagramWL72ISMWBinding495,
          sequenceDiagramWL72ISMWBinding47,
          false,
        );
      }
  }, "drawActors");
  sequenceDiagramWL72ISMWBinding55 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput221,
    sequenceDiagramWL72ISMWInput222,
    sequenceDiagramWL72ISMWInput223,
    sequenceDiagramWL72ISMWInput224,
  ) {
    let sequenceDiagramWL72ISMWBinding419 = 0,
      sequenceDiagramWL72ISMWBinding420 = 0;
    for (let sequenceDiagramWL72ISMWBinding452 of sequenceDiagramWL72ISMWInput223) {
      let sequenceDiagramWL72ISMWBinding456 =
          sequenceDiagramWL72ISMWInput222.get(
            sequenceDiagramWL72ISMWBinding452,
          ),
        sequenceDiagramWL72ISMWBinding457 = sequenceDiagramWL72ISMWBinding59(
          sequenceDiagramWL72ISMWBinding456,
        ),
        sequenceDiagramWL72ISMWBinding458 =
          sequenceDiagramWL72ISMWBinding46.drawPopup(
            sequenceDiagramWL72ISMWInput221,
            sequenceDiagramWL72ISMWBinding456,
            sequenceDiagramWL72ISMWBinding457,
            sequenceDiagramWL72ISMWBinding47,
            sequenceDiagramWL72ISMWBinding47.forceMenus,
            sequenceDiagramWL72ISMWInput224,
          );
      sequenceDiagramWL72ISMWBinding458.height >
        sequenceDiagramWL72ISMWBinding419 &&
        (sequenceDiagramWL72ISMWBinding419 =
          sequenceDiagramWL72ISMWBinding458.height);
      sequenceDiagramWL72ISMWBinding458.width +
        sequenceDiagramWL72ISMWBinding456.x >
        sequenceDiagramWL72ISMWBinding420 &&
        (sequenceDiagramWL72ISMWBinding420 =
          sequenceDiagramWL72ISMWBinding458.width +
          sequenceDiagramWL72ISMWBinding456.x);
    }
    return {
      maxHeight: sequenceDiagramWL72ISMWBinding419,
      maxWidth: sequenceDiagramWL72ISMWBinding420,
    };
  }, "drawActorsPopup");
  sequenceDiagramWL72ISMWBinding56 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput189,
  ) {
    r(sequenceDiagramWL72ISMWBinding47, sequenceDiagramWL72ISMWInput189);
    sequenceDiagramWL72ISMWInput189.fontFamily &&
      (sequenceDiagramWL72ISMWBinding47.actorFontFamily =
        sequenceDiagramWL72ISMWBinding47.noteFontFamily =
        sequenceDiagramWL72ISMWBinding47.messageFontFamily =
          sequenceDiagramWL72ISMWInput189.fontFamily);
    sequenceDiagramWL72ISMWInput189.fontSize &&
      (sequenceDiagramWL72ISMWBinding47.actorFontSize =
        sequenceDiagramWL72ISMWBinding47.noteFontSize =
        sequenceDiagramWL72ISMWBinding47.messageFontSize =
          sequenceDiagramWL72ISMWInput189.fontSize);
    sequenceDiagramWL72ISMWInput189.fontWeight &&
      (sequenceDiagramWL72ISMWBinding47.actorFontWeight =
        sequenceDiagramWL72ISMWBinding47.noteFontWeight =
        sequenceDiagramWL72ISMWBinding47.messageFontWeight =
          sequenceDiagramWL72ISMWInput189.fontWeight);
  }, "setConf");
  sequenceDiagramWL72ISMWBinding57 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput290,
  ) {
    return sequenceDiagramWL72ISMWBinding48.activations.filter(function (item) {
      return item.actor === sequenceDiagramWL72ISMWInput290;
    });
  }, "actorActivations");
  sequenceDiagramWL72ISMWBinding58 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput211,
    sequenceDiagramWL72ISMWInput212,
  ) {
    let sequenceDiagramWL72ISMWBinding415 = sequenceDiagramWL72ISMWInput212.get(
        sequenceDiagramWL72ISMWInput211,
      ),
      sequenceDiagramWL72ISMWBinding416 = sequenceDiagramWL72ISMWBinding57(
        sequenceDiagramWL72ISMWInput211,
      );
    return [
      sequenceDiagramWL72ISMWBinding416.reduce(
        function (accumulator, current) {
          return s.getMin(accumulator, current.startx);
        },
        sequenceDiagramWL72ISMWBinding415.x +
          sequenceDiagramWL72ISMWBinding415.width / 2 -
          1,
      ),
      sequenceDiagramWL72ISMWBinding416.reduce(
        function (accumulator, current) {
          return s.getMax(accumulator, current.stopx);
        },
        sequenceDiagramWL72ISMWBinding415.x +
          sequenceDiagramWL72ISMWBinding415.width / 2 +
          1,
      ),
    ];
  }, "activationBounds");
  defineFunctionName(sequenceDiagramWL72ISMWHelper2, "adjustLoopHeightForWrap");
  defineFunctionName(
    sequenceDiagramWL72ISMWHelper3,
    "adjustCreatedDestroyedData",
  );
  $e = defineFunctionName(async function (
    sequenceDiagramWL72ISMWInput9,
    sequenceDiagramWL72ISMWInput10,
    sequenceDiagramWL72ISMWInput11,
    sequenceDiagramWL72ISMWInput12,
  ) {
    let { securityLevel, sequence } = _chunkABZYJK2DB();
    sequenceDiagramWL72ISMWBinding47 = sequence;
    let sequenceDiagramWL72ISMWBinding108;
    securityLevel === "sandbox" &&
      (sequenceDiagramWL72ISMWBinding108 = select(
        "#i" + sequenceDiagramWL72ISMWInput10,
      ));
    let sequenceDiagramWL72ISMWBinding109 = select(
        securityLevel === "sandbox"
          ? sequenceDiagramWL72ISMWBinding108.nodes()[0].contentDocument.body
          : "body",
      ),
      sequenceDiagramWL72ISMWBinding110 =
        securityLevel === "sandbox"
          ? sequenceDiagramWL72ISMWBinding108.nodes()[0].contentDocument
          : document;
    sequenceDiagramWL72ISMWBinding48.init();
    logger.debug(sequenceDiagramWL72ISMWInput12.db);
    let sequenceDiagramWL72ISMWBinding111 =
        securityLevel === "sandbox"
          ? sequenceDiagramWL72ISMWBinding109.select(
              `[id="${sequenceDiagramWL72ISMWInput10}"]`,
            )
          : select(`[id="${sequenceDiagramWL72ISMWInput10}"]`),
      sequenceDiagramWL72ISMWBinding112 =
        sequenceDiagramWL72ISMWInput12.db.getActors(),
      sequenceDiagramWL72ISMWBinding113 =
        sequenceDiagramWL72ISMWInput12.db.getCreatedActors(),
      sequenceDiagramWL72ISMWBinding114 =
        sequenceDiagramWL72ISMWInput12.db.getDestroyedActors(),
      sequenceDiagramWL72ISMWBinding115 =
        sequenceDiagramWL72ISMWInput12.db.getBoxes(),
      sequenceDiagramWL72ISMWBinding116 =
        sequenceDiagramWL72ISMWInput12.db.getActorKeys(),
      sequenceDiagramWL72ISMWBinding117 =
        sequenceDiagramWL72ISMWInput12.db.getMessages(),
      sequenceDiagramWL72ISMWBinding118 =
        sequenceDiagramWL72ISMWInput12.db.getDiagramTitle(),
      sequenceDiagramWL72ISMWBinding119 =
        sequenceDiagramWL72ISMWInput12.db.hasAtLeastOneBox(),
      sequenceDiagramWL72ISMWBinding120 =
        sequenceDiagramWL72ISMWInput12.db.hasAtLeastOneBoxWithTitle(),
      sequenceDiagramWL72ISMWBinding121 = await sequenceDiagramWL72ISMWHelper4(
        sequenceDiagramWL72ISMWBinding112,
        sequenceDiagramWL72ISMWBinding117,
        sequenceDiagramWL72ISMWInput12,
      );
    if (
      ((sequenceDiagramWL72ISMWBinding47.height =
        await sequenceDiagramWL72ISMWHelper5(
          sequenceDiagramWL72ISMWBinding112,
          sequenceDiagramWL72ISMWBinding121,
          sequenceDiagramWL72ISMWBinding115,
        )),
      sequenceDiagramWL72ISMWBinding46.insertComputerIcon(
        sequenceDiagramWL72ISMWBinding111,
      ),
      sequenceDiagramWL72ISMWBinding46.insertDatabaseIcon(
        sequenceDiagramWL72ISMWBinding111,
      ),
      sequenceDiagramWL72ISMWBinding46.insertClockIcon(
        sequenceDiagramWL72ISMWBinding111,
      ),
      sequenceDiagramWL72ISMWBinding119 &&
        (sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
          sequenceDiagramWL72ISMWBinding47.boxMargin,
        ),
        sequenceDiagramWL72ISMWBinding120 &&
          sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
            sequenceDiagramWL72ISMWBinding115[0].textMaxHeight,
          )),
      sequenceDiagramWL72ISMWBinding47.hideUnusedParticipants === true)
    ) {
      let sequenceDiagramWL72ISMWBinding477 = new Set();
      sequenceDiagramWL72ISMWBinding117.forEach((item) => {
        sequenceDiagramWL72ISMWBinding477.add(item.from);
        sequenceDiagramWL72ISMWBinding477.add(item.to);
      });
      sequenceDiagramWL72ISMWBinding116 =
        sequenceDiagramWL72ISMWBinding116.filter((item) =>
          sequenceDiagramWL72ISMWBinding477.has(item),
        );
    }
    sequenceDiagramWL72ISMWBinding53(
      sequenceDiagramWL72ISMWBinding111,
      sequenceDiagramWL72ISMWBinding112,
      sequenceDiagramWL72ISMWBinding113,
      sequenceDiagramWL72ISMWBinding116,
      0,
      sequenceDiagramWL72ISMWBinding117,
      false,
    );
    let sequenceDiagramWL72ISMWBinding122 =
      await sequenceDiagramWL72ISMWBinding62(
        sequenceDiagramWL72ISMWBinding117,
        sequenceDiagramWL72ISMWBinding112,
        sequenceDiagramWL72ISMWBinding121,
        sequenceDiagramWL72ISMWInput12,
      );
    sequenceDiagramWL72ISMWBinding46.insertArrowHead(
      sequenceDiagramWL72ISMWBinding111,
    );
    sequenceDiagramWL72ISMWBinding46.insertArrowCrossHead(
      sequenceDiagramWL72ISMWBinding111,
    );
    sequenceDiagramWL72ISMWBinding46.insertArrowFilledHead(
      sequenceDiagramWL72ISMWBinding111,
    );
    sequenceDiagramWL72ISMWBinding46.insertSequenceNumber(
      sequenceDiagramWL72ISMWBinding111,
    );
    function sequenceDiagramWL72ISMWHelper7(
      sequenceDiagramWL72ISMWInput251,
      sequenceDiagramWL72ISMWInput252,
    ) {
      let sequenceDiagramWL72ISMWBinding451 =
        sequenceDiagramWL72ISMWBinding48.endActivation(
          sequenceDiagramWL72ISMWInput251,
        );
      sequenceDiagramWL72ISMWBinding451.starty + 18 >
        sequenceDiagramWL72ISMWInput252 &&
        ((sequenceDiagramWL72ISMWBinding451.starty =
          sequenceDiagramWL72ISMWInput252 - 6),
        (sequenceDiagramWL72ISMWInput252 += 12));
      sequenceDiagramWL72ISMWBinding46.drawActivation(
        sequenceDiagramWL72ISMWBinding111,
        sequenceDiagramWL72ISMWBinding451,
        sequenceDiagramWL72ISMWInput252,
        sequenceDiagramWL72ISMWBinding47,
        sequenceDiagramWL72ISMWBinding57(sequenceDiagramWL72ISMWInput251.from)
          .length,
      );
      sequenceDiagramWL72ISMWBinding48.insert(
        sequenceDiagramWL72ISMWBinding451.startx,
        sequenceDiagramWL72ISMWInput252 - 10,
        sequenceDiagramWL72ISMWBinding451.stopx,
        sequenceDiagramWL72ISMWInput252,
      );
    }
    defineFunctionName(sequenceDiagramWL72ISMWHelper7, "activeEnd");
    let sequenceDiagramWL72ISMWBinding123 = 1,
      sequenceDiagramWL72ISMWBinding124 = 1,
      sequenceDiagramWL72ISMWBinding125 = [],
      sequenceDiagramWL72ISMWBinding126 = [],
      sequenceDiagramWL72ISMWBinding127 = 0;
    for (let sequenceDiagramWL72ISMWBinding134 of sequenceDiagramWL72ISMWBinding117) {
      let sequenceDiagramWL72ISMWBinding135,
        sequenceDiagramWL72ISMWBinding136,
        sequenceDiagramWL72ISMWBinding137;
      switch (sequenceDiagramWL72ISMWBinding134.type) {
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.NOTE:
          sequenceDiagramWL72ISMWBinding48.resetVerticalPos();
          sequenceDiagramWL72ISMWBinding136 =
            sequenceDiagramWL72ISMWBinding134.noteModel;
          await sequenceDiagramWL72ISMWBinding49(
            sequenceDiagramWL72ISMWBinding111,
            sequenceDiagramWL72ISMWBinding136,
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.ACTIVE_START:
          sequenceDiagramWL72ISMWBinding48.newActivation(
            sequenceDiagramWL72ISMWBinding134,
            sequenceDiagramWL72ISMWBinding111,
            sequenceDiagramWL72ISMWBinding112,
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.ACTIVE_END:
          sequenceDiagramWL72ISMWHelper7(
            sequenceDiagramWL72ISMWBinding134,
            sequenceDiagramWL72ISMWBinding48.getVerticalPos(),
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.LOOP_START:
          sequenceDiagramWL72ISMWHelper2(
            sequenceDiagramWL72ISMWBinding122,
            sequenceDiagramWL72ISMWBinding134,
            sequenceDiagramWL72ISMWBinding47.boxMargin,
            sequenceDiagramWL72ISMWBinding47.boxMargin +
              sequenceDiagramWL72ISMWBinding47.boxTextMargin,
            (sequenceDiagramWL72ISMWInput321) =>
              sequenceDiagramWL72ISMWBinding48.newLoop(
                sequenceDiagramWL72ISMWInput321,
              ),
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.LOOP_END:
          sequenceDiagramWL72ISMWBinding135 =
            sequenceDiagramWL72ISMWBinding48.endLoop();
          await sequenceDiagramWL72ISMWBinding46.drawLoop(
            sequenceDiagramWL72ISMWBinding111,
            sequenceDiagramWL72ISMWBinding135,
            "loop",
            sequenceDiagramWL72ISMWBinding47,
          );
          sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
            sequenceDiagramWL72ISMWBinding135.stopy -
              sequenceDiagramWL72ISMWBinding48.getVerticalPos(),
          );
          sequenceDiagramWL72ISMWBinding48.models.addLoop(
            sequenceDiagramWL72ISMWBinding135,
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.RECT_START:
          sequenceDiagramWL72ISMWHelper2(
            sequenceDiagramWL72ISMWBinding122,
            sequenceDiagramWL72ISMWBinding134,
            sequenceDiagramWL72ISMWBinding47.boxMargin,
            sequenceDiagramWL72ISMWBinding47.boxMargin,
            (sequenceDiagramWL72ISMWInput312) =>
              sequenceDiagramWL72ISMWBinding48.newLoop(
                undefined,
                sequenceDiagramWL72ISMWInput312.message,
              ),
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.RECT_END:
          sequenceDiagramWL72ISMWBinding135 =
            sequenceDiagramWL72ISMWBinding48.endLoop();
          sequenceDiagramWL72ISMWBinding126.push(
            sequenceDiagramWL72ISMWBinding135,
          );
          sequenceDiagramWL72ISMWBinding48.models.addLoop(
            sequenceDiagramWL72ISMWBinding135,
          );
          sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
            sequenceDiagramWL72ISMWBinding135.stopy -
              sequenceDiagramWL72ISMWBinding48.getVerticalPos(),
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.OPT_START:
          sequenceDiagramWL72ISMWHelper2(
            sequenceDiagramWL72ISMWBinding122,
            sequenceDiagramWL72ISMWBinding134,
            sequenceDiagramWL72ISMWBinding47.boxMargin,
            sequenceDiagramWL72ISMWBinding47.boxMargin +
              sequenceDiagramWL72ISMWBinding47.boxTextMargin,
            (sequenceDiagramWL72ISMWInput322) =>
              sequenceDiagramWL72ISMWBinding48.newLoop(
                sequenceDiagramWL72ISMWInput322,
              ),
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.OPT_END:
          sequenceDiagramWL72ISMWBinding135 =
            sequenceDiagramWL72ISMWBinding48.endLoop();
          await sequenceDiagramWL72ISMWBinding46.drawLoop(
            sequenceDiagramWL72ISMWBinding111,
            sequenceDiagramWL72ISMWBinding135,
            "opt",
            sequenceDiagramWL72ISMWBinding47,
          );
          sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
            sequenceDiagramWL72ISMWBinding135.stopy -
              sequenceDiagramWL72ISMWBinding48.getVerticalPos(),
          );
          sequenceDiagramWL72ISMWBinding48.models.addLoop(
            sequenceDiagramWL72ISMWBinding135,
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.ALT_START:
          sequenceDiagramWL72ISMWHelper2(
            sequenceDiagramWL72ISMWBinding122,
            sequenceDiagramWL72ISMWBinding134,
            sequenceDiagramWL72ISMWBinding47.boxMargin,
            sequenceDiagramWL72ISMWBinding47.boxMargin +
              sequenceDiagramWL72ISMWBinding47.boxTextMargin,
            (sequenceDiagramWL72ISMWInput323) =>
              sequenceDiagramWL72ISMWBinding48.newLoop(
                sequenceDiagramWL72ISMWInput323,
              ),
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.ALT_ELSE:
          sequenceDiagramWL72ISMWHelper2(
            sequenceDiagramWL72ISMWBinding122,
            sequenceDiagramWL72ISMWBinding134,
            sequenceDiagramWL72ISMWBinding47.boxMargin +
              sequenceDiagramWL72ISMWBinding47.boxTextMargin,
            sequenceDiagramWL72ISMWBinding47.boxMargin,
            (sequenceDiagramWL72ISMWInput316) =>
              sequenceDiagramWL72ISMWBinding48.addSectionToLoop(
                sequenceDiagramWL72ISMWInput316,
              ),
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.ALT_END:
          sequenceDiagramWL72ISMWBinding135 =
            sequenceDiagramWL72ISMWBinding48.endLoop();
          await sequenceDiagramWL72ISMWBinding46.drawLoop(
            sequenceDiagramWL72ISMWBinding111,
            sequenceDiagramWL72ISMWBinding135,
            "alt",
            sequenceDiagramWL72ISMWBinding47,
          );
          sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
            sequenceDiagramWL72ISMWBinding135.stopy -
              sequenceDiagramWL72ISMWBinding48.getVerticalPos(),
          );
          sequenceDiagramWL72ISMWBinding48.models.addLoop(
            sequenceDiagramWL72ISMWBinding135,
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.PAR_START:
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.PAR_OVER_START:
          sequenceDiagramWL72ISMWHelper2(
            sequenceDiagramWL72ISMWBinding122,
            sequenceDiagramWL72ISMWBinding134,
            sequenceDiagramWL72ISMWBinding47.boxMargin,
            sequenceDiagramWL72ISMWBinding47.boxMargin +
              sequenceDiagramWL72ISMWBinding47.boxTextMargin,
            (sequenceDiagramWL72ISMWInput324) =>
              sequenceDiagramWL72ISMWBinding48.newLoop(
                sequenceDiagramWL72ISMWInput324,
              ),
          );
          sequenceDiagramWL72ISMWBinding48.saveVerticalPos();
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.PAR_AND:
          sequenceDiagramWL72ISMWHelper2(
            sequenceDiagramWL72ISMWBinding122,
            sequenceDiagramWL72ISMWBinding134,
            sequenceDiagramWL72ISMWBinding47.boxMargin +
              sequenceDiagramWL72ISMWBinding47.boxTextMargin,
            sequenceDiagramWL72ISMWBinding47.boxMargin,
            (sequenceDiagramWL72ISMWInput317) =>
              sequenceDiagramWL72ISMWBinding48.addSectionToLoop(
                sequenceDiagramWL72ISMWInput317,
              ),
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.PAR_END:
          sequenceDiagramWL72ISMWBinding135 =
            sequenceDiagramWL72ISMWBinding48.endLoop();
          await sequenceDiagramWL72ISMWBinding46.drawLoop(
            sequenceDiagramWL72ISMWBinding111,
            sequenceDiagramWL72ISMWBinding135,
            "par",
            sequenceDiagramWL72ISMWBinding47,
          );
          sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
            sequenceDiagramWL72ISMWBinding135.stopy -
              sequenceDiagramWL72ISMWBinding48.getVerticalPos(),
          );
          sequenceDiagramWL72ISMWBinding48.models.addLoop(
            sequenceDiagramWL72ISMWBinding135,
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.AUTONUMBER:
          sequenceDiagramWL72ISMWBinding123 =
            sequenceDiagramWL72ISMWBinding134.message.start ||
            sequenceDiagramWL72ISMWBinding123;
          sequenceDiagramWL72ISMWBinding124 =
            sequenceDiagramWL72ISMWBinding134.message.step ||
            sequenceDiagramWL72ISMWBinding124;
          sequenceDiagramWL72ISMWBinding134.message.visible
            ? sequenceDiagramWL72ISMWInput12.db.enableSequenceNumbers()
            : sequenceDiagramWL72ISMWInput12.db.disableSequenceNumbers();
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.CRITICAL_START:
          sequenceDiagramWL72ISMWHelper2(
            sequenceDiagramWL72ISMWBinding122,
            sequenceDiagramWL72ISMWBinding134,
            sequenceDiagramWL72ISMWBinding47.boxMargin,
            sequenceDiagramWL72ISMWBinding47.boxMargin +
              sequenceDiagramWL72ISMWBinding47.boxTextMargin,
            (sequenceDiagramWL72ISMWInput325) =>
              sequenceDiagramWL72ISMWBinding48.newLoop(
                sequenceDiagramWL72ISMWInput325,
              ),
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.CRITICAL_OPTION:
          sequenceDiagramWL72ISMWHelper2(
            sequenceDiagramWL72ISMWBinding122,
            sequenceDiagramWL72ISMWBinding134,
            sequenceDiagramWL72ISMWBinding47.boxMargin +
              sequenceDiagramWL72ISMWBinding47.boxTextMargin,
            sequenceDiagramWL72ISMWBinding47.boxMargin,
            (sequenceDiagramWL72ISMWInput318) =>
              sequenceDiagramWL72ISMWBinding48.addSectionToLoop(
                sequenceDiagramWL72ISMWInput318,
              ),
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.CRITICAL_END:
          sequenceDiagramWL72ISMWBinding135 =
            sequenceDiagramWL72ISMWBinding48.endLoop();
          await sequenceDiagramWL72ISMWBinding46.drawLoop(
            sequenceDiagramWL72ISMWBinding111,
            sequenceDiagramWL72ISMWBinding135,
            "critical",
            sequenceDiagramWL72ISMWBinding47,
          );
          sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
            sequenceDiagramWL72ISMWBinding135.stopy -
              sequenceDiagramWL72ISMWBinding48.getVerticalPos(),
          );
          sequenceDiagramWL72ISMWBinding48.models.addLoop(
            sequenceDiagramWL72ISMWBinding135,
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.BREAK_START:
          sequenceDiagramWL72ISMWHelper2(
            sequenceDiagramWL72ISMWBinding122,
            sequenceDiagramWL72ISMWBinding134,
            sequenceDiagramWL72ISMWBinding47.boxMargin,
            sequenceDiagramWL72ISMWBinding47.boxMargin +
              sequenceDiagramWL72ISMWBinding47.boxTextMargin,
            (sequenceDiagramWL72ISMWInput326) =>
              sequenceDiagramWL72ISMWBinding48.newLoop(
                sequenceDiagramWL72ISMWInput326,
              ),
          );
          break;
        case sequenceDiagramWL72ISMWInput12.db.LINETYPE.BREAK_END:
          sequenceDiagramWL72ISMWBinding135 =
            sequenceDiagramWL72ISMWBinding48.endLoop();
          await sequenceDiagramWL72ISMWBinding46.drawLoop(
            sequenceDiagramWL72ISMWBinding111,
            sequenceDiagramWL72ISMWBinding135,
            "break",
            sequenceDiagramWL72ISMWBinding47,
          );
          sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
            sequenceDiagramWL72ISMWBinding135.stopy -
              sequenceDiagramWL72ISMWBinding48.getVerticalPos(),
          );
          sequenceDiagramWL72ISMWBinding48.models.addLoop(
            sequenceDiagramWL72ISMWBinding135,
          );
          break;
        default:
          try {
            sequenceDiagramWL72ISMWBinding137 =
              sequenceDiagramWL72ISMWBinding134.msgModel;
            sequenceDiagramWL72ISMWBinding137.starty =
              sequenceDiagramWL72ISMWBinding48.getVerticalPos();
            sequenceDiagramWL72ISMWBinding137.sequenceIndex =
              sequenceDiagramWL72ISMWBinding123;
            sequenceDiagramWL72ISMWBinding137.sequenceVisible =
              sequenceDiagramWL72ISMWInput12.db.showSequenceNumbers();
            let sequenceDiagramWL72ISMWBinding414 =
              await sequenceDiagramWL72ISMWHelper1(
                sequenceDiagramWL72ISMWBinding111,
                sequenceDiagramWL72ISMWBinding137,
              );
            sequenceDiagramWL72ISMWHelper3(
              sequenceDiagramWL72ISMWBinding134,
              sequenceDiagramWL72ISMWBinding137,
              sequenceDiagramWL72ISMWBinding414,
              sequenceDiagramWL72ISMWBinding127,
              sequenceDiagramWL72ISMWBinding112,
              sequenceDiagramWL72ISMWBinding113,
              sequenceDiagramWL72ISMWBinding114,
            );
            sequenceDiagramWL72ISMWBinding125.push({
              messageModel: sequenceDiagramWL72ISMWBinding137,
              lineStartY: sequenceDiagramWL72ISMWBinding414,
            });
            sequenceDiagramWL72ISMWBinding48.models.addMessage(
              sequenceDiagramWL72ISMWBinding137,
            );
          } catch (sequenceDiagramWL72ISMWBinding494) {
            logger.error(
              "error while drawing message",
              sequenceDiagramWL72ISMWBinding494,
            );
          }
      }
      [
        sequenceDiagramWL72ISMWInput12.db.LINETYPE.SOLID_OPEN,
        sequenceDiagramWL72ISMWInput12.db.LINETYPE.DOTTED_OPEN,
        sequenceDiagramWL72ISMWInput12.db.LINETYPE.SOLID,
        sequenceDiagramWL72ISMWInput12.db.LINETYPE.DOTTED,
        sequenceDiagramWL72ISMWInput12.db.LINETYPE.SOLID_CROSS,
        sequenceDiagramWL72ISMWInput12.db.LINETYPE.DOTTED_CROSS,
        sequenceDiagramWL72ISMWInput12.db.LINETYPE.SOLID_POINT,
        sequenceDiagramWL72ISMWInput12.db.LINETYPE.DOTTED_POINT,
        sequenceDiagramWL72ISMWInput12.db.LINETYPE.BIDIRECTIONAL_SOLID,
        sequenceDiagramWL72ISMWInput12.db.LINETYPE.BIDIRECTIONAL_DOTTED,
      ].includes(sequenceDiagramWL72ISMWBinding134.type) &&
        (sequenceDiagramWL72ISMWBinding123 +=
          sequenceDiagramWL72ISMWBinding124);
      sequenceDiagramWL72ISMWBinding127++;
    }
    logger.debug("createdActors", sequenceDiagramWL72ISMWBinding113);
    logger.debug("destroyedActors", sequenceDiagramWL72ISMWBinding114);
    await sequenceDiagramWL72ISMWBinding54(
      sequenceDiagramWL72ISMWBinding111,
      sequenceDiagramWL72ISMWBinding112,
      sequenceDiagramWL72ISMWBinding116,
      false,
    );
    for (let sequenceDiagramWL72ISMWBinding498 of sequenceDiagramWL72ISMWBinding125)
      await sequenceDiagramWL72ISMWBinding52(
        sequenceDiagramWL72ISMWBinding111,
        sequenceDiagramWL72ISMWBinding498.messageModel,
        sequenceDiagramWL72ISMWBinding498.lineStartY,
        sequenceDiagramWL72ISMWInput12,
      );
    sequenceDiagramWL72ISMWBinding47.mirrorActors &&
      (await sequenceDiagramWL72ISMWBinding54(
        sequenceDiagramWL72ISMWBinding111,
        sequenceDiagramWL72ISMWBinding112,
        sequenceDiagramWL72ISMWBinding116,
        true,
      ));
    sequenceDiagramWL72ISMWBinding126.forEach((item) =>
      sequenceDiagramWL72ISMWBinding46.drawBackgroundRect(
        sequenceDiagramWL72ISMWBinding111,
        item,
      ),
    );
    sequenceDiagramWL72ISMWBinding21(
      sequenceDiagramWL72ISMWBinding111,
      sequenceDiagramWL72ISMWBinding112,
      sequenceDiagramWL72ISMWBinding116,
      sequenceDiagramWL72ISMWBinding47,
    );
    for (let sequenceDiagramWL72ISMWBinding402 of sequenceDiagramWL72ISMWBinding48
      .models.boxes) {
      sequenceDiagramWL72ISMWBinding402.height =
        sequenceDiagramWL72ISMWBinding48.getVerticalPos() -
        sequenceDiagramWL72ISMWBinding402.y;
      sequenceDiagramWL72ISMWBinding48.insert(
        sequenceDiagramWL72ISMWBinding402.x,
        sequenceDiagramWL72ISMWBinding402.y,
        sequenceDiagramWL72ISMWBinding402.x +
          sequenceDiagramWL72ISMWBinding402.width,
        sequenceDiagramWL72ISMWBinding402.height,
      );
      let sequenceDiagramWL72ISMWBinding413 =
        sequenceDiagramWL72ISMWBinding47.boxMargin * 2;
      sequenceDiagramWL72ISMWBinding402.startx =
        sequenceDiagramWL72ISMWBinding402.x - sequenceDiagramWL72ISMWBinding413;
      sequenceDiagramWL72ISMWBinding402.starty =
        sequenceDiagramWL72ISMWBinding402.y -
        sequenceDiagramWL72ISMWBinding413 * 0.25;
      sequenceDiagramWL72ISMWBinding402.stopx =
        sequenceDiagramWL72ISMWBinding402.startx +
        sequenceDiagramWL72ISMWBinding402.width +
        2 * sequenceDiagramWL72ISMWBinding413;
      sequenceDiagramWL72ISMWBinding402.stopy =
        sequenceDiagramWL72ISMWBinding402.starty +
        sequenceDiagramWL72ISMWBinding402.height +
        sequenceDiagramWL72ISMWBinding413 * 0.75;
      sequenceDiagramWL72ISMWBinding402.stroke = "rgb(0,0,0, 0.5)";
      sequenceDiagramWL72ISMWBinding46.drawBox(
        sequenceDiagramWL72ISMWBinding111,
        sequenceDiagramWL72ISMWBinding402,
        sequenceDiagramWL72ISMWBinding47,
      );
    }
    sequenceDiagramWL72ISMWBinding119 &&
      sequenceDiagramWL72ISMWBinding48.bumpVerticalPos(
        sequenceDiagramWL72ISMWBinding47.boxMargin,
      );
    let sequenceDiagramWL72ISMWBinding128 = sequenceDiagramWL72ISMWBinding55(
        sequenceDiagramWL72ISMWBinding111,
        sequenceDiagramWL72ISMWBinding112,
        sequenceDiagramWL72ISMWBinding116,
        sequenceDiagramWL72ISMWBinding110,
      ),
      { bounds } = sequenceDiagramWL72ISMWBinding48.getBounds();
    bounds.startx === undefined && (bounds.startx = 0);
    bounds.starty === undefined && (bounds.starty = 0);
    bounds.stopx === undefined && (bounds.stopx = 0);
    bounds.stopy === undefined && (bounds.stopy = 0);
    let sequenceDiagramWL72ISMWBinding129 = bounds.stopy - bounds.starty;
    sequenceDiagramWL72ISMWBinding129 <
      sequenceDiagramWL72ISMWBinding128.maxHeight &&
      (sequenceDiagramWL72ISMWBinding129 =
        sequenceDiagramWL72ISMWBinding128.maxHeight);
    let sequenceDiagramWL72ISMWBinding130 =
      sequenceDiagramWL72ISMWBinding129 +
      2 * sequenceDiagramWL72ISMWBinding47.diagramMarginY;
    sequenceDiagramWL72ISMWBinding47.mirrorActors &&
      (sequenceDiagramWL72ISMWBinding130 =
        sequenceDiagramWL72ISMWBinding130 -
        sequenceDiagramWL72ISMWBinding47.boxMargin +
        sequenceDiagramWL72ISMWBinding47.bottomMarginAdj);
    let sequenceDiagramWL72ISMWBinding131 = bounds.stopx - bounds.startx;
    sequenceDiagramWL72ISMWBinding131 <
      sequenceDiagramWL72ISMWBinding128.maxWidth &&
      (sequenceDiagramWL72ISMWBinding131 =
        sequenceDiagramWL72ISMWBinding128.maxWidth);
    let sequenceDiagramWL72ISMWBinding132 =
      sequenceDiagramWL72ISMWBinding131 +
      2 * sequenceDiagramWL72ISMWBinding47.diagramMarginX;
    sequenceDiagramWL72ISMWBinding118 &&
      sequenceDiagramWL72ISMWBinding111
        .append("text")
        .text(sequenceDiagramWL72ISMWBinding118)
        .attr(
          "x",
          (bounds.stopx - bounds.startx) / 2 -
            2 * sequenceDiagramWL72ISMWBinding47.diagramMarginX,
        )
        .attr("y", -25);
    _chunkABZYJK2DC(
      sequenceDiagramWL72ISMWBinding111,
      sequenceDiagramWL72ISMWBinding130,
      sequenceDiagramWL72ISMWBinding132,
      sequenceDiagramWL72ISMWBinding47.useMaxWidth,
    );
    let sequenceDiagramWL72ISMWBinding133 = sequenceDiagramWL72ISMWBinding118
      ? 40
      : 0;
    sequenceDiagramWL72ISMWBinding111.attr(
      "viewBox",
      bounds.startx -
        sequenceDiagramWL72ISMWBinding47.diagramMarginX +
        " -" +
        (sequenceDiagramWL72ISMWBinding47.diagramMarginY +
          sequenceDiagramWL72ISMWBinding133) +
        " " +
        sequenceDiagramWL72ISMWBinding132 +
        " " +
        (sequenceDiagramWL72ISMWBinding130 + sequenceDiagramWL72ISMWBinding133),
    );
    logger.debug("models:", sequenceDiagramWL72ISMWBinding48.models);
  }, "draw");
  defineFunctionName(
    sequenceDiagramWL72ISMWHelper4,
    "getMaxMessageWidthPerActor",
  );
  sequenceDiagramWL72ISMWBinding59 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput243,
  ) {
    let sequenceDiagramWL72ISMWBinding445 = 0,
      sequenceDiagramWL72ISMWBinding446 = sequenceDiagramWL72ISMWBinding51(
        sequenceDiagramWL72ISMWBinding47,
      );
    for (let sequenceDiagramWL72ISMWBinding467 in sequenceDiagramWL72ISMWInput243.links) {
      let sequenceDiagramWL72ISMWBinding479 =
        chunkS3R3BYOJG.calculateTextDimensions(
          sequenceDiagramWL72ISMWBinding467,
          sequenceDiagramWL72ISMWBinding446,
        ).width +
        2 * sequenceDiagramWL72ISMWBinding47.wrapPadding +
        2 * sequenceDiagramWL72ISMWBinding47.boxMargin;
      sequenceDiagramWL72ISMWBinding445 < sequenceDiagramWL72ISMWBinding479 &&
        (sequenceDiagramWL72ISMWBinding445 = sequenceDiagramWL72ISMWBinding479);
    }
    return sequenceDiagramWL72ISMWBinding445;
  }, "getRequiredPopupWidth");
  defineFunctionName(sequenceDiagramWL72ISMWHelper5, "calculateActorMargins");
  sequenceDiagramWL72ISMWBinding60 = defineFunctionName(async function (
    sequenceDiagramWL72ISMWInput39,
    sequenceDiagramWL72ISMWInput40,
    sequenceDiagramWL72ISMWInput41,
  ) {
    let sequenceDiagramWL72ISMWBinding207 = sequenceDiagramWL72ISMWInput40.get(
        sequenceDiagramWL72ISMWInput39.from,
      ),
      sequenceDiagramWL72ISMWBinding208 = sequenceDiagramWL72ISMWInput40.get(
        sequenceDiagramWL72ISMWInput39.to,
      ),
      sequenceDiagramWL72ISMWBinding209 = sequenceDiagramWL72ISMWBinding207.x,
      sequenceDiagramWL72ISMWBinding210 = sequenceDiagramWL72ISMWBinding208.x,
      sequenceDiagramWL72ISMWBinding211 =
        sequenceDiagramWL72ISMWInput39.wrap &&
        sequenceDiagramWL72ISMWInput39.message,
      sequenceDiagramWL72ISMWBinding212 = O(
        sequenceDiagramWL72ISMWInput39.message,
      )
        ? await i(sequenceDiagramWL72ISMWInput39.message, _chunkABZYJK2DB())
        : chunkS3R3BYOJG.calculateTextDimensions(
            sequenceDiagramWL72ISMWBinding211
              ? chunkS3R3BYOJG.wrapLabel(
                  sequenceDiagramWL72ISMWInput39.message,
                  sequenceDiagramWL72ISMWBinding47.width,
                  $(sequenceDiagramWL72ISMWBinding47),
                )
              : sequenceDiagramWL72ISMWInput39.message,
            $(sequenceDiagramWL72ISMWBinding47),
          ),
      sequenceDiagramWL72ISMWBinding213 = {
        width: sequenceDiagramWL72ISMWBinding211
          ? sequenceDiagramWL72ISMWBinding47.width
          : s.getMax(
              sequenceDiagramWL72ISMWBinding47.width,
              sequenceDiagramWL72ISMWBinding212.width +
                2 * sequenceDiagramWL72ISMWBinding47.noteMargin,
            ),
        height: 0,
        startx: sequenceDiagramWL72ISMWBinding207.x,
        stopx: 0,
        starty: 0,
        stopy: 0,
        message: sequenceDiagramWL72ISMWInput39.message,
      };
    return (
      sequenceDiagramWL72ISMWInput39.placement ===
      sequenceDiagramWL72ISMWInput41.db.PLACEMENT.RIGHTOF
        ? ((sequenceDiagramWL72ISMWBinding213.width =
            sequenceDiagramWL72ISMWBinding211
              ? s.getMax(
                  sequenceDiagramWL72ISMWBinding47.width,
                  sequenceDiagramWL72ISMWBinding212.width,
                )
              : s.getMax(
                  sequenceDiagramWL72ISMWBinding207.width / 2 +
                    sequenceDiagramWL72ISMWBinding208.width / 2,
                  sequenceDiagramWL72ISMWBinding212.width +
                    2 * sequenceDiagramWL72ISMWBinding47.noteMargin,
                )),
          (sequenceDiagramWL72ISMWBinding213.startx =
            sequenceDiagramWL72ISMWBinding209 +
            (sequenceDiagramWL72ISMWBinding207.width +
              sequenceDiagramWL72ISMWBinding47.actorMargin) /
              2))
        : sequenceDiagramWL72ISMWInput39.placement ===
            sequenceDiagramWL72ISMWInput41.db.PLACEMENT.LEFTOF
          ? ((sequenceDiagramWL72ISMWBinding213.width =
              sequenceDiagramWL72ISMWBinding211
                ? s.getMax(
                    sequenceDiagramWL72ISMWBinding47.width,
                    sequenceDiagramWL72ISMWBinding212.width +
                      2 * sequenceDiagramWL72ISMWBinding47.noteMargin,
                  )
                : s.getMax(
                    sequenceDiagramWL72ISMWBinding207.width / 2 +
                      sequenceDiagramWL72ISMWBinding208.width / 2,
                    sequenceDiagramWL72ISMWBinding212.width +
                      2 * sequenceDiagramWL72ISMWBinding47.noteMargin,
                  )),
            (sequenceDiagramWL72ISMWBinding213.startx =
              sequenceDiagramWL72ISMWBinding209 -
              sequenceDiagramWL72ISMWBinding213.width +
              (sequenceDiagramWL72ISMWBinding207.width -
                sequenceDiagramWL72ISMWBinding47.actorMargin) /
                2))
          : sequenceDiagramWL72ISMWInput39.to ===
              sequenceDiagramWL72ISMWInput39.from
            ? ((sequenceDiagramWL72ISMWBinding212 =
                chunkS3R3BYOJG.calculateTextDimensions(
                  sequenceDiagramWL72ISMWBinding211
                    ? chunkS3R3BYOJG.wrapLabel(
                        sequenceDiagramWL72ISMWInput39.message,
                        s.getMax(
                          sequenceDiagramWL72ISMWBinding47.width,
                          sequenceDiagramWL72ISMWBinding207.width,
                        ),
                        $(sequenceDiagramWL72ISMWBinding47),
                      )
                    : sequenceDiagramWL72ISMWInput39.message,
                  $(sequenceDiagramWL72ISMWBinding47),
                )),
              (sequenceDiagramWL72ISMWBinding213.width =
                sequenceDiagramWL72ISMWBinding211
                  ? s.getMax(
                      sequenceDiagramWL72ISMWBinding47.width,
                      sequenceDiagramWL72ISMWBinding207.width,
                    )
                  : s.getMax(
                      sequenceDiagramWL72ISMWBinding207.width,
                      sequenceDiagramWL72ISMWBinding47.width,
                      sequenceDiagramWL72ISMWBinding212.width +
                        2 * sequenceDiagramWL72ISMWBinding47.noteMargin,
                    )),
              (sequenceDiagramWL72ISMWBinding213.startx =
                sequenceDiagramWL72ISMWBinding209 +
                (sequenceDiagramWL72ISMWBinding207.width -
                  sequenceDiagramWL72ISMWBinding213.width) /
                  2))
            : ((sequenceDiagramWL72ISMWBinding213.width =
                Math.abs(
                  sequenceDiagramWL72ISMWBinding209 +
                    sequenceDiagramWL72ISMWBinding207.width / 2 -
                    (sequenceDiagramWL72ISMWBinding210 +
                      sequenceDiagramWL72ISMWBinding208.width / 2),
                ) + sequenceDiagramWL72ISMWBinding47.actorMargin),
              (sequenceDiagramWL72ISMWBinding213.startx =
                sequenceDiagramWL72ISMWBinding209 <
                sequenceDiagramWL72ISMWBinding210
                  ? sequenceDiagramWL72ISMWBinding209 +
                    sequenceDiagramWL72ISMWBinding207.width / 2 -
                    sequenceDiagramWL72ISMWBinding47.actorMargin / 2
                  : sequenceDiagramWL72ISMWBinding210 +
                    sequenceDiagramWL72ISMWBinding208.width / 2 -
                    sequenceDiagramWL72ISMWBinding47.actorMargin / 2)),
      sequenceDiagramWL72ISMWBinding211 &&
        (sequenceDiagramWL72ISMWBinding213.message = chunkS3R3BYOJG.wrapLabel(
          sequenceDiagramWL72ISMWInput39.message,
          sequenceDiagramWL72ISMWBinding213.width -
            2 * sequenceDiagramWL72ISMWBinding47.wrapPadding,
          $(sequenceDiagramWL72ISMWBinding47),
        )),
      logger.debug(
        `NM:[${sequenceDiagramWL72ISMWBinding213.startx},${sequenceDiagramWL72ISMWBinding213.stopx},${sequenceDiagramWL72ISMWBinding213.starty},${sequenceDiagramWL72ISMWBinding213.stopy}:${sequenceDiagramWL72ISMWBinding213.width},${sequenceDiagramWL72ISMWBinding213.height}=${sequenceDiagramWL72ISMWInput39.message}]`,
      ),
      sequenceDiagramWL72ISMWBinding213
    );
  }, "buildNoteModel");
  sequenceDiagramWL72ISMWBinding61 = defineFunctionName(function (
    sequenceDiagramWL72ISMWInput68,
    sequenceDiagramWL72ISMWInput69,
    sequenceDiagramWL72ISMWInput70,
  ) {
    if (
      ![
        sequenceDiagramWL72ISMWInput70.db.LINETYPE.SOLID_OPEN,
        sequenceDiagramWL72ISMWInput70.db.LINETYPE.DOTTED_OPEN,
        sequenceDiagramWL72ISMWInput70.db.LINETYPE.SOLID,
        sequenceDiagramWL72ISMWInput70.db.LINETYPE.DOTTED,
        sequenceDiagramWL72ISMWInput70.db.LINETYPE.SOLID_CROSS,
        sequenceDiagramWL72ISMWInput70.db.LINETYPE.DOTTED_CROSS,
        sequenceDiagramWL72ISMWInput70.db.LINETYPE.SOLID_POINT,
        sequenceDiagramWL72ISMWInput70.db.LINETYPE.DOTTED_POINT,
        sequenceDiagramWL72ISMWInput70.db.LINETYPE.BIDIRECTIONAL_SOLID,
        sequenceDiagramWL72ISMWInput70.db.LINETYPE.BIDIRECTIONAL_DOTTED,
      ].includes(sequenceDiagramWL72ISMWInput68.type)
    )
      return {};
    let [sequenceDiagramWL72ISMWBinding264, sequenceDiagramWL72ISMWBinding265] =
        sequenceDiagramWL72ISMWBinding58(
          sequenceDiagramWL72ISMWInput68.from,
          sequenceDiagramWL72ISMWInput69,
        ),
      [sequenceDiagramWL72ISMWBinding266, sequenceDiagramWL72ISMWBinding267] =
        sequenceDiagramWL72ISMWBinding58(
          sequenceDiagramWL72ISMWInput68.to,
          sequenceDiagramWL72ISMWInput69,
        ),
      sequenceDiagramWL72ISMWBinding268 =
        sequenceDiagramWL72ISMWBinding264 <= sequenceDiagramWL72ISMWBinding266,
      sequenceDiagramWL72ISMWBinding269 = sequenceDiagramWL72ISMWBinding268
        ? sequenceDiagramWL72ISMWBinding265
        : sequenceDiagramWL72ISMWBinding264,
      sequenceDiagramWL72ISMWBinding270 = sequenceDiagramWL72ISMWBinding268
        ? sequenceDiagramWL72ISMWBinding266
        : sequenceDiagramWL72ISMWBinding267,
      sequenceDiagramWL72ISMWBinding271 =
        Math.abs(
          sequenceDiagramWL72ISMWBinding266 - sequenceDiagramWL72ISMWBinding267,
        ) > 2,
      sequenceDiagramWL72ISMWBinding272 = defineFunctionName(
        (sequenceDiagramWL72ISMWInput327) =>
          sequenceDiagramWL72ISMWBinding268
            ? -sequenceDiagramWL72ISMWInput327
            : sequenceDiagramWL72ISMWInput327,
        "adjustValue",
      );
    sequenceDiagramWL72ISMWInput68.from === sequenceDiagramWL72ISMWInput68.to
      ? (sequenceDiagramWL72ISMWBinding270 = sequenceDiagramWL72ISMWBinding269)
      : (sequenceDiagramWL72ISMWInput68.activate &&
          !sequenceDiagramWL72ISMWBinding271 &&
          (sequenceDiagramWL72ISMWBinding270 +=
            sequenceDiagramWL72ISMWBinding272(
              sequenceDiagramWL72ISMWBinding47.activationWidth / 2 - 1,
            )),
        [
          sequenceDiagramWL72ISMWInput70.db.LINETYPE.SOLID_OPEN,
          sequenceDiagramWL72ISMWInput70.db.LINETYPE.DOTTED_OPEN,
        ].includes(sequenceDiagramWL72ISMWInput68.type) ||
          (sequenceDiagramWL72ISMWBinding270 +=
            sequenceDiagramWL72ISMWBinding272(3)),
        [
          sequenceDiagramWL72ISMWInput70.db.LINETYPE.BIDIRECTIONAL_SOLID,
          sequenceDiagramWL72ISMWInput70.db.LINETYPE.BIDIRECTIONAL_DOTTED,
        ].includes(sequenceDiagramWL72ISMWInput68.type) &&
          (sequenceDiagramWL72ISMWBinding269 -=
            sequenceDiagramWL72ISMWBinding272(3)));
    let sequenceDiagramWL72ISMWBinding273 = [
        sequenceDiagramWL72ISMWBinding264,
        sequenceDiagramWL72ISMWBinding265,
        sequenceDiagramWL72ISMWBinding266,
        sequenceDiagramWL72ISMWBinding267,
      ],
      sequenceDiagramWL72ISMWBinding274 = Math.abs(
        sequenceDiagramWL72ISMWBinding269 - sequenceDiagramWL72ISMWBinding270,
      );
    sequenceDiagramWL72ISMWInput68.wrap &&
      sequenceDiagramWL72ISMWInput68.message &&
      (sequenceDiagramWL72ISMWInput68.message = chunkS3R3BYOJG.wrapLabel(
        sequenceDiagramWL72ISMWInput68.message,
        s.getMax(
          sequenceDiagramWL72ISMWBinding274 +
            2 * sequenceDiagramWL72ISMWBinding47.wrapPadding,
          sequenceDiagramWL72ISMWBinding47.width,
        ),
        sequenceDiagramWL72ISMWBinding50(sequenceDiagramWL72ISMWBinding47),
      ));
    let sequenceDiagramWL72ISMWBinding275 =
      chunkS3R3BYOJG.calculateTextDimensions(
        sequenceDiagramWL72ISMWInput68.message,
        sequenceDiagramWL72ISMWBinding50(sequenceDiagramWL72ISMWBinding47),
      );
    return {
      width: s.getMax(
        sequenceDiagramWL72ISMWInput68.wrap
          ? 0
          : sequenceDiagramWL72ISMWBinding275.width +
              2 * sequenceDiagramWL72ISMWBinding47.wrapPadding,
        sequenceDiagramWL72ISMWBinding274 +
          2 * sequenceDiagramWL72ISMWBinding47.wrapPadding,
        sequenceDiagramWL72ISMWBinding47.width,
      ),
      height: 0,
      startx: sequenceDiagramWL72ISMWBinding269,
      stopx: sequenceDiagramWL72ISMWBinding270,
      starty: 0,
      stopy: 0,
      message: sequenceDiagramWL72ISMWInput68.message,
      type: sequenceDiagramWL72ISMWInput68.type,
      wrap: sequenceDiagramWL72ISMWInput68.wrap,
      fromBounds: Math.min.apply(null, sequenceDiagramWL72ISMWBinding273),
      toBounds: Math.max.apply(null, sequenceDiagramWL72ISMWBinding273),
    };
  }, "buildMessageModel");
  sequenceDiagramWL72ISMWBinding62 = defineFunctionName(async function (
    sequenceDiagramWL72ISMWInput23,
    sequenceDiagramWL72ISMWInput24,
    sequenceDiagramWL72ISMWInput25,
    sequenceDiagramWL72ISMWInput26,
  ) {
    let sequenceDiagramWL72ISMWBinding172 = {},
      sequenceDiagramWL72ISMWBinding173 = [],
      sequenceDiagramWL72ISMWBinding174,
      sequenceDiagramWL72ISMWBinding175,
      sequenceDiagramWL72ISMWBinding176;
    for (let sequenceDiagramWL72ISMWBinding177 of sequenceDiagramWL72ISMWInput23) {
      switch (sequenceDiagramWL72ISMWBinding177.type) {
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.LOOP_START:
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.ALT_START:
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.OPT_START:
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.PAR_START:
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.PAR_OVER_START:
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.CRITICAL_START:
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.BREAK_START:
          sequenceDiagramWL72ISMWBinding173.push({
            id: sequenceDiagramWL72ISMWBinding177.id,
            msg: sequenceDiagramWL72ISMWBinding177.message,
            from: 9007199254740991,
            to: -9007199254740991,
            width: 0,
          });
          break;
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.ALT_ELSE:
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.PAR_AND:
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.CRITICAL_OPTION:
          sequenceDiagramWL72ISMWBinding177.message &&
            ((sequenceDiagramWL72ISMWBinding174 =
              sequenceDiagramWL72ISMWBinding173.pop()),
            (sequenceDiagramWL72ISMWBinding172[
              sequenceDiagramWL72ISMWBinding174.id
            ] = sequenceDiagramWL72ISMWBinding174),
            (sequenceDiagramWL72ISMWBinding172[
              sequenceDiagramWL72ISMWBinding177.id
            ] = sequenceDiagramWL72ISMWBinding174),
            sequenceDiagramWL72ISMWBinding173.push(
              sequenceDiagramWL72ISMWBinding174,
            ));
          break;
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.LOOP_END:
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.ALT_END:
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.OPT_END:
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.PAR_END:
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.CRITICAL_END:
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.BREAK_END:
          sequenceDiagramWL72ISMWBinding174 =
            sequenceDiagramWL72ISMWBinding173.pop();
          sequenceDiagramWL72ISMWBinding172[
            sequenceDiagramWL72ISMWBinding174.id
          ] = sequenceDiagramWL72ISMWBinding174;
          break;
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.ACTIVE_START:
          {
            let sequenceDiagramWL72ISMWBinding398 =
                sequenceDiagramWL72ISMWInput24.get(
                  sequenceDiagramWL72ISMWBinding177.from
                    ? sequenceDiagramWL72ISMWBinding177.from
                    : sequenceDiagramWL72ISMWBinding177.to.actor,
                ),
              sequenceDiagramWL72ISMWBinding399 =
                sequenceDiagramWL72ISMWBinding57(
                  sequenceDiagramWL72ISMWBinding177.from
                    ? sequenceDiagramWL72ISMWBinding177.from
                    : sequenceDiagramWL72ISMWBinding177.to.actor,
                ).length,
              sequenceDiagramWL72ISMWBinding400 =
                sequenceDiagramWL72ISMWBinding398.x +
                sequenceDiagramWL72ISMWBinding398.width / 2 +
                ((sequenceDiagramWL72ISMWBinding399 - 1) *
                  sequenceDiagramWL72ISMWBinding47.activationWidth) /
                  2,
              sequenceDiagramWL72ISMWBinding401 = {
                startx: sequenceDiagramWL72ISMWBinding400,
                stopx:
                  sequenceDiagramWL72ISMWBinding400 +
                  sequenceDiagramWL72ISMWBinding47.activationWidth,
                actor: sequenceDiagramWL72ISMWBinding177.from,
                enabled: true,
              };
            sequenceDiagramWL72ISMWBinding48.activations.push(
              sequenceDiagramWL72ISMWBinding401,
            );
          }
          break;
        case sequenceDiagramWL72ISMWInput26.db.LINETYPE.ACTIVE_END:
          {
            let sequenceDiagramWL72ISMWBinding480 =
              sequenceDiagramWL72ISMWBinding48.activations
                .map((item) => item.actor)
                .lastIndexOf(sequenceDiagramWL72ISMWBinding177.from);
            sequenceDiagramWL72ISMWBinding48.activations
              .splice(sequenceDiagramWL72ISMWBinding480, 1)
              .splice(0, 1);
          }
          break;
      }
      sequenceDiagramWL72ISMWBinding177.placement === undefined
        ? ((sequenceDiagramWL72ISMWBinding176 =
            sequenceDiagramWL72ISMWBinding61(
              sequenceDiagramWL72ISMWBinding177,
              sequenceDiagramWL72ISMWInput24,
              sequenceDiagramWL72ISMWInput26,
            )),
          (sequenceDiagramWL72ISMWBinding177.msgModel =
            sequenceDiagramWL72ISMWBinding176),
          sequenceDiagramWL72ISMWBinding176.startx &&
            sequenceDiagramWL72ISMWBinding176.stopx &&
            sequenceDiagramWL72ISMWBinding173.length > 0 &&
            sequenceDiagramWL72ISMWBinding173.forEach((item) => {
              if (
                ((sequenceDiagramWL72ISMWBinding174 = item),
                sequenceDiagramWL72ISMWBinding176.startx ===
                  sequenceDiagramWL72ISMWBinding176.stopx)
              ) {
                let sequenceDiagramWL72ISMWBinding378 =
                    sequenceDiagramWL72ISMWInput24.get(
                      sequenceDiagramWL72ISMWBinding177.from,
                    ),
                  sequenceDiagramWL72ISMWBinding379 =
                    sequenceDiagramWL72ISMWInput24.get(
                      sequenceDiagramWL72ISMWBinding177.to,
                    );
                sequenceDiagramWL72ISMWBinding174.from = s.getMin(
                  sequenceDiagramWL72ISMWBinding378.x -
                    sequenceDiagramWL72ISMWBinding176.width / 2,
                  sequenceDiagramWL72ISMWBinding378.x -
                    sequenceDiagramWL72ISMWBinding378.width / 2,
                  sequenceDiagramWL72ISMWBinding174.from,
                );
                sequenceDiagramWL72ISMWBinding174.to = s.getMax(
                  sequenceDiagramWL72ISMWBinding379.x +
                    sequenceDiagramWL72ISMWBinding176.width / 2,
                  sequenceDiagramWL72ISMWBinding379.x +
                    sequenceDiagramWL72ISMWBinding378.width / 2,
                  sequenceDiagramWL72ISMWBinding174.to,
                );
                sequenceDiagramWL72ISMWBinding174.width =
                  s.getMax(
                    sequenceDiagramWL72ISMWBinding174.width,
                    Math.abs(
                      sequenceDiagramWL72ISMWBinding174.to -
                        sequenceDiagramWL72ISMWBinding174.from,
                    ),
                  ) - sequenceDiagramWL72ISMWBinding47.labelBoxWidth;
              } else {
                sequenceDiagramWL72ISMWBinding174.from = s.getMin(
                  sequenceDiagramWL72ISMWBinding176.startx,
                  sequenceDiagramWL72ISMWBinding174.from,
                );
                sequenceDiagramWL72ISMWBinding174.to = s.getMax(
                  sequenceDiagramWL72ISMWBinding176.stopx,
                  sequenceDiagramWL72ISMWBinding174.to,
                );
                sequenceDiagramWL72ISMWBinding174.width =
                  s.getMax(
                    sequenceDiagramWL72ISMWBinding174.width,
                    sequenceDiagramWL72ISMWBinding176.width,
                  ) - sequenceDiagramWL72ISMWBinding47.labelBoxWidth;
              }
            }))
        : ((sequenceDiagramWL72ISMWBinding175 =
            await sequenceDiagramWL72ISMWBinding60(
              sequenceDiagramWL72ISMWBinding177,
              sequenceDiagramWL72ISMWInput24,
              sequenceDiagramWL72ISMWInput26,
            )),
          (sequenceDiagramWL72ISMWBinding177.noteModel =
            sequenceDiagramWL72ISMWBinding175),
          sequenceDiagramWL72ISMWBinding173.forEach((item) => {
            sequenceDiagramWL72ISMWBinding174 = item;
            sequenceDiagramWL72ISMWBinding174.from = s.getMin(
              sequenceDiagramWL72ISMWBinding174.from,
              sequenceDiagramWL72ISMWBinding175.startx,
            );
            sequenceDiagramWL72ISMWBinding174.to = s.getMax(
              sequenceDiagramWL72ISMWBinding174.to,
              sequenceDiagramWL72ISMWBinding175.startx +
                sequenceDiagramWL72ISMWBinding175.width,
            );
            sequenceDiagramWL72ISMWBinding174.width =
              s.getMax(
                sequenceDiagramWL72ISMWBinding174.width,
                Math.abs(
                  sequenceDiagramWL72ISMWBinding174.from -
                    sequenceDiagramWL72ISMWBinding174.to,
                ),
              ) - sequenceDiagramWL72ISMWBinding47.labelBoxWidth;
          }));
    }
    return (
      (sequenceDiagramWL72ISMWBinding48.activations = []),
      logger.debug("Loop type widths:", sequenceDiagramWL72ISMWBinding172),
      sequenceDiagramWL72ISMWBinding172
    );
  }, "calculateLoopBounds");
  SequenceDiagramWL72ISMW = {
    parser: sequenceDiagramWL72ISMWBinding3,
    get db() {
      return new sequenceDiagramWL72ISMWBinding8();
    },
    renderer: {
      bounds: sequenceDiagramWL72ISMWBinding48,
      drawActors: sequenceDiagramWL72ISMWBinding54,
      drawActorsPopup: sequenceDiagramWL72ISMWBinding55,
      setConf: sequenceDiagramWL72ISMWBinding56,
      draw: $e,
    },
    styles: sequenceDiagramWL72ISMWBinding9,
    init: defineFunctionName((sequenceDiagramWL72ISMWInput275) => {
      sequenceDiagramWL72ISMWInput275.sequence ||= {};
      sequenceDiagramWL72ISMWInput275.wrap &&
        ((sequenceDiagramWL72ISMWInput275.sequence.wrap =
          sequenceDiagramWL72ISMWInput275.wrap),
        U({
          sequence: {
            wrap: sequenceDiagramWL72ISMWInput275.wrap,
          },
        }));
    }, "init"),
  };
})();
export { SequenceDiagramWL72ISMW as diagram };
