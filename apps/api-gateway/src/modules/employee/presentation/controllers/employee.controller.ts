import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RequestEmployeeUseCase } from '../../application/usecases/request-employee-use-case';
import { CreateEmployeeAdapter } from '../../infra/adapters/create-employee-adapter';
import { CreateEmployeeDTO } from '../../infra/validators/dtos/create-employee-dto';

@Controller('employees')
export class EmployeeController {
  constructor(
    private readonly requestEmployeeUseCase: RequestEmployeeUseCase,
  ) {}

  @Post()
  async createEmployee(@Body() employeeData: CreateEmployeeDTO) {
    const employee = CreateEmployeeAdapter.toEntity(employeeData);
    return this.requestEmployeeUseCase.createEmployee(
      employee.name,
      employee.position,
      employee.salary,
    );
  }

  @Get(':id')
  async getEmployee(@Param('id') id: string) {
    return this.requestEmployeeUseCase.getEmployee(id);
  }
}
