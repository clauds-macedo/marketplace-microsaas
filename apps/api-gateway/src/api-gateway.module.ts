import { Module } from '@nestjs/common';
import { IEmployeeRepository } from './modules/employee/domain/repositories/employee-repository';
import { CreateEmployeeUseCase } from './modules/employee/domain/usecases/create-employee-use-case';
import { GetEmployeeUseCase } from './modules/employee/domain/usecases/get-employee-use-case';
import { EmployeeRepository } from './modules/employee/infra/repositories/employee-repository';
import { EmployeeController } from './modules/employee/presentation/controllers/employee.controller';

@Module({
  providers: [
    EmployeeRepository,
    {
      provide: CreateEmployeeUseCase,
      useFactory: (repo: IEmployeeRepository) =>
        new CreateEmployeeUseCase(repo),
      inject: [EmployeeRepository],
    },
    {
      provide: GetEmployeeUseCase,
      useFactory: (repo: IEmployeeRepository) => new GetEmployeeUseCase(repo),
      inject: [EmployeeRepository],
    },
  ],
  controllers: [EmployeeController],
})
export class ApiGatewayModule {}
