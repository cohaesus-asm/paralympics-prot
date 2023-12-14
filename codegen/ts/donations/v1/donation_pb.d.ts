// package: paralympics.donations.v1
// file: donations/v1/donation.proto

import * as jspb from "google-protobuf";

export class DonateResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getClientSecret(): string;
  setClientSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DonateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DonateResponse): DonateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DonateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DonateResponse;
  static deserializeBinaryFromReader(message: DonateResponse, reader: jspb.BinaryReader): DonateResponse;
}

export namespace DonateResponse {
  export type AsObject = {
    id: string,
    clientSecret: string,
  }
}

export class Donation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  hasBillingAddress(): boolean;
  clearBillingAddress(): void;
  getBillingAddress(): Address | undefined;
  setBillingAddress(value?: Address): void;

  getGiftaid(): boolean;
  setGiftaid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Donation.AsObject;
  static toObject(includeInstance: boolean, msg: Donation): Donation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Donation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Donation;
  static deserializeBinaryFromReader(message: Donation, reader: jspb.BinaryReader): Donation;
}

export namespace Donation {
  export type AsObject = {
    name: string,
    email: string,
    amount: number,
    billingAddress?: Address.AsObject,
    giftaid: boolean,
  }
}

export class Address extends jspb.Message {
  getLine1(): string;
  setLine1(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getPostalCode(): string;
  setPostalCode(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    line1: string,
    city: string,
    postalCode: string,
    country: string,
  }
}

