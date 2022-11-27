import { addUser, getUser, deleteUser, allUsers } from "../../dynamo-db.js"

export class User {
    constructor({ id }) {
        this.id = id
    }
    populate({ FirstName, LastName, Age, Cell, Email }) {
        this.firstName = FirstName
        this.lastName = LastName
        this.age = Age
        this.email = Email
        this.cell = Cell
    }
    async init() {
        let { FirstName, LastName, Age, Cell, Email } = await getUser(this.id)
        this.firstName = FirstName
        this.lastName = LastName
        this.age = Age
        this.cell = Cell
        this.email = Email
    }
    async create({ firstName, lastName, age, email, cell }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.cell = cell;
        let response = await addUser(this.id, firstName, lastName, age, email, cell)
        console.log(response)
        return this
    }
    async delete() {
        let response = await deleteUser(this.id)
        console.log(response)
        return "Success"
    }
    static async all() {
        let response = await allUsers()
        let users = response.map(user => {
            let toReturn = new User({ id: user.ID })
            toReturn.populate(user)
            return toReturn
        })
        console.log(users)
        return users;
    }
}