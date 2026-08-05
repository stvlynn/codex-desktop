// Restored from ref/webview/assets/general-settings-DaCT8Zmh.js
// Split companion residue for general-settings part-2.
/** split companion stub */
const falconFifth: any = undefined;
/** split companion stub */
const jacketFourth: any = undefined;

/** app-initial companion (stub only; never promote) */
const AppInitialAn: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialBC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialDC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialFC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialLW: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialLn: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialOC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialTo: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVC: any = undefined;
/** split companion stub */
const CodexPluginActionResult: any = undefined;
/** split companion stub */
const CodexPluginActionType: any = undefined;
/** split companion stub */
const DEVELOPERS_OPENAI_COM_CODEX_CONFIG_BASIC_URL: any = undefined;
/** split companion stub */
const EnsurePersonalizationCInit: any = undefined;
/** split companion stub */
const GeneralSettingsHelper23: any = undefined;
/** split companion stub */
const LOCAL_HOST_ID: any = undefined;
/** split companion stub */
const MemoizedFormattedMessage: any = undefined;
/** split companion stub */
const ParseUrlOrFallback: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialYC: any = undefined;
/** split companion stub */
const ReferralInviteEligibility: any = undefined;
/** split companion stub */
const ReferralInviteTracking: any = undefined;
/** split companion stub */
const TransactionEventPlugin: any = undefined;
/** split companion stub */
const UseChromeAndCodeThemeSync: any = undefined;
/** split companion stub */
const appScopeAtom: any = undefined;
/** split companion stub */
const codexCommandTheme: any = undefined;
/** split companion stub */
const commonJsInit: any = undefined;
/** split companion stub */
const context: any = undefined;
/** split companion stub */
const deferredConversationN: any = undefined;
/** split companion stub */
const deferredRv: any = undefined;
/** split companion stub */
const deferredUiU: any = undefined;
/** split companion stub */
const ensureAppScopeInit: any = undefined;
/** split companion stub */
const ensureCodeThemeRegistryInit: any = undefined;
/** split companion stub */
const ensureComposerEsm_F7_Init: any = undefined;
/** split companion stub */
const ensureComposerEsm_FH_Init: any = undefined;
/** split companion stub */
const ensureComposerEsm_Ilt_Init: any = undefined;
/** split companion stub */
const ensureComposerEsm_MT_Init: any = undefined;
/** split companion stub */
const ensureDropdownMenuInit: any = undefined;
/** split companion stub */
const ensureDropdownMenuPopoverInit: any = undefined;
/** split companion stub */
const ensureIntlFormattersInit: any = undefined;
/** split companion stub */
const ensureSettingsGlyphNltInit: any = undefined;
/** split companion stub */
const ensureSettingsQueryAtomsInit: any = undefined;
/** split companion stub */
const ensureSettingsSectionTitleInit: any = undefined;
/** split companion stub */
const esmInit: any = undefined;
/** split companion stub */
const findProcessManagerRow: any = undefined;
/** split companion stub */
const verge: any = undefined;
/** split companion stub */
const bolt: any = undefined;
/** split companion stub */
const macOS5: any = undefined;
/** split companion stub */
const parseDiffFromFile: any = undefined;
/** split companion stub */
const react: any = undefined;
/** split companion stub */
const reactCompilerRuntime: any = undefined;
/** split companion stub */
const resolveDefaultAgentMode: any = undefined;
/** split companion stub */
const resolveGuardianApprovalWorkspaceWriteMode: any = undefined;
/** split companion stub */
const serializeCharacterReferenceNode: any = undefined;
/** split companion stub */
const setKeyedStoreAtomValueXU: any = undefined;
/** split companion stub */
const ui: any = undefined;
/** split companion stub */
const useConversationHostFeatureFlags: any = undefined;
/** split companion stub */
const useIntl: any = undefined;
/** split companion stub */
const useOpenLocatorInMainWindow: any = undefined;

function alpha(event) {
  event.preventDefault();
}
function bravo(event) {
  event.stopPropagation();
}
function copper(event) {
  event.stopPropagation();
}
function GeneralSettingsHelper12(umbra) {
  let { ariaLabel, placeholder, value = "", onChange } = umbra,
    violet = `${ariaLabel}:${value ?? ""}`,
    willow,
    xenon;
  willow = (event) => {
    let yellow = event.currentTarget.value.trim();
    event.currentTarget.value = yellow;
    onChange(yellow.length > 0 ? yellow : null);
  };
  xenon = (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    let zinc = event.currentTarget.value.trim();
    event.currentTarget.value = zinc;
    onChange(zinc.length > 0 ? zinc : null);
  };
  return (
    <input
      key={violet}
      aria-label={ariaLabel}
      className="focus-visible:ring-token-focus h-7 w-full max-w-[8.5rem] rounded-lg border border-token-border bg-token-input-background px-2 text-xs text-token-text-primary shadow-sm outline-none focus-visible:ring-2 max-sm:max-w-none"
      defaultValue={value}
      placeholder={placeholder}
      spellCheck={false}
      type="text"
      onBlur={willow}
      onKeyDown={xenon}
    />
  );
}
function GeneralSettingsHelper13(amber) {
  let { ariaLabel, theme, value, onChange } = amber,
    basalt = (event) => {
      onChange(Number(event.target.value));
    };
  let cedar = `linear-gradient(90deg, color-mix(in srgb, ${theme.accent} 35%, ${theme.surface}) 0%, ${theme.accent} 32%, ${theme.accent} 100%)`,
    daisy = {
      background: cedar,
      color: "var(--color-token-foreground)",
    };
  let ember = (
    <input
      aria-label={ariaLabel}
      className="h-0.5 flex-1 appearance-none rounded-full [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-transparent [&::-moz-range-thumb]:bg-current [&::-moz-range-thumb]:shadow-sm [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-transparent [&::-webkit-slider-thumb]:bg-current [&::-webkit-slider-thumb]:shadow-sm"
      max={100}
      min={0}
      onChange={basalt}
      step={1}
      style={daisy}
      type="range"
      value={value}
    />
  );
  let flint = (
    <span className="w-9 text-right text-sm text-token-text-primary tabular-nums">
      {value}
    </span>
  );
  return (
    <div className="flex h-9 min-w-[12rem] items-center gap-2.5 max-sm:w-full max-sm:min-w-0">
      {ember}
      {flint}
    </div>
  );
}
function delta(garnet) {
  return garnet === "light" ? (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.appearance.lightChromeTheme",
        defaultMessage: "Light theme",
        description:
          "Label for light chrome theme controls in appearance settings",
      }}
    />
  ) : (
    <MemoizedFormattedMessage
      {...{
        id: "settings.general.appearance.darkChromeTheme",
        defaultMessage: "Dark theme",
        description:
          "Label for dark chrome theme controls in appearance settings",
      }}
    />
  );
}
function echo(hazel, ivory) {
  return ivory === "light"
    ? hazel.formatMessage({
        id: "settings.general.appearance.theme.light",
        defaultMessage: "Light",
        description: "Light theme option",
      })
    : hazel.formatMessage({
        id: "settings.general.appearance.theme.dark",
        defaultMessage: "Dark",
        description: "Dark theme option",
      });
}
function falcon(jasper) {
  let kelp = indigo(jasper);
  return kelp == null ||
    (kelp.red * 0.2126 + kelp.green * 0.7152 + kelp.blue * 0.0722) / 255 > 0.62
    ? "#101010"
    : "#ffffff";
}
function gamma(lotus) {
  let mint = lotus
    .toUpperCase()
    .replace(/[^0-9A-F#]/g, "")
    .replaceAll("#", "");
  return mint.length === 0 ? "#" : `#${mint.slice(0, 6)}`;
}
function harbor(nova) {
  return /^#[0-9A-F]{6}$/.test(nova) ? nova.toLowerCase() : null;
}
function indigo(olive) {
  return /^#[0-9a-fA-F]{6}$/.test(olive)
    ? {
        blue: Number.parseInt(olive.slice(5, 7), 16),
        green: Number.parseInt(olive.slice(3, 5), 16),
        red: Number.parseInt(olive.slice(1, 3), 16),
      }
    : null;
}
var jade,
  kite,
  lemon,
  marble,
  nickel,
  $r,
  onyx,
  pearl = esmInit(() => {
    jade = reactCompilerRuntime();
    TransactionEventPlugin();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    kite = commonJsInit(react(), 1);
    AppInitialTo();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureDropdownMenuInit();
    context();
    deferredConversationN();
    ensureComposerEsm_Ilt_Init();
    AppInitialBC();
    macOS5();
    ensureDropdownMenuPopoverInit();
    ensureAppScopeInit();
    setKeyedStoreAtomValueXU();
    falconFifth();
    AppInitialVC();
    ensureSettingsSectionTitleInit();
    AppInitialFC();
    ensureComposerEsm_F7_Init();
    AppInitialLW();
    ensureCodeThemeRegistryInit();
    codexCommandTheme();
    deferredUiU();
    ensureComposerEsm_FH_Init();
    AppInitialLn();
    marble =
      'const themePreview: ThemeConfig = {\n  surface: "sidebar",\n  accent: "#2563eb",\n  contrast: 42,\n};\n';
    nickel =
      'const themePreview: ThemeConfig = {\n  surface: "sidebar-elevated",\n  accent: "#0ea5e9",\n  contrast: 68,\n};\n';
    $r = '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    onyx = parseDiffFromFile(
      {
        name: "src/theme-preview.ts",
        contents: marble,
      },
      {
        name: "src/theme-preview.ts",
        contents: nickel,
      },
    );
  });
function quartz(prism) {
  return AppInitialDC(prism, DEVELOPERS_OPENAI_COM_CODEX_CONFIG_BASIC_URL);
}
var river,
  slate = esmInit(() => {
    findProcessManagerRow();
    AppInitialOC();
    river = "71832722";
  });
function GeneralSettingsHelper21() {
  let quill = CodexPluginActionType(appScopeAtom),
    reef = useIntl(),
    [sage, topaz] = ui.useState(false),
    ultra = CodexPluginActionResult(ReferralInviteEligibility),
    vapor = deferredRv(ultra);
  let wheat = vapor,
    yarn = {
      conversationId: null,
      hostId: LOCAL_HOST_ID,
    };
  let zephyr = useConversationHostFeatureFlags(yarn),
    acorn;
  {
    let dusk = resolveDefaultAgentMode(zephyr);
    acorn = resolveGuardianApprovalWorkspaceWriteMode({
      ...zephyr,
      defaultWorkspaceWriteMode: dusk,
    });
  }
  let { showGuardianOption } = acorn,
    { value } = ensureSettingsGlyphNltInit(river),
    bloom,
    coral,
    drift,
    eagle,
    frost,
    glide,
    honey,
    iris,
    jewel,
    knoll,
    lunar,
    moss,
    north,
    orbit;
  {
    frost = quartz(value);
    let elm;
    elm = (isle, juniper) => {
      quill.set(ReferralInviteEligibility, (lagoon) =>
        ReferralInviteTracking({
          mode: isle,
          visible: juniper,
          settings: lagoon,
        }),
      );
    };
    glide = elm;
    eagle = UseChromeAndCodeThemeSync;
    iris = (
      <UseChromeAndCodeThemeSync.Header
        {...{
          title: (
            <MemoizedFormattedMessage
              {...{
                ...AppInitialAn.permissions,
              }}
            />
          ),
        }}
      />
    );
    drift = ParseUrlOrFallback;
    let fern, grove;
    fern = (
      <MemoizedFormattedMessage
        {...{
          ...AppInitialAn.defaultPermissions,
        }}
      />
    );
    grove = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.agent.permissionsMode.default.description",
          defaultMessage:
            "By default, ChatGPT can read and edit files in its workspace. It can ask for additional access when needed",
          description: "Description for default permissions mode",
        }}
      />
    );
    let hill;
    hill = reef.formatMessage({
      id: "settings.agent.permissionsMode.default.toggle",
      defaultMessage: "Default permissions are always shown",
      description: "Accessible label for disabled default permissions toggle",
    });
    orbit = (
      <EnsurePersonalizationCInit
        {...{
          label: fern,
          description: grove,
          control: (
            <AppInitialYC
              checked={true}
              disabled={true}
              onChange={timber}
              ariaLabel={hill}
            />
          ),
        }}
      />
    );
    honey = showGuardianOption && (
      <EnsurePersonalizationCInit
        {...{
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.agent.permissionsMode.autoReview.title",
                defaultMessage: "Auto-review",
                description:
                  "Title for the Auto-review composer visibility row",
              }}
            />
          ),
          description: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.agent.permissionsMode.autoReview.description",
                defaultMessage:
                  "ChatGPT can read and edit files in its workspace. ChatGPT automatically reviews requests for additional access. Auto-review can make mistakes. <a>Learn more</a> about elevated risks.",
                description: "Description for Auto-review permissions mode",
                values: {
                  a: jacketFourth(
                    "https://developers.openai.com/codex/concepts/sandboxing/auto-review",
                  ),
                },
              }}
            />
          ),
          control: (
            <AppInitialYC
              checked={wheat["guardian-approvals"]}
              onChange={(meadow) => {
                glide("guardian-approvals", meadow);
              }}
              ariaLabel={reef.formatMessage({
                id: "settings.agent.permissionsMode.autoReview.toggle",
                defaultMessage: "Show Auto-review in the composer",
                description:
                  "Accessible label for Auto-review visibility toggle",
              })}
            />
          ),
        }}
      />
    );
    coral = EnsurePersonalizationCInit;
    north = (
      <MemoizedFormattedMessage
        {...{
          ...AppInitialAn.fullAccess,
        }}
      />
    );
    bloom = MemoizedFormattedMessage;
    knoll = "settings.agent.permissionsMode.fullAccess.description";
    lunar =
      "When ChatGPT runs with full access, it can edit any file on your computer and run commands with network, without your approval. This significantly increases the risk of data loss, leaks, or unexpected behavior. <a>Learn more</a> about elevated risks.";
    moss = "Description for full access permissions mode";
    jewel = jacketFourth(frost);
  }
  let pine = {
    a: jewel,
  };
  let quest = (
    <MemoizedFormattedMessage
      {...{
        id: knoll,
        defaultMessage: lunar,
        description: moss,
        values: pine,
      }}
    />
  );
  let ridge = wheat["full-access"],
    storm = (nest) => {
      if (nest) {
        topaz(true);
        return;
      }
      glide("full-access", false);
    };
  let tide = reef.formatMessage({
    id: "settings.agent.permissionsMode.fullAccess.toggle",
    defaultMessage: "Show Full access in the composer",
    description: "Accessible label for full access visibility toggle",
  });
  let unity = (
    <AppInitialYC checked={ridge} onChange={storm} ariaLabel={tide} />
  );
  let vale = (
    <EnsurePersonalizationCInit
      {...{
        label: north,
        description: quest,
        control: unity,
      }}
    />
  );
  let wave = (
    <ParseUrlOrFallback
      {...{
        children: [orbit, honey, vale],
      }}
    />
  );
  let apex = (
    <UseChromeAndCodeThemeSync
      {...{
        children: [iris, wave],
      }}
    />
  );
  let brook = () => {
    glide("full-access", true);
    topaz(false);
  };
  let cliff = (
    <GeneralSettingsHelper23
      {...{
        open: sage,
        onOpenChange: topaz,
        onConfirm: brook,
        permissionsLearnMoreUrl: frost,
      }}
    />
  );
  return (
    <>
      {apex}
      {cliff}
    </>
  );
}
function timber() {}
