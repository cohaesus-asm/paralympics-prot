FROM node:12

RUN apt-get update && apt-get install -y \
    make \
    git \
    unzip \
    rsync \
    python-dev

# Install protoc binary
RUN curl -OL "https://github.com/google/protobuf/releases/download/v3.9.1/protoc-3.9.1-linux-x86_64.zip" && \
    unzip protoc-3.9.1-linux-x86_64.zip -d protoc3 && \
    mv protoc3/bin/* /usr/local/bin/ && \
    mv protoc3/include/* /usr/local/include/

RUN npm --global install ts-protoc-gen
RUN npm --global install --unsafe-perm grpc grpc-tools
