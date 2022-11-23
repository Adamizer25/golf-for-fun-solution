import jwt from 'jsonwebtoken';
import { set } from './savedSessions.js'
import crypto from 'crypto';

export default (req, res) => {
    const secret = crypto.randomBytes(16).toString('hex');
    const { email, password } = req.headers;
    var token = jwt.sign({ email, password }, secret);
    set(email, password, secret);
    res.send(token);
};