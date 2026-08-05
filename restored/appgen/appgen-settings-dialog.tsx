// Restored from ref/webview/assets/appgen-settings-dialog-C3S4NyTP.js
// Wave FY — full polished body from `appgen-settings-dialog-C3S4NyTP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 1 (verified 13/14).
// Wave FZ-support — PascalCase invalid JSX tags: deferredUiB→DeferredUiB, deferredUiH→DeferredUiH, usePointerSurfaceInteractionGate→UsePointerSurfaceInteractionGate.

import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { findProcessManagerRow } from "../desktop/find-process-manager-row";
import { UsePointerSurfaceInteractionGate } from "../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../i18n/use-intl";
import { useOpenLocatorInMainWindow } from "../navigation/use-open-locator-in-main-window";
import { esmInit } from "../runtime/rolldown-runtime";
import { DeferredUiB } from "../ui/deferred-ui-b";
import { DeferredUiH } from "../ui/deferred-ui-h";
import {
  AppgenSettingsPageContent,
  ensureAppgenSettingsPageInit,
} from "./appgen-settings-page";

/** Wave FY unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
export function AppgenSettingsDialog(copper: unknown) {
  let { onClose, projectId } = copper,
    delta = useIntl(),
    echo = (
      <MemoizedFormattedMessage
        {...{
          id: "appgenSettings.dialog.title",
          defaultMessage: "Site settings",
          description: "Title for the Site settings dialog",
        }}
      />
    );
  let falcon = echo,
    _AppgenSettingsDialog = {
      "aria-describedby": undefined,
    };
  let gamma = delta.formatMessage({
    id: "appgenSettings.dialog.close",
    defaultMessage: "Close Site settings",
    description: "Accessible label for closing the Site settings dialog",
  });
  let harbor = (kite) => {
    kite || onClose();
  };
  let indigo = (
    <div className="flex w-full flex-col px-4 pt-3">
      {
        <RealtimeVoiceHostId
          {...{
            className: "sr-only",
            children: falcon,
          }}
        />
      }
      {
        <DeferredUiH
          {...{
            title: falcon,
            titleClassName: "truncate pr-8",
          }}
        />
      }
    </div>
  );
  let jade = (
    <DeferredUiB
      {...{
        className: "!px-1 !py-1",
        size: "full",
        children: [
          indigo,
          <AppgenSettingsPageContent
            {...{
              projectId,
              showHeader: false,
              onDeleted: onClose,
            }}
          />,
        ],
      }}
    />
  );
  return (
    <UsePointerSurfaceInteractionGate
      {...{
        open: true,
        contentClassName: "h-[720px] max-h-[92vh]",
        contentProps: _AppgenSettingsDialog,
        dialogCloseLabel: gamma,
        size: "xwide",
        onOpenChange: harbor,
        children: jade,
      }}
    />
  );
}
var alpha, bravo;
esmInit(() => {
  alpha = reactCompilerRuntime();
  ensureIntlFormattersInit();
  findProcessManagerRow();
  useOpenLocatorInMainWindow();
  ensureAppgenSettingsPageInit();
})();

/** Wave FY: bind no longer required after full body promote */
export function bindAppgenSettingsDialog(_next: unknown): void {}
export function ensureAppgenSettingsDialogInit(): void {}
