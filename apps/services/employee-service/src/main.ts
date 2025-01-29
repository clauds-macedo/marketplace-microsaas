import { NestFactory } from '@nestjs/core';
import { Services/employeeServiceModule } from './services/employee-service.module';

async function bootstrap() {
  const app = await NestFactory.create(Services/employeeServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
