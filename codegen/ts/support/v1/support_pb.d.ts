// package: paralympics.support.v1
// file: support/v1/support.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as content_v1_content_pb from "../../content/v1/content_pb";
import * as articles_v1_article_pb from "../../articles/v1/article_pb";

export class SupportSection extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSlug(): string;
  setSlug(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

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

  hasHeroImg(): boolean;
  clearHeroImg(): void;
  getHeroImg(): content_v1_content_pb.Image | undefined;
  setHeroImg(value?: content_v1_content_pb.Image): void;

  getHeroImgAlt(): string;
  setHeroImgAlt(value: string): void;

  getHeroText(): string;
  setHeroText(value: string): void;

  getArticleCategory(): articles_v1_article_pb.CategoryMap[keyof articles_v1_article_pb.CategoryMap];
  setArticleCategory(value: articles_v1_article_pb.CategoryMap[keyof articles_v1_article_pb.CategoryMap]): void;

  getIntroChapterHeading(): string;
  setIntroChapterHeading(value: string): void;

  getIntroLead(): string;
  setIntroLead(value: string): void;

  getIntroText(): string;
  setIntroText(value: string): void;

  getIntroTextHtml(): string;
  setIntroTextHtml(value: string): void;

  getIntroLink(): string;
  setIntroLink(value: string): void;

  getIntroArticleId(): string;
  setIntroArticleId(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupportSection.AsObject;
  static toObject(includeInstance: boolean, msg: SupportSection): SupportSection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupportSection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupportSection;
  static deserializeBinaryFromReader(message: SupportSection, reader: jspb.BinaryReader): SupportSection;
}

export namespace SupportSection {
  export type AsObject = {
    id: string,
    slug: string,
    title: string,
    createDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    heroImg?: content_v1_content_pb.Image.AsObject,
    heroImgAlt: string,
    heroText: string,
    articleCategory: articles_v1_article_pb.CategoryMap[keyof articles_v1_article_pb.CategoryMap],
    introChapterHeading: string,
    introLead: string,
    introText: string,
    introTextHtml: string,
    introLink: string,
    introArticleId: string,
    order: number,
  }
}

export class SectionByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SectionByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SectionByIDRequest): SectionByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SectionByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SectionByIDRequest;
  static deserializeBinaryFromReader(message: SectionByIDRequest, reader: jspb.BinaryReader): SectionByIDRequest;
}

export namespace SectionByIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class SectionBySlugRequest extends jspb.Message {
  getSlug(): string;
  setSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SectionBySlugRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SectionBySlugRequest): SectionBySlugRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SectionBySlugRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SectionBySlugRequest;
  static deserializeBinaryFromReader(message: SectionBySlugRequest, reader: jspb.BinaryReader): SectionBySlugRequest;
}

export namespace SectionBySlugRequest {
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

  getCategory(): articles_v1_article_pb.CategoryMap[keyof articles_v1_article_pb.CategoryMap];
  setCategory(value: articles_v1_article_pb.CategoryMap[keyof articles_v1_article_pb.CategoryMap]): void;

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
    category: articles_v1_article_pb.CategoryMap[keyof articles_v1_article_pb.CategoryMap],
  }
}

export class ListSectionsRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): ListSectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSectionsRequest): ListSectionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSectionsRequest;
  static deserializeBinaryFromReader(message: ListSectionsRequest, reader: jspb.BinaryReader): ListSectionsRequest;
}

export namespace ListSectionsRequest {
  export type AsObject = {
    pagination?: Pagination.AsObject,
    sortList: Array<SortOption.AsObject>,
    filter?: Filter.AsObject,
  }
}

export class ListSectionsResponse extends jspb.Message {
  clearSectionsList(): void;
  getSectionsList(): Array<SupportSection>;
  setSectionsList(value: Array<SupportSection>): void;
  addSections(value?: SupportSection, index?: number): SupportSection;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSectionsResponse): ListSectionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSectionsResponse;
  static deserializeBinaryFromReader(message: ListSectionsResponse, reader: jspb.BinaryReader): ListSectionsResponse;
}

export namespace ListSectionsResponse {
  export type AsObject = {
    sectionsList: Array<SupportSection.AsObject>,
    total: number,
  }
}

export class ReorderSectionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReorderSectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReorderSectionRequest): ReorderSectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReorderSectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReorderSectionRequest;
  static deserializeBinaryFromReader(message: ReorderSectionRequest, reader: jspb.BinaryReader): ReorderSectionRequest;
}

export namespace ReorderSectionRequest {
  export type AsObject = {
    id: string,
    order: number,
  }
}

export interface SortDirectionMap {
  ASC: 0;
  DSC: 1;
}

export const SortDirection: SortDirectionMap;

export interface SortFieldMap {
  CREATE_DATE: 0;
  UPDATE_DATE: 1;
  DELETE_DATE: 2;
  TITLE: 3;
  ORDER: 4;
}

export const SortField: SortFieldMap;

