// package: paralympics.articles.v1
// file: articles/v1/article.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as content_v1_content_pb from "../../content/v1/content_pb";
import * as athletes_v1_athlete_pb from "../../athletes/v1/athlete_pb";

export class Article extends jspb.Message {
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

  getTitle(): string;
  setTitle(value: string): void;

  getBlurb(): string;
  setBlurb(value: string): void;

  getPublished(): boolean;
  setPublished(value: boolean): void;

  getFeatured(): boolean;
  setFeatured(value: boolean): void;

  hasPublishFrom(): boolean;
  clearPublishFrom(): void;
  getPublishFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPublishUntil(): boolean;
  clearPublishUntil(): void;
  getPublishUntil(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishUntil(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getGameId(): string;
  setGameId(value: string): void;

  getSportId(): string;
  setSportId(value: string): void;

  getLive(): boolean;
  setLive(value: boolean): void;

  hasImgCard(): boolean;
  clearImgCard(): void;
  getImgCard(): content_v1_content_pb.Image | undefined;
  setImgCard(value?: content_v1_content_pb.Image): void;

  hasImgHero(): boolean;
  clearImgHero(): void;
  getImgHero(): content_v1_content_pb.Image | undefined;
  setImgHero(value?: content_v1_content_pb.Image): void;

  getRich(): boolean;
  setRich(value: boolean): void;

  getImgCardAlt(): string;
  setImgCardAlt(value: string): void;

  getImgHeroAlt(): string;
  setImgHeroAlt(value: string): void;

  getPinned(): boolean;
  setPinned(value: boolean): void;

  getCategory(): CategoryMap[keyof CategoryMap];
  setCategory(value: CategoryMap[keyof CategoryMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Article.AsObject;
  static toObject(includeInstance: boolean, msg: Article): Article.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Article, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Article;
  static deserializeBinaryFromReader(message: Article, reader: jspb.BinaryReader): Article;
}

export namespace Article {
  export type AsObject = {
    id: string,
    slug: string,
    createDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    title: string,
    blurb: string,
    published: boolean,
    featured: boolean,
    publishFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    publishUntil?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    gameId: string,
    sportId: string,
    live: boolean,
    imgCard?: content_v1_content_pb.Image.AsObject,
    imgHero?: content_v1_content_pb.Image.AsObject,
    rich: boolean,
    imgCardAlt: string,
    imgHeroAlt: string,
    pinned: boolean,
    category: CategoryMap[keyof CategoryMap],
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
  getLive(): boolean;
  setLive(value: boolean): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  getGameId(): string;
  setGameId(value: string): void;

  getSportId(): string;
  setSportId(value: string): void;

  getAthleteId(): string;
  setAthleteId(value: string): void;

  getNotFeatured(): boolean;
  setNotFeatured(value: boolean): void;

  getPinned(): PinnedFilterMap[keyof PinnedFilterMap];
  setPinned(value: PinnedFilterMap[keyof PinnedFilterMap]): void;

  getCategory(): CategoryMap[keyof CategoryMap];
  setCategory(value: CategoryMap[keyof CategoryMap]): void;

  getTitle(): string;
  setTitle(value: string): void;

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
    live: boolean,
    deleted: boolean,
    gameId: string,
    sportId: string,
    athleteId: string,
    notFeatured: boolean,
    pinned: PinnedFilterMap[keyof PinnedFilterMap],
    category: CategoryMap[keyof CategoryMap],
    title: string,
  }
}

export class ArticleByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArticleByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArticleByIDRequest): ArticleByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArticleByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArticleByIDRequest;
  static deserializeBinaryFromReader(message: ArticleByIDRequest, reader: jspb.BinaryReader): ArticleByIDRequest;
}

export namespace ArticleByIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class ArticleBySlugRequest extends jspb.Message {
  getSlug(): string;
  setSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArticleBySlugRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArticleBySlugRequest): ArticleBySlugRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArticleBySlugRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArticleBySlugRequest;
  static deserializeBinaryFromReader(message: ArticleBySlugRequest, reader: jspb.BinaryReader): ArticleBySlugRequest;
}

export namespace ArticleBySlugRequest {
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

export class ListArticlesRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): ListArticlesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListArticlesRequest): ListArticlesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListArticlesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListArticlesRequest;
  static deserializeBinaryFromReader(message: ListArticlesRequest, reader: jspb.BinaryReader): ListArticlesRequest;
}

export namespace ListArticlesRequest {
  export type AsObject = {
    pagination?: Pagination.AsObject,
    sortList: Array<SortOption.AsObject>,
    filter?: Filter.AsObject,
  }
}

export class ArticleContentRequest extends jspb.Message {
  getArticleId(): string;
  setArticleId(value: string): void;

  getArticleSlug(): string;
  setArticleSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArticleContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArticleContentRequest): ArticleContentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArticleContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArticleContentRequest;
  static deserializeBinaryFromReader(message: ArticleContentRequest, reader: jspb.BinaryReader): ArticleContentRequest;
}

export namespace ArticleContentRequest {
  export type AsObject = {
    articleId: string,
    articleSlug: string,
  }
}

export class TogglePublishRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TogglePublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TogglePublishRequest): TogglePublishRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TogglePublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TogglePublishRequest;
  static deserializeBinaryFromReader(message: TogglePublishRequest, reader: jspb.BinaryReader): TogglePublishRequest;
}

export namespace TogglePublishRequest {
  export type AsObject = {
    id: string,
  }
}

export class TogglePublishResponse extends jspb.Message {
  getPublished(): boolean;
  setPublished(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TogglePublishResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TogglePublishResponse): TogglePublishResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TogglePublishResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TogglePublishResponse;
  static deserializeBinaryFromReader(message: TogglePublishResponse, reader: jspb.BinaryReader): TogglePublishResponse;
}

export namespace TogglePublishResponse {
  export type AsObject = {
    published: boolean,
  }
}

export class ListArticlesResponse extends jspb.Message {
  clearArticlesList(): void;
  getArticlesList(): Array<Article>;
  setArticlesList(value: Array<Article>): void;
  addArticles(value?: Article, index?: number): Article;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListArticlesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListArticlesResponse): ListArticlesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListArticlesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListArticlesResponse;
  static deserializeBinaryFromReader(message: ListArticlesResponse, reader: jspb.BinaryReader): ListArticlesResponse;
}

export namespace ListArticlesResponse {
  export type AsObject = {
    articlesList: Array<Article.AsObject>,
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

export class FeatureArticleRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureArticleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureArticleRequest): FeatureArticleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeatureArticleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureArticleRequest;
  static deserializeBinaryFromReader(message: FeatureArticleRequest, reader: jspb.BinaryReader): FeatureArticleRequest;
}

export namespace FeatureArticleRequest {
  export type AsObject = {
    id: string,
  }
}

export class FeatureArticleResponse extends jspb.Message {
  getFeatured(): boolean;
  setFeatured(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureArticleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureArticleResponse): FeatureArticleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeatureArticleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureArticleResponse;
  static deserializeBinaryFromReader(message: FeatureArticleResponse, reader: jspb.BinaryReader): FeatureArticleResponse;
}

export namespace FeatureArticleResponse {
  export type AsObject = {
    featured: boolean,
  }
}

export class FeaturedArticleRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturedArticleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturedArticleRequest): FeaturedArticleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeaturedArticleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturedArticleRequest;
  static deserializeBinaryFromReader(message: FeaturedArticleRequest, reader: jspb.BinaryReader): FeaturedArticleRequest;
}

export namespace FeaturedArticleRequest {
  export type AsObject = {
  }
}

export class FeaturedArticleResponse extends jspb.Message {
  hasArticle(): boolean;
  clearArticle(): void;
  getArticle(): Article | undefined;
  setArticle(value?: Article): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeaturedArticleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FeaturedArticleResponse): FeaturedArticleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeaturedArticleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeaturedArticleResponse;
  static deserializeBinaryFromReader(message: FeaturedArticleResponse, reader: jspb.BinaryReader): FeaturedArticleResponse;
}

export namespace FeaturedArticleResponse {
  export type AsObject = {
    article?: Article.AsObject,
  }
}

export class LiveArticlesRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiveArticlesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LiveArticlesRequest): LiveArticlesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiveArticlesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiveArticlesRequest;
  static deserializeBinaryFromReader(message: LiveArticlesRequest, reader: jspb.BinaryReader): LiveArticlesRequest;
}

export namespace LiveArticlesRequest {
  export type AsObject = {
    pagination?: Pagination.AsObject,
    filter?: Filter.AsObject,
  }
}

export class LiveArticlesResponse extends jspb.Message {
  clearArticlesList(): void;
  getArticlesList(): Array<Article>;
  setArticlesList(value: Array<Article>): void;
  addArticles(value?: Article, index?: number): Article;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiveArticlesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LiveArticlesResponse): LiveArticlesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiveArticlesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiveArticlesResponse;
  static deserializeBinaryFromReader(message: LiveArticlesResponse, reader: jspb.BinaryReader): LiveArticlesResponse;
}

export namespace LiveArticlesResponse {
  export type AsObject = {
    articlesList: Array<Article.AsObject>,
    total: number,
  }
}

export class PinAthletesRequest extends jspb.Message {
  getArticleId(): string;
  setArticleId(value: string): void;

  clearAthletesList(): void;
  getAthletesList(): Array<string>;
  setAthletesList(value: Array<string>): void;
  addAthletes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinAthletesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PinAthletesRequest): PinAthletesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinAthletesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinAthletesRequest;
  static deserializeBinaryFromReader(message: PinAthletesRequest, reader: jspb.BinaryReader): PinAthletesRequest;
}

export namespace PinAthletesRequest {
  export type AsObject = {
    articleId: string,
    athletesList: Array<string>,
  }
}

export class PinAthletesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinAthletesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PinAthletesResponse): PinAthletesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinAthletesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinAthletesResponse;
  static deserializeBinaryFromReader(message: PinAthletesResponse, reader: jspb.BinaryReader): PinAthletesResponse;
}

export namespace PinAthletesResponse {
  export type AsObject = {
  }
}

export class PinnedAthletesRequest extends jspb.Message {
  getArticleId(): string;
  setArticleId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinnedAthletesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PinnedAthletesRequest): PinnedAthletesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinnedAthletesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinnedAthletesRequest;
  static deserializeBinaryFromReader(message: PinnedAthletesRequest, reader: jspb.BinaryReader): PinnedAthletesRequest;
}

export namespace PinnedAthletesRequest {
  export type AsObject = {
    articleId: string,
  }
}

export class TogglePinnedRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TogglePinnedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TogglePinnedRequest): TogglePinnedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TogglePinnedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TogglePinnedRequest;
  static deserializeBinaryFromReader(message: TogglePinnedRequest, reader: jspb.BinaryReader): TogglePinnedRequest;
}

export namespace TogglePinnedRequest {
  export type AsObject = {
    id: string,
  }
}

export class TogglePinnedResponse extends jspb.Message {
  getPinned(): boolean;
  setPinned(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TogglePinnedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TogglePinnedResponse): TogglePinnedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TogglePinnedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TogglePinnedResponse;
  static deserializeBinaryFromReader(message: TogglePinnedResponse, reader: jspb.BinaryReader): TogglePinnedResponse;
}

export namespace TogglePinnedResponse {
  export type AsObject = {
    pinned: boolean,
  }
}

export class PinnedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinnedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PinnedRequest): PinnedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinnedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinnedRequest;
  static deserializeBinaryFromReader(message: PinnedRequest, reader: jspb.BinaryReader): PinnedRequest;
}

export namespace PinnedRequest {
  export type AsObject = {
  }
}

export class PinnedResponse extends jspb.Message {
  clearArticlesList(): void;
  getArticlesList(): Array<Article>;
  setArticlesList(value: Array<Article>): void;
  addArticles(value?: Article, index?: number): Article;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinnedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PinnedResponse): PinnedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PinnedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinnedResponse;
  static deserializeBinaryFromReader(message: PinnedResponse, reader: jspb.BinaryReader): PinnedResponse;
}

export namespace PinnedResponse {
  export type AsObject = {
    articlesList: Array<Article.AsObject>,
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
  hasArticle(): boolean;
  clearArticle(): void;
  getArticle(): Article | undefined;
  setArticle(value?: Article): void;

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
    article?: Article.AsObject,
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

export interface SortFieldMap {
  CREATE_DATE: 0;
  UPDATE_DATE: 1;
  DELETE_DATE: 2;
  PUBLISH_FROM: 3;
  PUBLISH_UNTIL: 4;
  PUBLISHED: 5;
  TITLE: 6;
}

export const SortField: SortFieldMap;

export interface PinnedFilterMap {
  ALL: 0;
  PINNED: 1;
  NOT_PINNED: 2;
}

export const PinnedFilter: PinnedFilterMap;

export interface SortDirectionMap {
  ASC: 0;
  DSC: 1;
}

export const SortDirection: SortDirectionMap;

export interface FieldMap {
  ARTICLEID: 0;
  ARTICLESLUG: 1;
  ARTICLETITLE: 2;
  ARTICLEBLURB: 3;
  ARTICLEPUBLISHFROM: 4;
  ARTICLEPUBLISHUNTIL: 5;
  ARTICLEIMAGECARD: 6;
  ARTICLEIMAGEHERO: 7;
}

export const Field: FieldMap;

export interface ErrorCodeMap {
  REQUIRED: 0;
  INVALIDUUIDV4: 1;
  INVALIDURI: 2;
  PUBLISHUNTILGTPUBLISHFROM: 3;
  IMAGEINVALID: 4;
}

export const ErrorCode: ErrorCodeMap;

export interface CategoryMap {
  NONE: 0;
  SUPPORT_FUNDRAISING: 1;
  SUPPORT_EVENTS: 2;
  SUPPORT_CORPORATE: 3;
  SUPPORT_GIFTS: 4;
}

export const Category: CategoryMap;

