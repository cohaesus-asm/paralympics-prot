// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var support_v1_support_pb = require('../../support/v1/support_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var content_v1_content_pb = require('../../content/v1/content_pb.js');
var articles_v1_article_pb = require('../../articles/v1/article_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_support_v1_ListSectionsRequest(arg) {
  if (!(arg instanceof support_v1_support_pb.ListSectionsRequest)) {
    throw new Error('Expected argument of type paralympics.support.v1.ListSectionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_support_v1_ListSectionsRequest(buffer_arg) {
  return support_v1_support_pb.ListSectionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_support_v1_ListSectionsResponse(arg) {
  if (!(arg instanceof support_v1_support_pb.ListSectionsResponse)) {
    throw new Error('Expected argument of type paralympics.support.v1.ListSectionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_support_v1_ListSectionsResponse(buffer_arg) {
  return support_v1_support_pb.ListSectionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_support_v1_ReorderSectionRequest(arg) {
  if (!(arg instanceof support_v1_support_pb.ReorderSectionRequest)) {
    throw new Error('Expected argument of type paralympics.support.v1.ReorderSectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_support_v1_ReorderSectionRequest(buffer_arg) {
  return support_v1_support_pb.ReorderSectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_support_v1_SectionByIDRequest(arg) {
  if (!(arg instanceof support_v1_support_pb.SectionByIDRequest)) {
    throw new Error('Expected argument of type paralympics.support.v1.SectionByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_support_v1_SectionByIDRequest(buffer_arg) {
  return support_v1_support_pb.SectionByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_support_v1_SectionBySlugRequest(arg) {
  if (!(arg instanceof support_v1_support_pb.SectionBySlugRequest)) {
    throw new Error('Expected argument of type paralympics.support.v1.SectionBySlugRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_support_v1_SectionBySlugRequest(buffer_arg) {
  return support_v1_support_pb.SectionBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_support_v1_SupportSection(arg) {
  if (!(arg instanceof support_v1_support_pb.SupportSection)) {
    throw new Error('Expected argument of type paralympics.support.v1.SupportSection');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_support_v1_SupportSection(buffer_arg) {
  return support_v1_support_pb.SupportSection.deserializeBinary(new Uint8Array(buffer_arg));
}


// Paralympics Support Service
var SupportManagerService = exports.SupportManagerService = {
  // Get a support section by it's unique by UUID
sectionByID: {
    path: '/paralympics.support.v1.SupportManager/SectionByID',
    requestStream: false,
    responseStream: false,
    requestType: support_v1_support_pb.SectionByIDRequest,
    responseType: support_v1_support_pb.SupportSection,
    requestSerialize: serialize_paralympics_support_v1_SectionByIDRequest,
    requestDeserialize: deserialize_paralympics_support_v1_SectionByIDRequest,
    responseSerialize: serialize_paralympics_support_v1_SupportSection,
    responseDeserialize: deserialize_paralympics_support_v1_SupportSection,
  },
  // Get a support section by it's unique slug
sectionBySlug: {
    path: '/paralympics.support.v1.SupportManager/SectionBySlug',
    requestStream: false,
    responseStream: false,
    requestType: support_v1_support_pb.SectionBySlugRequest,
    responseType: support_v1_support_pb.SupportSection,
    requestSerialize: serialize_paralympics_support_v1_SectionBySlugRequest,
    requestDeserialize: deserialize_paralympics_support_v1_SectionBySlugRequest,
    responseSerialize: serialize_paralympics_support_v1_SupportSection,
    responseDeserialize: deserialize_paralympics_support_v1_SupportSection,
  },
  // Lists all the Support Sections
listSections: {
    path: '/paralympics.support.v1.SupportManager/ListSections',
    requestStream: false,
    responseStream: false,
    requestType: support_v1_support_pb.ListSectionsRequest,
    responseType: support_v1_support_pb.ListSectionsResponse,
    requestSerialize: serialize_paralympics_support_v1_ListSectionsRequest,
    requestDeserialize: deserialize_paralympics_support_v1_ListSectionsRequest,
    responseSerialize: serialize_paralympics_support_v1_ListSectionsResponse,
    responseDeserialize: deserialize_paralympics_support_v1_ListSectionsResponse,
  },
  // Creates or Updates a support section
putSection: {
    path: '/paralympics.support.v1.SupportManager/PutSection',
    requestStream: false,
    responseStream: false,
    requestType: support_v1_support_pb.SupportSection,
    responseType: support_v1_support_pb.SupportSection,
    requestSerialize: serialize_paralympics_support_v1_SupportSection,
    requestDeserialize: deserialize_paralympics_support_v1_SupportSection,
    responseSerialize: serialize_paralympics_support_v1_SupportSection,
    responseDeserialize: deserialize_paralympics_support_v1_SupportSection,
  },
  // Deletes a support section
deleteSection: {
    path: '/paralympics.support.v1.SupportManager/DeleteSection',
    requestStream: false,
    responseStream: false,
    requestType: support_v1_support_pb.SupportSection,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_paralympics_support_v1_SupportSection,
    requestDeserialize: deserialize_paralympics_support_v1_SupportSection,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Reorders support sections
reorderSection: {
    path: '/paralympics.support.v1.SupportManager/ReorderSection',
    requestStream: false,
    responseStream: false,
    requestType: support_v1_support_pb.ReorderSectionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_paralympics_support_v1_ReorderSectionRequest,
    requestDeserialize: deserialize_paralympics_support_v1_ReorderSectionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.SupportManagerClient = grpc.makeGenericClientConstructor(SupportManagerService);
