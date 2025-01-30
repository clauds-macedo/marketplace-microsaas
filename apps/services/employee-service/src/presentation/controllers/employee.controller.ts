import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateEmployeeUseCase } from '../../domain/usecases/create-employee-use-case';
import { GetEmployeeUseCase } from '../../domain/usecases/get-employee-use-case';

@Controller()
export class EmployeeController {
  constructor(    
    private readonly createEmployeeUseCase: CreateEmployeeUseCase,
    private readonly getEmployeeUseCase: GetEmployeeUseCase,
  ) {}

  @EventPattern('create_employee')
  async createEmployee(data: {
    name: string;
    position: string;
    salary: number;
  }) {
    const employee = await this.createEmployeeUseCase.execute(
      data.name,
      data.position,
      data.salary,
    );
    return {
      status: 'created',
      employee,
    };
  }

  @MessagePattern('get_employee')
  async getEmployee(id: string) {
    return {
      status: 'found',
      employee: await this.getEmployeeUseCase.execute(id),
    };
  }
}
