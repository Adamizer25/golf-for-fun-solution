import express from 'express';
import logger from './middleware/logger.js';
import expressjwt from './security/expressjwt.js';
import graphql from './graphql/graphql.js';
import sign from './security/sign.js';
import { port } from './config.js';
var app = express();
app.use(logger);
app.use(expressjwt);
app.use('/sign', sign)
app.use('/graphql', graphql);
app.listen(port);
console.log('Running a GraphQL API server at localhost:4000');