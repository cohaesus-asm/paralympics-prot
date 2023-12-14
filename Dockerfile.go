FROM golang:1.13-alpine

RUN apk update && apk add \
	make \
	git \
	protobuf \
	protobuf-dev \
	openssh \
	rsync

RUN go get github.com/golang/protobuf/protoc-gen-go
