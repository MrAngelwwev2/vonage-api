import { z } from 'zod'

export const envSchema = z.object({
  MONGODB_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3000),
  CACHE_TTL: z.coerce.number().optional().default(5),
  CACHE_MAX: z.coerce.number().optional().default(10),
  TWILIO_ACCOUNT_SID: z.coerce.string(),
  TWILIO_AUTH_TOKEN: z.coerce.string(),
  VONAGE_API_KEY : z.coerce.string(),
  VONAGE_API_SECRET : z.coerce.string(),
  VONAGE_PHONE_NUMBER: z.coerce.string(),
  SPEECH_AZURE_KEY: z.coerce.string(),
  AZURE_REGION: z.coerce.string(),
  TRANSLATION_AZURE_KEY: z.coerce.string()
})

export type Env = z.infer<typeof envSchema>