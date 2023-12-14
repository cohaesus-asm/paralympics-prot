// package: paralympics.sports.v1
// file: sports/v1/sport.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as content_v1_content_pb from "../../content/v1/content_pb";
import * as content_v1_social_pb from "../../content/v1/social_pb";

export class Sport extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSlug(): string;
  setSlug(value: string): void;

  hasCreateDate(): boolean;
  clearCreateDate(): void;
  getCreateDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateDate(): boolean;
  clearUpdateDate(): void;
  getUpdateDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeleteDate(): boolean;
  clearDeleteDate(): void;
  getDeleteDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getName(): string;
  setName(value: string): void;

  getSeason(): SeasonMap[keyof SeasonMap];
  setSeason(value: SeasonMap[keyof SeasonMap]): void;

  getIcon(): string;
  setIcon(value: string): void;

  hasImgCard(): boolean;
  clearImgCard(): void;
  getImgCard(): content_v1_content_pb.Image | undefined;
  setImgCard(value?: content_v1_content_pb.Image): void;

  hasImgHero(): boolean;
  clearImgHero(): void;
  getImgHero(): content_v1_content_pb.Image | undefined;
  setImgHero(value?: content_v1_content_pb.Image): void;

  getFeatured(): boolean;
  setFeatured(value: boolean): void;

  hasExtLink(): boolean;
  clearExtLink(): void;
  getExtLink(): ExtLink | undefined;
  setExtLink(value?: ExtLink): void;

  clearSocialProfilesList(): void;
  getSocialProfilesList(): Array<content_v1_social_pb.SocialProfile>;
  setSocialProfilesList(value: Array<content_v1_social_pb.SocialProfile>): void;
  addSocialProfiles(value?: content_v1_social_pb.SocialProfile, index?: number): content_v1_social_pb.SocialProfile;

  getImgCardAlt(): string;
  setImgCardAlt(value: string): void;

  getImgHeroAlt(): string;
  setImgHeroAlt(value: string): void;

  getLead(): string;
  setLead(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getBodyHtml(): string;
  setBodyHtml(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sport.AsObject;
  static toObject(includeInstance: boolean, msg: Sport): Sport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sport;
  static deserializeBinaryFromReader(message: Sport, reader: jspb.BinaryReader): Sport;
}

export namespace Sport {
  export type AsObject = {
    id: string,
    slug: string,
    createDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    season: SeasonMap[keyof SeasonMap],
    icon: string,
    imgCard?: content_v1_content_pb.Image.AsObject,
    imgHero?: content_v1_content_pb.Image.AsObject,
    featured: boolean,
    extLink?: ExtLink.AsObject,
    socialProfilesList: Array<content_v1_social_pb.SocialProfile.AsObject>,
    imgCardAlt: string,
    imgHeroAlt: string,
    lead: string,
    body: string,
    bodyHtml: string,
  }
}

export class ExtLink extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtLink.AsObject;
  static toObject(includeInstance: boolean, msg: ExtLink): ExtLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtLink;
  static deserializeBinaryFromReader(message: ExtLink, reader: jspb.BinaryReader): ExtLink;
}

export namespace ExtLink {
  export type AsObject = {
    label: string,
    url: string,
  }
}

export class SortOption extends jspb.Message {
  getField(): SortFieldMap[keyof SortFieldMap];
  setField(value: SortFieldMap[keyof SortFieldMap]): void;

  getDirection(): SortDirectionMap[keyof SortDirectionMap];
  setDirection(value: SortDirectionMap[keyof SortDirectionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortOption.AsObject;
  static toObject(includeInstance: boolean, msg: SortOption): SortOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SortOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortOption;
  static deserializeBinaryFromReader(message: SortOption, reader: jspb.BinaryReader): SortOption;
}

export namespace SortOption {
  export type AsObject = {
    field: SortFieldMap[keyof SortFieldMap],
    direction: SortDirectionMap[keyof SortDirectionMap],
  }
}

export class Filter extends jspb.Message {
  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  getSeason(): SeasonMap[keyof SeasonMap];
  setSeason(value: SeasonMap[keyof SeasonMap]): void;

  getGameId(): string;
  setGameId(value: string): void;

  getFeatured(): FeaturedFilterMap[keyof FeaturedFilterMap];
  setFeatured(value: FeaturedFilterMap[keyof FeaturedFilterMap]): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    deleted: boolean,
    season: SeasonMap[keyof SeasonMap],
    gameId: string,
    featured: FeaturedFilterMap[keyof FeaturedFilterMap],
    name: string,
  }
}

export class SportByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SportByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SportByIDRequest): SportByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SportByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SportByIDRequest;
  static deserializeBinaryFromReader(message: SportByIDRequest, reader: jspb.BinaryReader): SportByIDRequest;
}

export namespace SportByIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class SportBySlugRequest extends jspb.Message {
  getSlug(): string;
  setSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SportBySlugRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SportBySlugRequest): SportBySlugRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SportBySlugRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SportBySlugRequest;
  static deserializeBinaryFromReader(message: SportBySlugRequest, reader: jspb.BinaryReader): SportBySlugRequest;
}

export namespace SportBySlugRequest {
  export type AsObject = {
    slug: string,
  }
}

export class Pagination extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pagination.AsObject;
  static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pagination;
  static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
  export type AsObject = {
    page: number,
    limit: number,
  }
}

export class ListSportsRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;

  clearSortList(): void;
  getSortList(): Array<SortOption>;
  setSortList(value: Array<SortOption>): void;
  addSort(value?: SortOption, index?: number): SortOption;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSportsRequest): ListSportsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSportsRequest;
  static deserializeBinaryFromReader(message: ListSportsRequest, reader: jspb.BinaryReader): ListSportsRequest;
}

export namespace ListSportsRequest {
  export type AsObject = {
    pagination?: Pagination.AsObject,
    sortList: Array<SortOption.AsObject>,
    filter?: Filter.AsObject,
  }
}

export class SportContentRequest extends jspb.Message {
  getSportId(): string;
  setSportId(value: string): void;

  getSportSlug(): string;
  setSportSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SportContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SportContentRequest): SportContentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SportContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SportContentRequest;
  static deserializeBinaryFromReader(message: SportContentRequest, reader: jspb.BinaryReader): SportContentRequest;
}

export namespace SportContentRequest {
  export type AsObject = {
    sportId: string,
    sportSlug: string,
  }
}

export class ListSportsResponse extends jspb.Message {
  clearSportsList(): void;
  getSportsList(): Array<Sport>;
  setSportsList(value: Array<Sport>): void;
  addSports(value?: Sport, index?: number): Sport;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSportsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSportsResponse): ListSportsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSportsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSportsResponse;
  static deserializeBinaryFromReader(message: ListSportsResponse, reader: jspb.BinaryReader): ListSportsResponse;
}

export namespace ListSportsResponse {
  export type AsObject = {
    sportsList: Array<Sport.AsObject>,
    total: number,
  }
}

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

export class ToggleFeaturedRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleFeaturedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleFeaturedRequest): ToggleFeaturedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToggleFeaturedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleFeaturedRequest;
  static deserializeBinaryFromReader(message: ToggleFeaturedRequest, reader: jspb.BinaryReader): ToggleFeaturedRequest;
}

export namespace ToggleFeaturedRequest {
  export type AsObject = {
    id: string,
  }
}

export class ToggleFeaturedResponse extends jspb.Message {
  getFeatured(): boolean;
  setFeatured(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleFeaturedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleFeaturedResponse): ToggleFeaturedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToggleFeaturedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleFeaturedResponse;
  static deserializeBinaryFromReader(message: ToggleFeaturedResponse, reader: jspb.BinaryReader): ToggleFeaturedResponse;
}

export namespace ToggleFeaturedResponse {
  export type AsObject = {
    featured: boolean,
  }
}

export class FeaturedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturedRequest): FeaturedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeaturedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturedRequest;
  static deserializeBinaryFromReader(message: FeaturedRequest, reader: jspb.BinaryReader): FeaturedRequest;
}

export namespace FeaturedRequest {
  export type AsObject = {
  }
}

export class RestoreRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreRequest): RestoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreRequest;
  static deserializeBinaryFromReader(message: RestoreRequest, reader: jspb.BinaryReader): RestoreRequest;
}

export namespace RestoreRequest {
  export type AsObject = {
    id: string,
  }
}

export class RestoreResponse extends jspb.Message {
  hasSport(): boolean;
  clearSport(): void;
  getSport(): Sport | undefined;
  setSport(value?: Sport): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreResponse): RestoreResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreResponse;
  static deserializeBinaryFromReader(message: RestoreResponse, reader: jspb.BinaryReader): RestoreResponse;
}

export namespace RestoreResponse {
  export type AsObject = {
    sport?: Sport.AsObject,
  }
}

export class PurgeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PurgeRequest): PurgeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PurgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurgeRequest;
  static deserializeBinaryFromReader(message: PurgeRequest, reader: jspb.BinaryReader): PurgeRequest;
}

export namespace PurgeRequest {
  export type AsObject = {
    id: string,
  }
}

export class PurgeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PurgeResponse): PurgeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PurgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurgeResponse;
  static deserializeBinaryFromReader(message: PurgeResponse, reader: jspb.BinaryReader): PurgeResponse;
}

export namespace PurgeResponse {
  export type AsObject = {
  }
}

export interface SeasonMap {
  NONE: 0;
  WINTER: 1;
  SUMMER: 2;
}

export const Season: SeasonMap;

export interface SortFieldMap {
  CREATE_DATE: 0;
  UPDATE_DATE: 1;
  DELETE_DATE: 2;
  NAME: 3;
}

export const SortField: SortFieldMap;

export interface FeaturedFilterMap {
  EITHER: 0;
  FEATURED: 1;
  NOTFEATURED: 2;
}

export const FeaturedFilter: FeaturedFilterMap;

export interface SortDirectionMap {
  ASC: 0;
  DSC: 1;
}

export const SortDirection: SortDirectionMap;

export interface FieldMap {
  SPORTID: 0;
  SPORTSLUG: 1;
  SPORTNAME: 2;
  SPORTSEASON: 3;
  SPORTICON: 4;
  SPORTIMGCARD: 5;
  SPORTIMGHERO: 6;
  SPORTLEAD: 7;
  SPORTBODY: 8;
}

export const Field: FieldMap;

export interface ErrorCodeMap {
  REQUIRED: 0;
  INVALIDUUIDV4: 1;
  INVALIDURI: 2;
  IMAGEINVALID: 3;
}

export const ErrorCode: ErrorCodeMap;

