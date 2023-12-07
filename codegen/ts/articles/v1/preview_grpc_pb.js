// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Defines services and types for handling article previewing
//
'use strict';
var grpc = require('grpc');
var articles_v1_preview_pb = require('../../articles/v1/preview_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_AuthorizeTokenRequest(arg) {
  if (!(arg instanceof articles_v1_preview_pb.AuthorizeTokenRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.AuthorizeTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_AuthorizeTokenRequest(buffer_arg) {
  return articles_v1_preview_pb.AuthorizeTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_GenerateTokenRequest(arg) {
  if (!(arg instanceof articles_v1_preview_pb.GenerateTokenRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.GenerateTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_GenerateTokenRequest(buffer_arg) {
  return articles_v1_preview_pb.GenerateTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_GenerateTokenResponse(arg) {
  if (!(arg instanceof articles_v1_preview_pb.GenerateTokenResponse)) {
    throw new Error('Expected argument of type paralympics.articles.v1.GenerateTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_GenerateTokenResponse(buffer_arg) {
  return articles_v1_preview_pb.GenerateTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service for authorizing article preview tokens
var PreviewAuthorizerService = exports.PreviewAuthorizerService = {
  // Authorizes a token, if invalid an error will be returned else
// an empty response
authorizeToken: {
    path: '/paralympics.articles.v1.PreviewAuthorizer/AuthorizeToken',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_preview_pb.AuthorizeTokenRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_paralympics_articles_v1_AuthorizeTokenRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_AuthorizeTokenRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.PreviewAuthorizerClient = grpc.makeGenericClientConstructor(PreviewAuthorizerService);
// Service for generaing article preview tokens
var PreviewTokenGeneratorService = exports.PreviewTokenGeneratorService = {
  // Generates an article preview token for a specific article
generateToken: {
    path: '/paralympics.articles.v1.PreviewTokenGenerator/GenerateToken',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_preview_pb.GenerateTokenRequest,
    responseType: articles_v1_preview_pb.GenerateTokenResponse,
    requestSerialize: serialize_paralympics_articles_v1_GenerateTokenRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_GenerateTokenRequest,
    responseSerialize: serialize_paralympics_articles_v1_GenerateTokenResponse,
    responseDeserialize: deserialize_paralympics_articles_v1_GenerateTokenResponse,
  },
};

exports.PreviewTokenGeneratorClient = grpc.makeGenericClientConstructor(PreviewTokenGeneratorService);
