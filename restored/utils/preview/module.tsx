// Restored from ref/webview/assets/notebook-preview-panel-DwlTki9M.js
// Wave FY — full polished body from `notebook-preview-panel-DwlTki9M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 8 (verified 27/35).
// Wave FZ-support — PascalCase invalid JSX tags: areVisualizationFeatureGatesEnabled→AreVisualizationFeatureGatesEnabled, isIndeterminate→IsIndeterminate, isLocalOrNullValue→IsLocalOrNullValue, renamedId→NotebookPreviewPanelHelper13, renamedId→NotebookPreviewPanelHelper14, renamedId→NotebookPreviewPanelHelper15, renamedId→NotebookPreviewPanelHelper16, renamedId→NotebookPreviewPanelHelper17, renamedId→NotebookPreviewPanelHelper18, renamedId→NotebookPreviewPanelHelper19, renamedId→NotebookPreviewPanelHelper20, renamedId→NotebookPreviewPanelHelper21.
// AST split 1/1
/* split-lane-import-depth:1 */

import { clampZoomPercent } from "../../artifact/clamp-zoom-percent";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Ist_Init } from "../../conversation/conversation-page-esm-inits";
import { chatgptProjectQueryKey } from "../../conversation/chatgpt-conversation-query-keys";
import { useEventCallback } from "../../hooks/use-event-callback";
import { IsLocalOrNullValue } from "../../hosts/is-local-or-null-value";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ArtifactPreviewStatus,
  ensureArtifactPreviewStatusInit,
} from "../../ui/artifact-preview-status";
import { NotebookPreviewPanelHelper15 } from "./notebook-cell";
import { timber, xenon } from "./notebook-document";
import { willow } from "./notebook-output";

const NotebookPreviewOpenActions: any = undefined;
/** Wave FY unresolved companion (jsx-collision:sidebarProjectMessages@chatgpt/sidebar-project-messages.ts) */
const AppInitialJa: any = undefined;
/** Wave FY unresolved companion (jsx-collision:renameProjectMessages@sidebar/rename-project-messages.ts) */
const AppInitialMa: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_NH_Init@composer/composer-esm-inits.ts) */
const AppInitialNH: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-wr-2.ts) */
const deferredUiWR: any = undefined;
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
