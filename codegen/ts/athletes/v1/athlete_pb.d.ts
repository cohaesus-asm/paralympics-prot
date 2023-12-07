// package: paralympics.athletes.v1
// file: athletes/v1/athlete.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as content_v1_content_pb from "../../content/v1/content_pb";
import * as content_v1_social_pb from "../../content/v1/social_pb";
import * as sports_v1_sport_pb from "../../sports/v1/sport_pb";
import * as games_v1_game_pb from "../../games/v1/game_pb";

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

export class Athlete extends jspb.Message {
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

  getRegion(): string;
  setRegion(value: string): void;

  hasDob(): boolean;
  clearDob(): void;
  getDob(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDob(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getClass(): string;
  setClass(value: string): void;

  clearSocialProfilesList(): void;
  getSocialProfilesList(): Array<content_v1_social_pb.SocialProfile>;
  setSocialProfilesList(value: Array<content_v1_social_pb.SocialProfile>): void;
  addSocialProfiles(value?: content_v1_social_pb.SocialProfile, index?: number): content_v1_social_pb.SocialProfile;

  hasImgProfile(): boolean;
  clearImgProfile(): void;
  getImgProfile(): content_v1_content_pb.Image | undefined;
  setImgProfile(value?: content_v1_content_pb.Image): void;

  hasImgHero(): boolean;
  clearImgHero(): void;
  getImgHero(): content_v1_content_pb.Image | undefined;
  setImgHero(value?: content_v1_content_pb.Image): void;

  getImgHeroAlt(): string;
  setImgHeroAlt(value: string): void;

  getFeatured(): boolean;
  setFeatured(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Athlete.AsObject;
  static toObject(includeInstance: boolean, msg: Athlete): Athlete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Athlete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Athlete;
  static deserializeBinaryFromReader(message: Athlete, reader: jspb.BinaryReader): Athlete;
}

export namespace Athlete {
  export type AsObject = {
    id: string,
    slug: string,
    createDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    region: string,
    dob?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    pb_class: string,
    socialProfilesList: Array<content_v1_social_pb.SocialProfile.AsObject>,
    imgProfile?: content_v1_content_pb.Image.AsObject,
    imgHero?: content_v1_content_pb.Image.AsObject,
    imgHeroAlt: string,
    featured: boolean,
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

export class GameFilter extends jspb.Message {
  getGameId(): string;
  setGameId(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: GameFilter): GameFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameFilter;
  static deserializeBinaryFromReader(message: GameFilter, reader: jspb.BinaryReader): GameFilter;
}

export namespace GameFilter {
  export type AsObject = {
    gameId: string,
    active: boolean,
  }
}

export class Filter extends jspb.Message {
  getSportId(): string;
  setSportId(value: string): void;

  hasGame(): boolean;
  clearGame(): void;
  getGame(): GameFilter | undefined;
  setGame(value?: GameFilter): void;

  getName(): string;
  setName(value: string): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  getFeatured(): FeaturedFilterMap[keyof FeaturedFilterMap];
  setFeatured(value: FeaturedFilterMap[keyof FeaturedFilterMap]): void;

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
    sportId: string,
    game?: GameFilter.AsObject,
    name: string,
    deleted: boolean,
    featured: FeaturedFilterMap[keyof FeaturedFilterMap],
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

export class ListAthletesRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): ListAthletesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAthletesRequest): ListAthletesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAthletesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAthletesRequest;
  static deserializeBinaryFromReader(message: ListAthletesRequest, reader: jspb.BinaryReader): ListAthletesRequest;
}

export namespace ListAthletesRequest {
  export type AsObject = {
    pagination?: Pagination.AsObject,
    sortList: Array<SortOption.AsObject>,
    filter?: Filter.AsObject,
  }
}

export class AthleteByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AthleteByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AthleteByIDRequest): AthleteByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AthleteByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AthleteByIDRequest;
  static deserializeBinaryFromReader(message: AthleteByIDRequest, reader: jspb.BinaryReader): AthleteByIDRequest;
}

export namespace AthleteByIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class AthleteBySlugRequest extends jspb.Message {
  getSlug(): string;
  setSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AthleteBySlugRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AthleteBySlugRequest): AthleteBySlugRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AthleteBySlugRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AthleteBySlugRequest;
  static deserializeBinaryFromReader(message: AthleteBySlugRequest, reader: jspb.BinaryReader): AthleteBySlugRequest;
}

export namespace AthleteBySlugRequest {
  export type AsObject = {
    slug: string,
  }
}

export class AthleteContentRequest extends jspb.Message {
  getAthleteId(): string;
  setAthleteId(value: string): void;

  getAthleteSlug(): string;
  setAthleteSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AthleteContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AthleteContentRequest): AthleteContentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AthleteContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AthleteContentRequest;
  static deserializeBinaryFromReader(message: AthleteContentRequest, reader: jspb.BinaryReader): AthleteContentRequest;
}

export namespace AthleteContentRequest {
  export type AsObject = {
    athleteId: string,
    athleteSlug: string,
  }
}

export class ListAthletesResponse extends jspb.Message {
  clearAthletesList(): void;
  getAthletesList(): Array<Athlete>;
  setAthletesList(value: Array<Athlete>): void;
  addAthletes(value?: Athlete, index?: number): Athlete;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAthletesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAthletesResponse): ListAthletesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAthletesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAthletesResponse;
  static deserializeBinaryFromReader(message: ListAthletesResponse, reader: jspb.BinaryReader): ListAthletesResponse;
}

export namespace ListAthletesResponse {
  export type AsObject = {
    athletesList: Array<Athlete.AsObject>,
    total: number,
  }
}

export class PinSportsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

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
    id: string,
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

export class PinnedSportsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinnedSportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PinnedSportsRequest): PinnedSportsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinnedSportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinnedSportsRequest;
  static deserializeBinaryFromReader(message: PinnedSportsRequest, reader: jspb.BinaryReader): PinnedSportsRequest;
}

export namespace PinnedSportsRequest {
  export type AsObject = {
    id: string,
  }
}

export class PinnedSportsResponse extends jspb.Message {
  clearSportsList(): void;
  getSportsList(): Array<sports_v1_sport_pb.Sport>;
  setSportsList(value: Array<sports_v1_sport_pb.Sport>): void;
  addSports(value?: sports_v1_sport_pb.Sport, index?: number): sports_v1_sport_pb.Sport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinnedSportsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PinnedSportsResponse): PinnedSportsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinnedSportsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinnedSportsResponse;
  static deserializeBinaryFromReader(message: PinnedSportsResponse, reader: jspb.BinaryReader): PinnedSportsResponse;
}

export namespace PinnedSportsResponse {
  export type AsObject = {
    sportsList: Array<sports_v1_sport_pb.Sport.AsObject>,
  }
}

export class PinGamesRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearGamesList(): void;
  getGamesList(): Array<string>;
  setGamesList(value: Array<string>): void;
  addGames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinGamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PinGamesRequest): PinGamesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinGamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinGamesRequest;
  static deserializeBinaryFromReader(message: PinGamesRequest, reader: jspb.BinaryReader): PinGamesRequest;
}

export namespace PinGamesRequest {
  export type AsObject = {
    id: string,
    gamesList: Array<string>,
  }
}

export class PinGamesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinGamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PinGamesResponse): PinGamesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinGamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinGamesResponse;
  static deserializeBinaryFromReader(message: PinGamesResponse, reader: jspb.BinaryReader): PinGamesResponse;
}

export namespace PinGamesResponse {
  export type AsObject = {
  }
}

export class PinnedGamesRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinnedGamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PinnedGamesRequest): PinnedGamesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinnedGamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinnedGamesRequest;
  static deserializeBinaryFromReader(message: PinnedGamesRequest, reader: jspb.BinaryReader): PinnedGamesRequest;
}

export namespace PinnedGamesRequest {
  export type AsObject = {
    id: string,
  }
}

export class PinnedGamesResponse extends jspb.Message {
  clearGamesList(): void;
  getGamesList(): Array<games_v1_game_pb.Game>;
  setGamesList(value: Array<games_v1_game_pb.Game>): void;
  addGames(value?: games_v1_game_pb.Game, index?: number): games_v1_game_pb.Game;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinnedGamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PinnedGamesResponse): PinnedGamesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinnedGamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinnedGamesResponse;
  static deserializeBinaryFromReader(message: PinnedGamesResponse, reader: jspb.BinaryReader): PinnedGamesResponse;
}

export namespace PinnedGamesResponse {
  export type AsObject = {
    gamesList: Array<games_v1_game_pb.Game.AsObject>,
  }
}

export class SearchRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    query: string,
    limit: number,
  }
}

export class SearchResult extends jspb.Message {
  hasAthlete(): boolean;
  clearAthlete(): void;
  getAthlete(): Athlete | undefined;
  setAthlete(value?: Athlete): void;

  getWeighting(): number;
  setWeighting(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResult.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResult): SearchResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResult;
  static deserializeBinaryFromReader(message: SearchResult, reader: jspb.BinaryReader): SearchResult;
}

export namespace SearchResult {
  export type AsObject = {
    athlete?: Athlete.AsObject,
    weighting: number,
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

export class FeaturedResponse extends jspb.Message {
  clearAthletesList(): void;
  getAthletesList(): Array<Athlete>;
  setAthletesList(value: Array<Athlete>): void;
  addAthletes(value?: Athlete, index?: number): Athlete;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturedResponse): FeaturedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeaturedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturedResponse;
  static deserializeBinaryFromReader(message: FeaturedResponse, reader: jspb.BinaryReader): FeaturedResponse;
}

export namespace FeaturedResponse {
  export type AsObject = {
    athletesList: Array<Athlete.AsObject>,
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
  hasAthlete(): boolean;
  clearAthlete(): void;
  getAthlete(): Athlete | undefined;
  setAthlete(value?: Athlete): void;

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
    athlete?: Athlete.AsObject,
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

export interface FieldMap {
  ATHLETEID: 0;
  ATHLETESLUG: 1;
  ATHLETENAME: 2;
  ATHLETEREGION: 3;
  ATHLETEDOB: 4;
  ATHLETECLASS: 5;
  ATHLETEIMGPROFILE: 6;
  ATHLETEHERO: 7;
  ATHLETEHEROALT: 8;
}

export const Field: FieldMap;

export interface ErrorCodeMap {
  REQUIRED: 0;
}

export const ErrorCode: ErrorCodeMap;

export interface SortFieldMap {
  CREATE_DATE: 0;
  UPDATE_DATE: 1;
  DELETE_DATE: 2;
  NAME: 3;
}

export const SortField: SortFieldMap;

export interface FeaturedFilterMap {
  ALL: 0;
  FEATURED: 1;
  NOT_FEATURED: 2;
}

export const FeaturedFilter: FeaturedFilterMap;

export interface SortDirectionMap {
  ASC: 0;
  DSC: 1;
}

export const SortDirection: SortDirectionMap;

