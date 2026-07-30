// Restored from ref/webview/assets/hotkey-setter-a0kUJFgA.js
// Wave FY — full polished body from `hotkey-setter-a0kUJFgA/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 7 (verified 26/32).
// AST split 1/2
/* split-lane-import-depth:1 */

import { ensureComposerEsm_FZ_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconFj } from "../../icons/app-icon-fj";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { CopyButton } from "../../ui/copy-button";
import { EASE_OUT_EXPO } from "../../ui/ease-out-expo";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { joinWithNullChar } from "../../utils/join-with-null-char";
import { moveArrayItem } from "../../utils/move-array-item";
import { HotkeyKeysLabel } from "../hotkey-keys-label";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";

/** split companion stub */
const jade: any = undefined;
/** split companion stub */
const kite: any = undefined;

const committed: any = undefined;
/** Wave FY unresolved companion (missing-export:desktop/codex-dismiss-tooltips.tsx) */
const CodexDismissTooltips: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiO1@ui/deferred-ui-o1.ts) */
const AppInitialO1: any = undefined;
/** Wave FY unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
function hotkeySetterR(event) {
  let marble = delta(event);
  if (marble == null) return null;
  let nickel = [];
  return event.ctrlKey && nickel.push("Ctrl"), event.metaKey && nickel.push("Command"), event.altKey && nickel.push("Alt"), event.shiftKey && nickel.push("Shift"), nickel.push(marble), nickel.join("+");
}
function alpha(onyx) {
  return copper(onyx, "pressed");
}
function bravo(pearl) {
  return copper(pearl, "released");
}
function copper(event, quartz) {
  if (event.key.toLowerCase() === "fn") return "Fn";
  let river = event.location === gamma ? "Left" : event.location === harbor ? "Right" : null;
  if (river == null) return null;
  switch (event.key) {
    case "Alt":
      return quartz === "released" || event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey ? `${river}Option` : null;
    case "Meta":
      return quartz === "released" || event.metaKey && !event.ctrlKey && !event.altKey && !event.shiftKey ? `${river}Command` : null;
    case "Control":
      return river === "Left" && (quartz === "released" || event.ctrlKey && !event.metaKey && !event.altKey && !event.shiftKey) ? "LeftControl" : null;
    default:
      return null;
  }
}
function delta(event) {
  let slate = committed(event);
  return falcon.has(slate) ? null : slate === " " ? "Space" : slate === "+" ? "Plus" : indigo.get(slate) ?? (/^f\d{1,2}$/i.test(slate) ? slate.toUpperCase() : slate.toLowerCase() === "fn" ? "Fn" : slate.length === 1 ? slate.toUpperCase() : echo(event.code) ?? slate);
}
function echo(timber) {
  return timber == null ? null : /^Key[A-Z]$/.test(timber) ? timber.slice(3) : /^Digit[0-9]$/.test(timber) ? timber.slice(5) : timber === "Space" ? "Space" : null;
}
var falcon,
  gamma,
  harbor,
  indigo,
  hotkeySetterI = esmInit(() => {
    ensureComposerEsm_FZ_Init();
    falcon = new Set(["Meta", "Control", "Alt", "AltGraph", "Shift"]);
    gamma = 1;
    harbor = 2;
    indigo = new Map([["Escape", "Esc"], ["ArrowUp", "Up"], ["ArrowDown", "Down"], ["ArrowLeft", "Left"], ["ArrowRight", "Right"]]);
  });
export function hotkeySetterT(umbra: unknown) {
  let {
      accelerator,
      acceleratorLabel,
      allowsBareModifiers = false,
      allowsSequences = false,
      ariaLabelledBy,
      canAppend = false,
      captureAriaLabel,
      className,
      conflict = null,
      disabled = false,
      emptyLabel,
      hotkeyName,
      isCapturing,
      valueLabelId,
      onCancelCapture,
      onCapture,
      onClear: violet,
      onReset,
      onStartCapture
    } = umbra,
    _hotkeySetterI = useIntl(),
    {
      platform: _hotkeySetterT
    } = useHostPlatformModifierSymbol(),
    _hotkeySetterN = kite.useId(),
    willow = kite.useRef(0),
    xenon = kite.useRef(null),
    yellow = kite.useRef(null),
    zinc = kite.useRef(null),
    [amber, basalt] = kite.useState(false),
    [be, cedar] = kite.useState(null),
    daisy = function () {
      zinc.current != null && (clearTimeout(zinc.current), zinc.current = null);
      yellow.current = null;
      cedar(null);
    };
  let ember = daisy,
    flint = function (knoll) {
      willow.current += 1;
      xenon.current = null;
      ember();
      onCapture(knoll);
    };
  let garnet = flint,
    hazel = function () {
      willow.current += 1;
      xenon.current = null;
      ember();
      onCancelCapture();
    };
  let ivory = hazel,
    jasper = function (lunar) {
      let moss = yellow.current;
      if (moss != null) {
        garnet(`${moss} ${lunar}`);
        return;
      }
      if (!allowsSequences || lunar.includes("+")) {
        garnet(lunar);
        return;
      }
      yellow.current = lunar;
      cedar(`${moveArrayItem(lunar, _hotkeySetterT === "macOS", _hotkeySetterT === "linux")} …`);
      zinc.current = setTimeout(() => {
        yellow.current === lunar && garnet(lunar);
      }, AppInitialO1);
    };
  let kelp = jasper,
    lotus = async north => {
      try {
        let {
          hotkey
        } = await invokeDesktopRpc("global-dictation-capture-fn-hotkey");
        hotkey != null && willow.current === north && garnet(hotkey);
      } catch {}
    };
  let mint = kite.useEffectEvent(lotus),
    nova = () => (willow.current += 1, isCapturing && allowsBareModifiers && _hotkeySetterT === "macOS" && mint(willow.current), () => {
      willow.current += 1;
      xenon.current = null;
      yellow.current = null;
      zinc.current != null && clearTimeout(zinc.current);
    });
  let olive;
  if (olive = [allowsBareModifiers, isCapturing, _hotkeySetterT], kite.useEffect(nova, olive), isCapturing) {
    let orbit = IntlProvider("flex w-full flex-col items-start gap-1", className);
    let pine = conflict == null ? undefined : _hotkeySetterN,
      quest = conflict == null ? undefined : true,
      ridge = be ?? _hotkeySetterI.formatMessage({
        id: "settings.hotkeySetter.capturePrompt",
        defaultMessage: "Press shortcut",
        description: "Prompt shown while capturing a settings hotkey"
      });
    let storm = event => {
      if (event.repeat) return;
      if (event.preventDefault(), event.stopPropagation(), event.key === "Escape") {
        ivory();
        return;
      }
      if (allowsBareModifiers) {
        let elm = alpha(event.nativeEvent);
        if (elm != null) {
          xenon.current = elm;
          return;
        }
      }
      let dusk = hotkeySetterR(event.nativeEvent);
      dusk != null && kelp(dusk);
    };
    let tide = event => {
      if (event.preventDefault(), event.stopPropagation(), !allowsBareModifiers) return;
      let fern = bravo(event.nativeEvent);
      fern != null && xenon.current === fern && garnet(fern);
    };
    let unity = <input data-codex-shortcut-capture={true} autoFocus={true} readOnly={true} aria-describedby={pine} aria-invalid={quest} aria-label={captureAriaLabel} className="h-token-button-composer w-36 rounded-lg border border-token-border bg-token-input-background px-3 py-0 text-sm text-token-text-primary shadow-sm outline-none focus:border-token-focus-border" value={ridge} onBlur={ivory} onKeyDown={storm} onKeyUp={tide} />;
    let vale = <MemoizedFormattedMessage {...{
      id: "settings.hotkeySetter.cancel",
      defaultMessage: "Cancel",
      description: "Button label to cancel settings hotkey capture"
    }} />;
    let wave = <ReadLoginRouteQuerySnapshot {...{
      color: "ghost",
      size: "toolbar",
      onMouseDown: jade,
      onClick: ivory,
      children: vale
    }} />;
    let apex = <div className="flex items-center gap-2">
        {unity}
        {wave}
      </div>;
    let brook = conflict == null ? null : <span id={_hotkeySetterN} className="text-xs text-token-editor-warning-foreground">
          {<MemoizedFormattedMessage {...{
        id: "settings.hotkeySetter.conflict",
        defaultMessage: "Used by {hotkeyName}",
        description: "Warning shown while capturing a hotkey already used by another action",
        values: {
          hotkeyName: conflict
        }
      }} />}
        </span>;
    let cliff;
    return <div className={orbit}>
        {apex}
        {brook}
      </div>;
  }
  let prism = accelerator != null,
    quill;
  if (!prism) {
    let grove;
    grove = _hotkeySetterI.formatMessage({
      id: "settings.hotkeySetter.setAriaLabel",
      defaultMessage: "Set shortcut for {hotkeyName}",
      description: "Aria label for setting a settings hotkey"
    }, {
      hotkeyName
    });
    quill = grove;
  } else if (amber) {
    let hill;
    hill = _hotkeySetterI.formatMessage({
      id: "settings.hotkeySetter.createAriaLabel",
      defaultMessage: "Create new shortcut for {hotkeyName}",
      description: "Aria label for adding another settings hotkey"
    }, {
      hotkeyName
    });
    quill = hill;
  } else {
    let isle;
    isle = _hotkeySetterI.formatMessage({
      id: "settings.hotkeySetter.changeAriaLabel",
      defaultMessage: "Change shortcut for {hotkeyName}",
      description: "Aria label for changing a settings hotkey"
    }, {
      hotkeyName
    });
    quill = isle;
  }
  let reef = _hotkeySetterI.formatMessage({
    id: "settings.hotkeySetter.clearAriaLabel",
    defaultMessage: "Clear shortcut for {hotkeyName}",
    description: "Aria label for clearing a settings hotkey"
  }, {
    hotkeyName
  });
  let sage = reef,
    topaz = _hotkeySetterI.formatMessage({
      id: "settings.hotkeySetter.resetAriaLabel",
      defaultMessage: "Reset shortcut for {hotkeyName}",
      description: "Aria label for resetting a settings hotkey"
    }, {
      hotkeyName
    });
  let ultra = topaz,
    vapor = IntlProvider("group flex min-h-8 items-center", className);
  let wheat = ariaLabelledBy == null ? undefined : "group",
    yarn = acceleratorLabel == null ? emptyLabel ?? <MemoizedFormattedMessage {...{
      id: "settings.hotkeySetter.unassigned",
      defaultMessage: "Unassigned",
      description: "Label shown when a settings hotkey is unassigned"
    }} /> : <HotkeyKeysLabel {...{
      className: "!px-2 !py-1 !text-sm",
      keysLabel: acceleratorLabel
    }} />;
  let zephyr = <span id={valueLabelId} className="flex min-h-8 items-center gap-1 text-sm text-token-text-secondary">
      {yarn}
    </span>;
  let acorn, bloom;
  acorn = event => {
    basalt(canAppend && prism && event.shiftKey);
  };
  bloom = event => {
    basalt(canAppend && prism && event.shiftKey);
  };
  let coral = () => {
    basalt(false);
  };
  let drift = event => {
    prism ? canAppend && event.shiftKey ? onStartCapture("append") : onStartCapture("replace") : onStartCapture("set");
  };
  let eagle = <CopyButton {...{
    className: "icon-xs"
  }} />;
  let frost = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": quill,
    color: "ghost",
    disabled: disabled,
    size: "toolbar",
    uniform: true,
    onMouseEnter: acorn,
    onMouseMove: bloom,
    onMouseLeave: coral,
    onClick: drift,
    children: eagle
  }} />;
  let glide = <OptionalTooltip {...{
    tooltipContent: quill,
    children: frost
  }} />;
  let honey = <div className="flex min-w-0 flex-1 items-center gap-1">
      {zephyr}
      {glide}
    </div>;
  let iris = prism ? <OptionalTooltip {...{
    tooltipContent: sage,
    children: <ReadLoginRouteQuerySnapshot {...{
      "aria-label": sage,
      color: "ghost",
      disabled: disabled,
      size: "toolbar",
      uniform: true,
      onClick: violet,
      children: <AppIconBO {...{
        className: "icon-xs"
      }} />
    }} />
  }} /> : null;
  let jewel = onReset == null ? null : <OptionalTooltip {...{
    tooltipContent: ultra,
    children: <ReadLoginRouteQuerySnapshot {...{
      "aria-label": ultra,
      color: "ghost",
      disabled: disabled,
      size: "toolbar",
      uniform: true,
      onClick: onReset,
      children: <AppIconFj {...{
        className: "icon-xs"
      }} />
    }} />
  }} />;
  let $ = <div className="ml-2 flex shrink-0 items-center justify-end gap-1">
      {iris}
      {jewel}
    </div>;
  return <div aria-labelledby={ariaLabelledBy} className={vapor} role={wheat}>
      {honey}
      {$}
    </div>;
}
export const hotkeySetterN = esmInit(() => {
  _e = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  kite = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureSettingsQueryAtomsInit();
  CodexDismissTooltips();
  ensureComposerEsm_Hlt_Init();
  macOS4();
  isIndeterminate();
  AppInitialVO();
  joinWithNullChar();
  ensureContextMenuProviderInit();
  EASE_OUT_EXPO();
  hotkeySetterI();
  scrollAppActionTargetTo();
});
