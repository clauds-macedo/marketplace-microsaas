import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateEmployeeDTO } from '../../infra/validators/dtos/create-employee-dto';

@Injectable()
export class RequestEmployeeUseCase {
  constructor(
    @Inject('EMPLOYEE_SERVICE') private employeeService: ClientProxy,
  ) {}

  async createEmployee(employeeData: CreateEmployeeDTO) {
    console.log('🚀 Enviando mensagem para Employee Service:', employeeData);
    console.log({data: employeeData})
    try {
      const response = this.employeeService
        .send({ pattern: 'create_employee' }, { data: employeeData })

      return response;
    } catch (e) {
      console.error('❌ Erro ao enviar mensagem para Employee Service:', e);
      return { status: 'error', message: e.message };
    }
  }

  async getEmployee(id: string) {
    try {
      const response = this.employeeService.send(
        { pattern: 'get_employee' },
        { data: id },
      );

      return response;
    } catch (e) {
      console.error('❌ Erro ao buscar funcionário:', e);
      return { status: 'error', message: e.message };
    }
  }
}
