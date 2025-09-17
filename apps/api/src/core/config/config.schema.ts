import { z } from "zod";

export const schema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  API_PROTOCOL: z.enum(["http", "https"]),
  API_HOST: z.string(),
  API_PORT: z.coerce.number(),
  API_PREFIX: z.string(),
  API_URL: z.string(),
});
