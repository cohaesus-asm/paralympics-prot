// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var articles_v1_article_pb = require('../../articles/v1/article_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var content_v1_content_pb = require('../../content/v1/content_pb.js');
var athletes_v1_athlete_pb = require('../../athletes/v1/athlete_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_Article(arg) {
  if (!(arg instanceof articles_v1_article_pb.Article)) {
    throw new Error('Expected argument of type paralympics.articles.v1.Article');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_Article(buffer_arg) {
  return articles_v1_article_pb.Article.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_ArticleByIDRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.ArticleByIDRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.ArticleByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_ArticleByIDRequest(buffer_arg) {
  return articles_v1_article_pb.ArticleByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_ArticleBySlugRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.ArticleBySlugRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.ArticleBySlugRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_ArticleBySlugRequest(buffer_arg) {
  return articles_v1_article_pb.ArticleBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_ArticleContentRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.ArticleContentRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.ArticleContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_ArticleContentRequest(buffer_arg) {
  return articles_v1_article_pb.ArticleContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_FeatureArticleRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.FeatureArticleRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.FeatureArticleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_FeatureArticleRequest(buffer_arg) {
  return articles_v1_article_pb.FeatureArticleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_FeatureArticleResponse(arg) {
  if (!(arg instanceof articles_v1_article_pb.FeatureArticleResponse)) {
    throw new Error('Expected argument of type paralympics.articles.v1.FeatureArticleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_FeatureArticleResponse(buffer_arg) {
  return articles_v1_article_pb.FeatureArticleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_FeaturedArticleRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.FeaturedArticleRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.FeaturedArticleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_FeaturedArticleRequest(buffer_arg) {
  return articles_v1_article_pb.FeaturedArticleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_FeaturedArticleResponse(arg) {
  if (!(arg instanceof articles_v1_article_pb.FeaturedArticleResponse)) {
    throw new Error('Expected argument of type paralympics.articles.v1.FeaturedArticleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_FeaturedArticleResponse(buffer_arg) {
  return articles_v1_article_pb.FeaturedArticleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_ListArticlesRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.ListArticlesRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.ListArticlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_ListArticlesRequest(buffer_arg) {
  return articles_v1_article_pb.ListArticlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_ListArticlesResponse(arg) {
  if (!(arg instanceof articles_v1_article_pb.ListArticlesResponse)) {
    throw new Error('Expected argument of type paralympics.articles.v1.ListArticlesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_ListArticlesResponse(buffer_arg) {
  return articles_v1_article_pb.ListArticlesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_LiveArticlesRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.LiveArticlesRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.LiveArticlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_LiveArticlesRequest(buffer_arg) {
  return articles_v1_article_pb.LiveArticlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_LiveArticlesResponse(arg) {
  if (!(arg instanceof articles_v1_article_pb.LiveArticlesResponse)) {
    throw new Error('Expected argument of type paralympics.articles.v1.LiveArticlesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_LiveArticlesResponse(buffer_arg) {
  return articles_v1_article_pb.LiveArticlesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_PinAthletesRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.PinAthletesRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.PinAthletesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_PinAthletesRequest(buffer_arg) {
  return articles_v1_article_pb.PinAthletesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_PinAthletesResponse(arg) {
  if (!(arg instanceof articles_v1_article_pb.PinAthletesResponse)) {
    throw new Error('Expected argument of type paralympics.articles.v1.PinAthletesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_PinAthletesResponse(buffer_arg) {
  return articles_v1_article_pb.PinAthletesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_PinnedAthletesRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.PinnedAthletesRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.PinnedAthletesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_PinnedAthletesRequest(buffer_arg) {
  return articles_v1_article_pb.PinnedAthletesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_PinnedRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.PinnedRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.PinnedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_PinnedRequest(buffer_arg) {
  return articles_v1_article_pb.PinnedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_PinnedResponse(arg) {
  if (!(arg instanceof articles_v1_article_pb.PinnedResponse)) {
    throw new Error('Expected argument of type paralympics.articles.v1.PinnedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_PinnedResponse(buffer_arg) {
  return articles_v1_article_pb.PinnedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_PurgeRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.PurgeRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.PurgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_PurgeRequest(buffer_arg) {
  return articles_v1_article_pb.PurgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_PurgeResponse(arg) {
  if (!(arg instanceof articles_v1_article_pb.PurgeResponse)) {
    throw new Error('Expected argument of type paralympics.articles.v1.PurgeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_PurgeResponse(buffer_arg) {
  return articles_v1_article_pb.PurgeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_RestoreRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.RestoreRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.RestoreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_RestoreRequest(buffer_arg) {
  return articles_v1_article_pb.RestoreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_RestoreResponse(arg) {
  if (!(arg instanceof articles_v1_article_pb.RestoreResponse)) {
    throw new Error('Expected argument of type paralympics.articles.v1.RestoreResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_RestoreResponse(buffer_arg) {
  return articles_v1_article_pb.RestoreResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_TogglePinnedRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.TogglePinnedRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.TogglePinnedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_TogglePinnedRequest(buffer_arg) {
  return articles_v1_article_pb.TogglePinnedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_TogglePinnedResponse(arg) {
  if (!(arg instanceof articles_v1_article_pb.TogglePinnedResponse)) {
    throw new Error('Expected argument of type paralympics.articles.v1.TogglePinnedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_TogglePinnedResponse(buffer_arg) {
  return articles_v1_article_pb.TogglePinnedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_TogglePublishRequest(arg) {
  if (!(arg instanceof articles_v1_article_pb.TogglePublishRequest)) {
    throw new Error('Expected argument of type paralympics.articles.v1.TogglePublishRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_TogglePublishRequest(buffer_arg) {
  return articles_v1_article_pb.TogglePublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_articles_v1_TogglePublishResponse(arg) {
  if (!(arg instanceof articles_v1_article_pb.TogglePublishResponse)) {
    throw new Error('Expected argument of type paralympics.articles.v1.TogglePublishResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_articles_v1_TogglePublishResponse(buffer_arg) {
  return articles_v1_article_pb.TogglePublishResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_paralympics_athletes_v1_Athlete(arg) {
  if (!(arg instanceof athletes_v1_athlete_pb.Athlete)) {
    throw new Error('Expected argument of type paralympics.athletes.v1.Athlete');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_paralympics_athletes_v1_Athlete(buffer_arg) {
  return athletes_v1_athlete_pb.Athlete.deserializeBinary(new Uint8Array(buffer_arg));
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


// Paralympics Article Service
var ArticleManagerService = exports.ArticleManagerService = {
  // Get an article by it's unique by UUID
articleByID: {
    path: '/paralympics.articles.v1.ArticleManager/ArticleByID',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.ArticleByIDRequest,
    responseType: articles_v1_article_pb.Article,
    requestSerialize: serialize_paralympics_articles_v1_ArticleByIDRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_ArticleByIDRequest,
    responseSerialize: serialize_paralympics_articles_v1_Article,
    responseDeserialize: deserialize_paralympics_articles_v1_Article,
  },
  // Get an article by it's unique slug
articleBySlug: {
    path: '/paralympics.articles.v1.ArticleManager/ArticleBySlug',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.ArticleBySlugRequest,
    responseType: articles_v1_article_pb.Article,
    requestSerialize: serialize_paralympics_articles_v1_ArticleBySlugRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_ArticleBySlugRequest,
    responseSerialize: serialize_paralympics_articles_v1_Article,
    responseDeserialize: deserialize_paralympics_articles_v1_Article,
  },
  // Lists all the Articles
listArticles: {
    path: '/paralympics.articles.v1.ArticleManager/ListArticles',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.ListArticlesRequest,
    responseType: articles_v1_article_pb.ListArticlesResponse,
    requestSerialize: serialize_paralympics_articles_v1_ListArticlesRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_ListArticlesRequest,
    responseSerialize: serialize_paralympics_articles_v1_ListArticlesResponse,
    responseDeserialize: deserialize_paralympics_articles_v1_ListArticlesResponse,
  },
  // LiveArticles returns a paginated list of all the currently live articls
liveArticles: {
    path: '/paralympics.articles.v1.ArticleManager/LiveArticles',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.LiveArticlesRequest,
    responseType: articles_v1_article_pb.LiveArticlesResponse,
    requestSerialize: serialize_paralympics_articles_v1_LiveArticlesRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_LiveArticlesRequest,
    responseSerialize: serialize_paralympics_articles_v1_LiveArticlesResponse,
    responseDeserialize: deserialize_paralympics_articles_v1_LiveArticlesResponse,
  },
  // Creates or Updates an article
putArticle: {
    path: '/paralympics.articles.v1.ArticleManager/PutArticle',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.Article,
    responseType: articles_v1_article_pb.Article,
    requestSerialize: serialize_paralympics_articles_v1_Article,
    requestDeserialize: deserialize_paralympics_articles_v1_Article,
    responseSerialize: serialize_paralympics_articles_v1_Article,
    responseDeserialize: deserialize_paralympics_articles_v1_Article,
  },
  // Feature an article
featureArticle: {
    path: '/paralympics.articles.v1.ArticleManager/FeatureArticle',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.FeatureArticleRequest,
    responseType: articles_v1_article_pb.FeatureArticleResponse,
    requestSerialize: serialize_paralympics_articles_v1_FeatureArticleRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_FeatureArticleRequest,
    responseSerialize: serialize_paralympics_articles_v1_FeatureArticleResponse,
    responseDeserialize: deserialize_paralympics_articles_v1_FeatureArticleResponse,
  },
  // Returns the featured article
featuredArticle: {
    path: '/paralympics.articles.v1.ArticleManager/FeaturedArticle',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.FeaturedArticleRequest,
    responseType: articles_v1_article_pb.FeaturedArticleResponse,
    requestSerialize: serialize_paralympics_articles_v1_FeaturedArticleRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_FeaturedArticleRequest,
    responseSerialize: serialize_paralympics_articles_v1_FeaturedArticleResponse,
    responseDeserialize: deserialize_paralympics_articles_v1_FeaturedArticleResponse,
  },
  // TogglePublished toggles the publication state of an article
togglePublished: {
    path: '/paralympics.articles.v1.ArticleManager/TogglePublished',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.TogglePublishRequest,
    responseType: articles_v1_article_pb.TogglePublishResponse,
    requestSerialize: serialize_paralympics_articles_v1_TogglePublishRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_TogglePublishRequest,
    responseSerialize: serialize_paralympics_articles_v1_TogglePublishResponse,
    responseDeserialize: deserialize_paralympics_articles_v1_TogglePublishResponse,
  },
  // Deletes an article
deleteArticle: {
    path: '/paralympics.articles.v1.ArticleManager/DeleteArticle',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.Article,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_paralympics_articles_v1_Article,
    requestDeserialize: deserialize_paralympics_articles_v1_Article,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Restore an article that is soft deleted
restore: {
    path: '/paralympics.articles.v1.ArticleManager/Restore',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.RestoreRequest,
    responseType: articles_v1_article_pb.RestoreResponse,
    requestSerialize: serialize_paralympics_articles_v1_RestoreRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_RestoreRequest,
    responseSerialize: serialize_paralympics_articles_v1_RestoreResponse,
    responseDeserialize: deserialize_paralympics_articles_v1_RestoreResponse,
  },
  // Purge hard deletes an article and relations
purge: {
    path: '/paralympics.articles.v1.ArticleManager/Purge',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.PurgeRequest,
    responseType: articles_v1_article_pb.PurgeResponse,
    requestSerialize: serialize_paralympics_articles_v1_PurgeRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_PurgeRequest,
    responseSerialize: serialize_paralympics_articles_v1_PurgeResponse,
    responseDeserialize: deserialize_paralympics_articles_v1_PurgeResponse,
  },
  // List article content
articleContent: {
    path: '/paralympics.articles.v1.ArticleManager/ArticleContent',
    requestStream: false,
    responseStream: true,
    requestType: articles_v1_article_pb.ArticleContentRequest,
    responseType: content_v1_content_pb.ContentModule,
    requestSerialize: serialize_paralympics_articles_v1_ArticleContentRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_ArticleContentRequest,
    responseSerialize: serialize_paralympics_content_v1_ContentModule,
    responseDeserialize: deserialize_paralympics_content_v1_ContentModule,
  },
  // Creates or Updates article content
putArticleContent: {
    path: '/paralympics.articles.v1.ArticleManager/PutArticleContent',
    requestStream: true,
    responseStream: true,
    requestType: content_v1_content_pb.ContentModule,
    responseType: content_v1_content_pb.ContentModule,
    requestSerialize: serialize_paralympics_content_v1_ContentModule,
    requestDeserialize: deserialize_paralympics_content_v1_ContentModule,
    responseSerialize: serialize_paralympics_content_v1_ContentModule,
    responseDeserialize: deserialize_paralympics_content_v1_ContentModule,
  },
  // PinAthletes pins athletes to an article
pinAthletes: {
    path: '/paralympics.articles.v1.ArticleManager/PinAthletes',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.PinAthletesRequest,
    responseType: articles_v1_article_pb.PinAthletesResponse,
    requestSerialize: serialize_paralympics_articles_v1_PinAthletesRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_PinAthletesRequest,
    responseSerialize: serialize_paralympics_articles_v1_PinAthletesResponse,
    responseDeserialize: deserialize_paralympics_articles_v1_PinAthletesResponse,
  },
  // PinnedAthletes returns the athletes pinned to an article
pinnedAthletes: {
    path: '/paralympics.articles.v1.ArticleManager/PinnedAthletes',
    requestStream: false,
    responseStream: true,
    requestType: articles_v1_article_pb.PinnedAthletesRequest,
    responseType: athletes_v1_athlete_pb.Athlete,
    requestSerialize: serialize_paralympics_articles_v1_PinnedAthletesRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_PinnedAthletesRequest,
    responseSerialize: serialize_paralympics_athletes_v1_Athlete,
    responseDeserialize: deserialize_paralympics_athletes_v1_Athlete,
  },
  // TogglePinned toggles an articles pinned state
togglePinned: {
    path: '/paralympics.articles.v1.ArticleManager/TogglePinned',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.TogglePinnedRequest,
    responseType: articles_v1_article_pb.TogglePinnedResponse,
    requestSerialize: serialize_paralympics_articles_v1_TogglePinnedRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_TogglePinnedRequest,
    responseSerialize: serialize_paralympics_articles_v1_TogglePinnedResponse,
    responseDeserialize: deserialize_paralympics_articles_v1_TogglePinnedResponse,
  },
  // Pinned is a convenience method for returning pinned articles
pinned: {
    path: '/paralympics.articles.v1.ArticleManager/Pinned',
    requestStream: false,
    responseStream: false,
    requestType: articles_v1_article_pb.PinnedRequest,
    responseType: articles_v1_article_pb.PinnedResponse,
    requestSerialize: serialize_paralympics_articles_v1_PinnedRequest,
    requestDeserialize: deserialize_paralympics_articles_v1_PinnedRequest,
    responseSerialize: serialize_paralympics_articles_v1_PinnedResponse,
    responseDeserialize: deserialize_paralympics_articles_v1_PinnedResponse,
  },
};

exports.ArticleManagerClient = grpc.makeGenericClientConstructor(ArticleManagerService);
