"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TwilioService", {
    enumerable: true,
    get: function() {
        return TwilioService;
    }
});
const _env = require("../../env");
const _common = require("@nestjs/common");
const _twilio = /*#__PURE__*/ _interop_require_default(require("twilio"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let TwilioService = class TwilioService {
    getInstance() {
        const TWILIO_ACCOUNT_SID = this.envService.get("TWILIO_ACCOUNT_SID");
        const TWILIO_AUTH_TOKEN = this.envService.get("TWILIO_AUTH_TOKEN");
        const client = (0, _twilio.default)(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
        return client;
    }
    constructor(envService){
        this.envService = envService;
    }
};
TwilioService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _env.EnvService === "undefined" ? Object : _env.EnvService
    ])
], TwilioService);

//# sourceMappingURL=twilio.service.js.map