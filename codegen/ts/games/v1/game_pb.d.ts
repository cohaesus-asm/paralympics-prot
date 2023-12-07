// package: paralympics.games.v1
// file: games/v1/game.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Game extends jspb.Message {
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

  getLocation(): string;
  setLocation(value: string): void;

  getSeason(): SeasonMap[keyof SeasonMap];
  setSeason(value: SeasonMap[keyof SeasonMap]): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getPromoted(): boolean;
  setPromoted(value: boolean): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLogo(): string;
  setLogo(value: string): void;

  getBlurb(): string;
  setBlurb(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Game.AsObject;
  static toObject(includeInstance: boolean, msg: Game): Game.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Game, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Game;
  static deserializeBinaryFromReader(message: Game, reader: jspb.BinaryReader): Game;
}

export namespace Game {
  export type AsObject = {
    id: string,
    slug: string,
    createDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    location: string,
    season: SeasonMap[keyof SeasonMap],
    active: boolean,
    promoted: boolean,
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    logo: string,
    blurb: string,
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
  getActive(): boolean;
  setActive(value: boolean): void;

  getPromoted(): boolean;
  setPromoted(value: boolean): void;

  getSeason(): SeasonMap[keyof SeasonMap];
  setSeason(value: SeasonMap[keyof SeasonMap]): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  getLocation(): string;
  setLocation(value: string): void;

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
    active: boolean,
    promoted: boolean,
    season: SeasonMap[keyof SeasonMap],
    deleted: boolean,
    location: string,
  }
}

export class GameByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameByIDRequest): GameByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameByIDRequest;
  static deserializeBinaryFromReader(message: GameByIDRequest, reader: jspb.BinaryReader): GameByIDRequest;
}

export namespace GameByIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class GameBySlugRequest extends jspb.Message {
  getSlug(): string;
  setSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameBySlugRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameBySlugRequest): GameBySlugRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameBySlugRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameBySlugRequest;
  static deserializeBinaryFromReader(message: GameBySlugRequest, reader: jspb.BinaryReader): GameBySlugRequest;
}

export namespace GameBySlugRequest {
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

export class ListGamesRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): ListGamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGamesRequest): ListGamesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGamesRequest;
  static deserializeBinaryFromReader(message: ListGamesRequest, reader: jspb.BinaryReader): ListGamesRequest;
}

export namespace ListGamesRequest {
  export type AsObject = {
    pagination?: Pagination.AsObject,
    sortList: Array<SortOption.AsObject>,
    filter?: Filter.AsObject,
  }
}

export class ListGamesResponse extends jspb.Message {
  clearGamesList(): void;
  getGamesList(): Array<Game>;
  setGamesList(value: Array<Game>): void;
  addGames(value?: Game, index?: number): Game;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGamesResponse): ListGamesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGamesResponse;
  static deserializeBinaryFromReader(message: ListGamesResponse, reader: jspb.BinaryReader): ListGamesResponse;
}

export namespace ListGamesResponse {
  export type AsObject = {
    gamesList: Array<Game.AsObject>,
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

export class ActiveGamesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveGamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveGamesRequest): ActiveGamesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActiveGamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveGamesRequest;
  static deserializeBinaryFromReader(message: ActiveGamesRequest, reader: jspb.BinaryReader): ActiveGamesRequest;
}

export namespace ActiveGamesRequest {
  export type AsObject = {
  }
}

export class ActiveGamesResponse extends jspb.Message {
  hasSummer(): boolean;
  clearSummer(): void;
  getSummer(): Game | undefined;
  setSummer(value?: Game): void;

  hasWinter(): boolean;
  clearWinter(): void;
  getWinter(): Game | undefined;
  setWinter(value?: Game): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveGamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveGamesResponse): ActiveGamesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActiveGamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveGamesResponse;
  static deserializeBinaryFromReader(message: ActiveGamesResponse, reader: jspb.BinaryReader): ActiveGamesResponse;
}

export namespace ActiveGamesResponse {
  export type AsObject = {
    summer?: Game.AsObject,
    winter?: Game.AsObject,
  }
}

export class SetActiveGameRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetActiveGameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetActiveGameRequest): SetActiveGameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetActiveGameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetActiveGameRequest;
  static deserializeBinaryFromReader(message: SetActiveGameRequest, reader: jspb.BinaryReader): SetActiveGameRequest;
}

export namespace SetActiveGameRequest {
  export type AsObject = {
    id: string,
  }
}

export class SetActiveGameResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetActiveGameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetActiveGameResponse): SetActiveGameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetActiveGameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetActiveGameResponse;
  static deserializeBinaryFromReader(message: SetActiveGameResponse, reader: jspb.BinaryReader): SetActiveGameResponse;
}

export namespace SetActiveGameResponse {
  export type AsObject = {
  }
}

export class PromoteGameRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromoteGameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PromoteGameRequest): PromoteGameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromoteGameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromoteGameRequest;
  static deserializeBinaryFromReader(message: PromoteGameRequest, reader: jspb.BinaryReader): PromoteGameRequest;
}

export namespace PromoteGameRequest {
  export type AsObject = {
    id: string,
  }
}

export class PromoteGameResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromoteGameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PromoteGameResponse): PromoteGameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromoteGameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromoteGameResponse;
  static deserializeBinaryFromReader(message: PromoteGameResponse, reader: jspb.BinaryReader): PromoteGameResponse;
}

export namespace PromoteGameResponse {
  export type AsObject = {
  }
}

export class PromotedGameRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotedGameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PromotedGameRequest): PromotedGameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotedGameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotedGameRequest;
  static deserializeBinaryFromReader(message: PromotedGameRequest, reader: jspb.BinaryReader): PromotedGameRequest;
}

export namespace PromotedGameRequest {
  export type AsObject = {
  }
}

export class PromotedGameResponse extends jspb.Message {
  hasGame(): boolean;
  clearGame(): void;
  getGame(): Game | undefined;
  setGame(value?: Game): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotedGameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PromotedGameResponse): PromotedGameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotedGameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotedGameResponse;
  static deserializeBinaryFromReader(message: PromotedGameResponse, reader: jspb.BinaryReader): PromotedGameResponse;
}

export namespace PromotedGameResponse {
  export type AsObject = {
    game?: Game.AsObject,
  }
}

export class PinSportsRequest extends jspb.Message {
  getGameId(): string;
  setGameId(value: string): void;

  clearSportsList(): void;
  getSportsList(): Array<string>;
  setSportsList(value: Array<string>): void;
  addSports(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinSportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PinSportsRequest): PinSportsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinSportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinSportsRequest;
  static deserializeBinaryFromReader(message: PinSportsRequest, reader: jspb.BinaryReader): PinSportsRequest;
}

export namespace PinSportsRequest {
  export type AsObject = {
    gameId: string,
    sportsList: Array<string>,
  }
}

export class PinSportsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinSportsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PinSportsResponse): PinSportsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinSportsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinSportsResponse;
  static deserializeBinaryFromReader(message: PinSportsResponse, reader: jspb.BinaryReader): PinSportsResponse;
}

export namespace PinSportsResponse {
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
  hasGame(): boolean;
  clearGame(): void;
  getGame(): Game | undefined;
  setGame(value?: Game): void;

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
    game?: Game.AsObject,
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
  LOCATION: 3;
}

export const SortField: SortFieldMap;

export interface SortDirectionMap {
  ASC: 0;
  DSC: 1;
}

export const SortDirection: SortDirectionMap;

export interface FieldMap {
  GAMEID: 0;
  GAMESLUG: 1;
  GAMELOCATION: 2;
  GAMESEASON: 3;
  GAMEACTIVE: 4;
  GAMEPROMOTED: 5;
  GAMESTARTDATE: 6;
  GAMEENDDATE: 7;
  GAMELOGO: 8;
  GAMEBLURB: 9;
}

export const Field: FieldMap;

export interface ErrorCodeMap {
  REQUIRED: 0;
  INVALIDUUIDV4: 1;
  INVALIDURI: 2;
}

export const ErrorCode: ErrorCodeMap;

