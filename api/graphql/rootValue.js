import { User } from "./classes/user.js";
export default {
    ip: function (args, { ip }) {
        return ip;
    },
    user: async (args) => {
        let user = new User(args)
        await user.init()
        return user
    },
    createUser: async ({ input }) => {
        let user = new User(input)
        let resp = await user.create(input)
        return resp
    },
    deleteUser: async (args) => {
        let user = new User(args)
        let resp = await user.delete()
        return resp
    },
    users: async (args) => {
        return await User.all()
    }
};