import express from 'express';
import applyMiddlewares from './middlewares/index.js';

const app = express();

// Middlewares
applyMiddlewares(app);

export default app;
