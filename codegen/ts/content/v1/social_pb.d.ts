// package: paralympics.content.v1
// file: content/v1/social.proto

import * as jspb from "google-protobuf";

export class SocialProfile extends jspb.Message {
  getNetwork(): SocialNetworkMap[keyof SocialNetworkMap];
  setNetwork(value: SocialNetworkMap[keyof SocialNetworkMap]): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SocialProfile.AsObject;
  static toObject(includeInstance: boolean, msg: SocialProfile): SocialProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SocialProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SocialProfile;
  static deserializeBinaryFromReader(message: SocialProfile, reader: jspb.BinaryReader): SocialProfile;
}

export namespace SocialProfile {
  export type AsObject = {
    network: SocialNetworkMap[keyof SocialNetworkMap],
    id: string,
  }
}

export interface SocialNetworkMap {
  FACEBOOK: 0;
  TWITTER: 1;
  INSTAGRAM: 2;
}

export const SocialNetwork: SocialNetworkMap;

