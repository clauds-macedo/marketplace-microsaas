import { Employee, IEmployee } from '../entities/employee';
import { IEmployeeRepository } from '../repositories/employee-repository';

export class CreateEmployeeUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  async execute({
    name,
    position,
    salary,
  }: Omit<IEmployee, 'id'>): Promise<Employee> {
    const employee = Employee.create({ name, position, salary });
    return this.employeeRepository.create(employee);
  }
}
