// package: paralympics.preview.v1
// file: auth/v1/preview.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GenerateTokenRequest extends jspb.Message {
  getType(): SubjectTypeMap[keyof SubjectTypeMap];
  setType(value: SubjectTypeMap[keyof SubjectTypeMap]): void;

  getSubject(): string;
  setSubject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateTokenRequest): GenerateTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTokenRequest;
  static deserializeBinaryFromReader(message: GenerateTokenRequest, reader: jspb.BinaryReader): GenerateTokenRequest;
}

export namespace GenerateTokenRequest {
  export type AsObject = {
    type: SubjectTypeMap[keyof SubjectTypeMap],
    subject: string,
  }
}

export class GenerateTokenResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  hasExpire(): boolean;
  clearExpire(): void;
  getExpire(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpire(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateTokenResponse): GenerateTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTokenResponse;
  static deserializeBinaryFromReader(message: GenerateTokenResponse, reader: jspb.BinaryReader): GenerateTokenResponse;
}

export namespace GenerateTokenResponse {
  export type AsObject = {
    token: string,
    expire?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ValidateTokenRequest extends jspb.Message {
  getType(): SubjectTypeMap[keyof SubjectTypeMap];
  setType(value: SubjectTypeMap[keyof SubjectTypeMap]): void;

  getSubject(): string;
  setSubject(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateTokenRequest): ValidateTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateTokenRequest;
  static deserializeBinaryFromReader(message: ValidateTokenRequest, reader: jspb.BinaryReader): ValidateTokenRequest;
}

export namespace ValidateTokenRequest {
  export type AsObject = {
    type: SubjectTypeMap[keyof SubjectTypeMap],
    subject: string,
    token: string,
  }
}

export interface SubjectTypeMap {
  ARTICLE: 0;
}

export const SubjectType: SubjectTypeMap;

