import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

//CHANGE A NOTE FOR A USER

export async function main(event, context) {
  const data = JSON.parse(event.body);

  const pars = {
    TableName: "notes",
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    },
    UpdateExpression: "SET content = :content, attachment = :attachment",
    ExpressionAttributeValues: {
      ":attachment": data.attachment || null,
      ":content": data.content || null
    },
    ReturnValues: "ALL_NEW"
  };


//IF THE CALL IS SUCCESSFUL, CALL THE SUCCESS FUNCTION FROM LIBS
  try {
    const res = dynamoDbLib.call("update", pars);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
}
