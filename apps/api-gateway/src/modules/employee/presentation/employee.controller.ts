import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateEmployeeUseCase } from '../domain/usecases/create-employee-use-case';
import { GetEmployeeUseCase } from '../domain/usecases/get-employee-use-case';

@Controller()
export class EmployeeController {
  constructor(
    private readonly createEmployeeUseCase: CreateEmployeeUseCase,
    private readonly getEmployeeUseCase: GetEmployeeUseCase,
  ) {}

  @MessagePattern('create_employee')
  async createEmployee(data: {
    name: string;
    position: string;
    salary: number;
  }) {
    return this.createEmployeeUseCase.execute({ ...data });
  }

  @MessagePattern('get_employee')
  async getEmployee(id: string) {
    return this.getEmployeeUseCase.execute(id);
  }
}
