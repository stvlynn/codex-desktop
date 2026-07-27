// Restored from ref/webview/assets/ganttDiagram-LVOFAZNH-CC069QJE.js
// Mermaid gantt diagram definition (primary). app-initial d3-time/scale/array/interpolate aliases → vendor shims.
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
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  dayjsCommonJsModule as chunkAGHRB4JFO,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../../utils/dayjs-core-alt-dup";
import {
  B as chunkABZYJK2DB,
  C as chunkABZYJK2DC,
  V as chunkABZYJK2DV,
  W as chunkABZYJK2DW,
  _ as chunkABZYJK2DUnderscore,
  a as chunkABZYJK2DA,
  b as _chunkABZYJK2DB,
  c as _chunkABZYJK2DC,
  k as chunkABZYJK2DK,
  s as chunkABZYJK2DS,
  v as _chunkABZYJK2DV,
} from "../../diagrams/mermaid-config";
import {
  axisTop as srcA,
  axisBottom as srcI,
  select as srcR,
  ensureD3SelectionRuntimeT as srcT,
} from "../../vendor/d3-axis-current-runtime";
import { dist } from "../../vendor/sanitize-url";
import { chunkS3R3BYOJG, chunkS3R3BYOJU } from "./mermaid-common-utils";
var ganttDiagramLVOFAZNHBinding1 = commonJsInit(
    (ganttDiagramLVOFAZNHInput49, ganttDiagramLVOFAZNHInput50) => {
      (function (ganttDiagramLVOFAZNHInput129, ganttDiagramLVOFAZNHInput130) {
        typeof ganttDiagramLVOFAZNHInput49 == "object" &&
        ganttDiagramLVOFAZNHInput50 !== undefined
          ? (ganttDiagramLVOFAZNHInput50.exports =
              ganttDiagramLVOFAZNHInput130())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramLVOFAZNHInput130)
            : ((ganttDiagramLVOFAZNHInput129 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramLVOFAZNHInput129 || self).dayjs_plugin_isoWeek =
                ganttDiagramLVOFAZNHInput130());
      })(ganttDiagramLVOFAZNHInput49, function () {
        return function (
          ganttDiagramLVOFAZNHInput56,
          ganttDiagramLVOFAZNHInput57,
          ganttDiagramLVOFAZNHInput58,
        ) {
          var ganttDiagramLVOFAZNHBinding214 = function (
              ganttDiagramLVOFAZNHInput183,
            ) {
              return ganttDiagramLVOFAZNHInput183.add(
                4 - ganttDiagramLVOFAZNHInput183.isoWeekday(),
                "day",
              );
            },
            ganttDiagramLVOFAZNHBinding215 =
              ganttDiagramLVOFAZNHInput57.prototype;
          ganttDiagramLVOFAZNHBinding215.isoWeekYear = function () {
            return ganttDiagramLVOFAZNHBinding214(this).year();
          };
          ganttDiagramLVOFAZNHBinding215.isoWeek = function (
            ganttDiagramLVOFAZNHInput88,
          ) {
            if (!this.$utils().u(ganttDiagramLVOFAZNHInput88))
              return this.add(
                7 * (ganttDiagramLVOFAZNHInput88 - this.isoWeek()),
                "day",
              );
            var ganttDiagramLVOFAZNHBinding294,
              ganttDiagramLVOFAZNHBinding295,
              ganttDiagramLVOFAZNHBinding296,
              ganttDiagramLVOFAZNHBinding297,
              ganttDiagramLVOFAZNHBinding298 =
                ganttDiagramLVOFAZNHBinding214(this),
              ganttDiagramLVOFAZNHBinding299 =
                ((ganttDiagramLVOFAZNHBinding294 = this.isoWeekYear()),
                (ganttDiagramLVOFAZNHBinding295 = this.$u),
                (ganttDiagramLVOFAZNHBinding296 = (
                  ganttDiagramLVOFAZNHBinding295
                    ? ganttDiagramLVOFAZNHInput58.utc
                    : ganttDiagramLVOFAZNHInput58
                )()
                  .year(ganttDiagramLVOFAZNHBinding294)
                  .startOf("year")),
                (ganttDiagramLVOFAZNHBinding297 =
                  4 - ganttDiagramLVOFAZNHBinding296.isoWeekday()),
                ganttDiagramLVOFAZNHBinding296.isoWeekday() > 4 &&
                  (ganttDiagramLVOFAZNHBinding297 += 7),
                ganttDiagramLVOFAZNHBinding296.add(
                  ganttDiagramLVOFAZNHBinding297,
                  "day",
                ));
            return (
              ganttDiagramLVOFAZNHBinding298.diff(
                ganttDiagramLVOFAZNHBinding299,
                "week",
              ) + 1
            );
          };
          ganttDiagramLVOFAZNHBinding215.isoWeekday = function (
            ganttDiagramLVOFAZNHInput162,
          ) {
            return this.$utils().u(ganttDiagramLVOFAZNHInput162)
              ? this.day() || 7
              : this.day(
                  this.day() % 7
                    ? ganttDiagramLVOFAZNHInput162
                    : ganttDiagramLVOFAZNHInput162 - 7,
                );
          };
          var ganttDiagramLVOFAZNHBinding216 =
            ganttDiagramLVOFAZNHBinding215.startOf;
          ganttDiagramLVOFAZNHBinding215.startOf = function (
            ganttDiagramLVOFAZNHInput116,
            ganttDiagramLVOFAZNHInput117,
          ) {
            var ganttDiagramLVOFAZNHBinding329 = this.$utils(),
              ganttDiagramLVOFAZNHBinding330 =
                !!ganttDiagramLVOFAZNHBinding329.u(
                  ganttDiagramLVOFAZNHInput117,
                ) || ganttDiagramLVOFAZNHInput117;
            return ganttDiagramLVOFAZNHBinding329.p(
              ganttDiagramLVOFAZNHInput116,
            ) === "isoweek"
              ? ganttDiagramLVOFAZNHBinding330
                ? this.date(this.date() - (this.isoWeekday() - 1)).startOf(
                    "day",
                  )
                : this.date(
                    this.date() - 1 - (this.isoWeekday() - 1) + 7,
                  ).endOf("day")
              : ganttDiagramLVOFAZNHBinding216.bind(this)(
                  ganttDiagramLVOFAZNHInput116,
                  ganttDiagramLVOFAZNHInput117,
                );
          };
        };
      });
    },
  ),
  ganttDiagramLVOFAZNHBinding2 = commonJsInit(
    (ganttDiagramLVOFAZNHInput5, ganttDiagramLVOFAZNHInput6) => {
      (function (ganttDiagramLVOFAZNHInput121, ganttDiagramLVOFAZNHInput122) {
        typeof ganttDiagramLVOFAZNHInput5 == "object" &&
        ganttDiagramLVOFAZNHInput6 !== undefined
          ? (ganttDiagramLVOFAZNHInput6.exports =
              ganttDiagramLVOFAZNHInput122())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramLVOFAZNHInput122)
            : ((ganttDiagramLVOFAZNHInput121 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramLVOFAZNHInput121 ||
                    self).dayjs_plugin_customParseFormat =
                ganttDiagramLVOFAZNHInput122());
      })(ganttDiagramLVOFAZNHInput5, function () {
        var ganttDiagramLVOFAZNHBinding117 = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          },
          ganttDiagramLVOFAZNHBinding118 =
            /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
          ganttDiagramLVOFAZNHBinding119 = /\d/,
          ganttDiagramLVOFAZNHBinding120 = /\d\d/,
          ganttDiagramLVOFAZNHBinding121 = /\d\d?/,
          ganttDiagramLVOFAZNHBinding122 = /\d*[^-_:/,()\s\d]+/,
          ganttDiagramLVOFAZNHBinding123 = {},
          ganttDiagramLVOFAZNHBinding124 = function (
            ganttDiagramLVOFAZNHInput185,
          ) {
            return (
              (ganttDiagramLVOFAZNHInput185 = +ganttDiagramLVOFAZNHInput185) +
              (ganttDiagramLVOFAZNHInput185 > 68 ? 1900 : 2e3)
            );
          },
          ganttDiagramLVOFAZNHBinding125 = function (
            ganttDiagramLVOFAZNHInput176,
          ) {
            return function (ganttDiagramLVOFAZNHInput207) {
              this[ganttDiagramLVOFAZNHInput176] =
                +ganttDiagramLVOFAZNHInput207;
            };
          },
          ganttDiagramLVOFAZNHBinding126 = [
            /[+-]\d\d:?(\d\d)?|Z/,
            function (ganttDiagramLVOFAZNHInput131) {
              (this.zone ||= {}).offset = (function (
                ganttDiagramLVOFAZNHInput151,
              ) {
                if (
                  !ganttDiagramLVOFAZNHInput151 ||
                  ganttDiagramLVOFAZNHInput151 === "Z"
                )
                  return 0;
                var ganttDiagramLVOFAZNHBinding359 =
                    ganttDiagramLVOFAZNHInput151.match(/([+-]|\d\d)/g),
                  ganttDiagramLVOFAZNHBinding360 =
                    60 * ganttDiagramLVOFAZNHBinding359[1] +
                    (+ganttDiagramLVOFAZNHBinding359[2] || 0);
                return ganttDiagramLVOFAZNHBinding360 === 0
                  ? 0
                  : ganttDiagramLVOFAZNHBinding359[0] === "+"
                    ? -ganttDiagramLVOFAZNHBinding360
                    : ganttDiagramLVOFAZNHBinding360;
              })(ganttDiagramLVOFAZNHInput131);
            },
          ],
          ganttDiagramLVOFAZNHBinding127 = function (
            ganttDiagramLVOFAZNHInput174,
          ) {
            var ganttDiagramLVOFAZNHBinding389 =
              ganttDiagramLVOFAZNHBinding123[ganttDiagramLVOFAZNHInput174];
            return (
              ganttDiagramLVOFAZNHBinding389 &&
              (ganttDiagramLVOFAZNHBinding389.indexOf
                ? ganttDiagramLVOFAZNHBinding389
                : ganttDiagramLVOFAZNHBinding389.s.concat(
                    ganttDiagramLVOFAZNHBinding389.f,
                  ))
            );
          },
          ganttDiagramLVOFAZNHBinding128 = function (
            ganttDiagramLVOFAZNHInput125,
            ganttDiagramLVOFAZNHInput126,
          ) {
            var ganttDiagramLVOFAZNHBinding337,
              ganttDiagramLVOFAZNHBinding338 =
                ganttDiagramLVOFAZNHBinding123.meridiem;
            if (ganttDiagramLVOFAZNHBinding338) {
              for (
                var ganttDiagramLVOFAZNHBinding339 = 1;
                ganttDiagramLVOFAZNHBinding339 <= 24;
                ganttDiagramLVOFAZNHBinding339 += 1
              )
                if (
                  ganttDiagramLVOFAZNHInput125.indexOf(
                    ganttDiagramLVOFAZNHBinding338(
                      ganttDiagramLVOFAZNHBinding339,
                      0,
                      ganttDiagramLVOFAZNHInput126,
                    ),
                  ) > -1
                ) {
                  ganttDiagramLVOFAZNHBinding337 =
                    ganttDiagramLVOFAZNHBinding339 > 12;
                  break;
                }
            } else
              ganttDiagramLVOFAZNHBinding337 =
                ganttDiagramLVOFAZNHInput125 ===
                (ganttDiagramLVOFAZNHInput126 ? "pm" : "PM");
            return ganttDiagramLVOFAZNHBinding337;
          },
          ganttDiagramLVOFAZNHBinding129 = {
            A: [
              ganttDiagramLVOFAZNHBinding122,
              function (ganttDiagramLVOFAZNHInput192) {
                this.afternoon = ganttDiagramLVOFAZNHBinding128(
                  ganttDiagramLVOFAZNHInput192,
                  false,
                );
              },
            ],
            a: [
              ganttDiagramLVOFAZNHBinding122,
              function (ganttDiagramLVOFAZNHInput193) {
                this.afternoon = ganttDiagramLVOFAZNHBinding128(
                  ganttDiagramLVOFAZNHInput193,
                  true,
                );
              },
            ],
            Q: [
              ganttDiagramLVOFAZNHBinding119,
              function (ganttDiagramLVOFAZNHInput187) {
                this.month = 3 * (ganttDiagramLVOFAZNHInput187 - 1) + 1;
              },
            ],
            S: [
              ganttDiagramLVOFAZNHBinding119,
              function (ganttDiagramLVOFAZNHInput188) {
                this.milliseconds = 100 * ganttDiagramLVOFAZNHInput188;
              },
            ],
            SS: [
              ganttDiagramLVOFAZNHBinding120,
              function (ganttDiagramLVOFAZNHInput190) {
                this.milliseconds = 10 * ganttDiagramLVOFAZNHInput190;
              },
            ],
            SSS: [
              /\d{3}/,
              function (ganttDiagramLVOFAZNHInput196) {
                this.milliseconds = +ganttDiagramLVOFAZNHInput196;
              },
            ],
            s: [
              ganttDiagramLVOFAZNHBinding121,
              ganttDiagramLVOFAZNHBinding125("seconds"),
            ],
            ss: [
              ganttDiagramLVOFAZNHBinding121,
              ganttDiagramLVOFAZNHBinding125("seconds"),
            ],
            m: [
              ganttDiagramLVOFAZNHBinding121,
              ganttDiagramLVOFAZNHBinding125("minutes"),
            ],
            mm: [
              ganttDiagramLVOFAZNHBinding121,
              ganttDiagramLVOFAZNHBinding125("minutes"),
            ],
            H: [
              ganttDiagramLVOFAZNHBinding121,
              ganttDiagramLVOFAZNHBinding125("hours"),
            ],
            h: [
              ganttDiagramLVOFAZNHBinding121,
              ganttDiagramLVOFAZNHBinding125("hours"),
            ],
            HH: [
              ganttDiagramLVOFAZNHBinding121,
              ganttDiagramLVOFAZNHBinding125("hours"),
            ],
            hh: [
              ganttDiagramLVOFAZNHBinding121,
              ganttDiagramLVOFAZNHBinding125("hours"),
            ],
            D: [
              ganttDiagramLVOFAZNHBinding121,
              ganttDiagramLVOFAZNHBinding125("day"),
            ],
            DD: [
              ganttDiagramLVOFAZNHBinding120,
              ganttDiagramLVOFAZNHBinding125("day"),
            ],
            Do: [
              ganttDiagramLVOFAZNHBinding122,
              function (ganttDiagramLVOFAZNHInput136) {
                var ganttDiagramLVOFAZNHBinding353 =
                    ganttDiagramLVOFAZNHBinding123.ordinal,
                  ganttDiagramLVOFAZNHBinding354 =
                    ganttDiagramLVOFAZNHInput136.match(/\d+/);
                if (
                  ((this.day = ganttDiagramLVOFAZNHBinding354[0]),
                  ganttDiagramLVOFAZNHBinding353)
                )
                  for (
                    var ganttDiagramLVOFAZNHBinding355 = 1;
                    ganttDiagramLVOFAZNHBinding355 <= 31;
                    ganttDiagramLVOFAZNHBinding355 += 1
                  )
                    ganttDiagramLVOFAZNHBinding353(
                      ganttDiagramLVOFAZNHBinding355,
                    ).replace(/\[|\]/g, "") === ganttDiagramLVOFAZNHInput136 &&
                      (this.day = ganttDiagramLVOFAZNHBinding355);
              },
            ],
            w: [
              ganttDiagramLVOFAZNHBinding121,
              ganttDiagramLVOFAZNHBinding125("week"),
            ],
            ww: [
              ganttDiagramLVOFAZNHBinding120,
              ganttDiagramLVOFAZNHBinding125("week"),
            ],
            M: [
              ganttDiagramLVOFAZNHBinding121,
              ganttDiagramLVOFAZNHBinding125("month"),
            ],
            MM: [
              ganttDiagramLVOFAZNHBinding120,
              ganttDiagramLVOFAZNHBinding125("month"),
            ],
            MMM: [
              ganttDiagramLVOFAZNHBinding122,
              function (ganttDiagramLVOFAZNHInput118) {
                var ganttDiagramLVOFAZNHBinding333 =
                    ganttDiagramLVOFAZNHBinding127("months"),
                  ganttDiagramLVOFAZNHBinding334 =
                    (
                      ganttDiagramLVOFAZNHBinding127("monthsShort") ||
                      ganttDiagramLVOFAZNHBinding333.map(function (item) {
                        return item.slice(0, 3);
                      })
                    ).indexOf(ganttDiagramLVOFAZNHInput118) + 1;
                if (ganttDiagramLVOFAZNHBinding334 < 1) throw Error();
                this.month =
                  ganttDiagramLVOFAZNHBinding334 % 12 ||
                  ganttDiagramLVOFAZNHBinding334;
              },
            ],
            MMMM: [
              ganttDiagramLVOFAZNHBinding122,
              function (ganttDiagramLVOFAZNHInput160) {
                var ganttDiagramLVOFAZNHBinding374 =
                  ganttDiagramLVOFAZNHBinding127("months").indexOf(
                    ganttDiagramLVOFAZNHInput160,
                  ) + 1;
                if (ganttDiagramLVOFAZNHBinding374 < 1) throw Error();
                this.month =
                  ganttDiagramLVOFAZNHBinding374 % 12 ||
                  ganttDiagramLVOFAZNHBinding374;
              },
            ],
            Y: [/[+-]?\d+/, ganttDiagramLVOFAZNHBinding125("year")],
            YY: [
              ganttDiagramLVOFAZNHBinding120,
              function (ganttDiagramLVOFAZNHInput201) {
                this.year = ganttDiagramLVOFAZNHBinding124(
                  ganttDiagramLVOFAZNHInput201,
                );
              },
            ],
            YYYY: [/\d{4}/, ganttDiagramLVOFAZNHBinding125("year")],
            Z: ganttDiagramLVOFAZNHBinding126,
            ZZ: ganttDiagramLVOFAZNHBinding126,
          };
        function ganttDiagramLVOFAZNHHelper11(ganttDiagramLVOFAZNHInput54) {
          for (
            var ganttDiagramLVOFAZNHBinding199 = ganttDiagramLVOFAZNHInput54,
              ganttDiagramLVOFAZNHBinding200 =
                ganttDiagramLVOFAZNHBinding123 &&
                ganttDiagramLVOFAZNHBinding123.formats,
              ganttDiagramLVOFAZNHBinding201 = (ganttDiagramLVOFAZNHInput54 =
                ganttDiagramLVOFAZNHBinding199.replace(
                  /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                  function (
                    ganttDiagramLVOFAZNHInput103,
                    ganttDiagramLVOFAZNHInput104,
                    ganttDiagramLVOFAZNHInput105,
                  ) {
                    var ganttDiagramLVOFAZNHBinding320 =
                      ganttDiagramLVOFAZNHInput105 &&
                      ganttDiagramLVOFAZNHInput105.toUpperCase();
                    return (
                      ganttDiagramLVOFAZNHInput104 ||
                      ganttDiagramLVOFAZNHBinding200[
                        ganttDiagramLVOFAZNHInput105
                      ] ||
                      ganttDiagramLVOFAZNHBinding117[
                        ganttDiagramLVOFAZNHInput105
                      ] ||
                      ganttDiagramLVOFAZNHBinding200[
                        ganttDiagramLVOFAZNHBinding320
                      ].replace(
                        /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                        function (
                          ganttDiagramLVOFAZNHInput177,
                          ganttDiagramLVOFAZNHInput178,
                          ganttDiagramLVOFAZNHInput179,
                        ) {
                          return (
                            ganttDiagramLVOFAZNHInput178 ||
                            ganttDiagramLVOFAZNHInput179.slice(1)
                          );
                        },
                      )
                    );
                  },
                )).match(ganttDiagramLVOFAZNHBinding118),
              ganttDiagramLVOFAZNHBinding202 =
                ganttDiagramLVOFAZNHBinding201.length,
              ganttDiagramLVOFAZNHBinding203 = 0;
            ganttDiagramLVOFAZNHBinding203 < ganttDiagramLVOFAZNHBinding202;
            ganttDiagramLVOFAZNHBinding203 += 1
          ) {
            var ganttDiagramLVOFAZNHBinding204 =
                ganttDiagramLVOFAZNHBinding201[ganttDiagramLVOFAZNHBinding203],
              ganttDiagramLVOFAZNHBinding205 =
                ganttDiagramLVOFAZNHBinding129[ganttDiagramLVOFAZNHBinding204],
              ganttDiagramLVOFAZNHBinding206 =
                ganttDiagramLVOFAZNHBinding205 &&
                ganttDiagramLVOFAZNHBinding205[0],
              ganttDiagramLVOFAZNHBinding207 =
                ganttDiagramLVOFAZNHBinding205 &&
                ganttDiagramLVOFAZNHBinding205[1];
            ganttDiagramLVOFAZNHBinding201[ganttDiagramLVOFAZNHBinding203] =
              ganttDiagramLVOFAZNHBinding207
                ? {
                    regex: ganttDiagramLVOFAZNHBinding206,
                    parser: ganttDiagramLVOFAZNHBinding207,
                  }
                : ganttDiagramLVOFAZNHBinding204.replace(/^\[|\]$/g, "");
          }
          return function (ganttDiagramLVOFAZNHInput79) {
            for (
              var ganttDiagramLVOFAZNHBinding277 = {},
                ganttDiagramLVOFAZNHBinding278 = 0,
                ganttDiagramLVOFAZNHBinding279 = 0;
              ganttDiagramLVOFAZNHBinding278 < ganttDiagramLVOFAZNHBinding202;
              ganttDiagramLVOFAZNHBinding278 += 1
            ) {
              var ganttDiagramLVOFAZNHBinding280 =
                ganttDiagramLVOFAZNHBinding201[ganttDiagramLVOFAZNHBinding278];
              if (typeof ganttDiagramLVOFAZNHBinding280 == "string")
                ganttDiagramLVOFAZNHBinding279 +=
                  ganttDiagramLVOFAZNHBinding280.length;
              else {
                var ganttDiagramLVOFAZNHBinding281 =
                    ganttDiagramLVOFAZNHBinding280.regex,
                  ganttDiagramLVOFAZNHBinding282 =
                    ganttDiagramLVOFAZNHBinding280.parser,
                  ganttDiagramLVOFAZNHBinding283 =
                    ganttDiagramLVOFAZNHInput79.slice(
                      ganttDiagramLVOFAZNHBinding279,
                    ),
                  ganttDiagramLVOFAZNHBinding284 =
                    ganttDiagramLVOFAZNHBinding281.exec(
                      ganttDiagramLVOFAZNHBinding283,
                    )[0];
                ganttDiagramLVOFAZNHBinding282.call(
                  ganttDiagramLVOFAZNHBinding277,
                  ganttDiagramLVOFAZNHBinding284,
                );
                ganttDiagramLVOFAZNHInput79 =
                  ganttDiagramLVOFAZNHInput79.replace(
                    ganttDiagramLVOFAZNHBinding284,
                    "",
                  );
              }
            }
            return (
              (function (ganttDiagramLVOFAZNHInput134) {
                var ganttDiagramLVOFAZNHBinding347 =
                  ganttDiagramLVOFAZNHInput134.afternoon;
                if (ganttDiagramLVOFAZNHBinding347 !== undefined) {
                  var ganttDiagramLVOFAZNHBinding348 =
                    ganttDiagramLVOFAZNHInput134.hours;
                  ganttDiagramLVOFAZNHBinding347
                    ? ganttDiagramLVOFAZNHBinding348 < 12 &&
                      (ganttDiagramLVOFAZNHInput134.hours += 12)
                    : ganttDiagramLVOFAZNHBinding348 === 12 &&
                      (ganttDiagramLVOFAZNHInput134.hours = 0);
                  delete ganttDiagramLVOFAZNHInput134.afternoon;
                }
              })(ganttDiagramLVOFAZNHBinding277),
              ganttDiagramLVOFAZNHBinding277
            );
          };
        }
        return function (
          ganttDiagramLVOFAZNHInput31,
          ganttDiagramLVOFAZNHInput32,
          ganttDiagramLVOFAZNHInput33,
        ) {
          ganttDiagramLVOFAZNHInput33.p.customParseFormat = true;
          ganttDiagramLVOFAZNHInput31 &&
            ganttDiagramLVOFAZNHInput31.parseTwoDigitYear &&
            (ganttDiagramLVOFAZNHBinding124 =
              ganttDiagramLVOFAZNHInput31.parseTwoDigitYear);
          var ganttDiagramLVOFAZNHBinding168 =
              ganttDiagramLVOFAZNHInput32.prototype,
            ganttDiagramLVOFAZNHBinding169 =
              ganttDiagramLVOFAZNHBinding168.parse;
          ganttDiagramLVOFAZNHBinding168.parse = function (
            ganttDiagramLVOFAZNHInput36,
          ) {
            var ganttDiagramLVOFAZNHBinding174 =
                ganttDiagramLVOFAZNHInput36.date,
              ganttDiagramLVOFAZNHBinding175 = ganttDiagramLVOFAZNHInput36.utc,
              ganttDiagramLVOFAZNHBinding176 = ganttDiagramLVOFAZNHInput36.args;
            this.$u = ganttDiagramLVOFAZNHBinding175;
            var ganttDiagramLVOFAZNHBinding177 =
              ganttDiagramLVOFAZNHBinding176[1];
            if (typeof ganttDiagramLVOFAZNHBinding177 == "string") {
              var ganttDiagramLVOFAZNHBinding178 =
                  true === ganttDiagramLVOFAZNHBinding176[2],
                ganttDiagramLVOFAZNHBinding179 =
                  true === ganttDiagramLVOFAZNHBinding176[3],
                ganttDiagramLVOFAZNHBinding180 =
                  ganttDiagramLVOFAZNHBinding178 ||
                  ganttDiagramLVOFAZNHBinding179,
                ganttDiagramLVOFAZNHBinding181 =
                  ganttDiagramLVOFAZNHBinding176[2];
              ganttDiagramLVOFAZNHBinding179 &&
                (ganttDiagramLVOFAZNHBinding181 =
                  ganttDiagramLVOFAZNHBinding176[2]);
              ganttDiagramLVOFAZNHBinding123 = this.$locale();
              !ganttDiagramLVOFAZNHBinding178 &&
                ganttDiagramLVOFAZNHBinding181 &&
                (ganttDiagramLVOFAZNHBinding123 =
                  ganttDiagramLVOFAZNHInput33.Ls[
                    ganttDiagramLVOFAZNHBinding181
                  ]);
              this.$d = (function (
                ganttDiagramLVOFAZNHInput59,
                ganttDiagramLVOFAZNHInput60,
                ganttDiagramLVOFAZNHInput61,
                ganttDiagramLVOFAZNHInput62,
              ) {
                try {
                  if (["x", "X"].indexOf(ganttDiagramLVOFAZNHInput60) > -1)
                    return new Date(
                      (ganttDiagramLVOFAZNHInput60 === "X" ? 1e3 : 1) *
                        ganttDiagramLVOFAZNHInput59,
                    );
                  var ganttDiagramLVOFAZNHBinding218 =
                      ganttDiagramLVOFAZNHHelper11(ganttDiagramLVOFAZNHInput60)(
                        ganttDiagramLVOFAZNHInput59,
                      ),
                    ganttDiagramLVOFAZNHBinding219 =
                      ganttDiagramLVOFAZNHBinding218.year,
                    ganttDiagramLVOFAZNHBinding220 =
                      ganttDiagramLVOFAZNHBinding218.month,
                    ganttDiagramLVOFAZNHBinding221 =
                      ganttDiagramLVOFAZNHBinding218.day,
                    ganttDiagramLVOFAZNHBinding222 =
                      ganttDiagramLVOFAZNHBinding218.hours,
                    ganttDiagramLVOFAZNHBinding223 =
                      ganttDiagramLVOFAZNHBinding218.minutes,
                    ganttDiagramLVOFAZNHBinding224 =
                      ganttDiagramLVOFAZNHBinding218.seconds,
                    ganttDiagramLVOFAZNHBinding225 =
                      ganttDiagramLVOFAZNHBinding218.milliseconds,
                    ganttDiagramLVOFAZNHBinding226 =
                      ganttDiagramLVOFAZNHBinding218.zone,
                    ganttDiagramLVOFAZNHBinding227 =
                      ganttDiagramLVOFAZNHBinding218.week,
                    ganttDiagramLVOFAZNHBinding228 = new Date(),
                    ganttDiagramLVOFAZNHBinding229 =
                      ganttDiagramLVOFAZNHBinding221 ||
                      (ganttDiagramLVOFAZNHBinding219 ||
                      ganttDiagramLVOFAZNHBinding220
                        ? 1
                        : ganttDiagramLVOFAZNHBinding228.getDate()),
                    ganttDiagramLVOFAZNHBinding230 =
                      ganttDiagramLVOFAZNHBinding219 ||
                      ganttDiagramLVOFAZNHBinding228.getFullYear(),
                    ganttDiagramLVOFAZNHBinding231 = 0;
                  (ganttDiagramLVOFAZNHBinding219 &&
                    !ganttDiagramLVOFAZNHBinding220) ||
                    (ganttDiagramLVOFAZNHBinding231 =
                      ganttDiagramLVOFAZNHBinding220 > 0
                        ? ganttDiagramLVOFAZNHBinding220 - 1
                        : ganttDiagramLVOFAZNHBinding228.getMonth());
                  var ganttDiagramLVOFAZNHBinding232,
                    ganttDiagramLVOFAZNHBinding233 =
                      ganttDiagramLVOFAZNHBinding222 || 0,
                    ganttDiagramLVOFAZNHBinding234 =
                      ganttDiagramLVOFAZNHBinding223 || 0,
                    ganttDiagramLVOFAZNHBinding235 =
                      ganttDiagramLVOFAZNHBinding224 || 0,
                    ganttDiagramLVOFAZNHBinding236 =
                      ganttDiagramLVOFAZNHBinding225 || 0;
                  return ganttDiagramLVOFAZNHBinding226
                    ? new Date(
                        Date.UTC(
                          ganttDiagramLVOFAZNHBinding230,
                          ganttDiagramLVOFAZNHBinding231,
                          ganttDiagramLVOFAZNHBinding229,
                          ganttDiagramLVOFAZNHBinding233,
                          ganttDiagramLVOFAZNHBinding234,
                          ganttDiagramLVOFAZNHBinding235,
                          ganttDiagramLVOFAZNHBinding236 +
                            60 * ganttDiagramLVOFAZNHBinding226.offset * 1e3,
                        ),
                      )
                    : ganttDiagramLVOFAZNHInput61
                      ? new Date(
                          Date.UTC(
                            ganttDiagramLVOFAZNHBinding230,
                            ganttDiagramLVOFAZNHBinding231,
                            ganttDiagramLVOFAZNHBinding229,
                            ganttDiagramLVOFAZNHBinding233,
                            ganttDiagramLVOFAZNHBinding234,
                            ganttDiagramLVOFAZNHBinding235,
                            ganttDiagramLVOFAZNHBinding236,
                          ),
                        )
                      : ((ganttDiagramLVOFAZNHBinding232 = new Date(
                          ganttDiagramLVOFAZNHBinding230,
                          ganttDiagramLVOFAZNHBinding231,
                          ganttDiagramLVOFAZNHBinding229,
                          ganttDiagramLVOFAZNHBinding233,
                          ganttDiagramLVOFAZNHBinding234,
                          ganttDiagramLVOFAZNHBinding235,
                          ganttDiagramLVOFAZNHBinding236,
                        )),
                        ganttDiagramLVOFAZNHBinding227 &&
                          (ganttDiagramLVOFAZNHBinding232 =
                            ganttDiagramLVOFAZNHInput62(
                              ganttDiagramLVOFAZNHBinding232,
                            )
                              .week(ganttDiagramLVOFAZNHBinding227)
                              .toDate()),
                        ganttDiagramLVOFAZNHBinding232);
                } catch {
                  return new Date("");
                }
              })(
                ganttDiagramLVOFAZNHBinding174,
                ganttDiagramLVOFAZNHBinding177,
                ganttDiagramLVOFAZNHBinding175,
                ganttDiagramLVOFAZNHInput33,
              );
              this.init();
              ganttDiagramLVOFAZNHBinding181 &&
                true !== ganttDiagramLVOFAZNHBinding181 &&
                (this.$L = this.locale(ganttDiagramLVOFAZNHBinding181).$L);
              ganttDiagramLVOFAZNHBinding180 &&
                ganttDiagramLVOFAZNHBinding174 !=
                  this.format(ganttDiagramLVOFAZNHBinding177) &&
                (this.$d = new Date(""));
              ganttDiagramLVOFAZNHBinding123 = {};
            } else if (ganttDiagramLVOFAZNHBinding177 instanceof Array)
              for (
                var ganttDiagramLVOFAZNHBinding182 =
                    ganttDiagramLVOFAZNHBinding177.length,
                  ganttDiagramLVOFAZNHBinding183 = 1;
                ganttDiagramLVOFAZNHBinding183 <=
                ganttDiagramLVOFAZNHBinding182;
                ganttDiagramLVOFAZNHBinding183 += 1
              ) {
                ganttDiagramLVOFAZNHBinding176[1] =
                  ganttDiagramLVOFAZNHBinding177[
                    ganttDiagramLVOFAZNHBinding183 - 1
                  ];
                var ganttDiagramLVOFAZNHBinding184 =
                  ganttDiagramLVOFAZNHInput33.apply(
                    this,
                    ganttDiagramLVOFAZNHBinding176,
                  );
                if (ganttDiagramLVOFAZNHBinding184.isValid()) {
                  this.$d = ganttDiagramLVOFAZNHBinding184.$d;
                  this.$L = ganttDiagramLVOFAZNHBinding184.$L;
                  this.init();
                  break;
                }
                ganttDiagramLVOFAZNHBinding183 ===
                  ganttDiagramLVOFAZNHBinding182 && (this.$d = new Date(""));
              }
            else
              ganttDiagramLVOFAZNHBinding169.call(
                this,
                ganttDiagramLVOFAZNHInput36,
              );
          };
        };
      });
    },
  ),
  ganttDiagramLVOFAZNHBinding3 = commonJsInit(
    (ganttDiagramLVOFAZNHInput37, ganttDiagramLVOFAZNHInput38) => {
      (function (ganttDiagramLVOFAZNHInput123, ganttDiagramLVOFAZNHInput124) {
        typeof ganttDiagramLVOFAZNHInput37 == "object" &&
        ganttDiagramLVOFAZNHInput38 !== undefined
          ? (ganttDiagramLVOFAZNHInput38.exports =
              ganttDiagramLVOFAZNHInput124())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramLVOFAZNHInput124)
            : ((ganttDiagramLVOFAZNHInput123 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramLVOFAZNHInput123 ||
                    self).dayjs_plugin_advancedFormat =
                ganttDiagramLVOFAZNHInput124());
      })(ganttDiagramLVOFAZNHInput37, function () {
        return function (
          ganttDiagramLVOFAZNHInput47,
          ganttDiagramLVOFAZNHInput48,
        ) {
          var ganttDiagramLVOFAZNHBinding191 =
              ganttDiagramLVOFAZNHInput48.prototype,
            ganttDiagramLVOFAZNHBinding192 =
              ganttDiagramLVOFAZNHBinding191.format;
          ganttDiagramLVOFAZNHBinding191.format = function (
            ganttDiagramLVOFAZNHInput51,
          ) {
            var ganttDiagramLVOFAZNHBinding193 = this,
              ganttDiagramLVOFAZNHBinding194 = this.$locale();
            if (!this.isValid())
              return ganttDiagramLVOFAZNHBinding192.bind(this)(
                ganttDiagramLVOFAZNHInput51,
              );
            var ganttDiagramLVOFAZNHBinding195 = this.$utils(),
              ganttDiagramLVOFAZNHBinding196 = (
                ganttDiagramLVOFAZNHInput51 || "YYYY-MM-DDTHH:mm:ssZ"
              ).replace(
                /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
                function (ganttDiagramLVOFAZNHInput63) {
                  switch (ganttDiagramLVOFAZNHInput63) {
                    case "Q":
                      return Math.ceil(
                        (ganttDiagramLVOFAZNHBinding193.$M + 1) / 3,
                      );
                    case "Do":
                      return ganttDiagramLVOFAZNHBinding194.ordinal(
                        ganttDiagramLVOFAZNHBinding193.$D,
                      );
                    case "gggg":
                      return ganttDiagramLVOFAZNHBinding193.weekYear();
                    case "GGGG":
                      return ganttDiagramLVOFAZNHBinding193.isoWeekYear();
                    case "wo":
                      return ganttDiagramLVOFAZNHBinding194.ordinal(
                        ganttDiagramLVOFAZNHBinding193.week(),
                        "W",
                      );
                    case "w":
                    case "ww":
                      return ganttDiagramLVOFAZNHBinding195.s(
                        ganttDiagramLVOFAZNHBinding193.week(),
                        ganttDiagramLVOFAZNHInput63 === "w" ? 1 : 2,
                        "0",
                      );
                    case "W":
                    case "WW":
                      return ganttDiagramLVOFAZNHBinding195.s(
                        ganttDiagramLVOFAZNHBinding193.isoWeek(),
                        ganttDiagramLVOFAZNHInput63 === "W" ? 1 : 2,
                        "0",
                      );
                    case "k":
                    case "kk":
                      return ganttDiagramLVOFAZNHBinding195.s(
                        String(
                          ganttDiagramLVOFAZNHBinding193.$H === 0
                            ? 24
                            : ganttDiagramLVOFAZNHBinding193.$H,
                        ),
                        ganttDiagramLVOFAZNHInput63 === "k" ? 1 : 2,
                        "0",
                      );
                    case "X":
                      return Math.floor(
                        ganttDiagramLVOFAZNHBinding193.$d.getTime() / 1e3,
                      );
                    case "x":
                      return ganttDiagramLVOFAZNHBinding193.$d.getTime();
                    case "z":
                      return (
                        "[" + ganttDiagramLVOFAZNHBinding193.offsetName() + "]"
                      );
                    case "zzz":
                      return (
                        "[" +
                        ganttDiagramLVOFAZNHBinding193.offsetName("long") +
                        "]"
                      );
                    default:
                      return ganttDiagramLVOFAZNHInput63;
                  }
                },
              );
            return ganttDiagramLVOFAZNHBinding192.bind(this)(
              ganttDiagramLVOFAZNHBinding196,
            );
          };
        };
      });
    },
  );
function ganttDiagramLVOFAZNHHelper1(
  ganttDiagramLVOFAZNHInput144,
  ganttDiagramLVOFAZNHInput145,
  ganttDiagramLVOFAZNHInput146,
) {
  let ganttDiagramLVOFAZNHBinding358 = true;
  for (; ganttDiagramLVOFAZNHBinding358; ) {
    ganttDiagramLVOFAZNHBinding358 = false;
    ganttDiagramLVOFAZNHInput146.forEach(function (item) {
      let ganttDiagramLVOFAZNHBinding376 = "^\\s*" + item + "\\s*$",
        ganttDiagramLVOFAZNHBinding377 = new RegExp(
          ganttDiagramLVOFAZNHBinding376,
        );
      ganttDiagramLVOFAZNHInput144[0].match(ganttDiagramLVOFAZNHBinding377) &&
        ((ganttDiagramLVOFAZNHInput145[item] = true),
        ganttDiagramLVOFAZNHInput144.shift(1),
        (ganttDiagramLVOFAZNHBinding358 = true));
    });
  }
}
var ganttDiagramLVOFAZNHBinding4,
  ganttDiagramLVOFAZNHBinding5,
  ganttDiagramLVOFAZNHBinding6,
  _e,
  ganttDiagramLVOFAZNHBinding7,
  ganttDiagramLVOFAZNHBinding8,
  ganttDiagramLVOFAZNHBinding9,
  ganttDiagramLVOFAZNHBinding10,
  be,
  ganttDiagramLVOFAZNHBinding11,
  ganttDiagramLVOFAZNHBinding12,
  ganttDiagramLVOFAZNHBinding13,
  ganttDiagramLVOFAZNHBinding14,
  ganttDiagramLVOFAZNHBinding15,
  ganttDiagramLVOFAZNHBinding16,
  ganttDiagramLVOFAZNHBinding17,
  ganttDiagramLVOFAZNHBinding18,
  ganttDiagramLVOFAZNHBinding19,
  ganttDiagramLVOFAZNHBinding20,
  ganttDiagramLVOFAZNHBinding21,
  ganttDiagramLVOFAZNHBinding22,
  ganttDiagramLVOFAZNHBinding23,
  ganttDiagramLVOFAZNHBinding24,
  ganttDiagramLVOFAZNHBinding25,
  ganttDiagramLVOFAZNHBinding26,
  ganttDiagramLVOFAZNHBinding27,
  ganttDiagramLVOFAZNHBinding28,
  ganttDiagramLVOFAZNHBinding29,
  ganttDiagramLVOFAZNHBinding30,
  ganttDiagramLVOFAZNHBinding31,
  ganttDiagramLVOFAZNHBinding32,
  ganttDiagramLVOFAZNHBinding33,
  ganttDiagramLVOFAZNHBinding34,
  ganttDiagramLVOFAZNHBinding35,
  ganttDiagramLVOFAZNHBinding36,
  ganttDiagramLVOFAZNHBinding37,
  ganttDiagramLVOFAZNHBinding38,
  ganttDiagramLVOFAZNHBinding39,
  ganttDiagramLVOFAZNHBinding40,
  ganttDiagramLVOFAZNHBinding41,
  ganttDiagramLVOFAZNHBinding42,
  ganttDiagramLVOFAZNHBinding43,
  ganttDiagramLVOFAZNHBinding44,
  ganttDiagramLVOFAZNHBinding45,
  ganttDiagramLVOFAZNHBinding46,
  ganttDiagramLVOFAZNHBinding47,
  ganttDiagramLVOFAZNHBinding48,
  ganttDiagramLVOFAZNHBinding49,
  ganttDiagramLVOFAZNHBinding50,
  ganttDiagramLVOFAZNHBinding51,
  ganttDiagramLVOFAZNHBinding52,
  ganttDiagramLVOFAZNHBinding53,
  ganttDiagramLVOFAZNHBinding54,
  ganttDiagramLVOFAZNHBinding55,
  ganttDiagramLVOFAZNHBinding56,
  $e,
  ganttDiagramLVOFAZNHBinding57,
  ganttDiagramLVOFAZNHBinding58,
  ganttDiagramLVOFAZNHBinding59,
  ganttDiagramLVOFAZNHBinding60,
  ganttDiagramLVOFAZNHBinding61,
  ganttDiagramLVOFAZNHBinding62,
  at,
  ganttDiagramLVOFAZNHBinding63,
  ganttDiagramLVOFAZNHBinding64,
  ganttDiagramLVOFAZNHBinding65,
  ganttDiagramLVOFAZNHBinding66,
  ganttDiagramLVOFAZNHBinding67,
  ganttDiagramLVOFAZNHBinding68,
  ganttDiagramLVOFAZNHBinding69,
  ganttDiagramLVOFAZNHBinding70,
  ganttDiagramLVOFAZNHBinding71,
  ganttDiagramLVOFAZNHBinding72,
  ganttDiagramLVOFAZNHBinding73,
  ganttDiagramLVOFAZNHBinding74,
  ganttDiagramLVOFAZNHBinding75,
  _t,
  ganttDiagramLVOFAZNHBinding76,
  ganttDiagramLVOFAZNHBinding77,
  $,
  GanttDiagramLVOFAZNH;
esmInit(() => {
  chunkS3R3BYOJU();
  chunkABZYJK2DK();
  chunkAGHRB4JFR();
  ganttDiagramLVOFAZNHBinding4 = dist();
  ganttDiagramLVOFAZNHBinding5 = toEsm(chunkAGHRB4JFO(), 1);
  ganttDiagramLVOFAZNHBinding6 = toEsm(ganttDiagramLVOFAZNHBinding1(), 1);
  _e = toEsm(ganttDiagramLVOFAZNHBinding2(), 1);
  ganttDiagramLVOFAZNHBinding7 = toEsm(ganttDiagramLVOFAZNHBinding3(), 1);
  ganttDiagramLVOFAZNHBinding8 = toEsm(chunkAGHRB4JFO(), 1);
  srcT();
  ganttDiagramLVOFAZNHBinding9 = (function () {
    var ganttDiagramLVOFAZNHBinding78 = chunkAGHRB4JFN(function (
        ganttDiagramLVOFAZNHInput170,
        ganttDiagramLVOFAZNHInput171,
        ganttDiagramLVOFAZNHInput172,
        ganttDiagramLVOFAZNHInput173,
      ) {
        for (
          ganttDiagramLVOFAZNHInput172 ||= {},
            ganttDiagramLVOFAZNHInput173 = ganttDiagramLVOFAZNHInput170.length;
          ganttDiagramLVOFAZNHInput173--;
          ganttDiagramLVOFAZNHInput172[
            ganttDiagramLVOFAZNHInput170[ganttDiagramLVOFAZNHInput173]
          ] = ganttDiagramLVOFAZNHInput171
        );
        return ganttDiagramLVOFAZNHInput172;
      }, "o"),
      ganttDiagramLVOFAZNHBinding79 = [
        6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 33, 35, 36, 38, 40,
      ],
      ganttDiagramLVOFAZNHBinding80 = [1, 26],
      ganttDiagramLVOFAZNHBinding81 = [1, 27],
      ganttDiagramLVOFAZNHBinding82 = [1, 28],
      ganttDiagramLVOFAZNHBinding83 = [1, 29],
      ganttDiagramLVOFAZNHBinding84 = [1, 30],
      ganttDiagramLVOFAZNHBinding85 = [1, 31],
      ganttDiagramLVOFAZNHBinding86 = [1, 32],
      ganttDiagramLVOFAZNHBinding87 = [1, 33],
      ganttDiagramLVOFAZNHBinding88 = [1, 34],
      ganttDiagramLVOFAZNHBinding89 = [1, 9],
      ganttDiagramLVOFAZNHBinding90 = [1, 10],
      ganttDiagramLVOFAZNHBinding91 = [1, 11],
      ganttDiagramLVOFAZNHBinding92 = [1, 12],
      ganttDiagramLVOFAZNHBinding93 = [1, 13],
      ganttDiagramLVOFAZNHBinding94 = [1, 14],
      ganttDiagramLVOFAZNHBinding95 = [1, 15],
      ganttDiagramLVOFAZNHBinding96 = [1, 16],
      ganttDiagramLVOFAZNHBinding97 = [1, 19],
      ganttDiagramLVOFAZNHBinding98 = [1, 20],
      ganttDiagramLVOFAZNHBinding99 = [1, 21],
      ganttDiagramLVOFAZNHBinding100 = [1, 22],
      ganttDiagramLVOFAZNHBinding101 = [1, 23],
      ganttDiagramLVOFAZNHBinding102 = [1, 25],
      ganttDiagramLVOFAZNHBinding103 = [1, 35],
      ganttDiagramLVOFAZNHBinding104 = {
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
          ganttDiagramLVOFAZNHInput15,
          ganttDiagramLVOFAZNHInput16,
          ganttDiagramLVOFAZNHInput17,
          ganttDiagramLVOFAZNHInput18,
          ganttDiagramLVOFAZNHInput19,
          ganttDiagramLVOFAZNHInput20,
          ganttDiagramLVOFAZNHInput21,
        ) {
          var ganttDiagramLVOFAZNHBinding162 =
            ganttDiagramLVOFAZNHInput20.length - 1;
          switch (ganttDiagramLVOFAZNHInput19) {
            case 1:
              return ganttDiagramLVOFAZNHInput20[
                ganttDiagramLVOFAZNHBinding162 - 1
              ];
            case 2:
              this.$ = [];
              break;
            case 3:
              ganttDiagramLVOFAZNHInput20[
                ganttDiagramLVOFAZNHBinding162 - 1
              ].push(
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162],
              );
              this.$ =
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 1];
              break;
            case 4:
            case 5:
              this.$ =
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162];
              break;
            case 6:
            case 7:
              this.$ = [];
              break;
            case 8:
              ganttDiagramLVOFAZNHInput18.setWeekday("monday");
              break;
            case 9:
              ganttDiagramLVOFAZNHInput18.setWeekday("tuesday");
              break;
            case 10:
              ganttDiagramLVOFAZNHInput18.setWeekday("wednesday");
              break;
            case 11:
              ganttDiagramLVOFAZNHInput18.setWeekday("thursday");
              break;
            case 12:
              ganttDiagramLVOFAZNHInput18.setWeekday("friday");
              break;
            case 13:
              ganttDiagramLVOFAZNHInput18.setWeekday("saturday");
              break;
            case 14:
              ganttDiagramLVOFAZNHInput18.setWeekday("sunday");
              break;
            case 15:
              ganttDiagramLVOFAZNHInput18.setWeekend("friday");
              break;
            case 16:
              ganttDiagramLVOFAZNHInput18.setWeekend("saturday");
              break;
            case 17:
              ganttDiagramLVOFAZNHInput18.setDateFormat(
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(11),
              );
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(11);
              break;
            case 18:
              ganttDiagramLVOFAZNHInput18.enableInclusiveEndDates();
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(18);
              break;
            case 19:
              ganttDiagramLVOFAZNHInput18.TopAxis();
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(8);
              break;
            case 20:
              ganttDiagramLVOFAZNHInput18.setAxisFormat(
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(11),
              );
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(11);
              break;
            case 21:
              ganttDiagramLVOFAZNHInput18.setTickInterval(
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(13),
              );
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(13);
              break;
            case 22:
              ganttDiagramLVOFAZNHInput18.setExcludes(
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(9),
              );
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(9);
              break;
            case 23:
              ganttDiagramLVOFAZNHInput18.setIncludes(
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(9),
              );
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(9);
              break;
            case 24:
              ganttDiagramLVOFAZNHInput18.setTodayMarker(
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(12),
              );
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(12);
              break;
            case 27:
              ganttDiagramLVOFAZNHInput18.setDiagramTitle(
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(6),
              );
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(6);
              break;
            case 28:
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].trim();
              ganttDiagramLVOFAZNHInput18.setAccTitle(this.$);
              break;
            case 29:
            case 30:
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].trim();
              ganttDiagramLVOFAZNHInput18.setAccDescription(this.$);
              break;
            case 31:
              ganttDiagramLVOFAZNHInput18.addSection(
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(8),
              );
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162
                ].substr(8);
              break;
            case 33:
              ganttDiagramLVOFAZNHInput18.addTask(
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 1],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162],
              );
              this.$ = "task";
              break;
            case 34:
              this.$ =
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 1];
              ganttDiagramLVOFAZNHInput18.setClickEvent(
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 1],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162],
                null,
              );
              break;
            case 35:
              this.$ =
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 2];
              ganttDiagramLVOFAZNHInput18.setClickEvent(
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 2],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 1],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162],
              );
              break;
            case 36:
              this.$ =
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 2];
              ganttDiagramLVOFAZNHInput18.setClickEvent(
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 2],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 1],
                null,
              );
              ganttDiagramLVOFAZNHInput18.setLink(
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 2],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162],
              );
              break;
            case 37:
              this.$ =
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 3];
              ganttDiagramLVOFAZNHInput18.setClickEvent(
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 3],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 2],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 1],
              );
              ganttDiagramLVOFAZNHInput18.setLink(
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 3],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162],
              );
              break;
            case 38:
              this.$ =
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 2];
              ganttDiagramLVOFAZNHInput18.setClickEvent(
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 2],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162],
                null,
              );
              ganttDiagramLVOFAZNHInput18.setLink(
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 2],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 1],
              );
              break;
            case 39:
              this.$ =
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 3];
              ganttDiagramLVOFAZNHInput18.setClickEvent(
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 3],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 1],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162],
              );
              ganttDiagramLVOFAZNHInput18.setLink(
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 3],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 2],
              );
              break;
            case 40:
              this.$ =
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 1];
              ganttDiagramLVOFAZNHInput18.setLink(
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162 - 1],
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162],
              );
              break;
            case 41:
            case 47:
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162 - 1
                ] +
                " " +
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162];
              break;
            case 42:
            case 43:
            case 45:
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162 - 2
                ] +
                " " +
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162 - 1
                ] +
                " " +
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162];
              break;
            case 44:
            case 46:
              this.$ =
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162 - 3
                ] +
                " " +
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162 - 2
                ] +
                " " +
                ganttDiagramLVOFAZNHInput20[
                  ganttDiagramLVOFAZNHBinding162 - 1
                ] +
                " " +
                ganttDiagramLVOFAZNHInput20[ganttDiagramLVOFAZNHBinding162];
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
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 2], {
            5: 3,
          }),
          {
            6: [1, 4],
            7: 5,
            8: [1, 6],
            9: 7,
            10: [1, 8],
            11: 17,
            12: ganttDiagramLVOFAZNHBinding80,
            13: ganttDiagramLVOFAZNHBinding81,
            14: ganttDiagramLVOFAZNHBinding82,
            15: ganttDiagramLVOFAZNHBinding83,
            16: ganttDiagramLVOFAZNHBinding84,
            17: ganttDiagramLVOFAZNHBinding85,
            18: ganttDiagramLVOFAZNHBinding86,
            19: 18,
            20: ganttDiagramLVOFAZNHBinding87,
            21: ganttDiagramLVOFAZNHBinding88,
            22: ganttDiagramLVOFAZNHBinding89,
            23: ganttDiagramLVOFAZNHBinding90,
            24: ganttDiagramLVOFAZNHBinding91,
            25: ganttDiagramLVOFAZNHBinding92,
            26: ganttDiagramLVOFAZNHBinding93,
            27: ganttDiagramLVOFAZNHBinding94,
            28: ganttDiagramLVOFAZNHBinding95,
            29: ganttDiagramLVOFAZNHBinding96,
            30: ganttDiagramLVOFAZNHBinding97,
            31: ganttDiagramLVOFAZNHBinding98,
            33: ganttDiagramLVOFAZNHBinding99,
            35: ganttDiagramLVOFAZNHBinding100,
            36: ganttDiagramLVOFAZNHBinding101,
            37: 24,
            38: ganttDiagramLVOFAZNHBinding102,
            40: ganttDiagramLVOFAZNHBinding103,
          },
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 7], {
            1: [2, 1],
          }),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 3]),
          {
            9: 36,
            11: 17,
            12: ganttDiagramLVOFAZNHBinding80,
            13: ganttDiagramLVOFAZNHBinding81,
            14: ganttDiagramLVOFAZNHBinding82,
            15: ganttDiagramLVOFAZNHBinding83,
            16: ganttDiagramLVOFAZNHBinding84,
            17: ganttDiagramLVOFAZNHBinding85,
            18: ganttDiagramLVOFAZNHBinding86,
            19: 18,
            20: ganttDiagramLVOFAZNHBinding87,
            21: ganttDiagramLVOFAZNHBinding88,
            22: ganttDiagramLVOFAZNHBinding89,
            23: ganttDiagramLVOFAZNHBinding90,
            24: ganttDiagramLVOFAZNHBinding91,
            25: ganttDiagramLVOFAZNHBinding92,
            26: ganttDiagramLVOFAZNHBinding93,
            27: ganttDiagramLVOFAZNHBinding94,
            28: ganttDiagramLVOFAZNHBinding95,
            29: ganttDiagramLVOFAZNHBinding96,
            30: ganttDiagramLVOFAZNHBinding97,
            31: ganttDiagramLVOFAZNHBinding98,
            33: ganttDiagramLVOFAZNHBinding99,
            35: ganttDiagramLVOFAZNHBinding100,
            36: ganttDiagramLVOFAZNHBinding101,
            37: 24,
            38: ganttDiagramLVOFAZNHBinding102,
            40: ganttDiagramLVOFAZNHBinding103,
          },
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 5]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 6]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 17]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 18]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 19]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 20]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 21]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 22]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 23]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 24]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 25]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 26]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 27]),
          {
            32: [1, 37],
          },
          {
            34: [1, 38],
          },
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 30]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 31]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 32]),
          {
            39: [1, 39],
          },
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 8]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 9]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 10]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 11]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 12]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 13]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 14]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 15]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 16]),
          {
            41: [1, 40],
            43: [1, 41],
          },
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 4]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 28]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 29]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 33]),
          ganttDiagramLVOFAZNHBinding78(
            ganttDiagramLVOFAZNHBinding79,
            [2, 34],
            {
              42: [1, 42],
              43: [1, 43],
            },
          ),
          ganttDiagramLVOFAZNHBinding78(
            ganttDiagramLVOFAZNHBinding79,
            [2, 40],
            {
              41: [1, 44],
            },
          ),
          ganttDiagramLVOFAZNHBinding78(
            ganttDiagramLVOFAZNHBinding79,
            [2, 35],
            {
              43: [1, 45],
            },
          ),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 36]),
          ganttDiagramLVOFAZNHBinding78(
            ganttDiagramLVOFAZNHBinding79,
            [2, 38],
            {
              42: [1, 46],
            },
          ),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 37]),
          ganttDiagramLVOFAZNHBinding78(ganttDiagramLVOFAZNHBinding79, [2, 39]),
        ],
        defaultActions: {},
        parseError: chunkAGHRB4JFN(function (
          ganttDiagramLVOFAZNHInput155,
          ganttDiagramLVOFAZNHInput156,
        ) {
          if (ganttDiagramLVOFAZNHInput156.recoverable)
            this.trace(ganttDiagramLVOFAZNHInput155);
          else {
            var ganttDiagramLVOFAZNHBinding367 = Error(
              ganttDiagramLVOFAZNHInput155,
            );
            throw (
              (ganttDiagramLVOFAZNHBinding367.hash =
                ganttDiagramLVOFAZNHInput156),
              ganttDiagramLVOFAZNHBinding367
            );
          }
        }, "parseError"),
        parse: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHInput14) {
          var ganttDiagramLVOFAZNHBinding133 = this,
            ganttDiagramLVOFAZNHBinding134 = [0],
            ganttDiagramLVOFAZNHBinding135 = [],
            ganttDiagramLVOFAZNHBinding136 = [null],
            ganttDiagramLVOFAZNHBinding137 = [],
            ganttDiagramLVOFAZNHBinding138 = this.table,
            ganttDiagramLVOFAZNHBinding139 = "",
            ganttDiagramLVOFAZNHBinding140 = 0,
            ganttDiagramLVOFAZNHBinding141 = 0,
            ganttDiagramLVOFAZNHBinding142 = 0,
            ganttDiagramLVOFAZNHBinding145 =
              ganttDiagramLVOFAZNHBinding137.slice.call(arguments, 1),
            ganttDiagramLVOFAZNHBinding146 = Object.create(this.lexer),
            ganttDiagramLVOFAZNHBinding147 = {
              yy: {},
            };
          for (var ganttDiagramLVOFAZNHBinding148 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              ganttDiagramLVOFAZNHBinding148,
            ) &&
              (ganttDiagramLVOFAZNHBinding147.yy[
                ganttDiagramLVOFAZNHBinding148
              ] = this.yy[ganttDiagramLVOFAZNHBinding148]);
          ganttDiagramLVOFAZNHBinding146.setInput(
            ganttDiagramLVOFAZNHInput14,
            ganttDiagramLVOFAZNHBinding147.yy,
          );
          ganttDiagramLVOFAZNHBinding147.yy.lexer =
            ganttDiagramLVOFAZNHBinding146;
          ganttDiagramLVOFAZNHBinding147.yy.parser = this;
          ganttDiagramLVOFAZNHBinding146.yylloc === undefined &&
            (ganttDiagramLVOFAZNHBinding146.yylloc = {});
          var ganttDiagramLVOFAZNHBinding149 =
            ganttDiagramLVOFAZNHBinding146.yylloc;
          ganttDiagramLVOFAZNHBinding137.push(ganttDiagramLVOFAZNHBinding149);
          var ganttDiagramLVOFAZNHBinding150 =
            ganttDiagramLVOFAZNHBinding146.options &&
            ganttDiagramLVOFAZNHBinding146.options.ranges;
          typeof ganttDiagramLVOFAZNHBinding147.yy.parseError == "function"
            ? (this.parseError = ganttDiagramLVOFAZNHBinding147.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function ganttDiagramLVOFAZNHHelper12(ganttDiagramLVOFAZNHInput175) {
            ganttDiagramLVOFAZNHBinding134.length -=
              2 * ganttDiagramLVOFAZNHInput175;
            ganttDiagramLVOFAZNHBinding136.length -=
              ganttDiagramLVOFAZNHInput175;
            ganttDiagramLVOFAZNHBinding137.length -=
              ganttDiagramLVOFAZNHInput175;
          }
          chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper12, "popStack");
          function ganttDiagramLVOFAZNHHelper13() {
            var ganttDiagramLVOFAZNHBinding345 =
              ganttDiagramLVOFAZNHBinding135.pop() ||
              ganttDiagramLVOFAZNHBinding146.lex() ||
              1;
            return (
              typeof ganttDiagramLVOFAZNHBinding345 != "number" &&
                (ganttDiagramLVOFAZNHBinding345 instanceof Array &&
                  ((ganttDiagramLVOFAZNHBinding135 =
                    ganttDiagramLVOFAZNHBinding345),
                  (ganttDiagramLVOFAZNHBinding345 =
                    ganttDiagramLVOFAZNHBinding135.pop())),
                (ganttDiagramLVOFAZNHBinding345 =
                  ganttDiagramLVOFAZNHBinding133.symbols_[
                    ganttDiagramLVOFAZNHBinding345
                  ] || ganttDiagramLVOFAZNHBinding345)),
              ganttDiagramLVOFAZNHBinding345
            );
          }
          chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper13, "lex");
          for (
            var ganttDiagramLVOFAZNHBinding151,
              ganttDiagramLVOFAZNHBinding152,
              ganttDiagramLVOFAZNHBinding153,
              ganttDiagramLVOFAZNHBinding154,
              ganttDiagramLVOFAZNHBinding155,
              ganttDiagramLVOFAZNHBinding156 = {},
              ganttDiagramLVOFAZNHBinding157,
              ganttDiagramLVOFAZNHBinding158,
              ganttDiagramLVOFAZNHBinding159,
              ganttDiagramLVOFAZNHBinding160;
            ;
          ) {
            if (
              ((ganttDiagramLVOFAZNHBinding153 =
                ganttDiagramLVOFAZNHBinding134[
                  ganttDiagramLVOFAZNHBinding134.length - 1
                ]),
              this.defaultActions[ganttDiagramLVOFAZNHBinding153]
                ? (ganttDiagramLVOFAZNHBinding154 =
                    this.defaultActions[ganttDiagramLVOFAZNHBinding153])
                : ((ganttDiagramLVOFAZNHBinding151 ??=
                    ganttDiagramLVOFAZNHHelper13()),
                  (ganttDiagramLVOFAZNHBinding154 =
                    ganttDiagramLVOFAZNHBinding138[
                      ganttDiagramLVOFAZNHBinding153
                    ] &&
                    ganttDiagramLVOFAZNHBinding138[
                      ganttDiagramLVOFAZNHBinding153
                    ][ganttDiagramLVOFAZNHBinding151])),
              ganttDiagramLVOFAZNHBinding154 === undefined ||
                !ganttDiagramLVOFAZNHBinding154.length ||
                !ganttDiagramLVOFAZNHBinding154[0])
            ) {
              var ganttDiagramLVOFAZNHBinding161 = "";
              for (ganttDiagramLVOFAZNHBinding157 in ((ganttDiagramLVOFAZNHBinding160 =
                []),
              ganttDiagramLVOFAZNHBinding138[ganttDiagramLVOFAZNHBinding153]))
                this.terminals_[ganttDiagramLVOFAZNHBinding157] &&
                  ganttDiagramLVOFAZNHBinding157 > 2 &&
                  ganttDiagramLVOFAZNHBinding160.push(
                    "'" + this.terminals_[ganttDiagramLVOFAZNHBinding157] + "'",
                  );
              ganttDiagramLVOFAZNHBinding161 =
                ganttDiagramLVOFAZNHBinding146.showPosition
                  ? "Parse error on line " +
                    (ganttDiagramLVOFAZNHBinding140 + 1) +
                    ":\n" +
                    ganttDiagramLVOFAZNHBinding146.showPosition() +
                    "\nExpecting " +
                    ganttDiagramLVOFAZNHBinding160.join(", ") +
                    ", got '" +
                    (this.terminals_[ganttDiagramLVOFAZNHBinding151] ||
                      ganttDiagramLVOFAZNHBinding151) +
                    "'"
                  : "Parse error on line " +
                    (ganttDiagramLVOFAZNHBinding140 + 1) +
                    ": Unexpected " +
                    (ganttDiagramLVOFAZNHBinding151 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[ganttDiagramLVOFAZNHBinding151] ||
                          ganttDiagramLVOFAZNHBinding151) +
                        "'");
              this.parseError(ganttDiagramLVOFAZNHBinding161, {
                text: ganttDiagramLVOFAZNHBinding146.match,
                token:
                  this.terminals_[ganttDiagramLVOFAZNHBinding151] ||
                  ganttDiagramLVOFAZNHBinding151,
                line: ganttDiagramLVOFAZNHBinding146.yylineno,
                loc: ganttDiagramLVOFAZNHBinding149,
                expected: ganttDiagramLVOFAZNHBinding160,
              });
            }
            if (
              ganttDiagramLVOFAZNHBinding154[0] instanceof Array &&
              ganttDiagramLVOFAZNHBinding154.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  ganttDiagramLVOFAZNHBinding153 +
                  ", token: " +
                  ganttDiagramLVOFAZNHBinding151,
              );
            switch (ganttDiagramLVOFAZNHBinding154[0]) {
              case 1:
                ganttDiagramLVOFAZNHBinding134.push(
                  ganttDiagramLVOFAZNHBinding151,
                );
                ganttDiagramLVOFAZNHBinding136.push(
                  ganttDiagramLVOFAZNHBinding146.yytext,
                );
                ganttDiagramLVOFAZNHBinding137.push(
                  ganttDiagramLVOFAZNHBinding146.yylloc,
                );
                ganttDiagramLVOFAZNHBinding134.push(
                  ganttDiagramLVOFAZNHBinding154[1],
                );
                ganttDiagramLVOFAZNHBinding151 = null;
                ganttDiagramLVOFAZNHBinding152
                  ? ((ganttDiagramLVOFAZNHBinding151 =
                      ganttDiagramLVOFAZNHBinding152),
                    (ganttDiagramLVOFAZNHBinding152 = null))
                  : ((ganttDiagramLVOFAZNHBinding141 =
                      ganttDiagramLVOFAZNHBinding146.yyleng),
                    (ganttDiagramLVOFAZNHBinding139 =
                      ganttDiagramLVOFAZNHBinding146.yytext),
                    (ganttDiagramLVOFAZNHBinding140 =
                      ganttDiagramLVOFAZNHBinding146.yylineno),
                    (ganttDiagramLVOFAZNHBinding149 =
                      ganttDiagramLVOFAZNHBinding146.yylloc),
                    ganttDiagramLVOFAZNHBinding142 > 0 &&
                      ganttDiagramLVOFAZNHBinding142--);
                break;
              case 2:
                if (
                  ((ganttDiagramLVOFAZNHBinding158 =
                    this.productions_[ganttDiagramLVOFAZNHBinding154[1]][1]),
                  (ganttDiagramLVOFAZNHBinding156.$ =
                    ganttDiagramLVOFAZNHBinding136[
                      ganttDiagramLVOFAZNHBinding136.length -
                        ganttDiagramLVOFAZNHBinding158
                    ]),
                  (ganttDiagramLVOFAZNHBinding156._$ = {
                    first_line:
                      ganttDiagramLVOFAZNHBinding137[
                        ganttDiagramLVOFAZNHBinding137.length -
                          (ganttDiagramLVOFAZNHBinding158 || 1)
                      ].first_line,
                    last_line:
                      ganttDiagramLVOFAZNHBinding137[
                        ganttDiagramLVOFAZNHBinding137.length - 1
                      ].last_line,
                    first_column:
                      ganttDiagramLVOFAZNHBinding137[
                        ganttDiagramLVOFAZNHBinding137.length -
                          (ganttDiagramLVOFAZNHBinding158 || 1)
                      ].first_column,
                    last_column:
                      ganttDiagramLVOFAZNHBinding137[
                        ganttDiagramLVOFAZNHBinding137.length - 1
                      ].last_column,
                  }),
                  ganttDiagramLVOFAZNHBinding150 &&
                    (ganttDiagramLVOFAZNHBinding156._$.range = [
                      ganttDiagramLVOFAZNHBinding137[
                        ganttDiagramLVOFAZNHBinding137.length -
                          (ganttDiagramLVOFAZNHBinding158 || 1)
                      ].range[0],
                      ganttDiagramLVOFAZNHBinding137[
                        ganttDiagramLVOFAZNHBinding137.length - 1
                      ].range[1],
                    ]),
                  (ganttDiagramLVOFAZNHBinding155 = this.performAction.apply(
                    ganttDiagramLVOFAZNHBinding156,
                    [
                      ganttDiagramLVOFAZNHBinding139,
                      ganttDiagramLVOFAZNHBinding141,
                      ganttDiagramLVOFAZNHBinding140,
                      ganttDiagramLVOFAZNHBinding147.yy,
                      ganttDiagramLVOFAZNHBinding154[1],
                      ganttDiagramLVOFAZNHBinding136,
                      ganttDiagramLVOFAZNHBinding137,
                    ].concat(ganttDiagramLVOFAZNHBinding145),
                  )),
                  ganttDiagramLVOFAZNHBinding155 !== undefined)
                )
                  return ganttDiagramLVOFAZNHBinding155;
                ganttDiagramLVOFAZNHBinding158 &&
                  ((ganttDiagramLVOFAZNHBinding134 =
                    ganttDiagramLVOFAZNHBinding134.slice(
                      0,
                      -1 * ganttDiagramLVOFAZNHBinding158 * 2,
                    )),
                  (ganttDiagramLVOFAZNHBinding136 =
                    ganttDiagramLVOFAZNHBinding136.slice(
                      0,
                      -1 * ganttDiagramLVOFAZNHBinding158,
                    )),
                  (ganttDiagramLVOFAZNHBinding137 =
                    ganttDiagramLVOFAZNHBinding137.slice(
                      0,
                      -1 * ganttDiagramLVOFAZNHBinding158,
                    )));
                ganttDiagramLVOFAZNHBinding134.push(
                  this.productions_[ganttDiagramLVOFAZNHBinding154[1]][0],
                );
                ganttDiagramLVOFAZNHBinding136.push(
                  ganttDiagramLVOFAZNHBinding156.$,
                );
                ganttDiagramLVOFAZNHBinding137.push(
                  ganttDiagramLVOFAZNHBinding156._$,
                );
                ganttDiagramLVOFAZNHBinding159 =
                  ganttDiagramLVOFAZNHBinding138[
                    ganttDiagramLVOFAZNHBinding134[
                      ganttDiagramLVOFAZNHBinding134.length - 2
                    ]
                  ][
                    ganttDiagramLVOFAZNHBinding134[
                      ganttDiagramLVOFAZNHBinding134.length - 1
                    ]
                  ];
                ganttDiagramLVOFAZNHBinding134.push(
                  ganttDiagramLVOFAZNHBinding159,
                );
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    ganttDiagramLVOFAZNHBinding104.lexer = (function () {
      return {
        EOF: 1,
        parseError: chunkAGHRB4JFN(function (
          ganttDiagramLVOFAZNHInput168,
          ganttDiagramLVOFAZNHInput169,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              ganttDiagramLVOFAZNHInput168,
              ganttDiagramLVOFAZNHInput169,
            );
          else throw Error(ganttDiagramLVOFAZNHInput168);
        }, "parseError"),
        setInput: chunkAGHRB4JFN(function (
          ganttDiagramLVOFAZNHInput80,
          ganttDiagramLVOFAZNHInput81,
        ) {
          return (
            (this.yy = ganttDiagramLVOFAZNHInput81 || this.yy || {}),
            (this._input = ganttDiagramLVOFAZNHInput80),
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
          var ganttDiagramLVOFAZNHBinding300 = this._input[0];
          return (
            (this.yytext += ganttDiagramLVOFAZNHBinding300),
            this.yyleng++,
            this.offset++,
            (this.match += ganttDiagramLVOFAZNHBinding300),
            (this.matched += ganttDiagramLVOFAZNHBinding300),
            ganttDiagramLVOFAZNHBinding300.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            ganttDiagramLVOFAZNHBinding300
          );
        }, "input"),
        unput: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHInput64) {
          var ganttDiagramLVOFAZNHBinding243 =
              ganttDiagramLVOFAZNHInput64.length,
            ganttDiagramLVOFAZNHBinding244 =
              ganttDiagramLVOFAZNHInput64.split(/(?:\r\n?|\n)/g);
          this._input = ganttDiagramLVOFAZNHInput64 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - ganttDiagramLVOFAZNHBinding243,
          );
          this.offset -= ganttDiagramLVOFAZNHBinding243;
          var ganttDiagramLVOFAZNHBinding245 =
            this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          ganttDiagramLVOFAZNHBinding244.length - 1 &&
            (this.yylineno -= ganttDiagramLVOFAZNHBinding244.length - 1);
          var ganttDiagramLVOFAZNHBinding246 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: ganttDiagramLVOFAZNHBinding244
                ? (ganttDiagramLVOFAZNHBinding244.length ===
                  ganttDiagramLVOFAZNHBinding245.length
                    ? this.yylloc.first_column
                    : 0) +
                  ganttDiagramLVOFAZNHBinding245[
                    ganttDiagramLVOFAZNHBinding245.length -
                      ganttDiagramLVOFAZNHBinding244.length
                  ].length -
                  ganttDiagramLVOFAZNHBinding244[0].length
                : this.yylloc.first_column - ganttDiagramLVOFAZNHBinding243,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                ganttDiagramLVOFAZNHBinding246[0],
                ganttDiagramLVOFAZNHBinding246[0] +
                  this.yyleng -
                  ganttDiagramLVOFAZNHBinding243,
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
        less: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHInput189) {
          this.unput(this.match.slice(ganttDiagramLVOFAZNHInput189));
        }, "less"),
        pastInput: chunkAGHRB4JFN(function () {
          var ganttDiagramLVOFAZNHBinding346 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (ganttDiagramLVOFAZNHBinding346.length > 20 ? "..." : "") +
            ganttDiagramLVOFAZNHBinding346.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: chunkAGHRB4JFN(function () {
          var ganttDiagramLVOFAZNHBinding340 = this.match;
          return (
            ganttDiagramLVOFAZNHBinding340.length < 20 &&
              (ganttDiagramLVOFAZNHBinding340 += this._input.substr(
                0,
                20 - ganttDiagramLVOFAZNHBinding340.length,
              )),
            (
              ganttDiagramLVOFAZNHBinding340.substr(0, 20) +
              (ganttDiagramLVOFAZNHBinding340.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: chunkAGHRB4JFN(function () {
          var ganttDiagramLVOFAZNHBinding351 = this.pastInput(),
            ganttDiagramLVOFAZNHBinding352 = Array(
              ganttDiagramLVOFAZNHBinding351.length + 1,
            ).join("-");
          return (
            ganttDiagramLVOFAZNHBinding351 +
            this.upcomingInput() +
            "\n" +
            ganttDiagramLVOFAZNHBinding352 +
            "^"
          );
        }, "showPosition"),
        test_match: chunkAGHRB4JFN(function (
          ganttDiagramLVOFAZNHInput34,
          ganttDiagramLVOFAZNHInput35,
        ) {
          var ganttDiagramLVOFAZNHBinding170,
            ganttDiagramLVOFAZNHBinding171,
            ganttDiagramLVOFAZNHBinding172;
          if (
            (this.options.backtrack_lexer &&
              ((ganttDiagramLVOFAZNHBinding172 = {
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
                (ganttDiagramLVOFAZNHBinding172.yylloc.range =
                  this.yylloc.range.slice(0))),
            (ganttDiagramLVOFAZNHBinding171 =
              ganttDiagramLVOFAZNHInput34[0].match(/(?:\r\n?|\n).*/g)),
            ganttDiagramLVOFAZNHBinding171 &&
              (this.yylineno += ganttDiagramLVOFAZNHBinding171.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: ganttDiagramLVOFAZNHBinding171
                ? ganttDiagramLVOFAZNHBinding171[
                    ganttDiagramLVOFAZNHBinding171.length - 1
                  ].length -
                  ganttDiagramLVOFAZNHBinding171[
                    ganttDiagramLVOFAZNHBinding171.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  ganttDiagramLVOFAZNHInput34[0].length,
            }),
            (this.yytext += ganttDiagramLVOFAZNHInput34[0]),
            (this.match += ganttDiagramLVOFAZNHInput34[0]),
            (this.matches = ganttDiagramLVOFAZNHInput34),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              ganttDiagramLVOFAZNHInput34[0].length,
            )),
            (this.matched += ganttDiagramLVOFAZNHInput34[0]),
            (ganttDiagramLVOFAZNHBinding170 = this.performAction.call(
              this,
              this.yy,
              this,
              ganttDiagramLVOFAZNHInput35,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            ganttDiagramLVOFAZNHBinding170)
          )
            return ganttDiagramLVOFAZNHBinding170;
          if (this._backtrack) {
            for (var ganttDiagramLVOFAZNHBinding173 in ganttDiagramLVOFAZNHBinding172)
              this[ganttDiagramLVOFAZNHBinding173] =
                ganttDiagramLVOFAZNHBinding172[ganttDiagramLVOFAZNHBinding173];
            return false;
          }
          return false;
        }, "test_match"),
        next: chunkAGHRB4JFN(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var ganttDiagramLVOFAZNHBinding237,
            ganttDiagramLVOFAZNHBinding238,
            ganttDiagramLVOFAZNHBinding239,
            ganttDiagramLVOFAZNHBinding240;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var ganttDiagramLVOFAZNHBinding241 = this._currentRules(),
              ganttDiagramLVOFAZNHBinding242 = 0;
            ganttDiagramLVOFAZNHBinding242 <
            ganttDiagramLVOFAZNHBinding241.length;
            ganttDiagramLVOFAZNHBinding242++
          )
            if (
              ((ganttDiagramLVOFAZNHBinding239 = this._input.match(
                this.rules[
                  ganttDiagramLVOFAZNHBinding241[ganttDiagramLVOFAZNHBinding242]
                ],
              )),
              ganttDiagramLVOFAZNHBinding239 &&
                (!ganttDiagramLVOFAZNHBinding238 ||
                  ganttDiagramLVOFAZNHBinding239[0].length >
                    ganttDiagramLVOFAZNHBinding238[0].length))
            ) {
              if (
                ((ganttDiagramLVOFAZNHBinding238 =
                  ganttDiagramLVOFAZNHBinding239),
                (ganttDiagramLVOFAZNHBinding240 =
                  ganttDiagramLVOFAZNHBinding242),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((ganttDiagramLVOFAZNHBinding237 = this.test_match(
                    ganttDiagramLVOFAZNHBinding239,
                    ganttDiagramLVOFAZNHBinding241[
                      ganttDiagramLVOFAZNHBinding242
                    ],
                  )),
                  ganttDiagramLVOFAZNHBinding237 !== false)
                )
                  return ganttDiagramLVOFAZNHBinding237;
                if (this._backtrack) {
                  ganttDiagramLVOFAZNHBinding238 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return ganttDiagramLVOFAZNHBinding238
            ? ((ganttDiagramLVOFAZNHBinding237 = this.test_match(
                ganttDiagramLVOFAZNHBinding238,
                ganttDiagramLVOFAZNHBinding241[ganttDiagramLVOFAZNHBinding240],
              )),
              ganttDiagramLVOFAZNHBinding237 === false
                ? false
                : ganttDiagramLVOFAZNHBinding237)
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
        begin: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHInput195) {
          this.conditionStack.push(ganttDiagramLVOFAZNHInput195);
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
        topState: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHInput152) {
          return (
            (ganttDiagramLVOFAZNHInput152 =
              this.conditionStack.length -
              1 -
              Math.abs(ganttDiagramLVOFAZNHInput152 || 0)),
            ganttDiagramLVOFAZNHInput152 >= 0
              ? this.conditionStack[ganttDiagramLVOFAZNHInput152]
              : "INITIAL"
          );
        }, "topState"),
        pushState: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHInput206) {
          this.begin(ganttDiagramLVOFAZNHInput206);
        }, "pushState"),
        stateStackSize: chunkAGHRB4JFN(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: chunkAGHRB4JFN(function (
          ganttDiagramLVOFAZNHInput27,
          ganttDiagramLVOFAZNHInput28,
          ganttDiagramLVOFAZNHInput29,
          ganttDiagramLVOFAZNHInput30,
        ) {
          switch (ganttDiagramLVOFAZNHInput29) {
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
    function ganttDiagramLVOFAZNHHelper2() {
      this.yy = {};
    }
    return (
      chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper2, "Parser"),
      (ganttDiagramLVOFAZNHHelper2.prototype = ganttDiagramLVOFAZNHBinding104),
      (ganttDiagramLVOFAZNHBinding104.Parser = ganttDiagramLVOFAZNHHelper2),
      new ganttDiagramLVOFAZNHHelper2()
    );
  })();
  ganttDiagramLVOFAZNHBinding9.parser = ganttDiagramLVOFAZNHBinding9;
  ganttDiagramLVOFAZNHBinding10 = ganttDiagramLVOFAZNHBinding9;
  ganttDiagramLVOFAZNHBinding5.default.extend(
    ganttDiagramLVOFAZNHBinding6.default,
  );
  ganttDiagramLVOFAZNHBinding5.default.extend(_e.default);
  ganttDiagramLVOFAZNHBinding5.default.extend(
    ganttDiagramLVOFAZNHBinding7.default,
  );
  be = {
    friday: 5,
    saturday: 6,
  };
  ganttDiagramLVOFAZNHBinding11 = "";
  ganttDiagramLVOFAZNHBinding12 = "";
  ganttDiagramLVOFAZNHBinding13 = undefined;
  ganttDiagramLVOFAZNHBinding14 = "";
  ganttDiagramLVOFAZNHBinding15 = [];
  ganttDiagramLVOFAZNHBinding16 = [];
  ganttDiagramLVOFAZNHBinding17 = new Map();
  ganttDiagramLVOFAZNHBinding18 = [];
  ganttDiagramLVOFAZNHBinding19 = [];
  ganttDiagramLVOFAZNHBinding20 = "";
  ganttDiagramLVOFAZNHBinding21 = "";
  ganttDiagramLVOFAZNHBinding22 = [
    "active",
    "done",
    "crit",
    "milestone",
    "vert",
  ];
  ganttDiagramLVOFAZNHBinding23 = [];
  ganttDiagramLVOFAZNHBinding24 = false;
  ganttDiagramLVOFAZNHBinding25 = false;
  ganttDiagramLVOFAZNHBinding26 = "sunday";
  ganttDiagramLVOFAZNHBinding27 = "saturday";
  ganttDiagramLVOFAZNHBinding28 = 0;
  ganttDiagramLVOFAZNHBinding29 = chunkAGHRB4JFN(function () {
    ganttDiagramLVOFAZNHBinding18 = [];
    ganttDiagramLVOFAZNHBinding19 = [];
    ganttDiagramLVOFAZNHBinding20 = "";
    ganttDiagramLVOFAZNHBinding23 = [];
    ganttDiagramLVOFAZNHBinding60 = 0;
    ganttDiagramLVOFAZNHBinding63 = undefined;
    ganttDiagramLVOFAZNHBinding64 = undefined;
    ganttDiagramLVOFAZNHBinding65 = [];
    ganttDiagramLVOFAZNHBinding11 = "";
    ganttDiagramLVOFAZNHBinding12 = "";
    ganttDiagramLVOFAZNHBinding21 = "";
    ganttDiagramLVOFAZNHBinding13 = undefined;
    ganttDiagramLVOFAZNHBinding14 = "";
    ganttDiagramLVOFAZNHBinding15 = [];
    ganttDiagramLVOFAZNHBinding16 = [];
    ganttDiagramLVOFAZNHBinding24 = false;
    ganttDiagramLVOFAZNHBinding25 = false;
    ganttDiagramLVOFAZNHBinding28 = 0;
    ganttDiagramLVOFAZNHBinding17 = new Map();
    chunkABZYJK2DA();
    ganttDiagramLVOFAZNHBinding26 = "sunday";
    ganttDiagramLVOFAZNHBinding27 = "saturday";
  }, "clear");
  ganttDiagramLVOFAZNHBinding30 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput214,
  ) {
    ganttDiagramLVOFAZNHBinding12 = ganttDiagramLVOFAZNHInput214;
  }, "setAxisFormat");
  ganttDiagramLVOFAZNHBinding31 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHBinding12;
  }, "getAxisFormat");
  ganttDiagramLVOFAZNHBinding32 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput215,
  ) {
    ganttDiagramLVOFAZNHBinding13 = ganttDiagramLVOFAZNHInput215;
  }, "setTickInterval");
  ganttDiagramLVOFAZNHBinding33 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHBinding13;
  }, "getTickInterval");
  ganttDiagramLVOFAZNHBinding34 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput216,
  ) {
    ganttDiagramLVOFAZNHBinding14 = ganttDiagramLVOFAZNHInput216;
  }, "setTodayMarker");
  ganttDiagramLVOFAZNHBinding35 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHBinding14;
  }, "getTodayMarker");
  ganttDiagramLVOFAZNHBinding36 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput217,
  ) {
    ganttDiagramLVOFAZNHBinding11 = ganttDiagramLVOFAZNHInput217;
  }, "setDateFormat");
  ganttDiagramLVOFAZNHBinding37 = chunkAGHRB4JFN(function () {
    ganttDiagramLVOFAZNHBinding24 = true;
  }, "enableInclusiveEndDates");
  ganttDiagramLVOFAZNHBinding38 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHBinding24;
  }, "endDatesAreInclusive");
  ganttDiagramLVOFAZNHBinding39 = chunkAGHRB4JFN(function () {
    ganttDiagramLVOFAZNHBinding25 = true;
  }, "enableTopAxis");
  ganttDiagramLVOFAZNHBinding40 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHBinding25;
  }, "topAxisEnabled");
  ganttDiagramLVOFAZNHBinding41 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput218,
  ) {
    ganttDiagramLVOFAZNHBinding21 = ganttDiagramLVOFAZNHInput218;
  }, "setDisplayMode");
  ganttDiagramLVOFAZNHBinding42 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHBinding21;
  }, "getDisplayMode");
  ganttDiagramLVOFAZNHBinding43 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHBinding11;
  }, "getDateFormat");
  ganttDiagramLVOFAZNHBinding44 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput198,
  ) {
    ganttDiagramLVOFAZNHBinding15 = ganttDiagramLVOFAZNHInput198
      .toLowerCase()
      .split(/[\s,]+/);
  }, "setIncludes");
  ganttDiagramLVOFAZNHBinding45 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHBinding15;
  }, "getIncludes");
  ganttDiagramLVOFAZNHBinding46 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput199,
  ) {
    ganttDiagramLVOFAZNHBinding16 = ganttDiagramLVOFAZNHInput199
      .toLowerCase()
      .split(/[\s,]+/);
  }, "setExcludes");
  ganttDiagramLVOFAZNHBinding47 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHBinding16;
  }, "getExcludes");
  ganttDiagramLVOFAZNHBinding48 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHBinding17;
  }, "getLinks");
  ganttDiagramLVOFAZNHBinding49 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput210,
  ) {
    ganttDiagramLVOFAZNHBinding20 = ganttDiagramLVOFAZNHInput210;
    ganttDiagramLVOFAZNHBinding18.push(ganttDiagramLVOFAZNHInput210);
  }, "addSection");
  ganttDiagramLVOFAZNHBinding50 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHBinding18;
  }, "getSections");
  ganttDiagramLVOFAZNHBinding51 = chunkAGHRB4JFN(function () {
    let ganttDiagramLVOFAZNHBinding385 = ganttDiagramLVOFAZNHBinding70(),
      ganttDiagramLVOFAZNHBinding386 = 0;
    for (
      ;
      !ganttDiagramLVOFAZNHBinding385 && ganttDiagramLVOFAZNHBinding386 < 10;
    ) {
      ganttDiagramLVOFAZNHBinding385 = ganttDiagramLVOFAZNHBinding70();
      ganttDiagramLVOFAZNHBinding386++;
    }
    return (
      (ganttDiagramLVOFAZNHBinding19 = ganttDiagramLVOFAZNHBinding65),
      ganttDiagramLVOFAZNHBinding19
    );
  }, "getTasks");
  ganttDiagramLVOFAZNHBinding52 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput112,
    ganttDiagramLVOFAZNHInput113,
    ganttDiagramLVOFAZNHInput114,
    ganttDiagramLVOFAZNHInput115,
  ) {
    let ganttDiagramLVOFAZNHBinding327 = ganttDiagramLVOFAZNHInput112.format(
        ganttDiagramLVOFAZNHInput113.trim(),
      ),
      ganttDiagramLVOFAZNHBinding328 =
        ganttDiagramLVOFAZNHInput112.format("YYYY-MM-DD");
    return ganttDiagramLVOFAZNHInput115.includes(
      ganttDiagramLVOFAZNHBinding327,
    ) || ganttDiagramLVOFAZNHInput115.includes(ganttDiagramLVOFAZNHBinding328)
      ? false
      : (ganttDiagramLVOFAZNHInput114.includes("weekends") &&
            (ganttDiagramLVOFAZNHInput112.isoWeekday() ===
              be[ganttDiagramLVOFAZNHBinding27] ||
              ganttDiagramLVOFAZNHInput112.isoWeekday() ===
                be[ganttDiagramLVOFAZNHBinding27] + 1)) ||
          ganttDiagramLVOFAZNHInput114.includes(
            ganttDiagramLVOFAZNHInput112.format("dddd").toLowerCase(),
          )
        ? true
        : ganttDiagramLVOFAZNHInput114.includes(
            ganttDiagramLVOFAZNHBinding327,
          ) ||
          ganttDiagramLVOFAZNHInput114.includes(ganttDiagramLVOFAZNHBinding328);
  }, "isInvalidDate");
  ganttDiagramLVOFAZNHBinding53 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput213,
  ) {
    ganttDiagramLVOFAZNHBinding26 = ganttDiagramLVOFAZNHInput213;
  }, "setWeekday");
  ganttDiagramLVOFAZNHBinding54 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHBinding26;
  }, "getWeekday");
  ganttDiagramLVOFAZNHBinding55 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput219,
  ) {
    ganttDiagramLVOFAZNHBinding27 = ganttDiagramLVOFAZNHInput219;
  }, "setWeekend");
  ganttDiagramLVOFAZNHBinding56 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput96,
    ganttDiagramLVOFAZNHInput97,
    ganttDiagramLVOFAZNHInput98,
    ganttDiagramLVOFAZNHInput99,
  ) {
    if (
      !ganttDiagramLVOFAZNHInput98.length ||
      ganttDiagramLVOFAZNHInput96.manualEndTime
    )
      return;
    let ganttDiagramLVOFAZNHBinding310;
    ganttDiagramLVOFAZNHBinding310 =
      ganttDiagramLVOFAZNHInput96.startTime instanceof Date
        ? ganttDiagramLVOFAZNHBinding5.default(
            ganttDiagramLVOFAZNHInput96.startTime,
          )
        : ganttDiagramLVOFAZNHBinding5.default(
            ganttDiagramLVOFAZNHInput96.startTime,
            ganttDiagramLVOFAZNHInput97,
            true,
          );
    ganttDiagramLVOFAZNHBinding310 = ganttDiagramLVOFAZNHBinding310.add(1, "d");
    let ganttDiagramLVOFAZNHBinding311;
    ganttDiagramLVOFAZNHBinding311 =
      ganttDiagramLVOFAZNHInput96.endTime instanceof Date
        ? ganttDiagramLVOFAZNHBinding5.default(
            ganttDiagramLVOFAZNHInput96.endTime,
          )
        : ganttDiagramLVOFAZNHBinding5.default(
            ganttDiagramLVOFAZNHInput96.endTime,
            ganttDiagramLVOFAZNHInput97,
            true,
          );
    let [ganttDiagramLVOFAZNHBinding312, ganttDiagramLVOFAZNHBinding313] = $e(
      ganttDiagramLVOFAZNHBinding310,
      ganttDiagramLVOFAZNHBinding311,
      ganttDiagramLVOFAZNHInput97,
      ganttDiagramLVOFAZNHInput98,
      ganttDiagramLVOFAZNHInput99,
    );
    ganttDiagramLVOFAZNHInput96.endTime =
      ganttDiagramLVOFAZNHBinding312.toDate();
    ganttDiagramLVOFAZNHInput96.renderEndTime = ganttDiagramLVOFAZNHBinding313;
  }, "checkTaskDates");
  $e = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput139,
    ganttDiagramLVOFAZNHInput140,
    ganttDiagramLVOFAZNHInput141,
    ganttDiagramLVOFAZNHInput142,
    ganttDiagramLVOFAZNHInput143,
  ) {
    let ganttDiagramLVOFAZNHBinding356 = false,
      ganttDiagramLVOFAZNHBinding357 = null;
    for (; ganttDiagramLVOFAZNHInput139 <= ganttDiagramLVOFAZNHInput140; ) {
      ganttDiagramLVOFAZNHBinding356 ||
        (ganttDiagramLVOFAZNHBinding357 =
          ganttDiagramLVOFAZNHInput140.toDate());
      ganttDiagramLVOFAZNHBinding356 = ganttDiagramLVOFAZNHBinding52(
        ganttDiagramLVOFAZNHInput139,
        ganttDiagramLVOFAZNHInput141,
        ganttDiagramLVOFAZNHInput142,
        ganttDiagramLVOFAZNHInput143,
      );
      ganttDiagramLVOFAZNHBinding356 &&
        (ganttDiagramLVOFAZNHInput140 = ganttDiagramLVOFAZNHInput140.add(
          1,
          "d",
        ));
      ganttDiagramLVOFAZNHInput139 = ganttDiagramLVOFAZNHInput139.add(1, "d");
    }
    return [ganttDiagramLVOFAZNHInput140, ganttDiagramLVOFAZNHBinding357];
  }, "fixTaskDates");
  ganttDiagramLVOFAZNHBinding57 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput65,
    ganttDiagramLVOFAZNHInput66,
    ganttDiagramLVOFAZNHInput67,
  ) {
    if (
      ((ganttDiagramLVOFAZNHInput67 = ganttDiagramLVOFAZNHInput67.trim()),
      (ganttDiagramLVOFAZNHInput66.trim() === "x" ||
        ganttDiagramLVOFAZNHInput66.trim() === "X") &&
        /^\d+$/.test(ganttDiagramLVOFAZNHInput67))
    )
      return new Date(Number(ganttDiagramLVOFAZNHInput67));
    let ganttDiagramLVOFAZNHBinding249 = /^after\s+(?<ids>[\d\w- ]+)/.exec(
      ganttDiagramLVOFAZNHInput67,
    );
    if (ganttDiagramLVOFAZNHBinding249 !== null) {
      let ganttDiagramLVOFAZNHBinding343 = null;
      for (let ganttDiagramLVOFAZNHBinding383 of ganttDiagramLVOFAZNHBinding249.groups.ids.split(
        " ",
      )) {
        let ganttDiagramLVOFAZNHBinding391 = ganttDiagramLVOFAZNHBinding68(
          ganttDiagramLVOFAZNHBinding383,
        );
        ganttDiagramLVOFAZNHBinding391 !== undefined &&
          (!ganttDiagramLVOFAZNHBinding343 ||
            ganttDiagramLVOFAZNHBinding391.endTime >
              ganttDiagramLVOFAZNHBinding343.endTime) &&
          (ganttDiagramLVOFAZNHBinding343 = ganttDiagramLVOFAZNHBinding391);
      }
      if (ganttDiagramLVOFAZNHBinding343)
        return ganttDiagramLVOFAZNHBinding343.endTime;
      let ganttDiagramLVOFAZNHBinding344 = new Date();
      return (
        ganttDiagramLVOFAZNHBinding344.setHours(0, 0, 0, 0),
        ganttDiagramLVOFAZNHBinding344
      );
    }
    let ganttDiagramLVOFAZNHBinding250 = ganttDiagramLVOFAZNHBinding5.default(
      ganttDiagramLVOFAZNHInput67,
      ganttDiagramLVOFAZNHInput66.trim(),
      true,
    );
    if (ganttDiagramLVOFAZNHBinding250.isValid())
      return ganttDiagramLVOFAZNHBinding250.toDate();
    {
      chunkAGHRB4JFI.debug("Invalid date:" + ganttDiagramLVOFAZNHInput67);
      chunkAGHRB4JFI.debug(
        "With date format:" + ganttDiagramLVOFAZNHInput66.trim(),
      );
      let ganttDiagramLVOFAZNHBinding336 = new Date(
        ganttDiagramLVOFAZNHInput67,
      );
      if (
        ganttDiagramLVOFAZNHBinding336 === undefined ||
        isNaN(ganttDiagramLVOFAZNHBinding336.getTime()) ||
        ganttDiagramLVOFAZNHBinding336.getFullYear() < -10000 ||
        ganttDiagramLVOFAZNHBinding336.getFullYear() > 1e4
      )
        throw Error("Invalid date:" + ganttDiagramLVOFAZNHInput67);
      return ganttDiagramLVOFAZNHBinding336;
    }
  }, "getStartDate");
  ganttDiagramLVOFAZNHBinding58 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput161,
  ) {
    let ganttDiagramLVOFAZNHBinding375 = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(
      ganttDiagramLVOFAZNHInput161.trim(),
    );
    return ganttDiagramLVOFAZNHBinding375 === null
      ? [NaN, "ms"]
      : [
          Number.parseFloat(ganttDiagramLVOFAZNHBinding375[1]),
          ganttDiagramLVOFAZNHBinding375[2],
        ];
  }, "parseDuration");
  ganttDiagramLVOFAZNHBinding59 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput75,
    ganttDiagramLVOFAZNHInput76,
    ganttDiagramLVOFAZNHInput77,
    ganttDiagramLVOFAZNHInput78 = false,
  ) {
    ganttDiagramLVOFAZNHInput77 = ganttDiagramLVOFAZNHInput77.trim();
    let ganttDiagramLVOFAZNHBinding272 = /^until\s+(?<ids>[\d\w- ]+)/.exec(
      ganttDiagramLVOFAZNHInput77,
    );
    if (ganttDiagramLVOFAZNHBinding272 !== null) {
      let ganttDiagramLVOFAZNHBinding341 = null;
      for (let ganttDiagramLVOFAZNHBinding380 of ganttDiagramLVOFAZNHBinding272.groups.ids.split(
        " ",
      )) {
        let ganttDiagramLVOFAZNHBinding388 = ganttDiagramLVOFAZNHBinding68(
          ganttDiagramLVOFAZNHBinding380,
        );
        ganttDiagramLVOFAZNHBinding388 !== undefined &&
          (!ganttDiagramLVOFAZNHBinding341 ||
            ganttDiagramLVOFAZNHBinding388.startTime <
              ganttDiagramLVOFAZNHBinding341.startTime) &&
          (ganttDiagramLVOFAZNHBinding341 = ganttDiagramLVOFAZNHBinding388);
      }
      if (ganttDiagramLVOFAZNHBinding341)
        return ganttDiagramLVOFAZNHBinding341.startTime;
      let ganttDiagramLVOFAZNHBinding342 = new Date();
      return (
        ganttDiagramLVOFAZNHBinding342.setHours(0, 0, 0, 0),
        ganttDiagramLVOFAZNHBinding342
      );
    }
    let ganttDiagramLVOFAZNHBinding273 = ganttDiagramLVOFAZNHBinding5.default(
      ganttDiagramLVOFAZNHInput77,
      ganttDiagramLVOFAZNHInput76.trim(),
      true,
    );
    if (ganttDiagramLVOFAZNHBinding273.isValid())
      return (
        ganttDiagramLVOFAZNHInput78 &&
          (ganttDiagramLVOFAZNHBinding273 = ganttDiagramLVOFAZNHBinding273.add(
            1,
            "d",
          )),
        ganttDiagramLVOFAZNHBinding273.toDate()
      );
    let ganttDiagramLVOFAZNHBinding274 = ganttDiagramLVOFAZNHBinding5.default(
        ganttDiagramLVOFAZNHInput75,
      ),
      [ganttDiagramLVOFAZNHBinding275, ganttDiagramLVOFAZNHBinding276] =
        ganttDiagramLVOFAZNHBinding58(ganttDiagramLVOFAZNHInput77);
    if (!Number.isNaN(ganttDiagramLVOFAZNHBinding275)) {
      let ganttDiagramLVOFAZNHBinding397 = ganttDiagramLVOFAZNHBinding274.add(
        ganttDiagramLVOFAZNHBinding275,
        ganttDiagramLVOFAZNHBinding276,
      );
      ganttDiagramLVOFAZNHBinding397.isValid() &&
        (ganttDiagramLVOFAZNHBinding274 = ganttDiagramLVOFAZNHBinding397);
    }
    return ganttDiagramLVOFAZNHBinding274.toDate();
  }, "getEndDate");
  ganttDiagramLVOFAZNHBinding60 = 0;
  ganttDiagramLVOFAZNHBinding61 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput184,
  ) {
    return ganttDiagramLVOFAZNHInput184 === undefined
      ? ((ganttDiagramLVOFAZNHBinding60 += 1),
        "task" + ganttDiagramLVOFAZNHBinding60)
      : ganttDiagramLVOFAZNHInput184;
  }, "parseId");
  ganttDiagramLVOFAZNHBinding62 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput70,
    ganttDiagramLVOFAZNHInput71,
  ) {
    let ganttDiagramLVOFAZNHBinding262;
    ganttDiagramLVOFAZNHBinding262 =
      ganttDiagramLVOFAZNHInput71.substr(0, 1) === ":"
        ? ganttDiagramLVOFAZNHInput71.substr(
            1,
            ganttDiagramLVOFAZNHInput71.length,
          )
        : ganttDiagramLVOFAZNHInput71;
    let ganttDiagramLVOFAZNHBinding263 =
        ganttDiagramLVOFAZNHBinding262.split(","),
      ganttDiagramLVOFAZNHBinding264 = {};
    ganttDiagramLVOFAZNHHelper1(
      ganttDiagramLVOFAZNHBinding263,
      ganttDiagramLVOFAZNHBinding264,
      ganttDiagramLVOFAZNHBinding22,
    );
    for (
      let ganttDiagramLVOFAZNHBinding402 = 0;
      ganttDiagramLVOFAZNHBinding402 < ganttDiagramLVOFAZNHBinding263.length;
      ganttDiagramLVOFAZNHBinding402++
    )
      ganttDiagramLVOFAZNHBinding263[ganttDiagramLVOFAZNHBinding402] =
        ganttDiagramLVOFAZNHBinding263[ganttDiagramLVOFAZNHBinding402].trim();
    let ganttDiagramLVOFAZNHBinding265 = "";
    switch (ganttDiagramLVOFAZNHBinding263.length) {
      case 1:
        ganttDiagramLVOFAZNHBinding264.id = ganttDiagramLVOFAZNHBinding61();
        ganttDiagramLVOFAZNHBinding264.startTime =
          ganttDiagramLVOFAZNHInput70.endTime;
        ganttDiagramLVOFAZNHBinding265 = ganttDiagramLVOFAZNHBinding263[0];
        break;
      case 2:
        ganttDiagramLVOFAZNHBinding264.id = ganttDiagramLVOFAZNHBinding61();
        ganttDiagramLVOFAZNHBinding264.startTime =
          ganttDiagramLVOFAZNHBinding57(
            undefined,
            ganttDiagramLVOFAZNHBinding11,
            ganttDiagramLVOFAZNHBinding263[0],
          );
        ganttDiagramLVOFAZNHBinding265 = ganttDiagramLVOFAZNHBinding263[1];
        break;
      case 3:
        ganttDiagramLVOFAZNHBinding264.id = ganttDiagramLVOFAZNHBinding61(
          ganttDiagramLVOFAZNHBinding263[0],
        );
        ganttDiagramLVOFAZNHBinding264.startTime =
          ganttDiagramLVOFAZNHBinding57(
            undefined,
            ganttDiagramLVOFAZNHBinding11,
            ganttDiagramLVOFAZNHBinding263[1],
          );
        ganttDiagramLVOFAZNHBinding265 = ganttDiagramLVOFAZNHBinding263[2];
        break;
      default:
    }
    return (
      ganttDiagramLVOFAZNHBinding265 &&
        ((ganttDiagramLVOFAZNHBinding264.endTime =
          ganttDiagramLVOFAZNHBinding59(
            ganttDiagramLVOFAZNHBinding264.startTime,
            ganttDiagramLVOFAZNHBinding11,
            ganttDiagramLVOFAZNHBinding265,
            ganttDiagramLVOFAZNHBinding24,
          )),
        (ganttDiagramLVOFAZNHBinding264.manualEndTime =
          ganttDiagramLVOFAZNHBinding5
            .default(ganttDiagramLVOFAZNHBinding265, "YYYY-MM-DD", true)
            .isValid()),
        ganttDiagramLVOFAZNHBinding56(
          ganttDiagramLVOFAZNHBinding264,
          ganttDiagramLVOFAZNHBinding11,
          ganttDiagramLVOFAZNHBinding16,
          ganttDiagramLVOFAZNHBinding15,
        )),
      ganttDiagramLVOFAZNHBinding264
    );
  }, "compileData");
  at = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput72,
    ganttDiagramLVOFAZNHInput73,
  ) {
    let ganttDiagramLVOFAZNHBinding266;
    ganttDiagramLVOFAZNHBinding266 =
      ganttDiagramLVOFAZNHInput73.substr(0, 1) === ":"
        ? ganttDiagramLVOFAZNHInput73.substr(
            1,
            ganttDiagramLVOFAZNHInput73.length,
          )
        : ganttDiagramLVOFAZNHInput73;
    let ganttDiagramLVOFAZNHBinding267 =
        ganttDiagramLVOFAZNHBinding266.split(","),
      ganttDiagramLVOFAZNHBinding268 = {};
    ganttDiagramLVOFAZNHHelper1(
      ganttDiagramLVOFAZNHBinding267,
      ganttDiagramLVOFAZNHBinding268,
      ganttDiagramLVOFAZNHBinding22,
    );
    for (
      let ganttDiagramLVOFAZNHBinding403 = 0;
      ganttDiagramLVOFAZNHBinding403 < ganttDiagramLVOFAZNHBinding267.length;
      ganttDiagramLVOFAZNHBinding403++
    )
      ganttDiagramLVOFAZNHBinding267[ganttDiagramLVOFAZNHBinding403] =
        ganttDiagramLVOFAZNHBinding267[ganttDiagramLVOFAZNHBinding403].trim();
    switch (ganttDiagramLVOFAZNHBinding267.length) {
      case 1:
        ganttDiagramLVOFAZNHBinding268.id = ganttDiagramLVOFAZNHBinding61();
        ganttDiagramLVOFAZNHBinding268.startTime = {
          type: "prevTaskEnd",
          id: ganttDiagramLVOFAZNHInput72,
        };
        ganttDiagramLVOFAZNHBinding268.endTime = {
          data: ganttDiagramLVOFAZNHBinding267[0],
        };
        break;
      case 2:
        ganttDiagramLVOFAZNHBinding268.id = ganttDiagramLVOFAZNHBinding61();
        ganttDiagramLVOFAZNHBinding268.startTime = {
          type: "getStartDate",
          startData: ganttDiagramLVOFAZNHBinding267[0],
        };
        ganttDiagramLVOFAZNHBinding268.endTime = {
          data: ganttDiagramLVOFAZNHBinding267[1],
        };
        break;
      case 3:
        ganttDiagramLVOFAZNHBinding268.id = ganttDiagramLVOFAZNHBinding61(
          ganttDiagramLVOFAZNHBinding267[0],
        );
        ganttDiagramLVOFAZNHBinding268.startTime = {
          type: "getStartDate",
          startData: ganttDiagramLVOFAZNHBinding267[1],
        };
        ganttDiagramLVOFAZNHBinding268.endTime = {
          data: ganttDiagramLVOFAZNHBinding267[2],
        };
        break;
      default:
    }
    return ganttDiagramLVOFAZNHBinding268;
  }, "parseData");
  ganttDiagramLVOFAZNHBinding65 = [];
  ganttDiagramLVOFAZNHBinding66 = {};
  ganttDiagramLVOFAZNHBinding67 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput82,
    ganttDiagramLVOFAZNHInput83,
  ) {
    let ganttDiagramLVOFAZNHBinding287 = {
        section: ganttDiagramLVOFAZNHBinding20,
        type: ganttDiagramLVOFAZNHBinding20,
        processed: false,
        manualEndTime: false,
        renderEndTime: null,
        raw: {
          data: ganttDiagramLVOFAZNHInput83,
        },
        task: ganttDiagramLVOFAZNHInput82,
        classes: [],
      },
      ganttDiagramLVOFAZNHBinding288 = at(
        ganttDiagramLVOFAZNHBinding64,
        ganttDiagramLVOFAZNHInput83,
      );
    ganttDiagramLVOFAZNHBinding287.raw.startTime =
      ganttDiagramLVOFAZNHBinding288.startTime;
    ganttDiagramLVOFAZNHBinding287.raw.endTime =
      ganttDiagramLVOFAZNHBinding288.endTime;
    ganttDiagramLVOFAZNHBinding287.id = ganttDiagramLVOFAZNHBinding288.id;
    ganttDiagramLVOFAZNHBinding287.prevTaskId = ganttDiagramLVOFAZNHBinding64;
    ganttDiagramLVOFAZNHBinding287.active =
      ganttDiagramLVOFAZNHBinding288.active;
    ganttDiagramLVOFAZNHBinding287.done = ganttDiagramLVOFAZNHBinding288.done;
    ganttDiagramLVOFAZNHBinding287.crit = ganttDiagramLVOFAZNHBinding288.crit;
    ganttDiagramLVOFAZNHBinding287.milestone =
      ganttDiagramLVOFAZNHBinding288.milestone;
    ganttDiagramLVOFAZNHBinding287.vert = ganttDiagramLVOFAZNHBinding288.vert;
    ganttDiagramLVOFAZNHBinding287.order = ganttDiagramLVOFAZNHBinding28;
    ganttDiagramLVOFAZNHBinding28++;
    let ganttDiagramLVOFAZNHBinding289 = ganttDiagramLVOFAZNHBinding65.push(
      ganttDiagramLVOFAZNHBinding287,
    );
    ganttDiagramLVOFAZNHBinding64 = ganttDiagramLVOFAZNHBinding287.id;
    ganttDiagramLVOFAZNHBinding66[ganttDiagramLVOFAZNHBinding287.id] =
      ganttDiagramLVOFAZNHBinding289 - 1;
  }, "addTask");
  ganttDiagramLVOFAZNHBinding68 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput202,
  ) {
    let ganttDiagramLVOFAZNHBinding399 =
      ganttDiagramLVOFAZNHBinding66[ganttDiagramLVOFAZNHInput202];
    return ganttDiagramLVOFAZNHBinding65[ganttDiagramLVOFAZNHBinding399];
  }, "findTaskById");
  ganttDiagramLVOFAZNHBinding69 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput108,
    ganttDiagramLVOFAZNHInput109,
  ) {
    let ganttDiagramLVOFAZNHBinding322 = {
        section: ganttDiagramLVOFAZNHBinding20,
        type: ganttDiagramLVOFAZNHBinding20,
        description: ganttDiagramLVOFAZNHInput108,
        task: ganttDiagramLVOFAZNHInput108,
        classes: [],
      },
      ganttDiagramLVOFAZNHBinding323 = ganttDiagramLVOFAZNHBinding62(
        ganttDiagramLVOFAZNHBinding63,
        ganttDiagramLVOFAZNHInput109,
      );
    ganttDiagramLVOFAZNHBinding322.startTime =
      ganttDiagramLVOFAZNHBinding323.startTime;
    ganttDiagramLVOFAZNHBinding322.endTime =
      ganttDiagramLVOFAZNHBinding323.endTime;
    ganttDiagramLVOFAZNHBinding322.id = ganttDiagramLVOFAZNHBinding323.id;
    ganttDiagramLVOFAZNHBinding322.active =
      ganttDiagramLVOFAZNHBinding323.active;
    ganttDiagramLVOFAZNHBinding322.done = ganttDiagramLVOFAZNHBinding323.done;
    ganttDiagramLVOFAZNHBinding322.crit = ganttDiagramLVOFAZNHBinding323.crit;
    ganttDiagramLVOFAZNHBinding322.milestone =
      ganttDiagramLVOFAZNHBinding323.milestone;
    ganttDiagramLVOFAZNHBinding322.vert = ganttDiagramLVOFAZNHBinding323.vert;
    ganttDiagramLVOFAZNHBinding63 = ganttDiagramLVOFAZNHBinding322;
    ganttDiagramLVOFAZNHBinding19.push(ganttDiagramLVOFAZNHBinding322);
  }, "addTaskOrg");
  ganttDiagramLVOFAZNHBinding70 = chunkAGHRB4JFN(function () {
    let ganttDiagramLVOFAZNHBinding247 = chunkAGHRB4JFN(function (
        ganttDiagramLVOFAZNHInput69,
      ) {
        let ganttDiagramLVOFAZNHBinding257 =
            ganttDiagramLVOFAZNHBinding65[ganttDiagramLVOFAZNHInput69],
          ganttDiagramLVOFAZNHBinding258 = "";
        switch (
          ganttDiagramLVOFAZNHBinding65[ganttDiagramLVOFAZNHInput69].raw
            .startTime.type
        ) {
          case "prevTaskEnd":
            ganttDiagramLVOFAZNHBinding257.startTime =
              ganttDiagramLVOFAZNHBinding68(
                ganttDiagramLVOFAZNHBinding257.prevTaskId,
              ).endTime;
            break;
          case "getStartDate":
            ganttDiagramLVOFAZNHBinding258 = ganttDiagramLVOFAZNHBinding57(
              undefined,
              ganttDiagramLVOFAZNHBinding11,
              ganttDiagramLVOFAZNHBinding65[ganttDiagramLVOFAZNHInput69].raw
                .startTime.startData,
            );
            ganttDiagramLVOFAZNHBinding258 &&
              (ganttDiagramLVOFAZNHBinding65[
                ganttDiagramLVOFAZNHInput69
              ].startTime = ganttDiagramLVOFAZNHBinding258);
            break;
        }
        return (
          ganttDiagramLVOFAZNHBinding65[ganttDiagramLVOFAZNHInput69]
            .startTime &&
            ((ganttDiagramLVOFAZNHBinding65[
              ganttDiagramLVOFAZNHInput69
            ].endTime = ganttDiagramLVOFAZNHBinding59(
              ganttDiagramLVOFAZNHBinding65[ganttDiagramLVOFAZNHInput69]
                .startTime,
              ganttDiagramLVOFAZNHBinding11,
              ganttDiagramLVOFAZNHBinding65[ganttDiagramLVOFAZNHInput69].raw
                .endTime.data,
              ganttDiagramLVOFAZNHBinding24,
            )),
            ganttDiagramLVOFAZNHBinding65[ganttDiagramLVOFAZNHInput69]
              .endTime &&
              ((ganttDiagramLVOFAZNHBinding65[
                ganttDiagramLVOFAZNHInput69
              ].processed = true),
              (ganttDiagramLVOFAZNHBinding65[
                ganttDiagramLVOFAZNHInput69
              ].manualEndTime = ganttDiagramLVOFAZNHBinding5
                .default(
                  ganttDiagramLVOFAZNHBinding65[ganttDiagramLVOFAZNHInput69].raw
                    .endTime.data,
                  "YYYY-MM-DD",
                  true,
                )
                .isValid()),
              ganttDiagramLVOFAZNHBinding56(
                ganttDiagramLVOFAZNHBinding65[ganttDiagramLVOFAZNHInput69],
                ganttDiagramLVOFAZNHBinding11,
                ganttDiagramLVOFAZNHBinding16,
                ganttDiagramLVOFAZNHBinding15,
              ))),
          ganttDiagramLVOFAZNHBinding65[ganttDiagramLVOFAZNHInput69].processed
        );
      }, "compileTask"),
      ganttDiagramLVOFAZNHBinding248 = true;
    for (let [
      ganttDiagramLVOFAZNHBinding400,
      ganttDiagramLVOFAZNHBinding401,
    ] of ganttDiagramLVOFAZNHBinding65.entries()) {
      ganttDiagramLVOFAZNHBinding247(ganttDiagramLVOFAZNHBinding400);
      ganttDiagramLVOFAZNHBinding248 &&=
        ganttDiagramLVOFAZNHBinding401.processed;
    }
    return ganttDiagramLVOFAZNHBinding248;
  }, "compileTasks");
  ganttDiagramLVOFAZNHBinding71 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput119,
    ganttDiagramLVOFAZNHInput120,
  ) {
    let ganttDiagramLVOFAZNHBinding335 = ganttDiagramLVOFAZNHInput120;
    _chunkABZYJK2DB().securityLevel !== "loose" &&
      (ganttDiagramLVOFAZNHBinding335 =
        ganttDiagramLVOFAZNHBinding4.sanitizeUrl(ganttDiagramLVOFAZNHInput120));
    ganttDiagramLVOFAZNHInput119.split(",").forEach(function (item) {
      ganttDiagramLVOFAZNHBinding68(item) !== undefined &&
        (ganttDiagramLVOFAZNHBinding74(item, () => {
          window.open(ganttDiagramLVOFAZNHBinding335, "_self");
        }),
        ganttDiagramLVOFAZNHBinding17.set(
          item,
          ganttDiagramLVOFAZNHBinding335,
        ));
    });
    ganttDiagramLVOFAZNHBinding72(ganttDiagramLVOFAZNHInput119, "clickable");
  }, "setLink");
  ganttDiagramLVOFAZNHBinding72 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput163,
    ganttDiagramLVOFAZNHInput164,
  ) {
    ganttDiagramLVOFAZNHInput163.split(",").forEach(function (item) {
      let ganttDiagramLVOFAZNHBinding396 = ganttDiagramLVOFAZNHBinding68(item);
      ganttDiagramLVOFAZNHBinding396 !== undefined &&
        ganttDiagramLVOFAZNHBinding396.classes.push(
          ganttDiagramLVOFAZNHInput164,
        );
    });
  }, "setClass");
  ganttDiagramLVOFAZNHBinding73 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput85,
    ganttDiagramLVOFAZNHInput86,
    ganttDiagramLVOFAZNHInput87,
  ) {
    if (
      _chunkABZYJK2DB().securityLevel !== "loose" ||
      ganttDiagramLVOFAZNHInput86 === undefined
    )
      return;
    let ganttDiagramLVOFAZNHBinding293 = [];
    if (typeof ganttDiagramLVOFAZNHInput87 == "string") {
      ganttDiagramLVOFAZNHBinding293 = ganttDiagramLVOFAZNHInput87.split(
        /,(?=(?:(?:[^"]*"){2})*[^"]*$)/,
      );
      for (
        let ganttDiagramLVOFAZNHBinding361 = 0;
        ganttDiagramLVOFAZNHBinding361 < ganttDiagramLVOFAZNHBinding293.length;
        ganttDiagramLVOFAZNHBinding361++
      ) {
        let ganttDiagramLVOFAZNHBinding371 =
          ganttDiagramLVOFAZNHBinding293[ganttDiagramLVOFAZNHBinding361].trim();
        ganttDiagramLVOFAZNHBinding371.startsWith('"') &&
          ganttDiagramLVOFAZNHBinding371.endsWith('"') &&
          (ganttDiagramLVOFAZNHBinding371 =
            ganttDiagramLVOFAZNHBinding371.substr(
              1,
              ganttDiagramLVOFAZNHBinding371.length - 2,
            ));
        ganttDiagramLVOFAZNHBinding293[ganttDiagramLVOFAZNHBinding361] =
          ganttDiagramLVOFAZNHBinding371;
      }
    }
    ganttDiagramLVOFAZNHBinding293.length === 0 &&
      ganttDiagramLVOFAZNHBinding293.push(ganttDiagramLVOFAZNHInput85);
    ganttDiagramLVOFAZNHBinding68(ganttDiagramLVOFAZNHInput85) !== undefined &&
      ganttDiagramLVOFAZNHBinding74(ganttDiagramLVOFAZNHInput85, () => {
        chunkS3R3BYOJG.runFunc(
          ganttDiagramLVOFAZNHInput86,
          ...ganttDiagramLVOFAZNHBinding293,
        );
      });
  }, "setClickFun");
  ganttDiagramLVOFAZNHBinding74 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHInput100,
    ganttDiagramLVOFAZNHInput101,
  ) {
    ganttDiagramLVOFAZNHBinding23.push(
      function () {
        let ganttDiagramLVOFAZNHBinding366 = document.querySelector(
          `[id="${ganttDiagramLVOFAZNHInput100}"]`,
        );
        ganttDiagramLVOFAZNHBinding366 !== null &&
          ganttDiagramLVOFAZNHBinding366.addEventListener("click", function () {
            ganttDiagramLVOFAZNHInput101();
          });
      },
      function () {
        let ganttDiagramLVOFAZNHBinding362 = document.querySelector(
          `[id="${ganttDiagramLVOFAZNHInput100}-text"]`,
        );
        ganttDiagramLVOFAZNHBinding362 !== null &&
          ganttDiagramLVOFAZNHBinding362.addEventListener("click", function () {
            ganttDiagramLVOFAZNHInput101();
          });
      },
    );
  }, "pushFun");
  ganttDiagramLVOFAZNHBinding75 = {
    getConfig: chunkAGHRB4JFN(() => _chunkABZYJK2DB().gantt, "getConfig"),
    clear: ganttDiagramLVOFAZNHBinding29,
    setDateFormat: ganttDiagramLVOFAZNHBinding36,
    getDateFormat: ganttDiagramLVOFAZNHBinding43,
    enableInclusiveEndDates: ganttDiagramLVOFAZNHBinding37,
    endDatesAreInclusive: ganttDiagramLVOFAZNHBinding38,
    enableTopAxis: ganttDiagramLVOFAZNHBinding39,
    topAxisEnabled: ganttDiagramLVOFAZNHBinding40,
    setAxisFormat: ganttDiagramLVOFAZNHBinding30,
    getAxisFormat: ganttDiagramLVOFAZNHBinding31,
    setTickInterval: ganttDiagramLVOFAZNHBinding32,
    getTickInterval: ganttDiagramLVOFAZNHBinding33,
    setTodayMarker: ganttDiagramLVOFAZNHBinding34,
    getTodayMarker: ganttDiagramLVOFAZNHBinding35,
    setAccTitle: chunkABZYJK2DV,
    getAccTitle: _chunkABZYJK2DV,
    setDiagramTitle: chunkABZYJK2DW,
    getDiagramTitle: chunkABZYJK2DC,
    setDisplayMode: ganttDiagramLVOFAZNHBinding41,
    getDisplayMode: ganttDiagramLVOFAZNHBinding42,
    setAccDescription: chunkABZYJK2DB,
    getAccDescription: chunkABZYJK2DUnderscore,
    addSection: ganttDiagramLVOFAZNHBinding49,
    getSections: ganttDiagramLVOFAZNHBinding50,
    getTasks: ganttDiagramLVOFAZNHBinding51,
    addTask: ganttDiagramLVOFAZNHBinding67,
    findTaskById: ganttDiagramLVOFAZNHBinding68,
    addTaskOrg: ganttDiagramLVOFAZNHBinding69,
    setIncludes: ganttDiagramLVOFAZNHBinding44,
    getIncludes: ganttDiagramLVOFAZNHBinding45,
    setExcludes: ganttDiagramLVOFAZNHBinding46,
    getExcludes: ganttDiagramLVOFAZNHBinding47,
    setClickEvent: chunkAGHRB4JFN(function (
      ganttDiagramLVOFAZNHInput165,
      ganttDiagramLVOFAZNHInput166,
      ganttDiagramLVOFAZNHInput167,
    ) {
      ganttDiagramLVOFAZNHInput165.split(",").forEach(function (item) {
        ganttDiagramLVOFAZNHBinding73(
          item,
          ganttDiagramLVOFAZNHInput166,
          ganttDiagramLVOFAZNHInput167,
        );
      });
      ganttDiagramLVOFAZNHBinding72(ganttDiagramLVOFAZNHInput165, "clickable");
    }, "setClickEvent"),
    setLink: ganttDiagramLVOFAZNHBinding71,
    getLinks: ganttDiagramLVOFAZNHBinding48,
    bindFunctions: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHInput182) {
      ganttDiagramLVOFAZNHBinding23.forEach(function (item) {
        item(ganttDiagramLVOFAZNHInput182);
      });
    }, "bindFunctions"),
    parseDuration: ganttDiagramLVOFAZNHBinding58,
    isInvalidDate: ganttDiagramLVOFAZNHBinding52,
    setWeekday: ganttDiagramLVOFAZNHBinding53,
    getWeekday: ganttDiagramLVOFAZNHBinding54,
    setWeekend: ganttDiagramLVOFAZNHBinding55,
  };
  chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper1, "getTaskTags");
  _t = chunkAGHRB4JFN(function () {
    chunkAGHRB4JFI.debug("Something is calling, setConf, remove the call");
  }, "setConf");
  ganttDiagramLVOFAZNHBinding76 = {
    monday: _AppInitialQit,
    tuesday: appInitialZit,
    wednesday: AppInitialQit,
    thursday: appInitialXit,
    friday: AppInitialKit,
    saturday: AppInitialJit,
    sunday: AppInitialYit,
  };
  ganttDiagramLVOFAZNHBinding77 = chunkAGHRB4JFN(
    (ganttDiagramLVOFAZNHInput110, ganttDiagramLVOFAZNHInput111) => {
      let ganttDiagramLVOFAZNHBinding324 = [
          ...ganttDiagramLVOFAZNHInput110,
        ].map(() => -1 / 0),
        ganttDiagramLVOFAZNHBinding325 = [...ganttDiagramLVOFAZNHInput110].sort(
          (ganttDiagramLVOFAZNHInput203, ganttDiagramLVOFAZNHInput204) =>
            ganttDiagramLVOFAZNHInput203.startTime -
              ganttDiagramLVOFAZNHInput204.startTime ||
            ganttDiagramLVOFAZNHInput203.order -
              ganttDiagramLVOFAZNHInput204.order,
        ),
        ganttDiagramLVOFAZNHBinding326 = 0;
      for (let ganttDiagramLVOFAZNHBinding363 of ganttDiagramLVOFAZNHBinding325)
        for (
          let ganttDiagramLVOFAZNHBinding372 = 0;
          ganttDiagramLVOFAZNHBinding372 <
          ganttDiagramLVOFAZNHBinding324.length;
          ganttDiagramLVOFAZNHBinding372++
        )
          if (
            ganttDiagramLVOFAZNHBinding363.startTime >=
            ganttDiagramLVOFAZNHBinding324[ganttDiagramLVOFAZNHBinding372]
          ) {
            ganttDiagramLVOFAZNHBinding324[ganttDiagramLVOFAZNHBinding372] =
              ganttDiagramLVOFAZNHBinding363.endTime;
            ganttDiagramLVOFAZNHBinding363.order =
              ganttDiagramLVOFAZNHBinding372 + ganttDiagramLVOFAZNHInput111;
            ganttDiagramLVOFAZNHBinding372 > ganttDiagramLVOFAZNHBinding326 &&
              (ganttDiagramLVOFAZNHBinding326 = ganttDiagramLVOFAZNHBinding372);
            break;
          }
      return ganttDiagramLVOFAZNHBinding326;
    },
    "getMaxIntersections",
  );
  GanttDiagramLVOFAZNH = {
    parser: ganttDiagramLVOFAZNHBinding10,
    db: ganttDiagramLVOFAZNHBinding75,
    renderer: {
      setConf: _t,
      draw: chunkAGHRB4JFN(function (
        ganttDiagramLVOFAZNHInput1,
        ganttDiagramLVOFAZNHInput2,
        ganttDiagramLVOFAZNHInput3,
        ganttDiagramLVOFAZNHInput4,
      ) {
        let ganttDiagramLVOFAZNHBinding105 = _chunkABZYJK2DB().gantt,
          ganttDiagramLVOFAZNHBinding106 = _chunkABZYJK2DB().securityLevel,
          ganttDiagramLVOFAZNHBinding107;
        ganttDiagramLVOFAZNHBinding106 === "sandbox" &&
          (ganttDiagramLVOFAZNHBinding107 = srcR(
            "#i" + ganttDiagramLVOFAZNHInput2,
          ));
        let ganttDiagramLVOFAZNHBinding108 = srcR(
            ganttDiagramLVOFAZNHBinding106 === "sandbox"
              ? ganttDiagramLVOFAZNHBinding107.nodes()[0].contentDocument.body
              : "body",
          ),
          ganttDiagramLVOFAZNHBinding109 =
            ganttDiagramLVOFAZNHBinding106 === "sandbox"
              ? ganttDiagramLVOFAZNHBinding107.nodes()[0].contentDocument
              : document,
          ganttDiagramLVOFAZNHBinding110 =
            ganttDiagramLVOFAZNHBinding109.getElementById(
              ganttDiagramLVOFAZNHInput2,
            );
        $ = ganttDiagramLVOFAZNHBinding110.parentElement.offsetWidth;
        $ === undefined && ($ = 1200);
        ganttDiagramLVOFAZNHBinding105.useWidth !== undefined &&
          ($ = ganttDiagramLVOFAZNHBinding105.useWidth);
        let ganttDiagramLVOFAZNHBinding111 =
            ganttDiagramLVOFAZNHInput4.db.getTasks(),
          ganttDiagramLVOFAZNHBinding112 = [];
        for (let ganttDiagramLVOFAZNHBinding404 of ganttDiagramLVOFAZNHBinding111)
          ganttDiagramLVOFAZNHBinding112.push(
            ganttDiagramLVOFAZNHBinding404.type,
          );
        ganttDiagramLVOFAZNHBinding112 = ganttDiagramLVOFAZNHHelper10(
          ganttDiagramLVOFAZNHBinding112,
        );
        let ganttDiagramLVOFAZNHBinding113 = {},
          ganttDiagramLVOFAZNHBinding114 =
            2 * ganttDiagramLVOFAZNHBinding105.topPadding;
        if (
          ganttDiagramLVOFAZNHInput4.db.getDisplayMode() === "compact" ||
          ganttDiagramLVOFAZNHBinding105.displayMode === "compact"
        ) {
          let ganttDiagramLVOFAZNHBinding331 = {};
          for (let ganttDiagramLVOFAZNHBinding384 of ganttDiagramLVOFAZNHBinding111)
            ganttDiagramLVOFAZNHBinding331[
              ganttDiagramLVOFAZNHBinding384.section
            ] === undefined
              ? (ganttDiagramLVOFAZNHBinding331[
                  ganttDiagramLVOFAZNHBinding384.section
                ] = [ganttDiagramLVOFAZNHBinding384])
              : ganttDiagramLVOFAZNHBinding331[
                  ganttDiagramLVOFAZNHBinding384.section
                ].push(ganttDiagramLVOFAZNHBinding384);
          let ganttDiagramLVOFAZNHBinding332 = 0;
          for (let ganttDiagramLVOFAZNHBinding373 of Object.keys(
            ganttDiagramLVOFAZNHBinding331,
          )) {
            let ganttDiagramLVOFAZNHBinding387 =
              ganttDiagramLVOFAZNHBinding77(
                ganttDiagramLVOFAZNHBinding331[ganttDiagramLVOFAZNHBinding373],
                ganttDiagramLVOFAZNHBinding332,
              ) + 1;
            ganttDiagramLVOFAZNHBinding332 += ganttDiagramLVOFAZNHBinding387;
            ganttDiagramLVOFAZNHBinding114 +=
              ganttDiagramLVOFAZNHBinding387 *
              (ganttDiagramLVOFAZNHBinding105.barHeight +
                ganttDiagramLVOFAZNHBinding105.barGap);
            ganttDiagramLVOFAZNHBinding113[ganttDiagramLVOFAZNHBinding373] =
              ganttDiagramLVOFAZNHBinding387;
          }
        } else {
          ganttDiagramLVOFAZNHBinding114 +=
            ganttDiagramLVOFAZNHBinding111.length *
            (ganttDiagramLVOFAZNHBinding105.barHeight +
              ganttDiagramLVOFAZNHBinding105.barGap);
          for (let ganttDiagramLVOFAZNHBinding398 of ganttDiagramLVOFAZNHBinding112)
            ganttDiagramLVOFAZNHBinding113[ganttDiagramLVOFAZNHBinding398] =
              ganttDiagramLVOFAZNHBinding111.filter(
                (item) => item.type === ganttDiagramLVOFAZNHBinding398,
              ).length;
        }
        ganttDiagramLVOFAZNHBinding110.setAttribute(
          "viewBox",
          "0 0 " + $ + " " + ganttDiagramLVOFAZNHBinding114,
        );
        let ganttDiagramLVOFAZNHBinding115 =
            ganttDiagramLVOFAZNHBinding108.select(
              `[id="${ganttDiagramLVOFAZNHInput2}"]`,
            ),
          ganttDiagramLVOFAZNHBinding116 = appInitialRit()
            .domain([
              appInitialOat(
                ganttDiagramLVOFAZNHBinding111,
                function (ganttDiagramLVOFAZNHInput191) {
                  return ganttDiagramLVOFAZNHInput191.startTime;
                },
              ),
              appInitialAat(
                ganttDiagramLVOFAZNHBinding111,
                function (ganttDiagramLVOFAZNHInput194) {
                  return ganttDiagramLVOFAZNHInput194.endTime;
                },
              ),
            ])
            .rangeRound([
              0,
              $ -
                ganttDiagramLVOFAZNHBinding105.leftPadding -
                ganttDiagramLVOFAZNHBinding105.rightPadding,
            ]);
        function ganttDiagramLVOFAZNHHelper3(
          ganttDiagramLVOFAZNHInput157,
          ganttDiagramLVOFAZNHInput158,
        ) {
          let ganttDiagramLVOFAZNHBinding368 =
              ganttDiagramLVOFAZNHInput157.startTime,
            ganttDiagramLVOFAZNHBinding369 =
              ganttDiagramLVOFAZNHInput158.startTime,
            ganttDiagramLVOFAZNHBinding370 = 0;
          return (
            ganttDiagramLVOFAZNHBinding368 > ganttDiagramLVOFAZNHBinding369
              ? (ganttDiagramLVOFAZNHBinding370 = 1)
              : ganttDiagramLVOFAZNHBinding368 <
                  ganttDiagramLVOFAZNHBinding369 &&
                (ganttDiagramLVOFAZNHBinding370 = -1),
            ganttDiagramLVOFAZNHBinding370
          );
        }
        chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper3, "taskCompare");
        ganttDiagramLVOFAZNHBinding111.sort(ganttDiagramLVOFAZNHHelper3);
        ganttDiagramLVOFAZNHHelper4(
          ganttDiagramLVOFAZNHBinding111,
          $,
          ganttDiagramLVOFAZNHBinding114,
        );
        _chunkABZYJK2DC(
          ganttDiagramLVOFAZNHBinding115,
          ganttDiagramLVOFAZNHBinding114,
          $,
          ganttDiagramLVOFAZNHBinding105.useMaxWidth,
        );
        ganttDiagramLVOFAZNHBinding115
          .append("text")
          .text(ganttDiagramLVOFAZNHInput4.db.getDiagramTitle())
          .attr("x", $ / 2)
          .attr("y", ganttDiagramLVOFAZNHBinding105.titleTopMargin)
          .attr("class", "titleText");
        function ganttDiagramLVOFAZNHHelper4(
          ganttDiagramLVOFAZNHInput93,
          ganttDiagramLVOFAZNHInput94,
          ganttDiagramLVOFAZNHInput95,
        ) {
          let ganttDiagramLVOFAZNHBinding305 =
              ganttDiagramLVOFAZNHBinding105.barHeight,
            ganttDiagramLVOFAZNHBinding306 =
              ganttDiagramLVOFAZNHBinding305 +
              ganttDiagramLVOFAZNHBinding105.barGap,
            ganttDiagramLVOFAZNHBinding307 =
              ganttDiagramLVOFAZNHBinding105.topPadding,
            ganttDiagramLVOFAZNHBinding308 =
              ganttDiagramLVOFAZNHBinding105.leftPadding,
            ganttDiagramLVOFAZNHBinding309 = AppInitialMat()
              .domain([0, ganttDiagramLVOFAZNHBinding112.length])
              .range(["#00B9FA", "#F95002"])
              .interpolate(appInitialRat);
          ganttDiagramLVOFAZNHHelper6(
            ganttDiagramLVOFAZNHBinding306,
            ganttDiagramLVOFAZNHBinding307,
            ganttDiagramLVOFAZNHBinding308,
            ganttDiagramLVOFAZNHInput94,
            ganttDiagramLVOFAZNHInput95,
            ganttDiagramLVOFAZNHInput93,
            ganttDiagramLVOFAZNHInput4.db.getExcludes(),
            ganttDiagramLVOFAZNHInput4.db.getIncludes(),
          );
          ganttDiagramLVOFAZNHHelper7(
            ganttDiagramLVOFAZNHBinding308,
            ganttDiagramLVOFAZNHBinding307,
            ganttDiagramLVOFAZNHInput94,
            ganttDiagramLVOFAZNHInput95,
          );
          ganttDiagramLVOFAZNHHelper5(
            ganttDiagramLVOFAZNHInput93,
            ganttDiagramLVOFAZNHBinding306,
            ganttDiagramLVOFAZNHBinding307,
            ganttDiagramLVOFAZNHBinding308,
            ganttDiagramLVOFAZNHBinding305,
            ganttDiagramLVOFAZNHBinding309,
            ganttDiagramLVOFAZNHInput94,
            ganttDiagramLVOFAZNHInput95,
          );
          ganttDiagramLVOFAZNHHelper8(
            ganttDiagramLVOFAZNHBinding306,
            ganttDiagramLVOFAZNHBinding307,
            ganttDiagramLVOFAZNHBinding308,
            ganttDiagramLVOFAZNHBinding305,
            ganttDiagramLVOFAZNHBinding309,
          );
          ganttDiagramLVOFAZNHHelper9(
            ganttDiagramLVOFAZNHBinding308,
            ganttDiagramLVOFAZNHBinding307,
            ganttDiagramLVOFAZNHInput94,
            ganttDiagramLVOFAZNHInput95,
          );
        }
        chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper4, "makeGantt");
        function ganttDiagramLVOFAZNHHelper5(
          ganttDiagramLVOFAZNHInput7,
          ganttDiagramLVOFAZNHInput8,
          ganttDiagramLVOFAZNHInput9,
          ganttDiagramLVOFAZNHInput10,
          ganttDiagramLVOFAZNHInput11,
          ganttDiagramLVOFAZNHInput12,
          ganttDiagramLVOFAZNHInput13,
        ) {
          ganttDiagramLVOFAZNHInput7.sort(
            (ganttDiagramLVOFAZNHInput208, ganttDiagramLVOFAZNHInput209) =>
              ganttDiagramLVOFAZNHInput208.vert ===
              ganttDiagramLVOFAZNHInput209.vert
                ? 0
                : ganttDiagramLVOFAZNHInput208.vert
                  ? 1
                  : -1,
          );
          let ganttDiagramLVOFAZNHBinding130 = [
            ...new Set(ganttDiagramLVOFAZNHInput7.map((item) => item.order)),
          ].map((item) =>
            ganttDiagramLVOFAZNHInput7.find((_item) => _item.order === item),
          );
          ganttDiagramLVOFAZNHBinding115
            .append("g")
            .selectAll("rect")
            .data(ganttDiagramLVOFAZNHBinding130)
            .enter()
            .append("rect")
            .attr("x", 0)
            .attr(
              "y",
              function (
                ganttDiagramLVOFAZNHInput180,
                ganttDiagramLVOFAZNHInput181,
              ) {
                return (
                  (ganttDiagramLVOFAZNHInput181 =
                    ganttDiagramLVOFAZNHInput180.order),
                  ganttDiagramLVOFAZNHInput181 * ganttDiagramLVOFAZNHInput8 +
                    ganttDiagramLVOFAZNHInput9 -
                    2
                );
              },
            )
            .attr("width", function () {
              return (
                ganttDiagramLVOFAZNHInput13 -
                ganttDiagramLVOFAZNHBinding105.rightPadding / 2
              );
            })
            .attr("height", ganttDiagramLVOFAZNHInput8)
            .attr("class", function (ganttDiagramLVOFAZNHInput147) {
              for (let [
                ganttDiagramLVOFAZNHBinding381,
                ganttDiagramLVOFAZNHBinding382,
              ] of ganttDiagramLVOFAZNHBinding112.entries())
                if (
                  ganttDiagramLVOFAZNHInput147.type ===
                  ganttDiagramLVOFAZNHBinding382
                )
                  return (
                    "section section" +
                    (ganttDiagramLVOFAZNHBinding381 %
                      ganttDiagramLVOFAZNHBinding105.numberSectionStyles)
                  );
              return "section section0";
            })
            .enter();
          let ganttDiagramLVOFAZNHBinding131 = ganttDiagramLVOFAZNHBinding115
              .append("g")
              .selectAll("rect")
              .data(ganttDiagramLVOFAZNHInput7)
              .enter(),
            ganttDiagramLVOFAZNHBinding132 =
              ganttDiagramLVOFAZNHInput4.db.getLinks();
          if (
            (ganttDiagramLVOFAZNHBinding131
              .append("rect")
              .attr("id", function (ganttDiagramLVOFAZNHInput200) {
                return ganttDiagramLVOFAZNHInput200.id;
              })
              .attr("rx", 3)
              .attr("ry", 3)
              .attr("x", function (ganttDiagramLVOFAZNHInput133) {
                return ganttDiagramLVOFAZNHInput133.milestone
                  ? ganttDiagramLVOFAZNHBinding116(
                      ganttDiagramLVOFAZNHInput133.startTime,
                    ) +
                      ganttDiagramLVOFAZNHInput10 +
                      0.5 *
                        (ganttDiagramLVOFAZNHBinding116(
                          ganttDiagramLVOFAZNHInput133.endTime,
                        ) -
                          ganttDiagramLVOFAZNHBinding116(
                            ganttDiagramLVOFAZNHInput133.startTime,
                          )) -
                      0.5 * ganttDiagramLVOFAZNHInput11
                  : ganttDiagramLVOFAZNHBinding116(
                      ganttDiagramLVOFAZNHInput133.startTime,
                    ) + ganttDiagramLVOFAZNHInput10;
              })
              .attr(
                "y",
                function (
                  ganttDiagramLVOFAZNHInput153,
                  ganttDiagramLVOFAZNHInput154,
                ) {
                  return (
                    (ganttDiagramLVOFAZNHInput154 =
                      ganttDiagramLVOFAZNHInput153.order),
                    ganttDiagramLVOFAZNHInput153.vert
                      ? ganttDiagramLVOFAZNHBinding105.gridLineStartPadding
                      : ganttDiagramLVOFAZNHInput154 *
                          ganttDiagramLVOFAZNHInput8 +
                        ganttDiagramLVOFAZNHInput9
                  );
                },
              )
              .attr("width", function (ganttDiagramLVOFAZNHInput150) {
                return ganttDiagramLVOFAZNHInput150.milestone
                  ? ganttDiagramLVOFAZNHInput11
                  : ganttDiagramLVOFAZNHInput150.vert
                    ? 0.08 * ganttDiagramLVOFAZNHInput11
                    : ganttDiagramLVOFAZNHBinding116(
                        ganttDiagramLVOFAZNHInput150.renderEndTime ||
                          ganttDiagramLVOFAZNHInput150.endTime,
                      ) -
                      ganttDiagramLVOFAZNHBinding116(
                        ganttDiagramLVOFAZNHInput150.startTime,
                      );
              })
              .attr("height", function (ganttDiagramLVOFAZNHInput159) {
                return ganttDiagramLVOFAZNHInput159.vert
                  ? ganttDiagramLVOFAZNHBinding111.length *
                      (ganttDiagramLVOFAZNHBinding105.barHeight +
                        ganttDiagramLVOFAZNHBinding105.barGap) +
                      ganttDiagramLVOFAZNHBinding105.barHeight * 2
                  : ganttDiagramLVOFAZNHInput11;
              })
              .attr(
                "transform-origin",
                function (
                  ganttDiagramLVOFAZNHInput106,
                  ganttDiagramLVOFAZNHInput107,
                ) {
                  return (
                    (ganttDiagramLVOFAZNHInput107 =
                      ganttDiagramLVOFAZNHInput106.order),
                    (
                      ganttDiagramLVOFAZNHBinding116(
                        ganttDiagramLVOFAZNHInput106.startTime,
                      ) +
                      ganttDiagramLVOFAZNHInput10 +
                      0.5 *
                        (ganttDiagramLVOFAZNHBinding116(
                          ganttDiagramLVOFAZNHInput106.endTime,
                        ) -
                          ganttDiagramLVOFAZNHBinding116(
                            ganttDiagramLVOFAZNHInput106.startTime,
                          ))
                    ).toString() +
                      "px " +
                      (
                        ganttDiagramLVOFAZNHInput107 *
                          ganttDiagramLVOFAZNHInput8 +
                        ganttDiagramLVOFAZNHInput9 +
                        0.5 * ganttDiagramLVOFAZNHInput11
                      ).toString() +
                      "px"
                  );
                },
              )
              .attr("class", function (ganttDiagramLVOFAZNHInput68) {
                let ganttDiagramLVOFAZNHBinding251 = "";
                ganttDiagramLVOFAZNHInput68.classes.length > 0 &&
                  (ganttDiagramLVOFAZNHBinding251 =
                    ganttDiagramLVOFAZNHInput68.classes.join(" "));
                let ganttDiagramLVOFAZNHBinding252 = 0;
                for (let [
                  ganttDiagramLVOFAZNHBinding392,
                  ganttDiagramLVOFAZNHBinding393,
                ] of ganttDiagramLVOFAZNHBinding112.entries())
                  ganttDiagramLVOFAZNHInput68.type ===
                    ganttDiagramLVOFAZNHBinding393 &&
                    (ganttDiagramLVOFAZNHBinding252 =
                      ganttDiagramLVOFAZNHBinding392 %
                      ganttDiagramLVOFAZNHBinding105.numberSectionStyles);
                let ganttDiagramLVOFAZNHBinding253 = "";
                return (
                  ganttDiagramLVOFAZNHInput68.active
                    ? ganttDiagramLVOFAZNHInput68.crit
                      ? (ganttDiagramLVOFAZNHBinding253 += " activeCrit")
                      : (ganttDiagramLVOFAZNHBinding253 = " active")
                    : ganttDiagramLVOFAZNHInput68.done
                      ? (ganttDiagramLVOFAZNHBinding253 =
                          ganttDiagramLVOFAZNHInput68.crit
                            ? " doneCrit"
                            : " done")
                      : ganttDiagramLVOFAZNHInput68.crit &&
                        (ganttDiagramLVOFAZNHBinding253 += " crit"),
                  ganttDiagramLVOFAZNHBinding253.length === 0 &&
                    (ganttDiagramLVOFAZNHBinding253 = " task"),
                  ganttDiagramLVOFAZNHInput68.milestone &&
                    (ganttDiagramLVOFAZNHBinding253 =
                      " milestone " + ganttDiagramLVOFAZNHBinding253),
                  ganttDiagramLVOFAZNHInput68.vert &&
                    (ganttDiagramLVOFAZNHBinding253 =
                      " vert " + ganttDiagramLVOFAZNHBinding253),
                  (ganttDiagramLVOFAZNHBinding253 +=
                    ganttDiagramLVOFAZNHBinding252),
                  (ganttDiagramLVOFAZNHBinding253 +=
                    " " + ganttDiagramLVOFAZNHBinding251),
                  "task" + ganttDiagramLVOFAZNHBinding253
                );
              }),
            ganttDiagramLVOFAZNHBinding131
              .append("text")
              .attr("id", function (ganttDiagramLVOFAZNHInput186) {
                return ganttDiagramLVOFAZNHInput186.id + "-text";
              })
              .text(function (ganttDiagramLVOFAZNHInput197) {
                return ganttDiagramLVOFAZNHInput197.task;
              })
              .attr("font-size", ganttDiagramLVOFAZNHBinding105.fontSize)
              .attr("x", function (ganttDiagramLVOFAZNHInput84) {
                let ganttDiagramLVOFAZNHBinding290 =
                    ganttDiagramLVOFAZNHBinding116(
                      ganttDiagramLVOFAZNHInput84.startTime,
                    ),
                  ganttDiagramLVOFAZNHBinding291 =
                    ganttDiagramLVOFAZNHBinding116(
                      ganttDiagramLVOFAZNHInput84.renderEndTime ||
                        ganttDiagramLVOFAZNHInput84.endTime,
                    );
                if (
                  (ganttDiagramLVOFAZNHInput84.milestone &&
                    ((ganttDiagramLVOFAZNHBinding290 +=
                      0.5 *
                        (ganttDiagramLVOFAZNHBinding116(
                          ganttDiagramLVOFAZNHInput84.endTime,
                        ) -
                          ganttDiagramLVOFAZNHBinding116(
                            ganttDiagramLVOFAZNHInput84.startTime,
                          )) -
                      0.5 * ganttDiagramLVOFAZNHInput11),
                    (ganttDiagramLVOFAZNHBinding291 =
                      ganttDiagramLVOFAZNHBinding290 +
                      ganttDiagramLVOFAZNHInput11)),
                  ganttDiagramLVOFAZNHInput84.vert)
                )
                  return (
                    ganttDiagramLVOFAZNHBinding116(
                      ganttDiagramLVOFAZNHInput84.startTime,
                    ) + ganttDiagramLVOFAZNHInput10
                  );
                let ganttDiagramLVOFAZNHBinding292 = this.getBBox().width;
                return ganttDiagramLVOFAZNHBinding292 >
                  ganttDiagramLVOFAZNHBinding291 -
                    ganttDiagramLVOFAZNHBinding290
                  ? ganttDiagramLVOFAZNHBinding291 +
                      ganttDiagramLVOFAZNHBinding292 +
                      1.5 * ganttDiagramLVOFAZNHBinding105.leftPadding >
                    ganttDiagramLVOFAZNHInput13
                    ? ganttDiagramLVOFAZNHBinding290 +
                      ganttDiagramLVOFAZNHInput10 -
                      5
                    : ganttDiagramLVOFAZNHBinding291 +
                      ganttDiagramLVOFAZNHInput10 +
                      5
                  : (ganttDiagramLVOFAZNHBinding291 -
                      ganttDiagramLVOFAZNHBinding290) /
                      2 +
                      ganttDiagramLVOFAZNHBinding290 +
                      ganttDiagramLVOFAZNHInput10;
              })
              .attr(
                "y",
                function (
                  ganttDiagramLVOFAZNHInput127,
                  ganttDiagramLVOFAZNHInput128,
                ) {
                  return ganttDiagramLVOFAZNHInput127.vert
                    ? ganttDiagramLVOFAZNHBinding105.gridLineStartPadding +
                        ganttDiagramLVOFAZNHBinding111.length *
                          (ganttDiagramLVOFAZNHBinding105.barHeight +
                            ganttDiagramLVOFAZNHBinding105.barGap) +
                        60
                    : ((ganttDiagramLVOFAZNHInput128 =
                        ganttDiagramLVOFAZNHInput127.order),
                      ganttDiagramLVOFAZNHInput128 *
                        ganttDiagramLVOFAZNHInput8 +
                        ganttDiagramLVOFAZNHBinding105.barHeight / 2 +
                        (ganttDiagramLVOFAZNHBinding105.fontSize / 2 - 2) +
                        ganttDiagramLVOFAZNHInput9);
                },
              )
              .attr("text-height", ganttDiagramLVOFAZNHInput11)
              .attr("class", function (ganttDiagramLVOFAZNHInput55) {
                let ganttDiagramLVOFAZNHBinding208 =
                    ganttDiagramLVOFAZNHBinding116(
                      ganttDiagramLVOFAZNHInput55.startTime,
                    ),
                  ganttDiagramLVOFAZNHBinding209 =
                    ganttDiagramLVOFAZNHBinding116(
                      ganttDiagramLVOFAZNHInput55.endTime,
                    );
                ganttDiagramLVOFAZNHInput55.milestone &&
                  (ganttDiagramLVOFAZNHBinding209 =
                    ganttDiagramLVOFAZNHBinding208 +
                    ganttDiagramLVOFAZNHInput11);
                let ganttDiagramLVOFAZNHBinding210 = this.getBBox().width,
                  ganttDiagramLVOFAZNHBinding211 = "";
                ganttDiagramLVOFAZNHInput55.classes.length > 0 &&
                  (ganttDiagramLVOFAZNHBinding211 =
                    ganttDiagramLVOFAZNHInput55.classes.join(" "));
                let ganttDiagramLVOFAZNHBinding212 = 0;
                for (let [
                  ganttDiagramLVOFAZNHBinding394,
                  ganttDiagramLVOFAZNHBinding395,
                ] of ganttDiagramLVOFAZNHBinding112.entries())
                  ganttDiagramLVOFAZNHInput55.type ===
                    ganttDiagramLVOFAZNHBinding395 &&
                    (ganttDiagramLVOFAZNHBinding212 =
                      ganttDiagramLVOFAZNHBinding394 %
                      ganttDiagramLVOFAZNHBinding105.numberSectionStyles);
                let ganttDiagramLVOFAZNHBinding213 = "";
                return (
                  ganttDiagramLVOFAZNHInput55.active &&
                    (ganttDiagramLVOFAZNHBinding213 =
                      ganttDiagramLVOFAZNHInput55.crit
                        ? "activeCritText" + ganttDiagramLVOFAZNHBinding212
                        : "activeText" + ganttDiagramLVOFAZNHBinding212),
                  ganttDiagramLVOFAZNHInput55.done
                    ? (ganttDiagramLVOFAZNHBinding213 =
                        ganttDiagramLVOFAZNHInput55.crit
                          ? ganttDiagramLVOFAZNHBinding213 +
                            " doneCritText" +
                            ganttDiagramLVOFAZNHBinding212
                          : ganttDiagramLVOFAZNHBinding213 +
                            " doneText" +
                            ganttDiagramLVOFAZNHBinding212)
                    : ganttDiagramLVOFAZNHInput55.crit &&
                      (ganttDiagramLVOFAZNHBinding213 =
                        ganttDiagramLVOFAZNHBinding213 +
                        " critText" +
                        ganttDiagramLVOFAZNHBinding212),
                  ganttDiagramLVOFAZNHInput55.milestone &&
                    (ganttDiagramLVOFAZNHBinding213 += " milestoneText"),
                  ganttDiagramLVOFAZNHInput55.vert &&
                    (ganttDiagramLVOFAZNHBinding213 += " vertText"),
                  ganttDiagramLVOFAZNHBinding210 >
                  ganttDiagramLVOFAZNHBinding209 -
                    ganttDiagramLVOFAZNHBinding208
                    ? ganttDiagramLVOFAZNHBinding209 +
                        ganttDiagramLVOFAZNHBinding210 +
                        1.5 * ganttDiagramLVOFAZNHBinding105.leftPadding >
                      ganttDiagramLVOFAZNHInput13
                      ? ganttDiagramLVOFAZNHBinding211 +
                        " taskTextOutsideLeft taskTextOutside" +
                        ganttDiagramLVOFAZNHBinding212 +
                        " " +
                        ganttDiagramLVOFAZNHBinding213
                      : ganttDiagramLVOFAZNHBinding211 +
                        " taskTextOutsideRight taskTextOutside" +
                        ganttDiagramLVOFAZNHBinding212 +
                        " " +
                        ganttDiagramLVOFAZNHBinding213 +
                        " width-" +
                        ganttDiagramLVOFAZNHBinding210
                    : ganttDiagramLVOFAZNHBinding211 +
                      " taskText taskText" +
                      ganttDiagramLVOFAZNHBinding212 +
                      " " +
                      ganttDiagramLVOFAZNHBinding213 +
                      " width-" +
                      ganttDiagramLVOFAZNHBinding210
                );
              }),
            _chunkABZYJK2DB().securityLevel === "sandbox")
          ) {
            let ganttDiagramLVOFAZNHBinding285;
            ganttDiagramLVOFAZNHBinding285 = srcR(
              "#i" + ganttDiagramLVOFAZNHInput2,
            );
            let ganttDiagramLVOFAZNHBinding286 =
              ganttDiagramLVOFAZNHBinding285.nodes()[0].contentDocument;
            ganttDiagramLVOFAZNHBinding131
              .filter(function (item) {
                return ganttDiagramLVOFAZNHBinding132.has(item.id);
              })
              .each(function (ganttDiagramLVOFAZNHInput102) {
                var ganttDiagramLVOFAZNHBinding314 =
                    ganttDiagramLVOFAZNHBinding286.querySelector(
                      "#" + ganttDiagramLVOFAZNHInput102.id,
                    ),
                  ganttDiagramLVOFAZNHBinding315 =
                    ganttDiagramLVOFAZNHBinding286.querySelector(
                      "#" + ganttDiagramLVOFAZNHInput102.id + "-text",
                    );
                let ganttDiagramLVOFAZNHBinding316 =
                  ganttDiagramLVOFAZNHBinding314.parentNode;
                var ganttDiagramLVOFAZNHBinding317 =
                  ganttDiagramLVOFAZNHBinding286.createElement("a");
                ganttDiagramLVOFAZNHBinding317.setAttribute(
                  "xlink:href",
                  ganttDiagramLVOFAZNHBinding132.get(
                    ganttDiagramLVOFAZNHInput102.id,
                  ),
                );
                ganttDiagramLVOFAZNHBinding317.setAttribute("target", "_top");
                ganttDiagramLVOFAZNHBinding316.appendChild(
                  ganttDiagramLVOFAZNHBinding317,
                );
                ganttDiagramLVOFAZNHBinding317.appendChild(
                  ganttDiagramLVOFAZNHBinding314,
                );
                ganttDiagramLVOFAZNHBinding317.appendChild(
                  ganttDiagramLVOFAZNHBinding315,
                );
              });
          }
        }
        chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper5, "drawRects");
        function ganttDiagramLVOFAZNHHelper6(
          ganttDiagramLVOFAZNHInput39,
          ganttDiagramLVOFAZNHInput40,
          ganttDiagramLVOFAZNHInput41,
          ganttDiagramLVOFAZNHInput42,
          ganttDiagramLVOFAZNHInput43,
          ganttDiagramLVOFAZNHInput44,
          ganttDiagramLVOFAZNHInput45,
          ganttDiagramLVOFAZNHInput46,
        ) {
          if (
            ganttDiagramLVOFAZNHInput45.length === 0 &&
            ganttDiagramLVOFAZNHInput46.length === 0
          )
            return;
          let ganttDiagramLVOFAZNHBinding185, ganttDiagramLVOFAZNHBinding186;
          for (let { startTime, endTime } of ganttDiagramLVOFAZNHInput44) {
            (ganttDiagramLVOFAZNHBinding185 === undefined ||
              startTime < ganttDiagramLVOFAZNHBinding185) &&
              (ganttDiagramLVOFAZNHBinding185 = startTime);
            (ganttDiagramLVOFAZNHBinding186 === undefined ||
              endTime > ganttDiagramLVOFAZNHBinding186) &&
              (ganttDiagramLVOFAZNHBinding186 = endTime);
          }
          if (
            !ganttDiagramLVOFAZNHBinding185 ||
            !ganttDiagramLVOFAZNHBinding186
          )
            return;
          if (
            ganttDiagramLVOFAZNHBinding8
              .default(ganttDiagramLVOFAZNHBinding186)
              .diff(
                ganttDiagramLVOFAZNHBinding8.default(
                  ganttDiagramLVOFAZNHBinding185,
                ),
                "year",
              ) > 5
          ) {
            chunkAGHRB4JFI.warn(
              "The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.",
            );
            return;
          }
          let ganttDiagramLVOFAZNHBinding187 =
              ganttDiagramLVOFAZNHInput4.db.getDateFormat(),
            ganttDiagramLVOFAZNHBinding188 = [],
            ganttDiagramLVOFAZNHBinding189 = null,
            ganttDiagramLVOFAZNHBinding190 =
              ganttDiagramLVOFAZNHBinding8.default(
                ganttDiagramLVOFAZNHBinding185,
              );
          for (
            ;
            ganttDiagramLVOFAZNHBinding190.valueOf() <=
            ganttDiagramLVOFAZNHBinding186;
          ) {
            ganttDiagramLVOFAZNHInput4.db.isInvalidDate(
              ganttDiagramLVOFAZNHBinding190,
              ganttDiagramLVOFAZNHBinding187,
              ganttDiagramLVOFAZNHInput45,
              ganttDiagramLVOFAZNHInput46,
            )
              ? ganttDiagramLVOFAZNHBinding189
                ? (ganttDiagramLVOFAZNHBinding189.end =
                    ganttDiagramLVOFAZNHBinding190)
                : (ganttDiagramLVOFAZNHBinding189 = {
                    start: ganttDiagramLVOFAZNHBinding190,
                    end: ganttDiagramLVOFAZNHBinding190,
                  })
              : (ganttDiagramLVOFAZNHBinding189 &&=
                  (ganttDiagramLVOFAZNHBinding188.push(
                    ganttDiagramLVOFAZNHBinding189,
                  ),
                  null));
            ganttDiagramLVOFAZNHBinding190 = ganttDiagramLVOFAZNHBinding190.add(
              1,
              "d",
            );
          }
          ganttDiagramLVOFAZNHBinding115
            .append("g")
            .selectAll("rect")
            .data(ganttDiagramLVOFAZNHBinding188)
            .enter()
            .append("rect")
            .attr(
              "id",
              (ganttDiagramLVOFAZNHInput211) =>
                "exclude-" +
                ganttDiagramLVOFAZNHInput211.start.format("YYYY-MM-DD"),
            )
            .attr(
              "x",
              (ganttDiagramLVOFAZNHInput212) =>
                ganttDiagramLVOFAZNHBinding116(
                  ganttDiagramLVOFAZNHInput212.start.startOf("day"),
                ) + ganttDiagramLVOFAZNHInput41,
            )
            .attr("y", ganttDiagramLVOFAZNHBinding105.gridLineStartPadding)
            .attr(
              "width",
              (ganttDiagramLVOFAZNHInput205) =>
                ganttDiagramLVOFAZNHBinding116(
                  ganttDiagramLVOFAZNHInput205.end.endOf("day"),
                ) -
                ganttDiagramLVOFAZNHBinding116(
                  ganttDiagramLVOFAZNHInput205.start.startOf("day"),
                ),
            )
            .attr(
              "height",
              ganttDiagramLVOFAZNHInput43 -
                ganttDiagramLVOFAZNHInput40 -
                ganttDiagramLVOFAZNHBinding105.gridLineStartPadding,
            )
            .attr(
              "transform-origin",
              function (
                ganttDiagramLVOFAZNHInput137,
                ganttDiagramLVOFAZNHInput138,
              ) {
                return (
                  (
                    ganttDiagramLVOFAZNHBinding116(
                      ganttDiagramLVOFAZNHInput137.start,
                    ) +
                    ganttDiagramLVOFAZNHInput41 +
                    0.5 *
                      (ganttDiagramLVOFAZNHBinding116(
                        ganttDiagramLVOFAZNHInput137.end,
                      ) -
                        ganttDiagramLVOFAZNHBinding116(
                          ganttDiagramLVOFAZNHInput137.start,
                        ))
                  ).toString() +
                  "px " +
                  (
                    ganttDiagramLVOFAZNHInput138 * ganttDiagramLVOFAZNHInput39 +
                    0.5 * ganttDiagramLVOFAZNHInput43
                  ).toString() +
                  "px"
                );
              },
            )
            .attr("class", "exclude-range");
        }
        chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper6, "drawExcludeDays");
        function ganttDiagramLVOFAZNHHelper7(
          ganttDiagramLVOFAZNHInput23,
          ganttDiagramLVOFAZNHInput24,
          ganttDiagramLVOFAZNHInput25,
          ganttDiagramLVOFAZNHInput26,
        ) {
          let ganttDiagramLVOFAZNHBinding163 =
              ganttDiagramLVOFAZNHInput4.db.getDateFormat(),
            ganttDiagramLVOFAZNHBinding164 =
              ganttDiagramLVOFAZNHInput4.db.getAxisFormat(),
            ganttDiagramLVOFAZNHBinding165;
          ganttDiagramLVOFAZNHBinding165 =
            ganttDiagramLVOFAZNHBinding164 ||
            (ganttDiagramLVOFAZNHBinding163 === "D"
              ? "%d"
              : (ganttDiagramLVOFAZNHBinding105.axisFormat ?? "%Y-%m-%d"));
          let ganttDiagramLVOFAZNHBinding166 = srcI(
              ganttDiagramLVOFAZNHBinding116,
            )
              .tickSize(
                -ganttDiagramLVOFAZNHInput26 +
                  ganttDiagramLVOFAZNHInput24 +
                  ganttDiagramLVOFAZNHBinding105.gridLineStartPadding,
              )
              .tickFormat(AppInitialVit(ganttDiagramLVOFAZNHBinding165)),
            ganttDiagramLVOFAZNHBinding167 =
              /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(
                ganttDiagramLVOFAZNHInput4.db.getTickInterval() ||
                  ganttDiagramLVOFAZNHBinding105.tickInterval,
              );
          if (ganttDiagramLVOFAZNHBinding167 !== null) {
            let ganttDiagramLVOFAZNHBinding259 =
                ganttDiagramLVOFAZNHBinding167[1],
              ganttDiagramLVOFAZNHBinding260 =
                ganttDiagramLVOFAZNHBinding167[2],
              ganttDiagramLVOFAZNHBinding261 =
                ganttDiagramLVOFAZNHInput4.db.getWeekday() ||
                ganttDiagramLVOFAZNHBinding105.weekday;
            switch (ganttDiagramLVOFAZNHBinding260) {
              case "millisecond":
                ganttDiagramLVOFAZNHBinding166.ticks(
                  AppInitialCat.every(ganttDiagramLVOFAZNHBinding259),
                );
                break;
              case "second":
                ganttDiagramLVOFAZNHBinding166.ticks(
                  _appInitialOat.every(ganttDiagramLVOFAZNHBinding259),
                );
                break;
              case "minute":
                ganttDiagramLVOFAZNHBinding166.ticks(
                  AppInitialIat.every(ganttDiagramLVOFAZNHBinding259),
                );
                break;
              case "hour":
                ganttDiagramLVOFAZNHBinding166.ticks(
                  AppInitialNat.every(ganttDiagramLVOFAZNHBinding259),
                );
                break;
              case "day":
                ganttDiagramLVOFAZNHBinding166.ticks(
                  appInitialEat.every(ganttDiagramLVOFAZNHBinding259),
                );
                break;
              case "week":
                ganttDiagramLVOFAZNHBinding166.ticks(
                  ganttDiagramLVOFAZNHBinding76[
                    ganttDiagramLVOFAZNHBinding261
                  ].every(ganttDiagramLVOFAZNHBinding259),
                );
                break;
              case "month":
                ganttDiagramLVOFAZNHBinding166.ticks(
                  appInitialWit.every(ganttDiagramLVOFAZNHBinding259),
                );
                break;
            }
          }
          if (
            (ganttDiagramLVOFAZNHBinding115
              .append("g")
              .attr("class", "grid")
              .attr(
                "transform",
                "translate(" +
                  ganttDiagramLVOFAZNHInput23 +
                  ", " +
                  (ganttDiagramLVOFAZNHInput26 - 50) +
                  ")",
              )
              .call(ganttDiagramLVOFAZNHBinding166)
              .selectAll("text")
              .style("text-anchor", "middle")
              .attr("fill", "#000")
              .attr("stroke", "none")
              .attr("font-size", 10)
              .attr("dy", "1em"),
            ganttDiagramLVOFAZNHInput4.db.topAxisEnabled() ||
              ganttDiagramLVOFAZNHBinding105.topAxis)
          ) {
            let ganttDiagramLVOFAZNHBinding217 = srcA(
              ganttDiagramLVOFAZNHBinding116,
            )
              .tickSize(
                -ganttDiagramLVOFAZNHInput26 +
                  ganttDiagramLVOFAZNHInput24 +
                  ganttDiagramLVOFAZNHBinding105.gridLineStartPadding,
              )
              .tickFormat(AppInitialVit(ganttDiagramLVOFAZNHBinding165));
            if (ganttDiagramLVOFAZNHBinding167 !== null) {
              let ganttDiagramLVOFAZNHBinding254 =
                  ganttDiagramLVOFAZNHBinding167[1],
                ganttDiagramLVOFAZNHBinding255 =
                  ganttDiagramLVOFAZNHBinding167[2],
                ganttDiagramLVOFAZNHBinding256 =
                  ganttDiagramLVOFAZNHInput4.db.getWeekday() ||
                  ganttDiagramLVOFAZNHBinding105.weekday;
              switch (ganttDiagramLVOFAZNHBinding255) {
                case "millisecond":
                  ganttDiagramLVOFAZNHBinding217.ticks(
                    AppInitialCat.every(ganttDiagramLVOFAZNHBinding254),
                  );
                  break;
                case "second":
                  ganttDiagramLVOFAZNHBinding217.ticks(
                    _appInitialOat.every(ganttDiagramLVOFAZNHBinding254),
                  );
                  break;
                case "minute":
                  ganttDiagramLVOFAZNHBinding217.ticks(
                    AppInitialIat.every(ganttDiagramLVOFAZNHBinding254),
                  );
                  break;
                case "hour":
                  ganttDiagramLVOFAZNHBinding217.ticks(
                    AppInitialNat.every(ganttDiagramLVOFAZNHBinding254),
                  );
                  break;
                case "day":
                  ganttDiagramLVOFAZNHBinding217.ticks(
                    appInitialEat.every(ganttDiagramLVOFAZNHBinding254),
                  );
                  break;
                case "week":
                  ganttDiagramLVOFAZNHBinding217.ticks(
                    ganttDiagramLVOFAZNHBinding76[
                      ganttDiagramLVOFAZNHBinding256
                    ].every(ganttDiagramLVOFAZNHBinding254),
                  );
                  break;
                case "month":
                  ganttDiagramLVOFAZNHBinding217.ticks(
                    appInitialWit.every(ganttDiagramLVOFAZNHBinding254),
                  );
                  break;
              }
            }
            ganttDiagramLVOFAZNHBinding115
              .append("g")
              .attr("class", "grid")
              .attr(
                "transform",
                "translate(" +
                  ganttDiagramLVOFAZNHInput23 +
                  ", " +
                  ganttDiagramLVOFAZNHInput24 +
                  ")",
              )
              .call(ganttDiagramLVOFAZNHBinding217)
              .selectAll("text")
              .style("text-anchor", "middle")
              .attr("fill", "#000")
              .attr("stroke", "none")
              .attr("font-size", 10);
          }
        }
        chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper7, "makeGrid");
        function ganttDiagramLVOFAZNHHelper8(
          ganttDiagramLVOFAZNHInput52,
          ganttDiagramLVOFAZNHInput53,
        ) {
          let ganttDiagramLVOFAZNHBinding197 = 0,
            ganttDiagramLVOFAZNHBinding198 = Object.keys(
              ganttDiagramLVOFAZNHBinding113,
            ).map((item) => [item, ganttDiagramLVOFAZNHBinding113[item]]);
          ganttDiagramLVOFAZNHBinding115
            .append("g")
            .selectAll("text")
            .data(ganttDiagramLVOFAZNHBinding198)
            .enter()
            .append(function (ganttDiagramLVOFAZNHInput74) {
              let ganttDiagramLVOFAZNHBinding269 =
                  ganttDiagramLVOFAZNHInput74[0].split(
                    chunkABZYJK2DS.lineBreakRegex,
                  ),
                ganttDiagramLVOFAZNHBinding270 =
                  -(ganttDiagramLVOFAZNHBinding269.length - 1) / 2,
                ganttDiagramLVOFAZNHBinding271 =
                  ganttDiagramLVOFAZNHBinding109.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "text",
                  );
              ganttDiagramLVOFAZNHBinding271.setAttribute(
                "dy",
                ganttDiagramLVOFAZNHBinding270 + "em",
              );
              for (let [
                ganttDiagramLVOFAZNHBinding318,
                ganttDiagramLVOFAZNHBinding319,
              ] of ganttDiagramLVOFAZNHBinding269.entries()) {
                let ganttDiagramLVOFAZNHBinding321 =
                  ganttDiagramLVOFAZNHBinding109.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "tspan",
                  );
                ganttDiagramLVOFAZNHBinding321.setAttribute(
                  "alignment-baseline",
                  "central",
                );
                ganttDiagramLVOFAZNHBinding321.setAttribute("x", "10");
                ganttDiagramLVOFAZNHBinding318 > 0 &&
                  ganttDiagramLVOFAZNHBinding321.setAttribute("dy", "1em");
                ganttDiagramLVOFAZNHBinding321.textContent =
                  ganttDiagramLVOFAZNHBinding319;
                ganttDiagramLVOFAZNHBinding271.appendChild(
                  ganttDiagramLVOFAZNHBinding321,
                );
              }
              return ganttDiagramLVOFAZNHBinding271;
            })
            .attr("x", 10)
            .attr(
              "y",
              function (
                ganttDiagramLVOFAZNHInput148,
                ganttDiagramLVOFAZNHInput149,
              ) {
                if (ganttDiagramLVOFAZNHInput149 > 0)
                  for (
                    let ganttDiagramLVOFAZNHBinding390 = 0;
                    ganttDiagramLVOFAZNHBinding390 <
                    ganttDiagramLVOFAZNHInput149;
                    ganttDiagramLVOFAZNHBinding390++
                  )
                    return (
                      (ganttDiagramLVOFAZNHBinding197 +=
                        ganttDiagramLVOFAZNHBinding198[
                          ganttDiagramLVOFAZNHInput149 - 1
                        ][1]),
                      (ganttDiagramLVOFAZNHInput148[1] *
                        ganttDiagramLVOFAZNHInput52) /
                        2 +
                        ganttDiagramLVOFAZNHBinding197 *
                          ganttDiagramLVOFAZNHInput52 +
                        ganttDiagramLVOFAZNHInput53
                    );
                else
                  return (
                    (ganttDiagramLVOFAZNHInput148[1] *
                      ganttDiagramLVOFAZNHInput52) /
                      2 +
                    ganttDiagramLVOFAZNHInput53
                  );
              },
            )
            .attr("font-size", ganttDiagramLVOFAZNHBinding105.sectionFontSize)
            .attr("class", function (ganttDiagramLVOFAZNHInput132) {
              for (let [
                ganttDiagramLVOFAZNHBinding364,
                ganttDiagramLVOFAZNHBinding365,
              ] of ganttDiagramLVOFAZNHBinding112.entries())
                if (
                  ganttDiagramLVOFAZNHInput132[0] ===
                  ganttDiagramLVOFAZNHBinding365
                )
                  return (
                    "sectionTitle sectionTitle" +
                    (ganttDiagramLVOFAZNHBinding364 %
                      ganttDiagramLVOFAZNHBinding105.numberSectionStyles)
                  );
              return "sectionTitle";
            });
        }
        chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper8, "vertLabels");
        function ganttDiagramLVOFAZNHHelper9(
          ganttDiagramLVOFAZNHInput89,
          ganttDiagramLVOFAZNHInput90,
          ganttDiagramLVOFAZNHInput91,
          ganttDiagramLVOFAZNHInput92,
        ) {
          let ganttDiagramLVOFAZNHBinding301 =
            ganttDiagramLVOFAZNHInput4.db.getTodayMarker();
          if (ganttDiagramLVOFAZNHBinding301 === "off") return;
          let ganttDiagramLVOFAZNHBinding302 = ganttDiagramLVOFAZNHBinding115
              .append("g")
              .attr("class", "today"),
            ganttDiagramLVOFAZNHBinding303 = new Date(),
            ganttDiagramLVOFAZNHBinding304 =
              ganttDiagramLVOFAZNHBinding302.append("line");
          ganttDiagramLVOFAZNHBinding304
            .attr(
              "x1",
              ganttDiagramLVOFAZNHBinding116(ganttDiagramLVOFAZNHBinding303) +
                ganttDiagramLVOFAZNHInput89,
            )
            .attr(
              "x2",
              ganttDiagramLVOFAZNHBinding116(ganttDiagramLVOFAZNHBinding303) +
                ganttDiagramLVOFAZNHInput89,
            )
            .attr("y1", ganttDiagramLVOFAZNHBinding105.titleTopMargin)
            .attr(
              "y2",
              ganttDiagramLVOFAZNHInput92 -
                ganttDiagramLVOFAZNHBinding105.titleTopMargin,
            )
            .attr("class", "today");
          ganttDiagramLVOFAZNHBinding301 !== "" &&
            ganttDiagramLVOFAZNHBinding304.attr(
              "style",
              ganttDiagramLVOFAZNHBinding301.replace(/,/g, ";"),
            );
        }
        chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper9, "drawToday");
        function ganttDiagramLVOFAZNHHelper10(ganttDiagramLVOFAZNHInput135) {
          let ganttDiagramLVOFAZNHBinding349 = {},
            ganttDiagramLVOFAZNHBinding350 = [];
          for (
            let ganttDiagramLVOFAZNHBinding378 = 0,
              ganttDiagramLVOFAZNHBinding379 =
                ganttDiagramLVOFAZNHInput135.length;
            ganttDiagramLVOFAZNHBinding378 < ganttDiagramLVOFAZNHBinding379;
            ++ganttDiagramLVOFAZNHBinding378
          )
            Object.prototype.hasOwnProperty.call(
              ganttDiagramLVOFAZNHBinding349,
              ganttDiagramLVOFAZNHInput135[ganttDiagramLVOFAZNHBinding378],
            ) ||
              ((ganttDiagramLVOFAZNHBinding349[
                ganttDiagramLVOFAZNHInput135[ganttDiagramLVOFAZNHBinding378]
              ] = true),
              ganttDiagramLVOFAZNHBinding350.push(
                ganttDiagramLVOFAZNHInput135[ganttDiagramLVOFAZNHBinding378],
              ));
          return ganttDiagramLVOFAZNHBinding350;
        }
        chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper10, "checkUnique");
      }, "draw"),
    },
    styles: chunkAGHRB4JFN(
      (ganttDiagramLVOFAZNHInput22) => `
  .mermaid-main-font {
        font-family: ${ganttDiagramLVOFAZNHInput22.fontFamily};
  }

  .exclude-range {
    fill: ${ganttDiagramLVOFAZNHInput22.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${ganttDiagramLVOFAZNHInput22.sectionBkgColor};
  }

  .section2 {
    fill: ${ganttDiagramLVOFAZNHInput22.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${ganttDiagramLVOFAZNHInput22.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${ganttDiagramLVOFAZNHInput22.titleColor};
  }

  .sectionTitle1 {
    fill: ${ganttDiagramLVOFAZNHInput22.titleColor};
  }

  .sectionTitle2 {
    fill: ${ganttDiagramLVOFAZNHInput22.titleColor};
  }

  .sectionTitle3 {
    fill: ${ganttDiagramLVOFAZNHInput22.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${ganttDiagramLVOFAZNHInput22.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${ganttDiagramLVOFAZNHInput22.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${ganttDiagramLVOFAZNHInput22.fontFamily};
    fill: ${ganttDiagramLVOFAZNHInput22.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${ganttDiagramLVOFAZNHInput22.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${ganttDiagramLVOFAZNHInput22.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${ganttDiagramLVOFAZNHInput22.taskTextDarkColor};
    text-anchor: start;
    font-family: ${ganttDiagramLVOFAZNHInput22.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${ganttDiagramLVOFAZNHInput22.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${ganttDiagramLVOFAZNHInput22.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${ganttDiagramLVOFAZNHInput22.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${ganttDiagramLVOFAZNHInput22.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${ganttDiagramLVOFAZNHInput22.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${ganttDiagramLVOFAZNHInput22.taskBkgColor};
    stroke: ${ganttDiagramLVOFAZNHInput22.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${ganttDiagramLVOFAZNHInput22.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${ganttDiagramLVOFAZNHInput22.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${ganttDiagramLVOFAZNHInput22.activeTaskBkgColor};
    stroke: ${ganttDiagramLVOFAZNHInput22.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${ganttDiagramLVOFAZNHInput22.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${ganttDiagramLVOFAZNHInput22.doneTaskBorderColor};
    fill: ${ganttDiagramLVOFAZNHInput22.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${ganttDiagramLVOFAZNHInput22.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${ganttDiagramLVOFAZNHInput22.critBorderColor};
    fill: ${ganttDiagramLVOFAZNHInput22.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${ganttDiagramLVOFAZNHInput22.critBorderColor};
    fill: ${ganttDiagramLVOFAZNHInput22.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${ganttDiagramLVOFAZNHInput22.critBorderColor};
    fill: ${ganttDiagramLVOFAZNHInput22.doneTaskBkgColor};
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
    fill: ${ganttDiagramLVOFAZNHInput22.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${ganttDiagramLVOFAZNHInput22.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${ganttDiagramLVOFAZNHInput22.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${ganttDiagramLVOFAZNHInput22.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${ganttDiagramLVOFAZNHInput22.titleColor || ganttDiagramLVOFAZNHInput22.textColor};
    font-family: ${ganttDiagramLVOFAZNHInput22.fontFamily};
  }
`,
      "getStyles",
    ),
  };
})();
export { GanttDiagramLVOFAZNH as diagram };
