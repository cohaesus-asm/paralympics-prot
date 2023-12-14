// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var page_v1_page_pb = require('../../page/v1/page_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var content_v1_content_pb = require('../../content/v1/content_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_content_v1_ContentModule(arg) {
  if (!(arg instanceof content_v1_content_pb.ContentModule)) {
    throw new Error('Expected argument of type paralympics.content.v1.ContentModule');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_content_v1_ContentModule(buffer_arg) {
  return content_v1_content_pb.ContentModule.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_pages_v1_ListPagesRequest(arg) {
  if (!(arg instanceof page_v1_page_pb.ListPagesRequest)) {
    throw new Error('Expected argument of type paralympics.pages.v1.ListPagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_pages_v1_ListPagesRequest(buffer_arg) {
  return page_v1_page_pb.ListPagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_pages_v1_ListPagesResponse(arg) {
  if (!(arg instanceof page_v1_page_pb.ListPagesResponse)) {
    throw new Error('Expected argument of type paralympics.pages.v1.ListPagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_pages_v1_ListPagesResponse(buffer_arg) {
  return page_v1_page_pb.ListPagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_pages_v1_Page(arg) {
  if (!(arg instanceof page_v1_page_pb.Page)) {
    throw new Error('Expected argument of type paralympics.pages.v1.Page');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_pages_v1_Page(buffer_arg) {
  return page_v1_page_pb.Page.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_pages_v1_PageByIDRequest(arg) {
  if (!(arg instanceof page_v1_page_pb.PageByIDRequest)) {
    throw new Error('Expected argument of type paralympics.pages.v1.PageByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_pages_v1_PageByIDRequest(buffer_arg) {
  return page_v1_page_pb.PageByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_pages_v1_PageBySlugRequest(arg) {
  if (!(arg instanceof page_v1_page_pb.PageBySlugRequest)) {
    throw new Error('Expected argument of type paralympics.pages.v1.PageBySlugRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_pages_v1_PageBySlugRequest(buffer_arg) {
  return page_v1_page_pb.PageBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_pages_v1_PageContentRequest(arg) {
  if (!(arg instanceof page_v1_page_pb.PageContentRequest)) {
    throw new Error('Expected argument of type paralympics.pages.v1.PageContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_pages_v1_PageContentRequest(buffer_arg) {
  return page_v1_page_pb.PageContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_pages_v1_ReorderPageRequest(arg) {
  if (!(arg instanceof page_v1_page_pb.ReorderPageRequest)) {
    throw new Error('Expected argument of type paralympics.pages.v1.ReorderPageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_pages_v1_ReorderPageRequest(buffer_arg) {
  return page_v1_page_pb.ReorderPageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Paralympics Page Service
var PageManagerService = exports.PageManagerService = {
  // Get a page by it's unique by UUID
pageByID: {
    path: '/paralympics.pages.v1.PageManager/PageByID',
    requestStream: false,
    responseStream: false,
    requestType: page_v1_page_pb.PageByIDRequest,
    responseType: page_v1_page_pb.Page,
    requestSerialize: serialize_paralympics_pages_v1_PageByIDRequest,
    requestDeserialize: deserialize_paralympics_pages_v1_PageByIDRequest,
    responseSerialize: serialize_paralympics_pages_v1_Page,
    responseDeserialize: deserialize_paralympics_pages_v1_Page,
  },
  // Get a page by it's unique slug
pageBySlug: {
    path: '/paralympics.pages.v1.PageManager/PageBySlug',
    requestStream: false,
    responseStream: false,
    requestType: page_v1_page_pb.PageBySlugRequest,
    responseType: page_v1_page_pb.Page,
    requestSerialize: serialize_paralympics_pages_v1_PageBySlugRequest,
    requestDeserialize: deserialize_paralympics_pages_v1_PageBySlugRequest,
    responseSerialize: serialize_paralympics_pages_v1_Page,
    responseDeserialize: deserialize_paralympics_pages_v1_Page,
  },
  // Lists all the Pages
listPages: {
    path: '/paralympics.pages.v1.PageManager/ListPages',
    requestStream: false,
    responseStream: false,
    requestType: page_v1_page_pb.ListPagesRequest,
    responseType: page_v1_page_pb.ListPagesResponse,
    requestSerialize: serialize_paralympics_pages_v1_ListPagesRequest,
    requestDeserialize: deserialize_paralympics_pages_v1_ListPagesRequest,
    responseSerialize: serialize_paralympics_pages_v1_ListPagesResponse,
    responseDeserialize: deserialize_paralympics_pages_v1_ListPagesResponse,
  },
  // Creates or Updates a page
putPage: {
    path: '/paralympics.pages.v1.PageManager/PutPage',
    requestStream: false,
    responseStream: false,
    requestType: page_v1_page_pb.Page,
    responseType: page_v1_page_pb.Page,
    requestSerialize: serialize_paralympics_pages_v1_Page,
    requestDeserialize: deserialize_paralympics_pages_v1_Page,
    responseSerialize: serialize_paralympics_pages_v1_Page,
    responseDeserialize: deserialize_paralympics_pages_v1_Page,
  },
  // Deletes an page
deletePage: {
    path: '/paralympics.pages.v1.PageManager/DeletePage',
    requestStream: false,
    responseStream: false,
    requestType: page_v1_page_pb.Page,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_paralympics_pages_v1_Page,
    requestDeserialize: deserialize_paralympics_pages_v1_Page,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Reorders pages in a collection
reorderPage: {
    path: '/paralympics.pages.v1.PageManager/ReorderPage',
    requestStream: false,
    responseStream: false,
    requestType: page_v1_page_pb.ReorderPageRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_paralympics_pages_v1_ReorderPageRequest,
    requestDeserialize: deserialize_paralympics_pages_v1_ReorderPageRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // List page content
pageContent: {
    path: '/paralympics.pages.v1.PageManager/PageContent',
    requestStream: false,
    responseStream: true,
    requestType: page_v1_page_pb.PageContentRequest,
    responseType: content_v1_content_pb.ContentModule,
    requestSerialize: serialize_paralympics_pages_v1_PageContentRequest,
    requestDeserialize: deserialize_paralympics_pages_v1_PageContentRequest,
    responseSerialize: serialize_paralympics_content_v1_ContentModule,
    responseDeserialize: deserialize_paralympics_content_v1_ContentModule,
  },
  // Creates or Updates page content
putPageContent: {
    path: '/paralympics.pages.v1.PageManager/PutPageContent',
    requestStream: true,
    responseStream: true,
    requestType: content_v1_content_pb.ContentModule,
    responseType: content_v1_content_pb.ContentModule,
    requestSerialize: serialize_paralympics_content_v1_ContentModule,
    requestDeserialize: deserialize_paralympics_content_v1_ContentModule,
    responseSerialize: serialize_paralympics_content_v1_ContentModule,
    responseDeserialize: deserialize_paralympics_content_v1_ContentModule,
  },
};

exports.PageManagerClient = grpc.makeGenericClientConstructor(PageManagerService);
