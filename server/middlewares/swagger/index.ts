import { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swaggerDocs';

export default (app: Application): void => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { customSiteTitle: 'Template API' }));
    app.get('/docs.json', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-disposition', 'attachment; filename=karvi-used-cars-api.json');
        res.send(swaggerDocs);
    });
};
