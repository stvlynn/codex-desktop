// Restored from ref/webview/assets/general-settings-DaCT8Zmh.js
// Split companion residue for general-settings part-1-x1.
/** split companion stub */
const MemoizedFormattedMessage: any = undefined;
/** split companion stub */
const ParseUrlOrFallback: any = undefined;
/** split companion stub */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialYC: any = undefined;
/** split companion stub */
const CodeSymbolOutlinePanel: any = undefined;
/** split companion stub */
const EnsurePersonalizationCInit: any = undefined;
/** split companion stub */
const GeneralSettingsHelper12: any = undefined;
/** split companion stub */
const GeneralSettingsHelper13: any = undefined;
/** split companion stub */
const GeneralSettingsHelper5: any = undefined;
/** split companion stub */
const GeneralSettingsHelper6: any = undefined;
/** split companion stub */
const GeneralSettingsHelper8: any = undefined;
/** split companion stub */
const $r: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialQ1: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialRn: any = undefined;
/** split companion stub */
const CodexPluginActionType: any = undefined;
/** split companion stub */
const THREAD_DETAIL_LEVEL_STEPS_COMMANDS: any = undefined;
/** split companion stub */
const activatePanelTabOrFallback: any = undefined;
/** split companion stub */
const appScopeAtom: any = undefined;
/** split companion stub */
const echoFifth: any = undefined;
/** split companion stub */
const engineFourth: any = undefined;
/** split companion stub */
const ensureComposerEsm_BU_Init: any = undefined;
/** split companion stub */
const ensurePullRequestMediaGUInit: any = undefined;
/** split companion stub */
const frameFourth: any = undefined;
/** split companion stub */
const gammaFifth: any = undefined;
/** split companion stub */
const harborFifth: any = undefined;
/** split companion stub */
const toastAtom: any = undefined;
/** split companion stub */
const useIntl: any = undefined;
/** split companion stub */
const useStepsProseAtom: any = undefined;
/** split companion stub */
const writeClipboardContents: any = undefined;

function GeneralSettingsHelper1() {
  let sageFifth = activatePanelTabOrFallback(),
    topazFifth =
      useStepsProseAtom() === THREAD_DETAIL_LEVEL_STEPS_COMMANDS,
    { data } = AppInitialQ1(),
    ultraFifth = data?.isSystemBackdropSupported !== false,
    vaporFifth,
    wheatFifth;
  {
    let glideFifth = ensurePullRequestMediaGUInit(
      sageFifth,
    );
    vaporFifth = "flex flex-col gap-[var(--padding-panel)]";
    let honeyFifth;
    honeyFifth = (ratchetFourth) => (
      <GeneralSettingsHelper3
        key={ratchetFourth}
        {...{
          showCodeFont: topazFifth,
          showTranslucentSidebarToggle: ultraFifth,
          variant: ratchetFourth,
        }}
      />
    );
    wheatFifth = glideFifth.map(
      honeyFifth,
    );
  }
  return (
    <div className={vaporFifth}>{wheatFifth}</div>
  );
}
function GeneralSettingsHelper2() {
  return (
    <div
      className="isolate overflow-hidden rounded-xl border border-token-border bg-token-main-surface-primary"
      data-testid="theme-preview"
    >
      {
        <CodeSymbolOutlinePanel
          {...{
            diffStyle: "split",
            expansionLineCount: 8,
            fileDiff: harborFifth,
            hunkSeparators: "line-info",
            lineDiffType: "none",
            overflow: "scroll",
          }}
        />
      }
    </div>
  );
}
function GeneralSettingsHelper3({
  showCodeFont,
  showTranslucentSidebarToggle,
  variant,
}) {
  let cedarFifth = CodexPluginActionType(appScopeAtom),
    daisyFifth = useIntl(),
    emberFifth = daisyFifth.formatMessage(
      echoFifth.chromeThemeAccent,
    ),
    flintFifth = daisyFifth.formatMessage(
      echoFifth.chromeThemeBackground,
    ),
    garnetFifth = daisyFifth.formatMessage(
      echoFifth.chromeThemeForeground,
    ),
    hazelFifth = daisyFifth.formatMessage(
      echoFifth.chromeThemeContrast,
    ),
    ivoryFifth = daisyFifth.formatMessage(
      echoFifth.chromeThemeTranslucentSidebar,
    ),
    {
      canImportThemeString,
      codeThemes,
      exportThemeString,
      fonts,
      importThemeString,
      selectedCodeTheme,
      setCodeThemeId,
      setFontsPatch: jasperFifth,
      setThemePatch,
      theme,
    } = AppInitialRn(variant),
    kelpFifth = frameFourth(
      daisyFifth,
      variant,
    ),
    [lotusFifth, novaFifth] =
      gammaFifth.useState(false),
    [oliveFifth, prismFifth] =
      gammaFifth.useState(""),
    quillFifth = [
      {
        ariaLabel: daisyFifth.formatMessage(
          {
            id: "settings.general.appearance.chromeTheme.accent",
            defaultMessage: "{variant} accent color",
            description:
              "Aria label for the accent color input in chrome theme settings",
          },
          {
            variant: kelpFifth,
          },
        ),
        label: emberFifth,
        role: "accent",
      },
      {
        ariaLabel: daisyFifth.formatMessage(
          {
            id: "settings.general.appearance.chromeTheme.surface",
            defaultMessage: "{variant} background color",
            description:
              "Aria label for the background color input in chrome theme settings",
          },
          {
            variant: kelpFifth,
          },
        ),
        label: flintFifth,
        role: "surface",
      },
      {
        ariaLabel: daisyFifth.formatMessage(
          {
            id: "settings.general.appearance.chromeTheme.ink",
            defaultMessage: "{variant} ink color",
            description:
              "Aria label for the ink color input in chrome theme settings",
          },
          {
            variant: kelpFifth,
          },
        ),
        label: garnetFifth,
        role: "ink",
      },
    ],
    reefFifth = [
      {
        ariaLabel: daisyFifth.formatMessage(
          {
            id: "settings.general.appearance.chromeTheme.uiFontFamily",
            defaultMessage: "{variant} UI font",
            description:
              "Aria label for the UI font input in chrome theme settings",
          },
          {
            variant: kelpFifth,
          },
        ),
        key: "ui",
        label: daisyFifth.formatMessage(
          echoFifth.chromeThemeUiFont,
        ),
        placeholder: $r,
      },
    ];
  showCodeFont &&
    reefFifth.push({
      ariaLabel: daisyFifth.formatMessage(
        {
          id: "settings.general.appearance.chromeTheme.codeFontFamily",
          defaultMessage: "{variant} code font",
          description:
            "Aria label for the code font input in chrome theme settings",
        },
        {
          variant: kelpFifth,
        },
      ),
      key: "code",
      label: daisyFifth.formatMessage(
        echoFifth.chromeThemeCodeFont,
      ),
      placeholder: ensureComposerEsm_BU_Init,
    });
  let yarnFifth = (
      nozzleFourth,
      platenFourth,
    ) => {
      switch (nozzleFourth) {
        case "accent":
          setThemePatch({
            accent: platenFourth,
          });
          return;
        case "ink":
          setThemePatch({
            ink: platenFourth,
          });
          return;
        case "surface":
          setThemePatch({
            surface: platenFourth,
          });
          return;
      }
    },
    coralFifth = async () => {
      if (await writeClipboardContents(exportThemeString())) {
        cedarFifth.get(toastAtom).success(
          daisyFifth.formatMessage(
            {
              id: "settings.general.appearance.chromeTheme.export.success",
              defaultMessage: "{variant} theme copied",
              description:
                "Success toast shown after copying a theme share string",
            },
            {
              variant: kelpFifth,
            },
          ),
        );
        return;
      }
    },
    eagleFifth = async () => {
      try {
        let frostFifth = oliveFifth.trim();
        if (!frostFifth) throw Error("Missing theme string");
        await importThemeString(frostFifth);
        novaFifth(false);
        prismFifth("");
        cedarFifth.get(toastAtom).success(
          daisyFifth.formatMessage(
            {
              id: "settings.general.appearance.chromeTheme.import.success",
              defaultMessage: "{variant} theme imported",
              description:
                "Success toast shown after importing a theme share string",
            },
            {
              variant: kelpFifth,
            },
          ),
        );
      } catch {
        cedarFifth.get(toastAtom).danger(
          daisyFifth.formatMessage(
            {
              id: "settings.general.appearance.chromeTheme.import.error",
              defaultMessage: "Couldn’t import {variant} theme",
              description:
                "Error toast shown when importing a theme share string fails",
            },
            {
              variant: kelpFifth,
            },
          ),
        );
      }
    };
  return (
    <GeneralSettingsHelper4
      {...{
title: engineFourth(variant),
        headerControl: (
          <div className="flex items-center gap-2 max-sm:w-full max-sm:flex-wrap max-sm:justify-end">
            {
              <ReadLoginRouteQuerySnapshot
                {...{
                  "aria-label": daisyFifth.formatMessage(
                    {
                      id: "settings.general.appearance.chromeTheme.import.ariaLabel",
                      defaultMessage: "Import {variant} theme",
                      description:
                        "Accessible label for importing a shared light or dark theme string",
                    },
                    {
                      variant: kelpFifth,
                    },
                  ),
                  className: "px-2",
                  color: "ghost",
                  size: "toolbar",
                  onClick: () => {
                    novaFifth(true);
                  },
                  children: (
                    <MemoizedFormattedMessage
                      {...{
                        id: "settings.general.appearance.chromeTheme.import",
                        defaultMessage: "Import",
                        description:
                          "Button label for importing a shared theme string",
                      }}
                    />
                  ),
                }}
              />
            }
            {
              <ReadLoginRouteQuerySnapshot
                {...{
                  "aria-label": daisyFifth.formatMessage(
                    {
                      id: "settings.general.appearance.chromeTheme.export.ariaLabel",
                      defaultMessage: "Copy {variant} theme",
                      description:
                        "Accessible label for copying a shared light or dark theme string",
                    },
                    {
                      variant: kelpFifth,
                    },
                  ),
                  className: "px-2",
                  color: "ghost",
                  size: "toolbar",
                  onClick: () => {
                    coralFifth();
                  },
                  children: (
                    <MemoizedFormattedMessage
                      {...{
                        id: "settings.general.appearance.chromeTheme.export",
                        defaultMessage: "Copy theme",
                        description:
                          "Button label for copying a shared theme string",
                      }}
                    />
                  ),
                }}
              />
            }
            {
              <GeneralSettingsHelper6
                {...{
                  ariaLabel: daisyFifth.formatMessage(
                    {
                      id: "settings.general.appearance.codeTheme",
                      defaultMessage: "{variant} code theme",
                      description:
                        "Aria label for the code theme picker in appearance settings",
                    },
                    {
                      variant: kelpFifth,
                    },
                  ),
                  codeThemes,
                  selectedCodeTheme,
                  theme,
                  variant,
                  onSelect: (alphaFifth) => {
                    setCodeThemeId(alphaFifth).catch(
                      () => undefined,
                    );
                  },
                }}
              />
            }
          </div>
        ),
        children: [
          quillFifth.map((item) => (
            <EnsurePersonalizationCInit
              key={item.role}
              {...{
                size: "compact",
                control: (
                  <GeneralSettingsHelper8
                    {...{
                      ariaLabel: item.ariaLabel,
                      value: theme[item.role],
                      onChange: (bravoFifth) => {
                        yarnFifth(
                          item.role,
                          bravoFifth,
                        );
                      },
                    }}
                  />
                ),
                label: item.label,
              }}
            />
          )),
          reefFifth.map((item) => (
            <EnsurePersonalizationCInit
              key={item.key}
              {...{
                size: "compact",
                control: (
                  <GeneralSettingsHelper12
                    {...{
                      ariaLabel: item.ariaLabel,
                      placeholder: item.placeholder,
                      value: fonts[item.key],
                      onChange: (tappetFourth) => {
                        jasperFifth({
                          [item.key]: tappetFourth,
                        });
                      },
                    }}
                  />
                ),
                label: item.label,
              }}
            />
          )),
          showTranslucentSidebarToggle ? (
            <EnsurePersonalizationCInit
              {...{
                size: "compact",
                control: (
                  <AppInitialYC
                    checked={!theme.opaqueWindows}
                    onChange={(shimFourth) => {
                      setThemePatch({
                        opaqueWindows: !shimFourth,
                      });
                    }}
                    ariaLabel={daisyFifth.formatMessage(
                      {
                        id: "settings.general.appearance.chromeTheme.translucentSidebar",
                        defaultMessage: "{variant} translucent sidebar",
                        description:
                          "Aria label for the translucent sidebar toggle in chrome theme settings",
                      },
                      {
                        variant: kelpFifth,
                      },
                    )}
                  />
                ),
                label: ivoryFifth,
              }}
            />
          ) : null,
          <EnsurePersonalizationCInit
            {...{
              size: "compact",
              control: (
                <GeneralSettingsHelper13
                  {...{
                    ariaLabel: daisyFifth.formatMessage(
                      {
                        id: "settings.general.appearance.chromeTheme.contrast",
                        defaultMessage: "{variant} contrast",
                        description:
                          "Aria label for the contrast slider in chrome theme settings",
                      },
                      {
                        variant: kelpFifth,
                      },
                    ),
                    theme,
                    value: theme.contrast,
                    onChange: (copperFifth) => {
                      setThemePatch({
                        contrast: copperFifth,
                      });
                    },
                  }}
                />
              ),
              label: hazelFifth,
            }}
          />,
          <GeneralSettingsHelper5
            {...{
              exampleValue: exportThemeString(),
              isImportValueValid: canImportThemeString(oliveFifth),
              isOpen: lotusFifth,
              value: oliveFifth,
              variantLabel: kelpFifth,
              onOpenChange: (deltaFifth) => {
                novaFifth(deltaFifth);
                deltaFifth || prismFifth("");
              },
              onSubmit: () => {
                eagleFifth();
              },
              onValueChange: prismFifth,
            }}
          />,
        ],
      }}
    />
  );
}
function GeneralSettingsHelper4(mountFourth) {
  let { title, headerControl, children } = mountFourth,
    zephyrFifth = gammaFifth.useId(),
    acornFifth = <h2 id={zephyrFifth}>{title}</h2>;
  let bloomFifth = (
    <EnsurePersonalizationCInit
      {...{
        control: headerControl,
        label: acornFifth,
      }}
    />
  );
  let driftFifth = (
    <ParseUrlOrFallback
      {...{
        children: [bloomFifth, children],
      }}
    />
  );
  return (
    <section aria-labelledby={zephyrFifth}>
      {driftFifth}
    </section>
  );
}
