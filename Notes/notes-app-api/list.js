import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

//GET LIST OF ALL NOTES OF A USER
export async function main(event, context) {
  const par = {
    TableName: "notes",
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": event.requestContext.identity.cognitoIdentityId
    }
  };
  try {
    const res = dynamoDbLib.call("query", par);
    return success(res.Items);
  } catch (e) {
    return failure({ status: false });
  }
}
