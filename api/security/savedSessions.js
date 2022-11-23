var db = {};
export const getSecret = (email, password) => {
    let record = db[email];
    return record.password == password ? record.secret : null;
};
export const set = (email, password, secret) => db[email] = { password, secret };
export const all = () => db;