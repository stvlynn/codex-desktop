// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `H`) / export `Pvt`.

export type SerializeCharacterReferenceNodePeers = {
  decodeNumeric: (value: string, base: number) => string;
  decodeNamed: (value: string) => string;
};

let peers: SerializeCharacterReferenceNodePeers | null = null;

/** Wire serializeCharacterReferenceNode peers once companions land. */
export function setSerializeCharacterReferenceNodePeers(
  next: SerializeCharacterReferenceNodePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Pvt` / internal `H`.
 * Serialize a micromark character-reference node into the parent stack value.
 */
export type CharacterReferenceSerializerContext = {
  sliceSerialize: (node: unknown) => string;
  data: { characterReferenceType?: string };
  stack: Array<{ value: string }>;
};

export function serializeCharacterReferenceNode(
  this: CharacterReferenceSerializerContext,
  node: unknown,
): void {
  if (peers == null) {
    throw new Error("SerializeCharacterReferenceNode peers are not configured");
  }
  const serialized = this.sliceSerialize(node);
  const kind = this.data.characterReferenceType;
  let decoded: string;
  if (kind) {
    decoded = peers.decodeNumeric(
      serialized,
      kind === "characterReferenceMarkerNumeric" ? 10 : 16,
    );
    this.data.characterReferenceType = undefined;
  } else {
    decoded = peers.decodeNamed(serialized);
  }
  const parent = this.stack[this.stack.length - 1];
  parent.value += decoded;
}
