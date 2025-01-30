import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RequestEmployeeUseCase } from './modules/employee/application/usecases/request-employee-use-case';
import { EmployeeController } from './modules/employee/presentation/controllers/employee.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EMPLOYEE_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'employee_queue',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  controllers: [EmployeeController],
  providers: [RequestEmployeeUseCase],
})
export class ApiGatewayModule {}
