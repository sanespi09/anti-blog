import swaggerJSDoc from 'swagger-jsdoc';
import HealthDocs from '../../components/health/docs';

/*
    IMPORTANT:
    When the documentation for a new api is defined. Modify the description and name of the api.
    * Example: in 'src/components/health/health.api.ts'
    * To view the documentation for the tool: https://www.npmjs.com/package/swagger-jsdoc
*/

const swaggerOptions: swaggerJSDoc.OAS3Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Karvi Template API',
            description: 'Karvi Template API Documentation',
            version: '1.0',
        },
        /*servers: [   //Delete comments and configure according to the publication url
            {
                url: '{KARVI_API_TEMPLATE}',
                variables: {
                    KARVI_API_TEMPLATE: {
                        enum: [
                            'https://karvi-template-api.development.karvi.com.ar',
                            'https://karvi-template-api.staging.karvi.com.ar',
                        ],
                    },
                },
            },
        ],*/
        paths: {
            ...HealthDocs,
        },
    },
    apis: [],
};

export default swaggerJSDoc(swaggerOptions);
