// package: paralympics.auth.v1
// file: auth/v1/admin.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class FieldError extends jspb.Message {
  getField(): FieldMap[keyof FieldMap];
  setField(value: FieldMap[keyof FieldMap]): void;

  getCode(): ErrorCodeMap[keyof ErrorCodeMap];
  setCode(value: ErrorCodeMap[keyof ErrorCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldError.AsObject;
  static toObject(includeInstance: boolean, msg: FieldError): FieldError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldError;
  static deserializeBinaryFromReader(message: FieldError, reader: jspb.BinaryReader): FieldError;
}

export namespace FieldError {
  export type AsObject = {
    field: FieldMap[keyof FieldMap],
    code: ErrorCodeMap[keyof ErrorCodeMap],
  }
}

export class ValidationError extends jspb.Message {
  clearErrorsList(): void;
  getErrorsList(): Array<FieldError>;
  setErrorsList(value: Array<FieldError>): void;
  addErrors(value?: FieldError, index?: number): FieldError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationError.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationError): ValidationError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidationError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationError;
  static deserializeBinaryFromReader(message: ValidationError, reader: jspb.BinaryReader): ValidationError;
}

export namespace ValidationError {
  export type AsObject = {
    errorsList: Array<FieldError.AsObject>,
  }
}

export class CreateUserRequest extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  getPassword(): string;
  setPassword(value: string): void;

  getPasswordConfirm(): string;
  setPasswordConfirm(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    user?: User.AsObject,
    password: string,
    passwordConfirm: string,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasCreateDate(): boolean;
  clearCreateDate(): void;
  getCreateDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateDate(): boolean;
  clearUpdateDate(): void;
  getUpdateDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getEmail(): string;
  setEmail(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    createDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    email: string,
    name: string,
  }
}

export class GetUserByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByIDRequest): GetUserByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByIDRequest;
  static deserializeBinaryFromReader(message: GetUserByIDRequest, reader: jspb.BinaryReader): GetUserByIDRequest;
}

export namespace GetUserByIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetUserByEmailRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByEmailRequest): GetUserByEmailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserByEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByEmailRequest;
  static deserializeBinaryFromReader(message: GetUserByEmailRequest, reader: jspb.BinaryReader): GetUserByEmailRequest;
}

export namespace GetUserByEmailRequest {
  export type AsObject = {
    email: string,
  }
}

export class SetUserPasswordRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getPasswordConfirm(): string;
  setPasswordConfirm(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetUserPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetUserPasswordRequest): SetUserPasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetUserPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetUserPasswordRequest;
  static deserializeBinaryFromReader(message: SetUserPasswordRequest, reader: jspb.BinaryReader): SetUserPasswordRequest;
}

export namespace SetUserPasswordRequest {
  export type AsObject = {
    id: string,
    password: string,
    passwordConfirm: string,
  }
}

export class ValidatePasswordRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatePasswordRequest): ValidatePasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidatePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatePasswordRequest;
  static deserializeBinaryFromReader(message: ValidatePasswordRequest, reader: jspb.BinaryReader): ValidatePasswordRequest;
}

export namespace ValidatePasswordRequest {
  export type AsObject = {
    id: string,
    password: string,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    id: string,
  }
}

export class AuthenticateUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateUserRequest): AuthenticateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateUserRequest;
  static deserializeBinaryFromReader(message: AuthenticateUserRequest, reader: jspb.BinaryReader): AuthenticateUserRequest;
}

export namespace AuthenticateUserRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class AuthenticateUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateUserResponse): AuthenticateUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateUserResponse;
  static deserializeBinaryFromReader(message: AuthenticateUserResponse, reader: jspb.BinaryReader): AuthenticateUserResponse;
}

export namespace AuthenticateUserResponse {
  export type AsObject = {
    user?: User.AsObject,
    token: string,
  }
}

export class AuthenticateRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateRequest): AuthenticateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateRequest;
  static deserializeBinaryFromReader(message: AuthenticateRequest, reader: jspb.BinaryReader): AuthenticateRequest;
}

export namespace AuthenticateRequest {
  export type AsObject = {
    token: string,
  }
}

export class AuthenticateResponse extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateResponse): AuthenticateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateResponse;
  static deserializeBinaryFromReader(message: AuthenticateResponse, reader: jspb.BinaryReader): AuthenticateResponse;
}

export namespace AuthenticateResponse {
  export type AsObject = {
    userid: string,
  }
}

export class RevokeRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeRequest): RevokeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeRequest;
  static deserializeBinaryFromReader(message: RevokeRequest, reader: jspb.BinaryReader): RevokeRequest;
}

export namespace RevokeRequest {
  export type AsObject = {
    token: string,
  }
}

export interface FieldMap {
  USERID: 0;
  USEREMAIL: 1;
  USERNAME: 2;
  PASSWORD: 3;
  PASSWORDCONFIRM: 4;
}

export const Field: FieldMap;

export interface ErrorCodeMap {
  REQUIRED: 0;
  INVALIDUUIDV4: 1;
  EMAILMALFORMED: 2;
  MALFORMEDEMAIL: 2;
  EMAILCONFLICT: 3;
  PASSWORDSDONOTMATCH: 4;
  PASSWORDGTE6: 5;
}

export const ErrorCode: ErrorCodeMap;

