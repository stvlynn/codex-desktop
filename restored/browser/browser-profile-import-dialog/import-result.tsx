// Restored from ref/webview/assets/browser-profile-import-dialog-v_lwnIpS.js
// Wave FZ — full polished body from `browser-profile-import-dialog-v_lwnIpS/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 22 (verified 44/65).
// Careful split: module + bridges
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { writeCodexThreadDeeplink as WriteCodexThreadDeeplink } from "../../clipboard/write-codex-thread-deeplink";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { writeHooksStateMutationAtom as WriteHooksStateMutationAtom } from "../../settings/hooks-query-atoms";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import {
  AppInitialZ,
  DeferredUiU,
  ReadLoginRouteQuerySnapshot,
  RealtimeVoiceHostId,
  SetRemoteControlEnabledForHost,
} from "./dialog-companion-stubs";
import {
  BrowserProfileImportCookiesIcon as _e,
  Delta,
  echo,
  nickel,
} from "./dialog-shared-state";

export function BrowserProfileImportDialogHelper6(hill: any) {
  let {
      cookieAccessFailureMessage,
      showCloseBrowserGuidance,
      result,
      onDone,
      onTryAgain,
    } = hill,
    isle = result.cookies?.status === "failed_to_copy",
    juniper = kite(result.cookies);
  let lagoon = juniper,
    meadow =
      lagoon &&
      ((result.cookies?.imported ?? 0) > 0 ||
        result.cookies?.status === "partial-success"),
    nest = result.passwords?.profile,
    oak = result.passwords?.account,
    petal,
    quiet;
  petal = [result.passwords, nest, oak];
  quiet = petal.some(kite);
  let rain = quiet,
    seed = petal.some(harbor),
    trail = rain && petal.some(gamma);
  let urn = trail,
    vine = lagoon || rain,
    wind = onTryAgain == null ? nickel.complete : nickel.failed,
    yarrow = (
      <RealtimeVoiceHostId
        {...{
          asChild: true,
          children: (
            <h2 className="sr-only">
              {
                <MemoizedFormattedMessage
                  {...{
                    ...wind,
                  }}
                />
              }
            </h2>
          ),
        }}
      />
    );
  let azure = vine ? "sr-only" : undefined,
    birch = (
      <MemoizedFormattedMessage
        {...{
          ...wind,
        }}
      />
    );
  let canyon = (
    <IsStartingProcessExpired
      {...{
        asChild: true,
        children: (
          <div>
            {vine ? (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.browserUse.profileImport.partialDescription",
                  defaultMessage:
                    "Review the import status for each browser data type",
                  description:
                    "Accessible description for a browser data import with one or more failed data types",
                }}
              />
            ) : (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.browserUse.profileImport.completeDescription",
                  defaultMessage:
                    "Your data is now available in the built-in browser",
                  description:
                    "Description shown after browser data import completes",
                }}
              />
            )}
          </div>
        ),
      }}
    />
  );
  let dew = (
    <DeferredUiH
      {...{
        subtitleClassName: azure,
        title: birch,
        subtitle: canyon,
      }}
    />
  );
  let ever = (
    <DeferredUiU
      {...{
        children: [yarrow, dew],
      }}
    />
  );
  let field = result.passwords != null && (
    <BrowserProfileImportDialogHelper12
      {...{
        failureMessage: rain ? (
          <BrowserProfileImportDialogHelper10
            {...{
              accessFailed: seed,
              partiallyFailed: urn,
            }}
          />
        ) : undefined,
        kind: "passwords",
      }}
    />
  );
  let grain = result.cookies != null && (
    <BrowserProfileImportDialogHelper12
      {...{
        failureMessage: lagoon ? (
          <BrowserProfileImportDialogHelper9
            {...{
              accessFailed: isle,
              showCloseBrowserGuidance,
              message: cookieAccessFailureMessage,
              partiallyFailed: meadow,
              source: result.source,
            }}
          />
        ) : undefined,
        kind: "cookies",
      }}
    />
  );
  let haven = (
    <DeferredUiU
      {...{
        children: (
          <ParseUrlOrFallback
            {...{
              children: [field, grain],
            }}
          />
        ),
      }}
    />
  );
  let ink = onTryAgain != null && (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "secondary",
        onClick: onDone,
        type: "button",
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.profileImport.dismiss",
              defaultMessage: "Dismiss",
              description:
                "Button that closes a failed browser data import result",
            }}
          />
        ),
      }}
    />
  );
  let jadeite = onTryAgain ?? onDone,
    kernel = onTryAgain == null ? nickel.done : nickel.retry,
    leaf = (
      <MemoizedFormattedMessage
        {...{
          ...kernel,
        }}
      />
    );
  let maple = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "primary",
        onClick: jadeite,
        type: "button",
        children: leaf,
      }}
    />
  );
  let nimbus = (
    <DeferredUiU
      {...{
        children: (
          <SetRemoteControlEnabledForHost
            {...{
              className: AppInitialZ,
              expandSingleButton: false,
              children: [ink, maple],
            }}
          />
        ),
      }}
    />
  );
  return (
    <DeferredUiB
      {...{
        children: [ever, haven, nimbus],
      }}
    />
  );
}
function gamma(opal) {
  return (
    (opal?.imported ?? 0) > 0 ||
    opal?.status === "success" ||
    opal?.status === "partial-success"
  );
}
function harbor(plume) {
  return plume?.status === "failed_to_copy";
}
function BrowserProfileImportDialogHelper9(quillow) {
  let {
    accessFailed,
    showCloseBrowserGuidance,
    message,
    partiallyFailed,
    source,
  } = quillow;
  if (accessFailed) {
    if (message != null) {
      let root;
      return <>{message}</>;
    }
    if (!showCloseBrowserGuidance) {
      let silk;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.browserUse.profileImport.cookieAccessError",
            defaultMessage:
              "ChatGPT couldn’t access this profile’s cookies. A device security policy may be blocking access",
            description:
              "Error shown when device security may have blocked access to cookies during browser profile import",
          }}
        />
      );
    }
    switch (source) {
      case "chrome": {
        let thorn;
        return (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.profileImport.chromeCookieAccessError",
              defaultMessage:
                "ChatGPT couldn’t access this profile’s cookies. Chrome may still be running in the background. Close Chrome completely and try again. A device security policy may also block access",
              description:
                "Error shown when Chrome or device security may have blocked access to cookies during browser profile import",
            }}
          />
        );
      }
      case "atlas": {
        let upland;
        return (
          <MemoizedFormattedMessage
            {...{
              id: "settings.browserUse.profileImport.atlasCookieAccessError",
              defaultMessage:
                "ChatGPT couldn’t access this profile’s cookies. Atlas may still be running in the background. Close Atlas completely and try again. A device security policy may also block access",
              description:
                "Error shown when Atlas or device security may have blocked access to cookies during browser profile import",
            }}
          />
        );
      }
    }
  }
  if (partiallyFailed) {
    let vista;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "settings.browserUse.profileImport.cookiesPartialError",
          defaultMessage: "Some cookies couldn’t be imported",
          description:
            "Error shown when some cookies could not be imported from a browser profile",
        }}
      />
    );
  }
  return (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.profileImport.cookiesError",
        defaultMessage: "Cookies couldn’t be imported",
        description:
          "Error shown when cookies could not be imported from a browser profile",
      }}
    />
  );
}
function BrowserProfileImportDialogHelper10(wisp) {
  let { accessFailed, partiallyFailed } = wisp;
  if (partiallyFailed) {
    let yonder;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "settings.browserUse.profileImport.passwordsPartialError",
          defaultMessage: "Some passwords couldn’t be imported",
          description:
            "Error shown when some passwords could not be imported from a browser profile",
        }}
      />
    );
  }
  if (accessFailed) {
    let zenith;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "settings.browserUse.profileImport.passwordAccessError",
          defaultMessage:
            "ChatGPT couldn’t access this profile’s passwords. A device security policy may be blocking access",
          description:
            "Error shown when device security may have blocked access to passwords during browser profile import",
        }}
      />
    );
  }
  return (
    <MemoizedFormattedMessage
      {...{
        id: "settings.browserUse.profileImport.passwordsError",
        defaultMessage: "Passwords couldn’t be imported",
        description:
          "Error shown when passwords could not be imported from a browser profile",
      }}
    />
  );
}
function BrowserProfileImportDialogHelper12(hearth) {
  let { failureMessage, kind } = hearth,
    inlet,
    jetty;
  if (kind === "cookies") {
    let mire;
    mire = (
      <_e
        {...{
          className: "size-5 text-token-text-secondary",
        }}
      />
    );
    inlet = mire;
    let nook;
    nook = (
      <MemoizedFormattedMessage
        {...{
          ...echo.cookies,
        }}
      />
    );
    jetty = nook;
  } else {
    let oxbow;
    oxbow = (
      <Delta
        {...{
          className: "size-5 text-token-text-secondary",
        }}
      />
    );
    inlet = oxbow;
    let pond;
    pond = (
      <MemoizedFormattedMessage
        {...{
          ...echo.passwords,
        }}
      />
    );
    jetty = pond;
  }
  let knob, ledge;
  knob =
    failureMessage == null ? (
      <WriteHooksStateMutationAtom
        {...{
          className: "size-5 text-token-text-primary",
        }}
      />
    ) : (
      <WriteCodexThreadDeeplink
        {...{
          className: "size-5 text-token-error-foreground",
        }}
      />
    );
  ledge =
    failureMessage == null ? undefined : (
      <span className="text-token-error-foreground" role="alert">
        {failureMessage}
      </span>
    );
  return (
    <EnsurePersonalizationCInit
      {...{
        control: knob,
        description: ledge,
        icon: inlet,
        label: jetty,
      }}
    />
  );
}
function kite(tor) {
  return (
    (tor?.failed ?? 0) > 0 ||
    tor?.error != null ||
    (tor?.status != null && tor.status !== "success")
  );
}
