import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { CreateEmployeeDTO } from '../../infra/validators/dtos/create-employee-dto';

@Injectable()
export class RequestEmployeeUseCase {
  constructor(
    @Inject('EMPLOYEE_SERVICE') private employeeService: ClientProxy,
  ) {}

  @EventPattern('create_employee')
  async createEmployee(employeeData: CreateEmployeeDTO) {
    console.log('🚀 Enviando mensagem para Employee Service:', employeeData);
    try {
      this.employeeService.emit('create_employee', employeeData);

      return { employeeData };
    } catch (e) {
      console.error('❌ Erro ao enviar mensagem para Employee Service:', e);
      return { status: 'error', message: e.message };
    }
  }

  async getEmployee(id: string) {
    try {
      const response = this.employeeService.emit('get_employee', id);

      return response;
    } catch (e) {
      console.error('❌ Erro ao buscar funcionário:', e);
      return { status: 'error', message: e.message };
    }
  }
}
