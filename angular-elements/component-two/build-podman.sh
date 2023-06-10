#!/bin/bash

npm run build
npm run package

podman build . -t angular-elements-two --build-arg CACHEBUST=$(date +%s)