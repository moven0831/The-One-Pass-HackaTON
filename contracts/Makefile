# Makefile

# Directories
SOURCE_DIR := ./sources
DEST_DIR := ./build

# Compile command setting
COMPILE_CMD := npx func-js

# Source and object files
SRC_FILES := $(wildcard $(SOURCE_DIR)/*.fc)
OBJ_FILES := $(patsubst $(SOURCE_DIR)/%.fc, $(DEST_DIR)/%.cell, $(SRC_FILES))

# Comile all .fc files in sources
.PHONY: compileAll
compileAll: $(OBJ_FILES)
	@echo "All files compiled and binaries placed in $(DEST_DIR) directory."

$(DEST_DIR)/%.cell: $(SOURCE_DIR)/%.fc
	$(COMPILE_CMD) $< --boc $@


# Compile a single Func file
.PHONY: compileSingle
compileSingle: FILE=$(word 2, $(MAKECMDGOALS))
compileSingle:
	$(COMPILE_CMD) $(SOURCE_DIR)/$(FILE).fc --boc $(DEST_DIR)/$(FILE).cell


# Clean target
.PHONY: clean
clean:
	rm -rf $(DEST_DIR)/*.cell
	@echo "All files in $(DEST_DIR) directory have been removed."
