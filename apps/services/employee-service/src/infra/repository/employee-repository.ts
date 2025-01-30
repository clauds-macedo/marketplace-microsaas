import { Injectable } from '@nestjs/common';
import { Employee } from '../../domain/entities/employee';
import { IEmployeeRepository } from '../../domain/repositories/employee-repository';

@Injectable()
export class EmployeeRepository implements IEmployeeRepository {
  private employees: Employee[] = [];

  async create(employee: Employee): Promise<Employee> {
    this.employees.push(employee);
    console.log(this.employees)
    return employee;
  }

  async findById(id: string): Promise<Employee | null> {
    return this.employees.find((emp) => emp.id === id) || null;
  }

  async findAll(): Promise<Employee[]> {
    return this.employees;
  }
}
