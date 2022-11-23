import { getSecret } from './savedSessions.js';
export default async (req, token) => {
    console.log("signature", token.signature)
    let { email, password } = token.payload;
    const secret = getSecret(email, password);
    if (!secret) throw new Error("missing_secret");
    return secret;
};