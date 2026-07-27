// Restored from ref/webview/assets/ganttDiagram-T4ZO3ILL-xRY1efqO.js
// Mermaid gantt diagram definition (alt). app-initial d3-time/scale/array/interpolate aliases → vendor shims.
// Stage 3 candidate: app-initial aliases → vendor shims; auto-renamed export→local.
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  init?: (...args: unknown[]) => void;
  [key: string]: unknown;
};
import { esmInit, toEsm, commonJsInit } from "../../runtime/rolldown-runtime";
import {
  max as appInitialAat,
  min as appInitialOat,
} from "../../vendor/d3-array-min";
import {
  timeSaturday as AppInitialJit,
  timeFriday as AppInitialKit,
  timeWednesday as AppInitialQit,
  timeMonth as appInitialWit,
  timeThursday as appInitialXit,
  timeSunday as AppInitialYit,
  timeTuesday as appInitialZit,
  timeMillisecond as AppInitialCat,
  timeDay as appInitialEat,
  timeMinute as AppInitialIat,
  timeHour as AppInitialNat,
  timeSecond as _appInitialOat,
  timeMonday as _AppInitialQit,
} from "../../vendor/d3-time";
import { interpolateHcl as appInitialRat } from "../../vendor/d3-interpolate";
import {
  scaleTime as appInitialRit,
  scaleLinear as AppInitialMat,
} from "../../vendor/d3-scale-linear";
import { timeFormat as AppInitialVit } from "../../vendor/d3-time-format";
import {
  axisTop as srcA,
  axisBottom as srcI,
  select as srcR,
  ensureD3SelectionRuntimeT as srcT,
} from "../../vendor/d3-axis-current-runtime";
import { dist } from "../../vendor/sanitize-url";
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  dayjsCommonJsModule as chunkAGHRB4JFO,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt";
import {
  A as chunkICPOFSXXA,
  C as chunkICPOFSXXC,
  G as chunkICPOFSXXG,
  H as chunkICPOFSXXH,
  V as chunkICPOFSXXV,
  _ as chunkICPOFSXXUnderscore,
  a as _chunkICPOFSXXA,
  b as chunkICPOFSXXB,
  c as _chunkICPOFSXXC,
  s as chunkICPOFSXXS,
  v as _chunkICPOFSXXV,
} from "../../diagrams/mermaid-config-alt";
import { chunk5PVQY5BWG, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
var ganttDiagramT4ZO3ILLBinding1 = commonJsInit(
    (ganttDiagramT4ZO3ILLInput51, ganttDiagramT4ZO3ILLInput52) => {
      (function (ganttDiagramT4ZO3ILLInput143, ganttDiagramT4ZO3ILLInput144) {
        typeof ganttDiagramT4ZO3ILLInput51 == "object" &&
        ganttDiagramT4ZO3ILLInput52 !== undefined
          ? (ganttDiagramT4ZO3ILLInput52.exports =
              ganttDiagramT4ZO3ILLInput144())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramT4ZO3ILLInput144)
            : ((ganttDiagramT4ZO3ILLInput143 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramT4ZO3ILLInput143 || self).dayjs_plugin_isoWeek =
                ganttDiagramT4ZO3ILLInput144());
      })(ganttDiagramT4ZO3ILLInput51, function () {
        return function (
          ganttDiagramT4ZO3ILLInput58,
          ganttDiagramT4ZO3ILLInput59,
          ganttDiagramT4ZO3ILLInput60,
        ) {
          var ganttDiagramT4ZO3ILLBinding242 = function (
              ganttDiagramT4ZO3ILLInput215,
            ) {
              return ganttDiagramT4ZO3ILLInput215.add(
                4 - ganttDiagramT4ZO3ILLInput215.isoWeekday(),
                "day",
              );
            },
            ganttDiagramT4ZO3ILLBinding243 =
              ganttDiagramT4ZO3ILLInput59.prototype;
          ganttDiagramT4ZO3ILLBinding243.isoWeekYear = function () {
            return ganttDiagramT4ZO3ILLBinding242(this).year();
          };
          ganttDiagramT4ZO3ILLBinding243.isoWeek = function (
            ganttDiagramT4ZO3ILLInput94,
          ) {
            if (!this.$utils().u(ganttDiagramT4ZO3ILLInput94))
              return this.add(
                7 * (ganttDiagramT4ZO3ILLInput94 - this.isoWeek()),
                "day",
              );
            var ganttDiagramT4ZO3ILLBinding343,
              ganttDiagramT4ZO3ILLBinding344,
              ganttDiagramT4ZO3ILLBinding345,
              ganttDiagramT4ZO3ILLBinding346,
              ganttDiagramT4ZO3ILLBinding347 =
                ganttDiagramT4ZO3ILLBinding242(this),
              ganttDiagramT4ZO3ILLBinding348 =
                ((ganttDiagramT4ZO3ILLBinding343 = this.isoWeekYear()),
                (ganttDiagramT4ZO3ILLBinding344 = this.$u),
                (ganttDiagramT4ZO3ILLBinding345 = (
                  ganttDiagramT4ZO3ILLBinding344
                    ? ganttDiagramT4ZO3ILLInput60.utc
                    : ganttDiagramT4ZO3ILLInput60
                )()
                  .year(ganttDiagramT4ZO3ILLBinding343)
                  .startOf("year")),
                (ganttDiagramT4ZO3ILLBinding346 =
                  4 - ganttDiagramT4ZO3ILLBinding345.isoWeekday()),
                ganttDiagramT4ZO3ILLBinding345.isoWeekday() > 4 &&
                  (ganttDiagramT4ZO3ILLBinding346 += 7),
                ganttDiagramT4ZO3ILLBinding345.add(
                  ganttDiagramT4ZO3ILLBinding346,
                  "day",
                ));
            return (
              ganttDiagramT4ZO3ILLBinding347.diff(
                ganttDiagramT4ZO3ILLBinding348,
                "week",
              ) + 1
            );
          };
          ganttDiagramT4ZO3ILLBinding243.isoWeekday = function (
            ganttDiagramT4ZO3ILLInput186,
          ) {
            return this.$utils().u(ganttDiagramT4ZO3ILLInput186)
              ? this.day() || 7
              : this.day(
                  this.day() % 7
                    ? ganttDiagramT4ZO3ILLInput186
                    : ganttDiagramT4ZO3ILLInput186 - 7,
                );
          };
          var ganttDiagramT4ZO3ILLBinding244 =
            ganttDiagramT4ZO3ILLBinding243.startOf;
          ganttDiagramT4ZO3ILLBinding243.startOf = function (
            ganttDiagramT4ZO3ILLInput125,
            ganttDiagramT4ZO3ILLInput126,
          ) {
            var ganttDiagramT4ZO3ILLBinding381 = this.$utils(),
              ganttDiagramT4ZO3ILLBinding382 =
                !!ganttDiagramT4ZO3ILLBinding381.u(
                  ganttDiagramT4ZO3ILLInput126,
                ) || ganttDiagramT4ZO3ILLInput126;
            return ganttDiagramT4ZO3ILLBinding381.p(
              ganttDiagramT4ZO3ILLInput125,
            ) === "isoweek"
              ? ganttDiagramT4ZO3ILLBinding382
                ? this.date(this.date() - (this.isoWeekday() - 1)).startOf(
                    "day",
                  )
                : this.date(
                    this.date() - 1 - (this.isoWeekday() - 1) + 7,
                  ).endOf("day")
              : ganttDiagramT4ZO3ILLBinding244.bind(this)(
                  ganttDiagramT4ZO3ILLInput125,
                  ganttDiagramT4ZO3ILLInput126,
                );
          };
        };
      });
    },
  ),
  ganttDiagramT4ZO3ILLBinding2 = commonJsInit(
    (ganttDiagramT4ZO3ILLInput7, ganttDiagramT4ZO3ILLInput8) => {
      (function (ganttDiagramT4ZO3ILLInput130, ganttDiagramT4ZO3ILLInput131) {
        typeof ganttDiagramT4ZO3ILLInput7 == "object" &&
        ganttDiagramT4ZO3ILLInput8 !== undefined
          ? (ganttDiagramT4ZO3ILLInput8.exports =
              ganttDiagramT4ZO3ILLInput131())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramT4ZO3ILLInput131)
            : ((ganttDiagramT4ZO3ILLInput130 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramT4ZO3ILLInput130 ||
                    self).dayjs_plugin_customParseFormat =
                ganttDiagramT4ZO3ILLInput131());
      })(ganttDiagramT4ZO3ILLInput7, function () {
        var ganttDiagramT4ZO3ILLBinding142 = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          },
          ganttDiagramT4ZO3ILLBinding143 =
            /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
          ganttDiagramT4ZO3ILLBinding144 = /\d/,
          ganttDiagramT4ZO3ILLBinding145 = /\d\d/,
          ganttDiagramT4ZO3ILLBinding146 = /\d\d?/,
          ganttDiagramT4ZO3ILLBinding147 = /\d*[^-_:/,()\s\d]+/,
          ganttDiagramT4ZO3ILLBinding148 = {},
          ganttDiagramT4ZO3ILLBinding149 = function (
            ganttDiagramT4ZO3ILLInput220,
          ) {
            return (
              (ganttDiagramT4ZO3ILLInput220 = +ganttDiagramT4ZO3ILLInput220) +
              (ganttDiagramT4ZO3ILLInput220 > 68 ? 1900 : 2e3)
            );
          },
          ganttDiagramT4ZO3ILLBinding150 = function (
            ganttDiagramT4ZO3ILLInput202,
          ) {
            return function (ganttDiagramT4ZO3ILLInput253) {
              this[ganttDiagramT4ZO3ILLInput202] =
                +ganttDiagramT4ZO3ILLInput253;
            };
          },
          ganttDiagramT4ZO3ILLBinding151 = [
            /[+-]\d\d:?(\d\d)?|Z/,
            function (ganttDiagramT4ZO3ILLInput145) {
              (this.zone ||= {}).offset = (function (
                ganttDiagramT4ZO3ILLInput170,
              ) {
                if (
                  !ganttDiagramT4ZO3ILLInput170 ||
                  ganttDiagramT4ZO3ILLInput170 === "Z"
                )
                  return 0;
                var ganttDiagramT4ZO3ILLBinding419 =
                    ganttDiagramT4ZO3ILLInput170.match(/([+-]|\d\d)/g),
                  ganttDiagramT4ZO3ILLBinding420 =
                    60 * ganttDiagramT4ZO3ILLBinding419[1] +
                    (+ganttDiagramT4ZO3ILLBinding419[2] || 0);
                return ganttDiagramT4ZO3ILLBinding420 === 0
                  ? 0
                  : ganttDiagramT4ZO3ILLBinding419[0] === "+"
                    ? -ganttDiagramT4ZO3ILLBinding420
                    : ganttDiagramT4ZO3ILLBinding420;
              })(ganttDiagramT4ZO3ILLInput145);
            },
          ],
          ganttDiagramT4ZO3ILLBinding152 = function (
            ganttDiagramT4ZO3ILLInput198,
          ) {
            var ganttDiagramT4ZO3ILLBinding449 =
              ganttDiagramT4ZO3ILLBinding148[ganttDiagramT4ZO3ILLInput198];
            return (
              ganttDiagramT4ZO3ILLBinding449 &&
              (ganttDiagramT4ZO3ILLBinding449.indexOf
                ? ganttDiagramT4ZO3ILLBinding449
                : ganttDiagramT4ZO3ILLBinding449.s.concat(
                    ganttDiagramT4ZO3ILLBinding449.f,
                  ))
            );
          },
          ganttDiagramT4ZO3ILLBinding153 = function (
            ganttDiagramT4ZO3ILLInput137,
            ganttDiagramT4ZO3ILLInput138,
          ) {
            var ganttDiagramT4ZO3ILLBinding389,
              ganttDiagramT4ZO3ILLBinding390 =
                ganttDiagramT4ZO3ILLBinding148.meridiem;
            if (ganttDiagramT4ZO3ILLBinding390) {
              for (
                var ganttDiagramT4ZO3ILLBinding391 = 1;
                ganttDiagramT4ZO3ILLBinding391 <= 24;
                ganttDiagramT4ZO3ILLBinding391 += 1
              )
                if (
                  ganttDiagramT4ZO3ILLInput137.indexOf(
                    ganttDiagramT4ZO3ILLBinding390(
                      ganttDiagramT4ZO3ILLBinding391,
                      0,
                      ganttDiagramT4ZO3ILLInput138,
                    ),
                  ) > -1
                ) {
                  ganttDiagramT4ZO3ILLBinding389 =
                    ganttDiagramT4ZO3ILLBinding391 > 12;
                  break;
                }
            } else
              ganttDiagramT4ZO3ILLBinding389 =
                ganttDiagramT4ZO3ILLInput137 ===
                (ganttDiagramT4ZO3ILLInput138 ? "pm" : "PM");
            return ganttDiagramT4ZO3ILLBinding389;
          },
          ganttDiagramT4ZO3ILLBinding154 = {
            A: [
              ganttDiagramT4ZO3ILLBinding147,
              function (ganttDiagramT4ZO3ILLInput231) {
                this.afternoon = ganttDiagramT4ZO3ILLBinding153(
                  ganttDiagramT4ZO3ILLInput231,
                  false,
                );
              },
            ],
            a: [
              ganttDiagramT4ZO3ILLBinding147,
              function (ganttDiagramT4ZO3ILLInput232) {
                this.afternoon = ganttDiagramT4ZO3ILLBinding153(
                  ganttDiagramT4ZO3ILLInput232,
                  true,
                );
              },
            ],
            Q: [
              ganttDiagramT4ZO3ILLBinding144,
              function (ganttDiagramT4ZO3ILLInput224) {
                this.month = 3 * (ganttDiagramT4ZO3ILLInput224 - 1) + 1;
              },
            ],
            S: [
              ganttDiagramT4ZO3ILLBinding144,
              function (ganttDiagramT4ZO3ILLInput227) {
                this.milliseconds = 100 * ganttDiagramT4ZO3ILLInput227;
              },
            ],
            SS: [
              ganttDiagramT4ZO3ILLBinding145,
              function (ganttDiagramT4ZO3ILLInput229) {
                this.milliseconds = 10 * ganttDiagramT4ZO3ILLInput229;
              },
            ],
            SSS: [
              /\d{3}/,
              function (ganttDiagramT4ZO3ILLInput236) {
                this.milliseconds = +ganttDiagramT4ZO3ILLInput236;
              },
            ],
            s: [
              ganttDiagramT4ZO3ILLBinding146,
              ganttDiagramT4ZO3ILLBinding150("seconds"),
            ],
            ss: [
              ganttDiagramT4ZO3ILLBinding146,
              ganttDiagramT4ZO3ILLBinding150("seconds"),
            ],
            m: [
              ganttDiagramT4ZO3ILLBinding146,
              ganttDiagramT4ZO3ILLBinding150("minutes"),
            ],
            mm: [
              ganttDiagramT4ZO3ILLBinding146,
              ganttDiagramT4ZO3ILLBinding150("minutes"),
            ],
            H: [
              ganttDiagramT4ZO3ILLBinding146,
              ganttDiagramT4ZO3ILLBinding150("hours"),
            ],
            h: [
              ganttDiagramT4ZO3ILLBinding146,
              ganttDiagramT4ZO3ILLBinding150("hours"),
            ],
            HH: [
              ganttDiagramT4ZO3ILLBinding146,
              ganttDiagramT4ZO3ILLBinding150("hours"),
            ],
            hh: [
              ganttDiagramT4ZO3ILLBinding146,
              ganttDiagramT4ZO3ILLBinding150("hours"),
            ],
            D: [
              ganttDiagramT4ZO3ILLBinding146,
              ganttDiagramT4ZO3ILLBinding150("day"),
            ],
            DD: [
              ganttDiagramT4ZO3ILLBinding145,
              ganttDiagramT4ZO3ILLBinding150("day"),
            ],
            Do: [
              ganttDiagramT4ZO3ILLBinding147,
              function (ganttDiagramT4ZO3ILLInput151) {
                var ganttDiagramT4ZO3ILLBinding407 =
                    ganttDiagramT4ZO3ILLBinding148.ordinal,
                  ganttDiagramT4ZO3ILLBinding408 =
                    ganttDiagramT4ZO3ILLInput151.match(/\d+/);
                if (
                  ((this.day = ganttDiagramT4ZO3ILLBinding408[0]),
                  ganttDiagramT4ZO3ILLBinding407)
                )
                  for (
                    var ganttDiagramT4ZO3ILLBinding409 = 1;
                    ganttDiagramT4ZO3ILLBinding409 <= 31;
                    ganttDiagramT4ZO3ILLBinding409 += 1
                  )
                    ganttDiagramT4ZO3ILLBinding407(
                      ganttDiagramT4ZO3ILLBinding409,
                    ).replace(/\[|\]/g, "") === ganttDiagramT4ZO3ILLInput151 &&
                      (this.day = ganttDiagramT4ZO3ILLBinding409);
              },
            ],
            w: [
              ganttDiagramT4ZO3ILLBinding146,
              ganttDiagramT4ZO3ILLBinding150("week"),
            ],
            ww: [
              ganttDiagramT4ZO3ILLBinding145,
              ganttDiagramT4ZO3ILLBinding150("week"),
            ],
            M: [
              ganttDiagramT4ZO3ILLBinding146,
              ganttDiagramT4ZO3ILLBinding150("month"),
            ],
            MM: [
              ganttDiagramT4ZO3ILLBinding145,
              ganttDiagramT4ZO3ILLBinding150("month"),
            ],
            MMM: [
              ganttDiagramT4ZO3ILLBinding147,
              function (ganttDiagramT4ZO3ILLInput127) {
                var ganttDiagramT4ZO3ILLBinding385 =
                    ganttDiagramT4ZO3ILLBinding152("months"),
                  ganttDiagramT4ZO3ILLBinding386 =
                    (
                      ganttDiagramT4ZO3ILLBinding152("monthsShort") ||
                      ganttDiagramT4ZO3ILLBinding385.map(function (item) {
                        return item.slice(0, 3);
                      })
                    ).indexOf(ganttDiagramT4ZO3ILLInput127) + 1;
                if (ganttDiagramT4ZO3ILLBinding386 < 1) throw Error();
                this.month =
                  ganttDiagramT4ZO3ILLBinding386 % 12 ||
                  ganttDiagramT4ZO3ILLBinding386;
              },
            ],
            MMMM: [
              ganttDiagramT4ZO3ILLBinding147,
              function (ganttDiagramT4ZO3ILLInput184) {
                var ganttDiagramT4ZO3ILLBinding434 =
                  ganttDiagramT4ZO3ILLBinding152("months").indexOf(
                    ganttDiagramT4ZO3ILLInput184,
                  ) + 1;
                if (ganttDiagramT4ZO3ILLBinding434 < 1) throw Error();
                this.month =
                  ganttDiagramT4ZO3ILLBinding434 % 12 ||
                  ganttDiagramT4ZO3ILLBinding434;
              },
            ],
            Y: [/[+-]?\d+/, ganttDiagramT4ZO3ILLBinding150("year")],
            YY: [
              ganttDiagramT4ZO3ILLBinding145,
              function (ganttDiagramT4ZO3ILLInput243) {
                this.year = ganttDiagramT4ZO3ILLBinding149(
                  ganttDiagramT4ZO3ILLInput243,
                );
              },
            ],
            YYYY: [/\d{4}/, ganttDiagramT4ZO3ILLBinding150("year")],
            Z: ganttDiagramT4ZO3ILLBinding151,
            ZZ: ganttDiagramT4ZO3ILLBinding151,
          };
        function ganttDiagramT4ZO3ILLHelper12(ganttDiagramT4ZO3ILLInput56) {
          for (
            var ganttDiagramT4ZO3ILLBinding226 = ganttDiagramT4ZO3ILLInput56,
              ganttDiagramT4ZO3ILLBinding227 =
                ganttDiagramT4ZO3ILLBinding148 &&
                ganttDiagramT4ZO3ILLBinding148.formats,
              ganttDiagramT4ZO3ILLBinding228 = (ganttDiagramT4ZO3ILLInput56 =
                ganttDiagramT4ZO3ILLBinding226.replace(
                  /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                  function (
                    ganttDiagramT4ZO3ILLInput112,
                    ganttDiagramT4ZO3ILLInput113,
                    ganttDiagramT4ZO3ILLInput114,
                  ) {
                    var ganttDiagramT4ZO3ILLBinding372 =
                      ganttDiagramT4ZO3ILLInput114 &&
                      ganttDiagramT4ZO3ILLInput114.toUpperCase();
                    return (
                      ganttDiagramT4ZO3ILLInput113 ||
                      ganttDiagramT4ZO3ILLBinding227[
                        ganttDiagramT4ZO3ILLInput114
                      ] ||
                      ganttDiagramT4ZO3ILLBinding142[
                        ganttDiagramT4ZO3ILLInput114
                      ] ||
                      ganttDiagramT4ZO3ILLBinding227[
                        ganttDiagramT4ZO3ILLBinding372
                      ].replace(
                        /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                        function (
                          ganttDiagramT4ZO3ILLInput205,
                          ganttDiagramT4ZO3ILLInput206,
                          ganttDiagramT4ZO3ILLInput207,
                        ) {
                          return (
                            ganttDiagramT4ZO3ILLInput206 ||
                            ganttDiagramT4ZO3ILLInput207.slice(1)
                          );
                        },
                      )
                    );
                  },
                )).match(ganttDiagramT4ZO3ILLBinding143),
              ganttDiagramT4ZO3ILLBinding229 =
                ganttDiagramT4ZO3ILLBinding228.length,
              ganttDiagramT4ZO3ILLBinding230 = 0;
            ganttDiagramT4ZO3ILLBinding230 < ganttDiagramT4ZO3ILLBinding229;
            ganttDiagramT4ZO3ILLBinding230 += 1
          ) {
            var ganttDiagramT4ZO3ILLBinding231 =
                ganttDiagramT4ZO3ILLBinding228[ganttDiagramT4ZO3ILLBinding230],
              ganttDiagramT4ZO3ILLBinding232 =
                ganttDiagramT4ZO3ILLBinding154[ganttDiagramT4ZO3ILLBinding231],
              ganttDiagramT4ZO3ILLBinding233 =
                ganttDiagramT4ZO3ILLBinding232 &&
                ganttDiagramT4ZO3ILLBinding232[0],
              ganttDiagramT4ZO3ILLBinding234 =
                ganttDiagramT4ZO3ILLBinding232 &&
                ganttDiagramT4ZO3ILLBinding232[1];
            ganttDiagramT4ZO3ILLBinding228[ganttDiagramT4ZO3ILLBinding230] =
              ganttDiagramT4ZO3ILLBinding234
                ? {
                    regex: ganttDiagramT4ZO3ILLBinding233,
                    parser: ganttDiagramT4ZO3ILLBinding234,
                  }
                : ganttDiagramT4ZO3ILLBinding231.replace(/^\[|\]$/g, "");
          }
          return function (ganttDiagramT4ZO3ILLInput85) {
            for (
              var ganttDiagramT4ZO3ILLBinding328 = {},
                ganttDiagramT4ZO3ILLBinding329 = 0,
                ganttDiagramT4ZO3ILLBinding330 = 0;
              ganttDiagramT4ZO3ILLBinding329 < ganttDiagramT4ZO3ILLBinding229;
              ganttDiagramT4ZO3ILLBinding329 += 1
            ) {
              var ganttDiagramT4ZO3ILLBinding331 =
                ganttDiagramT4ZO3ILLBinding228[ganttDiagramT4ZO3ILLBinding329];
              if (typeof ganttDiagramT4ZO3ILLBinding331 == "string")
                ganttDiagramT4ZO3ILLBinding330 +=
                  ganttDiagramT4ZO3ILLBinding331.length;
              else {
                var ganttDiagramT4ZO3ILLBinding332 =
                    ganttDiagramT4ZO3ILLBinding331.regex,
                  ganttDiagramT4ZO3ILLBinding333 =
                    ganttDiagramT4ZO3ILLBinding331.parser,
                  ganttDiagramT4ZO3ILLBinding334 =
                    ganttDiagramT4ZO3ILLInput85.slice(
                      ganttDiagramT4ZO3ILLBinding330,
                    ),
                  ganttDiagramT4ZO3ILLBinding335 =
                    ganttDiagramT4ZO3ILLBinding332.exec(
                      ganttDiagramT4ZO3ILLBinding334,
                    )[0];
                ganttDiagramT4ZO3ILLBinding333.call(
                  ganttDiagramT4ZO3ILLBinding328,
                  ganttDiagramT4ZO3ILLBinding335,
                );
                ganttDiagramT4ZO3ILLInput85 =
                  ganttDiagramT4ZO3ILLInput85.replace(
                    ganttDiagramT4ZO3ILLBinding335,
                    "",
                  );
              }
            }
            return (
              (function (ganttDiagramT4ZO3ILLInput149) {
                var ganttDiagramT4ZO3ILLBinding401 =
                  ganttDiagramT4ZO3ILLInput149.afternoon;
                if (ganttDiagramT4ZO3ILLBinding401 !== undefined) {
                  var ganttDiagramT4ZO3ILLBinding402 =
                    ganttDiagramT4ZO3ILLInput149.hours;
                  ganttDiagramT4ZO3ILLBinding401
                    ? ganttDiagramT4ZO3ILLBinding402 < 12 &&
                      (ganttDiagramT4ZO3ILLInput149.hours += 12)
                    : ganttDiagramT4ZO3ILLBinding402 === 12 &&
                      (ganttDiagramT4ZO3ILLInput149.hours = 0);
                  delete ganttDiagramT4ZO3ILLInput149.afternoon;
                }
              })(ganttDiagramT4ZO3ILLBinding328),
              ganttDiagramT4ZO3ILLBinding328
            );
          };
        }
        return function (
          ganttDiagramT4ZO3ILLInput33,
          ganttDiagramT4ZO3ILLInput34,
          ganttDiagramT4ZO3ILLInput35,
        ) {
          ganttDiagramT4ZO3ILLInput35.p.customParseFormat = true;
          ganttDiagramT4ZO3ILLInput33 &&
            ganttDiagramT4ZO3ILLInput33.parseTwoDigitYear &&
            (ganttDiagramT4ZO3ILLBinding149 =
              ganttDiagramT4ZO3ILLInput33.parseTwoDigitYear);
          var ganttDiagramT4ZO3ILLBinding194 =
              ganttDiagramT4ZO3ILLInput34.prototype,
            ganttDiagramT4ZO3ILLBinding195 =
              ganttDiagramT4ZO3ILLBinding194.parse;
          ganttDiagramT4ZO3ILLBinding194.parse = function (
            ganttDiagramT4ZO3ILLInput38,
          ) {
            var ganttDiagramT4ZO3ILLBinding200 =
                ganttDiagramT4ZO3ILLInput38.date,
              ganttDiagramT4ZO3ILLBinding201 = ganttDiagramT4ZO3ILLInput38.utc,
              ganttDiagramT4ZO3ILLBinding202 = ganttDiagramT4ZO3ILLInput38.args;
            this.$u = ganttDiagramT4ZO3ILLBinding201;
            var ganttDiagramT4ZO3ILLBinding203 =
              ganttDiagramT4ZO3ILLBinding202[1];
            if (typeof ganttDiagramT4ZO3ILLBinding203 == "string") {
              var ganttDiagramT4ZO3ILLBinding204 =
                  true === ganttDiagramT4ZO3ILLBinding202[2],
                ganttDiagramT4ZO3ILLBinding205 =
                  true === ganttDiagramT4ZO3ILLBinding202[3],
                ganttDiagramT4ZO3ILLBinding206 =
                  ganttDiagramT4ZO3ILLBinding204 ||
                  ganttDiagramT4ZO3ILLBinding205,
                ganttDiagramT4ZO3ILLBinding207 =
                  ganttDiagramT4ZO3ILLBinding202[2];
              ganttDiagramT4ZO3ILLBinding205 &&
                (ganttDiagramT4ZO3ILLBinding207 =
                  ganttDiagramT4ZO3ILLBinding202[2]);
              ganttDiagramT4ZO3ILLBinding148 = this.$locale();
              !ganttDiagramT4ZO3ILLBinding204 &&
                ganttDiagramT4ZO3ILLBinding207 &&
                (ganttDiagramT4ZO3ILLBinding148 =
                  ganttDiagramT4ZO3ILLInput35.Ls[
                    ganttDiagramT4ZO3ILLBinding207
                  ]);
              this.$d = (function (
                ganttDiagramT4ZO3ILLInput61,
                ganttDiagramT4ZO3ILLInput62,
                ganttDiagramT4ZO3ILLInput63,
                ganttDiagramT4ZO3ILLInput64,
              ) {
                try {
                  if (["x", "X"].indexOf(ganttDiagramT4ZO3ILLInput62) > -1)
                    return new Date(
                      (ganttDiagramT4ZO3ILLInput62 === "X" ? 1e3 : 1) *
                        ganttDiagramT4ZO3ILLInput61,
                    );
                  var ganttDiagramT4ZO3ILLBinding245 =
                      ganttDiagramT4ZO3ILLHelper12(ganttDiagramT4ZO3ILLInput62)(
                        ganttDiagramT4ZO3ILLInput61,
                      ),
                    ganttDiagramT4ZO3ILLBinding246 =
                      ganttDiagramT4ZO3ILLBinding245.year,
                    ganttDiagramT4ZO3ILLBinding247 =
                      ganttDiagramT4ZO3ILLBinding245.month,
                    ganttDiagramT4ZO3ILLBinding248 =
                      ganttDiagramT4ZO3ILLBinding245.day,
                    ganttDiagramT4ZO3ILLBinding249 =
                      ganttDiagramT4ZO3ILLBinding245.hours,
                    ganttDiagramT4ZO3ILLBinding250 =
                      ganttDiagramT4ZO3ILLBinding245.minutes,
                    ganttDiagramT4ZO3ILLBinding251 =
                      ganttDiagramT4ZO3ILLBinding245.seconds,
                    ganttDiagramT4ZO3ILLBinding252 =
                      ganttDiagramT4ZO3ILLBinding245.milliseconds,
                    ganttDiagramT4ZO3ILLBinding253 =
                      ganttDiagramT4ZO3ILLBinding245.zone,
                    ganttDiagramT4ZO3ILLBinding254 =
                      ganttDiagramT4ZO3ILLBinding245.week,
                    ganttDiagramT4ZO3ILLBinding255 = new Date(),
                    ganttDiagramT4ZO3ILLBinding256 =
                      ganttDiagramT4ZO3ILLBinding248 ||
                      (ganttDiagramT4ZO3ILLBinding246 ||
                      ganttDiagramT4ZO3ILLBinding247
                        ? 1
                        : ganttDiagramT4ZO3ILLBinding255.getDate()),
                    ganttDiagramT4ZO3ILLBinding257 =
                      ganttDiagramT4ZO3ILLBinding246 ||
                      ganttDiagramT4ZO3ILLBinding255.getFullYear(),
                    ganttDiagramT4ZO3ILLBinding258 = 0;
                  (ganttDiagramT4ZO3ILLBinding246 &&
                    !ganttDiagramT4ZO3ILLBinding247) ||
                    (ganttDiagramT4ZO3ILLBinding258 =
                      ganttDiagramT4ZO3ILLBinding247 > 0
                        ? ganttDiagramT4ZO3ILLBinding247 - 1
                        : ganttDiagramT4ZO3ILLBinding255.getMonth());
                  var ganttDiagramT4ZO3ILLBinding259,
                    ganttDiagramT4ZO3ILLBinding260 =
                      ganttDiagramT4ZO3ILLBinding249 || 0,
                    ganttDiagramT4ZO3ILLBinding261 =
                      ganttDiagramT4ZO3ILLBinding250 || 0,
                    ganttDiagramT4ZO3ILLBinding262 =
                      ganttDiagramT4ZO3ILLBinding251 || 0,
                    ganttDiagramT4ZO3ILLBinding263 =
                      ganttDiagramT4ZO3ILLBinding252 || 0;
                  return ganttDiagramT4ZO3ILLBinding253
                    ? new Date(
                        Date.UTC(
                          ganttDiagramT4ZO3ILLBinding257,
                          ganttDiagramT4ZO3ILLBinding258,
                          ganttDiagramT4ZO3ILLBinding256,
                          ganttDiagramT4ZO3ILLBinding260,
                          ganttDiagramT4ZO3ILLBinding261,
                          ganttDiagramT4ZO3ILLBinding262,
                          ganttDiagramT4ZO3ILLBinding263 +
                            60 * ganttDiagramT4ZO3ILLBinding253.offset * 1e3,
                        ),
                      )
                    : ganttDiagramT4ZO3ILLInput63
                      ? new Date(
                          Date.UTC(
                            ganttDiagramT4ZO3ILLBinding257,
                            ganttDiagramT4ZO3ILLBinding258,
                            ganttDiagramT4ZO3ILLBinding256,
                            ganttDiagramT4ZO3ILLBinding260,
                            ganttDiagramT4ZO3ILLBinding261,
                            ganttDiagramT4ZO3ILLBinding262,
                            ganttDiagramT4ZO3ILLBinding263,
                          ),
                        )
                      : ((ganttDiagramT4ZO3ILLBinding259 = new Date(
                          ganttDiagramT4ZO3ILLBinding257,
                          ganttDiagramT4ZO3ILLBinding258,
                          ganttDiagramT4ZO3ILLBinding256,
                          ganttDiagramT4ZO3ILLBinding260,
                          ganttDiagramT4ZO3ILLBinding261,
                          ganttDiagramT4ZO3ILLBinding262,
                          ganttDiagramT4ZO3ILLBinding263,
                        )),
                        ganttDiagramT4ZO3ILLBinding254 &&
                          (ganttDiagramT4ZO3ILLBinding259 =
                            ganttDiagramT4ZO3ILLInput64(
                              ganttDiagramT4ZO3ILLBinding259,
                            )
                              .week(ganttDiagramT4ZO3ILLBinding254)
                              .toDate()),
                        ganttDiagramT4ZO3ILLBinding259);
                } catch {
                  return new Date("");
                }
              })(
                ganttDiagramT4ZO3ILLBinding200,
                ganttDiagramT4ZO3ILLBinding203,
                ganttDiagramT4ZO3ILLBinding201,
                ganttDiagramT4ZO3ILLInput35,
              );
              this.init();
              ganttDiagramT4ZO3ILLBinding207 &&
                true !== ganttDiagramT4ZO3ILLBinding207 &&
                (this.$L = this.locale(ganttDiagramT4ZO3ILLBinding207).$L);
              ganttDiagramT4ZO3ILLBinding206 &&
                ganttDiagramT4ZO3ILLBinding200 !=
                  this.format(ganttDiagramT4ZO3ILLBinding203) &&
                (this.$d = new Date(""));
              ganttDiagramT4ZO3ILLBinding148 = {};
            } else if (ganttDiagramT4ZO3ILLBinding203 instanceof Array)
              for (
                var ganttDiagramT4ZO3ILLBinding208 =
                    ganttDiagramT4ZO3ILLBinding203.length,
                  ganttDiagramT4ZO3ILLBinding209 = 1;
                ganttDiagramT4ZO3ILLBinding209 <=
                ganttDiagramT4ZO3ILLBinding208;
                ganttDiagramT4ZO3ILLBinding209 += 1
              ) {
                ganttDiagramT4ZO3ILLBinding202[1] =
                  ganttDiagramT4ZO3ILLBinding203[
                    ganttDiagramT4ZO3ILLBinding209 - 1
                  ];
                var ganttDiagramT4ZO3ILLBinding210 =
                  ganttDiagramT4ZO3ILLInput35.apply(
                    this,
                    ganttDiagramT4ZO3ILLBinding202,
                  );
                if (ganttDiagramT4ZO3ILLBinding210.isValid()) {
                  this.$d = ganttDiagramT4ZO3ILLBinding210.$d;
                  this.$L = ganttDiagramT4ZO3ILLBinding210.$L;
                  this.init();
                  break;
                }
                ganttDiagramT4ZO3ILLBinding209 ===
                  ganttDiagramT4ZO3ILLBinding208 && (this.$d = new Date(""));
              }
            else
              ganttDiagramT4ZO3ILLBinding195.call(
                this,
                ganttDiagramT4ZO3ILLInput38,
              );
          };
        };
      });
    },
  ),
  ganttDiagramT4ZO3ILLBinding3 = commonJsInit(
    (ganttDiagramT4ZO3ILLInput39, ganttDiagramT4ZO3ILLInput40) => {
      (function (ganttDiagramT4ZO3ILLInput135, ganttDiagramT4ZO3ILLInput136) {
        typeof ganttDiagramT4ZO3ILLInput39 == "object" &&
        ganttDiagramT4ZO3ILLInput40 !== undefined
          ? (ganttDiagramT4ZO3ILLInput40.exports =
              ganttDiagramT4ZO3ILLInput136())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramT4ZO3ILLInput136)
            : ((ganttDiagramT4ZO3ILLInput135 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramT4ZO3ILLInput135 ||
                    self).dayjs_plugin_advancedFormat =
                ganttDiagramT4ZO3ILLInput136());
      })(ganttDiagramT4ZO3ILLInput39, function () {
        return function (
          ganttDiagramT4ZO3ILLInput49,
          ganttDiagramT4ZO3ILLInput50,
        ) {
          var ganttDiagramT4ZO3ILLBinding218 =
              ganttDiagramT4ZO3ILLInput50.prototype,
            ganttDiagramT4ZO3ILLBinding219 =
              ganttDiagramT4ZO3ILLBinding218.format;
          ganttDiagramT4ZO3ILLBinding218.format = function (
            ganttDiagramT4ZO3ILLInput53,
          ) {
            var ganttDiagramT4ZO3ILLBinding220 = this,
              ganttDiagramT4ZO3ILLBinding221 = this.$locale();
            if (!this.isValid())
              return ganttDiagramT4ZO3ILLBinding219.bind(this)(
                ganttDiagramT4ZO3ILLInput53,
              );
            var ganttDiagramT4ZO3ILLBinding222 = this.$utils(),
              ganttDiagramT4ZO3ILLBinding223 = (
                ganttDiagramT4ZO3ILLInput53 || "YYYY-MM-DDTHH:mm:ssZ"
              ).replace(
                /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
                function (ganttDiagramT4ZO3ILLInput68) {
                  switch (ganttDiagramT4ZO3ILLInput68) {
                    case "Q":
                      return Math.ceil(
                        (ganttDiagramT4ZO3ILLBinding220.$M + 1) / 3,
                      );
                    case "Do":
                      return ganttDiagramT4ZO3ILLBinding221.ordinal(
                        ganttDiagramT4ZO3ILLBinding220.$D,
                      );
                    case "gggg":
                      return ganttDiagramT4ZO3ILLBinding220.weekYear();
                    case "GGGG":
                      return ganttDiagramT4ZO3ILLBinding220.isoWeekYear();
                    case "wo":
                      return ganttDiagramT4ZO3ILLBinding221.ordinal(
                        ganttDiagramT4ZO3ILLBinding220.week(),
                        "W",
                      );
                    case "w":
                    case "ww":
                      return ganttDiagramT4ZO3ILLBinding222.s(
                        ganttDiagramT4ZO3ILLBinding220.week(),
                        ganttDiagramT4ZO3ILLInput68 === "w" ? 1 : 2,
                        "0",
                      );
                    case "W":
                    case "WW":
                      return ganttDiagramT4ZO3ILLBinding222.s(
                        ganttDiagramT4ZO3ILLBinding220.isoWeek(),
                        ganttDiagramT4ZO3ILLInput68 === "W" ? 1 : 2,
                        "0",
                      );
                    case "k":
                    case "kk":
                      return ganttDiagramT4ZO3ILLBinding222.s(
                        String(
                          ganttDiagramT4ZO3ILLBinding220.$H === 0
                            ? 24
                            : ganttDiagramT4ZO3ILLBinding220.$H,
                        ),
                        ganttDiagramT4ZO3ILLInput68 === "k" ? 1 : 2,
                        "0",
                      );
                    case "X":
                      return Math.floor(
                        ganttDiagramT4ZO3ILLBinding220.$d.getTime() / 1e3,
                      );
                    case "x":
                      return ganttDiagramT4ZO3ILLBinding220.$d.getTime();
                    case "z":
                      return (
                        "[" + ganttDiagramT4ZO3ILLBinding220.offsetName() + "]"
                      );
                    case "zzz":
                      return (
                        "[" +
                        ganttDiagramT4ZO3ILLBinding220.offsetName("long") +
                        "]"
                      );
                    default:
                      return ganttDiagramT4ZO3ILLInput68;
                  }
                },
              );
            return ganttDiagramT4ZO3ILLBinding219.bind(this)(
              ganttDiagramT4ZO3ILLBinding223,
            );
          };
        };
      });
    },
  ),
  ganttDiagramT4ZO3ILLBinding4 = commonJsInit(
    (ganttDiagramT4ZO3ILLInput5, ganttDiagramT4ZO3ILLInput6) => {
      (function (ganttDiagramT4ZO3ILLInput141, ganttDiagramT4ZO3ILLInput142) {
        typeof ganttDiagramT4ZO3ILLInput5 == "object" &&
        ganttDiagramT4ZO3ILLInput6 !== undefined
          ? (ganttDiagramT4ZO3ILLInput6.exports =
              ganttDiagramT4ZO3ILLInput142())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramT4ZO3ILLInput142)
            : ((ganttDiagramT4ZO3ILLInput141 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramT4ZO3ILLInput141 ||
                    self).dayjs_plugin_duration =
                ganttDiagramT4ZO3ILLInput142());
      })(ganttDiagramT4ZO3ILLInput5, function () {
        var ganttDiagramT4ZO3ILLBinding122,
          ganttDiagramT4ZO3ILLBinding123,
          ganttDiagramT4ZO3ILLBinding128 =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          ganttDiagramT4ZO3ILLBinding131 =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
          ganttDiagramT4ZO3ILLBinding132 = {
            years: 31536e6,
            months: 2628e6,
            days: 864e5,
            hours: 36e5,
            minutes: 6e4,
            seconds: 1e3,
            milliseconds: 1,
            weeks: 6048e5,
          },
          ganttDiagramT4ZO3ILLBinding133 = function (
            ganttDiagramT4ZO3ILLInput245,
          ) {
            return (
              ganttDiagramT4ZO3ILLInput245 instanceof
              ganttDiagramT4ZO3ILLBinding140
            );
          },
          ganttDiagramT4ZO3ILLBinding134 = function (
            ganttDiagramT4ZO3ILLInput237,
            ganttDiagramT4ZO3ILLInput238,
            ganttDiagramT4ZO3ILLInput239,
          ) {
            return new ganttDiagramT4ZO3ILLBinding140(
              ganttDiagramT4ZO3ILLInput237,
              ganttDiagramT4ZO3ILLInput239,
              ganttDiagramT4ZO3ILLInput238.$l,
            );
          },
          ganttDiagramT4ZO3ILLBinding135 = function (
            ganttDiagramT4ZO3ILLInput249,
          ) {
            return (
              ganttDiagramT4ZO3ILLBinding123.p(ganttDiagramT4ZO3ILLInput249) +
              "s"
            );
          },
          ganttDiagramT4ZO3ILLBinding136 = function (
            ganttDiagramT4ZO3ILLInput256,
          ) {
            return ganttDiagramT4ZO3ILLInput256 < 0;
          },
          ganttDiagramT4ZO3ILLBinding137 = function (
            ganttDiagramT4ZO3ILLInput216,
          ) {
            return ganttDiagramT4ZO3ILLBinding136(ganttDiagramT4ZO3ILLInput216)
              ? Math.ceil(ganttDiagramT4ZO3ILLInput216)
              : Math.floor(ganttDiagramT4ZO3ILLInput216);
          },
          ganttDiagramT4ZO3ILLBinding138 = function (
            ganttDiagramT4ZO3ILLInput250,
          ) {
            return Math.abs(ganttDiagramT4ZO3ILLInput250);
          },
          ganttDiagramT4ZO3ILLBinding139 = function (
            ganttDiagramT4ZO3ILLInput174,
            ganttDiagramT4ZO3ILLInput175,
          ) {
            return ganttDiagramT4ZO3ILLInput174
              ? ganttDiagramT4ZO3ILLBinding136(ganttDiagramT4ZO3ILLInput174)
                ? {
                    negative: true,
                    format:
                      "" +
                      ganttDiagramT4ZO3ILLBinding138(
                        ganttDiagramT4ZO3ILLInput174,
                      ) +
                      ganttDiagramT4ZO3ILLInput175,
                  }
                : {
                    negative: false,
                    format:
                      "" +
                      ganttDiagramT4ZO3ILLInput174 +
                      ganttDiagramT4ZO3ILLInput175,
                  }
              : {
                  negative: false,
                  format: "",
                };
          },
          ganttDiagramT4ZO3ILLBinding140 = (function () {
            function ganttDiagramT4ZO3ILLHelper13(
              ganttDiagramT4ZO3ILLInput65,
              ganttDiagramT4ZO3ILLInput66,
              ganttDiagramT4ZO3ILLInput67,
            ) {
              var ganttDiagramT4ZO3ILLBinding265 = this;
              if (
                ((this.$d = {}),
                (this.$l = ganttDiagramT4ZO3ILLInput67),
                ganttDiagramT4ZO3ILLInput65 === undefined &&
                  ((this.$ms = 0), this.parseFromMilliseconds()),
                ganttDiagramT4ZO3ILLInput66)
              )
                return ganttDiagramT4ZO3ILLBinding134(
                  ganttDiagramT4ZO3ILLInput65 *
                    ganttDiagramT4ZO3ILLBinding132[
                      ganttDiagramT4ZO3ILLBinding135(
                        ganttDiagramT4ZO3ILLInput66,
                      )
                    ],
                  this,
                );
              if (typeof ganttDiagramT4ZO3ILLInput65 == "number")
                return (
                  (this.$ms = ganttDiagramT4ZO3ILLInput65),
                  this.parseFromMilliseconds(),
                  this
                );
              if (typeof ganttDiagramT4ZO3ILLInput65 == "object")
                return (
                  Object.keys(ganttDiagramT4ZO3ILLInput65).forEach(
                    function (item) {
                      ganttDiagramT4ZO3ILLBinding265.$d[
                        ganttDiagramT4ZO3ILLBinding135(item)
                      ] = ganttDiagramT4ZO3ILLInput65[item];
                    },
                  ),
                  this.calMilliseconds(),
                  this
                );
              if (typeof ganttDiagramT4ZO3ILLInput65 == "string") {
                var ganttDiagramT4ZO3ILLBinding266 =
                  ganttDiagramT4ZO3ILLInput65.match(
                    ganttDiagramT4ZO3ILLBinding131,
                  );
                if (ganttDiagramT4ZO3ILLBinding266) {
                  var ganttDiagramT4ZO3ILLBinding267 =
                    ganttDiagramT4ZO3ILLBinding266
                      .slice(2)
                      .map(function (item) {
                        return item == null ? 0 : Number(item);
                      });
                  return (
                    (this.$d.years = ganttDiagramT4ZO3ILLBinding267[0]),
                    (this.$d.months = ganttDiagramT4ZO3ILLBinding267[1]),
                    (this.$d.weeks = ganttDiagramT4ZO3ILLBinding267[2]),
                    (this.$d.days = ganttDiagramT4ZO3ILLBinding267[3]),
                    (this.$d.hours = ganttDiagramT4ZO3ILLBinding267[4]),
                    (this.$d.minutes = ganttDiagramT4ZO3ILLBinding267[5]),
                    (this.$d.seconds = ganttDiagramT4ZO3ILLBinding267[6]),
                    this.calMilliseconds(),
                    this
                  );
                }
              }
              return this;
            }
            var ganttDiagramT4ZO3ILLBinding158 =
              ganttDiagramT4ZO3ILLHelper13.prototype;
            return (
              (ganttDiagramT4ZO3ILLBinding158.calMilliseconds = function () {
                var ganttDiagramT4ZO3ILLBinding424 = this;
                this.$ms = Object.keys(this.$d).reduce(function (
                  accumulator,
                  current,
                ) {
                  return (
                    accumulator +
                    (ganttDiagramT4ZO3ILLBinding424.$d[current] || 0) *
                      ganttDiagramT4ZO3ILLBinding132[current]
                  );
                }, 0);
              }),
              (ganttDiagramT4ZO3ILLBinding158.parseFromMilliseconds =
                function () {
                  var ganttDiagramT4ZO3ILLBinding356 = this.$ms;
                  this.$d.years = ganttDiagramT4ZO3ILLBinding137(
                    ganttDiagramT4ZO3ILLBinding356 / 31536e6,
                  );
                  ganttDiagramT4ZO3ILLBinding356 %= 31536e6;
                  this.$d.months = ganttDiagramT4ZO3ILLBinding137(
                    ganttDiagramT4ZO3ILLBinding356 / 2628e6,
                  );
                  ganttDiagramT4ZO3ILLBinding356 %= 2628e6;
                  this.$d.days = ganttDiagramT4ZO3ILLBinding137(
                    ganttDiagramT4ZO3ILLBinding356 / 864e5,
                  );
                  ganttDiagramT4ZO3ILLBinding356 %= 864e5;
                  this.$d.hours = ganttDiagramT4ZO3ILLBinding137(
                    ganttDiagramT4ZO3ILLBinding356 / 36e5,
                  );
                  ganttDiagramT4ZO3ILLBinding356 %= 36e5;
                  this.$d.minutes = ganttDiagramT4ZO3ILLBinding137(
                    ganttDiagramT4ZO3ILLBinding356 / 6e4,
                  );
                  ganttDiagramT4ZO3ILLBinding356 %= 6e4;
                  this.$d.seconds = ganttDiagramT4ZO3ILLBinding137(
                    ganttDiagramT4ZO3ILLBinding356 / 1e3,
                  );
                  ganttDiagramT4ZO3ILLBinding356 %= 1e3;
                  this.$d.milliseconds = ganttDiagramT4ZO3ILLBinding356;
                }),
              (ganttDiagramT4ZO3ILLBinding158.toISOString = function () {
                var ganttDiagramT4ZO3ILLBinding284 =
                    ganttDiagramT4ZO3ILLBinding139(this.$d.years, "Y"),
                  ganttDiagramT4ZO3ILLBinding285 =
                    ganttDiagramT4ZO3ILLBinding139(this.$d.months, "M"),
                  ganttDiagramT4ZO3ILLBinding286 = +this.$d.days || 0;
                this.$d.weeks &&
                  (ganttDiagramT4ZO3ILLBinding286 += 7 * this.$d.weeks);
                var ganttDiagramT4ZO3ILLBinding287 =
                    ganttDiagramT4ZO3ILLBinding139(
                      ganttDiagramT4ZO3ILLBinding286,
                      "D",
                    ),
                  ganttDiagramT4ZO3ILLBinding288 =
                    ganttDiagramT4ZO3ILLBinding139(this.$d.hours, "H"),
                  ganttDiagramT4ZO3ILLBinding289 =
                    ganttDiagramT4ZO3ILLBinding139(this.$d.minutes, "M"),
                  ganttDiagramT4ZO3ILLBinding290 = this.$d.seconds || 0;
                this.$d.milliseconds &&
                  ((ganttDiagramT4ZO3ILLBinding290 +=
                    this.$d.milliseconds / 1e3),
                  (ganttDiagramT4ZO3ILLBinding290 =
                    Math.round(1e3 * ganttDiagramT4ZO3ILLBinding290) / 1e3));
                var ganttDiagramT4ZO3ILLBinding291 =
                    ganttDiagramT4ZO3ILLBinding139(
                      ganttDiagramT4ZO3ILLBinding290,
                      "S",
                    ),
                  ganttDiagramT4ZO3ILLBinding292 =
                    ganttDiagramT4ZO3ILLBinding284.negative ||
                    ganttDiagramT4ZO3ILLBinding285.negative ||
                    ganttDiagramT4ZO3ILLBinding287.negative ||
                    ganttDiagramT4ZO3ILLBinding288.negative ||
                    ganttDiagramT4ZO3ILLBinding289.negative ||
                    ganttDiagramT4ZO3ILLBinding291.negative,
                  ganttDiagramT4ZO3ILLBinding293 =
                    ganttDiagramT4ZO3ILLBinding288.format ||
                    ganttDiagramT4ZO3ILLBinding289.format ||
                    ganttDiagramT4ZO3ILLBinding291.format
                      ? "T"
                      : "",
                  ganttDiagramT4ZO3ILLBinding294 =
                    (ganttDiagramT4ZO3ILLBinding292 ? "-" : "") +
                    "P" +
                    ganttDiagramT4ZO3ILLBinding284.format +
                    ganttDiagramT4ZO3ILLBinding285.format +
                    ganttDiagramT4ZO3ILLBinding287.format +
                    ganttDiagramT4ZO3ILLBinding293 +
                    ganttDiagramT4ZO3ILLBinding288.format +
                    ganttDiagramT4ZO3ILLBinding289.format +
                    ganttDiagramT4ZO3ILLBinding291.format;
                return ganttDiagramT4ZO3ILLBinding294 === "P" ||
                  ganttDiagramT4ZO3ILLBinding294 === "-P"
                  ? "P0D"
                  : ganttDiagramT4ZO3ILLBinding294;
              }),
              (ganttDiagramT4ZO3ILLBinding158.toJSON = function () {
                return this.toISOString();
              }),
              (ganttDiagramT4ZO3ILLBinding158.format = function (
                ganttDiagramT4ZO3ILLInput74,
              ) {
                var ganttDiagramT4ZO3ILLBinding307 =
                    ganttDiagramT4ZO3ILLInput74 || "YYYY-MM-DDTHH:mm:ss",
                  ganttDiagramT4ZO3ILLBinding308 = {
                    Y: this.$d.years,
                    YY: ganttDiagramT4ZO3ILLBinding123.s(this.$d.years, 2, "0"),
                    YYYY: ganttDiagramT4ZO3ILLBinding123.s(
                      this.$d.years,
                      4,
                      "0",
                    ),
                    M: this.$d.months,
                    MM: ganttDiagramT4ZO3ILLBinding123.s(
                      this.$d.months,
                      2,
                      "0",
                    ),
                    D: this.$d.days,
                    DD: ganttDiagramT4ZO3ILLBinding123.s(this.$d.days, 2, "0"),
                    H: this.$d.hours,
                    HH: ganttDiagramT4ZO3ILLBinding123.s(this.$d.hours, 2, "0"),
                    m: this.$d.minutes,
                    mm: ganttDiagramT4ZO3ILLBinding123.s(
                      this.$d.minutes,
                      2,
                      "0",
                    ),
                    s: this.$d.seconds,
                    ss: ganttDiagramT4ZO3ILLBinding123.s(
                      this.$d.seconds,
                      2,
                      "0",
                    ),
                    SSS: ganttDiagramT4ZO3ILLBinding123.s(
                      this.$d.milliseconds,
                      3,
                      "0",
                    ),
                  };
                return ganttDiagramT4ZO3ILLBinding307.replace(
                  ganttDiagramT4ZO3ILLBinding128,
                  function (
                    ganttDiagramT4ZO3ILLInput221,
                    ganttDiagramT4ZO3ILLInput222,
                  ) {
                    return (
                      ganttDiagramT4ZO3ILLInput222 ||
                      String(
                        ganttDiagramT4ZO3ILLBinding308[
                          ganttDiagramT4ZO3ILLInput221
                        ],
                      )
                    );
                  },
                );
              }),
              (ganttDiagramT4ZO3ILLBinding158.as = function (
                ganttDiagramT4ZO3ILLInput233,
              ) {
                return (
                  this.$ms /
                  ganttDiagramT4ZO3ILLBinding132[
                    ganttDiagramT4ZO3ILLBinding135(ganttDiagramT4ZO3ILLInput233)
                  ]
                );
              }),
              (ganttDiagramT4ZO3ILLBinding158.get = function (
                ganttDiagramT4ZO3ILLInput146,
              ) {
                var ganttDiagramT4ZO3ILLBinding397 = this.$ms,
                  ganttDiagramT4ZO3ILLBinding398 =
                    ganttDiagramT4ZO3ILLBinding135(
                      ganttDiagramT4ZO3ILLInput146,
                    );
                return (
                  ganttDiagramT4ZO3ILLBinding398 === "milliseconds"
                    ? (ganttDiagramT4ZO3ILLBinding397 %= 1e3)
                    : (ganttDiagramT4ZO3ILLBinding397 =
                        ganttDiagramT4ZO3ILLBinding398 === "weeks"
                          ? ganttDiagramT4ZO3ILLBinding137(
                              ganttDiagramT4ZO3ILLBinding397 /
                                ganttDiagramT4ZO3ILLBinding132[
                                  ganttDiagramT4ZO3ILLBinding398
                                ],
                            )
                          : this.$d[ganttDiagramT4ZO3ILLBinding398]),
                  ganttDiagramT4ZO3ILLBinding397 || 0
                );
              }),
              (ganttDiagramT4ZO3ILLBinding158.add = function (
                ganttDiagramT4ZO3ILLInput171,
                ganttDiagramT4ZO3ILLInput172,
                ganttDiagramT4ZO3ILLInput173,
              ) {
                var ganttDiagramT4ZO3ILLBinding421;
                return (
                  (ganttDiagramT4ZO3ILLBinding421 = ganttDiagramT4ZO3ILLInput172
                    ? ganttDiagramT4ZO3ILLInput171 *
                      ganttDiagramT4ZO3ILLBinding132[
                        ganttDiagramT4ZO3ILLBinding135(
                          ganttDiagramT4ZO3ILLInput172,
                        )
                      ]
                    : ganttDiagramT4ZO3ILLBinding133(
                          ganttDiagramT4ZO3ILLInput171,
                        )
                      ? ganttDiagramT4ZO3ILLInput171.$ms
                      : ganttDiagramT4ZO3ILLBinding134(
                          ganttDiagramT4ZO3ILLInput171,
                          this,
                        ).$ms),
                  ganttDiagramT4ZO3ILLBinding134(
                    this.$ms +
                      ganttDiagramT4ZO3ILLBinding421 *
                        (ganttDiagramT4ZO3ILLInput173 ? -1 : 1),
                    this,
                  )
                );
              }),
              (ganttDiagramT4ZO3ILLBinding158.subtract = function (
                ganttDiagramT4ZO3ILLInput225,
                ganttDiagramT4ZO3ILLInput226,
              ) {
                return this.add(
                  ganttDiagramT4ZO3ILLInput225,
                  ganttDiagramT4ZO3ILLInput226,
                  true,
                );
              }),
              (ganttDiagramT4ZO3ILLBinding158.locale = function (
                ganttDiagramT4ZO3ILLInput199,
              ) {
                var ganttDiagramT4ZO3ILLBinding452 = this.clone();
                return (
                  (ganttDiagramT4ZO3ILLBinding452.$l =
                    ganttDiagramT4ZO3ILLInput199),
                  ganttDiagramT4ZO3ILLBinding452
                );
              }),
              (ganttDiagramT4ZO3ILLBinding158.clone = function () {
                return ganttDiagramT4ZO3ILLBinding134(this.$ms, this);
              }),
              (ganttDiagramT4ZO3ILLBinding158.humanize = function (
                ganttDiagramT4ZO3ILLInput200,
              ) {
                return ganttDiagramT4ZO3ILLBinding122()
                  .add(this.$ms, "ms")
                  .locale(this.$l)
                  .fromNow(!ganttDiagramT4ZO3ILLInput200);
              }),
              (ganttDiagramT4ZO3ILLBinding158.valueOf = function () {
                return this.asMilliseconds();
              }),
              (ganttDiagramT4ZO3ILLBinding158.milliseconds = function () {
                return this.get("milliseconds");
              }),
              (ganttDiagramT4ZO3ILLBinding158.asMilliseconds = function () {
                return this.as("milliseconds");
              }),
              (ganttDiagramT4ZO3ILLBinding158.seconds = function () {
                return this.get("seconds");
              }),
              (ganttDiagramT4ZO3ILLBinding158.asSeconds = function () {
                return this.as("seconds");
              }),
              (ganttDiagramT4ZO3ILLBinding158.minutes = function () {
                return this.get("minutes");
              }),
              (ganttDiagramT4ZO3ILLBinding158.asMinutes = function () {
                return this.as("minutes");
              }),
              (ganttDiagramT4ZO3ILLBinding158.hours = function () {
                return this.get("hours");
              }),
              (ganttDiagramT4ZO3ILLBinding158.asHours = function () {
                return this.as("hours");
              }),
              (ganttDiagramT4ZO3ILLBinding158.days = function () {
                return this.get("days");
              }),
              (ganttDiagramT4ZO3ILLBinding158.asDays = function () {
                return this.as("days");
              }),
              (ganttDiagramT4ZO3ILLBinding158.weeks = function () {
                return this.get("weeks");
              }),
              (ganttDiagramT4ZO3ILLBinding158.asWeeks = function () {
                return this.as("weeks");
              }),
              (ganttDiagramT4ZO3ILLBinding158.months = function () {
                return this.get("months");
              }),
              (ganttDiagramT4ZO3ILLBinding158.asMonths = function () {
                return this.as("months");
              }),
              (ganttDiagramT4ZO3ILLBinding158.years = function () {
                return this.get("years");
              }),
              (ganttDiagramT4ZO3ILLBinding158.asYears = function () {
                return this.as("years");
              }),
              ganttDiagramT4ZO3ILLHelper13
            );
          })(),
          ganttDiagramT4ZO3ILLBinding141 = function (
            ganttDiagramT4ZO3ILLInput132,
            ganttDiagramT4ZO3ILLInput133,
            ganttDiagramT4ZO3ILLInput134,
          ) {
            return ganttDiagramT4ZO3ILLInput132
              .add(
                ganttDiagramT4ZO3ILLInput133.years() *
                  ganttDiagramT4ZO3ILLInput134,
                "y",
              )
              .add(
                ganttDiagramT4ZO3ILLInput133.months() *
                  ganttDiagramT4ZO3ILLInput134,
                "M",
              )
              .add(
                ganttDiagramT4ZO3ILLInput133.days() *
                  ganttDiagramT4ZO3ILLInput134,
                "d",
              )
              .add(
                ganttDiagramT4ZO3ILLInput133.hours() *
                  ganttDiagramT4ZO3ILLInput134,
                "h",
              )
              .add(
                ganttDiagramT4ZO3ILLInput133.minutes() *
                  ganttDiagramT4ZO3ILLInput134,
                "m",
              )
              .add(
                ganttDiagramT4ZO3ILLInput133.seconds() *
                  ganttDiagramT4ZO3ILLInput134,
                "s",
              )
              .add(
                ganttDiagramT4ZO3ILLInput133.milliseconds() *
                  ganttDiagramT4ZO3ILLInput134,
                "ms",
              );
          };
        return function (
          ganttDiagramT4ZO3ILLInput98,
          ganttDiagramT4ZO3ILLInput99,
          ganttDiagramT4ZO3ILLInput100,
        ) {
          ganttDiagramT4ZO3ILLBinding122 = ganttDiagramT4ZO3ILLInput100;
          ganttDiagramT4ZO3ILLBinding123 =
            ganttDiagramT4ZO3ILLInput100().$utils();
          ganttDiagramT4ZO3ILLInput100.duration = function (
            ganttDiagramT4ZO3ILLInput218,
            ganttDiagramT4ZO3ILLInput219,
          ) {
            return ganttDiagramT4ZO3ILLBinding134(
              ganttDiagramT4ZO3ILLInput218,
              {
                $l: ganttDiagramT4ZO3ILLInput100.locale(),
              },
              ganttDiagramT4ZO3ILLInput219,
            );
          };
          ganttDiagramT4ZO3ILLInput100.isDuration =
            ganttDiagramT4ZO3ILLBinding133;
          var ganttDiagramT4ZO3ILLBinding354 =
              ganttDiagramT4ZO3ILLInput99.prototype.add,
            ganttDiagramT4ZO3ILLBinding355 =
              ganttDiagramT4ZO3ILLInput99.prototype.subtract;
          ganttDiagramT4ZO3ILLInput99.prototype.add = function (
            ganttDiagramT4ZO3ILLInput210,
            ganttDiagramT4ZO3ILLInput211,
          ) {
            return ganttDiagramT4ZO3ILLBinding133(ganttDiagramT4ZO3ILLInput210)
              ? ganttDiagramT4ZO3ILLBinding141(
                  this,
                  ganttDiagramT4ZO3ILLInput210,
                  1,
                )
              : ganttDiagramT4ZO3ILLBinding354.bind(this)(
                  ganttDiagramT4ZO3ILLInput210,
                  ganttDiagramT4ZO3ILLInput211,
                );
          };
          ganttDiagramT4ZO3ILLInput99.prototype.subtract = function (
            ganttDiagramT4ZO3ILLInput203,
            ganttDiagramT4ZO3ILLInput204,
          ) {
            return ganttDiagramT4ZO3ILLBinding133(ganttDiagramT4ZO3ILLInput203)
              ? ganttDiagramT4ZO3ILLBinding141(
                  this,
                  ganttDiagramT4ZO3ILLInput203,
                  -1,
                )
              : ganttDiagramT4ZO3ILLBinding355.bind(this)(
                  ganttDiagramT4ZO3ILLInput203,
                  ganttDiagramT4ZO3ILLInput204,
                );
          };
        };
      });
    },
  );
function ganttDiagramT4ZO3ILLHelper1(
  ganttDiagramT4ZO3ILLInput163,
  ganttDiagramT4ZO3ILLInput164,
  ganttDiagramT4ZO3ILLInput165,
) {
  let ganttDiagramT4ZO3ILLBinding414 = true;
  for (; ganttDiagramT4ZO3ILLBinding414; ) {
    ganttDiagramT4ZO3ILLBinding414 = false;
    ganttDiagramT4ZO3ILLInput165.forEach(function (item) {
      let ganttDiagramT4ZO3ILLBinding436 = "^\\s*" + item + "\\s*$",
        ganttDiagramT4ZO3ILLBinding437 = new RegExp(
          ganttDiagramT4ZO3ILLBinding436,
        );
      ganttDiagramT4ZO3ILLInput163[0].match(ganttDiagramT4ZO3ILLBinding437) &&
        ((ganttDiagramT4ZO3ILLInput164[item] = true),
        ganttDiagramT4ZO3ILLInput163.shift(1),
        (ganttDiagramT4ZO3ILLBinding414 = true));
    });
  }
}
var ganttDiagramT4ZO3ILLBinding5,
  ganttDiagramT4ZO3ILLBinding6,
  ganttDiagramT4ZO3ILLBinding7,
  _e,
  ganttDiagramT4ZO3ILLBinding8,
  ganttDiagramT4ZO3ILLBinding9,
  ganttDiagramT4ZO3ILLBinding10,
  be,
  ganttDiagramT4ZO3ILLBinding11,
  ganttDiagramT4ZO3ILLBinding12,
  ganttDiagramT4ZO3ILLBinding13,
  ganttDiagramT4ZO3ILLBinding14,
  ganttDiagramT4ZO3ILLBinding15,
  ganttDiagramT4ZO3ILLBinding16,
  ganttDiagramT4ZO3ILLBinding17,
  ganttDiagramT4ZO3ILLBinding18,
  ganttDiagramT4ZO3ILLBinding19,
  ganttDiagramT4ZO3ILLBinding20,
  ganttDiagramT4ZO3ILLBinding21,
  ganttDiagramT4ZO3ILLBinding22,
  ganttDiagramT4ZO3ILLBinding23,
  ganttDiagramT4ZO3ILLBinding24,
  ganttDiagramT4ZO3ILLBinding25,
  ganttDiagramT4ZO3ILLBinding26,
  ganttDiagramT4ZO3ILLBinding27,
  ganttDiagramT4ZO3ILLBinding28,
  ganttDiagramT4ZO3ILLBinding29,
  ganttDiagramT4ZO3ILLBinding30,
  ganttDiagramT4ZO3ILLBinding31,
  ganttDiagramT4ZO3ILLBinding32,
  ganttDiagramT4ZO3ILLBinding33,
  ganttDiagramT4ZO3ILLBinding34,
  ganttDiagramT4ZO3ILLBinding35,
  ganttDiagramT4ZO3ILLBinding36,
  ganttDiagramT4ZO3ILLBinding37,
  ganttDiagramT4ZO3ILLBinding38,
  ganttDiagramT4ZO3ILLBinding39,
  ganttDiagramT4ZO3ILLBinding40,
  ganttDiagramT4ZO3ILLBinding41,
  ganttDiagramT4ZO3ILLBinding42,
  ganttDiagramT4ZO3ILLBinding43,
  ganttDiagramT4ZO3ILLBinding44,
  ganttDiagramT4ZO3ILLBinding45,
  ganttDiagramT4ZO3ILLBinding46,
  ganttDiagramT4ZO3ILLBinding47,
  ganttDiagramT4ZO3ILLBinding48,
  ganttDiagramT4ZO3ILLBinding49,
  ganttDiagramT4ZO3ILLBinding50,
  ganttDiagramT4ZO3ILLBinding51,
  ganttDiagramT4ZO3ILLBinding52,
  ganttDiagramT4ZO3ILLBinding53,
  ganttDiagramT4ZO3ILLBinding54,
  ganttDiagramT4ZO3ILLBinding55,
  $e,
  ganttDiagramT4ZO3ILLBinding56,
  ganttDiagramT4ZO3ILLBinding57,
  ganttDiagramT4ZO3ILLBinding58,
  ganttDiagramT4ZO3ILLBinding59,
  ganttDiagramT4ZO3ILLBinding60,
  at,
  ganttDiagramT4ZO3ILLBinding61,
  ganttDiagramT4ZO3ILLBinding62,
  ganttDiagramT4ZO3ILLBinding63,
  ganttDiagramT4ZO3ILLBinding64,
  ganttDiagramT4ZO3ILLBinding65,
  ganttDiagramT4ZO3ILLBinding66,
  ganttDiagramT4ZO3ILLBinding67,
  ganttDiagramT4ZO3ILLBinding68,
  ganttDiagramT4ZO3ILLBinding69,
  ganttDiagramT4ZO3ILLBinding70,
  ganttDiagramT4ZO3ILLBinding71,
  ganttDiagramT4ZO3ILLBinding72,
  ganttDiagramT4ZO3ILLBinding73,
  ganttDiagramT4ZO3ILLBinding74,
  _t,
  ganttDiagramT4ZO3ILLBinding75,
  ganttDiagramT4ZO3ILLBinding76,
  ganttDiagramT4ZO3ILLBinding77,
  ganttDiagramT4ZO3ILLBinding78,
  ganttDiagramT4ZO3ILLBinding79,
  ganttDiagramT4ZO3ILLBinding80,
  ganttDiagramT4ZO3ILLBinding81,
  ganttDiagramT4ZO3ILLBinding82,
  $,
  GanttDiagramT4ZO3ILL;
esmInit(() => {
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  ganttDiagramT4ZO3ILLBinding5 = dist();
  ganttDiagramT4ZO3ILLBinding6 = toEsm(chunkAGHRB4JFO(), 1);
  ganttDiagramT4ZO3ILLBinding7 = toEsm(ganttDiagramT4ZO3ILLBinding1(), 1);
  _e = toEsm(ganttDiagramT4ZO3ILLBinding2(), 1);
  ganttDiagramT4ZO3ILLBinding8 = toEsm(ganttDiagramT4ZO3ILLBinding3(), 1);
  ganttDiagramT4ZO3ILLBinding9 = toEsm(chunkAGHRB4JFO(), 1);
  ganttDiagramT4ZO3ILLBinding10 = toEsm(ganttDiagramT4ZO3ILLBinding4(), 1);
  srcT();
  be = (function () {
    var ganttDiagramT4ZO3ILLBinding83 = chunkAGHRB4JFN(function (
        ganttDiagramT4ZO3ILLInput194,
        ganttDiagramT4ZO3ILLInput195,
        ganttDiagramT4ZO3ILLInput196,
        ganttDiagramT4ZO3ILLInput197,
      ) {
        for (
          ganttDiagramT4ZO3ILLInput196 ||= {},
            ganttDiagramT4ZO3ILLInput197 = ganttDiagramT4ZO3ILLInput194.length;
          ganttDiagramT4ZO3ILLInput197--;
          ganttDiagramT4ZO3ILLInput196[
            ganttDiagramT4ZO3ILLInput194[ganttDiagramT4ZO3ILLInput197]
          ] = ganttDiagramT4ZO3ILLInput195
        );
        return ganttDiagramT4ZO3ILLInput196;
      }, "o"),
      ganttDiagramT4ZO3ILLBinding84 = [
        6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 33, 35, 36, 38, 40,
      ],
      ganttDiagramT4ZO3ILLBinding85 = [1, 26],
      ganttDiagramT4ZO3ILLBinding86 = [1, 27],
      ganttDiagramT4ZO3ILLBinding87 = [1, 28],
      ganttDiagramT4ZO3ILLBinding88 = [1, 29],
      ganttDiagramT4ZO3ILLBinding89 = [1, 30],
      ganttDiagramT4ZO3ILLBinding90 = [1, 31],
      ganttDiagramT4ZO3ILLBinding91 = [1, 32],
      ganttDiagramT4ZO3ILLBinding92 = [1, 33],
      ganttDiagramT4ZO3ILLBinding93 = [1, 34],
      ganttDiagramT4ZO3ILLBinding94 = [1, 9],
      ganttDiagramT4ZO3ILLBinding95 = [1, 10],
      ganttDiagramT4ZO3ILLBinding96 = [1, 11],
      ganttDiagramT4ZO3ILLBinding97 = [1, 12],
      ganttDiagramT4ZO3ILLBinding98 = [1, 13],
      ganttDiagramT4ZO3ILLBinding99 = [1, 14],
      ganttDiagramT4ZO3ILLBinding100 = [1, 15],
      ganttDiagramT4ZO3ILLBinding101 = [1, 16],
      ganttDiagramT4ZO3ILLBinding102 = [1, 19],
      ganttDiagramT4ZO3ILLBinding103 = [1, 20],
      ganttDiagramT4ZO3ILLBinding104 = [1, 21],
      ganttDiagramT4ZO3ILLBinding105 = [1, 22],
      ganttDiagramT4ZO3ILLBinding106 = [1, 23],
      ganttDiagramT4ZO3ILLBinding107 = [1, 25],
      ganttDiagramT4ZO3ILLBinding108 = [1, 35],
      ganttDiagramT4ZO3ILLBinding109 = {
        trace: chunkAGHRB4JFN(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          gantt: 4,
          document: 5,
          EOF: 6,
          line: 7,
          SPACE: 8,
          statement: 9,
          NL: 10,
          weekday: 11,
          weekday_monday: 12,
          weekday_tuesday: 13,
          weekday_wednesday: 14,
          weekday_thursday: 15,
          weekday_friday: 16,
          weekday_saturday: 17,
          weekday_sunday: 18,
          weekend: 19,
          weekend_friday: 20,
          weekend_saturday: 21,
          dateFormat: 22,
          inclusiveEndDates: 23,
          topAxis: 24,
          axisFormat: 25,
          tickInterval: 26,
          excludes: 27,
          includes: 28,
          todayMarker: 29,
          title: 30,
          acc_title: 31,
          acc_title_value: 32,
          acc_descr: 33,
          acc_descr_value: 34,
          acc_descr_multiline_value: 35,
          section: 36,
          clickStatement: 37,
          taskTxt: 38,
          taskData: 39,
          click: 40,
          callbackname: 41,
          callbackargs: 42,
          href: 43,
          clickStatementDebug: 44,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          4: "gantt",
          6: "EOF",
          8: "SPACE",
          10: "NL",
          12: "weekday_monday",
          13: "weekday_tuesday",
          14: "weekday_wednesday",
          15: "weekday_thursday",
          16: "weekday_friday",
          17: "weekday_saturday",
          18: "weekday_sunday",
          20: "weekend_friday",
          21: "weekend_saturday",
          22: "dateFormat",
          23: "inclusiveEndDates",
          24: "topAxis",
          25: "axisFormat",
          26: "tickInterval",
          27: "excludes",
          28: "includes",
          29: "todayMarker",
          30: "title",
          31: "acc_title",
          32: "acc_title_value",
          33: "acc_descr",
          34: "acc_descr_value",
          35: "acc_descr_multiline_value",
          36: "section",
          38: "taskTxt",
          39: "taskData",
          40: "click",
          41: "callbackname",
          42: "callbackargs",
          43: "href",
        },
        productions_: [
          0,
          [3, 3],
          [5, 0],
          [5, 2],
          [7, 2],
          [7, 1],
          [7, 1],
          [7, 1],
          [11, 1],
          [11, 1],
          [11, 1],
          [11, 1],
          [11, 1],
          [11, 1],
          [11, 1],
          [19, 1],
          [19, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 2],
          [9, 2],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 2],
          [37, 2],
          [37, 3],
          [37, 3],
          [37, 4],
          [37, 3],
          [37, 4],
          [37, 2],
          [44, 2],
          [44, 3],
          [44, 3],
          [44, 4],
          [44, 3],
          [44, 4],
          [44, 2],
        ],
        performAction: chunkAGHRB4JFN(function (
          ganttDiagramT4ZO3ILLInput18,
          ganttDiagramT4ZO3ILLInput19,
          ganttDiagramT4ZO3ILLInput20,
          ganttDiagramT4ZO3ILLInput21,
          ganttDiagramT4ZO3ILLInput22,
          ganttDiagramT4ZO3ILLInput23,
          ganttDiagramT4ZO3ILLInput24,
        ) {
          var ganttDiagramT4ZO3ILLBinding188 =
            ganttDiagramT4ZO3ILLInput23.length - 1;
          switch (ganttDiagramT4ZO3ILLInput22) {
            case 1:
              return ganttDiagramT4ZO3ILLInput23[
                ganttDiagramT4ZO3ILLBinding188 - 1
              ];
            case 2:
              this.$ = [];
              break;
            case 3:
              ganttDiagramT4ZO3ILLInput23[
                ganttDiagramT4ZO3ILLBinding188 - 1
              ].push(
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188],
              );
              this.$ =
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 1];
              break;
            case 4:
            case 5:
              this.$ =
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188];
              break;
            case 6:
            case 7:
              this.$ = [];
              break;
            case 8:
              ganttDiagramT4ZO3ILLInput21.setWeekday("monday");
              break;
            case 9:
              ganttDiagramT4ZO3ILLInput21.setWeekday("tuesday");
              break;
            case 10:
              ganttDiagramT4ZO3ILLInput21.setWeekday("wednesday");
              break;
            case 11:
              ganttDiagramT4ZO3ILLInput21.setWeekday("thursday");
              break;
            case 12:
              ganttDiagramT4ZO3ILLInput21.setWeekday("friday");
              break;
            case 13:
              ganttDiagramT4ZO3ILLInput21.setWeekday("saturday");
              break;
            case 14:
              ganttDiagramT4ZO3ILLInput21.setWeekday("sunday");
              break;
            case 15:
              ganttDiagramT4ZO3ILLInput21.setWeekend("friday");
              break;
            case 16:
              ganttDiagramT4ZO3ILLInput21.setWeekend("saturday");
              break;
            case 17:
              ganttDiagramT4ZO3ILLInput21.setDateFormat(
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(11),
              );
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(11);
              break;
            case 18:
              ganttDiagramT4ZO3ILLInput21.enableInclusiveEndDates();
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(18);
              break;
            case 19:
              ganttDiagramT4ZO3ILLInput21.TopAxis();
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(8);
              break;
            case 20:
              ganttDiagramT4ZO3ILLInput21.setAxisFormat(
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(11),
              );
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(11);
              break;
            case 21:
              ganttDiagramT4ZO3ILLInput21.setTickInterval(
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(13),
              );
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(13);
              break;
            case 22:
              ganttDiagramT4ZO3ILLInput21.setExcludes(
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(9),
              );
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(9);
              break;
            case 23:
              ganttDiagramT4ZO3ILLInput21.setIncludes(
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(9),
              );
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(9);
              break;
            case 24:
              ganttDiagramT4ZO3ILLInput21.setTodayMarker(
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(12),
              );
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(12);
              break;
            case 27:
              ganttDiagramT4ZO3ILLInput21.setDiagramTitle(
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(6),
              );
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(6);
              break;
            case 28:
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].trim();
              ganttDiagramT4ZO3ILLInput21.setAccTitle(this.$);
              break;
            case 29:
            case 30:
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].trim();
              ganttDiagramT4ZO3ILLInput21.setAccDescription(this.$);
              break;
            case 31:
              ganttDiagramT4ZO3ILLInput21.addSection(
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(8),
              );
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188
                ].substr(8);
              break;
            case 33:
              ganttDiagramT4ZO3ILLInput21.addTask(
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 1],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188],
              );
              this.$ = "task";
              break;
            case 34:
              this.$ =
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 1];
              ganttDiagramT4ZO3ILLInput21.setClickEvent(
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 1],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188],
                null,
              );
              break;
            case 35:
              this.$ =
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 2];
              ganttDiagramT4ZO3ILLInput21.setClickEvent(
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 2],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 1],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188],
              );
              break;
            case 36:
              this.$ =
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 2];
              ganttDiagramT4ZO3ILLInput21.setClickEvent(
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 2],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 1],
                null,
              );
              ganttDiagramT4ZO3ILLInput21.setLink(
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 2],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188],
              );
              break;
            case 37:
              this.$ =
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 3];
              ganttDiagramT4ZO3ILLInput21.setClickEvent(
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 3],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 2],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 1],
              );
              ganttDiagramT4ZO3ILLInput21.setLink(
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 3],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188],
              );
              break;
            case 38:
              this.$ =
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 2];
              ganttDiagramT4ZO3ILLInput21.setClickEvent(
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 2],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188],
                null,
              );
              ganttDiagramT4ZO3ILLInput21.setLink(
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 2],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 1],
              );
              break;
            case 39:
              this.$ =
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 3];
              ganttDiagramT4ZO3ILLInput21.setClickEvent(
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 3],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 1],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188],
              );
              ganttDiagramT4ZO3ILLInput21.setLink(
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 3],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 2],
              );
              break;
            case 40:
              this.$ =
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 1];
              ganttDiagramT4ZO3ILLInput21.setLink(
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188 - 1],
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188],
              );
              break;
            case 41:
            case 47:
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188 - 1
                ] +
                " " +
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188];
              break;
            case 42:
            case 43:
            case 45:
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188 - 2
                ] +
                " " +
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188 - 1
                ] +
                " " +
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188];
              break;
            case 44:
            case 46:
              this.$ =
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188 - 3
                ] +
                " " +
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188 - 2
                ] +
                " " +
                ganttDiagramT4ZO3ILLInput23[
                  ganttDiagramT4ZO3ILLBinding188 - 1
                ] +
                " " +
                ganttDiagramT4ZO3ILLInput23[ganttDiagramT4ZO3ILLBinding188];
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: [1, 2],
          },
          {
            1: [3],
          },
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 2], {
            5: 3,
          }),
          {
            6: [1, 4],
            7: 5,
            8: [1, 6],
            9: 7,
            10: [1, 8],
            11: 17,
            12: ganttDiagramT4ZO3ILLBinding85,
            13: ganttDiagramT4ZO3ILLBinding86,
            14: ganttDiagramT4ZO3ILLBinding87,
            15: ganttDiagramT4ZO3ILLBinding88,
            16: ganttDiagramT4ZO3ILLBinding89,
            17: ganttDiagramT4ZO3ILLBinding90,
            18: ganttDiagramT4ZO3ILLBinding91,
            19: 18,
            20: ganttDiagramT4ZO3ILLBinding92,
            21: ganttDiagramT4ZO3ILLBinding93,
            22: ganttDiagramT4ZO3ILLBinding94,
            23: ganttDiagramT4ZO3ILLBinding95,
            24: ganttDiagramT4ZO3ILLBinding96,
            25: ganttDiagramT4ZO3ILLBinding97,
            26: ganttDiagramT4ZO3ILLBinding98,
            27: ganttDiagramT4ZO3ILLBinding99,
            28: ganttDiagramT4ZO3ILLBinding100,
            29: ganttDiagramT4ZO3ILLBinding101,
            30: ganttDiagramT4ZO3ILLBinding102,
            31: ganttDiagramT4ZO3ILLBinding103,
            33: ganttDiagramT4ZO3ILLBinding104,
            35: ganttDiagramT4ZO3ILLBinding105,
            36: ganttDiagramT4ZO3ILLBinding106,
            37: 24,
            38: ganttDiagramT4ZO3ILLBinding107,
            40: ganttDiagramT4ZO3ILLBinding108,
          },
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 7], {
            1: [2, 1],
          }),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 3]),
          {
            9: 36,
            11: 17,
            12: ganttDiagramT4ZO3ILLBinding85,
            13: ganttDiagramT4ZO3ILLBinding86,
            14: ganttDiagramT4ZO3ILLBinding87,
            15: ganttDiagramT4ZO3ILLBinding88,
            16: ganttDiagramT4ZO3ILLBinding89,
            17: ganttDiagramT4ZO3ILLBinding90,
            18: ganttDiagramT4ZO3ILLBinding91,
            19: 18,
            20: ganttDiagramT4ZO3ILLBinding92,
            21: ganttDiagramT4ZO3ILLBinding93,
            22: ganttDiagramT4ZO3ILLBinding94,
            23: ganttDiagramT4ZO3ILLBinding95,
            24: ganttDiagramT4ZO3ILLBinding96,
            25: ganttDiagramT4ZO3ILLBinding97,
            26: ganttDiagramT4ZO3ILLBinding98,
            27: ganttDiagramT4ZO3ILLBinding99,
            28: ganttDiagramT4ZO3ILLBinding100,
            29: ganttDiagramT4ZO3ILLBinding101,
            30: ganttDiagramT4ZO3ILLBinding102,
            31: ganttDiagramT4ZO3ILLBinding103,
            33: ganttDiagramT4ZO3ILLBinding104,
            35: ganttDiagramT4ZO3ILLBinding105,
            36: ganttDiagramT4ZO3ILLBinding106,
            37: 24,
            38: ganttDiagramT4ZO3ILLBinding107,
            40: ganttDiagramT4ZO3ILLBinding108,
          },
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 5]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 6]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 17]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 18]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 19]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 20]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 21]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 22]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 23]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 24]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 25]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 26]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 27]),
          {
            32: [1, 37],
          },
          {
            34: [1, 38],
          },
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 30]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 31]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 32]),
          {
            39: [1, 39],
          },
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 8]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 9]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 10]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 11]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 12]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 13]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 14]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 15]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 16]),
          {
            41: [1, 40],
            43: [1, 41],
          },
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 4]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 28]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 29]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 33]),
          ganttDiagramT4ZO3ILLBinding83(
            ganttDiagramT4ZO3ILLBinding84,
            [2, 34],
            {
              42: [1, 42],
              43: [1, 43],
            },
          ),
          ganttDiagramT4ZO3ILLBinding83(
            ganttDiagramT4ZO3ILLBinding84,
            [2, 40],
            {
              41: [1, 44],
            },
          ),
          ganttDiagramT4ZO3ILLBinding83(
            ganttDiagramT4ZO3ILLBinding84,
            [2, 35],
            {
              43: [1, 45],
            },
          ),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 36]),
          ganttDiagramT4ZO3ILLBinding83(
            ganttDiagramT4ZO3ILLBinding84,
            [2, 38],
            {
              42: [1, 46],
            },
          ),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 37]),
          ganttDiagramT4ZO3ILLBinding83(ganttDiagramT4ZO3ILLBinding84, [2, 39]),
        ],
        defaultActions: {},
        parseError: chunkAGHRB4JFN(function (
          ganttDiagramT4ZO3ILLInput179,
          ganttDiagramT4ZO3ILLInput180,
        ) {
          if (ganttDiagramT4ZO3ILLInput180.recoverable)
            this.trace(ganttDiagramT4ZO3ILLInput179);
          else {
            var ganttDiagramT4ZO3ILLBinding427 = Error(
              ganttDiagramT4ZO3ILLInput179,
            );
            throw (
              (ganttDiagramT4ZO3ILLBinding427.hash =
                ganttDiagramT4ZO3ILLInput180),
              ganttDiagramT4ZO3ILLBinding427
            );
          }
        }, "parseError"),
        parse: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLInput16) {
          var ganttDiagramT4ZO3ILLBinding159 = this,
            ganttDiagramT4ZO3ILLBinding160 = [0],
            ganttDiagramT4ZO3ILLBinding161 = [],
            ganttDiagramT4ZO3ILLBinding162 = [null],
            ganttDiagramT4ZO3ILLBinding163 = [],
            ganttDiagramT4ZO3ILLBinding164 = this.table,
            ganttDiagramT4ZO3ILLBinding165 = "",
            ganttDiagramT4ZO3ILLBinding166 = 0,
            ganttDiagramT4ZO3ILLBinding167 = 0,
            ganttDiagramT4ZO3ILLBinding168 = 0,
            ganttDiagramT4ZO3ILLBinding171 =
              ganttDiagramT4ZO3ILLBinding163.slice.call(arguments, 1),
            ganttDiagramT4ZO3ILLBinding172 = Object.create(this.lexer),
            ganttDiagramT4ZO3ILLBinding173 = {
              yy: {},
            };
          for (var ganttDiagramT4ZO3ILLBinding174 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              ganttDiagramT4ZO3ILLBinding174,
            ) &&
              (ganttDiagramT4ZO3ILLBinding173.yy[
                ganttDiagramT4ZO3ILLBinding174
              ] = this.yy[ganttDiagramT4ZO3ILLBinding174]);
          ganttDiagramT4ZO3ILLBinding172.setInput(
            ganttDiagramT4ZO3ILLInput16,
            ganttDiagramT4ZO3ILLBinding173.yy,
          );
          ganttDiagramT4ZO3ILLBinding173.yy.lexer =
            ganttDiagramT4ZO3ILLBinding172;
          ganttDiagramT4ZO3ILLBinding173.yy.parser = this;
          ganttDiagramT4ZO3ILLBinding172.yylloc === undefined &&
            (ganttDiagramT4ZO3ILLBinding172.yylloc = {});
          var ganttDiagramT4ZO3ILLBinding175 =
            ganttDiagramT4ZO3ILLBinding172.yylloc;
          ganttDiagramT4ZO3ILLBinding163.push(ganttDiagramT4ZO3ILLBinding175);
          var ganttDiagramT4ZO3ILLBinding176 =
            ganttDiagramT4ZO3ILLBinding172.options &&
            ganttDiagramT4ZO3ILLBinding172.options.ranges;
          typeof ganttDiagramT4ZO3ILLBinding173.yy.parseError == "function"
            ? (this.parseError = ganttDiagramT4ZO3ILLBinding173.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function ganttDiagramT4ZO3ILLHelper14(ganttDiagramT4ZO3ILLInput201) {
            ganttDiagramT4ZO3ILLBinding160.length -=
              2 * ganttDiagramT4ZO3ILLInput201;
            ganttDiagramT4ZO3ILLBinding162.length -=
              ganttDiagramT4ZO3ILLInput201;
            ganttDiagramT4ZO3ILLBinding163.length -=
              ganttDiagramT4ZO3ILLInput201;
          }
          chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper14, "popStack");
          function ganttDiagramT4ZO3ILLHelper15() {
            var ganttDiagramT4ZO3ILLBinding399 =
              ganttDiagramT4ZO3ILLBinding161.pop() ||
              ganttDiagramT4ZO3ILLBinding172.lex() ||
              1;
            return (
              typeof ganttDiagramT4ZO3ILLBinding399 != "number" &&
                (ganttDiagramT4ZO3ILLBinding399 instanceof Array &&
                  ((ganttDiagramT4ZO3ILLBinding161 =
                    ganttDiagramT4ZO3ILLBinding399),
                  (ganttDiagramT4ZO3ILLBinding399 =
                    ganttDiagramT4ZO3ILLBinding161.pop())),
                (ganttDiagramT4ZO3ILLBinding399 =
                  ganttDiagramT4ZO3ILLBinding159.symbols_[
                    ganttDiagramT4ZO3ILLBinding399
                  ] || ganttDiagramT4ZO3ILLBinding399)),
              ganttDiagramT4ZO3ILLBinding399
            );
          }
          chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper15, "lex");
          for (
            var ganttDiagramT4ZO3ILLBinding177,
              ganttDiagramT4ZO3ILLBinding178,
              ganttDiagramT4ZO3ILLBinding179,
              ganttDiagramT4ZO3ILLBinding180,
              ganttDiagramT4ZO3ILLBinding181,
              ganttDiagramT4ZO3ILLBinding182 = {},
              ganttDiagramT4ZO3ILLBinding183,
              ganttDiagramT4ZO3ILLBinding184,
              ganttDiagramT4ZO3ILLBinding185,
              ganttDiagramT4ZO3ILLBinding186;
            ;
          ) {
            if (
              ((ganttDiagramT4ZO3ILLBinding179 =
                ganttDiagramT4ZO3ILLBinding160[
                  ganttDiagramT4ZO3ILLBinding160.length - 1
                ]),
              this.defaultActions[ganttDiagramT4ZO3ILLBinding179]
                ? (ganttDiagramT4ZO3ILLBinding180 =
                    this.defaultActions[ganttDiagramT4ZO3ILLBinding179])
                : ((ganttDiagramT4ZO3ILLBinding177 ??=
                    ganttDiagramT4ZO3ILLHelper15()),
                  (ganttDiagramT4ZO3ILLBinding180 =
                    ganttDiagramT4ZO3ILLBinding164[
                      ganttDiagramT4ZO3ILLBinding179
                    ] &&
                    ganttDiagramT4ZO3ILLBinding164[
                      ganttDiagramT4ZO3ILLBinding179
                    ][ganttDiagramT4ZO3ILLBinding177])),
              ganttDiagramT4ZO3ILLBinding180 === undefined ||
                !ganttDiagramT4ZO3ILLBinding180.length ||
                !ganttDiagramT4ZO3ILLBinding180[0])
            ) {
              var ganttDiagramT4ZO3ILLBinding187 = "";
              for (ganttDiagramT4ZO3ILLBinding183 in ((ganttDiagramT4ZO3ILLBinding186 =
                []),
              ganttDiagramT4ZO3ILLBinding164[ganttDiagramT4ZO3ILLBinding179]))
                this.terminals_[ganttDiagramT4ZO3ILLBinding183] &&
                  ganttDiagramT4ZO3ILLBinding183 > 2 &&
                  ganttDiagramT4ZO3ILLBinding186.push(
                    "'" + this.terminals_[ganttDiagramT4ZO3ILLBinding183] + "'",
                  );
              ganttDiagramT4ZO3ILLBinding187 =
                ganttDiagramT4ZO3ILLBinding172.showPosition
                  ? "Parse error on line " +
                    (ganttDiagramT4ZO3ILLBinding166 + 1) +
                    ":\n" +
                    ganttDiagramT4ZO3ILLBinding172.showPosition() +
                    "\nExpecting " +
                    ganttDiagramT4ZO3ILLBinding186.join(", ") +
                    ", got '" +
                    (this.terminals_[ganttDiagramT4ZO3ILLBinding177] ||
                      ganttDiagramT4ZO3ILLBinding177) +
                    "'"
                  : "Parse error on line " +
                    (ganttDiagramT4ZO3ILLBinding166 + 1) +
                    ": Unexpected " +
                    (ganttDiagramT4ZO3ILLBinding177 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[ganttDiagramT4ZO3ILLBinding177] ||
                          ganttDiagramT4ZO3ILLBinding177) +
                        "'");
              this.parseError(ganttDiagramT4ZO3ILLBinding187, {
                text: ganttDiagramT4ZO3ILLBinding172.match,
                token:
                  this.terminals_[ganttDiagramT4ZO3ILLBinding177] ||
                  ganttDiagramT4ZO3ILLBinding177,
                line: ganttDiagramT4ZO3ILLBinding172.yylineno,
                loc: ganttDiagramT4ZO3ILLBinding175,
                expected: ganttDiagramT4ZO3ILLBinding186,
              });
            }
            if (
              ganttDiagramT4ZO3ILLBinding180[0] instanceof Array &&
              ganttDiagramT4ZO3ILLBinding180.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  ganttDiagramT4ZO3ILLBinding179 +
                  ", token: " +
                  ganttDiagramT4ZO3ILLBinding177,
              );
            switch (ganttDiagramT4ZO3ILLBinding180[0]) {
              case 1:
                ganttDiagramT4ZO3ILLBinding160.push(
                  ganttDiagramT4ZO3ILLBinding177,
                );
                ganttDiagramT4ZO3ILLBinding162.push(
                  ganttDiagramT4ZO3ILLBinding172.yytext,
                );
                ganttDiagramT4ZO3ILLBinding163.push(
                  ganttDiagramT4ZO3ILLBinding172.yylloc,
                );
                ganttDiagramT4ZO3ILLBinding160.push(
                  ganttDiagramT4ZO3ILLBinding180[1],
                );
                ganttDiagramT4ZO3ILLBinding177 = null;
                ganttDiagramT4ZO3ILLBinding178
                  ? ((ganttDiagramT4ZO3ILLBinding177 =
                      ganttDiagramT4ZO3ILLBinding178),
                    (ganttDiagramT4ZO3ILLBinding178 = null))
                  : ((ganttDiagramT4ZO3ILLBinding167 =
                      ganttDiagramT4ZO3ILLBinding172.yyleng),
                    (ganttDiagramT4ZO3ILLBinding165 =
                      ganttDiagramT4ZO3ILLBinding172.yytext),
                    (ganttDiagramT4ZO3ILLBinding166 =
                      ganttDiagramT4ZO3ILLBinding172.yylineno),
                    (ganttDiagramT4ZO3ILLBinding175 =
                      ganttDiagramT4ZO3ILLBinding172.yylloc),
                    ganttDiagramT4ZO3ILLBinding168 > 0 &&
                      ganttDiagramT4ZO3ILLBinding168--);
                break;
              case 2:
                if (
                  ((ganttDiagramT4ZO3ILLBinding184 =
                    this.productions_[ganttDiagramT4ZO3ILLBinding180[1]][1]),
                  (ganttDiagramT4ZO3ILLBinding182.$ =
                    ganttDiagramT4ZO3ILLBinding162[
                      ganttDiagramT4ZO3ILLBinding162.length -
                        ganttDiagramT4ZO3ILLBinding184
                    ]),
                  (ganttDiagramT4ZO3ILLBinding182._$ = {
                    first_line:
                      ganttDiagramT4ZO3ILLBinding163[
                        ganttDiagramT4ZO3ILLBinding163.length -
                          (ganttDiagramT4ZO3ILLBinding184 || 1)
                      ].first_line,
                    last_line:
                      ganttDiagramT4ZO3ILLBinding163[
                        ganttDiagramT4ZO3ILLBinding163.length - 1
                      ].last_line,
                    first_column:
                      ganttDiagramT4ZO3ILLBinding163[
                        ganttDiagramT4ZO3ILLBinding163.length -
                          (ganttDiagramT4ZO3ILLBinding184 || 1)
                      ].first_column,
                    last_column:
                      ganttDiagramT4ZO3ILLBinding163[
                        ganttDiagramT4ZO3ILLBinding163.length - 1
                      ].last_column,
                  }),
                  ganttDiagramT4ZO3ILLBinding176 &&
                    (ganttDiagramT4ZO3ILLBinding182._$.range = [
                      ganttDiagramT4ZO3ILLBinding163[
                        ganttDiagramT4ZO3ILLBinding163.length -
                          (ganttDiagramT4ZO3ILLBinding184 || 1)
                      ].range[0],
                      ganttDiagramT4ZO3ILLBinding163[
                        ganttDiagramT4ZO3ILLBinding163.length - 1
                      ].range[1],
                    ]),
                  (ganttDiagramT4ZO3ILLBinding181 = this.performAction.apply(
                    ganttDiagramT4ZO3ILLBinding182,
                    [
                      ganttDiagramT4ZO3ILLBinding165,
                      ganttDiagramT4ZO3ILLBinding167,
                      ganttDiagramT4ZO3ILLBinding166,
                      ganttDiagramT4ZO3ILLBinding173.yy,
                      ganttDiagramT4ZO3ILLBinding180[1],
                      ganttDiagramT4ZO3ILLBinding162,
                      ganttDiagramT4ZO3ILLBinding163,
                    ].concat(ganttDiagramT4ZO3ILLBinding171),
                  )),
                  ganttDiagramT4ZO3ILLBinding181 !== undefined)
                )
                  return ganttDiagramT4ZO3ILLBinding181;
                ganttDiagramT4ZO3ILLBinding184 &&
                  ((ganttDiagramT4ZO3ILLBinding160 =
                    ganttDiagramT4ZO3ILLBinding160.slice(
                      0,
                      -1 * ganttDiagramT4ZO3ILLBinding184 * 2,
                    )),
                  (ganttDiagramT4ZO3ILLBinding162 =
                    ganttDiagramT4ZO3ILLBinding162.slice(
                      0,
                      -1 * ganttDiagramT4ZO3ILLBinding184,
                    )),
                  (ganttDiagramT4ZO3ILLBinding163 =
                    ganttDiagramT4ZO3ILLBinding163.slice(
                      0,
                      -1 * ganttDiagramT4ZO3ILLBinding184,
                    )));
                ganttDiagramT4ZO3ILLBinding160.push(
                  this.productions_[ganttDiagramT4ZO3ILLBinding180[1]][0],
                );
                ganttDiagramT4ZO3ILLBinding162.push(
                  ganttDiagramT4ZO3ILLBinding182.$,
                );
                ganttDiagramT4ZO3ILLBinding163.push(
                  ganttDiagramT4ZO3ILLBinding182._$,
                );
                ganttDiagramT4ZO3ILLBinding185 =
                  ganttDiagramT4ZO3ILLBinding164[
                    ganttDiagramT4ZO3ILLBinding160[
                      ganttDiagramT4ZO3ILLBinding160.length - 2
                    ]
                  ][
                    ganttDiagramT4ZO3ILLBinding160[
                      ganttDiagramT4ZO3ILLBinding160.length - 1
                    ]
                  ];
                ganttDiagramT4ZO3ILLBinding160.push(
                  ganttDiagramT4ZO3ILLBinding185,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    ganttDiagramT4ZO3ILLBinding109.lexer = (function () {
      return {
        EOF: 1,
        parseError: chunkAGHRB4JFN(function (
          ganttDiagramT4ZO3ILLInput192,
          ganttDiagramT4ZO3ILLInput193,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              ganttDiagramT4ZO3ILLInput192,
              ganttDiagramT4ZO3ILLInput193,
            );
          else throw Error(ganttDiagramT4ZO3ILLInput192);
        }, "parseError"),
        setInput: chunkAGHRB4JFN(function (
          ganttDiagramT4ZO3ILLInput86,
          ganttDiagramT4ZO3ILLInput87,
        ) {
          return (
            (this.yy = ganttDiagramT4ZO3ILLInput87 || this.yy || {}),
            (this._input = ganttDiagramT4ZO3ILLInput86),
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
        input: chunkAGHRB4JFN(function () {
          var ganttDiagramT4ZO3ILLBinding353 = this._input[0];
          return (
            (this.yytext += ganttDiagramT4ZO3ILLBinding353),
            this.yyleng++,
            this.offset++,
            (this.match += ganttDiagramT4ZO3ILLBinding353),
            (this.matched += ganttDiagramT4ZO3ILLBinding353),
            ganttDiagramT4ZO3ILLBinding353.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            ganttDiagramT4ZO3ILLBinding353
          );
        }, "input"),
        unput: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLInput69) {
          var ganttDiagramT4ZO3ILLBinding280 =
              ganttDiagramT4ZO3ILLInput69.length,
            ganttDiagramT4ZO3ILLBinding281 =
              ganttDiagramT4ZO3ILLInput69.split(/(?:\r\n?|\n)/g);
          this._input = ganttDiagramT4ZO3ILLInput69 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - ganttDiagramT4ZO3ILLBinding280,
          );
          this.offset -= ganttDiagramT4ZO3ILLBinding280;
          var ganttDiagramT4ZO3ILLBinding282 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          ganttDiagramT4ZO3ILLBinding281.length - 1 &&
            (this.yylineno -= ganttDiagramT4ZO3ILLBinding281.length - 1);
          var ganttDiagramT4ZO3ILLBinding283 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: ganttDiagramT4ZO3ILLBinding281
                ? (ganttDiagramT4ZO3ILLBinding281.length ===
                  ganttDiagramT4ZO3ILLBinding282.length
                    ? this.yylloc.first_column
                    : 0) +
                  ganttDiagramT4ZO3ILLBinding282[
                    ganttDiagramT4ZO3ILLBinding282.length -
                      ganttDiagramT4ZO3ILLBinding281.length
                  ].length -
                  ganttDiagramT4ZO3ILLBinding281[0].length
                : this.yylloc.first_column - ganttDiagramT4ZO3ILLBinding280,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                ganttDiagramT4ZO3ILLBinding283[0],
                ganttDiagramT4ZO3ILLBinding283[0] +
                  this.yyleng -
                  ganttDiagramT4ZO3ILLBinding280,
              ]),
            (this.yyleng = this.yytext.length),
            this
          );
        }, "unput"),
        more: chunkAGHRB4JFN(function () {
          return ((this._more = true), this);
        }, "more"),
        reject: chunkAGHRB4JFN(function () {
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
        less: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLInput228) {
          this.unput(this.match.slice(ganttDiagramT4ZO3ILLInput228));
        }, "less"),
        pastInput: chunkAGHRB4JFN(function () {
          var ganttDiagramT4ZO3ILLBinding400 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (ganttDiagramT4ZO3ILLBinding400.length > 20 ? "..." : "") +
            ganttDiagramT4ZO3ILLBinding400.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: chunkAGHRB4JFN(function () {
          var ganttDiagramT4ZO3ILLBinding392 = this.match;
          return (
            ganttDiagramT4ZO3ILLBinding392.length < 20 &&
              (ganttDiagramT4ZO3ILLBinding392 += this._input.substr(
                0,
                20 - ganttDiagramT4ZO3ILLBinding392.length,
              )),
            (
              ganttDiagramT4ZO3ILLBinding392.substr(0, 20) +
              (ganttDiagramT4ZO3ILLBinding392.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: chunkAGHRB4JFN(function () {
          var ganttDiagramT4ZO3ILLBinding405 = this.pastInput(),
            ganttDiagramT4ZO3ILLBinding406 = Array(
              ganttDiagramT4ZO3ILLBinding405.length + 1,
            ).join("-");
          return (
            ganttDiagramT4ZO3ILLBinding405 +
            this.upcomingInput() +
            "\n" +
            ganttDiagramT4ZO3ILLBinding406 +
            "^"
          );
        }, "showPosition"),
        test_match: chunkAGHRB4JFN(function (
          ganttDiagramT4ZO3ILLInput36,
          ganttDiagramT4ZO3ILLInput37,
        ) {
          var ganttDiagramT4ZO3ILLBinding196,
            ganttDiagramT4ZO3ILLBinding197,
            ganttDiagramT4ZO3ILLBinding198;
          if (
            (this.options.backtrack_lexer &&
              ((ganttDiagramT4ZO3ILLBinding198 = {
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
                (ganttDiagramT4ZO3ILLBinding198.yylloc.range =
                  this.yylloc.range.slice(0))),
            (ganttDiagramT4ZO3ILLBinding197 =
              ganttDiagramT4ZO3ILLInput36[0].match(/(?:\r\n?|\n).*/g)),
            ganttDiagramT4ZO3ILLBinding197 &&
              (this.yylineno += ganttDiagramT4ZO3ILLBinding197.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: ganttDiagramT4ZO3ILLBinding197
                ? ganttDiagramT4ZO3ILLBinding197[
                    ganttDiagramT4ZO3ILLBinding197.length - 1
                  ].length -
                  ganttDiagramT4ZO3ILLBinding197[
                    ganttDiagramT4ZO3ILLBinding197.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  ganttDiagramT4ZO3ILLInput36[0].length,
            }),
            (this.yytext += ganttDiagramT4ZO3ILLInput36[0]),
            (this.match += ganttDiagramT4ZO3ILLInput36[0]),
            (this.matches = ganttDiagramT4ZO3ILLInput36),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              ganttDiagramT4ZO3ILLInput36[0].length,
            )),
            (this.matched += ganttDiagramT4ZO3ILLInput36[0]),
            (ganttDiagramT4ZO3ILLBinding196 = this.performAction.call(
              this,
              this.yy,
              this,
              ganttDiagramT4ZO3ILLInput37,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            ganttDiagramT4ZO3ILLBinding196)
          )
            return ganttDiagramT4ZO3ILLBinding196;
          if (this._backtrack) {
            for (var ganttDiagramT4ZO3ILLBinding199 in ganttDiagramT4ZO3ILLBinding198)
              this[ganttDiagramT4ZO3ILLBinding199] =
                ganttDiagramT4ZO3ILLBinding198[ganttDiagramT4ZO3ILLBinding199];
            return false;
          }
          return false;
        }, "test_match"),
        next: chunkAGHRB4JFN(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var ganttDiagramT4ZO3ILLBinding274,
            ganttDiagramT4ZO3ILLBinding275,
            ganttDiagramT4ZO3ILLBinding276,
            ganttDiagramT4ZO3ILLBinding277;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var ganttDiagramT4ZO3ILLBinding278 = this._currentRules(),
              ganttDiagramT4ZO3ILLBinding279 = 0;
            ganttDiagramT4ZO3ILLBinding279 <
            ganttDiagramT4ZO3ILLBinding278.length;
            ganttDiagramT4ZO3ILLBinding279++
          )
            if (
              ((ganttDiagramT4ZO3ILLBinding276 = this._input.match(
                this.rules[
                  ganttDiagramT4ZO3ILLBinding278[ganttDiagramT4ZO3ILLBinding279]
                ],
              )),
              ganttDiagramT4ZO3ILLBinding276 &&
                (!ganttDiagramT4ZO3ILLBinding275 ||
                  ganttDiagramT4ZO3ILLBinding276[0].length >
                    ganttDiagramT4ZO3ILLBinding275[0].length))
            ) {
              if (
                ((ganttDiagramT4ZO3ILLBinding275 =
                  ganttDiagramT4ZO3ILLBinding276),
                (ganttDiagramT4ZO3ILLBinding277 =
                  ganttDiagramT4ZO3ILLBinding279),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((ganttDiagramT4ZO3ILLBinding274 = this.test_match(
                    ganttDiagramT4ZO3ILLBinding276,
                    ganttDiagramT4ZO3ILLBinding278[
                      ganttDiagramT4ZO3ILLBinding279
                    ],
                  )),
                  ganttDiagramT4ZO3ILLBinding274 !== false)
                )
                  return ganttDiagramT4ZO3ILLBinding274;
                if (this._backtrack) {
                  ganttDiagramT4ZO3ILLBinding275 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return ganttDiagramT4ZO3ILLBinding275
            ? ((ganttDiagramT4ZO3ILLBinding274 = this.test_match(
                ganttDiagramT4ZO3ILLBinding275,
                ganttDiagramT4ZO3ILLBinding278[ganttDiagramT4ZO3ILLBinding277],
              )),
              ganttDiagramT4ZO3ILLBinding274 === false
                ? false
                : ganttDiagramT4ZO3ILLBinding274)
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
        lex: chunkAGHRB4JFN(function () {
          return this.next() || this.lex();
        }, "lex"),
        begin: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLInput235) {
          this.conditionStack.push(ganttDiagramT4ZO3ILLInput235);
        }, "begin"),
        popState: chunkAGHRB4JFN(function () {
          return this.conditionStack.length - 1 > 0
            ? this.conditionStack.pop()
            : this.conditionStack[0];
        }, "popState"),
        _currentRules: chunkAGHRB4JFN(function () {
          return this.conditionStack.length &&
            this.conditionStack[this.conditionStack.length - 1]
            ? this.conditions[
                this.conditionStack[this.conditionStack.length - 1]
              ].rules
            : this.conditions.INITIAL.rules;
        }, "_currentRules"),
        topState: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLInput176) {
          return (
            (ganttDiagramT4ZO3ILLInput176 =
              this.conditionStack.length -
              1 -
              Math.abs(ganttDiagramT4ZO3ILLInput176 || 0)),
            ganttDiagramT4ZO3ILLInput176 >= 0
              ? this.conditionStack[ganttDiagramT4ZO3ILLInput176]
              : "INITIAL"
          );
        }, "topState"),
        pushState: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLInput251) {
          this.begin(ganttDiagramT4ZO3ILLInput251);
        }, "pushState"),
        stateStackSize: chunkAGHRB4JFN(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: chunkAGHRB4JFN(function (
          ganttDiagramT4ZO3ILLInput29,
          ganttDiagramT4ZO3ILLInput30,
          ganttDiagramT4ZO3ILLInput31,
          ganttDiagramT4ZO3ILLInput32,
        ) {
          switch (ganttDiagramT4ZO3ILLInput31) {
            case 0:
              return (this.begin("open_directive"), "open_directive");
            case 1:
              return (this.begin("acc_title"), 31);
            case 2:
              return (this.popState(), "acc_title_value");
            case 3:
              return (this.begin("acc_descr"), 33);
            case 4:
              return (this.popState(), "acc_descr_value");
            case 5:
              this.begin("acc_descr_multiline");
              break;
            case 6:
              this.popState();
              break;
            case 7:
              return "acc_descr_multiline_value";
            case 8:
              break;
            case 9:
              break;
            case 10:
              break;
            case 11:
              return 10;
            case 12:
              break;
            case 13:
              break;
            case 14:
              this.begin("href");
              break;
            case 15:
              this.popState();
              break;
            case 16:
              return 43;
            case 17:
              this.begin("callbackname");
              break;
            case 18:
              this.popState();
              break;
            case 19:
              this.popState();
              this.begin("callbackargs");
              break;
            case 20:
              return 41;
            case 21:
              this.popState();
              break;
            case 22:
              return 42;
            case 23:
              this.begin("click");
              break;
            case 24:
              this.popState();
              break;
            case 25:
              return 40;
            case 26:
              return 4;
            case 27:
              return 22;
            case 28:
              return 23;
            case 29:
              return 24;
            case 30:
              return 25;
            case 31:
              return 26;
            case 32:
              return 28;
            case 33:
              return 27;
            case 34:
              return 29;
            case 35:
              return 12;
            case 36:
              return 13;
            case 37:
              return 14;
            case 38:
              return 15;
            case 39:
              return 16;
            case 40:
              return 17;
            case 41:
              return 18;
            case 42:
              return 20;
            case 43:
              return 21;
            case 44:
              return "date";
            case 45:
              return 30;
            case 46:
              return "accDescription";
            case 47:
              return 36;
            case 48:
              return 38;
            case 49:
              return 39;
            case 50:
              return ":";
            case 51:
              return 6;
            case 52:
              return "INVALID";
          }
        }, "anonymous"),
        rules: [
          /^(?:%%\{)/i,
          /^(?:accTitle\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*\{\s*)/i,
          /^(?:[\}])/i,
          /^(?:[^\}]*)/i,
          /^(?:%%(?!\{)*[^\n]*)/i,
          /^(?:[^\}]%%*[^\n]*)/i,
          /^(?:%%*[^\n]*[\n]*)/i,
          /^(?:[\n]+)/i,
          /^(?:\s+)/i,
          /^(?:%[^\n]*)/i,
          /^(?:href[\s]+["])/i,
          /^(?:["])/i,
          /^(?:[^"]*)/i,
          /^(?:call[\s]+)/i,
          /^(?:\([\s]*\))/i,
          /^(?:\()/i,
          /^(?:[^(]*)/i,
          /^(?:\))/i,
          /^(?:[^)]*)/i,
          /^(?:click[\s]+)/i,
          /^(?:[\s\n])/i,
          /^(?:[^\s\n]*)/i,
          /^(?:gantt\b)/i,
          /^(?:dateFormat\s[^#\n;]+)/i,
          /^(?:inclusiveEndDates\b)/i,
          /^(?:topAxis\b)/i,
          /^(?:axisFormat\s[^#\n;]+)/i,
          /^(?:tickInterval\s[^#\n;]+)/i,
          /^(?:includes\s[^#\n;]+)/i,
          /^(?:excludes\s[^#\n;]+)/i,
          /^(?:todayMarker\s[^\n;]+)/i,
          /^(?:weekday\s+monday\b)/i,
          /^(?:weekday\s+tuesday\b)/i,
          /^(?:weekday\s+wednesday\b)/i,
          /^(?:weekday\s+thursday\b)/i,
          /^(?:weekday\s+friday\b)/i,
          /^(?:weekday\s+saturday\b)/i,
          /^(?:weekday\s+sunday\b)/i,
          /^(?:weekend\s+friday\b)/i,
          /^(?:weekend\s+saturday\b)/i,
          /^(?:\d\d\d\d-\d\d-\d\d\b)/i,
          /^(?:title\s[^\n]+)/i,
          /^(?:accDescription\s[^#\n;]+)/i,
          /^(?:section\s[^\n]+)/i,
          /^(?:[^:\n]+)/i,
          /^(?::[^#\n;]+)/i,
          /^(?::)/i,
          /^(?:$)/i,
          /^(?:.)/i,
        ],
        conditions: {
          acc_descr_multiline: {
            rules: [6, 7],
            inclusive: false,
          },
          acc_descr: {
            rules: [4],
            inclusive: false,
          },
          acc_title: {
            rules: [2],
            inclusive: false,
          },
          callbackargs: {
            rules: [21, 22],
            inclusive: false,
          },
          callbackname: {
            rules: [18, 19, 20],
            inclusive: false,
          },
          href: {
            rules: [15, 16],
            inclusive: false,
          },
          click: {
            rules: [24, 25],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 17, 23, 26, 27, 28, 29, 30,
              31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
              47, 48, 49, 50, 51, 52,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function ganttDiagramT4ZO3ILLHelper2() {
      this.yy = {};
    }
    return (
      chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper2, "Parser"),
      (ganttDiagramT4ZO3ILLHelper2.prototype = ganttDiagramT4ZO3ILLBinding109),
      (ganttDiagramT4ZO3ILLBinding109.Parser = ganttDiagramT4ZO3ILLHelper2),
      new ganttDiagramT4ZO3ILLHelper2()
    );
  })();
  be.parser = be;
  ganttDiagramT4ZO3ILLBinding11 = be;
  ganttDiagramT4ZO3ILLBinding6.default.extend(
    ganttDiagramT4ZO3ILLBinding7.default,
  );
  ganttDiagramT4ZO3ILLBinding6.default.extend(_e.default);
  ganttDiagramT4ZO3ILLBinding6.default.extend(
    ganttDiagramT4ZO3ILLBinding8.default,
  );
  ganttDiagramT4ZO3ILLBinding12 = {
    friday: 5,
    saturday: 6,
  };
  ganttDiagramT4ZO3ILLBinding13 = "";
  ganttDiagramT4ZO3ILLBinding14 = "";
  ganttDiagramT4ZO3ILLBinding15 = undefined;
  ganttDiagramT4ZO3ILLBinding16 = "";
  ganttDiagramT4ZO3ILLBinding17 = [];
  ganttDiagramT4ZO3ILLBinding18 = [];
  ganttDiagramT4ZO3ILLBinding19 = new Map();
  ganttDiagramT4ZO3ILLBinding20 = [];
  ganttDiagramT4ZO3ILLBinding21 = [];
  ganttDiagramT4ZO3ILLBinding22 = "";
  ganttDiagramT4ZO3ILLBinding23 = "";
  ganttDiagramT4ZO3ILLBinding24 = [
    "active",
    "done",
    "crit",
    "milestone",
    "vert",
  ];
  ganttDiagramT4ZO3ILLBinding25 = [];
  ganttDiagramT4ZO3ILLBinding26 = "";
  ganttDiagramT4ZO3ILLBinding27 = false;
  ganttDiagramT4ZO3ILLBinding28 = false;
  ganttDiagramT4ZO3ILLBinding29 = "sunday";
  ganttDiagramT4ZO3ILLBinding30 = "saturday";
  ganttDiagramT4ZO3ILLBinding31 = 0;
  ganttDiagramT4ZO3ILLBinding32 = chunkAGHRB4JFN(function () {
    ganttDiagramT4ZO3ILLBinding20 = [];
    ganttDiagramT4ZO3ILLBinding21 = [];
    ganttDiagramT4ZO3ILLBinding22 = "";
    ganttDiagramT4ZO3ILLBinding25 = [];
    ganttDiagramT4ZO3ILLBinding63 = 0;
    ganttDiagramT4ZO3ILLBinding67 = undefined;
    ganttDiagramT4ZO3ILLBinding68 = undefined;
    ganttDiagramT4ZO3ILLBinding69 = [];
    ganttDiagramT4ZO3ILLBinding13 = "";
    ganttDiagramT4ZO3ILLBinding14 = "";
    ganttDiagramT4ZO3ILLBinding23 = "";
    ganttDiagramT4ZO3ILLBinding15 = undefined;
    ganttDiagramT4ZO3ILLBinding16 = "";
    ganttDiagramT4ZO3ILLBinding17 = [];
    ganttDiagramT4ZO3ILLBinding18 = [];
    ganttDiagramT4ZO3ILLBinding27 = false;
    ganttDiagramT4ZO3ILLBinding28 = false;
    ganttDiagramT4ZO3ILLBinding31 = 0;
    ganttDiagramT4ZO3ILLBinding19 = new Map();
    ganttDiagramT4ZO3ILLBinding26 = "";
    _chunkICPOFSXXA();
    ganttDiagramT4ZO3ILLBinding29 = "sunday";
    ganttDiagramT4ZO3ILLBinding30 = "saturday";
  }, "clear");
  ganttDiagramT4ZO3ILLBinding33 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput261,
  ) {
    ganttDiagramT4ZO3ILLBinding26 = ganttDiagramT4ZO3ILLInput261;
  }, "setDiagramId");
  ganttDiagramT4ZO3ILLBinding34 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput262,
  ) {
    ganttDiagramT4ZO3ILLBinding14 = ganttDiagramT4ZO3ILLInput262;
  }, "setAxisFormat");
  ganttDiagramT4ZO3ILLBinding35 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLBinding14;
  }, "getAxisFormat");
  ganttDiagramT4ZO3ILLBinding36 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput263,
  ) {
    ganttDiagramT4ZO3ILLBinding15 = ganttDiagramT4ZO3ILLInput263;
  }, "setTickInterval");
  ganttDiagramT4ZO3ILLBinding37 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLBinding15;
  }, "getTickInterval");
  ganttDiagramT4ZO3ILLBinding38 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput264,
  ) {
    ganttDiagramT4ZO3ILLBinding16 = ganttDiagramT4ZO3ILLInput264;
  }, "setTodayMarker");
  ganttDiagramT4ZO3ILLBinding39 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLBinding16;
  }, "getTodayMarker");
  ganttDiagramT4ZO3ILLBinding40 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput265,
  ) {
    ganttDiagramT4ZO3ILLBinding13 = ganttDiagramT4ZO3ILLInput265;
  }, "setDateFormat");
  ganttDiagramT4ZO3ILLBinding41 = chunkAGHRB4JFN(function () {
    ganttDiagramT4ZO3ILLBinding27 = true;
  }, "enableInclusiveEndDates");
  ganttDiagramT4ZO3ILLBinding42 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLBinding27;
  }, "endDatesAreInclusive");
  ganttDiagramT4ZO3ILLBinding43 = chunkAGHRB4JFN(function () {
    ganttDiagramT4ZO3ILLBinding28 = true;
  }, "enableTopAxis");
  ganttDiagramT4ZO3ILLBinding44 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLBinding28;
  }, "topAxisEnabled");
  ganttDiagramT4ZO3ILLBinding45 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput259,
  ) {
    ganttDiagramT4ZO3ILLBinding23 = ganttDiagramT4ZO3ILLInput259;
  }, "setDisplayMode");
  ganttDiagramT4ZO3ILLBinding46 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLBinding23;
  }, "getDisplayMode");
  ganttDiagramT4ZO3ILLBinding47 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLBinding13;
  }, "getDateFormat");
  ganttDiagramT4ZO3ILLBinding48 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput241,
  ) {
    ganttDiagramT4ZO3ILLBinding17 = ganttDiagramT4ZO3ILLInput241
      .toLowerCase()
      .split(/[\s,]+/);
  }, "setIncludes");
  ganttDiagramT4ZO3ILLBinding49 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLBinding17;
  }, "getIncludes");
  ganttDiagramT4ZO3ILLBinding50 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput242,
  ) {
    ganttDiagramT4ZO3ILLBinding18 = ganttDiagramT4ZO3ILLInput242
      .toLowerCase()
      .split(/[\s,]+/);
  }, "setExcludes");
  ganttDiagramT4ZO3ILLBinding51 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLBinding18;
  }, "getExcludes");
  ganttDiagramT4ZO3ILLBinding52 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLBinding19;
  }, "getLinks");
  ganttDiagramT4ZO3ILLBinding53 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput257,
  ) {
    ganttDiagramT4ZO3ILLBinding22 = ganttDiagramT4ZO3ILLInput257;
    ganttDiagramT4ZO3ILLBinding20.push(ganttDiagramT4ZO3ILLInput257);
  }, "addSection");
  ganttDiagramT4ZO3ILLBinding54 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLBinding20;
  }, "getSections");
  ganttDiagramT4ZO3ILLBinding55 = chunkAGHRB4JFN(function () {
    let ganttDiagramT4ZO3ILLBinding445 = ganttDiagramT4ZO3ILLBinding74(),
      ganttDiagramT4ZO3ILLBinding446 = 0;
    for (
      ;
      !ganttDiagramT4ZO3ILLBinding445 && ganttDiagramT4ZO3ILLBinding446 < 10;
    ) {
      ganttDiagramT4ZO3ILLBinding445 = ganttDiagramT4ZO3ILLBinding74();
      ganttDiagramT4ZO3ILLBinding446++;
    }
    return (
      (ganttDiagramT4ZO3ILLBinding21 = ganttDiagramT4ZO3ILLBinding69),
      ganttDiagramT4ZO3ILLBinding21
    );
  }, "getTasks");
  $e = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput121,
    ganttDiagramT4ZO3ILLInput122,
    ganttDiagramT4ZO3ILLInput123,
    ganttDiagramT4ZO3ILLInput124,
  ) {
    let ganttDiagramT4ZO3ILLBinding379 = ganttDiagramT4ZO3ILLInput121.format(
        ganttDiagramT4ZO3ILLInput122.trim(),
      ),
      ganttDiagramT4ZO3ILLBinding380 =
        ganttDiagramT4ZO3ILLInput121.format("YYYY-MM-DD");
    return ganttDiagramT4ZO3ILLInput124.includes(
      ganttDiagramT4ZO3ILLBinding379,
    ) || ganttDiagramT4ZO3ILLInput124.includes(ganttDiagramT4ZO3ILLBinding380)
      ? false
      : (ganttDiagramT4ZO3ILLInput123.includes("weekends") &&
            (ganttDiagramT4ZO3ILLInput121.isoWeekday() ===
              ganttDiagramT4ZO3ILLBinding12[ganttDiagramT4ZO3ILLBinding30] ||
              ganttDiagramT4ZO3ILLInput121.isoWeekday() ===
                ganttDiagramT4ZO3ILLBinding12[ganttDiagramT4ZO3ILLBinding30] +
                  1)) ||
          ganttDiagramT4ZO3ILLInput123.includes(
            ganttDiagramT4ZO3ILLInput121.format("dddd").toLowerCase(),
          )
        ? true
        : ganttDiagramT4ZO3ILLInput123.includes(
            ganttDiagramT4ZO3ILLBinding379,
          ) ||
          ganttDiagramT4ZO3ILLInput123.includes(ganttDiagramT4ZO3ILLBinding380);
  }, "isInvalidDate");
  ganttDiagramT4ZO3ILLBinding56 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput260,
  ) {
    ganttDiagramT4ZO3ILLBinding29 = ganttDiagramT4ZO3ILLInput260;
  }, "setWeekday");
  ganttDiagramT4ZO3ILLBinding57 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLBinding29;
  }, "getWeekday");
  ganttDiagramT4ZO3ILLBinding58 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput266,
  ) {
    ganttDiagramT4ZO3ILLBinding30 = ganttDiagramT4ZO3ILLInput266;
  }, "setWeekend");
  ganttDiagramT4ZO3ILLBinding59 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput108,
    ganttDiagramT4ZO3ILLInput109,
    ganttDiagramT4ZO3ILLInput110,
    ganttDiagramT4ZO3ILLInput111,
  ) {
    if (
      !ganttDiagramT4ZO3ILLInput110.length ||
      ganttDiagramT4ZO3ILLInput108.manualEndTime
    )
      return;
    let ganttDiagramT4ZO3ILLBinding366;
    ganttDiagramT4ZO3ILLBinding366 =
      ganttDiagramT4ZO3ILLInput108.startTime instanceof Date
        ? ganttDiagramT4ZO3ILLBinding6.default(
            ganttDiagramT4ZO3ILLInput108.startTime,
          )
        : ganttDiagramT4ZO3ILLBinding6.default(
            ganttDiagramT4ZO3ILLInput108.startTime,
            ganttDiagramT4ZO3ILLInput109,
            true,
          );
    ganttDiagramT4ZO3ILLBinding366 = ganttDiagramT4ZO3ILLBinding366.add(1, "d");
    let ganttDiagramT4ZO3ILLBinding367;
    ganttDiagramT4ZO3ILLBinding367 =
      ganttDiagramT4ZO3ILLInput108.endTime instanceof Date
        ? ganttDiagramT4ZO3ILLBinding6.default(
            ganttDiagramT4ZO3ILLInput108.endTime,
          )
        : ganttDiagramT4ZO3ILLBinding6.default(
            ganttDiagramT4ZO3ILLInput108.endTime,
            ganttDiagramT4ZO3ILLInput109,
            true,
          );
    let [ganttDiagramT4ZO3ILLBinding368, ganttDiagramT4ZO3ILLBinding369] =
      ganttDiagramT4ZO3ILLBinding60(
        ganttDiagramT4ZO3ILLBinding366,
        ganttDiagramT4ZO3ILLBinding367,
        ganttDiagramT4ZO3ILLInput109,
        ganttDiagramT4ZO3ILLInput110,
        ganttDiagramT4ZO3ILLInput111,
      );
    ganttDiagramT4ZO3ILLInput108.endTime =
      ganttDiagramT4ZO3ILLBinding368.toDate();
    ganttDiagramT4ZO3ILLInput108.renderEndTime = ganttDiagramT4ZO3ILLBinding369;
  }, "checkTaskDates");
  ganttDiagramT4ZO3ILLBinding60 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput154,
    ganttDiagramT4ZO3ILLInput155,
    ganttDiagramT4ZO3ILLInput156,
    ganttDiagramT4ZO3ILLInput157,
    ganttDiagramT4ZO3ILLInput158,
  ) {
    let ganttDiagramT4ZO3ILLBinding410 = false,
      ganttDiagramT4ZO3ILLBinding411 = null;
    for (; ganttDiagramT4ZO3ILLInput154 <= ganttDiagramT4ZO3ILLInput155; ) {
      ganttDiagramT4ZO3ILLBinding410 ||
        (ganttDiagramT4ZO3ILLBinding411 =
          ganttDiagramT4ZO3ILLInput155.toDate());
      ganttDiagramT4ZO3ILLBinding410 = $e(
        ganttDiagramT4ZO3ILLInput154,
        ganttDiagramT4ZO3ILLInput156,
        ganttDiagramT4ZO3ILLInput157,
        ganttDiagramT4ZO3ILLInput158,
      );
      ganttDiagramT4ZO3ILLBinding410 &&
        (ganttDiagramT4ZO3ILLInput155 = ganttDiagramT4ZO3ILLInput155.add(
          1,
          "d",
        ));
      ganttDiagramT4ZO3ILLInput154 = ganttDiagramT4ZO3ILLInput154.add(1, "d");
    }
    return [ganttDiagramT4ZO3ILLInput155, ganttDiagramT4ZO3ILLBinding411];
  }, "fixTaskDates");
  at = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput70,
    ganttDiagramT4ZO3ILLInput71,
    ganttDiagramT4ZO3ILLInput72,
  ) {
    if (
      ((ganttDiagramT4ZO3ILLInput72 = ganttDiagramT4ZO3ILLInput72.trim()),
      chunkAGHRB4JFN((ganttDiagramT4ZO3ILLInput212) => {
        let ganttDiagramT4ZO3ILLBinding457 =
          ganttDiagramT4ZO3ILLInput212.trim();
        return (
          ganttDiagramT4ZO3ILLBinding457 === "x" ||
          ganttDiagramT4ZO3ILLBinding457 === "X"
        );
      }, "isTimestampFormat")(ganttDiagramT4ZO3ILLInput71) &&
        /^\d+$/.test(ganttDiagramT4ZO3ILLInput72))
    )
      return new Date(Number(ganttDiagramT4ZO3ILLInput72));
    let ganttDiagramT4ZO3ILLBinding300 = /^after\s+(?<ids>[\d\w- ]+)/.exec(
      ganttDiagramT4ZO3ILLInput72,
    );
    if (ganttDiagramT4ZO3ILLBinding300 !== null) {
      let ganttDiagramT4ZO3ILLBinding395 = null;
      for (let ganttDiagramT4ZO3ILLBinding443 of ganttDiagramT4ZO3ILLBinding300.groups.ids.split(
        " ",
      )) {
        let ganttDiagramT4ZO3ILLBinding451 = ganttDiagramT4ZO3ILLBinding72(
          ganttDiagramT4ZO3ILLBinding443,
        );
        ganttDiagramT4ZO3ILLBinding451 !== undefined &&
          (!ganttDiagramT4ZO3ILLBinding395 ||
            ganttDiagramT4ZO3ILLBinding451.endTime >
              ganttDiagramT4ZO3ILLBinding395.endTime) &&
          (ganttDiagramT4ZO3ILLBinding395 = ganttDiagramT4ZO3ILLBinding451);
      }
      if (ganttDiagramT4ZO3ILLBinding395)
        return ganttDiagramT4ZO3ILLBinding395.endTime;
      let ganttDiagramT4ZO3ILLBinding396 = new Date();
      return (
        ganttDiagramT4ZO3ILLBinding396.setHours(0, 0, 0, 0),
        ganttDiagramT4ZO3ILLBinding396
      );
    }
    let ganttDiagramT4ZO3ILLBinding301 = ganttDiagramT4ZO3ILLBinding6.default(
      ganttDiagramT4ZO3ILLInput72,
      ganttDiagramT4ZO3ILLInput71.trim(),
      true,
    );
    if (ganttDiagramT4ZO3ILLBinding301.isValid())
      return ganttDiagramT4ZO3ILLBinding301.toDate();
    {
      chunkAGHRB4JFI.debug("Invalid date:" + ganttDiagramT4ZO3ILLInput72);
      chunkAGHRB4JFI.debug(
        "With date format:" + ganttDiagramT4ZO3ILLInput71.trim(),
      );
      let ganttDiagramT4ZO3ILLBinding388 = new Date(
        ganttDiagramT4ZO3ILLInput72,
      );
      if (
        ganttDiagramT4ZO3ILLBinding388 === undefined ||
        isNaN(ganttDiagramT4ZO3ILLBinding388.getTime()) ||
        ganttDiagramT4ZO3ILLBinding388.getFullYear() < -10000 ||
        ganttDiagramT4ZO3ILLBinding388.getFullYear() > 1e4
      )
        throw Error("Invalid date:" + ganttDiagramT4ZO3ILLInput72);
      return ganttDiagramT4ZO3ILLBinding388;
    }
  }, "getStartDate");
  ganttDiagramT4ZO3ILLBinding61 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput185,
  ) {
    let ganttDiagramT4ZO3ILLBinding435 = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(
      ganttDiagramT4ZO3ILLInput185.trim(),
    );
    return ganttDiagramT4ZO3ILLBinding435 === null
      ? [NaN, "ms"]
      : [
          Number.parseFloat(ganttDiagramT4ZO3ILLBinding435[1]),
          ganttDiagramT4ZO3ILLBinding435[2],
        ];
  }, "parseDuration");
  ganttDiagramT4ZO3ILLBinding62 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput81,
    ganttDiagramT4ZO3ILLInput82,
    ganttDiagramT4ZO3ILLInput83,
    ganttDiagramT4ZO3ILLInput84 = false,
  ) {
    ganttDiagramT4ZO3ILLInput83 = ganttDiagramT4ZO3ILLInput83.trim();
    let ganttDiagramT4ZO3ILLBinding323 = /^until\s+(?<ids>[\d\w- ]+)/.exec(
      ganttDiagramT4ZO3ILLInput83,
    );
    if (ganttDiagramT4ZO3ILLBinding323 !== null) {
      let ganttDiagramT4ZO3ILLBinding393 = null;
      for (let ganttDiagramT4ZO3ILLBinding440 of ganttDiagramT4ZO3ILLBinding323.groups.ids.split(
        " ",
      )) {
        let ganttDiagramT4ZO3ILLBinding448 = ganttDiagramT4ZO3ILLBinding72(
          ganttDiagramT4ZO3ILLBinding440,
        );
        ganttDiagramT4ZO3ILLBinding448 !== undefined &&
          (!ganttDiagramT4ZO3ILLBinding393 ||
            ganttDiagramT4ZO3ILLBinding448.startTime <
              ganttDiagramT4ZO3ILLBinding393.startTime) &&
          (ganttDiagramT4ZO3ILLBinding393 = ganttDiagramT4ZO3ILLBinding448);
      }
      if (ganttDiagramT4ZO3ILLBinding393)
        return ganttDiagramT4ZO3ILLBinding393.startTime;
      let ganttDiagramT4ZO3ILLBinding394 = new Date();
      return (
        ganttDiagramT4ZO3ILLBinding394.setHours(0, 0, 0, 0),
        ganttDiagramT4ZO3ILLBinding394
      );
    }
    let ganttDiagramT4ZO3ILLBinding324 = ganttDiagramT4ZO3ILLBinding6.default(
      ganttDiagramT4ZO3ILLInput83,
      ganttDiagramT4ZO3ILLInput82.trim(),
      true,
    );
    if (ganttDiagramT4ZO3ILLBinding324.isValid())
      return (
        ganttDiagramT4ZO3ILLInput84 &&
          (ganttDiagramT4ZO3ILLBinding324 = ganttDiagramT4ZO3ILLBinding324.add(
            1,
            "d",
          )),
        ganttDiagramT4ZO3ILLBinding324.toDate()
      );
    let ganttDiagramT4ZO3ILLBinding325 = ganttDiagramT4ZO3ILLBinding6.default(
        ganttDiagramT4ZO3ILLInput81,
      ),
      [ganttDiagramT4ZO3ILLBinding326, ganttDiagramT4ZO3ILLBinding327] =
        ganttDiagramT4ZO3ILLBinding61(ganttDiagramT4ZO3ILLInput83);
    if (!Number.isNaN(ganttDiagramT4ZO3ILLBinding326)) {
      let ganttDiagramT4ZO3ILLBinding459 = ganttDiagramT4ZO3ILLBinding325.add(
        ganttDiagramT4ZO3ILLBinding326,
        ganttDiagramT4ZO3ILLBinding327,
      );
      ganttDiagramT4ZO3ILLBinding459.isValid() &&
        (ganttDiagramT4ZO3ILLBinding325 = ganttDiagramT4ZO3ILLBinding459);
    }
    return ganttDiagramT4ZO3ILLBinding325.toDate();
  }, "getEndDate");
  ganttDiagramT4ZO3ILLBinding63 = 0;
  ganttDiagramT4ZO3ILLBinding64 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput217,
  ) {
    return ganttDiagramT4ZO3ILLInput217 === undefined
      ? ((ganttDiagramT4ZO3ILLBinding63 += 1),
        "task" + ganttDiagramT4ZO3ILLBinding63)
      : ganttDiagramT4ZO3ILLInput217;
  }, "parseId");
  ganttDiagramT4ZO3ILLBinding65 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput76,
    ganttDiagramT4ZO3ILLInput77,
  ) {
    let ganttDiagramT4ZO3ILLBinding311;
    ganttDiagramT4ZO3ILLBinding311 =
      ganttDiagramT4ZO3ILLInput77.substr(0, 1) === ":"
        ? ganttDiagramT4ZO3ILLInput77.substr(
            1,
            ganttDiagramT4ZO3ILLInput77.length,
          )
        : ganttDiagramT4ZO3ILLInput77;
    let ganttDiagramT4ZO3ILLBinding312 =
        ganttDiagramT4ZO3ILLBinding311.split(","),
      ganttDiagramT4ZO3ILLBinding313 = {};
    ganttDiagramT4ZO3ILLHelper1(
      ganttDiagramT4ZO3ILLBinding312,
      ganttDiagramT4ZO3ILLBinding313,
      ganttDiagramT4ZO3ILLBinding24,
    );
    for (
      let ganttDiagramT4ZO3ILLBinding464 = 0;
      ganttDiagramT4ZO3ILLBinding464 < ganttDiagramT4ZO3ILLBinding312.length;
      ganttDiagramT4ZO3ILLBinding464++
    )
      ganttDiagramT4ZO3ILLBinding312[ganttDiagramT4ZO3ILLBinding464] =
        ganttDiagramT4ZO3ILLBinding312[ganttDiagramT4ZO3ILLBinding464].trim();
    let ganttDiagramT4ZO3ILLBinding314 = "";
    switch (ganttDiagramT4ZO3ILLBinding312.length) {
      case 1:
        ganttDiagramT4ZO3ILLBinding313.id = ganttDiagramT4ZO3ILLBinding64();
        ganttDiagramT4ZO3ILLBinding313.startTime =
          ganttDiagramT4ZO3ILLInput76.endTime;
        ganttDiagramT4ZO3ILLBinding314 = ganttDiagramT4ZO3ILLBinding312[0];
        break;
      case 2:
        ganttDiagramT4ZO3ILLBinding313.id = ganttDiagramT4ZO3ILLBinding64();
        ganttDiagramT4ZO3ILLBinding313.startTime = at(
          undefined,
          ganttDiagramT4ZO3ILLBinding13,
          ganttDiagramT4ZO3ILLBinding312[0],
        );
        ganttDiagramT4ZO3ILLBinding314 = ganttDiagramT4ZO3ILLBinding312[1];
        break;
      case 3:
        ganttDiagramT4ZO3ILLBinding313.id = ganttDiagramT4ZO3ILLBinding64(
          ganttDiagramT4ZO3ILLBinding312[0],
        );
        ganttDiagramT4ZO3ILLBinding313.startTime = at(
          undefined,
          ganttDiagramT4ZO3ILLBinding13,
          ganttDiagramT4ZO3ILLBinding312[1],
        );
        ganttDiagramT4ZO3ILLBinding314 = ganttDiagramT4ZO3ILLBinding312[2];
        break;
      default:
    }
    return (
      ganttDiagramT4ZO3ILLBinding314 &&
        ((ganttDiagramT4ZO3ILLBinding313.endTime =
          ganttDiagramT4ZO3ILLBinding62(
            ganttDiagramT4ZO3ILLBinding313.startTime,
            ganttDiagramT4ZO3ILLBinding13,
            ganttDiagramT4ZO3ILLBinding314,
            ganttDiagramT4ZO3ILLBinding27,
          )),
        (ganttDiagramT4ZO3ILLBinding313.manualEndTime =
          ganttDiagramT4ZO3ILLBinding6
            .default(ganttDiagramT4ZO3ILLBinding314, "YYYY-MM-DD", true)
            .isValid()),
        ganttDiagramT4ZO3ILLBinding59(
          ganttDiagramT4ZO3ILLBinding313,
          ganttDiagramT4ZO3ILLBinding13,
          ganttDiagramT4ZO3ILLBinding18,
          ganttDiagramT4ZO3ILLBinding17,
        )),
      ganttDiagramT4ZO3ILLBinding313
    );
  }, "compileData");
  ganttDiagramT4ZO3ILLBinding66 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput78,
    ganttDiagramT4ZO3ILLInput79,
  ) {
    let ganttDiagramT4ZO3ILLBinding315;
    ganttDiagramT4ZO3ILLBinding315 =
      ganttDiagramT4ZO3ILLInput79.substr(0, 1) === ":"
        ? ganttDiagramT4ZO3ILLInput79.substr(
            1,
            ganttDiagramT4ZO3ILLInput79.length,
          )
        : ganttDiagramT4ZO3ILLInput79;
    let ganttDiagramT4ZO3ILLBinding316 =
        ganttDiagramT4ZO3ILLBinding315.split(","),
      ganttDiagramT4ZO3ILLBinding317 = {};
    ganttDiagramT4ZO3ILLHelper1(
      ganttDiagramT4ZO3ILLBinding316,
      ganttDiagramT4ZO3ILLBinding317,
      ganttDiagramT4ZO3ILLBinding24,
    );
    for (
      let ganttDiagramT4ZO3ILLBinding465 = 0;
      ganttDiagramT4ZO3ILLBinding465 < ganttDiagramT4ZO3ILLBinding316.length;
      ganttDiagramT4ZO3ILLBinding465++
    )
      ganttDiagramT4ZO3ILLBinding316[ganttDiagramT4ZO3ILLBinding465] =
        ganttDiagramT4ZO3ILLBinding316[ganttDiagramT4ZO3ILLBinding465].trim();
    switch (ganttDiagramT4ZO3ILLBinding316.length) {
      case 1:
        ganttDiagramT4ZO3ILLBinding317.id = ganttDiagramT4ZO3ILLBinding64();
        ganttDiagramT4ZO3ILLBinding317.startTime = {
          type: "prevTaskEnd",
          id: ganttDiagramT4ZO3ILLInput78,
        };
        ganttDiagramT4ZO3ILLBinding317.endTime = {
          data: ganttDiagramT4ZO3ILLBinding316[0],
        };
        break;
      case 2:
        ganttDiagramT4ZO3ILLBinding317.id = ganttDiagramT4ZO3ILLBinding64();
        ganttDiagramT4ZO3ILLBinding317.startTime = {
          type: "getStartDate",
          startData: ganttDiagramT4ZO3ILLBinding316[0],
        };
        ganttDiagramT4ZO3ILLBinding317.endTime = {
          data: ganttDiagramT4ZO3ILLBinding316[1],
        };
        break;
      case 3:
        ganttDiagramT4ZO3ILLBinding317.id = ganttDiagramT4ZO3ILLBinding64(
          ganttDiagramT4ZO3ILLBinding316[0],
        );
        ganttDiagramT4ZO3ILLBinding317.startTime = {
          type: "getStartDate",
          startData: ganttDiagramT4ZO3ILLBinding316[1],
        };
        ganttDiagramT4ZO3ILLBinding317.endTime = {
          data: ganttDiagramT4ZO3ILLBinding316[2],
        };
        break;
      default:
    }
    return ganttDiagramT4ZO3ILLBinding317;
  }, "parseData");
  ganttDiagramT4ZO3ILLBinding69 = [];
  ganttDiagramT4ZO3ILLBinding70 = {};
  ganttDiagramT4ZO3ILLBinding71 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput88,
    ganttDiagramT4ZO3ILLInput89,
  ) {
    let ganttDiagramT4ZO3ILLBinding336 = {
        section: ganttDiagramT4ZO3ILLBinding22,
        type: ganttDiagramT4ZO3ILLBinding22,
        processed: false,
        manualEndTime: false,
        renderEndTime: null,
        raw: {
          data: ganttDiagramT4ZO3ILLInput89,
        },
        task: ganttDiagramT4ZO3ILLInput88,
        classes: [],
      },
      ganttDiagramT4ZO3ILLBinding337 = ganttDiagramT4ZO3ILLBinding66(
        ganttDiagramT4ZO3ILLBinding68,
        ganttDiagramT4ZO3ILLInput89,
      );
    ganttDiagramT4ZO3ILLBinding336.raw.startTime =
      ganttDiagramT4ZO3ILLBinding337.startTime;
    ganttDiagramT4ZO3ILLBinding336.raw.endTime =
      ganttDiagramT4ZO3ILLBinding337.endTime;
    ganttDiagramT4ZO3ILLBinding336.id = ganttDiagramT4ZO3ILLBinding337.id;
    ganttDiagramT4ZO3ILLBinding336.prevTaskId = ganttDiagramT4ZO3ILLBinding68;
    ganttDiagramT4ZO3ILLBinding336.active =
      ganttDiagramT4ZO3ILLBinding337.active;
    ganttDiagramT4ZO3ILLBinding336.done = ganttDiagramT4ZO3ILLBinding337.done;
    ganttDiagramT4ZO3ILLBinding336.crit = ganttDiagramT4ZO3ILLBinding337.crit;
    ganttDiagramT4ZO3ILLBinding336.milestone =
      ganttDiagramT4ZO3ILLBinding337.milestone;
    ganttDiagramT4ZO3ILLBinding336.vert = ganttDiagramT4ZO3ILLBinding337.vert;
    ganttDiagramT4ZO3ILLBinding336.order = ganttDiagramT4ZO3ILLBinding31;
    ganttDiagramT4ZO3ILLBinding31++;
    let ganttDiagramT4ZO3ILLBinding338 = ganttDiagramT4ZO3ILLBinding69.push(
      ganttDiagramT4ZO3ILLBinding336,
    );
    ganttDiagramT4ZO3ILLBinding68 = ganttDiagramT4ZO3ILLBinding336.id;
    ganttDiagramT4ZO3ILLBinding70[ganttDiagramT4ZO3ILLBinding336.id] =
      ganttDiagramT4ZO3ILLBinding338 - 1;
  }, "addTask");
  ganttDiagramT4ZO3ILLBinding72 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput244,
  ) {
    let ganttDiagramT4ZO3ILLBinding461 =
      ganttDiagramT4ZO3ILLBinding70[ganttDiagramT4ZO3ILLInput244];
    return ganttDiagramT4ZO3ILLBinding69[ganttDiagramT4ZO3ILLBinding461];
  }, "findTaskById");
  ganttDiagramT4ZO3ILLBinding73 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput117,
    ganttDiagramT4ZO3ILLInput118,
  ) {
    let ganttDiagramT4ZO3ILLBinding374 = {
        section: ganttDiagramT4ZO3ILLBinding22,
        type: ganttDiagramT4ZO3ILLBinding22,
        description: ganttDiagramT4ZO3ILLInput117,
        task: ganttDiagramT4ZO3ILLInput117,
        classes: [],
      },
      ganttDiagramT4ZO3ILLBinding375 = ganttDiagramT4ZO3ILLBinding65(
        ganttDiagramT4ZO3ILLBinding67,
        ganttDiagramT4ZO3ILLInput118,
      );
    ganttDiagramT4ZO3ILLBinding374.startTime =
      ganttDiagramT4ZO3ILLBinding375.startTime;
    ganttDiagramT4ZO3ILLBinding374.endTime =
      ganttDiagramT4ZO3ILLBinding375.endTime;
    ganttDiagramT4ZO3ILLBinding374.id = ganttDiagramT4ZO3ILLBinding375.id;
    ganttDiagramT4ZO3ILLBinding374.active =
      ganttDiagramT4ZO3ILLBinding375.active;
    ganttDiagramT4ZO3ILLBinding374.done = ganttDiagramT4ZO3ILLBinding375.done;
    ganttDiagramT4ZO3ILLBinding374.crit = ganttDiagramT4ZO3ILLBinding375.crit;
    ganttDiagramT4ZO3ILLBinding374.milestone =
      ganttDiagramT4ZO3ILLBinding375.milestone;
    ganttDiagramT4ZO3ILLBinding374.vert = ganttDiagramT4ZO3ILLBinding375.vert;
    ganttDiagramT4ZO3ILLBinding67 = ganttDiagramT4ZO3ILLBinding374;
    ganttDiagramT4ZO3ILLBinding21.push(ganttDiagramT4ZO3ILLBinding374);
  }, "addTaskOrg");
  ganttDiagramT4ZO3ILLBinding74 = chunkAGHRB4JFN(function () {
    let ganttDiagramT4ZO3ILLBinding302 = chunkAGHRB4JFN(function (
        ganttDiagramT4ZO3ILLInput75,
      ) {
        let ganttDiagramT4ZO3ILLBinding309 =
            ganttDiagramT4ZO3ILLBinding69[ganttDiagramT4ZO3ILLInput75],
          ganttDiagramT4ZO3ILLBinding310 = "";
        switch (
          ganttDiagramT4ZO3ILLBinding69[ganttDiagramT4ZO3ILLInput75].raw
            .startTime.type
        ) {
          case "prevTaskEnd":
            ganttDiagramT4ZO3ILLBinding309.startTime =
              ganttDiagramT4ZO3ILLBinding72(
                ganttDiagramT4ZO3ILLBinding309.prevTaskId,
              ).endTime;
            break;
          case "getStartDate":
            ganttDiagramT4ZO3ILLBinding310 = at(
              undefined,
              ganttDiagramT4ZO3ILLBinding13,
              ganttDiagramT4ZO3ILLBinding69[ganttDiagramT4ZO3ILLInput75].raw
                .startTime.startData,
            );
            ganttDiagramT4ZO3ILLBinding310 &&
              (ganttDiagramT4ZO3ILLBinding69[
                ganttDiagramT4ZO3ILLInput75
              ].startTime = ganttDiagramT4ZO3ILLBinding310);
            break;
        }
        return (
          ganttDiagramT4ZO3ILLBinding69[ganttDiagramT4ZO3ILLInput75]
            .startTime &&
            ((ganttDiagramT4ZO3ILLBinding69[
              ganttDiagramT4ZO3ILLInput75
            ].endTime = ganttDiagramT4ZO3ILLBinding62(
              ganttDiagramT4ZO3ILLBinding69[ganttDiagramT4ZO3ILLInput75]
                .startTime,
              ganttDiagramT4ZO3ILLBinding13,
              ganttDiagramT4ZO3ILLBinding69[ganttDiagramT4ZO3ILLInput75].raw
                .endTime.data,
              ganttDiagramT4ZO3ILLBinding27,
            )),
            ganttDiagramT4ZO3ILLBinding69[ganttDiagramT4ZO3ILLInput75]
              .endTime &&
              ((ganttDiagramT4ZO3ILLBinding69[
                ganttDiagramT4ZO3ILLInput75
              ].processed = true),
              (ganttDiagramT4ZO3ILLBinding69[
                ganttDiagramT4ZO3ILLInput75
              ].manualEndTime = ganttDiagramT4ZO3ILLBinding6
                .default(
                  ganttDiagramT4ZO3ILLBinding69[ganttDiagramT4ZO3ILLInput75].raw
                    .endTime.data,
                  "YYYY-MM-DD",
                  true,
                )
                .isValid()),
              ganttDiagramT4ZO3ILLBinding59(
                ganttDiagramT4ZO3ILLBinding69[ganttDiagramT4ZO3ILLInput75],
                ganttDiagramT4ZO3ILLBinding13,
                ganttDiagramT4ZO3ILLBinding18,
                ganttDiagramT4ZO3ILLBinding17,
              ))),
          ganttDiagramT4ZO3ILLBinding69[ganttDiagramT4ZO3ILLInput75].processed
        );
      }, "compileTask"),
      ganttDiagramT4ZO3ILLBinding303 = true;
    for (let [
      ganttDiagramT4ZO3ILLBinding462,
      ganttDiagramT4ZO3ILLBinding463,
    ] of ganttDiagramT4ZO3ILLBinding69.entries()) {
      ganttDiagramT4ZO3ILLBinding302(ganttDiagramT4ZO3ILLBinding462);
      ganttDiagramT4ZO3ILLBinding303 &&=
        ganttDiagramT4ZO3ILLBinding463.processed;
    }
    return ganttDiagramT4ZO3ILLBinding303;
  }, "compileTasks");
  _t = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput128,
    ganttDiagramT4ZO3ILLInput129,
  ) {
    let ganttDiagramT4ZO3ILLBinding387 = ganttDiagramT4ZO3ILLInput129;
    chunkICPOFSXXB().securityLevel !== "loose" &&
      (ganttDiagramT4ZO3ILLBinding387 =
        ganttDiagramT4ZO3ILLBinding5.sanitizeUrl(ganttDiagramT4ZO3ILLInput129));
    ganttDiagramT4ZO3ILLInput128.split(",").forEach(function (item) {
      ganttDiagramT4ZO3ILLBinding72(item) !== undefined &&
        (ganttDiagramT4ZO3ILLBinding77(item, () => {
          window.open(ganttDiagramT4ZO3ILLBinding387, "_self");
        }),
        ganttDiagramT4ZO3ILLBinding19.set(
          item,
          ganttDiagramT4ZO3ILLBinding387,
        ));
    });
    ganttDiagramT4ZO3ILLBinding75(ganttDiagramT4ZO3ILLInput128, "clickable");
  }, "setLink");
  ganttDiagramT4ZO3ILLBinding75 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput187,
    ganttDiagramT4ZO3ILLInput188,
  ) {
    ganttDiagramT4ZO3ILLInput187.split(",").forEach(function (item) {
      let ganttDiagramT4ZO3ILLBinding458 = ganttDiagramT4ZO3ILLBinding72(item);
      ganttDiagramT4ZO3ILLBinding458 !== undefined &&
        ganttDiagramT4ZO3ILLBinding458.classes.push(
          ganttDiagramT4ZO3ILLInput188,
        );
    });
  }, "setClass");
  ganttDiagramT4ZO3ILLBinding76 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput91,
    ganttDiagramT4ZO3ILLInput92,
    ganttDiagramT4ZO3ILLInput93,
  ) {
    if (
      chunkICPOFSXXB().securityLevel !== "loose" ||
      ganttDiagramT4ZO3ILLInput92 === undefined
    )
      return;
    let ganttDiagramT4ZO3ILLBinding342 = [];
    if (typeof ganttDiagramT4ZO3ILLInput93 == "string") {
      ganttDiagramT4ZO3ILLBinding342 = ganttDiagramT4ZO3ILLInput93.split(
        /,(?=(?:(?:[^"]*"){2})*[^"]*$)/,
      );
      for (
        let ganttDiagramT4ZO3ILLBinding422 = 0;
        ganttDiagramT4ZO3ILLBinding422 < ganttDiagramT4ZO3ILLBinding342.length;
        ganttDiagramT4ZO3ILLBinding422++
      ) {
        let ganttDiagramT4ZO3ILLBinding431 =
          ganttDiagramT4ZO3ILLBinding342[ganttDiagramT4ZO3ILLBinding422].trim();
        ganttDiagramT4ZO3ILLBinding431.startsWith('"') &&
          ganttDiagramT4ZO3ILLBinding431.endsWith('"') &&
          (ganttDiagramT4ZO3ILLBinding431 =
            ganttDiagramT4ZO3ILLBinding431.substr(
              1,
              ganttDiagramT4ZO3ILLBinding431.length - 2,
            ));
        ganttDiagramT4ZO3ILLBinding342[ganttDiagramT4ZO3ILLBinding422] =
          ganttDiagramT4ZO3ILLBinding431;
      }
    }
    ganttDiagramT4ZO3ILLBinding342.length === 0 &&
      ganttDiagramT4ZO3ILLBinding342.push(ganttDiagramT4ZO3ILLInput91);
    ganttDiagramT4ZO3ILLBinding72(ganttDiagramT4ZO3ILLInput91) !== undefined &&
      ganttDiagramT4ZO3ILLBinding77(ganttDiagramT4ZO3ILLInput91, () => {
        chunk5PVQY5BWG.runFunc(
          ganttDiagramT4ZO3ILLInput92,
          ...ganttDiagramT4ZO3ILLBinding342,
        );
      });
  }, "setClickFun");
  ganttDiagramT4ZO3ILLBinding77 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLInput96,
    ganttDiagramT4ZO3ILLInput97,
  ) {
    ganttDiagramT4ZO3ILLBinding25.push(
      function () {
        let ganttDiagramT4ZO3ILLBinding417 = ganttDiagramT4ZO3ILLBinding26
            ? `${ganttDiagramT4ZO3ILLBinding26}-${ganttDiagramT4ZO3ILLInput96}`
            : ganttDiagramT4ZO3ILLInput96,
          ganttDiagramT4ZO3ILLBinding418 = document.querySelector(
            `[id="${ganttDiagramT4ZO3ILLBinding417}"]`,
          );
        ganttDiagramT4ZO3ILLBinding418 !== null &&
          ganttDiagramT4ZO3ILLBinding418.addEventListener("click", function () {
            ganttDiagramT4ZO3ILLInput97();
          });
      },
      function () {
        let ganttDiagramT4ZO3ILLBinding415 = ganttDiagramT4ZO3ILLBinding26
            ? `${ganttDiagramT4ZO3ILLBinding26}-${ganttDiagramT4ZO3ILLInput96}`
            : ganttDiagramT4ZO3ILLInput96,
          ganttDiagramT4ZO3ILLBinding416 = document.querySelector(
            `[id="${ganttDiagramT4ZO3ILLBinding415}-text"]`,
          );
        ganttDiagramT4ZO3ILLBinding416 !== null &&
          ganttDiagramT4ZO3ILLBinding416.addEventListener("click", function () {
            ganttDiagramT4ZO3ILLInput97();
          });
      },
    );
  }, "pushFun");
  ganttDiagramT4ZO3ILLBinding78 = {
    getConfig: chunkAGHRB4JFN(() => chunkICPOFSXXB().gantt, "getConfig"),
    clear: ganttDiagramT4ZO3ILLBinding32,
    setDateFormat: ganttDiagramT4ZO3ILLBinding40,
    getDateFormat: ganttDiagramT4ZO3ILLBinding47,
    enableInclusiveEndDates: ganttDiagramT4ZO3ILLBinding41,
    endDatesAreInclusive: ganttDiagramT4ZO3ILLBinding42,
    enableTopAxis: ganttDiagramT4ZO3ILLBinding43,
    topAxisEnabled: ganttDiagramT4ZO3ILLBinding44,
    setAxisFormat: ganttDiagramT4ZO3ILLBinding34,
    getAxisFormat: ganttDiagramT4ZO3ILLBinding35,
    setTickInterval: ganttDiagramT4ZO3ILLBinding36,
    getTickInterval: ganttDiagramT4ZO3ILLBinding37,
    setTodayMarker: ganttDiagramT4ZO3ILLBinding38,
    getTodayMarker: ganttDiagramT4ZO3ILLBinding39,
    setAccTitle: chunkICPOFSXXH,
    getAccTitle: _chunkICPOFSXXV,
    setDiagramTitle: chunkICPOFSXXG,
    getDiagramTitle: chunkICPOFSXXC,
    setDiagramId: ganttDiagramT4ZO3ILLBinding33,
    setDisplayMode: ganttDiagramT4ZO3ILLBinding45,
    getDisplayMode: ganttDiagramT4ZO3ILLBinding46,
    setAccDescription: chunkICPOFSXXV,
    getAccDescription: chunkICPOFSXXUnderscore,
    addSection: ganttDiagramT4ZO3ILLBinding53,
    getSections: ganttDiagramT4ZO3ILLBinding54,
    getTasks: ganttDiagramT4ZO3ILLBinding55,
    addTask: ganttDiagramT4ZO3ILLBinding71,
    findTaskById: ganttDiagramT4ZO3ILLBinding72,
    addTaskOrg: ganttDiagramT4ZO3ILLBinding73,
    setIncludes: ganttDiagramT4ZO3ILLBinding48,
    getIncludes: ganttDiagramT4ZO3ILLBinding49,
    setExcludes: ganttDiagramT4ZO3ILLBinding50,
    getExcludes: ganttDiagramT4ZO3ILLBinding51,
    setClickEvent: chunkAGHRB4JFN(function (
      ganttDiagramT4ZO3ILLInput189,
      ganttDiagramT4ZO3ILLInput190,
      ganttDiagramT4ZO3ILLInput191,
    ) {
      ganttDiagramT4ZO3ILLInput189.split(",").forEach(function (item) {
        ganttDiagramT4ZO3ILLBinding76(
          item,
          ganttDiagramT4ZO3ILLInput190,
          ganttDiagramT4ZO3ILLInput191,
        );
      });
      ganttDiagramT4ZO3ILLBinding75(ganttDiagramT4ZO3ILLInput189, "clickable");
    }, "setClickEvent"),
    setLink: _t,
    getLinks: ganttDiagramT4ZO3ILLBinding52,
    bindFunctions: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLInput213) {
      ganttDiagramT4ZO3ILLBinding25.forEach(function (item) {
        item(ganttDiagramT4ZO3ILLInput213);
      });
    }, "bindFunctions"),
    parseDuration: ganttDiagramT4ZO3ILLBinding61,
    isInvalidDate: $e,
    setWeekday: ganttDiagramT4ZO3ILLBinding56,
    getWeekday: ganttDiagramT4ZO3ILLBinding57,
    setWeekend: ganttDiagramT4ZO3ILLBinding58,
  };
  chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper1, "getTaskTags");
  ganttDiagramT4ZO3ILLBinding9.default.extend(
    ganttDiagramT4ZO3ILLBinding10.default,
  );
  ganttDiagramT4ZO3ILLBinding79 = chunkAGHRB4JFN(function () {
    chunkAGHRB4JFI.debug("Something is calling, setConf, remove the call");
  }, "setConf");
  ganttDiagramT4ZO3ILLBinding80 = {
    monday: _AppInitialQit,
    tuesday: appInitialZit,
    wednesday: AppInitialQit,
    thursday: appInitialXit,
    friday: AppInitialKit,
    saturday: AppInitialJit,
    sunday: AppInitialYit,
  };
  ganttDiagramT4ZO3ILLBinding81 = chunkAGHRB4JFN(
    (ganttDiagramT4ZO3ILLInput119, ganttDiagramT4ZO3ILLInput120) => {
      let ganttDiagramT4ZO3ILLBinding376 = [
          ...ganttDiagramT4ZO3ILLInput119,
        ].map(() => -1 / 0),
        ganttDiagramT4ZO3ILLBinding377 = [...ganttDiagramT4ZO3ILLInput119].sort(
          (ganttDiagramT4ZO3ILLInput246, ganttDiagramT4ZO3ILLInput247) =>
            ganttDiagramT4ZO3ILLInput246.startTime -
              ganttDiagramT4ZO3ILLInput247.startTime ||
            ganttDiagramT4ZO3ILLInput246.order -
              ganttDiagramT4ZO3ILLInput247.order,
        ),
        ganttDiagramT4ZO3ILLBinding378 = 0;
      for (let ganttDiagramT4ZO3ILLBinding423 of ganttDiagramT4ZO3ILLBinding377)
        for (
          let ganttDiagramT4ZO3ILLBinding432 = 0;
          ganttDiagramT4ZO3ILLBinding432 <
          ganttDiagramT4ZO3ILLBinding376.length;
          ganttDiagramT4ZO3ILLBinding432++
        )
          if (
            ganttDiagramT4ZO3ILLBinding423.startTime >=
            ganttDiagramT4ZO3ILLBinding376[ganttDiagramT4ZO3ILLBinding432]
          ) {
            ganttDiagramT4ZO3ILLBinding376[ganttDiagramT4ZO3ILLBinding432] =
              ganttDiagramT4ZO3ILLBinding423.endTime;
            ganttDiagramT4ZO3ILLBinding423.order =
              ganttDiagramT4ZO3ILLBinding432 + ganttDiagramT4ZO3ILLInput120;
            ganttDiagramT4ZO3ILLBinding432 > ganttDiagramT4ZO3ILLBinding378 &&
              (ganttDiagramT4ZO3ILLBinding378 = ganttDiagramT4ZO3ILLBinding432);
            break;
          }
      return ganttDiagramT4ZO3ILLBinding378;
    },
    "getMaxIntersections",
  );
  $ = 1e4;
  GanttDiagramT4ZO3ILL = {
    parser: ganttDiagramT4ZO3ILLBinding11,
    db: ganttDiagramT4ZO3ILLBinding78,
    renderer: {
      setConf: ganttDiagramT4ZO3ILLBinding79,
      draw: chunkAGHRB4JFN(function (
        ganttDiagramT4ZO3ILLInput1,
        ganttDiagramT4ZO3ILLInput2,
        ganttDiagramT4ZO3ILLInput3,
        ganttDiagramT4ZO3ILLInput4,
      ) {
        let ganttDiagramT4ZO3ILLBinding110 = chunkICPOFSXXB().gantt;
        ganttDiagramT4ZO3ILLInput4.db.setDiagramId(ganttDiagramT4ZO3ILLInput2);
        let ganttDiagramT4ZO3ILLBinding111 = chunkICPOFSXXB().securityLevel,
          ganttDiagramT4ZO3ILLBinding112;
        ganttDiagramT4ZO3ILLBinding111 === "sandbox" &&
          (ganttDiagramT4ZO3ILLBinding112 = srcR(
            "#i" + ganttDiagramT4ZO3ILLInput2,
          ));
        let ganttDiagramT4ZO3ILLBinding113 = srcR(
            ganttDiagramT4ZO3ILLBinding111 === "sandbox"
              ? ganttDiagramT4ZO3ILLBinding112.nodes()[0].contentDocument.body
              : "body",
          ),
          ganttDiagramT4ZO3ILLBinding114 =
            ganttDiagramT4ZO3ILLBinding111 === "sandbox"
              ? ganttDiagramT4ZO3ILLBinding112.nodes()[0].contentDocument
              : document,
          ganttDiagramT4ZO3ILLBinding115 =
            ganttDiagramT4ZO3ILLBinding114.getElementById(
              ganttDiagramT4ZO3ILLInput2,
            );
        ganttDiagramT4ZO3ILLBinding82 =
          ganttDiagramT4ZO3ILLBinding115.parentElement.offsetWidth;
        ganttDiagramT4ZO3ILLBinding82 === undefined &&
          (ganttDiagramT4ZO3ILLBinding82 = 1200);
        ganttDiagramT4ZO3ILLBinding110.useWidth !== undefined &&
          (ganttDiagramT4ZO3ILLBinding82 =
            ganttDiagramT4ZO3ILLBinding110.useWidth);
        let ganttDiagramT4ZO3ILLBinding116 =
            ganttDiagramT4ZO3ILLInput4.db.getTasks(),
          ganttDiagramT4ZO3ILLBinding117 = [];
        for (let ganttDiagramT4ZO3ILLBinding466 of ganttDiagramT4ZO3ILLBinding116)
          ganttDiagramT4ZO3ILLBinding117.push(
            ganttDiagramT4ZO3ILLBinding466.type,
          );
        ganttDiagramT4ZO3ILLBinding117 = ganttDiagramT4ZO3ILLHelper11(
          ganttDiagramT4ZO3ILLBinding117,
        );
        let ganttDiagramT4ZO3ILLBinding118 = {},
          ganttDiagramT4ZO3ILLBinding119 =
            2 * ganttDiagramT4ZO3ILLBinding110.topPadding;
        if (
          ganttDiagramT4ZO3ILLInput4.db.getDisplayMode() === "compact" ||
          ganttDiagramT4ZO3ILLBinding110.displayMode === "compact"
        ) {
          let ganttDiagramT4ZO3ILLBinding383 = {};
          for (let ganttDiagramT4ZO3ILLBinding444 of ganttDiagramT4ZO3ILLBinding116)
            ganttDiagramT4ZO3ILLBinding383[
              ganttDiagramT4ZO3ILLBinding444.section
            ] === undefined
              ? (ganttDiagramT4ZO3ILLBinding383[
                  ganttDiagramT4ZO3ILLBinding444.section
                ] = [ganttDiagramT4ZO3ILLBinding444])
              : ganttDiagramT4ZO3ILLBinding383[
                  ganttDiagramT4ZO3ILLBinding444.section
                ].push(ganttDiagramT4ZO3ILLBinding444);
          let ganttDiagramT4ZO3ILLBinding384 = 0;
          for (let ganttDiagramT4ZO3ILLBinding433 of Object.keys(
            ganttDiagramT4ZO3ILLBinding383,
          )) {
            let ganttDiagramT4ZO3ILLBinding447 =
              ganttDiagramT4ZO3ILLBinding81(
                ganttDiagramT4ZO3ILLBinding383[ganttDiagramT4ZO3ILLBinding433],
                ganttDiagramT4ZO3ILLBinding384,
              ) + 1;
            ganttDiagramT4ZO3ILLBinding384 += ganttDiagramT4ZO3ILLBinding447;
            ganttDiagramT4ZO3ILLBinding119 +=
              ganttDiagramT4ZO3ILLBinding447 *
              (ganttDiagramT4ZO3ILLBinding110.barHeight +
                ganttDiagramT4ZO3ILLBinding110.barGap);
            ganttDiagramT4ZO3ILLBinding118[ganttDiagramT4ZO3ILLBinding433] =
              ganttDiagramT4ZO3ILLBinding447;
          }
        } else {
          ganttDiagramT4ZO3ILLBinding119 +=
            ganttDiagramT4ZO3ILLBinding116.length *
            (ganttDiagramT4ZO3ILLBinding110.barHeight +
              ganttDiagramT4ZO3ILLBinding110.barGap);
          for (let ganttDiagramT4ZO3ILLBinding460 of ganttDiagramT4ZO3ILLBinding117)
            ganttDiagramT4ZO3ILLBinding118[ganttDiagramT4ZO3ILLBinding460] =
              ganttDiagramT4ZO3ILLBinding116.filter(
                (item) => item.type === ganttDiagramT4ZO3ILLBinding460,
              ).length;
        }
        ganttDiagramT4ZO3ILLBinding115.setAttribute(
          "viewBox",
          "0 0 " +
            ganttDiagramT4ZO3ILLBinding82 +
            " " +
            ganttDiagramT4ZO3ILLBinding119,
        );
        let ganttDiagramT4ZO3ILLBinding120 =
            ganttDiagramT4ZO3ILLBinding113.select(
              `[id="${ganttDiagramT4ZO3ILLInput2}"]`,
            ),
          ganttDiagramT4ZO3ILLBinding121 = appInitialRit()
            .domain([
              appInitialOat(
                ganttDiagramT4ZO3ILLBinding116,
                function (ganttDiagramT4ZO3ILLInput230) {
                  return ganttDiagramT4ZO3ILLInput230.startTime;
                },
              ),
              appInitialAat(
                ganttDiagramT4ZO3ILLBinding116,
                function (ganttDiagramT4ZO3ILLInput234) {
                  return ganttDiagramT4ZO3ILLInput234.endTime;
                },
              ),
            ])
            .rangeRound([
              0,
              ganttDiagramT4ZO3ILLBinding82 -
                ganttDiagramT4ZO3ILLBinding110.leftPadding -
                ganttDiagramT4ZO3ILLBinding110.rightPadding,
            ]);
        function ganttDiagramT4ZO3ILLHelper3(
          ganttDiagramT4ZO3ILLInput181,
          ganttDiagramT4ZO3ILLInput182,
        ) {
          let ganttDiagramT4ZO3ILLBinding428 =
              ganttDiagramT4ZO3ILLInput181.startTime,
            ganttDiagramT4ZO3ILLBinding429 =
              ganttDiagramT4ZO3ILLInput182.startTime,
            ganttDiagramT4ZO3ILLBinding430 = 0;
          return (
            ganttDiagramT4ZO3ILLBinding428 > ganttDiagramT4ZO3ILLBinding429
              ? (ganttDiagramT4ZO3ILLBinding430 = 1)
              : ganttDiagramT4ZO3ILLBinding428 <
                  ganttDiagramT4ZO3ILLBinding429 &&
                (ganttDiagramT4ZO3ILLBinding430 = -1),
            ganttDiagramT4ZO3ILLBinding430
          );
        }
        chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper3, "taskCompare");
        ganttDiagramT4ZO3ILLBinding116.sort(ganttDiagramT4ZO3ILLHelper3);
        ganttDiagramT4ZO3ILLHelper4(
          ganttDiagramT4ZO3ILLBinding116,
          ganttDiagramT4ZO3ILLBinding82,
          ganttDiagramT4ZO3ILLBinding119,
        );
        _chunkICPOFSXXC(
          ganttDiagramT4ZO3ILLBinding120,
          ganttDiagramT4ZO3ILLBinding119,
          ganttDiagramT4ZO3ILLBinding82,
          ganttDiagramT4ZO3ILLBinding110.useMaxWidth,
        );
        ganttDiagramT4ZO3ILLBinding120
          .append("text")
          .text(ganttDiagramT4ZO3ILLInput4.db.getDiagramTitle())
          .attr("x", ganttDiagramT4ZO3ILLBinding82 / 2)
          .attr("y", ganttDiagramT4ZO3ILLBinding110.titleTopMargin)
          .attr("class", "titleText");
        function ganttDiagramT4ZO3ILLHelper4(
          ganttDiagramT4ZO3ILLInput105,
          ganttDiagramT4ZO3ILLInput106,
          ganttDiagramT4ZO3ILLInput107,
        ) {
          let ganttDiagramT4ZO3ILLBinding361 =
              ganttDiagramT4ZO3ILLBinding110.barHeight,
            ganttDiagramT4ZO3ILLBinding362 =
              ganttDiagramT4ZO3ILLBinding361 +
              ganttDiagramT4ZO3ILLBinding110.barGap,
            ganttDiagramT4ZO3ILLBinding363 =
              ganttDiagramT4ZO3ILLBinding110.topPadding,
            ganttDiagramT4ZO3ILLBinding364 =
              ganttDiagramT4ZO3ILLBinding110.leftPadding,
            ganttDiagramT4ZO3ILLBinding365 = AppInitialMat()
              .domain([0, ganttDiagramT4ZO3ILLBinding117.length])
              .range(["#00B9FA", "#F95002"])
              .interpolate(appInitialRat);
          ganttDiagramT4ZO3ILLHelper6(
            ganttDiagramT4ZO3ILLBinding362,
            ganttDiagramT4ZO3ILLBinding363,
            ganttDiagramT4ZO3ILLBinding364,
            ganttDiagramT4ZO3ILLInput106,
            ganttDiagramT4ZO3ILLInput107,
            ganttDiagramT4ZO3ILLInput105,
            ganttDiagramT4ZO3ILLInput4.db.getExcludes(),
            ganttDiagramT4ZO3ILLInput4.db.getIncludes(),
          );
          ganttDiagramT4ZO3ILLHelper8(
            ganttDiagramT4ZO3ILLBinding364,
            ganttDiagramT4ZO3ILLBinding363,
            ganttDiagramT4ZO3ILLInput106,
            ganttDiagramT4ZO3ILLInput107,
          );
          ganttDiagramT4ZO3ILLHelper5(
            ganttDiagramT4ZO3ILLInput105,
            ganttDiagramT4ZO3ILLBinding362,
            ganttDiagramT4ZO3ILLBinding363,
            ganttDiagramT4ZO3ILLBinding364,
            ganttDiagramT4ZO3ILLBinding361,
            ganttDiagramT4ZO3ILLBinding365,
            ganttDiagramT4ZO3ILLInput106,
            ganttDiagramT4ZO3ILLInput107,
          );
          ganttDiagramT4ZO3ILLHelper9(
            ganttDiagramT4ZO3ILLBinding362,
            ganttDiagramT4ZO3ILLBinding363,
            ganttDiagramT4ZO3ILLBinding364,
            ganttDiagramT4ZO3ILLBinding361,
            ganttDiagramT4ZO3ILLBinding365,
          );
          ganttDiagramT4ZO3ILLHelper10(
            ganttDiagramT4ZO3ILLBinding364,
            ganttDiagramT4ZO3ILLBinding363,
            ganttDiagramT4ZO3ILLInput106,
            ganttDiagramT4ZO3ILLInput107,
          );
        }
        chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper4, "makeGantt");
        function ganttDiagramT4ZO3ILLHelper5(
          ganttDiagramT4ZO3ILLInput9,
          ganttDiagramT4ZO3ILLInput10,
          ganttDiagramT4ZO3ILLInput11,
          ganttDiagramT4ZO3ILLInput12,
          ganttDiagramT4ZO3ILLInput13,
          ganttDiagramT4ZO3ILLInput14,
          ganttDiagramT4ZO3ILLInput15,
        ) {
          ganttDiagramT4ZO3ILLInput9.sort(
            (ganttDiagramT4ZO3ILLInput254, ganttDiagramT4ZO3ILLInput255) =>
              ganttDiagramT4ZO3ILLInput254.vert ===
              ganttDiagramT4ZO3ILLInput255.vert
                ? 0
                : ganttDiagramT4ZO3ILLInput254.vert
                  ? 1
                  : -1,
          );
          let ganttDiagramT4ZO3ILLBinding155 = [
            ...new Set(ganttDiagramT4ZO3ILLInput9.map((item) => item.order)),
          ].map((item) =>
            ganttDiagramT4ZO3ILLInput9.find((_item) => _item.order === item),
          );
          ganttDiagramT4ZO3ILLBinding120
            .append("g")
            .selectAll("rect")
            .data(ganttDiagramT4ZO3ILLBinding155)
            .enter()
            .append("rect")
            .attr("x", 0)
            .attr(
              "y",
              function (
                ganttDiagramT4ZO3ILLInput208,
                ganttDiagramT4ZO3ILLInput209,
              ) {
                return (
                  (ganttDiagramT4ZO3ILLInput209 =
                    ganttDiagramT4ZO3ILLInput208.order),
                  ganttDiagramT4ZO3ILLInput209 * ganttDiagramT4ZO3ILLInput10 +
                    ganttDiagramT4ZO3ILLInput11 -
                    2
                );
              },
            )
            .attr("width", function () {
              return (
                ganttDiagramT4ZO3ILLInput15 -
                ganttDiagramT4ZO3ILLBinding110.rightPadding / 2
              );
            })
            .attr("height", ganttDiagramT4ZO3ILLInput10)
            .attr("class", function (ganttDiagramT4ZO3ILLInput166) {
              for (let [
                ganttDiagramT4ZO3ILLBinding441,
                ganttDiagramT4ZO3ILLBinding442,
              ] of ganttDiagramT4ZO3ILLBinding117.entries())
                if (
                  ganttDiagramT4ZO3ILLInput166.type ===
                  ganttDiagramT4ZO3ILLBinding442
                )
                  return (
                    "section section" +
                    (ganttDiagramT4ZO3ILLBinding441 %
                      ganttDiagramT4ZO3ILLBinding110.numberSectionStyles)
                  );
              return "section section0";
            })
            .enter();
          let ganttDiagramT4ZO3ILLBinding156 = ganttDiagramT4ZO3ILLBinding120
              .append("g")
              .selectAll("rect")
              .data(ganttDiagramT4ZO3ILLInput9)
              .enter(),
            ganttDiagramT4ZO3ILLBinding157 =
              ganttDiagramT4ZO3ILLInput4.db.getLinks();
          if (
            (ganttDiagramT4ZO3ILLBinding156
              .append("rect")
              .attr("id", function (ganttDiagramT4ZO3ILLInput223) {
                return (
                  ganttDiagramT4ZO3ILLInput2 +
                  "-" +
                  ganttDiagramT4ZO3ILLInput223.id
                );
              })
              .attr("rx", 3)
              .attr("ry", 3)
              .attr("x", function (ganttDiagramT4ZO3ILLInput148) {
                return ganttDiagramT4ZO3ILLInput148.milestone
                  ? ganttDiagramT4ZO3ILLBinding121(
                      ganttDiagramT4ZO3ILLInput148.startTime,
                    ) +
                      ganttDiagramT4ZO3ILLInput12 +
                      0.5 *
                        (ganttDiagramT4ZO3ILLBinding121(
                          ganttDiagramT4ZO3ILLInput148.endTime,
                        ) -
                          ganttDiagramT4ZO3ILLBinding121(
                            ganttDiagramT4ZO3ILLInput148.startTime,
                          )) -
                      0.5 * ganttDiagramT4ZO3ILLInput13
                  : ganttDiagramT4ZO3ILLBinding121(
                      ganttDiagramT4ZO3ILLInput148.startTime,
                    ) + ganttDiagramT4ZO3ILLInput12;
              })
              .attr(
                "y",
                function (
                  ganttDiagramT4ZO3ILLInput177,
                  ganttDiagramT4ZO3ILLInput178,
                ) {
                  return (
                    (ganttDiagramT4ZO3ILLInput178 =
                      ganttDiagramT4ZO3ILLInput177.order),
                    ganttDiagramT4ZO3ILLInput177.vert
                      ? ganttDiagramT4ZO3ILLBinding110.gridLineStartPadding
                      : ganttDiagramT4ZO3ILLInput178 *
                          ganttDiagramT4ZO3ILLInput10 +
                        ganttDiagramT4ZO3ILLInput11
                  );
                },
              )
              .attr("width", function (ganttDiagramT4ZO3ILLInput169) {
                return ganttDiagramT4ZO3ILLInput169.milestone
                  ? ganttDiagramT4ZO3ILLInput13
                  : ganttDiagramT4ZO3ILLInput169.vert
                    ? 0.08 * ganttDiagramT4ZO3ILLInput13
                    : ganttDiagramT4ZO3ILLBinding121(
                        ganttDiagramT4ZO3ILLInput169.renderEndTime ||
                          ganttDiagramT4ZO3ILLInput169.endTime,
                      ) -
                      ganttDiagramT4ZO3ILLBinding121(
                        ganttDiagramT4ZO3ILLInput169.startTime,
                      );
              })
              .attr("height", function (ganttDiagramT4ZO3ILLInput183) {
                return ganttDiagramT4ZO3ILLInput183.vert
                  ? ganttDiagramT4ZO3ILLBinding116.length *
                      (ganttDiagramT4ZO3ILLBinding110.barHeight +
                        ganttDiagramT4ZO3ILLBinding110.barGap) +
                      ganttDiagramT4ZO3ILLBinding110.barHeight * 2
                  : ganttDiagramT4ZO3ILLInput13;
              })
              .attr(
                "transform-origin",
                function (
                  ganttDiagramT4ZO3ILLInput115,
                  ganttDiagramT4ZO3ILLInput116,
                ) {
                  return (
                    (ganttDiagramT4ZO3ILLInput116 =
                      ganttDiagramT4ZO3ILLInput115.order),
                    (
                      ganttDiagramT4ZO3ILLBinding121(
                        ganttDiagramT4ZO3ILLInput115.startTime,
                      ) +
                      ganttDiagramT4ZO3ILLInput12 +
                      0.5 *
                        (ganttDiagramT4ZO3ILLBinding121(
                          ganttDiagramT4ZO3ILLInput115.endTime,
                        ) -
                          ganttDiagramT4ZO3ILLBinding121(
                            ganttDiagramT4ZO3ILLInput115.startTime,
                          ))
                    ).toString() +
                      "px " +
                      (
                        ganttDiagramT4ZO3ILLInput116 *
                          ganttDiagramT4ZO3ILLInput10 +
                        ganttDiagramT4ZO3ILLInput11 +
                        0.5 * ganttDiagramT4ZO3ILLInput13
                      ).toString() +
                      "px"
                  );
                },
              )
              .attr("class", function (ganttDiagramT4ZO3ILLInput73) {
                let ganttDiagramT4ZO3ILLBinding304 = "";
                ganttDiagramT4ZO3ILLInput73.classes.length > 0 &&
                  (ganttDiagramT4ZO3ILLBinding304 =
                    ganttDiagramT4ZO3ILLInput73.classes.join(" "));
                let ganttDiagramT4ZO3ILLBinding305 = 0;
                for (let [
                  ganttDiagramT4ZO3ILLBinding453,
                  ganttDiagramT4ZO3ILLBinding454,
                ] of ganttDiagramT4ZO3ILLBinding117.entries())
                  ganttDiagramT4ZO3ILLInput73.type ===
                    ganttDiagramT4ZO3ILLBinding454 &&
                    (ganttDiagramT4ZO3ILLBinding305 =
                      ganttDiagramT4ZO3ILLBinding453 %
                      ganttDiagramT4ZO3ILLBinding110.numberSectionStyles);
                let ganttDiagramT4ZO3ILLBinding306 = "";
                return (
                  ganttDiagramT4ZO3ILLInput73.active
                    ? ganttDiagramT4ZO3ILLInput73.crit
                      ? (ganttDiagramT4ZO3ILLBinding306 += " activeCrit")
                      : (ganttDiagramT4ZO3ILLBinding306 = " active")
                    : ganttDiagramT4ZO3ILLInput73.done
                      ? (ganttDiagramT4ZO3ILLBinding306 =
                          ganttDiagramT4ZO3ILLInput73.crit
                            ? " doneCrit"
                            : " done")
                      : ganttDiagramT4ZO3ILLInput73.crit &&
                        (ganttDiagramT4ZO3ILLBinding306 += " crit"),
                  ganttDiagramT4ZO3ILLBinding306.length === 0 &&
                    (ganttDiagramT4ZO3ILLBinding306 = " task"),
                  ganttDiagramT4ZO3ILLInput73.milestone &&
                    (ganttDiagramT4ZO3ILLBinding306 =
                      " milestone " + ganttDiagramT4ZO3ILLBinding306),
                  ganttDiagramT4ZO3ILLInput73.vert &&
                    (ganttDiagramT4ZO3ILLBinding306 =
                      " vert " + ganttDiagramT4ZO3ILLBinding306),
                  (ganttDiagramT4ZO3ILLBinding306 +=
                    ganttDiagramT4ZO3ILLBinding305),
                  (ganttDiagramT4ZO3ILLBinding306 +=
                    " " + ganttDiagramT4ZO3ILLBinding304),
                  "task" + ganttDiagramT4ZO3ILLBinding306
                );
              }),
            ganttDiagramT4ZO3ILLBinding156
              .append("text")
              .attr("id", function (ganttDiagramT4ZO3ILLInput214) {
                return (
                  ganttDiagramT4ZO3ILLInput2 +
                  "-" +
                  ganttDiagramT4ZO3ILLInput214.id +
                  "-text"
                );
              })
              .text(function (ganttDiagramT4ZO3ILLInput240) {
                return ganttDiagramT4ZO3ILLInput240.task;
              })
              .attr("font-size", ganttDiagramT4ZO3ILLBinding110.fontSize)
              .attr("x", function (ganttDiagramT4ZO3ILLInput90) {
                let ganttDiagramT4ZO3ILLBinding339 =
                    ganttDiagramT4ZO3ILLBinding121(
                      ganttDiagramT4ZO3ILLInput90.startTime,
                    ),
                  ganttDiagramT4ZO3ILLBinding340 =
                    ganttDiagramT4ZO3ILLBinding121(
                      ganttDiagramT4ZO3ILLInput90.renderEndTime ||
                        ganttDiagramT4ZO3ILLInput90.endTime,
                    );
                if (
                  (ganttDiagramT4ZO3ILLInput90.milestone &&
                    ((ganttDiagramT4ZO3ILLBinding339 +=
                      0.5 *
                        (ganttDiagramT4ZO3ILLBinding121(
                          ganttDiagramT4ZO3ILLInput90.endTime,
                        ) -
                          ganttDiagramT4ZO3ILLBinding121(
                            ganttDiagramT4ZO3ILLInput90.startTime,
                          )) -
                      0.5 * ganttDiagramT4ZO3ILLInput13),
                    (ganttDiagramT4ZO3ILLBinding340 =
                      ganttDiagramT4ZO3ILLBinding339 +
                      ganttDiagramT4ZO3ILLInput13)),
                  ganttDiagramT4ZO3ILLInput90.vert)
                )
                  return (
                    ganttDiagramT4ZO3ILLBinding121(
                      ganttDiagramT4ZO3ILLInput90.startTime,
                    ) + ganttDiagramT4ZO3ILLInput12
                  );
                let ganttDiagramT4ZO3ILLBinding341 = this.getBBox().width;
                return ganttDiagramT4ZO3ILLBinding341 >
                  ganttDiagramT4ZO3ILLBinding340 -
                    ganttDiagramT4ZO3ILLBinding339
                  ? ganttDiagramT4ZO3ILLBinding340 +
                      ganttDiagramT4ZO3ILLBinding341 +
                      1.5 * ganttDiagramT4ZO3ILLBinding110.leftPadding >
                    ganttDiagramT4ZO3ILLInput15
                    ? ganttDiagramT4ZO3ILLBinding339 +
                      ganttDiagramT4ZO3ILLInput12 -
                      5
                    : ganttDiagramT4ZO3ILLBinding340 +
                      ganttDiagramT4ZO3ILLInput12 +
                      5
                  : (ganttDiagramT4ZO3ILLBinding340 -
                      ganttDiagramT4ZO3ILLBinding339) /
                      2 +
                      ganttDiagramT4ZO3ILLBinding339 +
                      ganttDiagramT4ZO3ILLInput12;
              })
              .attr(
                "y",
                function (
                  ganttDiagramT4ZO3ILLInput139,
                  ganttDiagramT4ZO3ILLInput140,
                ) {
                  return ganttDiagramT4ZO3ILLInput139.vert
                    ? ganttDiagramT4ZO3ILLBinding110.gridLineStartPadding +
                        ganttDiagramT4ZO3ILLBinding116.length *
                          (ganttDiagramT4ZO3ILLBinding110.barHeight +
                            ganttDiagramT4ZO3ILLBinding110.barGap) +
                        60
                    : ((ganttDiagramT4ZO3ILLInput140 =
                        ganttDiagramT4ZO3ILLInput139.order),
                      ganttDiagramT4ZO3ILLInput140 *
                        ganttDiagramT4ZO3ILLInput10 +
                        ganttDiagramT4ZO3ILLBinding110.barHeight / 2 +
                        (ganttDiagramT4ZO3ILLBinding110.fontSize / 2 - 2) +
                        ganttDiagramT4ZO3ILLInput11);
                },
              )
              .attr("text-height", ganttDiagramT4ZO3ILLInput13)
              .attr("class", function (ganttDiagramT4ZO3ILLInput57) {
                let ganttDiagramT4ZO3ILLBinding235 =
                    ganttDiagramT4ZO3ILLBinding121(
                      ganttDiagramT4ZO3ILLInput57.startTime,
                    ),
                  ganttDiagramT4ZO3ILLBinding236 =
                    ganttDiagramT4ZO3ILLBinding121(
                      ganttDiagramT4ZO3ILLInput57.endTime,
                    );
                ganttDiagramT4ZO3ILLInput57.milestone &&
                  (ganttDiagramT4ZO3ILLBinding236 =
                    ganttDiagramT4ZO3ILLBinding235 +
                    ganttDiagramT4ZO3ILLInput13);
                let ganttDiagramT4ZO3ILLBinding237 = this.getBBox().width,
                  ganttDiagramT4ZO3ILLBinding238 = "";
                ganttDiagramT4ZO3ILLInput57.classes.length > 0 &&
                  (ganttDiagramT4ZO3ILLBinding238 =
                    ganttDiagramT4ZO3ILLInput57.classes.join(" "));
                let ganttDiagramT4ZO3ILLBinding239 = 0;
                for (let [
                  ganttDiagramT4ZO3ILLBinding455,
                  ganttDiagramT4ZO3ILLBinding456,
                ] of ganttDiagramT4ZO3ILLBinding117.entries())
                  ganttDiagramT4ZO3ILLInput57.type ===
                    ganttDiagramT4ZO3ILLBinding456 &&
                    (ganttDiagramT4ZO3ILLBinding239 =
                      ganttDiagramT4ZO3ILLBinding455 %
                      ganttDiagramT4ZO3ILLBinding110.numberSectionStyles);
                let ganttDiagramT4ZO3ILLBinding240 = "";
                return (
                  ganttDiagramT4ZO3ILLInput57.active &&
                    (ganttDiagramT4ZO3ILLBinding240 =
                      ganttDiagramT4ZO3ILLInput57.crit
                        ? "activeCritText" + ganttDiagramT4ZO3ILLBinding239
                        : "activeText" + ganttDiagramT4ZO3ILLBinding239),
                  ganttDiagramT4ZO3ILLInput57.done
                    ? (ganttDiagramT4ZO3ILLBinding240 =
                        ganttDiagramT4ZO3ILLInput57.crit
                          ? ganttDiagramT4ZO3ILLBinding240 +
                            " doneCritText" +
                            ganttDiagramT4ZO3ILLBinding239
                          : ganttDiagramT4ZO3ILLBinding240 +
                            " doneText" +
                            ganttDiagramT4ZO3ILLBinding239)
                    : ganttDiagramT4ZO3ILLInput57.crit &&
                      (ganttDiagramT4ZO3ILLBinding240 =
                        ganttDiagramT4ZO3ILLBinding240 +
                        " critText" +
                        ganttDiagramT4ZO3ILLBinding239),
                  ganttDiagramT4ZO3ILLInput57.milestone &&
                    (ganttDiagramT4ZO3ILLBinding240 += " milestoneText"),
                  ganttDiagramT4ZO3ILLInput57.vert &&
                    (ganttDiagramT4ZO3ILLBinding240 += " vertText"),
                  ganttDiagramT4ZO3ILLBinding237 >
                  ganttDiagramT4ZO3ILLBinding236 -
                    ganttDiagramT4ZO3ILLBinding235
                    ? ganttDiagramT4ZO3ILLBinding236 +
                        ganttDiagramT4ZO3ILLBinding237 +
                        1.5 * ganttDiagramT4ZO3ILLBinding110.leftPadding >
                      ganttDiagramT4ZO3ILLInput15
                      ? ganttDiagramT4ZO3ILLBinding238 +
                        " taskTextOutsideLeft taskTextOutside" +
                        ganttDiagramT4ZO3ILLBinding239 +
                        " " +
                        ganttDiagramT4ZO3ILLBinding240
                      : ganttDiagramT4ZO3ILLBinding238 +
                        " taskTextOutsideRight taskTextOutside" +
                        ganttDiagramT4ZO3ILLBinding239 +
                        " " +
                        ganttDiagramT4ZO3ILLBinding240 +
                        " width-" +
                        ganttDiagramT4ZO3ILLBinding237
                    : ganttDiagramT4ZO3ILLBinding238 +
                      " taskText taskText" +
                      ganttDiagramT4ZO3ILLBinding239 +
                      " " +
                      ganttDiagramT4ZO3ILLBinding240 +
                      " width-" +
                      ganttDiagramT4ZO3ILLBinding237
                );
              }),
            chunkICPOFSXXB().securityLevel === "sandbox")
          ) {
            let ganttDiagramT4ZO3ILLBinding318;
            ganttDiagramT4ZO3ILLBinding318 = srcR(
              "#i" + ganttDiagramT4ZO3ILLInput2,
            );
            let ganttDiagramT4ZO3ILLBinding319 =
              ganttDiagramT4ZO3ILLBinding318.nodes()[0].contentDocument;
            ganttDiagramT4ZO3ILLBinding156
              .filter(function (item) {
                return ganttDiagramT4ZO3ILLBinding157.has(item.id);
              })
              .each(function (ganttDiagramT4ZO3ILLInput95) {
                var ganttDiagramT4ZO3ILLBinding349 =
                    ganttDiagramT4ZO3ILLBinding319.querySelector(
                      "#" +
                        CSS.escape(
                          ganttDiagramT4ZO3ILLInput2 +
                            "-" +
                            ganttDiagramT4ZO3ILLInput95.id,
                        ),
                    ),
                  ganttDiagramT4ZO3ILLBinding350 =
                    ganttDiagramT4ZO3ILLBinding319.querySelector(
                      "#" +
                        CSS.escape(
                          ganttDiagramT4ZO3ILLInput2 +
                            "-" +
                            ganttDiagramT4ZO3ILLInput95.id +
                            "-text",
                        ),
                    );
                let ganttDiagramT4ZO3ILLBinding351 =
                  ganttDiagramT4ZO3ILLBinding349.parentNode;
                var ganttDiagramT4ZO3ILLBinding352 =
                  ganttDiagramT4ZO3ILLBinding319.createElement("a");
                ganttDiagramT4ZO3ILLBinding352.setAttribute(
                  "xlink:href",
                  ganttDiagramT4ZO3ILLBinding157.get(
                    ganttDiagramT4ZO3ILLInput95.id,
                  ),
                );
                ganttDiagramT4ZO3ILLBinding352.setAttribute("target", "_top");
                ganttDiagramT4ZO3ILLBinding351.appendChild(
                  ganttDiagramT4ZO3ILLBinding352,
                );
                ganttDiagramT4ZO3ILLBinding352.appendChild(
                  ganttDiagramT4ZO3ILLBinding349,
                );
                ganttDiagramT4ZO3ILLBinding352.appendChild(
                  ganttDiagramT4ZO3ILLBinding350,
                );
              });
          }
        }
        chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper5, "drawRects");
        function ganttDiagramT4ZO3ILLHelper6(
          ganttDiagramT4ZO3ILLInput41,
          ganttDiagramT4ZO3ILLInput42,
          ganttDiagramT4ZO3ILLInput43,
          ganttDiagramT4ZO3ILLInput44,
          ganttDiagramT4ZO3ILLInput45,
          ganttDiagramT4ZO3ILLInput46,
          ganttDiagramT4ZO3ILLInput47,
          ganttDiagramT4ZO3ILLInput48,
        ) {
          if (
            ganttDiagramT4ZO3ILLInput47.length === 0 &&
            ganttDiagramT4ZO3ILLInput48.length === 0
          )
            return;
          let ganttDiagramT4ZO3ILLBinding212, ganttDiagramT4ZO3ILLBinding213;
          for (let { startTime, endTime } of ganttDiagramT4ZO3ILLInput46) {
            (ganttDiagramT4ZO3ILLBinding212 === undefined ||
              startTime < ganttDiagramT4ZO3ILLBinding212) &&
              (ganttDiagramT4ZO3ILLBinding212 = startTime);
            (ganttDiagramT4ZO3ILLBinding213 === undefined ||
              endTime > ganttDiagramT4ZO3ILLBinding213) &&
              (ganttDiagramT4ZO3ILLBinding213 = endTime);
          }
          if (
            !ganttDiagramT4ZO3ILLBinding212 ||
            !ganttDiagramT4ZO3ILLBinding213
          )
            return;
          if (
            ganttDiagramT4ZO3ILLBinding9
              .default(ganttDiagramT4ZO3ILLBinding213)
              .diff(
                ganttDiagramT4ZO3ILLBinding9.default(
                  ganttDiagramT4ZO3ILLBinding212,
                ),
                "year",
              ) > 5
          ) {
            chunkAGHRB4JFI.warn(
              "The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.",
            );
            return;
          }
          let ganttDiagramT4ZO3ILLBinding214 =
              ganttDiagramT4ZO3ILLInput4.db.getDateFormat(),
            ganttDiagramT4ZO3ILLBinding215 = [],
            ganttDiagramT4ZO3ILLBinding216 = null,
            ganttDiagramT4ZO3ILLBinding217 =
              ganttDiagramT4ZO3ILLBinding9.default(
                ganttDiagramT4ZO3ILLBinding212,
              );
          for (
            ;
            ganttDiagramT4ZO3ILLBinding217.valueOf() <=
            ganttDiagramT4ZO3ILLBinding213;
          ) {
            ganttDiagramT4ZO3ILLInput4.db.isInvalidDate(
              ganttDiagramT4ZO3ILLBinding217,
              ganttDiagramT4ZO3ILLBinding214,
              ganttDiagramT4ZO3ILLInput47,
              ganttDiagramT4ZO3ILLInput48,
            )
              ? ganttDiagramT4ZO3ILLBinding216
                ? (ganttDiagramT4ZO3ILLBinding216.end =
                    ganttDiagramT4ZO3ILLBinding217)
                : (ganttDiagramT4ZO3ILLBinding216 = {
                    start: ganttDiagramT4ZO3ILLBinding217,
                    end: ganttDiagramT4ZO3ILLBinding217,
                  })
              : (ganttDiagramT4ZO3ILLBinding216 &&=
                  (ganttDiagramT4ZO3ILLBinding215.push(
                    ganttDiagramT4ZO3ILLBinding216,
                  ),
                  null));
            ganttDiagramT4ZO3ILLBinding217 = ganttDiagramT4ZO3ILLBinding217.add(
              1,
              "d",
            );
          }
          ganttDiagramT4ZO3ILLBinding120
            .append("g")
            .selectAll("rect")
            .data(ganttDiagramT4ZO3ILLBinding215)
            .enter()
            .append("rect")
            .attr(
              "id",
              (ganttDiagramT4ZO3ILLInput252) =>
                ganttDiagramT4ZO3ILLInput2 +
                "-exclude-" +
                ganttDiagramT4ZO3ILLInput252.start.format("YYYY-MM-DD"),
            )
            .attr(
              "x",
              (ganttDiagramT4ZO3ILLInput258) =>
                ganttDiagramT4ZO3ILLBinding121(
                  ganttDiagramT4ZO3ILLInput258.start.startOf("day"),
                ) + ganttDiagramT4ZO3ILLInput43,
            )
            .attr("y", ganttDiagramT4ZO3ILLBinding110.gridLineStartPadding)
            .attr(
              "width",
              (ganttDiagramT4ZO3ILLInput248) =>
                ganttDiagramT4ZO3ILLBinding121(
                  ganttDiagramT4ZO3ILLInput248.end.endOf("day"),
                ) -
                ganttDiagramT4ZO3ILLBinding121(
                  ganttDiagramT4ZO3ILLInput248.start.startOf("day"),
                ),
            )
            .attr(
              "height",
              ganttDiagramT4ZO3ILLInput45 -
                ganttDiagramT4ZO3ILLInput42 -
                ganttDiagramT4ZO3ILLBinding110.gridLineStartPadding,
            )
            .attr(
              "transform-origin",
              function (
                ganttDiagramT4ZO3ILLInput152,
                ganttDiagramT4ZO3ILLInput153,
              ) {
                return (
                  (
                    ganttDiagramT4ZO3ILLBinding121(
                      ganttDiagramT4ZO3ILLInput152.start,
                    ) +
                    ganttDiagramT4ZO3ILLInput43 +
                    0.5 *
                      (ganttDiagramT4ZO3ILLBinding121(
                        ganttDiagramT4ZO3ILLInput152.end,
                      ) -
                        ganttDiagramT4ZO3ILLBinding121(
                          ganttDiagramT4ZO3ILLInput152.start,
                        ))
                  ).toString() +
                  "px " +
                  (
                    ganttDiagramT4ZO3ILLInput153 * ganttDiagramT4ZO3ILLInput41 +
                    0.5 * ganttDiagramT4ZO3ILLInput45
                  ).toString() +
                  "px"
                );
              },
            )
            .attr("class", "exclude-range");
        }
        chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper6, "drawExcludeDays");
        function ganttDiagramT4ZO3ILLHelper7(
          ganttDiagramT4ZO3ILLInput159,
          ganttDiagramT4ZO3ILLInput160,
          ganttDiagramT4ZO3ILLInput161,
          ganttDiagramT4ZO3ILLInput162,
        ) {
          if (
            ganttDiagramT4ZO3ILLInput161 <= 0 ||
            ganttDiagramT4ZO3ILLInput159 > ganttDiagramT4ZO3ILLInput160
          )
            return 1 / 0;
          let ganttDiagramT4ZO3ILLBinding412 =
              ganttDiagramT4ZO3ILLInput160 - ganttDiagramT4ZO3ILLInput159,
            ganttDiagramT4ZO3ILLBinding413 =
              ganttDiagramT4ZO3ILLBinding9.default
                .duration({
                  [ganttDiagramT4ZO3ILLInput162 ?? "day"]:
                    ganttDiagramT4ZO3ILLInput161,
                })
                .asMilliseconds();
          return ganttDiagramT4ZO3ILLBinding413 <= 0
            ? 1 / 0
            : Math.ceil(
                ganttDiagramT4ZO3ILLBinding412 / ganttDiagramT4ZO3ILLBinding413,
              );
        }
        chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper7, "getEstimatedTickCount");
        function ganttDiagramT4ZO3ILLHelper8(
          ganttDiagramT4ZO3ILLInput25,
          ganttDiagramT4ZO3ILLInput26,
          ganttDiagramT4ZO3ILLInput27,
          ganttDiagramT4ZO3ILLInput28,
        ) {
          let ganttDiagramT4ZO3ILLBinding189 =
              ganttDiagramT4ZO3ILLInput4.db.getDateFormat(),
            ganttDiagramT4ZO3ILLBinding190 =
              ganttDiagramT4ZO3ILLInput4.db.getAxisFormat(),
            ganttDiagramT4ZO3ILLBinding191;
          ganttDiagramT4ZO3ILLBinding191 =
            ganttDiagramT4ZO3ILLBinding190 ||
            (ganttDiagramT4ZO3ILLBinding189 === "D"
              ? "%d"
              : (ganttDiagramT4ZO3ILLBinding110.axisFormat ?? "%Y-%m-%d"));
          let ganttDiagramT4ZO3ILLBinding192 = srcI(
              ganttDiagramT4ZO3ILLBinding121,
            )
              .tickSize(
                -ganttDiagramT4ZO3ILLInput28 +
                  ganttDiagramT4ZO3ILLInput26 +
                  ganttDiagramT4ZO3ILLBinding110.gridLineStartPadding,
              )
              .tickFormat(AppInitialVit(ganttDiagramT4ZO3ILLBinding191)),
            ganttDiagramT4ZO3ILLBinding193 =
              /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(
                ganttDiagramT4ZO3ILLInput4.db.getTickInterval() ||
                  ganttDiagramT4ZO3ILLBinding110.tickInterval,
              );
          if (ganttDiagramT4ZO3ILLBinding193 !== null) {
            let ganttDiagramT4ZO3ILLBinding241 = parseInt(
              ganttDiagramT4ZO3ILLBinding193[1],
              10,
            );
            if (
              isNaN(ganttDiagramT4ZO3ILLBinding241) ||
              ganttDiagramT4ZO3ILLBinding241 <= 0
            )
              chunkAGHRB4JFI.warn(
                `Invalid tick interval value: "${ganttDiagramT4ZO3ILLBinding193[1]}". Skipping custom tick interval.`,
              );
            else {
              let ganttDiagramT4ZO3ILLBinding268 =
                  ganttDiagramT4ZO3ILLBinding193[2],
                ganttDiagramT4ZO3ILLBinding269 =
                  ganttDiagramT4ZO3ILLInput4.db.getWeekday() ||
                  ganttDiagramT4ZO3ILLBinding110.weekday,
                ganttDiagramT4ZO3ILLBinding270 =
                  ganttDiagramT4ZO3ILLBinding121.domain(),
                ganttDiagramT4ZO3ILLBinding271 =
                  ganttDiagramT4ZO3ILLBinding270[0],
                ganttDiagramT4ZO3ILLBinding272 =
                  ganttDiagramT4ZO3ILLBinding270[1],
                ganttDiagramT4ZO3ILLBinding273 = ganttDiagramT4ZO3ILLHelper7(
                  ganttDiagramT4ZO3ILLBinding271,
                  ganttDiagramT4ZO3ILLBinding272,
                  ganttDiagramT4ZO3ILLBinding241,
                  ganttDiagramT4ZO3ILLBinding268,
                );
              if (ganttDiagramT4ZO3ILLBinding273 > $)
                chunkAGHRB4JFI.warn(
                  `The tick interval "${ganttDiagramT4ZO3ILLBinding241}${ganttDiagramT4ZO3ILLBinding268}" would generate ${ganttDiagramT4ZO3ILLBinding273} ticks, which exceeds the maximum allowed (${$}). This may indicate an invalid date or time range. Skipping custom tick interval.`,
                );
              else
                switch (ganttDiagramT4ZO3ILLBinding268) {
                  case "millisecond":
                    ganttDiagramT4ZO3ILLBinding192.ticks(
                      AppInitialCat.every(ganttDiagramT4ZO3ILLBinding241),
                    );
                    break;
                  case "second":
                    ganttDiagramT4ZO3ILLBinding192.ticks(
                      _appInitialOat.every(ganttDiagramT4ZO3ILLBinding241),
                    );
                    break;
                  case "minute":
                    ganttDiagramT4ZO3ILLBinding192.ticks(
                      AppInitialIat.every(ganttDiagramT4ZO3ILLBinding241),
                    );
                    break;
                  case "hour":
                    ganttDiagramT4ZO3ILLBinding192.ticks(
                      AppInitialNat.every(ganttDiagramT4ZO3ILLBinding241),
                    );
                    break;
                  case "day":
                    ganttDiagramT4ZO3ILLBinding192.ticks(
                      appInitialEat.every(ganttDiagramT4ZO3ILLBinding241),
                    );
                    break;
                  case "week":
                    ganttDiagramT4ZO3ILLBinding192.ticks(
                      ganttDiagramT4ZO3ILLBinding80[
                        ganttDiagramT4ZO3ILLBinding269
                      ].every(ganttDiagramT4ZO3ILLBinding241),
                    );
                    break;
                  case "month":
                    ganttDiagramT4ZO3ILLBinding192.ticks(
                      appInitialWit.every(ganttDiagramT4ZO3ILLBinding241),
                    );
                    break;
                }
            }
          }
          if (
            (ganttDiagramT4ZO3ILLBinding120
              .append("g")
              .attr("class", "grid")
              .attr(
                "transform",
                "translate(" +
                  ganttDiagramT4ZO3ILLInput25 +
                  ", " +
                  (ganttDiagramT4ZO3ILLInput28 - 50) +
                  ")",
              )
              .call(ganttDiagramT4ZO3ILLBinding192)
              .selectAll("text")
              .style("text-anchor", "middle")
              .attr("fill", "#000")
              .attr("stroke", "none")
              .attr("font-size", 10)
              .attr("dy", "1em"),
            ganttDiagramT4ZO3ILLInput4.db.topAxisEnabled() ||
              ganttDiagramT4ZO3ILLBinding110.topAxis)
          ) {
            let ganttDiagramT4ZO3ILLBinding211 = srcA(
              ganttDiagramT4ZO3ILLBinding121,
            )
              .tickSize(
                -ganttDiagramT4ZO3ILLInput28 +
                  ganttDiagramT4ZO3ILLInput26 +
                  ganttDiagramT4ZO3ILLBinding110.gridLineStartPadding,
              )
              .tickFormat(AppInitialVit(ganttDiagramT4ZO3ILLBinding191));
            if (ganttDiagramT4ZO3ILLBinding193 !== null) {
              let ganttDiagramT4ZO3ILLBinding264 = parseInt(
                ganttDiagramT4ZO3ILLBinding193[1],
                10,
              );
              if (
                isNaN(ganttDiagramT4ZO3ILLBinding264) ||
                ganttDiagramT4ZO3ILLBinding264 <= 0
              )
                chunkAGHRB4JFI.warn(
                  `Invalid tick interval value: "${ganttDiagramT4ZO3ILLBinding193[1]}". Skipping custom tick interval.`,
                );
              else {
                let ganttDiagramT4ZO3ILLBinding295 =
                    ganttDiagramT4ZO3ILLBinding193[2],
                  ganttDiagramT4ZO3ILLBinding296 =
                    ganttDiagramT4ZO3ILLInput4.db.getWeekday() ||
                    ganttDiagramT4ZO3ILLBinding110.weekday,
                  ganttDiagramT4ZO3ILLBinding297 =
                    ganttDiagramT4ZO3ILLBinding121.domain(),
                  ganttDiagramT4ZO3ILLBinding298 =
                    ganttDiagramT4ZO3ILLBinding297[0],
                  ganttDiagramT4ZO3ILLBinding299 =
                    ganttDiagramT4ZO3ILLBinding297[1];
                if (
                  ganttDiagramT4ZO3ILLHelper7(
                    ganttDiagramT4ZO3ILLBinding298,
                    ganttDiagramT4ZO3ILLBinding299,
                    ganttDiagramT4ZO3ILLBinding264,
                    ganttDiagramT4ZO3ILLBinding295,
                  ) <= $
                )
                  switch (ganttDiagramT4ZO3ILLBinding295) {
                    case "millisecond":
                      ganttDiagramT4ZO3ILLBinding211.ticks(
                        AppInitialCat.every(ganttDiagramT4ZO3ILLBinding264),
                      );
                      break;
                    case "second":
                      ganttDiagramT4ZO3ILLBinding211.ticks(
                        _appInitialOat.every(ganttDiagramT4ZO3ILLBinding264),
                      );
                      break;
                    case "minute":
                      ganttDiagramT4ZO3ILLBinding211.ticks(
                        AppInitialIat.every(ganttDiagramT4ZO3ILLBinding264),
                      );
                      break;
                    case "hour":
                      ganttDiagramT4ZO3ILLBinding211.ticks(
                        AppInitialNat.every(ganttDiagramT4ZO3ILLBinding264),
                      );
                      break;
                    case "day":
                      ganttDiagramT4ZO3ILLBinding211.ticks(
                        appInitialEat.every(ganttDiagramT4ZO3ILLBinding264),
                      );
                      break;
                    case "week":
                      ganttDiagramT4ZO3ILLBinding211.ticks(
                        ganttDiagramT4ZO3ILLBinding80[
                          ganttDiagramT4ZO3ILLBinding296
                        ].every(ganttDiagramT4ZO3ILLBinding264),
                      );
                      break;
                    case "month":
                      ganttDiagramT4ZO3ILLBinding211.ticks(
                        appInitialWit.every(ganttDiagramT4ZO3ILLBinding264),
                      );
                      break;
                  }
              }
            }
            ganttDiagramT4ZO3ILLBinding120
              .append("g")
              .attr("class", "grid")
              .attr(
                "transform",
                "translate(" +
                  ganttDiagramT4ZO3ILLInput25 +
                  ", " +
                  ganttDiagramT4ZO3ILLInput26 +
                  ")",
              )
              .call(ganttDiagramT4ZO3ILLBinding211)
              .selectAll("text")
              .style("text-anchor", "middle")
              .attr("fill", "#000")
              .attr("stroke", "none")
              .attr("font-size", 10);
          }
        }
        chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper8, "makeGrid");
        function ganttDiagramT4ZO3ILLHelper9(
          ganttDiagramT4ZO3ILLInput54,
          ganttDiagramT4ZO3ILLInput55,
        ) {
          let ganttDiagramT4ZO3ILLBinding224 = 0,
            ganttDiagramT4ZO3ILLBinding225 = Object.keys(
              ganttDiagramT4ZO3ILLBinding118,
            ).map((item) => [item, ganttDiagramT4ZO3ILLBinding118[item]]);
          ganttDiagramT4ZO3ILLBinding120
            .append("g")
            .selectAll("text")
            .data(ganttDiagramT4ZO3ILLBinding225)
            .enter()
            .append(function (ganttDiagramT4ZO3ILLInput80) {
              let ganttDiagramT4ZO3ILLBinding320 =
                  ganttDiagramT4ZO3ILLInput80[0].split(
                    chunkICPOFSXXS.lineBreakRegex,
                  ),
                ganttDiagramT4ZO3ILLBinding321 =
                  -(ganttDiagramT4ZO3ILLBinding320.length - 1) / 2,
                ganttDiagramT4ZO3ILLBinding322 =
                  ganttDiagramT4ZO3ILLBinding114.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "text",
                  );
              ganttDiagramT4ZO3ILLBinding322.setAttribute(
                "dy",
                ganttDiagramT4ZO3ILLBinding321 + "em",
              );
              for (let [
                ganttDiagramT4ZO3ILLBinding370,
                ganttDiagramT4ZO3ILLBinding371,
              ] of ganttDiagramT4ZO3ILLBinding320.entries()) {
                let ganttDiagramT4ZO3ILLBinding373 =
                  ganttDiagramT4ZO3ILLBinding114.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "tspan",
                  );
                ganttDiagramT4ZO3ILLBinding373.setAttribute(
                  "alignment-baseline",
                  "central",
                );
                ganttDiagramT4ZO3ILLBinding373.setAttribute("x", "10");
                ganttDiagramT4ZO3ILLBinding370 > 0 &&
                  ganttDiagramT4ZO3ILLBinding373.setAttribute("dy", "1em");
                ganttDiagramT4ZO3ILLBinding373.textContent =
                  ganttDiagramT4ZO3ILLBinding371;
                ganttDiagramT4ZO3ILLBinding322.appendChild(
                  ganttDiagramT4ZO3ILLBinding373,
                );
              }
              return ganttDiagramT4ZO3ILLBinding322;
            })
            .attr("x", 10)
            .attr(
              "y",
              function (
                ganttDiagramT4ZO3ILLInput167,
                ganttDiagramT4ZO3ILLInput168,
              ) {
                if (ganttDiagramT4ZO3ILLInput168 > 0)
                  for (
                    let ganttDiagramT4ZO3ILLBinding450 = 0;
                    ganttDiagramT4ZO3ILLBinding450 <
                    ganttDiagramT4ZO3ILLInput168;
                    ganttDiagramT4ZO3ILLBinding450++
                  )
                    return (
                      (ganttDiagramT4ZO3ILLBinding224 +=
                        ganttDiagramT4ZO3ILLBinding225[
                          ganttDiagramT4ZO3ILLInput168 - 1
                        ][1]),
                      (ganttDiagramT4ZO3ILLInput167[1] *
                        ganttDiagramT4ZO3ILLInput54) /
                        2 +
                        ganttDiagramT4ZO3ILLBinding224 *
                          ganttDiagramT4ZO3ILLInput54 +
                        ganttDiagramT4ZO3ILLInput55
                    );
                else
                  return (
                    (ganttDiagramT4ZO3ILLInput167[1] *
                      ganttDiagramT4ZO3ILLInput54) /
                      2 +
                    ganttDiagramT4ZO3ILLInput55
                  );
              },
            )
            .attr("font-size", ganttDiagramT4ZO3ILLBinding110.sectionFontSize)
            .attr("class", function (ganttDiagramT4ZO3ILLInput147) {
              for (let [
                ganttDiagramT4ZO3ILLBinding425,
                ganttDiagramT4ZO3ILLBinding426,
              ] of ganttDiagramT4ZO3ILLBinding117.entries())
                if (
                  ganttDiagramT4ZO3ILLInput147[0] ===
                  ganttDiagramT4ZO3ILLBinding426
                )
                  return (
                    "sectionTitle sectionTitle" +
                    (ganttDiagramT4ZO3ILLBinding425 %
                      ganttDiagramT4ZO3ILLBinding110.numberSectionStyles)
                  );
              return "sectionTitle";
            });
        }
        chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper9, "vertLabels");
        function ganttDiagramT4ZO3ILLHelper10(
          ganttDiagramT4ZO3ILLInput101,
          ganttDiagramT4ZO3ILLInput102,
          ganttDiagramT4ZO3ILLInput103,
          ganttDiagramT4ZO3ILLInput104,
        ) {
          let ganttDiagramT4ZO3ILLBinding357 =
            ganttDiagramT4ZO3ILLInput4.db.getTodayMarker();
          if (ganttDiagramT4ZO3ILLBinding357 === "off") return;
          let ganttDiagramT4ZO3ILLBinding358 = ganttDiagramT4ZO3ILLBinding120
              .append("g")
              .attr("class", "today"),
            ganttDiagramT4ZO3ILLBinding359 = new Date(),
            ganttDiagramT4ZO3ILLBinding360 =
              ganttDiagramT4ZO3ILLBinding358.append("line");
          ganttDiagramT4ZO3ILLBinding360
            .attr(
              "x1",
              ganttDiagramT4ZO3ILLBinding121(ganttDiagramT4ZO3ILLBinding359) +
                ganttDiagramT4ZO3ILLInput101,
            )
            .attr(
              "x2",
              ganttDiagramT4ZO3ILLBinding121(ganttDiagramT4ZO3ILLBinding359) +
                ganttDiagramT4ZO3ILLInput101,
            )
            .attr("y1", ganttDiagramT4ZO3ILLBinding110.titleTopMargin)
            .attr(
              "y2",
              ganttDiagramT4ZO3ILLInput104 -
                ganttDiagramT4ZO3ILLBinding110.titleTopMargin,
            )
            .attr("class", "today");
          ganttDiagramT4ZO3ILLBinding357 !== "" &&
            ganttDiagramT4ZO3ILLBinding360.attr(
              "style",
              ganttDiagramT4ZO3ILLBinding357.replace(/,/g, ";"),
            );
        }
        chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper10, "drawToday");
        function ganttDiagramT4ZO3ILLHelper11(ganttDiagramT4ZO3ILLInput150) {
          let ganttDiagramT4ZO3ILLBinding403 = {},
            ganttDiagramT4ZO3ILLBinding404 = [];
          for (
            let ganttDiagramT4ZO3ILLBinding438 = 0,
              ganttDiagramT4ZO3ILLBinding439 =
                ganttDiagramT4ZO3ILLInput150.length;
            ganttDiagramT4ZO3ILLBinding438 < ganttDiagramT4ZO3ILLBinding439;
            ++ganttDiagramT4ZO3ILLBinding438
          )
            Object.prototype.hasOwnProperty.call(
              ganttDiagramT4ZO3ILLBinding403,
              ganttDiagramT4ZO3ILLInput150[ganttDiagramT4ZO3ILLBinding438],
            ) ||
              ((ganttDiagramT4ZO3ILLBinding403[
                ganttDiagramT4ZO3ILLInput150[ganttDiagramT4ZO3ILLBinding438]
              ] = true),
              ganttDiagramT4ZO3ILLBinding404.push(
                ganttDiagramT4ZO3ILLInput150[ganttDiagramT4ZO3ILLBinding438],
              ));
          return ganttDiagramT4ZO3ILLBinding404;
        }
        chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper11, "checkUnique");
      }, "draw"),
    },
    styles: chunkAGHRB4JFN(
      (ganttDiagramT4ZO3ILLInput17) => `
  .mermaid-main-font {
        font-family: ${ganttDiagramT4ZO3ILLInput17.fontFamily};
  }

  .exclude-range {
    fill: ${ganttDiagramT4ZO3ILLInput17.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${ganttDiagramT4ZO3ILLInput17.sectionBkgColor};
  }

  .section2 {
    fill: ${ganttDiagramT4ZO3ILLInput17.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${ganttDiagramT4ZO3ILLInput17.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${ganttDiagramT4ZO3ILLInput17.titleColor};
  }

  .sectionTitle1 {
    fill: ${ganttDiagramT4ZO3ILLInput17.titleColor};
  }

  .sectionTitle2 {
    fill: ${ganttDiagramT4ZO3ILLInput17.titleColor};
  }

  .sectionTitle3 {
    fill: ${ganttDiagramT4ZO3ILLInput17.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${ganttDiagramT4ZO3ILLInput17.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${ganttDiagramT4ZO3ILLInput17.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${ganttDiagramT4ZO3ILLInput17.fontFamily};
    fill: ${ganttDiagramT4ZO3ILLInput17.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${ganttDiagramT4ZO3ILLInput17.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${ganttDiagramT4ZO3ILLInput17.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextDarkColor};
    text-anchor: start;
    font-family: ${ganttDiagramT4ZO3ILLInput17.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${ganttDiagramT4ZO3ILLInput17.taskBkgColor};
    stroke: ${ganttDiagramT4ZO3ILLInput17.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${ganttDiagramT4ZO3ILLInput17.activeTaskBkgColor};
    stroke: ${ganttDiagramT4ZO3ILLInput17.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${ganttDiagramT4ZO3ILLInput17.doneTaskBorderColor};
    fill: ${ganttDiagramT4ZO3ILLInput17.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${ganttDiagramT4ZO3ILLInput17.critBorderColor};
    fill: ${ganttDiagramT4ZO3ILLInput17.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${ganttDiagramT4ZO3ILLInput17.critBorderColor};
    fill: ${ganttDiagramT4ZO3ILLInput17.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${ganttDiagramT4ZO3ILLInput17.critBorderColor};
    fill: ${ganttDiagramT4ZO3ILLInput17.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar \u2014 same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${ganttDiagramT4ZO3ILLInput17.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${ganttDiagramT4ZO3ILLInput17.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${ganttDiagramT4ZO3ILLInput17.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${ganttDiagramT4ZO3ILLInput17.titleColor || ganttDiagramT4ZO3ILLInput17.textColor};
    font-family: ${ganttDiagramT4ZO3ILLInput17.fontFamily};
  }
`,
      "getStyles",
    ),
  };
})();
export { GanttDiagramT4ZO3ILL as diagram };
