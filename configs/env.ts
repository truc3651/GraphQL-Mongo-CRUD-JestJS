require("dotenv").config();
const ENV = process.env;

export default {
  PORT: ENV.PORT ? Number(ENV.PORT) : 3000,
  NODE_ENV: ENV.NODE_ENV,
  MONGODB_CONNECTION_STRING_TEST: ENV.MONGODB_CONNECTION_STRING_TEST,
  MONGODB_CONNECTION_STRING: ENV.MONGODB_CONNECTION_STRING,
} as const;
