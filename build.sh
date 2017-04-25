#!/bin/sh

# build server
mkdir -p build
rm build/* -rf

babel src --out-dir build

# build client
mkdir -p public/js-bundles
browserify src/client/apps/test.js -t babelify -o public/js-bundles/test-bundle.js -d
