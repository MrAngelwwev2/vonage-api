"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _serviceleggateway = require("./service-leg.gateway");
describe('ServiceLegGateway', ()=>{
    let gateway;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _serviceleggateway.ServiceLegGateway
            ]
        }).compile();
        gateway = module.get(_serviceleggateway.ServiceLegGateway);
    });
    it('should be defined', ()=>{
        expect(gateway).toBeDefined();
    });
});

//# sourceMappingURL=service-leg.gateway.spec.js.map