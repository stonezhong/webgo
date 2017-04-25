'use strict';

import $ from 'jquery';
import _ from 'lodash';
import fs from 'fs';
import jsdom from 'jsdom';
import { Module } from 'rogueone';

function render(engine, filePath, options, callback) {
    fs.readFile(filePath, function(err, content) {
        if (err) {
            callback(err);
            return;
        }

        try {
            jsdom.env({
                html: content,
                scripts: [],
                ProcessExternalResources: false,
                FetchExternalResources: false,
                done: function(err, window) {
                    if (err) {
                        callback(err);
                        return;
                    }

                    const module = new Module({
                        runAt: Module.RUN_AT_SERVER
                    });

                    _.forEach(engine.getComponents(), function(componentClass, tagName) {
                        module.setComponentFactory(tagName, function(module, model, parentComponent) {
                            return new componentClass(module, model, parentComponent);
                        });
                    });

                    module.bootstrap($, window, window.document.documentElement, options);
                    callback(null, jsdom.serializeDocument(window.document));
                    return;
                },
            });
        } catch(err2) {
            callback(err2);
        }
    });
}

export default function(engine) {
    return function(filePath, options, callback) {
        render(engine, filePath, options, callback);
    }
}
