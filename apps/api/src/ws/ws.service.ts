import { Injectable } from "@nestjs/common";
import { Server } from "socket.io";
import { Channels } from "@/common";

type Payload = { channel: Channels; body: unknown };

@Injectable()
export class WsService {
  public socket: Server;

  constructor() {}

  notify(payload: Payload) {
    const { channel, body } = payload;
    this.socket.emit(channel, JSON.stringify(body));
  }
}
