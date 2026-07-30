// Restored from ref/webview/assets/use-avatar-overlay-selection-AlDkSEsR.js
// UseAvatarOverlaySelection chunk restored from the Codex webview bundle.
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 2/4
/* split-lane-import-depth:1 */

import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../runtime/rolldown-runtime";
// prettier-ignore
import { appInitial4, appInitial9, appInitialA5, appInitialA7, appInitialAC, appInitialAot, appInitialAr, appInitialC, appInitialC5, appInitialCdt, appInitialCot, appInitialCq, appInitialDdt, appInitialDot, appInitialDr, AppInitialDtt, appInitialEC, appInitialEl, appInitialFC, appInitialFft, appInitialFot, AppInitialFtt, AppInitialG4, appInitialG8, appInitialG9, AppInitialGC, appInitialGut, AppInitialH, appInitialHdt, appInitialHft, appInitialHut, AppInitialI5, appInitialIC, appInitialIft, appInitialIlt, appInitialIq, appInitialIT, appInitialIvt, appInitialJ7, appInitialJ9, appInitialJC, AppInitialJc, appInitialJft, appInitialJot, appInitialJY, appInitialK9, appInitialKC, AppInitialKC, appInitialKq, appInitialKut, appInitialL5, appInitialLC, appInitialLdt, appInitialLlt, appInitialLq, appInitialLT, appInitialLvt, appInitialLX, appInitialM4, appInitialMdt, appInitialMq, appInitialMr, appInitialMT, appInitialNC, appInitialNr, AppInitialO5, appInitialOpt, appInitialOr, appInitialOw, appInitialPC, AppInitialPot, appInitialPt, appInitialQC, AppInitialQc, AppInitialQT, appInitialRC, appInitialRT, appInitialRX, appInitialS, AppInitialS5, appInitialSdt, appInitialSot, appInitialSq, appInitialSw, appInitialTot, appInitialUC, appInitialUdt, appInitialUi, appInitialUtt, appInitialUut, AppInitialW, appInitialW8, appInitialWC, AppInitialWi, appInitialXC, appInitialXot, AppInitialXS, appInitialXT, appInitialY4, appInitialYC, AppInitialYT, appInitialYY, appInitialZC, appInitialZht, appInitialZS, AppInitialZT } from "./host-stubs";
import {
  avatarOverlayPillDismissButtonD,
  avatarOverlayPillDismissButtonF,
  avatarOverlayPillDismissButtonP,
} from "../../artifact/avatar-overlay-pill-dismiss-button";
import {
  customAvatarsQueryI,
  customAvatarsQueryN,
} from "../../desktop/custom-avatars-query";
export function useAvatarOverlaySelectionY() {
  let alpha = appInitialLT(appInitialFft),
    bravo = appInitialJft(),
    { accountId, authMethod, userId } = appInitialRX(),
    copper = appInitialYY(),
    { activeMode } = appInitialLq(),
    {
      agentMode,
      isAgentModePending,
      permissionProfileId,
      shouldSendPermissionOverrides,
    } = appInitialMq({
      conversationId: null,
      cwdOverride: copper.cwd ?? undefined,
      hostId: copper.hostId,
    }),
    { serviceTierSettings } = appInitialCq(),
    delta = appInitialXC() && true,
    { capabilityNames } = appInitialJC({
      enabled: delta,
      hostId: copper.hostId,
      root: copper.cwd,
    }),
    echo = appInitialRT(appInitialY4),
    falcon = appInitialRT(AppInitialG4) != null,
    gamma =
      delta &&
      echo?.session.greetingEnabled === true &&
      authMethod === "chatgpt",
    { data, isLoading } = AppInitialWi({
      accountId,
      enabled: gamma,
      userId,
    }),
    harbor = appInitialRT(appInitialFC),
    indigo = appInitialRT(appInitialAC),
    jade = appInitialRT(appInitialIC),
    kite = appInitialRT(appInitialLC),
    lemon = appInitialRT(appInitialZC),
    marble = appInitialRT(appInitialRC),
    [nickel] = appInitialJot("statsig_default_enable_features"),
    [onyx, pearl] = $.useState(false),
    [quartz, river] = $.useState(null),
    slate = $.useRef(false),
    timber = $.useRef(false),
    umbra = $.useRef(0),
    violet = $.useRef(false),
    willow = $.useRef(false),
    [xenon, yellow] = $.useState(false),
    zinc = quartz != null && marble === "starting",
    amber = echo != null && (!gamma || !isLoading),
    basalt =
      delta &&
      amber &&
      !xenon &&
      harbor == null &&
      marble === "inactive" &&
      navigator.mediaDevices?.getUserMedia != null &&
      typeof RTCPeerConnection < "u",
    cedar = !copper.isActiveWorkspaceRootLoading && !isAgentModePending,
    daisy = basalt && cedar,
    ember = () => {
      alpha.get(appInitialFC) == null &&
        alpha.get(appInitialRC) === "inactive" &&
        (pearl(false),
        appInitialHut.realtimeVoiceRuntime?.cancelRealtimeSessionStart());
    },
    flint = (olive) => {
      alpha.get(appInitialLlt).danger(
        olive instanceof DOMException && olive.name === "NotAllowedError"
          ? bravo.formatMessage({
              id: "composer.realtime.microphonePermissionError",
              defaultMessage:
                "Microphone access is required to start voice chat",
              description:
                "Toast shown when microphone permission blocks realtime voice startup",
            })
          : appInitialZht(olive) ||
              bravo.formatMessage({
                id: "avatarOverlay.realtime.createThreadError",
                defaultMessage: "Unable to start voice chat",
                description:
                  "Toast shown when creating a new realtime voice thread from the floating avatar fails",
              }),
      );
    },
    garnet = $.useEffectEvent(async (prism) => {
      let quill = appInitialS(prism, appInitialTot),
        reef = quill.type === "exact",
        sage = quill.type === "new",
        topaz = reef ? quill.locator.hostId : quill.hostId,
        ultra = prism.preferredPresentationSurface === "main-thread";
      if (sage && harbor != null) {
        violet.current = true;
        try {
          await appInitialPC.stop(alpha, harbor);
        } catch (iris) {
          throw ((violet.current = false), iris);
        }
      } else if (ultra && harbor != null) {
        let jewel = alpha.get(appInitial9),
          knoll =
            jewel.phase !== "inactive" &&
            jewel.locator.conversationId === harbor
              ? jewel.locator
              : {
                  conversationId: harbor,
                  hostId: topaz,
                };
        AppInitialW({
          locator: knoll,
          surface: "main-thread",
        });
        appInitialCdt.dispatchMessage("open-in-main-window", {
          path: appInitialPt(knoll.conversationId),
        });
        return;
      }
      if (
        !(sage
          ? delta &&
            amber &&
            !xenon &&
            alpha.get(appInitialFC) == null &&
            alpha.get(appInitialRC) === "inactive" &&
            navigator.mediaDevices?.getUserMedia != null &&
            typeof RTCPeerConnection < "u"
          : basalt) ||
        echo == null
      ) {
        ember();
        return;
      }
      if (!reef && !cedar) {
        ember();
        return;
      }
      let vapor = echo,
        wheat =
          prism.source === "composer_button_existing_thread"
            ? prism.capabilityPrompt
            : appInitialOw(capabilityNames),
        yarn =
          wheat == null
            ? vapor.session.basePrompt
            : `${vapor.session.basePrompt}\n\n${wheat}`,
        zephyr =
          vapor.session.greetingEnabled &&
          prism.source !== "global_hotkey_new_thread"
            ? (data?.displayName ?? null)
            : null,
        acorn = crypto.randomUUID(),
        bloom = AppInitialGC(prism.source);
      appInitialJ9(alpha, AppInitialFtt, {
        action:
          AppInitialDtt.CODEX_REALTIME_VOICE_SESSION_LIFECYCLE_ACTION_START_REQUESTED,
        sessionId: acorn,
        startSource: bloom,
      });
      pearl(ultra);
      yellow(true);
      river(null);
      slate.current = alpha.get(appInitialIC);
      timber.current = alpha.get(appInitialLC);
      let coral = umbra.current + 1;
      umbra.current = coral;
      let drift = () => {
          let lunar = appInitialUC.start();
          return (
            lunar
              .then((value) => {
                if (umbra.current !== coral) {
                  value.stop();
                  return;
                }
                value.setMuted(slate.current);
                river(value);
              })
              .catch(() => {}),
            lunar
          );
        },
        eagle = drift(),
        frost = false,
        glide = false,
        honey = false;
      try {
        let moss =
          prism.source === "composer_button_new_thread"
            ? prism.memoryPreferences
            : (alpha.get(appInitialXT) ?? undefined);
        await appInitialZS({
          activeCollaborationMode: activeMode,
          activateRealtimeConversation: async (north, orbit) => {
            frost && ((frost = false), (eagle = drift()));
            let pine = await eagle;
            if (
              umbra.current !== coral ||
              (orbit != null && AppInitialZT(alpha, north, orbit, undefined),
              nickel?.concurrent_reasoning_summaries === true &&
                (await appInitialHdt("update-thread-settings-for-next-turn", {
                  conversationId: north,
                  threadSettings: {
                    summary: "detailed",
                  },
                })),
              umbra.current !== coral)
            )
              return "cancelled";
            frost = true;
            let quest = await appInitialPC.start(alpha, {
              analyticsSessionId: acorn,
              codexResponseHandoffPrefix:
                vapor.session.codexResponseHandoffPrefix,
              codexResponseItemPrefix: vapor.session.codexResponseItemPrefix,
              codexResponsesAsItems: vapor.session.codexResponsesAsItems,
              conversationId: north,
              hostId: topaz,
              initiallyMicrophoneMuted: slate.current,
              initiallyMuted: timber.current,
              microphone: pine,
              outputModality: "audio",
              preferredPresentationSurface: ultra
                ? "main-thread"
                : "global-overlay",
              prompt: yarn,
              realtimeContinuity: vapor.session.continuity,
              realtimeContinuityPrompt: vapor.session.continuityPrompt,
              realtimeMemorySummaryEnabled:
                vapor.session.memorySummaryEnabled &&
                alpha.get(AppInitialQT, north) === true,
              realtimeMemorySummaryPrompt: vapor.session.memorySummaryPrompt,
              realtimeSessionOverrides: vapor.session.overrides,
              source: prism.source,
              userName: zephyr,
            });
            return (
              (violet.current = false),
              (honey = quest === "active"),
              quest === "active"
                ? umbra.current === coral
                  ? (ultra &&
                      (AppInitialW({
                        locator: {
                          conversationId: north,
                          hostId: topaz,
                        },
                        surface: "main-thread",
                      }),
                      prism.source !== "composer_button_existing_thread" &&
                        appInitialCdt.dispatchMessage("open-in-main-window", {
                          path: appInitialPt(north),
                        })),
                    "active")
                  : (appInitialPC.cancelStart(alpha), "cancelled")
                : quest
            );
          },
          agentMode,
          currentLocalExecutionCwd: copper.cwd ?? "",
          intent: quill,
          memoryPreferences: moss,
          onStartError: (ridge) => {
            ultra || flint(ridge);
          },
          serviceTier: serviceTierSettings.serviceTierForRequest,
          permissionProfileId,
          shouldSendPermissionOverrides,
          scope: alpha,
          treatment: vapor,
          threadToolsEnabled: nickel?.[appInitialA7] === true,
          workspaceRootsForLocalExecution: [],
        });
        honey ||
          appInitialJ9(alpha, AppInitialFtt, {
            action:
              AppInitialDtt.CODEX_REALTIME_VOICE_SESSION_LIFECYCLE_ACTION_START_CANCELLED,
            sessionId: acorn,
            startSource: bloom,
          });
      } catch (storm) {
        throw (
          (glide = true),
          pearl(false),
          honey ||
            appInitialJ9(alpha, AppInitialFtt, {
              action:
                AppInitialDtt.CODEX_REALTIME_VOICE_SESSION_LIFECYCLE_ACTION_START_FAILED,
              sessionId: acorn,
              startSource: bloom,
            }),
          storm
        );
      } finally {
        !frost &&
          umbra.current === coral &&
          eagle
            .then((value) => {
              value.stop();
            })
            .catch(() => {});
        umbra.current === coral && (yellow(false), glide || ember());
      }
    }),
    hazel = async () => {
      umbra.current += 1;
      quartz?.stop();
      river(null);
      yellow(false);
      pearl(false);
      let tide = alpha.get(appInitialFC);
      appInitialPC.cancelStart(alpha);
      tide ?? (alpha.set(appInitialIC, false), alpha.set(appInitialLC, false));
    },
    ivory = $.useEffectEvent(hazel),
    jasper = async () => {
      if (daisy)
        try {
          await appInitialHut.realtimeVoiceRuntime?.requestRealtimeStart(
            {
              source: "avatar_overlay_button_new_thread",
            },
            undefined,
          );
        } catch (unity) {
          appInitialDdt.error(
            "Failed to request realtime voice from the avatar overlay",
            {
              safe: {},
              sensitive: {
                error: unity,
              },
            },
          );
          flint(unity);
        }
    };
  $.useEffect(() => {
    try {
      var vale = appInitialGut();
      let wave = appInitialHut.realtimeVoiceRuntime;
      return wave == null || !amber
        ? undefined
        : (vale.u(
            wave.registerRealtimeStarter(
              async (apex) => {
                await garnet(apex);
              },
              async () => {
                await ivory();
              },
              cedar,
            ),
          ),
          () => {
            try {
              var brook = appInitialGut();
              brook.u(wave.unregisterRealtimeStarter());
            } catch (cliff) {
              brook.e = cliff;
            } finally {
              brook.d();
            }
          });
    } catch (dusk) {
      vale.e = dusk;
    } finally {
      vale.d();
    }
  }, [cedar, amber]);
  appInitialLdt("avatar-overlay-explicit-pet-opened", () => {
    pearl(false);
  });
  $.useLayoutEffect(() => {
    if (marble !== "inactive") {
      willow.current = true;
      return;
    }
    if (violet.current) {
      violet.current = false;
      willow.current = false;
      return;
    }
    if (willow.current) {
      if (xenon) {
        willow.current = false;
        return;
      }
      willow.current = false;
      appInitialHut.realtimeVoiceRuntime?.completeRealtimeSession();
    }
  }, [xenon, marble]);
  let kelp = async () => {
      if (xenon) {
        await hazel();
        ember();
        return;
      }
      harbor == null ||
        marble === "inactive" ||
        (await appInitialPC.stop(alpha, harbor));
    },
    lotus = () => {
      if (zinc) {
        timber.current = !alpha.get(appInitialLC);
        harbor == null
          ? alpha.set(appInitialLC, timber.current)
          : appInitialPC.toggleMute(alpha, harbor);
        return;
      }
      harbor == null ||
        marble !== "active" ||
        ((timber.current = !alpha.get(appInitialLC)),
        appInitialPC.toggleMute(alpha, harbor));
    },
    mint = () => {
      if (zinc) {
        let elm = !alpha.get(appInitialIC);
        slate.current = elm;
        harbor == null
          ? (quartz.setMuted(elm), alpha.set(appInitialIC, elm))
          : appInitialPC.toggleMicrophoneMute(alpha, harbor);
        return;
      }
      harbor == null ||
        marble !== "active" ||
        ((slate.current = !alpha.get(appInitialIC)),
        appInitialPC.toggleMicrophoneMute(alpha, harbor));
    },
    nova = marble;
  return (
    zinc
      ? (nova = "active")
      : xenon && marble === "inactive"
        ? (nova = "starting")
        : marble === "inactive" && onyx && (nova = "stopping"),
    {
      canStart: daisy,
      caption: indigo,
      conversationId: harbor,
      isMicrophoneMuted: jade,
      isMuted: kite,
      phase: nova,
      start: jasper,
      stop: kelp,
      voiceActivity: lemon,
      toggleMicrophoneMute: mint,
      toggleMute: lotus,
      willResume: falcon,
    }
  );
}
var $;
export const useAvatarOverlaySelectionV = rolldownRuntimeN(() => {
  appInitialUtt();
  appInitialMT();
  appInitialOpt();
  $ = rolldownRuntimeS(appInitialLvt(), 1);
  appInitialHft();
  appInitialMdt();
  appInitialLX();
  appInitialIlt();
  appInitialIq();
  appInitialKq();
  appInitialSq();
  appInitialJY();
  AppInitialYT();
  appInitialSdt();
  appInitialK9();
  AppInitialXS();
  appInitialWC();
  appInitialSw();
  appInitialNC();
  appInitialM4();
  AppInitialKC();
  appInitialKC();
  appInitialG9();
  AppInitialH();
  appInitialEC();
  appInitial4();
  appInitialYC();
  appInitialQC();
  appInitialUut();
  appInitialIft();
  appInitialUi();
  appInitialDot();
  appInitialAot();
  appInitialJ7();
  appInitialUdt();
  appInitialKut();
});
