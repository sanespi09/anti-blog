import { Request, Response, Router } from 'express';
import { htmlRenderer } from './helpers';

export const pageRouter = Router();

const handleHomePage = (request: Request, response: Response) => {
    console.log('handler general');
    response.set('content-type', 'text/html');
    const htmlRes = htmlRenderer(request.originalUrl);
    response.send(htmlRes);
};

pageRouter.get('/', handleHomePage);
