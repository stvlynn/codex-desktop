// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-19: OffscreenCanvas pattern tile painters + registry (legacy R_/z_/Rce).

import { esmInit } from "../../runtime/rolldown-runtime";
function fillSolidTileBackground(patIn12487, patIn12488, patIn12489) {
  patIn12487.fillStyle = patIn12488;
  patIn12487.fillRect(0, 0, 2 * patIn12489, 2 * patIn12489);
}
function strokeDiagonalHatch(
  patIn4065,
  patIn4066,
  patIn4067,
  patIn4068,
  patIn4069,
) {
  patIn4065.strokeStyle = patIn4066;
  patIn4065.lineWidth = scaledStrokeWidth(patIn4068, 1);
  patIn4065.lineCap = "butt";
  patIn4065.lineJoin = "bevel";
  patIn4065.miterLimit = 1;
  patIn4069?.dashed &&
    patIn4065.setLineDash([patIn4067 * 0.6, patIn4067 * 0.6]);
  patIn4065.beginPath();
  patIn4065.moveTo(-2 * patIn4067, 2 * patIn4067);
  patIn4065.lineTo(2 * patIn4067, -2 * patIn4067);
  patIn4065.moveTo(0, 2 * patIn4067);
  patIn4065.lineTo(4 * patIn4067, -2 * patIn4067);
  patIn4065.moveTo(2 * patIn4067, 2 * patIn4067);
  patIn4065.lineTo(6 * patIn4067, -2 * patIn4067);
  patIn4065.stroke();
  patIn4069?.dashed && patIn4065.setLineDash([]);
}
let scaledStrokeWidth: ((...args: unknown[]) => unknown) | undefined;
let halfScaledStrokeWidth: ((...args: unknown[]) => unknown) | undefined;
let paintHorizontalPattern: ((...args: unknown[]) => unknown) | undefined;
let paintVerticalPattern: ((...args: unknown[]) => unknown) | undefined;
let paintCrossPattern: ((...args: unknown[]) => unknown) | undefined;
let paintDiagonalPattern: ((...args: unknown[]) => unknown) | undefined;
let paintDashedDiagonalPattern: ((...args: unknown[]) => unknown) | undefined;
let paintDiagonalCrossPattern: ((...args: unknown[]) => unknown) | undefined;
let paintGridPattern: ((...args: unknown[]) => unknown) | undefined;
let paintDotsPattern: ((...args: unknown[]) => unknown) | undefined;
let paintCheckPattern: ((...args: unknown[]) => unknown) | undefined;
let paintTrellisPattern: ((...args: unknown[]) => unknown) | undefined;
let paintHorizontalDashedPattern: ((...args: unknown[]) => unknown) | undefined;
let paintVerticalDashedPattern: ((...args: unknown[]) => unknown) | undefined;
let paintPlaidPattern: ((...args: unknown[]) => unknown) | undefined;
let paintHorizontalBrickPattern: ((...args: unknown[]) => unknown) | undefined;
let paintDiagonalBrickPattern: ((...args: unknown[]) => unknown) | undefined;
let paintSolidDiamondPattern: ((...args: unknown[]) => unknown) | undefined;
let paintOpenDiamondPattern: ((...args: unknown[]) => unknown) | undefined;
let paintDottedDiamondPattern: ((...args: unknown[]) => unknown) | undefined;
let paintConfettiSmallPattern: ((...args: unknown[]) => unknown) | undefined;
let paintConfettiLargePattern: ((...args: unknown[]) => unknown) | undefined;
let paintSpherePattern: ((...args: unknown[]) => unknown) | undefined;
let paintWeavePattern: ((...args: unknown[]) => unknown) | undefined;
let paintDivotPattern: ((...args: unknown[]) => unknown) | undefined;
let paintShinglePattern: ((...args: unknown[]) => unknown) | undefined;
let paintWavePattern: ((...args: unknown[]) => unknown) | undefined;
let paintZigZagPattern: ((...args: unknown[]) => unknown) | undefined;
export let patternTilePainters: Record<
  string,
  ((...args: unknown[]) => void) | undefined
>;
export const ensurePatternTilePaintersInit = esmInit(() => {
  scaledStrokeWidth = (patIn15936, patIn15937) =>
    Math.max(1, patIn15937 * patIn15936);
  halfScaledStrokeWidth = (patIn16255, patIn16256) =>
    scaledStrokeWidth(patIn16255, patIn16256) / 2;
  paintHorizontalPattern = (
    patIn8868,
    patIn8869,
    patIn8870,
    patIn8871,
    patIn8872,
  ) => {
    patIn8868.fillStyle = patIn8870;
    patIn8868.fillRect(0, 0, 2 * patIn8871, 2 * patIn8871);
    patIn8868.fillStyle = patIn8869;
    let fillBind19418 = scaledStrokeWidth(patIn8872, 1);
    patIn8868.fillRect(
      0,
      patIn8871 - fillBind19418 / 2,
      2 * patIn8871,
      fillBind19418,
    );
  };
  paintVerticalPattern = (
    patIn8873,
    patIn8874,
    patIn8875,
    patIn8876,
    patIn8877,
  ) => {
    patIn8873.fillStyle = patIn8875;
    patIn8873.fillRect(0, 0, 2 * patIn8876, 2 * patIn8876);
    patIn8873.fillStyle = patIn8874;
    let fillBind19419 = scaledStrokeWidth(patIn8877, 1);
    patIn8873.fillRect(
      patIn8876 - fillBind19419 / 2,
      0,
      fillBind19419,
      2 * patIn8876,
    );
  };
  paintCrossPattern = (
    patIn11829,
    patIn11830,
    patIn11831,
    patIn11832,
    patIn11833,
  ) => {
    paintHorizontalPattern(
      patIn11829,
      patIn11830,
      patIn11831,
      patIn11832,
      patIn11833,
    );
    paintVerticalPattern(
      patIn11829,
      patIn11830,
      "rgba(0,0,0,0)",
      patIn11832,
      patIn11833,
    );
  };
  paintDiagonalPattern = (
    patIn13211,
    patIn13212,
    patIn13213,
    patIn13214,
    patIn13215,
  ) => {
    fillSolidTileBackground(patIn13211, patIn13213, patIn13214);
    strokeDiagonalHatch(patIn13211, patIn13212, patIn13214, patIn13215);
  };
  paintDashedDiagonalPattern = (
    patIn12234,
    patIn12235,
    patIn12236,
    patIn12237,
    patIn12238,
  ) => {
    fillSolidTileBackground(patIn12234, patIn12236, patIn12237);
    strokeDiagonalHatch(patIn12234, patIn12235, patIn12237, patIn12238, {
      dashed: true,
    });
  };
  paintDiagonalCrossPattern = (
    patIn7693,
    patIn7694,
    patIn7695,
    patIn7696,
    patIn7697,
  ) => {
    paintDiagonalPattern(patIn7693, patIn7694, patIn7695, patIn7696, patIn7697);
    patIn7693.save();
    patIn7693.translate(patIn7696, patIn7696);
    patIn7693.rotate(Math.PI / 2);
    patIn7693.translate(-patIn7696, -patIn7696);
    strokeDiagonalHatch(patIn7693, patIn7694, patIn7696, patIn7697);
    patIn7693.restore();
  };
  paintGridPattern = (
    patIn7490,
    patIn7491,
    patIn7492,
    patIn7493,
    patIn7494,
  ) => {
    patIn7490.fillStyle = patIn7492;
    patIn7490.fillRect(0, 0, 2 * patIn7493, 2 * patIn7493);
    patIn7490.fillStyle = patIn7491;
    let fillBind17980 = scaledStrokeWidth(patIn7494, 1);
    patIn7490.fillRect(
      0,
      patIn7493 - fillBind17980 / 2,
      2 * patIn7493,
      fillBind17980,
    );
    patIn7490.fillRect(
      patIn7493 - fillBind17980 / 2,
      0,
      fillBind17980,
      2 * patIn7493,
    );
  };
  paintDotsPattern = (
    patIn5414,
    patIn5415,
    patIn5416,
    patIn5417,
    patIn5418,
  ) => {
    patIn5414.fillStyle = patIn5416;
    patIn5414.fillRect(0, 0, 2 * patIn5417, 2 * patIn5417);
    patIn5414.fillStyle = patIn5415;
    let fillBind15171 = Math.max(1, 0.75 * patIn5418);
    patIn5414.beginPath();
    patIn5414.arc(
      0.5 * patIn5417,
      0.5 * patIn5417,
      fillBind15171,
      0,
      Math.PI * 2,
    );
    patIn5414.fill();
    patIn5414.beginPath();
    patIn5414.arc(
      1.5 * patIn5417,
      1.5 * patIn5417,
      fillBind15171,
      0,
      Math.PI * 2,
    );
    patIn5414.fill();
  };
  paintCheckPattern = (
    patIn7495,
    patIn7496,
    patIn7497,
    patIn7498,
    patIn7499,
  ) => {
    patIn7495.fillStyle = patIn7497;
    patIn7495.fillRect(0, 0, 2 * patIn7498, 2 * patIn7498);
    patIn7495.fillStyle = patIn7496;
    let fillBind17981 = halfScaledStrokeWidth(patIn7499, 1);
    patIn7495.fillRect(
      0,
      0,
      patIn7498 - fillBind17981,
      patIn7498 - fillBind17981,
    );
    patIn7495.fillRect(
      patIn7498 + fillBind17981,
      patIn7498 + fillBind17981,
      patIn7498 - fillBind17981,
      patIn7498 - fillBind17981,
    );
  };
  paintTrellisPattern = (
    patIn4902,
    patIn4903,
    patIn4904,
    patIn4905,
    patIn4906,
  ) => {
    paintGridPattern(patIn4902, patIn4903, patIn4904, patIn4905, patIn4906);
    patIn4902.strokeStyle = patIn4903;
    patIn4902.lineWidth = scaledStrokeWidth(patIn4906, 2);
    patIn4902.lineCap = "butt";
    patIn4902.lineJoin = "miter";
    patIn4902.miterLimit = 2;
    patIn4902.beginPath();
    patIn4902.moveTo(0, 0);
    patIn4902.lineTo(2 * patIn4905, 2 * patIn4905);
    patIn4902.moveTo(0, 2 * patIn4905);
    patIn4902.lineTo(2 * patIn4905, 0);
    patIn4902.stroke();
  };
  paintHorizontalDashedPattern = (
    patIn4244,
    patIn4245,
    patIn4246,
    patIn4247,
    patIn4248,
  ) => {
    patIn4244.fillStyle = patIn4246;
    patIn4244.fillRect(0, 0, 2 * patIn4247, 2 * patIn4247);
    patIn4244.strokeStyle = patIn4245;
    patIn4244.lineWidth = scaledStrokeWidth(patIn4248, 1);
    patIn4244.setLineDash([patIn4247 * 0.6, patIn4247 * 0.6]);
    patIn4244.lineCap = "butt";
    patIn4244.lineJoin = "miter";
    patIn4244.miterLimit = 2;
    patIn4244.beginPath();
    patIn4244.moveTo(0, patIn4247);
    patIn4244.lineTo(2 * patIn4247, patIn4247);
    patIn4244.stroke();
    patIn4244.setLineDash([]);
  };
  paintVerticalDashedPattern = (
    patIn4249,
    patIn4250,
    patIn4251,
    patIn4252,
    patIn4253,
  ) => {
    patIn4249.fillStyle = patIn4251;
    patIn4249.fillRect(0, 0, 2 * patIn4252, 2 * patIn4252);
    patIn4249.strokeStyle = patIn4250;
    patIn4249.lineWidth = scaledStrokeWidth(patIn4253, 1);
    patIn4249.setLineDash([patIn4252 * 0.6, patIn4252 * 0.6]);
    patIn4249.lineCap = "butt";
    patIn4249.lineJoin = "miter";
    patIn4249.miterLimit = 2;
    patIn4249.beginPath();
    patIn4249.moveTo(patIn4252, 0);
    patIn4249.lineTo(patIn4252, 2 * patIn4252);
    patIn4249.stroke();
    patIn4249.setLineDash([]);
  };
  paintPlaidPattern = (
    patIn7500,
    patIn7501,
    patIn7502,
    patIn7503,
    patIn7504,
  ) => {
    patIn7500.fillStyle = patIn7502;
    patIn7500.fillRect(0, 0, 2 * patIn7503, 2 * patIn7503);
    patIn7500.fillStyle = patIn7501;
    let fillBind17982 = scaledStrokeWidth(patIn7504, 3);
    patIn7500.fillRect(
      0,
      patIn7503 - fillBind17982 / 2,
      2 * patIn7503,
      fillBind17982,
    );
    patIn7500.fillRect(
      patIn7503 - fillBind17982 / 2,
      0,
      fillBind17982,
      2 * patIn7503,
    );
  };
  paintHorizontalBrickPattern = (
    patIn2293,
    patIn2294,
    patIn2295,
    patIn2296,
    patIn2297,
  ) => {
    patIn2293.fillStyle = patIn2295;
    patIn2293.fillRect(0, 0, 2 * patIn2296, 2 * patIn2296);
    patIn2293.strokeStyle = patIn2294;
    patIn2293.lineWidth = scaledStrokeWidth(patIn2297, 1);
    patIn2293.lineCap = "butt";
    patIn2293.lineJoin = "miter";
    patIn2293.miterLimit = 2;
    patIn2293.beginPath();
    let fillBind9393 = halfScaledStrokeWidth(patIn2297, 1);
    patIn2293.moveTo(0, fillBind9393);
    patIn2293.lineTo(2 * patIn2296, fillBind9393);
    patIn2293.moveTo(0, patIn2296 + fillBind9393);
    patIn2293.lineTo(2 * patIn2296, patIn2296 + fillBind9393);
    patIn2293.moveTo(0, 2 * patIn2296 + fillBind9393);
    patIn2293.lineTo(2 * patIn2296, 2 * patIn2296 + fillBind9393);
    patIn2293.moveTo(fillBind9393, 0);
    patIn2293.lineTo(fillBind9393, patIn2296);
    patIn2293.moveTo(patIn2296 + fillBind9393, 0);
    patIn2293.lineTo(patIn2296 + fillBind9393, patIn2296);
    patIn2293.moveTo(0.5 * patIn2296 + fillBind9393, patIn2296);
    patIn2293.lineTo(0.5 * patIn2296 + fillBind9393, 2 * patIn2296);
    patIn2293.moveTo(1.5 * patIn2296 + fillBind9393, patIn2296);
    patIn2293.lineTo(1.5 * patIn2296 + fillBind9393, 2 * patIn2296);
    patIn2293.stroke();
  };
  paintDiagonalBrickPattern = (
    patIn2637,
    patIn2638,
    patIn2639,
    patIn2640,
    patIn2641,
  ) => {
    patIn2637.fillStyle = patIn2639;
    patIn2637.fillRect(0, 0, 2 * patIn2640, 2 * patIn2640);
    patIn2637.strokeStyle = patIn2638;
    patIn2637.lineWidth = scaledStrokeWidth(patIn2641, 1);
    patIn2637.lineCap = "butt";
    patIn2637.lineJoin = "miter";
    patIn2637.miterLimit = 2;
    let fillBind10120 = halfScaledStrokeWidth(patIn2641, 1);
    patIn2637.beginPath();
    patIn2637.moveTo(-patIn2640, patIn2640);
    patIn2637.lineTo(patIn2640, -patIn2640);
    patIn2637.moveTo(0, 2 * patIn2640);
    patIn2637.lineTo(2 * patIn2640, 0);
    patIn2637.moveTo(patIn2640, 2 * patIn2640);
    patIn2637.lineTo(3 * patIn2640, 0);
    patIn2637.moveTo(0, fillBind10120);
    patIn2637.lineTo(2 * patIn2640, fillBind10120);
    patIn2637.moveTo(0, patIn2640 + fillBind10120);
    patIn2637.lineTo(2 * patIn2640, patIn2640 + fillBind10120);
    patIn2637.moveTo(0, 2 * patIn2640 + fillBind10120);
    patIn2637.lineTo(2 * patIn2640, 2 * patIn2640 + fillBind10120);
    patIn2637.stroke();
  };
  paintSolidDiamondPattern = (patIn4229, patIn4230, patIn4231, patIn4232) => {
    patIn4229.fillStyle = patIn4231;
    patIn4229.fillRect(0, 0, 2 * patIn4232, 2 * patIn4232);
    patIn4229.fillStyle = patIn4230;
    let fillBind13289 = 0.55 * patIn4232,
      fillBind13290 = (patIn7183, patIn7184) => {
        patIn4229.beginPath();
        patIn4229.moveTo(patIn7183, patIn7184 - fillBind13289);
        patIn4229.lineTo(patIn7183 + fillBind13289, patIn7184);
        patIn4229.lineTo(patIn7183, patIn7184 + fillBind13289);
        patIn4229.lineTo(patIn7183 - fillBind13289, patIn7184);
        patIn4229.closePath();
        patIn4229.fill();
      };
    fillBind13290(0.5 * patIn4232, 0.5 * patIn4232);
    fillBind13290(1.5 * patIn4232, 1.5 * patIn4232);
  };
  paintOpenDiamondPattern = (
    patIn3088,
    patIn3089,
    patIn3090,
    patIn3091,
    patIn3092,
  ) => {
    patIn3088.fillStyle = patIn3090;
    patIn3088.fillRect(0, 0, 2 * patIn3091, 2 * patIn3091);
    patIn3088.strokeStyle = patIn3089;
    patIn3088.lineWidth = scaledStrokeWidth(patIn3092, 1);
    patIn3088.lineCap = "butt";
    patIn3088.lineJoin = "miter";
    patIn3088.miterLimit = 2;
    let fillBind11173 = 0.55 * patIn3091,
      fillBind11174 = (patIn7150, patIn7151) => {
        patIn3088.beginPath();
        patIn3088.moveTo(patIn7150, patIn7151 - fillBind11173);
        patIn3088.lineTo(patIn7150 + fillBind11173, patIn7151);
        patIn3088.lineTo(patIn7150, patIn7151 + fillBind11173);
        patIn3088.lineTo(patIn7150 - fillBind11173, patIn7151);
        patIn3088.closePath();
        patIn3088.stroke();
      };
    fillBind11174(0.5 * patIn3091, 0.5 * patIn3091);
    fillBind11174(1.5 * patIn3091, 1.5 * patIn3091);
  };
  paintDottedDiamondPattern = (
    patIn4995,
    patIn4996,
    patIn4997,
    patIn4998,
    patIn4999,
  ) => {
    patIn4995.fillStyle = patIn4997;
    patIn4995.fillRect(0, 0, 2 * patIn4998, 2 * patIn4998);
    patIn4995.fillStyle = patIn4996;
    let fillBind14413 = Math.max(1, 0.65 * patIn4999),
      fillBind14414 = [
        [patIn4998, 0.5 * patIn4998],
        [0.5 * patIn4998, patIn4998],
        [patIn4998, 1.5 * patIn4998],
        [1.5 * patIn4998, patIn4998],
      ];
    for (let [fillBind22136, fillBind22137] of fillBind14414) {
      patIn4995.beginPath();
      patIn4995.arc(
        fillBind22136,
        fillBind22137,
        fillBind14413,
        0,
        Math.PI * 2,
      );
      patIn4995.fill();
    }
  };
  paintConfettiSmallPattern = (patIn4415, patIn4416, patIn4417, patIn4418) => {
    patIn4415.fillStyle = patIn4417;
    patIn4415.fillRect(0, 0, 2 * patIn4418, 2 * patIn4418);
    patIn4415.fillStyle = patIn4416;
    let fillBind13638 = Math.max(1, Math.round((patIn4418 / 6) * 0.5)),
      fillBind13639 = [
        [0.3 * patIn4418, 0.4 * patIn4418],
        [1.2 * patIn4418, 0.6 * patIn4418],
        [0.8 * patIn4418, 1.3 * patIn4418],
        [1.6 * patIn4418, 1.7 * patIn4418],
      ];
    for (let [fillBind21991, fillBind21992] of fillBind13639)
      patIn4415.fillRect(
        Math.round(fillBind21991) - fillBind13638,
        Math.round(fillBind21992) - fillBind13638,
        2 * fillBind13638,
        2 * fillBind13638,
      );
  };
  paintConfettiLargePattern = (patIn4419, patIn4420, patIn4421, patIn4422) => {
    patIn4419.fillStyle = patIn4421;
    patIn4419.fillRect(0, 0, 2 * patIn4422, 2 * patIn4422);
    patIn4419.fillStyle = patIn4420;
    let fillBind13640 = Math.max(1, Math.round((patIn4422 / 6) * 0.9)),
      fillBind13641 = [
        [0.4 * patIn4422, 0.5 * patIn4422],
        [1.3 * patIn4422, 0.8 * patIn4422],
        [0.6 * patIn4422, 1.5 * patIn4422],
        [1.7 * patIn4422, 1.2 * patIn4422],
      ];
    for (let [fillBind21993, fillBind21994] of fillBind13641)
      patIn4419.fillRect(
        Math.round(fillBind21993) - fillBind13640,
        Math.round(fillBind21994) - fillBind13640,
        2 * fillBind13640,
        2 * fillBind13640,
      );
  };
  paintSpherePattern = (patIn4575, patIn4576, patIn4577, patIn4578) => {
    patIn4575.fillStyle = patIn4577;
    patIn4575.fillRect(0, 0, 2 * patIn4578, 2 * patIn4578);
    patIn4575.fillStyle = patIn4576;
    let fillBind13850 = Math.max(1, Math.round(0.25 * patIn4578)),
      fillBind13851 = [
        [0.5 * patIn4578, 0.5 * patIn4578],
        [1.5 * patIn4578, 0.5 * patIn4578],
        [0.5 * patIn4578, 1.5 * patIn4578],
        [1.5 * patIn4578, 1.5 * patIn4578],
      ];
    for (let [fillBind22138, fillBind22139] of fillBind13851) {
      patIn4575.beginPath();
      patIn4575.arc(
        fillBind22138,
        fillBind22139,
        fillBind13850,
        0,
        Math.PI * 2,
      );
      patIn4575.fill();
    }
  };
  paintWeavePattern = (patIn7024, patIn7025, patIn7026, patIn7027) => {
    patIn7024.fillStyle = patIn7026;
    patIn7024.fillRect(0, 0, 2 * patIn7027, 2 * patIn7027);
    patIn7024.fillStyle = patIn7025;
    let fillBind17381 = Math.max(2, Math.round(0.4 * patIn7027));
    patIn7024.fillRect(
      0,
      patIn7027 - fillBind17381 / 2,
      2 * patIn7027,
      fillBind17381,
    );
    patIn7024.fillRect(
      patIn7027 - fillBind17381 / 2,
      0,
      fillBind17381,
      2 * patIn7027,
    );
  };
  paintDivotPattern = (
    patIn3674,
    patIn3675,
    patIn3676,
    patIn3677,
    patIn3678,
  ) => {
    patIn3674.fillStyle = patIn3676;
    patIn3674.fillRect(0, 0, 2 * patIn3677, 2 * patIn3677);
    patIn3674.strokeStyle = patIn3675;
    patIn3674.lineWidth = scaledStrokeWidth(patIn3678, 1);
    patIn3674.lineCap = "butt";
    patIn3674.lineJoin = "miter";
    patIn3674.miterLimit = 2;
    let fillBind12296 = Math.max(1, Math.round(0.3 * patIn3677)),
      fillBind12297 = [
        [0.5 * patIn3677, 0.5 * patIn3677],
        [1.5 * patIn3677, 1.5 * patIn3677],
      ];
    for (let [fillBind22072, fillBind22073] of fillBind12297) {
      patIn3674.beginPath();
      patIn3674.arc(
        fillBind22072,
        fillBind22073,
        fillBind12296,
        0,
        Math.PI * 2,
      );
      patIn3674.stroke();
    }
  };
  paintShinglePattern = (
    patIn3999,
    patIn4000,
    patIn4001,
    patIn4002,
    patIn4003,
  ) => {
    patIn3999.fillStyle = patIn4001;
    patIn3999.fillRect(0, 0, 2 * patIn4002, 2 * patIn4002);
    patIn3999.strokeStyle = patIn4000;
    patIn3999.lineWidth = scaledStrokeWidth(patIn4003, 1);
    patIn3999.lineCap = "butt";
    patIn3999.lineJoin = "miter";
    patIn3999.miterLimit = 2;
    let fillBind12907 = 0.5 * patIn4002;
    patIn3999.beginPath();
    patIn3999.arc(0.5 * patIn4002, patIn4002, fillBind12907, Math.PI, 0);
    patIn3999.arc(1.5 * patIn4002, patIn4002, fillBind12907, Math.PI, 0);
    patIn3999.arc(patIn4002, 2 * patIn4002, fillBind12907, Math.PI, 0);
    patIn3999.stroke();
  };
  paintWavePattern = (
    patIn4640,
    patIn4641,
    patIn4642,
    patIn4643,
    patIn4644,
  ) => {
    patIn4640.fillStyle = patIn4642;
    patIn4640.fillRect(0, 0, 2 * patIn4643, 2 * patIn4643);
    patIn4640.strokeStyle = patIn4641;
    patIn4640.lineWidth = scaledStrokeWidth(patIn4644, 1);
    patIn4640.lineCap = "butt";
    patIn4640.lineJoin = "miter";
    patIn4640.miterLimit = 2;
    patIn4640.beginPath();
    patIn4640.moveTo(0, patIn4643);
    patIn4640.bezierCurveTo(
      0.5 * patIn4643,
      0.5 * patIn4643,
      1.5 * patIn4643,
      1.5 * patIn4643,
      2 * patIn4643,
      patIn4643,
    );
    patIn4640.stroke();
  };
  paintZigZagPattern = (
    patIn3966,
    patIn3967,
    patIn3968,
    patIn3969,
    patIn3970,
  ) => {
    patIn3966.fillStyle = patIn3968;
    patIn3966.fillRect(0, 0, 2 * patIn3969, 2 * patIn3969);
    patIn3966.strokeStyle = patIn3967;
    patIn3966.lineWidth = scaledStrokeWidth(patIn3970, 1);
    patIn3966.lineCap = "butt";
    patIn3966.lineJoin = "miter";
    patIn3966.miterLimit = 2;
    patIn3966.beginPath();
    patIn3966.moveTo(0, patIn3969);
    patIn3966.lineTo(0.5 * patIn3969, 0.5 * patIn3969);
    patIn3966.lineTo(patIn3969, patIn3969);
    patIn3966.lineTo(1.5 * patIn3969, 1.5 * patIn3969);
    patIn3966.lineTo(2 * patIn3969, patIn3969);
    patIn3966.stroke();
  };
  patternTilePainters = {
    horz: paintHorizontalPattern,
    vert: paintVerticalPattern,
    cross: paintCrossPattern,
    diag: paintDiagonalPattern,
    diagDashed: paintDashedDiagonalPattern,
    diagCross: paintDiagonalCrossPattern,
    grid: paintGridPattern,
    dots: paintDotsPattern,
    check: paintCheckPattern,
    trellis: paintTrellisPattern,
    horzDashed: paintHorizontalDashedPattern,
    vertDashed: paintVerticalDashedPattern,
    plaid: paintPlaidPattern,
    horizontalBrick: paintHorizontalBrickPattern,
    diagonalBrick: paintDiagonalBrickPattern,
    solidDiamond: paintSolidDiamondPattern,
    openDiamond: paintOpenDiamondPattern,
    dottedDiamond: paintDottedDiamondPattern,
    confettiSmall: paintConfettiSmallPattern,
    confettiLarge: paintConfettiLargePattern,
    sphere: paintSpherePattern,
    weave: paintWeavePattern,
    divot: paintDivotPattern,
    shingle: paintShinglePattern,
    wave: paintWavePattern,
    zigZag: paintZigZagPattern,
  };
});
