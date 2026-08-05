// Restored from ref/webview/assets/appgen-settings-page-8V-xKkmK.js
// Wave FZ — full polished body from `appgen-settings-page-8V-xKkmK/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 76/109).
// AST split — size-gate sibling part-2 b/3
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { ensureReactReduxInit } from "../../boundaries/react-redux-cjs";
import { toastAtom } from "../../boundaries/toast-atom";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { useIntl } from "../../i18n/use-intl";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { keysIn as KeysIn } from "../../vendor/lodash-cjs-predicates";
import { appgenShareDialogT } from "../appgen-share-dialog";
import { AppgenSettingsPageHelper24 } from "./part-2-a";

/** app-initial companion (stub only; never promote) */
const AppInitialG5: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialH5: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialM5: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialPO: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialS5: any = undefined;
/** split companion stub */
const IntlProvider: any = undefined;
/** split companion stub */
const appgen3: any = undefined;
/** split companion stub */
const chatProcessRegister: any = undefined;
/** split companion stub */
const marble: any = undefined;
/** split companion stub */
const nickel: any = undefined;
/** split companion stub */
const timber: any = undefined;
/** split companion stub */
const umbra: any = undefined;
const SetRemoteControlEnabledForHost: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const DeferredUiU: any = undefined;
const At: any = undefined;
const AppInitialUO: any = undefined;

export function AppgenSettingsPageHelper28(indigoPrime: unknown) {
  let {
      accessPolicy,
      defaultDomain,
      embedded,
      environment,
      initialEnvironmentDraft,
      initialTitle,
      onDeleted,
      projectId,
      siteSlug,
      siteTitle,
    } = indigoPrime,
    jadePrime = CodexPluginActionType(appScopeAtom),
    { data } = CodexPluginActionResult(AppInitialM5),
    {
      data: kitePrime,
      isError,
      isLoading,
    } = CodexBrowserSurfaceActionType(AppInitialH5, projectId),
    lemonPrime = CodexBrowserSurfaceActionType(AppInitialS5, projectId),
    marblePrime = CodexBrowserSurfaceActionType(appgen3, projectId),
    nickelPrime = useIntl(),
    onyxPrime =
      initialEnvironmentDraft == null
        ? null
        : {
            baseEnvironment: environment,
            draft: initialEnvironmentDraft,
          };
  let [pearlPrime, quartzPrime] = ivory.useState(onyxPrime),
    [riverPrime, slatePrime] = ivory.useState(initialTitle ?? null),
    [timberPrime, umbraPrime] = ivory.useState(false),
    violetPrime = pearlPrime?.draft ?? marble(environment);
  let willowPrime = violetPrime,
    xenonPrime =
      pearlPrime == null
        ? null
        : nickel(pearlPrime.baseEnvironment, pearlPrime.draft);
  let yellowPrime = xenonPrime,
    zincPrime = timber(riverPrime, siteTitle, timberPrime);
  let { isInvalid, title, update } = zincPrime,
    amberPrime = pearlPrime != null && yellowPrime == null,
    basaltPrime = lemonPrime.isPending || marblePrime.isPending,
    cedarPrime =
      basaltPrime ||
      isInvalid ||
      amberPrime ||
      (update == null && yellowPrime == null),
    daisyPrime = function (mossPrime) {
      quartzPrime((northPrime) => {
        let orbitPrime = northPrime?.baseEnvironment ?? environment,
          pinePrime = marble(orbitPrime),
          questPrime = mossPrime(northPrime?.draft ?? pinePrime);
        return hazel.default(questPrime, pinePrime)
          ? null
          : {
              baseEnvironment: orbitPrime,
              draft: questPrime,
            };
      });
    };
  let emberPrime = daisyPrime,
    flintPrime = embedded ? "gap-[var(--padding-panel)]" : "gap-10",
    garnetPrime = IntlProvider("flex flex-col", flintPrime);
  let hazelPrime = (event) => {
    event.preventDefault();
    !cedarPrime &&
      umbra({
        environmentUpdate: yellowPrime,
        titleUpdate: update,
        updateEnvironment: lemonPrime.mutateAsync,
        updateTitle: marblePrime.mutateAsync,
      }).then((value) => {
        let { environmentSaved, titleSaved } = value;
        titleSaved ? (slatePrime(null), umbraPrime(false)) : umbraPrime(true);
        environmentSaved && quartzPrime(null);
        (!titleSaved || !environmentSaved) &&
          jadePrime.get(toastAtom).danger(
            nickelPrime.formatMessage({
              id: "appgenSettings.save.error",
              defaultMessage: "Unable to save site settings",
              description: "Error toast shown when saving site settings fails",
            }),
          );
      });
  };
  let ivoryPrime = (
    <UseChromeAndCodeThemeSync.Header
      {...{
        title: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.general.title",
              defaultMessage: "General",
              description:
                "Section heading for general Site information on the Site settings page",
            }}
          />
        ),
        subtitle: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.general.description",
              defaultMessage:
                "Settings your site uses while it runs, like URLs, names, or feature switches",
              description:
                "Help text below the General section heading on the Site settings page",
            }}
          />
        ),
      }}
    />
  );
  let jasperPrime, kelpPrime;
  jasperPrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.general.title.label",
        defaultMessage: "Name",
        description:
          "Short label for the editable Site title field on the Site settings page",
      }}
    />
  );
  kelpPrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.general.title.description",
        defaultMessage: "Name for your site",
        description:
          "Help text for the editable Site title field on the Site settings page",
      }}
    />
  );
  let lotusPrime = nickelPrime.formatMessage({
    id: "appgenSettings.general.title.ariaLabel",
    defaultMessage: "Site title",
    description:
      "Accessible label for the Site title text input on the Site settings page",
  });
  let mintPrime = isInvalid ? $t : undefined,
    novaPrime = (event) => {
      umbraPrime(false);
      slatePrime(event.target.value === siteTitle ? null : event.target.value);
    };
  let olivePrime = () => {
    !timberPrime && riverPrime?.trim() === siteTitle && slatePrime(null);
  };
  let prismPrime = (
    <EnsurePersonalizationCInit
      {...{
        className: "max-sm:flex-col max-sm:items-stretch",
        label: jasperPrime,
        description: kelpPrime,
        control: (
          <input
            aria-label={lotusPrime}
            aria-describedby={mintPrime}
            aria-invalid={isInvalid}
            className="w-56 max-w-full cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40"
            disabled={basaltPrime}
            maxLength={100}
            type="text"
            value={title}
            onChange={novaPrime}
            onBlur={olivePrime}
          />
        ),
      }}
    />
  );
  let quillPrime =
    data === true ? (
      <At
        {...{
          customDomains: kitePrime,
          defaultDomain,
          isError,
          isLoading,
          projectId,
        }}
      />
    ) : null;
  let reefPrime = (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          ivoryPrime,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: [prismPrime, quillPrime],
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  );
  let _e =
    accessPolicy == null ? null : (
      <AppgenSettingsPageHelper29
        {...{
          accessPolicy,
          projectId,
        }}
      />
    );
  let sagePrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.environmentVariables.add",
        defaultMessage: "Add variable",
        description: "Button label to add a site environment variable",
      }}
    />
  );
  let be, topazPrime;
  be = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.environmentVariables.description",
        defaultMessage:
          "Settings your site uses while it runs, like URLs, names, or feature switches",
        description: "Description for site environment variable settings",
      }}
    />
  );
  topazPrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.environmentVariables.title",
        defaultMessage: "Environment variables",
        description: "Heading for site environment variable settings",
      }}
    />
  );
  let ultraPrime = (ridgePrime) => {
    emberPrime((stormPrime) => ({
      ...stormPrime,
      environmentVariables: ridgePrime,
    }));
  };
  let vaporPrime = (
    <AppgenSettingsPageHelper24
      {...{
        addButtonLabel: sagePrime,
        disabled: basaltPrime,
        entries: willowPrime.environmentVariables,
        subtitle: be,
        title: topazPrime,
        valueInputType: "text",
        onChange: ultraPrime,
      }}
    />
  );
  let wheatPrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.secrets.add",
        defaultMessage: "Add secret",
        description: "Button label to add a site secret",
      }}
    />
  );
  let yarnPrime, zephyrPrime;
  yarnPrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.secrets.description",
        defaultMessage: "Sensitive setup info, like keys and passwords",
        description: "Description for site secret settings",
      }}
    />
  );
  zephyrPrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.secrets.title",
        defaultMessage: "Secrets",
        description: "Heading for site secret settings",
      }}
    />
  );
  let acornPrime = (tidePrime) => {
    emberPrime((unityPrime) => ({
      ...unityPrime,
      secrets: tidePrime,
    }));
  };
  let bloomPrime = (
    <AppgenSettingsPageHelper24
      {...{
        addButtonLabel: wheatPrime,
        disabled: basaltPrime,
        entries: willowPrime.secrets,
        subtitle: yarnPrime,
        title: zephyrPrime,
        valueInputType: "password",
        onChange: acornPrime,
      }}
    />
  );
  let coralPrime = (
    <UseChromeAndCodeThemeSync.Header
      {...{
        title: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.danger.title",
              defaultMessage: "Danger zone",
              description: "Heading for destructive site actions",
            }}
          />
        ),
      }}
    />
  );
  let driftPrime, eaglePrime;
  driftPrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.danger.delete.label",
        defaultMessage: "Delete site",
        description: "Label for the delete site action",
      }}
    />
  );
  eaglePrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.danger.delete.description",
        defaultMessage: "Permanently delete this site",
        description: "Description for the delete site action",
      }}
    />
  );
  let frostPrime = () => {
    chatProcessRegister(jadePrime, ember, {
      onDeleted,
      projectId,
      siteSlug,
      siteTitle,
    });
  };
  let glidePrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.danger.delete.button",
        defaultMessage: "Delete site",
        description: "Delete site button label",
      }}
    />
  );
  let honeyPrime = (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          coralPrime,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: (
                      <EnsurePersonalizationCInit
                        {...{
                          label: driftPrime,
                          description: eaglePrime,
                          control: (
                            <ReadLoginRouteQuerySnapshot
                              {...{
                                color: "danger",
                                size: "toolbar",
                                type: "button",
                                onClick: frostPrime,
                                children: glidePrime,
                              }}
                            />
                          ),
                        }}
                      />
                    ),
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  );
  let irisPrime = isInvalid ? (
    <p id={$t} className="text-sm text-token-charts-red" role="alert">
      {
        <MemoizedFormattedMessage
          {...{
            id: "appgenSettings.general.title.required",
            defaultMessage: "Site title is required",
            description:
              "Inline validation message below the Site settings form when the Site title is empty",
          }}
        />
      }
    </p>
  ) : amberPrime ? (
    <p className="text-sm text-token-charts-red" role="alert">
      {
        <MemoizedFormattedMessage
          {...{
            id: "appgenSettings.environmentKeys.duplicate",
            defaultMessage:
              "Keys must be unique across environment variables and secrets",
            description:
              "Validation shown when site environment settings use a duplicate key",
          }}
        />
      }
    </p>
  ) : null;
  let jewelPrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.save",
        defaultMessage: "Save",
        description: "Button for saving site settings",
      }}
    />
  );
  let knollPrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        className: "ml-auto",
        disabled: cedarPrime,
        loading: basaltPrime,
        size: "toolbar",
        type: "submit",
        children: jewelPrime,
      }}
    />
  );
  let lunarPrime = (
    <div className="flex items-center justify-between gap-4 px-4 py-3">
      {irisPrime}
      {knollPrime}
    </div>
  );
  return (
    <form className={garnetPrime} onSubmit={hazelPrime}>
      {reefPrime}
      {_e}
      {vaporPrime}
      {bloomPrime}
      {honeyPrime}
      {lunarPrime}
    </form>
  );
}

function AppgenSettingsPageHelper29(valePrime) {
  let { accessPolicy, projectId } = valePrime,
    wavePrime = CodexPluginActionType(appScopeAtom),
    apexPrime,
    brookPrime,
    cliffPrime,
    duskPrime,
    elmPrime,
    fernPrime,
    grovePrime,
    hillPrime,
    islePrime,
    juniperPrime,
    lagoonPrime;
  fernPrime = AppInitialPO(accessPolicy);
  elmPrime = UseChromeAndCodeThemeSync;
  lagoonPrime = (
    <UseChromeAndCodeThemeSync.Header
      {...{
        title: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.sharing.title",
              defaultMessage: "Sharing",
              description: "Heading for site sharing settings",
            }}
          />
        ),
      }}
    />
  );
  duskPrime = UseChromeAndCodeThemeSync.Content;
  cliffPrime = ParseUrlOrFallback;
  brookPrime = EnsurePersonalizationCInit;
  juniperPrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.sharing.label",
        defaultMessage: "Sharing",
        description: "Label for site sharing settings",
      }}
    />
  );
  hillPrime = "flex items-center gap-1";
  islePrime = (
    <KeysIn
      {...{
        "aria-hidden": true,
        accessPolicy,
        className: "icon-2xs shrink-0",
      }}
    />
  );
  apexPrime = MemoizedFormattedMessage;
  grovePrime = ensureReactReduxInit(fernPrime);
  let meadowPrime = (
    <MemoizedFormattedMessage
      {...{
        ...grovePrime,
        values: fernPrime,
      }}
    />
  );
  let nestPrime = (
    <span className={hillPrime}>
      {islePrime}
      {meadowPrime}
    </span>
  );
  let oakPrime = () =>
    chatProcessRegister(wavePrime, appgenShareDialogT, {
      projectId,
    });
  let petalPrime, quietPrime;
  quietPrime = <AppInitialUO aria-hidden={true} className="icon-xs" />;
  petalPrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.sharing.button",
        defaultMessage: "Share settings",
        description: "Sharing settings button label",
      }}
    />
  );
  let rainPrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "outline",
        size: "toolbar",
        onClick: oakPrime,
        children: [quietPrime, petalPrime],
      }}
    />
  );
  let seedPrime = (
    <MemoizedFormattedMessage
      {...{
        label: juniperPrime,
        description: nestPrime,
        control: rainPrime,
      }}
    />
  );
  let trailPrime = (
    <MemoizedFormattedMessage
      {...{
        children: seedPrime,
      }}
    />
  );
  let urnPrime = (
    <MemoizedFormattedMessage
      {...{
        children: trailPrime,
      }}
    />
  );
  return (
    <MemoizedFormattedMessage
      {...{
        children: [lagoonPrime, urnPrime],
      }}
    />
  );
}

function ember(vinePrime) {
  let { onClose, onDeleted, projectId, siteSlug, siteTitle } = vinePrime,
    windPrime = CodexPluginActionType(appScopeAtom),
    yarrowPrime = CodexBrowserSurfaceActionType(AppInitialG5, projectId),
    azurePrime = useIntl(),
    [birchPrime, canyonPrime] = ivory.useState(""),
    dewPrime = (
      <MemoizedFormattedMessage
        {...{
          id: "appgenSettings.deleteDialog.title",
          defaultMessage: "Delete {siteTitle}?",
          description: "Title for dialog confirming deletion of a site",
          values: {
            siteTitle,
          },
        }}
      />
    );
  let everPrime = dewPrime,
    fieldPrime = yarrowPrime.isPending,
    grainPrime = !yarrowPrime.isPending,
    havenPrime = (wispPrime) => {
      !wispPrime && !yarrowPrime.isPending && onClose();
    };
  let inkPrime = (event) => {
    event.preventDefault();
    !(birchPrime !== siteSlug || yarrowPrime.isPending) &&
      yarrowPrime.mutateAsync().then(
        () => {
          windPrime.get(toastAtom).success(
            azurePrime.formatMessage({
              id: "appgenSettings.deleteDialog.success",
              defaultMessage: "Site deleted",
              description: "Success toast shown after deleting a site",
            }),
          );
          onClose();
          onDeleted();
        },
        () => {
          windPrime.get(toastAtom).danger(
            azurePrime.formatMessage({
              id: "appgenSettings.deleteDialog.error",
              defaultMessage: "Unable to delete site",
              description: "Error toast shown when deleting a site fails",
            }),
          );
        },
      );
  };
  let jadeitePrime = (
    <RealtimeVoiceHostId
      {...{
        className: "contents",
        children: everPrime,
      }}
    />
  );
  let kernelPrime = (
    <IsStartingProcessExpired
      {...{
        className: "contents",
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.deleteDialog.subtitle",
              defaultMessage:
                "Deleting your site will take it offline permanently and delete any data users have uploaded. Please type <strong>{siteSlug}</strong> below:",
              description: "Subtitle for dialog confirming deletion of a site",
              values: {
                siteSlug,
                strong: flint,
              },
            }}
          />
        ),
      }}
    />
  );
  let leafPrime = (
    <div className="flex w-full flex-col">
      {
        <DeferredUiH
          {...{
            title: jadeitePrime,
            titleClassName: "truncate pr-8",
            subtitle: kernelPrime,
          }}
        />
      }
    </div>
  );
  let maplePrime = azurePrime.formatMessage({
    id: "appgenSettings.deleteDialog.slugInputLabel",
    defaultMessage: "Site slug",
    description:
      "Accessible label for the site slug input used to confirm site deletion",
  });
  let nimbusPrime = (event) => {
    canyonPrime(event.target.value);
  };
  let opalPrime = (
    <DeferredUiU
      {...{
        children: (
          <input
            aria-label={maplePrime}
            autoFocus={true}
            className="w-full min-w-0 cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 font-mono text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40"
            disabled={yarrowPrime.isPending}
            placeholder={siteSlug}
            spellCheck={false}
            type="text"
            value={birchPrime}
            onChange={nimbusPrime}
          />
        ),
      }}
    />
  );
  let plumePrime = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.deleteDialog.cancel",
        defaultMessage: "Cancel",
        description: "Cancel button label for delete site confirmation dialog",
      }}
    />
  );
  let quillowPrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "ghost",
        disabled: yarrowPrime.isPending,
        type: "button",
        onClick: onClose,
        children: plumePrime,
      }}
    />
  );
  let rootPrime = birchPrime !== siteSlug || yarrowPrime.isPending,
    silkPrime = (
      <MemoizedFormattedMessage
        {...{
          id: "appgenSettings.deleteDialog.confirm",
          defaultMessage: "Permanently delete",
          description:
            "Confirm button label for delete site confirmation dialog",
        }}
      />
    );
  let thornPrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "danger",
        disabled: rootPrime,
        loading: yarrowPrime.isPending,
        type: "submit",
        children: silkPrime,
      }}
    />
  );
  let uplandPrime = (
    <DeferredUiU
      {...{
        children: (
          <SetRemoteControlEnabledForHost
            {...{
              children: [quillowPrime, thornPrime],
            }}
          />
        ),
      }}
    />
  );
  let vistaPrime = (
    <DeferredUiB
      {...{
        as: "form",
        className: "gap-4 px-4 py-3",
        onSubmit: inkPrime,
        children: [leafPrime, opalPrime, uplandPrime],
      }}
    />
  );
  return (
    <UsePointerSurfaceInteractionGate
      {...{
        open: true,
        size: "compact",
        shouldIgnoreClickOutside: fieldPrime,
        showDialogClose: grainPrime,
        onOpenChange: havenPrime,
        children: vistaPrime,
      }}
    />
  );
}

function flint(yonderPrime) {
  return <strong>{yonderPrime}</strong>;
}

var garnet, hazel, ivory, $, $t;
