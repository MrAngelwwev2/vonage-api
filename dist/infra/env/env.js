"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "envSchema", {
    enumerable: true,
    get: function() {
        return envSchema;
    }
});
const _zod = require("zod");
const envSchema = _zod.z.object({
    MONGODB_URL: _zod.z.string().url(),
    PORT: _zod.z.coerce.number().optional().default(3000),
    CACHE_TTL: _zod.z.coerce.number().optional().default(5),
    CACHE_MAX: _zod.z.coerce.number().optional().default(10),
    TWILIO_ACCOUNT_SID: _zod.z.coerce.string(),
    TWILIO_AUTH_TOKEN: _zod.z.coerce.string(),
    VONAGE_API_KEY: _zod.z.coerce.string(),
    VONAGE_API_SECRET: _zod.z.coerce.string(),
    VONAGE_PHONE_NUMBER: _zod.z.coerce.string(),
    SPEECH_AZURE_KEY: _zod.z.coerce.string(),
    AZURE_REGION: _zod.z.coerce.string(),
    TRANSLATION_AZURE_KEY: _zod.z.coerce.string()
});

//# sourceMappingURL=env.js.map