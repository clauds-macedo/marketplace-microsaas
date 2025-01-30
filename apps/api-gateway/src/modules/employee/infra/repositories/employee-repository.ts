import { Injectable } from '@nestjs/common';
import { Employee } from '../../domain/entities/Employee';
import { IEmployeeRepository } from '../../domain/repositories/employee-repository';

@Injectable()
export class EmployeeRepository implements IEmployeeRepository {
  private employees: Employee[] = [];

  async create(employee: Employee): Promise<Employee> {
    this.employees.push(employee);
    return employee;
  }

  async findById(id: string): Promise<Employee | null> {
    return this.employees.find((employee) => employee.id === id) || null;
  }

  async findAll(): Promise<Employee[]> {
    return this.employees;
  }
}
