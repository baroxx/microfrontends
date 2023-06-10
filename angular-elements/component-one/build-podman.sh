#!/bin/bash

npm run build
npm run package

podman build . -t angular-elements-one --build-arg CACHEBUST=$(date +%s)