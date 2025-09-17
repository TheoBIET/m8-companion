import { Global, Module } from "@nestjs/common";
import { WsService } from "./ws.service";
import { WsGateway } from "./ws.gateway";

@Global()
@Module({
  providers: [WsService, WsGateway],
  exports: [WsService],
})
export class WsModule {}
