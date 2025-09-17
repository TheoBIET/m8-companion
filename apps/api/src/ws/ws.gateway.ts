import { Logger } from "@nestjs/common";
import {
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { WsService } from "./ws.service";

@WebSocketGateway()
export class WsGateway implements OnGatewayInit {
  @WebSocketServer()
  private readonly server: Server;
  private readonly logger: Logger = new Logger(this.constructor.name);

  constructor(private readonly wsService: WsService) {
    this.server = new Server();
  }

  afterInit() {
    this.wsService.socket = this.server;
    this.logger.log("WebSocket server initialized");
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
