// Restored from ref/webview/assets/local-environment-editor-9PiWGb5h.js
// Wave FZ — full polished body from `local-environment-editor-9PiWGb5h/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 20 (verified 61/80).
// Careful split 1/3
/* split-lane-import-depth:1 */

import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { SUPPORTED_NODE_PLATFORMS } from "../../config/supported-node-platforms";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { ensureFlaskIconInit, FlaskIcon } from "../../icons/flask-icon";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import {
  ensurePlayOutlineIconInit,
  PlayOutlineIcon,
} from "../../icons/play-outline-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { esmInit } from "../../runtime/rolldown-runtime";
import { identity } from "../../utils/identity";
import {
  AppInitialAG,
  AppInitialPl,
  childList,
  deferredConversationWH3,
  IntlProvider,
} from "./part-1";
import { localEnvironmentEditorP } from "./part-1-a";

var localEnvironmentEditorV = esmInit(() => {
  scrollAppActionTargetTo();
});
function LocalEnvironmentEditorG(olive: any) {
  let { icon, className } = olive,
    Prism = copper[icon],
    quill = IntlProvider("icon-sm", className);
  return (
    <Prism
      {...{
        className: quill,
      }}
    />
  );
}
var alpha,
  bravo,
  copper,
  localEnvironmentEditorUnderscore = esmInit(() => {
    alpha = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    AppInitialAG();
    FlaskIcon();
    PlayOutlineIcon();
    ensureHooksFocusIconInit();
    copper = {
      tool: deferredConversationWH3,
      run: ensurePlayOutlineIconInit,
      debug: childList,
      test: ensureFlaskIconInit,
    };
  });
var localEnvironmentEditorM,
  localEnvironmentEditorH = esmInit(() => {
    ensureIntlFormattersInit();
    localEnvironmentEditorM = [
      {
        value: "tool",
        message: identity({
          id: "settings.localEnvironments.actions.icon.tool",
          defaultMessage: "Tool",
          description: "Tool icon label for local environment actions",
        }),
      },
      {
        value: "run",
        message: identity({
          id: "settings.localEnvironments.actions.icon.run",
          defaultMessage: "Run",
          description: "Run icon label for local environment actions",
        }),
      },
      {
        value: "debug",
        message: identity({
          id: "settings.localEnvironments.actions.icon.debug",
          defaultMessage: "Debug",
          description: "Debug icon label for local environment actions",
        }),
      },
      {
        value: "test",
        message: identity({
          id: "settings.localEnvironments.actions.icon.test",
          defaultMessage: "Test",
          description: "Test icon label for local environment actions",
        }),
      },
    ];
  });
var localEnvironmentEditorS = esmInit(() => {
  ensureDynamicScriptLoadInit();
  localEnvironmentEditorV();
  localEnvironmentEditorP();
});
var at,
  quartz = esmInit(() => {
    ensureIntlFormattersInit();
    at = identity({
      all: {
        id: "settings.localEnvironments.actions.item.platforms.all",
        defaultMessage: "All platforms",
        description: "Label for an action available on every platform",
      },
      default: {
        id: "settings.localEnvironments.environment.script.default",
        defaultMessage: "Default",
        description: "Label for default local environment lifecycle script",
      },
      darwin: {
        id: "settings.localEnvironments.actions.item.platforms.macos",
        defaultMessage: "macOS",
        description: "Label for macOS platform toggle",
      },
      linux: {
        id: "settings.localEnvironments.actions.item.platforms.linux",
        defaultMessage: "Linux",
        description: "Label for Linux platform toggle",
      },
      win32: {
        id: "settings.localEnvironments.actions.item.platforms.windows",
        defaultMessage: "Windows",
        description: "Label for Windows platform toggle",
      },
    });
  });
function LocalEnvironmentEditorA(storm: any) {
  let { leadingOption, selectedId, onSelect, ariaLabel } = storm,
    tide = useIntl(),
    unity = [leadingOption, ...SUPPORTED_NODE_PLATFORMS];
  let vale = unity,
    wave = vale.map((item) => {
      let apex = tide.formatMessage(at[item]);
      return {
        id: item,
        label: apex,
        ariaLabel: apex,
      };
    });
  return (
    <AppInitialPl
      className="flex-wrap"
      selectedId={selectedId}
      onSelect={onSelect}
      size="default"
      ariaLabel={ariaLabel}
      options={wave}
    />
  );
}
var river,
  slate,
  localEnvironmentEditorO = esmInit(() => {
    river = reactCompilerRuntime();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    WritingBlockRenderer();
    quartz();
  });

export {
  LocalEnvironmentEditorA,
  LocalEnvironmentEditorG,
  localEnvironmentEditorH,
  localEnvironmentEditorM,
  localEnvironmentEditorO,
  localEnvironmentEditorUnderscore,
};
