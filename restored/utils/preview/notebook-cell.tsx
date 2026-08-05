// Restored from ref/webview/assets/notebook-preview-panel-DwlTki9M.js
// Wave FY — full polished body from `notebook-preview-panel-DwlTki9M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 8 (verified 27/35).
// Wave FZ-support — PascalCase invalid JSX tags: areVisualizationFeatureGatesEnabled→AreVisualizationFeatureGatesEnabled, isIndeterminate→IsIndeterminate, isLocalOrNullValue→IsLocalOrNullValue, renamedId→NotebookPreviewPanelHelper13, renamedId→NotebookPreviewPanelHelper14, renamedId→NotebookPreviewPanelHelper15, renamedId→NotebookPreviewPanelHelper16, renamedId→NotebookPreviewPanelHelper17, renamedId→NotebookPreviewPanelHelper18, renamedId→NotebookPreviewPanelHelper19, renamedId→NotebookPreviewPanelHelper20, renamedId→NotebookPreviewPanelHelper21.
// AST split 1/1
/* split-lane-import-depth:1 */

import { AreVisualizationFeatureGatesEnabled } from "../../feature-gates/are-visualization-feature-gates-enabled";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { useIntl } from "../../i18n/use-intl";
import { AppIconMH } from "../../icons/app-icon-mh";
import { AppIconSft } from "../../icons/app-icon-sft";
import { markdownToPlainText } from "../../markdown/markdown-to-plain-text";
import { IsIndeterminate } from "../is-indeterminate";
import { NotebookPreviewPanelHelper20 } from "./notebook-output";

/** Wave FY unresolved companion (jsx-collision:sidebarProjectMessages@chatgpt/sidebar-project-messages.ts) */
const AppInitialJa: any = undefined;
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
export { NotebookPreviewPanelHelper15 };
