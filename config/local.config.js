import { configDotenv } from "dotenv";

configDotenv();

const ENV_CONFIG = {
  // NEXT_PUBLIC: process.env.NEXT_PUBLIC_VERCEL_DOMAIN,
  NEXT_PUBLIC: process.env.NEXT_PUBLIC_LOCAL_DOMAIN,
};

export default ENV_CONFIG;
