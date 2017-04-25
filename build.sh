#!/bin/sh

# build server
mkdir -p build
rm build/* -rf

babel src --out-dir build

# build client
mkdir -p public/js-bundles
rm public/js-bundles/* -rf
browserify src/client/apps/test.js -t babelify -o public/js-bundles/test-bundle.js -d

mkdir -p public/styles
rm public/styles/* -rf
node-sass src/client/styles/ --o public/styles/