"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VonageController", {
    enumerable: true,
    get: function() {
        return VonageController;
    }
});
const _createuser = require("../../../application/contact-center/use-case/create-user");
const _common = require("@nestjs/common");
const _getuser = require("../../../application/contact-center/use-case/get-user");
const _swagger = require("@nestjs/swagger");
const _express = require("express");
const _createcalldto = require("../dto/create-call.dto");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let VonageController = class VonageController {
    getAnswerCall(req, res) {
        const nccoResponse = [
            {
                action: 'connect',
                from: 'Vonage',
                endpoint: [
                    {
                        type: 'websocket',
                        uri: `wss://${req.hostname}/socket/clientLeg?conversationUUID=${req.query.conversation_uuid}`,
                        'content-type': 'audio/l16;rate=16000'
                    }
                ]
            }
        ];
        return res.status(_common.HttpStatus.OK).json(nccoResponse);
    }
    finishCall(req, res) {
        if (req.body.status === 'completed' && req.body.direction === 'inbound') {
        // delete the websocket connection
        }
        return res.status(_common.HttpStatus.OK);
    }
    createOutboundCall(call, res) {
        return res.status(_common.HttpStatus.OK);
    }
    constructor(createUserUseCase, getUserUseCase){
        this.createUserUseCase = createUserUseCase;
        this.getUserUseCase = getUserUseCase;
    }
};
_ts_decorate([
    (0, _common.Get)('/answer'),
    _ts_param(0, (0, _common.Req)()),
    _ts_param(1, (0, _common.Res)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _express.Request === "undefined" ? Object : _express.Request,
        typeof _express.Response === "undefined" ? Object : _express.Response
    ]),
    _ts_metadata("design:returntype", void 0)
], VonageController.prototype, "getAnswerCall", null);
_ts_decorate([
    (0, _common.Post)('/events'),
    _ts_param(0, (0, _common.Req)()),
    _ts_param(1, (0, _common.Res)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _express.Request === "undefined" ? Object : _express.Request,
        typeof _express.Response === "undefined" ? Object : _express.Response
    ]),
    _ts_metadata("design:returntype", void 0)
], VonageController.prototype, "finishCall", null);
_ts_decorate([
    (0, _common.Post)('/outbound-call'),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _common.Res)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createcalldto.CreateCallDto === "undefined" ? Object : _createcalldto.CreateCallDto,
        typeof _express.Response === "undefined" ? Object : _express.Response
    ]),
    _ts_metadata("design:returntype", void 0)
], VonageController.prototype, "createOutboundCall", null);
VonageController = _ts_decorate([
    (0, _common.Controller)('/vonage'),
    (0, _swagger.ApiTags)('Vonage'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createuser.CreateUserUseCase === "undefined" ? Object : _createuser.CreateUserUseCase,
        typeof _getuser.GetUserUseCase === "undefined" ? Object : _getuser.GetUserUseCase
    ])
], VonageController);

//# sourceMappingURL=vonage.controller.js.map