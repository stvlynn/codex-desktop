// Restored from ref/webview/assets/appgen-settings-page-8V-xKkmK.js
// Wave FZ — full polished body from `appgen-settings-page-8V-xKkmK/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 76/109).
// AST split — size-gate sibling part-2 a/3
/* split-lane-import-depth:1 */

import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { ensureComposerEsm_Wlt_Init as EnsureComposerEsm_Wlt_Init } from "../../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";

/** split companion stub */
const willow: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialFC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialUj: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVO: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const AppInitialLj: any = undefined;

function xenon(arbor) {
  let bushing = [];
  for (let collar of arbor.split(/\r?\n/)) {
    let dowel = collar.trim();
    if (dowel.length === 0 || dowel.startsWith("#") || dowel.startsWith(";"))
      continue;
    dowel.startsWith("export ") && (dowel = dowel.slice(7).trim());
    let flange = yellow(dowel, "#", (idler) => dowel[idler - 1]?.trim() === "");
    if (
      (flange !== -1 && (dowel = dowel.slice(0, flange).trim()),
      dowel.length === 0)
    )
      continue;
    let gib = yellow(dowel, "=");
    if (gib === -1) continue;
    let hub = dowel.slice(0, gib).trim();
    hub.length !== 0 &&
      bushing.push({
        key: hub,
        value: zinc(dowel.slice(gib + 1).trim()),
      });
  }
  return bushing;
}

function yellow(jig, keeper, lug = () => true) {
  let mandrel = false,
    nipple = false,
    orifice = false;
  for (let pin = 0; pin < jig.length; pin += 1) {
    let race = jig[pin];
    if (mandrel) {
      mandrel = false;
      continue;
    }
    if (race === "\\") {
      mandrel = true;
      continue;
    }
    if (race === "'" && !nipple) {
      orifice = !orifice;
      continue;
    }
    if (race === '"' && !orifice) {
      nipple = !nipple;
      continue;
    }
    if (race === keeper && !orifice && !nipple && lug(pin)) return pin;
  }
  return -1;
}

function zinc(sleeve) {
  return (sleeve.startsWith('"') && sleeve.endsWith('"')) ||
    (sleeve.startsWith("'") && sleeve.endsWith("'"))
    ? sleeve.slice(1, -1)
    : sleeve;
}

var amber = esmInit(() => {});

export function AppgenSettingsPageHelper24(trunnion: unknown) {
  let {
      addButtonLabel,
      disabled = false,
      entries,
      onChange,
      subtitle,
      title,
      valueInputType,
    } = trunnion,
    boss = () => {
      onChange([
        ...entries,
        {
          key: "",
          value: "",
        },
      ]);
    };
  let cam = (
    <EnsureComposerEsm_Wlt_Init
      {...{
        className: "icon-xs",
      }}
    />
  );
  let detent = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "outline",
        disabled: disabled,
        size: "toolbar",
        onClick: boss,
        children: [cam, addButtonLabel],
      }}
    />
  );
  let eccentric = (
    <UseChromeAndCodeThemeSync.Header
      {...{
        actions: detent,
        subtitle,
        title,
        titleGap: "none",
      }}
    />
  );
  let follower = (
    <UseChromeAndCodeThemeSync.Content
      {...{
        children: (
          <ParseUrlOrFallback
            {...{
              children:
                entries.length === 0 ? (
                  <AppInitialLj layout="settings-row">
                    {
                      <MemoizedFormattedMessage
                        {...{
                          id: "envEntrySettingsGroup.empty",
                          defaultMessage: "Nothing yet",
                          description:
                            "Empty state for an environment entry settings section",
                        }}
                      />
                    }
                  </AppInitialLj>
                ) : (
                  <div className="flex flex-col gap-2 p-4">
                    {entries.map((item, index) => (
                      <AppgenSettingsPageHelper25
                        key={index}
                        {...{
                          disabled: disabled,
                          entry: item,
                          valueInputType,
                          onChange: (guide) => {
                            onChange(
                              entries.map((_item, _index) =>
                                _index === index ? guide : _item,
                              ),
                            );
                          },
                          onKeyPaste: (event) => {
                            let helix = willow(
                              entries,
                              index,
                              event.clipboardData.getData("text/plain"),
                            );
                            helix != null &&
                              (event.preventDefault(), onChange(helix));
                          },
                          onRemove: () => {
                            onChange(
                              entries.filter(
                                (_item, _index) => _index !== index,
                              ),
                            );
                          },
                        }}
                      />
                    ))}
                  </div>
                ),
            }}
          />
        ),
      }}
    />
  );
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [eccentric, follower],
      }}
    />
  );
}

function AppgenSettingsPageHelper25(impeller) {
  let { disabled, entry, onChange, onKeyPaste, onRemove, valueInputType } =
      impeller,
    journal = useIntl(),
    kingpin = journal.formatMessage({
      id: "envEntrySettingsGroup.key.ariaLabel",
      defaultMessage: "Key",
      description:
        "Accessible label for an environment variable or secret key input",
    });
  let land = disabled || entry.keyInputDisabledWhileValue === entry.value,
    mesh = journal.formatMessage({
      id: "envEntrySettingsGroup.key.placeholder",
      defaultMessage: "Key",
      description:
        "Placeholder for an environment variable or secret key input",
    });
  let neck = (event) => {
    onChange({
      ...entry,
      key: event.target.value,
    });
  };
  let pad = (
    <AppgenSettingsPageHelper26
      {...{
        "aria-label": kingpin,
        disabled: land,
        placeholder: mesh,
        value: entry.key,
        onPaste: onKeyPaste,
        onChange: neck,
      }}
    />
  );
  let quillshaft = journal.formatMessage({
    id: "envEntrySettingsGroup.value.ariaLabel",
    defaultMessage: "Value",
    description:
      "Accessible label for an environment variable or secret value input",
  });
  let roller = journal.formatMessage({
    id: "envEntrySettingsGroup.value.placeholder",
    defaultMessage: "Value",
    description:
      "Placeholder for an environment variable or secret value input",
  });
  let spindle = (event) => {
    onChange({
      ...entry,
      value: event.target.value,
    });
  };
  let thrust = (
    <AppgenSettingsPageHelper26
      {...{
        "aria-label": quillshaft,
        disabled,
        placeholder: roller,
        type: valueInputType,
        value: entry.value,
        onChange: spindle,
      }}
    />
  );
  let yoke = journal.formatMessage({
    id: "envEntrySettingsGroup.remove.ariaLabel",
    defaultMessage: "Remove entry",
    description:
      "Accessible label for removing an environment variable or secret row",
  });
  let baffle = (
    <AppIconBO
      {...{
        className: "icon-2xs",
      }}
    />
  );
  let capstan = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": yoke,
        color: "ghost",
        disabled,
        size: "icon",
        onClick: onRemove,
        children: baffle,
      }}
    />
  );
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2">
      {pad}
      {thrust}
      {capstan}
    </div>
  );
}

function AppgenSettingsPageHelper26(diaphragm) {
  return (
    <input
      className="h-token-button-composer w-full min-w-0 rounded-md border border-token-input-border bg-token-input-background px-2 font-mono text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40"
      {...diaphragm}
    />
  );
}

var basalt,
  cedar,
  daisy = esmInit(() => {
    basalt = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    AppInitialUj();
    ensureSkillsPageHelpersInit();
    AppInitialVO();
    codexCommandTheme();
    AppInitialFC();
    amber();
  });
