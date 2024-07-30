"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SpeechService", {
    enumerable: true,
    get: function() {
        return SpeechService;
    }
});
const _env = require("../../env");
const _common = require("@nestjs/common");
const _microsoftcognitiveservicesspeechsdk = require("microsoft-cognitiveservices-speech-sdk");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let SpeechService = class SpeechService {
    getInstance() {
        const SPEECH_AZURE_KEY = this.envService.get("SPEECH_AZURE_KEY");
        const AZURE_REGION = this.envService.get("AZURE_REGION");
        const client = _microsoftcognitiveservicesspeechsdk.SpeechTranslationConfig.fromSubscription(SPEECH_AZURE_KEY, AZURE_REGION);
        return client;
    }
    constructor(envService){
        this.envService = envService;
    }
};
SpeechService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _env.EnvService === "undefined" ? Object : _env.EnvService
    ])
], SpeechService);

//# sourceMappingURL=speech.service.js.map