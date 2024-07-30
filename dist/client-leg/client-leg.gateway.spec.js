"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _clientleggateway = require("./client-leg.gateway");
describe('ClientLegGateway', ()=>{
    let gateway;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _clientleggateway.ClientLegGateway
            ]
        }).compile();
        gateway = module.get(_clientleggateway.ClientLegGateway);
    });
    it('should be defined', ()=>{
        expect(gateway).toBeDefined();
    });
});

//# sourceMappingURL=client-leg.gateway.spec.js.map