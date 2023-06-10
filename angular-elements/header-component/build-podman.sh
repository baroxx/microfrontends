#!/bin/bash

npm run build
npm run package

podman build . -t angular-elements-header --build-arg CACHEBUST=$(date +%s)