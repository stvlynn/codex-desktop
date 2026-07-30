// Restored from ref/webview/assets/chunk-76Q3JFCE-ZGsz2j1F.js
// Mermaid Packet Langium services — createPacketServices + PacketModule.

import { esmInit } from "../runtime/rolldown-runtime";
import {
  EmptyFileSystem,
  inject,
  createDefaultSharedCoreModule,
  createDefaultCoreModule,
  MermaidGeneratedSharedModule,
  PacketGeneratedModule,
  defineName,
  initLangiumRuntime,
  initMermaidLangiumGrammar,
  AbstractMermaidTokenBuilder,
  CommonValueConverter,
} from "./mermaid-langium-grammar-alt";

class PacketTokenBuilder extends AbstractMermaidTokenBuilder {
  static {
    defineName(this, "PacketTokenBuilder");
  }
  constructor() {
    super(["packet"]);
  }
}

export const PacketModule = {
  parser: {
    TokenBuilder: defineName(() => new PacketTokenBuilder(), "TokenBuilder"),
    ValueConverter: defineName(
      () => new CommonValueConverter(),
      "ValueConverter",
    ),
  },
};

export function createPacketServices(context: unknown = EmptyFileSystem): {
  shared: { ServiceRegistry: { register: (services: unknown) => void } };
  Packet: unknown;
} {
  const shared = inject(
    createDefaultSharedCoreModule(context),
    MermaidGeneratedSharedModule,
  );
  const diagramServices = inject(
    createDefaultCoreModule({ shared }),
    PacketGeneratedModule,
    PacketModule,
  );
  shared.ServiceRegistry.register(diagramServices);
  return { shared, Packet: diagramServices };
}

export const initPacketLangiumServices = esmInit(() => {
  initMermaidLangiumGrammar();
  initLangiumRuntime();
  defineName(createPacketServices, "createPacketServices");
});
