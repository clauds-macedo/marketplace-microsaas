import { Employee } from '../../domain/entities/Employee';
import { IEmployeeRepository } from '../../domain/repositories/employee-repository';
export declare class EmployeeRepository implements IEmployeeRepository {
    private employees;
    create(employee: Employee): Promise<Employee>;
    findById(id: string): Promise<Employee | null>;
    findAll(): Promise<Employee[]>;
}
