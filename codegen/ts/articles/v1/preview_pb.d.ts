// package: paralympics.articles.v1
// file: articles/v1/preview.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class AuthorizeTokenRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeTokenRequest): AuthorizeTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizeTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeTokenRequest;
  static deserializeBinaryFromReader(message: AuthorizeTokenRequest, reader: jspb.BinaryReader): AuthorizeTokenRequest;
}

export namespace AuthorizeTokenRequest {
  export type AsObject = {
    token: string,
  }
}

export class GenerateTokenRequest extends jspb.Message {
  getArticle(): string;
  setArticle(value: string): void;

  getSeconds(): number;
  setSeconds(value: number): void;

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
    article: string,
    seconds: number,
  }
}

export class GenerateTokenResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

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
  }
}

