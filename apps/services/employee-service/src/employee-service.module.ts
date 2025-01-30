import { Module } from '@nestjs/common';
import { CreateEmployeeUseCase } from './domain/usecases/create-employee-use-case';
import { GetEmployeeUseCase } from './domain/usecases/get-employee-use-case';
import { EmployeeRepository } from './infra/repository/employee-repository';
import { EmployeeController } from './presentation/controllers/employee.controller';

@Module({
  providers: [
    EmployeeRepository,
    {
      provide: CreateEmployeeUseCase,
      useFactory: (repo: EmployeeRepository) => new CreateEmployeeUseCase(repo),
      inject: [EmployeeRepository],
    },
    {
      provide: GetEmployeeUseCase,
      useFactory: (repo: EmployeeRepository) => new GetEmployeeUseCase(repo),
      inject: [EmployeeRepository],
    },
  ],
  controllers: [EmployeeController],
})

export class EmployeeServiceModule {}
