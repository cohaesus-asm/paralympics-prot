// package: paralympics.pages.v1
// file: page/v1/page.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as content_v1_content_pb from "../../content/v1/content_pb";

export class Page extends jspb.Message {
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

  hasImgHero(): boolean;
  clearImgHero(): void;
  getImgHero(): content_v1_content_pb.Image | undefined;
  setImgHero(value?: content_v1_content_pb.Image): void;

  getImgHeroAlt(): string;
  setImgHeroAlt(value: string): void;

  getCollection(): CollectionMap[keyof CollectionMap];
  setCollection(value: CollectionMap[keyof CollectionMap]): void;

  getOrder(): number;
  setOrder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    id: string,
    slug: string,
    title: string,
    createDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    imgHero?: content_v1_content_pb.Image.AsObject,
    imgHeroAlt: string,
    collection: CollectionMap[keyof CollectionMap],
    order: number,
  }
}

export class PageByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PageByIDRequest): PageByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PageByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageByIDRequest;
  static deserializeBinaryFromReader(message: PageByIDRequest, reader: jspb.BinaryReader): PageByIDRequest;
}

export namespace PageByIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class PageBySlugRequest extends jspb.Message {
  getSlug(): string;
  setSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageBySlugRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PageBySlugRequest): PageBySlugRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PageBySlugRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageBySlugRequest;
  static deserializeBinaryFromReader(message: PageBySlugRequest, reader: jspb.BinaryReader): PageBySlugRequest;
}

export namespace PageBySlugRequest {
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

  getCollection(): CollectionMap[keyof CollectionMap];
  setCollection(value: CollectionMap[keyof CollectionMap]): void;

  getParentId(): string;
  setParentId(value: string): void;

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
    collection: CollectionMap[keyof CollectionMap],
    parentId: string,
  }
}

export class ListPagesRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): ListPagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPagesRequest): ListPagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPagesRequest;
  static deserializeBinaryFromReader(message: ListPagesRequest, reader: jspb.BinaryReader): ListPagesRequest;
}

export namespace ListPagesRequest {
  export type AsObject = {
    pagination?: Pagination.AsObject,
    sortList: Array<SortOption.AsObject>,
    filter?: Filter.AsObject,
  }
}

export class PageContentRequest extends jspb.Message {
  getPageId(): string;
  setPageId(value: string): void;

  getPageSlug(): string;
  setPageSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PageContentRequest): PageContentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PageContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageContentRequest;
  static deserializeBinaryFromReader(message: PageContentRequest, reader: jspb.BinaryReader): PageContentRequest;
}

export namespace PageContentRequest {
  export type AsObject = {
    pageId: string,
    pageSlug: string,
  }
}

export class ListPagesResponse extends jspb.Message {
  clearPagesList(): void;
  getPagesList(): Array<Page>;
  setPagesList(value: Array<Page>): void;
  addPages(value?: Page, index?: number): Page;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPagesResponse): ListPagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPagesResponse;
  static deserializeBinaryFromReader(message: ListPagesResponse, reader: jspb.BinaryReader): ListPagesResponse;
}

export namespace ListPagesResponse {
  export type AsObject = {
    pagesList: Array<Page.AsObject>,
    total: number,
  }
}

export class ReorderPageRequest extends jspb.Message {
  getPageId(): string;
  setPageId(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReorderPageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReorderPageRequest): ReorderPageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReorderPageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReorderPageRequest;
  static deserializeBinaryFromReader(message: ReorderPageRequest, reader: jspb.BinaryReader): ReorderPageRequest;
}

export namespace ReorderPageRequest {
  export type AsObject = {
    pageId: string,
    order: number,
  }
}

export interface CollectionMap {
  FOOTER: 0;
}

export const Collection: CollectionMap;

export interface SortDirectionMap {
  ASC: 0;
  DSC: 1;
}

export const SortDirection: SortDirectionMap;

export interface SortFieldMap {
  CREATE_DATE: 0;
  UPDATE_DATE: 1;
  DELETE_DATE: 2;
  ORDER: 3;
  TITLE: 4;
}

export const SortField: SortFieldMap;

