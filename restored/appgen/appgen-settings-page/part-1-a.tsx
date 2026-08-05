// Restored from ref/webview/assets/appgen-settings-page-8V-xKkmK.js
// Wave FZ — full polished body from `appgen-settings-page-8V-xKkmK/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 76/109).
// AST split — size-gate sibling part-1 a/4
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { composerNavigation } from "../../composer/composer-navigation";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { useIntl } from "../../i18n/use-intl";
import { SITES_OPENAI_BUNDLED_PLUGIN_ID } from "../../plugins/sites-openai-bundled-plugin-id";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";

/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (missing-export:clipboard/write-clipboard-contents.ts) */
const writeClipboardContents: any = undefined;
/** Wave FZ unresolved companion (missing-export:navigation/initial-route2-2.tsx) */
const InitialRoute2: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;

export function AppgenSettingsPageHelper5(vale: unknown) {
  let { customDomain, onClose } = vale,
    wave = useIntl(),
    apex = composerNavigation(),
    brook,
    cliff;
  brook = falcon(customDomain);
  cliff = isBareAllowedPermission({
    defaultPrompt: wave.formatMessage(
      {
        id: "appgenSettings.customDomains.setupDialog.askChatGptPrompt",
        defaultMessage:
          "Help me register {hostname} as the custom domain for my site by adding these DNS records at my domain provider. Use the in-app browser if needed.\n{dnsRecords}",
        description:
          "Prefilled prompt for a new Sites thread opened from custom-domain DNS setup. It asks Sites to help finish registration at the user's domain provider, using the in-app browser when useful. {hostname} is the exact custom hostname and {dnsRecords} is a newline-separated list of DNS record type, host name, and value.",
      },
      {
        dnsRecords: copper(brook),
        hostname: customDomain.hostname,
      },
    ),
    pluginDisplayName: "Sites",
    pluginId: SITES_OPENAI_BUNDLED_PLUGIN_ID,
  });
  let dusk = cliff,
    elm = wave.formatMessage({
      id: "appgenSettings.customDomains.setupDialog.close",
      defaultMessage: "Close custom domain setup",
      description:
        "Accessible label for closing the custom domain DNS setup dialog",
    });
  let fern = (oak) => {
    oak || onClose();
  };
  let grove = (event) => {
    event.preventDefault();
    onClose();
  };
  let hill = (
    <RealtimeVoiceHostId
      {...{
        className: "contents",
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.customDomains.setupDialog.title",
              defaultMessage: "Complete setup for {hostname}",
              description: "Title for custom domain DNS setup dialog",
              values: {
                hostname: customDomain.hostname,
              },
            }}
          />
        ),
      }}
    />
  );
  let isle = (
    <IsStartingProcessExpired
      {...{
        className: "contents",
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.customDomains.setupDialog.description",
              defaultMessage:
                "Complete your custom domain by copying these values and paste them into the DNS settings at your domain provider. You can also <chatgptLink>ask ChatGPT</chatgptLink> to do it.",
              description:
                "Instructions for completing custom domain DNS setup",
              values: {
                chatgptLink: (petal) => (
                  <button
                    key="chatgpt-link"
                    className="cursor-interaction border-0 bg-transparent p-0 underline decoration-dotted underline-offset-2"
                    type="button"
                    onClick={() => {
                      onClose();
                      apex({
                        activeProject: null,
                        prefillPrompt: dusk,
                        startInSidebar: true,
                      });
                    }}
                  >
                    {petal}
                  </button>
                ),
              },
            }}
          />
        ),
      }}
    />
  );
  let juniper = (
    <DeferredUiH
      {...{
        title: hill,
        titleClassName: "truncate pr-8 font-medium",
        titleSize: "base",
        subtitle: isle,
        subtitleClassName: "leading-5 text-token-text-secondary",
        subtitleSize: "base",
      }}
    />
  );
  let lagoon = (
    <DeferredUiU
      {...{
        children: (
          <AppgenSettingsPageHelper7
            {...{
              records: brook,
            }}
          />
        ),
      }}
    />
  );
  let meadow = (
    <DeferredUiU
      {...{
        children: (
          <SetRemoteControlEnabledForHost
            {...{
              expandSingleButton: false,
              children: (
                <ReadLoginRouteQuerySnapshot
                  {...{
                    type: "submit",
                    children: (
                      <MemoizedFormattedMessage
                        {...{
                          id: "appgenSettings.customDomains.setupDialog.complete",
                          defaultMessage:
                            "I have added the records at my provider",
                          description:
                            "Button label for completing custom domain DNS setup",
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
    />
  );
  let nest = (
    <DeferredUiB
      {...{
        as: "form",
        className: "gap-3 px-4 py-4",
        onSubmit: grove,
        children: [juniper, lagoon, meadow],
      }}
    />
  );
  return (
    <UsePointerSurfaceInteractionGate
      {...{
        dialogCloseLabel: elm,
        open: true,
        size: "default",
        onOpenChange: fern,
        children: nest,
      }}
    />
  );
}

function copper(quiet) {
  return quiet
    .map((item) => [item.type, item.name, item.value].join(" "))
    .join("\n");
}

function AppgenSettingsPageHelper7(rain) {
  let { records } = rain,
    seed = useIntl();
  if (records.length === 0) return null;
  let trail = (
    <colgroup className="max-sm:hidden">
      <col className="w-[72px]" />
      <col className="w-[40%]" />
      <col />
    </colgroup>
  );
  let urn = (
    <th className="px-0 py-1 text-start font-normal" scope="col">
      {
        <MemoizedFormattedMessage
          {...{
            id: "appgenSettings.customDomains.dns.type",
            defaultMessage: "Type",
            description: "DNS record table type column",
          }}
        />
      }
    </th>
  );
  let vine = (
    <th className="px-0 py-1 text-start font-normal" scope="col">
      {
        <MemoizedFormattedMessage
          {...{
            id: "appgenSettings.customDomains.dns.hostname",
            defaultMessage: "Host name",
            description: "DNS record table host name column",
          }}
        />
      }
    </th>
  );
  let wind = (
    <thead className="max-sm:sr-only">
      <tr className="h-7 border-b border-token-border text-sm font-normal text-token-text-tertiary">
        {urn}
        {vine}
        <th className="px-0 py-1 text-start font-normal" scope="col">
          {
            <MemoizedFormattedMessage
              {...{
                id: "appgenSettings.customDomains.dns.value",
                defaultMessage: "Value",
                description: "DNS record table value column",
              }}
            />
          }
        </th>
      </tr>
    </thead>
  );
  let yarrow;
  {
    let azure;
    azure = (birch) => (
      <tr
        key={birch.id}
        className="h-7 border-b border-token-border text-sm text-token-text-primary last:border-b-0 max-sm:block"
      >
        <td className="px-0 py-1 text-token-text-secondary max-sm:hidden">
          {birch.type}
        </td>
        <td className="px-0 py-1 max-sm:block">
          <div className="flex min-w-0 items-center justify-between gap-2">
            <span className="me-1 hidden text-token-text-tertiary max-sm:inline">
              {birch.type}
            </span>
            <div className="min-w-0 truncate">{birch.name}</div>
            {
              <CopyButton
                {...{
                  ariaLabel: seed.formatMessage(
                    {
                      id: "appgenSettings.customDomains.dns.copyHostname",
                      defaultMessage: "Copy {type} DNS host name for {name}",
                      description:
                        "Accessible label for copying one DNS record host name. {type} is the DNS record type and {name} is the record host name.",
                    },
                    {
                      name: birch.name,
                      type: birch.type,
                    },
                  ),
                  buttonText: true,
                  className:
                    "h-auto shrink-0 rounded-full! border! border-token-border! px-2 py-0.5 text-sm text-token-text-primary",
                  showIcon: false,
                  onCopy: (canyon) => {
                    writeClipboardContents(birch.name, canyon);
                  },
                }}
              />
            }
          </div>
        </td>
        <td className="px-0 py-1 max-sm:block">
          <div className="flex min-w-0 items-center justify-between gap-2">
            <div className="min-w-0 truncate">{birch.value}</div>
            {
              <CopyButton
                {...{
                  ariaLabel: seed.formatMessage(
                    {
                      id: "appgenSettings.customDomains.dns.copyValueForRecord",
                      defaultMessage: "Copy {type} DNS value for {name}",
                      description:
                        "Accessible label for copying one DNS record value. {type} is the DNS record type and {name} is the record host name.",
                    },
                    {
                      name: birch.name,
                      type: birch.type,
                    },
                  ),
                  buttonText: true,
                  className:
                    "h-auto shrink-0 rounded-full! border! border-token-border! px-2 py-0.5 text-sm text-token-text-primary",
                  showIcon: false,
                  onCopy: (dew) => {
                    writeClipboardContents(birch.value, dew);
                  },
                }}
              />
            }
          </div>
        </td>
      </tr>
    );
    yarrow = records.map(azure);
  }
  return (
    <div className="overflow-hidden">
      <table className="w-full table-fixed border-collapse">
        {trail}
        {wind}
        <tbody>{yarrow}</tbody>
      </table>
    </div>
  );
}

function falcon(hinge) {
  return [
    ...gamma(hinge),
    ...hinge.validation_records.flatMap((item, index) => {
      let iron = _t(item.record_type),
        joint = _t(item.name),
        keystone = _t(item.value);
      return iron == null || joint == null || keystone == null
        ? []
        : [
            {
              id: `validation:${index}:${iron}:${joint}`,
              name: joint,
              type: iron,
              value: keystone,
            },
          ];
    }),
  ];
}

function gamma(latch) {
  return harbor(latch.hostname) && latch.apex_proxy_ipv4_targets.length > 0
    ? latch.apex_proxy_ipv4_targets.map((item, index) => ({
        id: `apex:${index}:${item}`,
        name: "@",
        type: "A",
        value: item,
      }))
    : latch.cname_target == null
      ? latch.apex_proxy_ipv4_targets.map((item, index) => ({
          id: `apex:${index}:${item}`,
          name: latch.hostname,
          type: "A",
          value: item,
        }))
      : [
          {
            id: "cname",
            name: latch.hostname,
            type: "CNAME",
            value: latch.cname_target,
          },
        ];
}

function _t(motor) {
  let nut = motor?.trim();
  return nut == null || nut.length === 0 ? null : nut;
}

function harbor(piston) {
  let rivet = InitialRoute2(piston, {
    allowPrivateDomains: true,
  });
  return (
    rivet.domain != null && rivet.domain.toLowerCase() === piston.toLowerCase()
  );
}
