import { Employee } from '../../domain/entities/Employee';
import { IEmployeeRepository } from '../repositories/employee-repository';

export class GetEmployeeUseCase {
  constructor(private employeeRepository: IEmployeeRepository) {}

  async execute(id: string): Promise<Employee | null> {
    return this.employeeRepository.findById(id);
  }
}
