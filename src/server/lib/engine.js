'use strict';

const Method = {
    GET: Symbol('GET'),
    PUT: Symbol('PUT'),
    POST: Symbol('POST'),
    DELETE: Symbol('DELETE'),
    HEAD: Symbol('HEAD'),
    OPTIONS: Symbol('OPTIONS'),
    TRACE: Symbol('TRACE'),
    CONNECT: Symbol('CONNECT'),
};

export default class Engine {
    constructor(app) {
        this._app = app;
        this._components = {};
    }

    registerComponent(tagName, componentClass) {
        this._components[tagName] = componentClass;
    }

    getComponents() {
        return this._components;
    }

    route(path, method, handler) {
        let m = null;
        switch (method) {
            case Method.GET:
                m = this._app.get;
                break;
            case Method.POST:
                m = this._app.post;
                break;
            case Method.PUT:
                m = this._app.put;
                break;
        }
        if (m === null) {
            throw new Error(`Unrecognized method: ${method}`);
        }

        m.call(this._app, path, function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            const modelAndView = handler();
            res.render(modelAndView.viewName, modelAndView.model);
        });
    }
}

Engine.Method = Method;
