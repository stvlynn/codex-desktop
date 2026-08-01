// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 13/19
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { ensurePersistedAtomInit } from "../../boundaries/persisted-atom";
import { react } from "../../boundaries/react-cjs-runtime";
import {
  _workbookT,
  workbookB,
  workbookL,
  WorkbookR,
  workbookZ,
} from "../../workbook/editor-compat";
import { readPrefersReducedMotionAtom } from "../../motion/use-prefers-reduced-motion";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { buildMemoryFeatureFlags } from "../../settings/build-memory-feature-flags";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { deferredUiYat } from "../../ui/deferred-ui-yat";
import {
  ensureDndAxisLockModifiersInit,
  restrictToFirstScrollableAncestor,
  restrictToVerticalAxis,
} from "../../ui/dnd-axis-lock-modifiers";
import { dndAxisLockModifiers } from "../../ui/dnd-axis-lock-modifiers-bindable";
import { useDndSensors } from "../../ui/use-dnd-sensors";
import { joinStringsOrNull } from "../../utils/join-strings-or-null";
import { safeZodValue } from "../../utils/safe-zod-value";
import {
  colIndexToLetters,
  formatA1,
  initAddressMetrics,
  initAddressUtils,
  lettersToColIndex,
  parseA1Range,
  rowTokenToIndex,
} from "../../utils/spreadsheet-address-utils";
import { stack, stackOffsetExpand } from "../../vendor/d3-shape-line-pie-stack";
import { ensureD3ShapeStackOffsetInit } from "../../workbook/ensure-d3-shape-stack-offset-init";
import {
  ensureFeatureCatalogAtomsInit,
  ensureFeatureCatalogInit,
  listFeatureCatalogRows,
  PopcornFindBar,
} from "../feature-catalog";
import {
  popcornSurfaceStyle__t,
  popcornSurfaceStyle_A,
  popcornSurfaceStyle_at,
  popcornSurfaceStyle_B,
  popcornSurfaceStyle_ct,
  popcornSurfaceStyle_Ct,
  popcornSurfaceStyle_dt,
  popcornSurfaceStyle_et,
  popcornSurfaceStyle_ft,
  popcornSurfaceStyle_gt,
  popcornSurfaceStyle_H,
  popcornSurfaceStyle_ht,
  popcornSurfaceStyle_it,
  popcornSurfaceStyle_J,
  popcornSurfaceStyle_lt,
  popcornSurfaceStyle_mt,
  popcornSurfaceStyle_N,
  popcornSurfaceStyle_nt,
  popcornSurfaceStyle_O,
  popcornSurfaceStyle_ot,
  popcornSurfaceStyle_P,
  popcornSurfaceStyle_pt,
  popcornSurfaceStyle_Q,
  popcornSurfaceStyle_r,
  popcornSurfaceStyle_rt,
  popcornSurfaceStyle_st,
  popcornSurfaceStyle_St,
  popcornSurfaceStyle_t,
  popcornSurfaceStyle_tt,
  popcornSurfaceStyle_ut,
  popcornSurfaceStyle_wt,
} from "../popcorn-electron-surface-style";
import {
  RemoteTextEditSessionA,
  RemoteTextEditSessionB,
  RemoteTextEditSessionC,
  RemoteTextEditSessionE,
  RemoteTextEditSessionF,
  RemoteTextEditSessionG,
  RemoteTextEditSessionH,
  RemoteTextEditSessionI,
  RemoteTextEditSessionJ,
  RemoteTextEditSessionL,
  RemoteTextEditSessionLowerR,
  RemoteTextEditSessionLowerT,
  RemoteTextEditSessionM,
  RemoteTextEditSessionN,
  RemoteTextEditSessionO,
  RemoteTextEditSessionP,
  RemoteTextEditSessionQ,
  RemoteTextEditSessionR,
  RemoteTextEditSessionS,
  RemoteTextEditSessionSurfaceKind,
  RemoteTextEditSessionU,
  remoteTextEditSessionUnderscore,
  RemoteTextEditSessionV,
  RemoteTextEditSessionW,
  RemoteTextEditSessionX,
  RemoteTextEditSessionY,
  RemoteTextEditSessionZ,
  RemoteTextEditSessionZoomControl,
} from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const Cliff2: any = undefined;
const IntlProvider: any = undefined;
const apex2: any = undefined;
const brook2: any = undefined;
const p: any = undefined;

function Elm2(vapor17, wheat17, yarn17) {
  switch (vapor17.kind) {
    case "string":
      wheat17.push({
        kind: "string",
        from: vapor17.from,
        to: vapor17.to,
      });
      break;
    case "number":
      wheat17.push({
        kind: "number",
        from: vapor17.from,
        to: vapor17.to,
      });
      break;
    case "error":
      wheat17.push({
        kind: "error",
        from: vapor17.from,
        to: vapor17.to,
      });
      yarn17.push({
        from: vapor17.from,
        to: vapor17.to,
        code: vapor17.text,
      });
      break;
    case "op":
      wheat17.push(Fern2(vapor17.from, vapor17.to));
      break;
    default:
      break;
  }
}
function Fern2(zephyr17, acorn17) {
  return {
    kind: "dim",
    from: zephyr17,
    to: acorn17,
  };
}
function Grove2(bloom17, coral17) {
  for (let drift17 = coral17; drift17 < bloom17.length; drift17 += 1) {
    let eagle17 = bloom17[drift17];
    if (!(!eagle17 || eagle17.type === "Whitespace")) return eagle17;
  }
  return null;
}
function js(frost17, glide17, honey17, iris17) {
  let jewel17 = frost17[glide17];
  if (!jewel17 || !quiet2.has(jewel17.type)) return null;
  let knoll17 = glide17 + 1,
    lunar17 = false;
  for (; knoll17 < frost17.length; ) {
    let ridge17 = frost17[knoll17];
    if (!ridge17 || ridge17.type === "EOF" || ridge17.type === "Whitespace")
      break;
    if (ridge17.type === "Colon") {
      if (lunar17) break;
      lunar17 = true;
      knoll17 += 1;
      continue;
    }
    if (!rain2.has(ridge17.type)) break;
    knoll17 += 1;
  }
  let moss17 = frost17[knoll17 - 1];
  if (!moss17) return null;
  let north17 = honey17.slice(jewel17.start, moss17.end);
  if (!north17 || !seed2.test(north17)) return null;
  let orbit17 = Hill2(north17, iris17);
  if (!orbit17) return null;
  let pine17 = {
      kind: "ref",
      from: jewel17.start,
      to: moss17.end,
      text: north17,
      norm: orbit17.a1,
    },
    quest17 = Petal2(orbit17.sheet, orbit17.a1);
  return {
    token: pine17,
    highlight: {
      kind: "ref",
      from: pine17.from,
      to: pine17.to,
      colorKey: quest17,
      ref: {
        a1: orbit17.sheet ? `${orbit17.sheet}!${orbit17.a1}` : orbit17.a1,
        sheet: orbit17.sheet,
        abs: orbit17.isAbsolute,
      },
    },
    refSpan: {
      id: quest17,
      from: pine17.from,
      to: pine17.to,
      a1: orbit17.a1,
      sheet: orbit17.sheet,
    },
    nextIndex: knoll17,
  };
}
function Hill2(storm17, tide17) {
  let unity17 = storm17.trim();
  if (!unity17) return null;
  let vale17 = tide17?.trim() || undefined,
    wave17 = unity17.indexOf(":");
  if (wave17 === -1) {
    let elm17 = Isle2(unity17, vale17, false);
    return !elm17 || elm17.kind !== "cell"
      ? null
      : {
          sheet: vale17,
          a1: Lagoon2(elm17.address),
          isAbsolute: elm17.address.absRow || elm17.address.absCol,
        };
  }
  if (unity17.indexOf(":", wave17 + 1) !== -1) return null;
  let apex17 = unity17.slice(0, wave17),
    brook17 = unity17.slice(wave17 + 1);
  if (!apex17 || !brook17) return null;
  let cliff17 = Isle2(apex17, vale17, true),
    dusk17 = Isle2(brook17, vale17, true);
  return !cliff17 || !dusk17
    ? null
    : cliff17.kind === "cell" && dusk17.kind === "cell"
      ? {
          sheet: vale17,
          a1: `${Lagoon2(cliff17.address)}:${Lagoon2(dusk17.address)}`,
          isAbsolute: false,
        }
      : cliff17.kind === "column" && dusk17.kind === "column"
        ? {
            sheet: vale17,
            a1: `${Meadow2(cliff17)}:${Meadow2(dusk17)}`,
            isAbsolute: false,
          }
        : cliff17.kind === "row" && dusk17.kind === "row"
          ? {
              sheet: vale17,
              a1: `${Nest2(cliff17)}:${Nest2(dusk17)}`,
              isAbsolute: false,
            }
          : null;
}
function Isle2(fern17, grove17, hill17) {
  let isle17 = fern17.trim();
  if (!isle17) return null;
  let juniper17 = grove17
      ? {
          sheetName: grove17,
        }
      : undefined,
    lagoon17 = WorkbookR(isle17, juniper17);
  if (lagoon17)
    return {
      kind: "cell",
      address: lagoon17,
      raw: isle17,
    };
  if (!hill17) return null;
  let meadow17 = workbookL(isle17, juniper17);
  if (meadow17 && meadow17.kind === "WholeColumn")
    return {
      kind: "column",
      col: meadow17.col,
      raw: isle17,
    };
  let nest17 = Juniper2(isle17);
  return nest17
    ? {
        kind: "row",
        row: nest17.row,
        abs: nest17.abs,
        raw: isle17,
      }
    : null;
}
function Juniper2(oak17) {
  let petal17 = /^(\$?)(\d{1,7})$/.exec(oak17);
  if (!petal17) return null;
  let quiet17 = Number(petal17[2]);
  return !Number.isInteger(quiet17) || quiet17 <= 0
    ? null
    : {
        row: quiet17,
        abs: petal17[1] === "$",
      };
}
function Lagoon2(rain17) {
  let seed17 = workbookZ(rain17.col);
  return `${rain17.absCol ? `$${seed17}` : seed17}${rain17.absRow ? `$${rain17.row}` : String(rain17.row)}`;
}
function Meadow2(trail17) {
  let urn17 = workbookZ(trail17.col);
  return trail17.raw.startsWith("$") ? `$${urn17}` : urn17;
}
function Nest2(vine17) {
  let wind17 = String(vine17.row);
  return vine17.abs ? `$${wind17}` : wind17;
}
function Oak2(yarrow17) {
  let azure17 = yarrow17.trim();
  return (
    azure17.length >= 2 &&
      azure17.startsWith("'") &&
      azure17.endsWith("'") &&
      (azure17 = azure17.slice(1, -1).replace(/''/g, "'")),
    azure17
  );
}
function Petal2(birch17, canyon17) {
  return `ref:${(birch17 ?? "local").toUpperCase()}:${canyon17.replace(/\$/g, "").toUpperCase()}`;
}
var quiet2,
  rain2,
  seed2,
  trail2 = esmInit(() => {
    workbookL();
    quiet2 = new Set(["Identifier", "Number"]);
    rain2 = new Set(["Identifier", "Number"]);
    seed2 = /^[A-Za-z0-9:$]+$/;
  });
function Urn2(dew17) {
  let alpha18 = dew17.formula ?? "",
    bravo18 = Wind2(dew17.caret ?? 0, alpha18.length),
    copper18 = Cliff2(alpha18).tokens,
    delta18 = $s(copper18, bravo18),
    echo18 = Yarrow2(alpha18, bravo18, copper18),
    falcon18 = echo18.prefix.toUpperCase(),
    gamma18 = delta3.test(echo18.prefix),
    harbor18 = Birch2(falcon18),
    indigo18 = Canyon2(alpha18, bravo18),
    jade18 = Alpha3(dew17.selectedFunctionName, harbor18),
    kite18 =
      indigo18?.metadata ??
      jade18 ??
      (harbor18.length === 1 ? harbor18[0] : undefined);
  if (kite18) {
    let lemon18 = indigo18?.metadata === kite18 ? indigo18.argumentIndex : 0;
    return {
      kind: "parameters",
      function: kite18,
      argumentIndex: lemon18,
      parameter: Dew2(kite18.parameters, lemon18),
    };
  }
  return !gamma18 || delta18 || harbor18.length === 0
    ? null
    : {
        kind: "functions",
        prefix: echo18.prefix,
        suggestions: harbor18,
      };
}
function Vine2() {
  let marble18 = new Map();
  for (let nickel18 of apex2)
    marble18.set(nickel18.name.toUpperCase(), nickel18);
  return marble18;
}
function Wind2(onyx18, pearl18) {
  return Number.isNaN(onyx18) ? 0 : Math.min(Math.max(onyx18, 0), pearl18);
}
function Yarrow2(quartz18, river18, slate18) {
  for (let umbra18 of slate18)
    if (
      umbra18.kind === "ident" &&
      umbra18.from <= river18 &&
      river18 <= umbra18.to
    )
      return {
        prefix: quartz18.slice(umbra18.from, river18),
        start: umbra18.from,
      };
  let timber18 = Azure2(quartz18, river18);
  return {
    prefix: quartz18.slice(timber18, river18),
    start: timber18,
  };
}
function Azure2(violet18, willow18) {
  let xenon18 = willow18;
  for (; xenon18 > 0; ) {
    let yellow18 = violet18[xenon18 - 1] ?? "";
    if (!copper3.test(yellow18)) break;
    --xenon18;
  }
  return xenon18;
}
function Birch2(zinc18) {
  return zinc18
    ? apex2.filter((item) => item.name.toUpperCase().startsWith(zinc18))
    : apex2.slice();
}
function Canyon2(amber18, basalt18) {
  let cedar18 = WorkbookR(amber18),
    daisy18 = [],
    ember18 = null;
  for (let flint18 of cedar18) {
    if (flint18.start >= basalt18) break;
    if (flint18.type !== "Whitespace") {
      switch (flint18.type) {
        case "ParenOpen":
          if (ember18 && ember18.type === "Identifier") {
            let garnet18 = amber18
                .slice(ember18.start, ember18.end)
                .toUpperCase(),
              hazel18 = bravo3.get(garnet18);
            daisy18.push({
              kind: "function",
              frame: {
                name: garnet18,
                metadata: hazel18,
                argumentIndex: 0,
              },
            });
          } else
            daisy18.push({
              kind: "group",
            });
          break;
        case "ParenClose":
          daisy18.pop();
          break;
        case "Comma":
          for (let ivory18 = daisy18.length - 1; ivory18 >= 0; --ivory18) {
            let jasper18 = daisy18[ivory18];
            if (!(!jasper18 || jasper18.kind !== "function")) {
              jasper18.frame.argumentIndex += 1;
              break;
            }
          }
          break;
        default:
          break;
      }
      ember18 = flint18;
    }
  }
  for (let kelp18 = daisy18.length - 1; kelp18 >= 0; --kelp18) {
    let lotus18 = daisy18[kelp18];
    if (!(!lotus18 || lotus18.kind !== "function")) return lotus18.frame;
  }
}
function Dew2(mint18, nova18) {
  if (mint18.length !== 0)
    return nova18 < mint18.length ? mint18[nova18] : mint18[mint18.length - 1];
}
function Alpha3(olive18, prism18) {
  if (!olive18) return;
  let quill18 = olive18.trim().toUpperCase();
  if (quill18)
    return (
      bravo3.get(quill18) ??
      prism18.find((item) => item.name.toUpperCase() === quill18)
    );
}
function $s(reef18, sage18) {
  return reef18.some(
    (item) => item.kind === "ref" && item.from <= sage18 && sage18 <= item.to,
  );
}
var bravo3,
  copper3,
  delta3,
  echo3 = esmInit(() => {
    brook2();
    workbookL();
    trail2();
    bravo3 = Vine2();
    copper3 = /^[A-Za-z0-9_.]+$/;
    delta3 = /[A-Za-z]/;
  });
function Falcon3(topaz18, ultra18, vapor18) {
  for (let yarn18 of vapor18)
    if (
      yarn18.kind === "ident" &&
      yarn18.from <= ultra18 &&
      ultra18 <= yarn18.to
    )
      return {
        prefix: topaz18.slice(yarn18.from, ultra18),
        start: yarn18.from,
      };
  let wheat18 = Gamma3(topaz18, ultra18);
  return {
    prefix: topaz18.slice(wheat18, ultra18),
    start: wheat18,
  };
}
function Gamma3(zephyr18, acorn18) {
  let bloom18 = /^[A-Za-z0-9_.]+$/,
    coral18 = acorn18;
  for (; coral18 > 0; ) {
    let drift18 = zephyr18[coral18 - 1] ?? "";
    if (!bloom18.test(drift18)) break;
    --coral18;
  }
  return coral18;
}
var harbor3 = esmInit(() => {});
function Indigo3({
  result,
  position,
  selectedIndex,
  onSuggestionHover,
  onSuggestionSelect,
}) {
  if (result.kind === "functions") {
    let glide18 = result.suggestions;
    if (glide18.length === 0) return null;
    let honey18 = Math.min(selectedIndex, Math.max(glide18.length - 1, 0));
    return (
      <div
        className="border-token-border bg-token-bg-primary absolute z-30 w-[430px] rounded-xl border p-2 shadow-xl"
        style={{
          top: position.top,
          left: position.left,
        }}
      >
        <ul className="scrollbar-hide max-h-[420px] space-y-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {glide18.map((item, index) => {
            let iris18 = index === honey18,
              jewel18 = item.description?.trim();
            return (
              <li key={item.name}>
                <button
                  type="button"
                  className={IntlProvider(
                    "w-full rounded-lg px-3 py-2 text-start",
                    iris18
                      ? "bg-token-bg-secondary"
                      : "hover:bg-token-bg-secondary",
                  )}
                  onMouseEnter={() => onSuggestionHover(index)}
                  onFocus={() => onSuggestionHover(index)}
                  onMouseDown={(event) => {
                    event.preventDefault();
                  }}
                  onClick={() => onSuggestionSelect(item)}
                >
                  <div className="text-token-text-primary text-[14px] leading-5">
                    {item.name}
                  </div>
                  {jewel18 ? (
                    <div
                      className={IntlProvider(
                        "grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-200",
                        iris18
                          ? "mt-0.5 grid-rows-[1fr] opacity-100"
                          : "mt-0 grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="text-token-text-secondary line-clamp-2 text-[14px] leading-5">
                          {jewel18}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  let eagle18 = result.function,
    frost18 = eagle18.parameters ?? [];
  return (
    <div
      className="border-token-border bg-token-bg-primary absolute z-30 w-72 rounded-md border p-3 text-xs shadow-lg"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <div className="text-token-text-primary text-sm font-semibold">
        {eagle18.name}
      </div>
      <div className="text-token-text-secondary mt-1 font-mono text-[11px]">
        <span className="text-token-text-primary">{eagle18.name}</span>
        <span>{"("}</span>
        {frost18.map((item, index) => {
          let knoll18 = index === result.argumentIndex,
            lunar18 = item.type ?? item.name;
          return (
            <span
              key={`${eagle18.name}-sig-${item.name}-${index}`}
              className={IntlProvider(
                "rounded-sm px-0.5",
                knoll18 && "bg-green-500/30 font-semibold text-green-900",
              )}
            >
              {lunar18}
              {index < frost18.length - 1 ? ", " : null}
            </span>
          );
        })}
        <span
          className={IntlProvider(
            frost18.length === 0 && "text-token-text-tertiary",
          )}
        >
          {")"}
        </span>
      </div>
      <p className="text-token-text-secondary mt-1 mb-2 text-[11px]">
        {eagle18.description}
      </p>
      {eagle18.example ? (
        <div className="text-token-text-tertiary mb-2 font-mono text-[10px]">
          {eagle18.example}
        </div>
      ) : null}
      <ul className="space-y-1">
        {frost18.map((item, index) => {
          let moss18 = index === result.argumentIndex,
            north18 = item.type ?? item.name;
          return (
            <li
              key={`${eagle18.name}-${item.name}-${index}`}
              className={IntlProvider(
                "rounded px-2 py-1",
                moss18
                  ? "bg-green-500/20 text-green-900"
                  : "text-token-text-secondary",
              )}
            >
              <span className="text-token-text-primary font-semibold">
                {item.name}
              </span>
              <span className="text-token-text-tertiary ms-1 text-[11px]">
                {north18}
              </span>
              {item.optional ? (
                <span className="text-token-text-tertiary text-[10px] uppercase">
                  {"optional"}
                </span>
              ) : null}
              <div className="text-[11px]">{item.description}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
var jade3,
  kite3 = esmInit(() => {
    ensureComposerEsm_Tft_Init();
  });
function Lemon3({ text, tokenized, refColors }) {
  let orbit18 = [],
    pine18 = 0;
  for (let quest18 of tokenized.tokens) {
    quest18.from > pine18 &&
      orbit18.push(
        <span key={`gap-${pine18}`}>{text.slice(pine18, quest18.from)}</span>,
      );
    orbit18.push(
      <Marble3
        key={`tok-${quest18.from}-${quest18.to}`}
        {...{
          text: text.slice(quest18.from, quest18.to),
          highlight: Nickel3(quest18, tokenized.highlights),
          refColors,
        }}
      />,
    );
    pine18 = quest18.to;
  }
  return (
    pine18 < text.length &&
      orbit18.push(
        <span key={`trail-${pine18}`}>{text.slice(pine18, text.length)}</span>,
      ),
    (
      <pre
        className="m-0 font-mono text-xs break-words whitespace-pre-wrap"
        style={{
          lineHeight: "inherit",
        }}
      >
        {orbit18}
      </pre>
    )
  );
}
function Marble3({ text, highlight, refColors }) {
  if (!highlight) return <span>{text}</span>;
  let { className, style } = Onyx3(highlight, refColors);
  return (
    <span className={className} style={style}>
      {text}
    </span>
  );
}
function Nickel3(ridge18, storm18) {
  for (let tide18 of storm18)
    if (tide18.from <= ridge18.from && tide18.to >= ridge18.to) return tide18;
  return null;
}
function Onyx3(unity18, vale18) {
  switch (unity18.kind) {
    case "func":
      return {
        className: "text-token-text-accent font-semibold",
      };
    case "string":
      return {
        className: "text-token-text-tertiary",
      };
    case "number":
      return {
        className: "text-token-text-secondary",
      };
    case "error":
      return {
        className: "text-token-text-critical",
      };
    case "ref": {
      let wave18 = unity18.colorKey ?? unity18.ref?.a1?.toUpperCase(),
        apex18 = wave18 ? vale18?.[wave18] : undefined;
      return {
        className: "font-semibold",
        style: apex18
          ? {
              color: apex18,
            }
          : undefined,
      };
    }
    default:
      return {
        className: "text-token-text-primary",
      };
  }
}
var pearl3,
  quartz3 = esmInit(() => {
    react();
  });
function River3(brook18, cliff18, dusk18, elm18, fern18, grove18) {
  let hill18 = cliff18 ?? {
      start: elm18.start,
      prefix: "",
    },
    isle18 = dusk18.slice(0, hill18.start),
    juniper18 = dusk18.slice(elm18.end);
  fern18(
    "formula",
    `${isle18}${`${brook18.name}()`}${juniper18}`,
    hill18.start + brook18.name.length + 1,
  );
  grove18();
}
var slate3 = esmInit(() => {});
function _c(lagoon18, meadow18) {
  if (typeof window > "u" || typeof document > "u") return null;
  let nest18 = document.createElement("div"),
    oak18 = window.getComputedStyle(lagoon18),
    petal18 =
      "boxSizing.width.height.overflowX.overflowY.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.paddingTop.paddingRight.paddingBottom.paddingLeft.fontStyle.fontVariant.fontWeight.fontStretch.fontSize.fontSizeAdjust.lineHeight.fontFamily.textAlign.textTransform.textIndent.textDecoration.letterSpacing.tabSize.wordBreak".split(
        ".",
      );
  nest18.style.position = "absolute";
  nest18.style.visibility = "hidden";
  nest18.style.whiteSpace = "pre-wrap";
  nest18.style.wordWrap = "break-word";
  nest18.style.top = `${lagoon18.scrollTop}px`;
  nest18.style.left = `${lagoon18.scrollLeft}px`;
  let quiet18 = nest18.style,
    rain18 = oak18;
  for (let urn18 of petal18) quiet18[urn18] = rain18[urn18];
  nest18.textContent = lagoon18.value.slice(0, meadow18);
  lagoon18.selectionEnd === lagoon18.value.length &&
    (nest18.textContent += "​");
  document.body.appendChild(nest18);
  let seed18 = document.createElement("span");
  seed18.textContent = lagoon18.value.slice(meadow18) || "​";
  nest18.appendChild(seed18);
  let { offsetTop, offsetLeft, offsetHeight } = seed18;
  document.body.removeChild(nest18);
  let trail18 = lagoon18.getBoundingClientRect();
  return {
    top: trail18.top + offsetTop - lagoon18.scrollTop,
    left: trail18.left + offsetLeft - lagoon18.scrollLeft,
    height: offsetHeight,
  };
}
