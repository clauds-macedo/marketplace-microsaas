import { Employee } from '../entities/Employee';

export interface IEmployeeRepository {
  create(employee: Employee): Promise<Employee>;
  findById(id: string): Promise<Employee | null>;
  findAll(): Promise<Employee[]>;
}
