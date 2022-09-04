import express from 'express';
import { pageRouter } from '../../html/index.js';
import { postRouter } from '../../html/post.js';
/**
 * main routing is handled by this algorithm, we only need to create a folder in "components"
 * and expose in the index the api Router and the prefix
 */

const rootRouter = express.Router();
rootRouter.use('/', pageRouter);
rootRouter.use('/post', postRouter);

export default rootRouter;
