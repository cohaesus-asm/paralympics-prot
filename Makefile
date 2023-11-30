# Variables
DEFAULT_PROTOC ?= protoc
PROTOC         ?= $(DEFAULT_PROTOC)
OUTDIR_PREFIX  ?= ./codegen
OUTDIR         ?=
INCLUDE        ?= .:/usr/local/include
FLAGS          ?=
GRPC_PLUGIN    ?= `which grpc_tools_node_protoc_plugin`

# finds all proto files to code gen
DEPS := $(shell find . -type f -name '*.proto')

.PHONY: $(DEPS)

# genrates gocode from proto files
gen-go:
	@echo Building Go Codegen
	$(eval OUTDIR := $(OUTDIR_PREFIX)/go)
	$(eval FLAGS += --go_out=plugins=grpc:$(OUTDIR))
go: gen-go | $(DEPS)
	@echo Completed Go Codegen

# generates python code from proto files
gen-py27:
	@echo Building Python 2.7 Codegen
	$(eval PROTOC := python -m grpc.tools.protoc)
	$(eval OUTDIR := $(OUTDIR_PREFIX)/py27)
	$(eval FLAGS += --python_out=$(OUTDIR))
	$(eval FLAGS += --grpc_python_out=$(OUTDIR))
py27: gen-py27 | $(DEPS)
	@echo Completed Python 2.7 Codegen

# generates ts from proto files
gen-ts:
	@echo Building TypeScript Codegen
	$(eval OUTDIR := $(OUTDIR_PREFIX)/ts)
	$(eval FLAGS += --js_out=import_style=commonjs,binary:$(OUTDIR))
	$(eval FLAGS += --ts_out=$(OUTDIR))
	$(eval FLAGS += --grpc_out=$(OUTDIR))
	$(eval FLAGS += --plugin=protoc-gen-grpc=$(GRPC_PLUGIN))
ts: gen-ts | $(DEPS)
	@echo Completed TypeScript Codegen

$(DEPS): %.proto:
	@echo Generating $*.proto
	@ mkdir -p $(OUTDIR)
	$(eval --proto_path=.:$(INCLUDE))
	$(PROTOC) -I $(INCLUDE) $(FLAGS) $*.proto
