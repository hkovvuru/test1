import Express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes';
import { logger, expressLogger } from './config';

// instantiating dontenv
dotenv.config();

logger.info('Welcome to NodeJS Seed!!!');

// instantiating express
const app = Express();

// add logger
app.use(expressLogger);

// adding parsers
app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ limit: '2mb', extended: false }));

// addind user operation routes
app.use(router);

// starting the server
app.listen(process.env.APP_PORT, () => {
    logger.info(`Server listening at http://${process.env.APP_HOST}:${process.env.APP_PORT}/`);
});
