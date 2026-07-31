// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Forecast/file/entity content-reference surfaces module.

import {
  ensureAppScopeHostInit as appInitialMT,
  ensureAppScopeInit as appInitialIft,
  appScopeAtom as appInitialFft,
  useAppScope as appInitialLT,
} from "../../../runtime/app-scope-runtime";
import { writingBlocksControllerAtom as appInitialCI } from "../../../boundaries/composer-appscope-atoms";
import {
  ensureComposerEsm_b8_Init as appInitialB8,
  ensureComposerEsm_drt_Init as appInitialDrt,
  ensureComposerEsm_GI_Init as AppInitialGI,
  ensureComposerEsm_h6_Init as appInitialH6,
  ensureComposerEsm_JL_Init as appInitialJL,
  ensureComposerEsm_kut_Init as appInitialKut,
  ensureComposerEsm_NH_Init as AppInitialNH,
  ensureComposerEsm_oL_Init as AppInitialOL,
  ensureComposerEsm_QN_Init as appInitialQN,
  ensureComposerEsm_Qtt_Init as appInitialQtt,
  ensureComposerEsm_S8_Init as _appInitial8,
  ensureComposerEsm_Sdt_Init as appInitialDt,
  ensureComposerEsm_Sut_Init as appInitialSut,
  ensureComposerEsm_TI_Init as appInitialTI,
  ensureComposerEsm_Tft_Init as appInitialTft,
  ensureComposerEsm_udt_Init as appInitialUdt,
  ensureComposerEsm_xH_Init as appInitialXH,
  ensureComposerEsm_ZI_Init as appInitialZI,
} from "../../../boundaries/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../../boundaries/react-cjs-runtime";
import { resolveArtifactFileIcon as appInitialBH } from "../../../artifact/resolve-artifact-file-icon";
import { pickContentReferenceUrl as AppInitialSI } from "../../../content/pick-content-reference-url";
import { ArtifactReferenceLink as appInitialWL } from "../../../conversation/artifact-reference-link";
import { submitComposerPromptIfIdle as appInitialN } from "../../../conversation/submit-composer-prompt-if-idle";
import {
  ensureIntlFormattersInit as appInitialHft,
  useIntl as appInitialJft,
} from "../../../i18n/use-intl";
const _appInitialHft = appInitialHft;
import { appLogger as appInitialDdt } from "../../../logging/app-logger";
import { withDecoratedMarkdownRenderers as AppInitialKI } from "../../../markdown/with-decorated-markdown-renderers";
import { pluginMentionMessages as AppInitialKL } from "../../../markdown/plugin-mention-messages";
import { findModelVersionOptionId as _AppInitialOI } from "../../../models/find-model-version-option-id";
import { usePrefersReducedMotion as appInitialAut } from "../../../motion/use-prefers-reduced-motion";
import { NavigationAllowContext as _appInitialIL } from "../../../navigation/navigation-allow-context";
import { handleAnchorOpenHref as appInitialEnt } from "../../../navigation/handle-anchor-open-href";
import { VERTICAL_TAB_CHAR as appInitialM6 } from "../../../config/vertical-tab-char";
import { ThreadResourceCard as _appInitialYI } from "../../../thread/thread-resource-card";
import { ThreadResourceCard as appInitialYI } from "../../../thread/thread-resource-card";
import { cx as appInitialWft } from "../../../ui/cx";
import { ListRowContent as appInitialXI } from "../../../ui/list-row-content";
import { Spinner as appInitialXut } from "../../../ui/spinner";
import { createLocalChatgptId as _appInitialLI } from "../../../utils/create-local-chatgpt-id";
import { Lexer as appInitialPrt } from "../../../vendor/marked";
import {
  zodObject as appInitialXT,
  zodRecord as appInitialST,
  zodString as appInitialCT,
  zodUnknown as appInitialET,
} from "../../../vendor/zod";
const __appInitialCT = appInitialCT;
import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../../runtime/rolldown-runtime";
import { ReplyArrowIcon } from "../chatgpt-reply-arrow-icon";
import {
  useChatgptComposerControllerHelper31,
  ensureChatgptBrowserHostContextInit,
} from "../chatgpt-browser-host-context";
import {
  useChatgptComposerControllerHelper64,
  useChatgptComposerControllerHelper70,
} from "../chatgpt-content-reference-cards";
import { useChatgptComposerControllerHelper65 } from "../chatgpt-composer-confirmation-link";
import {
  useChatgptComposerControllerHelper75,
  useChatgptComposerControllerHelper76,
  useChatgptComposerControllerHelper78,
  $d,
} from "../chatgpt-news-reference-helpers";
import { useChatgptComposerControllerHelper91 } from "../chatgpt-entity-tab-launch";
import {
  useChatgptComposerControllerB,
  useChatgptComposerControllerX,
} from "../ensure-chatgpt-composer-controller-context-inits";
import {
  useChatgptComposerControllerH,
  useChatgptComposerControllerUnderscore,
  _useChatgptComposerControllerM,
  resolveChatgptArtifactTargetFromReference as a_,
} from "../open-chatgpt-artifact-in-writing-blocks";
import { _useChatgptComposerControllerP } from "../can-create-chatgpt-temporary-workspace-file";
import { isChatgptMessageNode as _AppInitialNI } from "../../../conversation/is-chatgpt-message-node";

/** Boundary still owns Value43; call through browser-host ensure bridge. */
const slot43 = ensureChatgptBrowserHostContextInit;

/** Residual stub peers still registered on the open boundary. */
const slot81 = rolldownRuntimeN(() => {});
const slot85 = rolldownRuntimeN(() => {});
const slot88 = rolldownRuntimeN(() => {});
const slot92 = rolldownRuntimeN(() => {});
const slot98 = rolldownRuntimeN(() => {});

let slot234: any;
let slot235: any;
const slot236 = rolldownRuntimeN(() => {
  slot234 = appInitialIvt();
  appInitialHft();
  appInitialJL();
  AppInitialNH();
  _appInitialYI();
  slot235 = appInitialJvt();
});

function $g(request1706) {
  let { contentReferenceIndex, reference, turnContext } = request1706,
    slot5677 = appInitialLT(_appInitial8),
    slot5678 = appInitialJft(),
    slot5679 = t_.useContext(useChatgptComposerControllerB),
    slot5680 = r_.safeParse(reference);
  let slot5681 = slot5680,
    slot5682 =
      turnContext.contentReferenceMessageIds?.[contentReferenceIndex] ??
      turnContext.messageId,
    slot5683 = _appInitialLI(reference);
  let slot5684 = slot5683;
  if (!slot5681.success || slot5682 == null) return null;
  let slot5685 =
    slot5681.data.name ??
    slot5681.data.alt ??
    slot5681.data.prompt_text ??
    slot5684?.name;
  if (slot5685 == null) return null;
  let slot5686 = () => {
    let slot12659 = {
      category: slot5681.data.category ?? slot5684?.category ?? null,
      extraParams: slot5681.data.extra_params ?? null,
      locale: slot5678.locale,
      messageId: slot5682,
      query: slot5685,
      sourceConversationId: turnContext.conversationId,
    };
    if (slot5679 != null) {
      slot5679(slot12659);
      return;
    }
    useChatgptComposerControllerHelper91(slot5677, slot12659);
  };
  let slot5687 = slot5686;
  return (
    <button
      type="button"
      className="cursor-interaction rounded-sm text-token-text-primary underline decoration-token-text-tertiary underline-offset-2 hover:decoration-token-text-primary"
      onClick={slot5687}
    >
      {slot5685}
    </button>
  );
}
let e_: any;
let t_: any;
let n_: any;
let r_: any;
const i_ = rolldownRuntimeN(() => {
  e_ = appInitialIvt();
  appInitialMT();
  t_ = rolldownRuntimeS(appInitialLvt(), 1);
  appInitialHft();
  __appInitialCT();
  appInitialB8();
  _appInitialYI();
  slot98();
  useChatgptComposerControllerX();
  n_ = appInitialJvt();
  r_ = appInitialXT({
    alt: appInitialCT().trim().min(1).nullable().optional(),
    category: appInitialCT().nullable().optional(),
    extra_params: appInitialST(appInitialCT(), appInitialET())
      .nullable()
      .optional(),
    name: appInitialCT().trim().min(1).nullable().optional(),
    prompt_text: appInitialCT().trim().min(1).nullable().optional(),
  }).passthrough();
});

function E_(request10825) {
  let slot15869 = AppInitialSI(request10825);
  return slot15869 == null ? null : (_appInitialIL(slot15869) ?? null);
}
const D_ = rolldownRuntimeN(() => {
  AppInitialOL();
  _appInitialYI();
});

function O_(request5135) {
  const UseChatgptComposerControllerHelper65 =
    useChatgptComposerControllerHelper65;
  let { children, className, href } = request5135,
    slot11282 = appInitialWft("cursor-interaction", className);
  return (
    <UseChatgptComposerControllerHelper65
      className={slot11282}
      href={href}
      initiator="markdown_link_click"
    >
      {children}
    </UseChatgptComposerControllerHelper65>
  );
}
let k_: any;
let A_: any;
const j_ = rolldownRuntimeN(() => {
  k_ = appInitialIvt();
  appInitialTft();
  slot85();
  A_ = appInitialJvt();
});

function M_(request239) {
  const UseChatgptComposerControllerHelper70 =
    useChatgptComposerControllerHelper70;
  const AppInitialWL = appInitialWL;
  const Slot1644 = slot1644;
  const AppInitialXut = appInitialXut;
  const AppInitialXI2 = appInitialXI;
  const AppInitialYI = appInitialYI;
  let { contentReferenceIndex, reference } = request239,
    slot1638 = appInitialLT(appInitialFft),
    slot1639 = appInitialLT(_appInitial8),
    slot1640 = appInitialJft(),
    slot1641 = useChatgptComposerControllerHelper31(),
    [slot1642, slot1643] = I_.useState(false),
    slot1644,
    slot1645,
    slot1646,
    slot1647,
    slot1648,
    slot1649,
    slot1650,
    slot1651,
    slot1652;
  slot1652 = Symbol.for("react.early_return_sentinel");
  bb0: {
    if (((slot1647 = P_(reference)), slot1647 == null)) {
      let slot14621;
      slot14621 = (
        <UseChatgptComposerControllerHelper70 reference={reference} />
      );
      slot1652 = slot14621;
      break bb0;
    }
    let slot2828 = a_(reference);
    slot1649 = slot2828 != null && slot1641?.shouldBlockExternalEgress === true;
    slot1646 = slot2828 != null && !slot1649;
    let slot2829 = _useChatgptComposerControllerP();
    if (
      ((slot1648 =
        slot1641?.shouldBlockExternalEgress === true ? null : E_(reference)),
      (slot1650 = () => {
        slot1642 ||
          slot2828 == null ||
          (slot1643(true),
          useChatgptComposerControllerH(slot1639, slot1638.get(appInitialCI), {
            conversationId: slot1641?.conversationId,
            fileName: slot1647,
            tabKey: `${slot1641?.messageId ?? "message"}:${String(contentReferenceIndex)}:${slot1647}`,
            target: slot2828,
          })
            .catch(N_)
            .finally(() => {
              slot1643(false);
            }));
      }),
      slot1646
        ? (slot1645 =
            slot2829 && slot1642
              ? slot1640.formatMessage(
                  {
                    id: "chatgpt.contentReferences.file.openingPreview.ariaLabel",
                    defaultMessage: "Opening preview of {fileName}",
                    description:
                      "Accessible label for a disabled ChatGPT file reference card while its file is being prepared for the right-side preview panel. The fileName placeholder is the displayed file name.",
                  },
                  {
                    fileName: slot1647,
                  },
                )
              : slot2829
                ? slot1640.formatMessage(
                    {
                      id: "chatgpt.contentReferences.file.openPreview.ariaLabel",
                      defaultMessage: "Open preview of {fileName}",
                      description:
                        "Accessible label for a ChatGPT file reference card that downloads the file and opens it in the right-side preview panel. The fileName placeholder is the displayed file name.",
                    },
                    {
                      fileName: slot1647,
                    },
                  )
                : slot1642
                  ? slot1640.formatMessage(
                      {
                        id: "chatgpt.contentReferences.file.downloading.ariaLabel",
                        defaultMessage: "Downloading {fileName}",
                        description:
                          "Accessible label for a disabled ChatGPT file reference card while its file download is pending. The fileName placeholder is the displayed file name.",
                      },
                      {
                        fileName: slot1647,
                      },
                    )
                  : slot1640.formatMessage(
                      {
                        id: "chatgpt.contentReferences.file.download.ariaLabel",
                        defaultMessage: "Download {fileName}",
                        description:
                          "Accessible label for a ChatGPT file reference card that downloads a file attached to a response. The fileName placeholder is the displayed file name.",
                      },
                      {
                        fileName: slot1647,
                      },
                    ))
        : slot1649 &&
          (slot1645 = slot2829
            ? slot1640.formatMessage(
                {
                  id: "chatgpt.contentReferences.file.previewBlocked.ariaLabel",
                  defaultMessage:
                    "Preview of {fileName} unavailable in lockdown mode",
                  description:
                    "Accessible label for a disabled ChatGPT file reference card when lockdown mode blocks downloading the file for the right-side preview panel. The fileName placeholder is the displayed file name.",
                },
                {
                  fileName: slot1647,
                },
              )
            : slot1640.formatMessage(
                {
                  id: "chatgpt.contentReferences.file.downloadBlocked.ariaLabel",
                  defaultMessage:
                    "Download {fileName} unavailable in lockdown mode",
                  description:
                    "Accessible label for a disabled ChatGPT file reference card when lockdown mode blocks downloading the file. The fileName placeholder is the displayed file name.",
                },
                {
                  fileName: slot1647,
                },
              )),
      slot1641?.conversationOrigin === "tpp")
    ) {
      slot1652 = (
        <AppInitialWL
          reference={{
            path: slot1647,
          }}
          ariaBusy={slot1642}
          ariaLabel={slot1645 ?? slot1647}
          cwd={null}
          disabled={slot1642 || (!slot1646 && slot1648 == null)}
          enableWorkspaceFileActions={false}
          hostId={slot1641.hostId}
          label={slot1647}
          onOpen={(request7351, request7352) => {
            slot1646
              ? slot1650()
              : slot1648 != null &&
                appInitialEnt({
                  event: request7352,
                  hostId: slot1641.hostId,
                  href: slot1648,
                  initiator: "markdown_link_click",
                });
          }}
        />
      );
      break bb0;
    }
    slot1644 = appInitialBH(slot1647);
    slot1651 = appInitialM6(slot1647)?.toUpperCase();
  }
  if (slot1652 !== Symbol.for("react.early_return_sentinel")) return slot1652;
  let slot1653 = slot1651,
    slot1654 = null;
  if (slot1646) {
    let slot10617;
    slot10617 = (
      <button
        aria-busy={slot1642}
        aria-label={slot1645}
        className="absolute inset-0 cursor-interaction bg-transparent hover:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait"
        disabled={slot1642}
        onClick={slot1650}
        type="button"
      />
    );
    slot1654 = slot10617;
  } else if (slot1648 != null) {
    let slot11023 = <span className="sr-only">{slot1647}</span>;
    let slot11024;
    slot11024 = (
      <O_
        className="absolute inset-0 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset"
        href={slot1648}
      >
        {slot11023}
      </O_>
    );
    slot1654 = slot11024;
  } else if (slot1649) {
    let slot13413;
    slot13413 = (
      <button
        aria-label={slot1645}
        className="absolute inset-0 bg-transparent"
        disabled={true}
        type="button"
      />
    );
    slot1654 = slot13413;
  }
  let slot1655 = (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary">
      {<Slot1644 aria-hidden={true} className="size-6" />}
    </span>
  );
  let slot1656 = slot1642 ? <AppInitialXut aria-hidden={true} /> : undefined;
  let slot1657 = (
    <AppInitialXI2
      className="pointer-events-none relative z-10"
      icon={slot1655}
      subtitle={slot1653}
      title={slot1647}
      titleTooltip={slot1647}
      trailing={slot1656}
    />
  );
  return (
    <AppInitialYI as="span" className="mt-3">
      <span className="relative">
        {slot1654}
        {slot1657}
      </span>
    </AppInitialYI>
  );
}
function N_(request9525) {
  appInitialDdt.warning("ChatGPT content reference file open failed", {
    safe: {},
    sensitive: {
      error: request9525,
    },
  });
}
function P_(request11130) {
  return (
    useChatgptComposerControllerHelper76(request11130.name) ??
    useChatgptComposerControllerHelper76(request11130.file_name) ??
    _AppInitialOI(request11130)
  );
}
let F_: any;
let I_: any;
let L_: any;
const R_ = rolldownRuntimeN(() => {
  F_ = appInitialIvt();
  appInitialMT();
  I_ = rolldownRuntimeS(appInitialLvt(), 1);
  appInitialHft();
  appInitialQtt();
  AppInitialKL();
  appInitialSut();
  appInitialH6();
  appInitialXH();
  appInitialIft();
  appInitialB8();
  appInitialZI();
  appInitialUdt();
  useChatgptComposerControllerUnderscore();
  _appInitialYI();
  appInitialTI();
  slot43();
  _useChatgptComposerControllerM();
  D_();
  slot88();
  j_();
  slot92();
  L_ = appInitialJvt();
});

let z_: any;
let B_: any;
const V_ = rolldownRuntimeN(() => {
  appInitialLvt();
  z_ = appInitialJvt();
  B_ = ReplyArrowIcon;
});

function H_(request708) {
  const Span = _appInitialHft.span;
  let { reference } = request708,
    slot3446 = appInitialLT(_appInitial8),
    slot3447 = useChatgptComposerControllerHelper31(),
    slot3448 = appInitialAut(),
    slot3449,
    slot3450,
    slot3451,
    slot3452,
    slot3453,
    slot3454,
    slot3455,
    slot3456,
    slot3457;
  slot3457 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let slot5171 =
        useChatgptComposerControllerHelper76(reference.prompt_text) ??
        useChatgptComposerControllerHelper76(reference.matched_text) ??
        _AppInitialNI(reference),
      slot5172 =
        useChatgptComposerControllerHelper76(reference.matched_text) ??
        slot5171;
    if (slot5171 == null || slot5172 == null) {
      slot3457 = null;
      break bb0;
    }
    let slot5173 = () => {
      slot3447 != null &&
        appInitialN(slot3446, {
          conversationId: slot3447.conversationId,
          messageMetadata: {
            followups_v2_followup_clicked: true,
          },
          prompt: slot5171,
        }).catch(U_);
    };
    slot3451 =
      "group/followup-citation inline cursor-interaction align-baseline whitespace-nowrap text-inherit underline decoration-token-text-tertiary decoration-dotted decoration-[0.5px] underline-offset-[2px] hover:text-token-text-link-foreground hover:decoration-inherit";
    slot3452 = "button";
    slot3453 = 0;
    slot3454 = slot5173;
    slot3455 = (event) => {
      (event.key === "Enter" || event.key === " ") &&
        (event.preventDefault(), slot5173());
    };
    let slot5174 = slot3448
      ? false
      : {
          opacity: 0,
          width: 0,
        };
    let slot5175 = {
      opacity: 1,
      width: "1.5rem",
    };
    let slot5176 = slot3448 ? undefined : q_,
      slot5177;
    slot5177 = (
      <B_ className="icon inline-block text-token-text-primary transition-transform duration-basic ease-out group-hover/followup-citation:translate-x-0.5 group-hover/followup-citation:text-token-text-link-foreground" />
    );
    slot3456 = (
      <Span
        aria-hidden="true"
        className="inline-flex items-center overflow-hidden align-middle"
        initial={slot5174}
        animate={slot5175}
        transition={slot5176}
      >
        {slot5177}
      </Span>
    );
    slot3449 =
      "whitespace-normal group-hover/followup-citation:text-token-text-link-foreground";
    slot3450 = AppInitialKI(W_(slot5172), {});
  }
  if (slot3457 !== Symbol.for("react.early_return_sentinel")) return slot3457;
  let slot3458 = <span className={slot3449}>{slot3450}</span>;
  return (
    <span
      className={slot3451}
      role={slot3452}
      tabIndex={slot3453}
      onClick={slot3454}
      onKeyDown={slot3455}
    >
      {slot3456}
      {slot3458}
    </span>
  );
}
function U_(request9478) {
  appInitialDdt.error("ChatGPT followup content reference submit failed", {
    safe: {},
    sensitive: {
      error: request9478,
    },
  });
}
function W_(request6844) {
  let slot13212 = (request7531) => {
    return request7531.map((item) => {
      return (item.type === "strong" || item.type === "em") &&
        item.tokens != null
        ? {
            ...item,
            tokens: slot13212(item.tokens),
          }
        : item.type === "text" || item.type === "escape"
          ? item
          : {
              type: "text",
              raw: item.raw,
              text: item.raw,
            };
    });
  };
  return slot13212(appInitialPrt.lexInline(request6844));
}
let G_: any;
let K_: any;
let q_: any;
const J_ = rolldownRuntimeN(() => {
  G_ = appInitialIvt();
  appInitialDt();
  appInitialMT();
  appInitialDrt();
  AppInitialGI();
  appInitialKut();
  V_();
  appInitialB8();
  appInitialUdt();
  _appInitialYI();
  appInitialQN();
  slot43();
  slot92();
  K_ = appInitialJvt();
  q_ = {
    duration: 0.2,
    ease: [0.22, 0.61, 0.36, 1],
  };
});

function Y_(request1907) {
  const UseChatgptComposerControllerHelper64 =
    useChatgptComposerControllerHelper64;
  let { reference } = request1907,
    slot6037 = appInitialJft(),
    slot6038;
  {
    let slot6439 = useChatgptComposerControllerHelper78(reference.forecast),
      slot6440 = useChatgptComposerControllerHelper78(slot6439?.location),
      slot6441 = useChatgptComposerControllerHelper78(slot6439?.current),
      slot6442 = useChatgptComposerControllerHelper78(slot6441?.temperature),
      slot6443 = useChatgptComposerControllerHelper78(slot6441?.description),
      slot6444 = Array.isArray(slot6439?.daily) ? slot6439.daily : [],
      slot6445 = $d(slot6442?.current),
      slot6446 = useChatgptComposerControllerHelper76(slot6443?.description),
      slot6447 =
        useChatgptComposerControllerHelper76(slot6440?.name) ??
        slot6037.formatMessage({
          id: "chatgpt.contentReferences.forecast.title",
          defaultMessage: "Weather",
          description:
            "Fallback title for a weather forecast content reference card",
        }),
      slot6448 =
        slot6445 == null ? null : (
          <div className="text-3xl font-semibold">
            {useChatgptComposerControllerHelper75(slot6445, {
              maximumFractionDigits: 0,
            })}
            {slot237}
          </div>
        ),
      slot6449 =
        slot6446 == null ? null : (
          <div className="text-token-text-secondary">{slot6446}</div>
        ),
      slot6450;
    slot6450 = (
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {slot6448}
        {slot6449}
      </div>
    );
    slot6038 = (
      <UseChatgptComposerControllerHelper64 title={slot6447}>
        {slot6450}
        {slot6444.length === 0 ? null : (
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {slot6444.slice(0, 3).map(X_)}
          </div>
        )}
      </UseChatgptComposerControllerHelper64>
    );
  }
  return slot6038;
}
function X_(request11063, request11064) {
  return <Z_ key={String(request11064)} day={request11063} />;
}
function Z_(request1742) {
  let { day } = request1742,
    slot5775,
    slot5776,
    slot5777,
    slot5778,
    slot5779,
    slot5780;
  slot5780 = Symbol.for("react.early_return_sentinel");
  bb0: {
    let slot11972 = useChatgptComposerControllerHelper78(day),
      slot11973 = useChatgptComposerControllerHelper78(slot11972?.temperature),
      slot11974 = useChatgptComposerControllerHelper78(slot11972?.description);
    if (
      ((slot5778 = $d(slot11973?.min)),
      (slot5777 = $d(slot11973?.max)),
      (slot5776 = useChatgptComposerControllerHelper76(slot11974?.main)),
      slot5778 == null && slot5777 == null && slot5776 == null)
    ) {
      slot5780 = null;
      break bb0;
    }
    slot5775 =
      slot5778 == null
        ? null
        : `${useChatgptComposerControllerHelper75(slot5778, {
            maximumFractionDigits: 0,
          })}${slot237}`;
    slot5779 =
      slot5777 == null
        ? null
        : `${useChatgptComposerControllerHelper75(slot5777, {
            maximumFractionDigits: 0,
          })}${slot237}`;
  }
  if (slot5780 !== Symbol.for("react.early_return_sentinel")) return slot5780;
  let slot5781 = slot5779,
    slot5782 =
      slot5776 == null ? null : <div className="font-medium">{slot5776}</div>;
  let slot5783 =
    slot5778 == null && slot5777 == null ? null : (
      <div className="text-token-text-secondary">
        {slot5775}
        {slot5778 != null && slot5777 != null ? slot238 : null}
        {slot5781}
      </div>
    );
  return (
    <div className="rounded-md border border-token-border-light p-2 text-sm">
      {slot5782}
      {slot5783}
    </div>
  );
}
let Q_: any;
let $_: any;
let slot237: any;
let slot238: any;
const slot239 = rolldownRuntimeN(() => {
  Q_ = appInitialIvt();
  appInitialHft();
  slot81();
  slot92();
  $_ = appInitialJvt();
  slot237 = "°";
  slot238 = " / ";
});

export function getChatgptForecastFileSurfaces() {
  return {
    followupQueryChip: $g,
    fileContentReference: M_,
    entityRichCard: H_,
    forecastCard: Y_,
    safeContentReferenceHref: E_,
    contentReferenceAnchor: O_,
    mapsAttributionPeerInit: D_,
    locationSearchPeerInit: j_,
  };
}

export function getChatgptForecastFilePeers() {
  return {
    sportsLabelSurface: slot236,
    stockSurface: slot239,
    entityNav: i_,
    entityRichCardInit: R_,
    forecastSurface: J_,
  };
}
