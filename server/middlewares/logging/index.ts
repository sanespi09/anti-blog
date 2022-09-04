import { Handler } from 'express';
import morgan from 'morgan';

export default (): Handler =>
    morgan('tiny', {
        stream: {
            write: (msg) => console.log(msg),
        },
    });
