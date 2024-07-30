"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientLegGateway", {
    enumerable: true,
    get: function() {
        return ClientLegGateway;
    }
});
const _common = require("@nestjs/common");
const _websockets = require("@nestjs/websockets");
const _socketio = require("socket.io");
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
let ClientLegGateway = class ClientLegGateway {
    afterInit() {
        this.logger.log('Initialized');
    }
    handleConnection(client, ...args) {
        const { sockets } = this.io.sockets;
        this.logger.log(`Client id: ${client.id} connected`);
        this.logger.debug(`Number of connected clients: ${sockets.size}`);
    }
    handleDisconnect(client) {
        this.logger.log(`Cliend id:${client.id} disconnected`);
    }
    handleEvent(data) {
        return data;
    }
    handleMessage(client, data) {
        this.logger.log(`Message received from client id: ${client.id}`);
        this.logger.debug(`Payload: ${data}`);
        return {
            event: "pong",
            data
        };
    }
    constructor(){
        this.logger = new _common.Logger(ClientLegGateway.name);
    }
};
_ts_decorate([
    (0, _websockets.WebSocketServer)(),
    _ts_metadata("design:type", typeof _socketio.Server === "undefined" ? Object : _socketio.Server)
], ClientLegGateway.prototype, "io", void 0);
_ts_decorate([
    (0, _websockets.SubscribeMessage)('events'),
    _ts_param(0, (0, _websockets.MessageBody)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", String)
], ClientLegGateway.prototype, "handleEvent", null);
_ts_decorate([
    (0, _websockets.SubscribeMessage)("message"),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object,
        Object
    ]),
    _ts_metadata("design:returntype", void 0)
], ClientLegGateway.prototype, "handleMessage", null);
ClientLegGateway = _ts_decorate([
    (0, _websockets.WebSocketGateway)({
        path: '/clientLeg'
    })
], ClientLegGateway);

//# sourceMappingURL=client-leg.gateway.js.map