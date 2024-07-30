import { Logger } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';

//https://medium.com/@sulthanftr/fulfilling-the-solid-principles-in-a-nest-js-api-37f0ae18dc7f
//https://stackoverflow.com/questions/56699402/websockets-on-specific-route-in-nest-js
@WebSocketGateway({
  path: '/vonage', 
  cors: {
    origin: '*'
  }})
export class VonageWebSocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(VonageWebSocketGateway.name);

  @WebSocketServer() io: Server;

  afterInit() {
    this.logger.log('Initialized');
  }

  handleConnection(client: any, ...args: any[]) {
    const { sockets } = this.io.sockets;

    this.logger.log(`Client id: ${client.id} connected`);
    this.logger.debug(`Number of connected clients: ${sockets.size}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Cliend id:${client.id} disconnected`);
  }

  @SubscribeMessage("message")
  handleMessage(client: any, data: any) {
    const msg = JSON.parse(data);
    switch (msg.event) {
      case "connected":
        console.log(`A new call has connected.`);

        // Create Stream to the Google Speech to Text API
        /*recognizeStream = client
          .streamingRecognize(request)
          .on("error", console.error)
          .on("data", data => {
            console.log(data.results[0].alternatives[0].transcript);
          });
          */
        break;
      case "start":
        console.log(`Starting Media Stream ${msg.streamSid}`);
        break;
      case "media":
        // Write Media Packets to the recognize stream
        //recognizeStream.write(msg.media.payload);
        break;
      case "stop":
        console.log(`Call Has Ended`);
        //recognizeStream.destroy();
        break;
    }
  }
}
