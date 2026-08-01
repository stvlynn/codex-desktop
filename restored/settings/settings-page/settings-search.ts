// Restored from ref/webview/assets/settings-page-CXDiYo2f.js
// Settings search scoring, document loading, and search-index enrichment.

import { useEffect, useState } from "react";
import { useAppScopeAtomValue } from "../../composer/composer-appscope-atoms";
import { codexMicroDeviceNameMessages } from "../../devices/codex-micro-device-name-messages";
import { DEFAULT_LOCALE } from "../../i18n/default-locale";
import { displayLanguageName } from "../../i18n/display-language-name";
import { useIntl } from "../../i18n/use-intl";
import {
  ensureViteModulepreloadRuntime,
  vitePreload,
} from "../../runtime/vite-preload";
import { deferredUiNE } from "../../ui/deferred-ui-ne";
import { deferredVM } from "../../ui/deferred-vm";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { lookupMessageDescriptor } from "../../utils/lookup-message-descriptor";
import { scoreFuzzyMatch } from "../../utils/score-fuzzy-match";
import { generalSettings2 } from "../general-settings2";
import { settingsNavAppearanceMessages } from "../settings-nav-appearance-messages";
import { SETTINGS_SECTION_IDS } from "../settings-section-ids";
import { isSettingsBetaSectionHidden as settingsRouteStateAState } from "../settings-route-state";
import { deferredBrowserY0 } from "./runtime-bridges";

export type SettingsSearchDocument = {
  messages: Array<{ id: string; defaultMessage?: string }>;
  sectionSlug: string;
  terms?: string[];
};
export type SettingsSearchHit = {
  label: string;
  panelLabel: string;
  sectionSlug: string;
  matchPriority?: number;
  score?: number;
};

export type SettingsSearchIndexOptions = {
  enabled: boolean;
  query: string;
  selectedHostId: string;
};
export function collectSettingsSearchHits({
  codexMicroDeviceModel,
  intl,
  query,
  targets,
  visibleSectionSlugs,
}: {
  codexMicroDeviceModel: string | null;
  intl: {
    formatMessage: (...args: any[]) => string;
    locale: string;
    messages: Record<string, unknown>;
  };
  query: string;
  targets: SettingsSearchDocument[];
  visibleSectionSlugs: string[];
}) {
  if (query.trim().length === 0) return [];
  let queryTokens = query.trim().split(/\s+/).filter(Boolean),
    slugToVisibleIndex = new Map();
  for (let [visibleIndex, sectionSlug] of visibleSectionSlugs.entries())
    slugToVisibleIndex.has(sectionSlug) ||
      slugToVisibleIndex.set(sectionSlug, visibleIndex);
  return targets
    .flatMap((item) => {
      if (!slugToVisibleIndex.has(item.sectionSlug)) return [];
      let scoredHit = scoreSettingsSearchDocument(
        getCachedSettingsSearchFields(intl, item, codexMicroDeviceModel),
        query,
        queryTokens,
      );
      return scoredHit == null ? [] : [scoredHit];
    })
    .sort((left, right) =>
      left.matchPriority === right.matchPriority
        ? left.score === right.score
          ? (slugToVisibleIndex.get(left.sectionSlug) ?? 0) -
            (slugToVisibleIndex.get(right.sectionSlug) ?? 0)
          : right.score - left.score
        : left.matchPriority - right.matchPriority,
    )
    .map(({ label, panelLabel, sectionSlug }) => ({
      label,
      panelLabel,
      sectionSlug,
    }));
}

function scoreSettingsSearchDocument(fields, query, queryTokens) {
  let { messageTexts, panelLabel, sectionSlug, termTexts } = fields,
    panelScore = scoreFuzzyMatch(panelLabel, query);
  if (panelScore > 0)
    return {
      label: panelLabel,
      matchPriority: 0,
      panelLabel,
      score: panelScore,
      sectionSlug,
    };
  let termScore = sumTokenMatchScores([panelLabel, ...termTexts], queryTokens);
  if (termScore > 0)
    return {
      label: preferPlainSearchLabel(
        bestMatchingSearchText(termTexts, query, queryTokens)?.text,
        panelLabel,
      ),
      matchPriority: 1,
      panelLabel,
      score: termScore,
      sectionSlug,
    };
  let messageScore = sumTokenMatchScores(
    [panelLabel, ...messageTexts],
    queryTokens,
  );
  return messageScore === 0
    ? null
    : {
        label: preferPlainSearchLabel(
          bestMatchingSearchText(messageTexts, query, queryTokens)?.text,
          panelLabel,
        ),
        matchPriority: 2,
        panelLabel,
        score: messageScore,
        sectionSlug,
      };
}
function bestMatchingSearchText(candidates, query, queryTokens) {
  let bestMatch = null;
  for (let candidate of candidates) {
    let score = Math.max(
      scoreFuzzyMatch(candidate, query),
      ...queryTokens.map((item) => scoreFuzzyMatch(candidate, item)),
    );
    score > 0 &&
      (bestMatch == null || score > bestMatch.score) &&
      (bestMatch = {
        score: score,
        text: candidate,
      });
  }
  return bestMatch;
}
function preferPlainSearchLabel(candidateLabel, fallbackLabel) {
  return candidateLabel == null || /[<{]/u.test(candidateLabel)
    ? fallbackLabel
    : candidateLabel;
}
function sumTokenMatchScores(texts, tokens) {
  let tokenScores = tokens.map((item) =>
    Math.max(0, ...texts.map((_item) => scoreFuzzyMatch(_item, item))),
  );
  return tokenScores.length === 0 || tokenScores.some((item) => item === 0)
    ? 0
    : tokenScores.reduce((accumulator, current) => accumulator + current, 0);
}
function getCachedSettingsSearchFields(intl, document, codexMicroDeviceModel) {
  let intlCache = settingsSearchFieldsCache.get(intl);
  intlCache ??
    ((intlCache = new WeakMap()),
    settingsSearchFieldsCache.set(intl, intlCache));
  let documentCache = intlCache.get(document);
  documentCache ??
    ((documentCache = new Map()), intlCache.set(document, documentCache));
  let cachedFields = documentCache.get(codexMicroDeviceModel);
  if (cachedFields != null) return cachedFields;
  let computedFields = {
    messageTexts: document.messages.map((item) => {
      let catalogMessage = intl.messages[item.id];
      return typeof catalogMessage == "string"
        ? catalogMessage
        : item.defaultMessage;
    }),
    panelLabel:
      document.sectionSlug === "codex-micro" &&
      codexMicroDeviceModel === "creator-micro-v2"
        ? intl.formatMessage(codexMicroDeviceNameMessages.creatorMicro)
        : intl.formatMessage(lookupMessageDescriptor(document.sectionSlug)),
    sectionSlug: document.sectionSlug,
    termTexts: document.terms ?? [],
  };
  return (
    documentCache.set(codexMicroDeviceModel, computedFields),
    computedFields
  );
}

let settingsSearchFieldsCache = new WeakMap();

function useSettingsSearchDocuments(options) {
  let [loadedDocuments, setLoadedDocuments] = useState(null),
    loadDocumentsEffect = () => {
      if (!options.enabled || loadedDocuments != null) return;
      let cancelled = false;
      return (
        loadSettingsSearchDocumentsModule()
          .then((value) => {
            cancelled || setLoadedDocuments(value);
          })
          .catch(ignoreSettingsSearchLoadError),
        () => {
          cancelled = true;
        }
      );
    };
  let loadDocumentsDeps;
  loadDocumentsDeps = [options.enabled, options.query, loadedDocuments];
  useEffect(loadDocumentsEffect, loadDocumentsDeps);
  return SETTINGS_SECTION_IDS.map((item) => {
    let extraTerms = SETTINGS_SECTION_EXTRA_TERMS[item];
    return {
      messages: loadedDocuments?.[item] ?? [],
      sectionSlug: item,
      ...(extraTerms == null
        ? {}
        : {
            terms: extraTerms,
          }),
    };
  });
}
function ignoreSettingsSearchLoadError() {}
function loadSettingsSearchDocumentsModule() {
  return (
    (settingsSearchDocumentsPromise ??= vitePreload(
      () =>
        import("../settings-search-documents").then(
          (value) => value.settingsSearchDocuments,
        ),
      [],
      import.meta.url,
    ).catch((error) => {
      throw ((settingsSearchDocumentsPromise = null), error);
    })),
    settingsSearchDocumentsPromise
  );
}

const SETTINGS_SECTION_EXTRA_TERMS = {
  connections: ["Mobile", "Phone", "Pairing", "Remote control"],
};
let settingsSearchDocumentsPromise = null;

export function useSettingsSearchIndex(options: SettingsSearchIndexOptions) {
  let intl = useIntl(),
    documents = useSettingsSearchDocuments(options),
    { data } = lerpIfFinite(),
    isSystemBackdropSupported = data?.isSystemBackdropSupported !== false,
    { data: _data = [] } = useAppScopeAtomValue(
      deferredBrowserY0,
      options.selectedHostId,
    );
  let remoteEntities = _data,
    agentSearchTexts = remoteEntities
      .filter(settingsRouteStateAState)
      .flatMap(collectSettingsEntitySearchTexts);
  let agentTerms = agentSearchTexts,
    localeDisplayNames = [
      {
        locale: DEFAULT_LOCALE,
        language: "en",
      },
      ...deferredUiNE().map(toSettingsLocaleLanguage),
    ].flatMap((item) => {
      let { language, locale } = item;
      return [
        displayLanguageName(locale, locale),
        displayLanguageName(language, intl.locale),
      ];
    });
  let generalSettingsTerms = localeDisplayNames,
    enrichedDocuments;
  {
    let enrichDocument;
    enrichDocument = (document) =>
      document.sectionSlug === "appearance" && !isSystemBackdropSupported
        ? {
            ...document,
            messages: document.messages.filter(isSettingsSidebarItemVisible),
          }
        : document.sectionSlug === "agent"
          ? {
              ...document,
              terms: agentTerms,
            }
          : document.sectionSlug === "general-settings"
            ? {
                ...document,
                terms: generalSettingsTerms,
              }
            : document;
    enrichedDocuments = documents.map(enrichDocument);
  }
  return enrichedDocuments;
}
function isSettingsSidebarItemVisible(messageDescriptor) {
  return !TRANSLUCENT_SIDEBAR_MESSAGE_IDS.includes(messageDescriptor.id);
}
function toSettingsLocaleLanguage(localeEntry) {
  return {
    locale: localeEntry.locale,
    language: localeEntry.locale,
  };
}
function collectSettingsEntitySearchTexts(entity) {
  return [
    entity.displayName ?? entity.name,
    ...(entity.description == null ? [] : [entity.description]),
  ];
}

const TRANSLUCENT_SIDEBAR_MESSAGE_IDS = [
  "settings.general.appearance.chromeTheme.translucentSidebar",
  "settings.general.appearance.chromeTheme.translucentSidebar.short",
];
