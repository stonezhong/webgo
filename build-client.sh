#!/bin/sh

mkdir -p public/js-bundles
browserify client/apps/test.js -t babelify -o public/js-bundles/test-bundle.js -d --full-paths
