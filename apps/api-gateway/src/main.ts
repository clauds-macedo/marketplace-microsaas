import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'employee_queue',
      queueOptions: { durable: false },
    },
  });
  await app.startAllMicroservices();
  await app.listen(3000);
  console.log('🚀 API Gateway rodando na porta 3000');
}

bootstrap();