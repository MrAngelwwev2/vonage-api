"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VonageCallRepository", {
    enumerable: true,
    get: function() {
        return VonageCallRepository;
    }
});
const _env = require("../../env");
const _common = require("@nestjs/common");
const _vonageservice = require("./vonage.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let VonageCallRepository = class VonageCallRepository {
    async makeCall(agentPhoneNumber, callerPhoneNumber) {
        try {
            const call = {
                to: [
                    {
                        type: 'phone',
                        number: callerPhoneNumber
                    }
                ],
                from: [
                    {
                        type: 'phone',
                        number: agentPhoneNumber
                    }
                ],
                ncco: [
                    {
                        action: 'talk',
                        text: 'This is a text to speech call from Vonage'
                    }
                ]
            };
            const callResult = await this.vonage.voice.createOutboundCall(call);
            console.log('Call initiated, UUID:', callResult.uuid);
            return "done";
        } catch (error) {
            console.error('Error: ', error);
        }
    }
    find() {
        throw new Error("Method not implemented.");
    }
    save() {
        throw new Error("Method not implemented.");
    }
    constructor(vonageService, envService){
        this.vonageService = vonageService;
        this.envService = envService;
        this.vonage = this.vonageService.getInstance();
    }
};
VonageCallRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _vonageservice.VonageService === "undefined" ? Object : _vonageservice.VonageService,
        typeof _env.EnvService === "undefined" ? Object : _env.EnvService
    ])
], VonageCallRepository);

//# sourceMappingURL=vonage-call.repository.js.map