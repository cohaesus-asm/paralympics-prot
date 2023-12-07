// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var games_v1_game_pb = require('../../games/v1/game_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
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

function serialize_paralympics_games_v1_ActiveGamesRequest(arg) {
  if (!(arg instanceof games_v1_game_pb.ActiveGamesRequest)) {
    throw new Error('Expected argument of type paralympics.games.v1.ActiveGamesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_ActiveGamesRequest(buffer_arg) {
  return games_v1_game_pb.ActiveGamesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_ActiveGamesResponse(arg) {
  if (!(arg instanceof games_v1_game_pb.ActiveGamesResponse)) {
    throw new Error('Expected argument of type paralympics.games.v1.ActiveGamesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_ActiveGamesResponse(buffer_arg) {
  return games_v1_game_pb.ActiveGamesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_Game(arg) {
  if (!(arg instanceof games_v1_game_pb.Game)) {
    throw new Error('Expected argument of type paralympics.games.v1.Game');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_Game(buffer_arg) {
  return games_v1_game_pb.Game.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_GameByIDRequest(arg) {
  if (!(arg instanceof games_v1_game_pb.GameByIDRequest)) {
    throw new Error('Expected argument of type paralympics.games.v1.GameByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_GameByIDRequest(buffer_arg) {
  return games_v1_game_pb.GameByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_GameBySlugRequest(arg) {
  if (!(arg instanceof games_v1_game_pb.GameBySlugRequest)) {
    throw new Error('Expected argument of type paralympics.games.v1.GameBySlugRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_GameBySlugRequest(buffer_arg) {
  return games_v1_game_pb.GameBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_ListGamesRequest(arg) {
  if (!(arg instanceof games_v1_game_pb.ListGamesRequest)) {
    throw new Error('Expected argument of type paralympics.games.v1.ListGamesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_ListGamesRequest(buffer_arg) {
  return games_v1_game_pb.ListGamesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_ListGamesResponse(arg) {
  if (!(arg instanceof games_v1_game_pb.ListGamesResponse)) {
    throw new Error('Expected argument of type paralympics.games.v1.ListGamesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_ListGamesResponse(buffer_arg) {
  return games_v1_game_pb.ListGamesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_PinSportsRequest(arg) {
  if (!(arg instanceof games_v1_game_pb.PinSportsRequest)) {
    throw new Error('Expected argument of type paralympics.games.v1.PinSportsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_PinSportsRequest(buffer_arg) {
  return games_v1_game_pb.PinSportsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_PinSportsResponse(arg) {
  if (!(arg instanceof games_v1_game_pb.PinSportsResponse)) {
    throw new Error('Expected argument of type paralympics.games.v1.PinSportsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_PinSportsResponse(buffer_arg) {
  return games_v1_game_pb.PinSportsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_PromoteGameRequest(arg) {
  if (!(arg instanceof games_v1_game_pb.PromoteGameRequest)) {
    throw new Error('Expected argument of type paralympics.games.v1.PromoteGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_PromoteGameRequest(buffer_arg) {
  return games_v1_game_pb.PromoteGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_PromoteGameResponse(arg) {
  if (!(arg instanceof games_v1_game_pb.PromoteGameResponse)) {
    throw new Error('Expected argument of type paralympics.games.v1.PromoteGameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_PromoteGameResponse(buffer_arg) {
  return games_v1_game_pb.PromoteGameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_PromotedGameRequest(arg) {
  if (!(arg instanceof games_v1_game_pb.PromotedGameRequest)) {
    throw new Error('Expected argument of type paralympics.games.v1.PromotedGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_PromotedGameRequest(buffer_arg) {
  return games_v1_game_pb.PromotedGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_PromotedGameResponse(arg) {
  if (!(arg instanceof games_v1_game_pb.PromotedGameResponse)) {
    throw new Error('Expected argument of type paralympics.games.v1.PromotedGameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_PromotedGameResponse(buffer_arg) {
  return games_v1_game_pb.PromotedGameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_PurgeRequest(arg) {
  if (!(arg instanceof games_v1_game_pb.PurgeRequest)) {
    throw new Error('Expected argument of type paralympics.games.v1.PurgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_PurgeRequest(buffer_arg) {
  return games_v1_game_pb.PurgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_PurgeResponse(arg) {
  if (!(arg instanceof games_v1_game_pb.PurgeResponse)) {
    throw new Error('Expected argument of type paralympics.games.v1.PurgeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_PurgeResponse(buffer_arg) {
  return games_v1_game_pb.PurgeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_RestoreRequest(arg) {
  if (!(arg instanceof games_v1_game_pb.RestoreRequest)) {
    throw new Error('Expected argument of type paralympics.games.v1.RestoreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_RestoreRequest(buffer_arg) {
  return games_v1_game_pb.RestoreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_RestoreResponse(arg) {
  if (!(arg instanceof games_v1_game_pb.RestoreResponse)) {
    throw new Error('Expected argument of type paralympics.games.v1.RestoreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_RestoreResponse(buffer_arg) {
  return games_v1_game_pb.RestoreResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_SetActiveGameRequest(arg) {
  if (!(arg instanceof games_v1_game_pb.SetActiveGameRequest)) {
    throw new Error('Expected argument of type paralympics.games.v1.SetActiveGameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_SetActiveGameRequest(buffer_arg) {
  return games_v1_game_pb.SetActiveGameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_games_v1_SetActiveGameResponse(arg) {
  if (!(arg instanceof games_v1_game_pb.SetActiveGameResponse)) {
    throw new Error('Expected argument of type paralympics.games.v1.SetActiveGameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_games_v1_SetActiveGameResponse(buffer_arg) {
  return games_v1_game_pb.SetActiveGameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Paralympics Game Service
var GameManagerService = exports.GameManagerService = {
  // Gets a single Game
gameByID: {
    path: '/paralympics.games.v1.GameManager/GameByID',
    requestStream: false,
    responseStream: false,
    requestType: games_v1_game_pb.GameByIDRequest,
    responseType: games_v1_game_pb.Game,
    requestSerialize: serialize_paralympics_games_v1_GameByIDRequest,
    requestDeserialize: deserialize_paralympics_games_v1_GameByIDRequest,
    responseSerialize: serialize_paralympics_games_v1_Game,
    responseDeserialize: deserialize_paralympics_games_v1_Game,
  },
  gameBySlug: {
    path: '/paralympics.games.v1.GameManager/GameBySlug',
    requestStream: false,
    responseStream: false,
    requestType: games_v1_game_pb.GameBySlugRequest,
    responseType: games_v1_game_pb.Game,
    requestSerialize: serialize_paralympics_games_v1_GameBySlugRequest,
    requestDeserialize: deserialize_paralympics_games_v1_GameBySlugRequest,
    responseSerialize: serialize_paralympics_games_v1_Game,
    responseDeserialize: deserialize_paralympics_games_v1_Game,
  },
  // Lists all the Games
listGames: {
    path: '/paralympics.games.v1.GameManager/ListGames',
    requestStream: false,
    responseStream: false,
    requestType: games_v1_game_pb.ListGamesRequest,
    responseType: games_v1_game_pb.ListGamesResponse,
    requestSerialize: serialize_paralympics_games_v1_ListGamesRequest,
    requestDeserialize: deserialize_paralympics_games_v1_ListGamesRequest,
    responseSerialize: serialize_paralympics_games_v1_ListGamesResponse,
    responseDeserialize: deserialize_paralympics_games_v1_ListGamesResponse,
  },
  // Creates or Updates an Game
putGame: {
    path: '/paralympics.games.v1.GameManager/PutGame',
    requestStream: false,
    responseStream: false,
    requestType: games_v1_game_pb.Game,
    responseType: games_v1_game_pb.Game,
    requestSerialize: serialize_paralympics_games_v1_Game,
    requestDeserialize: deserialize_paralympics_games_v1_Game,
    responseSerialize: serialize_paralympics_games_v1_Game,
    responseDeserialize: deserialize_paralympics_games_v1_Game,
  },
  // Deletes an Game
deleteGame: {
    path: '/paralympics.games.v1.GameManager/DeleteGame',
    requestStream: false,
    responseStream: false,
    requestType: games_v1_game_pb.Game,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_paralympics_games_v1_Game,
    requestDeserialize: deserialize_paralympics_games_v1_Game,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Restore an article that is soft deleted
restore: {
    path: '/paralympics.games.v1.GameManager/Restore',
    requestStream: false,
    responseStream: false,
    requestType: games_v1_game_pb.RestoreRequest,
    responseType: games_v1_game_pb.RestoreResponse,
    requestSerialize: serialize_paralympics_games_v1_RestoreRequest,
    requestDeserialize: deserialize_paralympics_games_v1_RestoreRequest,
    responseSerialize: serialize_paralympics_games_v1_RestoreResponse,
    responseDeserialize: deserialize_paralympics_games_v1_RestoreResponse,
  },
  // Purge hard deletes a game and it's relations
purge: {
    path: '/paralympics.games.v1.GameManager/Purge',
    requestStream: false,
    responseStream: false,
    requestType: games_v1_game_pb.PurgeRequest,
    responseType: games_v1_game_pb.PurgeResponse,
    requestSerialize: serialize_paralympics_games_v1_PurgeRequest,
    requestDeserialize: deserialize_paralympics_games_v1_PurgeRequest,
    responseSerialize: serialize_paralympics_games_v1_PurgeResponse,
    responseDeserialize: deserialize_paralympics_games_v1_PurgeResponse,
  },
  // ActiveGames returns the currently active games
// These are depermined by the season and and their active flags
activeGames: {
    path: '/paralympics.games.v1.GameManager/ActiveGames',
    requestStream: false,
    responseStream: false,
    requestType: games_v1_game_pb.ActiveGamesRequest,
    responseType: games_v1_game_pb.ActiveGamesResponse,
    requestSerialize: serialize_paralympics_games_v1_ActiveGamesRequest,
    requestDeserialize: deserialize_paralympics_games_v1_ActiveGamesRequest,
    responseSerialize: serialize_paralympics_games_v1_ActiveGamesResponse,
    responseDeserialize: deserialize_paralympics_games_v1_ActiveGamesResponse,
  },
  // SetActiveGame will set the game to be the active game for it's season
setActiveGame: {
    path: '/paralympics.games.v1.GameManager/SetActiveGame',
    requestStream: false,
    responseStream: false,
    requestType: games_v1_game_pb.SetActiveGameRequest,
    responseType: games_v1_game_pb.SetActiveGameResponse,
    requestSerialize: serialize_paralympics_games_v1_SetActiveGameRequest,
    requestDeserialize: deserialize_paralympics_games_v1_SetActiveGameRequest,
    responseSerialize: serialize_paralympics_games_v1_SetActiveGameResponse,
    responseDeserialize: deserialize_paralympics_games_v1_SetActiveGameResponse,
  },
  // PromoteGame will promote an acive game to the "featured" game on the site
promoteGame: {
    path: '/paralympics.games.v1.GameManager/PromoteGame',
    requestStream: false,
    responseStream: false,
    requestType: games_v1_game_pb.PromoteGameRequest,
    responseType: games_v1_game_pb.PromoteGameResponse,
    requestSerialize: serialize_paralympics_games_v1_PromoteGameRequest,
    requestDeserialize: deserialize_paralympics_games_v1_PromoteGameRequest,
    responseSerialize: serialize_paralympics_games_v1_PromoteGameResponse,
    responseDeserialize: deserialize_paralympics_games_v1_PromoteGameResponse,
  },
  // PromotedGame returns the currently promoted game
promotedGame: {
    path: '/paralympics.games.v1.GameManager/PromotedGame',
    requestStream: false,
    responseStream: false,
    requestType: games_v1_game_pb.PromotedGameRequest,
    responseType: games_v1_game_pb.PromotedGameResponse,
    requestSerialize: serialize_paralympics_games_v1_PromotedGameRequest,
    requestDeserialize: deserialize_paralympics_games_v1_PromotedGameRequest,
    responseSerialize: serialize_paralympics_games_v1_PromotedGameResponse,
    responseDeserialize: deserialize_paralympics_games_v1_PromotedGameResponse,
  },
  // PinSports pins sports to a game
pinSports: {
    path: '/paralympics.games.v1.GameManager/PinSports',
    requestStream: false,
    responseStream: false,
    requestType: games_v1_game_pb.PinSportsRequest,
    responseType: games_v1_game_pb.PinSportsResponse,
    requestSerialize: serialize_paralympics_games_v1_PinSportsRequest,
    requestDeserialize: deserialize_paralympics_games_v1_PinSportsRequest,
    responseSerialize: serialize_paralympics_games_v1_PinSportsResponse,
    responseDeserialize: deserialize_paralympics_games_v1_PinSportsResponse,
  },
};

exports.GameManagerClient = grpc.makeGenericClientConstructor(GameManagerService);
