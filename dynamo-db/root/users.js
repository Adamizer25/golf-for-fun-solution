import { getItem, putItem, deleteItem, scanTable } from '../aws.js'
import { log } from '../logging.js'

export default {
    list: async (req, res, next) => {
        let response = await scanTable({ TableName: "USERS" })
        if (!response) {
            res.status(500).send("No response from scanTable")
            next()
            return
        }
        res.json({
            statusCode: response['$metadata'].httpStatusCode,
            requestId: response.requestId,
            items: response.Items
        })
        next()
    },
    get: async (req, res, next) => {
        let { id } = req.params
        if (!id) {
            log("Invalid params; id is required")
            next()
            return
        }

        let response = await getItem({ TableName: "USERS", Key: { ID: id } })
        if (!response) {
            res.status(500).send("No response from getItem")
            next()
            return
        }
        res.json({
            statusCode: response['$metadata'].httpStatusCode,
            requestId: response.requestId,
            item: response.Item
        })
        next()
    },
    post: async (req, res, next) => {
        let { id, firstName, lastName, age, email, cell } = req.body
        if (!id) {
            log("Invalid params; id is required")
            next()
            return
        }

        let Item = {
            ID: id,
            FirstName: firstName,
            LastName: lastName,
            Age: age,
            Email: email,
            Cell: cell
        }

        let response = await putItem({ TableName: "USERS", Item })
        if (!response) {
            res.status(500).send("No response from putItem")
            next()
            return
        }
        res.json({
            statusCode: response['$metadata'].httpStatusCode,
            requestId: response.requestId,
            item: response.Item
        })
        next()
    },
    delete: async (req, res, next) => {
        let { id } = req.params
        if (!id) {
            log("Invalid params; id is required")
            next()
            return
        }

        let response = await deleteItem({ TableName: "USERS", Key: { ID: id } })
        console.log(response)
        res.send('delete users');
        next()
    }
};