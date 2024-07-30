import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';
import { ClientToServerEvents, Message, ServerToClientEvents, User } from 'src/interfaces/interface';
import { RoomService } from 'src/room/room.service';

//https://medium.com/@sulthanftr/fulfilling-the-solid-principles-in-a-nest-js-api-37f0ae18dc7f
//https://stackoverflow.com/questions/56699402/websockets-on-specific-route-in-nest-js
@WebSocketGateway()
export class ServiceLegGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(ServiceLegGateway.name);
  constructor(private roomService: RoomService) { }
  // @WebSocketServer() io: Server;
  @WebSocketServer() server: Server = new Server<ServerToClientEvents, ClientToServerEvents>()
  lstUsers: Socket[] = []
  lstRooms = []
  afterInit() {
    this.logger.log('Initialized');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.lstUsers.push(client)
    // const { sockets } = this.io.sockets;

    this.logger.log(`Client id: ${client.id} connected`);
    // this.logger.debug(`Number of connected clients: ${sockets.size}`);
  }

  handleDisconnect(client: any) {

    this.logger.log(`Cliend id:${client.id} disconnected`);
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
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
  @SubscribeMessage('chat')
  async handleChatEvent(@ConnectedSocket() client:Socket,
    @MessageBody()
    payload: Message
  ): Promise<Message> {
    this.logger.log(payload)
    // this.server.to(payload.roomName).emit('chat', payload) // broadcast messages
    const room = this.roomService.getRoom(payload.roomName)
    if(room){
      for(const user of (await room).users){
        if(user.userId!=client.id){
          const sock = this.lstUsers.find(({id})=>id==user.userId)
          sock.emit('chat',payload)
        }
      }
    }
    console.log("this.server.to(payload.roomName)")
    return payload
  }

  @SubscribeMessage('join_room')
  async handleSetClientDataEvent(@ConnectedSocket() client:Socket,
    @MessageBody()
    payload: {
      roomName: string
      user: User
    }
  ) {
    
    if (payload.user.socketId) {
      this.logger.log(`${payload.user.socketId} is joining ${payload.roomName}`)
      await this.server.in(client.id).socketsJoin(payload.roomName)
      await this.roomService.addUserToRoom(payload.roomName, {...payload.user,userId:client.id})
    }
  }
}
