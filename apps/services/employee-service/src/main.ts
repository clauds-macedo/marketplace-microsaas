import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { EmployeeServiceModule } from './employee-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EmployeeServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'general_queue',
        queueOptions: { durable: false },
      },
    },
  );
  await app.listen();
  console.log('🎯 Employee Service rodando e escutando mensagens');
}
bootstrap();
