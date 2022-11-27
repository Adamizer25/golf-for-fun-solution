import { PutCommand, GetCommand, DeleteCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./libs/ddbDocClient.js";
import { log } from "./logging.js";

export const putItem = async (params) => {
    try {
        const data = await ddbDocClient.send(new PutCommand(params))
        log("Success - item added or updated", JSON.stringify(data))
        return data
    } catch (err) {
        log("Error", err.stack)
    }
};
export const getItem = async (params) => {
    try {
        const data = await ddbDocClient.send(new GetCommand(params))
        log("Success - got item", JSON.stringify(data))
        return data
    } catch (err) {
        log("Error", err.stack)
    }
}
export const deleteItem = async (params) => {
    try {
        const data = await ddbDocClient.send(new DeleteCommand(params))
        log("Success - deleted item", JSON.stringify(data))
        return data
    } catch (err) {
        log("Error", err.stack)
    }
}
export const scanTable = async (params) => {
    try {
        const data = await ddbDocClient.send(new ScanCommand(params))
        log("Success - scanned table", JSON.stringify(data))
        return data
    } catch (err) {
        log("Error", err.stack)
    }
}