"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VonageWebSocketGateway", {
    enumerable: true,
    get: function() {
        return VonageWebSocketGateway;
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
let VonageWebSocketGateway = class VonageWebSocketGateway {
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
    handleMessage(client, data) {
        const msg = JSON.parse(data);
        switch(msg.event){
            case "connected":
                console.log(`A new call has connected.`);
                break;
            case "start":
                console.log(`Starting Media Stream ${msg.streamSid}`);
                break;
            case "media":
                break;
            case "stop":
                console.log(`Call Has Ended`);
                break;
        }
    }
    constructor(){
        this.logger = new _common.Logger(VonageWebSocketGateway.name);
    }
};
_ts_decorate([
    (0, _websockets.WebSocketServer)(),
    _ts_metadata("design:type", typeof _socketio.Server === "undefined" ? Object : _socketio.Server)
], VonageWebSocketGateway.prototype, "io", void 0);
_ts_decorate([
    (0, _websockets.SubscribeMessage)("message"),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object,
        Object
    ]),
    _ts_metadata("design:returntype", void 0)
], VonageWebSocketGateway.prototype, "handleMessage", null);
VonageWebSocketGateway = _ts_decorate([
    (0, _websockets.WebSocketGateway)({
        path: '/vonage',
        cors: {
            origin: '*'
        }
    })
], VonageWebSocketGateway);

//# sourceMappingURL=vonage.gateway.js.map