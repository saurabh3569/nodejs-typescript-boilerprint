import dotenv from "dotenv";
import { cleanEnv, str, port, num } from "envalid";

dotenv.config();

// Validate and export environment variables
export const env = cleanEnv(process.env, {
  PORT: port({ default: 3000 }),
  MONGO_URI: str(),
  JWT_SECRET: str(),
  JWT_EXPIRES_IN: num({ default: 604800 }),
});
