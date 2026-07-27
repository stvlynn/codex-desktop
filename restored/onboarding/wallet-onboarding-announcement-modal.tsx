// Restored from ref/webview/assets/wallet-onboarding-announcement-modal-DOSFH_jP.js
// ChatGPT Wallet onboarding announcement built on AnnouncementModal.
// Stage 3: HW/VW→AnnouncementModal bindable; I0→ensureSettingsGlyphI0Init (Wave AS).

import { useEffect, type ReactElement } from "react";
import { motion, useMotionValue } from "../vendor/framer-motion";
import { AppIconF0 } from "../icons/app-icon-f0";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { usePrefersReducedMotion } from "../motion/use-prefers-reduced-motion";
import {
  AnnouncementModal,
  ensureAnnouncementModalInit,
} from "../ui/announcement-modal";
import { cx } from "../ui/cx";
import { ensureSettingsGlyphI0Init } from "../utils/wave-as-gap-ensure-inits";

ensureSettingsGlyphI0Init();
ensureAnnouncementModalInit();

const styles = {
  scene: "_scene_1ga58_1",
  layer: "_layer_1ga58_8",
  card: "_card_1ga58_12",
  cardTop: "_cardTop_1ga58_22",
  cardMiddle: "_cardMiddle_1ga58_27",
  cardBottom: "_cardBottom_1ga58_32",
  cardTexture: "_cardTexture_1ga58_37",
  pocket: "_pocket_1ga58_45",
  pocketTop: "_pocketTop_1ga58_64",
  pocketMiddle: "_pocketMiddle_1ga58_70",
  pocketBottom: "_pocketBottom_1ga58_76",
} as const;

const SPRING = {
  stiffness: 123,
  damping: 18,
  mass: 1,
  launchVelocity: 10.24,
} as const;

const INTRO_DELAY_MS = 2000;
const STAGGER_MS = 60;
const POCKET_DURATION_MS = 400;
const LAYER_STAGGER_MS = 120;
const SETTLE_MS = 900;

const CARD_CYAN = "" + new URL("card-cyan-BW3vVs9F.png", import.meta.url).href;
const CARD_GREEN =
  "" + new URL("card-green-Dj9_06v6.png", import.meta.url).href;
const CARD_PURPLE =
  "" + new URL("card-purple-CWYlFNVE.png", import.meta.url).href;

type CardPose = { x: number; y: number; rotate: number };

type WalletCardLayer = {
  id: string;
  image: string;
  cardClassName: string;
  pocketClassName: string;
  fannedCard: CardPose;
  stagedCard: CardPose;
  openPocketY: number;
};

const LAYERS: WalletCardLayer[] = [
  {
    id: "cyan",
    image: CARD_CYAN,
    cardClassName: styles.cardTop,
    pocketClassName: styles.pocketTop,
    fannedCard: { x: -17.7907, y: -4.176, rotate: -15 },
    stagedCard: { x: -20.9615, y: 10, rotate: -30 },
    openPocketY: 93,
  },
  {
    id: "purple",
    image: CARD_PURPLE,
    cardClassName: styles.cardMiddle,
    pocketClassName: styles.pocketMiddle,
    fannedCard: { x: 0, y: -29, rotate: 0 },
    stagedCard: { x: -7.79067, y: -16.3, rotate: -15 },
    openPocketY: 85,
  },
  {
    id: "green",
    image: CARD_GREEN,
    cardClassName: styles.cardBottom,
    pocketClassName: styles.pocketBottom,
    fannedCard: { x: 1.87957, y: -51.2343, rotate: 15 },
    stagedCard: { x: -10, y: -41, rotate: 0 },
    openPocketY: 77,
  },
];

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function lerp(from: number, to: number, t: number): number {
  return from + (to - from) * t;
}

function springProgress(elapsedMs: number): number {
  if (elapsedMs <= 0) return 0;
  const t = elapsedMs / 1000;
  const { stiffness, damping, mass, launchVelocity } = SPRING;
  const decay = damping / (2 * mass);
  const natural = Math.sqrt(stiffness / mass);
  const omega = Math.sqrt(natural * natural - decay * decay);
  const phase = (launchVelocity / 100 - decay) / omega;
  return (
    1 +
    Math.exp(-decay * t) * (-Math.cos(omega * t) + phase * Math.sin(omega * t))
  );
}

export type WalletOnboardingAnnouncementModalProps = {
  dismissAnnouncement: () => void;
  onSetUpWallet: () => void;
};

export function WalletOnboardingAnnouncementModal({
  dismissAnnouncement,
  onSetUpWallet,
}: WalletOnboardingAnnouncementModalProps): ReactElement {
  return (
    <AnnouncementModal
      actionLayout="stacked"
      body={
        <p className="text-base leading-normal tracking-normal text-token-description-foreground">
          <MemoizedFormattedMessage
            id="codexWalletOnboardingAnnouncementModal.body"
            defaultMessage="Add payment methods that can be securely used by ChatGPT to carry out tasks"
            description="Body copy explaining what ChatGPT Wallet is for"
          />
        </p>
      }
      closeButtonClassName="dark:text-token-foreground"
      closeButtonTone="dark"
      dismissLabel={
        <MemoizedFormattedMessage
          id="codexWalletOnboardingAnnouncementModal.dismissLabel"
          defaultMessage="Not right now"
          description="Secondary action to dismiss ChatGPT Wallet onboarding"
        />
      }
      media={<WalletCardScene />}
      mediaClassName="h-[240px]"
      onDismiss={dismissAnnouncement}
      onPrimaryAction={onSetUpWallet}
      primaryActionLabel={
        <MemoizedFormattedMessage
          id="codexWalletOnboardingAnnouncementModal.primaryActionLabel"
          defaultMessage="Set up ChatGPT Wallet"
          description="Primary action to begin setting up ChatGPT Wallet"
        />
      }
      title={
        <MemoizedFormattedMessage
          id="codexWalletOnboardingAnnouncementModal.title"
          defaultMessage="Introducing ChatGPT Wallet"
          description="Title for the ChatGPT Wallet onboarding announcement"
        />
      }
    />
  );
}

function WalletCardScene(): ReactElement {
  const shouldReduceMotion = usePrefersReducedMotion();
  return (
    <div
      aria-hidden={true}
      className={cx(styles.scene, "bg-token-bg-secondary")}
    >
      {LAYERS.map((layer, index) => (
        <WalletCardLayerView
          key={layer.id}
          index={index}
          layer={layer}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
    </div>
  );
}

function WalletCardLayerView({
  index,
  layer,
  shouldReduceMotion,
}: {
  index: number;
  layer: WalletCardLayer;
  shouldReduceMotion: boolean;
}): ReactElement {
  const x = useMotionValue(shouldReduceMotion ? 0 : layer.fannedCard.x);
  const y = useMotionValue(shouldReduceMotion ? 0 : layer.fannedCard.y);
  const rotate = useMotionValue(
    shouldReduceMotion ? 0 : layer.fannedCard.rotate,
  );
  const pocketY = useMotionValue(shouldReduceMotion ? 0 : layer.openPocketY);
  const pocketOpacity = useMotionValue(+!!shouldReduceMotion);

  useEffect(() => {
    if (shouldReduceMotion) {
      x.set(0);
      y.set(0);
      rotate.set(0);
      pocketY.set(0);
      pocketOpacity.set(1);
      return;
    }
    x.set(layer.fannedCard.x);
    y.set(layer.fannedCard.y);
    rotate.set(layer.fannedCard.rotate);
    pocketY.set(layer.openPocketY);
    pocketOpacity.set(0);

    let frame = 0;
    const startedAt = performance.now();
    const pocketWindow = POCKET_DURATION_MS + index * LAYER_STAGGER_MS;

    const tick = (now: number) => {
      const elapsed = now - startedAt - INTRO_DELAY_MS;
      if (elapsed >= 0) {
        const stageT = clamp01(springProgress(elapsed - index * STAGGER_MS));
        const stagedX = lerp(layer.fannedCard.x, layer.stagedCard.x, stageT);
        const stagedY = lerp(layer.fannedCard.y, layer.stagedCard.y, stageT);
        const stagedRotate = lerp(
          layer.fannedCard.rotate,
          layer.stagedCard.rotate,
          stageT,
        );
        const pocketT = clamp01(springProgress(elapsed - pocketWindow));
        x.set(lerp(stagedX, 0, pocketT));
        y.set(lerp(stagedY, 0, pocketT));
        rotate.set(lerp(stagedRotate, 0, pocketT));
        pocketY.set(layer.openPocketY * (1 - pocketT));
        pocketOpacity.set(pocketT);
      }
      if (elapsed >= pocketWindow + SETTLE_MS) {
        x.set(0);
        y.set(0);
        rotate.set(0);
        pocketY.set(0);
        pocketOpacity.set(1);
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [index, layer, pocketOpacity, pocketY, rotate, shouldReduceMotion, x, y]);

  return (
    <div className={styles.layer}>
      <motion.div
        className={cx(styles.card, layer.cardClassName)}
        style={{ x, y, rotate }}
      >
        <img
          alt=""
          className={styles.cardTexture}
          draggable={false}
          src={layer.image}
        />
        <AppIconF0 className="absolute top-2.5 right-3 size-4 text-token-bg-primary" />
      </motion.div>
      <motion.div
        className={cx(
          styles.pocket,
          layer.pocketClassName,
          "bg-token-bg-secondary",
        )}
        style={{ opacity: pocketOpacity, y: pocketY }}
      />
    </div>
  );
}

/** Rolldown ESM init retained as no-op. */
export function ensureWalletOnboardingAnnouncementModalInit(): void {}
