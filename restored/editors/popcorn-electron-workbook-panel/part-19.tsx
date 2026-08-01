// Restored from ref/webview/assets/PopcornElectronWorkbookPanel-DronpvSL.js
// Wave FZ — full polished body from `PopcornElectronWorkbookPanel-DronpvSL/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 139/154).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 19/19
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
  popcornSurfaceStyle_st as PopcornSurfaceStyle_st,
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
const $l: any = undefined;
const Falcon4: any = undefined;
const Harbor4: any = undefined;
const Indigo4: any = undefined;
const IntlProvider: any = undefined;
const Marble4: any = undefined;
const Nickel4: any = undefined;
const Onyx4: any = undefined;
const Pearl4: any = undefined;
const Quartz4: any = undefined;
const River4: any = undefined;
const Slate4: any = undefined;
const Timber4: any = undefined;
const Umbra4: any = undefined;
const apex3: any = undefined;
const wave3: any = undefined;
function Violet4(brook23) {
  let cliff23 = brook23.worksheets.add("Shapes");
  cliff23.getRange("A1:H6").values = [
    ["Shape showcase", "Fill", "Line", "Anchor", "Notes", "", "", ""],
    [
      "Rectangle",
      "Solid accent",
      "Dashed",
      "Extent",
      "Simple text box with dashed stroke.",
      "",
      "",
      "",
    ],
    [
      "Moon",
      "Gradient",
      "Solid",
      "Two-cell",
      "Two-cell anchor with gradient fill.",
      "",
      "",
      "",
    ],
    [
      "Hexagon",
      "Solid accent",
      "Solid",
      "Extent",
      "Badge-like label.",
      "",
      "",
      "",
    ],
    [
      "Chevron",
      "Solid",
      "Dashed",
      "Extent",
      "Directional callout.",
      "",
      "",
      "",
    ],
    [
      "Star",
      "Gradient",
      "Solid",
      "Extent",
      "High-contrast review marker.",
      "",
      "",
      "",
    ],
  ];
  cliff23.getRange("A1:E1").format = hazel4;
  cliff23.getRange("E2:E6").format = {
    wrapText: true,
  };
  cliff23.getRange("E2:E6").format.columnWidthPx = 260;
  cliff23.getRange("E2:E6").format.autofitRows();
  let dusk23 = cliff23.shapes.add({
    geometry: "rect",
    anchor: {
      from: {
        row: 1,
        col: 5,
        rowOffsetPx: 8,
        colOffsetPx: 12,
      },
      extent: {
        widthPx: 220,
        heightPx: 120,
      },
    },
    fill: "#DBEAFE",
    line: {
      width: 1.5,
      style: "dashed",
      fill: "#2563EB",
    },
  });
  dusk23.text = "Dashed border";
  dusk23.text.alignment = "center";
  dusk23.text.verticalAlignment = "middle";
  dusk23.text.wrap = "square";
  let elm23 = cliff23.shapes.add({
    geometry: "moon",
    anchor: {
      from: {
        row: 6,
        col: 5,
        rowOffsetPx: 4,
        colOffsetPx: 16,
      },
      to: {
        row: 12,
        col: 8,
        rowOffsetPx: 10,
        colOffsetPx: 26,
      },
    },
    fill: {
      type: "gradient",
      angleDeg: 0,
      stops: [
        {
          offset: 0,
          color: "accent2",
        },
        {
          offset: 1e5,
          color: "accent5",
        },
      ],
    },
    line: {
      width: 1.5,
      style: "solid",
      fill: "accent3",
    },
  });
  elm23.text = "Gradient moon";
  elm23.text.alignment = "center";
  elm23.text.verticalAlignment = "middle";
  elm23.text.wrap = "square";
  let fern23 = cliff23.shapes.add({
    geometry: "hexagon",
    anchor: {
      from: {
        row: 2,
        col: 9,
        rowOffsetPx: 6,
        colOffsetPx: 14,
      },
      extent: {
        widthPx: 180,
        heightPx: 120,
      },
    },
    fill: "accent4",
    line: {
      width: 1.5,
      style: "solid",
      fill: "accent6",
    },
  });
  fern23.text = "Badge";
  fern23.text.color = "#FFFFFF";
  fern23.text.alignment = "center";
  fern23.text.verticalAlignment = "middle";
  let grove23 = cliff23.shapes.add({
    geometry: "chevron",
    anchor: {
      from: {
        row: 7,
        col: 9,
        rowOffsetPx: 4,
        colOffsetPx: 8,
      },
      extent: {
        widthPx: 220,
        heightPx: 90,
      },
    },
    fill: "#FDE68A",
    line: {
      width: 1.5,
      style: "dashed",
      fill: "#D97706",
    },
  });
  grove23.text = "Review flow";
  grove23.text.alignment = "center";
  grove23.text.verticalAlignment = "middle";
  let hill23 = cliff23.shapes.add({
    geometry: "upArrow",
    anchor: {
      from: {
        row: 11,
        col: 9,
        rowOffsetPx: 8,
        colOffsetPx: 18,
      },
      extent: {
        widthPx: 170,
        heightPx: 150,
      },
    },
    fill: "#2563EB",
    line: {
      width: 1.5,
      style: "solid",
      fill: "#1D4ED8",
    },
  });
  hill23.text = "Flip me";
  hill23.text.color = "#FFFFFF";
  hill23.text.alignment = "center";
  hill23.text.verticalAlignment = "middle";
  hill23.text.wrap = "square";
  let isle23 = cliff23.shapes.add({
    geometry: "star5",
    anchor: {
      from: {
        row: 13,
        col: 5,
        rowOffsetPx: 4,
        colOffsetPx: 40,
      },
      extent: {
        widthPx: 150,
        heightPx: 140,
      },
    },
    fill: {
      type: "gradient",
      angleDeg: 90,
      stops: [
        {
          offset: 0,
          color: "accent1",
        },
        {
          offset: 1e5,
          color: "accent5",
        },
      ],
    },
    line: {
      width: 1,
      style: "solid",
      fill: "text1",
    },
  });
  isle23.text = "Marker";
  isle23.text.color = "#FFFFFF";
  isle23.text.alignment = "center";
  isle23.text.verticalAlignment = "middle";
  Harbor4(cliff23.getRange("A1:E6"));
}
function Willow4(juniper23) {
  let lagoon23 = juniper23.worksheets.getItem("Revenue"),
    meadow23 = juniper23.worksheets.getItem("Planning"),
    nest23 = juniper23.worksheets.getItem("Freeze");
  juniper23.comments.setSelf({
    id: "popcorn-demo-reviewer",
    displayName: "Ava Reviewer",
    initials: "AR",
    email: "ava@example.com",
  });
  juniper23.comments
    .addThread(
      {
        cell: lagoon23.getRange("F4"),
      },
      "Please confirm the Q3 total before export. The regional numbers changed in yesterday's source refresh.",
      {
        createdAt: "2026-04-18T09:15:00.000Z",
      },
    )
    .addReply("Confirmed. The total now matches the pipeline snapshot.", {
      author: {
        id: "popcorn-demo-owner",
        displayName: "Noah Owner",
        initials: "NO",
        email: "noah@example.com",
      },
      createdAt: "2026-04-18T10:02:00.000Z",
    });
  let oak23 = juniper23.comments.addThread(
    {
      range: meadow23.getRange("B4:D6"),
    },
    "These dates still assume the old launch sequence. We should update the dependency notes before sharing.",
    {
      author: {
        id: "popcorn-demo-pm",
        displayName: "Mia PM",
        initials: "MP",
        email: "mia@example.com",
      },
      createdAt: "2026-04-17T14:30:00.000Z",
    },
  );
  oak23.addReply(
    "Tracked. I will revise the milestone owners after legal signs off.",
    {
      createdAt: "2026-04-17T16:05:00.000Z",
    },
  );
  oak23.resolve(
    {
      id: "popcorn-demo-pm",
      displayName: "Mia PM",
      initials: "MP",
      email: "mia@example.com",
    },
    "2026-04-17T18:20:00.000Z",
  );
  juniper23.comments.addThread(
    {
      cell: nest23.getRange("C12"),
    },
    "This frozen-pane example is handy for manual viewport checks. Keep it in the fixture.",
    {
      author: {
        id: "popcorn-demo-qa",
        displayName: "Eli QA",
        initials: "EQ",
      },
      createdAt: "2026-04-16T11:45:00.000Z",
    },
  );
}
function Xenon4() {
  let petal23 = _workbookT.create();
  return (
    Indigo4(petal23),
    Pearl4(petal23),
    Quartz4(petal23),
    Marble4(petal23),
    Nickel4(petal23),
    Onyx4(petal23),
    River4(petal23),
    Slate4(petal23),
    Timber4(petal23),
    Umbra4(petal23),
    Violet4(petal23),
    Willow4(petal23),
    petal23.worksheets.setActiveWorksheet("Revenue"),
    petal23.recalculate(),
    petal23
  );
}
var _u,
  yellow4,
  zinc4,
  amber4,
  basalt4,
  cedar4,
  daisy4,
  ember4,
  flint4,
  garnet4,
  hazel4,
  ivory4,
  jasper4,
  kelp4,
  lotus4,
  mint4 = esmInit(() => {
    workbookB();
    RemoteTextEditSessionC();
    ensureFeatureCatalogInit();
    _u = 1500;
    yellow4 = 182;
    zinc4 = Date.UTC(2025, 9, 1);
    amber4 = 86400000;
    basalt4 = ["North", "South", "West", "East"];
    cedar4 = ["Ava", "Noah", "Mia", "Liam", "Ivy", "Eli"];
    daisy4 = ["Core", "Plus", "AI", "Ops"];
    ember4 = ["Q1", "Q2", "Q3", "Q4"];
    flint4 = ["Backlog", "In progress", "Blocked", "Done"];
    garnet4 = {
      font: {
        bold: true,
      },
      fill: "#E5E7EB",
    };
    hazel4 = {
      font: {
        bold: true,
      },
      fill: "#DBEAFE",
    };
    ivory4 = {
      minColor: "#FECACA",
      midColor: "#FDE68A",
      maxColor: "#86EFAC",
    };
    jasper4 = {
      minColor: "#DBEAFE",
      midColor: "#93C5FD",
      maxColor: "#1D4ED8",
    };
    kelp4 = {
      allowBlank: true,
      list: {
        inCellDropDown: true,
        source: [...flint4],
      },
      showInputMessage: true,
      promptTitle: "Status",
      prompt: "Pick one of the supported statuses.",
    };
    lotus4 = ["Artifact", "Area", "Feature", "Summary"];
  });
function Nova4(quiet23) {
  return quiet23 == null ? Xenon4() : _workbookT.load(quiet23);
}
export type PopcornElectronWorkbookPanelIconProps = {
  className?: string;
  externalCrdtUpdates?: unknown;
  headerTitleContent?: unknown;
  headerRightContent?: unknown;
  renderHeaderZoomControl?: unknown;
  initialCrdtState?: unknown;
  initialSelectedAddress?: unknown;
  initialWorkbookProto?: unknown;
  initialZoom?: number;
  onCrdtUpdate?: (...args: unknown[]) => unknown;
  title?: string;
  theme?: string;
  isEditing?: boolean;
  navigationCommand?: unknown;
  reviewTools?: unknown;
  bottomScrollReservePx?: number;
  annotationsEnabled?: boolean;
  drawingAnnotationsEnabled?: boolean;
  artifactSearchEnabled?: boolean;
  commentThreadsEnabled?: boolean;
  workerFactory?: unknown;
};
export function PopcornElectronWorkbookPanelIcon({
  className,
  externalCrdtUpdates,
  headerTitleContent,
  headerRightContent,
  renderHeaderZoomControl,
  initialCrdtState,
  initialSelectedAddress,
  initialWorkbookProto,
  initialZoom,
  onCrdtUpdate,
  title = "codex-popcorn-demo.xlsx",
  theme = "codex",
  isEditing = false,
  navigationCommand,
  reviewTools,
  bottomScrollReservePx,
  annotationsEnabled = false,
  drawingAnnotationsEnabled: rain23 = false,
  artifactSearchEnabled = false,
  commentThreadsEnabled = false,
  workerFactory,
}: PopcornElectronWorkbookPanelIconProps) {
  let seed23 = popcornSurfaceStyle_A({
      initialCrdtState,
      externalCrdtUpdates,
    }),
    trail23 = RemoteTextEditSessionW(
      undefined,
      () =>
        new wave3({
          initialCrdtState: seed23.initialCrdtState,
          initialSelectedAddress,
          initialZoom,
          workerFactory,
          workbook: Nova4(initialWorkbookProto),
        }),
    ),
    urn23 = popcornSurfaceStyle_O({
      artifactLabel: "Spreadsheet",
      controller: trail23,
      externalCrdtUpdates: seed23.externalCrdtUpdates,
      onCrdtUpdate,
    }),
    vine23 = prism4.useRef(null);
  return (
    prism4.useEffect(() => {
      if (!trail23 || navigationCommand == null) return;
      let wind23,
        yarrow23 = true,
        azure23 = () => {
          wind23?.();
          wind23 = undefined;
        },
        birch23 = (alpha24) => {
          if (yarrow23) {
            if (alpha24) {
              azure23();
              return;
            }
            wind23 ??= trail23.subscribe(Dew23);
          }
        },
        canyon23 = () => {
          if (navigationCommand.requestId === vine23.current) return true;
          let bravo24 = trail23.getState().navigation;
          return bravo24.sheetNames.includes(navigationCommand.sheet)
            ? bravo24.activeSheetName === navigationCommand.sheet
              ? "range" in navigationCommand
                ? (Olive4({
                    controller: trail23,
                    range: navigationCommand.range,
                    sheetName: navigationCommand.sheet,
                  }),
                  (vine23.current = navigationCommand.requestId),
                  true)
                : trail23
                    .requestNavigationTarget(
                      navigationCommand.sheet,
                      navigationCommand.objectId,
                      navigationCommand.objectKind,
                    )
                    .then((value) => {
                      if (!yarrow23) return true;
                      if (value?.kind === "range")
                        Olive4({
                          controller: trail23,
                          range: value.ref,
                          sheetName: navigationCommand.sheet,
                        });
                      else if (value?.kind === "floating") {
                        let copper24 = {
                          id: value.id,
                          kind: value.floatingKind,
                          logicalBounds: {
                            ...value.logicalBounds,
                          },
                          ...(value.rotation == null
                            ? {}
                            : {
                                rotation: value.rotation,
                              }),
                          interactionState: "selected",
                        };
                        trail23.setSelectedFloatingElement(copper24, {
                          sheetName: navigationCommand.sheet,
                        });
                        trail23.revealFloatingElementBounds(
                          copper24.logicalBounds,
                        );
                      }
                      return (
                        (vine23.current = navigationCommand.requestId),
                        true
                      );
                    })
              : ((wind23 ??= trail23.subscribe(Dew23)),
                trail23.setActiveSheetName(navigationCommand.sheet),
                false)
            : false;
        };
      function Dew23() {
        let delta24 = canyon23();
        if (typeof delta24 == "boolean") {
          birch23(delta24);
          return;
        }
        delta24.then(birch23);
      }
      return (
        Dew23(),
        () => {
          yarrow23 = false;
          azure23();
        }
      );
    }, [trail23, navigationCommand]),
    trail23 ? (
      <section
        className={IntlProvider(
          "no-drag relative h-full min-h-0 bg-token-bg-primary",
          className,
        )}
        style={popcornSurfaceStyle__t(theme)}
        data-codex-popcorn-editor={true}
        data-testid="popcorn-electron-workbook-panel"
      >
        {
          <Falcon4
            {...{
              className: "h-full min-h-0",
              controller: trail23,
              headerTitleContent,
              headerRightContent,
              renderHeaderZoomControl,
              title,
              theme,
              isEditing,
              reviewTools,
              bottomScrollReservePx,
              annotationHeaderButtonEnabled: false,
              annotationsEnabled,
              drawingAnnotationsEnabled: rain23,
              artifactSearchEnabled,
              commentThreadsEnabled,
            }}
          />
        }
        {
          <PopcornSurfaceStyle_st
            {...{
              artifactLabel: "Spreadsheet",
              restoreState: urn23,
            }}
          />
        }
      </section>
    ) : null
  );
}
function Olive4({ controller, range, sheetName }) {
  let echo24 = parseA1Range(range);
  echo24 &&
    (controller.setActiveSheetName(sheetName),
    controller.setSelectedAddress(
      formatA1(echo24.bounds.startRow, echo24.bounds.startCol),
    ),
    controller.setSelectionRect({
      r1: echo24.bounds.startRow,
      c1: echo24.bounds.startCol,
      r2: echo24.bounds.endRow,
      c2: echo24.bounds.endCol,
    }));
}
var prism4, quill4;
esmInit(() => {
  initAddressUtils();
  workbookB();
  ensureComposerEsm_Tft_Init();
  prism4 = commonJsInit(react());
  $l();
  RemoteTextEditSessionC();
  mint4();
  apex3();
  popcornSurfaceStyle_it();
  popcornSurfaceStyle_N();
})();
