import { ConfigModule } from "@/core";
import { Module, ValidationPipe } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { StatusModule } from "@/status/status.module";

@Module({
  imports: [ConfigModule, StatusModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
