# Change Log

## Unreleased

## `1.0.0`

- Switched to semver for better go modules support

## `2018.9.24.0`

- Add new `page/v1/page.proto` with service and message types for generic content pages

## `2018.3.8.0`

- Add new `Purge` method to `articles.v1.article.ArticleManager` with `PurgeRequest` and `PurgeResponse` message types
- Add new `Purge` method to `athletes.v1.athlete.AthleteManager` with `PurgeRequest` and `PurgeResponse` message types
- Add new `Purge` method to `games.v1.game.GameManager` with `PurgeRequest` and `PurgeResponse` message types
- Add new `Purge` method to `sports.v1.sport.SportManager` with `PurgeRequest` and `PurgeResponse` message types

## `2018.3.7.0`

- Add new `Restore` method to `articles.v1.article.ArticleManager` with `RestoreRequest` and `RestoreResponse` message types
- Add new `Restore` method to `athletes.v1.athlete.AthleteManager` with `RestoreRequest` and `RestoreResponse` message types
- Add new `Restore` method to `games.v1.game.GameManager` with `RestoreRequest` and `RestoreResponse` message types
- Add new `Restore` method to `sports.v1.sport.SportManager` with `RestoreRequest` and `RestoreResponse` message types

## `2018.3.6.0`

- Add new `Pinned` method on `articles.v1.article.ArticleManager` service
- Add new `PinnedRequest` and `PinnedResponse` message types to `articles.v1.article`
- Add new `Featured` method on `athletes.v1.athlete.AthleteManager` service
- Add new `FeaturedRequest` and `FeaturedResponse` message types to `athletes.v1.athlete`

## `2018.3.5.1`

- Add new `TogglePinned` method on `articles.v1.article.ArticleManager` service
- Add new `TogglePinnedRequest` and `TogglePinnedResponse` message types to `articles.v1.article`
- Add new `PinnedFilter` `enum` message type to enable filtering by article pinned state to `articles.v1.article`
- Add new `pinned` `bool` field to `articles.v1.article.Article` message
- Add new `pinned` `PinnedFilter` to `articles.v1.article.Filter` message

## `2018.3.5.0`

- Add new `ToggleFeatured` method on `athletes.v1.athlete.AthleteManager` service
- Add new `ToggleFeaturedRequest` and `ToggleFeaturedResponse` message types to `athletes.v1.athlete`
- Add new `FeatuedFilter` `enum` message type to enable filtering by athlete featured state to `athletes.v1.athlete`
- Add new `featured` `bool` field to `athletes.v1.athlete.Athlete` message
- Add new `featured` `FeaturedFilter` to `athletes.v1.athlete.Filter` message

## `2018.2.23.0`

- Add new `location` filter to `Filter` message type in `games.v1.game`

## `2018.2.21.0`

- Add new `deleted` filter to `Filter` message type in `athletes.v1.athlete`

## `2018.2.19.1`

- Add new `deleted` filter to `Filter` message type in `games.v1.game`

## `2018.2.19.0`

- Add new `Name` filter to `Filter` message type in `sports.v1.sport`

## `2018.2.16.2`

- Rename `featured` to `not_featured` field on `Filter` message in `articles.v1.article`

## `2018.2.16.1`

- Add `featured` field to `Filter` message in `articles.v1.article`

## `2018.2.16.0`

- Add `GameFilter` message type to `athletes.v1.athlete`
- Update `Filter` mesage type `game_id` field to `game` using `GameFilter` type

## `2018.2.15.1`

- Add `body_html` field to `Sport` message type in `sports.v1.sport`

## `2018.2.15.0`

- Add `lead` and `body` fields to `Sport` message type in `sports.v1.sport`
- Add `SportLead` and `SportBody` members to `Field` enum in `sports.v1.sport`

## `2018.2.14.1`

- Add new `Search` rpc method to `athletes.v1.athlete.AthleteManager`
- Add new `SearchRequest` message type to `athletes.v1.athlete`
- Add new `SearchResult` message type to `athletes.v1.athlete`

## `2018.2.14.0`

- Add new `Field` enum type to `athletes.v1.athlete`
- Add new `ErrorCode` enum type to `athletes.v1.athlete`
- Add new `FieldError` message type to `athletes.v1.athlete`
- Add new `ValidationError` message type to `athletes.v1.athlete`

## `2018.2.13.0`

- Add `id` fields to `PinnedGamesRequest` and `PinnedSportsRequest` message types in `athletes.v1.athlete`

## `2018.2.12.2`

- Remove `DeleteAthleteContent` rpc method on `athletes.v1.athlete.AthleteManager`

## `2018.2.12.1`

- Add `PinGames` rpc method to `athletes.v1.athlete.AthleteManager`
- Add new `PinGamesRequest` message type to `athletes.v1.athlete`
- Add new `PinGamesResponse` message type to `athletes.v1.athlete`
- Add `PinnedGames` rpc method to `athletes.v1.athlete.AthleteManager`
- Add new `PinnedGamesRequest` message type to `athletes.v1.athlete`
- Add new `PinnedGamesResponse` message type to `athletes.v1.athlete`
- Update `Filter` message type in `athletes.v1.athlete`
  - Added `game_id` field

## `2018.2.12.0`

- Add `PinSports` rpc method to `athletes.v1.athlete.AthleteManager`
- Add new `PinSportsRequest` message type to `athletes.v1.athlete`
- Add new `PinSportsResponse` message type to `athletes.v1.athlete`
- Add `PinnedSports` rpc method to `athletes.v1.athlete.AthleteManager`
- Add new `PinnedSportsRequest` message type to `athletes.v1.athlete`
- Add new `PinnedSportsResponse` message type to `athletes.v1.athlete`

## `2018.2.9.3`

- Remove `DeleteArticleContent` rpc method on `articles.v1.article.ArticleManager`

## `2018.2.9.2`

- Add `TogglePublished` rpc method to `articles.v1.article.ArticleManager`
- Remove `PublishArticle` rpc method on `articles.v1.article.ArticleManager`
- Add new `TogglePublishedRequest` message type to `articles.v1.article`
- Add new `TogglePublishedResponse` message type to `articles.v1.article`
- Removed `PublishArticleRequest` message type in `articles.v1.article`

## `2018.2.9.1`

- Update `PutAthleteContent` to send bi-direction streams of `content.v1.ContentModule`

## `2018.2.9.0`

- Remove `Content` message type in `games.v1.sport`
- Update `PutSportContent` to send bi-direction streams of `content.v1.ContentModule`

## `2018.2.8.2`

- Remove `DeleteSportContent` from `games.v1.sport.SportManager`

## `2018.2.8.1`

- Add new `Content` message type in `games.v1.sport`
- Updtae `PutSportContent` to a bi-directional stream of `Content` in `games.v1.sport.SportManager`

## `2018.2.8.0`

- Add new `FeaturedFilter` enum to `Filter` message type in `games.v1.sport`

## `2018.2.7.0`

- Add `ToggleFeatured` rpc method to `games.v1.sport.SportManager`
- Add new `ToggleFeaturedRequest` message type to `games.v1.sport`
- Add new `ToggleFeaturedResponse` message type to `games.v1.sport`
- Add `Featured` rpc method to `games.v1.sport.SportManager`
- Add new `FeaturedRequest` message type to `games.v1.sport`

## `2018.2.6.3`

- Remove `name` field from `sports.v1.sport.Filter` message
- Add `deleted` field to `sports.v1.sport.Filter`
- Add `NONE` member to `sports.v1.sport.Season` and increment other members
- Add `NONE` member to `games.v1.game.Season` and increment other members

## `2018.2.6.2`

- Add `PinSports` rpc method to `games.v1.game.GameManger`
- Add new `PinSportsRequest` message type to `games.v1.game`
- Add new `PinSportsResponse` message type to `games.v1.game`

## `2018.2.6.1`

- Add `PromoteGame` rpc method to `games.v1.game.GameManger`
- Add new `PromoteGameRequest` message type to `games.v1.game`
- Add new `PromoteGameResponse` message type to `games.v1.game`
- Add `PromotedGame` rpc method to `games.v1.game.GameManger`
- Add new `PromotedGameRequest` message type to `games.v1.game`
- Add new `PromotedGameResponse` message type to `games.v1.game`

## `2018.2.6.0`

- Add `SetActiveGame` rpc method to `games.v1.game.GameManger`
- Add new `SetActiveGameRequest` message type to `games.v1.game`
- Add new `SetActiveGameResponse` message type to `games.v1.game`

## `2018.2.5.1`

- Add `dropdown_title` field to `content.v1.content.ContentModule`

## `2018.2.5.0`

- Add new `ActiveGamesRequest` to `games.v1.game`
- Add new `ActiveGamesResponse` to `games.v1.game`
- Add `ActiveGames` rpc method to `games.v1.game.GameManger`

## `2018.2.2.1`

- Add `text_html` field to `content.v1.content.ContentModule` message

## `2018.2.2.0`

- Add new `PinnedAthletes` rpc method on `articles.v1.article.ArticleManager`
- Add new `PinnedAthletesRequest` message type in `articles.v1.article`

## `2018.2.1.0`

- Add new `PinAthletes` rpc method on `articles.v1.article.ArticleManager`
- Add new `PinAthletesRequest` and `PinAthletesResponse` message types in `articles.v1.article`

## `2018.1.31.0`

- Add new `LiveArticles` rpc method on `articles.v1.article.ArticleManager`
- Add new `LiveArticlesRequest` and `LiveArticlesResponse` message types in `articles.v1.article`

## `2018.1.31.0`

- Add new `FeatureArticle` rpc method to `articles.v1.article.ArticleManager`
- Add new `FeatureArticleRequest` and `FeatureArticleResponse` message types in `articles.v1.article`
- Add new `FeaturedArticle` rpc method to `articles.v1.article.ArticleManager`
- Add new `FeaturedArticleRequest` and `FeaturedArticleResponse` message types in `articles.v1.article`

## `2018.1.30.0`

- Add new bool `featured` field to `articles.v1.article.Article`

## `2018.1.26.0`

- Add `Game` field errors to `games.v1.game`

## `2018.1.22.0`

- Add image alt text fields to `articles.v1.article.Article` `articles.v1.sports.Sport` `articles.v1.athletes.Athlete`
- Removed `helloworld` proto package
- Removed `paractl` proto package

## `2018.1.19.0`

- Add `Sport` field errors to `sports.v1.sport`

## `2018.1.18.0`

- Add new `auth/v1/preview.proto` to add new Preview Authenticator service and message types

## `2018.1.12.0`

- Add new `AuthenticateResponse` message type to `auth.v1.admin`
- Update `Authenticate` to return a `AuthentcateResponse` in `auth.v1.admin.AdminAuthenticator`

## `2018.1.11.1`

- Add new `Revoke` method to `auth.v1.admin.AdminAuthenticator`
- Add new `RevokeRequest` message type to `auth.v1.admin`
- Renamed `AuthenticateTokenRequest` message to `AuthenticateRequest` in `auth.v1.admin`
- Renamed `AdminAuthenticate` to `Authenticate` in `auth.v1.admin.AdminAuthenticator`

## `2018.1.11.0`

- Remove image sizes

## `2018.1.10.1`

- Fix go package structure for versioned packages

## `2018.1.10.0`

- Versioned packages
- Additional athlete, sport and game fields
- Rich article boolean field

## `2018.1.4.0`

- Article validation message types
- Updated admin auth validation error codes

## `2018.1.2.0`

- Correct package naming convention following google protobuf examples.
- Add new password greater than or equal to 6 error code
- Tag codegen repos with build user / email (for audit)

## `2017.12.20.0`

- Image types
- Content fields

## `2017.12.13.1`

- Build GRPC code for ts

## `2017.12.13.0`

- Support validation errors in `auth/v1/admin.proto`:
  * `Field`: A list of field names, used for validation
  * `ErrorCode`: A list of error codes that can be returned
  * `FieldError`: Holds a specific gRPC message field error
  * `ValidationError`: Holds repeated `FeildError` to facilitate validation errors
- New `create_date` and `update_date` fields on `auth/v1/admin.User`

## `2017.12.12.0`

- New `auth/v1/admin.proto` for admin authentication / user management services

## `2017.12.8.1`

- Rename `service.proto` to `route.proto` and internal type names to `paractl` pacckage
- Add new `dtab.proto` to `paractl` package

## `2017.12.8.0`

- Initial release
