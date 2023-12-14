// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Admin authentication services and types
// Handles managing users and authenticating them for admin access
//
'use strict';
var grpc = require('grpc');
var auth_v1_admin_pb = require('../../auth/v1/admin_pb.js');
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

function serialize_paralympics_auth_v1_AuthenticateRequest(arg) {
  if (!(arg instanceof auth_v1_admin_pb.AuthenticateRequest)) {
    throw new Error('Expected argument of type paralympics.auth.v1.AuthenticateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_auth_v1_AuthenticateRequest(buffer_arg) {
  return auth_v1_admin_pb.AuthenticateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_auth_v1_AuthenticateResponse(arg) {
  if (!(arg instanceof auth_v1_admin_pb.AuthenticateResponse)) {
    throw new Error('Expected argument of type paralympics.auth.v1.AuthenticateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_auth_v1_AuthenticateResponse(buffer_arg) {
  return auth_v1_admin_pb.AuthenticateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_auth_v1_AuthenticateUserRequest(arg) {
  if (!(arg instanceof auth_v1_admin_pb.AuthenticateUserRequest)) {
    throw new Error('Expected argument of type paralympics.auth.v1.AuthenticateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_auth_v1_AuthenticateUserRequest(buffer_arg) {
  return auth_v1_admin_pb.AuthenticateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_auth_v1_AuthenticateUserResponse(arg) {
  if (!(arg instanceof auth_v1_admin_pb.AuthenticateUserResponse)) {
    throw new Error('Expected argument of type paralympics.auth.v1.AuthenticateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_auth_v1_AuthenticateUserResponse(buffer_arg) {
  return auth_v1_admin_pb.AuthenticateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_auth_v1_CreateUserRequest(arg) {
  if (!(arg instanceof auth_v1_admin_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type paralympics.auth.v1.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_auth_v1_CreateUserRequest(buffer_arg) {
  return auth_v1_admin_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_auth_v1_DeleteUserRequest(arg) {
  if (!(arg instanceof auth_v1_admin_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type paralympics.auth.v1.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_auth_v1_DeleteUserRequest(buffer_arg) {
  return auth_v1_admin_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_auth_v1_GetUserByEmailRequest(arg) {
  if (!(arg instanceof auth_v1_admin_pb.GetUserByEmailRequest)) {
    throw new Error('Expected argument of type paralympics.auth.v1.GetUserByEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_auth_v1_GetUserByEmailRequest(buffer_arg) {
  return auth_v1_admin_pb.GetUserByEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_auth_v1_GetUserByIDRequest(arg) {
  if (!(arg instanceof auth_v1_admin_pb.GetUserByIDRequest)) {
    throw new Error('Expected argument of type paralympics.auth.v1.GetUserByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_auth_v1_GetUserByIDRequest(buffer_arg) {
  return auth_v1_admin_pb.GetUserByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_auth_v1_RevokeRequest(arg) {
  if (!(arg instanceof auth_v1_admin_pb.RevokeRequest)) {
    throw new Error('Expected argument of type paralympics.auth.v1.RevokeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_auth_v1_RevokeRequest(buffer_arg) {
  return auth_v1_admin_pb.RevokeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_auth_v1_SetUserPasswordRequest(arg) {
  if (!(arg instanceof auth_v1_admin_pb.SetUserPasswordRequest)) {
    throw new Error('Expected argument of type paralympics.auth.v1.SetUserPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_auth_v1_SetUserPasswordRequest(buffer_arg) {
  return auth_v1_admin_pb.SetUserPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_auth_v1_User(arg) {
  if (!(arg instanceof auth_v1_admin_pb.User)) {
    throw new Error('Expected argument of type paralympics.auth.v1.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_auth_v1_User(buffer_arg) {
  return auth_v1_admin_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_auth_v1_ValidatePasswordRequest(arg) {
  if (!(arg instanceof auth_v1_admin_pb.ValidatePasswordRequest)) {
    throw new Error('Expected argument of type paralympics.auth.v1.ValidatePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_auth_v1_ValidatePasswordRequest(buffer_arg) {
  return auth_v1_admin_pb.ValidatePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Manages admin users
var AdminUserManagerService = exports.AdminUserManagerService = {
  // Create a New User
createUser: {
    path: '/paralympics.auth.v1.AdminUserManager/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: auth_v1_admin_pb.CreateUserRequest,
    responseType: auth_v1_admin_pb.User,
    requestSerialize: serialize_paralympics_auth_v1_CreateUserRequest,
    requestDeserialize: deserialize_paralympics_auth_v1_CreateUserRequest,
    responseSerialize: serialize_paralympics_auth_v1_User,
    responseDeserialize: deserialize_paralympics_auth_v1_User,
  },
  // Update a User
updateUser: {
    path: '/paralympics.auth.v1.AdminUserManager/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: auth_v1_admin_pb.User,
    responseType: auth_v1_admin_pb.User,
    requestSerialize: serialize_paralympics_auth_v1_User,
    requestDeserialize: deserialize_paralympics_auth_v1_User,
    responseSerialize: serialize_paralympics_auth_v1_User,
    responseDeserialize: deserialize_paralympics_auth_v1_User,
  },
  // Get a user by their ID returns a specific user
getUserByID: {
    path: '/paralympics.auth.v1.AdminUserManager/GetUserByID',
    requestStream: false,
    responseStream: false,
    requestType: auth_v1_admin_pb.GetUserByIDRequest,
    responseType: auth_v1_admin_pb.User,
    requestSerialize: serialize_paralympics_auth_v1_GetUserByIDRequest,
    requestDeserialize: deserialize_paralympics_auth_v1_GetUserByIDRequest,
    responseSerialize: serialize_paralympics_auth_v1_User,
    responseDeserialize: deserialize_paralympics_auth_v1_User,
  },
  // Get a user by their email address
getUserByEmail: {
    path: '/paralympics.auth.v1.AdminUserManager/GetUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: auth_v1_admin_pb.GetUserByEmailRequest,
    responseType: auth_v1_admin_pb.User,
    requestSerialize: serialize_paralympics_auth_v1_GetUserByEmailRequest,
    requestDeserialize: deserialize_paralympics_auth_v1_GetUserByEmailRequest,
    responseSerialize: serialize_paralympics_auth_v1_User,
    responseDeserialize: deserialize_paralympics_auth_v1_User,
  },
  // Explictly set a users password
setUserPassword: {
    path: '/paralympics.auth.v1.AdminUserManager/SetUserPassword',
    requestStream: false,
    responseStream: false,
    requestType: auth_v1_admin_pb.SetUserPasswordRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_paralympics_auth_v1_SetUserPasswordRequest,
    requestDeserialize: deserialize_paralympics_auth_v1_SetUserPasswordRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Validates a users password
validatePassword: {
    path: '/paralympics.auth.v1.AdminUserManager/ValidatePassword',
    requestStream: false,
    responseStream: false,
    requestType: auth_v1_admin_pb.ValidatePasswordRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_paralympics_auth_v1_ValidatePasswordRequest,
    requestDeserialize: deserialize_paralympics_auth_v1_ValidatePasswordRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Hard delete a user
deleteUser: {
    path: '/paralympics.auth.v1.AdminUserManager/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: auth_v1_admin_pb.DeleteUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_paralympics_auth_v1_DeleteUserRequest,
    requestDeserialize: deserialize_paralympics_auth_v1_DeleteUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.AdminUserManagerClient = grpc.makeGenericClientConstructor(AdminUserManagerService);
// Authenticates users and admin tokens
var AdminAuthenticatorService = exports.AdminAuthenticatorService = {
  // Authenticates a user bassed on email and password
authenticateUser: {
    path: '/paralympics.auth.v1.AdminAuthenticator/AuthenticateUser',
    requestStream: false,
    responseStream: false,
    requestType: auth_v1_admin_pb.AuthenticateUserRequest,
    responseType: auth_v1_admin_pb.AuthenticateUserResponse,
    requestSerialize: serialize_paralympics_auth_v1_AuthenticateUserRequest,
    requestDeserialize: deserialize_paralympics_auth_v1_AuthenticateUserRequest,
    responseSerialize: serialize_paralympics_auth_v1_AuthenticateUserResponse,
    responseDeserialize: deserialize_paralympics_auth_v1_AuthenticateUserResponse,
  },
  // Authenticates a token
authenticate: {
    path: '/paralympics.auth.v1.AdminAuthenticator/Authenticate',
    requestStream: false,
    responseStream: false,
    requestType: auth_v1_admin_pb.AuthenticateRequest,
    responseType: auth_v1_admin_pb.AuthenticateResponse,
    requestSerialize: serialize_paralympics_auth_v1_AuthenticateRequest,
    requestDeserialize: deserialize_paralympics_auth_v1_AuthenticateRequest,
    responseSerialize: serialize_paralympics_auth_v1_AuthenticateResponse,
    responseDeserialize: deserialize_paralympics_auth_v1_AuthenticateResponse,
  },
  // Revoke removes a token invalidating it for further authentication requests
revoke: {
    path: '/paralympics.auth.v1.AdminAuthenticator/Revoke',
    requestStream: false,
    responseStream: false,
    requestType: auth_v1_admin_pb.RevokeRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_paralympics_auth_v1_RevokeRequest,
    requestDeserialize: deserialize_paralympics_auth_v1_RevokeRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.AdminAuthenticatorClient = grpc.makeGenericClientConstructor(AdminAuthenticatorService);
