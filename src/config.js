const dev = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-14f52tvysqkrd"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://gk9e2e20ba.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_e8CHNl2H5",
    APP_CLIENT_ID: "Y42d3kliporprqlt8o32f12o917",
    IDENTITY_POOL_ID: "us-east-2:f8c618f8-d7c8-458c-8c4e-9a87c6da8b07"
  }
};

const prod = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-17paxgi79qlcm"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://a1dhu0ux57.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_bgyES6BIT",
    APP_CLIENT_ID: "7ncd4iejvl9ubmcoi0bko12vmg",
    IDENTITY_POOL_ID: "us-east-2:b4e7b59e-98d7-4a6b-a34e-8d20b5216640"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
