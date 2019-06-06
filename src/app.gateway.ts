import { Injectable } from '@nestjs/common';
import {WebSocketGateway, OnGatewayInit, OnGatewayConnection} from '@nestjs/websockets';
import { Client } from 'socket.io';


@Injectable()
@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection  {
    handleConnection(client: any, ...args: any[]) {
        console.log('new connection!');
    }
    afterInit(server: any) {
        console.log('gateway ready');
    }
    handleEvent(client: Client, data: string): string {
        return 'Hello!';
      }
}