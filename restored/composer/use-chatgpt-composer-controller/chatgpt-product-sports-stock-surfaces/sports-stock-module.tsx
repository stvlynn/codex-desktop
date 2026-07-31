// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Product / sports / stock / time / video / title content-reference surfaces
// (Helper208–242 + Value274–299).

import {
  ensureComposerEsm_JL_Init as appInitialJL,
  ensureComposerEsm_Tft_Init as appInitialTft,
  ensureComposerEsm_oL_Init as AppInitialOL,
  ensureComposerEsm_wct_Init as appInitialWct,
  ensureComposerEsm_I__Init as _appInitialI,
  ensureComposerEsm_MI_Init as _appInitialMI,
} from "../../../boundaries/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../../boundaries/react-cjs-runtime";
import { extractContentReferenceProducts as appInitialPI } from "../../../content/extract-content-reference-products";
import { extractProductCitations as appInitialHI } from "../../../content/extract-product-citations";
import { extractProductReviews as appInitialGI } from "../../../content/extract-product-reviews";
import { getContentReferenceDisplayMode as _appInitialTI } from "../../../content/get-content-reference-display-mode";
import { pickContentReferenceUrl as AppInitialSI } from "../../../content/pick-content-reference-url";
import { InlineMention as appInitialQL } from "../../../composer/inline-mention";
import { isChatgptMessageNode as _AppInitialNI } from "../../../conversation/is-chatgpt-message-node";
import { MemoizedFormattedMessage as appInitialGft } from "../../../i18n/memoized-formatted-message";
import {
  ensureIntlFormattersInit as appInitialHft,
  useIntl as appInitialJft,
} from "../../../i18n/use-intl";
import { AppIconCct as appInitialCct } from "../../../icons/app-icon-cct";
import { findModelVersionOptionId as _AppInitialOI } from "../../../models/find-model-version-option-id";
import {
  NavigationAllowContext as _appInitialIL,
} from "../../../navigation/navigation-allow-context";
import { ThreadResourceCard as _appInitialYI } from "../../../thread/thread-resource-card";
import { cx as appInitialWft } from "../../../ui/cx";
import {
  zodArray as _appInitialFT,
  zodLiteral as appInitialYT,
  zodObject as appInitialXT,
  zodString as appInitialCT,
} from "../../../vendor/zod";
const __appInitialCT = appInitialCT;
import { rolldownRuntimeN, rolldownRuntimeS } from "../../../runtime/rolldown-runtime";
import {
  useChatgptComposerControllerHelper64,
  useChatgptComposerControllerHelper68,
  useChatgptComposerControllerHelper70,
} from "../chatgpt-content-reference-cards";
import { useChatgptComposerControllerHelper65 } from "../chatgpt-composer-confirmation-link";
import {
  useChatgptComposerControllerHelper73,
  useChatgptComposerControllerHelper74,
} from "../chatgpt-content-reference-link-card";
import {
  $d,
  useChatgptComposerControllerHelper75,
  useChatgptComposerControllerHelper76,
  useChatgptComposerControllerHelper77,
  useChatgptComposerControllerHelper78,
} from "../chatgpt-news-reference-helpers";
import {
  useChatgptComposerControllerHelper31,
  ensureChatgptBrowserHostContextInit,
} from "../chatgpt-browser-host-context";

const slot43 = ensureChatgptBrowserHostContextInit;
import {
  useChatgptComposerControllerHelper114,
  useChatgptComposerControllerHelper119,
  slot122,
  slot125,
} from "../chatgpt-product-carousel-references";
import {
  E_ as useChatgptComposerControllerSafeContentReferenceHref,
  O_ as useChatgptComposerControllerContentReferenceAnchor,
  D_ as useChatgptComposerControllerMapsAttributionPeerInit,
  j_ as useChatgptComposerControllerLocationSearchPeerInit,
} from "../chatgpt-forecast-file-content-references";

const AppInitialGft = appInitialGft;
const AppInitialQL = appInitialQL;
const E_ = useChatgptComposerControllerSafeContentReferenceHref;
const O_ = useChatgptComposerControllerContentReferenceAnchor;
const D_ = useChatgptComposerControllerMapsAttributionPeerInit;
const j_ = useChatgptComposerControllerLocationSearchPeerInit;

/** Residual stub peers still registered on the open boundary. */
const slot81 = rolldownRuntimeN(() => {});
const slot85 = rolldownRuntimeN(() => {});
const slot88 = rolldownRuntimeN(() => {});
const slot91 = rolldownRuntimeN(() => {});
const slot92 = rolldownRuntimeN(() => {});

function useChatgptComposerControllerHelper223(
  request5055: any) {
  const UseChatgptComposerControllerHelper224 =
    useChatgptComposerControllerHelper224;
  const UseChatgptComposerControllerHelper226 =
    useChatgptComposerControllerHelper226;
  let { reference } = request5055;
  switch (reference.type) {
    case "sports_schedule": {
      let slot14826;
      return <UseChatgptComposerControllerHelper224 reference={reference} />;
    }
    case "sports_standings": {
      let slot14827;
      return <UseChatgptComposerControllerHelper226 reference={reference} />;
    }
    default:
      return null;
  }
}
function useChatgptComposerControllerHelper224(
  request2087: any) {
  const UseChatgptComposerControllerHelper68 =
    useChatgptComposerControllerHelper68;
  const Slot6273 =
    slot6273;
  let { reference } = request2087,
    slot6272 = appInitialJft(),
    slot6273,
    slot6274,
    slot6275,
    slot6276,
    slot6277;
  slot6277 = Symbol.for(
    "react.early_return_sentinel",
  );
  bb0: {
    let slot10006 = Array.isArray(reference.games)
      ? reference.games
      : [];
    if (slot10006.length === 0) {
      let slot14693;
      slot14693 = (
        <UseChatgptComposerControllerHelper68 reference={reference} />
      );
      slot6277 =
        slot14693;
      break bb0;
    }
    slot6273 =
      useChatgptComposerControllerHelper64;
    slot6276 =
      slot6272.formatMessage({
        id: "chatgpt.contentReferences.sportsSchedule.title",
        defaultMessage: "Schedule",
        description: "Title for a sports schedule content reference card",
      });
    slot6274 = "flex flex-col gap-2";
    slot6275 =
      slot10006
        .slice(0, 5)
        .map(useChatgptComposerControllerHelper225);
  }
  if (
    slot6277 !==
    Symbol.for("react.early_return_sentinel")
  )
    return slot6277;
  let slot6278 = (
    <div className={slot6274}>
      {slot6275}
    </div>
  );
  return (
    <Slot6273
      title={slot6276}
    >
      {slot6278}
    </Slot6273>
  );
}
function useChatgptComposerControllerHelper225(
  request5513: any,
  request5514: any) {
  return (
    <div
      key={String(request5514)}
      className="rounded-md border border-token-border-light p-2"
    >
      <div className="font-medium">
        {useChatgptComposerControllerHelper234(
          request5513,
        )}
      </div>
      {useChatgptComposerControllerHelper76(
        useChatgptComposerControllerHelper78(
          request5513,
        )?.details,
      ) == null ? null : (
        <div className="text-sm text-token-text-secondary">
          {useChatgptComposerControllerHelper76(
            useChatgptComposerControllerHelper78(
              request5513,
            )?.details,
          )}
        </div>
      )}
    </div>
  );
}
function useChatgptComposerControllerHelper226(
  request4898: any) {
  const UseChatgptComposerControllerHelper68 =
    useChatgptComposerControllerHelper68;
  const UseChatgptComposerControllerHelper227 =
    useChatgptComposerControllerHelper227;
  let { reference } = request4898,
    slot11029 =
      slot286.safeParse(reference);
  let slot11030 =
    slot11029;
  if (
    !slot11030.success ||
    slot11030.data.conferences.length === 0
  ) {
    let slot15041;
    return <UseChatgptComposerControllerHelper68 reference={reference} />;
  }
  return (
    <UseChatgptComposerControllerHelper227
      standingsRef={slot11030.data}
    />
  );
}
function useChatgptComposerControllerHelper227(
  request1230: any) {
  let { standingsRef } = request1230,
    [
      slot4751,
      slot4752,
    ] = slot280.useState(0),
    slot4753 =
      standingsRef.conferences[slot4751] ??
      standingsRef.conferences[0];
  if (slot4753 == null) return null;
  let slot4754 =
    standingsRef.league?.id != null &&
    slot282.includes(standingsRef.league.id);
  let slot4755 =
      slot4754,
    slot4756 =
      standingsRef.conferences.length > 1 ? (
        <div className="flex gap-4">
          {standingsRef.conferences.map((item, index) => {
            return (
              <button
                key={item.name ?? String(index)}
                className={appInitialWft(
                  slot4751 === index
                    ? "text-token-text-primary"
                    : "text-token-text-tertiary",
                  "cursor-interaction text-sm font-semibold",
                )}
                type="button"
                onClick={() => {
                  return slot4752(index);
                }}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      ) : null;
  let slot4757;
  {
    let slot10503;
    slot10503 = (
      request5850,
      request5851,
    ) => {
      const UseChatgptComposerControllerHelper228 =
        useChatgptComposerControllerHelper228;
      return request5850.name == null ? (
        <UseChatgptComposerControllerHelper228
          key={String(request5851)}
          division={request5850}
          useAlias={slot4755}
        />
      ) : (
        <div key={request5850.name} className="mt-3">
          {
            <UseChatgptComposerControllerHelper228
              division={request5850}
              teamsColumnHeader={request5850.name}
            />
          }
        </div>
      );
    };
    slot4757 =
      slot4753.divisions.map(
        slot10503,
      );
  }
  let slot4758 = (
    <div className="mt-3">{slot4757}</div>
  );
  return (
    <div data-testid="sports-standings-widget">
      {slot4756}
      {slot4758}
    </div>
  );
}
function useChatgptComposerControllerHelper228(
  request738: any) {
  const AppInitialGft = appInitialGft;
  let { division, teamsColumnHeader, useAlias } =
      request738,
    slot3538,
    slot3539,
    slot3540,
    slot3541;
  {
    let slot4351 = division.headers.map(
      useChatgptComposerControllerHelper230,
    );
    slot3541 = "not-prose overflow-x-auto";
    slot3539 = "w-full border-collapse text-sm";
    let slot4352 = teamsColumnHeader ?? (
      <AppInitialGft defaultMessage="Team" description="Title for team" />
    );
    let slot4353 = (
      <th
        className="border-b border-token-border-default py-2 ps-0 pe-4 text-start text-sm font-normal text-token-text-primary"
        scope="col"
      >
        {slot4352}
      </th>
    );
    let slot4354;
    slot4354 = division.headers.map(
      useChatgptComposerControllerHelper229,
    );
    slot3540 = (
      <thead>
        <tr>
          {slot4353}
          {slot4354}
        </tr>
      </thead>
    );
    slot3538 = division.teams.map(
      (item, index) => {
        const UseChatgptComposerControllerHelper231 =
          useChatgptComposerControllerHelper231;
        const UseChatgptComposerControllerHelper232 =
          useChatgptComposerControllerHelper232;
        let { data, team } = item;
        return (
          <tr key={team.name}>
            <td className="w-full border-0 py-0 ps-0 pe-4">
              <div className="flex items-center">
                <div className="me-2 w-4 whitespace-nowrap text-token-text-tertiary tabular-nums">
                  {index + 1}
                </div>
                <div className="flex items-center justify-start gap-2">
                  {<UseChatgptComposerControllerHelper231 team={team} />}
                  {
                    <UseChatgptComposerControllerHelper232
                      team={team}
                      useAlias={!!useAlias}
                    />
                  }
                </div>
              </div>
            </td>
            {slot4351.map((_item) => {
              const UseChatgptComposerControllerHelper233 =
                useChatgptComposerControllerHelper233;
              return (
                <td
                  key={_item}
                  className="min-w-11 border-0 px-0 py-0 text-center whitespace-nowrap tabular-nums"
                >
                  {
                    <UseChatgptComposerControllerHelper233
                      data={data.find((__item) => {
                        return __item.key === _item;
                      })}
                    />
                  }
                </td>
              );
            })}
          </tr>
        );
      },
    );
  }
  let slot3542 = (
    <tbody>{slot3538}</tbody>
  );
  let slot3543 = (
    <table className={slot3539}>
      {slot3540}
      {slot3542}
    </table>
  );
  return (
    <div className={slot3541}>
      {slot3543}
    </div>
  );
}
function useChatgptComposerControllerHelper229(event: any) {
  const UseChatgptComposerControllerHelper233 =
    useChatgptComposerControllerHelper233;
  return (
    <th
      key={event.key}
      className="min-w-11 border-b border-token-border-default px-0 py-2 text-center text-sm font-normal text-token-text-secondary"
      scope="col"
    >
      {<UseChatgptComposerControllerHelper233 data={event} />}
    </th>
  );
}
function useChatgptComposerControllerHelper230(event: any) {
  return event.key;
}
function useChatgptComposerControllerHelper231(
  request3820: any) {
  let { team } = request3820,
    slot9639 =
      useChatgptComposerControllerHelper31();
  if (
    team.logo == null ||
    slot9639?.shouldBlockExternalEgress === true
  ) {
    let slot13314;
    return (
      <span
        aria-hidden="true"
        className="size-6 shrink-0 rounded-full bg-token-bg-tertiary"
      />
    );
  }
  return (
    <img
      alt={team.name}
      className="m-0 size-6 shrink-0 object-contain"
      src={team.logo}
    />
  );
}
function useChatgptComposerControllerHelper232(
  request3120: any) {
  let { team, useAlias } = request3120;
  if (!useAlias || team.alias == null) {
    let slot13674;
    return <span className="text-base whitespace-nowrap">{team.name}</span>;
  }
  let slot8274 = (
    <span className="hidden text-base whitespace-nowrap sm:inline">
      {team.name}
    </span>
  );
  let slot8275 = (
    <span className="text-base whitespace-nowrap sm:hidden">{team.alias}</span>
  );
  return (
    <>
      {slot8274}
      {slot8275}
    </>
  );
}
function useChatgptComposerControllerHelper233(
  request6798: any) {
  let { data } = request6798;
  if (data == null) return null;
  let slot13174 =
    data.type === "text" ? data.text : data.alt;
  return slot13174 == null ? null : (
    <>{slot13174}</>
  );
}
function useChatgptComposerControllerHelper234(
  request8726: any) {
  let slot14755 =
      useChatgptComposerControllerHelper78(
        request8726,
      ),
    slot14756 =
      useChatgptComposerControllerHelper235(
        useChatgptComposerControllerHelper78(
          slot14755?.first_team_info,
        ),
      ),
    slot14757 =
      useChatgptComposerControllerHelper235(
        useChatgptComposerControllerHelper78(
          slot14755?.second_team_info,
        ),
      );
  return slot14756 == null ||
    slot14757 == null
    ? (useChatgptComposerControllerHelper76(
        slot14755?.date,
      ) ?? "")
    : `${slot14756} / ${slot14757}`;
}
function useChatgptComposerControllerHelper235(
  request10862: any) {
  let slot15870 =
    useChatgptComposerControllerHelper78(
      request10862?.team,
    );
  return (
    useChatgptComposerControllerHelper76(
      slot15870?.name,
    ) ??
    useChatgptComposerControllerHelper76(
      slot15870?.alias,
    )
  );
}
let $y: any;
let slot279: any;
let slot280: any;
let slot281: any;
let slot282: any;
let slot283: any;
let slot284: any;
let slot285: any;
let slot286: any;
const slot287 = rolldownRuntimeN(() => {
    slot279 = appInitialIvt();
    appInitialTft();
    slot280 = rolldownRuntimeS(appInitialLvt(), 1);
    appInitialHft();
    __appInitialCT();
    slot43();
    slot81();
    slot88();
    slot92();
    slot281 = appInitialJvt();
    slot282 = ["ipl"];
    slot283 = appInitialXT({
      alt: appInitialCT().trim().min(1).nullable().optional(),
      key: appInitialCT().trim().min(1),
      text: appInitialCT().trim().min(1).nullable().optional(),
      type: appInitialCT().trim().min(1).nullable().optional(),
    }).passthrough();
    $y = appInitialXT({
      alias: appInitialCT().trim().min(1).nullable().optional(),
      logo: appInitialCT().trim().min(1).nullable().optional(),
      name: appInitialCT().trim().min(1),
    }).passthrough();
    slot284 = appInitialXT({
      data: _appInitialFT(slot283),
      team: $y,
    }).passthrough();
    slot285 = appInitialXT({
      headers: _appInitialFT(slot283),
      name: appInitialCT().trim().min(1).nullable().optional(),
      teams: _appInitialFT(slot284),
    }).passthrough();
    slot286 = appInitialXT({
      conferences: _appInitialFT(
        appInitialXT({
          divisions: _appInitialFT(slot285),
          name: appInitialCT().trim().min(1).nullable().optional(),
        }).passthrough(),
      ),
      league: appInitialXT({
        id: appInitialCT().trim().min(1).nullable().optional(),
      })
        .passthrough()
        .optional(),
      type: appInitialYT("sports_standings"),
    }).passthrough();
  });
function useChatgptComposerControllerHelper236(
  request1156: any) {
  const UseChatgptComposerControllerHelper64 =
    useChatgptComposerControllerHelper64;
  const UseChatgptComposerControllerHelper74 =
    useChatgptComposerControllerHelper74;
  let { reference } = request1156,
    slot4540 = appInitialJft(),
    slot4541;
  {
    let slot4784 =
        useChatgptComposerControllerHelper78(reference.stock),
      slot4785 =
        useChatgptComposerControllerHelper78(
          slot4784?.asset,
        ),
      slot4786 =
        useChatgptComposerControllerHelper78(
          slot4784?.price,
        ),
      slot4787 =
        useChatgptComposerControllerHelper76(reference.ticker) ??
        useChatgptComposerControllerHelper76(
          slot4785?.ticker,
        ),
      slot4788 =
        useChatgptComposerControllerHelper76(
          slot4785?.name,
        ),
      slot4789 = $d(
        slot4786?.price,
      ),
      slot4790 = $d(
        slot4786?.change,
      ),
      slot4791 = $d(
        slot4786?.change_percent,
      ),
      slot4792 = AppInitialSI(reference),
      slot4793 =
        slot4788 == null &&
        slot4787 == null
          ? slot4540.formatMessage({
              id: "chatgpt.contentReferences.stock.title",
              defaultMessage: "Stock",
              description: "Fallback title for a stock content reference card",
            })
          : [
              slot4788,
              slot4787 == null
                ? null
                : `(${slot4787})`,
            ]
              .filter(Boolean)
              .join(" "),
      slot4794 =
        slot4789 == null
          ? null
          : useChatgptComposerControllerHelper75(
              slot4789,
              {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              },
            ),
      slot4795 =
        slot4790 == null
          ? null
          : useChatgptComposerControllerHelper237(
              slot4790,
            ),
      slot4796 =
        slot4791 == null
          ? null
          : `(${useChatgptComposerControllerHelper237(slot4791 * 100)}%)`;
    let slot4797 =
        slot4796,
      slot4798 =
        slot4794 == null ? null : (
          <div className="text-2xl font-semibold">
            {slot4794}
          </div>
        );
    let slot4799 =
      slot4790 == null &&
      slot4791 == null ? null : (
        <div
          className={
            (slot4790 ??
              slot4791 ??
              0) < 0
              ? "text-red-500"
              : "text-green-600 dark:text-green-400"
          }
        >
          {slot4795}
          {slot4790 != null &&
          slot4791 != null
            ? slot290
            : null}
          {slot4797}
        </div>
      );
    let slot4800;
    slot4800 = (
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {slot4798}
        {slot4799}
      </div>
    );
    slot4541 = (
      <UseChatgptComposerControllerHelper64
        title={slot4793}
      >
        {slot4800}
        {slot4792 == null ? null : (
          <div className="mt-2">
            {
              <UseChatgptComposerControllerHelper74
                href={slot4792}
              >
                {useChatgptComposerControllerHelper77(
                  slot4792,
                )}
              </UseChatgptComposerControllerHelper74>
            }
          </div>
        )}
      </UseChatgptComposerControllerHelper64>
    );
  }
  return slot4541;
}
function useChatgptComposerControllerHelper237(
  request9209: any) {
  let slot15163 =
    useChatgptComposerControllerHelper75(
      Math.abs(request9209),
      {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      },
    );
  return `${request9209 < 0 ? "-" : "+"}${slot15163}`;
}
let slot288: any;
let slot289: any;
let slot290: any;
const slot291 = rolldownRuntimeN(() => {
    slot288 = appInitialIvt();
    appInitialHft();
    _appInitialYI();
    slot81();
    slot91();
    slot92();
    slot289 = appInitialJvt();
    slot290 = " ";
  });
function useChatgptComposerControllerHelper238(
  request4587: any) {
  const AppInitialQL = appInitialQL;
  let { reference } = request4587,
    slot10635 =
      useChatgptComposerControllerHelper239(reference);
  let slot10636 =
    slot10635;
  if (
    slot10636 == null &&
    reference.type === "hidden"
  )
    return null;
  let slot10637 =
    slot10636 ?? _AppInitialNI(reference);
  let slot10638 =
    slot10637;
  if (slot10638 == null) return null;
  return (
    <AppInitialQL icon={appInitialCct} labelClassName="whitespace-nowrap">
      {slot10638}
    </AppInitialQL>
  );
}
function useChatgptComposerControllerHelper239(
  request6943: any) {
  let slot13295 =
    useChatgptComposerControllerHelper76(
      request6943.utc_time,
    );
  if (slot13295 == null) return null;
  let slot13296 = new Date(
    slot13295,
  );
  return Number.isNaN(slot13296.getTime())
    ? null
    : new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "numeric",
        timeZone: "UTC",
      }).format(
        new Date(
          slot13296.getTime() +
            useChatgptComposerControllerHelper240(
              request6943,
            ),
        ),
      );
}
function useChatgptComposerControllerHelper240(
  request6762: any) {
  let slot13130 =
    useChatgptComposerControllerHelper76(
      request6762.utc_offset,
    );
  if (slot13130 == null) return 0;
  let slot13131 = /^([+-])(\d{2}):?(\d{2})?$/.exec(
    slot13130,
  );
  if (slot13131 == null) return 0;
  let [
      ,
      slot13132,
      slot13133,
      slot13134,
    ] = slot13131,
    slot13135 = Number(
      slot13133,
    ),
    slot13136 = Number(
      slot13134 ?? "0",
    );
  return !Number.isFinite(slot13135) ||
    !Number.isFinite(slot13136)
    ? 0
    : (slot13132 === "-" ? -1 : 1) *
        (slot13135 * 60 +
          slot13136) *
        6e4;
}
let slot292: any;
let slot293: any;
const slot294 = rolldownRuntimeN(() => {
    slot292 = appInitialIvt();
    appInitialJL();
    appInitialWct();
    _appInitialYI();
    slot92();
    slot293 = appInitialJvt();
  });
function useChatgptComposerControllerHelper241(
  request3028: any) {
  const UseChatgptComposerControllerHelper70 =
    useChatgptComposerControllerHelper70;
  let { reference } = request3028,
    slot8122 =
      useChatgptComposerControllerHelper76(reference.description) ??
      _AppInitialOI(reference);
  let slot8123 =
    slot8122;
  if (slot8123 == null) {
    let slot15042;
    return <UseChatgptComposerControllerHelper70 reference={reference} />;
  }
  let slot8124 = E_(reference);
  let slot8125 =
    slot8124;
  if (slot8125 == null) {
    let slot13724;
    return (
      <span className="font-semibold text-token-text-primary">
        {slot8123}
      </span>
    );
  }
  return (
    <O_
      className="font-semibold text-token-text-primary underline-offset-2 hover:underline"
      href={slot8125}
    >
      {slot8123}
    </O_>
  );
}
let _b: any;
let slot295: any;
const slot296 = rolldownRuntimeN(() => {
    _b = appInitialIvt();
    _appInitialYI();
    D_();
    slot88();
    j_();
    slot92();
    slot295 = appInitialJvt();
  });
function useChatgptComposerControllerHelper242(
  request2234: any) {
  const Slot6499 =
    slot6499;
  const Slot6500 =
    slot6500;
  let { reference } = request2234,
    slot6497 = _AppInitialOI(reference);
  let slot6498 =
      slot6497,
    slot6499,
    slot6500,
    slot6501,
    slot6502,
    slot6503,
    slot6504;
  slot6503 = Symbol.for(
    "react.early_return_sentinel",
  );
  bb0: {
    if (
      ((slot6504 = AppInitialSI(reference)),
      slot6498 == null &&
        slot6504 == null)
    ) {
      slot6503 = null;
      break bb0;
    }
    slot6500 =
      useChatgptComposerControllerHelper64;
    slot6499 =
      useChatgptComposerControllerHelper73;
    slot6501 = "aspect-video";
    slot6502 =
      useChatgptComposerControllerHelper77(
        slot6504,
      );
  }
  if (
    slot6503 !==
    Symbol.for("react.early_return_sentinel")
  )
    return slot6503;
  let slot6505 =
    useChatgptComposerControllerHelper76(reference.thumbnail_url);
  let slot6506 =
      slot6498 ??
      slot6504 ??
      "",
    slot6507 = (
      <Slot6499
        imageAspectClassName={slot6501}
        subtitle={slot6502}
        thumbnailUrl={slot6505}
        title={slot6506}
        url={slot6504}
      />
    );
  return (
    <Slot6500>
      {slot6507}
    </Slot6500>
  );
}
let slot297: any;
let slot298: any;
const slot299 = rolldownRuntimeN(() => {
    slot297 = appInitialIvt();
    _appInitialYI();
    slot81();
    slot91();
    slot92();
    slot298 = appInitialJvt();
  });

export function getChatgptSportsStockSurfaces() {
  return {
    useChatgptComposerControllerHelper223,
    useChatgptComposerControllerHelper236,
    useChatgptComposerControllerHelper238,
    useChatgptComposerControllerHelper241,
    useChatgptComposerControllerHelper242,
    slot287,
    slot291,
    slot294,
    slot296,
    slot299,
  };
}
