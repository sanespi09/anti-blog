import express, { Application, json } from 'express';
import url from 'node:url';
import path from 'path';
import corsMiddleware from './cors/index.js';
import loggingMiddleware from './logging/index.js';
import routesMiddleware from './routes/index.js';

export default (app: Application): void => {
    //Documentation
    console.log(path.resolve(url.fileURLToPath(path.dirname(import.meta.url)), '../../client/assets'));
    app.use(
        express.static(path.resolve(url.fileURLToPath(path.dirname(import.meta.url)), '../../client/assets'), {
            index: false,
        })
    );
    app.use(corsMiddleware);
    app.use(loggingMiddleware());
    app.use(json());
    app.use(routesMiddleware);
};
