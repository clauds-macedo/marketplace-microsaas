import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ContractServiceModule } from './contract-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ContractServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'contract_queue',
        queueOptions: { durable: false },
      },
    },
  );

  await app.listen();
  console.log('🎯 Contract Service rodando e escutando eventos...');
}
bootstrap();
