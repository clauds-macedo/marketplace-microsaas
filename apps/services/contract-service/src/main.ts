import { NestFactory } from '@nestjs/core';
import { Services/contractServiceModule } from './services/contract-service.module';

async function bootstrap() {
  const app = await NestFactory.create(Services/contractServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
