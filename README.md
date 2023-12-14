# Paralympics Protocol Buffers

Protocol Buffer defintions for Paralympics services. Protobuf code is
auto-generated using [protoc](https://github.com/google/protobuf/releases) in
CI for the following languages.

### Go

To install the generated proto code:
```
go get go.soon.build/bpa/website/protogen-go
```

To build locally:
```
go get -u github.com/golang/protobuf/protoc-gen-go
make go
```

### Typescript

To install the generated proto code:
```
npm i git+ssh://git@gitlab.com/thisissoon/bpa/website/protogen-ts
```

To build locally:
```
npm install -g ts-protoc-gen grpc grpc-tools
make ts
```

## Releases

Releases are made with tags. To make a new release tag the commit with a semver
release eg. `v1.0.1`, this will trigger the code generation jobs and deploy to the
codegen repos with matching version tag.
