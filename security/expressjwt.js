import { expressjwt } from "express-jwt";
import { port } from '../config.js';
import getToken from './getToken.js';
import secret from './getSecret.js';

export const algorithms = ["HS256"];
export const path = ["/sign"];
export const credentialsRequired = false;
export default expressjwt({ secret, algorithms, credentialsRequired, getToken }).unless({ path });