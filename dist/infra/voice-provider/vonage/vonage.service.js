"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VonageService", {
    enumerable: true,
    get: function() {
        return VonageService;
    }
});
const _env = require("../../env");
const _common = require("@nestjs/common");
const _serversdk = require("@vonage/server-sdk");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let VonageService = class VonageService {
    getInstance() {
        const VONAGE_API_KEY = this.envService.get("VONAGE_API_KEY");
        const VONAGE_API_SECRET = this.envService.get("VONAGE_API_SECRET");
        const credentials = {
            apiKey: VONAGE_API_KEY,
            apiSecret: VONAGE_API_SECRET
        };
        const client = new _serversdk.Vonage(credentials);
        return client;
    }
    getPhoneAgent() {
        return this.envService.get("VONAGE_PHONE_NUMBER");
    }
    constructor(envService){
        this.envService = envService;
    }
};
VonageService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _env.EnvService === "undefined" ? Object : _env.EnvService
    ])
], VonageService);

//# sourceMappingURL=vonage.service.js.map