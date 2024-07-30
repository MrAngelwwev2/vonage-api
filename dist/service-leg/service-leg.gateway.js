"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ServiceLegGateway", {
    enumerable: true,
    get: function() {
        return ServiceLegGateway;
    }
});
const _common = require("@nestjs/common");
const _websockets = require("@nestjs/websockets");
const _socketio = require("socket.io");
const _interface = require("../interfaces/interface");
const _roomservice = require("../room/room.service");
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
let ServiceLegGateway = class ServiceLegGateway {
    afterInit() {
        this.logger.log('Initialized');
    }
    handleConnection(client, ...args) {
        this.lstUsers.push(client);
        // const { sockets } = this.io.sockets;
        this.logger.log(`Client id: ${client.id} connected`);
    // this.logger.debug(`Number of connected clients: ${sockets.size}`);
    }
    handleDisconnect(client) {
        this.logger.log(`Cliend id:${client.id} disconnected`);
    }
    handleEvent(data) {
        return data;
    }
    // @SubscribeMessage("message")
    // handleMessage(client: any, data: any) {
    //   this.logger.log(`Message received from client id: ${client.id}`);
    //   this.logger.debug(`Payload: ${data}`);
    //   return {
    //     event: "pong",
    //     data,
    //   };
    // }
    async handleChatEvent(client, payload) {
        this.logger.log(payload);
        // this.server.to(payload.roomName).emit('chat', payload) // broadcast messages
        const room = this.roomService.getRoom(payload.roomName);
        if (room) {
            for (const user of (await room).users){
                if (user.userId != client.id) {
                    const sock = this.lstUsers.find(({ id })=>id == user.userId);
                    sock.emit('chat', payload);
                }
            }
        }
        console.log("this.server.to(payload.roomName)");
        return payload;
    }
    async handleSetClientDataEvent(client, payload) {
        if (payload.user.socketId) {
            this.logger.log(`${payload.user.socketId} is joining ${payload.roomName}`);
            await this.server.in(client.id).socketsJoin(payload.roomName);
            await this.roomService.addUserToRoom(payload.roomName, {
                ...payload.user,
                userId: client.id
            });
        }
    }
    constructor(roomService){
        this.roomService = roomService;
        this.logger = new _common.Logger(ServiceLegGateway.name);
        this.server = new _socketio.Server();
        this.lstUsers = [];
        this.lstRooms = [];
    }
};
_ts_decorate([
    (0, _websockets.WebSocketServer)(),
    _ts_metadata("design:type", typeof _socketio.Server === "undefined" ? Object : _socketio.Server)
], ServiceLegGateway.prototype, "server", void 0);
_ts_decorate([
    (0, _websockets.SubscribeMessage)('events'),
    _ts_param(0, (0, _websockets.MessageBody)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", String)
], ServiceLegGateway.prototype, "handleEvent", null);
_ts_decorate([
    (0, _websockets.SubscribeMessage)('chat'),
    _ts_param(0, (0, _websockets.ConnectedSocket)()),
    _ts_param(1, (0, _websockets.MessageBody)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _socketio.Socket === "undefined" ? Object : _socketio.Socket,
        typeof _interface.Message === "undefined" ? Object : _interface.Message
    ]),
    _ts_metadata("design:returntype", Promise)
], ServiceLegGateway.prototype, "handleChatEvent", null);
_ts_decorate([
    (0, _websockets.SubscribeMessage)('join_room'),
    _ts_param(0, (0, _websockets.ConnectedSocket)()),
    _ts_param(1, (0, _websockets.MessageBody)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _socketio.Socket === "undefined" ? Object : _socketio.Socket,
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], ServiceLegGateway.prototype, "handleSetClientDataEvent", null);
ServiceLegGateway = _ts_decorate([
    (0, _websockets.WebSocketGateway)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _roomservice.RoomService === "undefined" ? Object : _roomservice.RoomService
    ])
], ServiceLegGateway);

//# sourceMappingURL=service-leg.gateway.js.map