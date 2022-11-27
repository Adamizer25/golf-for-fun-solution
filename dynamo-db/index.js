import express from 'express'
import bodyParser from 'body-parser'
import logger from './middleware/logger.js'
import { log, clearLogs } from './logging.js'
import { port } from './config.js'
import users from './root/users.js'

var app = express();
app.use(bodyParser.json())
app.use(logger)

var verbose = process.env.NODE_ENV != 'test';
app.map = function (a, route) {
    route = route || '';
    for (var key in a) {
        switch (typeof a[key]) {
            // { '/path': { ... }}
            case 'object':
                app.map(a[key], route + key);
                break;
            // get: function(){ ... }
            case 'function':
                if (verbose) console.log('%s %s', key, route);
                app[key](route, a[key]);
                break;
        }
    }
};

app.map({
    '/users': {
        get: users.list,
        post: users.post,
        '/:id': {
            get: users.get,
            delete: users.delete
        }
    }
});
app.listen(port)
console.log(`Running server at localhost:${port}`)
clearLogs()