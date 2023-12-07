// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Preview token authentication
// Handles generating and validating JWT based preview tokens
// These tokens are primarily used for previewing unpublished content
// on the frontend
//
'use strict';
var grpc = require('grpc');
var auth_v1_preview_pb = require('../../auth/v1/preview_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_preview_v1_GenerateTokenRequest(arg) {
  if (!(arg instanceof auth_v1_preview_pb.GenerateTokenRequest)) {
    throw new Error('Expected argument of type paralympics.preview.v1.GenerateTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_preview_v1_GenerateTokenRequest(buffer_arg) {
  return auth_v1_preview_pb.GenerateTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_preview_v1_GenerateTokenResponse(arg) {
  if (!(arg instanceof auth_v1_preview_pb.GenerateTokenResponse)) {
    throw new Error('Expected argument of type paralympics.preview.v1.GenerateTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_preview_v1_GenerateTokenResponse(buffer_arg) {
  return auth_v1_preview_pb.GenerateTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_preview_v1_ValidateTokenRequest(arg) {
  if (!(arg instanceof auth_v1_preview_pb.ValidateTokenRequest)) {
    throw new Error('Expected argument of type paralympics.preview.v1.ValidateTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_preview_v1_ValidateTokenRequest(buffer_arg) {
  return auth_v1_preview_pb.ValidateTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Manages Generating and validating preview tokens
var PreviewAuthenticatorService = exports.PreviewAuthenticatorService = {
  // Generates a new preview token
generateToken: {
    path: '/paralympics.preview.v1.PreviewAuthenticator/GenerateToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_v1_preview_pb.GenerateTokenRequest,
    responseType: auth_v1_preview_pb.GenerateTokenResponse,
    requestSerialize: serialize_paralympics_preview_v1_GenerateTokenRequest,
    requestDeserialize: deserialize_paralympics_preview_v1_GenerateTokenRequest,
    responseSerialize: serialize_paralympics_preview_v1_GenerateTokenResponse,
    responseDeserialize: deserialize_paralympics_preview_v1_GenerateTokenResponse,
  },
  // Validates a token
validateToken: {
    path: '/paralympics.preview.v1.PreviewAuthenticator/ValidateToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_v1_preview_pb.ValidateTokenRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_paralympics_preview_v1_ValidateTokenRequest,
    requestDeserialize: deserialize_paralympics_preview_v1_ValidateTokenRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.PreviewAuthenticatorClient = grpc.makeGenericClientConstructor(PreviewAuthenticatorService);
