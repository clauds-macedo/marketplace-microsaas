import { Employee } from '../entities/employee';
import { IEmployeeRepository } from '../repositories/employee-repository';

export class CreateEmployeeUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  async execute(
    name: string,
    position: string,
    salary: number,
  ): Promise<Employee> {
    const employee = Employee.create({ name, position, salary });
    return this.employeeRepository.create(employee);
  }
}
