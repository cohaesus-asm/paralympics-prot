// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sports_v1_sport_pb = require('../../sports/v1/sport_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var content_v1_content_pb = require('../../content/v1/content_pb.js');
var content_v1_social_pb = require('../../content/v1/social_pb.js');

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

function serialize_paralympics_sports_v1_FeaturedRequest(arg) {
  if (!(arg instanceof sports_v1_sport_pb.FeaturedRequest)) {
    throw new Error('Expected argument of type paralympics.sports.v1.FeaturedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_sports_v1_FeaturedRequest(buffer_arg) {
  return sports_v1_sport_pb.FeaturedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_sports_v1_ListSportsRequest(arg) {
  if (!(arg instanceof sports_v1_sport_pb.ListSportsRequest)) {
    throw new Error('Expected argument of type paralympics.sports.v1.ListSportsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_sports_v1_ListSportsRequest(buffer_arg) {
  return sports_v1_sport_pb.ListSportsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_sports_v1_ListSportsResponse(arg) {
  if (!(arg instanceof sports_v1_sport_pb.ListSportsResponse)) {
    throw new Error('Expected argument of type paralympics.sports.v1.ListSportsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_sports_v1_ListSportsResponse(buffer_arg) {
  return sports_v1_sport_pb.ListSportsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_sports_v1_PurgeRequest(arg) {
  if (!(arg instanceof sports_v1_sport_pb.PurgeRequest)) {
    throw new Error('Expected argument of type paralympics.sports.v1.PurgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_sports_v1_PurgeRequest(buffer_arg) {
  return sports_v1_sport_pb.PurgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_sports_v1_PurgeResponse(arg) {
  if (!(arg instanceof sports_v1_sport_pb.PurgeResponse)) {
    throw new Error('Expected argument of type paralympics.sports.v1.PurgeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_sports_v1_PurgeResponse(buffer_arg) {
  return sports_v1_sport_pb.PurgeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_sports_v1_RestoreRequest(arg) {
  if (!(arg instanceof sports_v1_sport_pb.RestoreRequest)) {
    throw new Error('Expected argument of type paralympics.sports.v1.RestoreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_sports_v1_RestoreRequest(buffer_arg) {
  return sports_v1_sport_pb.RestoreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_sports_v1_RestoreResponse(arg) {
  if (!(arg instanceof sports_v1_sport_pb.RestoreResponse)) {
    throw new Error('Expected argument of type paralympics.sports.v1.RestoreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_sports_v1_RestoreResponse(buffer_arg) {
  return sports_v1_sport_pb.RestoreResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_sports_v1_Sport(arg) {
  if (!(arg instanceof sports_v1_sport_pb.Sport)) {
    throw new Error('Expected argument of type paralympics.sports.v1.Sport');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_sports_v1_Sport(buffer_arg) {
  return sports_v1_sport_pb.Sport.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_sports_v1_SportByIDRequest(arg) {
  if (!(arg instanceof sports_v1_sport_pb.SportByIDRequest)) {
    throw new Error('Expected argument of type paralympics.sports.v1.SportByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_sports_v1_SportByIDRequest(buffer_arg) {
  return sports_v1_sport_pb.SportByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_sports_v1_SportBySlugRequest(arg) {
  if (!(arg instanceof sports_v1_sport_pb.SportBySlugRequest)) {
    throw new Error('Expected argument of type paralympics.sports.v1.SportBySlugRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_sports_v1_SportBySlugRequest(buffer_arg) {
  return sports_v1_sport_pb.SportBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_sports_v1_SportContentRequest(arg) {
  if (!(arg instanceof sports_v1_sport_pb.SportContentRequest)) {
    throw new Error('Expected argument of type paralympics.sports.v1.SportContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_sports_v1_SportContentRequest(buffer_arg) {
  return sports_v1_sport_pb.SportContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_sports_v1_ToggleFeaturedRequest(arg) {
  if (!(arg instanceof sports_v1_sport_pb.ToggleFeaturedRequest)) {
    throw new Error('Expected argument of type paralympics.sports.v1.ToggleFeaturedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_sports_v1_ToggleFeaturedRequest(buffer_arg) {
  return sports_v1_sport_pb.ToggleFeaturedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_sports_v1_ToggleFeaturedResponse(arg) {
  if (!(arg instanceof sports_v1_sport_pb.ToggleFeaturedResponse)) {
    throw new Error('Expected argument of type paralympics.sports.v1.ToggleFeaturedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_sports_v1_ToggleFeaturedResponse(buffer_arg) {
  return sports_v1_sport_pb.ToggleFeaturedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Paralympics Sport Service
var SportManagerService = exports.SportManagerService = {
  // Gets a single Sport
sportByID: {
    path: '/paralympics.sports.v1.SportManager/SportByID',
    requestStream: false,
    responseStream: false,
    requestType: sports_v1_sport_pb.SportByIDRequest,
    responseType: sports_v1_sport_pb.Sport,
    requestSerialize: serialize_paralympics_sports_v1_SportByIDRequest,
    requestDeserialize: deserialize_paralympics_sports_v1_SportByIDRequest,
    responseSerialize: serialize_paralympics_sports_v1_Sport,
    responseDeserialize: deserialize_paralympics_sports_v1_Sport,
  },
  sportBySlug: {
    path: '/paralympics.sports.v1.SportManager/SportBySlug',
    requestStream: false,
    responseStream: false,
    requestType: sports_v1_sport_pb.SportBySlugRequest,
    responseType: sports_v1_sport_pb.Sport,
    requestSerialize: serialize_paralympics_sports_v1_SportBySlugRequest,
    requestDeserialize: deserialize_paralympics_sports_v1_SportBySlugRequest,
    responseSerialize: serialize_paralympics_sports_v1_Sport,
    responseDeserialize: deserialize_paralympics_sports_v1_Sport,
  },
  // Lists all the Sports
listSports: {
    path: '/paralympics.sports.v1.SportManager/ListSports',
    requestStream: false,
    responseStream: false,
    requestType: sports_v1_sport_pb.ListSportsRequest,
    responseType: sports_v1_sport_pb.ListSportsResponse,
    requestSerialize: serialize_paralympics_sports_v1_ListSportsRequest,
    requestDeserialize: deserialize_paralympics_sports_v1_ListSportsRequest,
    responseSerialize: serialize_paralympics_sports_v1_ListSportsResponse,
    responseDeserialize: deserialize_paralympics_sports_v1_ListSportsResponse,
  },
  // Creates or Updates an Sport
putSport: {
    path: '/paralympics.sports.v1.SportManager/PutSport',
    requestStream: false,
    responseStream: false,
    requestType: sports_v1_sport_pb.Sport,
    responseType: sports_v1_sport_pb.Sport,
    requestSerialize: serialize_paralympics_sports_v1_Sport,
    requestDeserialize: deserialize_paralympics_sports_v1_Sport,
    responseSerialize: serialize_paralympics_sports_v1_Sport,
    responseDeserialize: deserialize_paralympics_sports_v1_Sport,
  },
  // Deletes an Sport
deleteSport: {
    path: '/paralympics.sports.v1.SportManager/DeleteSport',
    requestStream: false,
    responseStream: false,
    requestType: sports_v1_sport_pb.Sport,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_paralympics_sports_v1_Sport,
    requestDeserialize: deserialize_paralympics_sports_v1_Sport,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Restore an article that is soft deleted
restore: {
    path: '/paralympics.sports.v1.SportManager/Restore',
    requestStream: false,
    responseStream: false,
    requestType: sports_v1_sport_pb.RestoreRequest,
    responseType: sports_v1_sport_pb.RestoreResponse,
    requestSerialize: serialize_paralympics_sports_v1_RestoreRequest,
    requestDeserialize: deserialize_paralympics_sports_v1_RestoreRequest,
    responseSerialize: serialize_paralympics_sports_v1_RestoreResponse,
    responseDeserialize: deserialize_paralympics_sports_v1_RestoreResponse,
  },
  // Purge hard deletes a sport and it's relations
purge: {
    path: '/paralympics.sports.v1.SportManager/Purge',
    requestStream: false,
    responseStream: false,
    requestType: sports_v1_sport_pb.PurgeRequest,
    responseType: sports_v1_sport_pb.PurgeResponse,
    requestSerialize: serialize_paralympics_sports_v1_PurgeRequest,
    requestDeserialize: deserialize_paralympics_sports_v1_PurgeRequest,
    responseSerialize: serialize_paralympics_sports_v1_PurgeResponse,
    responseDeserialize: deserialize_paralympics_sports_v1_PurgeResponse,
  },
  // List Sport content
sportContent: {
    path: '/paralympics.sports.v1.SportManager/SportContent',
    requestStream: false,
    responseStream: true,
    requestType: sports_v1_sport_pb.SportContentRequest,
    responseType: content_v1_content_pb.ContentModule,
    requestSerialize: serialize_paralympics_sports_v1_SportContentRequest,
    requestDeserialize: deserialize_paralympics_sports_v1_SportContentRequest,
    responseSerialize: serialize_paralympics_content_v1_ContentModule,
    responseDeserialize: deserialize_paralympics_content_v1_ContentModule,
  },
  // Creates or Updates Sport content
putSportContent: {
    path: '/paralympics.sports.v1.SportManager/PutSportContent',
    requestStream: true,
    responseStream: true,
    requestType: content_v1_content_pb.ContentModule,
    responseType: content_v1_content_pb.ContentModule,
    requestSerialize: serialize_paralympics_content_v1_ContentModule,
    requestDeserialize: deserialize_paralympics_content_v1_ContentModule,
    responseSerialize: serialize_paralympics_content_v1_ContentModule,
    responseDeserialize: deserialize_paralympics_content_v1_ContentModule,
  },
  // ToggleFeatured toggles a sports featured status, if on it will be turned off, if off it will be turned on
toggleFeatured: {
    path: '/paralympics.sports.v1.SportManager/ToggleFeatured',
    requestStream: false,
    responseStream: false,
    requestType: sports_v1_sport_pb.ToggleFeaturedRequest,
    responseType: sports_v1_sport_pb.ToggleFeaturedResponse,
    requestSerialize: serialize_paralympics_sports_v1_ToggleFeaturedRequest,
    requestDeserialize: deserialize_paralympics_sports_v1_ToggleFeaturedRequest,
    responseSerialize: serialize_paralympics_sports_v1_ToggleFeaturedResponse,
    responseDeserialize: deserialize_paralympics_sports_v1_ToggleFeaturedResponse,
  },
  // Featured returns a stream of featured sports
featured: {
    path: '/paralympics.sports.v1.SportManager/Featured',
    requestStream: false,
    responseStream: true,
    requestType: sports_v1_sport_pb.FeaturedRequest,
    responseType: sports_v1_sport_pb.Sport,
    requestSerialize: serialize_paralympics_sports_v1_FeaturedRequest,
    requestDeserialize: deserialize_paralympics_sports_v1_FeaturedRequest,
    responseSerialize: serialize_paralympics_sports_v1_Sport,
    responseDeserialize: deserialize_paralympics_sports_v1_Sport,
  },
};

exports.SportManagerClient = grpc.makeGenericClientConstructor(SportManagerService);
