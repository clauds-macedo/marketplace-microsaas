import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { RequestEmployeeUseCase } from '../../application/usecases/request-employee-use-case';

@Controller('employees')
export class EmployeeController {
  constructor(
    @Inject('EMPLOYEE_SERVICE') private employeeService: ClientProxy,
    private readonly requestEmployeeUseCase: RequestEmployeeUseCase,
  ) {}

  @Post()
  @MessagePattern('create_employee')
  async createEmployee(
    @Payload() payload: { name: string; position: string; salary: number },
  ) {
    console.log('📩 Evento recebido no Employee Service:', payload);

    if (!payload?.name || !payload?.position || !payload?.salary) {
      throw new Error('❌ Dados inválidos recebidos.');
    }

    return {
      status: 'created',
      employee: await this.requestEmployeeUseCase.createEmployee(payload),
    };
  }

  @Get(':id')
  async getEmployee(@Param('id') id: string) {
    return this.requestEmployeeUseCase.getEmployee(id);
  }
}
