import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RequestEmployeeUseCase {
  constructor(
    @Inject('EMPLOYEE_SERVICE') private employeeService: ClientProxy,
  ) {}

  async createEmployee(name: string, position: string, salary: number) {
    const data = this.employeeService.send('create_employee', {
      name,
      position,
      salary,
    });
    return { status: 'success', data };
  }

  async getEmployee(id: string) {
    return this.employeeService.send('get_employee', id);
  }
}
