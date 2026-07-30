// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
const _f = 30;
// News carousel / nav-list content-reference renderer (Helper79).

import { pickContentReferenceDisplayTitle as _AppInitialOI } from "../../content/pick-content-reference-display-title";
import { useIntl as appInitialJft } from "../../i18n/use-intl";
import { RemoteHrefIcon as AppInitialHL } from "../../ui/remote-href-icon";
import { useChatgptComposerControllerHelper31 } from "./chatgpt-browser-host-context";
import {
  useChatgptComposerControllerHelper64,
  useChatgptComposerControllerHelper68,
} from "./chatgpt-content-reference-cards";
import {
  useChatgptComposerControllerHelper73,
  useChatgptComposerControllerHelper74,
} from "./chatgpt-content-reference-link-card";
import {
  $d,
  useChatgptComposerControllerHelper76,
  useChatgptComposerControllerHelper77,
  useChatgptComposerControllerHelper78,
} from "./chatgpt-news-reference-helpers";

export function useChatgptComposerControllerHelper79(request2145: any) {
  const ContentReferenceCard = useChatgptComposerControllerHelper64;
  const UseChatgptComposerControllerHelper80 =
    useChatgptComposerControllerHelper80;
  const UseChatgptComposerControllerHelper68 =
    useChatgptComposerControllerHelper68;

  let { reference } = request2145;
  if (reference.type === "nav_list") {
    let slot15022;
    return <UseChatgptComposerControllerHelper80 reference={reference} />;
  }
  let slot6367 = _AppInitialOI(reference);
  let slot6368 =
      slot6367,
    slot6369,
    slot6370,
    slot6371,
    slot6372,
    slot6373;
  slot6373 = Symbol.for(
    "react.early_return_sentinel",
  );
  bb0: {
    let slot12360 =
        useChatgptComposerControllerHelper85(reference),
      slot12361 =
        slot12360.length > 0
          ? slot12360
          : useChatgptComposerControllerHelper86(reference);
    if (slot12361.length === 0) {
      let slot14618;
      slot14618 = (
        <UseChatgptComposerControllerHelper68 reference={reference} />
      );
      slot6373 =
        slot14618;
      break bb0;
    }
    slot6369 =
      useChatgptComposerControllerHelper64;
    slot6372 =
      slot6368;
    slot6370 = "grid gap-2 sm:grid-cols-2";
    slot6371 =
      slot12361.slice(0, 6).map(of);
  }
  if (
    slot6373 !==
    Symbol.for("react.early_return_sentinel")
  )
    return slot6373;
  let slot6374 = (
    <div className={slot6370}>
      {slot6371}
    </div>
  );
  return (
    <ContentReferenceCard
      title={slot6372}
    >
      {slot6374}
    </ContentReferenceCard>
  );
}
function of(
  request8195,
  request8196,
) {
  const UseChatgptComposerControllerHelper73 =
    useChatgptComposerControllerHelper73;
  return (
    <UseChatgptComposerControllerHelper73
      key={`${request8195.url ?? request8195.title}-${String(request8196)}`}
      subtitle={request8195.subtitle}
      thumbnailUrl={request8195.thumbnailUrl}
      title={request8195.title}
      url={request8195.url}
    />
  );
}
function useChatgptComposerControllerHelper80(
  request1815,
) {
  let { reference } = request1815,
    slot5888,
    slot5889,
    slot5890,
    slot5891,
    slot5892,
    slot5893;
  slot5893 = Symbol.for(
    "react.early_return_sentinel",
  );
  bb0: {
    let slot9519 =
      useChatgptComposerControllerHelper85(reference).filter(
        useChatgptComposerControllerHelper82,
      );
    if (slot9519.length === 0) {
      slot5893 = null;
      break bb0;
    }
    let slot9520 =
      useChatgptComposerControllerHelper76(reference.title);
    let slot9521 =
      slot9520;
    slot5890 = "not-prose mt-6 mb-1";
    slot5891 = "chatgpt-nav-list";
    slot5892 =
      slot9521 == null ? null : (
        <div className="-mb-1 pb-3 font-semibold text-token-text-primary">
          {slot9521}
        </div>
      );
    slot5888 =
      "hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-2";
    slot5889 =
      slot9519.map(
        useChatgptComposerControllerHelper81,
      );
  }
  if (
    slot5893 !==
    Symbol.for("react.early_return_sentinel")
  )
    return slot5893;
  let slot5894 = (
    <div className={slot5888}>
      {slot5889}
    </div>
  );
  return (
    <div
      className={slot5890}
      data-testid={slot5891}
    >
      {slot5892}
      {slot5894}
    </div>
  );
}
function useChatgptComposerControllerHelper81(
  request10696,
  request10697,
) {
  const UseChatgptComposerControllerHelper83 =
    useChatgptComposerControllerHelper83;
  return (
    <UseChatgptComposerControllerHelper83
      key={`${request10696.url}-${String(request10697)}`}
      item={request10696}
    />
  );
}
function useChatgptComposerControllerHelper82(
  request11352,
) {
  return request11352.url != null;
}
function useChatgptComposerControllerHelper83(
  request573,
) {
  const UseChatgptComposerControllerHelper74 =
    useChatgptComposerControllerHelper74;
  let { item } = request573,
    slot3099 = appInitialJft(),
    slot3100 =
      useChatgptComposerControllerHelper31()?.shouldBlockExternalEgress ===
      true,
    slot3101 =
      item.dateLabel ??
      useChatgptComposerControllerHelper87(
        slot3099,
        item.pubDate,
      );
  let slot3102 =
      slot3101,
    slot3103 =
      !slot3100,
    slot3104 = (
      <div className="absolute inset-0 flex items-center justify-center blur-3xl">
        <AppInitialHL
          className="size-64 opacity-20 dark:opacity-10"
          href={item.url}
          loadRemote={slot3103}
        />
      </div>
    );
  let slot3105 =
      !slot3100,
    slot3106 = (
      <div className="absolute inset-0 flex items-center justify-center">
        <AppInitialHL
          className="size-10 overflow-hidden rounded-[22%]"
          href={item.url}
          loadRemote={slot3105}
        />
      </div>
    );
  let slot3107 =
    item.thumbnailUrl == null ||
    slot3100 ? null : (
      <img
        alt={item.title}
        className="absolute inset-0 m-0 h-full w-full object-cover"
        decoding="async"
        onError={useChatgptComposerControllerHelper84}
        referrerPolicy="no-referrer"
        src={item.thumbnailUrl}
      />
    );
  let slot3108 = (
    <div className="relative flex h-36 w-full shrink-0 items-center justify-center overflow-hidden bg-token-bg-secondary">
      {slot3104}
      {slot3106}
      {slot3107}
    </div>
  );
  let slot3109 =
      !slot3100,
    slot3110 = (
      <AppInitialHL
        className="icon-xs overflow-hidden rounded-[22%]"
        href={item.url}
        loadRemote={slot3109}
      />
    );
  let slot3111 = (
    <span className="truncate">{item.attribution}</span>
  );
  let slot3112 = (
    <div className="flex items-center gap-1.5 text-xs text-token-text-primary">
      {slot3110}
      {slot3111}
    </div>
  );
  let slot3113 = (
    <div className="line-clamp-5 text-sm font-medium text-token-text-primary decoration-token-link">
      {item.title}
    </div>
  );
  let slot3114 =
    slot3102 == null ? null : (
      <div className="text-xs text-token-text-secondary">
        {slot3102}
      </div>
    );
  let slot3115 = (
    <div className="flex min-w-0 flex-col gap-2 overflow-hidden px-4 text-ellipsis">
      {slot3112}
      {slot3113}
      {slot3114}
    </div>
  );
  return (
    <UseChatgptComposerControllerHelper74
      className="flex shrink-0 basis-[calc((100%_-_1rem)/2)] snap-start flex-col gap-4 overflow-hidden rounded-xl border border-token-border-heavy bg-token-main-surface-primary pb-6 text-token-text-primary no-underline shadow-none xs:basis-[calc((100%_-_2rem)/3)]"
      href={item.url}
    >
      {slot3108}
      {slot3115}
    </UseChatgptComposerControllerHelper74>
  );
}
function useChatgptComposerControllerHelper84(event) {
  event.currentTarget.hidden = true;
}
function useChatgptComposerControllerHelper85(
  request4429,
) {
  let slot10398 = Array.isArray(
      request4429.items,
    )
      ? request4429.items
      : [],
    slot10399 = Array.isArray(
      request4429.domains,
    )
      ? request4429.domains
      : [];
  return [
    ...slot10398,
    ...slot10399,
  ].flatMap((item) => {
    let slot11591 =
        useChatgptComposerControllerHelper78(item),
      slot11592 =
        useChatgptComposerControllerHelper76(
          slot11591?.title,
        ),
      slot11593 =
        useChatgptComposerControllerHelper76(
          slot11591?.url,
        );
    return slot11592 == null
      ? []
      : [
          {
            attribution:
              useChatgptComposerControllerHelper76(
                slot11591?.attribution,
              ) ??
              useChatgptComposerControllerHelper77(
                slot11593,
              ) ??
              slot11593,
            dateLabel: useChatgptComposerControllerHelper76(
              slot11591?.date_label,
            ),
            pubDate: $d(slot11591?.pub_date),
            subtitle:
              useChatgptComposerControllerHelper76(
                slot11591?.subtitle,
              ) ??
              useChatgptComposerControllerHelper76(
                slot11591?.snippet,
              ) ??
              useChatgptComposerControllerHelper76(
                slot11591?.domain,
              ) ??
              useChatgptComposerControllerHelper77(
                slot11593,
              ),
            thumbnailUrl: useChatgptComposerControllerHelper76(
              slot11591?.thumbnail_url,
            ),
            title: slot11592,
            url: slot11593,
          },
        ];
  });
}
function useChatgptComposerControllerHelper86(
  request7356,
) {
  let slot13721 =
    useChatgptComposerControllerHelper76(
      request7356.page_title,
    ) ??
    useChatgptComposerControllerHelper76(
      request7356.display_title,
    );
  return slot13721 == null
    ? []
    : [
        {
          subtitle:
            useChatgptComposerControllerHelper76(
              request7356.snippet,
            ) ??
            useChatgptComposerControllerHelper76(
              request7356.display_title,
            ),
          thumbnailUrl: null,
          title: slot13721,
          url: useChatgptComposerControllerHelper76(
            request7356.url,
          ),
        },
      ];
}
function useChatgptComposerControllerHelper87(
  request5967,
  request5968,
) {
  if (request5968 == null) return null;
  let slot12306 = new Date(
      request5968 * 1e3,
    ),
    slot12307 = Math.max(
      Math.floor(
        (Date.now() - slot12306.getTime()) /
          86400000,
      ),
      0,
    );
  if (slot12307 > _f)
    return request5967.formatDate(
      slot12306,
      {
        dateStyle: "medium",
      },
    );
  let slot12308 =
    request5967.formatRelativeTime(
      -slot12307,
      "day",
      {
        numeric: "auto",
      },
    );
  return request5967.locale.startsWith("en")
    ? `${slot12308.charAt(0).toUpperCase()}${slot12308.slice(1)}`
    : slot12308;
}
