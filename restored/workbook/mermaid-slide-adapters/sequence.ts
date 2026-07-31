// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-62: sequence diagram plugin (legacy DFe / EFe).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  measureTextBlock,
  ensureMeasureTextInit,
  applyRunTextStyle,
  ensureApplyRunTextStyleInit,
  createScratchSlide,
  ensureScratchSlideInit,
  resolveClassTextStyles,
  layoutGraphNodes,
  renderGraphToSlide,
  ensureChartLikePluginsInit,
  ensureFallbackPluginInit,
  ensureFlowchartPluginInit,
  ensureStateGeometryMapsInit,
  ensureArrowGeometryMapsInit,
  ensureConnectorHelpersInit,
  stateNodeGeometry,
  mindNodeGeometry,
  roundedConnectorCorner,
} from "./boundary-hooks";
import { msa } from "./adapters-bag";

export const ensureSequenceInit = esmInit(() => {
  ensureMeasureTextInit();
  ensureApplyRunTextStyleInit();
  ensureScratchSlideInit();
  ensureMeasureTextInit();
  ensureApplyRunTextStyleInit();
  ensureScratchSlideInit();
  msa.seqActorGap = 24;
  msa.seqPad = 12;
  msa.seqActorWidth = 88;
  msa.seqActorMinWidth = 260;
  msa.msaBind1718 = 56;
  msa.msaBind1719 = 180;
  msa.msaBind1720 = 70;
  msa.msaBind1721 = 12;
  msa.msaBind1722 = 22;
  msa.seqNoteFontSize = 14;
  msa.seqLifelineTop = 0;
  msa.seqMessageGap = 24;
  msa.seqActivationPad = 38;
  msa.seqNotePad = 12;
  msa.seqArrowSize = 5;
  msa.seqLineWidth = 2;
  msa.seqZBase = 0;
  msa.seqAccentToken = "accent1";
  msa.seqAccentLight = {
    type: "theme",
    value: msa.seqAccentToken,
    transform: {
      lighten: 0.8,
    },
  };
  msa.seqAccentMid = {
    type: "theme",
    value: msa.seqAccentToken,
    transform: {
      lighten: 0.6,
    },
  };
  msa.seqAccentDark = {
    type: "theme",
    value: msa.seqAccentToken,
    transform: {
      darken: 0.25,
    },
  };
  msa.seqAccentDarker = {
    type: "theme",
    value: msa.seqAccentToken,
    transform: {
      darken: 0.5,
    },
  };
  msa.seqSolidFill = {
    type: "solid",
    color: msa.seqAccentLight,
  };
  msa.seqLineStyle = {
    fill: {
      type: "solid",
      color: msa.seqAccentDark,
    },
    style: "solid",
    width: 1,
  };
  msa.seqThickLine = {
    fill: {
      type: "solid",
      color: msa.seqAccentDarker,
    },
    style: "solid",
    width: 2,
  };
  msa.seqMidLine = {
    fill: {
      type: "solid",
      color: msa.seqAccentDark,
    },
    style: "solid",
    width: 2,
  };
  msa.seqNoteFill = {
    type: "solid",
    color: {
      type: "theme",
      value: "bg1",
      transform: {
        opacity: 0.9,
      },
    },
  };
  msa.seqActorFill = {
    type: "none",
  };
  msa.seqActivationFill = {
    fill: {
      type: "none",
    },
    style: "solid",
    width: 0,
  };
  msa.seqMessageStyle = (msaIn16640) => !!msaIn16640;
  msa.seqNoteStyle = (msaIn13418, msaIn13419) =>
    msaIn13419
      .map((item) => msaIn13418.LINETYPE[item])
      .filter((item) => item !== undefined);
  msa.seqActorBox = (msaIn6854, msaIn6855) =>
    new Set(
      msa.seqNoteStyle(msaIn6855, [
        "DOTTED",
        "DOTTED_OPEN",
        "DOTTED_POINT",
        "DOTTED_CROSS",
        "BIDIRECTIONAL_DOTTED",
      ]),
    ).has(msaIn6854)
      ? "dashed"
      : "solid";
  msa.seqNoteBox = (msaIn5296, msaIn5297) => {
    let msaBind14910 = new Set(
        msa.seqNoteStyle(msaIn5297, ["SOLID_OPEN", "DOTTED_OPEN"]),
      ),
      msaBind14911 = new Set(
        msa.seqNoteStyle(msaIn5297, [
          "BIDIRECTIONAL_SOLID",
          "BIDIRECTIONAL_DOTTED",
        ]),
      ),
      msaBind14912 = new Set(
        msa.seqNoteStyle(msaIn5297, ["SOLID_CROSS", "DOTTED_CROSS"]),
      ),
      msaBind14913 = msaBind14910.has(msaIn5296)
        ? "none"
        : msaBind14912.has(msaIn5296)
          ? "diamond"
          : "arrow";
    return {
      arrowStart: msaBind14911.has(msaIn5296) ? msaBind14913 : "none",
      arrowEnd: msaBind14913,
    };
  };
  msa.seqActivationBox = (msaIn14400) =>
    typeof msaIn14400.message == "string" ? msaIn14400.message : "";
  msa.seqLifeline = (msaIn7849) =>
    typeof msaIn7849 == "string"
      ? msaIn7849
      : msaIn7849 &&
          typeof msaIn7849 == "object" &&
          "actor" in msaIn7849 &&
          typeof msaIn7849.actor == "string"
        ? msaIn7849.actor
        : "";
  msa.seqBuildActors = (props) =>
    "activate" in props && props.activate === true;
  msa.seqBuildMessages = (
    msaIn4167,
    msaIn4168,
    msaIn4169,
    msaIn4170,
    msaIn4171,
    msaIn4172,
  ) => {
    let msaBind13194 = msaIn4167.shapes.add({
      geometry: "roundRect",
      position: {
        left: msaIn4169,
        top: msaIn4170,
        width: msaIn4171,
        height: msaIn4172,
      },
      fill: msa.seqSolidFill,
      line: msa.seqLineStyle,
    });
    return (
      (msaBind13194.text = msaIn4168),
      applyRunTextStyle(msaBind13194, {
        align: "center",
        verticalAlign: "middle",
        fontSize: 14,
        color: msa.seqAccentDarker,
        wrap: "none",
      }),
      msaBind13194
    );
  };
  msa.sequencePlugin = {
    id: "sequence",
    supports: (msaIn16232) => msaIn16232 === "sequence",
    convert: async (msaIn59, msaIn60) => {
      let msaBind2453 = msaIn59.db,
        { slide } = createScratchSlide(),
        msaBind2454 = msaBind2453.getActorKeys(),
        msaBind2455 = msaBind2453.getActors(),
        msaBind2456 = new Map(),
        msaBind2457 = {},
        msaBind2458 = msaBind2453.getMessages(),
        msaBind2459 = msaBind2458.filter((item) => {
          let msaBind14784 = msaBind2453.LINETYPE.NOTE,
            msaBind14785 = msaBind2453.LINETYPE.ACTIVE_START,
            msaBind14786 = msaBind2453.LINETYPE.ACTIVE_END;
          return (
            item.type !== msaBind14784 &&
            item.type !== msaBind14785 &&
            item.type !== msaBind14786 &&
            msa.seqLifeline(item.from).length > 0 &&
            msa.seqLifeline(item.to).length > 0
          );
        }),
        msaBind2460 = msaBind2459.reduce((accumulator, current) => {
          let msaBind19204 = msa.seqActivationBox(current);
          if (!msaBind19204) return accumulator;
          let msaBind19205 = measureTextBlock(msaBind19204, {
            fontSize: msa.seqNoteFontSize,
          });
          return Math.max(
            accumulator,
            msaBind19205.width + msa.msaBind1721 * 2,
          );
        }, 0),
        msaBind2461 = Math.max(msa.seqActorMinWidth, msaBind2460 + 96),
        msaBind2462 = msaBind2454.map((item) => {
          let msaBind15254 = msaBind2455.get(item),
            msaBind15255 =
              msaBind15254?.description || msaBind15254?.name || item,
            msaBind15256 = measureTextBlock(msaBind15255);
          return {
            actorId: item,
            label: msaBind15255,
            width: Math.max(
              msa.seqActorWidth,
              msaBind15256.width + msa.seqActorGap * 2,
            ),
            height: Math.max(40, msaBind15256.height + msa.seqPad * 2),
          };
        });
      msaBind2462.forEach((item, index) => {
        let msaBind11633 = index > 0 ? msaBind2462[index - 1] : undefined,
          msaBind11634 =
            msaBind11633 === undefined
              ? undefined
              : msaBind2456.get(msaBind11633.actorId),
          msaBind11635 = msaBind11634
            ? msaBind11634.centerX + msaBind2461
            : item.width / 2,
          msaBind11636 = msaBind11635 - item.width / 2,
          msaBind11637 = msa.seqBuildMessages(
            slide,
            item.label,
            msaBind11636,
            0,
            item.width,
            item.height,
          );
        msaBind2457[item.actorId] = msaBind11637.id;
        msaBind2456.set(item.actorId, {
          shape: msaBind11637,
          label: item.label,
          centerX: msaBind11635,
          centerY: item.height / 2,
          width: item.width,
          height: item.height,
        });
      });
      let msaBind2463 = msaBind2454
          .map((item) => msaBind2456.get(item))
          .filter(msa.seqMessageStyle),
        msaBind2464 =
          msaBind2463.reduce(
            (accumulator, current) => Math.max(accumulator, current.height),
            40,
          ) + msa.seqLifelineTop,
        msaBind2465 = msaBind2464 + msa.seqActivationPad,
        msaBind2466 =
          msaBind2464 +
          Math.max(
            220,
            msa.seqActivationPad +
              Math.max(msaBind2459.length - 1, 0) * msa.msaBind1718 +
              msa.seqMessageGap,
          );
      msaBind2463.forEach((item, index) => {
        let msaBind16070 = msaBind2454[index];
        !item ||
          !msaBind16070 ||
          slide.shapes.add({
            geometry: "line",
            position: {
              left: item.centerX,
              top: msaBind2464,
              width: 0,
              height: msaBind2466 - msaBind2464,
            },
            fill: msa.seqActorFill,
            line: msa.seqMidLine,
          });
      });
      let msaBind2467 = new Map(),
        msaBind2468 = [],
        msaBind2469 = (msaIn5606, msaIn5607, msaIn5608) =>
          slide.shapes.add({
            geometry: "rect",
            position: {
              left: msaIn5608 === 3 ? msaIn5606 - msa.seqLineWidth : msaIn5606,
              top: msaIn5607 - msa.seqLineWidth / 2,
              width: msa.seqLineWidth,
              height: msa.seqLineWidth,
            },
            fill: msa.seqActorFill,
            line: msa.seqActivationFill,
          }),
        msaBind2470 = (msaIn2551, msaIn2552) => {
          let msaBind9919 = msaBind2467.get(msaIn2552) ?? [];
          return msaBind9919.length === 0
            ? {
                left: msaIn2551.centerX - 1,
                right: msaIn2551.centerX + 1,
                hasActivation: false,
              }
            : {
                left: msaBind9919.reduce((accumulator, current) => {
                  let msaBind20489 =
                    msaIn2551.centerX -
                    msa.seqNotePad / 2 +
                    current.depth * msa.seqArrowSize;
                  return Math.min(accumulator, msaBind20489);
                }, 1 / 0),
                right: msaBind9919.reduce((accumulator, current) => {
                  let msaBind20347 =
                    msaIn2551.centerX -
                    msa.seqNotePad / 2 +
                    current.depth * msa.seqArrowSize;
                  return Math.max(accumulator, msaBind20347 + msa.seqNotePad);
                }, -1 / 0),
                hasActivation: true,
              };
        },
        msaBind2471 = msaBind2465,
        msaBind2472 = msaBind2465;
      return (
        msaBind2458.forEach((item) => {
          let msaBind3011 = msaBind2453.LINETYPE.NOTE,
            msaBind3012 = msaBind2453.LINETYPE.ACTIVE_START,
            msaBind3013 = msaBind2453.LINETYPE.ACTIVE_END,
            msaBind3014 = item.type ?? 0;
          if (msaBind3012 !== undefined && msaBind3014 === msaBind3012) {
            let msaBind19172 = msa.seqLifeline(item.from),
              msaBind19173 = msaBind2467.get(msaBind19172) ?? [];
            msaBind19173.push({
              startY: msaBind2472,
              depth: msaBind19173.length,
            });
            msaBind2467.set(msaBind19172, msaBind19173);
            return;
          }
          if (msaBind3013 !== undefined && msaBind3014 === msaBind3013) {
            let msaBind15507 = msa.seqLifeline(item.from),
              msaBind15508 = (msaBind2467.get(msaBind15507) ?? []).pop();
            msaBind15508 &&
              msaBind2468.push({
                actorId: msaBind15507,
                startY: msaBind15508.startY,
                endY: msaBind2472,
                depth: msaBind15508.depth,
              });
            return;
          }
          if (msaBind3011 !== undefined && item.type === msaBind3011) {
            let msaBind7109 = msa.seqActivationBox(item),
              msaBind7110 = msa.seqLifeline(item.from),
              msaBind7111 = msaBind2456.get(msaBind7110);
            if (!msaBind7111) {
              msaBind2471 += msa.msaBind1718;
              return;
            }
            let msaBind7112 =
                item.placement === "left of"
                  ? msaBind7111.centerX - msa.msaBind1719 - 40
                  : item.placement === "over"
                    ? msaBind7111.centerX - msa.msaBind1719 / 2
                    : msaBind7111.centerX + 40,
              msaBind7113 = slide.shapes.add({
                geometry: "rect",
                position: {
                  left: msaBind7112,
                  top: msaBind2471 - msa.msaBind1720 / 2,
                  width: msa.msaBind1719,
                  height: msa.msaBind1720,
                },
                fill: {
                  type: "solid",
                  color: msa.seqAccentLight,
                },
                line: msa.seqLineStyle,
              });
            msaBind7113.text = msaBind7109;
            applyRunTextStyle(msaBind7113, {
              align: "center",
              verticalAlign: "middle",
              fontSize: msa.seqNoteFontSize,
              color: msa.seqAccentDarker,
            });
            msaBind2472 = msaBind2471;
            msaBind2471 += msa.msaBind1718;
            return;
          }
          let msaBind3015 = msa.seqLifeline(item.from),
            msaBind3016 = msa.seqLifeline(item.to);
          if (!msaBind3015 || !msaBind3016) return;
          let msaBind3017 = msaBind2456.get(msaBind3015),
            msaBind3018 = msaBind2456.get(msaBind3016),
            msaBind3019 = msa.seqActivationBox(item);
          if (!msaBind3017 || !msaBind3018) return;
          if (msaBind3015 === msaBind3016) {
            let msaBind10524 = slide.shapes.add({
              geometry: "rect",
              position: {
                left: msaBind3017.centerX + 30,
                top: msaBind2471 - 20,
                width: msa.msaBind1719,
                height: 40,
              },
              fill: msa.seqNoteFill,
              line: msa.seqLineStyle,
            });
            msaBind10524.text = msaBind3019;
            applyRunTextStyle(msaBind10524, {
              align: "center",
              verticalAlign: "middle",
              fontSize: msa.seqNoteFontSize,
              color: msa.seqAccentDarker,
            });
            msaBind2472 = msaBind2471;
            msaBind2471 += msa.msaBind1718;
            return;
          }
          let msaBind3020 = msaBind3017.centerX <= msaBind3018.centerX,
            msaBind3021 = msaBind2470(msaBind3017, msaBind3015),
            msaBind3022 = msaBind2470(msaBind3018, msaBind3016),
            msaBind3023 = msaBind3020 ? msaBind3021.right : msaBind3021.left,
            msaBind3024 = msaBind3020 ? msaBind3022.left : msaBind3022.right,
            msaBind3025 = msa.seqNoteBox(msaBind3014, msaBind2453);
          msa.seqBuildActors(item) &&
            !msaBind3022.hasActivation &&
            (msaBind3024 += msaBind3020 ? -5 : msa.seqNotePad / 2 - 1);
          msaBind3025.arrowEnd !== "none" &&
            (msaBind3024 += msaBind3020 ? 0 : msa.seqZBase);
          msaBind3025.arrowStart !== "none" &&
            (msaBind3023 += msaBind3020 ? msa.seqZBase : 0);
          let msaBind3026 = msaBind3020 ? 3 : 1,
            msaBind3027 = msaBind3020 ? 1 : 3,
            msaBind3028 = msaBind2469(msaBind3023, msaBind2471, msaBind3026),
            msaBind3029 = msaBind2469(msaBind3024, msaBind2471, msaBind3027),
            msaBind3030 = msa.seqActorBox(msaBind3014, msaBind2453),
            msaBind3031 = slide.shapes.add({
              geometry: "connector",
              from: msaBind3028,
              to: msaBind3029,
              fromIdx: msaBind3026,
              toIdx: msaBind3027,
              kind: "straight",
              head:
                msaBind3025.arrowStart === "none"
                  ? undefined
                  : {
                      type: msaBind3025.arrowStart,
                    },
              tail:
                msaBind3025.arrowEnd === "none"
                  ? undefined
                  : {
                      type: msaBind3025.arrowEnd,
                    },
              line: {
                ...msa.seqThickLine,
                style: msaBind3030,
              },
            });
          if (((msaBind3031.zIndex = 3), msaBind3019)) {
            let msaBind8922 = measureTextBlock(msaBind3019, {
                fontSize: msa.seqNoteFontSize,
              }),
              msaBind8923 = slide.shapes.add({
                geometry: "rect",
                position: {
                  left: (msaBind3023 + msaBind3024) / 2 - msaBind8922.width / 2,
                  top: msaBind2471 - msa.msaBind1722 - 4,
                  width: Math.max(40, msaBind8922.width + msa.msaBind1721),
                  height: msa.msaBind1722,
                },
                fill: msa.seqNoteFill,
                line: msa.seqActivationFill,
              });
            msaBind8923.text = msaBind3019;
            applyRunTextStyle(msaBind8923, {
              align: "center",
              verticalAlign: "middle",
              fontSize: msa.seqNoteFontSize,
              color: msa.seqAccentDarker,
              wrap: "none",
              insets: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
            });
            msaBind8923.zIndex = (msaBind3031.zIndex ?? 0) + 1;
          }
          msaBind2472 = msaBind2471;
          msaBind2471 += msa.msaBind1718;
        }),
        msaBind2467.forEach((item, index) => {
          item.forEach((_item) => {
            msaBind2468.push({
              actorId: index,
              startY: _item.startY,
              endY: msaBind2472 + msa.msaBind1718 / 2,
              depth: _item.depth,
            });
          });
        }),
        msaBind2468.forEach((item) => {
          let msaBind11916 = msaBind2456.get(item.actorId);
          if (!msaBind11916) return;
          let msaBind11917 =
              msaBind11916.centerX -
              msa.seqNotePad / 2 +
              item.depth * msa.seqArrowSize,
            msaBind11918 = Math.min(item.startY, item.endY),
            msaBind11919 = Math.max(18, Math.abs(item.endY - item.startY)),
            msaBind11920 = slide.shapes.add({
              geometry: "rect",
              position: {
                left: msaBind11917,
                top: msaBind11918,
                width: msa.seqNotePad,
                height: msaBind11919,
              },
              fill: {
                type: "solid",
                color: msa.seqAccentMid,
              },
              line: msa.seqLineStyle,
            });
          msaBind11920.zIndex = 2;
        }),
        msaBind2463.forEach((item) => {
          let msaBind21073 = item.centerX - item.width / 2;
          msa.seqBuildMessages(
            slide,
            item.label,
            msaBind21073,
            msaBind2466,
            item.width,
            item.height,
          );
        }),
        {
          elements: slide.toProto().elements ?? [],
          idMap: msaBind2457,
        }
      );
    },
  };
});
