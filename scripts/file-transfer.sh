#!/bin/bash

rsync -av --include='*/' --include='*.scss' --exclude='*' "$(pwd)/src/" "$(pwd)/dist/" > /dev/null