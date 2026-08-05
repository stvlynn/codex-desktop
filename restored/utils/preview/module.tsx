// Restored from ref/webview/assets/notebook-preview-panel-DwlTki9M.js
// Wave FY — full polished body from `notebook-preview-panel-DwlTki9M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 8 (verified 27/35).
// Wave FZ-support — PascalCase invalid JSX tags: areVisualizationFeatureGatesEnabled→AreVisualizationFeatureGatesEnabled, isIndeterminate→IsIndeterminate, isLocalOrNullValue→IsLocalOrNullValue, renamedId→NotebookPreviewPanelHelper13, renamedId→NotebookPreviewPanelHelper14, renamedId→NotebookPreviewPanelHelper15, renamedId→NotebookPreviewPanelHelper16, renamedId→NotebookPreviewPanelHelper17, renamedId→NotebookPreviewPanelHelper18, renamedId→NotebookPreviewPanelHelper19, renamedId→NotebookPreviewPanelHelper20, renamedId→NotebookPreviewPanelHelper21.
// AST split 1/1
/* split-lane-import-depth:1 */

import { ensureAccountPlanQueryInit } from "../../account/ensure-account-plan-query-init";
import {
  siteAnalyticsEventsPath,
  siteAnalyticsPath,
} from "../../appgen/site-analytics-paths";
import { clampZoomPercent } from "../../artifact/clamp-zoom-percent";
import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Ist_Init } from "../../conversation/conversation-page-esm-inits";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { chatgptProjectQueryKey } from "../../conversation/chatgpt-conversation-query-keys";
import { AreVisualizationFeatureGatesEnabled } from "../../feature-gates/are-visualization-feature-gates-enabled";
import { useEventCallback } from "../../hooks/use-event-callback";
import { IsLocalOrNullValue } from "../../hosts/is-local-or-null-value";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconMH } from "../../icons/app-icon-mh";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { markdownToPlainText } from "../../markdown/markdown-to-plain-text";
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ArtifactPreviewStatus,
  ensureArtifactPreviewStatusInit,
} from "../../ui/artifact-preview-status";
import { remote } from "../../ui/remote";
import { coalesceTruthy } from "../coalesce-truthy";
import { IsIndeterminate } from "../is-indeterminate";

const NotebookPreviewOpenActions: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/deferred-navigation-ft.ts) */
const deferredNavigationFT: any = undefined;
/** Wave FY unresolved companion (jsx-collision:sidebarProjectMessages@chatgpt/sidebar-project-messages.ts) */
const AppInitialJa: any = undefined;
/** Wave FY unresolved companion (jsx-collision:renameProjectMessages@sidebar/rename-project-messages.ts) */
const AppInitialMa: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_NH_Init@composer/composer-esm-inits.ts) */
const AppInitialNH: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-wr-2.ts) */
const deferredUiWR: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-xt.ts) */
const deferredUiXT: any = undefined;
function alpha(flint) {
  let garnet = slate.safeParse(flint);
  if (!garnet.success)
    throw Error("Notebook must be a JSON object with a cells array");
  return {
    cells: garnet.data.cells.map(bravo),
    title: gamma(garnet.data.metadata, "title"),
  };
}
function bravo(hazel) {
  let ivory = falcon(hazel.source),
    jasper = hazel.id ?? null,
    kelp = harbor(hazel.metadata, marble);
  switch (hazel.cell_type) {
    case "code":
      return {
        cellType: "code",
        descriptionMarkdown: harbor(hazel.metadata, nickel),
        executionCount: hazel.execution_count ?? null,
        id: jasper,
        outputs: (hazel.outputs ?? []).flatMap((item, index) =>
          copper(item, index, indigo(hazel.metadata, index)),
        ),
        source: ivory,
        title: kelp,
      };
    case "markdown":
      return {
        cellType: "markdown",
        id: jasper,
        source: ivory,
        title: kelp,
      };
    case "raw":
      return {
        cellType: "raw",
        id: jasper,
        source: ivory,
        title: kelp,
      };
    default:
      return {
        cellType: "raw",
        id: jasper,
        source: ivory,
        title: kelp,
      };
  }
}
function copper(lotus, mint, nova) {
  switch (lotus.output_type) {
    case "stream": {
      let olive = kite(lotus.text);
      return olive == null
        ? []
        : [
            {
              name: gamma(lotus, "name") ?? "stdout",
              summaryMarkdown: nova,
              text: olive,
              type: "stream",
            },
          ];
    }
    case "error":
      return [
        {
          ename: gamma(lotus, "ename") ?? "Error",
          evalue: gamma(lotus, "evalue") ?? "",
          summaryMarkdown: nova,
          traceback: kite(lotus.traceback) ?? "",
          type: "error",
        },
      ];
    case "display_data":
    case "execute_result":
      return delta(lotus.data, mint, nova);
    default:
      return [];
  }
}
function delta(prism, quill, reef) {
  let sage = onyx.safeParse(prism);
  if (!sage.success) return [];
  let topaz = echo(sage.data, quill);
  if (topaz != null) return [topaz];
  let ultra = kite(sage.data["text/html"]);
  if (ultra != null && ultra.trim().length > 0)
    return [
      {
        html: ultra,
        type: "html",
      },
    ];
  let vapor = kite(sage.data["text/markdown"]);
  if (vapor != null && vapor.trim().length > 0)
    return [
      {
        markdown: vapor,
        type: "markdown",
      },
    ];
  let wheat = kite(sage.data["text/plain"]);
  if (wheat != null)
    return [
      {
        summaryMarkdown: reef,
        text: wheat,
        type: "text",
      },
    ];
  let yarn =
    sage.data["application/json"] ?? sage.data["application/vnd.vega.v5+json"];
  return yarn == null
    ? []
    : [
        {
          summaryMarkdown: reef,
          text: JSON.stringify(yarn, null, 2),
          type: "json",
        },
      ];
}
function echo(zephyr, acorn) {
  let bloom = kite(zephyr["image/png"]);
  if (bloom != null)
    return {
      dataUrl: `data:image/png;base64,${bloom.replaceAll(/\s/g, "")}`,
      outputNumber: acorn + 1,
      type: "image",
    };
  let coral = kite(zephyr["image/jpeg"]);
  if (coral != null)
    return {
      dataUrl: `data:image/jpeg;base64,${coral.replaceAll(/\s/g, "")}`,
      outputNumber: acorn + 1,
      type: "image",
    };
  let drift = kite(zephyr["image/svg+xml"]);
  return drift == null
    ? null
    : {
        dataUrl: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(drift)}`,
        outputNumber: acorn + 1,
        type: "image",
      };
}
function falcon(eagle) {
  return kite(eagle) ?? "";
}
function gamma(frost, glide) {
  let honey = frost?.[glide];
  return typeof honey == "string" ? honey : null;
}
function harbor(iris, jewel) {
  for (let knoll of jade(iris))
    for (let lunar of jewel) {
      let moss = kite(knoll[lunar]);
      if (moss != null && moss.trim().length > 0) return moss;
    }
  return null;
}
function indigo(north, orbit) {
  for (let pine of jade(north)) {
    let quest = pine.outputSummaries;
    if (!Array.isArray(quest)) continue;
    let ridge = onyx.safeParse(quest[orbit]);
    if (!ridge.success) continue;
    let storm = kite(ridge.data.summaryMarkdown);
    if (storm != null && storm.trim().length > 0) return storm;
  }
  return null;
}
function jade(tide) {
  return tide == null
    ? []
    : [
        ...lemon.flatMap((item) => {
          let unity = onyx.safeParse(tide[item]);
          return unity.success ? [unity.data] : [];
        }),
        tide,
      ];
}
function kite(vale) {
  return typeof vale == "string"
    ? vale
    : Array.isArray(vale) && vale.every((item) => typeof item == "string")
      ? vale.join("")
      : null;
}
var lemon,
  marble,
  nickel,
  onyx,
  pearl,
  quartz,
  river,
  slate,
  timber = esmInit(() => {
    coalesceTruthy();
    lemon = ["codex", "codexNotebook", "codex_notebook", "codex-app"];
    marble = ["title", "cellTitle", "cell_title"];
    nickel = [
      "codeDescriptionMarkdown",
      "code_description_markdown",
      "descriptionMarkdown",
      "description_markdown",
      "description",
    ];
    onyx = ensureAccountPlanQueryInit(coalesceTruthy(), siteAnalyticsPath());
    pearl = siteAnalyticsEventsPath([
      coalesceTruthy(),
      deferredNavigationFT(coalesceTruthy()),
    ]).optional();
    quartz = onyx;
    river = deferredUiXT({
      cell_type: coalesceTruthy(),
      execution_count: remote().int().nullable().optional(),
      id: coalesceTruthy().optional(),
      metadata: onyx.optional(),
      outputs: deferredNavigationFT(quartz).optional(),
      source: pearl,
    }).passthrough();
    slate = deferredUiXT({
      cells: deferredNavigationFT(river),
      metadata: onyx.optional(),
    }).passthrough();
  });
function umbra(wave) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="${violet}"><meta name="color-scheme" content="light dark"><base target="_blank"><style>html,body{margin:0;background:transparent;color:CanvasText;font:13px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}body{padding:12px;}img,svg,canvas,video{max-width:100%;height:auto;}table{border-collapse:collapse;}th,td{border:1px solid color-mix(in srgb, CanvasText 18%, transparent);padding:4px 6px;}</style></head><body>${wave}</body></html>`;
}
var violet,
  willow = esmInit(() => {
    violet = [
      "default-src 'none'",
      "base-uri 'none'",
      "connect-src 'none'",
      "font-src data:",
      "form-action 'none'",
      "frame-src 'none'",
      "img-src data: blob:",
      "media-src data: blob:",
      "object-src 'none'",
      "script-src 'none'",
      "style-src 'unsafe-inline'",
    ].join("; ");
  });
export function NotebookPreviewPanel(joint: unknown) {
  let { contentsBase64, headerRightContent, hostId, path, title } = joint,
    keystone = useIntl(),
    latch = xenon(contentsBase64);
  let motor = latch,
    nut =
      motor.status === "ready"
        ? (motor.document.title ?? daisy(title))
        : daisy(title);
  let piston = nut,
    rivet =
      motor.status === "ready"
        ? keystone.formatMessage(
            {
              id: "notebookPreview.cellCount",
              defaultMessage:
                "{cellCount, plural, one {# cell} other {# cells}}",
              description:
                "Cell count shown in the notebook artifact preview header",
            },
            {
              cellCount: motor.document.cells.length,
            },
          )
        : null;
  let screw = rivet,
    torque = screw == null ? "IPYNB" : `IPYNB · ${screw}`,
    valve =
      motor.status === "ready" ? (
        <>
          {<NotebookPreviewPanelHelper13 {...{}} />}
          {
            <NotebookPreviewPanelHelper14
              {...{
                label: keystone.formatMessage({
                  id: "notebookPreview.runAllDisabledTooltip",
                  defaultMessage: "Running is not available in this preview",
                  description:
                    "Tooltip for a disabled run-all control in the read-only notebook preview",
                }),
                children: [
                  <AppInitialJa className="icon-2xs" />,
                  <span className="hidden md:inline">
                    {
                      <MemoizedFormattedMessage
                        {...{
                          id: "notebookPreview.runAllDisabled",
                          defaultMessage: "Run all",
                          description:
                            "Disabled run-all control in the read-only notebook preview",
                        }}
                      />
                    }
                  </span>,
                ],
              }}
            />
          }
          {
            <NotebookPreviewPanelHelper14
              {...{
                label: keystone.formatMessage({
                  id: "notebookPreview.restartKernelDisabledTooltip",
                  defaultMessage: "Kernels are not connected in this preview",
                  description:
                    "Tooltip for a disabled restart-kernel control in the read-only notebook preview",
                }),
                children: [
                  <AppIconAlt
                    {...{
                      className: "icon-2xs",
                    }}
                  />,
                  <span className="hidden lg:inline">
                    {
                      <MemoizedFormattedMessage
                        {...{
                          id: "notebookPreview.restartKernelDisabled",
                          defaultMessage: "Restart kernel",
                          description:
                            "Disabled restart-kernel control in the read-only notebook preview",
                        }}
                      />
                    }
                  </span>,
                ],
              }}
            />
          }
        </>
      ) : null;
  let axle = (
    <NotebookPreviewOpenActions
      {...{
        hostId,
        path,
      }}
    />
  );
  let bracket = (
    <div className="flex min-w-0 flex-wrap items-center justify-end gap-1 overflow-hidden">
      {valve}
      {axle}
      {headerRightContent}
    </div>
  );
  let clamp = (
    <IsLocalOrNullValue
      {...{
        artifactType: torque,
        centerContent: null,
        rightContent: bracket,
        title: piston,
      }}
    />
  );
  let drill =
    motor.status === "ready" ? (
      <NotebookPreviewPanelHelper15
        {...{
          document: motor.document,
        }}
      />
    ) : (
      <div className="flex min-h-0 flex-1 items-center justify-center">
        {ArtifactPreviewStatus("error")}
      </div>
    );
  return (
    <section className="flex h-full min-h-0 flex-col bg-token-side-bar-background">
      {clamp}
      {drill}
    </section>
  );
}
function NotebookPreviewPanelHelper13() {
  return (
    <span className="bg-token-main-surface-secondary/30 inline-flex h-7 shrink-0 items-center rounded-full border border-token-border-light px-2 text-xs font-medium text-token-text-tertiary">
      {
        <MemoizedFormattedMessage
          {...{
            id: "notebookPreview.readOnlyBadge",
            defaultMessage: "Read only",
            description:
              "Badge shown in the read-only notebook artifact preview",
          }}
        />
      }
    </span>
  );
}
function NotebookPreviewPanelHelper14(apex) {
  let { children, label } = apex;
  return (
    <button
      aria-disabled={true}
      className="inline-flex h-7 shrink-0 cursor-default items-center gap-1 rounded-md px-2 text-xs font-medium text-token-text-tertiary/70"
      disabled={true}
      title={label}
      type="button"
    >
      {children}
    </button>
  );
}
function NotebookPreviewPanelHelper15(brook) {
  let { document } = brook;
  if (document.cells.length === 0) {
    let dusk;
    return (
      <div className="flex min-h-0 flex-1 items-center justify-center px-6 text-center text-sm text-token-text-tertiary">
        {
          <MemoizedFormattedMessage
            {...{
              id: "notebookPreview.empty",
              defaultMessage: "This notebook does not contain any cells",
              description: "Empty state shown for a notebook without cells",
            }}
          />
        }
      </div>
    );
  }
  let cliff;
  {
    let elm;
    elm = (fern, grove) => (
      <_e
        key={fern.id ?? grove}
        {...{
          cell: fern,
          cellNumber: grove + 1,
          totalCellCount: document.cells.length,
        }}
      />
    );
    cliff = document.cells.map(elm);
  }
  return (
    <div className="min-h-0 flex-1 overflow-auto bg-token-side-bar-background px-4 py-4 sm:px-6 sm:py-5">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">{cliff}</div>
    </div>
  );
}
function _e(hill) {
  let { cell, cellNumber, totalCellCount } = hill,
    isle = (
      <summary className="flex cursor-interaction list-none items-center justify-between gap-3 border-b border-token-border-light px-4 py-2 [&::-webkit-details-marker]:hidden">
        {
          <NotebookPreviewPanelHelper16
            {...{
              cell,
              cellNumber,
              totalCellCount,
            }}
          />
        }
      </summary>
    );
  let juniper = (
    <NotebookPreviewPanelHelper17
      {...{
        cell,
      }}
    />
  );
  return (
    <details
      className="group/notebook-cell overflow-hidden rounded-lg border border-token-border-light bg-token-main-surface-primary"
      open={true}
    >
      {isle}
      {juniper}
    </details>
  );
}
function NotebookPreviewPanelHelper16(lagoon) {
  let { cell, cellNumber, totalCellCount } = lagoon,
    meadow = useIntl(),
    nest = amber(meadow, cell, cellNumber);
  let oak = nest,
    petal = (
      <AppIconSft
        {...{
          className:
            "icon-2xs shrink-0 -rotate-90 text-token-text-tertiary transition-transform duration-relaxed group-open/notebook-cell:rotate-0",
        }}
      />
    );
  let quiet = (
    <div
      className="min-w-0 truncate text-sm font-medium text-token-text-primary"
      title={oak}
    >
      {oak}
    </div>
  );
  let rain = (
    <span className="shrink-0 text-xs text-token-text-tertiary">
      {
        <MemoizedFormattedMessage
          {...{
            id: "notebookPreview.cellPosition",
            defaultMessage: "Cell {cellNumber} of {totalCellCount}",
            description: "Position label for a rendered notebook cell",
            values: {
              cellNumber,
              totalCellCount,
            },
          }}
        />
      }
    </span>
  );
  let seed = (
    <div className="flex min-w-0 items-center gap-2">
      {petal}
      {quiet}
      {rain}
    </div>
  );
  let trail =
    cell.cellType === "code" && cell.executionCount != null ? (
      <span className="tabular-nums">
        {
          <MemoizedFormattedMessage
            {...{
              id: "notebookPreview.executionCount",
              defaultMessage: "Run {executionCount}",
              description:
                "Execution count label for a rendered notebook code cell",
              values: {
                executionCount: cell.executionCount,
              },
            }}
          />
        }
      </span>
    ) : null;
  let urn =
    cell.cellType === "code" ? (
      <span
        aria-hidden={true}
        className="pointer-events-none inline-flex opacity-0 transition-opacity duration-basic group-focus-within/notebook-cell:opacity-60 group-hover/notebook-cell:opacity-60"
        title={meadow.formatMessage({
          id: "notebookPreview.runCellDisabledTooltip",
          defaultMessage: "Running is disabled in read-only preview",
          description:
            "Tooltip for a disabled per-cell run affordance in the read-only notebook preview",
        })}
      >
        <AppInitialJa className="icon-2xs" />
      </span>
    ) : null;
  let vine = (
    <div className="flex shrink-0 items-center gap-2 text-xs font-medium text-token-text-tertiary">
      {trail}
      {urn}
    </div>
  );
  return (
    <>
      {seed}
      {vine}
    </>
  );
}
function NotebookPreviewPanelHelper17(wind) {
  let { cell } = wind;
  if (cell.cellType === "markdown") {
    let yarrow;
    return (
      <div className="px-4 py-3">
        {cell.source.trim().length === 0 ? (
          <NotebookPreviewPanelHelper19
            {...{
              children: (
                <MemoizedFormattedMessage
                  {...{
                    id: "notebookPreview.emptyMarkdownCell",
                    defaultMessage: "Empty Markdown cell",
                    description:
                      "Empty state shown for a Markdown notebook cell without source",
                  }}
                />
              ),
            }}
          />
        ) : (
          <AreVisualizationFeatureGatesEnabled
            {...{
              allowBasicHtml: true,
              className: "text-size-chat",
              children: cell.source,
            }}
          />
        )}
      </div>
    );
  }
  if (cell.cellType === "raw") {
    let azure;
    return (
      <div className="px-4 py-3">
        {cell.source.trim().length === 0 ? (
          <NotebookPreviewPanelHelper19
            {...{
              children: (
                <MemoizedFormattedMessage
                  {...{
                    id: "notebookPreview.emptyRawCell",
                    defaultMessage: "Empty raw cell",
                    description:
                      "Empty state shown for a raw notebook cell without source",
                  }}
                />
              ),
            }}
          />
        ) : (
          <IsIndeterminate
            {...{
              content: cell.source,
              language: "text",
              shouldWrapCode: true,
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "notebookPreview.rawCodeTitle",
                    defaultMessage: "Raw",
                    description: "Code snippet title for a raw notebook cell",
                  }}
                />
              ),
              wrapperClassName: "shadow-none",
            }}
          />
        )}
      </div>
    );
  }
  if (cell.cellType === "code") {
    let birch = cell.descriptionMarkdown?.trim() ?? "";
    let canyon = birch,
      dew = cell.source.trim();
    let ever = dew.length > 0,
      field =
        canyon.length > 0 ? (
          <AreVisualizationFeatureGatesEnabled
            {...{
              allowBasicHtml: true,
              className: "text-size-chat",
              children: canyon,
            }}
          />
        ) : null;
    let grain = ever ? (
      canyon.length > 0 ? (
        <NotebookPreviewPanelHelper18
          {...{
            code: cell.source,
          }}
        />
      ) : (
        <IsIndeterminate
          {...{
            content: cell.source,
            language: "python",
            shouldWrapCode: true,
            title: (
              <MemoizedFormattedMessage
                {...{
                  id: "notebookPreview.pythonCodeTitle",
                  defaultMessage: "Python",
                  description: "Code snippet title for a Python notebook cell",
                }}
              />
            ),
            wrapperClassName: "shadow-none",
          }}
        />
      )
    ) : (
      <NotebookPreviewPanelHelper19
        {...{
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "notebookPreview.emptyCodeCell",
                defaultMessage: "Empty code cell",
                description:
                  "Empty state shown for a code notebook cell without source",
              }}
            />
          ),
        }}
      />
    );
    let haven = (
      <div className="px-4 py-3">
        {field}
        {grain}
      </div>
    );
    let ink =
      cell.outputs.length > 0 ? (
        <div className="bg-token-main-surface-secondary/15 border-t border-token-border-light px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="flex flex-col gap-3">{cell.outputs.map(be)}</div>
        </div>
      ) : null;
    let jadeite;
    return (
      <>
        {haven}
        {ink}
      </>
    );
  }
  return (
    <div className="px-4 py-3">
      {
        <NotebookPreviewPanelHelper19
          {...{
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "notebookPreview.emptyUnknownCell",
                  defaultMessage: "Empty notebook cell",
                  description:
                    "Empty state shown for an unknown notebook cell without source",
                }}
              />
            ),
          }}
        />
      }
    </div>
  );
}
function be(kernel, leaf) {
  return (
    <NotebookPreviewPanelHelper20
      key={leaf}
      {...{
        output: kernel,
      }}
    />
  );
}
function NotebookPreviewPanelHelper18(maple) {
  let { code } = maple,
    nimbus = (
      <summary className="flex cursor-interaction list-none items-center gap-2 rounded-md py-1 text-left text-xs font-medium text-token-text-tertiary transition-colors hover:text-token-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-token-text-tertiary [&::-webkit-details-marker]:hidden">
        {
          <AppIconSft
            {...{
              className:
                "icon-2xs shrink-0 -rotate-90 transition-transform duration-relaxed group-open/code:rotate-0",
            }}
          />
        }
        {
          <AppIconMH
            {...{
              className: "icon-2xs shrink-0",
            }}
          />
        }
        <span>
          {
            <MemoizedFormattedMessage
              {...{
                id: "notebookPreview.codeDisclosure",
                defaultMessage: "Code",
                description: "Disclosure label for notebook cell source code",
              }}
            />
          }
        </span>
      </summary>
    );
  let opal = (
    <MemoizedFormattedMessage
      {...{
        id: "notebookPreview.pythonCodeTitle",
        defaultMessage: "Python",
        description: "Code snippet title for a Python notebook cell",
      }}
    />
  );
  return (
    <details className="group/code mt-3 border-t border-token-border-light pt-2">
      {nimbus}
      <div className="mt-2">
        {
          <IsIndeterminate
            {...{
              content: code,
              language: "python",
              shouldWrapCode: true,
              title: opal,
              wrapperClassName: "shadow-none",
            }}
          />
        }
      </div>
    </details>
  );
}
function NotebookPreviewPanelHelper19(plume) {
  let { children } = plume;
  return (
    <div className="rounded-md border border-token-border-light px-3 py-2 text-sm text-token-text-tertiary">
      {children}
    </div>
  );
}
function NotebookPreviewPanelHelper20(quillow) {
  let { output } = quillow,
    root = useIntl();
  switch (output.type) {
    case "image": {
      let silk = root.formatMessage(
        {
          id: "notebookPreview.imageOutputAlt",
          defaultMessage: "Notebook output {outputNumber}",
          description:
            "Alt text for an image output rendered in a notebook artifact preview",
        },
        {
          outputNumber: output.outputNumber,
        },
      );
      let thorn;
      return (
        <div className="overflow-auto rounded-md bg-token-main-surface-primary/40 p-2">
          <img
            alt={silk}
            className="max-h-[640px] max-w-full"
            src={output.dataUrl}
          />
        </div>
      );
    }
    case "html": {
      let upland = umbra(output.html);
      let vista = root.formatMessage({
        id: "notebookPreview.htmlOutputTitle",
        defaultMessage: "Notebook HTML output",
        description: "Title for a sandboxed notebook HTML output frame",
      });
      let wisp = (
        <iframe
          className="h-72 w-full rounded-md bg-token-main-surface-primary"
          sandbox=""
          srcDoc={upland}
          title={vista}
        />
      );
      let yonder = (
        <NotebookPreviewPanelHelper22
          {...{
            className: "mt-2",
            children: output.html,
          }}
        />
      );
      let zenith;
      return (
        <div>
          {wisp}
          {yonder}
        </div>
      );
    }
    case "markdown": {
      let anvil;
      return (
        <div className="rounded-md bg-token-main-surface-primary/40 px-3 py-2">
          {
            <AreVisualizationFeatureGatesEnabled
              {...{
                allowBasicHtml: true,
                className: "text-size-chat",
                children: output.markdown,
              }}
            />
          }
        </div>
      );
    }
    case "json": {
      let beacon;
      return (
        <NotebookPreviewPanelHelper21
          {...{
            language: "json",
            rawText: output.text,
            summaryMarkdown: output.summaryMarkdown,
          }}
        />
      );
    }
    case "error": {
      let crag =
        output.summaryMarkdown == null ? (
          <div className="text-sm font-medium text-token-charts-red">
            {output.evalue.length > 0 ? (
              <MemoizedFormattedMessage
                {...{
                  id: "notebookPreview.errorOutput",
                  defaultMessage: "{name}: {message}",
                  description:
                    "Notebook error output label with error name and message",
                  values: {
                    message: output.evalue,
                    name: output.ename,
                  },
                }}
              />
            ) : (
              output.ename
            )}
          </div>
        ) : (
          <AreVisualizationFeatureGatesEnabled
            {...{
              allowBasicHtml: true,
              className: "text-size-chat",
              children: output.summaryMarkdown,
            }}
          />
        );
      let dome =
        zinc(output).trim().length > 0 ? (
          <NotebookPreviewPanelHelper22
            {...{
              className: "mt-2",
              children: zinc(output),
            }}
          />
        ) : null;
      let eddy;
      return (
        <div className="rounded-md border border-token-charts-red/30 bg-token-charts-red/5 p-3">
          {crag}
          {dome}
        </div>
      );
    }
    case "stream":
    case "text": {
      let fjord;
      return (
        <NotebookPreviewPanelHelper21
          {...{
            rawText: output.text,
            summaryMarkdown: output.summaryMarkdown,
          }}
        />
      );
    }
  }
}
function NotebookPreviewPanelHelper21(glen) {
  let { language, rawText, summaryMarkdown } = glen;
  if (summaryMarkdown != null) {
    let hearth = (
      <AreVisualizationFeatureGatesEnabled
        {...{
          allowBasicHtml: true,
          className: "text-size-chat",
          children: summaryMarkdown,
        }}
      />
    );
    let inlet = (
      <NotebookPreviewPanelHelper22
        {...{
          className: "mt-2",
          children: rawText,
        }}
      />
    );
    let jetty;
    return (
      <div className="rounded-md bg-token-main-surface-primary/40 p-3">
        {hearth}
        {inlet}
      </div>
    );
  }
  if (language != null) {
    let knob;
    return (
      <IsIndeterminate
        {...{
          content: rawText,
          language,
          shouldWrapCode: true,
          showActionBar: false,
          wrapperClassName: "shadow-none",
        }}
      />
    );
  }
  return (
    <NotebookPreviewPanelHelper23
      {...{
        children: rawText,
      }}
    />
  );
}
function NotebookPreviewPanelHelper22(ledge) {
  let { children, className } = ledge,
    mire = (
      <summary className="cursor-interaction text-xs font-medium text-token-text-tertiary marker:text-token-text-tertiary">
        {
          <MemoizedFormattedMessage
            {...{
              id: "notebookPreview.rawOutputDisclosure",
              defaultMessage: "Raw output",
              description: "Disclosure label for a notebook cell's raw output",
            }}
          />
        }
      </summary>
    );
  let nook = (
    <NotebookPreviewPanelHelper23
      {...{
        className: "mt-2",
        children,
      }}
    />
  );
  return (
    <details className={className}>
      {mire}
      {nook}
    </details>
  );
}
function NotebookPreviewPanelHelper23(oxbow) {
  let { children, className } = oxbow,
    pond = IntlProvider(
      "overflow-auto rounded-md bg-token-text-code-block-background/20 p-3 font-mono text-xs whitespace-pre-wrap text-token-text-primary",
      className,
    );
  return <pre className={pond}>{children}</pre>;
}
function xenon(quarry) {
  try {
    return {
      document: alpha(JSON.parse(new TextDecoder().decode(yellow(quarry)))),
      status: "ready",
    };
  } catch {
    return {
      status: "error",
    };
  }
}
function yellow(rapids) {
  let spur = atob(rapids),
    tor = new Uint8Array(spur.length);
  for (let updraft = 0; updraft < spur.length; updraft += 1)
    tor[updraft] = spur.charCodeAt(updraft);
  return tor;
}
function zinc(verge) {
  let weir = `${verge.ename}: ${verge.evalue}`.trim();
  return verge.traceback.trim().length === 0
    ? weir
    : `${weir}\n${verge.traceback}`;
}
function amber(yard, anchor, bolt) {
  let cog = anchor.title?.trim();
  if (cog != null && cog.length > 0) return cog;
  switch (anchor.cellType) {
    case "markdown":
      return (
        basalt(anchor.source) ??
        yard.formatMessage(
          {
            id: "notebookPreview.markdownCellTitle",
            defaultMessage: "Markdown cell {cellNumber}",
            description:
              "Fallback title for a Markdown notebook cell without a heading",
          },
          {
            cellNumber: bolt,
          },
        )
      );
    case "raw":
      return yard.formatMessage(
        {
          id: "notebookPreview.rawCellTitle",
          defaultMessage: "Raw cell {cellNumber}",
          description: "Fallback title for a raw notebook cell",
        },
        {
          cellNumber: bolt,
        },
      );
    case "code": {
      let disc = markdownToPlainText(anchor.descriptionMarkdown ?? "");
      return disc.length > 0
        ? cedar(disc)
        : yard.formatMessage(
            {
              id: "notebookPreview.codeCellTitle",
              defaultMessage: "Code cell {cellNumber}",
              description:
                "Fallback title for a code notebook cell without a description",
            },
            {
              cellNumber: bolt,
            },
          );
    }
  }
}
function basalt(edge) {
  let forge = edge
    .split(/\r?\n/)
    .map((item) => item.trim())
    .find((item) => /^#{1,6}\s+/.test(item));
  return forge == null ? null : cedar(markdownToPlainText(forge));
}
function cedar(gear) {
  let hinge = gear.trim();
  return hinge.length <= 80 ? hinge : `${hinge.slice(0, 77).trimEnd()}…`;
}
function daisy(iron) {
  return iron.replace(/\.ipynb$/i, "");
}
var ember, $;
esmInit(() => {
  ember = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  ensureConversationPageEsm_Ist_Init();
  ensureIntlFormattersInit();
  deferredUiWR();
  ensureArtifactPreviewStatusInit();
  clampZoomPercent();
  chatgptProjectQueryKey();
  ensureAppIconSftInit();
  AppInitialNH();
  AppInitialMa();
  useEventCallback();
  timber();
  willow();
})();
