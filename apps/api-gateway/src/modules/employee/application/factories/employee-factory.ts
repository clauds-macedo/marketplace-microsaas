import { CreateEmployeeUseCase } from '../../domain/usecases/create-employee-use-case';
import { GetEmployeeUseCase } from '../../domain/usecases/get-employee-use-case';
import { EmployeeRepository } from '../../infra/repositories/EmployeeRepository';

export const getEmployeeUseCase = new GetEmployeeUseCase(
  new EmployeeRepository(),
);
export const createEmployeeUseCase = new CreateEmployeeUseCase(
  new EmployeeRepository(),
);
