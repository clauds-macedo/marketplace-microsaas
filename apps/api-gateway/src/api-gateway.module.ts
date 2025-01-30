import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RequestContractUseCase } from './modules/contract/application/usecases/request-contract-use-case';
import { ContractController } from './modules/contract/presentation/controllers/contract.controller';
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
          queue: 'general_queue',
          queueOptions: { durable: false },
        },
      },
      {
        name: 'CONTRACT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'contract_queue',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  controllers: [EmployeeController, ContractController],
  providers: [RequestEmployeeUseCase, RequestContractUseCase],
})
export class ApiGatewayModule {}
