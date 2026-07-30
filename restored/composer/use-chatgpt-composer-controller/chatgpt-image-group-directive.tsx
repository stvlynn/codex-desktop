// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// ChatGPT image-group markdown directive (registry AppInitialGF / Helper106–107).

import {
  appScopeAtom as appInitialFft,
  ensureAppScopeHostInit as appInitialMT,
  ensureAppScopeInit as appInitialIft,
  useAppScope as appInitialLT,
} from "../../boundaries/app-scope-runtime";
import {
  chatgptConversationServerIdAtom as appInitialFP,
  useAppScopeAtomValue as appInitialIT,
  writingBlocksControllerAtom as appInitialCI,
} from "../../boundaries/composer-appscope-atoms";
import {
  ensureComposerEsm_Dc_Init as appInitialDc,
  ensureComposerEsm_Ec_Init as appInitialEc,
  ensureComposerEsm_qI_Init as appInitialQI,
  ensureComposerEsm_TI_Init as appInitialTI,
  ensureComposerEsm_udt_Init as appInitialUdt,
  ensureComposerEsm_XP_Init as appInitialXP,
} from "../../boundaries/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { ensureAppShellAtomsInit as appInitialOpt } from "../../navigation/app-shell-atoms";
import { buildGeneratedImagesFromContentReference as AppInitialUI } from "../../content/build-generated-images-from-content-reference";
import { asThreadId as appInitialVgt } from "../../conversation/as-thread-id";
import { GeneratedImageTabs as AppInitialTc } from "../../conversation/generated-image-tabs";
import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../runtime/rolldown-runtime";
import { isProtocolRelativeOrAbsoluteUrl as AppInitialJI } from "../../utils/is-protocol-relative-or-absolute-url";
import { useChatgptComposerControllerHelper31 } from "./chatgpt-browser-host-context";
import { useChatgptComposerControllerHelper104 } from "./chatgpt-conversation-image-download";
import {
  useChatgptComposerControllerV,
  useChatgptComposerControllerY,
} from "./ensure-chatgpt-composer-controller-context-inits";
import {
  useChatgptComposerControllerE,
  useChatgptComposerControllerO,
} from "./parse-chatgpt-citation-attributes";

reactCompilerRuntime();

type ReactRuntime = {
  useContext: (context: unknown) => any;
};

const React = rolldownRuntimeS(react(), 1) as ReactRuntime;

/** Residual Value112 — udt ensure used by image-group + mega-init U. */
export const ensureChatgptImageGroupUdtInit = rolldownRuntimeN(() => {
  appInitialUdt();
});

let imageGroupThreadId = appInitialVgt("chatgpt:image-group");

/** Residual Value116 — image-group directive ESM init. */
export const ensureChatgptImageGroupDirectiveInit = rolldownRuntimeN(() => {
  appInitialMT();
  appInitialOpt();
  appInitialQI();
  appInitialDc();
  appInitialEc();
  appInitialIft();
  useChatgptComposerControllerO();
  appInitialTI();
  ensureChatgptImageGroupUdtInit();
  appInitialXP();
  useChatgptComposerControllerY();
  imageGroupThreadId = appInitialVgt("chatgpt:image-group");
});

export function useChatgptComposerControllerHelper112(image: {
  src: string;
}): {
  attribution: null;
  destinationUrl: null;
  src: string;
  title: null;
} {
  return {
    attribution: null,
    destinationUrl: null,
    src: image.src,
    title: null,
  };
}

export function useChatgptComposerControllerHelper108(
  images: Array<{ src: string; previewSrc?: string | null }>,
  shouldBlockExternalEgress: boolean,
) {
  return shouldBlockExternalEgress
    ? images.flatMap((item) => {
        return AppInitialJI(item.src)
          ? []
          : [
              {
                ...item,
                previewSrc:
                  item.previewSrc == null || AppInitialJI(item.previewSrc)
                    ? item.src
                    : item.previewSrc,
              },
            ];
      })
    : images;
}

export function useChatgptComposerControllerHelper110(
  _item: unknown,
  index: number,
) {
  return (
    <div
      key={index}
      className="generated-image-placeholder-pulse aspect-square min-w-0 rounded-2xl"
      data-testid="chatgpt-image-group-shimmer-tile"
    />
  );
}

export function useChatgptComposerControllerHelper109() {
  return (
    <div className="my-3" data-testid="chatgpt-image-group-shimmer">
      <div
        className="grid gap-2 overflow-hidden"
        style={{
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        }}
      >
        {Array.from({ length: 4 }, useChatgptComposerControllerHelper110)}
      </div>
    </div>
  );
}

export function useChatgptComposerControllerHelper113(
  index: number,
  contentReferences: unknown[] | null | undefined,
) {
  const reference = contentReferences?.[index];
  return reference == null ? [] : AppInitialUI(reference, index);
}

export function useChatgptComposerControllerHelper111({
  conversationId,
  images,
}: {
  conversationId?: string | null;
  images: Array<{ src: string }>;
}) {
  const scope = appInitialLT(appInitialFft);
  const openLightbox = React.useContext(useChatgptComposerControllerV) as
    | ((args: {
        imageAssetContext: {
          conversationId: string;
          imageAssetResolver: unknown;
        };
        images: ReturnType<typeof useChatgptComposerControllerHelper112>[];
        selectedIndex: number;
      }) => void)
    | null
    | undefined;
  const serverId = appInitialIT(appInitialFP, conversationId ?? null);
  const threadId =
    conversationId == null
      ? imageGroupThreadId
      : appInitialVgt(`chatgpt:${conversationId}`);
  const imageAssetResolver =
    serverId == null
      ? undefined
      : useChatgptComposerControllerHelper104(scope.get(appInitialCI), serverId);
  const onOpenImage =
    openLightbox == null
      ? undefined
      : (selectedIndex: number) => {
          openLightbox({
            imageAssetContext: {
              conversationId: threadId,
              imageAssetResolver,
            },
            images: images.map(useChatgptComposerControllerHelper112),
            selectedIndex,
          });
        };
  return (
    <div className="my-3">
      <AppInitialTc
        conversationId={threadId}
        imageAssetResolver={imageAssetResolver}
        images={images}
        onOpenImage={onOpenImage}
      />
    </div>
  );
}

/** Registry directive: image group from markdown attributes. */
export function useChatgptComposerControllerHelper106(props: {
  attributes: Record<string, unknown>;
}) {
  const { attributes } = props;
  const turnContext = useChatgptComposerControllerHelper31();
  let images: Array<{ src: string }> | undefined;
  let early: unknown = Symbol.for("react.early_return_sentinel");
  bb0: {
    const index = useChatgptComposerControllerE(attributes);
    if (index == null) {
      early = null;
      break bb0;
    }
    images = useChatgptComposerControllerHelper108(
      useChatgptComposerControllerHelper113(
        index as number,
        turnContext?.contentReferences,
      ),
      turnContext?.shouldBlockExternalEgress === true,
    );
  }
  if (early !== Symbol.for("react.early_return_sentinel")) return early as null;
  const resolved = images ?? [];
  if (
    turnContext?.shouldBlockExternalEgress === true &&
    resolved.length === 0
  )
    return null;
  if (resolved.length === 0) {
    const Shimmer = useChatgptComposerControllerHelper109;
    return <Shimmer />;
  }
  const ImageGroup = useChatgptComposerControllerHelper111;
  return (
    <ImageGroup
      conversationId={turnContext?.conversationId}
      images={resolved}
    />
  );
}

/** Content-reference image group renderer (used by Helper244 image_group path). */
export function useChatgptComposerControllerHelper107(props: {
  contentReferenceIndex: number;
  conversationId?: string | null;
  reference: unknown;
}) {
  const { contentReferenceIndex, conversationId, reference } = props;
  const turnContext = useChatgptComposerControllerHelper31();
  const images = useChatgptComposerControllerHelper108(
    AppInitialUI(reference, contentReferenceIndex),
    turnContext?.shouldBlockExternalEgress === true,
  );
  if (
    turnContext?.shouldBlockExternalEgress === true &&
    images.length === 0
  )
    return null;
  if (images.length === 0) {
    const Shimmer = useChatgptComposerControllerHelper109;
    return <Shimmer />;
  }
  const ImageGroup = useChatgptComposerControllerHelper111;
  return (
    <ImageGroup conversationId={conversationId} images={images} />
  );
}
