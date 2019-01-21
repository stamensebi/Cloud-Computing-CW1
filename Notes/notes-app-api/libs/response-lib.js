export function success(params) {


  return buildResponse(200, params);
}

function resp(res, params) {
  return {
    statusCode: res,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(params)
  };
}

export function failure(params) {
  return resp(500, params);
}
