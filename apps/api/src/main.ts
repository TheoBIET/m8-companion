import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { ConfigService } from "@/core/config/config.service";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const logger = new Logger("Bootstrap");
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const protocol = config.get("API_PROTOCOL");
  const port = config.get("API_PORT");
  const host = config.get("API_HOST");
  const prefix = config.get("API_PREFIX");

  app.enableCors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  });

  app.setGlobalPrefix(prefix);
  await app.listen(port, host);
  logger.debug(`API running on ${protocol}://${host}:${port}${prefix}`);
}

void bootstrap();
