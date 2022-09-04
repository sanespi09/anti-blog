import { Request, Response, Router } from 'express';
import fs from 'fs';
import path from 'path';
import parseMD from 'parse-md';
import { htmlRenderer } from './helpers';

export const postRouter = Router();

export const handlePostPage = (request: Request, response: Response): void => {
    const { id } = request.params;
    if(!id){
        response.sendStatus(400).send('No post specified');
    }
    
    response.set('content-type', 'text/html');

    const postMd = fs.readFileSync(new URL(`../posts/${id}.md`, import.meta.url));
    const mdParsed = parseMD(postMd.toString());
    console.log(mdParsed);
    const htmlRes = htmlRenderer(request.originalUrl, mdParsed);
    response.send(htmlRes);
};

postRouter.get('/:id', handlePostPage);
