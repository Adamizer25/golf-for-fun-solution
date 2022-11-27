import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
const region = "af-south-1";
const ddbClient = new DynamoDBClient({ region });
export { ddbClient };