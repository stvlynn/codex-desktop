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
import { esmInit } from "../../runtime/rolldown-runtime";
import { IsIndeterminate } from "../is-indeterminate";

/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
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
function zinc(verge) {
  let weir = `${verge.ename}: ${verge.evalue}`.trim();
  return verge.traceback.trim().length === 0
    ? weir
    : `${weir}\n${verge.traceback}`;
}
export { NotebookPreviewPanelHelper20, willow };
