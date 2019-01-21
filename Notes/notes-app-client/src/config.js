export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-west-2",
    BUCKET: "pastenote"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://ulkvx70ts7.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_GhzWBsqHD",
    APP_CLIENT_ID: "214b8qskm9bpg1lsum4u4m81cb",
    IDENTITY_POOL_ID: "eu-west-2:b79f4949-d815-441e-b8dc-9920896128c9"
  }
};
