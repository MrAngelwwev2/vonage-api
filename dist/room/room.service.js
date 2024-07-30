"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RoomService", {
    enumerable: true,
    get: function() {
        return RoomService;
    }
});
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let RoomService = class RoomService {
    async addRoom(roomName, host) {
        const room = await this.getRoomByName(roomName);
        if (room === -1) {
            await this.rooms.push({
                name: roomName,
                host,
                users: [
                    host
                ]
            });
        }
    }
    async removeRoom(roomName) {
        const findRoom = await this.getRoomByName(roomName);
        if (findRoom !== -1) {
            this.rooms = this.rooms.filter((room)=>room.name !== roomName);
        }
    }
    async getRoomHost(hostName) {
        const roomIndex = await this.getRoomByName(hostName);
        return this.rooms[roomIndex].host;
    }
    async getRoomByName(roomName) {
        const roomIndex = this.rooms.findIndex((room)=>room?.name === roomName);
        return roomIndex;
    }
    async getRoom(roomName) {
        const room = this.rooms.find((room)=>room?.name === roomName);
        return room;
    }
    async addUserToRoom(roomName, user) {
        const roomIndex = await this.getRoomByName(roomName);
        if (roomIndex !== -1) {
            this.rooms[roomIndex].users.push(user);
            const host = await this.getRoomHost(roomName);
            if (host.userId === user.userId) {
                this.rooms[roomIndex].host.socketId = user.socketId;
            }
            console.log("this.rooms[roomIndex]", this.rooms[roomIndex]);
        } else {
            await this.addRoom(roomName, user);
        }
    }
    async findRoomsByUserSocketId(socketId) {
        const filteredRooms = this.rooms.filter((room)=>{
            const found = room.users.find((user)=>user.socketId === socketId);
            if (found) {
                return found;
            }
        });
        return filteredRooms;
    }
    async removeUserFromAllRooms(socketId) {
        const rooms = await this.findRoomsByUserSocketId(socketId);
        for (const room of rooms){
            await this.removeUserFromRoom(socketId, room.name);
        }
    }
    async removeUserFromRoom(socketId, roomName) {
        const room = await this.getRoomByName(roomName);
        this.rooms[room].users = this.rooms[room].users.filter((user)=>user.socketId !== socketId);
        if (this.rooms[room].users.length === 0) {
            await this.removeRoom(roomName);
        }
    }
    async getRooms() {
        return this.rooms;
    }
    constructor(){
        this.rooms = [];
    }
};
RoomService = _ts_decorate([
    (0, _common.Injectable)()
], RoomService);

//# sourceMappingURL=room.service.js.map